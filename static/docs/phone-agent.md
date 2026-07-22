# Phone Agent Testing With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The Agent Testing Platform tests phone voice agents by placing real telephone calls, not simulations. An AI-powered simulated caller follows a scenario, the platform records the full conversation, and it scores the call across 30+ call quality metrics. It covers inbound support lines, IVR flows, and outbound dialers.

Phone agents come in two directions, inbound and outbound, and each has its own workflow. This page covers what is shared across both. See the dedicated guides for [inbound phone agent testing](/support/docs/inbound-phone-agent/) and [outbound phone agent testing](/support/docs/outbound-phone-agent/).

## Features

Phone testing runs in two modes, both scored with the same 30+ metrics.

**Live test calls.** The platform places a real call and drives the conversation with a simulated caller. During the call it tracks duration in real time, produces a speaker-identified transcript, and detects DTMF tones for menu navigation.

**Recording analysis.** Upload batches of recorded production calls (MP3 or WAV) and the platform scores them with the same metrics, so you can monitor real production quality without placing new calls.

**Voice and noise simulation.** To match production conditions, the platform simulates the voice and acoustic environment per scenario:

- **Voice profiles:** 200+ voices across providers, with accents and speech speeds.
- **Background noise:** 15 presets such as café, street, call center, and poor cellular connection.
- **Response timing:** a configurable delay from 0.5 to 5.0 seconds, and a maximum call duration from 60 to 1800 seconds.

**Shared capabilities.** Phone agents also support test suites, agent profiles, a Green, Yellow, or Red go-live assessment, and cron-based scheduled runs. See the [inbound](/support/docs/inbound-phone-agent/) and [outbound](/support/docs/outbound-phone-agent/) guides for the direction-specific workflow.

## Metrics

Every call is scored across 8 metric categories with 30+ individual metrics: conversation flow and interaction dynamics, accuracy and effectiveness, user experience and satisfaction, business operational metrics, audio voice quality, speech-to-text evaluation, validation results, and automated issue tags. Key metrics include First Call Resolution, CSAT, containment rate, intent recognition accuracy, and speech-to-text accuracy across accents and noise.

For the full metric tables and thresholds, see the [inbound phone agent metrics](/support/docs/inbound-phone-agent/#metrics).

## Run a Phone Agent Test

Phone tests run from the dashboard or the CLI, driven by scenarios grouped into suites. Pick the direction that matches your agent.

- To test an agent that answers calls, see [inbound phone agent testing](/support/docs/inbound-phone-agent/).
- To test an agent that places calls, see [outbound phone agent testing](/support/docs/outbound-phone-agent/).
- To run calls from the terminal, see how to [test phone agents with the CLI](/support/docs/testmu-a2a-cli/).

## Related TestMu AI Guides

- See how to [test an inbound phone agent](/support/docs/inbound-phone-agent/) step by step.
- See how to [test an outbound phone agent](/support/docs/outbound-phone-agent/) step by step.
