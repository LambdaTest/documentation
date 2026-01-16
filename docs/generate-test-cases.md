---
id: generate-test-cases-with-ai
title: Generate Test Cases with AI
hide_title: true
sidebar_label: Generate Test Cases with AI
description: Learn efficient test case generation with in TestMu AI's Test Manager using AI.
keywords:
  - test case creation
  - test case
  - test cases
  - generate test cases
url: https://www.testmu.ai/support/docs/generate-test-cases-with-ai/
site_name: LambdaTest
slug: generate-test-cases-with-ai
canonical: https://www.testmu.ai/support/docs/generate-test-cases-with-ai/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Generate Test Cases with AI",
          "item": `${BRAND_URL}/support/docs/generate-test-cases/`
        }]
      })
    }}
></script>

# AI Test Case Generator 

## What is the AI Test Case Generator?
The **AI Test Case Generator** is an intelligent feature within <BrandName /> Test Manager that allows users to convert various requirement formats (like text, PDFs, audio, videos, images, Jira tickets and more) into structured, contextual software test cases. It significantly accelerates the test case creation process while improving coverage and quality.
This feature is designed to save time, improve test coverage, and streamline the test design process for both manual and automated testing workflows.

## How It Works: Step-by-Step

### Step 1: Open the AI Test Case Generator
Go to the Test Case Listing page and click on `Generate With AI`. An input box will appear where you can provide your requirements.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/generate_with_ai_button.png').default} alt="generate-with-ai" width="1347" height="616"  className="doc_img"/>

### Step 2: Enter Your Requirements
Start by entering your product or feature requirements in the input box.

We support multiple input formats, including:
- **Textual requirements**
- **Jira/Azure DevOps links** (e.g., epics, stories, tasks)
- **PDFs** 
- **Images**
- **Audio** (recordings or uploads)
- **Videos**
- **Spreadsheets** (CSV or XLSX)
- **Documents**
- **JSON or XML**

### Add Input requirements:
#### Text Input: 

- Type your requirement directly into the input box.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/first_prompt_tets_cases_generation.png').default} alt="first_prompt_tets_cases_generation" width="1347" height="616"  className="doc_img"/>


#### Record Audio:
- Click the mic icon to begin recording, as shown in the picture.

:::note 
 Audio recording is not supported in Firefox, ARC and Opera browsers.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/recording_button_test_cases_generation.png').default} alt="recording_button_test_cases_generation" width="1347" height="616"  className="doc_img"/>

- Click the tick icon to confirm, or the cross to discard.
<img loading="lazy" src={require('../assets/images/mobile-app-testing/test_cases_generation_through_recording.png').default} alt="test_cases_generation_through_recording" width="1347" height="616"  className="doc_img"/>

#### Upload Files: 
- Click on the **pin** icon 📎, then select `Upload from device`.
- You can select a maximum of 10 files from your device.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/upload_from_device_test_cases_generation.png').default} alt="upload_from_device_test_cases_generation" width="1347" height="616"  className="doc_img"/>

- Uploaded files will appear within the input box.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/uploaded_files_test_cases_generation.png').default} alt="uploaded_files_test_cases_generation" width="1347" height="616"  className="doc_img"/>

#### Add Issue Links:
- Integrate your <BrandName /> account with Jira/Azure DevOps. Follow the steps described in the following link to integrate Jira/Azure DevOps:
[<BrandName /> Jira Integration](/support/docs/jira-integration/#how-to-establish-integration-with-jira-from-your-lambdatest-account) / [<BrandName /> Azure DevOps Integration](/support/docs/link-ado-issues-with-test-manager/)

- After integration is completed, select `Link Jira Issues` / `Link Azure DevOps Issues`.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/link_jira_test_cases_generation.png').default} alt="link_jira_test_cases_generation" width="1347" height="616"  className="doc_img"/>

- Enter your Jira/Azure DevOps issue ID or link and press Enter. 

:::note 
 Only issues from the connected Jira/Azure DevOps project can be linked here.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/jira_id_test_cases_generation.png').default} alt="jira_id_test_cases_generation" width="1347" height="616"  className="doc_img"/>

- The linked issue will then appear inside the input box.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/linked_jira_view_test_cases_generation.png').default} alt="linked_jira_view_test_cases_generation" width="1347" height="616"  className="doc_img"/>

### Step 3: Generate Test Cases
- Once all your input requirements are added, press **Enter** to start generating test cases.
- The AI will analyze the content and redirect you to a new screen where test cases will be suggested based on the input provided.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/ai_thinking_suggestions_test_cases_generation.png').default} alt="ai_thinking_suggestions_test_cases_generation" width="1347" height="616"  className="doc_img"/>

:::info
To end the test case generation while the Agent is thinking, click on the **Stop** button. 
:::

### Step 4: Review Test Cases Across Scenarios
- Test cases are grouped into high-level, logical test scenarios. Each scenario represents a theme or functional area for easier navigation and categorization.

- Scenarios are **labeled** with tags such as `Must have`, `Should have`, and `Could have`, indicating their relative importance as determined by the Agent.

- Individual test cases are further categorized with tags:
  - **Positive**: Valid test cases expected to pass.
  - **Negative**: Invalid or failure cases designed to test robustness.
  - **Edge**: Corner cases that may be overlooked in testing flows.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/ai_suggested_testcases.png').default} alt="ai_suggested_testcases" width="1347" height="616"  className="doc_img"/>

### Step 5: View and Edit Test Case Details
Click on any test case to explore its full details, including:
- Test Case Title
- Description
- Pre-conditions
- Priority
- Test Steps and Expected Outcomes


You can **edit** any part of the test case if you want to add more context or align it with your test strategy.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/edit_suggested_test_cases.png').default} alt="edit_suggested_test_cases" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/mobile-app-testing/edit_suggested_test_cases_steps.png').default} alt="edit_suggested_test_cases_steps" className="doc_img"/>

### Step 6: Edit and Regenerate
Want to try a different approach or add missing information? 

You can **edit your original input** and regenerate a new set of test cases. This allows you to experiment and fine-tune the output before saving.

:::note
When you regenerate, the previously generated test cases and scenarios are not retained.
:::

:::tip
Watch the thinking tokens during the Agent’s reasoning phase they show how your input is being interpreted. Use this insight to refine prompts and improve future test case generation.
:::

To edit, click on the pencil icon on the Summary listing page as shown below:

<img loading="lazy" src={require('../assets/images/mobile-app-testing/edit_test_cases_generation_prompt.png').default} alt="edit_test_cases_generation_prompt" width="1347" height="616"  className="doc_img"/>

Click on regenerate after updating the input.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/regenerate_test_cases_generation.png').default} alt="regenerate_test_cases_generation" width="1347" height="616"  className="doc_img"/>
### Step 7: Select and Save Test Cases
 Once satisfied, **select the test cases** you want to keep and **save them directly** to your **Test Case Repository** in <BrandName /> Test Manager. These saved test cases can then be assigned to test runs, shared with teams, or used in manual or automated test planning.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/save_generated_test_cases.png').default} alt="save_generated_test_cases" width="1347" height="616"  className="doc_img"/>

<img loading="lazy" src={require('../assets/images/mobile-app-testing/test_cases_generation_ack.png').default} alt="test_cases_generation_ack" width="1347" height="616"  className="doc_img"/>
