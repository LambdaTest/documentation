# Insights

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Open **Projects → your project → your agent → Insights**. This page summarizes recorded run data to help you decide what to investigate or test next. It is not a substitute for reading a particular run's evidence.

## Read Each Panel

| Panel | What it helps you investigate |
|---|---|
| **Pass rate across versions** | Reported run pass rates. When supplied, a comparison summary shows the rate change and newly failing or fixed scenarios. One run is explicitly not a trend. |
| **Failures by tool** | Tools associated with recorded failures. Open the affected runs to inspect calls, arguments, and evidence before attributing the cause. |
| **Coverage gaps by category** | Categories with gaps in recorded passing coverage. This does not enumerate features for which no scenarios were generated. |
| **Unverifiable expectations** | Recorded expectations that could not be checked, with scenario links when supplied. Investigate evidence collection and verifier access. |
| **Adversarial pressure** | Recorded adversarial attempts and compromises. No attempts means adversarial resilience has not been established. |

For the verified sample, **No adversarial scenarios have run** is accurate: the smoke test exercised one functional happy-path case. Likewise, **No tool failures recorded** does not prove every tool works in every situation.

## Turn a Summary into an Action

Start with [Features](/support/docs/rook-web-features/) to find behaviors that lack scenarios. Then use [Scenarios → Result → never run](/support/docs/rook-web-scenarios/) to find generated tests without an execution. If Insights identifies unverifiable expectations, open those scenarios and follow their History to the specific result before changing hooks or expectations.

To investigate a regression, compare the underlying runs' scenario selection, agent version, profile revision, and target conditions. A changed pass percentage alone cannot tell you which of those changed.

**Stage aggregate limitations**
On September 11, 2026, the sample chart displayed **1%** for a **1 of 1 passed** execution and a **v1 · v1** label. The current chart's version prefix is not reliable evidence of the version each run used; read **Agent version** on Runs instead.

The sample also displayed **No category gaps** despite three discovered features having no scenarios and one generated scenario never having run. Treat these messages as summaries of the data returned to this page—not proof of complete agent coverage. Cross-check Features, Scenarios, and actual run counts.

## When There Is No Trend

**Nothing to trend yet** means no trend data is available. Check the page's readiness hint, complete the necessary profile/scenario setup, and upload a reviewed normal run. Test-mode local runs do not populate this shared view. With one run, use its results as a baseline; multiple comparable executions are needed to assess change.

## Next Step

Use [Results and Artefacts](/support/docs/rook-web-result-details/) for the evidence behind a finding, or [Run Tests](/support/docs/agent-assurance-run-tests/) to plan the next scoped execution.
