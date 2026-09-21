#!/usr/bin/env bash
# Reviewed-suite release gate. Requires Rook, bash, jq, and tar.
set -euo pipefail
set +x
umask 077

: "${LT_USERNAME:?Set LT_USERNAME through your CI secret store}"
: "${LT_ACCESS_KEY:?Set LT_ACCESS_KEY through your CI secret store}"
: "${ROOK_HOME:?Set ROOK_HOME to an isolated directory outside the checkout}"
: "${ROOK_PROJECT_ID:?Set the reviewed project ID}"
: "${ROOK_AGENT_ID:?Set the reviewed agent ID}"
: "${ROOK_PROFILE:?Set the reviewed profile name}"
: "${ROOK_SCENARIO_IDS:?Set a comma-separated list of reviewed scenario IDs}"

for id in "$ROOK_PROJECT_ID" "$ROOK_AGENT_ID"; do
  [[ "$id" =~ ^[a-zA-Z0-9_-]+$ ]] || { echo 'Invalid project/agent ID' >&2; exit 1; }
done
[[ "$ROOK_SCENARIO_IDS" =~ ^[a-zA-Z0-9_-]+(,[a-zA-Z0-9_-]+)*$ ]] || {
  echo 'Scenario IDs must be comma-separated, without spaces or empty entries' >&2; exit 1;
}
expected=$(jq -en --arg ids "$ROOK_SCENARIO_IDS" '
  ($ids | split(",")) as $list |
  if ($list | unique | length) == ($list | length)
  then ($list | length) else error("Duplicate scenario IDs") end')
for dependency in rook jq tar; do command -v "$dependency" >/dev/null; done
agent_dir=".testmuai/rook/projects/$ROOK_PROJECT_ID/agents/$ROOK_AGENT_ID"
test -d "$agent_dir" || { echo "Missing committed agent definitions: $agent_dir" >&2; exit 1; }

results=${ROOK_RESULTS_DIR:-rook-results}
mkdir -p "$(dirname "$results")"
# Refuse a reused output directory: old results must never pass a new job.
mkdir "$results"
preserve_evidence() {
  code=$?
  trap - EXIT
  if test -d "$agent_dir/runs"; then
    tar -czf "$results/evidence.tar.gz" "$agent_dir/runs" || code=1
  fi
  exit "$code"
}
trap preserve_evidence EXIT

rook --version
rook project use "$ROOK_PROJECT_ID"
rook agent use "$ROOK_AGENT_ID"
rook profile use "$ROOK_PROFILE"
# No discovery or generation here: sync only the reviewed checkout.
rook sync --agent "$ROOK_AGENT_ID"

run_args=(run --only "$ROOK_SCENARIO_IDS" --profile "$ROOK_PROFILE"
  --concurrency 1 --name "${ROOK_RUN_NAME:-ci-release-gate}")
while IFS= read -r rule; do
  test -z "$rule" || run_args+=(--allow "$rule")
done <<< "${ROOK_ALLOW_RULES:-}"

run_code=0
rook "${run_args[@]}" --json > "$results/run.json" || run_code=$?
if test "$run_code" -ne 0; then
  echo "Rook command failed (exit $run_code); inspect stderr and retained evidence." >&2
  exit "$run_code"
fi
jq -e '.ok == true and .halted == false and .discarded == null
  and (.run_id | type == "string" and length > 0)
  and (.report | type == "object")' "$results/run.json" >/dev/null
run_id=$(jq -er '.run_id' "$results/run.json")
rook report "$run_id" --json > "$results/report.json"
jq -e --arg id "$run_id" --argjson expected "$expected" '
  .run_id == $id and .report.run_id == $id
  and (.dir | type == "string" and length > 0)
  and (.report.totals | [.planned, .executed, .passed, .failed,
    .unverifiable, .unjudged, .not_run, .unrunnable] |
    all(.[]; type == "number" and . >= 0 and floor == .))
  and (.report.totals | .planned == $expected
    and .planned == (.executed + .not_run)
    and .executed == (.passed + .failed + .unverifiable + .unjudged))
  and (.report.clusters | type == "array")
' "$results/report.json" >/dev/null
jq -r '.report.totals |
  "Pass: \(.passed) | Fail: \(.failed) | Unable to Verify: \(.unverifiable)",
  "Unjudged: \(.unjudged) | Not run: \(.not_run) | Unrunnable: \(.unrunnable)"' \
  "$results/report.json"
printf 'Run ID: %s\n' "$run_id"
# Strict release policy: uncertainty is a blocked gate, not a fabricated Fail verdict.
jq -e --argjson expected "$expected" '
  (.report.totals | .executed == $expected and .passed == $expected
    and .failed == 0 and .unverifiable == 0 and .unjudged == 0
    and .not_run == 0 and .unrunnable == 0)
  and ([.report.clusters[] | select(.kind == "compromised")] | length == 0)
' "$results/report.json" >/dev/null
echo 'Rook release gate passed.'
