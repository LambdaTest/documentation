---
id: analytics-widget-filter-by-regex
title: Analytics Widgets - Filter by Regex
sidebar_label: Filter using Regex
description: Filter all the data with Regex patterns to get insights on your test runs. Learn how to use Regex in the analytics widget.
keywords:
  - analytics
  - insights
  - test intelligence
  - test analytics
url: https://www.testmuai.com/support/docs/analytics-widget-filter-by-regex/
site_name: LambdaTest
slug: analytics-widget-filter-by-regex/
canonical: https://www.testmuai.com/support/docs/analytics-widget-filter-by-regex/
---


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
          "name": "Test Overview",
          "item": `${BRAND_URL}/support/docs/analytics-widget-filter-by-regex/`
        }]
      })
    }}
></script>
## About Regex Mode

Our analytics platform now supports regular expressions (Regex) for advanced text searching, pattern matching, and data extraction. This feature enhances your ability to filter and analyze data with greater precision and flexibility.

<img loading="lazy" src={require('../assets/images/analytics/analytics-regex-view.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Accessing Regex Mode

1. Navigate to your dashboard.
2. Click on "Configure Widget."
3. In the filter options, you'll see a radio button to switch between "List" and "Regex" modes.
4. Select "Regex" to enable Regex filtering.

## Using Regex in Filters

Once in Regex mode, you can enter Regex patterns in the filter input field. As you type, you'll see auto-suggestions for common Regex patterns.

<img loading="lazy" src={require('../assets/images/analytics/analytics-regex-main.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


### Key Features:

- **Auto-suggest**: Get suggestions for commonly used Regex patterns.
- **Result Preview**: See a list of matching results and the total count of filtered items.
- **Persistent Mode**: Regex mode remains active across different filter types until you switch back to list mode.

<img loading="lazy" src={require('../assets/images/analytics/analytics-regex-preview.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Supported Regex Patterns

Our platform supports a wide range of Regex patterns, including:

- Character classes (e.g., `\d`, `\w`, `\s`)
- Anchors (e.g., `^`, `$`, `\b`)
- Quantifiers (e.g., `*`, `+`, `?`, `{n}`)
- Groups and ranges (e.g., `(abc)`, `[a-z]`)
- Assertions (e.g., `(?=...)`, `(?!...)`)
- And more!

For a complete list of supported patterns, click the "See Documentation" link in the Regex mode view.

## Use Cases

### 1. Filtering Build Names for Automation Products

**Scenario**: You want to filter all build names that start with "Auto_" followed by a version number.

**Regex Pattern**: `^Auto_v\d+(\.\d+)*$`

This pattern will match strings like:
- Auto_v1
- Auto_v2.0
- Auto_v3.1.4

### 2. Filtering Test Names with Specific Keywords

**Scenario**: You want to filter all test names that contain the word "Login" or "Signup."

**Regex Pattern**: `Login|Signup`

This pattern will match strings like:
- User Login Test
- Signup Page Test
- Login and Signup Flow

### 3. Filtering by Build with Date & Time Prefix or Suffix

**Scenario**: You want to filter all builds with a date and time prefix or suffix.

**Regex Pattern**: `^\d{4}-\d{2}-\d{2}_\d{2}:\d{2}:\d{2}$|\d{2}:\d{2}:\d{2}_\d{4}-\d{2}-\d{2}$`

This pattern will match strings like:
- 2022-01-01_12:00:00
- 12:00:00_2022-01-01
- 2022-01-01_12:00:00_UTC

## Best Practices

1. Start with simple patterns and gradually add complexity.
2. Use the auto-suggest feature to learn common Regex constructs.
3. Always test your Regex patterns on a small dataset before applying them to large-scale analyses.
4. Remember that Regex is case-sensitive by default. Use flags or character classes to make it case-insensitive if needed.

## Need Help?

If you have any questions or need assistance with Regex filtering, feel free to reach out to our [support team](mailto:support@testmu.ai). We're here to help you make the most of our advanced analytics features!




