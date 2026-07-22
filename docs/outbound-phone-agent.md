---
id: outbound-phone-agent
title: Outbound Phone Agent Testing With TestMu AI
hide_title: false
sidebar_label: Outbound Phone Agents
description: Test an outbound phone agent on TestMu AI. Provision a number the agent calls, generate outbound scenarios, run a call suite, and score the conversations.
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

The workflow mirrors inbound testing, with a few outbound-specific differences. Commands are verified against the current `testmu-a2a-cli`. Run `testmu-a2a --version` to check your installed build.

## What Differs From Inbound Testing

---

Outbound testing changes three things compared to the inbound flow.

- **The agent speaks first.** The platform answers the call, so the default first speaker is the agent, matching real outbound behavior.
- **A number pool is provisioned.** The platform reserves a recipient number for the agent to dial, rather than calling the agent's number.
- **Passive listening is available.** The platform can observe and score a live outbound call without injecting into the conversation.

## Create an Outbound Phone Project

---

Create the project with the `phone_caller_outbound` type, then set the agent prompt the same way as inbound.

```bash
testmu-a2a projects create \
    --name "Sales Outreach Agent" \
    --description "Testing outbound sales calls" \
    --type phone_caller_outbound

testmu-a2a prompts set --project <project_id> \
    --prompt "You are a sales agent for Acme Corp. You call existing customers
    to offer premium plan upgrades. Be polite, handle objections gracefully,
    and never pressure the customer. If they say no, thank them and end the call."
```

## Generate Outbound Scenarios

---

Generate scenarios with the `--type outbound` flag so the platform builds outbound-appropriate caller profiles and objectives.

```bash
testmu-a2a phone-scenarios generate \
    --project <project_id> \
    --count 5 \
    --type outbound \
    --personas "busy executive,interested buyer,skeptical prospect" \
    --instructions "Agent offers premium plan upgrade, handles objections"
```

## Create, Run, and Score the Suite

---

Group the scenarios into a suite, run it, then check results and go-live readiness. These steps are identical to the inbound flow.

```bash
testmu-a2a suites create \
    --project <project_id> \
    --name "Outbound Sales Test" \
    --scenarios "<scenario_id_1>,<scenario_id_2>,<scenario_id_3>"

testmu-a2a suites run --project <project_id> --name "Outbound Sales Test"

testmu-a2a call-results summary <suite_id>
testmu-a2a assessments create --project <project_id> --type phone
```

## Features

---

Outbound testing shares all inbound features (phone number management, voice configuration, test suites, call execution, recording analysis, go-live assessment, and scheduling). It adds a few outbound-specific features in pre-evaluation mode.

**Scenario Generation.** Generate up to 7 outbound scenarios, versus 20 for inbound.

**Caller Profile Selection.** Select an outbound caller profile when generating scenarios.

**Outbound Number Pool.** Reserve numbers from the outbound pool for test calls, view pool status and per-suite reservations, and clear reservations when done.

**Passive Mode.** Listen to outbound calls without interfering, for QA monitoring.

**First Speaker Default.** The agent speaks first, versus the simulator for inbound.

For the shared features in detail, see [inbound phone agent testing](/support/docs/inbound-phone-agent/).

## Metrics

---

Outbound agents are evaluated across the same 8 metric categories and 30+ metrics as inbound: conversation flow and interaction dynamics, accuracy and effectiveness, user experience and satisfaction, business operational metrics, audio voice quality, speech-to-text evaluation, validation results, and automated issue tags.

For the full metric tables and thresholds, see the [inbound phone agent metrics](/support/docs/inbound-phone-agent/#metrics).

## Related TestMu AI Guides

---

- See the [phone agent testing overview](/support/docs/phone-agent/) for live and recording modes.
- See how to [test an inbound phone agent](/support/docs/inbound-phone-agent/).
- See the full [A2A CLI command reference](/support/docs/testmu-a2a-cli/).
