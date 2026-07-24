---
id: test-pipecat-agents
title: How to Test Pipecat Agents With TestMu AI
hide_title: false
sidebar_label: Test Pipecat Agents
description: Automated phone and voice testing for agents built on Pipecat. Drive full multi-turn conversations across personas and edge cases, and score every run with TestMu AI.
keywords:
 - test pipecat agents
 - pipecat agent testing
 - phone agent testing
 - voice agent testing
 - pipecat transport testing
url: https://www.testmuai.com/support/docs/test-pipecat-agents/
site_name: TestMu AI
slug: test-pipecat-agents/
canonical: https://www.testmuai.com/support/docs/test-pipecat-agents/
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
          "name": "Test Pipecat Agents",
          "item": `${BRAND_URL}/support/docs/test-pipecat-agents`
        }]
      })
    }}
></script>

# How to Test Pipecat Agents With TestMu AI

---

Pipecat is an open-source Python framework where the pipeline is assembled by hand: transport, STT, LLM, TTS. It is transport-agnostic, so the connection depends entirely on what the team built. TestMu AI connects to that transport, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin

---

Before you connect a Pipecat bot, make sure you have:

- A deployed Pipecat bot with a reachable transport
- The provider and serializer in use, for telephony deployments
- TestMu AI workspace with agent-testing permissions
- Source docs for scenario generation: prompt, PRD, or knowledge base

## Test a Pipecat Phone Agent

---

Phone testing covers callers arriving over Twilio, Telnyx, or Plivo media streams. Paste the agent's prompt to generate scenarios, then add the number bound to the telephony transport and pick from 100+ voices, background noise conditions, and personas. It covers DTMF entry, transfers, voicemail handling, and carrier latency.

Full setup: [Phone agent testing](/support/docs/phone-agent/)

## Test a Pipecat Voice Agent

---

Voice testing applies to bots reached over a direct audio stream rather than a phone number. Paste the prompt to generate scenarios, then create the endpoint profile using WebRTC or WebSocket, matching the transport the bot was built on. It isolates the speech pipeline, so STT and TTS accuracy, turn-taking, and interruption handling get tested without telephony noise in the results.

Full setup: [Voice agent testing](/support/docs/voice-agent/)

## What You Get With Agent Testing

---

Every Pipecat run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- 100+ voices and personas
- Multilingual conversations
- Quality scoring and real-time call monitoring

## Pipecat-Specific Considerations

---

A few Pipecat behaviours are worth building dedicated scenarios around:

- No hosted dashboard and no agent ID. Connection details come from the team's own deployment
- Serializers are provider-specific, so a Twilio-serialized stream will not connect to a Telnyx endpoint
- Audio normalization, codec, and sample rate are the developer's responsibility, which makes format mismatch the most common first failure
- Interruption handling is built into the pipeline, so barge-in is a genuine test target rather than a vendor feature
- There is no text channel to test, so the page covers phone and voice only

## Troubleshooting

---

Common failure modes to watch for:

- Transport unreachable
- Wrong serializer
- Sample rate mismatch
- No audio returned
