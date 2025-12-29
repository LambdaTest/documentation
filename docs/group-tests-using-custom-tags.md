---
id: group-tests-using-custom-tags
title: How To Create Custom Automation Tags
hide_title: true
sidebar_label: Group Tests Using Custom Tags
description: Now group your tests and organize them efficiently with the help of Custom Tags. TestMu AI allows you to create custom tags and filter them with a click.
keywords:
    - TestMu AI automation
    - selenium automation grid
    - selenium grid online
    - online selenium automation
    - selenium automation grid online
    - TestMu AI selenium automation grid
    - selenium tutorial
    - Selenium getting started
    - testmu ai getting started
    - filter tests
    - custom tags
    - group tests
url: https://www.testmu.ai/support/docs/group-tests-using-custom-tags
site_name: LambdaTest
slug: group-tests-using-custom-tags
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Group Test Using Custom Tags",
          "item": "https://www.lambdatest.com/support/docs/group-tests-using-custom-tags/"
        }]
      })
    }}
></script>

# Group Tests Using Custom Tags

* * *

LambdaTest allows you to group your automation tests using custom tags. In this document, we will see how to create custom tags and use them. For demonstration purposes, we have used a [sample TestNG script](https://github.com/LambdaTest/Java-TestNG-Selenium) to run on the LambdaTest platform.

## How To Create Custom Tags While Performing Automation On LambdaTest Selenium Grid?

* * *

You can create a custom tag using a simple step. While writing your Selenium automation tests, when you create the [Desired Capabilities](/docs/selenium-automation-capabilities/) via code, just add the below lines of code.

*   Create a String array that contains the names of your custom tags, separated by a comma.
```javascript
        // In case for just 1 tag, just add 1 element in the array
        String[] customTags = {"Custom Tag"};

        // In case for multiple tags, add them in the array separated by comma
        String[] customTags = {"Tag 1", "Tag 2", "Tag 3", ...};
```       

*   Now you just need to add this custom tag in your Desired Capabilities instance, as shown below:
```javascript
        DesiredCapabilities caps = new DesiredCapabilities();
        .
        .

        // To create custom tags
        caps.setCapability("tags", customTags); 
  ```
*For example:*

<img loading="lazy" src={require('../assets/images/uploads/custom-tags-5-1.webp').default} alt="custom tags" width="1089" height="708" className="doc_img"/>

You have successfully created the custom tags. Let's now see how to view the custom tags and how to group the test based on custom tags in the below section.

## How To View Custom Tags On LambdaTest Platform?

* * *

There are multiple ways by which you can view the custom tags in the automation dashboard, such as Timeline view and Automation logs view. We will see one by one, how to view the custom tags in each of these.

### How To View Custom Tags On Your Timeline?

Navigate to [Timeline](https://automation.lambdatest.com/timeline/) view of your automation dashboard, and toggle the **Build View** to **Test View**, as shown in the image below:

<img loading="lazy" src={require('../assets/images/uploads/build-view.webp').default} alt="Automation build" width="1024" height="414" className="doc_img"/>

You can see the applied custom tags below the tests in this Test View. <img loading="lazy" src={require('../assets/images/uploads/test-view.webp').default} alt="Test View" width="1024" height="461" className="doc_img"/>

### How To View Custom Tags On Your Automation Logs?

* * *

Navigate to [Automation Logs](https://automation.lambdatest.com/logs) of your automation dashboard, and you can see the applied custom tags below the tests in the left panel. <img loading="lazy" src={require('../assets/images/uploads/tags-1.webp').default} alt="Automation logs" width="1024" height="407" className="doc_img"/>

## How To Filter Tests Using Custom Tags On LambdaTest Platform?

* * *

You can also filter the tests on your automation dashboard with the help of these custom tags. Let us see how.

Navigate to [Automation Logs](https://automation.lambdatest.com/logs) of your automation dashboard, and you can see a filter by name **Tags** in the filter toolbar. <img loading="lazy" src={require('../assets/images/uploads/tags-2.webp').default} alt="Automation tags" width="1024" height="399" className="doc_img"/>

Click on it and select the Tag by which you want to filter the tests on your dashboard. For example, we have filtered the test using _Tag2_ custom tag, as shown in the image below:

<img loading="lazy" src={require('../assets/images/uploads/tags-3.webp').default} alt="automation log tags" width="1838" height="790" className="doc_img"/>

You can even filter the tests by selecting multiple custom tags at once, from the filter toolbar, as shown in the image below:

<img loading="lazy" src={require('../assets/images/uploads/custom-tags-13.webp').default} alt="custom automation tags" width="1024" height="429" className="doc_img"/>

* * *

> Kudos! You have successfully created a custom tag and grouped your tests based on the custom tag. If you still have any questions, feel free to share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or by mailing to us on [support@lambdatest.com](mailto:support@lambdatest.com). Happy testing! :)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
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
