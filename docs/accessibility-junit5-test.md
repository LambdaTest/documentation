---
id: accessibility-junit5-test
title: JUnit 5
sidebar_label: JUnit 5
description: Run Accessibility Automation with Selenium and JUnit 5—capabilities, lifecycle hooks, and dashboard reporting.
keywords:
  - TestMu AI
  - Accessibility
  - JUnit 5
  - Selenium
  - Jupiter
url: https://www.testmuai.com/support/docs/accessibility-junit5-test/
site_name: TestMu AI
slug: accessibility-junit5-test/
canonical: https://www.testmuai.com/support/docs/accessibility-junit5-test/
---

# JUnit 5

Use this guide when your **Selenium** tests use **JUnit 5 (Jupiter)**. Accessibility is still driven entirely by **grid capabilities** and the **`lambda-accessibility-scan`** hook (or **auto-scan**), identical to the [Selenium Accessibility Automation](/support/docs/accessibility-automation-test/) flow—only the test lifecycle annotations differ.

> **Browsers:** Use **Chrome or Edge** with supported versions for Accessibility Automation.

## Prerequisites

- TestMu AI credentials as **environment variables** ([guide](/support/docs/using-environment-variables-for-authentication-credentials/))
- JUnit 5 on the classpath (`junit-jupiter-api`, etc.) driving Selenium
- Accessibility enabled for your account

## Onboarding path

### 1. Centralize driver creation

Use `@BeforeEach` or `@BeforeAll` (with a static WebDriver if you share one per class) to build `MutableCapabilities` / `ChromeOptions` once. Every test method should inherit the same Accessibility flags.

### 2. Enable Accessibility on the session

```java
capabilities.setCapability("accessibility", true);
capabilities.setCapability("accessibility.wcagVersion", "wcag21aa"); // optional
```

See [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/) for all flags.

### 3. Trigger scans

**Hook after stable UI:**

```java
driver.executeScript("lambda-accessibility-scan");
```

**Or auto-scan every navigation:**

```java
capabilities.setCapability("accessibility.autoscan", true);
```

### 4. Run and verify

```bash
mvn test
```

Open the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard) → session → **Accessibility** tab.

### 5. Scale to the full suite

Add `@Tag("a11y")` or parallel config if you want selective Accessibility runs in CI; keep capability setup shared so behavior stays consistent.

## Troubleshooting

| Symptom | What to check |
|--------|----------------|
| No report | `accessibility: true` plus hook **or** `accessibility.autoscan`. |
| Multiple scans on one test | You called the hook more than once; reduce to one stable checkpoint per logical page. |

## Related docs

- [Selenium](/support/docs/accessibility-automation-test/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [TestNG](/support/docs/accessibility-testng-test/)
- [CI/CD Integration Guide](/support/docs/accessibility-cicd-integration-guide/)
