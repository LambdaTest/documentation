# How to Integrate Jira With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The KaneAI Jira integration generates executable test cases directly from your Jira tickets. You install the TestMu AI Cloud app for Jira, describe test cases in a ticket, and comment on the ticket to have KaneAI analyze its content and create the test cases on the TestMu AI platform. This keeps test creation inside your existing QA workflow and covers every test case you outline.

## Prerequisites

Before you begin, make sure you have:

The Jira integration is currently in **Beta**. Reach out to the support team to enable KaneAI for your organization before you begin.

- A Jira instance where you have permission to install apps from the Atlassian Marketplace.
- A TestMu AI account with KaneAI enabled for your organization.

## Set up the Jira Integration

Follow these steps to install the app, define test cases in a ticket, generate them with KaneAI, and refine the results.

### Step 1: Install the Jira App

Open the Atlassian Marketplace, search for [TestMu AI Cloud Jira app](https://marketplace.atlassian.com/apps/1234543/testmu-ai-cloud?hosting=cloud&tab=overview), and install it on your Jira instance.

**Result:** The TestMu AI Cloud app is available in your Jira instance.

### Step 2: Define Test Cases

Create a Jira ticket, or open an existing one, where you want to outline test cases. In the comments section, describe each test case's steps, conditions, expected outcomes, and any other detail that helps KaneAI generate accurate tests.

**Result:** The ticket contains the test case details KaneAI uses as generation context.

### Step 3: Generate Test Cases

To trigger KaneAI, add a comment to your Jira ticket that calls the TestMu AI application, for example:

```bash
@TestMu AI Cloud create test case based on the details of this Jira
```

This comment signals KaneAI to analyze the ticket content and create test cases. KaneAI uses the following ticket fields as context:

- **Summary** and **Description** of the ticket
- **Comments** on the ticket
- **Textual custom fields**: Only text-based custom fields are supported; non-textual fields (dropdowns, number fields, user pickers, linked tickets) are not used for generation.

To configure which custom fields are used as context, open the TestMu AI Cloud app settings in your Jira instance and select the textual custom fields you want.

**Result:** KaneAI processes the request and replies with a confirmation comment containing a link to TestMu AI, where you review, modify, and schedule the generated test case.

### Step 4: Review and Refine

Open the link in the Jira comment to [Generate Test Cases With AI](/support/docs/generate-test-cases-with-ai/). KaneAI begins [generating test cases from your Jira ticket content](/support/docs/generate-test-cases-with-ai/#step-3-generate-test-cases) in real time, and you watch scenarios and test cases stream in as they are created.

Once generation completes, review the test cases grouped across scenarios. Each scenario represents a theme or functional area and carries a priority tag such as **Must have**, **Should have**, or **Could have**. Individual test cases are categorized as **Positive**, **Negative**, or **Edge** to indicate their test type.

Refine the results with the [Conversation Layer](/support/docs/generate-test-cases-with-ai/#conversation-layer-refine-your-test-cases): describe changes in natural language and KaneAI applies them in real time. When you are satisfied, save the test cases to your Test Manager repository or automate them with KaneAI.

**Result:** Reviewed test cases are saved to Test Manager or handed off to KaneAI for automation.

## Next Steps

Continue with these guides:

- Organize your saved test cases in [Test Manager](/support/docs/test-manager/).
- Automate your reviewed test cases with the [KaneAI Command Guide](/support/docs/kane-ai-command-guide/).
