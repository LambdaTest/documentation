---
id: hyperexecute-smart-ui-testing-using-selenium
title: Smart UI Testing Using HyperExecute
hide_title: true
sidebar_label: Using Selenium
description: Accelerate bug identification with HyperExecute's intelligent UI testing via Selenium. Conduct Visual UI Regression Testing for flawless application deployment.
keywords:
  - smart ui testing in lambdatest
  - smart ui testing in hyperexecute
  - visual  ui testing,image to image comparison
  - free cross browser testing tool
  - regression testing tool
  - perform visual ui testing online
  - compare image to image
  - internet explorer 9 browser test
  - test on samsung a7 online
  - test on mac 10.11 el capitan online
  - apple mac el capitan virtual machine
url: https://www.lambdatest.com/support/docs/hyperexecute-smart-ui-testing-using-selenium/
site_name: LambdaTest
slug: hyperexecute-smart-ui-testing-using-selenium/
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
          "name": "Smart UI Testing",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-smart-ui-testing-using-selenium/"
        }]
      })
    }}
></script>

# Smart UI Tests in HyperExecute using Selenium

---

Smart UI Testing is a powerful tool that enables you to execute regression testing effortlessly and identify Visual UI Regression bugs with ease. This guide will walk you through the process of running Smart UI tests on the HyperExecute platform

## Pre-requisites

- LambdaTest Authentication Credentials

  - Keep your LambdaTest login, access key, and HubURL handy for authentication purposes. They must be configured as environment variables. You can find them on your [LambdaTest automation dashboard](https://automation.lambdatest.com/) by clicking on the key symbol next to the help button.

- Basic understanding of Selenium and WebDriver is required.

- To run Smart UI tests, you need to have a **Baseline Image** and a **Comparison** image. A baseline image is the reference image with which you want to compare. You can either upload this image from your computer or take a screenshot from your browser.

---

### Step 1: Setup a SmartUI Project

To get started with Smart UI testing, you need to create a project that will consolidate all your builds for testing. Follow these steps to set up your SmartUI Project:

1. Go to [LambdaTest SmartUI Dashboard](https://beta-smartui.lambdatest.com/)
2. Click on "Create a new project"
3. Select the Platform either Web or Real Devices. For this demo we are selecting **Web**.
4. Provide the **Project Name**, **Approvers** for the changes found, and **Tags** for any filter or easy navigation.
5. Click on the **Create Button**.

### Step 2: Configure Your Test With Selenium Desired Capabilities

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots -

1. Clone the sample repository 

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/smartui-node-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

2. Run the below mentioned commands in the terminal to setup the environment variables.

For macOS / Linux:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Windows:

```bash
set LT_USERNAME=YOUR_LT_USERNAME
set LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

<!-- Set up the LambdaTest credentials by following the instructions mentioned in the [README.md](https://readme.md/) file. -->

3. Configure your Test Environment by following the instructions mentioned in the [README.md](https://github.com/LambdaTest/smartui-node-sample#table-of-contents) file.

4. Edit the required capabilities for your test suite. Replace the capabilities in your Remote WebDriver DesiredCapabilities configuration with the appropriate values.

```javascript
let capabilities = {
  platform: "Windows 10", // Configure your OS for Selenium test
  browserName: "chrome", // Configure your Browser for Selenium test
  version: "latest", // Configure your Browser Version for Selenium test
  visual: true, // Configure your Capture screenshot  for Selenium test
  name: "test session", // name of the test for Selenium
  build: "Automation Build", // name of the build for Selenium
  //highlight-next-line
  "smartUI.project": "<Your Project Name>", // Replace the name of project with the new project name
};

// Connecting to the Lambdatest Selenium Cloud Grid with Smart UI (Beta)
// Enter your UserName and Access Key 
 
let gridUrl = 
  "https://" + 
  //highlight-next-line
  "<Your Username>" + 
  ":" + 
  //highlight-next-line
  "<Your Access Key>" +
  `@beta-hub.lambdatest.com/wd/hub`;

// Here is your Remote WebDrive Connection
let driver = await new webdriver.Builder()
  .usingServer(gridUrl)
  .withCapabilities(capabilities)
  .build();
```

- Webhook for taking screenshot -

```javascript
driver.executeScript("smartui.takeScreenshot");
```

- Installing dependency and for executing the test.

```
$ npm i
$ node test.js
```

### Step 3: Reviewing Executed Builds

Once the test is executed, you can check the results at [LambdaTest SmartUI](https://beta-smartui.lambdatest.com/). Make all the desired changes, re-run your tests and then re-visit the Dashboard and check your **Baseline Screenshot** as well as **Comparable Screenshot**

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/selenium/smart-ui-3.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

Here you can see the difference.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/selenium/smart-ui-4.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Additional Details

### Screenshot Capturing Options

---

#### For Capturing Full Page Screenshot

For any websites that provide a scrolling feature on their application user interface, you can take a screenshot of the entire page. You can capture full page screenshot for your **Selenium** functional testing with the section of code below:

```javascript
driver.executeScript("smartui.takeFullPageScreenshot");
```

#### For Capturing Viewport Screenshot

This section of code must be attached below the relevant portion of the Selenium script from which the screenshot will be taken.

```javascript
driver.executeScript("smartui.takeScreenshot");
```

### Configuration With The Host

---

This section of code should be used to configure your Smart UI test with the host

```javascript
const GRID_HOST = "@beta-hub.lambdatest.com/wd/hub";
```

### Smart UI Test Keywords

| Key                              | Description                                                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `transparency`                   | Command to adjust test transparency settings                                                                      |
| `largeImageThreshold`            | Command to set the threshold value for the comparison output                                                      |
| `BoundingBoxes: [box1, box2]`    | Command to narrow down the area of comparison by specifying a bounding box measured in pixels from the top left   |
| `ignoredBoxes: [box1, box2]`     | Command to exclude part of the image from comparison, by specifying the excluded area in pixels from the top left |
| `ignoredAreasColoredWith: color` | Command to exclude pixels that match the specific color on a reference image from comparison                      |