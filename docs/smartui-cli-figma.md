---
id: smartui-cli-figma
title: Getting started with TestMu AI's SmartUI Figma CLI
sidebar_label: Figma CLI
description: In this documentation, learn how to perform Visual Testing of your Figma files using command line interface using SmartUI CLI.
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

url: https://www.testmuai.com/support/docs/smartui-cli/
slug: smartui-cli-figma/
canonical: https://www.testmuai.com/support/docs/smartui-cli-figma/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import VerifiedTag from '@site/src/component/verifiedTag';

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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/smartui-cli-figma/"
    },
    "headline": "Getting started with TestMu AI's SmartUI Figma CLI",
    "description": "In this documentation, learn how to perform Visual Testing of your Figma files using command line interface using SmartUI CLI.",
    "url": "https://www.testmuai.com/support/docs/smartui-cli-figma/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "Visual Regression",
      "Visual Regression Testing Guide",
      "Visual Regression Test Automation"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Basic understanding of Command Line Interface is required.; Basic understanding of Figma file structuring is required.; Login to TestMu AI SmartUI with your credentials..",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Install required NPM modules for TestMu AI SmartUI CLI globally or in your project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g @lambdatest/smartui-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Install the Dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install @lambdatest/smartui-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Create the design info file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "smartui config:create-figma designs.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Create the design info file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### **Step 3:** Configure your Project Token and Figma Token\n\n1. Setup your project token shown in the **SmartUI** app after creating your project.\n\n<Tabs className='docs__val' groupId='language'>\n<TabItem value='MacOS/Linux' label='MacOS/Linux' default>\n\n```bash\nexport PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure your Project Token and Figma Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure your Project Token and Figma Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 7",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export FIGMA_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 8",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set FIGMA_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 9",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:FIGMA_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Configure your TestMu AI Credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=\"YOUR_USERNAME\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Configure your TestMu AI Credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set LT_USERNAME=\"YOUR_USERNAME\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Configure your TestMu AI Credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:LT_USERNAME=\"YOUR_USERNAME\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 5: Uploading the Figma files on SmartUI Cloud using CLI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui upload-figma designs.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Advanced options for baseline management",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui upload-figma designs.json --markBaseline"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Advanced options for baseline management",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui upload-figma designs.json --buildName \"<Build_Name>\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Advanced options for baseline management",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui upload-figma designs.json --buildName \"<Build_Name>\" --markBaseline"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Best Practices",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   npx smartui upload-figma designs.json --buildName \"v1.0.0\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Figma-uploaded screenshots automatically have .png appended (e.g., homepage.png), so your SDK screenshots must match",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// \u274c Wrong - will not match Figma screenshot\nsmartuiSnapshot(driver, \"homepage\");\n\n// \u2705 Correct - matches Figma screenshot name\nsmartuiSnapshot(driver, \"homepage.png\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 19",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// Java\nSmartUISnapshot.smartuiSnapshot(driver, \"homepage.png\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 20",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// JavaScript\nawait smartuiSnapshot(page, \"homepage.png\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 21",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// JavaScript\ncy.smartuiSnapshot(\"homepage.png\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Setup with Continuous Integration (CI)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "steps:\n  - name: Running SmartUI Figma CLI Tests\n    run: |\n      npm install @lambdatest/smartui-cli\n      npx playwright install-deps\n      npx smartui upload-figma designs.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Figma-uploaded screenshots automatically have .png appended (e.g., homepage.png), so your SDK screenshots must match",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// \u274c Wrong - will not match Figma screenshot\nsmartuiSnapshot(driver, \"homepage\");\n\n// \u2705 Correct - matches Figma screenshot name\nsmartuiSnapshot(driver, \"homepage.png\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 24",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// Java\nSmartUISnapshot.smartuiSnapshot(driver, \"homepage.png\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 25",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// JavaScript\nawait smartuiSnapshot(page, \"homepage.png\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 26",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// JavaScript\ncy.smartuiSnapshot(\"homepage.png\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Setup with Continuous Integration (CI)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "steps:\n  - name: Running SmartUI Figma CLI Tests\n    run: |\n      npm install @lambdatest/smartui-cli\n      npx playwright install-deps\n      npx smartui upload-figma designs.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Troubleshooting",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   echo $FIGMA_TOKEN"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Solutions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   echo $PROJECT_TOKEN"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Steps to run your first test",
      "description": "In this documentation, learn how to perform Visual Testing of your Figma files using command line interface using SmartUI CLI.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Install the Dependencies",
          "text": "Install required NPM modules for TestMu AI SmartUI CLI globally or in your project: Global Installation (Recommended): Local Installation: If you face any problems executing tests with SmartUI-CLI versions >= v4.x.x, upgrade your Node.js version to v20.3 or above.",
          "url": "https://www.testmuai.com/support/docs/smartui-cli-figma/#step-1-install-the-dependencies"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Create the design info file",
          "text": "Once, the designs file will be created, you will be seeing the sample pre-filled configuration in the designs.json file:",
          "url": "https://www.testmuai.com/support/docs/smartui-cli-figma/#step-2-create-the-design-info-file"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure your Project Token and Figma Token",
          "text": "Setup your project token shown in the SmartUI app after creating your project. Setup your personal access token for Figma to authenticate Figma with SmartUI.",
          "url": "https://www.testmuai.com/support/docs/smartui-cli-figma/#step-3-configure-your-project-token-and-figma-token"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Configure your TestMu AI Credentials",
          "text": "Please read the following table for more information about the configuration file:",
          "url": "https://www.testmuai.com/support/docs/smartui-cli-figma/#step-4-configure-your-testmu-ai-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Uploading the Figma files on SmartUI Cloud using CLI",
          "text": "You can now execute tests for Visual Testing for Figma objects using the following options:.",
          "url": "https://www.testmuai.com/support/docs/smartui-cli-figma/#step-5-uploading-the-figma-files-on-smartui-cloud-using-cli"
        }
      ]
    }
  ]) }}
/>

Welcome to the <BrandName /> SmartUI Figma CLI documentation!

With SmartUI Figma CLI, you can seamlessly perform visual regression testing of your Figma designs on SmartUI using your command line, identifying Visual UI Regression bugs effortlessly. This guide will walk you through the process of running successful Figma Visual tests using SmartUI CLI.

## Prerequisites for running SmartUI Figma CLI

- Basic understanding of Command Line Interface is required.
- Basic understanding of Figma file structuring is required.
- Login to [<BrandName /> SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your visual tests for Figma files on <BrandName /> platform using SmartUI CLI.

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

1. Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> for executing your `CLI` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Steps to run your first test

### **Step 1**: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI CLI` globally or in your project:

**Global Installation (Recommended):**

<VerifiedTag value="Verified" />

```bash
npm install -g @lambdatest/smartui-cli
```

**Local Installation:**

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/smartui-cli
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

### **Step 2:** Create the design info file

<VerifiedTag value="Verified" />

```
smartui config:create-figma designs.json
```
Once, the `designs` file will be created, you will be seeing the sample pre-filled configuration in the `designs.json` file:

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

#### SmartUI CLI Design Config Options

Please read the following table for more information about the configuration file:

| Config Key     | Description                                                                                                                        | Usage     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------- |
| figma_file_token       | File token for your required Figma file. You can use multiple figma files in the same configuration.| Mandatory |
| figma_ids  | Comma separated list of nodes that you care about in the document. If specified, only a subset of the document will be returned corresponding to the nodes listed, their children, and everything between the root node and the listed nodes. | Optional |
| depth (int)    | Positive integer (>1) representing how deep into the document tree to traverse. For example, setting it to 2 returns Pages and all top level objects on each page. Not setting this parameter returns all nodes | Optional |

### **Step 5:** Uploading the Figma files on SmartUI Cloud using CLI

You can now execute tests for `Visual Testing for Figma objects` using the following options:.

<VerifiedTag value="Verified" />

```bash
npx smartui upload-figma designs.json
```

### Advanced options for baseline management

1. `markBaseline` - You can mark a specific build as a baseline through the runner command

<VerifiedTag value="Verified" />

```bash
npx smartui upload-figma designs.json --markBaseline
```
2. `buildName` - You can add your custom build name to a build by running the following command

<VerifiedTag value="Verified" />

```bash
npx smartui upload-figma designs.json --buildName "<Build_Name>"
```

<b> You can use these options in a nested way as well, as shown below </b>

<VerifiedTag value="Verified" />

```bash
npx smartui upload-figma designs.json --buildName "<Build_Name>" --markBaseline
```

:::note

If `buildName` is not specified, a random build name is generated for every run.

You can add more screenshots in a build by specifying the particular build name in the runner command
:::

## Best Practices

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```javascript
// ❌ Wrong - will not match Figma screenshot
smartuiSnapshot(driver, "homepage");

// ✅ Correct - matches Figma screenshot name
smartuiSnapshot(driver, "homepage.png");
```

**Example for different frameworks:**

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='branch-names-1' label='Branch Names' >

**Branch Names**

**Screenshot Naming for SDK Comparisons**

**Important**: When comparing Figma designs with live implementations captured via SDKs, add `.png` extension to your SDK screenshot names.

Figma-uploaded screenshots automatically have `.png` appended (e.g., `homepage.png`), so your SDK screenshots must match:

**In your SDK code:**

<VerifiedTag value="Verified" />

```javascript
// ❌ Wrong - will not match Figma screenshot
smartuiSnapshot(driver, "homepage");

// ✅ Correct - matches Figma screenshot name
smartuiSnapshot(driver, "homepage.png");
```

**Example for different frameworks:**

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='framework'>
<TabItem value='selenium-1' label='Selenium' default>

```java
// Java
SmartUISnapshot.smartuiSnapshot(driver, "homepage.png");
```

</TabItem>
<TabItem value='playwright-1' label='Playwright'>

```javascript
// JavaScript
await smartuiSnapshot(page, "homepage.png");
```

</TabItem>
<TabItem value='cypress-1' label='Cypress'>

```javascript
// JavaScript
cy.smartuiSnapshot("homepage.png");
```

</TabItem>
</Tabs>

This ensures that Figma screenshots (e.g., `homepage.png`) match SDK screenshots (e.g., `homepage.png`) in the same build.

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

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

</TabItem>
</Tabs>

## Troubleshooting

<VerifiedTag value="Verified" />

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
- Check [Figma-Web CLI Documentation](/support/docs/smartui-cli-figma-web) for web comparison workflows
- Visit [<BrandName /> Support](https://www.testmuai.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support)

</TabItem>
</Tabs>


## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [Figma-Web CLI Documentation](/support/docs/smartui-cli-figma-web)
- [Figma-App CLI Documentation](/support/docs/smartui-cli-figma-app)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
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
      <span className='breadcrumbs__link'> SmartUI Figma CLI </span>
    </li>
  </ul>
</nav>
