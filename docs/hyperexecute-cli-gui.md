---
id: hyperexecute-cli-gui
title: "HyperExecute-GUI App: A Simplified Approach to Test Execution"
hide_title: false
sidebar_label: HyperExecute-GUI
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
:::note
The HyperExecute GUI is currently in **BETA**.

At this stage, it only supports the **TestNG framework** from the [available languages and frameworks](https://www.lambdatest.com/support/docs/hyperexecute-supported-languages-and-frameworks/) in HyperExecute. If you have specific requests for additional framework and language support, please reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span>.
:::

HyperExecute has been a cornerstone for automation testing, offering unparalleled flexibility with its [YAML](https://www.lambdatest.com/support/docs/hyperexecute-yaml-parameters/) configurations and [command-line interface](https://www.lambdatest.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/). To further elevate your testing experience, we are introducing the new HyperExecute-GUI, a user-friendly graphic interface designed to simplify your test execution process.

With HyperExecute-GUI, you can seamlessly leverage the full capabilities of HyperExecute without the need for YAML files or command-line interactions. This intuitive graphical interface allows you to execute your existing test scripts with ease, saving you valuable time and effort and enabling a more efficient and effective testing process.

## Steps to trigger your tests

### Step 1: Download and Install the  HyperExecute-GUI installer
To begin, access the LambdaTest dashboard and download the HyperExecute-GUI installer (as demonstrated in the video below). This tool is essential for triggering your tests through a user-friendly interface. After downloading, install the application on your system.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/step1.mp4').default} type="video/mp4" />
</video>

### Step 2: Browse your Project
Launch the HyperExecute-GUI installer app and log in using your existing LambdaTest credentials. If you're new to LambdaTest, you can start by signing up for a free trial. Once logged in, browse your project from your local system to begin the test setup.

<img loading="lazy" src={require('../assets/videos/hyperexecute/cli-gui/step2.png').default} alt="project-hyperexecute" className="doc_img "/><br/><br/>

### Step 3: Analyze Project Details
After uploading your project, the HyperExecute-GUI will automatically analyze your test scripts to identify the framework and language used. The GUI will then verify and check all required dependencies to ensure your project is ready for execution.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/step3.mp4').default} type="video/mp4" />
</video>

Now click on the Proceed button to move to the next step.

### Step 4: Discover and Select Tests
HyperExecute-GUI will automatically identify all test cases within your project and present them in a comprehensive list. You can then select specific tests, an entire test project, or groups of test suites according to your needs and preferences.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/step4.mp4').default} type="video/mp4" />
</video>

### Step 5: Test Execution Configuration
Before executing your tests, customize the test run settings. Specify the [operating system](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#runson), [concurrency](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#concurrency) level to optimize performance, and [retries](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#retryonfailure) for failed tests and add a [job label](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#joblabel) for easy identification and tracking.

> **Note :** For detailed information on these configuration options, please refer to our [HyperExecute YAML](https://lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml) documentation.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/step5.mp4').default} type="video/mp4" />
</video>

### Step 6: Run the Tests
Click on the "Run Test" button to start the test execution. Click on the "View Job" button to get redirected to the HyperExecute dashboard.

### Monitor and View Results
The HyperExecute-GUI displays the job logs in real-time as your tests run. Once complete, you can view the detailed test results in the HyperExecute Dashboard.