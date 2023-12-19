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
  - Test Muting
  - Mute test cases
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

> This is currently under the **Beta** version.

<!-- ## Overview

The "**Test Muting**" feature is designed to help you manage and control test scenarios that consistently fail. It allows you to mute specific tests that have failed for a predefined number of consecutive times. Additionally, you can enable **Auto-Muting** to automatically mute scenarios across all the jobs in your organization.

## Why do you need Test Muting? -->

Imagine you are a software tester, and you have a test suite with hundreds of tests. Some of these tests are known to fail consistently, but there is no way to disable them. This means that every time you run the test suite, these failing tests cause the suite to fail. This can be frustrating and time-consuming, especially if you are trying to identify and resolve real problems with the application under test.

**Test Muting** is a feature that allows you to temporarily disable a test case from being executed. This can be useful for skipping failing or irrelevant tests, which can improve the efficiency and effectiveness of your test runs and help you focus on the most important results.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/test-muting/4.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

:::info
To activate Test Muting for your organization, reach out to our **Customer Support** team to enable the Test Muting feature.
:::

## How do you Enable Test Muting for your Organization?

As you can see, we have triggered a Job in HyperExecute, and we've encountered a recurring issue with a specific test consistently failing. To address this, we will implement Test Muting functionality, enabling automatic muting of a test that fails a predefined consecutive number of times.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/test-muting/8.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

Now, to enable the Test Muting, follow the below mentioned steps:

**Step 1:** Go to the [LambdaTest Dashboard](https://accounts.lambdatest.com/dashboard).

**Step 2:** Click on the **Settings** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/test-muting/1.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

**Step 3:** Click to the **Organization Settings** section.

**Step 4:** Go to the **Org Product Preferences** section.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/test-muting/2.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

**Step 5:** Click on the "**Automatically mute tests**" toggle button.

- Select the threshold number to automatically mute your tests (default setting is 5 times).
- Customize your **Notification Settings** to mute specific tests and reduce distractions during test execution.
- You can also choose if you would like to recieve updates on your mail id and click on **Save** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/test-muting/3.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

**Step 6:** Now, if you trigger the same job again, you will notice that the particular test has muted.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/test-muting/6.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

## How do you Manually Mute specific Tests?

**Step 1:** Execute your job on HyperExecute.

- Click on the **3 dots** of the desired test you want to **Mute**.
- Click on the **Mute Scenario** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/test-muting/5.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

**Step 2:** Trigger the same job again, and you will notice that particular test won't be executed.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/test-muting/6.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

## How do you UnMute Tests?

**Step 1:** Click on the **3 dots** of the muted test.

**Step 2:** Click on the **Unmute scenario** button. 

<img loading="lazy" src={require('../assets/images/hyperexecute/features/test-muting/7.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

> The test will remain in-active until manually unmuted.