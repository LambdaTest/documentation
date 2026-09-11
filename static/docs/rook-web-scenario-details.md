# Scenario Details

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Open **Projects → your project → your agent → Scenarios → scenario ID**. This page explains the test definition: what Rook asks the agent to do and how it intends to judge the outcome. It is different from the [result of one attempt](/support/docs/rook-web-result-details/).

## Review Before Running

Start with **Goal sent to the agent**. In this example it is please look at T-1043. Next read all **Acceptance criteria**. The four checks require the correct final answer, S1 severity, assignment to platform, and a customer reply without a fix-time promise.

Each criterion shows its ID, statement, and check type, such as regex or llm_judge. These are planned checks, not passing verdicts. Confirm that the target profile will expose enough evidence to judge them, especially criteria about tool calls or external state changes.

The **Definition** panel contains the feature, class, category, criterion count, repeat count, timeout when recorded, multi-turn setting, and input/output types where specified. A missing timeout display does not promise unlimited execution; check the CLI and profile configuration.

## Optional Sections

A scenario can also record **Preconditions**, **Forbidden** behavior, **MCP expectations**, and **Exercises tools**. Excluded scenarios show their exclusion reason. These sections appear only when present in the definition; their absence in the screenshot is expected for this fixture.

MCP expectations describe what should happen. If the invocation cannot observe the actual MCP calls, that expectation is not automatically verified. See [MCP Servers](/support/docs/agent-assurance-mcp/) and [Results and Evidence](/support/docs/agent-assurance-results-and-evidence/) for handling verification gaps.

If Rook cannot read the definition artifact, the page reports the missing criteria information. That is different from a successfully read definition with zero acceptance criteria.

## Follow History to the Evidence

The header badge, such as **passed in latest run**, is latest-result context. It is not a permanent property of the scenario. **History** lists recorded runs; click a run ID to open that run, then its scenario row to reach the attempt's evidence. If it has never run, the page says so.

**Stage history count discrepancy**
On September 11, 2026, this sample's History row displayed **0 pass** despite its passing status and four passing criteria on the result page. Follow the history link and verify the actual result; do not interpret that history count as a failed test.

## Change or Run the Scenario

Edit or regenerate the definition in the CLI workspace, review it, and sync. Use [Run Tests](/support/docs/agent-assurance-run-tests/) for a scoped execution. Opening this page or a history link does not invoke the target.

Next: [Run Details and Plan](/support/docs/rook-web-run-details/) → [Results and Artefacts](/support/docs/rook-web-result-details/).
