---
id: agent-assurance-technical-security
toc_max_heading_level: 2
title: Agent Assurance Technical & Security Overview
hide_title: false
sidebar_label: Technical & Security
description: How rook runs, the components and network hosts it talks to, and how it handles your code and data, for engineering and security review.
keywords:
  - rook security
  - agent assurance security
  - rook network hosts
  - rook data privacy
  - rook architecture
  - agent assurance compliance
url: https://www.testmuai.com/support/docs/agent-assurance-technical-security/
site_name: TestMu AI
slug: agent-assurance-technical-security/
canonical: https://www.testmuai.com/support/docs/agent-assurance-technical-security/
---
import { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Agent Assurance Technical & Security Overview",
          "item": `${BRAND_URL}/support/docs/agent-assurance-technical-security/`
        }]
      })
    }}
></script>

# Agent Assurance Technical & Security Overview

How rook runs, the components and network it talks to, and how it handles your code and data — for engineering and security review.

**Product** Agent Assurance (rook CLI) **Vendor** TestMu AI

---

## 01 At a glance

rook tests AI agents you own — it grades what an agent actually did against evidence, including red-team scenarios. It runs where your code already is: your machine or your CI runner. Your repository stays the system of record.

| **LOCAL-FIRST** | **YOUR CODE STAYS YOURS** |
|---|---|
| Runs on your machine / CI runner. All working files live in `.testmuai/rook/` — readable and committable by you. | No bulk upload of your codebase. Model-backed steps send only the task-necessary context (source excerpts, agent definitions, scenario material, recorded evidence) over TLS. |
| **SECRETS NEVER LEAVE** | **NO TRAINING ON YOUR DATA** |
| Secret values and your local credential store are never transmitted. You do not supply your own model API key. | Your inputs and outputs are never used to train any LLM. |

`ISO 42001 · AI · Stage 1` `SOC 2 Type II` `ISO 27001` `ISO 27017` `ISO 27701` `GDPR`
`HIPAA` `CCPA` `TLS 1.2+ in transit` `AES-256 at rest` `SSO · SAML 2.0` `SCIM`
`DPA · SCCs`

*Certifications and controls are TestMu AI company-level; scope covering Agent Assurance available on request.*

---

## 02 Architecture & network

Two zones. Your environment runs the rook CLI — which drives your agent and writes the plain per-project files under `.testmuai/rook/` — and an optional local rook UI ( `rook ui --local` , no hosted login). A global `~/.testmuai/rook/` keeps your sign-in profile and session logs. For the features to work, the CLI talks to TestMu AI over HTTPS (TLS 1.2+); the components and paths are shown below.

```text
YOUR ENVIRONMENT · machine / CI
┌──────────────────────────────────────────────────────────────┐
│ YOUR AGENT & CONTEXT · workspace                             │
│   local rook UI  (rook ui --local · no hosted login)         │
│        ↓                                                     │
│   rook CLI  (drives your agent · writes .testmuai/rook/)     │
│                                                              │
│ NEVER CROSSES THE BOUNDARY                                   │
│   · secret values & local credential store                   │
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

*The rook CLI is the only component that crosses the boundary — over HTTPS (TLS 1.2+), via Cloudflare — to TestMu AI. The Model controller calls the LLM providers; the Rook backend uses a database and object storage. The model stream uses Server-Sent Events.*

### NETWORK HOSTS

rook contacts only this fixed set of TestMu AI hosts over HTTPS (TLS 1.2+); model generation streams back over Server-Sent Events (SSE), everything else is ordinary REST. Allow-listing them is sufficient for rook to operate.

| HOST | PATH | METHOD | PURPOSE |
|---|---|---|---|
| `rook-api.lambdatest.com` | `/controller/v1/chat/stream` | **POST · SSE** | Model generation (LLM) — streamed back as SSE. |
| | `/api/v1/∗` | **GET · POST** | Session & data management. |
| `rook.lambdatest.com` | `/` | **GET** | Hosted Rook Cloud UI (browser). |
| `auth.lambdatest.com`<br />`accounts.lambdatest.com`<br />`billing.lambdatest.com` | `/` · `/api/user` | **GET · POST** | Sign-in, identity and billing. |

---

## 03 Security & data privacy

Model-backed commands send the controller the context that task needs — not your whole tree. Recording to the hosted timeline and `rook sync` are explicit, user-initiated actions, never background uploads.

### WHAT LEAVES, WHAT NEVER DOES

| DATA CLASS | WHERE IT LIVES | LEAVES YOUR MACHINE? | WHEN & WHERE |
|---|---|---|---|
| **Your agent workspace & context**<br />source code, repo files, agent definitions, prompts | Your repository | **EXCERPTS ONLY** | Task-necessary excerpts to the Model controller over TLS for model-backed steps, not stored on TestMu AI. No bulk codebase upload. |
| **rook project files**<br />scenarios, results, working files | `.testmuai/rook/` | **ON SYNC ONLY** | Yours and committable; `rook ui --local` views them with no login. Leaves only when you run `rook sync` . |
| **Run evidence / agent artifacts** | `.testmuai/rook/` | **ON A RECORDED RUN** | A normal run records to your hosted timeline; `--test` and local runs stay off it. |
| **Secrets, credentials & keys** | Your machine | **NEVER** | Never transmitted and never part of a sync — your agent runs in your environment. |

*Your inputs and outputs are never used to train any LLM.*

### CONTROLS

| | |
|---|---|
| **IN TRANSIT**<br />TLS 1.2+ for all traffic to TestMu AI. | **AT REST**<br />AES-256 for stored data. |
| **AUTHENTICATION**<br />SSO via SAML 2.0. | **PROVISIONING**<br />SCIM for user lifecycle. |
| **AUDITABILITY**<br />Audit logs at platform level. | **DATA PROCESSING**<br />DPA with Standard Contractual Clauses. |

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

---

*Agent Assurance (rook CLI) · TestMu AI · Technical & Security Overview.*
