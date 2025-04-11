---
id: hyperexecute-cli-gui
title: "HyperExecute GUI App - Speed Simplified"
hide_title: false
sidebar_label: HyperExecute GUI App
description: This documentation outlines the steps on how to trigger a job on hyperexecute using the underpass app - gui app for hyperexecute cli.
keywords:
  - LambdaTest
  - HyperExecute
  - LambdaTest HyperExecute
  - CLI
  - HyperExecute-GUI
  - test execute
  - hyperexecute job
  - automation
url: https://www.lambdatest.com/support/docs/hyperexecute-cli-gui/
site_name: LambdaTest
slug: hyperexecute-cli-gui/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "HyperExecute Status",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-cli-gui/"
        }]
      })
    }}
></script>

:::info Currently in BETA

HyperExecute GUI is currently in **BETA** and supports the **Java TestNG Framework (Java Version 11 & above)**. We're actively working on expanding support to more frameworks. If you have specific framework requests, please reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span>.

:::

**HyperExecute Graphical User Interface (GUI)** is designed to streamline your test automation workflow and bring HyperExecute's power of test orchestration with the most intuitive way to interact. HyperExecute GUI makes testing simple, fast, and powerful. It abstracts all technical complexity to make **high-performance test execution available to everyone**. The goal is to save your valuable time and effort to enable a more efficient testing process.

## Why HyperExecute GUI?
---
**[HyperExecute](https://www.lambdatest.com/hyperexecute)** has been a **cornerstone for automation testing**, offering unparalleled flexibility with its YAML configurations and command-line interface. Now, with HyperExecute GUI, you can experience AI-powered automatic test detection, set up test environments with simple clicks and run your tests without coding.

<img src={require('../assets/images/hyperexecute/gui/gui_template.webp').default} />

## Pre-Requisites
---

Before getting started, download the HyperExecute GUI installer from your LambdaTest dashboard and install it on your system. Run the installer by following the on-screen instructions and launch HyperExecute GUI from your applications menu.
Currently HyperExecute GUI is a part of the **LambdaTest Underpass Application**. If you already have Underpass app on your system, please update it to latest version.

:::tip Download the GUI 🔗
You can download the app directly from your **HyperExecute Dashboard** or simply click the links below based on your operating system:
 - **[Download for MacOS](https://downloads.lambdatest.com/underpass/master/UnderPass.dmg)**
 - **[Download for Windows](https://downloads.lambdatest.com/underpass/master/UnderPass.exe)**
 - **[Download for Linux](https://downloads.lambdatest.com/underpass/master/UnderPass.AppImage)**
:::

## Getting Started in 4 Simple Steps
---

### Demo Walkthrough

Please checkout this video demo which walks you through the step by step process of using the GUI App using a demo project. All the steps taken in this video are explained in detail in the following step by step guide too.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/GUI_Demo.mp4').default} type="video/mp4" />
</video>

### Step 1: Select and Analyze Your Project
Launch the application, log in with your LambdaTest credentials, and select your test project folder. The GUI will automatically analyze your project i.e.:

- Detect your testing framework and language
- Verify and manages network connectivity
- Set up a secure connection to your account

:::tip Sample Project 🔗
If you do not have a project handy, please feel free to use this **[Sample Project](https://github.com/LambdaTest/testng-selenium-hyperexecute-sample)** for trying out the GUI.
:::

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/projectselect_analyze.mp4').default} type="video/mp4" />
</video>

:::note 
The GUI will check the system and your project to ensure everything is ready. If any issues are found, you'll see clear instructions to resolve them. Some common issues faced by the users are:
- **Missing programming language or package manager**: If your project uses a language or package manager that isn't installed on your computer, the GUI will guide you through installing it.
- **Network connectivity issues**: If the GUI can't connect to LambdaTest servers, it will ask you to set up the necessary network settings through proxy.
:::

### Step 2: Discover and Select Tests
Once you land on the Project Screen, the app will automatically initiate Test Discovery. **Test Discovery is an automated process** that scans your project to identify and group all test cases by **Suites, Files, Classes or Methods**. 

This feature eliminates the need for manual test configuration and makes it easy to select which tests to run. Once you have selected the tests from "Test List" tab according to your preferences, either you can **directly run the job** or move to the next step for **additional configuration**.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/testdiscovery_select.mp4').default} type="video/mp4" />
</video>

:::info Coming Soon
Search within tests is not yet available on the GUI. We are working to make it available soon.
:::

### Step 3: Specify Run Config _[Optional]_
The **Run Config tab** in HyperExecute GUI offers an intuitive visual interface to configure your test environment and execution settings.
You’ll find the basic preset configurations displayed just below your project name. If you need to modify or customize these settings, simply navigate to the Run Config tab and adjust your execution environment effortlessly — _no YAML editing required_.

To learn about any configuration in detail, please search for the keyword in the **[HyperExecute YAML Documentation](/support/docs/deep-dive-into-hyperexecute-yaml)**.

### Step 4: Run Tests and View Job
Click on the **Run Test** button to start the test execution. A pop with job status and creation logs will appear with options to Expand and View Job. Click on the **View Job** button to get redirected to the job dashboard once the job is created. The HyperExecute-GUI displays the job logs in real-time as your tests run. Once complete, you can view the detailed test results in the HyperExecute Dashboard.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/demo_25.mp4').default} type="video/mp4" />
</video>

## FAQs

---

**1. Are Appium tests supported on GUI as of now?**

    No, Appium test support will be coming soon. Currently, the GUI is in beta and primarily supports TestNG framework.

**2. If my tests are written using Chrome Driver or any other local driver, can I use that project?**
    
    Yes, you can use the project, but the associated test IDs will not be created. You would need to enable the "Screen Recording For Scenarios" key to record the entire scenario execution, with the video accessible from the HyperExecute dashboard. (This is applicable for non-Selenium based tests)

**3. If I have a scenario where the project has two folders - one which creates the test dependencies and another which uses those dependencies to run the tests - how can I use that?**
    
    You would not be able to use such a project. Please ensure that each project is created from one folder only. We will be supporting this feature in the coming future.
