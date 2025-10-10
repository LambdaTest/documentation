---
id: smartui-cli-figma-web
title: Getting started with LambdaTest's Smart UI Figma-Web CLI 
sidebar_label: Figma-Web CLI
description: In this documentation, learn how to compare your figma designs to live production websites and web applications.
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
slug: smartui-cli-figma-web/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY}
from "@site/src/component/keys";
import CodeBlock from '@theme/CodeBlock';

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
          "item": "https://www.lambdatest.com/support/docs/smartui-cli-figma-web/"
        }]
      })
    }}
></script>

Welcome to the LambdaTest SmartUI Figma Web CLI documentation! 

With SmartUI Figma-Web CLI, you can seamlessly perform visual regression testing of your Figma designs on SmartUI using your command line, identifying discrepancies between your designs and live websites. This guide will walk you through the process of running successful Figma-Web Visual tests using SmartUI CLI.

## Prerequisites for running SmartUI Figma CLI 

- Basic understanding of Command Line Interface is required.
- Basic understanding of Figma file structuring is required.
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.
- Ensure you are using `@lambdatest/smartui-cli` version 4.0.16 or higher.

The following steps will guide you in running your visual tests for Figma files on LambdaTest platform using SmartUI CLI.

## Understanding Figma Tokens

| Token                | Where It’s Used | Description                                                                 |
|----------------------|------------------|-----------------------------------------------------------------------------|
| `FIGMA_TOKEN`        | Env Variable     | Your Figma **Personal Access Token** to authenticate with the Figma API    |
| `figma_file_token`   | `designs.json`   | Figma **file ID**, extracted from the Figma file URL                       |
| `figma_ids`          | `designs.json`   | List of **frame or node IDs** you want to compare visually                 |

> Example Figma URL:  
> `https://www.figma.com/file/abc12345/file-name?node-id=2417-58969`  
> - `figma_file_token`: `abc12345`  
> - `figma_ids`: `2417-58969`

---


## Create a SmartUI CLI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> for executing your `CLI` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.


## Steps to run your first test


### **Step 1**: Install the Dependencies

Install required NPM modules for `LambdaTest Smart UI CLI` in your repository/folder.

```bash
npm install @lambdatest/smartui-cli
```


### **Step 2:** Create the design configuration file

```
smartui config:create-figma-web designs.json
```
Once, the `designs` file will be created, you will be seeing the sample pre-filled configuration in the `designs.json` file:

```json title="/smartui-cli-figma-project/designs.json"
{
  "web": {
    "browsers": [
      "chrome",
      "firefox",
      "safari",
      "edge"
    ]
  },
  "figma": {
    "depth": 2, //Figma Tree depth - (Optional), change the value according to the your file structure
    "configs": [
      {
        "figma_file_token": "<token>",
        "figma_ids": [
          "id-1",
          "id-2"
        ],
        "screenshot_names": [
          "homepage",
          "about"
        ]
      },
      {
        "figma_file_token": "<token>",
        "figma_ids": [
          "id-3",
          "id-4"
        ],
        "screenshot_names": [
          "xyz",
          "abc"
        ]
      }
    ]
  }
}
```
>Note:  Unlike vanilla Figma CLI, designs.json includes browser parameters and auto-fetches viewports of Figma frames for efficient comparison.

### **Step 3:** Configure your Project Token and Figma Token

1. Setup your project token show in the **SmartUI** app after, creating your project.

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

2. Setup your [personal access token for Figma](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) to authenticate Figma with SmartUI.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

### **Step 4:** Configure your LambdaTest Credentials

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


#### SmartUI CLI Design Config Options

Please read the following table for more information about the configuration file:

| Config Key     | Description                                                                                                                        | Usage     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------- |
| figma_file_token       | File token for your required Figma file. You can use multiple figma files in the same configuration.| Mandatory |
| figma_ids  | Comma separated list of nodes that you care about in the document. If specified, only a subset of the document will be returned corresponding to the nodes listed, their children, and everything between the root node and the listed nodes. | Optional |
| depth (int)    | Positive integer (>1) representing how deep into the document tree to traverse. For example, setting it to 2 returns Pages and all top level objects on each page. Not setting this parameter returns all nodes | Optional |


### **Step 5:** Uploading the Figma files on SmartUI Cloud using CLI

You can now execute tests for `Visual Testing for Figma objects` using the following options:.

```powershell
npx smartui upload-figma-web designs.json
```

### Working example with actual web comparisons

1. Please clone the following sample Github repo (`https://github.com/LambdaTest/smartui-figma-web-cli-sample`).

```bash
git clone https://github.com/LambdaTest/smartui-figma-web-cli-sample
```
2. Install the node modules using the command:

```bash
npm i
```
3. Configure your project token and Figma token

- Setup your project token show in the **SmartUI** app after, creating your project.

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

- Setup your [personal access token for Figma](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) to authenticate Figma with SmartUI.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

4. Create your figma baseline 
```bash
npx smartui upload-figma-web designs.json --buildName=FigmaBaseline2  
```
5. Execute your functional test script (Selenium Nodejs in this sample)
```
npx smartui --config web-config.json exec --buildName=web-build -- node figma-web-local.js
```

>**Points to Consider**
> - The browsers listed in the Figma configuration are used solely to enable comparisons between your designs and their corresponding live webpages.
> - Websites may exhibit browser-specific behaviors. To account for these variations, it is recommended to create distinct designs tailored for each browser, if necessary.

### View SmartUI Results

You can see the Smart UI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

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
      <span className="breadcrumbs__link"> SmartUI Figma-Web CLI </span>
    </li>
  </ul>
</nav>
