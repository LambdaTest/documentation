---
id: smartui-sdk-build-name
title: Grouping Screenshots through Build Names
sidebar_label: Fetch Results
description: In this documentation, learn how to group screenshots in a single build across multiple executions.
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
slug: smartui-cli-build-name/
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
          "item": "https://www.lambdatest.com/support/docs/smart-ui-cypress/"
        }]
      })
    }}
></script>

SmartUI CLI allows you to group screenshots in a build name and append new screenshots to an existing build. This feature enables you to assign build names, add screenshots to existing builds and manage your visual tests efficiently.


## Prerequisites

- Basic understanding of Command Line Interface
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.
- Ensure you are using `@lambdatest/smartui-cli` version 4.0.14 or higher.
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
<TabItem value="Powershell" label="Windows-PS">

```bash
$Env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```
</TabItem>
</Tabs>

### **Step 3:** Execute Tests with custom Build Names

You can add a custom build name by adding the `--buildName` flag to your test execution command. Here are different ways to use this feature:

#### Custom Build Name (Expected Usage)
Specify a custom build name to group your screenshots in the following way:

```bash
npx smartui --config .smartui.json exec --buildName "Sample Build Name" -- <execution-command>
```
>**Example:**
 For a `Node.js` test script : 
>```bash
>npx smartui --config .smartui.json exec --buildName "Sample Build Name" -- node test.js
>```

#### Default Usage
If no buildname is specified, a random build name is added to the builds:

```bash
npx smartui --config .smartui.json exec -- <execution-command>
```

### **Step 4:** Advanced Use Case

If you are running multiple test cases in a single job (e.g., using HyperExecute) and want to club all screenshots under a single build while maintaining consistent Git baseline management, you can do the following:

This can be done as follows:

```bash
npx smartui --config .smartui.json exec --buildName $env:JOB_ID -- node test.js
```
##### This approach ensures:

- A new build is created for every HyperExecute job.
- Screenshots from all tests in the same job are appended to the same build.
- Git branching strategies remain unaffected, improving baseline management across branches.


>## Key Benefits
>1. Efficient grouping of screenshots by build names.
>2. Seamless integration with Git baseline management.
>3. Flexibility to append screenshots to existing builds.
>4. Optimized workflows for parallel and single-job executions.


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
      <span className="breadcrumbs__link"> Smart UI with Cypress  </span>
    </li>
  </ul>
</nav>
