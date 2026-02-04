---
id: test-setup-and-execution
title: Test Setup And Execution
hide_title: true
sidebar_label: Test Setup And Execution
description: This documentation guides you how to configure the desired capability for app, device, group tests, debugging, and mark tests as passed or failed.
keywords:
- desired capability for app automation
- appium capabilities testmu ai
- mobile app automation testing using appium
url: https://www.testmuai.com/support/docs/test-setup-and-execution/
site_name: LambdaTest
slug: test-setup-and-execution/
canonical: https://www.testmu.ai/support/docs/test-setup-and-execution/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "LambdaTest Core Concepts",
          "item": `${BRAND_URL}/support/docs/test-setup-and-execution/`
        }]
      })
    }}
></script>

# Test Setup And Execution
***

After uploading the app to the <BrandName /> cloud through REST API, you need to configure different capabilities for the uploaded app in your Appium test scripts. After that, you can run app automation tests using Appium on <BrandName />. 

The **<BrandName /> Desired Capabilities Generator** will help in auto-generating the capabilities class required to run your app automation scripts on the <BrandName /> Appium Grid. The Desired capabilities generator will generate the entire code of the capabilities class for the selected setups and programming languages.

This documentation guides you how to configure the desired capability for app, device, group tests, debugging, and mark tests passed/failed etc.

## Configure App
***

In order to fetch and install apps on <BrandName /> cloud, you will need to use the `app` capability to connect with your uploaded apps.

| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| app   |  `lt://APP10051525539885437397` |    Configure the app to test on    | `"app":"lt://APP10051525539885437397"`        |

## Select Device And OS
***

To perform Appium mobile testing on real Android and iOS devices, you need to define the `deviceName`, `platformName`, and `platformVersion` capabilities in your Appium automation scripts.

| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| deviceName   |  Galaxy Tab S4 |   Specify the device to test on    | `capabilities.setCapability (deviceName","Galaxy Tab S4)`  |
| platformName   |  Android |    Specify the platform name    | `capabilities.setCapability("platformName", "Android")` |
| platformVersion   |  10 |     Specify the platform version     | `capabilities.setCapability("platformVersion", "10")` |

## Group Tests
***

For better analysis, you can name your test cases and organize your builds by build name and project.  To organize Appium automated tests, you will need to use name, build and projectName capability.

| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | ----------------|
| build   |  5.1 |   Represent the build number for your test    |  `capabilities.setCapability("build", "5.1")`     |
| name   |  Demo |    Represents the name of a test   | `capabilities.setCapability("name", "Demo")` |
| projectName   |  Test1 |     Represent the name of a project     | `capabilities.setCapability("projectName", "Test1")` |

## Debugging
***

By specifying the capabilities for the debugging tools, you can debug and fix your failed Appium test sessions using Appium logs, device logs, network logs, crash logs, screenshots, video logs, or app profiling data.

>**Note**: Appium logs are enabled by default.

| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| network   | true/false |   Enable network logs    |  `capabilities.setCapability("network", "true")` |
| devicelog  | true/false |   Enable device logs  | `capabilities.setCapability("devicelog", "true")` |
| visual  | true/false |  Enable Visual logs to capture screenshots.  | `capabilities.setCapability("visual", "true")` |
| video   |  true/false |    Enable Video recording of the entire screen     | `capabilities.setCapability("video", "true")` |

## Viewing Appium Test Results
***

You can view the results of your app automation tests on the <BrandName /> App Automation dashboard and using the REST API. Configure **build** and **project** capabilities to segregate your test sessions into distinct builds and projects.

| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| build  | My_Test |   Name of the build to group tests    |  `capabilities.setCapability("build", "My_Test")` |
| project | Sprint |   Name of the project to group tests  | `capabilities.setCapability("project", "Sprint")` |

## Mark Tests As Passed Or Failed
***

While performing mobile app automation on <BrandName /> Appium Grid, you may encounter a scenario in which a test that you labeled as failed in your local instance turns out to be performed successfully on <BrandName />. It's crucial to mark an automated test as **Passed** or **Failed** based on your testing requirements for validating expected behavior.

By default, the Status of each test that runs successfully is marked as **Completed**, and if there are any issues, the Status is marked as **Error**.

You can mark a test status as failed/passed using JavaScript executer on <BrandName />.

1. To mark test status as **failed**.

`driver.executeScript('lambda-status=failed')`

2. To mark test status as **passed**.

`driver.executeScript('lambda-status=passed')`


>In case you have any questions or need any additional information, drop them at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmu.ai.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       Test Setup And Execution
      </span>
    </li>
  </ul>
</nav>