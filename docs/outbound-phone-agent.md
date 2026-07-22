---
id: outbound-phone-agent
title: Outbound Phone Agent Testing With TestMu AI
hide_title: false
sidebar_label: Outbound Phone Agents
description: Test an outbound phone agent with TestMu AI. Outbound number pools, passive-mode monitoring, and the same 30+ call quality metrics as inbound testing.
keywords:
 - outbound phone agent testing
 - outbound voice agent evaluation
 - sales dialer testing
 - phone caller outbound
 - outbound call testing
url: https://www.testmuai.com/support/docs/outbound-phone-agent/
site_name: TestMu AI
slug: outbound-phone-agent/
canonical: https://www.testmuai.com/support/docs/outbound-phone-agent/
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
          "name": "Outbound Phone Agent Testing",
          "item": `${BRAND_URL}/support/docs/outbound-phone-agent`
        }]
      })
    }}
></script>

# Outbound Phone Agent Testing With TestMu AI

---

An outbound phone agent places calls. To test one, the Agent Testing Platform provisions a recipient number from an outbound pool, the agent under test calls it, and the platform answers and scores the conversation. Typical use cases are sales dialers, lead qualification, collections, and appointment reminders.

Outbound testing shares the same two modes as inbound, pre-evaluation and post-evaluation, and the same features, with a few outbound-specific differences in pre-evaluation.

## What Differs From Inbound Testing

---

Outbound pre-evaluation changes five things compared to the inbound flow.

- **The agent speaks first.** The platform answers the call, so the default first speaker is the agent, matching real outbound behavior.
- **Up to 7 scenarios per generation.** Outbound scenario generation produces up to 7 scenarios, versus 20 for inbound.
- **Caller profile selection.** Select an outbound caller profile when generating scenarios.
- **Outbound number pool.** The platform reserves recipient numbers from an outbound pool for the test calls.
- **Passive mode.** Listen to a live outbound call and score it without injecting into the conversation, for QA monitoring.

## Outbound Number Pool

---

Outbound test calls originate against numbers reserved from a dedicated pool. You can view the pool status and available numbers, view and manage the reservations held per suite, and clear reservations to release numbers when a run is done.

## Everything Else Mirrors Inbound Testing

---

Aside from the differences above, outbound testing is identical to inbound. Phone number management, voice and background-noise configuration, agent profiles, test suites, call execution, post-evaluation recording analysis, the go-live assessment, and scheduling all work the same way.

For the full detail on each, see [inbound phone agent testing](/support/docs/inbound-phone-agent/).

## Metrics

---

Outbound agents are evaluated across the same 8 metric categories and 30+ individual metrics as inbound: conversation flow and interaction dynamics, accuracy and effectiveness, user experience and satisfaction, business operational metrics, audio voice quality, speech-to-text evaluation, validation results, and automated issue tags.

For the full metric tables and thresholds, see the [inbound phone agent metrics](/support/docs/inbound-phone-agent/#metrics).

## Related TestMu AI Guides

---

- See how to [test an inbound phone agent](/support/docs/inbound-phone-agent/) for the shared features and full metrics.
- See the [phone agent testing overview](/support/docs/phone-agent/) for both testing modes.
- See how to [run these tests from the terminal](/support/docs/testmu-a2a-cli/) with the A2A CLI.
