---
id: testing-your-first-ai-agent
toc_max_heading_level: 2
title: How to Test Your First AI Agent With TestMu AI Agent Testing Platform
hide_title: false
sidebar_label: Quickstart (UI)
description: "Step-by-step guide to setting up and running your first AI agent test on TestMu AI: configure inputs, run validations, and review results."
keywords:
 - test your first ai agent
 - ai agent testing
 - agentic testing
 - ai agent testing quickstart
 - run agent evaluation
url: https://www.testmuai.com/support/docs/testing-your-first-ai-agent/
site_name: TestMu AI
slug: testing-your-first-ai-agent/
canonical: https://www.testmuai.com/support/docs/testing-your-first-ai-agent/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Testing Your First AI Agent",
          "item": `${BRAND_URL}/support/docs/testing-your-first-ai-agent`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/testing-your-first-ai-agent/"
    },
    "headline": "How to Test Your First AI Agent With TestMu AI Agent Testing Platform",
    "description": "Step-by-step guide to setting up and running your first AI agent test on TestMu AI: configure inputs, run validations, and review results.",
    "url": "https://www.testmuai.com/support/docs/testing-your-first-ai-agent/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "test your first ai agent",
      "ai agent testing",
      "agentic testing"
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
    "dateModified": "2026-11-12T13:50:45+05:30"
  }) }}
/>

You can test an AI agent on TestMu AI entirely from the dashboard, without writing code. You create an agent, upload sources that describe it, generate test scenarios, run an evaluation against your agent's API, and read the scored results.

The whole flow takes a few minutes. This walkthrough uses a chat agent.

## What You Need Before You Start

---

Before you start, make sure you have the following in place.

- A TestMu AI account with access to the Agent Testing platform.
- Your agent's API request details: the endpoint URL, method, and headers, ready to enter as a cURL command. For a chat agent, the URL is the one that receives messages.
- Sources that describe your agent's requirements, such as a PDF, DOCX, or MD file, or pages from Confluence or Jira. The platform uses them to generate relevant scenarios.

## How to Run Your First Evaluation

---

Follow these seven steps in the dashboard. Each step builds on the previous one.

**Step 1: Create the agent.** In the Agent Testing page, click **Create New Agent**, then fill in the form:

- **Agent Name** (required).
- **Description** (optional).
- **Agent Type** (required): Chat Agent, Voice Agent, Video Agent, Phone Caller Agent (inbound or outbound), IVR Agent, or Image Analyzer. This walkthrough uses **Chat Agent**.
- **Evaluation Mode** (required for Chat Agent): select **Pre-production testing**, which uploads requirements, generates test scenarios, and simulates conversations against your agent. To grade real production transcripts instead, see [Grade Production Chat Transcripts](/support/docs/chat-agent/#grade-production-chat-transcripts).

Click **Create New Agent** to confirm.

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

See the [chat agent metrics](/support/docs/chat-agent/#metrics) for what each score measures.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agent-evaluation-results-metrics-turns.webp').default} alt="Evaluation results for a scenario showing pass status, overall score, quality metrics and the conversation turns" width="1916" height="944"  className="doc_img"/>

:::note
If you are testing a voice bot, the platform generates audio for each test case automatically, then evaluates the transcribed audio responses from your agent to confirm they are relevant.
:::

## Related TestMu AI Guides

---

- See how to [connect a chat agent over its API](/support/docs/chat-agent-api-integration/) for the API URL and authentication used in step 6.
- See the [chat agent guide](/support/docs/chat-agent/) for red teaming, custom metrics, Data Validation, and scheduled runs.
- See how to [test agents from the terminal](/support/docs/agent-testing-cli/) with the A2A CLI.
- To test another agent type, see [voice agents](/support/docs/voice-agent/), [phone agents](/support/docs/phone-agent/), [video agents](/support/docs/video-agent/), or the [image analyzer](/support/docs/image-analyzer/).
