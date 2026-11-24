---
id: chat-agent
toc_max_heading_level: 2
title: Chat Agent Testing With TestMu AI
hide_title: false
sidebar_label: Chat Agents
description: Test chat agents on TestMu AI. Simulated multi-turn conversations, quality metrics, data validation against your API, and evaluation runs from UI, CLI, or API.
keywords:
 - chat agent testing
 - chatbot testing
 - chat agent evaluation
 - conversational ai testing
 - multi-turn conversation testing
 - chat agent data validation
url: https://www.testmuai.com/support/docs/chat-agent/
site_name: TestMu AI
slug: chat-agent/
canonical: https://www.testmuai.com/support/docs/chat-agent/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';



<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/chat-agent/"
    },
    "headline": "Chat Agent Testing With TestMu AI",
    "description": "Test chat agents on TestMu AI. Simulated multi-turn conversations, quality metrics, data validation against your API, and evaluation runs from UI, CLI, or API.",
    "url": "https://www.testmuai.com/support/docs/chat-agent/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "chat agent testing",
      "chatbot testing",
      "chat agent evaluation"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-11-20T12:00:00+05:30"
  }) }}
/>

The TestMu AI Agent Testing Platform tests a chat agent by holding multi-turn conversations with it through its API, following AI-generated scenarios, and scoring each conversation across quality metrics. It covers text chatbots, virtual assistants, IT helpdesks, and FAQ bots.

You provide the endpoint, the agent's intended behavior, and any requirement documents. The platform generates the scenarios and runs the conversations. No code changes to your agent are required.

## Run a Chat Agent Test

---

You can test a chat agent three ways. All three run the same evaluation and produce the same scored results.

- **Dashboard:** create the agent, upload sources, generate scenarios, and run the evaluation. Follow the steps below.
- **CLI:** point `testmu-a2a test` at your endpoint for a one-command run, or drive scenarios and suites from a config file. See how to [test chat agents from the terminal](/support/docs/agent-testing-cli/).
- **API integration:** configure the endpoint, authentication, and request or response format directly. See how to [connect a chat agent over its API](/support/docs/chat-agent-api-integration/).

### Run a Chat Agent Test in the Dashboard

Follow these seven steps in the dashboard. Each step builds on the previous one.

**Step 1: Create the agent.** In the Agent Testing page, click **Create New Agent**, then fill in the form:

- **Agent Name** (required).
- **Description** (optional).
- **Agent Type** (required): select **Chat Agent**.
- **Evaluation Mode** (required):
  - **Pre-production testing:** upload requirements, generate test scenarios, and simulate conversations against your agent.
  - **Post-production analysis:** upload requirements and production chat transcripts for a grounded evaluation. See [Grade Production Chat Transcripts](#grade-production-chat-transcripts).

Click **Create New Agent** to confirm. Steps 2 to 7 follow the **Pre-production testing** flow.

<img loading="lazy" src={require('../assets/images/agent-to-agent/create-chat-agent-evaluation-mode.webp').default} alt="Create New Agent panel with Chat Agent selected and the Pre-production testing and Post-production analysis evaluation modes" width="1899" height="942"  className="doc_img"/>

**Step 2: Upload your sources.** Open the **Workflows** tab. In **Upload Sources**, add the material that describes your agent:

- **Files:** drag and drop, or browse. Supported formats are PDF, DOCX, XLSX, CSV, TXT, MD, images, audio, and video, up to 200 MB per file.
- **Confluence**, **Jira**, or **S3 Bucket:** switch to these tabs to link sources from those tools instead.

<img loading="lazy" src={require('../assets/images/agent-to-agent/upload-sources-agent-testing-workflow.webp').default} alt="Upload Sources screen in the Workflows tab with file, Confluence, Jira and S3 Bucket options" width="1900" height="943"  className="doc_img"/>

**Step 3: Configure and generate scenarios.** Once your file shows **Ready**, set the generation options:

- **Special Instructions** (optional): text that is included in every generated test scenario.
- **Languages** (optional): the languages your agent supports. English is used by default if none are selected.
- **Scenario Count** (optional): **Auto** (calculated from document complexity), 25, 50, 100, 200, or **Custom**.
- **Scenario Types** (optional): **Happy Path**, **Negative**, **Edge Case**, **Integration**, and **Red Team**. Leave all unselected to generate every type.

Click **Generate Scenarios**.

<img loading="lazy" src={require('../assets/images/agent-to-agent/scenario-generation-languages-count-types.webp').default} alt="Scenario generation settings with languages, scenario count and scenario types selected before clicking Generate Scenarios" width="1908" height="948"  className="doc_img"/>

**Step 4: Review the generated scenarios.** The **Scenarios** tab lists every scenario, with a count on the tab.

- Each row shows the scenario name, its persona (such as "The Multitasker"), and its language.
- Use **Search scenario** or the **Scenario Type** dropdown to narrow the list.
- Use the pencil icon to edit a scenario, or the trash icon to delete it.
- Click **Create New Suite** to group scenarios for a run.

<img loading="lazy" src={require('../assets/images/agent-to-agent/generated-test-scenarios-list-agent-testing.webp').default} alt="Scenarios tab listing generated test scenarios with persona and language tags" width="1914" height="948"  className="doc_img"/>

**Step 5: Edit a scenario if needed.** Click the pencil icon on a scenario to open **Edit Scenario**.

- Change the **Scenario Name**, **Description**, or **Validation Criteria**.
- Click **Save Scenario** to keep your changes, or **Cancel** to discard them.

<img loading="lazy" src={require('../assets/images/agent-to-agent/edit-test-scenario-validation-criteria.webp').default} alt="Edit Scenario panel showing scenario name, description and validation criteria fields" width="1911" height="945"  className="doc_img"/>

**Step 6: Run the evaluation.** Run a suite to open the **Run Suite** dialog, then add your agent's API request.

1. Enter your agent's request as a cURL command. If it contains a token, cookie, or API key, use the **Move to vault** banner to keep that credential in the credentials vault instead of in plaintext. Vault values resolve only at run time.
2. Click **Parse and Evaluate**. To run it on a schedule instead, click **Schedule Run Evaluation**.
3. In the **Confirm Request Details** dialog, check the **URL**, **Method**, **Headers**, and **Body**.
4. Click **Run Evaluation**.

For the API URL format and authentication, see how to [connect a chat agent over its API](/support/docs/chat-agent-api-integration/).

<img loading="lazy" src={require('../assets/images/agent-to-agent/confirm-request-details-run-evaluation.webp').default} alt="Confirm Request Details dialog showing the agent URL, method and headers before clicking Run Evaluation" width="1915" height="936"  className="doc_img"/>

**Step 7: Read the results.** When the run finishes, open a scenario from the list to see its score and the reasons behind it.

- Start with the scenarios that failed or scored lowest. On the **Turns** tab, read the conversation to find the point where your agent went wrong.
- Use **Areas for Improvement** and **Recommendations** to decide what to fix in your agent, and **Validation Criteria** to see which of the scenario's criteria it missed. If a criterion is wrong rather than the agent, edit the scenario as in Step 5.
- After you change your agent, click **Re-run** to run the same scenarios again. Each run is listed separately with its score and time, and re-runs are tagged in the suite results list, so you can compare before and after.
- To stop a suite that is still running, abort it from the results banner.

See [Metrics](#metrics) for what each score measures.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agent-evaluation-results-metrics-turns.webp').default} alt="Evaluation results for a scenario showing pass status, overall score, quality metrics and the conversation turns" width="1916" height="944"  className="doc_img"/>

## Grade Production Chat Transcripts

---

To grade real conversations instead of simulated ones, create the agent with **Post-production analysis** as its evaluation mode. Bulk upload your production chat transcripts as .txt or .json files, along with your requirement documents.

The transcripts are graded with the same engine as pre-production suites, using your requirements as the reference. When you click **Continue to Conversation Analysis**, the platform first analyzes your uploaded requirements. A banner shows while this runs, and you are prompted if no requirements are uploaded.

Each conversation is judged against the scope and policies in your requirements, such as refund limits, return windows, verification, handoff, and disclosure. A reply that is out of scope or breaks a policy fails even when the conversation's overall score is high.

## How Chat Agent Testing Works

---

The platform generates scenarios from your uploaded sources, in the count you choose at generation, then runs each one as a full conversation. Testing agents send multi-turn HTTP messages to your endpoint, read the reply from each response, and decide the next message based on the scenario goal and prior context.

A conversation ends when the goal is met, the maximum turn count is reached, or an unrecoverable error occurs. Each completed conversation is then scored. For the request and response mechanics, see how to [connect a chat agent over its API](/support/docs/chat-agent-api-integration/).

Chat agents built on Gallup Intelligence are supported. The conversation is kept in a single thread, and table responses are evaluated.

## What Chat Testing Evaluates

---

Every conversation is scored on the 9 quality [metrics](#metrics), the scenario's validation criteria, and any custom metrics you apply.

Scenarios are drawn from behavioral test categories, including intent recognition, context and memory, multi-turn reasoning, error handling, and compliance.

Red teaming runs a live adversarial attacker against your agent, rather than a single opening probe. It covers seven attack types: business logic, hallucination, hijacking, prompt injection, technical injection, overreliance, and off-topic. The attacker and the grader are separate, so the score is not influenced by how hard the attacker pushed. A run that cannot be judged is reported as inconclusive, not passed.

## Chat Agent Testing Features

---

The steps above don't cover these features. [Data Validation](#data-validation) and [Metric Thresholds and Custom Metrics](#metric-thresholds-and-custom-metrics) have their own sections below.

- **Knowledge base.** Your uploaded and linked sources become the project's own isolated knowledge base, used as the ground truth for scenario generation, conversations, and evaluation.
- **Healthcare knowledge packs.** Packs return UMLS vocabulary codes (ICD-10-CM, SNOMED CT, LOINC), and the **Turns** tab shows which pack lookups the simulator used on each turn.
- **Scenario settings.** Link a test profile to a scenario to run it with specific test data, and give it its own maximum turns, which takes priority over the suite default.
- **Endpoint profiles.** If your agent needs more than one request, such as a login or a new session before the chat, connect it with an endpoint profile instead of a single cURL command. Import a Postman collection or define it in JSON, then set up the suite setup, scenario setup, and chat phases. Variables can be static, generated, extracted with JSONPath, secret, or taken from a test profile, with retry, response caching, and timeouts. A credential in an imported collection triggers the **Move to vault** banner.
- **Test profiles.** Reusable key-value test data with typed fields, a default profile, and JSON import and export, injected at run time for data-driven testing. See [Test Suites and Test Profiles](/support/docs/agent-features-and-metrics/#test-suites-and-test-profiles).
- **Playground.** Test your agent interactively before a full run, with multi-turn chat, cURL connection testing, and request and response schema detection.
- **HyperExecute and tunnels.** Evaluations run at scale on HyperExecute, with a tunnel for agents behind a firewall, and progress streams live during the run.
- **Go-Live Assessment.** A Green, Yellow, or Red verdict on whether your agent is ready for production, with a confidence level, dimension scores, scenario coverage, risk assessment, and AI recommendations. See [Go-Live Assessment](/support/docs/agent-features-and-metrics/#go-live-assessment).
- **Scheduled runs.** Besides **Schedule Run Evaluation** in Step 6, you can select **Schedule Run** from the dropdown next to a suite's **Run** button. Schedules run in your local time zone, and you stop one by deleting the scheduled run. See [Scheduled Runs](/support/docs/agent-features-and-metrics/#scheduled-runs).

## Metrics

---

Chat agents are evaluated on 9 quality metrics, each scored on a 0 to 100% scale.

| # | Metric | What it measures |
|---|--------|------------------|
| 1 | Bias Detection | Detects biased, discriminatory, or unfair responses |
| 2 | Hallucination Detection | Identifies false, fabricated, or unsupported information |
| 3 | Completeness | Whether the agent fully addresses the user's question |
| 4 | Context Awareness | How well the agent understands and maintains conversation context |
| 5 | Response Quality | Overall quality, clarity, and helpfulness of responses |
| 6 | Conversation Flow | Natural flow and coherence across multi-turn conversations |
| 7 | User Satisfaction | Estimated end-user satisfaction based on conversation quality |
| 8 | File Handling Quality | Quality of file upload and download interactions, if applicable |
| 9 | File Generation Accuracy | Accuracy of generated files against requirements, if applicable |

Every evaluation result includes the overall score, per-metric scores with pass or fail badges, detailed analysis, the full multi-turn transcript, identified strengths, areas for improvement, actionable recommendations, and validation criteria results.

### Metric Thresholds and Custom Metrics

Both are set in the **Configs** tab, under the **Metric Thresholds** and **Custom Metrics** sub-tabs.

- **Metric Thresholds:** set a minimum passing score (0 to 100%) for each metric, choose whether higher or lower is better, and save named configurations. Scheduled runs use the active configuration.
- **Custom Metrics:** define project-specific checks and apply them to all scenarios or selected ones. **Suggest examples** drafts metrics from your scenarios. Grades appear under **Validation Criteria** with an explanation, the evidence turns, and a Pass/Fail override, and each custom metric can gate the overall score.

## Data Validation

---

Data Validation checks the facts your agent states during a conversation, such as a price, an order status, or a delivery date, against your own API, and gives each fact a Pass, Fail, or Cannot verify verdict under **Validation Criteria**. You create a config under **Profiles**, then **Data Validation**, and attach it to a workflow under the workflow's **Settings**.

To write a config, test it, and read the results, see [Data Validation](/support/docs/data-validation/).

## Related TestMu AI Guides

---

- See how to [check the facts your agent states against your API](/support/docs/data-validation/) with Data Validation.
- See how to [connect a chat agent over its API](/support/docs/chat-agent-api-integration/).
- See how to [test your first AI agent](/support/docs/testing-your-first-ai-agent/) in the UI.
- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/).
