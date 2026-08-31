# How the AI Agent Testing Platform Evaluates Agents

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The AI Agent Testing Platform runs every evaluation through five phases: configure context, generate scenarios, run the testing agents, score each interaction, and return a production readiness verdict. 15+ specialized testing agents drive it, each probing one quality dimension, all in parallel against your agent's real endpoint.

You run it from one hosted web application, the REST API, the CLI, or a CI/CD pipeline. There is no SDK to install and no local infrastructure to operate.

## The Five-Phase Evaluation Loop



Every run follows the same path, from the context you upload to a go or no-go verdict. The phases always execute in order.

1. **Configure agent context.** Upload the documents that describe the agent (PDF, DOCX, images, audio, video, JIRA tickets, Confluence pages), write the agent prompt that defines correct behavior, and add instructions, constraints, or focus areas for the run.

2. **Generate scenarios.** The platform generates 60 to 100+ test scenarios from that context, distributed across happy-path flows, edge cases, adversarial inputs, persona-specific scenarios, and compliance checks.

3. **Run autonomous evaluation.** 15+ specialized testing agents interact with your agent through its real channel, a chat API, a voice endpoint, or a phone number, in parallel.

4. **Score each interaction.** Every scenario is scored per metric with a pass or fail result, a confidence level of High, Medium, or Low, and an evidence excerpt from the conversation. Scores aggregate per metric across the run.

5. **Return a readiness verdict.** All scores roll up into a single Green, Yellow, or Red production readiness verdict.

The agent prompt in phase one is the evaluation baseline. It tells the platform what a correct response looks like, so the quality of the verdict depends on how precisely you define it.

## The Specialized Testing Agents



The platform does not rely on a single evaluator. 15+ testing agents each own one quality dimension, the way a review panel produces a more reliable assessment than one reviewer. They run against the same conversation in parallel.

| Testing agent | What it evaluates |
|---|---|
| Hallucination Hunter | Detects invented facts, policies, or data |
| Bias Detector | Identifies differential treatment across demographics |
| Completeness Validator | Confirms responses fully address the user's need |
| Context Specialist | Tracks whether the agent maintains session history |
| Tone and Personality Agent | Evaluates communication style and empathy |
| Edge Case Generator | Probes with unexpected, off-script inputs |
| Escalation Handler | Validates correct handoff to human agents |
| Compliance Validator | Checks adherence to regulatory and policy requirements |
| Reasoning Validator | Assesses logical consistency across turns |
| Toxicity Screener | Flags harmful, offensive, or inappropriate outputs |
| Security Researcher | Tests for data exfiltration and prompt injection |
| Data Privacy Guardian | Checks for PII exposure and mishandling |
| Accessibility Specialist | Evaluates responses for accessibility |
| Performance Monitor | Tracks latency and response completeness under load |
| User Experience Evaluator | Assesses overall user journey quality |

## Security & red-teaming



Agent Testing red-teams AI agents with adversarial scenario suites aligned to the OWASP Top 10 for LLM applications: prompt injection (LLM01), insecure output handling (LLM02), sensitive-information disclosure and PII leakage (LLM06), data exfiltration, jailbreak, and policy violations.

Toxicity, bias and harmful-content generation are evaluated as first-class metrics across the tested persona set. Every finding is evidence-backed - the specific conversation turns that triggered a flag are preserved with per-turn attribution and confidence intervals, exportable for regulatory documentation - and the A2A CLI runs the same scenarios in CI so security testing gates every release.

## Platform Architecture Layers



The platform is a single hosted web application. A request flows through six layers, from the interface you configure in to the external providers that place calls and run models.




  Platform Architecture
  End-to-end flow from test configuration to production-readiness assessment




    Web Application


    REST API / CLI


    CI/CD Pipelines


Projects, scenarios, suites, and schedules are configured here

▼
Authenticated requests (Bearer / API Key)



    Authentication & Authorization Layer


Per-organization isolation · Encrypted credential storage · Tunnel proxy for private agents

▼
Validated request routed to testing modules



    TESTING ENGINE


    Orchestrates scenario execution across all agent modalities



      📞
      Phone Testing
      Inbound & Outbound
      Real calls via telephony providers


      💬
      Chat Testing
      Webhook & API
      Multi-turn HTTP conversations


      🎙️
      Voice Testing
      Real-time Multi-transport
      REST, WebSocket & WebRTC


      🖼️
      Image Evaluation
      Generation & Scoring
      Prompt → image → quality check




    CORE CAPABILITIES


        AI Scenario Generation
        60-100+ from your docs


        Test Orchestration
        Parallel suite execution


        Scheduling Engine
        Cron-based regression runs




Executes tests against your agent · Captures recordings & conversation logs

▼
Completed conversations sent for AI-powered scoring



    AI EVALUATION LAYER


    Scores every conversation across standardized quality dimensions



      18+ Quality Dimensions


      Recording Analysis


      Go-Live Assessment


      Threshold Scoring



Produces per-scenario scores · Aggregates into Go-Live verdict (🟢 Green / 🟡 Yellow / 🔴 Red)

▼
Results, recordings & assets persisted



    Managed Database
    Scores & metadata


    Cache & Pub/Sub
    Live SSE streaming


    Encrypted Object Store
    Recordings & uploads


All data encrypted at rest · TLS in transit · Per-org isolation

▼
Platform connects to your existing providers - no vendor lock-in



    EXTERNAL INTEGRATIONS



      Telephony Providers
      Call placement & routing


      Voice Providers
      Voice session management


      Speech Services
      TTS & STT engines


      Issue Trackers
      Jira, GitHub, Confluence


      AI Models
      Scenario gen & evaluation






| Layer | What it does |
|---|---|
| Interface & access | Web app, REST API, CLI, and CI/CD pipelines configure projects, scenarios, and schedules. Requests authenticate with a Bearer token or API key. |
| Authentication & isolation | Isolates data per organization, stores third-party credentials encrypted, and reaches private agents through a secure tunnel proxy. |
| Testing engine | Runs the chat, voice, phone, and image modules, generates scenarios, orchestrates parallel execution, and schedules recurring runs. |
| Evaluation layer | Scores conversations with the testing agents, analyzes uploaded recordings, and produces the go-live assessment against configurable thresholds. |
| Data persistence | Stores scores and metadata in a managed database, streams live run status over server-sent events, and keeps recordings and uploads in encrypted object storage. |
| External integrations | Connects telephony and voice providers, speech-to-text and text-to-speech engines, issue trackers (Jira, GitHub, Confluence), and the AI models used to generate and score. |

## How the Platform Reaches Your Agent



The testing agents talk to your agent through the same interface real users do. The transport depends on the agent type.

- **Chat:** HTTP requests to your API endpoint.
- **Voice:** a real-time voice session over REST, WebSocket, or WebRTC.
- **Phone inbound:** a real phone call placed to the agent's number.
- **Phone outbound:** a provisioned number the agent calls, which the platform answers and scores.
- **Image:** prompts or images submitted to the generation endpoint.

Agents on a private network are reached through the secure tunnel, so the endpoint never needs a public URL.

## What the Metrics and Verdict Produce



The testing agents score chat and voice agents across 9 quality metrics and phone agents across 30+ call metrics. Each score carries a confidence level based on how many scenarios backed it.

The verdict is a deployment decision, not just a number. Green clears the agent for production, Yellow flags specific issues to fix first, and Red blocks deployment. Every verdict links back to the conversation turns that drove it, so a failing result points straight at the fix.

## Related Agent Testing Guides



- See how to [run your first evaluation from the dashboard](/support/docs/testing-your-first-ai-agent/).
