---
id: smartui-selenium-js-sdk
title: Integrate SmartUI SDK with Selenium Tests
sidebar_label: Javascript
description: In this documentation, learn how integrate your Selenium Javascript automated tests with LambdaTest's SmartUI.
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
slug: smartui-selenium-js-sdk/
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

Welcome to the world of simplified visual testing with the SmartUI SDK. 

Integrating seamlessly into your existing Selenium testing suite, SmartUI SDK revolutionizes the way you approach visual regression testing. Our robust solution empowers you to effortlessly capture, compare, and analyze screenshots across a multitude of browsers and resolutions, ensuring comprehensive coverage and accuracy in your visual testing endeavors.

## Pre-requisites for running tests through SmartUI SDK

- Basic understanding of Command Line Interface and Selenium is required.
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on LambdaTest platform using SmartUI Selenium SDK integration.

## Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> or <b>Web</b> for executing your `SDK` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Steps to run your first test

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots

### **Step 1:** Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `sdk.js` file present in the `sdk` folder.

```bash
git clone https://github.com/LambdaTest/smartui-node-sample
cd smartui-node-sample/sdk
```
### **Step 2**: Install the Dependencies

Install required NPM modules for `LambdaTest Smart UI Selenium SDK` in your **Frontend** project.

```bash
npm i @lambdatest/smartui-cli @lambdatest/selenium-driver selenium-webdriver
```

### **Step 3:** Configure your Project Token

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

### **Step 4:** Create and Configure SmartUI Config

You can now configure your project settings on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
npx smartui config:create smartui-web.json
```

Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

```json title="/smartui-sdk-project/smartui-web.json"
{
  "web": {
    "browsers": [
      "chrome", 
      "firefox",
      "safari",
      "edge",
      // Add more browser configuration here
    ],
    "viewports": [
      [
        1920
      ],
      [
        1366
      ],
      [
        360
      ]
    ], // Full Page screenshots are captured by default
    "waitForPageRender": 50000, // Optional (Should only be used in case of websites which take more than 30s to load)
    "waitForTimeout": 1000 //Optional (Should only be used in case lazy-loading/async components are present )

  }
}
```
:::info Optional Keys in SmartUI configuration

**waitForPageRender** - If one or more `URLs` in your script require a relatively higher amount of time to load, you may use the `waitForPageRender` key in the config file to make sure the screenshots are rendered correctly. Avoid using the same in case your websites render in less than 30 seconds as it might increase the execution time of your tests.


**waitForTimeout** - If you are using any `async` components, you can add wait time for the page to load the DOM of your components. This can help avoid false-positive results for your tests. You can add the wait time in milliseconds, which might increase the execution time of your tests.
:::

#### For capturing viewport screenshots

To capture a screenshot of the content currently visible in your viewport, rather than the entire page, it's important to define the viewport width in your configuration settings. Specify the desired width parameters as demonstrated in the following example to ensure that the screenshot encompasses only the viewport area.

```json
    "viewports": [
      [
        1920,
        1080
      ],
      [
        1366,
        768
      ],
      [
        360,
        640
      ]
    ],
```

### **Step 5:** Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below: 
  

```js
const { Builder, By, Key, until } = require('selenium-webdriver');
const { smartuiSnapshot } = require('@lambdatest/selenium-driver');

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.lambdatest.com");
    await smartuiSnapshot(driver, "Lambdatest");
    await driver.get("https://www.pinterest.com/pin/112801165652823604/");
    await smartuiSnapshot(driver, "NYC");
  } finally {
    await driver.quit();
  }
})();
```

### **Step 6:** Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui exec node sdkCloud.js --config smartui-web.json
```

:::note 
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

##  View SmartUI Results

You have successfully integrated SmartUI SDK with your Selenium tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the Smart UI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.


<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Handling Dynamic Data in SmartUI SDK  **<NewTag value='New' color='#000' bgColor='#ffec02' />** 

In case if you have any dynamic DOM elements that are not in the same position across test runs, you can ignore / select a specific area to be removed from the comparison by parsing the options in the `smartuiSnapshot` function in the following way

The following are the different options which are currently supported:

| Key                       | Description                                                                                                               | Example                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `ignoreDOM` (object)    | Specify one or a combination of selectors based on the `HTML DOM ID, CSS class, CSS selector or Xpath` used by your webpage that should be excluded from the comparison |
| `selectDOM` (object)      | Specify one or a combination of selectors based on the `HTML DOM ID, CSS class, CSS selector or XPath` used by your webpage that should be included in the comparison |

<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreID" label="Ignore ID" default>

```js title="This is a sample for your configuration for Javascript to ignore by ID"
options = {
            ignoreDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value="IgoreClass" label="Ignore Class">

```js title="This is a sample for your configuration for Javascript to ignore by Class"
options = {
            ignoreDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value="IgnoreXPath" label="Ignore XPath">

```js title="This is a sample for your configuration for Javascript to ignore by XPath"
options = {
            ignoreDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>

<TabItem value="IgnoreSelector" label="Ignore CSS Selector">

```js title="This is a sample for your configuration for Javascript to ignore by CSS Selector"
options = {
            ignoreDOM: {
                cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```
</TabItem>

</Tabs>

<Tabs className="docs__val" groupId="framework">
<TabItem value="SelectID" label="Select ID" default>

```js title="This is a sample for your configuration for Javascript to select by ID."
options = {
            selectDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value="SelectClass" label="Select Class">

```js title="This is a sample for your configuration for Javascript to select by Class"
options = {
            selectDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```js title="This is a sample for your configuration for Javascript to select by XPath"
options = {
            selectDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>

<TabItem value="SelectSelector" label="Select CSS Selector">

```js title="This is a sample for your webhook configuration for Javascript to select by CSS Selector"
options = {
            selectDOM: {
                cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```
</TabItem>

</Tabs>

## For capturing interactive lazy loading elements

If you encounter difficulties loading interactive elements that appear on scroll in full-page screenshots, consider functionally incorporating a full-page scroll into your script before capturing the screenshot. This approach ensures the elements load first, facilitating the screenshot processing.

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


For additional information about SmartUI APIs please explore the documentation [here](https://www.lambdatest.com/support/api-doc/)


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
      <span className="breadcrumbs__link">
     Smart UI with Cypress  </span>
    </li>
  </ul>
</nav>