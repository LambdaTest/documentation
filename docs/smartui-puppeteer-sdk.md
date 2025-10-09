---
id: smartui-puppeteer-sdk
title: Integrate SmartUI SDK with Puppeteer Tests
sidebar_label: Puppeteer
description: In this documentation, learn how integrate your Puppeteer Javascript automated tests with LambdaTest's SmartUI.
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

url: https://www.lambdatest.com/support/docs/smartui-puppeteer-sdk/
slug: smartui-puppeteer-sdk/
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
          "item": "https://www.lambdatest.com/support/docs/smartui-puppeteer-sdk/"
        }]
      })
    }}
></script>

Welcome to the world of simplified visual testing with the SmartUI SDK. 

Integrating seamlessly into your existing Puppeteer testing suite, SmartUI SDK revolutionizes the way you approach visual regression testing. Our robust solution empowers you to effortlessly capture, compare, and analyze screenshots across a multitude of browsers and resolutions, ensuring comprehensive coverage and accuracy in your visual testing endeavors.

## Prerequisites

- Basic understanding of Command Line Interface and Puppeteer is required.
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on LambdaTest platform using SmartUI Puppeteer SDK integration.

## Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> for executing your `SDK` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Steps to run your first test

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots

### **Step 1:** Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `puppeteerCloud.js` file present in the `sdk` folder.

```bash
git clone https://github.com/LambdaTest/smartui-puppeteer-sample
cd smartui-puppeteer-sample/sdk
```
### **Step 2**: Install the Dependencies

Install required NPM modules for `LambdaTest Smart UI Puppeteer SDK` in your **Frontend** project.

```bash
npm i @lambdatest/smartui-cli @lambdatest/puppeteer-driver puppeteer
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
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


### **Step 4:** Create and Configure SmartUI Config

You can now configure your project configurations on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
npx smartui config:create .smartui.json
```

Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

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

- You can incorporate SmartUI into your custom `Puppeteer` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of Puppeteer script of which we would like to take the screenshot, as shown below: 
  

```js
const puppeteer = require("puppeteer");
const { smartuiSnapshot } = require('@lambdatest/puppeteer-driver'); // Assuming you still want to use smartuiSnapshot locally

(async () => {
  // Launch a browser instance locally
  const browser = await puppeteer.launch({
    headless: false, // Set to false to see the UI
    args: ['--start-maximized'], // Start browser maximized, remove if not needed
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 }); // Set viewport size as needed

  // Navigate to the desired URL
  await page.goto('https://www.lambdatest.com');

  // Take a screenshot with Smart UI. Replace "LT-Home" with a relevant name for your use case
  await smartuiSnapshot(page, "LT-Home");

  // Close the browser
  await browser.close();
})();
```

### **Step 6:** Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui exec node puppeteerCloud.js --config .smartui.json
```

:::note 
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

##  View SmartUI Results

You have successfully integrated SmartUI SDK with your Puppeteer tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the Smart UI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.


<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Arguments supported in the `smartUISnapshot` function

The following are the different options which are currently supported:

| Key                       | Description                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `driver` (instance)    | The instance of the web driver used in your tests. |
| `"Screenshot Name"` (string)    | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `options` (object)    | Specify one or a combination of selectors in the `ignoreDOM` or `selectDOM` objects. These selectors can be based on `HTML DOM IDs, CSS classes, CSS selectors, or XPaths` used by your webpage. They define elements that should be excluded from or included in the visual comparison.|


## Handling Dynamic Data in SmartUI SDK  **<NewTag value='New' color='#000' bgColor='#ffec02' />** 

When conducting visual tests, you may encounter scenarios where certain elements within your application change between test runs. These changes  might introduce inconsistencies in your test results.You can ignore / select specific element(s) to be removed from the comparison by parsing the options in the `smartuiSnapshot` function in the following way


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreID" label="Ignore ID" default>

```js title="This is a sample for your configuration for Puppeteer to ignore by ID"
let options = {
            ignoreDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>
<TabItem value="IgoreClass" label="Ignore Class">

```js title="This is a sample for your configuration for Puppeteer to ignore by Class"
let options = {
            ignoreDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>
<TabItem value="IgnoreXPath" label="Ignore XPath">

```js title="This is a sample for your configuration for Puppeteer to ignore by XPath"
let options = {
            ignoreDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>

<TabItem value="IgnoreSelector" label="Ignore CSS Selector">

```js title="This is a sample for your configuration for Puppeteer to ignore by CSS Selector"
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

<Tabs className="docs__val" groupId="framework">
<TabItem value="SelectID" label="Select ID" default>

```js title="This is a sample for your configuration for Puppeteer to select by ID."
let options = {
            selectDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>
<TabItem value="SelectClass" label="Select Class">

```js title="This is a sample for your configuration for Puppeteer to select by Class"
let options = {
            selectDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```js title="This is a sample for your configuration for Puppeteer to select by XPath"
let options = {
            selectDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>

<TabItem value="SelectSelector" label="Select CSS Selector">

```js title="This is a sample for your webhook configuration for Puppeteer to select by CSS Selector"
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

## For capturing the screenshot of a specific element

You can capture screenshots of targeted elements by leveraging various locator mechanisms such as XPath, CSS ID, class, and selectors. This precision-driven approach ensures accurate and specific visual regression testing for your web application's components.


<Tabs className="docs__val" groupId="framework">
<TabItem value="ElementID" label="Capture Element by ID" default>

```js title="This is a sample for your configuration for Puppeteer to capture an element by ID."
let options = {
      element: {
          id: 'Required ID',
      }
  };
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>
<TabItem value="ElementClass" label="Capture Element by Class">

```js title="This is a sample for your configuration for Puppeteer to capture an element by Class"
let options = {
      element: {
          class: 'Required Class',
      }
  };
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>
<TabItem value="ElementXPath" label="Capture Element by XPath">

```js title="This is a sample for your configuration for Puppeteer to capture an element by XPath"
let options = {
      element: {
          xpath: 'Required Xpath',
      }
  };
        await page.goto('Required URL');
        await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

</TabItem>

<TabItem value="ElementSelector" label="Capture Element by Selector">

```js title="This is a sample for your webhook configuration for Puppeteer to capture an element by CSS Selector"
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

## For capturing interactive lazy loading elements

If you encounter difficulties loading interactive elements that appear on scroll in full-page screenshots, consider functionally incorporating a full-page scroll into your script before capturing the screenshot. This approach ensures the elements load first, facilitating the screenshot processing.

```js Example for scrolling to bottom for lazy elements
const puppeteer = require('puppeteer');
const { smartuiSnapshot } = require('@lambdatest/puppeteer-driver');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Launches a browser
  const page = await browser.newPage(); // Opens a new page

  try {
    await page.goto('Required URL'); // Navigate to the required URL

    // Function to scroll to the bottom of the page
    async function quickScrollToBottom(lastPageWait) {
      await page.evaluate(async (lastPageWait) => {
        const scrollToBottom = async (lastPageWait) => {
          const getScrollHeight = () => document.body.scrollHeight;
          let lastHeight = await getScrollHeight();
          let currentHeight = 0;

          while (currentHeight < lastHeight) {
            window.scrollTo(0, lastHeight);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for the page to load more content
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

    await quickScrollToBottom(100); // Adjust the wait time as needed

    // Taking a screenshot with Smart UI
    await smartuiSnapshot(page, "Screenshot Name");

  } finally {
    await browser.close(); // Close the browser
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
      <span className="breadcrumbs__link"> SmartUI Puppeteer SDK </span>
    </li>
  </ul>
</nav>
