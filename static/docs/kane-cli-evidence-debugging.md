# Debugging a Failed Run from its Pack

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The pack is the fastest way to understand a failure, because everything is in one place and attributed per step.

## The four steps

1. **Open the pack.** Run `kane-cli evidence serve ` and open the `viewer` URL.
2. **Go to the failed step.** The run overview marks it. The failure record shows the error message and the page state at the moment of failure.
3. **Check the step's console and network activity.** Logs are sliced per step, so you see exactly what the browser logged and requested while that step ran. A 4xx or 5xx response, or a JS error here, usually explains the failure.
4. **Look at the annotated screenshot.** It highlights the element the agent was acting on, which makes "clicked the wrong thing" and "element was not there" failures obvious.

## Reading a failure record

A failed or broken step normally carries its own `failure.yaml` with the error, the page state at failure, and references into the console and network logs. The pack root carries a `failure.yaml` index that rolls those up, so you can see every failure in the run without opening each step.

A record must carry evidence of what went wrong: an `error.message`, or both an `expected` and an `actual` value. It may carry both.

## `failed` or `broken`

The verdict tells you where to look first.

| Verdict | What it means | Where to look |
|---|---|---|
| `failed` | The oracle was evaluated and the product was wrong. | The assertion and the page state. This is a candidate defect. |
| `broken` | The oracle could not be evaluated, because of an environment, infrastructure, or test fault. | The network log and the run log. The product may be fine. |

Treating these as one bucket is how a flaky environment gets filed as a product bug. The split exists so it does not.

## Working from the command line

A sealed pack is a zip, so you do not need the viewer to answer a quick question:

```bash
# list everything in the pack
unzip -l <execution_id>.evidence

# print the run manifest
unzip -p <execution_id>.evidence run.yaml

# print one test's result
unzip -p <execution_id>.evidence tests/<test-id>/result.yaml
```

## When the pack itself looks wrong

If a pack will not open, run [`kane-cli evidence validate`](/support/docs/kane-cli-evidence-validate/). An unsealed pack, for example from a run that was killed hard, is checked for structure only and can still report valid. A truncated pack cannot be read at all. Either way the session directory still holds that run's pack:

```text
~/.testmuai/kaneai/sessions/<session-id>/evidence/
```

## Next steps

- [Pack structure](/support/docs/kane-cli-evidence-pack-structure/) — where each artifact lives.
- [Validating packs](/support/docs/kane-cli-evidence-validate/) — check a suspect pack.
