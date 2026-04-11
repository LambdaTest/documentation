---
id: change-individual-test-details
title: Changing Individual Test Details
sidebar_label: Edit Test Details
description: Mark test status as pass or fail and rename tests during execution on the Selenium grid.
keywords:
  - mark test passed failed selenium
  - rename test during execution
  - lambda-status hook usage
  - change test name selenium grid
  - selenium test status update
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/change-individual-test-details/
slug: change-individual-test-details/
canonical: https://www.testmuai.com/support/docs/change-individual-test-details/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Changing Individual Test Details",
          "item": `${BRAND_URL}/support/docs/change-individual-test-details/`
        }]
      })
    }}
></script>

# Changing Individual Test Details

* * *

You can modify individual test details from your automation test build while running Selenium tests on TestMu AI. This guide covers marking test status and renaming tests during execution.

## Mark Test Status as Pass or Fail
---
Use the `lambda-status` hook via JavascriptExecutor to set the final status of a test on the TestMu AI dashboard.

When you run Selenium tests on the TestMu AI grid, a test that your local assertions marked as failed may show as completed on the dashboard. Use the `lambda-status` hook to explicitly set the correct status.

You can set these status values: `passed`, `failed`, `skipped`, `ignored`, `unknown`, `error`.

### Code Samples

<Tabs className="docs__val">

<TabItem value="java" label="Java" default>

```java
// Mark test as passed
((JavascriptExecutor) driver).executeScript("lambda-status=passed");

// Mark test as failed
((JavascriptExecutor) driver).executeScript("lambda-status=failed");
```

</TabItem>

<TabItem value="javascript" label="JavaScript">

```javascript
// Mark test as passed
await driver.executeScript('lambda-status=passed');

// Mark test as failed
await driver.executeScript('lambda-status=failed');
```

</TabItem>

<TabItem value="python" label="Python">

```python
# Mark test as passed
driver.execute_script("lambda-status=passed")

# Mark test as failed
driver.execute_script("lambda-status=failed")
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
// Mark test as passed
((IJavaScriptExecutor)driver).ExecuteScript("lambda-status=passed");

// Mark test as failed
((IJavaScriptExecutor)driver).ExecuteScript("lambda-status=failed");
```

</TabItem>

<TabItem value="php" label="PHP">

```php
// Mark test as passed
$driver->executeScript("lambda-status=passed");

// Mark test as failed
$driver->executeScript("lambda-status=failed");
```

</TabItem>

<TabItem value="ruby" label="Ruby">

```ruby
# Mark test as passed
driver.execute_script("lambda-status=passed")

# Mark test as failed
driver.execute_script("lambda-status=failed")
```

</TabItem>

</Tabs>

:::tip
Place the `lambda-status` call inside your test's teardown or `@AfterMethod` block so the status is set before the session ends. For the full list of Lambda Hooks, see [Lambda Hooks](/support/docs/lambda-hooks/).
:::

## Rename Your Test
---
Use the `lambda-name` hook to update the test name after execution has started.

You can rename a running test to reflect dynamic data such as iteration count or data-driven parameters. Pass the new name through JavascriptExecutor:

<Tabs className="docs__val">

<TabItem value="java" label="Java" default>

```java
((JavascriptExecutor) driver).executeScript("lambda-name=Your_test_name");
```

</TabItem>

<TabItem value="javascript" label="JavaScript">

```javascript
await driver.executeScript('lambda-name=Your_test_name');
```

</TabItem>

<TabItem value="python" label="Python">

```python
driver.execute_script("lambda-name=Your_test_name")
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
((IJavaScriptExecutor)driver).ExecuteScript("lambda-name=Your_test_name");
```

</TabItem>

<TabItem value="php" label="PHP">

```php
$driver->executeScript("lambda-name=Your_test_name");
```

</TabItem>

<TabItem value="ruby" label="Ruby">

```ruby
driver.execute_script("lambda-name=Your_test_name")
```

</TabItem>

</Tabs>

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Changing Individual Test Details
      </span>
    </li>
  </ul>
</nav>
