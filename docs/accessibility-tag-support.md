---
id: accessibility-tag-support
title: Tag Support for Accessibility Scans
sidebar_label: Tag Support
description: Use tags to organize native app accessibility scans by screen, flow, or activity from the dashboard or during automation.
keywords:
  - accessibility tags
  - native app accessibility
  - lambda-accessibility-scan
  - appium accessibility tag
  - accessibility scan tags
url: https://www.testmuai.com/support/docs/accessibility-tag-support/
site_name: TestMu AI
slug: accessibility-tag-support/
canonical: https://www.testmuai.com/support/docs/accessibility-tag-support/
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
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Tag Support for Accessibility Scans",
          "item": `${BRAND_URL}/support/docs/accessibility-tag-support/`
        }]
      })
    }}
></script>

# Tag Support for Accessibility Scans

Use tags to organize native app accessibility scans by screen, flow, or activity. This helps you label scans with names like `Login Screen`, `Cart Screen`, or `Profile Screen` so your team can quickly understand what each scan represents.

You can use tags in two ways:

- **From the dashboard UI** after a scan has already been created.
- **During automation** when you trigger `lambda-accessibility-scan` in an Appium test.

## Before You Start

Make sure you have:

- Access to <BrandName /> Accessibility for native app testing.
- A native app accessibility scan result available in the dashboard, or
- An Appium test with accessibility enabled for native app automation.

:::note
Tag support is available for native app accessibility scans. Tags are optional. If you do not add a tag, your scans continue to work as usual.
:::

## What Tags Help You Do

- Label scans with meaningful names instead of relying only on generic view names.
- Group related issues by screen or activity.
- Filter the dashboard to focus on scans with selected tags.
- Keep reports easier to review across multi-screen app journeys.

## Option 1: Add Tags from the Dashboard

Use this flow when the scan is already available in the dashboard and you want to label it afterward.

### Step 1: Open the tag action for a view

In the issue view, open the scan or view you want to label and click the tag icon.

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/tag-support/assign-tag-icon-in-view.png').default} alt="Assign tags icon in the accessibility issue view" className="doc_img"/>

### Step 2: Assign one or more tags

In the **Assign Tags** modal, search for an existing tag or create a new one, then save your selection.

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/tag-support/assign-tag-modal.png').default} alt="Assign Tags modal for accessibility scans" className="doc_img"/>

### Step 3: Review tagged issues

Once saved, the selected tags appear with the affected issue details.

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/tag-support/tagged-issue.png').default} alt="Tagged issue shown in the accessibility dashboard" className="doc_img"/>

### Step 4: Filter the dashboard by tag

Use the **Tags** filter to show only the issues or views that match the selected tags.

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/tag-support/tag-filter.png').default} alt="Tag filter in the accessibility dashboard" className="doc_img"/>

### Step 5: Use tags in Mobile View

The same tags are also available when you review the test in **Mobile View**.

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/tag-support/mobile-view-tags.png').default} alt="Tags visible in mobile view for accessibility scans" className="doc_img"/>

### Step 6: Switch how issues are grouped

In the **All Issues** tab, you can group the results in two ways:

- **Group by: Views** to review issues screen by screen.
- **Group by: Issue Types** to review issues by accessibility problem type.

**Group by: Views**

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/tag-support/groupby-view.png').default} alt="Accessibility issues grouped by views" className="doc_img"/>

**Group by: Issue Types**

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/tag-support/groupby-issues.png').default} alt="Accessibility issues grouped by issue types" className="doc_img"/>

## Option 2: Add Tags During Automation

Use this flow when you want to attach a tag at the exact moment you trigger a native app accessibility scan in Appium.

This is useful when your test moves across multiple screens and you want each scan to carry its own label from the beginning.

### Basic Syntax

Trigger the scan with `lambda-accessibility-scan` and pass a `tag` value.

<Tabs>
  <TabItem value="java" label="Java" default>

```java
((JavascriptExecutor) driver).executeScript(
    "lambda-accessibility-scan",
    new HashMap<String, Object>() {{
        put("tag", "Login Screen");
    }}
);
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
driver.execute_script("lambda-accessibility-scan", {"tag": "Login Screen"})
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
await driver.execute("lambda-accessibility-scan", [{ tag: "Login Screen" }]);
```

  </TabItem>
</Tabs>

### Example: Tag scans for multiple screens

You can call the scan multiple times in the same test and use a different tag each time.

<Tabs>
  <TabItem value="java-example" label="Java" default>

```java
((JavascriptExecutor) driver).executeScript(
    "lambda-accessibility-scan",
    new HashMap<String, Object>() {{
        put("tag", "Login Screen");
    }}
);

((JavascriptExecutor) driver).executeScript(
    "lambda-accessibility-scan",
    new HashMap<String, Object>() {{
        put("tag", "Cart Screen");
    }}
);

((JavascriptExecutor) driver).executeScript(
    "lambda-accessibility-scan",
    new HashMap<String, Object>() {{
        put("tag", "Profile Screen");
    }}
);
```

  </TabItem>
  <TabItem value="python-example" label="Python">

```python
driver.execute_script("lambda-accessibility-scan", {"tag": "Login Screen"})
driver.execute_script("lambda-accessibility-scan", {"tag": "Cart Screen"})
driver.execute_script("lambda-accessibility-scan", {"tag": "Profile Screen"})
```

  </TabItem>
</Tabs>

## Tag Naming Tips

- Use short, meaningful names such as `Login Screen`, `Search`, `Checkout`, or `Settings`.
- Keep naming consistent across runs so filters and comparisons are easier to use.
- Use one naming style across your team, for example screen names or feature-flow names.

## Limitations and Notes

- Tag support applies to native app accessibility scans.
- Tags help you organize scans, but they do not change scan behavior or issue detection.
- If you do not add tags during automation, you can still assign them later from the dashboard.
- Use simple names with letters, numbers, spaces, hyphens, or underscores for best results.

## Related Docs

- [Native App Accessibility Automation](/support/docs/accessibility-native-app-automation-test/)
- [Accessibility App Scanner](/support/docs/accessibility-app-scanner/)
- [All Issues](/support/docs/accessibility-testing-dashboard-all-issues/)
- [Accessibility FAQ](/support/docs/accessibility-faq/)
