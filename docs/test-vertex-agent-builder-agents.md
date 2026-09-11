---
id: test-vertex-agent-builder-agents
toc_max_heading_level: 2
title: How to Test Vertex AI Agent Builder Agents With TestMu AI
hide_title: false
sidebar_label: Test Vertex Agent Builder Agents
description: Automate phone, voice, and chat testing for Vertex AI Agent Builder agents with TestMu AI, driving multi-turn conversations on every surface and scoring runs.
keywords:
 - test vertex agent builder agents
 - vertex ai agent testing
 - conversational agents testing
 - dialogflow cx testing
 - agent testing
url: https://www.testmuai.com/support/docs/test-vertex-agent-builder-agents/
site_name: TestMu AI
slug: test-vertex-agent-builder-agents/
canonical: https://www.testmuai.com/support/docs/test-vertex-agent-builder-agents/
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
          "name": "Test Vertex Agent Builder Agents",
          "item": `${BRAND_URL}/support/docs/test-vertex-agent-builder-agents`
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
      "@id": "https://www.testmuai.com/support/docs/test-vertex-agent-builder-agents/"
    },
    "headline": "How to Test Vertex AI Agent Builder Agents With TestMu AI",
    "description": "Automate phone, voice, and chat testing for Vertex AI Agent Builder agents with TestMu AI, driving multi-turn conversations on every surface and scoring runs.",
    "url": "https://www.testmuai.com/support/docs/test-vertex-agent-builder-agents/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "test vertex agent builder agents",
      "vertex ai agent testing",
      "conversational agents testing"
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

Conversational Agents model a conversation as a state machine of flows, pages, and routes rather than a single prompt, and the same agent serves web chat, streaming audio, and telephony. The TestMu AI Agent Testing Platform exercises the whole agent on whichever surface it serves, scoring its multi-turn conversations across personas and edge cases on every run.

To connect one, you need a Google Cloud project with a published agent, a Phone Gateway number or a partner telephony integration (for phone agents only), a TestMu AI workspace with agent-testing permissions, and source docs for scenario generation such as the flow export, PRD, or knowledge base.

## How do you test a Vertex flows, pages, and routes state machine?

---

Conversational Agents model a conversation as a state machine of flows, pages, and routes, so a few behaviours are worth building dedicated scenarios around:

- **Speech model forced on phone.** Phone Gateway forces the phone-call speech model regardless of what the agent has configured, so a voice run and a phone run can score differently on the same agent by design.
- **US numbers on global agents only.** Phone Gateway supports US numbers on globally created agents only. Regional agents need a partner integration.
- **Routes are the branch unit.** Routes are the branch unit, so coverage means every route rather than every intent.
- **Webhook fulfilment sits outside.** Webhook fulfilment sits outside the agent, which makes a webhook timeout look like an agent failure.

## Where can a Vertex agent be reached for testing?

---

The same agent serves every surface. Import the flow export to generate scenarios across every route, plus the data store contents for chat, then follow the linked setup for the surface you test:

- **Phone** covers callers arriving on a Google-hosted Phone Gateway number, a CCAI telephony partner, or a SIP trunk: DTMF entry, transfers, and carrier latency, scored against the phone-call speech model the gateway enforces. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches the agent through streaming audio rather than a phone number, over the streaming detect intent API. It isolates the speech pipeline, so recognition accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).
- **Chat** runs text conversations through the Dialogflow Messenger widget or a custom client over the detect intent API, running logic regression on every change. Setup: [chat agent testing](/support/docs/chat-agent/).

## What causes a Vertex test to fail?

---

Common failure modes to watch for:

- Route not matched
- Webhook timeout
- Phone gateway quota exceeded
- Regional agent rejected by the gateway
