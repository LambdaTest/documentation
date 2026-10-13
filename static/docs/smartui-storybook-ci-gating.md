# Fail CI on Visual Changes with SmartUI Storybook

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

By default, the SmartUI Storybook CLI exits with code `0` when a build finishes, even if SmartUI found visual changes. You then review the changes in SmartUI or through the GitHub status check.

From version `1.3.0` of `@lambdatest/smartui-storybook`, the CLI can also make the decision in your pipeline:

- **`--fail-on`** sets a policy. The CLI exits with code `4` when the build breaks that policy.
- **`--fetch-results`** writes the build results to a JSON file that later steps can read.
- **Exit codes** `0` to `5` tell you what happened, and the CLI prints a one-line hint for every non-zero code.

These options work for both a static build directory and a Storybook URL. If you have not set up SmartUI Storybook yet, start with [Storybook Integration](/support/docs/smart-ui-storybook/).

## Prerequisites

- `@lambdatest/smartui-storybook` version `1.3.0` or later. Run `smartui --version` to check.
- A SmartUI project and its `PROJECT_TOKEN`.
- For a Storybook URL, your `LT_USERNAME` and `LT_ACCESS_KEY`.

## Fail the job with --fail-on

`--fail-on` takes one of four policies. Each policy decides which screenshot statuses fail the build.

| Policy | The CLI exits with code `4` when the build has at least one screenshot that is | New stories |
|---|---|---|
| `none` (default) | Never. The visual result does not change the exit code. | Pass |
| `unreviewed` | Changes Found, Under Screening, New or Rejected | Fail |
| `changes` | Changes Found or Rejected | Pass |
| `rejected` | Rejected | Pass |

- **Approved** screenshots never fail a policy.
- A **baseline build** always passes, whatever the policy.
- `--fail-on` with no value means `unreviewed`.
- Values are not case sensitive, so `Changes` and `changes` are the same.
- An unknown value stops the CLI with exit code `2` before the build starts.

```bash
smartui storybook ./storybook-static --config .smartui.json --fail-on changes
```

### Where to set the policy

You can set the policy in three places. When more than one is set, the first one in this list wins:

1. The `--fail-on` flag.
2. The `SMARTUI_FAIL_ON` environment variable.
3. The `failOn` key inside the `storybook` block of your config file. This is read only when you pass the file with `--config`.

```json title=".smartui.json"
{
"storybook": {
"browsers": ["chrome", "firefox"],
"viewports": [[1280, 720]],
"failOn": "changes"
}
}
```

### Put the directory or URL before the flags

`--fail-on` and `--fetch-results` both take an optional value, so the CLI reads the word after them as that value. This command fails with exit code `2` and `missing required argument 'url|directory'`, because `./storybook-static` is read as the policy:

```bash
# Wrong: ./storybook-static is taken as the --fail-on value
smartui storybook --fail-on ./storybook-static
```

Put the directory or URL straight after `storybook`, or write the value with an equals sign:

```bash
smartui storybook ./storybook-static --fail-on changes
smartui storybook --fail-on=changes ./storybook-static
```

### How screenshots are counted

The CLI checks the policy against the list of screenshots in the finished build:

- A screenshot that SmartUI could not compare, because it has no matching screenshot in the baseline, counts as **New**. This includes new stories and new browser or viewport combinations.
- Under `unreviewed`, any New screenshot fails the check. Use `changes` if new stories should not fail the job.

When the check runs, the CLI prints one verdict line, for example:

```text
[smartui] Visual check FAILED (policy: changes): 2 changes found, 0 under screening, 1 new, 0 rejected, 37 approved. Exit code 4. Review the build in SmartUI: https://smartui.lambdatest.com/builds/<project-id>?searchBuild=feature-login
```

The other verdict lines start with `Visual check PASSED`, `Visual check UNKNOWN` (the CLI stopped waiting, exit code `5`) and `Visual check ERROR` (the build finished with 0 screenshots, exit code `1`). No verdict line is printed when the policy is `none`.

### After the check fails

Review the build in SmartUI and approve or reject the changes. Whether approved screenshots become the reference for the next build depends on your project's baseline settings. See [Baseline Management](/support/docs/smartui-baseline-management/).

To run the same commit again, pass `--force-rebuild`. Without it, the CLI finds the earlier build for this commit and branch and exits with code `3`.

## Save the results with --fetch-results

`--fetch-results` writes the result of the build to a JSON file when the CLI stops waiting for the build.

```bash
smartui storybook ./storybook-static --config .smartui.json --fetch-results smartui-results.json
```

- With no value, the file is `results.json`.
- The file name must end in `.json`, otherwise the CLI exits with code `2`.
- The path is relative to the folder you run the CLI from. The folder must already exist. If the file cannot be written, the CLI prints an error but the exit code does not change.
- The file is written even when the CLI stops waiting before the build finishes. In that case `verdict` is `unknown` and `counts` is `null`.
- The file is **not** written when the CLI stops before the build starts, for example on an invalid `PROJECT_TOKEN`, a failed upload, or exit codes `2` and `3`. Make later steps handle a missing file.
- The file never contains your project token.
- `--fetch-results` works without `--fail-on`.

Example file:

```json title="smartui-results.json"
{
"buildId": "21887f64-4a69-44c9-92ec-b12f514ad9b9",
"buildName": "feature-login",
"buildUrl": "https://smartui.lambdatest.com/builds/<project-id>?searchBuild=feature-login",
"baseline": false,
"policy": "changes",
"verdict": "failed",
"counts": {
"total": 40,
"approved": 37,
"changesFound": 2,
"underScreening": 0,
"rejected": 0,
"new": 1
},
"screenshots": [
{
"name": "Example/Button: Primary",
"browser": "chrome",
"viewport": "1280 x 720",
"status": "changesFound",
"mismatch": 1.42
}
]
}
```

| Field | Description |
|---|---|
| `buildId`, `buildName`, `buildUrl` | The SmartUI build. |
| `baseline` | `true` if this build is a baseline build. |
| `policy` | The policy in effect: `none`, `unreviewed`, `changes` or `rejected`. |
| `verdict` | `passed`, `failed`, `error` (a non-baseline build finished with 0 screenshots) or `unknown` (the CLI stopped waiting before the build finished). |
| `counts` | Number of screenshots per status. `total` is the number of screenshots in the build. `new` includes screenshots that have no comparison. |
| `screenshots` | One entry per compared screenshot, with `name`, `browser`, `viewport`, `status` and `mismatch` (the mismatch percentage). `status` is `approved`, `changesFound`, `underScreening`, `rejected` or `new`. |

- `screenshots` lists only screenshots that SmartUI compared. New screenshots without a comparison are counted in `counts.new` but are not listed, so the list can be shorter than `counts.total`.
- For a baseline build, `screenshots` is empty and every count except `total` is `0`.

To print the verdict and counts in a later step:

```bash
jq -r '.verdict, .counts' smartui-results.json
```

## Exit codes

When the CLI exits with a non-zero code, its last line is a short hint that starts with `[smartui] Exit code`, for example:

```text
[smartui] Exit code 4: visual check failed under --fail-on. Review the changes in SmartUI (build link above), approve or reject them, then re-run.
```

| Code | Meaning | When it happens | What to do |
|---|---|---|---|
| `0` | Success | The build finished and passed the `--fail-on` policy. Without `--fail-on`, also when the build has changes, and when a static build run stops waiting before the build finished. | None |
| `1` | Error | SmartUI could not run or finish the build: config file, `PROJECT_TOKEN`, upload, render request or tunnel. Also, under `--fail-on`, a non-baseline build that finished with 0 screenshots. For a Storybook URL, also a failed build or a build still running after two hours, even under `--fail-on`. | Read the `[smartui] Error` lines above the hint. They name the step that failed: config file, `PROJECT_TOKEN`, upload, render or tunnel. |
| `2` | Usage error | An unknown command or option, a missing argument, an invalid `--fail-on` value (from the flag, `SMARTUI_FAIL_ON` or `failOn`), a `--fetch-results` name that does not end in `.json`, or an empty `--buildName`. | Fix the command or the flag value. Run `smartui storybook --help` for the supported flags. |
| `3` | Build already exists | A build already exists for this commit and branch. | Pass `--force-rebuild` to build the same commit again. |
| `4` | Visual check failed | Only with `--fail-on`. The build broke the policy. | Review the changes in SmartUI from the build link, then approve or reject them. |
| `5` | No verdict | Only with `--fail-on`, for a static build directory. The CLI stopped waiting while the build was still running, or could not read the build status. | Open the build in SmartUI to see the result once it finishes. |

**Changes in version 1.3.0**
- Usage errors used to exit with code `1`. They now exit with code `2`. Errors in the content of the config file still exit with code `1`.
- Codes `4` and `5` are used only when a policy other than `none` is set. Without `--fail-on`, `SMARTUI_FAIL_ON` or `failOn`, the exit codes are the same as before.

For a Storybook URL, if you stop the CLI with `Ctrl+C` or your CI sends `SIGTERM`, the CLI closes the tunnel and exits with code `130` or `143`.

## How long the CLI waits for the build

| Input | How long the CLI waits | If the build is still running |
|---|---|---|
| Static build directory | About 30 minutes. The CLI checks the build status often at first, then once a minute. | With `--fail-on`: exit code `5`. Without it: exit code `0` and the message `Please check the build status on LambdaTest SmartUI.` |
| Storybook URL | Up to two hours, because the tunnel must stay open while SmartUI renders. | Exit code `1`. The CLI closes the tunnel, so stories that are still rendering fail. |

- The build keeps running in SmartUI after the CLI stops waiting. You can see the final result on the build page.
- If a non-baseline build finishes with 0 screenshots, `--fail-on` reports `Visual check ERROR` and exit code `1`, so an empty build never passes the check.

## CI examples

The examples below fail the job on visual changes (exit code `4`), let the job pass with a warning when there is no verdict yet (exit code `5`), and keep the results file. Change the handling of each code to suit your team.

GitHub Actions runs `run` steps with `bash -e`, so the script turns that off with `set +e` to read the exit code. On pull requests, the checkout is on a detached commit, so set `CURRENT_BRANCH` to record the build on the pull request branch.

```yaml title=".github/workflows/smartui-storybook.yml"
name: SmartUI Storybook
on: [pull_request]

jobs:
visual-tests:
runs-on: ubuntu-latest
steps:
- uses: actions/checkout@v4
- uses: actions/setup-node@v4
with:
node-version: 20
- run: npm ci
- run: npm run build-storybook
- run: npm install -g @lambdatest/smartui-storybook@latest

- name: SmartUI visual check
env:
PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}
CURRENT_BRANCH: ${{ github.head_ref }}
run: |
set +e
smartui storybook ./storybook-static --config .smartui.json --fail-on changes --fetch-results smartui-results.json
code=$?
set -e
case "$code" in
0) echo "Visual check passed" ;;
4) echo "::error::SmartUI found visual changes. Review the build in SmartUI."; exit 1 ;;
5) echo "::warning::SmartUI had no verdict before the CLI stopped waiting." ;;
*) echo "::error::SmartUI CLI failed with exit code $code"; exit "$code" ;;
esac

- name: Keep the results file
if: always()
uses: actions/upload-artifact@v4
with:
name: smartui-results
path: smartui-results.json
if-no-files-found: ignore
```

GitLab fails the job on any non-zero exit code. `allow_failure: exit_codes` marks the job as passed with a warning for the codes you list.

```yaml title=".gitlab-ci.yml"
smartui-storybook:
image: node:20
variables:
CURRENT_BRANCH: $CI_COMMIT_REF_NAME
script:
- npm ci
- npm run build-storybook
- npm install -g @lambdatest/smartui-storybook@latest
- smartui storybook ./storybook-static --config .smartui.json --fail-on changes --fetch-results smartui-results.json
allow_failure:
exit_codes:
- 5
artifacts:
when: always
paths:
- smartui-results.json
```

Store `PROJECT_TOKEN` as a masked CI/CD variable in your GitLab project settings.

`returnStatus: true` returns the exit code instead of failing the stage, so you can decide what each code means.

```groovy title="Jenkinsfile"
stage('SmartUI visual check') {
steps {
withCredentials([string(credentialsId: 'smartui-project-token', variable: 'PROJECT_TOKEN')]) {
script {
sh 'npm ci && npm run build-storybook'
sh 'npm install -g @lambdatest/smartui-storybook@latest'
def code = sh(returnStatus: true, script: 'smartui storybook ./storybook-static --config .smartui.json --fail-on changes --fetch-results smartui-results.json')
archiveArtifacts artifacts: 'smartui-results.json', allowEmptyArchive: true
if (code == 4) {
error('SmartUI found visual changes. Review the build in SmartUI.')
} else if (code == 5) {
unstable('SmartUI had no verdict before the CLI stopped waiting.')
} else if (code != 0) {
error("SmartUI CLI failed with exit code ${code}")
}
}
}
}
}
```

```bash
#!/usr/bin/env bash
smartui storybook ./storybook-static --config .smartui.json --fail-on changes --fetch-results smartui-results.json
code=$?

case "$code" in
0) echo "Visual check passed" ;;
4) echo "Visual changes found. Review the build in SmartUI."; exit 1 ;;
5) echo "No verdict yet. Check the build in SmartUI." ;;
*) echo "SmartUI CLI failed with exit code $code"; exit "$code" ;;
esac
```

## Troubleshooting

| Message or symptom | What it means | What to do |
|---|---|---|
| `missing required argument 'url\|directory'` with exit code `2` | `--fail-on` or `--fetch-results` took your directory or URL as its value. | Put the directory or URL straight after `storybook`, or use `--fail-on=changes`. |
| `invalid --fail-on value` | The policy from the flag, `SMARTUI_FAIL_ON` or `failOn` is not one of `none`, `unreviewed`, `changes` or `rejected`. | Fix the value where you set it. |
| `the file extension for --fetch-results must be .json` | The results file name does not end in `.json`. | Use a name such as `smartui-results.json`. |
| The job passes although SmartUI found changes | No policy is set, or the policy is `rejected`. | Add `--fail-on changes` or `--fail-on unreviewed`. |
| The job fails on every new story | The policy is `unreviewed`, which treats New screenshots as unreviewed. | Use `--fail-on changes`, or approve the new screenshots. |
| Exit code `5` on large static builds | The build took longer than the 30 minutes the CLI waits. | Check the build in SmartUI. To shorten the build, reduce browsers, viewports or `waitForTimeout`, or split the stories across several builds with `include` and `exclude`. Before you approve a filtered build, read [Filtered builds and your baseline](/support/docs/smartui-storybook-include-exclude/#filtered-builds-and-your-baseline). |
| Exit code `3` when you re-run the job | A build already exists for this commit and branch. | Pass `--force-rebuild`. |

## Related pages

- [Storybook Integration](/support/docs/smart-ui-storybook/)
- [Baseline Management](/support/docs/smartui-baseline-management/)
- [CLI Complete Reference](/support/docs/smartui-cli-complete-reference/)
