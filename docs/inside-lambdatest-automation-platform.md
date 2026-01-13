---
id: inside-lambdatest-automation-platform
title: Guided Walkthrough of Web Automation Platform
hide_title: false
sidebar_label: Guided Walkthrough
description: You can view the Timelines, Analytics, and Automation Log of all the tests and builds run on the TestMu AI.
keywords:
  - Automation Platform
  - Dashboard
  - Automation Testing
  - testmu ai Dashboard
url: https://www.testmu.ai/support/docs/inside-testmu-platform
site_name: LambdaTest
slug: inside-testmu-platform
canonical: https://www.testmu.ai/support/docs/inside-testmu-platform/
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
          "name": "Guided Walkthrough",
          "item": `${BRAND_URL}/support/docs/inside-testmu-platform/`
        }]
      })
    }}
></script>

This page gives you a guided walkthrough of all the things on the <BrandName /> [Web Automation Dashboard](https://automation.lambdatest.com/build) and how you can get the most out of the platform, once you have successfully ran you first test.

We provide both Test and Build view for filtering your tests as per your requirement.

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/homepage-guide.gif').default} alt="Image" className="doc_img"style={{ width: '100%' }}/>

## Test Page
Whenever you will click on any of your build or to a particular test, you will be landed on this page. In this page, you will get a detailed information for each of your executed tests like **Build** name, tests configurations (operating system, browser, resolution, browser version etc), command and video logs etc.

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/testPage.png').default} alt="Image" className="doc_img"style={{ width: '100%' }}/>

### Tests
In the left panel you can observe that it lists all the test cases of a particular build with its corresponding status (pass/fail), execution time, configurations used, and other relevant information.

Additionally, you can sort the data according to date, status, and duration, as well as search for a specific test or apply a filter based on browser, OS, status, and tags.

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/test.png').default} alt="Image" className="doc_img"style={{ width: '100%' }}/>

### Test Summary
The Test Summary section provides a high-level overview of the test run, allowing you to quickly assess overall progress, identify individual test cases, and access detailed information about specific tests.

#### Core Test Information
- Build Name: "Demo: Cucumber TestNG on HyperTest Grid"
- Test status (passed or failed)
- Test Name: "Perform Bing Search for <BrandName />"
- Time taken for execution
- Configurations used (resolution, browser, operating system, framework)
- Last updated timestamp


In the very left side, there is a button to copy your **test id** and beside it there is another button which allows you to **create an issue**, **rename**, **share** and **delete** that particular test.
<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/testSummary.png').default} alt="Image" className="doc_img"style={{ width: '100%' }}/>

### Command Logs
You can access the commands involved in the test, and the logs on the right hand side on this Dashboard.

- **All Commands:** Each command that is run as a part of your test case is shown here. Each command also contains its own parameters, that can be accessed by hovering on the command.
- **Logs:** View all kinds of logs at one place. You can toggle between the Console Logs, Terminal Logs and the Test Framework Logs.
- **Network:** Access the network logs while your tests were getting executed on the Network tab.

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/commandLogsAndVideos.png').default} alt="Image" className="doc_img"style={{ width: '100%' }}/>

### Test Videos
<BrandName /> provides you videos of your tests to give you a clear picture of what goes on in the background.

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/testVideo.png').default} alt="Image" className="doc_img"style={{ width: '100%' }}/>
