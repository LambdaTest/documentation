---
id: accessibility-web-runtime-control
title: Accessibility Testing with Runtime Control
sidebar_label: Web Runtime Control
description: Dynamically control accessibility scanning during test execution with LambdaTest's Lambda Hook for Selenium and Playwright frameworks.
keywords:
    - LambdaTest
    - Accessibility
    - Testing
    - Automation
    - Runtime Control
    - Lambda Hook
    - Selenium Accessibility
    - Playwright Accessibility
    - WCAG
url: https://www.lambdatest.com/support/docs/accessibility-web-runtime-control/
site_name: LambdaTest
slug: accessibility-web-runtime-control/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Accessibility Web Runtime Control",
          "item": "https://www.lambdatest.com/support/docs/accessibility-web-runtime-control/"
        }]
      })
    }}
></script>

LambdaTest's accessibility testing feature enables automated accessibility scanning during test execution. This documentation covers both the continuous scanning approach and the new runtime control capability that provides granular control over when accessibility scans are performed.

The latest update introduces **runtime control** for accessibility scanning through a Lambda Hook. This enhancement allows developers to dynamically enable or disable accessibility scans during test execution, providing precise control over which portions of the application are scanned.

### Key Benefits

- Toggle accessibility scanning on/off at any point during test execution
- Scan specific user flows or application sections
- Optimize test performance by scanning only critical paths

## Implementation Methods

### Method 1: Continuous Scanning

Enable continuous accessibility scanning throughout the entire test suite by adding the `accessibility` capability to the test configuration.

#### Configuration

```python
"accessibility": true
```

**Use Case:** Ideal when comprehensive accessibility testing is required across the entire functional test suite without selective scanning.

---

### Method 2: Runtime Control with Lambda Hook

The Lambda Hook provides programmatic control over accessibility scanning during test execution. This method provides fine-grained control, allowing developers to enable or disable scanning for specific test scenarios or application sections.

**Use Case:** Ideal for testing specific user flows, critical paths, or high-priority features where targeted accessibility analysis is needed without scanning the entire application. This approach optimizes test performance and provides granular control over scan coverage.


### Selenium Implementation

#### Syntax

<Tabs className="docs__val">
<TabItem value="python" label="Python" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-python">
{`driver.execute_script('lambda-executor: {
  "action": "lambda-accessibility-scan",
  "arguments": {
    "scan": "true"  # or "false" to disable
  }
}')`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="java" label="Java">
<div className="lambdatest__codeblock">
<CodeBlock className="language-java">
{`driver.executeScript("lambda-executor: {" +
  "\\"action\\": \\"lambda-accessibility-scan\\"," +
  "\\"arguments\\": { \\"scan\\": \\"true\\" }" +  // or "false" to disable
"}");`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="javascript" label="JavaScript">
<div className="lambdatest__codeblock">
<CodeBlock className="language-javascript">
{`await driver.executeScript('lambda-executor: {
  "action": "lambda-accessibility-scan",
  "arguments": {
    "scan": "true"  // or "false" to disable
  }
}');`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="csharp" label="C#">
<div className="lambdatest__codeblock">
<CodeBlock className="language-csharp">
{`driver.ExecuteScript("lambda-executor: {" +
  "\\\\"action\\\\": \\\\"lambda-accessibility-scan\\\\"," +
  "\\\\"arguments\\\\": { \\\\"scan\\\\": \\\\"true\\\\" }" +  // or "false" to disable
"}");`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

#### Code Examples

<Tabs className="docs__val">
<TabItem value="python" label="Python" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-python">
{`# Enable accessibility scanning
driver.execute_script('lambda-executor: {
  "action": "lambda-accessibility-scan",
  "arguments": { "scan": "true" }
}')

# Test steps
driver.find_element(By.ID, "checkout").click()

# Disable accessibility scanning
driver.execute_script('lambda-executor: {
  "action": "lambda-accessibility-scan",
  "arguments": { "scan": "false" }
}')`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="java" label="Java">
<div className="lambdatest__codeblock">
<CodeBlock className="language-java">
{`// Enable accessibility scanning
driver.executeScript("lambda-executor: {" +
  "\\"action\\": \\"lambda-accessibility-scan\\"," +
  "\\"arguments\\": { \\"scan\\": \\"true\\" }" +
"}");

// Test steps
driver.findElement(By.id("checkout")).click();

// Disable accessibility scanning
driver.executeScript("lambda-executor: {" +
  "\\"action\\": \\"lambda-accessibility-scan\\"," +
  "\\"arguments\\": { \\"scan\\": \\"false\\" }" +
"}");`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="javascript" label="JavaScript">
<div className="lambdatest__codeblock">
<CodeBlock className="language-javascript">
{`// Enable accessibility scanning
await driver.executeScript('lambda-executor: {
  "action": "lambda-accessibility-scan",
  "arguments": { "scan": "true" }
}');

// Test steps
await driver.findElement(By.id("checkout")).click();

// Disable accessibility scanning
await driver.executeScript('lambda-executor: {
  "action": "lambda-accessibility-scan",
  "arguments": { "scan": "false" }
}');`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="csharp" label="C#">
<div className="lambdatest__codeblock">
<CodeBlock className="language-csharp">
{`// Enable accessibility scanning
driver.ExecuteScript("lambda-executor: {" +
  "\\\\"action\\\\": \\\\"lambda-accessibility-scan\\\\"," +
  "\\\\"arguments\\\\": { \\\\"scan\\\\": \\\\"true\\\\" }" +
"}");

// Test steps
driver.FindElement(By.Id("checkout")).Click();

// Disable accessibility scanning
driver.ExecuteScript("lambda-executor: {" +
  "\\\\"action\\\\": \\\\"lambda-accessibility-scan\\\\"," +
  "\\\\"arguments\\\\": { \\\\"scan\\\\": \\\\"false\\\\" }" +
"}");`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

---

### Playwright Implementation

#### Syntax

<Tabs className="docs__val">
<TabItem value="javascript" label="JavaScript/TypeScript" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-javascript">
{`await page.evaluate(
  (hook) => null,
  \`lambdatest_action:\${JSON.stringify({
    action: "lambda-accessibility-scan",
    arguments: { scan: "true" }  // or "false" to disable
  })}\`
);`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="python" label="Python">
<div className="lambdatest__codeblock">
<CodeBlock className="language-python">
{`await page.evaluate(
    f'lambdatest_action:{json.dumps({
        "action": "lambda-accessibility-scan",
        "arguments": {"scan": "true"}  # or "false" to disable
    })}'
)`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

#### Code Examples

<Tabs className="docs__val">
<TabItem value="javascript" label="JavaScript/TypeScript" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-javascript">
{`// Enable accessibility scanning
await page.evaluate(
  (hook) => null,
  \`lambdatest_action:\${JSON.stringify({
    action: "lambda-accessibility-scan",
    arguments: { scan: "true" }
  })}\`
);

// Test steps
await page.click('#checkout');

// Disable accessibility scanning
await page.evaluate(
  (hook) => null,
  \`lambdatest_action:\${JSON.stringify({
    action: "lambda-accessibility-scan",
    arguments: { scan: "false" }
  })}\`
);`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="python" label="Python">
<div className="lambdatest__codeblock">
<CodeBlock className="language-python">
{`# Enable accessibility scanning
await page.evaluate(
    f'lambdatest_action:{json.dumps({
        "action": "lambda-accessibility-scan",
        "arguments": {"scan": "true"}
    })}'
)

# Test steps
await page.click('#checkout')

# Disable accessibility scanning
await page.evaluate(
    f'lambdatest_action:{json.dumps({
        "action": "lambda-accessibility-scan",
        "arguments": {"scan": "false"}
    })}'
)`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

---

## Important Notes

### Scan Scope

When using runtime control, only the application states and pages traversed **between enabling (`scan: "true"`) and disabling (`scan: "false"`)** the scan will be analyzed for accessibility issues. All navigation and interactions outside this range will be excluded from accessibility analysis.

Both implementation methods can coexist in the testing infrastructure. The approach that best fits the testing requirements can be chosen on a per-suite or per-test basis.

### Framework Support

Runtime control via Lambda Hook is currently supported for **Selenium** and **Playwright** frameworks across all supported programming languages.

### Reporting

Accessibility scan results are accessible through the LambdaTest dashboard. The reporting interface and data structure remain consistent regardless of whether continuous scanning or runtime control is used.

---


:::info
For comprehensive accessibility reports and detailed issue breakdowns, visit the [LambdaTest Accessibility Dashboard](https://accessibility.lambdatest.com/automation).
:::