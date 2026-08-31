# Appium Accessibility Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Appium accessibility testing runs [Appium](https://appium.io/) with the `lambda-accessibility-scan` hook to generate accessibility results during Android or iOS test runs on the TestMu AI grid. A session capability enables scanning, and the hook is called at each stable UI state to capture a report for that screen. The shared setup below applies to every runner; the runner tabs cover only the TestNG and WebdriverIO specifics.

Scans on real devices are **hook driven only**. The `accessibility.autoscan` capability used in web automation is **not supported on real devices**, so a full app flow cannot be scanned automatically. Call `lambda-accessibility-scan` at every screen you want covered.

## When to use

Use this workflow when your team **already runs Appium** for functional tests and wants accessibility checks in the **same execution path** with deterministic checkpoints.

## Prerequisites

- Appium client and test project targeting TestMu AI **real devices** or emulators per your subscription
- `LT_USERNAME` / `LT_ACCESS_KEY` available to the process
- Accessibility entitlement on your account
- Accessibility enabled on the mobile session (see the runner tabs for capability examples)

## How the accessibility scan hook works

Accessibility on native apps depends on two things: a **session capability** that enables scanning, and the **`lambda-accessibility-scan`** hook called at stable UI states. The capability alone does not produce a report. Each screen you want covered has to be scanned explicitly after it reaches a stable state (post-navigation waits, spinners resolved, animations settled).

**Expected result:** each hook call at a stable screen produces one accessibility report entry for that build under the Accessibility view.

## Typical workflow

1. **Reuse a green Appium suite** without accessibility first: confirm install, locators, and hub connectivity.
2. **Add the accessibility capability** on the session (exact key names align with your Appium server version; mirror the examples in the runner tabs).
3. After each **stable screen** (post-navigation waits), call the hook:

```java
driver.executeScript("lambda-accessibility-scan");
```

4. **Run a single test method** to validate a report appears under Accessibility for that build.
5. Open the dashboard (see [View reports](#view-reports)) and locate the session's accessibility report.
6. Expand coverage to full suites only after reports look stable.

**Expected result:** a single scanned method surfaces one accessibility report; broader suites scale the same pattern across screens.

## Supported automation capabilities

The critical session capability is `"accessibility": true`, which enables scanning for the session. The `accessibility.autoscan` capability is web-only and is not available on real devices, so native coverage relies on the hook. For the complete capability reference and per-scan tuning, see the [accessibility automation scan configurations](/support/docs/accessibility-automation-scan-configurations/).

## View reports

After a run, open the dashboard and locate the session's accessibility results under the Accessibility view for that build. For the report layout, filters, and issue drill-down, see [navigating the accessibility testing dashboard](/support/docs/accessibility-testing-navigating-dashboard/).

## Native App Scanner

If you want manual, screen-by-screen checks instead of automated hooks, use the [accessibility app scanner](/support/docs/accessibility-app-scanner/). It covers native Android and iOS apps and is the manual counterpart to this automated workflow.

## Framework setup

Pick the runner that matches your stack. Both paths share the prerequisites and hook behavior above; each tab covers only the runner-specific capability config, code hook, run command, and troubleshooting.

TestNG drives the session with the Appium Java client and calls the hook through `JavascriptExecutor`.

**TestNG prerequisites:** Appium Java client (or matching stack) with TestNG, and an app build reachable by the grid.

### 1. Configure capabilities in `@BeforeClass` / `@BeforeMethod`

Illustrative Java pattern (adapt platform names, device, and app paths to your suite):

```java
UiAutomator2Options options = new UiAutomator2Options();
options.setDeviceName("Pixel.*");
options.setApp("lt://APP_ID"); // or storage URL per your setup
options.setCapability("accessibility", true);
AppiumDriver driver = new AndroidDriver(new URL("https://mobile-hub.lambdatest.com/wd/hub"), options);
```

Use the **official capability set** your account documentation lists for the current Appium version. The critical addition is `"accessibility": true`.

**Expected result:** the session starts with accessibility enabled and is ready for hook calls.

`accessibility.autoscan` is a **web automation** capability and is **not supported on real devices**. On real devices, each screen you want covered has to be scanned with the `lambda-accessibility-scan` hook.

### 2. Call the scan hook after navigation

```java
((JavascriptExecutor) driver).executeScript("lambda-accessibility-scan");
```

Place this **after** explicit waits for loading spinners, animations, or lazy content.

**Expected result:** one accessibility report is captured for the current screen.

### 3. Run TestNG

```bash
mvn test
```

**Expected result:** the suite executes and each scanned screen adds a report to the build.

### Troubleshooting

| Symptom | What to check |
|--------|----------------|
| Hook throws | Driver must be a session where accessibility capability was set; verify spelling `lambda-accessibility-scan`. |
| Empty report | Hook never called, or the screen never reached a stable state. autoScan does not cover this, it is not supported on real devices. |

WebdriverIO sets caps in `wdio.conf.ts` and calls the hook through `browser.execute`.

**WebdriverIO prerequisites:** WebdriverIO with `@wdio/appium-service` (or your chosen runner) configured for TestMu AI, and an app artifact available to the grid.

### 1. Set capabilities in `wdio.conf.ts` (or `.js`)

```ts
export const config = {
capabilities: [{
platformName: 'Android',
'appium:deviceName': 'Pixel.*',
'appium:app': 'lt://APP_ID',
'accessibility': true,
}],
// host/user/key per your standard WDIO LambdaTest preset
};
```

Match keys to your Appium server version (`appium:` prefix for W3C caps).

**Expected result:** the session starts with accessibility enabled and is ready for hook calls.

`accessibility.autoscan` is a **web automation** capability and is **not supported on real devices**. On real devices, each screen you want covered has to be scanned with the `lambda-accessibility-scan` hook.

### 2. Call the hook after screens load

```ts
await browser.execute('lambda-accessibility-scan');
```

Use WDIO's **`waitUntil`** patterns before executing the hook so dynamic content is present.

**Expected result:** one accessibility report is captured for the current screen.

### 3. Run the suite

```bash
npx wdio run wdio.conf.ts
```

**Expected result:** the suite executes and each scanned screen adds a report to the build.

### Troubleshooting

| Symptom | What to check |
|--------|----------------|
| `execute` undefined | Ensure the session is still active and you are not using a mocked driver in unit tests. |
| No report | Missing `accessibility: true` or hook never awaited. |

## Product boundary

This workflow is for direct Appium-based automation. If you are authoring the flow in KaneAI, use [mobile app accessibility testing in KaneAI](/support/docs/kaneai-mobile-app-accessibility/). For manual screen-by-screen testing, use the Native App Scanner section above.

Accessibility scanning supports **native** Android and iOS apps only. **Hybrid apps**, meaning native apps with embedded webview content, are **not supported**. This applies to both Native App Automation and the App Scanner. To check the web content itself, test the web application directly with [accessibility manual testing in DevTools](/support/docs/accessibility-devtools/) or [accessibility web automation](/support/docs/accessibility-automation-test/).

## Related docs

- [Tag support for accessibility scans](/support/docs/accessibility-tag-support/)
