---
id: accessibility-testng-test
title: Selenium Accessibility Testing
sidebar_label: Selenium
description: Run accessibility automation tests with Selenium on TestMu AI across TestNG, JUnit 5, NUnit (C#), Robot Framework, and Cucumber (Java).
slug: accessibility-testng-test/
toc_max_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Selenium Accessibility Testing

---

Selenium Accessibility Testing runs Accessibility Automation inside your existing Selenium sessions on TestMu AI. The test runner does not change how Accessibility works on the grid: you enable it with **capabilities**, then produce reports either with **on-demand hooks** (`lambda-accessibility-scan`) or **auto-scan**. The shared setup below applies to every framework; each tab under it adds only the code and prerequisites unique to that framework.

> **Browsers:** Accessibility Automation is supported on **Chrome and Edge** (recent versions). Set `browserName` accordingly.

## Prerequisites

- TestMu AI **username and access key**, set as [environment variables for authentication credentials](/support/docs/using-environment-variables-for-authentication-credentials/).
- A **Selenium** project already hitting the TestMu AI grid (hub URL and capabilities configured).
- **Accessibility** entitlement enabled for your organization.
- Access to the **Automation** dashboard and the **Accessibility** tab for the session build.

## How Accessibility Automation works

Accessibility is enabled on the browser session with the `accessibility` capability, independent of which framework or language drives Selenium. You then produce reports one of two ways:

- **On-demand hook:** after navigation and when the page is stable, execute `lambda-accessibility-scan`. This is recommended for most suites because you scan at logical, stable checkpoints.
- **Auto-scan:** set `accessibility.autoscan` to `true` to scan on every navigation without calling any hook.

If you enable `accessibility` but **never** call the hook (and do not use auto-scan), **no Accessibility report** is produced for that navigation.

Reports use the **standard Accessibility automation pipeline**: issues, severity, WCAG mapping, and the same dashboard views as other Selenium-based runs.

## Supported automation capabilities

Optional flags such as `accessibility.wcagVersion`, `accessibility.bestPractice`, and `accessibility.needsReview` tune the WCAG level and what the report includes. The complete list of keys and accepted values is in the [Accessibility Automation scan configurations](/support/docs/accessibility-automation-scan-configurations/).

## View reports

After a run, open the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), select the session, and open the **Accessibility** tab. For a walkthrough of each panel and filter, see [navigating the Accessibility dashboard](/support/docs/accessibility-testing-navigating-dashboard/).

## Framework setup

Pick your framework below. Each tab is self-contained: enable Accessibility on the session, trigger a scan, then run. On success, the session and its accessibility report appear in the Automation dashboard.

<Tabs className="docs__val" groupId="framework">

<TabItem value="testng" label="TestNG">

Enable Accessibility once in your shared TestNG base class so every test method inherits it.

**TestNG prerequisites:** a Selenium and TestNG project already hitting the TestMu AI grid (hub URL and capabilities configured).

### 1. Confirm your TestNG entry point

Most teams initialize the driver in a **base test class** (`@BeforeMethod` / `@BeforeClass`) or a small factory. You only need **one** place where `DesiredCapabilities` or `MutableCapabilities` is built so every test method gets Accessibility enabled.

### 2. Add Accessibility capabilities

**Minimal enable:**

```java
capabilities.setCapability("accessibility", true);
```

**Optional tuning:**

```java
capabilities.setCapability("accessibility", true);
capabilities.setCapability("accessibility.wcagVersion", "wcag21aa");
capabilities.setCapability("accessibility.bestPractice", false);
capabilities.setCapability("accessibility.needsReview", true);
```

### 3. Choose a scan mode

**A. On-demand.** After navigation and when the page is stable, call:

```java
driver.executeScript("lambda-accessibility-scan");
```

**B. Auto-scan.** Scan on every navigation without hooks:

```java
capabilities.setCapability("accessibility", true);
capabilities.setCapability("accessibility.autoscan", true);
```

### 4. Wire the TestNG suite XML (optional but typical)

Point your `testng.xml` (or Gradle/Maven TestNG config) at the packages or classes that use the shared base class so every included test inherits the same driver setup. Run a **single** `@Test` first to validate capabilities before scaling the suite.

### 5. Execute

```bash
mvn test
```

(or your TestNG CLI / IDE run configuration.)

The session and its accessibility report appear in the Automation dashboard.

### Troubleshooting

| Symptom | What to check |
|--------|----------------|
| No Accessibility tab / empty report | Confirm `accessibility: true` and that you either call `lambda-accessibility-scan` or set `accessibility.autoscan`. |
| Wrong WCAG level | Adjust `accessibility.wcagVersion` in the scan configurations reference above. |
| Flaky scans | Prefer **hooks** after explicit waits rather than autoscan on heavy SPAs. |

</TabItem>

<TabItem value="junit5" label="JUnit 5">

Uses **JUnit 5 (Jupiter)** lifecycle annotations; only the lifecycle wiring differs from TestNG, while the capabilities and hook are identical.

**JUnit 5 prerequisites:** JUnit 5 on the classpath (`junit-jupiter-api`, etc.) driving Selenium.

### 1. Centralize driver creation

Use `@BeforeEach` or `@BeforeAll` (with a static `WebDriver` if you share one per class) to build `MutableCapabilities` / `ChromeOptions` once. Every test method should inherit the same Accessibility flags.

### 2. Enable Accessibility on the session

```java
capabilities.setCapability("accessibility", true);
capabilities.setCapability("accessibility.wcagVersion", "wcag21aa"); // optional
```

### 3. Trigger scans

**Hook after stable UI:**

```java
driver.executeScript("lambda-accessibility-scan");
```

**Or auto-scan every navigation:**

```java
capabilities.setCapability("accessibility.autoscan", true);
```

### 4. Run

```bash
mvn test
```

The session and its accessibility report appear in the Automation dashboard.

### 5. Scale to the full suite

Add `@Tag("a11y")` or parallel config if you want selective Accessibility runs in CI; keep capability setup shared so behavior stays consistent.

### Troubleshooting

| Symptom | What to check |
|--------|----------------|
| No report | `accessibility: true` plus hook **or** `accessibility.autoscan`. |
| Multiple scans on one test | You called the hook more than once; reduce to one stable checkpoint per logical page. |

</TabItem>

<TabItem value="nunit" label="NUnit (C#)">

For **Selenium C#** tests run with **NUnit**: Accessibility is enabled on the `RemoteWebDriver` session with the same capability keys as Java, and NUnit only controls how and when tests run.

**NUnit prerequisites:** Selenium 4 `RemoteWebDriver` pointing at the TestMu AI hub, and a NUnit 3+ test project.

### 1. Set capabilities in your driver factory

Typical pattern in `[SetUp]` or a one-time fixture:

```csharp
var options = new ChromeOptions();
options.BrowserVersion = "latest";
options.AddAdditionalOption("accessibility", true);
options.AddAdditionalOption("accessibility.wcagVersion", "wcag21aa"); // optional
// options.AddAdditionalOption("accessibility.autoscan", true);   // optional
var driver = new RemoteWebDriver(new Uri("https://hub.lambdatest.com/wd/hub"), options.ToCapabilities());
```

The exact hub URL and capability names should match your existing grid configuration; only the **`accessibility*`** keys are specific to this feature.

### 2. Invoke the scan hook (if not using auto-scan)

After navigation and waits:

```csharp
((IJavaScriptExecutor)driver).ExecuteScript("lambda-accessibility-scan");
```

Without **either** the hook **or** `accessibility.autoscan`, you will not get Accessibility reports.

### 3. Run NUnit

```bash
dotnet test
```

(or Visual Studio Test Explorer.)

The session and its accessibility report appear in the Automation dashboard.

### Troubleshooting

| Symptom | What to check |
|--------|----------------|
| Capability ignored | Selenium 4 requires `AddAdditionalOption` on `ChromeOptions` (or equivalent) for vendor-specific keys. Verify spelling. |
| No report | Confirm hook or autoscan as above. |

</TabItem>

<TabItem value="robot" label="Robot Framework">

Robot Framework sits **above** Selenium, so Accessibility is still configured on the underlying browser session (desired capabilities passed into `Open Browser` or your library's remote configuration).

**Robot Framework prerequisites:** Robot Framework with SeleniumLibrary (or a compatible library) installed.

### 1. Encode capabilities as variables

Define suite or global variables so every test uses the same grid options:

```robot
*** Variables ***
${LT_OPTIONS}    {"accessibility": true, "accessibility.wcagVersion": "wcag21aa"}
```

Exact syntax depends on how you merge JSON into capabilities for your `Open Browser` keyword. Some teams use a **custom keyword** that builds the options dict in Python and passes it to `Create Dictionary` / `Evaluate`.

### 2. Open Browser with Accessibility on

Pass the merged capabilities into `Open Browser` (or your wrapper) so the remote session includes `"accessibility": true`. Match the pattern you already use for `browserName`, `platformName`, and auth.

### 3. On-demand scan with Execute Javascript

After the page is ready:

```robot
Execute Javascript    return document.readyState
Execute Javascript    lambda-accessibility-scan
```

Use the second line only when you are **not** using `accessibility.autoscan`.

### 4. Auto-scan alternative

If you prefer scans on every navigation without Robot keywords:

```robot
# In capabilities JSON / dict
accessibility.autoscan    ${True}
```

### 5. Run the suite

```bash
robot --outputdir results tests/
```

The session and its accessibility report appear in the Automation dashboard.

### Troubleshooting

| Symptom | What to check |
|--------|----------------|
| No report | Robot must forward `accessibility` to the remote session; inspect the session capabilities in the dashboard. |
| Hook errors | Ensure `Execute Javascript` runs in browser context and spelling is exactly `lambda-accessibility-scan`. |

</TabItem>

<TabItem value="cucumber" label="Cucumber (Java)">

Cucumber scenarios execute ordinary Selenium code under the hood: enable Accessibility once on the shared `WebDriver` (usually in a `@Before` hook), then call `lambda-accessibility-scan` from step definitions when a screen is stable.

**Cucumber prerequisites:** Cucumber JVM with a DI or PicoContainer (or Spring) setup that exposes a singleton `WebDriver`.

### 1. Create the driver with Accessibility in `@Before`

```java
@Before(order = 0)
public void setUp() {
    MutableCapabilities caps = new MutableCapabilities();
    caps.setCapability("browserName", "chrome");
    caps.setCapability("accessibility", true);
    // caps.setCapability("accessibility.autoscan", true); // optional
    driver = new RemoteWebDriver(new URL(HUB_URL), caps);
    // inject driver into step defs
}
```

### 2. Scan after key navigations

In a step that represents "user is on dashboard" (or after a `Given` / `When` that loads a URL):

```java
driver.executeScript("lambda-accessibility-scan");
```

Avoid calling the hook on every tiny interaction; align it with **logical pages** or states.

### 3. Optional: auto-scan for exploratory flows

If scenarios bounce across many URLs and you want full coverage without per-step hooks, enable `accessibility.autoscan` in `@Before` instead.

### 4. Run Cucumber

```bash
mvn test -Dcucumber.filter.tags="@smoke"
```

The session and its accessibility report appear in the Automation dashboard.

### 5. CI alignment

Tag scenarios that should run Accessibility (`@a11y`) so pipelines stay fast; keep capability setup in the shared hook so tagged and untagged runs behave predictably.

</TabItem>

</Tabs>

## Related docs

- [Automating Accessibility Testing with Selenium](/support/docs/accessibility-automation-test/)
- [CI/CD Integration Guide](/support/docs/accessibility-cicd-integration-guide/)
