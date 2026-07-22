---
id: inbound-phone-agent
title: Inbound Phone Agent Testing With TestMu AI
hide_title: false
sidebar_label: Inbound Phone Agents
description: Test an inbound phone agent on TestMu AI. Create a phone project, set the prompt, generate scenarios, run a call suite, and check the go-live assessment.
keywords:
 - inbound phone agent testing
 - ivr testing
 - inbound voice agent evaluation
 - phone caller inbound
 - call suite testing
url: https://www.testmuai.com/support/docs/inbound-phone-agent/
site_name: TestMu AI
slug: inbound-phone-agent/
canonical: https://www.testmuai.com/support/docs/inbound-phone-agent/
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
          "name": "Inbound Phone Agent Testing",
          "item": `${BRAND_URL}/support/docs/inbound-phone-agent`
        }]
      })
    }}
></script>

# Inbound Phone Agent Testing With TestMu AI

---

An inbound phone agent answers calls. To test one, the Agent Testing Platform places a real call to the agent's phone number and a simulated caller drives the scenario. Typical use cases are IVR menus, inbound support, appointment scheduling, and billing.

This guide runs the full CLI workflow, from creating a phone project to a go-live assessment. Commands are verified against the current `testmu-a2a-cli`. Run `testmu-a2a --version` to check your installed build.

## Create an Inbound Phone Project

---

Create a project with the `phone_caller_inbound` type. Note the project ID from the output, since later steps need it.

```bash
testmu-a2a projects create \
    --name "Airline Support Agent" \
    --description "Testing our IVR booking agent" \
    --type phone_caller_inbound
```

## Set the Agent Prompt

---

The prompt is the most important input. It drives scenario generation, evaluation criteria, and the go-live assessment. Define it in a YAML file so the prompt, context, and requirement documents live in one place.

```bash
testmu-a2a prompts set --project <project_id> --from-file prompt.yaml
```

```yaml
prompt: |
  You are an airline booking assistant. You help customers find flights,
  make reservations, handle cancellations, and process refunds.
  Always verify the customer's identity before making changes.
context: "Agent must comply with DOT airline passenger rights regulations"
files:
  - ./compliance_rules.pdf
  - ./fare_structure.docx
```

Verify what was saved with `testmu-a2a prompts get --project <project_id>`.

## Generate and Review Scenarios

---

Generate inbound scenarios across the caller personas you want to cover. You can generate up to 20 scenarios per run.

```bash
testmu-a2a phone-scenarios generate \
    --project <project_id> \
    --count 5 \
    --personas "frustrated,confused,elderly,rushed" \
    --instructions "Test flight booking, cancellation, and rebooking"
```

Review them with `testmu-a2a phone-scenarios list --project <project_id>`, and add manual scenarios with `testmu-a2a phone-scenarios create` when you need a specific case.

## Create and Run a Call Suite

---

Group scenarios into a suite, then run it. Use a YAML file when you need per-scenario call settings such as the number, voice, and background sound.

```bash
testmu-a2a suites create \
    --project <project_id> \
    --name "Booking Flow Regression" \
    --scenarios "<scenario_id_1>,<scenario_id_2>,<scenario_id_3>"

testmu-a2a suites run --project <project_id> --name "Booking Flow Regression"
```

Each scenario in a suite YAML accepts `phone_number`, `voice`, `voice_provider`, `background_sound_enabled`, `background_sound_url`, `first_speaker`, `wait_seconds` (0.5 to 5.0), and `max_duration_seconds` (60 to 1800).

## Check Results and Go-Live Readiness

---

List the call results, open a single call, or summarize the suite. Then run a go-live assessment for a production readiness verdict.

```bash
testmu-a2a call-results list --project <project_id>
testmu-a2a call-results summary <suite_id>
testmu-a2a assessments create --project <project_id> --type phone
```

To run the suite on a schedule, add `testmu-a2a schedules create --project <project_id> --suite <suite_id> --frequency daily --time 09:00`.

## Features

---

Inbound testing runs in two modes: pre-evaluation with live simulated calls, and post-evaluation on uploaded production recordings.

**Phone Number Management.** Register the numbers your agent answers on, with country code selection (20+ countries), a default number, masked display, and edit or delete.

**Scenario Management.** Generate up to 20 inbound scenarios with configurable personas, languages, and instructions, or create them manually. Choose from available personas or create custom ones.

**Voice Configuration (per scenario).** Select a voice from the library with audio preview, enable one of 15 background-noise presets, set response timing (0.5 to 5.0 seconds), set a maximum call duration (60 to 1800 seconds), and choose who speaks first.

**Agent Profiles.** Create reusable caller personas with name, phone number, voice, and background noise, stored in an organization-level library with an active or inactive toggle.

**Test Suites.** Group scenarios with per-scenario voice and phone configuration, associate test and agent profiles, and run the whole suite with one action.

**Call Execution and Monitoring.** Initiate live test calls, track status in real time, watch a live duration counter, and terminate a call in progress.

**Recording Analysis (post-evaluation).** Upload production recordings (MP3, WAV) and transcripts, analyze them in batches, and select which metrics to run. Play back any call with a speaker-identified transcript, DTMF detection (0 to 9, star, pound), and download.

**Go-Live Assessment.** Get a Green (score at least 80), Yellow (65 to 79), or Red (below 65) verdict, with confidence based on call volume, dimension scores, scenario coverage, failure pattern analysis, and prioritized action items.

**Scheduled Runs.** Automate runs with cron scheduling, IANA timezones, pause and resume, and run history.

## Metrics

---

Phone agents are evaluated across 8 metric categories with 30+ individual metrics.

**A. Conversation Flow and Interaction Dynamics**

| Metric | Unit | What it measures |
|--------|------|------------------|
| Average Latency | ms | Time to respond after the user stops speaking |
| Words Per Minute | wpm | Agent speaking speed |
| AI Talk Ratio | % | Share of call time the agent is speaking |
| User Talk Ratio | % | Share of call time the user is speaking |
| AI Interrupting User | % | How often the agent interrupts the user |
| User Interrupting AI | % | How often the user interrupts the agent |

**B. Accuracy and Effectiveness**

| Metric | Unit | What it measures |
|--------|------|------------------|
| First Call Resolution | % | Whether the issue was resolved in a single call |
| Intent Recognition Accuracy | % | How accurately the agent understood intent |
| Task Completion Success Rate | % | Share of assigned tasks completed |
| Instruction Following | % | Adherence to configured instructions |
| Response Consistency | % | Consistency of responses to similar inputs |

**C. User Experience and Satisfaction**

| Metric | Unit | What it measures |
|--------|------|------------------|
| CSAT | % | Overall customer satisfaction score |
| CSAT Reason | Text | Explanation for the satisfaction score |
| User Sentiment | Text | Detected emotional sentiment from user speech |
| Early Termination | % | Share of calls not terminated prematurely |

**D. Business Operational Metrics**

| Metric | Unit | What it measures |
|--------|------|------------------|
| Containment Rate | % | Issues resolved without human escalation |
| AI to Human Handoff Rate | % | Frequency of escalation to a human agent |

**E. Audio Voice Quality**

| Metric | Unit | What it measures |
|--------|------|------------------|
| Average Pitch | Hz | Voice pitch (normal: 85 to 300 Hz) |
| Voice Quality Index | 0 to 5 | Composite voice quality score |
| Signal-to-Noise Ratio | % | Audio clarity versus background noise |

**F. Speech-to-Text Evaluation**

| Metric | Unit | What it measures |
|--------|------|------------------|
| STT Accuracy | % | Transcription accuracy |
| STT Verdict | Pass/Fail | Overall transcription quality judgment |
| STT Summary | Text | Detailed transcription quality notes |
| Mismatch Examples | List | Instances where transcription differed from speech |

**G. Validation Results**

| Metric | Unit | What it measures |
|--------|------|------------------|
| Compliance | % | Compliance rate against custom validation criteria |
| Pass/Fail/Unable to Verify | Count | Per-criterion validation breakdown |

**H. Detected Issue Tags (automated).** Every recording is auto-scanned for: latency issues, hallucination in call flow, transcript issues, patchy audio, running in a loop, incorrect STT, interruption handling, number issues, background noise, no response, and blank or empty STT.

**Threshold reference**

| Metric | Excellent | Good | Poor |
|--------|-----------|------|------|
| Average Latency | at most 1000 ms | at most 2500 ms | over 2500 ms |
| Words Per Minute | at least 160 (fast) | 131 to 160 | under 110 (slow) |
| Voice Quality Index | at least 2.5 / 5 | n/a | under 2.5 / 5 |
| Average Pitch | 85 to 300 Hz | n/a | under 85 or over 300 Hz |

## Related TestMu AI Guides

---

- See the [phone agent testing overview](/support/docs/phone-agent/) for live and recording modes.
- See how to [test an outbound phone agent](/support/docs/outbound-phone-agent/).
- See the full [A2A CLI command reference](/support/docs/testmu-a2a-cli/).
