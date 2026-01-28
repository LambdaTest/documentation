---
id: hyperexecute-cli-gui
title: "HyperExecute GUI App"
hide_title: false
sidebar_label: HyperExecute GUI App
description: This documentation outlines the steps on how to trigger a job on hyperexecute using the underpass app - gui app for hyperexecute cli.
keywords:
  - TestMu AI
  - HyperExecute
  - TestMu AI HyperExecute
  - CLI
  - HyperExecute-GUI
  - test execute
  - hyperexecute job
  - automation
url: https://www.testmuai.com/support/docs/hyperexecute-cli-gui/
site_name: LambdaTest
slug: hyperexecute-cli-gui/
canonical: https://www.testmuai.com/support/docs/hyperexecute-cli-gui/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "HyperExecute Status",
          "item": `${BRAND_URL}/support/docs/hyperexecute-cli-gui/`
        }]
      })
    }}
></script>

**HyperExecute Graphical User Interface (GUI)** streamlines your test automation workflow and brings HyperExecute's power of test orchestration with the most intuitive way to interact. HyperExecute GUI makes testing simple, fast, and powerful. It abstracts all technical complexity to make **high-performance test execution available to everyone**. 

<!-- The goal is to save your valuable time and effort to enable a more efficient testing process. -->

## Why HyperExecute GUI?
---
**[HyperExecute](https://www.lambdatest.com/hyperexecute)** has been a **cornerstone for automation testing**, offering unparalleled flexibility with its YAML configurations and command-line interface. Now, with HyperExecute GUI, you can experience AI-powered test detection, set up test environments with simple clicks and run your tests without coding.

<img src={require('../assets/images/hyperexecute/gui/guilanding.png').default} />

## Prerequisites
---
:::info BETA

HyperExecute GUI is currently in **BETA** and supports the **Java TestNG Framework (with Java Version 11 or higher)**. We're actively working on expanding support for additional frameworks. If you have specific framework requests, please reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span>.

:::

**1. HyperExecute Access** : You need a <BrandName /> account to use the HyperExecute GUI. If you don’t have one, [sign up](https://accounts.lambdatest.com/register?) now. Ensure your account includes HyperExecute access (free or paid plan) to get started.

**2. UnderPass App Download** : Before getting started, download the <BrandName /> UnderPass installer from your dashboard and install it on your system. Run the installer by following the on-screen instructions and launch the application.

Currently HyperExecute GUI is a part of the **<BrandName /> UnderPass Application**. If you already have UnderPass app on your system, please update it to the latest version.

:::tip Download the GUI 🔗
You can download the app directly from your **HyperExecute Dashboard** or simply click the links below based on your operating system:
 - **[Download for MacOS](https://downloads.lambdatest.com/underpass/master/UnderPass.dmg)**
 - **[Download for Windows](https://downloads.lambdatest.com/underpass/master/UnderPass.exe)**
 - **[Download for Linux](https://downloads.lambdatest.com/underpass/master/UnderPass.AppImage)**
:::

<!-- ## Demo Walkthrough
---
For those who prefer a visual approach, we’ve created a comprehensive video tutorial to get you up and running quickly. All the steps taken in this video are explained in detail in the following step by step guide too.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/GUI_Demo.mp4').default} type="video/mp4" />
</video> -->

## Getting Started
---

### Step 1: Select and Analyze Your Project
Launch the application, log in with your <BrandName /> credentials, and select your test project folder. The GUI analyzes your project i.e. the framework and language, network connectivity etc. Once the analysis completes, click **"Proceed"** to continue to the next step.

<!-- - Detect your testing framework and language
- Verifies network connectivity (enabling a tunnel if needed) and checks <BrandName /> URL access (prompting for proxy settings if required)
- Set up a secure connection to your account -->

:::tip Sample Project 🔗
If you do not have a project handy, please feel free to use this **[Sample Project](https://github.com/LambdaTest/testng-selenium-hyperexecute-sample)** for trying out the GUI.
:::

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/projectselect_analyze.mp4').default} type="video/mp4" />
</video>

:::note Common Issues & Solutions
The GUI will check the system and your project to ensure everything is ready. If any issues are found, you'll see clear instructions to resolve them. Some common issues faced by the users are:
- **Missing programming language or package manager**: If your project uses a language or package manager that isn't installed on your computer, the GUI will guide you through installing it.
- **Network connectivity issues**: If the GUI can't connect to <BrandName /> servers, it will ask you to set up the necessary network settings through proxy.
:::

---

### Step 2: Manage Configurations
**A "Configuration"** is a saved combination of selected tests and execution settings that helps you create different run-profiles for easy management and operation.

- **For new users:** A default configuration will be created to help you get started quickly. You can select the tests and run config settings as per your requirements.
- **For existing users:** If you have existing configurations (version 0.2 YAML files) in the project, they'll be automatically imported, preserving all your settings. This ensures a smooth transition for existing HyperExecute users while providing a more intuitive interface.

#### Quick Edit and Run
At the configuration listing page you can find basic details and tags for each configuration. You can also **make quick changes and run the configuration** without going inside the configuration. There are a few other operations which you can access from this page like **Duplicate, Rename, Delete or Download the configuration as YAML.**

<img src={require('../assets/images/hyperexecute/gui/manage_config.png').default} />

<details><summary> **What is a Configuration?** </summary>A configuration is essentially a **complete test execution profile** that includes which specific tests to run from your test suite, all execution parameters (OS, concurrency, etc.), environment variables and other settings. Configurations eliminate the need to repeatedly select tests and adjust settings for common testing scenarios. For example, you might create separate configurations for smoke tests and full regression.</details>

  <!-- :::info Note
  At its current state, the GUI will not self-discover the tests according to rules stated in the YAML file while loading it. This feature will be available soon in next release.
  ::: -->

---

### Step 3: Discover and Select Tests
Once you navigate to any Configuration, the app will automatically initiate Test Discovery. **Test Discovery is an automated process** that scans your project to identify and organize all test cases of your project. You can use either of the following methods for Tests Selection

#### Manual Selection
Allows you to browse and select tests individually or in groups. Tests can be organized by **Suite Tests, Files, Classes or Methods** for better visibility and easier navigation. You can select or deselect tests manually using checkboxes. This method works well for smaller test suites or when you need precise control over specific test cases.

#### Query Selection
For larger test suites, the query selection provides powerful filtering capabilities to **automatically select tests based on specified criteria**. 
For detailed instructions on creating and using advanced queries, refer to our [Query Selection Guide](/support/docs/hyperexecute-gui-query).

 - **Orchestration Level:** When using query selection, you can define the orchestration level to determine how tests are **distributed and executed** across multiple parallel instances. This feature helps optimize execution time by intelligently grouping and distributing tests.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/testselection.mp4').default} type="video/mp4" />
</video>

<!-- :::info Coming Soon
Search within tests is not yet available on the GUI. We are working to make it available soon.
::: -->

---

### Step 4: Specify Run Config
The **Run Config tab** in HyperExecute GUI offers an intuitive visual interface to configure your test environment and execution settings.
You’ll find the basic preset configurations displayed just below your project name. If you need to modify or customize these settings, simply navigate to the Run Config tab and adjust your execution environment effortlessly — _no YAML editing required_.

To learn about any configuration in detail, please search for the keyword in the **[HyperExecute YAML Documentation](/support/docs/deep-dive-into-hyperexecute-yaml)**. Please note that the GUI follows version 0.2 YAML parameters instead of discovery and runner commands as in version 0.1 YAML which you can find [here](/support/docs/hyperexecute-yaml-version0.2).

---

### Step 5: Run Tests and View Job
Once you've set up your configuration by selecting the appropriate tests and reviewing your execution settings, you're ready to run your tests. The **"Run Tests"** button is available both from the configuration details screen and directly from the configurations listing page for quick access.

A sidebar panel with job status and creation logs will appear with option to navigate to HyperExecute Dashboard to view more details. The HyperExecute-GUI displays the job logs in real-time as your tests run. Once complete, you can view the detailed test results in the HyperExecute Dashboard.
<!-- Click on the **View Job** button to get redirected to the job dashboard once the job is created.  -->

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/job_run.mp4').default} type="video/mp4" />
</video>

## Already Using HyperExecute via YAML?
---
If you’re a HyperExecute version 0.2 YAML user, you can easily import your existing version 0.2 YAML configurations into the GUI. Here’s how:

<!-- #### 1. Pop-Up on First Upload:
  When you upload a project with YAML files, a **pop-up will automatically appear listing the existing YAMLs** in your project. Select a YAML file, and the app will import its settings for run config in the GUI.

#### 2. Option to Import After Project Creation: -->
Once your project is set up and you want to import a configuration using an existing YAML file :
  - Go to the Configuration Listing page.
  - Click on **"Import Config.”**
  - Choose a YAML file from your project, and its settings will be imported to a new configuration.


<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/import_config_new.mp4').default} type="video/mp4" />
</video>

## FAQs
---

<details><summary> 1. Are Appium tests supported on GUI as of now? </summary>No, Appium test support will be coming soon. Currently, the GUI is in beta and primarily supports TestNG framework with Selenium only.</details>

<details><summary> 2. If my tests are written using Chrome Driver or any other local driver, can I use that project? </summary>Yes, you can use the project, but the associated test IDs will not be created. You would need to enable the "Screen Recording For Scenarios" key to record the entire scenario execution, with the video accessible from the HyperExecute dashboard. (This is applicable for non-Selenium based tests)</details>  

<details><summary> 3. If I have a scenario where the project has two folders - one which creates the test dependencies and another which uses those dependencies to run the tests, how can I use that? </summary>You would not be able to use such a project. Please ensure that each project is created from one folder only. We will be supporting this feature in the future.</details>

<details><summary> 4. My test discovery failed on the HyperExecute GUI. What may be the most possible cause, and how do I fix it? </summary>Test discovery failures often stem from misconfigured environment variables or discovery flags when you may have private dependencies in your project. Here’s how to troubleshoot. You can try adding environment variables or discovery flags in the GUI itself which may be required to resolve the dependencies. You will find two types of Environment Variables - Local and Remote. Local environment variables are used for local discovery and it is advisable to add these without any secret values since these are stored on local environment only.</details>


    
    
