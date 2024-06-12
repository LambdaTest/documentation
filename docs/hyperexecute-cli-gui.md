---
id: hyperexecute-cli-gui
title: HyperExecute CLI with GUI- Effortless Setup and Execution for Automated Tests
hide_title: false
sidebar_label: CLI with GUI
description: This documentation outlines the steps on how to trigger a job on hyperexecute using the underpass app - gui app for hyperexecute cli.
keywords:
  - LambdaTest
  - HyperExecute
  - LambdaTest HyperExecute
  - CLI
  - GUI
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

When you trigger a job on HyperExecute, it currently requires you to write a YAML file and execute it through the CLI. This process can be a hurdle, especially if you're new to YAML or unfamiliar with the specific flags and functionalities supported by the HyperExecute CLI. These functionalities might include things like specifying the test environment, setting the desired concurrency level, or configuring other flags.

The HyperExecute CLI with GUI simplifies test execution by providing a user-friendly graphical interface. This eliminates the need to write YAML files or memorize complex commands, saving you time and effort.

## Steps to trigger your tests using the HyperExecute CLI with GUI

### Step 1: Download and Install the Underpass App
Download the HyperExecute CLI with GUI installer from the HyperExecute website and follow the on-screen installation instructions.

### Step 2: Login and Project Selection
Launch the GUI and log in using your existing HyperExecute credentials. If you're new, start your free trial. The application will display a list of your existing projects.

### Step 3: Project Details and Analysis
Select your project to view the details screen. The GUI automatically analyzes your test scripts to detect the programming language and testing framework used. You can confirm this information or manually correct it if needed. The system also checks for pre-requisites like libraries and helps you install any missing ones

### Step 4: Test Discovery and Selection
The GUI automatically discovers all test cases within your project and displays them in a list. You can easily select individual tests, entire test suites, or groups of tests to execute based on your needs.

### Step 5: Test Execution Configuration (Optional)
If needed, you can define custom environment variables and parameters for your test run in the Add Environment Screen.

### Step 6: Run the Tests
Configure your test execution by specifying the mode (local/remote), platform (browser/device), desired level of concurrency (number of tests to run simultaneously), retry options, and a job label for easy identification. Click the "Run" button to start the test execution.

### Monitor and View Results
The GUI displays the job logs in real-time as your tests run. Once complete, you can view the detailed test results in the HyperExecute Dashboard.