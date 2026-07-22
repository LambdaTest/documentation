# Chat Agent Testing With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The Agent Testing Platform tests a chat agent by holding multi-turn conversations with it through its API, following AI-generated scenarios, and scoring each conversation across quality metrics. It covers text chatbots, virtual assistants, IT helpdesks, and FAQ bots.

You provide the endpoint, the agent's intended behavior, and any requirement documents. The platform generates the scenarios and runs the conversations. No code changes to your agent are required.

## How Chat Agent Testing Works

The platform generates 60 to 100+ scenarios from your prompt and uploaded documents, then runs each one as a full conversation. Testing agents send multi-turn HTTP messages to your endpoint, read the reply from each response, and decide the next message based on the scenario goal and prior context.

A conversation ends when the goal is met, the maximum turn count is reached, or an unrecoverable error occurs. Each completed conversation is then scored. For the request and response mechanics, see how to [connect a chat agent over its API](/support/docs/chat-agent-api-integration/).

## What Chat Testing Evaluates

Every chat conversation is scored across the 9 chat and voice quality metrics, such as hallucination, bias, completeness, context awareness, response quality, and conversation flow. Each metric is scored on a 0.0 to 1.0 scale against the thresholds you set.

Scenarios are drawn from behavioral test categories, including intent recognition, context and memory, multi-turn reasoning, error handling, and compliance.

## Run a Chat Agent Test

You can test a chat agent three ways. All three run the same evaluation and produce the same scored results.

- **Dashboard:** create the agent, upload documents, generate scenarios, and run the evaluation. See how to [run your first evaluation in the UI](/support/docs/testing-your-first-ai-agent/).
- **CLI:** point `testmu-a2a test` at your endpoint for a one-command run, or drive scenarios and suites from a config file. See how to [test chat agents from the terminal](/support/docs/testmu-a2a-cli/).
- **API integration:** configure the endpoint, authentication, and request or response format directly. See how to [connect a chat agent over its API](/support/docs/chat-agent-api-integration/).

## Read the Results

Each run produces per-metric scores with pass or fail badges, full transcripts for failing conversations annotated with the evidence that drove the score, and score deltas against previous runs. The scores roll up into a Green, Yellow, or Red go-live verdict.

For how thresholds and the verdict are decided, see [quality dimensions and the go-live verdict](/support/docs/ai-agent-testing-platform-overview/).

## Features

The chat agent workflow includes the following features.

**Workflow-Based Test Generation.** Connect knowledge sources and auto-generate scenarios, with no manual scripting.

- Upload knowledge base documents (PDF, text files).
- Connect Confluence, JIRA, or GitHub as knowledge sources.
- Generate test scenarios automatically from uploaded documents.
- Watch generation progress stream live.

**Scenario Management.** Build and manage the conversations you test, manually or with AI.

- Create scenarios manually with title, description, and expected behavior, or generate them from knowledge sources.
- Define custom pass/fail validation criteria per scenario.
- Add special instructions, assign personas, and link test data profiles.

**Test Suites.** Group related scenarios and track results over time, with run history and status filtering.

**Endpoint Profiles.** Configure how the platform connects to your agent's API.

- Import a Postman collection or configure endpoints manually via JSON.
- Set up multi-phase execution: suite setup (login/auth), scenario setup (session creation), and chat.
- Manage static, auto-generated, and extracted variables, with retry, caching, endpoint testing, and import/export.

**Test Profiles.** Reusable key-value test data with typed fields, default profiles, and JSON import/export, injected at runtime for data-driven testing.

**Playground.** Interactively test your agent before a full run, with multi-turn chat, cURL connection testing, and request/response schema analysis.

**Evaluation Execution.** Run evaluations at scale with metric selection, endpoint profile selection, HyperExecute integration with tunnel support for private agents, and real-time streaming over server-sent events.

**Metric Threshold Configuration.** Set a minimum score (0.0 to 1.0) per metric, configure higher or lower is better, and save named threshold configurations.

**Go-Live Assessment.** Get a Green, Yellow, or Red production readiness verdict with an overall score (0 to 100), confidence level, dimension scores, scenario coverage, risk assessment, and AI recommendations.

**Scheduled Runs.** Automate regression coverage with cron-based scheduling, IANA timezones, pause and resume, and run history.

## Metrics

Chat agents are evaluated on 9 quality metrics, each scored on a 0 to 100% scale.

| # | Metric | What it measures |
|---|--------|------------------|
| 1 | Bias Detection | Detects biased, discriminatory, or unfair responses |
| 2 | Hallucination Detection | Identifies false, fabricated, or unsupported information |
| 3 | Completeness | Whether the agent fully addresses the user's question |
| 4 | Context Awareness | How well the agent understands and maintains conversation context |
| 5 | Response Quality | Overall quality, clarity, and helpfulness of responses |
| 6 | Conversation Flow | Natural flow and coherence across multi-turn conversations |
| 7 | User Satisfaction | Estimated end-user satisfaction based on conversation quality |
| 8 | File Handling Quality | Quality of file upload and download interactions, if applicable |
| 9 | File Generation Accuracy | Accuracy of generated files against requirements, if applicable |

Every evaluation result includes the overall score, per-metric scores with pass or fail badges, detailed analysis, the full multi-turn transcript, identified strengths, areas for improvement, actionable recommendations, and validation criteria results.

## Related TestMu AI Guides

- See how to [connect a chat agent over its API](/support/docs/chat-agent-api-integration/).
