---
id: testmu-a2a-cli
title: Get Started With TestMu A2A CLI
hide_title: false
sidebar_label: Configure A2A CLI
description: Install and use TestMu A2A CLI to test chat and phone AI agents from your terminal with scenario generation, red team security, and CI/CD support.
keywords:
  - testmu a2a cli
  - agent to agent cli
  - ai agent testing cli
  - chat agent testing
  - phone agent testing
  - red team testing
  - a2a cli installation
url: https://www.testmuai.com/support/docs/testmu-a2a-cli/
site_name: TestMu AI
slug: testmu-a2a-cli/
canonical: https://www.testmuai.com/support/docs/testmu-a2a-cli/
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
          "name": "TestMu A2A CLI",
          "item": `${BRAND_URL}/support/docs/testmu-a2a-cli/`
        }]
      })
    }}
></script>
---

The TestMu A2A CLI lets you test chat agents and phone agents directly from your terminal. You can run quick one-off tests, build scenario-driven test suites, perform adversarial security assessments, and integrate everything into your CI/CD pipeline.

## Install the CLI
---

```bash
pip install testmu-a2a-cli
```

## Quick Reference
---

```
testmu-a2a auth              Authenticate with TestMu
testmu-a2a test              Quick chat agent test (one command)
testmu-a2a init              Initialize testmu-a2a.yaml config
testmu-a2a run               Run tests from testmu-a2a.yaml
testmu-a2a call              Test phone agents with real calls
testmu-a2a redteam           Adversarial security testing
testmu-a2a prompts           Set agent prompt and upload requirements
testmu-a2a projects          Manage projects
testmu-a2a results           View chat evaluation results
testmu-a2a workflows         Manage chat testing workflows
testmu-a2a scenarios         Manage chat test scenarios
testmu-a2a phone-scenarios   Manage phone test scenarios
testmu-a2a suites            Manage test suites
testmu-a2a schedules         Manage scheduled runs
testmu-a2a call-results      View phone call results
testmu-a2a profiles          Manage test/agent/endpoint profiles
testmu-a2a recordings        Upload and analyze call recordings
testmu-a2a voices            Browse available voices
testmu-a2a personas          Manage test personas
testmu-a2a phone-numbers     Manage phone numbers
testmu-a2a thresholds        Manage pass/fail thresholds
testmu-a2a assessments       Go-live readiness assessments
testmu-a2a health            System health check
testmu-a2a credits           View credit balance
```

## Authenticate Your Account
---

All CLI commands require authentication with your TestMu AI credentials.

### Log in Interactively

```bash
testmu-a2a auth -u <username> -k <access_key>
```

You can point to a specific environment by passing `--base-url`:

```bash
# Local development
testmu-a2a auth -u <username> -k <access_key> --base-url http://localhost:8000

# Staging
testmu-a2a auth -u <username> -k <access_key> --base-url https://stage-agent-testing.lambdatestinternal.com

# Production (default)
testmu-a2a auth -u <username> -k <access_key>
```

### Authenticate in CI/CD

For automated environments, set environment variables instead of running `testmu-a2a auth`:

```bash
export TESTMU_USERNAME=<username>
export TESTMU_ACCESS_KEY=<access_key>
export TESTMU_BASE_URL=https://agent-testing.lambdatest.com
```

TestMu AI aliases are also supported:

```bash
export LT_USERNAME=<username>
export LT_ACCESS_KEY=<access_key>
```

### Check Status and Log Out

```bash
testmu-a2a auth status
testmu-a2a auth logout
```

Credentials are stored in `~/.testmu-a2a/credentials.json` with owner-only permissions (600).

## Test a Chat Agent
---

The fastest way to test a chat agent is with a single `test` command. Point it at your agent endpoint, describe what the agent does, and the CLI generates scenarios and evaluates responses automatically.

```bash
testmu-a2a test \
    --agent https://my-bot.com/api/chat \
    --spec "A travel booking assistant that helps users find flights" \
    --count 10
```

If your agent expects a custom request format, specify the body template and response path:

```bash
testmu-a2a test \
    --agent https://my-bot.com/chat \
    --body-template '{"input": "{{message}}"}' \
    --response-path "output.text" \
    --spec "Customer support bot for an e-commerce store" \
    -H "Authorization: Bearer <token>"
```

| Flag | Description | Default |
|------|-------------|---------|
| `--agent`, `-a` | Target agent endpoint URL | Required |
| `--spec`, `-s` | Agent description or path to spec file | None |
| `--count`, `-n` | Number of test scenarios | 10 |
| `--categories`, `-c` | Comma-separated categories | All |
| `--threshold`, `-t` | Pass/fail threshold (0.0-1.0) | 0.80 |
| `--max-turns` | Max conversation turns per scenario | 10 |
| `--format`, `-f` | Output format (table, json, junit) | table |
| `--output`, `-o` | Write results to file | None |
| `--verbose`, `-v` | Show conversation transcripts | false |
| `--parallel`, `-p` | Number of parallel evaluations | 5 |
| `--body-template` | JSON body with `{{message}}` placeholder | None |
| `--response-path` | JSONPath to extract agent reply | None |
| `--method`, `-m` | HTTP method | POST |
| `--header`, `-H` | Custom header (repeatable) | None |

### Run Tests from a Config File

For repeated testing, initialize a config file instead of passing flags every time:

```bash
testmu-a2a init --endpoint https://my-bot.com/api/chat
```

This creates `testmu-a2a.yaml` and supporting directories:

```
testmu-a2a.yaml          Project configuration
specs/               Spec documents (PDF, DOCX, MD)
scenarios/           Custom scenario YAML files
reports/             Test reports
```

A typical `testmu-a2a.yaml` looks like this:

```yaml
agent:
  endpoint: "https://my-bot.com/api/chat"
  type: chat
  method: POST
  headers:
    Content-Type: "application/json"
  body_template:
    message: "{{message}}"
  response_path: "data.reply"

scenarios:
  generate:
    from: ./specs/
    categories:
      - conversational-flow
      - intent-recognition
      - context-memory
      - error-handling
      - security
    count: 30

evaluation:
  thresholds:
    accuracy: 0.80
    relevance: 0.80
    coherence: 0.80
    context_retention: 0.75
  max_turns: 10
  output_format: table

security:
  enabled: true
  intensity: intermediate
  categories:
    - prompt-injection
    - jailbreak
    - pii-leakage
    - data-exfiltration
```

Then run all tests, a specific category, or output for CI/CD:

```bash
testmu-a2a run
testmu-a2a run --category security
testmu-a2a run --format junit --output results.xml
```

## Manage Workflows
---

Workflows are the execution context for chat test scenarios within a project.

```bash
testmu-a2a workflows create --project <project_id>
testmu-a2a workflows list --project <project_id>
testmu-a2a workflows summary <workflow_id>
testmu-a2a workflows rename <workflow_id> --project <project_id> --name "My Workflow"
testmu-a2a workflows files <workflow_id> --project <project_id>
testmu-a2a workflows delete <workflow_id> --project <project_id>
testmu-a2a workflows delete <workflow_id> --project <project_id> --yes  # skip confirmation
```

### Chat Testing Flow with Explicit Workflow

Use this when you already have a project and want full control over each step:

```bash
# Step 1: Create workflow
testmu-a2a workflows create --project <project_id>

# Step 2: Upload documents
testmu-a2a sources upload \
    --workflow <workflow_id> \
    --project <project_id> \
    --files ./spec.pdf,./faq.md

# Step 3: Generate scenarios from the uploaded docs
testmu-a2a run --workflow <workflow_id> --project <project_id>

# Step 4: View results
testmu-a2a results <workflow_id> --project <project_id>
```

Or combine upload and generation in one step:

```bash
testmu-a2a sources upload-and-generate \
    --workflow <workflow_id> \
    --project <project_id> \
    --files ./spec.pdf,./faq.md \
    --categories intent-recognition,context-memory,error-handling
```

## Test a Phone Agent
---

The CLI can place real phone calls to test inbound and outbound voice agents. You can either run a quick one-shot call or build a full suite-based workflow.

### Run a Quick One-Shot Call

```bash
testmu-a2a call \
    --number <phone_number> \
    --persona frustrated \
    --scenario "Customer wants to cancel their premium subscription" \
    --voice Neha \
    --voice-provider vapi
```

| Flag | Description | Default |
|------|-------------|---------|
| `--number`, `-n` | Phone number (E.164 format) | Required |
| `--persona`, `-p` | Test persona | neutral |
| `--scenario`, `-s` | Scenario description | General inquiry |
| `--provider` | Voice provider (vapi, pipecat, bolna) | vapi |
| `--voice` | Voice ID (e.g., Neha, andrew) | Provider default |
| `--voice-provider` | Voice synthesis (vapi, azure, 11labs, google) | vapi |
| `--type`, `-t` | Call type (inbound, outbound) | inbound |
| `--max-duration` | Max call duration in seconds | 180 |
| `--verbose`, `-v` | Show call transcript | false |
| `--format`, `-f` | Output format (table, json) | table |

### Test an Inbound Phone Agent

For structured testing, walk through these steps to create a project, generate scenarios, and run them as a suite.

**Step 1: Create a phone project.**

```bash
testmu-a2a projects create \
    --name "Airline Support Agent" \
    --description "Testing our IVR booking agent" \
    --type phone_caller_inbound
```

Note the project ID from the output.

**Step 2: Set the agent prompt.** This is the most important step - the prompt drives scenario generation, evaluation criteria, and go-live assessments.

From a YAML file (recommended — define everything in one place):

```bash
testmu-a2a prompts set --project <project_id> --from-file prompt.yaml
```

`prompt.yaml`:

```yaml
prompt: |
  You are an airline booking assistant. You help customers find flights,
  make reservations, handle cancellations, and process refunds.
  Always verify the customer's identity before making changes.
  Never share other customers' booking information.

# Or reference a separate file (path relative to this YAML)
# prompt_file: ./agent_system_prompt.md

context: "Agent must comply with DOT airline passenger rights regulations"

files:
  - ./compliance_rules.pdf
  - ./fare_structure.docx
```

Inline:

```bash
testmu-a2a prompts set --project <project_id> \
    --prompt "You are an airline booking assistant. You help customers find
    flights, make reservations, handle cancellations, and process refunds.
    Always verify the customer's identity before making changes.
    Never share other customers' booking information.
    If the customer is upset, empathize before offering solutions."
```

From a prompt file:

```bash
testmu-a2a prompts set --project <project_id> \
    --prompt-file ./agent_system_prompt.md
```

With additional requirement documents (compliance rules, product specs, etc.):

```bash
testmu-a2a prompts set --project <project_id> \
    --prompt-file ./agent_prompt.md \
    --files ./compliance_rules.pdf,./fare_structure.docx \
    --context "Agent must comply with DOT airline passenger rights regulations"
```

Verify what was saved:

```bash
testmu-a2a prompts get --project <project_id>
```

**Step 3: Generate test scenarios.**

```bash
testmu-a2a phone-scenarios generate \
    --project <project_id> \
    --count 5 \
    --personas "frustrated,confused,elderly,rushed" \
    --instructions "Test the agent's ability to handle flight booking, cancellation, and rebooking"
```

**Step 4: Review generated scenarios.**

```bash
testmu-a2a phone-scenarios list --project <project_id>
```

You can also create manual scenarios:

```bash
testmu-a2a phone-scenarios create \
    --project <project_id> \
    --title "Customer cancels mid-booking" \
    --description "Customer starts booking a flight, then changes mind halfway" \
    --persona "indecisive"
```

**Step 5: Create a test suite.** You can pass scenario IDs directly, or use a YAML file for per-scenario call configuration (number, voice, background sound).

```bash
# Simple - same call config for all scenarios, supply number/voice at run time
testmu-a2a suites create \
    --project <project_id> \
    --name "Booking Flow Regression" \
    --scenarios "<scenario_id_1>,<scenario_id_2>,<scenario_id_3>"

# Per-scenario config from a YAML file
testmu-a2a suites create \
    --project <project_id> \
    --name "Booking Flow Regression" \
    --from-file suite.yaml
```

`suite.yaml`:

```yaml
scenarios:
  - id: <scenario_id_1>
    phone_number: "+15551234567"
    voice: Neha
    voice_provider: vapi
    background_sound_url: https://example.com/office-noise.mp3
    background_sound_enabled: true

  - id: <scenario_id_2>
    phone_number: "+15559876543"
    voice: andrew
    voice_provider: azure

  - id: <scenario_id_3>
    phone_number: "+15551234567"
```

Available YAML fields per scenario:

| Field | Description |
|-------|-------------|
| `id` | Scenario ID (required) |
| `phone_number` | Phone number to call (E.164 format) |
| `voice` | Voice ID (e.g., Neha, andrew) |
| `voice_provider` | Voice synthesis: vapi, azure, 11labs, google |
| `background_sound_enabled` | Enable background noise (true/false) |
| `background_sound_url` | URL of background audio file |
| `voice_name` | Voice display name |
| `first_speaker` | Who speaks first: simulator (default) or agent |
| `wait_seconds` | Response delay in seconds (0.5-5.0) |
| `max_duration_seconds` | Max call duration in seconds (60-1800) |

**Step 6: Run the suite.**

```bash
# If per-scenario config was stored at create time
testmu-a2a suites run \
    --project <project_id> \
    --name "Booking Flow Regression"

# Or override all scenarios at run time with the same number/voice
testmu-a2a suites run \
    --project <project_id> \
    --name "Booking Flow Regression" \
    --number +15551234567 \
    --voice Neha \
    --voice-provider vapi \
    --background-sound https://example.com/office-noise.mp3
```

**Step 7: Check results.**

```bash
testmu-a2a call-results list --project <project_id>
testmu-a2a call-results get <call_id>
testmu-a2a call-results summary <suite_id>
```

**Step 8: Schedule recurring runs.**

```bash
testmu-a2a schedules create \
    --project <project_id> \
    --suite <suite_id> \
    --frequency daily \
    --time 09:00
```

**Step 9: Go-live readiness check.**

```bash
testmu-a2a assessments create --project <project_id> --type phone
```

### Test an Outbound Phone Agent

The outbound workflow follows the same steps. Create the project with `--type phone_caller_outbound` and use outbound-specific scenario generation:

```bash
testmu-a2a projects create \
    --name "Sales Outreach Agent" \
    --description "Testing outbound sales calls" \
    --type phone_caller_outbound

testmu-a2a prompts set --project <project_id> \
    --prompt "You are a sales agent for Acme Corp. You call existing customers
    to offer premium plan upgrades. Be polite, handle objections gracefully,
    and never pressure the customer. If they say no, thank them and end the call."

testmu-a2a phone-scenarios generate \
    --project <project_id> \
    --count 5 \
    --type outbound \
    --personas "busy executive,interested buyer,skeptical prospect" \
    --instructions "Agent offers premium plan upgrade, handles objections"

testmu-a2a suites create \
    --project <project_id> \
    --name "Outbound Sales Test" \
    --scenarios "<scenario_id_1>,<scenario_id_2>,<scenario_id_3>"

testmu-a2a suites run --project <project_id> --name "Outbound Sales Test"
```

## Run Red Team Security Tests
---

The `redteam` command runs adversarial attacks across 9 categories at 3 difficulty levels, then grades your agent's resilience from A+ to F.

```bash
testmu-a2a redteam \
    --agent https://my-bot.com/api/chat \
    --intensity advanced \
    --spec "Banking customer support agent"
```

To test specific categories:

```bash
testmu-a2a redteam \
    --agent https://my-bot.com/api/chat \
    --categories prompt-injection,jailbreak,pii-leakage
```

Attack categories: `prompt-injection`, `jailbreak`, `data-exfiltration`, `pii-leakage`, `harmful-content`, `overreliance`, `hijacking`, `policy-violation`, `technical-injection`

Intensity levels: `basic`, `intermediate`, `advanced`

Output includes a letter grade (A+ through F) and per-category breakdown.

## Set Agent Prompts and Requirements
---

The prompt is the single most important input - it tells TestMu AI what your agent does so it can generate relevant scenarios and evaluate correctly.

### Set Prompt from YAML (recommended)

Define prompt, files, and context in one file:

```bash
testmu-a2a prompts set --project <project_id> --from-file prompt.yaml
```

`prompt.yaml`:

```yaml
prompt: |
  You are a customer support agent for a SaaS product.
  You help users with billing, account issues, and technical troubleshooting.
  Always verify the user's email before making account changes.
  Escalate to a human if the customer asks for a refund over $500.

# Or reference a separate file:
# prompt_file: ./agent_system_prompt.md

context: "Agent must comply with GDPR and never store PII in logs"

files:
  - ./compliance_rules.pdf
  - ./product_catalog.docx
  - ./faq.md
```

All file paths in the YAML are resolved relative to the YAML file's location.

### Set Prompt Inline

```bash
testmu-a2a prompts set --project <project_id> \
    --prompt "You are a customer support agent for a SaaS product.
    You help users with billing, account issues, and technical troubleshooting.
    Always verify the user's email before making account changes.
    Escalate to a human if the customer asks for a refund over $500."
```

### Set Prompt from File

```bash
testmu-a2a prompts set --project <project_id> \
    --prompt-file ./agent_system_prompt.md
```

### Set Prompt with Additional Requirements

Upload compliance docs, product specs, or knowledge base files alongside the prompt:

```bash
testmu-a2a prompts set --project <project_id> \
    --prompt-file ./agent_prompt.md \
    --files ./compliance_rules.pdf,./product_catalog.docx,./faq.md \
    --context "Agent must comply with GDPR and never store PII in logs"
```

Supported file types: PDF, DOCX, TXT, MD, XLSX, MP3, WAV, M4A

### Manage Existing Prompts

```bash
testmu-a2a prompts get --project <project_id>
testmu-a2a prompts get --project <project_id> --format json

testmu-a2a prompts update --project <project_id> --id <prompt_id> \
    --prompt "Updated prompt text..."
testmu-a2a prompts update --project <project_id> --id <prompt_id> \
    --prompt-file ./updated_prompt.md

testmu-a2a prompts delete --project <project_id> --id <prompt_id>
```

## Manage Projects
---

Projects organize your agents and tests. Each project has a type that determines the available testing features.

```bash
testmu-a2a projects list
testmu-a2a projects list --format json

testmu-a2a projects create \
    --name "My Agent" \
    --description "Agent description" \
    --type chat

testmu-a2a projects update <project_id> --name "New Name"
testmu-a2a projects update <project_id> --description "Updated description"
testmu-a2a projects update <project_id> \
    --name "New Name" \
    --description "Updated description"

testmu-a2a projects delete <project_id>
testmu-a2a projects delete <project_id> --yes   # skip confirmation
```

Project types: `chat`, `phone_caller_inbound`, `phone_caller_outbound`, `image_analyzer`

## Manage Scenarios
---

### Chat Scenarios

```bash
testmu-a2a scenarios list --workflow <workflow_id> --project <project_id>

testmu-a2a scenarios create \
    --workflow <workflow_id> \
    --project <project_id> \
    --title "Edge case: empty input" \
    --description "Test how agent handles empty messages" \
    --persona "confused user"

testmu-a2a scenarios delete \
    --workflow <workflow_id> \
    --project <project_id> \
    --ids "<scenario_id_1>,<scenario_id_2>"

# Import, export, and templates
testmu-a2a scenarios export \
    --workflow <workflow_id> \
    --project <project_id> \
    --output scenarios.csv

testmu-a2a scenarios import \
    --workflow <workflow_id> \
    --project <project_id> \
    --file scenarios.csv

testmu-a2a scenarios template --workflow <workflow_id>
```

### Phone Scenarios

```bash
testmu-a2a phone-scenarios list --project <project_id>

# Generate inbound scenarios
testmu-a2a phone-scenarios generate \
    --project <project_id> \
    --count 10 \
    --personas "frustrated,confused,elderly" \
    --instructions "Focus on billing and refund scenarios"

# Generate outbound scenarios
testmu-a2a phone-scenarios generate \
    --project <project_id> \
    --count 5 \
    --type outbound \
    --personas "busy,skeptical"

# Create manually
testmu-a2a phone-scenarios create \
    --project <project_id> \
    --title "Angry customer wants refund" \
    --description "Customer received wrong item, demands immediate refund" \
    --persona "angry"

# Edit a scenario
testmu-a2a phone-scenarios edit \
    --project <project_id> \
    --id <scenario_id> \
    --title "Updated title" \
    --persona "frustrated"

# Delete scenarios
testmu-a2a phone-scenarios delete \
    --project <project_id> \
    --ids "<scenario_id_1>,<scenario_id_2>"

# Bulk import/export
testmu-a2a phone-scenarios import --project <project_id> --file scenarios.csv
testmu-a2a phone-scenarios template --project <project_id>
```

## Manage Test Suites
---

Suites group scenarios for repeatable test runs.

```bash
testmu-a2a suites list --project <project_id>

testmu-a2a suites create \
    --project <project_id> \
    --name "Regression Suite" \
    --scenarios "<scenario_id_1>,<scenario_id_2>,<scenario_id_3>"

# Or create with per-scenario call config from YAML
testmu-a2a suites create \
    --project <project_id> \
    --name "Regression Suite" \
    --from-file suite.yaml

testmu-a2a suites run --project <project_id> --name "Regression Suite"
testmu-a2a suites overview --project <project_id>

testmu-a2a suites update \
    --id <suite_id> \
    --name "Updated Suite Name" \
    --scenarios "<scenario_id_1>,<scenario_id_4>"

testmu-a2a suites update \
    --id <suite_id> \
    --from-file suite.yaml
```

## Schedule Recurring Runs
---

Automate recurring test runs by attaching a schedule to a suite.

```bash
testmu-a2a schedules list --project <project_id>

# Daily
testmu-a2a schedules create \
    --project <project_id> \
    --suite <suite_id> \
    --frequency daily \
    --time 09:00

# Weekly
testmu-a2a schedules create \
    --project <project_id> \
    --suite <suite_id> \
    --frequency weekly \
    --days mon,wed,fri \
    --time 14:00

testmu-a2a schedules trigger <schedule_id>
testmu-a2a schedules update <schedule_id> --frequency daily --time 10:00
testmu-a2a schedules delete <schedule_id>
```

## View Test Results
---

### View Call Results

```bash
testmu-a2a call-results list --project <project_id>
testmu-a2a call-results list --suite <suite_id>
testmu-a2a call-results get <call_id>
testmu-a2a call-results get <call_id> --audio
testmu-a2a call-results summary <suite_id>

# Bookmarks
testmu-a2a call-results bookmark <result_id>
testmu-a2a call-results bookmark <result_id> --remove
testmu-a2a call-results bookmarked --suite <suite_id>
```

### View Chat Evaluation Results

```bash
testmu-a2a results <workflow_id> --project <project_id>
testmu-a2a results <workflow_id> --project <project_id> --format json
testmu-a2a results <workflow_id> --project <project_id> --format junit --output results.xml
```

## Analyze Call Recordings
---

Upload and analyze existing call recordings without placing new calls.

```bash
testmu-a2a recordings upload --project <project_id> --files call1.mp3,call2.wav
testmu-a2a recordings analyze <recording_id>
testmu-a2a recordings result <recording_id>
testmu-a2a recordings transcript <recording_id>
testmu-a2a recordings list --project <project_id>
testmu-a2a recordings metrics

# Bookmark/unbookmark
testmu-a2a recordings bookmark <recording_id>
testmu-a2a recordings bookmark <recording_id> --remove

testmu-a2a recordings delete <recording_id>
```

## Manage Profiles
---

Profiles store reusable test data, agent configurations, and endpoint details.

### Test Profiles

```bash
testmu-a2a profiles test list --project <project_id>
testmu-a2a profiles test get --project <project_id> --id <profile_id>
testmu-a2a profiles test create \
    --project <project_id> \
    --name "Premium User" \
    --data '{"name": "John Doe", "plan": "premium", "account_id": "ACC123"}'
testmu-a2a profiles test delete --project <project_id> --ids "<id_1>,<id_2>"
```

### Agent Profiles

```bash
testmu-a2a profiles agent list
testmu-a2a profiles agent create \
    --name "Support Agent v2" \
    --data '{"agent_type": "support", "version": "2.0"}'
```

### Endpoint Profiles

```bash
testmu-a2a profiles endpoint list --project <project_id>
testmu-a2a profiles endpoint create \
    --project <project_id> \
    --name "Production Endpoint" \
    --data '{"url": "https://api.example.com/chat", "method": "POST"}'
```

## Configure Pass/Fail Thresholds
---

Set pass/fail criteria for evaluations.

```bash
testmu-a2a thresholds get --project <project_id> --type chat
testmu-a2a thresholds get --project <project_id> --type phone

testmu-a2a thresholds set \
    --project <project_id> \
    --type chat \
    --config '{"accuracy": 0.85, "relevance": 0.80, "coherence": 0.80}'

testmu-a2a thresholds set \
    --project <project_id> \
    --type phone \
    --config '{"resolution_rate": 0.90, "avg_response_time": 2.0}'
```

## Run Go-Live Assessments
---

Get a production-readiness verdict for your agent before deploying.

```bash
testmu-a2a assessments create --project <project_id> --type phone
testmu-a2a assessments create --project <project_id> --type chat
testmu-a2a assessments get --project <project_id> --type phone
testmu-a2a assessments history --project <project_id> --type phone
```

## Browse the Voice Library
---

Browse available voices to use in phone tests. Use the Name column value as `providerId` when configuring per-scenario voice in a suite.

```bash
testmu-a2a voices list
testmu-a2a voices list --provider azure
testmu-a2a voices list --provider 11labs
testmu-a2a voices list --provider google

# Filter by language (azure only)
testmu-a2a voices list --provider azure --language es     # Spanish
testmu-a2a voices list --provider azure --language hi     # Hindi
testmu-a2a voices list --provider azure --language multi  # Multilingual
testmu-a2a voices list --provider azure --language all    # All languages

# Filter by target platform
testmu-a2a voices list --target bolna
testmu-a2a voices list --provider 11labs --target pipecat

testmu-a2a voices list --format json
```

## Manage Personas
---

Built-in personas are always available: neutral, frustrated, confused, elderly, tech-savvy, rushed, and 25+ more. You can also create custom personas:

```bash
testmu-a2a personas list --org <org_id>

testmu-a2a personas create \
    --org <org_id> \
    --name "Impatient Executive" \
    --description "A busy executive who expects quick, direct answers with no filler"
```

## Manage Phone Numbers
---

```bash
testmu-a2a phone-numbers list --org <org_id>

testmu-a2a phone-numbers create \
    --org <org_id> \
    --data '{"phoneNumber": "+15551234567", "name": "Support Line"}'

testmu-a2a phone-numbers delete --org <org_id>
```

## Check System Health and Credits
---

```bash
testmu-a2a health
testmu-a2a health info       # detailed system info
testmu-a2a health agents     # list available agent types

testmu-a2a credits           # balance summary
testmu-a2a credits totals    # detailed breakdown
```

## Integrate with CI/CD
---

Add the CLI to your pipeline to test agents on every push. Use `--format junit` to produce standard test reports.

### GitHub Actions

```yaml
name: Agent Tests
on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: Install TestMu A2A CLI
        run: pip install testmu-a2a-cli

      - name: Run agent tests
        env:
          TESTMU_USERNAME: ${{ secrets.TESTMU_USERNAME }}
          TESTMU_ACCESS_KEY: ${{ secrets.TESTMU_ACCESS_KEY }}
        run: |
          testmu-a2a test \
            --agent ${{ vars.AGENT_ENDPOINT }} \
            --spec "Customer support chatbot" \
            --count 10 \
            --format junit \
            --output results.xml

      - name: Publish results
        uses: dorny/test-reporter@v1
        if: always()
        with:
          name: Agent Test Results
          path: results.xml
          reporter: java-junit
```

### Exit Codes

| Code | Meaning |
|------|---------|
| 0 | All tests passed |
| 1 | One or more tests failed, or a command error occurred |

## Choose an Output Format
---

| Format | Flag | Use Case |
|--------|------|----------|
| table | `--format table` | Human-readable terminal output |
| json | `--format json` | Programmatic consumption, piping |
| junit | `--format junit` | CI/CD test reporters |

Write output to a file with `--output <path>`:

```bash
testmu-a2a test --agent <url> --format junit --output results.xml
testmu-a2a test --agent <url> --format json --output results.json
```

## Global Options
---

| Flag | Description |
|------|-------------|
| `--version`, `-V` | Show CLI version |
| `--help`, `-h` | Show help for any command |
| `--install-completion` | Install shell completion |

Shell completion works with bash, zsh, and fish:

```bash
testmu-a2a --install-completion
```
