---
id: rook-web-result-details
title: Rook Web UI — Results and Artefacts
sidebar_label: Results & Artefacts
description: Investigate one Rook attempt using Request, Response, Verdict, and Artefacts alongside criterion-level evidence and verification gaps.
slug: rook-web-result-details/
canonical: https://www.testmuai.com/support/docs/rook-web-result-details/
---

# Results and Artefacts

Open **Projects → your project → your agent → Runs → run → scenario ID**. This page is the evidence for a scenario attempt in that run, not the current scenario definition. Use it to decide whether a failure belongs to the target, the invocation, the test expectation, or missing verification evidence.

The header shows the scenario outcome and available criterion counts, compliance, latency, and turns. The **RUN** banner identifies the execution; **Open full run** returns to its details.

## Request: What Was Sent?

<img loading="lazy" src={require('../assets/images/rook/rook-web-result.png').default} alt="Rook Request tab showing request.json beside the four acceptance criteria and their expected, achieved, and evidence fields" className="doc_img"/>

Read <code>request.json</code> to confirm the scenario ID, attempt number, goal, setup messages, selected profile, and invoked script. In the example, SC-002 sent <code>please look at T-1043</code> through <code>local-triage</code>.

If the goal or profile is wrong, investigate the scenario and run plan before blaming the agent's answer. A missing request is explicitly reported as **No request recorded for this attempt**.

## Response: What Came Back?

<img loading="lazy" src={require('../assets/images/rook/rook-web-result-response.png').default} alt="Rook Response tab with a user-agent transcript and response.json containing the output and recorded invocation data" className="doc_img"/>

When available, the transcript presents the user/agent exchange above <code>response.json</code>. Read the output, raw response, reported tool calls, latency, turns, artifacts, and observation notes that this invocation recorded. Scroll the file viewer to read long lines and records; the screenshot shows only the current viewport.

The sample reply says the ticket was triaged, and the hook also recorded tool-call arguments. Those are different kinds of evidence. A textual claim that an action happened is not independently verified external state. Likewise, the response's filesystem note says the filesystem was not observed: an empty change list cannot prove that no files changed.

## Verdict: How Was It Judged?

<img loading="lazy" src={require('../assets/images/rook/rook-web-result-verdict.png').default} alt="Rook Verdict tab showing the recorded verdict.yaml next to the readable acceptance-criteria cards" className="doc_img"/>

**Verdict** displays the saved <code>verdict.yaml</code>. Use it when you need the recorded evaluation details behind the rendered cards, rather than just the overall badge. The file viewer's copy button copies its content; inspect it for sensitive data before sharing.

The **Acceptance criteria** cards remain beside the tabs. For every criterion, read:

- **Expected:** the requirement being checked.
- **Achieved:** the recorded assessment of the actual outcome.
- **Evidence:** the observation supporting that assessment.
- **Check:** confidence when provided; confidence is not an additional test result.

Scroll down to review every card. In this example, all four criteria passed; a screenshot of the first cards alone is not the whole verdict. If the verdict artifact cannot be loaded, Rook reports the unavailable criteria rather than proving that zero criteria existed.

Use [Verdicts and Reports](/support/docs/agent-assurance-results-and-evidence/) to interpret **Pass**, **Fail**, **Partial**, and **Unable to Verify**. An inability to verify is not a pass and may require better collection or access rather than a change to the agent's reasoning.

## Artefacts: What Files Support the Result?

<img loading="lazy" src={require('../assets/images/rook/rook-web-result-artefacts.png').default} alt="Rook Artefacts tab listing judge-working.json with a View button while criterion evidence remains visible" className="doc_img"/>

Click **View** beside a file to open it. The sample has an evidence file, <code>judge-working.json</code>. Where both kinds are recorded, **Output artefacts** and **Evidence artefacts** let you switch between agent-produced files and supporting evaluation evidence. The chooser is unnecessary when only one kind is present.

**No artefacts recorded for this attempt** means no such files were attached. It does not erase the Request, Response, or Verdict records on the other tabs. If you expected a screenshot, trace, or generated file, check that the profile returned or collected it and that uploads completed. See [Profiles and Hooks](/support/docs/rook-profiles-and-hooks/).

## Share the Right Context

The selected result tab is reflected in the URL, so copying the browser URL preserves that tab on reload. Recipients still need access to the same environment and project. Do not substitute a local run-directory ID into a hosted URL or share a loopback viewer link as though it were public.

For a useful bug report, include the run URL, scenario ID, criterion that disagrees with the observed behavior, and a sanitized evidence excerpt. Then return to [Run Details](/support/docs/rook-web-run-details/) or use [Insights](/support/docs/rook-web-insights/) to look for a broader pattern.
