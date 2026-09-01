# How to Test an Inbound Phone Agent With TestMu AI Agent Testing Platform

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

An inbound phone agent answers calls. To test one, the Agent Testing Platform places a real call to the agent's phone number and a simulated caller drives the scenario. Typical use cases are IVR menus, inbound support, appointment scheduling, and billing.

Inbound testing runs in two modes: **pre-evaluation** with live simulated calls, and **post-evaluation** on recordings from real production calls.

## Pre-Evaluation: Live Test Calls

In pre-evaluation, the platform simulates customers calling your voice agent, then evaluates the resulting conversations.

**Phone Number Management.** Register the numbers your agent answers on, with country code selection (20+ countries), a default number, masked display, and edit or delete.

**Scenario Management.** Generate up to 20 inbound scenarios with configurable personas, languages, and special instructions, or create them manually. Choose from available personas or create custom ones.

**Voice Configuration (per scenario).** Select a voice from the library with audio preview, enable one of 15 background-noise presets, set the response timing (0.5 to 5.0 seconds) and a maximum call duration (60 to 1800 seconds), and choose who speaks first.

**Agent Profiles.** Create reusable caller personas with name, phone number, voice, and background noise, stored in an organization-level library with an active or inactive toggle.

**Test Suites.** Group scenarios with per-scenario voice and phone configuration, associate test and agent profiles, and run the whole suite with one action.

**Call Execution and Monitoring.** Initiate live test calls, track status in real time, watch a live duration counter, and terminate a call in progress.

## Post-Evaluation: Recording Analysis

In post-evaluation, you upload recordings from real production calls and score them with the same metrics, without placing new calls.

**Voice Analytics.** Upload production recordings (MP3, WAV) and transcripts, analyze them in parallel batches, select which metric categories or individual metrics to run, and bookmark, tag, search, and filter recordings.

**Recording Playback.** Play any call with play, pause, and duration controls, follow a speaker-identified transcript, see DTMF keypad inputs (0 to 9, star, pound) captured in the transcript, and download the audio and transcript.

## Shared Across Both Modes

**Go-Live Assessment.** Get a Green (score at least 80), Yellow (65 to 79), or Red (below 65) verdict, with confidence based on call volume, dimension scores, scenario coverage, failure pattern analysis, validation-criteria compliance, and prioritized action items.

**Metric Configuration.** Select which metric categories or individual metrics to run per project.

**Scheduled Runs.** Automate runs with cron-based scheduling, IANA timezones, pause and resume, and run history.

## Metrics

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

- See the [phone agent testing overview](/support/docs/phone-agent/) for both testing modes.
- See how to [test an outbound phone agent](/support/docs/outbound-phone-agent/).
- See how to [run these tests from the terminal](/support/docs/agent-testing-cli/) with the A2A CLI.
