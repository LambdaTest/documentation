---
id: smartui-pdf-api-upload
title: Upload PDFs via API
sidebar_label: API Upload
description: Learn how to upload PDF files to SmartUI using the REST API for visual regression testing.
keywords:
  - PDF API Upload
  - SmartUI API
  - Visual Regression Testing
  - PDF Testing
  - REST API
url: https://www.lambdatest.com/support/docs/smartui-pdf-api-upload/
site_name: LambdaTest
slug: smartui-pdf-api-upload/
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
          "name": "SmartUI PDF API Upload",
          "item": "https://www.lambdatest.com/support/docs/smartui-pdf-api-upload/"
        }]
      })
    }}
></script>

:::caution
This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.lambdatest.com/demo).
:::

## Prerequisites for Using SmartUI

- Familiarity with HTTP APIs is essential.
- Visit the [`LambdaTest SmartUI`](https://smartui.lambdatest.com/) page and log in with your credentials.
- Obtain your `LT_USERNAME` and `LT_ACCESS_KEY` by clicking on the `Access Key` button, located at the top right corner of your dashboard.

## Step 1: Establishing a SmartUI Project

To initiate a SmartUI PDF Comparison Project, adhere to the following instructions:

1. Navigate to the [SmartUI Projects Page](https://smartui.lambdatest.com/).
2. Tap on the `new project` button.
3. Specify your platform type as `PDF`.
4. Provide your `project` name, designate `approvers`, and add `tags` (optional).
5. Confirm your entry by clicking on **Submit**.

Once your project is active, retrieve your `Project Token` from the application. Here's an example of a project token:

```bash
projectToken = "123456#1234abcd-****-****-****-************"
```

## Uploading PDFs via API

After setting up your SmartUI Project, you can upload your local PDF files to your project. This will automatically generate a build by capturing snapshots of every page.

Here's how you can upload your PDFs:

1. Retrieve your API `URL Endpoint` post activation of your enterprise plan. To schedule a demonstration, click [here](https://www.lambdatest.com/demo).

2. Append the following parameters to your request payload via `form-body`:

| Variable     | Type   | Description                                                                                                                                      | Required? |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| projectToken | string | This token is required to upload PDF files and validate your project. <br/> Example: `projectToken:123456#1234abcd-****-****-****-************` | Yes       |
| pathToFiles  | array  | Add the path to the PDFs that will be uploaded. <br/> Example: `pathToFiles : [ "path/to/pdf-1", "path/to/pdf-2"]`                                | Yes       |
| buildName    | string | Assign a name of your choice to the build comprising the uploaded PDFs. <br/> Example: `buildName : #<Build_Name>`                                | No        |

:::note 
Only files in `.pdf` format are compatible with this feature.
:::

## API Request Example

Here's a sample API request using cURL:

```bash
curl -X POST "YOUR_API_ENDPOINT" \
  -H "Content-Type: multipart/form-data" \
  -F "projectToken=123456#1234abcd-****-****-****-************" \
  -F "pathToFiles[]=path/to/document1.pdf" \
  -F "pathToFiles[]=path/to/document2.pdf" \
  -F "buildName=Release-v2.1"
```

## Response Format

The API will return a JSON response containing:

- **Build ID**: Unique identifier for the uploaded build
- **Status**: Upload status (success/failure)
- **Pages Captured**: Number of pages processed
- **Test Results**: Visual comparison results (if available)

## Use Cases

- **Automated CI/CD Integration**: Seamlessly integrate PDF testing into your deployment pipeline
- **Batch Processing**: Upload multiple PDFs simultaneously for efficient testing
- **Custom Workflows**: Build custom applications that interact with SmartUI programmatically
- **Enterprise Integration**: Connect with existing enterprise systems and workflows
