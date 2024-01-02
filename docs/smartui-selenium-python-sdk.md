---
id: smartui-selenium-python-sdk
title: Integrate SmartUI SDK with Selenium Tests
sidebar_label: Python
description: In this documentation, learn how intergrate your Selenium automated tests with LambdaTest's SmartUI.
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
slug: smartui-selenium-python-sdk/
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

Elevate your Selenium automated tests with SmartUI SDK integration. By seamlessly integrating SmartUI into your testing suite, you can effortlessly identify visual differences in your web application and streamline your visual testing workflow.

## Pre-requisites for running tests through SmartUI SDK

- Basic understanding of Command Line Interface and Selenium is required.
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on LambdaTest platform using SmartUI Selenium SDK integration.

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

**Using Github Sample**
- You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `SmartUI_SDK_LT_hub.py` file.

```bash
git clone https://github.com/LambdaTest/smartui-python-sample
```
### **Step 2**: Install the Dependencies

Install required NPM modules for `LambdaTest Smart UI Selenium SDK` in your **Frontend** project.

```bash
npm i -g @lambdatest/smartui-cli
```
```bash
pip install lambdatest-selenium-driver
```

### **Step 3:** Configure your Project Token

Setup your project token show in the **SmartUI** app after, creating your project.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD" default>

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

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-project-token.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

### **Step 4:** Create and Configure SmartUI Config

You can now configure your project settings on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
smartui config:create-web smartui-web.json
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
    "resolutions": [
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
    "waitForPageRender": 50000 // Optional (should only be used in case of websites which take more than 30s to load)
  }
}
```

:::info 
If one or more `URLs` in your script require a relatively higher amount of time to load, you may use the `waitForPageRender` key in the config file to make sure the screenshots are rendered correctly. Avoid using the same in case your websites render in less than 30 seconds.
:::

### **Step 5:** Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below: 
  

```python
from lambdatest_selenium_driver import smartui_snapshot
from selenium import webdriver


driver = webdriver.Chrome()
try:
    driver.get('https://www.lambdatest.com/visual-regression-testing')
    smartui_snapshot(driver,"<Screenshot Name>")
except Exception as err:
    print(err)
finally: 
    driver.close()
```

### **Step 6:** Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
smartui exec python <Test fIle name>.py
```
<!-- 
CLI Process Snippet:
```bash
#<Placeholder>
``` -->

<!-- ### Setup with Continuous Integration (CI)

If you are using the Continuous Integration (CI) pipeline for your application and want to integrate `SmartUI Selenium (JS) SDK` execution then the following are the steps needs to be added to your `.yaml` file:


```yaml
#<Placeholder for .yaml>

```
 -->

##  View SmartUI Results

You have successfully integrated SmartUI SDK with your Selenium tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the Smart UI dashboard to view the results. This will help you identify the mis-matches from the existing `Baseline` build and do the required visual testing.


<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui_ss_cli.png').default} alt="cmd" width="768" height="373" className="doc_img"/>


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
