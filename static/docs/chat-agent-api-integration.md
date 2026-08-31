# How to Integrate a Chat Agent API

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI connects to your chat agent over standard HTTP. It sends multi-turn test conversations to your API endpoint and scores the replies, with no code changes to your agent.

It works with any chatbot provider or framework. You provide the endpoint URL, the authentication, and the request and response shape, and the platform matches whatever structure your API uses.

## How the Platform Sends Requests to Your Chat Agent



The platform sends each message as an HTTP POST request with a JSON body. The example below shows the shape, followed by a breakdown of each component.

```bash title="Example Request"
curl -X POST https://api.examplechatbot.com/chat \
-H "Authorization: Bearer sk-example-a1b2c3d4e5f6" \
-H "Content-Type: application/json" \
-d '{
"assistantId": "asst_7xG9kPqR2mN4",
"input": "Hi, I need help with my account"
}'
```


The field names above (`assistantId`, `input`) are illustrative. Your chat agent may use different field names (for example `message`, `query`, `botId`, `agentId`). The platform adapts to whatever request structure your API expects.


### Request Components

| Component | Value in Example | Description |
|-----------|-----------------|-------------|
| **Method** | `POST` | HTTP method. All chat requests use POST. |
| **Endpoint URL** *(Required)* | `https://api.examplechatbot.com/chat` | Your chat agent's API endpoint, the URL that accepts incoming messages. This varies by provider. |
| **Authorization** *(Required)* | `Bearer sk-example-a1b2c3d4e5f6` | Authentication token. The platform uses the token you provide to authenticate each request. The format may vary (Bearer token, API key header, and similar). |
| **Content-Type** *(Required)* | `application/json` | Indicates a JSON-formatted request body. |
| **Additional Headers** *(Optional)* | Any extra `-H "…"` entries | If your chat agent requires extra headers (session ID, API version, workspace ID, custom tracking headers), they are supported. Include as many as needed. |
| **Request Body** | JSON payload | Contains the fields your chat agent expects, typically a bot or assistant identifier and the user message. Field names vary by provider. |

**Header Flexibility**
The platform sends the exact URL, token, and headers you configure. If your chat agent requires headers beyond Authorization and Content-Type, provide them, and the platform forwards all configured headers with every request.


## How to Connect Your Chat Agent



The platform supports three connection methods, based on where your agent runs and how it is reachable. Choose the option that matches your environment.

### Option A: Public API (Direct)

The simplest path. If your chat agent exposes a publicly reachable HTTPS endpoint, the platform connects to it directly using the URL, auth headers, and any additional headers you provide.

**Flow:** `Testing Platform` → `Internet (HTTPS)` → `Your Chat Agent API`

| You Provide | Details |
|-------------|---------|
| **Endpoint URL** *(Required)* | The public HTTPS URL of your chat agent (for example `https://api.yourcompany.com/chat`). |
| **Auth Headers** *(Required)* | Authorization token, API key, or any authentication headers your API requires. |
| **Additional Headers** *(Optional)* | Any extra headers (session ID, API version, workspace ID). No limit on count. |

> **Best for:** Production and cloud-hosted bots

### Option B: Secure Proxy (Private Network)

If your chat agent is not publicly reachable (it sits behind a corporate firewall, within a VPC, or on an internal network), TestMu AI provides a lightweight proxy agent that you install inside your network. The agent establishes a secure outbound tunnel to TestMu AI, so test traffic reaches your agent without exposing it to the public internet.

**Flow:** `Testing Platform` → `Secure Tunnel` → `Proxy Agent (Your Network)` → `Your Chat Agent (Internal)`

| You Provide | Details |
|-------------|---------|
| **Internal Endpoint** *(Required)* | The internal URL or hostname of your chat agent (for example `https://chatbot.internal:8443/chat`). |
| **Auth Headers** *(Required)* | The same authentication headers your chat agent expects. The proxy handles network access, not authentication. Your agent still validates credentials on every request. |
| **Additional Headers** *(Optional)* | Any extra headers your chat agent requires. |
| **Proxy Agent** | Provided by TestMu AI. A lightweight service installed on a machine in your network that can reach the agent. Only outbound connectivity is needed, with no inbound firewall rules. |

> **Best for:** Enterprise and on-premise deployments

### Option C: Localhost (Dev / Staging)

For chat agents running on a local development machine (for example `localhost:3000`), the same proxy agent is installed locally. It creates a secure tunnel from TestMu AI to your machine, so the platform reaches your locally running agent.

**Flow:** `Testing Platform` → `Secure Tunnel` → `Proxy Agent (Your Machine)` → `localhost:port`

| You Provide | Details |
|-------------|---------|
| **Local Endpoint** *(Required)* | The localhost URL and port your chat agent runs on (for example `http://localhost:3000/chat`). |
| **Auth Headers** *(If applicable)* | If your local agent enforces authentication, provide the same auth headers. If auth is disabled in dev mode, skip this. |
| **Proxy Agent** | Provided by TestMu AI. Installed on your local machine, running as a background process during testing. |

> **Best for:** Development and pre-deployment testing

### Comparison at a Glance

| | Option A: Public API | Option B: Proxy | Option C: Localhost |
|---|---|---|---|
| **Chat agent reachable from internet?** | Yes | No | No |
| **Proxy agent needed?** | No | Yes (installed in your network) | Yes (installed on your machine) |
| **Auth headers required?** | Required | Required | If enforced |
| **Additional headers supported?** | Yes | Yes | Yes |
| **Firewall changes needed?** | None | None (outbound only) | None |
| **Typical use case** | Production, cloud-hosted | Enterprise, on-premise | Development, staging |


Whatever the connection method, the platform sends the exact authentication and custom headers you configure with every request. The proxy agent handles network reachability only. It does not bypass or replace your agent's authentication.


## How the Platform Reads Your Chat Agent's Response



The platform reads the reply from each response, uses it to continue the conversation, and scores the result. Response shapes vary by provider, and the platform adapts to yours.

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

Most chat agent APIs return some variation of the following. The exact field names and structure depend on your provider.

| Field (typical) | Type | Description |
|-----------------|------|-------------|
| `id` | string | Unique identifier for the conversation exchange. |
| `input` / `messages` | array or string | Echo of the user message that was sent. May include a `role` and `content` pair, or a plain string. |
| `output` / `response` | array or string | The agent's reply. **This is the primary field the platform evaluates.** May be nested under `role: "assistant"` or returned as a top-level string. |
| `assistantId` / `botId` | string | Identifies which assistant or bot handled the request, if applicable. |
| `createdAt` / `timestamp` | ISO 8601 / epoch | When the exchange occurred. |
| `cost` / `usage` | number or object | Cost or token usage for this exchange, if the provider exposes it. |

**Provider Flexibility**
The platform is not tied to any specific chat agent provider. Whether your bot runs on a third-party platform or a custom-built API, TestMu AI configures the request and parses the response to match your schema.


## What You Provide to Connect a Chat Agent



To connect your agent, provide the following. No code changes or infrastructure changes are required on your side.

| Item | Required? | Description |
|------|-----------|-------------|
| **Chat agent URL** (API endpoint) | Required | The HTTPS endpoint where your agent receives messages. Example: `https://your-domain.com/chat` |
| **Authentication Credentials** | Required | The token or key needed to access your agent API. This can be a Bearer token, API key, or any other auth mechanism your API uses. |
| **Bot / Assistant Identifier** | Required | The identifier for the specific agent to test, if your platform hosts multiple bots under one API. |
| **Additional Headers** | Optional | Any extra headers your agent requires, such as a session token, API version, workspace ID, or custom tracking header. Provide as many as needed. |
| **Request Body Format** | Optional | If your agent expects a different body structure (field names, extra fields), provide it and TestMu AI matches it exactly. |

## How the Platform Runs a Chat Evaluation



Once credentials are configured, The platform runs the evaluation autonomously.

`Credentials Configured` → `Test Scenarios Generated` → `API Calls Sent to Your Agent` → `Responses Captured` → `Quality Scored`

- The platform sends requests using the exact URL, token, and headers you provide.
- It runs multi-turn conversations, reading the `output` field from each response to continue the dialogue across exchanges.
- Each completed conversation is scored across the 9 chat and voice quality metrics, and results appear in the dashboard.

**Security**
All credentials are encrypted at rest and decrypted only at runtime during test execution. They are never exposed in reports or logs.


## Troubleshoot Chat Agent Connection Failures



Most connection failures come from authentication, the response path, or network reach. Each has a direct fix.

- **What you see:** the platform reports an authentication error and no conversation runs. **Why:** the auth header or token is missing, expired, or wrong. **Fix:** confirm the Authorization header and token, and that the same credentials succeed in a direct curl call.

- **What you see:** requests succeed but the reply is empty or scored as blank. **Why:** the platform is reading the wrong response field. **Fix:** point the response path at the field that holds the reply. For the example above, that is `output`.

- **What you see:** every request fails to reach a private or local agent. **Why:** the proxy agent is not running, or the internal endpoint is wrong. **Fix:** confirm the proxy agent is installed and connected, and that the internal or localhost URL and port are correct.

- **What you see:** requests are rejected before a reply. **Why:** the endpoint returns a non-2xx status such as 401 unauthorized, 404 not found, or 429 rate limited. **Fix:** verify the endpoint URL and method, and that the agent accepts the request body shape you configured.

- **What you see:** the connection fails on a public endpoint. **Why:** the URL is not served over HTTPS, or the TLS certificate is invalid. **Fix:** serve the endpoint over HTTPS with a valid certificate, or use the proxy method for internal agents.

## Related TestMu AI Guides



- See how to [test chat agents from the terminal](/support/docs/agent-testing-cli/), including custom body templates and response paths.
- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/).
