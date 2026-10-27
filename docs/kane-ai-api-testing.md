---
id: kane-ai-api-testing
title: KaneAI - API Testing
hide_title: false
sidebar_label: API Testing
description: Learn how to test api via kane ai
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai scroll elements
  - kaneai sidebar scroll
  - kaneai api console
url: https://www.testmuai.com/support/docs/kane-ai-api-testing/
site_name: TestMu AI
slug: kane-ai-api-testing/
canonical: https://www.testmuai.com/support/docs/kane-ai-api-testing/
toc_max_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "KaneAI Jira Integration",
          "item": `${BRAND_URL}/support/docs/kane-ai-api-testing/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/kane-ai-api-testing/"
    },
    "headline": "KaneAI - API Testing",
    "description": "Learn how to test api via kane ai",
    "url": "https://www.testmuai.com/support/docs/kane-ai-api-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "testmu ai automation",
      "testmu ai kaneai",
      "kaneai scroll elements",
      "kaneai api console"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-10-24T18:00:00+05:30"
  }) }}
/>
This document provides a detailed guide to performing API testing using KaneAI. The API testing feature allows for comprehensive backend testing, complementing existing UI testing capabilities. Follow the instructions below to execute API tests using the PetStore API as an example.

## 1. Adding an API in a Web Test

To start API testing on KaneAI, create a web test using the PetStore API, a commonly available sample. This will allow you to demonstrate API testing capabilities effectively.

- **Step**: Add an API through the slash command and navigate to the API module.
  
  <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image1.jpg').default} alt="kenai-jira integration" className="doc_img"/>
  

## 2. Adding a Curl Command

Within the API module, you can input the curl command to configure the API settings automatically.

- **Step**: Paste your curl command into the designated area. KaneAI will populate all necessary details. You may choose to validate the API response or add it directly to the test steps.

  <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image2.jpg').default} alt="kenai-jira integration" className="doc_img"/>
  

## 3. Validating API Response on KaneAI

To ensure the API works as expected, use the validation feature. This step confirms that the API responds correctly and can be added to test steps.

- **Step**: Click the 'validate' option to check the API response. A 200 response status indicates successful validation, automatically adding the API to your test steps. You can now proceed to submit multiple APIs simultaneously if needed.

  <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image3.jpg').default} alt="kenai-jira integration" className="doc_img"/>
  

## 4. Adding Non-Success APIs in Test Steps

For APIs that do not return a 200 status, you can review the response body and manually add them to the test steps as required.

- **Step**: If the API returns a 400 Bad Request or another error, it will not be added automatically. Review the response and add the API manually if needed.

  <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image8.jpg').default} alt="kenai-jira integration" className="doc_img"/>
  

## 5. Adding Multiple APIs in One Go

KaneAI allows batch processing of multiple APIs to streamline testing. This feature is helpful for scenarios requiring the execution of several API calls in succession.

- **Step**: Add multiple APIs by clicking the plus icon and selecting each API, or paste multiple curl commands to add them automatically to the test steps.

  <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image10.jpg').default} alt="kenai-jira integration" className="doc_img"/>
  

## 6. Handling Different HTTP Methods

KaneAI supports various HTTP methods like POST, PUT, GET, and DELETE, allowing you to test diverse API interactions.

- **Step**: Add APIs using different HTTP methods, such as a PUT or DELETE command. Validate each API as before, and if successful, they will be automatically included in the test steps.

  
    <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image6.jpg').default} alt="kenai-jira integration" className="doc_img"/>
  
    <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image9.jpg').default} alt="kenai-jira integration" className="doc_img"/>

## 7. Executing and Reviewing Test Steps

Once all APIs are added, KaneAI enables simultaneous execution, with details available on methods used, response statuses, and execution times.

- **Step**: Click to execute all added APIs in one go and review the response details for insights into API performance and data returned.

    <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image13.jpg').default} alt="kenai-jira integration" className="doc_img"/>

## 8. Inspecting API Requests in the Console

The Console shows the exact request KaneAI sent and how the call went. It sits in the response section of the API modal, alongside Body, Cookies, and Headers, and is available after you validate an API or reopen an API step from the test steps. Use it to debug an API step that returns an unexpected response, or one that returns no response at all, because the Console still shows what was sent.

<img loading="lazy" src={require('../assets/images/kane-ai/features/api-console/console-overview.png').default} alt="Console tab in the KaneAI API modal showing the request sent, response received, timing, and network sections" className="doc_img"/>

### Pretty and Raw Views

The Console opens in the **Pretty** view, which groups the details into the collapsible sections described below. Switch to **Raw** to see the request and response as plain HTTP text, with the request line, headers, and body exactly as they went over the wire.

### Request Sent

This section shows the request after KaneAI has resolved every variable:

- **Method and URL**: The HTTP method and the fully resolved URL the request went to.
- **Values used**: Each `{{variable}}` in the request, the value it resolved to, and where that value came from, such as a variable, parameter, secret, or environment. A variable that had no value is flagged as empty, which helps you spot a missing environment or an unset variable.
- **Headers**: Every header sent with the request and its source: typed by you in the Headers tab, generated from the Authorization tab, or added by KaneAI. KaneAI adds standard headers such as `Host`, `User-Agent`, `Accept`, `Accept-Encoding`, `Connection`, and `Content-Length`.
- **Body**: The request body that was sent, if the request had one.

### Response Received

This section shows the response the API returned: the status code, the response headers, and the response body along with its format and size.

### Timing

The Console breaks the total request time into phases: preparing the request, DNS lookup, connecting, establishing the secure (TLS) connection, waiting for the first byte, and downloading the response. The total matches the time shown on the API step.

- If the request failed, the Console shows the phase where it stopped, so you can tell a DNS failure from a connection or TLS failure.
- If KaneAI reused an existing connection, the connection phases are marked as skipped.

### Network

The Console shows how the request traveled:

- The IP address and region the request was sent from.
- The server address the request reached.
- The route, such as a direct connection, a tunnel, or a proxy.
- Whether a new connection was opened or an existing one was reused.
- TLS and certificate details for HTTPS requests.

If the API only accepts requests from known IP addresses, share the sent-from address with the team that manages the API so they can add it to their allowlist.

### Copy cURL and Download HAR

- **Copy cURL**: Copy the resolved request as a cURL command to rerun it in a terminal or share it with your team outside KaneAI.
- **Download HAR**: Download the API call as a HAR (HTTP Archive) file. Open it in your browser's developer tools or any HAR viewer, or attach it to a bug report.

This structure provides logical groupings for different aspects of API testing with KaneAI, making it easier to follow each type of action required for comprehensive API testing.

## Import Collections and Validate Responses

For file-based import and response validation, use these guides:

- [Bulk API Import](/support/docs/kaneai-bulk-api-import/): Import Postman collections or OpenAPI specifications, map variables from optional environment files, and add header assertions to the imported APIs.
- [API Response Assertions](/support/docs/kaneai-api-response-assertions/): Check response values with JSONPath or validate a response against a JSON Schema.

To validate network requests made by the application during UI interactions, see [Network Logs Assertions](/support/docs/kane-ai-network-assertions/).
