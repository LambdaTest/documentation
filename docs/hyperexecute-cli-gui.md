---
id: hyperexecute-cli-gui
title: HyperExecute-GUI
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
> Currently in the **Beta**.

HyperExecute currently requires writing [YAML](https://www.lambdatest.com/support/docs/hyperexecute-yaml-parameters/) files and using specific [CLI](https://www.lambdatest.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) commands to trigger tests. This process can be a hurdle if you are new to YAML or unfamiliar with the specific flags and functionalities supported by HyperExecute.

The HyperExecute-GUI simplifies test execution by providing a user-friendly graphical interface. This eliminates the need to write YAML files or memorize complex commands, saving you time and effort.

> **NOTE :** Currently we only support TestNG framework.

## Steps to trigger your tests using the HyperExecute-GUI

### Step 1: Download and Install the Underpass App
Download the HyperExecute-GUI installer from the LambdaTest dashboard and follow the on-screen installation instructions.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/step1.mp4').default} type="video/mp4" />
</video>

### Step 2: Login and Project Selection
Launch the HyperExecute-GUI and log in using your existing LambdaTest credentials. If you're new, start your free trial. After signing in, you will have to browse your desired project from your local system.

<img loading="lazy" src={require('../assets/videos/hyperexecute/cli-gui/step2.png').default} alt="project-hyperexecute" className="doc_img "/><br/><br/>

### Step 3: Project Details and Analysis
The HyperExecute-GUI will automatically analyze your test scripts and detect your project's framework and language. It will then check all the dependencies required to execute your project.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/step3.mp4').default} type="video/mp4" />
</video>

Now click on the Proceed button.

### Step 4: Test Discovery and Selection
The HyperExecute-GUI will automatically discover all the test cases within your project and display them in a list. You can easily select individual tests, an entire test project, or a group of suites to execute based on your needs.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/step4.mp4').default} type="video/mp4" />
</video>

### Step 5: Test Execution Configuration
After selecting the necessary tests, you will have to to configure your project by specifying the [OS](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#runson), [concurrency](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#concurrency) (number of tests to run simultaneously), [retry on failure](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#retryonfailure), and a [job label](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#joblabel) for easy identification to execute on the HyperExecute dashboard.

> To understand in detail what these configurations are, you can go through our [HyperExecute YAML](https://lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml) documentation.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/step5.mp4').default} type="video/mp4" />
</video>

### Step 6: Run the Tests
Click on the "Run Test" button to start the test execution. Click on the "View Job" button to get redirected to the HyperExecute dashboard.

### Monitor and View Results
The HyperExecute-GUI displays the job logs in real-time as your tests run. Once complete, you can view the detailed test results in the HyperExecute Dashboard.