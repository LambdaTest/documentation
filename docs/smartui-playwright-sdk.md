---
id: smartui-playwright-sdk
title: SmartUI Playwright SDK
sidebar_label: Playwright
description: In this documentation, learn how integrate your Playwright automated tests with TestMu AI's SmartUI.
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

url: https://www.testmuai.com/support/docs/smartui-playwright-sdk/
slug: smartui-playwright-sdk/
canonical: https://www.testmuai.com/support/docs/smartui-playwright-sdk/
hide_title: true
toc_max_heading_level: 2

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


import VerifiedTag from '@site/src/component/verifiedTag';

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
          "item": `${BRAND_URL}/support/docs/smartui-playwright-sdk/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-playwright-sdk/"
    },
    "headline": "Integrate SmartUI SDK with Playwright-JavaScript",
    "description": "In this documentation, learn how integrate your Playwright automated tests with TestMu AI's SmartUI.",
    "url": "https://www.testmuai.com/support/docs/smartui-playwright-sdk/",
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
    "dependencies": "Basic understanding of Command Line Interface and Playwright is required.; Login to TestMu AI SmartUI with your credentials..",
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
        "name": "Step 1: Create/Update your test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/smartui-playwright-sample",
        "text": "git clone https://github.com/LambdaTest/smartui-playwright-sample\ncd smartui-playwright-sample/sdk"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Install the Dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install @lambdatest/smartui-cli @lambdatest/playwright-driver playwright"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure your Project Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export PROJECT_TOKEN=123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure your Project Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set PROJECT_TOKEN=123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure your Project Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:PROJECT_TOKEN=123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To generate the configuration file, please execute the following command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui config:create .smartui.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 7",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": ":::info Advanced options in SmartUI configuration\n- For capturing fullpage or viewport screenshots, please refer to this [documentation](/docs/smartui-sdk-config-options/#12-viewports)\n- For the list of available mobile viewports, please refer to this [documentation](/docs/smartui-sdk-config-options/#list-of-supported-device-viewports)\n- For more information about SmartUI config global options, please refer to this [documentation](/docs/smartui-sdk-config-options/#3-global-options-optional).\n:::\n\n### Step 5: Adding SmartUI function to take screenshot\n\n- You can incorporate SmartUI into your custom `Playwright` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of Playwright script of which we would like to take the screenshot, as shown below:\n\n```js\nconst { chromium } = require(\"playwright\");\nconst smartuiSnapshot = require(\"@lambdatest/playwright-driver\");\n\n(async () => {\n  // Launch a local browser instance\n  const browser = await chromium.launch({\n    headless: false, // Set to false to see the browser UI\n  });\n\n  const page = await browser.newPage();\n\n  // Navigate to the desired URL\n  await page.goto(\"https://www.lambdatest.com\");\n\n  // Use smartuiSnapshot to take a visual snapshot locally\n  await smartuiSnapshot.smartuiSnapshot(page, \"LambdaTest\");\n\n  // Close the browser\n  await browser.close();\n})();\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute the Tests on SmartUI Cloud",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui exec node playwrightCloud.js --config .smartui.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Handling Dynamic Data in SmartUI SDK ****",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='IgoreClass' label='Ignore Class'>\n\n```js title=\"This is a sample for your configuration for Playwright to ignore by Class\"\nlet options = {\n            ignoreDOM: {\n                class: [\"Class-1\", \"Class-2\"],\n            }\n        }\n        await page.goto('Required URL');\n        await smartuiSnapshot.smartuiSnapshot(page, \"Screenshot Name\", options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 10",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n\n<TabItem value='IgnoreSelector' label='Ignore CSS Selector'>\n\n```js title=\"This is a sample for your configuration for Playwright to ignore by CSS Selector\"\nlet options = {\n            ignoreDOM: {\n                cssSelector: [\"CSS-Selector-1\", \"CSS-Selector-2\"],\n            }\n        }\n        await page.goto('Required URL');\n        await smartuiSnapshot.smartuiSnapshot(page, \"Screenshot Name\", options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 11",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='SelectClass' label='Select Class'>\n\n```js title=\"This is a sample for your configuration for Playwright to select by Class\"\nlet options = {\n            selectDOM: {\n                class: [\"Class-1\", \"Class-2\"],\n            }\n        }\n        await page.goto('Required URL');\n        await smartuiSnapshot.smartuiSnapshot(page, \"Screenshot Name\", options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 12",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n\n<TabItem value='SelectSelector' label='Select CSS Selector'>\n\n```js title=\"This is a sample for your webhook configuration for Playwright to select by CSS Selector\"\nlet options = {\n            selectDOM: {\n                cssSelector: [\"CSS-Selector-1\", \"CSS-Selector-2\"],\n            }\n        }\n        await page.goto('Required URL');\n        await smartuiSnapshot.smartuiSnapshot(page, \"Screenshot Name\", options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For capturing the screenshot of a specific element",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='ElementClass' label='Capture Element by Class'>\n\n```js title=\"This is a sample for your configuration for Playwright to capture an element by Class\"\nlet options = {\n      element: {\n          class: 'Required Class',\n      }\n  };\n        await page.goto('Required URL');\n        await smartuiSnapshot.smartuiSnapshot(page, \"Screenshot Name\", options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 14",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n\n<TabItem value='ElementSelector' label='Capture Element by Selector'>\n\n```js title=\"This is a sample for your webhook configuration for Playwright to capture an element by CSS Selector\"\nlet options = {\n      element: {\n          cssSelector: 'Required CSS Selector',\n      }\n  };\n        await page.goto('Required URL');\n        await smartuiSnapshot.smartuiSnapshot(page, \"Screenshot Name\", options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 15",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n## Best Practices\n\n<Tabs className='docs__val' groupId='best-practices'>\n<TabItem value='screenshot-naming' label='Screenshot Naming' default>\n\n**Screenshot Naming**\n\n- Use descriptive, consistent names for screenshots\n- Include page/component name in screenshot names\n- Avoid special characters that might cause issues\n- Use consistent naming conventions across your test suite\n\n**Example:**\n```javascript\nawait smartuiSnapshot.smartuiSnapshot(page, \"HomePage-Header\");\nawait smartuiSnapshot.smartuiSnapshot(page, \"ProductPage-MainContent\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Best Practices",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "await page.goto('https://example.com');\nawait page.waitForSelector('#main-content', { state: 'visible' });\nawait smartuiSnapshot.smartuiSnapshot(page, \"Page Loaded\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify PROJECT_TOKEN is set correctly",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   echo $PROJECT_TOKEN"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify SmartUI CLI is installed",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   npx smartui --version"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add explicit waits before screenshots",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "   await page.waitForSelector('#content', { state: 'visible' });\n   await page.waitForLoadState('networkidle');"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Enable JavaScript in configuration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "   {\n     \"enableJavaScript\": true\n   }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Try different port if default is in use",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   npx smartui exec -P 5000 -- <command\">"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Check latest versions on npm",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   npm view @lambdatest/playwright-driver version\n   npm view @lambdatest/smartui-cli version"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clear npm cache",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   npm cache clean --force"
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
      "description": "Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Create/Update your test",
          "text": "You can clone the sample repository to run LambdaTest automation tests with SmartUI and use the plawrightCloud.js file present in the sdk folder.",
          "url": "https://www.testmuai.com/support/docs/smartui-playwright-sdk/#step-1-createupdate-your-test"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Install the Dependencies",
          "text": "Install required NPM modules for TestMu AI SmartUI Playwright SDK in your Frontend project. If you face any problems executing tests with SmartUI-CLI versions >= v4.x.x, upgrade your Node.js version to v20.3 or above.",
          "url": "https://www.testmuai.com/support/docs/smartui-playwright-sdk/#step-2-install-the-dependencies"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure your Project Token",
          "text": "Setup your project token shown in the SmartUI app after creating your project.",
          "url": "https://www.testmuai.com/support/docs/smartui-playwright-sdk/#step-3-configure-your-project-token"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Create and Configure SmartUI Config",
          "text": "You can now configure your project configurations on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command: Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file: For capturing fullpage or viewport screenshots, please refer to this documentation For the list of available mobile viewports, please refer to this documentation For more information about SmartUI config global options, please refer to this documentation.",
          "url": "https://www.testmuai.com/support/docs/smartui-playwright-sdk/#step-4-create-and-configure-smartui-config"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Adding SmartUI function to take screenshot",
          "text": "You can incorporate SmartUI into your custom Playwright automation test (any platform) script by adding the smartuiSnapshot function in the required segment of Playwright script of which we would like to take the screenshot, as shown below:",
          "url": "https://www.testmuai.com/support/docs/smartui-playwright-sdk/#step-5-adding-smartui-function-to-take-screenshot"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Execute the Tests on SmartUI Cloud",
          "text": "Execute visual regression tests on SmartUI using the following commands You may use the npx smartui --help command in case you are facing issues during the execution of SmartUI commands in the CLI.",
          "url": "https://www.testmuai.com/support/docs/smartui-playwright-sdk/#step-6-execute-the-tests-on-smartui-cloud"
        }
      ]
    }
  ]) }}
/>



# SmartUI Playwright SDK

---

The SmartUI Playwright SDK integrates visual regression testing into your existing Playwright suite across JavaScript, Java, and Python. It captures, compares, and analyzes screenshots across a multitude of browsers and resolutions, so you can detect visual discrepancies early, keep your application's UI consistent across every supported environment, and get comprehensive coverage with minimal setup.

Select your language from the tabs below to follow the setup and usage steps for JavaScript, Java, or Python.

## Prerequisites

- Basic understanding of Command Line Interface and Playwright is required.
- Login to [<BrandName /> SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on <BrandName /> platform using SmartUI Playwright SDK integration.

## Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> for executing your `SDK` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Steps to run your first test

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Select your language below and follow the steps to successfully generate screenshots.

<Tabs className='docs__val' groupId='language'>

<TabItem value='javascript' label='JavaScript' default>

### Step 1: Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `plawrightCloud.js` file present in the `sdk` folder.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/smartui-playwright-sample
cd smartui-playwright-sample/sdk
```

### Step 2: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Playwright SDK` in your **Frontend** project.

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/smartui-cli @lambdatest/playwright-driver playwright
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

### Step 3: Configure your Project Token

Setup your project token shown in the **SmartUI** app after creating your project.

<Tabs className='docs__val' groupId='os'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

<VerifiedTag value="Verified" />

```bash
export PROJECT_TOKEN=123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

<VerifiedTag value="Verified" />

```bash
set PROJECT_TOKEN=123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

<VerifiedTag value="Verified" />

```powershell
$env:PROJECT_TOKEN=123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img' />

### Step 4: Create and Configure SmartUI Config

You can now configure your project configurations on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

<VerifiedTag value="Verified" />

```bash
npx smartui config:create .smartui.json
```

Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

<VerifiedTag value="Verified" />

```json title="/smartui-sdk-project/.smartui.json"
{
  "web": {
    "browsers": [
      "chrome",
      "firefox",
      "safari",
      "edge"
    ],
    "viewports": [
      [
        1920
      ],
      [
        1366
      ],
      [
        1028
      ]
    ] // Full Page screenshots are captured by default for web viewports
  },
  "mobile": {
    "devices": [
      "iPhone 14",  //iPhone 14 viewport
      "Galaxy S24"  //Galaxy S24 viewport
    ],
    "fullPage": true, //Full Page is true by default for mobile viewports
    "orientation": "portrait" //Change to "landscape" for landscape snapshot
  },
  "waitForTimeout": 1000, //Optional (Should only be used in case lazy-loading/async components are present)
  "waitForPageRender": 50000, //Optional (Should only be used in case of websites which take more than 30s to load)
  "enableJavaScript": false, //Enable javascript for all the screenshots of the project
  "allowedHostnames": [] //Additional hostnames to capture assets from
}
```
:::info Advanced options in SmartUI configuration
- For capturing fullpage or viewport screenshots, please refer to this [documentation](/docs/smartui-sdk-config-options/#12-viewports)
- For the list of available mobile viewports, please refer to this [documentation](/docs/smartui-sdk-config-options/#list-of-supported-device-viewports)
- For more information about SmartUI config global options, please refer to this [documentation](/docs/smartui-sdk-config-options/#3-global-options-optional).
:::

### Step 5: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Playwright` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of Playwright script of which we would like to take the screenshot, as shown below:

<VerifiedTag value="Verified" />

```js
const { chromium } = require("playwright");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
  // Launch a local browser instance
  const browser = await chromium.launch({
    headless: false, // Set to false to see the browser UI
  });

  const page = await browser.newPage();

  // Navigate to the desired URL
  await page.goto("https://www.lambdatest.com");

  // Use smartuiSnapshot to take a visual snapshot locally
  await smartuiSnapshot.smartuiSnapshot(page, "LambdaTest");

  // Close the browser
  await browser.close();
})();

```

### Step 6: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

<VerifiedTag value="Verified" />

```bash
npx smartui exec node playwrightCloud.js --config .smartui.json
```

:::note
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

</TabItem>

<TabItem value='java' label='Java'>

### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the Java from the <BrandName /> GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/LambdaTest/smartui-java-playwright-sample" className='github__anchor'><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className='doc_img' /> View on GitHub</a>
:::

### Step 2: Install the Dependencies

Update your dependencies in `pom.xml` file Install required modules for <BrandName /> SmartUI SDK in your frontend project.

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/smartui-cli @lambdatest/playwright-driver playwright
mvn clean compile
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

### Step 3: Setup your credentials

<Tabs className='docs__val' groupId='os'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

<VerifiedTag value="Verified" />

```bash
export LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

<VerifiedTag value="Verified" />

```bash
set LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

<VerifiedTag value="Verified" />

```powershell
$env:LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img' />

### Step 4: Create and Configure SmartUI Config

You can now configure your project configurations on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

<VerifiedTag value="Verified" />

```bash
npx smartui config:create smartui-web.json
```

Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

<VerifiedTag value="Verified" />

```json title="/smartui-sdk-project/.smartui.json"
{
  "web": {
    "browsers": [
      "chrome",
      "firefox",
      "safari",
      "edge"
    ],
    "viewports": [
      [
        1920
      ],
      [
        1366
      ],
      [
        1028
      ]
    ] // Full Page screenshots are captured by default for web viewports
  },
  "mobile": {
    "devices": [
      "iPhone 14",  //iPhone 14 viewport
      "Galaxy S24"  //Galaxy S24 viewport
    ],
    "fullPage": true, //Full Page is true by default for mobile viewports
    "orientation": "portrait" //Change to "landscape" for landscape snapshot
  },
  "waitForTimeout": 1000, //Optional (Should only be used in case lazy-loading/async components are present)
  "waitForPageRender": 50000, //Optional (Should only be used in case of websites which take more than 30s to load)
  "enableJavaScript": false, //Enable javascript for all the screenshots of the project
  "allowedHostnames": [] //Additional hostnames to capture assets from
}
```
:::info Advanced options in SmartUI configuration
- For capturing fullpage or viewport screenshots, please refer to this [documentation](/docs/smartui-sdk-config-options/#12-viewports)
- For the list of available mobile viewports, please refer to this [documentation](/docs/smartui-sdk-config-options/#list-of-supported-device-viewports)
- For more information about SmartUI config global options, please refer to this [documentation](/docs/smartui-sdk-config-options/#3-global-options-optional).
:::

### Step 5: Adding SmartUI function to take screenshot

You can incorporate SmartUI into your custom `Playwright` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of Playwright script of which we would like to take the screenshot, as shown below:

<VerifiedTag value="Verified" />

```java reference
https://github.com/LambdaTest/smartui-java-playwright-sample/blob/main/src/test/java/com/lambdatest/SmartUISDKPlaywrightCloud.java
```

### Step 6: Execute the Tests on SmartUI Cloud

Execute visual regression tests on SmartUI using the following commands

<VerifiedTag value="Verified" />

```bash
npx smartui exec -- mvn test -D suite="sdk-playwright-local-java.xml
```

:::note
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

</TabItem>

<TabItem value='python' label='Python'>

:::note
Install **virtualenv** which is the recommended way to run your tests. It will isolate the build from other setups you may have running and ensure that the tests run with the specified versions of the modules.

<VerifiedTag value="Verified" />

```bash
pip install virtualenv
```
:::

### Step 1: Create/Update your test

- You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `SmartUI_SDK_LT_hub.py` file.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/smartui-playwright-python-sdk-sample
cd smartui-playwright-python-sdk-sample
```

- Create a virtual environment in your project folder (the environment name is arbitrary).

<VerifiedTag value="Verified" />

```bash
virtualenv venv
```

- Activate the environment.

<VerifiedTag value="Verified" />

```bash
source venv/bin/activate
```

### Step 2: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Playwright Python SDK` in your **Frontend** project.

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/smartui-cli
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

<VerifiedTag value="Verified" />

```bash
pip install lambdatest-playwright-driver
```

### Step 3: Configure your Project Token

Setup your project token shown in the **SmartUI** app after creating your project.

<Tabs className='docs__val' groupId='os'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

<VerifiedTag value="Verified" />

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

<VerifiedTag value="Verified" />

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

<VerifiedTag value="Verified" />

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img' />

### Step 4: Create and Configure SmartUI Config

You can now configure your project configurations on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

<VerifiedTag value="Verified" />

```bash
npx smartui config:create .smartui.json
```

Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

<VerifiedTag value="Verified" />

```json title="/smartui-sdk-project/.smartui.json"
{
  "web": {
    "browsers": [
      "chrome",
      "firefox",
      "safari",
      "edge"
    ],
    "viewports": [
      [
        1920
      ],
      [
        1366
      ],
      [
        1028
      ]
    ] // Full Page screenshots are captured by default for web viewports
  },
  "mobile": {
    "devices": [
      "iPhone 14",  //iPhone 14 viewport
      "Galaxy S24"  //Galaxy S24 viewport
    ],
    "fullPage": true, //Full Page is true by default for mobile viewports
    "orientation": "portrait" //Change to "landscape" for landscape snapshot
  },
  "waitForTimeout": 1000, //Optional (Should only be used in case lazy-loading/async components are present)
  "waitForPageRender": 50000, //Optional (Should only be used in case of websites which take more than 30s to load)
  "enableJavaScript": false, //Enable javascript for all the screenshots of the project
  "allowedHostnames": [] //Additional hostnames to capture assets from
}
```
:::info Advanced options in SmartUI configuration
- For capturing fullpage or viewport screenshots, please refer to this [documentation](/docs/smartui-sdk-config-options/#12-viewports)
- For the list of available mobile viewports, please refer to this [documentation](/docs/smartui-sdk-config-options/#list-of-supported-device-viewports)
- For more information about SmartUI config global options, please refer to this [documentation](/docs/smartui-sdk-config-options/#3-global-options-optional).
:::

### Step 5: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Playwright` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of playwright script of which we would like to take the screenshot, as shown below:

<VerifiedTag value="Verified" />

```python
from playwright.sync_api import sync_playwright, Playwright
from lambdatest_playwright_driver import smartui_snapshot

def run(playwright: Playwright):
    webkit = playwright.webkit
    browser = webkit.launch()
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto("Required URL")
        smartui_snapshot(page, "Screenshot Name")

        print("SmartUI snapshot taken successfully!")

    except Exception as e:
        print(f"Error occurred during SmartUI snapshot: {e}")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
```

### Step 6: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

<VerifiedTag value="Verified" />

```bash
npx smartui --config .smartui.json exec -- python SmartUI_SDK_LT_hub.py
```

:::note
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

</TabItem>

</Tabs>

##  View SmartUI Results

You have successfully integrated SmartUI SDK with your Playwright tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img' />

## Arguments supported in the `smartUISnapshot` function

The following are the different options which are currently supported:

<Tabs className='docs__val' groupId='language'>

<TabItem value='javascript' label='JavaScript' default>

| Key                       | Description                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `page` (instance)    | The instance of page used in your tests. |
| `"Screenshot Name"` (string)    | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `options` (object)    | Specify one or a combination of selectors in the `ignoreDOM` or `selectDOM` objects. These selectors can be based on `HTML DOM IDs, CSS classes, CSS selectors, or XPaths` used by your webpage. They define elements that should be excluded from or included in the visual comparison.|

</TabItem>

<TabItem value='java' label='Java'>

| Key                       | Description                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `driver` (instance)    | The instance of the web driver used in your tests. |
| `"Screenshot Name"` (string)    | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `options` (object)    | Specify one or a combination of selectors in the `ignoreDOM` or `selectDOM` objects. These selectors can be based on `HTML DOM IDs, CSS classes, CSS selectors, or XPaths` used by your webpage. They define elements that should be excluded from or included in the visual comparison.|

</TabItem>

<TabItem value='python' label='Python'>

| Key                       | Description                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `page` (instance)    | The instance of the page used in your tests. |
| `"Screenshot Name"` (string)    | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `options` (object)    | Specify one or a combination of selectors in the `ignoreDOM` or `selectDOM` objects. These selectors can be based on `HTML DOM IDs, CSS classes, CSS selectors, or XPaths` used by your webpage. They define elements that should be excluded from or included in the visual comparison.|

</TabItem>

</Tabs>

## Handling Dynamic Data in SmartUI SDK  **<NewTag value='New' color='#000' bgColor='#ffec02' />**

When conducting visual tests, you may encounter scenarios where certain elements within your application change between test runs. These changes  might introduce inconsistencies in your test results.You can ignore / select specific element(s) to be removed from the comparison by parsing the options in the `smartuiSnapshot` function in the following way

<Tabs className='docs__val' groupId='language'>

<TabItem value='javascript' label='JavaScript' default>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='IgnoreID' label='Ignore ID' default>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for Playwright to ignore by ID"
let options = {
            ignoreDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>
<TabItem value='IgoreClass' label='Ignore Class'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for Playwright to ignore by Class"
let options = {
            ignoreDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>
<TabItem value='IgnoreXPath' label='Ignore XPath'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for Playwright to ignore by XPath"
let options = {
            ignoreDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>

<TabItem value='IgnoreSelector' label='Ignore CSS Selector'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for Playwright to ignore by CSS Selector"
let options = {
            ignoreDOM: {
                cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```
</TabItem>

</Tabs>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='SelectID' label='Select ID' default>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for Playwright to select by" ID."
let options = {
            selectDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>
<TabItem value='SelectClass' label='Select Class'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for Playwright to select by Class"
let options = {
            selectDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>
<TabItem value='SelectXPath' label='Select XPath'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for Playwright to select by XPath"
let options = {
            selectDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>

<TabItem value='SelectSelector' label='Select CSS Selector'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your webhook configuration for Playwright to select by CSS Selector"
let options = {
            selectDOM: {
                cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```
</TabItem>

</Tabs>

</TabItem>

<TabItem value='java' label='Java'>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='IgnoreID' label='Ignore ID' default>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Java to ignore by ID"
List<String> cssID = Arrays.asList("<required ID>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> ignore = new HashMap<>();
ignore.put("id", cssID);
options.put("ignoreDOM", ignore);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>
<TabItem value='IgoreClass' label='Ignore Class'>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Java to ignore by Class"
List<String> cssclass = Arrays.asList("<required class>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> ignore = new HashMap<>();
ignore.put("class", cssclass);
options.put("ignoreDOM", ignore);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>
<TabItem value='IgnoreXPath' label='Ignore XPath'>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Java to ignore by XPath"
List<String> path = Arrays.asList("<required xpath>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> ignore = new HashMap<>();
ignore.put("xpath", path);
options.put("ignoreDOM", ignore);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>

<TabItem value='IgnoreSelector' label='Ignore CSS Selector'>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Java to ignore by CSS Selector"
List<String> selector = Arrays.asList("<required selector>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> ignore = new HashMap<>();
ignore.put("cssSelector", selector);
options.put("ignoreDOM", ignore);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```
</TabItem>

</Tabs>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='SelectID' label='Select ID' default>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Java to select by" ID."
List<String> cssID = Arrays.asList("<required ID>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> select = new HashMap<>();
select.put("id", cssID);
options.put("selectDOM", select);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>
<TabItem value='SelectClass' label='Select Class'>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Java to select by Class"
List<String> cssclass = Arrays.asList("<required class>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> select = new HashMap<>();
select.put("class", cssclass);
options.put("selectDOM", select);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>
<TabItem value='SelectXPath' label='Select XPath'>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Java to select by XPath"
List<String> path = Arrays.asList("<required xpath>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> select = new HashMap<>();
select.put("xpath", path);
options.put("selectDOM", select);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>

<TabItem value='SelectSelector' label='Select CSS Selector'>

<VerifiedTag value="Verified" />

```java title="This is a sample for your webhook configuration for Java to select by CSS Selector"
List<String> selector = Arrays.asList("<required selector>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> select = new HashMap<>();
select.put("cssSelector", selector);
options.put("selectDOM", select);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```
</TabItem>

</Tabs>

</TabItem>

<TabItem value='python' label='Python'>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='IgnoreID' label='Ignore ID' default>

<VerifiedTag value="Verified" />

```python title="This is a sample for your configuration for Python to ignore by ID"
options = {
            "ignoreDOM": {
                "id": ["ID-1", "ID-2"],
            }
        }
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

</TabItem>
<TabItem value='IgoreClass' label='Ignore Class'>

<VerifiedTag value="Verified" />

```python title="This is a sample for your configuration for Python to ignore by Class"
options = {
    "ignoreDOM": {
        "class": ["Class-1", "Class-2"],
    }
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

</TabItem>
<TabItem value='IgnoreXPath' label='Ignore XPath'>

<VerifiedTag value="Verified" />

```python title="This is a sample for your configuration for Python to ignore by XPath"
options = {
            "ignoreDOM": {
                "xpath": ["Xpath-1", "Xpath-2"],
            }
        }
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

</TabItem>

<TabItem value='IgnoreSelector' label='Ignore CSS Selector'>

<VerifiedTag value="Verified" />

```python title="This is a sample for your configuration for Python to ignore by CSS Selector"
options = {
            "ignoreDOM": {
                "cssSelector": ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```
</TabItem>

</Tabs>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='SelectID' label='Select ID' default>

<VerifiedTag value="Verified" />

```python title="This is a sample for your configuration for Python to select by ID."
options = {
            "selectDOM": {
                "id": ["ID-1", "ID-2"],
            }
        }
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

</TabItem>
<TabItem value='SelectClass' label='Select Class'>

<VerifiedTag value="Verified" />

```python title="This is a sample for your configuration for Python to select by Class"
options = {
    "selectDOM": {
        "class": ["Class-1", "Class-2"],
    }
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

</TabItem>
<TabItem value='SelectXPath' label='Select XPath'>

<VerifiedTag value="Verified" />

```python title="This is a sample for your configuration for Python to select by XPath"
options = {
            "selectDOM": {
                "xpath": ["Xpath-1", "Xpath-2"],
            }
        }
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

</TabItem>

<TabItem value='SelectSelector' label='Select CSS Selector'>

<VerifiedTag value="Verified" />

```python title="This is a sample for your webhook configuration for Python to select by CSS Selector"
options = {
            "selectDOM": {
                "cssSelector": ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```
</TabItem>

</Tabs>

</TabItem>

</Tabs>

## For capturing the screenshot of a specific element

You can capture screenshots of targeted elements by leveraging various locator mechanisms such as XPath, CSS ID, class, and selectors. This precision-driven approach ensures accurate and specific visual regression testing for your web application's components.

<Tabs className='docs__val' groupId='language'>

<TabItem value='javascript' label='JavaScript' default>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='ElementID' label='Capture Element by ID' default>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for Playwright to capture an element by" ID."
let options = {
      element: {
          id: 'Required ID',
      }
  };
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>
<TabItem value='ElementClass' label='Capture Element by Class'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for Playwright to capture an element by Class"
let options = {
      element: {
          class: 'Required Class',
      }
  };
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>
<TabItem value='ElementXPath' label='Capture Element by XPath'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for Playwright to capture an element by XPath"
let options = {
      element: {
          xpath: 'Required Xpath',
      }
  };
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>

<TabItem value='ElementSelector' label='Capture Element by Selector'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your webhook configuration for Playwright to capture an element by CSS Selector"
let options = {
      element: {
          cssSelector: 'Required CSS Selector',
      }
  };
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```
</TabItem>

</Tabs>

</TabItem>

<TabItem value='java' label='Java'>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='ElementID' label='Capture Element by ID' default>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Javas to capture an element by" ID."
HashMap<String, Object> options = new HashMap<>();
HashMap<String, String> locator = new HashMap<>();
options.put("element", locator);
locator.put("id", "Required ID");
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>
<TabItem value='ElementClass' label='Capture Element by Class'>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Java to capture an element by Class"
HashMap<String, Object> options = new HashMap<>();
HashMap<String, String> locator = new HashMap<>();
options.put("element", locator);
locator.put("class", "Required Class");
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>
<TabItem value='ElementXPath' label='Capture Element by XPath'>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Java to capture an element by XPath"
HashMap<String, Object> options = new HashMap<>();
HashMap<String, String> locator = new HashMap<>();
options.put("element", locator);
locator.put("xpath", "Required Xpath");
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>

<TabItem value='ElementSelector' label='Capture Element by Selector'>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Java to capture an element by CSS Selector"
HashMap<String, Object> options = new HashMap<>();
HashMap<String, String> locator = new HashMap<>();
options.put("element", locator);
locator.put("cssSelector", "Required Selector");
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```
</TabItem>

</Tabs>

</TabItem>

<TabItem value='python' label='Python'>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='ElementID' label='Capture Element by ID' default>

<VerifiedTag value="Verified" />

```python title="This is a sample for your configuration for Python to capture an element by ID."
options = {
      "element": {
          "id": "Required ID",
      }
  }
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

</TabItem>
<TabItem value='ElementClass' label='Capture Element by Class'>

<VerifiedTag value="Verified" />

```python title="This is a sample for your configuration for Python to capture an element by Class"
options = {
    "element": {
        "class": "Required Class",
    }
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

</TabItem>
<TabItem value='ElementXPath' label='Capture Element by XPath'>

<VerifiedTag value="Verified" />

```python title="This is a sample for your configuration for Python to capture an element by XPath"
options = {
      "element": {
          "xpath": "Required Xpath",
      }
  }
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

</TabItem>

<TabItem value='ElementSelector' label='Capture Element by Selector'>

<VerifiedTag value="Verified" />

```python title="This is a sample for your webhook configuration for Python to capture an element by CSS Selector"
options = {
      "element": {
          "cssSelector": "Required CSS Selector",
      }
  }
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```
</TabItem>

</Tabs>

</TabItem>

</Tabs>

## For capturing interactive lazy loading elements

If you encounter difficulties loading interactive elements that appear on scroll in full-page screenshots, consider functionally incorporating a full-page scroll into your script before capturing the screenshot. This approach ensures the elements load first, facilitating the screenshot processing.

<Tabs className='docs__val' groupId='language'>

<TabItem value='javascript' label='JavaScript' default>

<VerifiedTag value="Verified" />

```js Example for scrolling to bottom for lazy elements
const { chromium } = require('playwright');
const smartuiSnapshot = require('@lambdatest/playwright-driver');

(async () => {
  const browser = await chromium.launch({ headless: false }); // Set headless: false to see the browser UI
  const page = await browser.newPage();

  try {
    await page.goto('Required URL');

    // Function to scroll to the bottom of the page
    async function quickScrollToBottom(lastPageWait) {
      await page.evaluate(async (lastPageWait) => {
        const scrollToBottom = async (lastPageWait) => {
          const getScrollHeight = () => document.body.scrollHeight;
          let lastHeight = await getScrollHeight();
          let currentHeight = 0;

          while (currentHeight < lastHeight) {
            window.scrollTo(0, lastHeight);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for page to load
            currentHeight = lastHeight;
            lastHeight = await getScrollHeight();
          }

          if (lastPageWait) {
            await new Promise(resolve => setTimeout(resolve, lastPageWait)); // Additional wait at the bottom
          }

          // Scroll back to the top after reaching the bottom
          window.scrollTo(0, 0);
          await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for scroll to top
        };

        await scrollToBottom(lastPageWait);
      }, lastPageWait);
    }

    await quickScrollToBottom(100); // Adjust wait time as needed
    await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name");

  } finally {
    await browser.close();
  }
})();
```

</TabItem>

<TabItem value='java' label='Java'>

<VerifiedTag value="Verified" />

```java Example for scrolling to bottom for lazy elements
//Rest of your code here

@Test
public void basicTest() throws Exception {
    System.out.println("Loading Url");
    driver.get("Required URL");
    quickScrollToBottom();

    SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name");
    Thread.sleep(5000); // wait for 5 seconds
    System.out.println("Test Finished");
}

public void quickScrollToBottom() throws InterruptedException {
    long lastHeight = ((Number) ((JavascriptExecutor) driver).executeScript("return document.body.scrollHeight")).longValue();
    while (true) {
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight);");
        Thread.sleep(2000);

        long newHeight = ((Number) ((JavascriptExecutor) driver).executeScript("return document.body.scrollHeight")).longValue();
        if (newHeight == lastHeight) {
            break;
        }
        lastHeight = newHeight;
    }
    ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, 0);");
    Thread.sleep(1000); // wait for 1 second
}

@AfterMethod
public void tearDown() {
    if (driver != null) {
        driver.quit();
    }
}
}
```

</TabItem>

</Tabs>

## Best Practices

<Tabs className='docs__val' groupId='language'>

<TabItem value='javascript' label='JavaScript' default>

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='screenshot-naming' label='Screenshot Naming' default>

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**

<VerifiedTag value="Verified" />

```javascript
await smartuiSnapshot.smartuiSnapshot(page, "HomePage-Header");
await smartuiSnapshot.smartuiSnapshot(page, "ProductPage-MainContent");
```

</TabItem>

<TabItem value='page-load' label='Wait for Page Load'>

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Playwright's built-in wait methods for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**

<VerifiedTag value="Verified" />

```javascript
await page.goto('https://example.com');
await page.waitForSelector('#main-content', { state: 'visible' });
await smartuiSnapshot.smartuiSnapshot(page, "Page Loaded");
```

</TabItem>

<TabItem value='dynamic-content' label='Handle Dynamic Content'>

**Handle Dynamic Content**

- Use `ignoreDOM` for elements that change between runs
- Use `selectDOM` when you only need to compare specific areas
- Document why elements are ignored for future reference

</TabItem>

<TabItem value='configuration' label='Configuration Management'>

**Configuration Management**

- Keep `.smartui.json` in version control
- Use environment variables for sensitive data
- Document custom configuration choices

</TabItem>

<TabItem value='test-organization' label='Test Organization'>

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests in consistent environments

</TabItem>
</Tabs>

</TabItem>

<TabItem value='java' label='Java'>

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='screenshot-naming' label='Screenshot Naming' default>

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**

<VerifiedTag value="Verified" />

```java
SmartUISnapshot.smartuiSnapshot(driver, "HomePage-Header");
SmartUISnapshot.smartuiSnapshot(driver, "ProductPage-MainContent");
```

</TabItem>
<TabItem value='wait-for-page-load' label='Wait for Page Load'>

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Playwright's built-in wait methods for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**

<VerifiedTag value="Verified" />

```java
page.navigate("https://example.com");
page.waitForSelector("#main-content", new Page.WaitForSelectorOptions().setState(WaitForSelectorState.VISIBLE));
SmartUISnapshot.smartuiSnapshot(driver, "Page Loaded");
```

</TabItem>
<TabItem value='handle-dynamic-content' label='Handle Dynamic Content'>

**Handle Dynamic Content**

- Use `ignoreDOM` for elements that change between runs
- Use `selectDOM` when you only need to compare specific areas
- Document why elements are ignored for future reference

</TabItem>
<TabItem value='configuration-management' label='Configuration Management'>

**Configuration Management**

- Keep `.smartui.json` in version control
- Use environment variables for sensitive data
- Document custom configuration choices

</TabItem>
<TabItem value='test-organization' label='Test Organization'>

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests in consistent environments

</TabItem>
</Tabs>

</TabItem>

<TabItem value='python' label='Python'>

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='screenshot-naming' label='Screenshot Naming' default>

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**

<VerifiedTag value="Verified" />

```python
smartui_snapshot(page, "HomePage-Header")
smartui_snapshot(page, "ProductPage-MainContent")
```

</TabItem>
<TabItem value='wait-for-page-load' label='Wait for Page Load'>

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Playwright's built-in wait methods for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**

<VerifiedTag value="Verified" />

```python
page.goto("https://example.com")
page.wait_for_selector("#main-content", state="visible")
page.wait_for_load_state("networkidle")
smartui_snapshot(page, "Page Loaded")
```

</TabItem>
<TabItem value='handle-dynamic-content' label='Handle Dynamic Content'>

**Handle Dynamic Content**

- Use `ignoreDOM` for elements that change between runs
- Use `selectDOM` when you only need to compare specific areas
- Document why elements are ignored for future reference

</TabItem>
<TabItem value='configuration-management' label='Configuration Management'>

**Configuration Management**

- Keep `.smartui.json` in version control
- Use environment variables for sensitive data
- Document custom configuration choices

</TabItem>
<TabItem value='test-organization' label='Test Organization'>

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests in consistent environments

</TabItem>
</Tabs>

</TabItem>

</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='language'>

<TabItem value='javascript' label='JavaScript' default>

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='screenshots-not-appearing-in-dashboard' label='Screenshots Not Appearing in Dashboard' default>

**Issue: Screenshots Not Appearing in Dashboard**

**Symptoms**: Tests run successfully but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect
- Project name mismatch
- Network connectivity issues
- CLI not installed or outdated

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:

   <VerifiedTag value="Verified" />

   ```bash
   echo $PROJECT_TOKEN
   ```

2. Check project name matches exactly (case-sensitive)

3. Verify SmartUI CLI is installed:

   <VerifiedTag value="Verified" />

   ```bash
   npx smartui --version
   ```

4. Check network connectivity to <BrandName /> servers

5. Review test execution logs for error messages

</TabItem>
<TabItem value='project-not-found-error' label='Project Not Found Error'>

**Issue: Project Not Found" Error**

**Symptoms**: Error message indicating project cannot be found

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check for extra spaces or quotes in token

</TabItem>
<TabItem value='screenshots-show-blank-or-incorrect-content' label='Screenshots Show Blank or Incorrect Content'>

**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**: Screenshots captured but show blank pages or incorrect content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues

**Solutions**:
1. Add explicit waits before screenshots:

   <VerifiedTag value="Verified" />

   ```javascript
   await page.waitForSelector('#content', { state: 'visible' });
   await page.waitForLoadState('networkidle');
   ```

2. Enable JavaScript in configuration:

   <VerifiedTag value="Verified" />

   ```json
   {
     "enableJavaScript": true
   }
   ```

3. Increase `waitForTimeout` in configuration

4. Verify viewport size matches expected dimensions

</TabItem>
<TabItem value='build-execution-fails' label='Build Execution Fails'>

**Issue: Build Execution Fails**

**Symptoms**: `npx smartui exec` command fails

**Possible Causes**:
- Missing or incorrect configuration file
- Invalid JSON in configuration
- Port conflicts
- Permission issues

**Solutions**:
1. Verify `.smartui.json` exists and is valid JSON
2. Check configuration file syntax
3. Try different port if default is in use:

   <VerifiedTag value="Verified" />

   ```bash
   npx smartui exec -P 5000 -- <command">
   ```
4. Check file permissions for configuration and project files

</TabItem>
<TabItem value='npm-dependencies-not-resolving' label='npm Dependencies Not Resolving'>

**Issue: npm Dependencies Not Resolving**

**Symptoms**: npm cannot find `@lambdatest/playwright-driver` or `@lambdatest/smartui-cli`

**Possible Causes**:
- Incorrect package version
- npm registry access issues
- Network connectivity problems

**Solutions**:
1. Check latest versions on npm:

   <VerifiedTag value="Verified" />

   ```bash
   npm view @lambdatest/playwright-driver version
   npm view @lambdatest/smartui-cli version
   ```

2. Clear npm cache:

   <VerifiedTag value="Verified" />

   ```bash
   npm cache clean --force
   ```

3. Verify internet connectivity for npm registry access

4. Check package.json for version conflicts

</TabItem>
<TabItem value='screenshot-names-not-matching-baseline' label='Screenshot Names Not Matching Baseline'>

**Issue: Screenshot Names Not Matching Baseline**

**Symptoms**: Screenshots appear as New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

**Getting Help**

If you encounter issues not covered here:

- Review the [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- Check [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [<BrandName /> Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

</TabItem>
</Tabs>

</TabItem>

<TabItem value='java' label='Java'>

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='screenshots-not-appearing-in-dashboard' label='Screenshots Not Appearing in Dashboard' default>

**Issue: Screenshots Not Appearing in Dashboard**

**Symptoms**: Tests run successfully but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect
- Project name mismatch
- Network connectivity issues
- CLI not installed or outdated

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:

   <VerifiedTag value="Verified" />

   ```bash
   echo $PROJECT_TOKEN
   ```

2. Check project name matches exactly (case-sensitive)

3. Verify SmartUI CLI is installed:

   <VerifiedTag value="Verified" />

   ```bash
   npx smartui --version
   ```

4. Check network connectivity to <BrandName /> servers

5. Review test execution logs for error messages

</TabItem>
<TabItem value='project-not-found-error' label='Project Not Found Error'>

**Issue: Project Not Found" Error**

**Symptoms**: Error message indicating project cannot be found

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check for extra spaces or quotes in token

</TabItem>
<TabItem value='screenshots-show-blank-or-incorrect-content' label='Screenshots Show Blank or Incorrect Content'>

**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**: Screenshots captured but show blank pages or incorrect content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues

**Solutions**:
1. Add explicit waits before screenshots:

   <VerifiedTag value="Verified" />

   ```java
   page.waitForSelector(#content", new Page.WaitForSelectorOptions().setState(WaitForSelectorState.VISIBLE));
   page.waitForLoadState(LoadState.NETWORKIDLE);
   ```

2. Enable JavaScript in configuration:

   <VerifiedTag value="Verified" />

   ```json
   {
     "enableJavaScript": true
   }
   ```

3. Increase `waitForTimeout` in configuration

4. Verify viewport size matches expected dimensions

</TabItem>
<TabItem value='build-execution-fails' label='Build Execution Fails'>

**Issue: Build Execution Fails**

**Symptoms**: `npx smartui exec` command fails

**Possible Causes**:
- Missing or incorrect configuration file
- Invalid JSON in configuration
- Port conflicts
- Permission issues

**Solutions**:
1. Verify `.smartui.json` exists and is valid JSON
2. Check configuration file syntax
3. Try different port if default is in use:

   <VerifiedTag value="Verified" />

   ```bash
   npx smartui exec -P 5000 -- <command">
   ```
4. Check file permissions for configuration and project files

</TabItem>
<TabItem value='maven-dependencies-not-resolving' label='Maven Dependencies Not Resolving'>

**Issue: Maven Dependencies Not Resolving**

**Symptoms**: Maven cannot find `lambdatest-java-sdk` or dependencies fail

**Possible Causes**:
- Incorrect dependency version
- Maven repository access issues
- Network connectivity problems

**Solutions**:
1. Check latest version on [Maven Central](https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-java-sdk)
2. Clear Maven cache:

   <VerifiedTag value="Verified" />

   ```bash
   mvn clean
   ```
3. Verify internet connectivity for Maven repository access
4. Check pom.xml for version conflicts

</TabItem>
<TabItem value='screenshot-names-not-matching-baseline' label='Screenshot Names Not Matching Baseline'>

**Issue: Screenshot Names Not Matching Baseline**

**Symptoms**: Screenshots appear as New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

**Getting Help**

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [<BrandName /> Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

</TabItem>
</Tabs>

</TabItem>

<TabItem value='python' label='Python'>

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='screenshots-not-appearing-in-dashboard' label='Screenshots Not Appearing in Dashboard' default>

**Issue: Screenshots Not Appearing in Dashboard**

**Symptoms**: Tests run successfully but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect
- Project name mismatch
- Network connectivity issues
- CLI not installed or outdated

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:

   <VerifiedTag value="Verified" />

   ```bash
   echo $PROJECT_TOKEN
   ```

2. Check project name matches exactly (case-sensitive)

3. Verify SmartUI CLI is installed:

   <VerifiedTag value="Verified" />

   ```bash
   npx smartui --version
   ```

4. Check network connectivity to <BrandName /> servers

5. Review test execution logs for error messages

</TabItem>
<TabItem value='project-not-found-error' label='Project Not Found Error'>

**Issue: "Project Not Found" Error**

**Symptoms**: Error message indicating project cannot be found

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check for extra spaces or quotes in token

</TabItem>
<TabItem value='screenshots-show-blank-or-incorrect-content' label='Screenshots Show Blank or Incorrect Content'>

**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**: Screenshots captured but show blank pages or incorrect content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues

**Solutions**:
1. Add explicit waits before screenshots:

   <VerifiedTag value="Verified" />

   ```python
   page.wait_for_selector("#content", state="visible")
   page.wait_for_selector(".main-content", state="visible")
   page.wait_for_load_state("networkidle")
   ```

2. Enable JavaScript in configuration:

   <VerifiedTag value="Verified" />

   ```json
   {
     "enableJavaScript": true
   }
   ```

3. Increase `waitForTimeout` in configuration

4. Verify viewport size matches expected dimensions

</TabItem>
<TabItem value='build-execution-fails' label='Build Execution Fails'>

**Issue: Build Execution Fails**

**Symptoms**: `npx smartui exec` command fails

**Possible Causes**:
- Missing or incorrect configuration file
- Invalid JSON in configuration
- Port conflicts
- Permission issues

**Solutions**:
1. Verify `.smartui.json` exists and is valid JSON
2. Check configuration file syntax
3. Try different port if default is in use:

   <VerifiedTag value="Verified" />

   ```bash
   npx smartui exec -P 5000 -- <command>
   ```
4. Check file permissions for configuration and project files

</TabItem>
<TabItem value='pip-dependencies-not-resolving' label='pip Dependencies Not Resolving'>

**Issue: pip Dependencies Not Resolving**

**Symptoms**: pip cannot find `lambdatest-playwright-driver` or package installation fails

**Possible Causes**:
- Incorrect package version
- pip registry access issues
- Network connectivity problems
- Python version mismatch

**Solutions**:
1. Check latest version:

   <VerifiedTag value="Verified" />

   ```bash
   pip index versions lambdatest-playwright-driver
   ```

2. Clear pip cache:

   <VerifiedTag value="Verified" />

   ```bash
   pip cache purge
   ```

3. Verify internet connectivity for PyPI access

4. Check Python version compatibility:

   <VerifiedTag value="Verified" />

   ```bash
   python --version
   ```

5. Use virtual environment:

   <VerifiedTag value="Verified" />

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install lambdatest-playwright-driver
   ```

</TabItem>
<TabItem value='screenshot-names-not-matching-baseline' label='Screenshot Names Not Matching Baseline'>

**Issue: Screenshot Names Not Matching Baseline**

**Symptoms**: Screenshots appear as "New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

**Getting Help**

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [<BrandName /> Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

</TabItem>
</Tabs>

</TabItem>

</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.testmuai.com/support/api-doc/)
