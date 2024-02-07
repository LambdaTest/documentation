---
id: smartui-testcafe-sdk
title: Integrate SmartUI SDK with Testcafe Tests
sidebar_label: Testcafe
description: In this documentation, learn how integrate your Testcafe automated tests with LambdaTest's SmartUI.
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
slug: smartui-testcafe-sdk/
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

Integrating seamlessly into your existing Testcafe testing suite, SmartUI SDK revolutionizes the way you approach visual regression testing. Our robust solution empowers you to effortlessly capture, compare, and analyze screenshots across a multitude of browsers and resolutions, ensuring comprehensive coverage and accuracy in your visual testing endeavors.

## Pre-requisites for running tests through SmartUI SDK

- Basic understanding of Command Line Interface and Testcafe is required.
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on LambdaTest platform using SmartUI Testcafe SDK integration.

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

You can clone the sample repository to run `Testcafe` tests with `SmartUI` and use the `testcafeSDKLocal.js` file.

```bash
git clone https://github.com/LambdaTest/smartui-testcafe-sample
cd smartui-testcafe-sample
```
### **Step 2**: Install the Dependencies

Install required NPM modules for `LambdaTest Smart UI Testcafe SDK` in your **Frontend** project.

```bash
npm i @lambdatest/smartui-cli @lambdatest/testcafe-driver testcafe
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

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


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

- You can incorporate SmartUI into your custom `Testcafe` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of testcafe script of which we would like to take the screenshot, as shown below: 
  

```js
import { Selector } from 'testcafe';
import { smartuiSnapshot } from '@lambdatest/testcafe-driver';

fixture('Amazon Test')
  .page('https://www.lambdatest.com');

test('Take Amazon Homepage Screenshot', async (t) => {
  // Take a screenshot using LambdaTest's TestCafe driver
  await smartuiSnapshot(t, 'LT-Homepage');
});

```

### **Step 6:** Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui exec testcafe chrome testcafeSDKLocal.js --config smartui-web.json
```

:::note 
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

##  View SmartUI Results

You have successfully integrated SmartUI SDK with your Testcafe tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the Smart UI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.


<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Arguments supported in the `smartUISnapshot` function

The following are the different options which are currently supported:

| Key                       | Description                                                                                                               | Example                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `t` (test controller)    | This object allows you to control the test execution and interact with the web page under test. |
| `"Screenshot Name"` (string)    | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `options` (object)    | Specify one or a combination of selectors in the `ignoreDOM` or `selectDOM` objects. These selectors can be based on `HTML DOM IDs, CSS classes, CSS selectors, or XPaths` used by your webpage. They define elements that should be excluded from or included in the visual comparison.|

## Handling Dynamic Data in SmartUI SDK  **<NewTag value='New' color='#000' bgColor='#ffec02' />** 

When conducting visual tests, you may encounter scenarios where certain elements within your application change between test runs. These changes  might introduce inconsistencies in your test results.You can ignore / select specific element(s) to be removed from the comparison by parsing the options in the `smartuiSnapshot` function in the following way


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreID" label="Ignore ID" default>

```js title="This is a sample for your configuration for Testcafe to ignore by ID"
options = {
            ignoreDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(t, 'Screenshot Name', options);
```

</TabItem>
<TabItem value="IgoreClass" label="Ignore Class">

```js title="This is a sample for your configuration for Testcafe to ignore by Class"
options = {
            ignoreDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(t, 'Screenshot Name', options);
```

</TabItem>
<TabItem value="IgnoreXPath" label="Ignore XPath">

```js title="This is a sample for your configuration for Testcafe to ignore by XPath"
options = {
            ignoreDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(t, 'Screenshot Name', options);
```

</TabItem>

<TabItem value="IgnoreSelector" label="Ignore CSS Selector">

```js title="This is a sample for your configuration for Testcafe to ignore by CSS Selector"
options = {
            ignoreDOM: {
                cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(t, 'Screenshot Name', options);
```
</TabItem>

</Tabs>

<Tabs className="docs__val" groupId="framework">
<TabItem value="SelectID" label="Select ID" default>

```js title="This is a sample for your configuration for Testcafe to select by ID."
options = {
            selectDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(t, 'Screenshot Name', options);
```

</TabItem>
<TabItem value="SelectClass" label="Select Class">

```js title="This is a sample for your configuration for Testcafe to select by Class"
options = {
            selectDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(t, 'Screenshot Name', options);
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```js title="This is a sample for your configuration for Testcafe to select by XPath"
options = {
            selectDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(t, 'Screenshot Name', options);
```

</TabItem>

<TabItem value="SelectSelector" label="Select CSS Selector">

```js title="This is a sample for your webhook configuration for Testcafe to select by CSS Selector"
options = {
            selectDOM: {
                cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(t, 'Screenshot Name', options);
```
</TabItem>

</Tabs>

## For capturing interactive lazy loading elements

If you encounter difficulties loading interactive elements that appear on scroll in full-page screenshots, consider functionally incorporating a full-page scroll into your script before capturing the screenshot. This approach ensures the elements load first, facilitating the screenshot processing.

```js Example for scrolling to bottom for lazy elements
import { Selector } from 'testcafe';
import { smartuiSnapshot } from '@lambdatest/testcafe-driver';

// Function to scroll through the page and then back to the top
async function scrollToBottomAndTop(t, lastPageWait = 100) {
    const getScrollHeight = Selector(() => document.body.scrollHeight);
    const heightOfPage = await getScrollHeight();
    let size = 200;
    let noOfLoop = Math.floor(heightOfPage / size);

    for (let i = 1; i <= noOfLoop; i++) {
        await t.scrollBy({ x: 0, y: size });
        await t.wait(1000);
        if (i === noOfLoop) {
            await t.scrollTo({ x: 0, y: heightOfPage });
            await t.wait(lastPageWait);
        }
    }

    // Scroll to the top
    await t.scrollTo({ x: 0, y: 0 });
    await t.wait(10000);
    console.log("Scroll Completed");
}

fixture `Page Scroll Test`
    .page `Required URL`; // Replace `Required URL` with the actual URL

test('Scroll through the page, then take a smartUI Snapshot', async t => {
    await scrollToBottomAndTop(t, 100); // Adjust wait time as needed
    await smartuiSnapshot(t, 'Screenshot Name'); // Adjust the screenshot name as needed
});

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
