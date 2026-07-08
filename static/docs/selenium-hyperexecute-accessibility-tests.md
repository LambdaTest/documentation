# HyperExecute integration: Selenium accessibility automation

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

This page is the **HyperExecute** integration guide for **Accessibility Automation** when your tests use **Selenium**. It assumes you already run Selenium jobs on HyperExecute (YAML + CLI) and need the same **accessibility** session capabilities and reporting behavior on the grid, not a generic Selenium-only tutorial. For framework setup on local or other grids, start with **[Accessibility Automation](/support/docs/accessibility-automation/)** and the **[Selenium](/support/docs/accessibility-automation-test/)** setup doc.

**Scope:** Selenium test code + `hyperexecute.yaml` orchestration on HyperExecute. If the Accessibility tab never appears on sessions, confirm `accessibility: true` (and related caps) in the process HyperExecute actually runs, and that Accessibility is enabled for your organization. Contact support if needed.

## Prerequisites

- A valid HyperExecute YAML file
- HyperExecute CLI installed locally
- Your [TestMu AI Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/)
- A Selenium project that already runs on HyperExecute

## High-level flow (HyperExecute)

1. Keep your Selenium suite configured for **HyperExecute** (YAML, discovery, `testRunnerCommand`).
2. Enable **Accessibility** capabilities in the same session options you pass to `RemoteWebDriver` (or equivalent). HyperExecute forwards them like any other capability.
3. Trigger the job with the **HyperExecute CLI** using your YAML.
4. When the build finishes, open the session in the **Automation** dashboard and use the **Accessibility** tab for the report.

## Onboarding checklist (first HE + Accessibility run)

1. **Confirm Selenium on HyperExecute** already runs a green build **without** Accessibility (isolate grid/YAML issues first).
2. **Add the same capability keys** you would use locally: `accessibility: true`, optional `accessibility.wcagVersion`, `accessibility.bestPractice`, `accessibility.needsReview`, and either **`lambda-accessibility-scan`** hooks in code or **`accessibility.autoscan`** ([settings reference](/support/docs/accessibility-automation-settings/)).
3. **Propagate credentials** in the HyperExecute job the same way as your other HE runs (`LT_USERNAME` / `LT_ACCESS_KEY` in env or secrets).
4. **Run a short suite** (one class or smoke tag) so the HE dashboard shows a single session to inspect.
5. Open the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard) → session → **Accessibility** tab. If the tab is missing, verify the session capabilities in the build log.

## YAML and test code (integration point)

HyperExecute does **not** replace Selenium capabilities. It **orchestrates** the same test JAR or Node project. The integration work is making sure the command HyperExecute runs is the profile that sets accessibility caps. Ensure:

- Your **test process** still loads the code path that sets `accessibility` on `RemoteWebDriver` / options.
- **Discovery** in `hyperexecute.yaml` points at the same `mvn`/`gradle`/`npm` command you use locally for Accessibility runs.

Example pattern (illustrative only, adapt to your repo’s actual `runson`, `pre`, and `testRunnerCommand`):

```yaml
version: 0.1
runson: linux
testSuiteStep: 90
pre:
- npm install   # or mvn dependency:go-offline
testRunnerCommand: npm run test:a11y   # must invoke tests that set accessibility caps
```

If your team keeps caps in **environment-specific property files**, inject those files or env vars in `pre` or `env` blocks so CI matches local.

## When something fails

| Symptom | What to check |
|--------|----------------|
| HE green but no Accessibility tab | Session never received `accessibility: true`; confirm the command HyperExecute ran is the Accessibility-enabled profile. |
| Timeouts | Auto-scan on heavy SPAs increases duration; switch to hook-based scans for critical paths only. |

## Related docs

- [Accessibility Automation (Overview)](/support/docs/accessibility-automation/)
- [Selenium: Accessibility Automation setup](/support/docs/accessibility-automation-test/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/)
- [HyperExecute YAML parameters](/support/docs/hyperexecute-yaml-parameters/)
