# Agent Assurance Technical & Security Overview

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

How rook runs, the components and network it talks to, and how it handles your code and data — for engineering and security review.

**Product** Agent Assurance (rook CLI) **Vendor** TestMu AI

## 01 At a glance

rook tests AI agents you own — it grades what an agent actually did against evidence, including red-team scenarios. It runs where your code already is: your machine or your CI runner. Your repository stays the system of record.

| **LOCAL-FIRST** | **YOUR CODE STAYS YOURS** |
|---|---|
| Runs on your machine / CI runner. All working files live in `.testmuai/rook/` — readable and committable by you. | No bulk upload of your codebase. Model-backed steps send only the task-necessary context (source excerpts, agent definitions, scenario material, recorded evidence) over TLS. `rook sync` uploads the project's rook files when you run it. |
| **YOU CONTROL SECRETS** | **NO TRAINING ON YOUR DATA** |
| Values stored with `rook env set` and your local credential store are never synced; profiles refer to them as `${VAR}`. Profiles and hook scripts upload as written, so keep secrets out of them. You do not supply your own model API key. | Your inputs and outputs are never used to train any LLM. |

`ISO 42001 · AI · Stage 1` `SOC 2 Type II` `ISO 27001` `ISO 27017` `ISO 27701` `GDPR`
`HIPAA` `CCPA` `TLS 1.2+ in transit` `AES-256 at rest` `SSO · SAML 2.0` `SCIM`
`DPA · SCCs`

*Certifications and controls are TestMu AI company-level; scope covering Agent Assurance available on request.*

## 02 Architecture & network

Two zones. Your environment runs the rook CLI — which drives your agent and writes the plain per-project files under `.testmuai/rook/` — and an optional local rook UI ( `rook ui --local` , no hosted login). A global `~/.testmuai/rook/` keeps your sign-in, the values you store with `rook env set`, logs, and each session's transcript (`transcript.jsonl`: prompts, tool results and answers). For the features to work, the CLI talks to TestMu AI over HTTPS (TLS 1.2+); the components and paths are shown below.

```text
YOUR ENVIRONMENT · machine / CI
┌──────────────────────────────────────────────────────────────┐
│ YOUR AGENT & CONTEXT · workspace                             │
│   local rook UI  (rook ui --local · no hosted login)         │
│        ↓                                                     │
│   rook CLI  (drives your agent · writes .testmuai/rook/)     │
│                                                              │
│ NEVER CROSSES THE BOUNDARY                                   │
│   · rook env set values & local credential store             │
│   · session transcripts (unless you export them)             │
│   · workspace files (only excerpts a task needs)             │
└──────────────────────────────────────────────────────────────┘
│  POST /controller/∗   ·   GET/POST /api/∗   ·   sign-in
↓  HTTPS (TLS 1.2+)
CLOUDFLARE
↓
TESTMU AI
┌──────────────────────────────────────────────────────────────┐
│ Model controller  (runs model calls · no key of yours)       │
│     → LLM providers  (OpenAI · Gemini)                       │
│ Rook backend      (project · agent · run records)            │
│     → Database + Storage  (records & artifacts)              │
│ Auth              (sign-in & identity)                       │
│                                                              │
│ Rook Cloud UI  (rook.lambdatest.com)                         │
│     ↔ Rook backend · Auth                                    │
└──────────────────────────────────────────────────────────────┘
```

*The rook CLI is the only component that crosses the boundary — over HTTPS (TLS 1.2+), via Cloudflare — to TestMu AI. The Model controller calls the LLM providers; the Rook backend uses a database and object storage. The model stream uses Server-Sent Events. Run evidence uploads from the CLI straight to object storage through a short-lived presigned URL that the Rook backend issues per file.*

### NETWORK HOSTS

rook contacts these hosts over HTTPS (TLS 1.2+); model generation streams back over Server-Sent Events (SSE), everything else is ordinary REST. Allow-list them for rook to operate. The last two rows are needed only for update checks and `rook update`; npm and Homebrew installs update through npm and `brew`, which use their own hosts.

| HOST | PATH | METHOD | PURPOSE |
|---|---|---|---|
| `rook-api.lambdatest.com` | `/controller/v1/chat/stream` | **POST · SSE** | Model generation (LLM) — streamed back as SSE. |
| | `/api/v1/∗` | **GET · POST** | Session & data management, plan check, and telemetry events (`/events`). |
| `rook.lambdatest.com` | `/` | **GET** | Hosted Rook Cloud UI (browser). |
| `auth.lambdatest.com``accounts.lambdatest.com``billing.lambdatest.com` | `/` · `/api/user` | **GET · POST** | Sign-in, identity and billing. |
| Amazon S3 (`*.amazonaws.com`) | presigned, per file | **PUT** | Run evidence upload on a recorded run. |
| `registry.npmjs.org` | package metadata | **GET** | Check for a newer rook release. |
| `raw.githubusercontent.com``github.com` | `/LambdaTest/rook/…` | **GET** | `rook update` on a shell-installer install: the install script and the release archive. |

## 03 Security & data privacy

Model-backed commands send the controller the context that task needs — not your whole tree. Recording to the hosted timeline and `rook sync` are explicit, user-initiated actions. The only background upload is operational telemetry, which you can turn off (see the table below).

### WHAT LEAVES, WHAT NEVER DOES

| DATA CLASS | WHERE IT LIVES | LEAVES YOUR MACHINE? | WHEN & WHERE |
|---|---|---|---|
| **Your agent workspace & context**source code, repo files, agent definitions, prompts | Your repository | **EXCERPTS ONLY** | Task-necessary excerpts to the Model controller over TLS for model-backed steps, not stored on TestMu AI. No bulk codebase upload. |
| **rook project files**scenarios, results, working files | `.testmuai/rook/` | **ON SYNC ONLY** | Yours and committable; `rook ui --local` views them with no login. Leaves only when you run `rook sync`, which uploads agent definitions, scenarios, profiles and hook scripts as written. Sync needs a plan that includes Rook cloud. |
| **Run evidence / agent artifacts**agent replies, tool output | `.testmuai/rook/` | **ON A RECORDED RUN** | A normal run records to your hosted timeline, so this includes data your agent returned. `--test` runs, and every run on a plan without Rook cloud such as Starter, stay local. |
| **Secrets, credentials & keys** | Your machine (`~/.testmuai/rook/`) | **NOT SYNCED** | Values stored with `rook env set` and the local credential store are never part of a sync; profiles refer to them as `${VAR}`. Profiles and hook scripts are uploaded as written on `rook sync`, and `profile add` and `profile fix` send the text you paste and hook output to the model, so keep secrets out of them. |
| **Session transcripts**prompts, tool results, answers | `~/.testmuai/rook/sessions/` | **NO** | Stay on your machine unless you export them with `rook export logs` for a support request. Since 0.1.12, credentials rook holds or recognises are masked before each line is written (best effort; older transcripts are not masked). |
| **Operational telemetry** | — | **YES, BY DEFAULT** | Background events about rook's own operation, with no prompts, code or command arguments; a small terminal report (terminal name, size, color level, user or root) when a session registers; and, for a failed evidence upload, its stage, status and error code. `ROOK_TELEMETRY=off` or the `telemetry` setting in rook's config turns all of it off. |

*Your inputs and outputs are never used to train any LLM.*

### CONTROLS

| | |
|---|---|
| **IN TRANSIT**TLS 1.2+ for all traffic to TestMu AI. | **AT REST**AES-256 for stored data. |
| **AUTHENTICATION**SSO via SAML 2.0. | **PROVISIONING**SCIM for user lifecycle. |
| **AUDITABILITY**Audit logs at platform level. | **DATA PROCESSING**DPA with Standard Contractual Clauses. |

### COMPLIANCE

TestMu AI maintains, at the company level:

- **ISO/IEC 42001** — AI management system standard — Stage 1 audit cleared.
- **SOC 2 Type II**
- **ISO/IEC 27001** (information security) · **ISO/IEC 27017** (cloud) · **ISO/IEC 27701** (privacy)
- **GDPR · HIPAA · CCPA** — privacy & regulatory compliance
- **DPA with Standard Contractual Clauses**

*Scope statement and report excerpts covering Agent Assurance available on request.*

### RETENTION & MODEL PROVIDERS

- Local data under `.testmuai/rook/` is yours — retained, deleted or committed entirely at your discretion.
- Cloud (synced) data is deleted after 30 days.
- Model providers: OpenAI and Google Gemini.
- No training: your inputs and outputs are never used to train any model.

*Agent Assurance (rook CLI) · TestMu AI · Technical & Security Overview.*
