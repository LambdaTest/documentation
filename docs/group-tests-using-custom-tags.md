---
id: group-tests-using-custom-tags
title: How to Create Custom Automation Tags
sidebar_label: Tag and Group Tests
description: Create custom tags in desired capabilities to group, view, and filter automation tests on the dashboard.
keywords:
  - create custom tags selenium
  - group automation tests by tag
  - filter tests using custom tags
  - selenium desired capabilities tags
  - automation dashboard tag filter
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/group-tests-using-custom-tags/
site_name: TestMu AI
slug: group-tests-using-custom-tags/
canonical: https://www.testmuai.com/support/docs/group-tests-using-custom-tags/
---
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
          "name": "Group Test Using Custom Tags",
          "item": `${BRAND_URL}/support/docs/group-tests-using-custom-tags/`
        }]
      })
    }}
></script>

# Group Tests Using Custom Tags

* * *

TestMu AI allows you to group your automation tests using custom tags. This document shows how to create custom tags and use them. For demonstration purposes, we use a [sample TestNG script](https://github.com/LambdaTest/Java-TestNG-Selenium) to run on the TestMu AI platform.

## How to Create Custom Tags on the Selenium Grid
---
Add a tags capability with a String array to your desired capabilities.

You can create a custom tag while writing your Selenium automation tests. When you create the [Desired Capabilities](/docs/selenium-automation-capabilities/) via code, add the below lines of code.

*   Create a String array that contains the names of your custom tags, separated by a comma.
```javascript
        // In case for just 1 tag, just add 1 element in the array
        String[] customTags = {"Custom Tag"};

        // In case for multiple tags, add them in the array separated by comma
        String[] customTags = {"Tag 1", "Tag 2", "Tag 3", ...};
```       

*   Now add this custom tag in your Desired Capabilities instance:
```javascript
        DesiredCapabilities caps = new DesiredCapabilities();
        .
        .

        // To create custom tags
        caps.setCapability("tags", customTags); 
  ```
*For example:*

<img loading="lazy" src={require('../assets/images/uploads/custom-tags-5-1.webp').default} alt="custom tags" width="1089" height="708" className="doc_img"/>

You have successfully created the custom tags. Let us now see how to view and group tests based on custom tags.

## How to View Custom Tags on the Platform
---
View your custom tags in the Timeline or Automation Logs views on the dashboard.

There are multiple ways to view custom tags in the automation dashboard, such as Timeline view and Automation logs view.

### How to View Custom Tags on Your Timeline

Navigate to [Timeline](https://automation.lambdatest.com/timeline/) view of your automation dashboard, and toggle the **Build View** to **Test View**:

<img loading="lazy" src={require('../assets/images/uploads/build-view.webp').default} alt="Automation build" width="1024" height="414" className="doc_img"/>

You can see the applied custom tags below the tests in this Test View. <img loading="lazy" src={require('../assets/images/uploads/test-view.webp').default} alt="Test View" width="1024" height="461" className="doc_img"/>

### How to View Custom Tags on Your Automation Logs

* * *

Navigate to [Automation Logs](https://automation.lambdatest.com/logs) of your automation dashboard, and you can see the applied custom tags below the tests in the left panel. <img loading="lazy" src={require('../assets/images/uploads/tags-1.webp').default} alt="Automation logs" width="1024" height="407" className="doc_img"/>

## How to Filter Tests Using Custom Tags on the Platform
---
Select one or more custom tags in the filter toolbar to narrow down your test results.

You can filter tests on your automation dashboard with these custom tags.

Navigate to [Automation Logs](https://automation.lambdatest.com/logs) of your automation dashboard, and you can see a filter by name **Tags** in the filter toolbar. <img loading="lazy" src={require('../assets/images/uploads/tags-2.webp').default} alt="Automation tags" width="1024" height="399" className="doc_img"/>

Click on it and select the Tag by which you want to filter the tests on your dashboard. For example, we have filtered the test using _Tag2_ custom tag:

<img loading="lazy" src={require('../assets/images/uploads/tags-3.webp').default} alt="automation log tags" width="1838" height="790" className="doc_img"/>

You can filter tests by selecting multiple custom tags at once from the filter toolbar:

<img loading="lazy" src={require('../assets/images/uploads/custom-tags-13.webp').default} alt="custom automation tags" width="1024" height="429" className="doc_img"/>

* * *

> You have successfully created a custom tag and grouped your tests based on the custom tag. If you have questions, share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or by mailing us at [support@testmuai.com](mailto:support@testmuai.com).

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
        Group Test Using Custom Tags
      </span>
    </li>
  </ul>
</nav>
