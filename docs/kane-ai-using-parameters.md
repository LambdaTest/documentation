---
id: kane-ai-using-parameters
title: KaneAI - Using Parameters
hide_title: false
sidebar_label: Parameters
description: Learn how to use parameters in the KaneAI test cases
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai scroll elements
  - kaneai sidebar scroll
url: https://www.lambdatest.com/support/docs/kane-ai-using-parameters/
site_name: LambdaTest
slug: kane-ai-using-parameters/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "KaneAI Parameters",
          "item": "https://www.lambdatest.com/support/docs/kane-ai-using-parameters/"
        }]
      })
    }}
></script>
This guide provides a detailed walkthrough for utilizing parameters in KaneAI to streamline test case management and execute tests with various data inputs. By leveraging parameters such as `name`, `age`, and `phone_number`, testers and developers can manage configurations effortlessly. Follow the step-by-step instructions below for successful implementation.

## Key Features of Parameters in KaneAI
- **Dynamic Data Input :** Use parameters to define and input test data dynamically during test execution.
- **Multiple Configurations :** Simplify the execution of tests with different data sets.
- **Seamless Test Management :** Centralized management of parameters improves efficiency and reduces redundancy.

## Step 1: Define Parameters in a Web Agent Test
- Navigate to the specific web agent test URL.
- Prepare the test to accept inputs for `name`, `age`, and `phone_number` as parameters.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/1.png').default} alt="Image" className="doc_img"/>

## Step 2: Create the Phone Number Parameter
- Confirm that parameters for `name` and `age` are already defined in the system. To add a new parameter for `phone_number`, use one of the following methods to define the parameter:
  - Type a **`slash (/)`** and select the Parameter option.
  - Click the Plus icon and choose the Parameter icon.

Assign a name such as `phone_number` and enter a default value (e.g., 123-456-7890). Click **Create Parameter** to save.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/3.png').default} alt="Image" className="doc_img"/>

## Step 3: Finalize the Parameter
Reference any parameter using **$curly braces syntax** (e.g.,`${phone_number}`). Enter the name in its designated input field.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/4.png').default} alt="Image" className="doc_img"/>

## Step 4: Input Additional Data
Input values for the age and phone number fields.
Execute the test as usual.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/5.png').default} alt="Image" className="doc_img"/>

## Step 5: Submit and Review Parameters
- Access the parameter list for navigation.
- Click Submit to confirm the data inputs.
- Finalize by clicking Finish Test.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/6.png').default} alt="Image" className="doc_img"/>

## Step 6: Test Summary Page
Upon completing the test, review the Test Summary Page, where all utilized parameters are clearly displayed, and the corresponding generated code is readily available for seamless integration into future test scenarios.
<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/7.png').default} alt="Image" className="doc_img"/>

## Step 7: Navigate to Test Project
Open the Test Project dashboard and go to the **Test Run** section.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/8.png').default} alt="Image" className="doc_img"/>

## Step 8: Create a New Test Run
- Click **Create New Test Run** and name it (e.g., parameters test run).
- Select the KaneAI-generated test cases.
- Optionally, add a description or relevant tags.
- Click **Create Test Run**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/9.png').default} alt="Image" className="doc_img"/>

## Step 9: Add Test Cases and Data Sets
- Select and add the desired test cases to the run.
- Specify configurations (e.g., Windows 10 Chrome).
- Attach the required data sets for the test run.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/10.png').default} alt="Image" className="doc_img"/>

## Step 10: Apply Data Sets
- Ensure the data sets containing necessary parameters are pre-filtered and accessible.
- Click **Apply** to confirm the Dataset selection.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/11.png').default} alt="Image" className="doc_img"/>

## Step 11: Save and Prepare for Execution
- Save the test run with the selected parameters and Datasets. The system will create test instances ready for execution in a hybrid environment.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/12.png').default} alt="Image" className="doc_img"/>

## Step 12: Execute Tests with Parameters
Utilize the parameters to run your test cases with different data sets and inputs. You can manage and monitor execution using the LambdaTest Test Manager interface.

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/13.png').default} alt="Image" className="doc_img"/>

## Video Explanation
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/parameters/output.mp4').default} type="video/mp4" />
</video>
