# Quality Dimensions and Go-Live Readiness for AI Agents

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The Agent Testing Platform scores every agent conversation across a set of quality dimensions, applies the pass/fail thresholds you configure, and rolls the results into a Green, Yellow, or Red go-live verdict. This page explains what the platform measures, how thresholds work, and how the production readiness verdict is decided.

## How the Platform Scores Conversations



Every completed conversation, voice or chat, is scored by the evaluation engine across a set of quality dimensions. Each dimension is scored on a normalized 0.0 to 1.0 scale, with configurable pass/fail thresholds per project.

The exact set of metrics depends on the agent type. Chat and voice agents are scored across 9 quality metrics, and phone agents across 30+ call metrics.

Commonly scored dimensions include the following.

| Quality Dimensions | | |
|----------------------|-|-|
| Hallucination Detection | Bias Detection | Response Quality |
| Context Awareness | Completeness | Conversation Flow |
| User Satisfaction | Intent Recognition | Multi-Turn Reasoning |
| Error Handling & Recovery | Consistency | Proactive Behavior |
| Compliance & Governance | Data Privacy | Security Posture |
| Escalation Accuracy | Personality & Tone | Audit Logging Quality |

## Configure Metric Thresholds



Each project can define custom minimum thresholds per dimension. A regulated deployment might require a Compliance score of at least 0.95 and a Data Privacy score of at least 0.98, while a consumer chatbot might prioritize Conversation Flow and User Satisfaction at a lower floor.

Threshold profiles are version-controlled and can differ across environments such as development, staging, and production. A conversation passes a dimension when its score meets or exceeds the threshold you set for it.

## Read the Go-Live Readiness Verdict



The Go-Live Assessment aggregates results across all evaluated scenarios and dimensions into a three-tier production readiness verdict.

| Verdict | Meaning |
|---------|-------------|
| 🟢 **Green** | All critical thresholds met. The agent behaves consistently across tested scenarios. Cleared for production. |
| 🟡 **Yellow** | Most thresholds met; one or more secondary metrics fall below target. Conditional approval with identified risk areas to monitor. |
| 🔴 **Red** | One or more critical thresholds not met. Specific failure categories are surfaced for remediation before production. |

Each verdict carries an overall aggregate score and a confidence level, plus a pass/fail breakdown across the behavioral test categories.

### Confidence Levels

The confidence level tells you how far to trust the verdict, based on how many scenarios backed it. A Green verdict at High confidence is a stronger signal than the same verdict at Low confidence.

| Confidence | Evaluations behind the score |
|---|---|
| **High** | 100 or more |
| **Medium** | 50 to 99 |
| **Low** | 20 to 49 |
| **Very Low** | Fewer than 20 |

For compliance and hallucination metrics especially, raise the scenario count until confidence is High before making a deployment decision.

## Behavioral Test Categories



Generated scenarios are organized across sixteen behavioral categories, so a run covers the full spread of agent capabilities and failure modes rather than only the happy path.

| Test Categories | | |
|----------------|-|-|
| Conversational Flow | Intent Recognition | Context & Memory |
| Multi-Turn Reasoning | User Experience | Personality & Tone |
| Proactive Behavior | Multimodal Interactions | Third-Party Integration |
| Error Handling | Consistency | Security |
| Compliance & Governance | Data Privacy | Performance |
| Recovery Mechanisms | | |

The Go-Live verdict reports pass/fail rates per category, so a Yellow or Red result points at the specific category to fix.

## Track Cost and Usage



The platform tracks per-test execution costs, such as call minutes consumed and AI evaluation compute, and aggregates usage at the project, suite, and organization level. This gives teams budget visibility and lets them attribute testing costs across products or internal teams.

## Related TestMu AI Guides



- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/), from context to verdict.
