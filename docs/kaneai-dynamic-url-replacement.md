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
url: https://www.testmuai.com/support/docs/kaneai-dynamic-url-replacement/
site_name: TestMu AI
slug: kaneai-dynamic-url-replacement/
canonical: https://www.testmuai.com/support/docs/kaneai-dynamic-url-replacement/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "Dynamic URL",
          "item": `${BRAND_URL}/support/docs/kaneai-dynamic-url-replacement/`
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
      "@id": "https://www.testmuai.com/support/docs/kaneai-dynamic-url-replacement/"
    },
    "headline": "Dynamic URL Replacement",
    "description": "This documentation will help you to understand how to dynamically update your URL during the KaneAI testing",
    "url": "https://www.testmuai.com/support/docs/kaneai-dynamic-url-replacement/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "modules versioning",
      "enhancements",
      "modules"
    ],
    "proficiencyLevel": "Beginner",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "API Endpoint",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Request Headers\n```javascript\nContent-Type: application/json\nAuthorization: Basic <Base64Auth>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The following JSON payload demonstrates how to use the API to configure Dynamic URL Replacement",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n  \"test_run_id\": \"YOUR_TEST_RUN_ID\", // Replace with your test run ID\n  \"concurrency\": 1, // Optional, Default: 1\n  \"title\": \"UNIQUE_BUILD_NAME\", // Optional\n  \"region\": \"YOUR_DESIRED_REGION\", // e.g., eastus, centralindia\n  \"replaced_url\": [\n      {\n          \"pattern_url\": \"TEST_URL_1\",\n          \"replacement_url\": \"REPLACED_TEST_URL_1\"\n      },\n      {\n          \"pattern_url\": \"TEST_URL_2\",\n          \"replacement_url\": \"REPLACED_TEST_URL_2\"\n      },\n      {\n          \"pattern_url\": \"TEST_URL_3\",\n          \"replacement_url\": \"REPLACED_TEST_URL_3\"\n      }\n  ],\n  \"accessibility\": false\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Here\u2019s an example cURL command to trigger a test run with Dynamic URL Replacement",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic <Base64Auth>' \\\n--data '{\n    \"test_run_id\": \"YOUR_TEST_RUN_ID\", \n    \"concurrency\": 1, \n    \"title\": \"UNIQUE_BUILD_NAME\", \n    \"region\": \"eastus\", \n    \"replaced_url\": [\n        {\n            \"pattern_url\": \"lambdatest\",\n            \"replacement_url\": \"ajio\"\n        },\n        {\n            \"pattern_url\": \"d\",\n            \"replacement_url\": \"flipkart\"\n        },\n        {\n            \"pattern_url\": \"hello\",\n            \"replacement_url\": \"1234\"\n        }\n    ],\n    \"accessibility\": false\n}'"
      }
    ],
    "dateModified": "2026-09-09T19:16:50+05:30"
  }) }}
/>
As a QA Engineer, you may need to run test cases on different environments (e.g., staging, production) without altering your test scripts. With Dynamic URL Replacement you can execute the same test cases across multiple environments without modifying the test scripts, ensuring seamless execution across different environments.

> This feature is applicable only for Web Tests

## Prerequisites
You must have [created a test run for KaneAI Generated Tests](/support/docs/kaneai-hyperexecute-test-run-execution/).

## How to Use Dynamic URL Replacement

### Step 1: Navigate to the Test Runs Page
- Log in to <BrandName />.
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

## How to Use Dynamic URL Replacement via API
If you prefer to use the API to configure and execute tests with Dynamic URL Replacement, follow the instructions below:

### API Endpoint
```yaml title="POST request"
https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute
```

### Request Headers

<VerifiedTag value="Verified" />

```javascript
Content-Type: application/json
Authorization: Basic <Base64Auth>
```

### Request Body
The following JSON payload demonstrates how to use the API to configure Dynamic URL Replacement:

<VerifiedTag value="Verified" />

```javascript
{
  "test_run_id": "YOUR_TEST_RUN_ID", // Replace with your test run ID
  "concurrency": 1, // Optional, Default: 1
  "title": "UNIQUE_BUILD_NAME", // Optional
  "region": "YOUR_DESIRED_REGION", // e.g., eastus, centralindia
  "replaced_url": [
      {
          "pattern_url": "TEST_URL_1",
          "replacement_url": "REPLACED_TEST_URL_1"
      },
      {
          "pattern_url": "TEST_URL_2",
          "replacement_url": "REPLACED_TEST_URL_2"
      },
      {
          "pattern_url": "TEST_URL_3",
          "replacement_url": "REPLACED_TEST_URL_3"
      }
  ],
  "accessibility": false
}
```

### Parameters Explained
| Parameter | Description |
|-----------|-------------|
| `test_run_id` | The unique identifier for the test run. |
| `concurrency` | (Optional) Number of parallel executions. Default is 1. |
| `title` | (Optional) A unique name for the build. |
| `region` | The region where the tests will be executed (e.g., eastus, centralindia). |
| `replaced_url` |  An array of objects containing `pattern_url` and `replacement_url` |
| `accessibility` | (Optional) Enable or disable accessibility testing. |

### Example cURL Command
Here’s an example cURL command to trigger a test run with Dynamic URL Replacement:

<VerifiedTag value="Verified" />

```javascript
curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic <Base64Auth>' \
--data '{
    "test_run_id": "YOUR_TEST_RUN_ID", 
    "concurrency": 1, 
    "title": "UNIQUE_BUILD_NAME", 
    "region": "eastus", 
    "replaced_url": [
        {
            "pattern_url": "lambdatest",
            "replacement_url": "ajio"
        },
        {
            "pattern_url": "d",
            "replacement_url": "flipkart"
        },
        {
            "pattern_url": "hello",
            "replacement_url": "1234"
        }
    ],
    "accessibility": false
}'
```

- Replace `<Base64Auth>` with your actual Base64-encoded authorization credentials.
- Ensure that the `pattern_url` matches the exact URL pattern used in your test scripts.
- Multiple `replaced_url` entries can be added to replace different URLs dynamically.
