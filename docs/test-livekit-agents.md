---
id: test-livekit-agents
toc_max_heading_level: 2
title: How to Test LiveKit Agents With TestMu AI
hide_title: false
sidebar_label: Test LiveKit Agents
description: Automated phone and voice testing for agents built on LiveKit Agents. Drive full multi-turn conversations across personas and edge cases, and score every run.
keywords:
 - test livekit agents
 - livekit agent testing
 - phone agent testing
 - voice agent testing
 - webrtc room testing
url: https://www.testmuai.com/support/docs/test-livekit-agents/
site_name: TestMu AI
slug: test-livekit-agents/
canonical: https://www.testmuai.com/support/docs/test-livekit-agents/
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
          "name": "Test LiveKit Agents",
          "item": `${BRAND_URL}/support/docs/test-livekit-agents`
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
      "@id": "https://www.testmuai.com/support/docs/test-livekit-agents/"
    },
    "headline": "How to Test LiveKit Agents With TestMu AI",
    "description": "Automated phone and voice testing for agents built on LiveKit Agents. Drive full multi-turn conversations across personas and edge cases, and score every run.",
    "url": "https://www.testmuai.com/support/docs/test-livekit-agents/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "test livekit agents",
      "livekit agent testing",
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

LiveKit is infrastructure rather than a hosted builder. The agent joins a WebRTC room as a participant, and phone calls arrive in that same room through a SIP trunk. The TestMu AI Agent Testing Platform joins the room or dials the number and runs your LiveKit agent through multi-turn conversations across personas and edge cases, scoring each run so you can test it without touching the infrastructure.

To connect one, you need a running LiveKit agent (self-hosted or on LiveKit Cloud), a SIP trunk with a provider such as Twilio or Telnyx for phone agents only, source docs for scenario generation (prompt, PRD, or knowledge base), and a TestMu AI workspace with agent-testing permissions.

## Why do LiveKit failures often sit in the SIP trunk, not the agent?

---

LiveKit is infrastructure, so the unit under test is a room, not a hosted agent ID. That shapes how you connect and where failures sit:

- **Room, not an agent ID.** The unit under test is a room, so setup differs from every hosted platform.
- **SIP REFER for transfers.** SIP REFER must be enabled on the trunk for transfers, and Twilio additionally needs PSTN transfer switched on.
- **Connectors over WebSocket.** Connectors bridge Twilio calls over WebSocket without a SIP trunk, which is a separate connection path.
- **Trunk-level settings.** DTMF, cold transfer, and region pinning are trunk-level settings, so a failure may sit in the trunk rather than the agent.
- **No text channel.** There is no text channel to test, so this page covers phone and voice only.

## Do you reach a LiveKit agent by room or by number?

---

- **Phone** covers inbound and outbound callers arriving over a SIP trunk: DTMF entry, SIP REFER transfers, voicemail handling, and carrier latency. Setup: [phone agent testing](/support/docs/phone-agent/).
- **Voice** reaches the agent by joining a room directly rather than over a phone number, using WebRTC against the room. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise. Setup: [voice agent testing](/support/docs/voice-agent/).

## What breaks in a LiveKit call?

---

Common failure modes to watch for:

- Agent not present in the room
- SIP REFER rejected
- DTMF not received
- Codec negotiation failure

## Related TestMu AI Guides

---

- [Phone agent testing](/support/docs/phone-agent/)
- [Voice agent testing](/support/docs/voice-agent/)
