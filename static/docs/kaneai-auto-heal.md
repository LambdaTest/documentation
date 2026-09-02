# Auto-Heal in KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Auto-Heal automatically repairs broken element locators (IDs, XPaths, CSS selectors) at runtime, so your KaneAI-generated tests keep passing when the application UI changes.

Instead of failing the test the moment a locator breaks, KaneAI finds a new locator at runtime by re-using the original natural language instruction that generated the step. KaneAI generates these scripts across multiple languages and frameworks from natural language instructions, and Auto-Heal adds a runtime reliability layer on top.

## How It Works

Auto-Heal recovers a broken step in two stages, then falls back to visual matching where the DOM is not enough.

### Multi-Locator Fallback

- Every element KaneAI identifies is generated with **multiple locators** (XPath, CSS, ID, and others).
- During execution on HyperExecute, if the primary locator fails, the script tries the fallback locators in priority order, ranked by confidence score.

### Natural Language Locator Healing

- If all locators fail, KaneAI re-evaluates the **original natural language instruction** that generated the step.
- It re-parses the instruction with context from nearby elements, page structure, and DOM hierarchy, then rebuilds the locator at runtime from the intent (for example, "Click on the 'Submit' button").
- The step continues without manual intervention.

### Visual Query Fallback

- When a locator cannot be determined from the DOM, KaneAI uses **visual queries** to identify the element by its appearance and relative position.

### Scope

Auto-Heal applies to any command that requires an element locator, such as **Click**, **Type**, or **Hover**.

## Human-in-the-Loop Review

Self-heal and agent-driven test modifications are surfaced for human review before they become permanent. When KaneAI adapts a locator or refactors a step, the change is captured with a before/after diff and an attributed audit-log entry. A reviewer can accept, reject, or edit the adaptation from the test summary; changes are never silently committed. Confidence-scored element matching blocks low-confidence actions, and every accepted or rejected modification is recorded in Audit Logs for compliance.

## Benefits

Auto-Heal offers the following benefits for your test suite:

- **Reduced test maintenance:** You do not manually update locators when the application UI changes.
- **Increased stability:** Minor DOM updates or attribute changes are less likely to cause flaky tests.
- **Context-aware healing:** Recovery uses the original intent behind the instruction, not just the stored locators.
- **Faster resolution with HyperExecute:** Healing runs in real time during execution.
- **Lower CI/CD failure rate:** Test cases stay green more consistently across frequent app changes.

## Roadmap

The following capabilities are planned and not yet available:

- **Detailed healing reports:** Reporting of healed locators, fallback paths taken, and suggestions for locator improvements.
- **Auto-update healed locators:** Automatically writing auto-healed locators back into a new version of the KaneAI-generated test script.

## Video Explanation

Watch this walkthrough to see Auto-Heal in action:

**[Watch the Demo: How Auto-Heal Works in KaneAI with HyperExecute](https://app.trupeer.ai/view?slug=R9mcuH)**

The video walkthrough covers:
- How KaneAI generates scripts with fallback locators.
- A demo of locator failure and Auto-Heal in action.
- How KaneAI finds new locators using the original instruction.

## Next Steps

Continue with these guides:

- [Auto Healing](/support/docs/auto-healing/): Auto-heal for Selenium web automation tests.
- [Playwright Auto Healing](/support/docs/playwright-auto-healing/): Auto-heal for Playwright web automation tests.
- [Smart Heal Appium](/support/docs/smart-heal-appium/): AI-powered self-healing for mobile app automation on real devices.
- [HyperExecute Auto Healing](/support/docs/hyperexecute-auto-healing/): Auto-heal for tests executed via HyperExecute.
