---
id: smartui-selenium-ruby-sdk
title: Integrate SmartUI SDK with Selenium-Ruby
sidebar_label: Ruby
description: In this documentation, learn how integrate your Selenium Ruby automated tests with TestMu AI's SmartUI.
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

url: https://www.testmuai.com/support/docs/smartui-selenium-ruby-sdk/
slug: smartui-selenium-ruby-sdk/
canonical: https://www.testmuai.com/support/docs/smartui-selenium-ruby-sdk/

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
          "item": `${BRAND_URL}/support/docs/smartui-selenium-ruby-sdk/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-selenium-ruby-sdk/"
    },
    "headline": "Integrate SmartUI SDK with Selenium-Ruby",
    "description": "In this documentation, learn how integrate your Selenium Ruby automated tests with TestMu AI's SmartUI.",
    "url": "https://www.testmuai.com/support/docs/smartui-selenium-ruby-sdk/",
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
        "codeRepository": "https://github.com/LambdaTest/smartui-ruby-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/smartui-ruby-selenium-sample\ncd smartui-ruby-selenium-sample/sdk"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Install the Dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install @lambdatest/smartui-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Install the Dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "gem install lambdatest-selenium-driver selenium-webdriver"
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
        "name": "Code sample 8",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": ":::info Advanced options in SmartUI configuration\n- For capturing fullpage or viewport screenshots, please refer to this [documentation](/docs/smartui-sdk-config-options/#12-viewports)\n- For the list of available mobile viewports, please refer to this [documentation](/docs/smartui-sdk-config-options/#list-of-supported-device-viewports)\n- For more information about SmartUI config global options, please refer to this [documentation](/docs/smartui-sdk-config-options/#3-global-options-optional).\n:::\n\n### **Step 5:** Adding SmartUI function to take screenshot\n\n- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:\n\n```ruby\nrequire \"selenium-webdriver\"\nrequire \"lambdatest/selenium/driver\"\n\ndriver = Selenium::WebDriver.for :chrome\ndriver.navigate.to \"https://www.pinterest.com/pin/16958936087791895/\"\n\n# Take a snapshot\nLambdaTest::Selenium::Driver.smartui_snapshot(driver, \"Screenshot Name\")\n\ndriver.quit"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute the Tests on SmartUI Cloud",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui exec ruby sdkCloud.rb --config .smartui.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Handling Dynamic Data in SmartUI SDK ****",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='IgoreClass' label='Ignore Class'>\n\n```rb title=\"This is a sample for your configuration for Ruby to ignore by Class\"\noptions = {\n            ignoreDOM: {\n                class: [\"Class-1\", \"Class-2\"],\n            }\n        }\ndriver.navigate.to 'Required URL'\nLambdaTest::Selenium::Driver.smartui_snapshot(driver, \"Screenshot Name\", options)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 11",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n\n<TabItem value='IgnoreSelector' label='Ignore CSS Selector'>\n\n```rb title=\"This is a sample for your configuration for Ruby to ignore by CSS Selector\"\noptions = {\n            ignoreDOM: {\n                cssSelector: [\"CSS-Selector-1\", \"CSS-Selector-2\"],\n            }\n        }\ndriver.navigate.to 'Required URL'\nLambdaTest::Selenium::Driver.smartui_snapshot(driver, \"Screenshot Name\", options)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 12",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='SelectClass' label='Select Class'>\n\n```rb title=\"This is a sample for your configuration for Ruby to select by Class\"\noptions = {\n            selectDOM: {\n                class: [\"Class-1\", \"Class-2\"],\n            }\n        }\ndriver.navigate.to 'Required URL'\nLambdaTest::Selenium::Driver.smartui_snapshot(driver, \"Screenshot Name\", options)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 13",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n\n<TabItem value='SelectSelector' label='Select CSS Selector'>\n\n```rb title=\"This is a sample for your webhook configuration for Ruby to select by CSS Selector\"\noptions = {\n            selectDOM: {\n                cssSelector: [\"CSS-Selector-1\", \"CSS-Selector-2\"],\n            }\n        }\ndriver.navigate.to 'Required URL'\nLambdaTest::Selenium::Driver.smartui_snapshot(driver, \"Screenshot Name\", options)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For capturing the screenshot of a specific element",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='ElementClass' label='Capture Element by Class'>\n\n```rb title=\"This is a sample for your configuration for Ruby to capture an element by Class\"\noptions = {\n      element: {\n          class: 'Required Class',\n      }\n  }\ndriver.navigate.to 'Required URL'\nLambdaTest::Selenium::Driver.smartui_snapshot(driver, \"Screenshot Name\", options)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 15",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n\n<TabItem value='ElementSelector' label='Capture Element by Selector'>\n\n```rb title=\"This is a sample for your webhook configuration for Ruby to capture an element by CSS Selector\"\noptions = {\n      element: {\n          cssSelector: 'Required CSS Selector',\n      }\n  }\ndriver.navigate.to 'Required URL'\nLambdaTest::Selenium::Driver.smartui_snapshot(driver, \"Screenshot Name\", options)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Now scroll to the top",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n## Best Practices\n\n<Tabs className='docs__val' groupId='best-practices'>\n<TabItem value='screenshot-naming' label='Screenshot Naming' default>\n\n**Screenshot Naming**\n\n- Use descriptive, consistent names for screenshots\n- Include page/component name in screenshot names\n- Avoid special characters that might cause issues\n- Use consistent naming conventions across your test suite\n\n**Example:**\n```ruby\nLambdaTest::Selenium::Driver.smartui_snapshot(driver, \"HomePage-Header\")\nLambdaTest::Selenium::Driver.smartui_snapshot(driver, \"ProductPage-MainContent\")"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Best Practices",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "require 'selenium-webdriver'\n\ndriver.navigate.to 'https://example.com'\nwait = Selenium::WebDriver::Wait.new(timeout: 10)\nwait.until { driver.find_element(id: 'main-content') }\nLambdaTest::Selenium::Driver.smartui_snapshot(driver, \"Page Loaded\")"
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
        "programmingLanguage": "Ruby",
        "text": "   wait = Selenium::WebDriver::Wait.new(timeout: 10)\n   wait.until { driver.find_element(id: 'content') }\n   wait.until { driver.find_element(css: '.main-content').displayed? }"
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
        "name": "Clear gem cache",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   gem cleanup"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Check Ruby version compatibility",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   ruby --version"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Update Gemfile with specific version",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "   gem 'lambdatest-selenium-driver', '~> 1.0'"
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
          "text": "You can clone the sample repository to run LambdaTest automation tests with SmartUI and use the sdkCloud.rb file present in the sdk folder.",
          "url": "https://www.testmuai.com/support/docs/smartui-selenium-ruby-sdk/#step-1-createupdate-your-test"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Install the Dependencies",
          "text": "Install required NPM modules for TestMu AI SmartUI Selenium SDK in your Frontend project. If you face any problems executing tests with SmartUI-CLI versions >= v4.x.x, upgrade your Node.js version to v20.3 or above.",
          "url": "https://www.testmuai.com/support/docs/smartui-selenium-ruby-sdk/#step-2-install-the-dependencies"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure your Project Token",
          "text": "Setup your project token shown in the SmartUI app after creating your project.",
          "url": "https://www.testmuai.com/support/docs/smartui-selenium-ruby-sdk/#step-3-configure-your-project-token"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Create and Configure SmartUI Config",
          "text": "You can now configure your project configurations on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command: Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file: For capturing fullpage or viewport screenshots, please refer to this documentation For the list of available mobile viewports, please refer to this documentation For more information about SmartUI config global options, please refer to this documentation.",
          "url": "https://www.testmuai.com/support/docs/smartui-selenium-ruby-sdk/#step-4-create-and-configure-smartui-config"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Adding SmartUI function to take screenshot",
          "text": "You can incorporate SmartUI into your custom Selenium automation test (any platform) script by adding the smartuiSnapshot function in the required segment of selenium script of which we would like to take the screenshot, as shown below:",
          "url": "https://www.testmuai.com/support/docs/smartui-selenium-ruby-sdk/#step-5-adding-smartui-function-to-take-screenshot"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Execute the Tests on SmartUI Cloud",
          "text": "Execute visual regression tests on SmartUI using the following commands You may use the npx smartui --help command in case you are facing issues during the execution of SmartUI commands in the CLI.",
          "url": "https://www.testmuai.com/support/docs/smartui-selenium-ruby-sdk/#step-6-execute-the-tests-on-smartui-cloud"
        }
      ]
    }
  ]) }}
/>

Welcome to the world of simplified visual testing with the SmartUI SDK.

Integrating seamlessly into your existing Selenium testing suite, SmartUI SDK revolutionizes the way you approach visual regression testing. Our robust solution empowers you to effortlessly capture, compare, and analyze screenshots across a multitude of browsers and resolutions, ensuring comprehensive coverage and accuracy in your visual testing endeavors.

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

## Steps to run your first test

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots

### **Step 1:** Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `sdkCloud.rb` file present in the `sdk` folder.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/smartui-ruby-selenium-sample
cd smartui-ruby-selenium-sample/sdk
```
### **Step 2**: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Selenium SDK` in your **Frontend** project.

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/smartui-cli
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

<VerifiedTag value="Verified" />

```
gem install lambdatest-selenium-driver selenium-webdriver
```

### **Step 3:** Configure your Project Token

Setup your project token shown in the **SmartUI** app after creating your project.

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN=123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

```bash
set PROJECT_TOKEN=123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

```powershell
$env:PROJECT_TOKEN=123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

### **Step 4:** Create and Configure SmartUI Config

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

### **Step 5:** Adding SmartUI function to take screenshot

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

### **Step 6:** Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

<VerifiedTag value="Verified" />

```bash
npx smartui exec ruby sdkCloud.rb --config .smartui.json
```

:::note
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

##  View SmartUI Results

You have successfully integrated SmartUI SDK with your Selenium tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

## Arguments supported in the `smartUISnapshot` function

The following are the different options which are currently supported:

| Key                       | Description                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `driver` (instance)    | The instance of the web driver used in your tests. |
| `"Screenshot Name"` (string)    | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `options` (object)    | Specify one or a combination of selectors in the `ignoreDOM` or `selectDOM` objects. These selectors can be based on `HTML DOM IDs, CSS classes, CSS selectors, or XPaths` used by your webpage. They define elements that should be excluded from or included in the visual comparison.|

## Handling Dynamic Data in SmartUI SDK  **<NewTag value='New' color='#000' bgColor='#ffec02' />**

When conducting visual tests, you may encounter scenarios where certain elements within your application change between test runs. These changes  might introduce inconsistencies in your test results.You can ignore / select specific element(s) to be removed from the comparison by parsing the options in the `smartuiSnapshot` function in the following way

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='framework'>
<TabItem value='IgnoreID' label='Ignore ID' default>

```rb title="This is a sample for your configuration for Ruby to ignore by" ID"
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

```rb title="This is a sample for your configuration for Ruby to ignore by" Class"
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

```rb title="This is a sample for your configuration for Ruby to ignore by" XPath"
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

```rb title="This is a sample for your configuration for Ruby to ignore by CSS" Selector"
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

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='framework'>
<TabItem value='SelectID' label='Select ID' default>

```rb title="This is a sample for your configuration for Ruby to select by" ID."
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

```rb title="This is a sample for your configuration for Ruby to select by" Class"
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

```rb title="This is a sample for your configuration for Ruby to select by" XPath"
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

```rb title="This is a sample for your webhook configuration for Ruby to select by CSS" Selector"
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

## For capturing the screenshot of a specific element

You can capture screenshots of targeted elements by leveraging various locator mechanisms such as XPath, CSS ID, class, and selectors. This precision-driven approach ensures accurate and specific visual regression testing for your web application's components.

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='framework'>
<TabItem value='ElementID' label='Capture Element by ID' default>

```rb title="This is a sample for your configuration for Ruby to capture an element by" ID."
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

```rb title="This is a sample for your configuration for Ruby to capture an element by" Class"
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

```rb title="This is a sample for your configuration for Ruby to capture an element by" XPath"
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

```rb title="This is a sample for your webhook configuration for Ruby to capture an element by CSS" Selector"
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

## For capturing interactive lazy loading elements

If you encounter difficulties loading interactive elements that appear on scroll in full-page screenshots, consider functionally incorporating a full-page scroll into your script before capturing the screenshot. This approach ensures the elements load first, facilitating the screenshot processing.

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

## Best Practices

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='screenshot-naming' label='Screenshot Naming' default>

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**
```ruby
LambdaTest::Selenium::Driver.smartui_snapshot(driver, HomePage-Header")
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "ProductPage-MainContent")
```

</TabItem>
<TabItem value='wait-for-page-load' label='Wait for Page Load'>

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Selenium's wait methods for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**
```ruby
require 'selenium-webdriver'

driver.navigate.to 'https://example.com'
wait = Selenium::WebDriver::Wait.new(timeout: 10)
wait.until { driver.find_element(id: 'main-content') }
LambdaTest::Selenium::Driver.smartui_snapshot(driver, Page Loaded")
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

**Troubleshooting**

<VerifiedTag value="Verified" />

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
   ```bash
   echo $PROJECT_TOKEN
   ```

2. Check project name matches exactly (case-sensitive)

3. Verify SmartUI CLI is installed:
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
   ```ruby
   wait = Selenium::WebDriver::Wait.new(timeout: 10)
   wait.until { driver.find_element(id: 'content') }
   wait.until { driver.find_element(css: '.main-content').displayed? }
   ```

2. Enable JavaScript in configuration:
   ```json
   {
     enableJavaScript": true
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
   ```bash
   gem cleanup
   ```
3. Verify internet connectivity for RubyGems access
4. Check Ruby version compatibility:
   ```bash
   ruby --version
   ```
5. Update Gemfile with specific version:
   ```ruby
   gem 'lambdatest-selenium-driver', '~"> 1.0'
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
- Visit [<BrandName /> Support](https://www.testmuai.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support)

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
      <span className='breadcrumbs__link'> SmartUI Selenium Ruby SDK </span>
    </li>
  </ul>
</nav>

</TabItem>
</Tabs>

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
      <span className='breadcrumbs__link'> SmartUI Selenium Ruby SDK </span>
    </li>
  </ul>
</nav>
