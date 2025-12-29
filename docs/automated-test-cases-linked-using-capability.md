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
url: https://www.testmu.ai/support/docs/automated-test-cases-linked-using-capabilityr
site_name: LambdaTest
slug: automated-test-cases-linked-using-capability
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
          "name": "Linking Automated Test Cases to Test Manager",
          "item": "https://www.lambdatest.com/support/docs/automated-test-cases-linked-using-capability/"
        }]
      })
    }}
></script>
Test Manager supports linking automated test runs directly to specific test cases using Test Case IDs. This feature enables better traceability and management of your automated testing workflow.

> Currently, this feature is supported on [HyperExecute](/support/docs/getting-started-with-hyperexecute/) and Web Automation tests.

## How to Link a Test Case ID

To link an automated test run with a specific test case, add the `tms.tc_id` key in the `lt:Options` section of your test capabilities. Here is a sample configuration demonstrating how to include the `tms.tc_id` key in your script:

```javascript
const capabilities = {
  "lt:Options": {
      "tms.tc_id": "TC-1470" // Link the test execution to the Test Case ID 'TC-1470'
  }
};
```

- `lt:Options` : A JSON object containing additional options for LambdaTest configurations.
- `tms.tc_id` : The key used to link a test case in Test Manager. Replace "TC-1470" with your desired Test Case ID.

:::info NOTE
- Ensure the Test Case ID exists in Test Manager before linking.  
- The Test Case ID format should match exactly as shown in Test Manager
- Each automated test run can be linked to one test case at a time
:::