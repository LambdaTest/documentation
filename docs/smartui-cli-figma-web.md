---
id: smartui-cli-figma-web
title: Getting started with LambdaTest's SmartUI Figma-Web CLI 
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
- Ensure you are using `@lambdatest/smartui-cli` version 4.1.43 or higher

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

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

Install required NPM modules for `LambdaTest SmartUI CLI` globally or in your project:

**Global Installation (Recommended):**
```bash
npm install -g @lambdatest/smartui-cli
```

**Local Installation:**
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

1. Setup your project token shown in the **SmartUI** app after creating your project.

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

- Setup your project token shown in the **SmartUI** app after creating your project.

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

## Best Practices

<Tabs className="docs__val" groupId="best-practices">
<TabItem value="build-names" label="Build Names" default>

### Build Names

```bash
   npx smartui upload-figma-web designs.json --buildName "v1.0.0"
   ```

</TabItem>
<TabItem value="screenshot-names" label="Screenshot Names" >

### Screenshot Names

- Good: `homepage-hero`, `login-form`, `dashboard-sidebar`
   - Avoid: `test1`, `screenshot`, `design-1`
   - Ensure `screenshot_names` in your config match the order of `figma_ids`

</TabItem>
<TabItem value="branch-names" label="Branch Names" >

### Branch Names

### Screenshot Naming for SDK Comparisons

**Critical**: When comparing Figma designs with live implementations captured via SDKs, add `.png` extension to your SDK screenshot names.

Figma-uploaded screenshots automatically have `.png` appended (e.g., `homepage.png`), so your SDK screenshots must match:

**In your SDK code:**
```javascript
// ❌ Wrong - will not match Figma screenshot
smartuiSnapshot(driver, "homepage");

// ✅ Correct - matches Figma screenshot name
smartuiSnapshot(driver, "homepage.png");
```

**Example for different frameworks:**

<Tabs className="docs__val" groupId="framework">
<TabItem value="selenium" label="Selenium" default>

```java
// Java
SmartUISnapshot.smartuiSnapshot(driver, "homepage.png");
```

</TabItem>
<TabItem value="playwright" label="Playwright">

```javascript
// JavaScript
await smartuiSnapshot(page, "homepage.png");
```

</TabItem>
<TabItem value="cypress" label="Cypress">

```javascript
// JavaScript
cy.smartuiSnapshot("homepage.png");
```

</TabItem>
</Tabs>

**Configuration Example:**
```json
{
  "figma": {
    "configs": [
      {
        "figma_file_token": "abc12345",
        "figma_ids": ["id-1", "id-2"],
        "screenshot_names": ["homepage.png", "about.png"]  // Include .png extension
      }
    ]
  }
}
```

This ensures that Figma screenshots (e.g., `homepage.png`) match SDK screenshots (e.g., `homepage.png`) in the same build.

</TabItem>
<TabItem value="branch-names" label="Branch Names" >

### Branch Names

### Screenshot Naming for SDK Comparisons

**Critical**: When comparing Figma designs with live implementations captured via SDKs, add `.png` extension to your SDK screenshot names.

Figma-uploaded screenshots automatically have `.png` appended (e.g., `homepage.png`), so your SDK screenshots must match:

**In your SDK code:**
```javascript
// ❌ Wrong - will not match Figma screenshot
smartuiSnapshot(driver, "homepage");

// ✅ Correct - matches Figma screenshot name
smartuiSnapshot(driver, "homepage.png");
```

**Example for different frameworks:**

<Tabs className="docs__val" groupId="framework">
<TabItem value="selenium" label="Selenium" default>

```java
// Java
SmartUISnapshot.smartuiSnapshot(driver, "homepage.png");
```

</TabItem>
<TabItem value="playwright" label="Playwright">

```javascript
// JavaScript
await smartuiSnapshot(page, "homepage.png");
```

</TabItem>
<TabItem value="cypress" label="Cypress">

```javascript
// JavaScript
cy.smartuiSnapshot("homepage.png");
```

</TabItem>
</Tabs>

**Configuration Example:**
```json
{
  "figma": {
    "configs": [
      {
        "figma_file_token": "abc12345",
        "figma_ids": ["id-1", "id-2"],
        "screenshot_names": ["homepage.png", "about.png"]  // Include .png extension
      }
    ]
  }
}
```

This ensures that Figma screenshots (e.g., `homepage.png`) match SDK screenshots (e.g., `homepage.png`) in the same build.

</TabItem>
</Tabs>

## Troubleshooting

### Figma Upload Fails

**Symptoms**: 
- Error message: "Failed to upload Figma designs"
- Upload command returns error

**Solutions**:

1. **Verify Figma Token**:
   ```bash
   echo $FIGMA_TOKEN
   ```
   Ensure the token is valid and has not expired. Generate a new token from [Figma Settings](https://www.figma.com/settings).

2. **Check File Token**:
   - Verify the `figma_file_token` in your `designs.json` matches the file ID from the Figma URL
   - Ensure you have access to the Figma file

3. **Validate Node IDs**:
   - Confirm `figma_ids` in your configuration are valid
   - Check that the nodes exist in the Figma file

### Screenshots Not Matching Between Figma and Web

**Symptoms**:
- Figma screenshots don't match web screenshots
- Comparison shows mismatches even when designs are identical

**Solutions**:

1. **Check Screenshot Names**:
   - Ensure SDK screenshots include `.png` extension (e.g., `homepage.png`)
   - Verify screenshot names match exactly between Figma config and SDK code
   - Ensure `screenshot_names` array matches the order of `figma_ids`

2. **Verify Frame Sizes**:
   - Ensure frame dimensions are consistent across uploads
   - Check that viewport sizes match between Figma frames and browser captures
   - Use the same browser viewport sizes in both Figma config and SDK config

3. **Check Build Names**:
   - Ensure both Figma and SDK uploads use the same `--buildName`
   - Verify builds are in the same project

4. **Browser-Specific Issues**:
   - Different browsers may render differently
   - Consider creating browser-specific Figma designs if needed
   - Ensure browser list in Figma config matches browsers used in SDK tests

### Project Token Issues

**Symptoms**:
- "Invalid project token" error
- Uploads fail with authentication errors

**Solutions**:

1. **Verify Project Token**:
   ```bash
   echo $PROJECT_TOKEN
   ```
   Ensure the token is set correctly and matches your SmartUI project.

2. **Check Project Type**:
   - Ensure project is created as **CLI** type
   - Verify project exists in SmartUI dashboard

### Getting Help

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [Figma CLI Documentation](/support/docs/smartui-cli-figma) for basic Figma workflows
- Visit [LambdaTest Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@lambdatest.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [Figma CLI Documentation](/support/docs/smartui-cli-figma)
- [Figma-App CLI Documentation](/support/docs/smartui-cli-figma-app)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.lambdatest.com/support/api-doc/)

### View SmartUI Results

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

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
