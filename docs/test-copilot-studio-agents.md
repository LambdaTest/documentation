---
id: test-copilot-studio-agents
toc_max_heading_level: 2
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/test-copilot-studio-agents/"
    },
    "headline": "How to Test Copilot Studio Agents With TestMu AI",
    "description": "Automated phone and chat testing for agents built on Microsoft Copilot Studio. Drive multi-turn conversations across personas and edge cases with TestMu AI.",
    "url": "https://www.testmuai.com/support/docs/test-copilot-studio-agents/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "test copilot studio agents",
      "copilot studio agent testing",
      "phone agent testing"
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
    "dateModified": "2026-07-24T18:03:55+05:30"
  }) }}
/>

Copilot Studio agents run over digital messaging channels and, once the telephony channel is enabled, over phone through Dynamics 365 Contact Center. Two voice flavours exist: basic IVR agents on classic orchestration, and real-time voice agents. The TestMu AI Agent Testing Platform runs your Copilot Studio agent through multi-turn conversations across personas and edge cases on whichever channel it serves and scores each run, so you can test it before customers do.

To connect one, you need a published Copilot Studio agent, the telephony channel enabled and connected to Dynamics 365 Contact Center for phone agents only, source docs for scenario generation (topic export, PRD, or knowledge base), and a TestMu AI workspace with agent-testing permissions.

## What makes testing a Copilot Studio agent's topics different?

---

Copilot Studio agents run over messaging channels and, once enabled, over telephony, so a few behaviours are worth building dedicated scenarios around:

- **Enable telephony before Dynamics.** The telephony channel must be enabled before connecting Dynamics, and the order matters for reconnection.
- **Two voice flavours.** Basic voice agents and real-time voice agents behave differently enough to need separate scenarios.
- **UUI transfers need direct routing.** Transfers carrying SIP UUI context require direct routing, since PSTN numbers do not support UUI header transfer.
- **Phrase-or-description triggering.** Topics trigger on either phrases or descriptions, and accuracy settings only affect the phrase path.
- **No audio outside telephony.** There is no direct audio surface outside telephony, so there is no voice section on this page.

## How do users reach a Copilot Studio agent?

---

Copilot Studio deploys one agent across surfaces. Generate scenarios from the topic export and knowledge sources, then follow the linked setup for the surface you test:

- **Phone** covers callers who reach the agent over PSTN or SIP on the telephony channel. It covers what telephony introduces across every topic the agent can trigger: DTMF entry, barge-in, silence detection, transfers, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Chat** covers text conversations on the agent's published web or messaging channel, against the published channel endpoint. It catches topic triggering, knowledge grounding, and tool failures before they reach the voice channel. Setup: [chat agent testing](/support/docs/chat-agent/).

## What stops a Copilot Studio test?

---

Common failure modes to watch for:

- Topic not triggered
- Telephony channel not connected
- UUI transfer rejected
- Agent published to the wrong environment
