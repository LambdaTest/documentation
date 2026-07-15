# Configure Accessibility DevTools

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This page covers the settings available in the Accessibility DevTools browser extension. These settings apply when you run scans manually through the DevTools panel.

If you are configuring settings for automated test execution (Selenium, Cypress, Playwright, etc.), see [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/) instead.

## Access DevTools settings

Click on your **profile icon** and then **Settings**.

## WCAG version

Select which **WCAG version** your DevTools scans should check against. Options include WCAG 2.0, WCAG 2.1 A, WCAG 2.1 AA, WCAG 2.1 AAA, WCAG 2.2 A, and WCAG 2.2 AA. The recommended version is **WCAG 2.1 AA**.

## Review Issues

Some issues require manual review before they can be confirmed as true violations. When this setting is enabled, the scan results include a **Needs Review** category.

To review an issue:

1. Click on the issue to expand it.
2. Select the element you want to evaluate.
3. Click **Yes** to confirm it as an issue, or leave it unconfirmed.
4. Use **Undo** to reverse a confirmation.

## Best Practices

Enable this setting to include issues that go beyond WCAG requirements but improve overall user experience. Best practice issues are reported separately from WCAG violations.

## Autosave Reports

This option is enabled by default. When active, scan results are automatically saved to the Accessibility dashboard. Toggle it off if you want to review results without persisting them.

## Related docs

- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [Run Your Quick Scan](/support/docs/accessibility-testing-run-quick-scan/)
- [Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)
