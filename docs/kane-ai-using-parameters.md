---
id: kane-ai-using-parameters
title: How to Use Parameters With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Parameters
description: Parameterize KaneAI test cases to run one test across many data inputs without duplicating the test.
keywords:
  - testmu ai automation
  - testmu ai kaneai
url: https://www.testmuai.com/support/docs/kane-ai-using-parameters/
site_name: TestMu AI
slug: kane-ai-using-parameters/
canonical: https://www.testmuai.com/support/docs/kane-ai-using-parameters/
---

import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Parameters",
          "item": `${BRAND_URL}/support/docs/kane-ai-using-parameters/`
        }]
      })
    }}
></script>

# How to Use Parameters With KaneAI
***

Parameters let a single KaneAI test case run against many data inputs, so one test covers multiple scenarios without duplication. This page shows how to create parameters, reference them in steps, and run a test across different data. To manage the input values themselves, see [KaneAI Using Datasets](/support/docs/kane-ai-using-datasets/).

## Key Features of Parameters
***

Parameters make one test reusable across different data and environments, through three capabilities:

- **Dynamic data input:** define and input test data at execution time.
- **Multiple configurations:** run one test against different data sets.
- **Centralized management:** manage parameters in one place to reduce redundancy.

## Create and Use a Parameter
***

Follow these steps to define a parameter and reference it in a test step.

### Step 1: Configure the Test for Parameters
***

Open the web agent test URL and configure the test to accept input parameters.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/1.png').default} alt="Configure the Test for Parameters" className="doc_img"/>

**Result:** The test is ready to accept parameter definitions.

### Step 2: Create a Parameter
***

Add a new parameter using one of the following methods.
  - Type a **`slash (/)`** and select the **Parameter** option.
  - Click the plus icon and choose the **Parameter** icon.

Click **Create Parameter** to save.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/3.png').default} alt="Create a Parameter" className="doc_img"/>

**Result:** The parameter is defined and available to reference in steps.

### Step 3: Reference a Parameter
***

Reference a parameter using **dollar-curly braces syntax** (e.g.,`${phone_number}`). Enter the name in its designated input field.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/4.png').default} alt="Reference a Parameter" className="doc_img"/>

**Result:** The step uses the parameter value instead of a hardcoded one.

## Parameterize a Manual Interaction Step
***

Convert a hard-coded value in a Manual Interaction step into a parameter directly, without deleting or re-recording the step. This flow works on both **Desktop** and **Mobile App** Manual Interaction sessions.

1. Open the recorded Manual Interaction step.
2. **Select the portion** of the instruction text you want to parameterize (for example, highlight `test.com`).
<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/HighlightScreenshot.png').default} alt="Parameterize a Manual Interaction Step" className="doc_img img_center"/>
3. In the **Convert as** popover, switch to the **`{$}` Parameter** tab.
4. Pick an existing parameter from the searchable list, or click **`+` Create Parameter** to define a new one inline.
5. The selected text is replaced with the parameter reference (for example, `{{search_query}}`). The parameterized step is now ready for data-driven execution.

:::note
This flow is supported only for `Click` and `Type` commands. For the full Convert as behavior across Parameters, Variables, and Secrets, see how to [create variables and secrets in KaneAI](/support/docs/kane-ai-using-variables/#from-a-manual-interaction-step).
:::

## Review Parameters on the Test Summary Page
***

When the test finishes, open the Test Summary page. It lists every parameter used and provides the generated code for reuse in future tests.
<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/7.png').default} alt="Review Parameters on the Test Summary Page" className="doc_img"/>

## Run a Test With Parameters
***

Follow these steps to create a test run, attach datasets, and execute across every input.

### Step 4: Open the Test Project
***

Open the Test Project dashboard and go to the **Test Run** section.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/8.png').default} alt="Open the Test Project" className="doc_img"/>

**Result:** The Test Run section is ready for a new run.

### Step 5: Create a Test Run
***

Set up the run and select which test cases it covers.
- Click **Create New Test Run** and name it (for example, parameters test run).
- Select the KaneAI-generated test cases.
- Optionally, add a description or tags.
- Click **Create Test Run**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/9.png').default} alt="Create a Test Run" className="doc_img"/>

**Result:** The test run is created with the selected test cases.

### Step 6: Add Test Cases and Configuration
***

Add the test cases and specify how they run.
- Select and add the desired test cases to the run.
- Specify configurations (for example, Windows 10 Chrome).
- Attach the datasets required for the run.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/10.png').default} alt="Add Test Cases and Configuration" className="doc_img"/>

**Result:** The run has its test cases, platform configuration, and datasets attached.

### Step 7: Apply the Datasets
***

Confirm which datasets supply the parameter values.
- Ensure the datasets containing the parameters are filtered and accessible.
- Click **Apply** to confirm the dataset selection.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/11.png').default} alt="Apply the Datasets" className="doc_img"/>

**Result:** The selected datasets are bound to the run.

### Step 8: Save for Execution
***

Save the test run with the selected parameters and datasets. KaneAI creates test instances ready for execution.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/12.png').default} alt="Save for Execution" className="doc_img"/>

**Result:** Test instances are queued and ready to run.

### Step 9: Execute With Parameters
***

Run the test cases across the different datasets and inputs. Manage and monitor execution from the TestMu AI Test Manager.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/13.png').default} alt="Execute With Parameters" className="doc_img"/>

**Result:** Each test case runs once per dataset row, covering every input combination.

## Video Explanation
***

Watch a parameterized test run created and executed end to end.
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/parameters/output.mp4').default} type="video/mp4" />
</video>

## Next Steps
***

Extend data-driven tests with live data and exported code.

- Pull inputs from a live database with [KaneAI Database](/support/docs/kaneai-database/).
- Export the run as a framework test with [KaneAI Automation Code Generation](/support/docs/kane-ai-automation-code-generation/).
