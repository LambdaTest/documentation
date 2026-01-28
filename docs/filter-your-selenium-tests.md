---
id: filter-your-selenium-tests
title: How To Filter Your Selenium Automation Tests
hide_title: true
sidebar_label: Filtering Your Selenium Tests
description: Guide to help you filter your tests on TestMu AI, a platform to perform cross-browser testing on a scalable, secure, and reliable online Selenium grid.
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
url: https://www.testmuai.com/support/docs/filter-your-selenium-tests/
site_name: LambdaTest
slug: filter-your-selenium-tests/
canonical: https://www.testmuai.com/support/docs/filter-your-selenium-tests/
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
          "name": "Filtering Selenium Tests",
          "item": `${BRAND_URL}/support/docs/group-tests-using-custom-tags/`
        }]
      })
    }}
></script>

# Filtering Your Selenium Tests

* * *

You can filter your tests on <BrandName />, using the various filters available on the automation dashboard. On each of the tabs available on the automation dashboard, namely Timeline, Automation Logs, and Analytics; we have a _filter toolbar_ to help you filter your tests based on selected values. In this document, we will help you understand the filter toolbar of each tab and how you can filter your tests on each of them.

## Filtering Tests on Timeline

* * *

When you visit the [Timeline](https://automation.lambdatest.com/timeline) on your automation dashboard, you can see a **Filter** icon that will allow you to play around with different filters. 

<img loading="lazy" src={require('../assets/images/uploads/filter-tests-on-timeline.webp').default} alt="selenium test" width="1921" height="867" className="doc_img"/>

### Understanding The Filter Toolbar

* * *

Now let us see each component of this filter toolbar one by one.

### 1\. Date

* * *

This option can be used to filter the automation tests on your timeline based on a range of dates. This means that you can select a start date and an end date, to filter the tests that ran in this period. By default, it shows you the range from starting till the current date.

<img loading="lazy" src={require('../assets/images/uploads/filter-date-1.webp').default} alt="automation log date" width="1024" height="416" className="doc_img"/>

To filter the tests based on custom dates, first, select the starting date from the open calendar window, and then select the ending date. You can see a selected range after you click on the starting date.

For example, for viewing the tests ran between 1st Feb - 3rd Feb, we have clicked on 1st Feb first and then on 3rd Feb.

<img loading="lazy" src={require('../assets/images/uploads/filter-date-2.webp').default} alt="automation log date" width="1024" height="416" className="doc_img"/>

Once the ending date is selected, the tests will be automatically sorted based on the selected custom dates.

### 2\. Users

* * *

You might have multiple team members added to your <BrandName /> account. So to filter out the tests by the member who ran the tests, you can use this option in the filter toolbar. When you click on the _Users_ option, you can see a list of members added to your account. Select the members whose tests you want to filter out, and the tests will be filtered automatically. You can even select multiple members in this option.

<img loading="lazy" src={require('../assets/images/uploads/filter-users.webp').default} alt="automation users" width="1024" height="410" className="doc_img"/>

### 3\. Build

* * *

You can use this feature if you want to see some selected builds on your Timeline. When you click on this option, a list of all the build that have ran appears. You can select one or more than one as per your choice.

<img loading="lazy" src={require('../assets/images/uploads/filter_tests-4-1024x414.webp').default} alt="automation logs build" width="1024" height="414" className="doc_img"/>

### 4\. Status

* * *

This option on the filter toolbar helps you to filter your automation tests based on the current status of the test, namely:

*   Running
*   Queued
*   Idle Timeout
*   Queue Timeout
*   Completed
*   Passed
*   Failed
*   Error
*   Stopped
*   Cancelled
*   Lambda Error
*   Allocating VM

When you click on this option, a list of all the above status will appear. You can select one or more of these status, as per your choice, to filter out the tests that have these status.
<img loading="lazy" src={require('../assets/images/uploads/filter-status.webp').default} alt="automation log status" width="1024" height="416" className="doc_img"/>

### 5\. Clear Filters

* * *

You can use this option to clear all the filters that have been applied. Upon clicking this option, the Timeline will return to the default state will all the filters removed.

## Filtering Tests on Automation Logs

* * *

Upon visiting the [Automation Logs](https://automation.lambdatest.com/logs) on your automation dashboard, here also you can see a filter toolbar.

<img loading="lazy" src={require('../assets/images/uploads/filter-bar.webp').default} alt="automation test toolbar" width="1024" height="416" className="doc_img"/>

The components of this toolbar are as follows:

1.  Build
2.  Date
3.  Users
4.  Status
5.  Tags
6.  Clear Filters

The Build, Date, Users, Status, and Clear Filters components behave in the same manner as in the Timeline. Let us see the Tags component in detail.

### Filter Tests Using Tags

* * *

Now you can filter your Selenium tests on <BrandName />, using the [custom tags](/docs/group-tests-using-custom-tags/). Click on the Tags option to select the 'Tag', by which you want to filter the tests. You must have used the custom tags feature earlier to use this filter.

Here's an example showing tests filtered using _Demo1_ custom tag, as shown in the image below:

<img loading="lazy" src={require('../assets/images/uploads/Filter-tests.webp').default} alt="automation test demo" width="1921" height="864" className="doc_img"/>

You can also filter the tests based on multiple tags. Just select multiple custom tags at once, from the filter toolbar, as shown in the image below:

<img loading="lazy" src={require('../assets/images/uploads/Filter-tests-2.webp').default} alt="automation tag" width="1921" height="864" className="doc_img"/>

## Filtering Tests on Analytics

* * *

Upon visiting the [Analytics](https://automation.lambdatest.com/analytics) on your automation dashboard, here also you can see a filter toolbar.

<img loading="lazy" src={require('../assets/images/uploads/filter-test-analytics.webp').default} alt="automation analytics" width="1024" height="415" className="doc_img"/>

The components of this toolbar are as follows:

1.  Tags
2.  Users
3.  Environment
4.  Date
5.  Analytics Tab Timeline
6.  Clear Filters

The Tags, Users, Date, and Clear Filters will behave in the same manner as above. Let us see the Environment and Analytics Tab Timeline components in detail.

### Filter Tests Using Environment

* * *

Environment filter can be used to filter the tests based on the Browser and/or Operating System used in the test. You can refer our complete [list of browsers](https://www.lambdatest.com/list-of-browsers/) to help you understand the options available in this filter.

<img loading="lazy" src={require('../assets/images/uploads/filter_tests-8-1024x412.webp').default} alt="automation filter" width="1024" height="412" className="doc_img"/>

### Filter Tests Using Analytics Tab Timeline

* * *

Analytics Tab Timeline option helps you quickly filter the tests based on some preset period of time. These periods are:

*   TODAY
*   THIS WEEK
*   THIS MONTH

You can select any of these, and the tests that ran in that respective period will get filtered out.<img loading="lazy" src={require('../assets/images/uploads/filter_tests-9-1024x415.webp').default} alt="automation date" width="1024" height="415" className="doc_img"/>

By default, the _THIS WEEK_ filter will be selected. You can use the Date filter instead if you want to filter the tests in a custom date period. If you select the Date filter, this filter will automatically get removed.

* * *

>That's all! You can now successfully filter your tests using the filter toolbar on your automation dashboard. If you still have any questions, feel free to share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or by mailing to us on [support@testmuai.com](mailto:support@testmuai.com). Happy testing! :)

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
        Filtering Selenium Tests
      </span>
    </li>
  </ul>
</nav>
