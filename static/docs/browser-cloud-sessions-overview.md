# Understanding the Sessions API

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

The Sessions API lets you create and control cloud-based browser sessions
through simple SDK calls. Each session is like giving your AI agent its own
dedicated browser window, but running on TestMu AI Browser Cloud and controlled
through your code.

## Sessions at a Glance

When you create a session, you get a fully isolated Chrome browser running in
TestMu AI Browser Cloud that your code controls. Each browser has its own
state, cookies, and storage, so your AI agent can navigate the web, interact
with sites, and maintain context across multiple steps without interference
from other sessions.

Specifically, each session gives you:

1. A **session ID** to track and manage it
2. A **WebSocket URL** to connect your automation tool (Puppeteer, Playwright, or Selenium)
3. A **debug URL** to watch the session on the TestMu AI dashboard
4. A **session viewer URL** for real-time streaming of the browser

## Before You Begin

If you have not set up your account and installed the SDK yet, [launch your first session](/support/docs/launch-first-session/) before working with sessions.

## How It Works

```
Your Agent                          TestMu AI Cloud
│                                      │
├── client.sessions.create() ────────→ │  Spins up a real Chrome browser
│                                      │  Returns session ID + WebSocket URL
│                                      │
├── client.puppeteer.connect() ──────→ │  Your agent drives the browser
│   page.goto(...)                     │  via WebSocket (CDP)
│   page.click(...)                    │
│   page.type(...)                     │
│                                      │
├── browser.close() ─────────────────→ │  Browser disconnects
│                                      │
└── client.sessions.release() ───────→ │  Session cleaned up
│  Resources freed
```

Your agent creates a session, connects to it using its preferred automation
library, does its work, and releases the session when done. That's the entire
lifecycle.
