---
id: smartui-cli-figma
title: SmartUI Figma Testing
sidebar_label: Figma Testing
description: In this documentation, learn how to perform Visual Testing of your Figma files using command line interface using SmartUI CLI, including comparing Figma designs against live websites and native app screenshots.
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
  - Mobile App Visual Testing
  - Figma to App Comparison
  - Design to Production Validation

url: https://www.testmuai.com/support/docs/smartui-cli-complete-reference/
slug: smartui-cli-figma/
canonical: https://www.testmuai.com/support/docs/smartui-cli-figma/
hide_title: true
toc_max_heading_level: 2

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Smart Visual Testing",
          "item": `${BRAND_URL}/support/docs/smartui-cli-figma/`
        }]
      })
    }}
></script>

# SmartUI Figma Testing

---

SmartUI Figma testing lets you run visual regression checks on your Figma designs directly from the command line, catching visual UI regression bugs before they ship. Beyond validating the designs themselves, you can compare a Figma frame against a live website captured through a web SDK, or against a native app screenshot captured on a real device, so your implementation stays faithful to the design.

There are three flows, all built on the same SmartUI CLI:

- **Figma CLI** uploads Figma frames to SmartUI for visual comparison against a baseline.
- **Figma-to-Web comparison** compares Figma designs against live production websites and web applications.
- **Figma-to-App comparison** compares Figma design frames against mobile app screenshots captured on real devices.

The shared setup below applies to every flow. The [Figma-to-Web comparison](#figma-to-web-comparison) and [Figma-to-App comparison](#figma-to-app-comparison) sections then cover each end-to-end workflow.

## Prerequisites for running SmartUI Figma CLI

- Basic understanding of Command Line Interface is required.
- Basic understanding of Figma file structuring is required.
- Login to [<BrandName /> SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) with your credentials.
- Ensure you are using `@lambdatest/smartui-cli` version 4.1.43 or higher for the web comparison flow.

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

The following steps will guide you in running your visual tests for Figma files on <BrandName /> platform using SmartUI CLI.

## Understanding Figma Tokens

Figma testing authenticates with two token types, plus configuration values read from `designs.json`.

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

1. Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> for executing your `CLI` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Steps to run your first test

### **Step 1**: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI CLI` globally or in your project:

**Global Installation (Recommended):**
```bash
npm install -g @lambdatest/smartui-cli
```

**Local Installation:**
```bash
npm install @lambdatest/smartui-cli
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

### **Step 2:** Create the design info file

```
smartui config:create-figma designs.json
```
Once, the `designs` file will be created, you will be seeing the sample pre-filled configuration in the `designs.json` file:

```json title="/smartui-cli-figma-project/designs.json"
{
    "depth":2, //Figma Tree depth - (Optional), change the value according to the your file structure
    "figma_config": [
      {
        "figma_file_token": "<Required Figma File token>",
        "figma_ids":[
          "Id-1", "Id-2"
        ]
      },
       {
        "figma_file_token": "<Required Figma File token>",
        "figma_ids":[
          "Id-3", "Id-4"
        ]
      }
    ]
  }
```

### **Step 3:** Configure your Project Token and Figma Token

1. Setup your project token shown in the **SmartUI** app after creating your project.

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

2. Setup your [personal access token for Figma](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) to authenticate Figma with SmartUI.

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-1' label='MacOS/Linux' default>

```bash
export FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows-1" label='Windows - CMD'>

```bash
set FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="PowerShell-1" label='PowerShell'>

```powershell
$env:FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

### **Step 4:** Configure your <BrandName /> Credentials

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-2' label='MacOS/Linux' default>

```bash
export LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
<TabItem value="Windows-2" label='Windows - CMD'>

```bash
set LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
<TabItem value="PowerShell-2" label='PowerShell'>

```powershell
$env:LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img' />

#### SmartUI CLI Design Config Options

Please read the following table for more information about the configuration file:

| Config Key     | Description                                                                                                                        | Usage     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------- |
| figma_file_token       | File token for your required Figma file. You can use multiple figma files in the same configuration.| Mandatory |
| figma_ids  | Comma separated list of nodes that you care about in the document. If specified, only a subset of the document will be returned corresponding to the nodes listed, their children, and everything between the root node and the listed nodes. | Optional |
| depth (int)    | Positive integer (>1) representing how deep into the document tree to traverse. For example, setting it to 2 returns Pages and all top level objects on each page. Not setting this parameter returns all nodes | Optional |

### **Step 5:** Uploading the Figma files on SmartUI Cloud using CLI

You can now execute tests for `Visual Testing for Figma objects` using the following options:.

```bash
npx smartui upload-figma designs.json
```

### Advanced options for baseline management

1. `markBaseline` - You can mark a specific build as a baseline through the runner command

```bash
npx smartui upload-figma designs.json --markBaseline
```
2. `buildName` - You can add your custom build name to a build by running the following command

```bash
npx smartui upload-figma designs.json --buildName "<Build_Name>"
```

<b> You can use these options in a nested way as well, as shown below </b>

```bash
npx smartui upload-figma designs.json --buildName "<Build_Name>" --markBaseline
```

:::note

If `buildName` is not specified, a random build name is generated for every run.

You can add more screenshots in a build by specifying the particular build name in the runner command
:::

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='build-names' label='Build Names' default>

**Build Names**

```bash
   npx smartui upload-figma designs.json --buildName "v1.0.0"
   ```

</TabItem>
<TabItem value='screenshot-names' label='Screenshot Names' >

**Screenshot Names**

- Good: `homepage-hero`, `login-form`, `dashboard-sidebar`
   - Avoid: `test1`, `screenshot`, `design-1`

</TabItem>
</Tabs>

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='branch-names' label='Branch Names' >

**Branch Names**

**Screenshot Naming for SDK Comparisons**

**Important**: When comparing Figma designs with live implementations captured via SDKs, add `.png` extension to your SDK screenshot names.

Figma-uploaded screenshots automatically have `.png` appended (e.g., `homepage.png`), so your SDK screenshots must match:

**In your SDK code:**
```javascript
// ❌ Wrong - will not match Figma screenshot
smartuiSnapshot(driver, "homepage");

// ✅ Correct - matches Figma screenshot name
smartuiSnapshot(driver, "homepage.png");
```

**Example for different frameworks:**

<Tabs className='docs__val' groupId='framework'>
<TabItem value='selenium' label='Selenium' default>

```java
// Java
SmartUISnapshot.smartuiSnapshot(driver, "homepage.png");
```

</TabItem>
<TabItem value='playwright' label='Playwright'>

```javascript
// JavaScript
await smartuiSnapshot(page, "homepage.png");
```

</TabItem>
<TabItem value='cypress' label='Cypress'>

```javascript
// JavaScript
cy.smartuiSnapshot("homepage.png");
```

</TabItem>
</Tabs>

This ensures that Figma screenshots (e.g., `homepage.png`) match SDK screenshots (e.g., `homepage.png`) in the same build.

</TabItem>
</Tabs>

### Setup with Continuous Integration (CI)

If you are using the Continuous Integration (CI) pipeline for your application and want to integrate `SmartUI Figma CLI` execution then the following are the steps needs to be added to your `.yaml` file:

```yaml
steps:
  - name: Running SmartUI Figma CLI Tests
    run: |
      npm install @lambdatest/smartui-cli
      npx playwright install-deps
      npx smartui upload-figma designs.json
```

### View SmartUI Results

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img' />

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='verify-figma-token' label='Verify Figma Token' default>

Verify Figma Token

```bash
   echo $FIGMA_TOKEN
   ```
   Ensure the token is valid and has not expired. Generate a new token from [Figma Settings](https://www.figma.com/settings).

</TabItem>
<TabItem value='check-file-token' label='Check File Token' >

Check File Token

- Verify the `figma_file_token` in your `designs.json` matches the file ID from the Figma URL
   - Ensure you have access to the Figma file

</TabItem>
<TabItem value='validate-node-ids' label='Validate Node IDs' >

Validate Node IDs

- Confirm `figma_ids` in your configuration are valid
   - Check that the nodes exist in the Figma file
**Symptoms**:
- Figma screenshots don't match SDK screenshots
- Comparison shows mismatches even when designs are identical
**Solutions**:

</TabItem>
<TabItem value='check-screenshot-names' label='Check Screenshot Names' >

Check Screenshot Names

- Ensure SDK screenshots include `.png` extension (e.g., `homepage.png`)
   - Verify screenshot names match exactly between Figma and SDK

</TabItem>
<TabItem value='verify-frame-sizes' label='Verify Frame Sizes' >

Verify Frame Sizes

- Ensure frame dimensions are consistent across uploads
   - Check that viewport sizes match between Figma frames and SDK captures

</TabItem>
<TabItem value='check-build-names' label='Check Build Names' >

Check Build Names

- Ensure both Figma and SDK uploads use the same `--buildName`
   - Verify builds are in the same project
**Symptoms**:
- "Invalid project token" error
- Uploads fail with authentication errors
**Solutions**:

</TabItem>
<TabItem value='verify-project-token' label='Verify Project Token' >

Verify Project Token

```bash
   echo $PROJECT_TOKEN
   ```
   Ensure the token is set correctly and matches your SmartUI project.

</TabItem>
<TabItem value='check-project-type' label='Check Project Type' >

Check Project Type

- Ensure project is created as **CLI** type
   - Verify project exists in SmartUI dashboard
If you encounter issues not covered here:
- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Visit [<BrandName /> Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

</TabItem>
</Tabs>

## Figma-to-Web comparison

Use the Figma-to-Web flow to identify discrepancies between your designs and live websites, running the same visual regression checks against production web pages.

### Prerequisites for Figma-to-Web comparison

- Basic understanding of Command Line Interface is required.
- Basic understanding of Figma file structuring is required.
- Login to [<BrandName /> SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) with your credentials.
- Ensure you are using `@lambdatest/smartui-cli` version 4.1.43 or higher

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

The following steps will guide you in running your Figma-to-Web visual tests on <BrandName /> platform using SmartUI CLI.

### **Step 1**: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI CLI` globally or in your project:

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

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-web-1' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='Windows-web-1' label='Windows - CMD'>

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='PowerShell-web-1' label='PowerShell'>

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

2. Setup your [personal access token for Figma](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) to authenticate Figma with SmartUI.

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-web-2' label='MacOS/Linux' default>

```bash
export FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows-web-2" label='Windows - CMD'>

```bash
set FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="PowerShell-web-2" label='PowerShell'>

```powershell
$env:FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

### **Step 4:** Configure your <BrandName /> Credentials

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-web-3' label='MacOS/Linux' default>

```bash
export LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
<TabItem value="Windows-web-3" label='Windows - CMD'>

```bash
set LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
<TabItem value="PowerShell-web-3" label='PowerShell'>

```powershell
$env:LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img' />

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

1. Please clone the following sample GitHub repo (`https://github.com/LambdaTest/smartui-figma-web-cli-sample`).

```bash
git clone https://github.com/LambdaTest/smartui-figma-web-cli-sample
```
2. Install the node modules using the command:

```bash
npm i
```
3. Configure your project token and Figma token

- Setup your project token shown in the **SmartUI** app after creating your project.

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-web-4' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows-web-4" label='Windows - CMD'>

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='PowerShell-web-4' label='PowerShell'>

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

- Setup your [personal access token for Figma](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) to authenticate Figma with SmartUI.

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-web-5' label='MacOS/Linux' default>

```bash
export FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows-web-5" label='Windows - CMD'>

```bash
set FIGMA_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='PowerShell-web-5' label='PowerShell'>

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

### Best Practices for Figma-to-Web comparison

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='build-names-web' label='Build Names' default>

**Build Names**

```bash
   npx smartui upload-figma-web designs.json --buildName "v1.0.0"
   ```

</TabItem>
<TabItem value='screenshot-names-web' label='Screenshot Names' >

**Screenshot Names**

- Good: `homepage-hero`, `login-form`, `dashboard-sidebar`
   - Avoid: `test1`, `screenshot`, `design-1`
   - Ensure `screenshot_names` in your config match the order of `figma_ids`

</TabItem>
<TabItem value='branch-names-web' label='Branch Names' >

**Branch Names**

**Screenshot Naming for SDK Comparisons**

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

<Tabs className='docs__val' groupId='framework'>
<TabItem value='selenium-web' label='Selenium' default>

```java
// Java
SmartUISnapshot.smartuiSnapshot(driver, "homepage.png");
```

</TabItem>
<TabItem value='playwright-web' label='Playwright'>

```javascript
// JavaScript
await smartuiSnapshot(page, "homepage.png");
```

</TabItem>
<TabItem value='cypress-web' label='Cypress'>

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

This ensures that Figma screenshots (e.g., `homepage.png`) match SDK screenshots (e.g., `homepage.png`) in the dashboard.

#### Branch Names

#### Screenshot Naming for SDK Comparisons

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

<Tabs className='docs__val' groupId='framework'>
<TabItem value='selenium-web-1' label='Selenium' default>

```java
// Java
SmartUISnapshot.smartuiSnapshot(driver, "homepage.png");
```

</TabItem>
<TabItem value='playwright-web-1' label='Playwright'>

```javascript
// JavaScript
await smartuiSnapshot(page, "homepage.png");
```

</TabItem>
<TabItem value='cypress-web-1' label='Cypress'>

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

### Troubleshooting Figma-to-Web comparison

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='verify-figma-token-web' label='Verify Figma Token' default>

Verify Figma Token

```bash
   echo $FIGMA_TOKEN
   ```
   Ensure the token is valid and has not expired. Generate a new token from [Figma Settings](https://www.figma.com/settings).

</TabItem>
<TabItem value='check-file-token-web' label='Check File Token' >

Check File Token

- Verify the `figma_file_token` in your `designs.json` matches the file ID from the Figma URL
   - Ensure you have access to the Figma file

</TabItem>
<TabItem value='validate-node-ids-web' label='Validate Node IDs' >

Validate Node IDs

- Confirm `figma_ids` in your configuration are valid
   - Check that the nodes exist in the Figma file
**Symptoms**:
- Figma screenshots don't match web screenshots
- Comparison shows mismatches even when designs are identical
**Solutions**:

</TabItem>
<TabItem value='check-screenshot-names-web' label='Check Screenshot Names' >

Check Screenshot Names

- Ensure SDK screenshots include `.png` extension (e.g., `homepage.png`)
   - Verify screenshot names match exactly between Figma config and SDK code
   - Ensure `screenshot_names` array matches the order of `figma_ids`

</TabItem>
<TabItem value='verify-frame-sizes-web' label='Verify Frame Sizes' >

Verify Frame Sizes

- Ensure frame dimensions are consistent across uploads
   - Check that viewport sizes match between Figma frames and browser captures
   - Use the same browser viewport sizes in both Figma config and SDK config

</TabItem>
<TabItem value='check-build-names-web' label='Check Build Names' >

Check Build Names

- Ensure both Figma and SDK uploads use the same `--buildName`
   - Verify builds are in the same project

</TabItem>
<TabItem value='browser-specific-issues-web' label='Browser-Specific Issues' >

Browser-Specific Issues

- Different browsers may render differently
   - Consider creating browser-specific Figma designs if needed
   - Ensure browser list in Figma config matches browsers used in SDK tests
**Symptoms**:
- "Invalid project token" error
- Uploads fail with authentication errors
**Solutions**:

</TabItem>
<TabItem value='verify-project-token-web' label='Verify Project Token' >

Verify Project Token

```bash
   echo $PROJECT_TOKEN
   ```
   Ensure the token is set correctly and matches your SmartUI project.

</TabItem>
<TabItem value='check-project-type-web' label='Check Project Type' >

Check Project Type

- Ensure project is created as **CLI** type
   - Verify project exists in SmartUI dashboard
If you encounter issues not covered here:
- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Visit [<BrandName /> Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

</TabItem>
</Tabs>

### View SmartUI Results

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img' />

## Figma-to-App comparison

Use the Figma-to-App flow to compare **mobile app screenshots captured on real devices** with your **Figma design frames** to detect visual mismatches and ensure accurate implementation of mobile UI.

The workflow has two halves. First you upload your Figma frames to SmartUI as the baseline using the CLI. Then you run your Appium test suite on the real device cloud so your app screenshots land in the same project and get compared against those frames. This section covers both halves end to end.

### Prerequisites for Figma-to-App comparison

- Node.js and npm installed
- <BrandName /> SmartUI account with App Automation plan
- Your <BrandName /> Username and Access Key from the [Account Settings](https://accounts.lambdatest.com/security/username-accesskey) page
- Figma Personal Access Token ([how to get one](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens))
- An Appium test suite for your app
- Your app uploaded to the real device cloud so you have an `app_url`. See [Upload your app](/support/docs/application-setup-via-api/)

### Understanding the Tokens and Credentials

The Figma-App workflow needs four values across its two halves. Two are used by the CLI upload, two by the Appium run.

| Token                | Where It Is Used | Description                                                                 |
|----------------------|------------------|-----------------------------------------------------------------------------|
| `PROJECT_TOKEN`      | Env Variable     | Your SmartUI project token. Authenticates the **CLI upload**                 |
| `FIGMA_TOKEN`        | Env Variable     | Your Figma **Personal Access Token** to authenticate with the Figma API      |
| `LT_USERNAME`        | Env Variable     | Your <BrandName /> username. Used in the **Appium grid URL**                 |
| `LT_ACCESS_KEY`      | Env Variable     | Your <BrandName /> access key. Used in the **Appium grid URL**               |
| `figma_file_token`   | `designs.json`   | Figma **file ID**, extracted from the Figma file URL                         |
| `figma_ids`          | `designs.json`   | List of **frame or node IDs** you want to compare visually                   |

:::warning

Do not set any of these to an empty string. The CLI treats an empty value as an error and exits with
`Missing FIGMA_TOKEN in Environment Variables` (or the matching `LT_USERNAME` / `LT_ACCESS_KEY` message),
while leaving the same variable unset is accepted. If you hit that message, check for a stray
`export FIGMA_TOKEN=` in your shell.

:::

> Example Figma URL:
> `https://www.figma.com/design/abc12345/file-name?node-id=2417-58969`
> - `figma_file_token`: `abc12345`
> - `figma_ids`: `2417-58969`
>
> Older Figma links use `/file/` instead of `/design/`. Both forms carry the file ID in the same position.

### Step-by-Step Guide

#### 1. Create a SmartUI Project

1. Visit [smartui.lambdatest.com](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com)
2. Click **New Project**
3. Select **Real Devices** as the platform
4. Enter:
   - Project Name (required)
   - Approver(s) (required, pre-filled with your own user)
   - Tags (optional)
5. Click **Continue**

Note down both the **project name** and the **project token**. You need the token for the CLI upload and the name for your Appium capabilities.

#### 2. Install SmartUI CLI

```bash
npm install -g @lambdatest/smartui-cli
```

#### 3. Generate and Edit Configuration

Run the following to create your initial design file:

```bash
npx smartui config:create-figma-app designs.json
```

The file must have a `.json` extension, and the command refuses to overwrite a file that already exists.

##### Sample `designs.json`

```json title="designs.json"
{
  "mobile": [
    {
      "name": "Pixel 8",
      "platform": ["android 14"],
      "orientation": "portrait"
    }
  ],
  "figma": {
    "depth": 1,
    "configs": [
      {
        "figma_file_token": "abc12345",
        "figma_ids": ["2417-58969"],
        "screenshot_names": ["homepage"]
      }
    ]
  }
}
```

##### Configuration Options

| Config Key | Description | Usage |
| ---------- | ----------- | ----- |
| `mobile[].name` | Device name. This must be an exact match for a supported device, and the same device you run your Appium test on. An unsupported value fails validation with `unsupported mobile device name`. The generated config seeds valid examples you can start from. | Mandatory |
| `mobile[].platform` | Operating system and version for the device, for example `["android 14"]` or `["ios 17"]`. | Optional |
| `mobile[].orientation` | Either `portrait` or `landscape`. No other value is accepted. | Optional |
| `figma.depth` | Positive integer controlling how deep into the Figma document tree the fetch traverses. The generated config uses `1`. | Optional |
| `figma.configs[].figma_file_token` | File token for your Figma file. You can list multiple files in the same configuration. | Mandatory |
| `figma.configs[].figma_ids` | List of node or frame IDs you want to compare. Values must be unique. | Mandatory |
| `figma.configs[].screenshot_names` | Names given to the uploaded frames. If you supply this array it must have exactly the same number of entries as `figma_ids`, in the same order. Names must be unique across the whole file. | Optional |
| `smartIgnore` | Top level boolean accepted by the config schema and forwarded with the upload. | Optional |

:::note

If you add a property that is not listed above, the CLI logs `Additional property "<name>" is not allowed` as a warning and then continues with the upload. The extra key is ignored rather than applied, so check for this warning if a setting you added appears to have no effect.

:::

#### 4. Set Environment Variables

Set all four values before running the upload.

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-app-1' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
export FIGMA_TOKEN="figd_****************************************"
export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

</TabItem>
<TabItem value="Windows-app-1" label='Windows - CMD'>

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
set FIGMA_TOKEN="figd_****************************************"
set LT_USERNAME="YOUR_USERNAME"
set LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

</TabItem>
<TabItem value="PowerShell-app-1" label='PowerShell'>

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
$env:FIGMA_TOKEN="figd_****************************************"
$env:LT_USERNAME="YOUR_USERNAME"
$env:LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

</TabItem>
</Tabs>

#### 5. Upload your Figma designs as the baseline

```bash
npx smartui upload-figma-app designs.json --buildName "figma-baseline" --markBaseline
```

Uploaded frames are stored with a `.png` suffix. A frame named `homepage` in `screenshot_names` becomes `homepage.png` in the build. Remember this, because your app screenshot names have to match it in Step 8.

##### Optional Flags

| Flag             | Description                                       |
| ---------------- | ------------------------------------------------- |
| `--markBaseline` | Mark this build as a new baseline for future runs |
| `--buildName`    | Assign a custom name to this comparison build     |
| `--fetch-results [filename]` | Poll for build results after the upload. Accepts an optional output file name, for example `results.json` |

##### Example

```bash
npx smartui upload-figma-app designs.json --buildName "v1.0.0" --markBaseline --fetch-results results.json
```

#### 6. Upload your app

Your Appium test needs an app that lives on the real device cloud. Upload your `.apk` or `.ipa` and note the `app_url` that is returned.

```bash
curl -u "$LT_USERNAME:$LT_ACCESS_KEY" \
-X POST "https://manual-api.lambdatest.com/app/upload/realDevice" \
-F "appFile=@/path/to/your/app.apk" \
-F "name=YourAppName"
```

The response contains an `app_url` field, already in `lt://APP...` form, which is the value you pass as the `app` capability in the next step. For other upload options see [Upload your app](/support/docs/application-setup-via-api/).

#### 7. Configure your Appium capabilities

This is the half that produces the app screenshots. Use the same device here as in `designs.json` so both sides are captured at the same viewport.

```javascript title="NodeJS example"
let capabilities = {
  deviceName: "Pixel 8",          // must match mobile[].name in designs.json
  platformName: "android",
  platformVersion: "14",          // must match mobile[].platform
  isRealMobile: true,             // Mandatory
  app: "lt://APP_ID",             // Mandatory
  //highlight-next-line
  visual: true,                   // Mandatory
  name: "Figma app comparison",
  build: "Real Device App Build",
  //highlight-start
  "smartUI.project": "<Your Project Name>", // Mandatory, the project NAME not the project token
  "smartUI.build": "<Your Build Name>",     // Optional
  "smartUI.baseline": false,                // Leave false, your Figma build is the baseline
  //highlight-end
};

let gridUrl =
  "https://" +
  "<Your Username>" +
  ":" +
  "<Your Access Key>" +
  `@mobile-hub.lambdatest.com/wd/hub`;

let driver = await new webdriver.Builder()
  .usingServer(gridUrl)
  .withCapabilities(capabilities)
  .build();
```

:::warning

The app side is identified by `smartUI.project`, which takes the project **name**. The `PROJECT_TOKEN` you exported in Step 4 authenticates the CLI upload only. It is not used by the Appium capabilities.

:::

:::warning

`visual: true` is mandatory. Without it no screenshots are sent to SmartUI and the build is reported with an `Error` status.

:::

#### 8. Capture screenshots with matching names

Add the screenshot hook after the point in your script where the screen you care about is rendered.

**Critical**: Figma frames are stored with `.png` appended, so your app screenshot names must include the extension to line up with them.

```javascript
// ❌ Wrong, will not match the Figma frame
await driver.execute("smartui.takeScreenshot=homepage");

// ✅ Correct, matches the Figma frame homepage.png
await driver.execute("smartui.takeScreenshot=homepage.png");
```

:::warning

When you pass a config object, the screenshot name key is `screenshotName`. Passing `name` throws
`Error response status: 1` and the test fails.

```javascript
// ❌ Wrong, throws
await driver.execute("smartui.takeScreenshot", {name: "homepage.png"});

// ✅ Correct
await driver.execute("smartui.takeScreenshot", {screenshotName: "homepage.png"});
```

:::

<Tabs className='docs__val' groupId='framework'>
<TabItem value='appium' label='Appium NodeJS' default>

```javascript
// simple form
await driver.execute("smartui.takeScreenshot=homepage.png");

// config form
await driver.execute("smartui.takeScreenshot", {screenshotName: "homepage.png"});
```

</TabItem>
<TabItem value='appium-java' label='Appium Java'>

```java
// the Selenium interface is JavascriptExecutor, with a lower case s in script
((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot=homepage.png");
```

</TabItem>
<TabItem value='appium-python' label='Appium Python'>

```python
driver.execute_script("smartui.takeScreenshot=homepage.png")
```

</TabItem>
</Tabs>

Run your test suite as you normally would.

```bash
npm i && node your_test_script.js
```

#### 9. View SmartUI Results

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img' />

### How the comparison is paired

Three things have to line up for a Figma frame and an app screenshot to be compared:

1. **Same project.** The CLI upload targets it by `PROJECT_TOKEN` and the Appium run targets it by `smartUI.project`. Both must resolve to the same Real Devices project.
2. **Figma build is the baseline.** Upload the Figma designs with `--markBaseline`, or approve that build on the dashboard. Your app run then becomes the comparison build.
3. **Screenshot names match exactly.** A frame stored as `homepage.png` is only compared against an app screenshot named `homepage.png`.

The device in `designs.json` and the device in your capabilities should also match, so both sides are captured at the same viewport.

### Best Practices for Figma-to-App comparison

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='build-names-app' label='Build Names' default>

**Build Names**

Give each run a build name you can trace back to a release or a commit.

```bash
npx smartui upload-figma-app designs.json --buildName "v1.0.0"
```

</TabItem>
<TabItem value='screenshot-names-app' label='Screenshot Names' >

**Screenshot Names**

- Good: `homepage-screen`, `login-form`, `dashboard-tab`
- Avoid: `test1`, `screenshot`, `design-1`
- Ensure `screenshot_names` in your config match the order of `figma_ids`, and that the two arrays are the same length
- Keep names unique across the whole config file. Duplicates fail validation with `Found duplicate screenshot names in figma config`
- Remember the `.png` suffix on the app side

</TabItem>
<TabItem value='device-names-app' label='Device Names' >

**Device Names**

- Use the exact device name string. `Pixel 8` is valid, `pixel8` and `Pixel-8` are not
- Use the same device in `designs.json` and in your Appium capabilities. A Figma frame captured for one viewport will not line up with a screenshot taken on a device of a different size
- Keep `orientation` consistent between your Figma frames and the device
- Start from the file produced by `npx smartui config:create-figma-app`, which seeds valid device names

</TabItem>
<TabItem value='ci-app' label='CI Runs' >

**CI Runs**

- Set all four environment variables as secrets in your pipeline
- Use `--fetch-results` so the pipeline polls for the build outcome after the upload returns
- Refresh the Figma baseline as a separate job, not on every commit, so design changes are a deliberate step

</TabItem>
</Tabs>

### Troubleshooting Figma-to-App comparison

#### Uploads fail with an authentication error

<Tabs className='docs__val' groupId='troubleshooting-auth'>
<TabItem value='verify-env-vars' label='Verify Environment Variables' default>

Check that all four values are set in the shell you are running from.

```bash
echo $PROJECT_TOKEN
echo $FIGMA_TOKEN
echo $LT_USERNAME
echo $LT_ACCESS_KEY
```

A missing `LT_USERNAME` or `LT_ACCESS_KEY` is the most common cause. The CLI reports the missing variable by name.

</TabItem>
<TabItem value='verify-figma-token-app' label='Verify Figma Token' >

Ensure the Figma token is valid and has not expired. Generate a new token from [Figma Settings](https://www.figma.com/settings).

</TabItem>
<TabItem value='check-project-type-app' label='Check Project Type' >

- Ensure the project is created as **Real Devices** type, not CLI
- Verify the project exists on the SmartUI dashboard
- Verify `PROJECT_TOKEN` belongs to that same project

</TabItem>
</Tabs>

#### The config file is rejected

<Tabs className='docs__val' groupId='troubleshooting-config'>
<TabItem value='check-file-token-app' label='Check File Token' default>

- Verify the `figma_file_token` in your `designs.json` matches the file ID from the Figma URL
- Ensure the account behind your Figma token has access to that file

</TabItem>
<TabItem value='validate-node-ids-app' label='Validate Node IDs' >

- Confirm the `figma_ids` in your configuration are valid and unique
- Check that the nodes still exist in the Figma file
- Increase `figma.depth` if nested frames are not being picked up

</TabItem>
<TabItem value='array-lengths' label='Check Array Lengths' >

If you supply `screenshot_names`, it must have the same number of entries as `figma_ids`. A mismatch fails with `Mismatch in Figma Ids and Screenshot Names in figma config`.

</TabItem>
<TabItem value='unknown-keys' label='Unknown Properties' >

An unrecognised key does not stop the upload, it only logs `Additional property "<name>" is not allowed` and is then ignored. If a setting seems to have no effect, look for that warning and check it against the Configuration Options table above.

</TabItem>
</Tabs>

#### The upload fails while fetching from Figma

<Tabs className='docs__val' groupId='troubleshooting-figma-api'>
<TabItem value='rate-limit' label='Figma rate limit' default>

The upload authenticates and then fails during **Processing App Figma** with a message like:

```
Failed to retrieve figma files, Figma API rate limit reached for your token.
Your file is on the 'starter' plan tier, and your token's rate-limit bucket is 'low'.
```

Figma applies the lowest rate-limit bucket to tokens that act as a Viewer or Collab seat on a file, which includes free Starter workspaces. A handful of uploads in quick succession is enough to exhaust it.

What helps:

- Wait before retrying. Short backoff often is not enough, so leave a longer gap between attempts
- Reduce how many `figma_ids` you fetch per run, and avoid re-running the upload while iterating on unrelated config
- Use a token belonging to an Editor seat on a paid Figma tier, which is placed in a higher bucket

A direct call to the Figma REST API can still succeed while the upload fails, because the upload makes several calls per run.

</TabItem>
<TabItem value='figma-access' label='Token cannot see the file' >

If the message is `Invalid token` rather than a rate limit, the token itself is being rejected. Regenerate it from [Figma Settings](https://www.figma.com/settings) and make sure it carries the `file_content:read` scope, which is what allows reading file contents and rendering images.

</TabItem>
</Tabs>

#### Figma frames and app screenshots are not being compared

<Tabs className='docs__val' groupId='troubleshooting-compare'>
<TabItem value='check-screenshot-names-app' label='Check Screenshot Names' default>

- Ensure app screenshots include the `.png` extension, for example `homepage.png`
- Verify names match exactly between the Figma config and your Appium code, including case
- Ensure `screenshot_names` matches the order of `figma_ids`

</TabItem>
<TabItem value='check-project-match' label='Check Project Match' >

- Verify `smartUI.project` in your capabilities is the project **name** for the same project whose token you used for the CLI upload
- Confirm the Figma build was marked as the baseline, either with `--markBaseline` or by approving it on the dashboard

</TabItem>
<TabItem value='verify-device-sizes' label='Verify Device Sizes' >

- Ensure the device in `designs.json` matches the device in your Appium capabilities
- Verify orientation matches on both sides
- Check that your Figma frame dimensions match the device viewport

</TabItem>
<TabItem value='no-screenshots' label='No App Screenshots Appear' >

- Confirm `visual: true` is set in your capabilities. Without it the build is reported as `Error` and no screenshots reach SmartUI
- Confirm `isRealMobile: true` is set
- Confirm the screenshot hook runs after the screen has finished rendering

</TabItem>
</Tabs>

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/) for detailed solutions
- Visit [TestMu AI Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [Appium Hooks Documentation](/support/docs/smartui-appium-hooks/)
- [SmartUI Appium SDK](/support/docs/smartui-appium-sdk/)
- [Upload your app to the real device cloud](/support/docs/application-setup-via-api/)
- [How to generate a Figma token](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens)
- [SmartUI CLI Docs](/support/docs/smartui-cli-complete-reference/)
- [Appium + SmartUI Node Sample](https://github.com/LambdaTest/smartui-appium-nodejs)
- [SmartUI API Documentation](https://www.testmuai.com/support/api-doc/)

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'> SmartUI Figma Testing </span>
    </li>
  </ul>
</nav>
