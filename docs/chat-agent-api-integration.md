---
id: chat-agent-api-integration
title: Chat Agent API — Integration Guide
hide_title: false
sidebar_label: Chat Agent API Integration
description: Learn how the platform communicates with your chatbot via API — request format, connection methods, response schema, and integration requirements.
keywords:
 - chat agent api
 - agent integration
 - chatbot api
 - agent to agent testing
 - api integration guide
url: https://www.testmuai.com/support/docs/chat-agent-api-integration/
site_name: TestMu AI
slug: chat-agent-api-integration/
canonical: https://www.testmuai.com/support/docs/chat-agent-api-integration/
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
          "name": "Chat Agent API Integration",
          "item": `${BRAND_URL}/support/docs/chat-agent-api-integration`
        }]
      })
    }}
></script>

This document outlines the API request format, required credentials, and response schema the platform uses to communicate with your chatbot — regardless of provider or framework.

---

## Request Format

The platform communicates with your chatbot via standard HTTP POST requests. Below is a representative example using curl notation, followed by a breakdown of each component.

```bash title="Example Request"
curl -X POST https://api.examplechatbot.com/chat
  -H "Authorization: Bearer sk-example-a1b2c3d4e5f6"
  -H "Content-Type: application/json"
  -d '{
    "assistantId": "asst_7xG9kPqR2mN4",
    "input": "Hi, I need help with my account"
  }'
```

:::info
The field names above (`assistantId`, `input`) are illustrative. Your chatbot may use different field names (e.g., `message`, `query`, `botId`, `agentId`). The platform adapts to whatever request structure your API expects.
:::

### Request Components

| Component | Value in Example | Description |
|-----------|-----------------|-------------|
| **Method** | `POST` | HTTP method — all chat requests use POST. |
| **Endpoint URL** *(Required)* | `https://api.examplechatbot.com/chat` | Your chatbot's API endpoint — the URL that accepts incoming messages. This varies by provider. |
| **Authorization** *(Required)* | `Bearer sk-example-a1b2c3d4e5f6` | Authentication token. The platform uses the token you provide to authenticate each request. Format may vary (Bearer token, API key header, etc.). |
| **Content-Type** *(Required)* | `application/json` | Indicates a JSON-formatted request body. |
| **Additional Headers** *(Optional)* | Any extra `-H "…"` entries | If your chatbot requires additional headers (e.g., session ID, API version, workspace ID, custom tracking headers), they are fully supported. **Include as many as needed.** |
| **Request Body** | JSON payload | Contains the fields your chatbot expects — typically a bot/assistant identifier and the user message. Field names vary by provider. |

:::tip Header Flexibility
The platform sends the exact URL, token, and headers you configure. If your chatbot requires headers beyond Authorization and Content-Type, simply provide them — the platform forwards all configured headers with every request.
:::

---

## Connection Methods

The platform supports three ways to connect to your chatbot, depending on where it is hosted and how it is accessible. Choose the option that matches your environment.

### Option A — Public API (Direct)

The simplest path. If your chatbot exposes a publicly reachable HTTPS endpoint, the platform connects to it directly using the URL, auth headers, and any additional headers you provide.

**Flow:** `Testing Platform` → `Internet (HTTPS)` → `Your Chatbot API`

| You Provide | Details |
|-------------|---------|
| **Endpoint URL** *(Required)* | The public HTTPS URL of your chatbot (e.g., `https://api.yourcompany.com/chat`). |
| **Auth Headers** *(Required)* | Authorization token, API key, or any authentication headers your API requires. |
| **Additional Headers** *(Optional)* | Any extra headers (session ID, API version, workspace ID, etc.). No limit on count. |

> **Best for:** Production / cloud-hosted bots

### Option B — Secure Proxy (Private Network)

If your chatbot is not publicly reachable — e.g., it sits behind a corporate firewall, within a VPC, or on an internal network — the platform provides a lightweight **proxy agent** that you install inside your network. The agent establishes a secure outbound tunnel to our platform, allowing test traffic to reach your chatbot without exposing it to the public internet.

**Flow:** `Testing Platform` → `Secure Tunnel` → `Proxy Agent (Your Network)` → `Your Chatbot (Internal)`

| You Provide | Details |
|-------------|---------|
| **Internal Endpoint** *(Required)* | The internal URL or hostname of your chatbot (e.g., `https://chatbot.internal:8443/chat`). |
| **Auth Headers** *(Required)* | Same authentication headers your chatbot expects. The proxy handles *network access*, not authentication — your chatbot still validates credentials on every request. |
| **Additional Headers** *(Optional)* | Any extra headers your chatbot requires. |
| **Proxy Agent** | Provided by us. A lightweight service installed on a machine within your network that has access to the chatbot. Only outbound connectivity is needed — no inbound firewall rules required. |

> **Best for:** Enterprise / on-premise deployments

### Option C — Localhost (Dev / Staging)

For chatbots running on a local development machine (e.g., `localhost:3000`), the same proxy agent is installed locally. It creates a secure tunnel from our platform to your machine, allowing the platform to reach your locally running chatbot.

**Flow:** `Testing Platform` → `Secure Tunnel` → `Proxy Agent (Your Machine)` → `localhost:port`

| You Provide | Details |
|-------------|---------|
| **Local Endpoint** *(Required)* | The localhost URL and port your chatbot runs on (e.g., `http://localhost:3000/chat`). |
| **Auth Headers** *(If applicable)* | If your local chatbot enforces authentication, provide the same auth headers. If auth is disabled in dev mode, this can be skipped. |
| **Proxy Agent** | Provided by us. Installed on your local machine — runs as a background process during testing. |

> **Best for:** Development / pre-deployment testing

### Comparison at a Glance

| | Option A: Public API | Option B: Proxy | Option C: Localhost |
|---|---|---|---|
| **Chatbot reachable from internet?** | Yes | No | No |
| **Proxy agent needed?** | No | Yes (installed in your network) | Yes (installed on your machine) |
| **Auth headers required?** | Required | Required | If enforced |
| **Additional headers supported?** | Yes | Yes | Yes |
| **Firewall changes needed?** | None | None (outbound only) | None |
| **Typical use case** | Production, cloud-hosted | Enterprise, on-premise | Development, staging |

:::tip
Regardless of connection method, the platform sends the exact authentication and custom headers you configure with every request. The proxy agent handles *network reachability* only — it does not bypass or replace your chatbot's authentication.
:::

---

## Response Schema

The response structure varies by provider. Below is a representative example showing common fields. Your chatbot's response may include different or additional fields — the platform adapts to your specific schema.

```json title="Example Response"
{
  "id": "1310ab59-9477-4311-8f1b-b3eb81105133",
  "input": [
    { "role": "user", "content": "Hi, I need help with my account" }
  ],
  "output": [
    { "role": "assistant", "content": "Sure! Could you please provide more details…" }
  ],
  "createdAt": "2025-10-29T06:02:45.616Z",
  "cost": 0.0063
}
```

### Common Response Fields

Most chatbot APIs return some variation of the following. The exact field names and structure depend on your provider.

| Field (typical) | Type | Description |
|-----------------|------|-------------|
| `id` | string | Unique identifier for the conversation exchange. |
| `input` / `messages` | array or string | Echo of the user message that was sent. May include a `role` and `content` pair, or a plain string. |
| `output` / `response` | array or string | The chatbot's reply. **This is the primary field the platform evaluates.** May be nested under `role: "assistant"` or returned as a top-level string. |
| `assistantId` / `botId` | string | Identifies which assistant or bot handled the request (if applicable). |
| `createdAt` / `timestamp` | ISO 8601 / epoch | When the exchange occurred. |
| `cost` / `usage` | number or object | Cost or token usage for this exchange (if the provider exposes it). |

:::info Provider Flexibility
The platform is not tied to any specific chatbot provider. Whether your bot runs on a third-party platform or a custom-built API, we configure the request and parse the response to match your exact schema.
:::

---

## Integration Requirements

To connect your chatbot, provide the following. No code changes or infrastructure modifications are required on your side.

| Item | Required? | Description |
|------|-----------|-------------|
| **Chatbot URL** (API endpoint) | Required | The HTTPS endpoint where your chatbot receives messages. Example: `https://your-domain.com/chat` |
| **Authentication Credentials** | Required | The token or key needed to access your chatbot API. This could be a Bearer token, API key, or any other auth mechanism your API uses. |
| **Bot / Assistant Identifier** | Required | The identifier for the specific chatbot to be tested — applicable if your platform hosts multiple bots under one API. |
| **Additional Headers** | Optional | Any extra headers your chatbot requires — such as a session token, API version, workspace ID, or custom tracking header. Provide as many as needed. |
| **Request Body Format** | Optional | If your chatbot expects a different body structure (field names, extra fields), let us know and we will match it exactly. |

---

## How the Platform Uses This

Once credentials are configured, the platform handles everything autonomously:

`Credentials Configured` → `Test Scenarios Generated` → `API Calls Sent to Your Chatbot` → `Responses Captured` → `Quality Scored`

- The platform sends requests using the exact URL, token, and headers you provide.
- Multi-turn conversations are executed — the platform reads the `output` field from each response and continues the dialogue across multiple exchanges.
- Each completed conversation is evaluated across 18+ quality dimensions and results are surfaced in the dashboard.

:::caution Security
All credentials are encrypted at rest and decrypted only at runtime during test execution. They are never exposed in reports or logs.
:::
