---
id: smartui-sdk-fetch-results
title: Fetching Results through SmartUI SDK
sidebar_label: Fetch Results
description: In this documentation, learn how to fetch live results for SmartUI tests
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

url: https://www.lambdatest.com/support/docs/smartui-cli/
slug: smartui-sdk-fetch-results/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';

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
          "name": "Smart Visual Testing",
          "item": "https://www.lambdatest.com/support/docs/smartui-sdk-fetch-results/"
        }]
      })
    }}
></script>

SmartUI CLI allows you to fetch detailed build results after executing your visual tests. This feature enables you to access comprehensive information about your build and screenshots in a JSON file, making it easier to integrate with your CI/CD pipelines and automation workflows.


## Prerequisites

- Basic understanding of Command Line Interface
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.
- Ensure you are using `@lambdatest/smartui-cli` version 4.0.8 or higher.
- A properly configured SmartUI CLI project

## Steps to Use

### **Step 1:** Install SmartUI CLI

If you haven't already installed SmartUI CLI, install it using npm:

```bash
npm i @lambdatest/smartui-cli
```

### **Step 2:** Configure your Project Token

Setup your project token show in the **SmartUI** app after, creating your project.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

### **Step 3:** Execute Tests with Results Fetching

You can fetch build results by adding the `--fetch-results` flag to your test execution command. Here are different ways to use this feature:

#### Default Usage
If no filename is specified, results will be stored in `results.json`:

```bash
npx smartui --config .smartui.json exec --fetch-results -- <execution-command>
```
>**Example:**
 For a `Node.js` test script : 
>```bash
>npx smartui --config .smartui.json exec --fetch-results -- node test.js
>```

#### Custom Filename
Specify a custom filename for your results:

```bash
npx smartui --config .smartui.json exec --fetch-results custom-results.json -- node test.js
```

### **Step 4:** Understanding the Results

The fetched results JSON file contains detailed information about your build and screenshots. Here's what you'll find in the results file:

```json
{
  "screenshots": {
    "Screenshot-1": [
      {
        "screenshot_name": "Screenshot-1",
        "captured_image": "image_url",
        "baseline_image": "image_url",
        "compared_image": "image_url",
        "browser_name": "edge",
        "viewport": "1920",
        "mismatch_percentage": 3.3,
        "status": "Changes found"
      },
      {
        "screenshot_name": "Screenshot-1",
        "captured_image": "image_url",
        "baseline_image": "image_url",
        "compared_image": "image_url",
        "browser_name": "firefox",
        "viewport": "1366",
        "mismatch_percentage": 4.74,
        "status": "Changes found"
      },
      {
        "screenshot_name": "Screenshot-1",
        "captured_image": "image_url",
        "baseline_image": "image_url",
        "compared_image": "image_url",
        "browser_name": "chrome",
        "viewport": "1366",
        "mismatch_percentage": 4.64,
        "status": "Changes found"
      },
      {
        "screenshot_name": "Screenshot-1",
        "captured_image": "image_url",
        "baseline_image": "image_url",
        "compared_image": "image_url",
        "browser_name": "chrome",
        "viewport": "1920",
        "mismatch_percentage": 3.3,
        "status": "Changes found"
      },
    ],
    "Screenshot-2": [
      {
        "screenshot_name": "Screenshot-2",
        "captured_image": "image_url",
        "baseline_image": "image_url",
        "compared_image": "image_url",
        "browser_name": "edge",
        "viewport": "1920",
        "mismatch_percentage": 0.0,
        "status": "Approved"
      },
      {
        "screenshot_name": "Screenshot-2",
        "captured_image": "image_url",
        "baseline_image": "image_url",
        "compared_image": "image_url",
        "browser_name": "firefox",
        "viewport": "1366",
        "mismatch_percentage": 4.74,
        "status": "Changes found"
      },
      {
        "screenshot_name": "Screenshot-2",
        "captured_image": "image_url",
        "baseline_image": "image_url",
        "compared_image": "image_url",
        "browser_name": "chrome",
        "viewport": "1366",
        "mismatch_percentage": 4.64,
        "status": "Changes found"
      },
      {
        "screenshot_name": "Screenshot-2",
        "captured_image": "image_url",
        "baseline_image": "image_url",
        "compared_image": "image_url",
        "browser_name": "chrome",
        "viewport": "1920",
        "mismatch_percentage": 3.3,
        "status": "Changes found"
      },
    ]
  },
  "build": {
    "build_id": "b420b7a9-77c6-****-****",
    "baseline": false,
    "build_type": "smartui-cli",
    "build_status_ind": "completed",
    "build_status": "pending-approval",
    "commitId": "2b93***",
    "branch": "main",
    "commitAuthor": "John Doe",
    "commitMessage": "Merge pull request from xyz/main"
  },
  "project": {
    "project_id": "1dfb7712-7f20-446f-***-***",
    "name": "Project-Name",
    "username": "johndoe",
    "project_type": "smartui-cli",
    "projectCategory": "web",
    "platform": "cli"
  }
}
```

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
      <span className="breadcrumbs__link"> SmartUI with Cypress  </span>
    </li>
  </ul>
</nav>
