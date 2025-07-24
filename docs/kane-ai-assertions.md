---
id: kane-ai-assertions
title: KaneAI - Assertions
hide_title: false
sidebar_label: Assertions
description: KaneAI's assertion feature enables hard assertions to stop tests on failure, with detailed logs, while allowing soft assertions for selective test continuation.
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai assertions
  - kaneai hard assertion
  - kaneai soft assertion
url: https://www.lambdatest.com/support/docs/kane-ai-assertions/
site_name: LambdaTest
slug: kane-ai-assertions/
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
          "name": "KaneAI Assertions",
          "item": "https://www.lambdatest.com/support/docs/kane-ai-assertions/"
        }]
      })
    }}
></script>
The Assertion Feature in KaneAI enhances test execution control by transitioning from soft assertions (which allow tests to proceed despite failures) to hard assertions, where test execution stops immediately upon failure. This feature ensures that failures are logged with detailed remarks, providing better debugging insights. However, users retain flexibility by marking specific assertions as soft, allowing test execution to continue selectively.

## Key Features
- **Hard Assertions :** Test execution halts immediately upon assertion failure, marking the test as failed.
- **Soft Assertions :** Specific assertions can be marked as soft, allowing test execution to continue despite failures.
- **Detailed Failure Logging :** Every failed assertion logs comprehensive failure remarks for better debugging.
- **Improved Test Control :** Users can customize assertion behavior based on test requirements.

## Step-by-Step Guide

### Step 1: Initiate a Test Session
- Log in to your LambdaTest account.
- Click on Create a Web / App Test to start a new session within Kane AI.

<img loading="lazy" src={require('../assets/images/kane-ai/features/assertion/img1.png').default} alt="kaneai" className="doc_img"/>

### Step 2: Perform an Assertion test
- Create an assertion step and KaneAI will perform a visual query to detect if the specified test is valid or not.
- If the assertion passes, it is marked as **Assertion True**.
- If the assertion fails it will be marked as **Assertion Failed**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/assertion/img2.png').default} alt="kaneai" className="doc_img"/>

### Step 3: Configure Hard Assertion

>**NOTE:** From **28 July 2025** onwards we are introducing **Failure Conditions** which will change the test step execution behavior. This change will not affect your existing test cases or the generated code where you’ve used hard/soft assertions. However, when you edit these tests, the new failure conditions will be applied. Refer [Failure Conditions doc](https://www.lambdatest.com/support/docs/kaneai-failure-conditions)

- Click on the assertion step where the test failed.
- Toggle the button to enable or disable the **Hard assertion**:
- If enabled, test execution stops immediately on failure.
- If disabled, the test continues execution despite the failure.
- Save the configuration and proceed.

<img loading="lazy" src={require('../assets/images/kane-ai/features/assertion/img5.png').default} alt="kaneai" className="doc_img"/>

### Step 4: Review and Execute the test
- Navigate to the Test Manager to view the summary of executed tests.
- Review the steps performed, and click on the **save** button.
- Navigate to the **Code** tab, your code is generated to run on HyperExecute.
- Click on the button **Run on HyperExecute**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/assertion/img4.png').default} alt="kaneai" className="doc_img"/>

### Step 5: Monitor the Test Execution
- Veriy your test results in the logs as shown below:

<img loading="lazy" src={require('../assets/images/kane-ai/features/assertion/img3.png').default} alt="kaneai" className="doc_img"/>
