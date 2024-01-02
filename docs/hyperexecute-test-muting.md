---
id: hyperexecute-test-muting
title: Test Muting
hide_title: true
sidebar_label: Test Muting
description: Understand how to mute tests on scenario level in HyperExecute.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-test-muting/
site_name: LambdaTest
slug: hyperexecute-test-muting/
---

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
          "name": "HyperExecute Concepts",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-test-muting"
        }]
      })
    }}
></script>

# Test Muting

## Overview

The "**Test Muting**" feature is designed to help you manage and control test scenarios that consistently fail. It allows you to mute specific tests that have failed for a predefined number of consecutive times. Additionally, you can enable auto-muting to automatically mute scenarios across all the jobs in your organization.

## Why Test Muting?

The primary goal of Test Muting is to improve testing efficiency and provide a more controlled environment by allowing you to:

- Ignore expected failures and reduce noise in your test results.

- Achieve faster feedback on your HyperExecute jobs.

- Customize the number of consecutive failures required to mute a test.

- Manually mute/unmute specific test cases.

- View the history of test muting activities.

<img loading="lazy" src={require('../assets/images/hyperexecute/test-muting/4.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

## Enable Test Muting

To enable the Test Muting, follow the below mentioned steps:

**Step 1:** Go to the [LambdaTest Dashboard](https://accounts.lambdatest.com/dashboard).

**Step 2:** Click on the **Settings** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/test-muting/1.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

**Step 3:** Click on the **Product Preference** Tab.

**Step 4:** Go to the **HyperExecute** section.

<img loading="lazy" src={require('../assets/images/hyperexecute/test-muting/2.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

**Step 5:** Click on the "**Automatically mute tests**" toggle button.

- Select the threshold number to automatically mute your tests (default setting is 5 times).

- Customize your **Notification Settings** to mute specific tests and reduce distractions during test execution.

- You can also choose if you would like to recieve updates on your mail id and click on **Save** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/test-muting/3.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>