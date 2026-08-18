---
id: testing-your-first-ai-agent
title: How to Test Your First AI Agent on the TestMu AI Platform
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

You can test an AI agent on TestMu AI entirely from the dashboard, without writing code. You create an agent, upload documents that describe it, generate test scenarios, run an evaluation against your agent's API, and read the scored results.

The whole flow takes a few minutes and works for chat and voice agents.

## Prerequisites

---

Before you start, make sure you have the following in place.

- A TestMu AI account with access to the Agent Testing platform.
- Your agent's API endpoint URL. For a chat agent, this is the URL that receives messages.
- Documents that describe your agent's requirements, such as a PDF or DOCX. The platform uses them to generate relevant scenarios.

## Run Your First Evaluation

---

Follow these seven steps in the dashboard. Each step builds on the previous one.

**Step 1: Create the agent.** In the left sidebar, click **Create Agent**, enter a name and description, then click **Create Agent** to confirm. The agent is created and ready for you to add its requirements.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-one.png').default} alt="Create Agent form with name and description fields in the TestMu AI dashboard" width="1347" height="616"  className="doc_img"/>

**Step 2: Upload requirement documents.** Upload the documents that describe your agent so the platform can analyze its requirements and generate relevant scenarios.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-two.png').default} alt="Uploading requirement documents for the agent in the TestMu AI dashboard" width="1347" height="616"  className="doc_img"/>

**Step 3: Select test categories.** After the initial analysis, choose which categories of tests to generate. The platform offers a range of categories, such as **Personality & Tone**, which checks that your agent responds professionally. Select multiple categories to cover a wider range of behavior.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-three.png').default} alt="Selecting test categories including Personality and Tone" width="1347" height="616"  className="doc_img"/>

**Step 4: Generate the scenarios.** Click **Generate Test Scenarios**. A team of specialized AI agents generates multiple scenarios in parallel in the background.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-four.png').default} alt="Generate Test Scenarios button with scenario generation in progress" width="1347" height="616"  className="doc_img"/>

**Step 5: Review the generated scenarios.** The scenarios appear in a list you can filter by the categories you selected. Each scenario carries a complexity and a risk level. For example, a "tone adaptation when delivering bad news" scenario describes how your agent should respond.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-seven.png').default} alt="Generated test scenarios list showing complexity and risk levels" width="1347" height="616"  className="doc_img"/>

**Step 6: Run the evaluation.** When you are satisfied with the scenarios, enter your agent's API URL and click **Run Evaluation**. For the API URL format and authentication, see how to [connect a chat agent over its API](/support/docs/chat-agent-api-integration/).

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-eight.png').default} alt="Entering the agent API URL next to the Run Evaluation button" width="1347" height="616"  className="doc_img"/>

**Step 7: Read the results.** Open the **Evaluation Results** tab to see a breakdown across the quality metrics, such as whether the conversation was relevant and whether the agent stayed on topic.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-five.png').default} alt="Evaluation Results tab showing metric scores for the run" width="1347" height="616"  className="doc_img"/>

:::note
If you are testing a voice bot, the platform generates audio for each test case automatically, then evaluates the transcribed audio responses from your agent to confirm they are relevant.
:::

## Related TestMu AI Guides

---

- See how to [connect a chat agent over its API](/support/docs/chat-agent-api-integration/) for the API URL and authentication used in step 6.
- See how to [test agents from the terminal](/support/docs/agent-testing-cli/) with the A2A CLI.
