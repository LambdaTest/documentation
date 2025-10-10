---
id: smartui-sdk-build-name
title: Grouping Screenshots through Build Names
sidebar_label: Groups Screenshots by Build Names
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
          "item": "https://www.lambdatest.com/support/docs/smartui-cli-build-name/"
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

## Step 1: Install SmartUI CLI

If you haven't already installed SmartUI CLI, install it using npm:

```bash
npm i @lambdatest/smartui-cli
```

## Step 2: Configure your Project Token

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

## Step 3: Execute Tests with custom Build Names

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

### Default Usage
If no buildname is specified, a random build name is added to the builds:

```bash
npx smartui --config .smartui.json exec -- <execution-command>
```

## Step 4: Advanced Use Case

If you are running multiple test cases in a single job (e.g., using HyperExecute) and want to club all screenshots under a single build while maintaining consistent Git baseline management, you can do the following:

This can be done as follows:

```bash
npx smartui --config .smartui.json exec --buildName $env:JOB_ID -- node test.js
```

## Key Benefits
- **Efficient Grouping:** Screenshots are grouped by build names, improving organization and traceability.
- **Seamless Git Integration:** Integrates smoothly with Git to maintain baseline integrity across branches.
- **Flexible Updates:** Allows appending screenshots to existing builds, enhancing adaptability.
- **Optimized Workflows:** Supports streamlined operations for both parallel and single-job executions.

## Conclusion
This approach provides a structured and efficient way to manage visual tests:
- **New Build for Each HyperExecute Job:** A dedicated build is created for every HyperExecute job, ensuring clear separation and traceability.
- **Consolidated Screenshot Grouping:** Screenshots from all tests within the same job are appended to a single build for seamless organization.
- **Uninterrupted Git Workflow:** Git branching strategies remain unaffected, enabling robust baseline management across branches.