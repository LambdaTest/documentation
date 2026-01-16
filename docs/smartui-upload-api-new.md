---
id: smartui-upload-api-v2
title: Getting Started With Uploading Screenshots through API for Visual Regression Testing
sidebar_label: Upload through API
description: Discover how to leverage TestMu AI's SmartUI upload API v2 for seamless Visual Regression Testing. Learn the prerequisites, create projects.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests
url: https://www.testmu.ai/support/docs/smartui-upload-api-v2/
site_name: LambdaTest
slug: smartui-upload-api-v2
canonical: https://www.testmu.ai/support/docs/smartui-upload-api-v2/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
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
          "name": "WebDriverIO With Appium",
          "item": `${BRAND_URL}/support/docs/smartui-upload-api-v2/`
        }]
      })
    }}
></script>

:::info
This is the guide to setup the **version 2** of the SmartUI upload API.
:::

### Prerequisites for running SmartUI

- Basic understanding of HTTP APIs is required.
- Go to [`LambdaTest SmartUI`](https://smartui.lambdatest.com/) and login along with your credentials.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from `Access Key` button on the top right of the dashboard.

The following steps will guide you in running your first Visual Regression test on <BrandName /> SmartUI platform -

### Create a SmartUI Project

To create a SmartUI Project, follow these steps:

- Go to [Projects page](https://smartui.lambdatest.com/)
- Click on the `new project` button
- Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
- Click on **Submit**.

Once, the project is created then you copy the `Project Token` from the application, here is a sample project token:

```bash
projectToken = "123456#1234abcd-****-****-****-************"
```

### Upload screenshots via API

Once you have created a SmartUI Project, you can upload your local screenshots to the projects which will create a build.

Follow the below steps to upload screenshots -

**Step 1:** Copy the below API endpoint to your project.

```
API_URL="https://api.lambdatest.com/automation/smart-ui/v2/upload"
```

:::info NOTE
For more information, please visit our [API documentation](https://www.lambdatest.com/support/api-doc/).
:::

**Step 2:** Add the following information to your API payload `form-body`:

| Variable            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           | Is Mandatory? |
| ------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| files               | array   | You can add the path to the files which will be uploaded. <br/>`files : [ "path/to/file-1", ""path/to/file-2"]`                                                                                                                                                                                                                                                                                                                                       | True          |
| projectToken        | string  | Project token needs to be specified to upload the files and validate the project . <br/>`projectToken:123456#1234abcd-****-****-****-************`                                                                                                                                                                                                                                                                                   | True          |
| buildName           | string  | Name anything of your choice specified for the uploaded screenshots to a build. <br/>`buildName : #<Build_Name>`                                                                                                                                                                                                                                                                                                                                      | Optional      |
| baseline            | boolean | An option to make your build as a baseline build for comparison . <br/>`baseline : true/false`                                                                                                                                                                                                                                                                                                                                                        | Optional      |
| screenshotName <mark> new </mark>| string  | Pass the unique screenshot name in order to compare it. | Optional         |

:::info NOTE
We only support the following formats: `.png` `.jpeg` `.jpg`
:::

Please see the below screenshot for adding your screenshots which needs to be uploaded for your project to generate a build.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/upload-images-api-3.png').default} alt="cmd" width="768" height="373" className='doc_img'/>
<img loading="lazy" src={require('../assets/images/smart-visual-testing/upload-images-api-2.png').default} alt="cmd" width="768" height="373" className='doc_img'/>

