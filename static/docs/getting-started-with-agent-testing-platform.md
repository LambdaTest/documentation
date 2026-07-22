# Getting Started With the Agent Testing Platform

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI [Agent Testing](https://www.testmuai.com/agent-testing/) Platform validates AI agents the way real users interact with them. It deploys 15+ autonomous AI testing agents to evaluate any chat, voice, phone, or image agent against standardized quality metrics, then returns a Green, Yellow, or Red production readiness verdict before and after you deploy.

It is the first platform to test chat, voice, phone, and image agents in one place. Connecting an agent takes three inputs and no SDK: upload the documents that describe it, define its intended behavior, and point the platform at its endpoint or phone number.

## Why AI Agents Need a Dedicated Testing Platform

Traditional QA tests deterministic software: a selector either matches or it does not. AI agents return a different answer every run, so the old assertions no longer apply. Five gaps appear when teams ship agents without agent-specific testing.

- **Manual testing does not scale.** A QA engineer reviews 50 to 200 scenarios a week. Agents need thousands to cover the input space, so coverage stays a fraction of what production sees.

- **Non-determinism breaks scripted checks.** The same prompt produces different reasoning each run. There is no fixed string to assert against, so pass/fail scripts miss real failures.

- **Failure is asymmetric.** A broken button is a bug. A hallucinating healthcare bot or a biased financial agent is a liability and a compliance exposure.

- **Feedback loops are slow.** Days-long manual review blocks iteration and delays every release that changes the model or the prompt.

- **Evaluation is subjective.** Reviewers disagree on whether a response is complete or biased. Scores drift between people and cannot be audited.

## Start by Understanding the Platform

Learn what the platform tests and how it scores an agent before you run anything.

    Architecture &amp; How Evaluation Works
    The five-phase evaluation loop and the 15+ testing agents that score your agent.

## Run Your First Test

Pick the interface that matches how you work and run an evaluation end to end.

    Quickstart (UI)
    Create an agent, generate scenarios, and run an evaluation from the dashboard.

    Quickstart (CLI)
    Test chat and phone agents from your terminal and wire them into CI/CD.

    Quickstart (API)
    Connect a chat agent over its API: request format, authentication, and response schema.

    Quality Dimensions
    How scoring, thresholds, and the Green, Yellow, or Red go-live verdict work.

## Test by Agent Type

Go deeper into the workflow and metrics for your specific agent type.

    Chat Agent Testing
    How multi-turn chat conversations are simulated and scored.

    Phone Agent Testing
    Real calls, voice and noise simulation, and the two phone directions.

    Inbound Phone Agent Testing
    The full workflow for an agent that answers calls.

    Outbound Phone Agent Testing
    The workflow for an agent that places calls.

    Image Analyzer Testing
    Score generated images against a prompt, brand rules, and technical specs.

## Get Help

Find answers to common questions about the platform.

    Agent Testing FAQs
    Answers on multilingual support, model governance, and data connectors.
