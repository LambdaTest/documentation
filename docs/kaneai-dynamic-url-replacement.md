---
id: kaneai-dynamic-url-replacement
title: Dynamic URL Replacement
hide_title: false
sidebar_label: Dynamic URL Replacement
description: This documentation will help you to understand how to dynamically update your URL during the KaneAI testing
keywords:
- modules versioning
- enhancements
- modules
- dynamic url
url: https://www.lambdatest.com/support/docs/kaneai-dynamic-url-replacement/
site_name: LambdaTest
slug: kaneai-dynamic-url-replacement/
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
          "name": "Dynamic URL",
          "item": "https://www.lambdatest.com/support/docs/kaneai-dynamic-url-replacement/"
        }]
      })
    }}
></script>
As a QA Engineer, you may need to run test cases on different environments (e.g., staging, production) without altering your test scripts. With Dynamic URL Replacement you can execute the same test cases across multiple environments without modifying the test scripts, ensuring seamless execution across different environments.

> This feature is applicable only for Web Tests

## Prerequisites
You must have [created a test run for KaneAI Generated Tests](/support/docs/kaneai-hyperexecute-test-run-execution/).

## How to Use Dynamic URL Replacement

### Step 1: Navigate to the Test Runs Page
- Log in to LambdaTest.
- Go to the Test Manager > Test Runs section.
- Click on your desired **Test Run**.
- Click on **Run with HyperExecute** button.

<img loading="lazy" src={require('../assets/images/kane-ai/features/dynamic-url-replacement/1.png').default} alt="Image" className="doc_img"/>

### Step 2: Configure the Test Execution URL
- In the Run on HyperExecute side drawer, locate the new field labeled **Replace Test Execution URL**.
- Enter the **Pattern URL** (your original URL used in the tests) and **Replacement URL** (URL of different environment you want to test) in the text field.

> You can add multiple URLs for all web tests in the run to execute in different environments

### Step 3: Execute the Test Run
- If the **Replace Test Execution URL** field is filled, the entered URL will override the default (Pattern) URL during execution.
- If left empty, the test will run with the default URL.
- Click on the **Execute** button

<img loading="lazy" src={require('../assets/images/kane-ai/features/dynamic-url-replacement/2.png').default} alt="Image" className="doc_img"/>

