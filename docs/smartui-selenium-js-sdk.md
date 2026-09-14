---
id: smartui-selenium-js-sdk
title: SmartUI Selenium SDK
sidebar_label: Selenium
description: Learn how to integrate your Selenium automated tests in JavaScript, Java, C#, Python, and Ruby with TestMu AI's SmartUI for visual regression testing.
hide_title: true
toc_max_heading_level: 2
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

url: https://www.testmuai.com/support/docs/smartui-selenium-js-sdk/
slug: smartui-selenium-js-sdk/
canonical: https://www.testmuai.com/support/docs/smartui-selenium-js-sdk/

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
          "item": `${BRAND_URL}/support/docs/smartui-selenium-js-sdk/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-selenium-js-sdk/"
    },
    "headline": "Integrate SmartUI SDK with Selenium-JavaScript",
    "description": "In this documentation, learn how integrate your Selenium JavaScript automated tests with TestMu AI's SmartUI.",
    "url": "https://www.testmuai.com/support/docs/smartui-selenium-js-sdk/",
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
    "dependencies": "Basic understanding of Command Line Interface and Selenium is required.; Login to TestMu AI SmartUI with your credentials..",
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
        "codeRepository": "https://github.com/LambdaTest/smartui-node-sample",
        "text": "git clone https://github.com/LambdaTest/smartui-node-sample\ncd smartui-node-sample/sdk"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Install the Dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install @lambdatest/smartui-cli @lambdatest/selenium-driver selenium-webdriver"
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
        "text": ":::info Advanced options in SmartUI configuration\n- For capturing fullpage or viewport screenshots, please refer to this [documentation](/docs/smartui-sdk-config-options/#12-viewports)\n- For the list of available mobile viewports, please refer to this [documentation](/docs/smartui-sdk-config-options/#list-of-supported-device-viewports)\n- For more information about SmartUI config global options, please refer to this [documentation](/docs/smartui-sdk-config-options/#3-global-options-optional).\n:::\n\n### **Step 5:** Adding SmartUI function to take screenshot\n\n- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:\n\n```js\nconst { Builder, By, Key, until } = require('selenium-webdriver');\nconst { smartuiSnapshot } = require('@lambdatest/selenium-driver');\n\n(async function example() {\n  let driver = await new Builder().forBrowser(\"chrome\").build();\n\n  try {\n    await driver.get(\"https://www.lambdatest.com\");\n    await smartuiSnapshot(driver, \"LambdaTest\");\n    await driver.get(\"https://www.pinterest.com/pin/112801165652823604/\");\n    await smartuiSnapshot(driver, \"NYC\");\n  } finally {\n    await driver.quit();\n  }\n})();"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute the Tests on SmartUI Cloud",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui exec node sdkCloud.js --config .smartui.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Handling Dynamic Data in SmartUI SDK ****",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='IgoreClass' label='Ignore Class'>\n\n```js title=\"This is a sample for your configuration for JavaScript to ignore by Class\"\nlet options = {\n            ignoreDOM: {\n                class: [\"Class-1\", \"Class-2\"],\n            }\n        }\n        await driver.get('Required URL');\n        await smartuiSnapshot(driver, 'Screenshot Name', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 10",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n\n<TabItem value='IgnoreSelector' label='Ignore CSS Selector'>\n\n```js title=\"This is a sample for your configuration for JavaScript to ignore by CSS Selector\"\nlet options = {\n            ignoreDOM: {\n                cssSelector: [\"CSS-Selector-1\", \"CSS-Selector-2\"],\n            }\n        }\n        await driver.get('Required URL');\n        await smartuiSnapshot(driver, 'Screenshot Name', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 11",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='SelectClass' label='Select Class'>\n\n```js title=\"This is a sample for your configuration for JavaScript to select by Class\"\nlet options = {\n            selectDOM: {\n                class: [\"Class-1\", \"Class-2\"],\n            }\n        }\n        await driver.get('Required URL');\n        await smartuiSnapshot(driver, 'Screenshot Name', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 12",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n\n<TabItem value='SelectSelector' label='Select CSS Selector'>\n\n```js title=\"This is a sample for your webhook configuration for JavaScript to select by CSS Selector\"\nlet options = {\n            selectDOM: {\n                cssSelector: [\"CSS-Selector-1\", \"CSS-Selector-2\"],\n            }\n        }\n        await driver.get('Required URL');\n        await smartuiSnapshot(driver, 'Screenshot Name', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For capturing the screenshot of a specific element",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='ElementClass' label='Capture Element by Class'>\n\n```js title=\"This is a sample for your configuration for JavaScript to capture an element by Class\"\nlet options = {\n      element: {\n          class: 'Required Class',\n      }\n  };\n        await driver.get('Required URL');\n        await smartuiSnapshot(driver, 'Screenshot Name', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 14",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n\n<TabItem value='ElementSelector' label='Capture Element by Selector'>\n\n```js title=\"This is a sample for your webhook configuration for JavaScript to capture an element by CSS Selector\"\nlet options = {\n      element: {\n          cssSelector: 'Required CSS Selector',\n      }\n  };\n        await driver.get('Required URL');\n        await smartuiSnapshot(driver, 'Screenshot Name', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 15",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n## Best Practices\n\n<Tabs className='docs__val' groupId='best-practices'>\n<TabItem value='screenshot-naming' label='Screenshot Naming' default>\n\n**Screenshot Naming**\n\n- Use descriptive, consistent names for screenshots\n- Include page/component name in screenshot names\n- Avoid special characters that might cause issues\n- Use consistent naming conventions across your test suite\n\n**Example:**\n```javascript\nawait smartuiSnapshot(driver, \"HomePage-Header\");\nawait smartuiSnapshot(driver, \"ProductPage-MainContent\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Best Practices",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { until, By } = require('selenium-webdriver');\nawait driver.get('https://example.com');\nawait driver.wait(until.elementLocated(By.id('main-content')), 10000);\nawait smartuiSnapshot(driver, \"Page Loaded\");"
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
        "text": "   const { until, By } = require('selenium-webdriver');\n   await driver.wait(until.elementLocated(By.id('content')), 10000);\n   await driver.wait(until.elementIsVisible(By.css('.main-content')), 10000);"
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
        "text": "   npm view @lambdatest/selenium-driver version\n   npm view @lambdatest/smartui-cli version"
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
          "text": "You can clone the sample repository to run LambdaTest automation tests with SmartUI and use the sdk.js file present in the sdk folder.",
          "url": "https://www.testmuai.com/support/docs/smartui-selenium-js-sdk/#step-1-createupdate-your-test"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Install the Dependencies",
          "text": "Install required NPM modules for TestMu AI SmartUI Selenium SDK in your Frontend project. If you face any problems executing tests with SmartUI-CLI versions >= v4.x.x, upgrade your Node.js version to v20.3 or above.",
          "url": "https://www.testmuai.com/support/docs/smartui-selenium-js-sdk/#step-2-install-the-dependencies"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure your Project Token",
          "text": "Setup your project token shown in the SmartUI app after creating your project.",
          "url": "https://www.testmuai.com/support/docs/smartui-selenium-js-sdk/#step-3-configure-your-project-token"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Create and Configure SmartUI Config",
          "text": "You can now configure your project configurations on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command: Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file: For capturing fullpage or viewport screenshots, please refer to this documentation For the list of available mobile viewports, please refer to this documentation For more information about SmartUI config global options, please refer to this documentation.",
          "url": "https://www.testmuai.com/support/docs/smartui-selenium-js-sdk/#step-4-create-and-configure-smartui-config"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Adding SmartUI function to take screenshot",
          "text": "You can incorporate SmartUI into your custom Selenium automation test (any platform) script by adding the smartuiSnapshot function in the required segment of selenium script of which we would like to take the screenshot, as shown below:",
          "url": "https://www.testmuai.com/support/docs/smartui-selenium-js-sdk/#step-5-adding-smartui-function-to-take-screenshot"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Execute the Tests on SmartUI Cloud",
          "text": "Execute visual regression tests on SmartUI using the following commands You may use the npx smartui --help command in case you are facing issues during the execution of SmartUI commands in the CLI.",
          "url": "https://www.testmuai.com/support/docs/smartui-selenium-js-sdk/#step-6-execute-the-tests-on-smartui-cloud"
        }
      ]
    }
  ]) }}
/>



# SmartUI Selenium SDK

---

The SmartUI Selenium SDK is a visual regression testing tool that integrates into your existing Selenium suite to capture, compare, and analyze screenshots across a multitude of browsers and resolutions. It is available for JavaScript, Java, C#, Python, and Ruby, letting you add visual coverage to your automation scripts with a single snapshot function.

## Prerequisites

- Basic understanding of Command Line Interface and Selenium is required.
- Login to [<BrandName /> SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on <BrandName /> platform using SmartUI Selenium SDK integration.

## Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> for executing your `SDK` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Configure your Project Token

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

## Create and Configure SmartUI Config

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

## Steps to run your first test

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Select your language below and follow the steps to set up dependencies, add the snapshot function, and execute your tests on SmartUI Cloud.

<Tabs className='docs__val' groupId='language'>
<TabItem value='javascript' label='JavaScript' default>

### Step 1: Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `sdk.js` file present in the `sdk` folder.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/smartui-node-sample
cd smartui-node-sample/sdk
```

### Step 2: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Selenium SDK` in your **Frontend** project.

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/smartui-cli @lambdatest/selenium-driver selenium-webdriver
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

### Step 3: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:

<VerifiedTag value="Verified" />

```js
const { Builder, By, Key, until } = require('selenium-webdriver');
const { smartuiSnapshot } = require('@lambdatest/selenium-driver');

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.lambdatest.com");
    await smartuiSnapshot(driver, "LambdaTest");
    await driver.get("https://www.pinterest.com/pin/112801165652823604/");
    await smartuiSnapshot(driver, "NYC");
  } finally {
    await driver.quit();
  }
})();
```

### Step 4: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

<VerifiedTag value="Verified" />

```bash
npx smartui exec node sdkCloud.js --config .smartui.json
```

:::note
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

</TabItem>
<TabItem value='java' label='Java'>

### Step 1: Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use `SmartUISDKCloud.java` file located in the `src/test/java/com/lambdatest/sdk` directory.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/smartui-java-testng-sample
```

### Step 2: Update the Dependencies

- Add the following dependencies in your `pom.xml` file

<VerifiedTag value="Verified" />

```xml
<dependency>
    <groupId>io.github.lambdatest</groupId>
    <artifactId>lambdatest-java-sdk</artifactId>
    <version>1.0.23</version>
</dependency>
```

:::note
You can check the latest version of [lambdatest-java-sdk]( https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-java-sdk) and update the latest version accordingly.
:::

### Step 3: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Selenium SDK` in your **Frontend** project.

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/smartui-cli
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

<VerifiedTag value="Verified" />

```bash
mvn clean compile
```

### Step 4: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:

<VerifiedTag value="Verified" />

```java
 //Importing the lambdatest-java SDK

//Rest of your code here

@Test
    public void basicTest() throws Exception {
        String spanText;
        System.out.println("Loading URL");

        driver.get("<Required URL>");

        SmartUISnapshot.smartuiSnapshot(driver, "<Screenshot Name>");

        Thread.sleep(5000);
        Thread.sleep(1000);
        System.out.println("TestFinished");

    }

```

### Step 5: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

<VerifiedTag value="Verified" />

```bash
npx smartui --config .smartui.json exec -- mvn test -D suite="sdk-cloud.xml"
```
:::note
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

</TabItem>
<TabItem value='csharp' label='C#'>

### Step 1: Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use `LTCloudTest.cs` file located in the `LambdaTest.Selenium.Driver.Test` folder.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/smartui-csharp-sample
cd smartui-csharp-sample/LambdaTest.Selenium.Driver.Test
```

### Step 2: Update the Dependencies

- Add the following dependencies in your `.csproj` file

<VerifiedTag value="Verified" />

```cs
<ItemGroup>
    <PackageReference Include="LambdaTest.Selenium.Driver" Version="1.0.4" />
</ItemGroup>
```

:::note
You can check the latest version of [<BrandName />.Selenium.Driver]( https://www.nuget.org/packages/LambdaTest.Selenium.Driver) and update the latest version accordingly.
:::

### Step 3: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Selenium SDK` in your **Frontend** project.

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/smartui-cli
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

<VerifiedTag value="Verified" />

```bash
dotnet restore
```

### Step 4: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:

<VerifiedTag value="Verified" />

```csharp
using System;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using LambdaTest.Selenium.Driver;

namespace LambdaTest.Selenium.TestProject
{
        public static class LocalTest
        {
            using IWebDriver driver = new ChromeDriver();
            try
            {   
                Console.WriteLine("Driver started");
                driver.Navigate().GoToUrl("Required URL");
                await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name"); //utilize this function to take the dom snapshot of your test
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            finally
            {
                driver.Quit();
            }
        }
}
```

#### Additional Functionality: Using `sync` Option in SmartUI C# SDK

You can enable synchronous snapshot status response by setting the `sync` option to `true` in the options dictionary. This allows you to wait for the snapshot status and receive the result directly in your test script.

:::info
- The `sync` functionality is supported only in <BrandName />.Selenium.Driver version **1.0.4 and above**.
:::

**Set the sync value in options:**

     ```csharp
     var optionsForSync = new Dictionary<string, object>
     {
             { "sync", true },
             { "timeout", 100 } // timeout in seconds (30-900, default 600)
     };

     Console.WriteLine("Driver started");
     driver.Navigate().GoToUrl("https://www.testmuai.com");
     var result = await SmartUISnapshot.CaptureSnapshot(driver, "NYC", optionsForSync);
     Console.WriteLine(result);
     ```

**Notes:**
- The default value of `sync` is `false` if not specified.
- The `timeout` option defines how long to wait for the snapshot status response (in seconds). Allowed range: 30-900, default is 600.
- When `sync` is `true`, the `result` variable will hold the value of the snapshot status response.


**Sample response:**

<VerifiedTag value="Verified" />

```json
{
    "snapshotName": "Sync-True",
    "snapshotUUID": "95226130-72b6-4d45-ad6d-4ad8ddsa1",
    "buildId": "8e0c078d-e85a-41ae-a8d5-4a0dsdf8bbd5",
    "snapshotStatus": "failed",
    "startedProcessingAt": "2025-08-26 09:58:21",
    "finishedProcessingAt": "2025-08-26 10:03:12",
    "screenshots": [
        {
            "captured_image": "<URL>",
            "baseline_image": "<URL>",
            "browser_name": "firefox",
            "viewport": "1028",
            "mismatch_percentage": 89.58,
            "status": "Changes found",
            "captured_image_timestamp": "2025-08-26 10:00:40",
            "compared_image_timestamp": "2025-08-26 10:00:58",
            "captured_diff": "<URL>",
            "baseline_diff": "<URL>",
        },
        // ... more screenshots in the same format
    ]
}
```

### Step 5: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

<VerifiedTag value="Verified" />

```bash
npx smartui --config .smartui.json exec -- dotnet run cloud 
```
:::note 
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

</TabItem>
<TabItem value='python' label='Python'>

:::note
Install **virtualenv**, which is the recommended way to run your tests. It will isolate the build from other setups you may have running and ensure that the tests run with the specified versions of the modules.

<VerifiedTag value="Verified" />

```bash
pip install virtualenv
```
:::

### Step 1: Create/Update your test

- You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `SmartUI_SDK_LT_hub.py` file.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/smartui-python-sample
cd smartui-python-sample
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

Install required NPM modules for `TestMu AI SmartUI Selenium SDK` in your **Frontend** project.

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/smartui-cli
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

<VerifiedTag value="Verified" />

```bash
pip install lambdatest-selenium-driver
```

### Step 3: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:

<VerifiedTag value="Verified" />

```python
from lambdatest_selenium_driver import smartui_snapshot
from selenium import webdriver

driver = webdriver.Chrome()
try:
    driver.get('<Required URL>')
    smartui_snapshot(driver,"<Screenshot Name>")
except Exception as err:
    print(err)
finally: 
    driver.close()
```

### Step 4: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

<VerifiedTag value="Verified" />

```bash
npx smartui exec python SmartUI_SDK_LT_hub.py --config .smartui.json
```

:::note 
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

</TabItem>
<TabItem value='ruby' label='Ruby'>

### Step 1: Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `sdkCloud.rb` file present in the `sdk` folder.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/smartui-ruby-selenium-sample
cd smartui-ruby-selenium-sample/sdk
```

### Step 2: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Selenium SDK` in your **Frontend** project.

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/smartui-cli
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

```
gem install lambdatest-selenium-driver selenium-webdriver
```

### Step 3: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:

<VerifiedTag value="Verified" />

```ruby
require "selenium-webdriver"
require "lambdatest/selenium/driver"

driver = Selenium::WebDriver.for :chrome
driver.navigate.to "https://www.pinterest.com/pin/16958936087791895/"

# Take a snapshot
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name")

driver.quit
```

### Step 4: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

<VerifiedTag value="Verified" />

```bash
npx smartui exec ruby sdkCloud.rb --config .smartui.json
```

:::note
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

</TabItem>
</Tabs>

## View SmartUI Results

You have successfully integrated SmartUI SDK with your Selenium tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img' />

## Arguments supported in the `smartUISnapshot` function

The following are the different options which are currently supported:

| Key| Description |
| -- | ----------- |
| `driver` (instance)    | The instance of the web driver used in your tests. |
| `"Screenshot Name"` (string)    | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `options` (object)    | Specify one or a combination of selectors in the `ignoreDOM` or `selectDOM` objects. These selectors can be based on `HTML DOM IDs, CSS classes, CSS selectors, or XPaths` used by your webpage. They define elements that should be excluded from or included in the visual comparison.|

## Handling Dynamic Data in SmartUI SDK  **<NewTag value='New' color='#000' bgColor='#ffec02' />**

When conducting visual tests, you may encounter scenarios where certain elements within your application change between test runs. These changes  might introduce inconsistencies in your test results.You can ignore / select specific element(s) to be removed from the comparison by parsing the options in the `smartuiSnapshot` function in the following way

<Tabs className='docs__val' groupId='language'>
<TabItem value='javascript' label='JavaScript' default>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='IgnoreID' label='Ignore ID' default>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for JavaScript to ignore by ID"
let options = {
            ignoreDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value='IgoreClass' label='Ignore Class'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for JavaScript to ignore by Class"
let options = {
            ignoreDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value='IgnoreXPath' label='Ignore XPath'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for JavaScript to ignore by XPath"
let options = {
            ignoreDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>

<TabItem value='IgnoreSelector' label='Ignore CSS Selector'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for JavaScript to ignore by CSS Selector"
let options = {
            ignoreDOM: {
                cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```
</TabItem>

</Tabs>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='SelectID' label='Select ID' default>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for JavaScript to select by ID"
let options = {
            selectDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value='SelectClass' label='Select Class'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for JavaScript to select by Class"
let options = {
            selectDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value='SelectXPath' label='Select XPath'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for JavaScript to select by XPath"
let options = {
            selectDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>

<TabItem value='SelectSelector' label='Select CSS Selector'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your webhook configuration for JavaScript to select by CSS Selector"
let options = {
            selectDOM: {
                cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
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

```java title="This is a sample for your configuration for Java to select by ID"
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
<TabItem value='csharp' label='C#'>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='IgnoreID' label='Ignore ID' default>

<VerifiedTag value="Verified" />

```cs title="This is a sample for your configuration for C# to ignore by ID"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "ignoreDOM", new Dictionary<string, object>
        {
            { "id", new[] { "ID-1", "ID-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>
<TabItem value='IgoreClass' label='Ignore Class'>

<VerifiedTag value="Verified" />

```cs title="This is a sample for your configuration for C# to ignore by Class"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "ignoreDOM", new Dictionary<string, object>
        {
            { "class", new[] { "class-1", "class-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>
<TabItem value='IgnoreXPath' label='Ignore XPath'>

<VerifiedTag value="Verified" />

```cs title="This is a sample for your configuration for C# to ignore by XPath"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "ignoreDOM", new Dictionary<string, object>
        {
            { "xpath", new[] { "xpath-1", "xpath-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>

<TabItem value='IgnoreSelector' label='Ignore CSS Selector'>

<VerifiedTag value="Verified" />

```cs title="This is a sample for your configuration for C# to ignore by CSS Selector"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "ignoreDOM", new Dictionary<string, object>
        {
            { "cssSelector", new[] { "cssSelector-1", "cssSelector-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```
</TabItem>

</Tabs>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='SelectID' label='Select ID' default>

<VerifiedTag value="Verified" />

```cs title="This is a sample for your configuration for C# to select by ID"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "selectDOM", new Dictionary<string, object>
        {
            { "id", new[] { "ID-1", "ID-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>
<TabItem value='SelectClass' label='Select Class'>

<VerifiedTag value="Verified" />

```cs title="This is a sample for your configuration for C# to select by Class"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "selectDOM", new Dictionary<string, object>
        {
            { "class", new[] { "class-1", "class-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>
<TabItem value='SelectXPath' label='Select XPath'>

<VerifiedTag value="Verified" />

```cs title="This is a sample for your configuration for C# to select by XPath"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "selectDOM", new Dictionary<string, object>
        {
            { "xpath", new[] { "xpath-1", "xpath-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>

<TabItem value='SelectSelector' label='Select CSS Selector'>

<VerifiedTag value="Verified" />

```cs title="This is a sample for your configuration for C# to select by CSS Selector"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "selectDOM", new Dictionary<string, object>
        {
            { "cssSelector", new[] { "cssSelector-1", "cssSelector-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
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
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
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
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
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
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
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
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
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
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
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
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
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
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
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
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```
</TabItem>

</Tabs>

</TabItem>
<TabItem value='ruby' label='Ruby'>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='IgnoreID' label='Ignore ID' default>

<VerifiedTag value="Verified" />

```rb title="This is a sample for your configuration for Ruby to ignore by ID"
options = {
            ignoreDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

</TabItem>
<TabItem value='IgoreClass' label='Ignore Class'>

<VerifiedTag value="Verified" />

```rb title="This is a sample for your configuration for Ruby to ignore by Class"
options = {
            ignoreDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

</TabItem>
<TabItem value='IgnoreXPath' label='Ignore XPath'>

<VerifiedTag value="Verified" />

```rb title="This is a sample for your configuration for Ruby to ignore by XPath"
options = {
            ignoreDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

</TabItem>

<TabItem value='IgnoreSelector' label='Ignore CSS Selector'>

<VerifiedTag value="Verified" />

```rb title="This is a sample for your configuration for Ruby to ignore by CSS Selector"
options = {
            ignoreDOM: {
                cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```
</TabItem>

</Tabs>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='SelectID' label='Select ID' default>

<VerifiedTag value="Verified" />

```rb title="This is a sample for your configuration for Ruby to select by ID"
options = {
            selectDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

</TabItem>
<TabItem value='SelectClass' label='Select Class'>

<VerifiedTag value="Verified" />

```rb title="This is a sample for your configuration for Ruby to select by Class"
options = {
            selectDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

</TabItem>
<TabItem value='SelectXPath' label='Select XPath'>

<VerifiedTag value="Verified" />

```rb title="This is a sample for your configuration for Ruby to select by XPath"
options = {
            selectDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

</TabItem>

<TabItem value='SelectSelector' label='Select CSS Selector'>

<VerifiedTag value="Verified" />

```rb title="This is a sample for your webhook configuration for Ruby to select by CSS Selector"
options = {
            selectDOM: {
                cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
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

```js title="This is a sample for your configuration for JavaScript to capture an element by ID"
let options = {
      element: {
          id: 'Required ID',
      }
  };
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value='ElementClass' label='Capture Element by Class'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for JavaScript to capture an element by Class"
let options = {
      element: {
          class: 'Required Class',
      }
  };
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value='ElementXPath' label='Capture Element by XPath'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your configuration for JavaScript to capture an element by XPath"
let options = {
      element: {
          xpath: 'Required Xpath',
      }
  };
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>

<TabItem value='ElementSelector' label='Capture Element by Selector'>

<VerifiedTag value="Verified" />

```js title="This is a sample for your webhook configuration for JavaScript to capture an element by CSS Selector"
let options = {
      element: {
          cssSelector: 'Required CSS Selector',
      }
  };
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```
</TabItem>

</Tabs>

</TabItem>
<TabItem value='java' label='Java'>

You can also pass a resolved `WebElement` object directly to the `smartuiSnapshot` function. This is especially useful when stable locators (such as IDs or XPaths) are not available, as you can locate the element using any strategy in your test code and pass the reference directly.

<Tabs className='docs__val' groupId='framework'>
<TabItem value='ElementID' label='Capture Element by ID' default>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Java to capture an element by ID"
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

<TabItem value='ElementWebElement' label='Capture Element by WebElement'>

<VerifiedTag value="Verified" />

```java title="This is a sample for your configuration for Java to capture an element by passing a WebElement object."
WebElement element = driver.findElement(By.id("Required ID")); // locate using any strategy
HashMap<String, Object> options = new HashMap<>();
options.put("element", element);
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```
</TabItem>

</Tabs>

</TabItem>
<TabItem value='csharp' label='C#'>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='ElementID' label='Capture Element by ID' default>

<VerifiedTag value="Verified" />

```cs title="This is a sample for your configuration for C# to capture an element by ID"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "element", new Dictionary<string, object>
        {
            { "id", new[] { "Required ID"} }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>
<TabItem value='ElementClass' label='Capture Element by Class'>

<VerifiedTag value="Verified" />

```cs title="This is a sample for your configuration for C# to capture an element by Class"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "element", new Dictionary<string, object>
        {
            { "class", new[] { "Required class" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>
<TabItem value='ElementXPath' label='Capture Element by XPath'>

<VerifiedTag value="Verified" />

```cs title="This is a sample for your configuration for C# to capture an element by XPath"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "element", new Dictionary<string, object>
        {
            { "xpath", new[] { "Required xpath"} }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>

<TabItem value='ElementSelector' label='Element CSS Selector'>

<VerifiedTag value="Verified" />

```cs title="This is a sample for your configuration for C# to capture an element by CSS Selector"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "element", new Dictionary<string, object>
        {
            { "cssSelector", new[] { "Required cssSelector"} }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
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
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
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
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
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
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
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
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```
</TabItem>

</Tabs>

</TabItem>
<TabItem value='ruby' label='Ruby'>

<Tabs className='docs__val' groupId='framework'>
<TabItem value='ElementID' label='Capture Element by ID' default>

<VerifiedTag value="Verified" />

```rb title="This is a sample for your configuration for Ruby to capture an element by ID"
options = {
      element: {
          id: 'Required ID',
      }
  }
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

</TabItem>
<TabItem value='ElementClass' label='Capture Element by Class'>

<VerifiedTag value="Verified" />

```rb title="This is a sample for your configuration for Ruby to capture an element by Class"
options = {
      element: {
          class: 'Required Class',
      }
  }
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

</TabItem>
<TabItem value='ElementXPath' label='Capture Element by XPath'>

<VerifiedTag value="Verified" />

```rb title="This is a sample for your configuration for Ruby to capture an element by XPath"
options = {
      element: {
          xpath: 'Required Xpath',
      }
  }
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

</TabItem>

<TabItem value='ElementSelector' label='Capture Element by Selector'>

<VerifiedTag value="Verified" />

```rb title="This is a sample for your webhook configuration for Ruby to capture an element by CSS Selector"
options = {
      element: {
          cssSelector: 'Required CSS Selector',
      }
  }
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
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
const { Builder, By, Key, until } = require('selenium-webdriver');
const { smartuiSnapshot } = require('@lambdatest/selenium-driver');

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("Required URL");
    async function quickScrollToBottom(lastPageWait) {
      try {
          let height = await driver.executeScript("return document.body.scrollHeight");
          let heightOfPage = parseInt(height, 10);
          let size = 200;
          let noOfLoop = Math.floor(heightOfPage / size);

          for (let i = 1; i <= noOfLoop; i++) {
              await driver.executeScript(`window.scrollTo(${(i - 1) * size}, ${i * size})`);
              await new Promise(resolve => setTimeout(resolve, 1000));
              if (i === noOfLoop) {

                  await driver.executeScript(`window.scrollTo(${i * size}, ${heightOfPage})`);
                  await new Promise(resolve => setTimeout(resolve, lastPageWait));
              }
          }

          // Now scroll to the top
          await driver.executeScript("window.scrollTo(0,0)");
          await new Promise(resolve => setTimeout(resolve, 10000));
          console.log("Scroll Completed");
      } catch (e) {
          console.log("Got some errors" + e.toString());
      }
  }
    await quickScrollToBottom(100); //use wait time accordingly
    await smartuiSnapshot(driver, "Screenshot Name");
  } finally {
    await driver.quit();
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
<TabItem value='python' label='Python'>

<VerifiedTag value="Verified" />

```python Example for scrolling to bottom for lazy elements
from selenium import webdriver
from lambdatest_selenium_driver import smartui_snapshot

def quick_scroll_to_bottom(driver, last_page_wait):
    try:
        height = driver.execute_script("return document.body.scrollHeight")
        height_of_page = int(height)
        size = 200
        no_of_loop = height_of_page // size

        for i in range(1, no_of_loop + 1):
            driver.execute_script(f"window.scrollTo({(i - 1) * size}, {i * size})")
            driver.implicitly_wait(1)
            if i == no_of_loop:
                driver.execute_script(f"window.scrollTo({i * size}, {height_of_page})")
                driver.implicitly_wait(last_page_wait / 1000.0)

        # Now scroll to the top
        driver.execute_script("window.scrollTo(0,0)")
        driver.implicitly_wait(10)  # Wait for 10 seconds
        print("Scroll Completed")
    except Exception as e:
        print(f"Got some errors: {e}")

# Example usage
if __name__ == "__main__":
    driver = webdriver.Chrome()  # Initialize the WebDriver instance
    try:
        driver.get("Required URL")  # Change "Required URL" to the actual URL you want to test
        quick_scroll_to_bottom(driver, 100)  # Use wait time accordingly
        smartui_snapshot(driver, "Screenshot Name")
    finally:
        driver.quit()
```

</TabItem>
<TabItem value='ruby' label='Ruby'>

<VerifiedTag value="Verified" />

```rb Example for scrolling to bottom for lazy elements
require 'selenium-webdriver'
require 'lambdatest/selenium/driver'

def quick_scroll_to_bottom(driver, last_page_wait)
  height = driver.execute_script("return document.body.scrollHeight")
  height_of_page = height.to_i
  size = 200
  no_of_loop = height_of_page / size

  (1..no_of_loop).each do |i|
    driver.execute_script("window.scrollTo(#{(i - 1) * size}, #{i * size})")
    sleep 1
    if i == no_of_loop
      driver.execute_script("window.scrollTo(#{i * size}, #{height_of_page})")
      sleep last_page_wait / 1000.0
    end
  end

  # Now scroll to the top
  driver.execute_script("window.scrollTo(0,0)")
  sleep 10 # Wait for 10 seconds
  puts "Scroll Completed"
rescue => e
  puts "Got some errors: #{e}"
end

driver = Selenium::WebDriver.for :chrome
begin
  driver.get("Required URL")
  quick_scroll_to_bottom(driver, 100) # Use wait time accordingly
  LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name")
ensure
  driver.quit
end

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
await smartuiSnapshot(driver, "HomePage-Header");
await smartuiSnapshot(driver, "ProductPage-MainContent");
```

</TabItem>

<TabItem value='page-load' label='Wait for Page Load'>

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Selenium's WebDriverWait for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**

<VerifiedTag value="Verified" />

```javascript
const { until, By } = require('selenium-webdriver');
await driver.get('https://example.com');
await driver.wait(until.elementLocated(By.id('main-content')), 10000);
await smartuiSnapshot(driver, "Page Loaded");
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

<TabItem value='page-load' label='Wait for Page Load'>

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use explicit waits for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**

<VerifiedTag value="Verified" />

```java
driver.get("https://example.com");
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.presenceOfElementLocated(By.id("main-content")));
SmartUISnapshot.smartuiSnapshot(driver, "Page Loaded");
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
<TabItem value='csharp' label='C#'>

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='screenshot-naming' label='Screenshot Naming' default>

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**

<VerifiedTag value="Verified" />

```csharp
await SmartUISnapshot.CaptureSnapshot(driver, "HomePage-Header");
await SmartUISnapshot.CaptureSnapshot(driver, "ProductPage-MainContent");
```

</TabItem>
<TabItem value='wait-for-page-load' label='Wait for Page Load'>

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Selenium's WebDriverWait for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**

<VerifiedTag value="Verified" />

```csharp
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium;

driver.Navigate().GoToUrl("https://example.com");
WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
wait.Until(ExpectedConditions.ElementExists(By.Id("main-content")));
await SmartUISnapshot.CaptureSnapshot(driver, "Page Loaded");
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
smartui_snapshot(driver, "HomePage-Header")
smartui_snapshot(driver, "ProductPage-MainContent")
```

</TabItem>

<TabItem value='page-load' label='Wait for Page Load'>

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Selenium's WebDriverWait for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**

<VerifiedTag value="Verified" />

```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

driver.get('https://example.com')
wait = WebDriverWait(driver, 10)
wait.until(EC.presence_of_element_located((By.ID, 'main-content')))
smartui_snapshot(driver, "Page Loaded")
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
<TabItem value='ruby' label='Ruby'>

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='screenshot-naming' label='Screenshot Naming' default>

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**

<VerifiedTag value="Verified" />

```ruby
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "HomePage-Header")
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "ProductPage-MainContent")
```

</TabItem>
<TabItem value='wait-for-page-load' label='Wait for Page Load'>

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Selenium's wait methods for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**

<VerifiedTag value="Verified" />

```ruby
require 'selenium-webdriver'

driver.navigate.to 'https://example.com'
wait = Selenium::WebDriver::Wait.new(timeout: 10)
wait.until { driver.find_element(id: 'main-content') }
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Page Loaded")
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
   const { until, By } = require('selenium-webdriver');
   await driver.wait(until.elementLocated(By.id('content')), 10000);
   await driver.wait(until.elementIsVisible(By.css('.main-content')), 10000);
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

**Symptoms**: npm cannot find `@lambdatest/selenium-driver` or `@lambdatest/smartui-cli`

**Possible Causes**:
- Incorrect package version
- npm registry access issues
- Network connectivity problems

**Solutions**:
1. Check latest versions on npm:

   <VerifiedTag value="Verified" />

   ```bash
   npm view @lambdatest/selenium-driver version
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

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
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
   WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
   wait.until(ExpectedConditions.presenceOfElementLocated(By.id("content")));
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
<TabItem value='build-execution-fails' label='Build Execution Fails '>

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

**Symptoms**: Maven cannot find `lambdatest-java-sdk` dependency

**Possible Causes**:
- Incorrect dependency version
- Maven repository access issues
- Network connectivity problems

**Solutions**:
1. Check latest version on [Maven Central](https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-java-sdk)
2. Update `pom.xml` with correct version
3. Clear Maven cache:

   <VerifiedTag value="Verified" />

   ```bash
   mvn clean
   ```
4. Verify internet connectivity for Maven repository access

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
<TabItem value='csharp' label='C#'>

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

   ```powershell
   echo $env:PROJECT_TOKEN
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

   ```csharp
   WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
   wait.Until(ExpectedConditions.ElementExists(By.Id("content")));
   wait.Until(ExpectedConditions.ElementIsVisible(By.CssSelector(".main-content")));
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
<TabItem value='nuget-dependencies-not-resolving' label='NuGet Dependencies Not Resolving'>

**Issue: NuGet Dependencies Not Resolving**

**Symptoms**: NuGet cannot find `LambdaTest.Selenium.Driver` package

**Possible Causes**:
- Incorrect package version
- NuGet registry access issues
- Network connectivity problems

**Solutions**:
1. Check latest version on [NuGet.org](https://www.nuget.org/packages/LambdaTest.Selenium.Driver)
2. Clear NuGet cache:

   <VerifiedTag value="Verified" />

   ```bash
   dotnet nuget locals all --clear
   ```
3. Verify internet connectivity for NuGet registry access
4. Check project file for version conflicts

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
   from selenium.webdriver.support.ui import WebDriverWait
   from selenium.webdriver.support import expected_conditions as EC
   from selenium.webdriver.common.by import By

   wait = WebDriverWait(driver, 10)
   wait.until(EC.presence_of_element_located((By.ID, 'content')))
   wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, '.main-content')))
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

**Symptoms**: pip cannot find `lambdatest-selenium-driver` or package installation fails

**Possible Causes**:
- Incorrect package version
- pip registry access issues
- Network connectivity problems
- Python version mismatch

**Solutions**:
1. Check latest version:

   <VerifiedTag value="Verified" />

   ```bash
   pip index versions lambdatest-selenium-driver
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
   pip install lambdatest-selenium-driver
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
<TabItem value='ruby' label='Ruby'>

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

   ```ruby
   wait = Selenium::WebDriver::Wait.new(timeout: 10)
   wait.until { driver.find_element(id: 'content') }
   wait.until { driver.find_element(css: '.main-content').displayed? }
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
<TabItem value='gem-dependencies-not-resolving' label='Gem Dependencies Not Resolving'>

**Issue: Gem Dependencies Not Resolving**

**Symptoms**: Bundler cannot find `lambdatest-selenium-driver` gem

**Possible Causes**:
- Incorrect gem version
- RubyGems registry access issues
- Network connectivity problems
- Ruby version mismatch

**Solutions**:
1. Check latest version on [RubyGems.org](https://rubygems.org/gems/lambdatest-selenium-driver)
2. Clear gem cache:

   <VerifiedTag value="Verified" />

   ```bash
   gem cleanup
   ```
3. Verify internet connectivity for RubyGems access
4. Check Ruby version compatibility:

   <VerifiedTag value="Verified" />

   ```bash
   ruby --version
   ```
5. Update Gemfile with specific version:

   <VerifiedTag value="Verified" />

   ```ruby
   gem 'lambdatest-selenium-driver', '~> 1.0'
   ```

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
</Tabs>


## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading)
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
      <span className='breadcrumbs__link'> SmartUI Selenium SDK </span>
    </li>
  </ul>
</nav>
