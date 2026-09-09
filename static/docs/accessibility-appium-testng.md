# Appium TestNG

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use this guide when **Appium** drives Android or iOS tests and **TestNG** is your runner. Accessibility still depends on **session capabilities** plus **`lambda-accessibility-scan`** at stable UI states.

## Prerequisites

- Appium Java client (or matching stack) + TestNG
- App build reachable by the grid
- Accessibility entitlement

## Onboarding path

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

`accessibility.autoscan` is a **web automation** capability and is **not supported on real devices**. On real devices, each screen you want covered has to be scanned with the `lambda-accessibility-scan` hook. See [Scan Configurations via Capabilities](/support/docs/accessibility-automation-scan-configurations/).

### 2. Call the scan hook after navigation

```java
((JavascriptExecutor) driver).executeScript("lambda-accessibility-scan");
```

Place this **after** explicit waits for loading spinners, animations, or lazy content.

### 3. Run TestNG

```bash
mvn test
```

### 4. Review reports

Open **[Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)** and locate the session’s accessibility results.

## Troubleshooting

| Symptom | What to check |
|--------|----------------|
| Hook throws | Driver must be a session where accessibility capability was set; verify spelling `lambda-accessibility-scan`. |
| Empty report | Hook never called, or the screen never reached a stable state. autoScan does not cover this, it is not supported on real devices. |

## Related docs

- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/)
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/)
