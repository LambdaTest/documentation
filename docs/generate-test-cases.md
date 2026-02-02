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
url: https://www.testmuai.com/support/docs/generate-test-cases-with-ai/
site_name: LambdaTest
slug: generate-test-cases-with-ai/
canonical: https://www.testmuai.com/support/docs/generate-test-cases-with-ai/
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
The **AI Test Case Generator** is an intelligent feature within <BrandName /> Test Manager and KaneAI that allows users to convert various requirement formats (like text, PDFs, audio, videos, images, Jira tickets and more) into structured, contextual software test cases. It significantly accelerates the test case creation process while improving coverage and quality.

This feature is designed to save time, improve test coverage, and streamline the test design process for both manual and automated testing workflows.

---

## Highlights

### Conversation Layer
Refine, correct, expand, and restructure your AI-generated test scenarios and test cases using natural language — no manual editing required. The Conversation Layer brings a **chat-driven workflow** directly into your generation session, letting you iterate in real time without starting over.

- **Natural language control** — Describe changes in plain English, and the AI applies them instantly.
- **Live streaming updates** — Watch scenarios and test cases update in real time as the AI processes your request.
- **Precise targeting** — Use `@` references to target specific scenarios or test cases for modification.
- **Context-aware** — The AI retains your full session context including uploaded files, linked issues, and prior instructions.
- **File-based refinement** — Upload updated specs or requirements mid-session and ask the AI to fill coverage gaps.

### Custom Instructions

Custom instructions allow you to define persistent guidelines that the AI follows during test case generation. These instructions ensure that generated test cases align with your team's testing standards, naming conventions, and quality requirements.

When you provide custom instructions, they are included as additional context alongside your prompt and requirements. The AI uses these instructions to shape the structure, language, coverage, and style of the generated test cases.

Custom instructions are supported at two levels:

| Level | Scope | Use Case |
|-------|-------|----------|
| **Project-Level** | Applies to all generation sessions within a specific project | Project-specific conventions, domain terminology, or testing focus areas |
| **Organization-Level** | Applies across all projects in your organization | Company-wide testing standards, compliance requirements, or formatting guidelines |

When both levels are configured, the AI combines organization-level and project-level instructions, with project-level instructions taking precedence in case of conflicts.

### Project-Level Custom Instructions

Project-level instructions are specific to a single project and are applied whenever test cases are generated within that project.

**To configure project-level custom instructions:**

1. Navigate to your project in **Test Manager**.
2. Open the project settings.
3. Locate the **Project Instructions** section.
4. Enter your instructions in the text field.
5. Save your changes.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/custom_instructions_project_settings.png').default} alt="custom-instructions-project-settings" width="1347" height="616" className="doc_img"/>

**Example project-level instructions:**
```
- All test cases must include preconditions for user authentication state.
- Use the naming convention: [Module]_[Feature]_[Scenario]_[Positive/Negative].
- Include API response codes in expected results for all API-related test cases.
```

### Organization-Level Custom Instructions

Organization-level instructions apply globally across all projects within your organization. They are ideal for enforcing company-wide standards.

**To configure organization-level custom instructions:**

1. Navigate to the **Settings** in Test Manager sidebar.
2. Locate the **Org Instructions** configuration section.
3. Enter your organization-wide instructions.
4. Save your changes.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/custom_instructions_org_settings.png').default} alt="custom-instructions-org-settings" width="1347" height="616" className="doc_img"/>

**Example organization-level instructions:**
```
- Include accessibility testing considerations where applicable.
- Severity and priority must be assigned to every test case.
- Test data should use anonymized values, never production data.
```

---

### Smart Context: Memory Layer

The **Memory Layer** is an intelligent context retrieval system that enhances AI test case generation by leveraging your existing test case repository. It ensures that newly generated test cases are aware of your current test coverage, avoid duplicates, and build upon your existing work.

### How It Works

When you initiate a test case generation session, the following process occurs automatically:

1. **Input Analysis** — The AI analyzes your prompt, requirements, and custom instructions.
2. **Context Retrieval** — The system queries a vector database to retrieve the most relevant existing test cases from your test case repository.
3. **Context-Aware Generation** — The retrieved content is embedded into the prompt sent to the AI, enabling it to generate test cases that are aware of your existing coverage, non-duplicative, and complementary to your current test suite.

### Benefits

- **Duplicate Prevention** — The AI recognizes test cases that already exist in your repository and avoids regenerating them.
- **Contextual Relevance** — New test cases are informed by the language, structure, and patterns used in your existing test suite.
- **Incremental Improvement** — Each generation session builds upon your accumulated testing knowledge.
:::note
The Memory Layer operates automatically in the background, you can choose to enable or disable Memory enhancement feature before triggering a session.
:::
---

## Generate Test Cases: Step-by-Step

### Step 1: Open the AI Test Case Generator
You can access the AI Test Case Generator from two entry points:

**From Test Manager:**
Navigate to the **Test Case Listing** page within your project and click on `Generate With AI`. An input box will appear where you can provide your requirements.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/generate_with_ai_button.png').default} alt="generate-with-ai" width="1347" height="616"  className="doc_img"/>

**From KaneAI:**
Navigate to the **Agent** page in KaneAI and select `Generate Scenarios`. This opens the same AI Test Case Generator interface.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/generate_scenarios_kaneai.png').default} alt="generate-scenarios-kaneai" width="1347" height="616" className="doc_img"/>

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

#### Add Input Requirements

##### Text Input

- Type your requirement directly into the input box.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/first_prompt_tets_cases_generation.png').default} alt="first_prompt_tets_cases_generation" width="1347" height="616"  className="doc_img"/>

##### Record Audio
- Click the mic icon to begin recording, as shown in the picture.

:::note
 Audio recording is not supported in Firefox, ARC and Opera browsers.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/recording_button_test_cases_generation.png').default} alt="recording_button_test_cases_generation" width="1347" height="616"  className="doc_img"/>

- Click the tick icon to confirm, or the cross to discard.
<img loading="lazy" src={require('../assets/images/mobile-app-testing/test_cases_generation_through_recording.png').default} alt="test_cases_generation_through_recording" width="1347" height="616"  className="doc_img"/>

##### Upload Files
- Click on the **pin** icon 📎, then select `Upload from device`.
- You can select a maximum of 10 files from your device.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/upload_from_device_test_cases_generation.png').default} alt="upload_from_device_test_cases_generation" width="1347" height="616"  className="doc_img"/>

- Uploaded files will appear within the input box.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/uploaded_files_test_cases_generation.png').default} alt="uploaded_files_test_cases_generation" width="1347" height="616"  className="doc_img"/>

##### Add Issue Links
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

##### Configure Generation Settings
Before triggering a generation session, you can configure the following settings to control the AI's output:

| Setting | Description |
|---------|-------------|
| **Max Test Scenarios** | Set the maximum number of test scenarios the AI will generate in the session |
| **Max Test Cases per Scenario** | Set the upper limit for test cases within each individual scenario |
| **Memory Enhancement** | Toggle to enable or disable the [Smart Context: Memory Layer](#smart-context-memory-layer), which retrieves relevant existing test cases from your repository to improve generation quality |
| **Project Instructions** | View and verify the [project-level custom instructions](#project-level-custom-instructions) that will be applied to the session |

<img loading="lazy" src={require('../assets/images/mobile-app-testing/configure_generation_settings.png').default} alt="configure-generation-settings" width="1347" height="616" className="doc_img"/>

:::tip
Configure these settings before pressing Enter to ensure the AI generates test cases aligned with your session requirements. Organization-level instructions, if configured, are automatically applied in addition to project instructions.
:::

### Step 3: Generate Test Cases
- Once all your input requirements are added (along with any custom instructions), press **Enter** to start generating test cases.
- The AI analyzes your input, retrieves relevant context from your existing test case repository via the [Smart Context: Memory Layer](#smart-context-memory-layer), and generates test cases that are both comprehensive and non-duplicative.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/ai_thinking_suggestions_test_cases_generation.png').default} alt="ai_thinking_suggestions_test_cases_generation" width="1347" height="616"  className="doc_img"/>

:::info
To end the test case generation while the Agent is thinking, click on the **Stop Generating** button.
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

### Step 6: Refine with the Conversation Layer
Use the **Conversation Layer** to iteratively refine your scenarios and test cases through natural language. Instead of manually editing each test case or regenerating everything from scratch, describe what you want changed in the chat panel, and the AI applies the modifications in real time.

<!-- <img loading="lazy" src={require('../assets/images/mobile-app-testing/conversation_layer_overview.png').default} alt="conversation-layer-overview" width="1347" height="616" className="doc_img"/> -->

#### Conversational Workspace

When the Conversation Layer is active, the workspace is divided into two primary panels:

<img loading="lazy" src={require('../assets/images/mobile-app-testing/conversation_layer_workspace.png').default} alt="conversation-layer-workspace" width="1347" height="616" className="doc_img"/>

**Chat Interface (Left Panel)**

The left panel is your chat interface for refining test output:
- **Message input** — Type your refinement instructions in natural language at the bottom of the panel.
- **Conversation history** — All messages and AI responses are preserved within the session.
- **@ Autocomplete** — Type `@` to trigger an autocomplete dropdown for referencing specific scenarios or test cases.
- **File attachments** — Attach files directly within the conversation using the attachment button.
- **Confirmation prompts** — The AI asks for confirmation when a change affects more than 5 test cases.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/chat_interface_panel.png').default} alt="chat-interface-panel" width="1347" height="616" className="doc_img"/>

**Live Output View (Right Panel)**

The right panel is the primary workspace showing your generated test scenarios and test cases:
- **Real-time updates** — Affected scenarios and test cases update with a streaming animation as changes are processed.
- **Scenario cards** — Each scenario is displayed as an expandable card containing its test cases.
- **Visual indicators** — Scenarios and test cases being modified are visually highlighted during streaming.
- **Full test case details** — Expand any test case to view its steps, expected results, preconditions, and other fields.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/live_output_view.png').default} alt="live-output-view" width="1347" height="616" className="doc_img"/>

**Session Context Drawer**

To review the context used for your current generation session, click the **pencil icon** located just above the chat input box at the bottom left. This opens a side drawer displaying:
- **Attached Files** — All files uploaded during the session.
- **Organization Instructions** — Organization-level custom instructions applied to the session.
- **Project Instructions** — Project-level custom instructions applied to the session.
- **Linked Issues** — Jira or Azure DevOps issues linked to the session.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/session_context_drawer.png').default} alt="session-context-drawer" width="1347" height="616" className="doc_img"/>

Use the context drawer to verify that the AI is working with the correct inputs. You can review linked issues, attached files, and the custom instructions being applied before sending refinement messages.

#### Conversational Refinement

**How It Works:**

1. **You send a message** in the chat interface describing what you want to change.
2. **The AI interprets your intent** and determines which scenarios or test cases to modify.
3. **Changes stream in real time** to the live output view on the right.
4. **You review and iterate** — send follow-up messages to fine-tune further.

**Supported Actions:**

| Action | Example |
|--------|---------|
| **Modify a scenario** | `Update @S2 to focus only on the admin user role` |
| **Modify a test case** | `Update Test Case @S1.C2, and change the expected result to show a validation error` |
| **Add new test cases** | `Add 3 negative test cases to @S1 covering invalid inputs` |
| **Add new scenarios** | `Create a new scenario for API rate limiting with at least 5 test cases` |
| **Expand coverage** | `Add boundary value test cases for the quantity field in @S2` |
| **Fill coverage gaps** | `I've uploaded the updated spec. Identify coverage gaps and add test cases across scenarios.` |
| **Apply common steps** | `Add "User logs in with valid credentials" as the first step in all test cases across @S1 and @S2` |

#### @ Referencing System

The `@` referencing system allows you to precisely target specific scenarios or test cases in your messages.

| Reference | Example |
|-----------|---------|
| Scenario | `@S1`, `@S3` |
| Test Case | `@S1.C1`, `@S2.C4` |

**Using Autocomplete:**

1. Type `@` in the conversation input.
2. An autocomplete dropdown appears showing all available scenarios and test cases.
3. Start typing to filter the list (e.g., `@S2` filters to scenarios, `@S2.*` filters to test cases in Scenario 2).
4. Click or press **Enter** to select the reference.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/at_reference_autocomplete.png').default} alt="at-reference-autocomplete" width="1347" height="616" className="doc_img"/>

#### Re-Generation Settings

The Test Case Generator provides several controls that work alongside the Conversation Layer:

- **Max Scenarios** — Control the maximum number of scenarios generated in a session.
- **Max Test Cases per Scenario** — Set the upper limit for test cases within each individual scenario.
- **Regenerate Scenarios** — Regenerate all scenarios utilizing existing context and to regenerate fresh Scenarions and Test Cases.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/regeneration_settings.png').default} alt="regeneration-settings" width="1347" height="616" className="doc_img"/>

:::note
Regeneration replaces all current scenarios. To keep specific scenarios intact and only modify others, use targeted conversational refinements instead.
:::


#### Credit Usage

The Conversation Layer consumes AI credits based on the scope of each refinement.

| Action | Credit Cost |
|--------|-------------|
| Edit or modify a **scenario** (including its test cases) | **5 credits** |
| Edit or modify a single **test case** | **1 credit** |

- Credits are deducted **per message** based on the scope of the change.
- If your message affects multiple scenarios, credits are deducted for each scenario impacted.
- Your remaining credit balance is visible in your account dashboard.

#### Current Limitations

The following capabilities are planned for future releases:

- **Undo and versioning** — No rollback mechanism for individual conversation-driven changes.
- **Step-level referencing** — You cannot reference individual steps within a test case. Instead, reference the test case and describe the change.
- **Coverage queries** — Asking analytical questions (e.g., "Do we have tests for invalid amounts?") without requesting a change is not supported.

### Step 7: Save or Automate Test Cases
Once you are satisfied with your test scenarios and test cases, select the test cases you want to keep. You have two options to proceed:

<img loading="lazy" src={require('../assets/images/mobile-app-testing/create_automate_test_cases.png').default} alt="create-test-cases" width="1347" height="616" className="doc_img"/>

#### Option 1: Create Test Cases
Select the desired test cases and click **Create** to save them directly to your **Test Case Repository** in <BrandName /> Test Manager. These saved test cases can then be assigned to test runs, shared with teams, or used in manual test planning.

<!-- <img loading="lazy" src={require('../assets/images/mobile-app-testing/create_test_cases.png').default} alt="create-test-cases" width="1347" height="616" className="doc_img"/> -->

#### Option 2: Create and Automate with KaneAI
Select the desired test cases and click **Create and Automate** to save the test cases to your repository and automate the generated test cases through KaneAI. This option streamlines the transition from test design to test automation. 

<!-- <img loading="lazy" src={require('../assets/images/mobile-app-testing/create_and_automate_test_cases.png').default} alt="create-and-automate-test-cases" width="1347" height="616" className="doc_img"/> -->

:::note
The **Create and Automate** option requires KaneAI access. If you do not have KaneAI enabled on your account, use the **Create** option to save test cases manually.
:::

---

## Troubleshooting

| Issue | Resolution |
|-------|------------|
| Conversation Layer panel not visible | Ensure you have generated at least one set of scenarios. The Conversation Layer activates after the initial generation completes. Refresh the page if needed. |
| Changes not appearing in Live Output View | Check your internet connection. Large changes may take longer to process. If the issue persists, send a new message — the AI resumes from the current state. |
| AI modified the wrong scenario or test case | Use explicit  Scenario (`@S1`) or Test Case (`@S1.C1`) references to avoid ambiguity. Rephrase your message with a direct reference and send it again. |
| File upload fails | Verify the file does not exceed the 50 MB size limit and that you have not exceeded the 10-file session limit. |
| Credits deducted but no changes appeared | This can occur if the AI could not interpret your request or if there was a connection interruption. Check the conversation history for an error message. |
| Regeneration removed refined scenarios | Regeneration replaces all current output. Use targeted conversational messages instead to preserve specific scenarios. |

---

## Frequently Asked Questions

**Can I undo a change made through the Conversation Layer?**

Undo and versioning are not available in the current release. If a change is not what you expected, send a follow-up message to revert or adjust the change.

**Does the Conversation Layer work with manually created test cases?**

The Conversation Layer operates within AI Test Case Generator sessions only. It refines scenarios and test cases generated by the AI within that session. Manually created test cases in Test Manager are not accessible through the Conversation Layer.

**How many messages can I send in a single session?**

There is no fixed limit on the number of messages per session. Each message consumes credits based on the scope of the change.

**What happens if I close the browser mid-session?**

Your session context, including generated scenarios and conversation history, is preserved. You can return to the session and continue refining from where you left off.

**Can I export the refined test cases?**

Yes. After refining your test cases through the Conversation Layer, you can export or save them to your Test Manager project using the same export workflows available in the Test Case Generator.

**Is the Conversation Layer available for all plans?**

The Conversation Layer is available to all users with access to Test Manager Premium or KaneAI plans. Credit consumption applies based on your plan's AI credit allocation.
