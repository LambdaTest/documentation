---
id: hyperexecute-cli-gui
title: "HyperExecute CLI Web View"
hide_title: false
sidebar_label: HyperExecute CLI Web View
description: This documentation outlines the steps on how to create YAML using HyperExecute CLI Web View using user friendly UI components.
keywords:
  - LambdaTest
  - HyperExecute
  - LambdaTest HyperExecute
  - CLI Web View
  - HyperExecute-CLI
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

**HyperExecute CLI Web View** streamlines your test automation workflow and brings HyperExecute's porchestration capabilities in a highly intuitive interface. The CLI Web View makes YAML generation simple and intuitive. It abstracts all technical complexity to make **high-performance test execution available to everyone**. 

<!-- The goal is to save your valuable time and effort to enable a more efficient testing process. -->

## Overview
---
**[HyperExecute](https://www.lambdatest.com/hyperexecute)** has been a **cornerstone for automation testing**, offering unparalleled flexibility with its YAML configurations and command-line interface. Now, with the CLI web view, you can experience simplified setup via clicks, and run your tests without worrying about hand-crafting YAMLs.
<!-- <img src={require('../assets/images/hyperexecute/gui/guilanding.png').default} /> -->

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/Utilizing_HyperExecute_CLI_Web_View.mp4').default} type="video/mp4" />
</video>

## Prerequisites
---
:::info BETA

HyperExecute CLI Web View is currently in **BETA**. If you encounter issues or have feature requests, please reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span>.

:::

**1. HyperExecute Access** : You need a LambdaTest account to use the HyperExecute CLI Web View. If you don’t have one, [sign up](https://accounts.lambdatest.com/register?) now. Ensure your account includes HyperExecute access (free or paid plan) to get started.

**2. Testing Project** : To check how HyperExecute CLI web view works, you would need a valid QA automation project configured on your system.

**3. HyperExecute CLI Download** : Download the latest [HyperExecute CLI.](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) Place the binary in your project’s root folder and ensure it has execution permission. 


:::tip Sample Project 🔗
If you do not have a project handy, please feel free to use this **[Sample Project](https://github.com/LambdaTest/testng-selenium-hyperexecute-sample)** for trying out.
:::

<!-- ## Demo Walkthrough
---
For those who prefer a visual approach, we’ve created a comprehensive video tutorial to get you up and running quickly. All the steps taken in this video are explained in detail in the following step by step guide too.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/GUI_Demo.mp4').default} type="video/mp4" />
</video> -->

## Getting Started
---

### Step 1: Download and Add the CLI to Project
Begin by visiting the link provided in the prerequisites to download the HyperExecute CLI compatible with your operating system. After downloading, move the CLI binary to the root of your project folder.

> **NOTE :** On macOS or Linux, if you receive a “permission denied” error, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

<!-- - Detect your testing framework and language
- Verifies network connectivity (enabling a tunnel if needed) and checks LambdaTest URL access (prompting for proxy settings if required)
- Set up a secure connection to your account -->

<!-- <video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/projectselect_analyze.mp4').default} type="video/mp4" />
</video> -->
---

### Step 2: Run CLI Web Command
To access the CLI web view simply follow the following steps:
- Type `./hyperexecute web` in the terminal in the root of your project.
- A link will be generated; copy this link and paste in your browser window.
- Log in to access the CLI web view.
---

### Step 3: Project Analysis
The language and framework of your project will be automatically analyzed. Necessary network connectivity will also be auto-verified. If detection fails or you see an error, you may manually select the framework/platform your project uses.
 Once done, click on 'Proceed' to continue.

<!-- :::note Common Issues & Solutions
The GUI will check the system and your project to ensure everything is ready. If any issues are found, you'll see clear instructions to resolve them. Some common issues faced by the users are:
- **Missing programming language or package manager**: If your project uses a language or package manager that isn't installed on your computer, the GUI will guide you through installing it.
- **Network connectivity issues**: If the GUI can't connect to LambdaTest servers, it will ask you to set up the necessary network settings through proxy.
::: -->

---

### Step 4: YAML Creation using CLI Web View
You’ll land on the Web View interface which has two main panels:
- On the **right side**,  a live YAML editor displaying a sample YAML configuration for the framework & language selected.
- On the **left-hand side**, you'll find general settings that you can modify via **UI components**, eliminating the need for YAML knowledge. However, if you are proficient with YAML, you may opt to edit the YAML directly.

<img loading="lazy" src={require('../assets/images/hyperexecute/cli/cli_web_view.png').default} alt="TestNG HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

---

### Step 5: Configure General Settings and Run
Before you run your tests, you may need to make changes to the general settings as per the project you are choosing to run. For the sample project, this configuration is already set up. 
- Within the general settings, select the operating system and concurrency (parallel sessions) for your project. 
- Additionally, include any prerequisite steps necessary before executing on the HyperExecute machine, such as Maven commands.
- Define the test discovery and test runner commands with the required flags.

Now, simply click "Run Tests" to initiate the process, and the job will appear on your HyperExecute dashboard. 

> If you are using the Sample Project, please feel free to skip the above step.



    
    
