---
id: agent-features-and-metrics
title: Agent Features & Metrics - Customer Reference Guide
hide_title: false
sidebar_label: Features & Metrics
description: A comprehensive overview of all customer-visible features and metrics for each agent type supported on the platform — Chat, Voice, Phone Caller Inbound, Phone Caller Outbound, and Image Analyzer.
keywords:
 - agent features
 - agent metrics
 - chat agent
 - voice agent
 - phone caller agent
 - image analyzer agent
 - agent to agent testing
url: https://www.testmu.ai/support/docs/agent-features-and-metrics/
site_name: LambdaTest
slug: agent-features-and-metrics/
canonical: https://www.testmu.ai/support/docs/agent-features-and-metrics/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Agent Features & Metrics",
          "item": `${BRAND_URL}/support/docs/agent-features-and-metrics`
        }]
      })
    }}
></script>

## Agent Types Overview

The platform supports **5 agent types**, each designed for a specific testing scenario:

<br />

| Agent Type | Primary Use Case | Key Differentiator |
|-----------|-----------------|-------------------|
| **Chat** | Test text-based chatbot agents | Multi-turn text conversation evaluation with 9 quality metrics |
| **Voice** | Test chatbot agents via audio conversations | Same as Chat, but conversations happen as audio (WAV) instead of text |
| **Phone Caller Inbound** | Test voice agents that receive calls | **Pre-evaluation** (live simulated calls) + **Post-evaluation** (production recording analysis) |
| **Phone Caller Outbound** | Test voice agents that make calls | **Pre-evaluation** (live outbound calls) + **Post-evaluation** (production recording analysis) |
| **Image Analyzer** | Validate AI-generated images | Image quality scoring against prompts and brand guidelines |

---

## Chat Agent

<Tabs>
<TabItem value="features" label="Features" default>

<br />

#### 📄 Workflow-Based Test Generation

Connect your knowledge sources and let the platform auto-generate test scenarios — no manual scripting needed.

- **Document Upload** — Upload knowledge base documents (PDF, text files) that your chatbot is expected to understand
- **Source Integrations** — Connect Confluence, JIRA, or GitHub as knowledge sources
- **AI Test Generation** — Automatically generates test scenarios from uploaded documents
- **Real-time Progress** — Live streaming of test generation progress

<br />

#### 🎭 Scenario Management

Build and manage the exact conversations you want to test, manually or via AI.

- **Manual Scenario Creation** — Create test scenarios with title, description, and expected behavior
- **AI-Generated Scenarios** — Auto-generate scenarios from uploaded knowledge sources
- **Validation Criteria** — Define custom pass/fail criteria per scenario (e.g., "Agent must mention return policy", "Agent should not hallucinate product prices")
- **Special Instructions** — Add specific instructions to guide scenario execution
- **Persona Assignment** — Assign user personas to scenarios (e.g., "frustrated customer", "first-time user")
- **Test Profile Association** — Link test data profiles to scenarios for data-driven testing
- **Scenario Deletion** — Remove scenarios that are no longer needed

<br />

#### 🗂️ Test Suites

Group related scenarios together and track results over time.

- **Suite Creation** — Group multiple scenarios into test suites
- **Test Profile Selection** — Assign a test data profile to the entire suite
- **Run History** — View all past runs with status, score, and timestamps
- **Status Filtering** — Filter results by Passed, Failed, In Progress

<br />

#### 🔌 Endpoint Profiles

Configure how the platform connects to your agent's API — supporting everything from simple REST calls to multi-phase auth flows.

- **Postman Collection Import** — Upload Postman collections (with optional environment files) to configure your agent's API. Supports nested folders, collection variables, and environment variable substitution
- **Manual Configuration** — Define endpoints via JSON with URL, method, headers, and body
- **Multi-Phase Execution** — Configure suite_setup (login/auth), scenario_setup (session creation), and chat (conversation) phases
- **Variable Management** — Define static values, auto-generated values (UUID, mobile number, timestamp, email), and extracted values from API responses
- **Retry & Caching** — Configure retry-on-failure and cache suite setup results to speed up execution
- **Test Endpoint** — Dry-run your endpoint profile to verify connectivity before running full evaluations
- **Import/Export** — Export profiles as JSON and import across projects
- **Default Profile** — Mark one profile as the default for quick evaluation runs

<br />

#### 🗃️ Test Profiles (Test Data)

Create reusable data sets to power data-driven testing across multiple scenarios.

- **Custom Key-Value Data** — Create reusable test data profiles with typed fields (string, number, boolean, email, URL, JSON)
- **Default Profile** — Mark one profile as the default
- **Import/Export** — Share test profiles across projects via JSON export/import
- **Data Injection** — Test data is injected at runtime for data-driven scenario execution

<br />

#### 🧪 Playground

Interactively test your agent configuration before running a full evaluation suite.

- **Interactive Chat** — Send messages to your configured agent endpoint in real-time
- **Multi-Turn Conversations** — Maintain conversation context across multiple messages
- **Connection Testing** — Test connectivity via cURL command verification
- **Schema Analysis** — Automatic detection of request/response schema from your endpoint

<br />

#### ⚡ Evaluation Execution

Run evaluations at scale with real-time feedback on your agent's quality.

- **Metric Selection** — Choose which quality metrics to evaluate (or run all)
- **Endpoint Profile Selection** — Pick which endpoint profile to evaluate against
- **HyperExecute Integration** — Run evaluations at scale using LambdaTest's HyperExecute infrastructure with optional tunnel configuration for testing agents behind firewalls or private networks
- **Real-Time Streaming** — Live progress updates during evaluation via Server-Sent Events

<br />

#### 🎚️ Metric Threshold Configuration

Define exactly what "passing" means for your project — then enforce it automatically.

- **Per-Metric Thresholds** — Set minimum acceptable score (0.0–1.0) for each metric
- **Higher/Lower is Better** — Configure directionality for each metric
- **Named Configurations** — Create named threshold configs (e.g., "Strict", "Default")
- **Active/Inactive Toggle** — Enable or disable threshold configurations

<br />

#### 🚦 Go-Live Assessment

Get a clear, defensible production-readiness verdict before you ship.

:::info Production Readiness Verdicts
| Verdict | Meaning |
|---------|---------|
| 🟢 **GREEN** | Ready for production |
| 🟡 **YELLOW** | Ready with caveats |
| 🔴 **RED** | Not ready |
:::

- **Overall Score** — Weighted composite score (0–100)
- **Confidence Level** — Based on number of evaluations run
  - HIGH: 100+ evaluations
  - MEDIUM: 50–99 evaluations
  - LOW: 20–49 evaluations
  - VERY_LOW: Fewer than 20 evaluations
- **Dimension Scores** — Functional Completeness, Quality Standards, Risk Profile, Operational Readiness (each weighted 25%)
- **Scenario Coverage** — Matrix showing well-tested vs. untested scenarios
- **Risk Assessment** — AI-powered failure pattern analysis with prioritized action items
- **Validation Criteria Summary** — Aggregated compliance rate across all criteria
- **AI Insights** — Actionable recommendations for improvement

<br />

#### 🗓️ Scheduled Runs

Automate ongoing regression coverage without manual intervention.

- **Cron-Based Scheduling** — Schedule evaluations with preset frequencies (Hourly, Daily, Weekdays, Weekly, Monthly) or custom cron expressions
- **Timezone Support** — Full IANA timezone selection
- **Pause/Resume** — Temporarily pause and resume scheduled runs
- **Run History** — Track all scheduled execution results

</TabItem>
<TabItem value="metrics" label="Metrics">

<br />

:::tip
Chat agents are evaluated on **9 quality metrics**, each scored on a **0–100% scale**.
:::

<br />

| # | Metric | What It Measures |
|---|--------|-----------------|
| 1 | **Bias Detection** | Detects biased, discriminatory, or unfair responses |
| 2 | **Hallucination Detection** | Identifies false, fabricated, or unsupported information |
| 3 | **Completeness** | Whether the agent fully addresses the user's question |
| 4 | **Context Awareness** | How well the agent understands and maintains conversation context |
| 5 | **Response Quality** | Overall quality, clarity, and helpfulness of responses |
| 6 | **Conversation Flow** | Natural flow and coherence across multi-turn conversations |
| 7 | **User Satisfaction** | Estimated end-user satisfaction based on conversation quality |
| 8 | **File Handling Quality** | Quality of file upload/download interactions (if applicable) |
| 9 | **File Generation Accuracy** | Accuracy of generated files against requirements (if applicable) |

<br />

**Every evaluation result includes:**

- Overall Score (weighted average of all metrics)
- Per-metric score with pass/fail badge (based on configured thresholds)
- Per-metric detailed analysis text
- Multi-turn conversation transcript (User/Agent exchanges)
- Strengths identified in the conversation
- Areas for improvement
- Actionable recommendations
- Validation criteria results (Pass/Fail/Unable to Verify per criterion with evidence and confidence level)

</TabItem>
</Tabs>

---

## Voice Agent

:::note
The Voice agent is functionally **identical to the Chat Agent**, with one key difference: conversations happen as **audio (WAV)** instead of text. The platform conducts voice-based conversations with your agent and evaluates the audio interaction using the same quality metrics.
:::

<Tabs>
<TabItem value="features" label="Features" default>

<br />

All features from the Chat Agent are available, including:

- Workflow-based test generation with document upload and source integrations
- Scenario management with AI generation, validation criteria, personas, and special instructions
- Test suites with test profile selection and run history
- Endpoint profiles with Postman collection import
- Test profiles for data-driven testing
- Playground for interactive testing
- Evaluation execution with metric selection and HyperExecute integration
- Metric threshold configuration
- Go-Live assessment with production readiness verdict
- Scheduled runs

<br />

:::caution What's Different from Chat
- Conversations with the agent are conducted via **audio (WAV)** instead of text messages
- The agent's voice responses are captured and transcribed for evaluation
- Evaluation is performed on the full audio conversation transcript
:::

</TabItem>
<TabItem value="metrics" label="Metrics">

<br />

Same **9 quality metrics** as the Chat agent:

<br />

| # | Metric |
|---|--------|
| 1 | Bias Detection |
| 2 | Hallucination Detection |
| 3 | Completeness |
| 4 | Context Awareness |
| 5 | Response Quality |
| 6 | Conversation Flow |
| 7 | User Satisfaction |
| 8 | File Handling Quality |
| 9 | File Generation Accuracy |

</TabItem>
</Tabs>

---

## Phone Caller Inbound Agent

:::info Two Evaluation Modes
| Mode | What It Does |
|------|-------------|
| **Pre-evaluation** | The platform simulates customers calling your voice agent with live test calls, then evaluates the resulting conversations |
| **Post-evaluation** | Upload your production call recordings and transcripts from real customer interactions for evaluation on the platform |
:::

<Tabs>
<TabItem value="pre-eval" label="Pre-evaluation (Live Test Calls)" default>

<br />

#### 📞 Phone Number Management

Register and manage the phone numbers your voice agent answers on.

- **Add Phone Numbers** — Register your agent's phone numbers with country code selection (20+ countries supported)
- **Default Phone Number** — Set a default number for quick test execution
- **Phone Number Display** — Masked display for security with country flag identification
- **Edit & Delete** — Update phone number details or remove numbers no longer in use

<br />

#### 🎭 Scenario Management

Generate realistic inbound call scenarios at scale with AI or build them manually.

- **AI Scenario Generation** — Generate up to 20 inbound test scenarios with configurable personas, languages, and special instructions
- **Manual Scenario Creation** — Create scenarios with name, description, expected output
- **Scenario Deletion** — Remove scenarios no longer needed
- **Persona Selection** — Choose from available personas or create custom ones to simulate different caller types
- **Language Support** — Generate scenarios in multiple languages (English, Spanish, etc.)

<br />

#### 🎙️ Voice Configuration (Per Scenario)

Control every detail of how the simulated caller sounds and behaves.

- **Voice Selection** — Choose from a library of voices with audio preview (multiple voice providers and accents available)
- **Voice Preview** — Listen to voice samples with animated waveform visualization before selecting
- **Background Sound** — Enable simulated background noise (15 presets: cafe, street, factory, rain, crowd, market, train, radio interference, etc.)
- **Response Timing** — Configure wait time after speech ends (0.5–5.0 seconds) to handle agents that speak in multiple sentences
- **Max Call Duration** — Set maximum call length (60–1800 seconds) to prevent runaway calls
- **First Speaker** — Choose who speaks first — the simulated user or the agent

<br />

#### 👤 Agent Profiles (Inbound-Specific)

Create reusable caller personas to standardize how test calls are placed across suites.

- **Agent Profile Creation** — Configure agent personas with name, phone number, voice, and background noise
- **Profile Library** — Organization-level reusable agent profiles
- **Active/Inactive Toggle** — Enable or disable profiles

<br />

#### 🗂️ Test Suites

Batch your inbound scenarios into suites and run them all with a single action.

- **Suite Creation** — Group multiple scenarios with per-scenario voice and phone configuration
- **Test Profile Association** — Link test data for data-driven voice testing
- **Agent Profile Assignment** — Associate agent profiles with suites
- **Run Suites** — Execute all scenarios in a suite with a single action

<br />

#### 📡 Call Execution & Monitoring

Trigger, track, and manage live test calls in real-time.

- **Initiate Test Calls** — Trigger simulated inbound calls to your voice agent
- **Real-Time Monitoring** — Track call status as calls progress
- **Call Duration Tracking** — Live duration counter during active calls
- **Call Termination** — End calls in progress if needed

</TabItem>
<TabItem value="post-eval" label="Post-evaluation (Recording Analysis)">

<br />

#### 📂 Voice Analytics

Upload and analyze real production recordings — no new calls needed.

- **Recording Upload** — Upload production call recordings (MP3, WAV) from real customer interactions
- **Transcript Upload** — Upload transcripts alongside recordings for STT comparison
- **Batch Upload & Analysis** — Upload and analyze multiple recordings in parallel
- **Selective Metric Analysis** — Choose specific metric categories or individual metrics to analyze
- **Bookmarking** — Bookmark important recordings for review
- **Tagging** — Organize recordings with custom tags
- **Search & Filter** — Find recordings by name, status, date, or tags

<br />

#### ▶️ Recording Playback

Listen to any call and follow along with a full, speaker-identified transcript.

- **Audio Player** — Play/pause controls with duration tracking
- **Full Transcript** — Speaker-identified transcript (agent vs. user)
- **DTMF Detection** — Phone keypad inputs (0–9, *, #) captured and displayed in transcript
- **Download** — Download recording audio and transcript files

</TabItem>
<TabItem value="shared" label="Shared (Both Modes)">

<br />

#### 🚦 Go-Live Assessment

:::info Production Readiness Verdicts
| Verdict | Score Range | Meaning |
|---------|------------|---------|
| 🟢 **GREEN** | ≥ 80 | Ready for Production |
| 🟡 **YELLOW** | 65–79 | Ready with Caveats |
| 🔴 **RED** | < 65 | Not Ready |
| ⚪ **NO_DATA** | — | Insufficient data to assess |
:::

- **Overall Score & Confidence** — Weighted score with confidence based on call volume (HIGH: 100+, MEDIUM: 50–99, LOW: 20–49, VERY_LOW: < 20)
- **Dimension Scores** — Functional Completeness, Quality Standards, Risk Profile, Operational Readiness
- **Scenario Coverage** — Well-tested vs. untested vs. high-risk scenarios
- **Failure Pattern Analysis** — AI-powered root cause analysis
- **Validation Criteria Compliance** — Aggregated pass/fail rates
- **Prioritized Action Items** — Improvement recommendations with expected impact

<br />

#### 🎚️ Metric Configuration

Select exactly which metrics to run — skip what's not relevant to reduce time and cost.

- **Configurable Metrics** — Select which metric categories to evaluate per project, or choose individual metrics for granular control
- **Category Toggles** — Enable/disable entire metric categories
- **Reduce Complexity** — Skip non-critical metrics to reduce analysis time and cost

<br />

#### 🗓️ Scheduled Runs

Keep coverage running continuously without manual effort.

- **Cron-Based Scheduling** — Schedule test executions with preset frequencies (Hourly, Daily, Weekdays, Weekly, Monthly) or custom cron expressions
- **Timezone Support** — Full IANA timezone selection
- **Pause/Resume** — Temporarily pause and resume scheduled runs
- **Run History** — Track all scheduled execution results

</TabItem>
<TabItem value="metrics" label="Metrics">

<br />

:::tip
Phone Caller agents are evaluated across **8 metric categories** with **30+ individual metrics**.
:::

<br />

#### A. Conversation Flow & Interaction Dynamics

| Metric | Unit | What It Measures |
|--------|------|-----------------|
| Average Latency | ms | Time taken for the agent to respond after user stops speaking |
| Words Per Minute (WPM) | wpm | Agent's speaking speed |
| AI Talk Ratio | % | Percentage of call time the agent is speaking |
| User Talk Ratio | % | Percentage of call time the user is speaking |
| AI Interrupting User | % | How often the agent interrupts the user |
| User Interrupting AI | % | How often the user interrupts the agent |

<br />

#### B. Accuracy & Effectiveness

| Metric | Unit | What It Measures |
|--------|------|-----------------|
| First Call Resolution (FCR) | % | Whether the issue was resolved in a single call |
| Intent Recognition Accuracy | % | How accurately the agent understood user intent |
| Task Completion Success Rate | % | Percentage of assigned tasks completed successfully |
| Instruction Following | % | Adherence to configured instructions |
| Response Consistency | % | Consistency of responses to similar inputs |

<br />

#### C. User Experience & Satisfaction

| Metric | Unit | What It Measures |
|--------|------|-----------------|
| CSAT (Customer Satisfaction) | % | Overall customer satisfaction score |
| CSAT Reason | Text | Explanation for the satisfaction score |
| User Sentiment | Text | Detected emotional sentiment from user speech |
| Early Termination | % | Percentage of calls NOT terminated prematurely |

<br />

#### D. Business Operational Metrics

| Metric | Unit | What It Measures |
|--------|------|-----------------|
| Containment Rate | % | Issues resolved without human escalation |
| AI to Human Handoff Rate | % | Frequency of escalation to human agents |

<br />

#### E. Audio Voice Quality

| Metric | Unit | What It Measures |
|--------|------|-----------------|
| Average Pitch | Hz | Voice pitch measurement (normal: 85–300 Hz) |
| Voice Quality Index | 0–5 scale | Composite voice quality score |
| Signal-to-Noise Ratio | % | Audio clarity vs. background noise |

<br />

#### F. Speech-to-Text (STT) Evaluation

| Metric | Unit | What It Measures |
|--------|------|-----------------|
| STT Accuracy | % | Transcription accuracy |
| STT Verdict | Pass/Fail | Overall transcription quality judgment |
| STT Summary | Text | Detailed transcription quality notes |
| Mismatch Examples | List | Specific instances where transcription differed from actual speech |

<br />

#### G. Validation Results

| Metric | Unit | What It Measures |
|--------|------|-----------------|
| Compliance | % | Compliance rate against custom validation criteria |
| Pass/Fail/Unable to Verify | Count | Per-criterion validation breakdown |

<br />

#### H. Detected Issue Tags (Automated)

:::warning
The system automatically detects and flags the following issues in every call recording.
:::

<br />

| Issue Tag | What It Detects |
|-----------|----------------|
| Latency Issues | Slow response times |
| Hallucination in Call Flow | Agent generating incorrect information |
| Transcript Issue | Transcription errors |
| Patchy Audio | Audio quality problems |
| Running in Loop | Agent repeating the same response |
| Incorrect STT | Speech recognition errors |
| Interruption Handling | Poor handling of user interruptions |
| Number Issue | Numeric data errors |
| Background Noise | Noise interference |
| No Response | Agent silence when a response was expected |
| BLANK/EMPTY STT | Empty transcription segments |

<br />

#### Threshold Configurations

| Metric | 🟢 Excellent | 🟡 Good | 🔴 Poor |
|--------|-------------|--------|--------|
| Average Latency | ≤ 1000ms | ≤ 2500ms | > 2500ms |
| Words Per Minute | ≥ 160 (Fast) | 131–160 (Good) | < 110 (Slow) |
| Voice Quality Index | ≥ 2.5 / 5 | — | < 2.5 / 5 |
| Average Pitch | 85–300 Hz (Normal) | — | < 85 or > 300 Hz |

</TabItem>
</Tabs>

---

## Phone Caller Outbound Agent

:::note
Phone Caller Outbound supports the **same two evaluation modes** as Inbound (Pre-evaluation and Post-evaluation) and shares all features, with a few key differences in pre-evaluation mode only.
:::

<Tabs>
<TabItem value="differences" label="Differences from Inbound" default>

<br />

#### Outbound-Specific Pre-evaluation Features

- **Scenario Generation** — Generate up to **7** outbound test scenarios (vs. 20 for inbound)
- **Caller Profile Selection** — Select an outbound caller profile when generating scenarios
- **Outbound Number Pool** — Reserve phone numbers from the outbound pool for test calls
- **Passive Mode** — Listen to outbound calls without interfering (for QA monitoring)
- **First Speaker Default** — Agent speaks first (vs. simulator for inbound)

<br />

#### Outbound Pool Management

- **View Pool Status** — See available outbound numbers
- **Reservations** — View and manage per-suite number reservations
- **Clear Reservations** — Release reserved numbers when done

<br />

:::tip
All other features — phone number management, voice configuration, test suites, call execution, post-evaluation (voice analytics, recording upload, batch analysis), go-live assessment, metrics, and scheduling — are **identical to Phone Caller Inbound**.
:::

</TabItem>
<TabItem value="metrics" label="Metrics">

<br />

Same as Phone Caller Inbound — all **8 categories** and **30+ metrics**.

</TabItem>
</Tabs>

---

## Image Analyzer Agent

<Tabs>
<TabItem value="features" label="Features" default>

<br />

#### 🖼️ Image Analysis

Upload single images or batch-process up to 50 at once — via file upload or URL.

- **Single Image Analysis** — Upload an image (or provide a URL) along with the original prompt used to generate it
- **Batch Analysis** — Analyze up to 50 images at once with a shared prompt
- **Drag & Drop Upload** — Drag and drop images directly into the upload area
- **Supported Formats** — JPG, JPEG, PNG, GIF, WEBP, BMP (max 20 MB per image)

<br />

#### 🎯 Custom Evaluation Criteria

Define what "good" means for your images — choose from three criteria types:

<Tabs>
<TabItem value="brand" label="Brand Guidelines">

<br />

- Allowed colors and prohibited colors
- Required fonts
- Logo requirements (text description)

</TabItem>
<TabItem value="technical" label="Technical Specifications">

<br />

- Required dimensions (width × height)
- Aspect ratio requirements
- Allowed file formats
- Maximum file size
- Minimum resolution

</TabItem>
<TabItem value="custom" label="Custom Rules">

<br />

- Freeform rule text
- Checklist items to validate

</TabItem>
</Tabs>

<br />

All criteria support Active/Inactive toggling, create/edit/delete operations, and search by name, description, or type.

<br />

#### 📋 Analysis History

- **Search** — Find past analyses by image name or prompt text
- **Status Tracking** — View analysis status (Pending, Completed, Failed)
- **Detailed View** — Click any analysis to view full results
- **Bookmarking** — Bookmark important analyses for quick access

<br />

#### 📊 Analytics Dashboard

- **Overall Statistics** — Average score, highest score, lowest score, total analyses count
- **Quality Trends** — Daily score breakdown over the last 30 days with bar chart visualization
- **Prompt Performance** — Top 20 prompts ranked by average quality score, showing min/max scores, usage count, and comparison vs. overall average

</TabItem>
<TabItem value="metrics" label="Metrics">

<br />

| Metric | Scale | What It Measures |
|--------|-------|-----------------|
| **Quality Score** | 0–100 | Overall image quality and prompt adherence |
| **Matches** | List | Elements that correctly match the original prompt |
| **Discrepancies** | List | Missing or incorrect elements vs. the prompt |
| **Overall Assessment** | Text | Summary of how well the image matches the prompt |
| **Detailed Observations** | Text | In-depth analysis of specific image aspects |

<br />

**Quality Score Interpretation:**

| Score Range | Label | Rating |
|-------------|-------|--------|
| 90–100 | Excellent | 🟢 |
| 80–89 | Good | 🟢 |
| 60–79 | Fair | 🟡 |
| 0–59 | Poor | 🔴 |

<br />

**Custom Criteria Compliance:**

For each active criterion, results show:
- Compliance status: **PASS**, **FAIL**, or **PARTIAL** (color-coded badges)
- Compliance details with specific observations

</TabItem>
</Tabs>

---

## Shared Features Across Agents

<br />

### 🗂️ Project Management

- **Create Agents** — Name, description, and agent type selection
- **Agent Listing** — View all agents with type-specific icons and filtering
- **Agent Dashboard** — Overview of workflows, suites, and recent activity

<br />

### 📋 Test Profiles

:::note Available for: Chat · Voice · Phone Caller (Inbound/Outbound)
:::

- Custom key-value data with typed fields (string, number, boolean, email, URL, textarea, JSON)
- Default profile marking
- Import/Export as JSON

<br />

### 🎭 Personas

:::note Available for: Chat · Voice · Phone Caller (Inbound/Outbound)
:::

- Pre-built persona library
- Custom persona creation
- Persona assignment to scenarios

<br />

### 🗓️ Scheduling

:::note Available for: Chat · Voice · Phone Caller (Inbound/Outbound)
:::

- Cron-based scheduling (Hourly, Daily, Weekdays, Weekly, Monthly, Custom)
- Timezone support (full IANA timezone list)
- Pause/Resume/Delete scheduled runs
- View next scheduled run time and run history

<br />

### 🚦 Go-Live Assessment

:::note Available for: Chat · Voice · Phone Caller (Inbound/Outbound)
:::

| Verdict | Score Range | Meaning |
|---------|------------|---------|
| 🟢 GREEN | ≥ 80 | Ready for Production |
| 🟡 YELLOW | 65–79 | Ready with Caveats |
| 🔴 RED | < 65 | Not Ready |

- Overall score with confidence level
- Scenario coverage analysis
- AI-powered risk assessment and recommendations

<br />

### 🌐 Environment Management

:::note Available for: All agent types
:::

- Create and manage test environments
- Variable management (name, value, type, persistence)
- Per-environment variable scoping
- Bulk variable creation

<br />

### ✅ Validation Criteria

:::note Available for: Chat · Voice · Phone Caller (Inbound/Outbound)
:::

- Custom pass/fail criteria per scenario
- Evidence-based validation with confidence levels (High/Medium/Low)
- Compliance percentage tracking
- Per-criterion results: Pass, Fail, or Unable to Verify

---

## Feature Availability Matrix

<br />

| Feature | Chat | Voice | Phone Caller Inbound | Phone Caller Outbound | Image Analyzer |
|---------|:----:|:-----:|:--------------------:|:---------------------:|:--------------:|
| Workflow & Document Upload | ✅ | ✅ | ❌ | ❌ | ❌ |
| AI Scenario Generation | ✅ | ✅ | ✅ (up to 20) | ✅ (up to 7) | ❌ |
| Manual Scenario Creation | ✅ | ✅ | ✅ | ✅ | ❌ |
| Test Suites | ✅ | ✅ | ✅ | ✅ | ❌ |
| Endpoint Profiles | ✅ | ✅ | ❌ | ❌ | ❌ |
| Test Profiles | ✅ | ✅ | ✅ | ✅ | ❌ |
| Personas | ✅ | ✅ | ✅ | ✅ | ❌ |
| Playground | ✅ | ✅ | ❌ | ❌ | ❌ |
| Audio-Based Conversations | ❌ | ✅ | ❌ | ❌ | ❌ |
| Phone Numbers | ❌ | ❌ | ✅ | ✅ | ❌ |
| Voice Selection (per scenario) | ❌ | ❌ | ✅ | ✅ | ❌ |
| Background Noise Simulation | ❌ | ❌ | ✅ | ✅ | ❌ |
| Live Call Execution (Pre-eval) | ❌ | ❌ | ✅ | ✅ | ❌ |
| Production Recording Upload (Post-eval) | ❌ | ❌ | ✅ | ✅ | ❌ |
| Batch Recording Analysis | ❌ | ❌ | ✅ | ✅ | ❌ |
| Call Recording Playback | ❌ | ❌ | ✅ | ✅ | ❌ |
| DTMF Support | ❌ | ❌ | ✅ | ✅ | ❌ |
| Passive Mode | ❌ | ❌ | ❌ | ✅ | ❌ |
| Outbound Pool | ❌ | ❌ | ❌ | ✅ | ❌ |
| Image Upload & Analysis | ❌ | ❌ | ❌ | ❌ | ✅ |
| Custom Evaluation Criteria | ❌ | ❌ | ❌ | ❌ | ✅ |
| Brand Guideline Checks | ❌ | ❌ | ❌ | ❌ | ✅ |
| Image Analytics Dashboard | ❌ | ❌ | ❌ | ❌ | ✅ |
| Metric Thresholds | ✅ | ✅ | ✅ | ✅ | ❌ |
| Go-Live Assessment | ✅ | ✅ | ✅ | ✅ | ❌ |
| Validation Criteria | ✅ | ✅ | ✅ | ✅ | ❌ |
| Scheduled Runs | ✅ | ✅ | ✅ | ✅ | ❌ |
| HyperExecute Integration | ✅ | ✅ | ❌ | ❌ | ❌ |
| Import/Export Profiles | ✅ | ✅ | ❌ | ❌ | ❌ |

---

## Metrics Availability Matrix

<br />

| Metric Category | Chat | Voice | Phone Caller Inbound | Phone Caller Outbound | Image Analyzer |
|----------------|:----:|:-----:|:--------------------:|:---------------------:|:--------------:|
| Bias Detection | ✅ | ✅ | ❌ | ❌ | ❌ |
| Hallucination Detection | ✅ | ✅ | ❌ | ❌ | ❌ |
| Completeness | ✅ | ✅ | ❌ | ❌ | ❌ |
| Context Awareness | ✅ | ✅ | ❌ | ❌ | ❌ |
| Response Quality | ✅ | ✅ | ❌ | ❌ | ❌ |
| Conversation Flow | ✅ | ✅ | ❌ | ❌ | ❌ |
| User Satisfaction | ✅ | ✅ | ❌ | ❌ | ❌ |
| File Handling Quality | ✅ | ✅ | ❌ | ❌ | ❌ |
| File Generation Accuracy | ✅ | ✅ | ❌ | ❌ | ❌ |
| Latency & Interaction Dynamics | ❌ | ❌ | ✅ | ✅ | ❌ |
| Accuracy & Effectiveness (FCR, etc.) | ❌ | ❌ | ✅ | ✅ | ❌ |
| CSAT & User Experience | ❌ | ❌ | ✅ | ✅ | ❌ |
| Business Operational Metrics | ❌ | ❌ | ✅ | ✅ | ❌ |
| Audio Voice Quality | ❌ | ❌ | ✅ | ✅ | ❌ |
| STT Evaluation | ❌ | ❌ | ✅ | ✅ | ❌ |
| Issue Detection Tags | ❌ | ❌ | ✅ | ✅ | ❌ |
| Validation Criteria | ✅ | ✅ | ✅ | ✅ | ❌ |
| Image Quality Score | ❌ | ❌ | ❌ | ❌ | ✅ |
| Prompt Compliance | ❌ | ❌ | ❌ | ❌ | ✅ |
| Brand/Technical Spec Compliance | ❌ | ❌ | ❌ | ❌ | ✅ |
