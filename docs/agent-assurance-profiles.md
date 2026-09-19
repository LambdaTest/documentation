---
id: agent-assurance-profiles
title: Configure Agent Assurance Invocation Profiles
hide_title: false
sidebar_label: Invocation Profiles
description: Configure HTTP, command, asynchronous, multi-turn, attachment, TLS, and MCP invocation profiles for Agent Assurance.
keywords:
  - rook profile
  - ai agent http testing
  - ai agent curl profile
  - multimodal agent testing
url: https://www.testmuai.com/support/docs/agent-assurance-profiles/
site_name: TestMu AI
slug: agent-assurance-profiles/
canonical: https://www.testmuai.com/support/docs/agent-assurance-profiles/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Invocation Profiles", "item": `${BRAND_URL}/support/docs/agent-assurance-profiles/` }
    ]
  }) }}
/>

# Configure Agent Assurance Invocation Profiles

A profile is a fixed, reviewable recipe for invoking one agent. Discovery learns what an agent does, but it cannot know whether you intend to test a local process, staging endpoint, production endpoint, fast model, or careful model. The profile supplies that choice.

An agent can have several profiles. Runs pin the profile ID, so renaming a profile does not detach its history.

## Add a Profile Interactively

Start with:

```text
/profile add
```

Rook asks for a name and an invocation. Paste a working cURL request when possible. It preserves the method, URL, headers, body, multipart file fields, and TLS choices you already tested manually.

Rook then does the following:

1. Classifies request fields as scenario input, session handles, run metadata, or fixed values.
2. Shows the proposed mapping for confirmation.
3. Asks for any `${VAR}` values without writing them into the profile.
4. Invokes the agent once with a harmless goal.
5. Extracts the answer and asks you to confirm it.
6. Marks the profile verified and active only after the probe succeeds.

You can save an unverified profile for later, but it cannot become active, and a run cannot reach it accidentally.

## HTTP Profile Example

A synchronous JSON agent can be represented as:

```yaml
id: staging
name: staging
kind: http
mode: sync
timeout_seconds: 120
invoke:
  method: POST
  url: https://agent.staging.example.com/v1/chat
  headers:
    Authorization: "Bearer ${AGENT_TOKEN}"
    Content-Type: application/json
  body:
    message: "{{goal}}"
    session_id: "{{session}}"
result:
  from: json_path
  path: $.reply.text
response:
  kind: json
conversation:
  kind: field
  id_path: $.session_id
  send_as: body.session_id
verified: true
```

Rook fills templates from fixed bindings. It does not ask a model to compose each invocation.

Supported bindings include the scenario goal and run-specific identifiers. Rook expands environment references before goal bindings, so a scenario containing text such as `${AWS_SECRET_ACCESS_KEY}` cannot cause Rook to substitute the real credential into the goal.

## Command Profile Example

Use a command profile for a local CLI agent:

```yaml
id: local-cli
name: local CLI
kind: command
mode: sync
timeout_seconds: 300
invoke:
  argv: [claude, -p, "{{goal}}"]
  cwd: services/travel-agent
  env:
    TRAVEL_AGENT_ENV: test
result:
  from: stdout
conversation:
  kind: flag
  resume_argv: [claude, -p, --resume, "{{conversation}}", "{{goal}}"]
observe:
  filesystem: [./out]
reset:
  argv: [npm, run, reset:fixtures]
  cwd: services/travel-agent
verified: true
```

Command profiles can put `{{goal}}` in an argument, stdin, or both. A non-zero exit is an invocation error, even when the command printed partial output.

## Asynchronous Agent Example

Use `mode: async` when the initial request returns a handle and a later request retrieves the result:

```yaml
id: report-staging
name: report staging
kind: http
mode: async
timeout_seconds: 180
invoke:
  method: POST
  url: https://agent.staging.example.com/v1/reports
  headers:
    Authorization: "Bearer ${AGENT_TOKEN}"
  body:
    prompt: "{{goal}}"
poll:
  invoke:
    method: GET
    url: https://agent.staging.example.com/v1/reports/{{handle}}
    headers:
      Authorization: "Bearer ${AGENT_TOKEN}"
  handle_path: $.job_id
  interval_seconds: 2
  ready_when:
    json_path: $.status
    in: [complete, failed, cancelled]
  max_attempts: 60
result:
  from: json_path
  path: $.result.summary
response:
  kind: json
```

The polling block is a complete request because authenticated polling endpoints often need their own headers and method.

## Multi-Turn Agents

Rook never guesses how conversation state is carried. Configure one of these shapes:

| Shape | Use when | Required fields |
|---|---|---|
| `conversation.kind: field` | The response returns a session ID and later requests send it back | `id_path`, `send_as` |
| `conversation.kind: flag` | A local command resumes by argument | `resume_argv` containing `{{conversation}}` |
| `conversation.kind: none` | The agent is intentionally single turn | No additional fields |

Without a usable conversation declaration, multi-turn scenarios are skipped. Rook does not turn them into unrelated single turns and report a misleading pass.

## Attachments and Multimodal Inputs

> **Native attachment input is not implemented.** The profile schema can record the intended attachment shape, but the current run executor does not transmit `scenario.input.attachments` or call a configured upload endpoint. Do not treat a `text+file` scenario as an executed file test, even if capability validation labels it runnable. Instead, use a test URL in the scenario goal, or use an agent-specific HTTP or command adapter that resolves the file before invoking Rook.

The forward-compatible profile shapes are a field in the main request:

```yaml
attachments:
  via: field
  field: document
```

Or a separate upload endpoint whose response supplies a link:

```yaml
attachments:
  via: endpoint
  upload:
    method: POST
    url: https://agent.staging.example.com/v1/files
    headers:
      Authorization: "Bearer ${AGENT_TOKEN}"
  link_path: $.file_url
```

These declarations describe the intended contract. They do not enable delivery in the current pre-alpha release. Text and URL values are passed in the goal today. Native `text+file`, `pr_ref`, and image inputs are not executable.

For outputs, Rook can collect text, JSON, local files, and downloadable links. It recognizes common PDF, image, CSV, spreadsheet, JSON, YAML, Markdown, HTML, and archive paths. Rook can confirm that an image exists and record its byte size and dimensions, but it cannot judge what the pixels depict. That content criterion becomes **Unable to Verify**.

## Response Types and Result Extraction

Readable response types today are:

- `json`
- `text`

Recorded but not executable today:

- `sse`
- `ndjson`
- `websocket`

The result can come from:

- `json_path`
- `stdout`
- `stderr`
- `text`
- `file`

Paste a representative response during profile setup. Rook proposes the answer path from the sample and verifies it with a live call. Do not select a status or request ID just because it is the first non-empty string.

## Secrets and Environment Values

Profiles are safe to commit only when they contain references rather than values:

```yaml
headers:
  Authorization: "Bearer ${AGENT_TOKEN}"
```

Manage values interactively:

```text
/env list
/env set AGENT_TOKEN
/env show AGENT_TOKEN
/env rm AGENT_TOKEN
```

`/env list` masks values. `/env show` prints the complete value into terminal scrollback, so use it only when that exposure is intentional.

## TLS and Private Certificates

The default is Node.js certificate verification. For an internal endpoint trusted by your machine, configure system trust. For a specific private CA, configure a PEM file:

```yaml
invoke:
  tls:
    trust: file
    ca_file: ./certs/staging-ca.pem
```

Rook also preserves cURL's `-k` choice as `insecure: true`, but never invents it. Prefer a trusted CA over disabled certificate verification.

## Observation and Reset

Add observation only for state Rook is allowed to read:

```yaml
observe:
  usage: true
  mcp: proxy
  filesystem:
    - ./out
    - ./tmp/agent
```

- `usage` enables token-economy checks when the agent reports usage.
- `mcp: proxy` declares that the target agent's tool calls are observable.
- `filesystem` lists paths Rook may hash before and after invocation.

At concurrency greater than one, shared file changes cannot be attributed reliably to a scenario. Run with `--concurrency 1` when filesystem evidence matters.

A reset command runs between scenarios to prevent state leakage. It is a real command, and it passes through the permission gate.

## Manage Profiles

Interactive commands:

```text
/profile list
/profile use <name>
/profile show <name>
/profile edit <name>
/profile test <name>
/profile curl <name>
/profile rm <name>
```

Headless profile management supports listing, showing, switching, and removing:

```bash
rook profile list --entity <agent-id> --json
rook profile show staging --entity <agent-id>
rook profile use staging --entity <agent-id>
rook profile rm staging --entity <agent-id>
```

Profile creation and editing remain interactive because field classification and verification are conversations.

:::note MCP invocation status
MCP servers can be registered, inspected, approved, and used by Rook for discovery and verification. Direct MCP target-agent profile execution is represented in the profile model but is not executable in the current pre-alpha release.
:::
