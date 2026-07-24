---
id: test-copilot-studio-agents
title: How to Test Copilot Studio Agents With TestMu AI
hide_title: false
sidebar_label: Test Copilot Studio Agents
description: Automated phone and chat testing for agents built on Microsoft Copilot Studio. Drive multi-turn conversations across personas and edge cases with TestMu AI.
keywords:
 - test copilot studio agents
 - copilot studio agent testing
 - phone agent testing
 - chat agent testing
 - copilot studio telephony
url: https://www.testmuai.com/support/docs/test-copilot-studio-agents/
site_name: TestMu AI
slug: test-copilot-studio-agents/
canonical: https://www.testmuai.com/support/docs/test-copilot-studio-agents/
---

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
          "name": "Test Copilot Studio Agents",
          "item": `${BRAND_URL}/support/docs/test-copilot-studio-agents`
        }]
      })
    }}
></script>

# How to Test Copilot Studio Agents With TestMu AI

---

Copilot Studio agents run over digital messaging channels and, once the telephony channel is enabled, over phone through Dynamics 365 Contact Center. Two voice flavours exist: basic IVR agents on classic orchestration, and real-time voice agents. TestMu AI connects to the agent on whichever channel it runs on, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin

---

Before you connect a Copilot Studio agent, make sure you have:

- A published Copilot Studio agent
- The telephony channel enabled and connected to Dynamics 365 Contact Center, for phone agents only
- TestMu AI workspace with agent-testing permissions
- Source docs for scenario generation: topic export, PRD, or knowledge base

## Test a Copilot Studio Phone Agent

---

Phone testing covers callers who reach the agent over PSTN or SIP on the telephony channel. Upload the topic export and knowledge sources to generate scenarios, then add the telephony number and pick from 100+ voices, background noise conditions, and personas. It covers what telephony introduces across every topic the agent can trigger: DTMF entry, barge-in, silence detection, transfers, and carrier latency.

Full setup: [Phone agent testing](/support/docs/phone-agent/)

## Test a Copilot Studio Chat Agent

---

Chat testing covers text conversations on the agent's published web or messaging channel. Upload the topic export and knowledge sources to generate scenarios, then create the endpoint profile against the published channel endpoint. It catches topic triggering, knowledge grounding, and tool failures before they reach the voice channel.

Full setup: [Chat agent testing](/support/docs/chat-agent/)

## What You Get With Agent Testing

---

Every Copilot Studio run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- 100+ voices and personas
- Multilingual conversations
- Quality scoring and real-time call monitoring

## Copilot Studio-Specific Considerations

---

A few Copilot Studio behaviours are worth building dedicated scenarios around:

- The telephony channel must be enabled before connecting Dynamics, and the order matters for reconnection
- Basic voice agents and real-time voice agents behave differently enough to need separate scenarios
- Transfers carrying SIP UUI context require direct routing, since PSTN numbers do not support UUI header transfer
- Topics trigger on either phrases or descriptions, and accuracy settings only affect the phrase path
- There is no direct audio surface outside telephony, so there is no voice section on this page

## Troubleshooting

---

Common failure modes to watch for:

- Topic not triggered
- Telephony channel not connected
- UUI transfer rejected
- Agent published to the wrong environment
