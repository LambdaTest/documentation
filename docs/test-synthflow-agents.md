---
id: test-synthflow-agents
toc_max_heading_level: 2
title: How to Test Synthflow Agents With TestMu AI
hide_title: false
sidebar_label: Test Synthflow Agents
description: Automate phone, voice, and chat testing for Synthflow AI agents with TestMu AI. Drive multi-turn conversations across personas and score every run.
keywords:
 - test synthflow agents
 - synthflow ai testing
 - synthflow phone agent
 - synthflow voice agent
 - synthflow chat agent
url: https://www.testmuai.com/support/docs/test-synthflow-agents/
site_name: TestMu AI
slug: test-synthflow-agents/
canonical: https://www.testmuai.com/support/docs/test-synthflow-agents/
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
          "name": "Test Synthflow Agents",
          "item": `${BRAND_URL}/support/docs/test-synthflow-agents`
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
      "@id": "https://www.testmuai.com/support/docs/test-synthflow-agents/"
    },
    "headline": "How to Test Synthflow Agents With TestMu AI",
    "description": "Automate phone, voice, and chat testing for Synthflow AI agents with TestMu AI. Drive multi-turn conversations across personas and score every run.",
    "url": "https://www.testmuai.com/support/docs/test-synthflow-agents/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "test synthflow agents",
      "synthflow ai testing",
      "synthflow phone agent"
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

Synthflow is a no-code voice platform running on its own telephony infrastructure rather than a third-party carrier, with a visual flow designer and subflows for multi-agent setups. On the TestMu AI Agent Testing Platform you can test your Synthflow agent on whichever channel it runs, with multi-turn conversations across personas and edge cases scored on each run.

To connect one, you need a Synthflow account with a published agent, a number provisioned on Synthflow's telephony layer for phone agents only, source docs for scenario generation (prompt, PRD, or knowledge base), and a TestMu AI workspace with agent-testing permissions.

## How do you test Synthflow's in-house telephony and modular flows?

---

Synthflow runs on its own telephony stack with modular flows, so a few behaviours are worth building dedicated scenarios around:

- **In-house telephony.** In-house telephony means call quality issues belong to Synthflow's stack, not a carrier's, which changes how a failure gets triaged.
- **Modular flows.** Flows are modular, so a subflow edit propagates to every parent flow using it.
- **Plan-gated features.** Feature availability varies by plan, so some flow capabilities are absent on lower tiers.
- **Chat below voice parity.** Chat and SMS do not run at parity with voice on the same agent.

## Which channels does a Synthflow agent run on?

---

One Synthflow agent runs across channels on its own telephony stack. Paste the agent's prompt or import the flow to generate scenarios, then follow the linked setup for the surface you test:

- **Phone** covers inbound and outbound callers over Synthflow's own telephony stack: DTMF entry, transfers, voicemail detection, and latency measured against in-house routing rather than a carrier's. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches the agent through the embedded web widget rather than a phone number, with the endpoint profile created against the widget's agent. It drops telephony out of the path and isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).
- **Chat** runs text conversations through the chat widget, SMS, or WhatsApp Business, with the endpoint profile created using the chat widget or the messaging channel. It catches reasoning and branching failures, and the text channel runs shallower logic than voice on the same agent. Setup: [chat agent testing](/support/docs/chat-agent/).

## What makes a Synthflow test fail?

---

Common failure modes to watch for:

- No transcript returned
- Subflow not triggered
- Plan-gated feature missing
- Messaging session expired

## Related TestMu AI Guides

---

- [Phone agent testing](/support/docs/phone-agent/)
- [Voice agent testing](/support/docs/voice-agent/)
- [Chat agent testing](/support/docs/chat-agent/)
