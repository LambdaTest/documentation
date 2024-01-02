---
id: smartui-upload-api-v1
title: Getting Started With Uploading Screenshots for Visual Regression Testing
sidebar_label: Upload API v1
description: In this documentation, learn how to perform Visual Regression testing on the LambdaTest Automation Cloud across 40+ browser versions.
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

url: https://www.lambdatest.com/support/docs/smartui-upload-api-v1/
site_name: LambdaTest
slug: smartui-upload-api-v1/
---

---

:::caution
This is the guide to setup the **version 1** of the SmartUI upload API and will be **deprecated** on **31 December, 2022**.
:::

### Pre-requisites for running Smart UI

- Basic understanding of HTTP APIs is required.
- Go to [LambdaTest SmartUI](https://smartui.lambdatest.com/) and login along with your credentials.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from `Access Key` button on the top right of the dashboard.

The following steps will guide you in running your first Visual Regression test on LambdaTest SmartUI platform -

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
API_URL="https://api.lambdatest.com/automation/smart-ui/upload"
```

:::info NOTE
For more information, please visit our [API documentation](https://www.lambdatest.com/support/api-doc/).
:::

**Step 2:** Add the following information to your API payload `form-body`:

| Variable            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           | Is Mandatory? |
| ------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| files               | array   | You can add the path to the files which will be uploaded. <br/>`files : [ "path/to/file-1", ""path/to/file-2"]`                                                                                                                                                                                                                                                                                                                                       | True          |
| projectToken        | string  | Project token needs to be specified to upload the files and validate the project . <br/>`projectToken : 123456#1234abcd-****-****-****-************`                                                                                                                                                                                                                                                                                   | True          |
| browserCapabilities <br/> <mark> Will be Deprecated </mark> | object  | Set your screenshot related `meta` data information here. The following are the capabilities which can be used for the screenshot are: <br/>1. Name of the screenshot `name: <Name of the screenshot>` <br/>2. Screenshot Browser name data `browserName: <Name of Browser if any>`<br/> 3. Screenshot Browser Version `browserVersion: <Version of Browser if any>` <br/> 4. Screenshot Resolution captured `resolution: <Resolution of screenshot>` | True          |
| buildName           | string  | Name anything of your choice specified for the uploaded screenshots to a build. <br/>`buildName : #<Build_Name>`                                                                                                                                                                                                                                                                                                                                      | Optional      |
| baseline            | boolean | An option to make your build as a baseline build for comparison . <br/>`baseline : true/false`                                                                                                                                                                                                                                                                                                                                                        | Optional      |


:::info NOTE
We only support the following formats: `.png` `.jpeg` `.jpg`
:::

Please check out Smart UI Upload API [version 2 documentation](https://lambdatest.com/support/docs/smartui-upload-api-v2/) for migration assistance.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      Getting Started with Selenium Visual Regression  </span>
    </li>
  </ul>
</nav>