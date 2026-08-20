---
id: kane-cli-evidence-debugging
title: Debugging a Failed Run from its Pack
sidebar_label: Debugging from a Pack
description: "Use a kane-cli evidence pack to find the cause of a failed run: the failed step, its per-step console and network logs, the annotated screenshot, and the failed versus broken split."
keywords:
  - debug failed test kane cli
  - evidence pack debugging
  - failure.yaml
  - failed vs broken
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-evidence-debugging/
site_name: TestMu AI
slug: kane-cli-evidence-debugging/
canonical: https://www.testmuai.com/support/docs/kane-cli-evidence-debugging/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Kane CLI",
          "item": "https://www.testmuai.com/support/docs/kane-cli-introduction/"
        }]
      })
    }}
></script>

The pack is the fastest way to understand a failure, because everything is in one place and attributed per step.

## The four steps

1. **Open the pack.** Accept the post-run offer, or run `kane-cli evidence serve <pack>` and open the `viewer` URL.
2. **Go to the failed step.** The run overview marks it. The failure record shows the error message and the page state at the moment of failure.
3. **Check the step's console and network activity.** Logs are sliced per step, so you see exactly what the browser logged and requested while that step ran. A 4xx or 5xx response, or a JS error here, usually explains the failure.
4. **Look at the annotated screenshot.** It highlights the element the agent was acting on, which makes "clicked the wrong thing" and "element was not there" failures obvious.

## Reading a failure record

A failed or broken step carries its own `failure.yaml` with the error, the page state at failure, and references into the console and network logs. The pack root carries a `failure.yaml` index that rolls those up, so you can see every failure in the run without opening each step.

A record holds either an error message **or** an expected and actual pair, never both.

## `failed` or `broken`

The verdict tells you where to look first.

| Verdict | What it means | Where to look |
|---|---|---|
| `failed` | The oracle was evaluated and the product was wrong. | The assertion and the page state. This is a candidate defect. |
| `broken` | The oracle could not be evaluated, because of an environment, infrastructure, or test fault. | The network log and the run log. The product may be fine. |

Treating these as one bucket is how a flaky environment gets filed as a product bug. The split exists so it does not.

## Working from the command line

A pack is a zip, so you do not need the viewer to answer a quick question:

```bash
# list everything in the pack
unzip -l <execution_id>.evidence

# print the run manifest
unzip -p <execution_id>.evidence run.yaml

# print one test's result
unzip -p <execution_id>.evidence tests/<test-id>/result.yaml
```

## When the pack itself looks wrong

If a pack will not open, run [`kane-cli evidence validate`](/support/docs/kane-cli-evidence-validate/). An unsealed or truncated pack, for example from a run that was killed hard, reports as invalid, and the run's session directory still holds the raw logs:

```text
~/.testmuai/kaneai/sessions/<session-id>/evidence/
```

## Next steps

- [Pack structure](/support/docs/kane-cli-evidence-pack-structure/) — where each artifact lives.
- [Validating packs](/support/docs/kane-cli-evidence-validate/) — check a suspect pack.
