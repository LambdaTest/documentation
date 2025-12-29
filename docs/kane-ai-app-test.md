---
id: kane-ai-app-test
title: Automate your App Testing with KaneAI
hide_title: false
sidebar_label: App Test
description: Learn how to automate app testing with KaneAI. Generate and execute tests in plain English, save cases, and run them seamlessly
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai app test
url: https://www.testmu.ai/support/docs/kane-ai-app-agent
site_name: LambdaTest
slug: kane-ai-app-test
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "KaneAI Web Test",
          "item": "https://www.lambdatest.com/support/docs/kane-ai-app-test"
        }]
      })
    }}
></script>
In this guide, we'll walk you through the process of generating, and executing automated tests for your mobile application using KaneAI.

## Steps to generate the test cases

### Step 1: Create an App Test
Navigate to the [KaneAI homepage](https://kaneai.lambdatest.com/objective) and click on the **Create an App Test** button to initiate the process of generating test cases for your mobile app. Now select your desired operating system (Android, iOS) and upload your application to the platform to start testing.

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/create-app-test.gif').default} alt="Image" width="1347" height="616"  className="doc_img"/>

### Step 2: Write Your Test Cases in Plain English
In this step, you'll describe your desired test outcomes using plain English. Don't worry about writing specific code or scripts – KaneAI will handle that for you.

For example:
- Click on the hamburger menu button.
- Write the test in the text field "This is a sample app".
- Click on the "+" button.

Continue to add instructions/commands in plain English as you go; KaneAI will automatically queue them for execution, eliminating the need to wait for one test to finish before writing the next. Click the **Finish Test**.

> **Remember:** The more specific you are, the more accurate KaneAI's generated test cases will be.

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/write-test-case.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

### Step 3: Save your Test Case
Now, save all of the test cases you've generated so far.

Select your Project and the folder where you want to save your test cases. The **Test Name** and **Description** will be generated automatically, but you can also edit them. Select your test's **Type** and **Status**, as well as the necessary tags that will allow you to search for it later.

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/save-test-cases.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

### Step 4: Execute your test
To execute your test, click on the **HyperExecute** button and you will be redirected to the [HyperExecute dashboard](https://hyperexecute.lambdatest.com/hyperexecute/jobs) where your tests will be executed.

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/execute-test.gif').default} alt="Image" width="1347" height="616"  className="doc_img"/>