---
id: analytics-filter-by-custom-data
title: Filter by Custom Data
sidebar_label: Filter by Custom Data
description: Learn how to filter analytics data by custom attributes on TestMu AI to track and analyze your testing metrics more effectively.
keywords:
  - analytics
url: https://www.testmuai.com/support/docs/analytics-filter-by-custom-data/
site_name: TestMu AI
slug: analytics-filter-by-custom-data/
canonical: https://www.testmuai.com/support/docs/analytics-filter-by-custom-data/
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
          "item": `${BRAND_URL}/support/docs/analytics-filter-by-custom-data/`
        }]
      })
    }}
></script>
import NewTag from '../src/component/newTag';


Ability to sent any custom `key` and `value` pair to <BrandName /> platform and then filter the test cases based on the custom data. This feature is available for `Web Automation` and `App Automation` coming soon.

## Prerequisites For Insights:

1. You should have an active <BrandName /> account.
2. You should han active subscription plan with Web Automation.
3. You should have executed at least one test on the <BrandName /> Web Automation platform.

## Capture Custom Data Filter for Insights in Web Automation &nbsp;<NewTag value="BETA" bgColor="#ffec02" color="#000" />

### Update your existing test capabilities

You can use the `customData` capability to send custom data to the <BrandName /> platform. The custom data will be displayed in the `Builds Comparison Insights` module. The custom data will be displayed in the `Custom Data` Filter. You can filter the test cases based on the custom data.

```js
{
  "capabilities": {
    "browserName": "chrome",
    "version": "latest",
    "platform": "Windows 10",
    // highlight-start
    "customData": {
      "key": "value"
    }
    // highlight-end
  }
}

```


## How To Access Custom Filters?

:::note

Currently, the feature is in the <NewTag value="BETA" bgColor="#ffec02" color="#000" /> phase and will be supported for Build Comparison for Web Automation.

:::

1. Go to the `Insights` tab on the left navigation bar and click on the `Builds Comparison`.
2. Select the `Build` from the list to drill-down.
3. Now, search for `Test Case` widgets in the `Web Automation, App Automation & HyperExecute` products.
4. Add the widgets to the dashboard by clicking on the `Add Widget` button.


## Custom Filters Use Cases

1. You can send the `key` and `value` pair to the <BrandName /> platform.
2. You can filter the test cases based on the custom data.



