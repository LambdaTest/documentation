---
id: automated-test-cases-linked-using-capability
title: Linking Automated Test Cases to Test Manager
hide_title: false
sidebar_label: Link Test Case using Capabilities
description: Link automated tests to Test Manager with Test Case IDs for better traceability. Supported on HyperExecute and Web Automation. Streamline your workflows!
keywords:
  - automated test cases
  - automated test cases linking to test manager
  - test cases
  - automation
  - hyperexecute
url: https://www.testmuai.com/support/docs/automated-test-cases-linked-using-capabilityr/
site_name: TestMu AI
slug: automated-test-cases-linked-using-capability/
canonical: https://www.testmuai.com/support/docs/automated-test-cases-linked-using-capability/
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
          "name": "Linking Automated Test Cases to Test Manager",
          "item": `${BRAND_URL}/support/docs/automated-test-cases-linked-using-capability/`
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
      "@id": "https://www.testmuai.com/support/docs/automated-test-cases-linked-using-capabilityr/"
    },
    "headline": "Linking Automated Test Cases to Test Manager",
    "description": "Link automated tests to Test Manager with Test Case IDs for better traceability. Supported on HyperExecute and Web Automation. Streamline your workflows!",
    "url": "https://www.testmuai.com/support/docs/automated-test-cases-linked-using-capabilityr/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Test Manager",
    "keywords": [
      "automated test cases",
      "automated test cases linking to test manager",
      "test cases"
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
        "name": "Here is a sample configuration demonstrating how to include the tms.tc_id key in your script",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const capabilities = {\n  \"lt:Options\": {\n      \"project\": \"Your Project Name\", // Specify the project where the test run should be created\n      \"tms.tc_id\": \"TC-1470\" // Link the test execution to the Test Case ID 'TC-1470'\n  }\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To ensure the test run is created in the correct project, use the project capability along with tms.tc_id",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const capabilities = {\n  \"browserName\": \"Chrome\",\n  \"browserVersion\": \"latest\",\n  \"lt:Options\": {\n      \"platform\": \"Windows 10\",\n      \"build\": \"Playwright Build\",\n      \"name\": \"Sample Test\",\n      \"project\": \"Demo-Project\", // Target project name\n      \"tms.tc_id\": \"TC-95668\" // Test case ID from the target project\n  }\n};"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
Test Manager supports linking automated test runs directly to specific test cases using Test Case IDs. This feature enables better traceability and management of your automated testing workflow.

> Currently, this feature is supported on [HyperExecute](/support/docs/getting-started-with-hyperexecute/) and Web Automation tests.

## How to Link a Test Case ID

To link an automated test run with a specific test case, add the `tms.tc_id` key in the `lt:Options` section of your test capabilities. Here is a sample configuration demonstrating how to include the `tms.tc_id` key in your script:

```javascript
const capabilities = {
  "lt:Options": {
      "project": "Your Project Name", // Specify the project where the test run should be created
      "tms.tc_id": "TC-1470" // Link the test execution to the Test Case ID 'TC-1470'
  }
};
```

- `lt:Options` : A JSON object containing additional options for <BrandName /> configurations.
- `project` : The name of the project in Test Manager where the test run should be created. If not specified, the test run will be created under **LambdaTest Default Project**.
- `tms.tc_id` : The key used to link a test case in Test Manager. Replace "TC-1470" with your desired Test Case ID.

## Specifying Target Project

When you link a test case using `tms.tc_id`, a test run is automatically created with your build name. By default, this test run is created under **LambdaTest Default Project**.

To ensure the test run is created in the correct project, use the `project` capability along with `tms.tc_id`:

```javascript
const capabilities = {
  "browserName": "Chrome",
  "browserVersion": "latest",
  "lt:Options": {
      "platform": "Windows 10",
      "build": "Playwright Build",
      "name": "Sample Test",
      "project": "Demo-Project", // Target project name
      "tms.tc_id": "TC-95668" // Test case ID from the target project
  }
};
```

:::warning
The `project` name must match exactly as it appears in Test Manager. If the project name is incorrect or doesn't exist, the test run will be created under **LambdaTest Default Project**.
:::

:::info NOTE
- Ensure the Test Case ID exists in Test Manager before linking.
- The Test Case ID format should match exactly as shown in Test Manager
- Each automated test run can be linked to one test case at a time
- The test case specified in `tms.tc_id` should belong to the project specified in `project` capability
:::
