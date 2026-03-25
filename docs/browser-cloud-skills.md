---
id: browser-cloud-skills
title: AI Agent Skills - TestMu AI Browser Cloud
hide_title: true
sidebar_label: AI Agent Skills
description: Give any AI agent a real browser with a ready-to-use skill for TestMu AI Browser Cloud. Works with Claude, Cursor, LangChain, CrewAI, OpenAI, and any LLM tool.
keywords:
  - browser cloud skills
  - ai agent tools
  - langchain browser tool
  - crewai browser tool
  - openai function calling browser
  - agent framework integration
  - claude browser skill
  - cursor browser skill
url: https://www.testmuai.com/support/docs/browser-cloud-skills/
site_name: TestMu AI
slug: browser-cloud-skills/
canonical: https://www.testmuai.com/support/docs/browser-cloud-skills/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Browser Cloud",
          "item": `${BRAND_URL}/support/docs/what-is-browser-cloud/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "AI Agent Skills",
          "item": `${BRAND_URL}/support/docs/browser-cloud-skills/`
        }]
      })
    }}
></script>

# AI Agent Skills

Give any AI agent a real browser. The `browser-cloud` skill is a structured instruction file that tells an LLM assistant exactly how to generate production-grade browser automation code using <BrandName /> Browser Cloud. Drop it into Claude, Cursor, or any LLM tool that supports custom skills, and your agent can spin up cloud browsers on demand.

No local Chrome. No infrastructure. Just agents that can actually use the web.

---

## What the Skill Does

When you load the skill into your AI tool, the agent gains the ability to:

- **Spin up isolated cloud browser sessions** via `@testmuai/browser-cloud`
- **Connect via Puppeteer, Playwright, or Selenium**
- **Handle stealth, auth persistence, tunnels, file transfer, and observability**
- **Wrap browser actions** into LangChain, CrewAI, OpenAI function calling, or any custom agent loop

The skill is **agent-agnostic** - it works with any LLM or agent framework, not just Claude.

---

## Before You Begin

- **Node.js 16+** installed (18+ for Playwright adapter)
- **<BrandName /> account** - [Sign up at testmuai.com](https://www.testmuai.com) (free tier available)
- **SDK installed:**

```bash
npm i @testmuai/browser-cloud
```

- **Credentials configured:**

```bash
# .env
LT_USERNAME=your_testmuai_username
LT_ACCESS_KEY=your_testmuai_access_key
```

Get credentials at **testmuai.com → Settings → Account Settings**.

---

## Install the Skill

Install `browser-cloud` from the LambdaTest browser-cloud-skills repo with the Skills CLI:

```bash
npx skills add https://github.com/LambdaTest/browser-cloud-skills --skill browser-cloud
```

:::note
Requires Node.js and network access. After installation, your environment picks up the skill automatically where supported. You can also open `SKILL.md` manually if your tool does not integrate with the CLI.
:::

---

## Load the Skill into Your AI Tool

<Tabs>
  <TabItem value="claude" label="Claude / Claude.ai" default>

Copy the contents of `browser-cloud/SKILL.md` into a **Project instruction** or **system prompt**.

  </TabItem>
  <TabItem value="cursor" label="Cursor">

Add to `.cursor/rules/browser-cloud.mdc` or paste into **Cursor Settings → Rules for AI**.

  </TabItem>
  <TabItem value="other" label="Any Other LLM Tool">

Paste `browser-cloud/SKILL.md` as a **system prompt** or **instruction file**. The skill is plain markdown - it works anywhere.

  </TabItem>
</Tabs>

---

## Ask Your Agent to Build Something

Once the skill is loaded, ask naturally:

- *"Write me an agent that scrapes competitor pricing from three URLs in parallel"*
- *"Build a LangChain tool that gives my agent access to a real browser"*
- *"Create a browser agent that logs into our staging app and extracts the dashboard data"*
- *"Set up a cloud browser session with stealth mode and Playwright"*

The agent reads the skill, picks the right pattern, and writes complete, runnable TypeScript.

---

## Examples

### Standalone Scraping Agent

Scrape a single URL or batch-scrape multiple URLs with concurrency control:

```typescript
import { scrapeWithAgent, batchScrape } from './browser-cloud/examples/scrape-agent';

// Single URL
const result = await scrapeWithAgent('https://example.com');

// Multiple URLs, 3 concurrent sessions
const results = await batchScrape(
  ['https://a.com', 'https://b.com', 'https://c.com'],
  3
);
```

### Auth Persistence Across Cron Runs

Log in once, save the session, and reuse it on every future run. Zero re-logins for scheduled agents:

```typescript
import { fetchDashboard } from './browser-cloud/examples/auth-persist-agent';

// First run: logs in, saves session to .profiles/myapp-login.json
// All future runs: loads saved session, skips login entirely
const data = await fetchDashboard('https://app.example.com/dashboard');
```

### LangChain Agent with Browser Access

Build a LangChain agent that can browse the web as one of its tools:

```typescript
import { buildBrowserAgent } from './browser-cloud/examples/langchain-browser-tool';

const agent = await buildBrowserAgent();
const result = await agent.invoke({
  input: 'Research the latest pricing for our top three competitors.',
});
```

### Parallel Research Across URLs

Run multiple isolated browser sessions concurrently with progress tracking:

```typescript
import { parallelResearch } from './browser-cloud/examples/parallel-research';

const results = await parallelResearch([
  'https://competitor-a.com/pricing',
  'https://competitor-b.com/pricing',
  'https://competitor-c.com/pricing',
], 3);
```

---

## Supported Frameworks

| Framework | Language | Status | Reference |
|-----------|----------|--------|-----------|
| **LangChain** | TypeScript | Ready | `browser-cloud/examples/langchain-browser-tool.ts` |
| **OpenAI function calling** | TypeScript | Ready | `browser-cloud/references/integrations/openai-functions.md` |
| **Anthropic tool use** | TypeScript | Ready | `browser-cloud/references/integrations/openai-functions.md` |
| **CrewAI** | Python | Ready (subprocess bridge) | `browser-cloud/references/integrations/crewai.md` |
| **AutoGen** | Python | Use OpenAI pattern | `browser-cloud/references/integrations/openai-functions.md` |
| **Custom agent loop** | Any | Drop-in function | Any file in `browser-cloud/examples/` |

---

## Supported Capabilities

| Capability | What It Does |
|------------|-------------|
| **Stealth mode** | 15+ fingerprint patches (Puppeteer) / 6 init scripts (Playwright). Humanized click/type timing. Randomized UA and viewport. |
| **Auth persistence** | Save login state to disk. Reload on every run. Zero re-logins for scheduled agents. |
| **Context transfer** | Pass cookies and storage between sessions in the same script run. |
| **Tunnel** | Access localhost, staging, or VPN-gated URLs from cloud browsers. |
| **Parallel sessions** | Multiple isolated browsers running concurrently with batching support. |
| **File transfer** | Upload local files to cloud browser. Download exports, receipts, reports back to disk. |
| **Extensions** | Load Chrome extensions into sessions from S3 URLs. |
| **Quick Actions** | One-liner scrape, screenshot, and PDF. No session management required. |
| **Observability** | Every session gets video recording, console logs, and network capture in your <BrandName /> automation session history. |

---

## Skill Repo Structure

```
├── package.json                        ← npm scripts and SDK dependency
├── README.md
│
└── browser-cloud/                      ← Skill bundle
    ├── SKILL.md                        ← Load this into your AI tool
    ├── examples/
    │   ├── scrape-agent.ts             ← Batch scraping with concurrency control
    │   ├── form-fill-agent.ts          ← Form interaction with Playwright + stealth
    │   ├── auth-persist-agent.ts       ← Login once, reuse session across runs
    │   ├── parallel-research.ts        ← Parallel sessions with progress tracking
    │   └── langchain-browser-tool.ts   ← Four LangChain tool variants
    └── references/
        ├── patterns/
        │   ├── quick-actions.md        ← Scrape / screenshot / PDF one-liners
        │   ├── session-navigate.md     ← Multi-step navigation and interaction
        │   ├── auth-profile.md         ← Auth persistence patterns
        │   ├── parallel-sessions.md    ← Concurrent agent sessions
        │   ├── tunnel.md              ← Localhost and internal network access
        │   └── files.md               ← Upload/download between agent and browser
        └── integrations/
            ├── openai-functions.md     ← OpenAI + Anthropic function calling
            └── crewai.md              ← CrewAI BaseTool (Python + Node bridge)
```

---

## Contributing

Contributions welcome at the [browser-cloud-skills repo](https://github.com/LambdaTest/browser-cloud-skills). The most useful additions are:

- New **pattern files** in `browser-cloud/references/patterns/` for use cases not currently covered
- New **integration files** in `browser-cloud/references/integrations/` for frameworks not yet supported
- New **runnable examples** in `browser-cloud/examples/`
- Improvements to `browser-cloud/SKILL.md` that make the LLM output more correct or more concise

:::tip
Keep `SKILL.md` under 500 lines. Every addition should remove or replace something weaker. The skill is a decision engine, not a tutorial.
:::

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="/support/docs/what-is-browser-cloud/">
        Browser Cloud
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        AI Agent Skills
      </span>
    </li>
  </ul>
</nav>
