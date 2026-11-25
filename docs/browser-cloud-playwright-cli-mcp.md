---
id: browser-cloud-playwright-cli-mcp
title: Playwright CLI and MCP - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Playwright CLI and MCP
description: Connect Playwright MCP and Playwright CLI to TestMu AI Browser Cloud over CDP, so coding agents like Claude Code drive a cloud Chrome session, not local Chrome.
keywords:
  - playwright mcp cloud browser
  - playwright mcp cdp endpoint
  - playwright cli
  - playwright mcp remote browser
  - coding agent browser
url: https://www.testmuai.com/support/docs/browser-cloud-playwright-cli-mcp/
site_name: TestMu AI
slug: browser-cloud-playwright-cli-mcp/
canonical: https://www.testmuai.com/support/docs/browser-cloud-playwright-cli-mcp/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/browser-cloud-playwright-cli-mcp/"
    },
    "headline": "Playwright CLI and MCP - TestMu AI Browser Cloud",
    "description": "Connect Playwright MCP and Playwright CLI to TestMu AI Browser Cloud over CDP, so coding agents like Claude Code drive a cloud Chrome session, not local Chrome.",
    "url": "https://www.testmuai.com/support/docs/browser-cloud-playwright-cli-mcp/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Browser Cloud",
    "keywords": [
      "playwright mcp cloud browser",
      "playwright mcp cdp endpoint",
      "playwright cli"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Set Up Credentials and Node.js for Playwright",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=\"your_username\"\nexport LT_ACCESS_KEY=\"your_access_key\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set Up Credentials and Node.js for Playwright",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:LT_USERNAME = \"your_username\"\n$env:LT_ACCESS_KEY = \"your_access_key\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "cdp-endpoint.mjs",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// Prints a TestMu AI Browser Cloud CDP endpoint for tools that take a CDP URL.\nconst { LT_USERNAME, LT_ACCESS_KEY } = process.env;\nif (!LT_USERNAME || !LT_ACCESS_KEY) {\n  console.error('Set LT_USERNAME and LT_ACCESS_KEY first.');\n  process.exit(1);\n}\n\nconst capabilities = {\n  browserName: 'Chrome',\n  browserVersion: 'latest',\n  'LT:Options': {\n    platform: 'Windows 11',\n    build: 'Playwright',\n    name: process.argv[2] || 'Playwright session',\n    user: LT_USERNAME,\n    accessKey: LT_ACCESS_KEY,\n    network: true,\n    console: true,\n  },\n};\n\nconsole.log(\n  `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`\n);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add Playwright MCP to Claude Code",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "claude mcp add testmu-browser -s local \\\n  -e PLAYWRIGHT_MCP_CDP_ENDPOINT=\"$(node cdp-endpoint.mjs 'Playwright MCP')\" \\\n  -- npx @playwright/mcp@latest"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add Playwright MCP to Claude Code",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "claude mcp add testmu-browser -s local -e \"PLAYWRIGHT_MCP_CDP_ENDPOINT=$(node cdp-endpoint.mjs 'Playwright MCP')\" '--' npx @playwright/mcp@latest"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add Playwright MCP to Any MCP Client With a JSON Config",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"mcpServers\": {\n    \"testmu-browser\": {\n      \"command\": \"npx\",\n      \"args\": [\"@playwright/mcp@latest\"],\n      \"env\": {\n        \"PLAYWRIGHT_MCP_CDP_ENDPOINT\": \"\u003cendpoint printed by cdp-endpoint.mjs\u003e\"\n      }\n    }\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run a First Browser Task Through Playwright MCP",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Use the testmu-browser tools to open https://www.testmuai.com/selenium-playground/ and tell me the page title."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Connect Playwright CLI to Browser Cloud",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g @playwright/cli@latest\nplaywright-cli install --skills"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": ".playwright/cli.config.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"browser\": {\n    \"cdpEndpoint\": \"\u003cendpoint printed by cdp-endpoint.mjs\u003e\"\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run Playwright CLI Commands in a Browser Cloud Session",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "playwright-cli open https://www.testmuai.com/selenium-playground/\nplaywright-cli snapshot\nplaywright-cli eval \"() =\u003e document.title\"\nplaywright-cli close"
      }
    ],
    "datePublished": "2026-11-23T12:00:00+05:30",
    "dateModified": "2026-11-23T12:00:00+05:30"
  }) }}
/>

# Run Playwright CLI and Playwright MCP on TestMu AI Browser Cloud

Playwright MCP and Playwright CLI are Microsoft's tools for giving an AI agent a browser. Both can attach to a running Chromium browser through a Chrome DevTools Protocol (CDP) endpoint. Point them at a <BrandName /> Browser Cloud endpoint, and every page your agent opens loads in a cloud Chrome session, recorded on your dashboard, instead of in Chrome on your machine.

We checked this setup on November 23, 2026 with `@playwright/mcp` 0.0.86 and `@playwright/cli` 0.1.25 (both on Playwright 1.66.0-alpha-2026-11-18) and Node.js 24. Both connected to a Chrome 158 session on Windows 11, opened a page and read it back.


## Choose Playwright CLI or Playwright MCP for Your Agent

| | Playwright CLI (`playwright-cli`) | Playwright MCP (`@playwright/mcp`) |
|---|---|---|
| **How the agent calls it** | Shell commands, taught by an installed skill | MCP tools, loaded into the agent's context |
| **Best fit, per the Playwright README** | Coding agents that also work on a large codebase and need to save tokens | Long agent loops that keep browser state and inspect page structure |
| **How it reaches Browser Cloud** | `browser.cdpEndpoint` in `.playwright/cli.config.json` | `PLAYWRIGHT_MCP_CDP_ENDPOINT` environment variable |

The [Playwright MCP README](https://github.com/microsoft/playwright-mcp) recommends the CLI for coding agents because CLI calls skip the large tool schemas and accessibility trees that MCP loads into context.


## Set Up Credentials and Node.js for Playwright

1. A <BrandName /> account. Your **Username** and **Access Key** are under **Settings** > **Account Settings**.
2. Node.js 20 or later. Both packages require it.
3. A coding agent or MCP client, such as Claude Code, Cursor, VS Code or Claude Desktop.

Set your credentials as environment variables:

<Tabs>
  <TabItem value="bash" label="macOS / Linux" default>

```bash
export LT_USERNAME="your_username"
export LT_ACCESS_KEY="your_access_key"
```

  </TabItem>
  <TabItem value="powershell" label="Windows (PowerShell)">

```powershell
$env:LT_USERNAME = "your_username"
$env:LT_ACCESS_KEY = "your_access_key"
```

  </TabItem>
</Tabs>


## Generate a Browser Cloud CDP Endpoint With Node.js

Browser Cloud accepts CDP connections at `wss://cdp.lambdatest.com/puppeteer`. The session settings go in a `capabilities` query parameter as URL-encoded JSON, in the same format as the [Puppeteer capabilities](/support/docs/capabilities-for-puppeteer/). Each new connection to the endpoint starts a new session.

Save this script as `cdp-endpoint.mjs`. It prints an endpoint built from your environment variables:

```javascript title="cdp-endpoint.mjs"
// Prints a TestMu AI Browser Cloud CDP endpoint for tools that take a CDP URL.
const { LT_USERNAME, LT_ACCESS_KEY } = process.env;
if (!LT_USERNAME || !LT_ACCESS_KEY) {
  console.error('Set LT_USERNAME and LT_ACCESS_KEY first.');
  process.exit(1);
}

const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 11',
    build: 'Playwright',
    name: process.argv[2] || 'Playwright session',
    user: LT_USERNAME,
    accessKey: LT_ACCESS_KEY,
    network: true,
    console: true,
  },
};

console.log(
  `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
);
```

Run `node cdp-endpoint.mjs "My session name"` to print an endpoint. The session name is optional.

:::warning
The endpoint contains your access key. Keep it in local, untracked configuration only, and never paste it into a prompt, an issue or a file you commit.
:::


## Connect Playwright MCP to Browser Cloud

Playwright MCP reads the endpoint from the `PLAYWRIGHT_MCP_CDP_ENDPOINT` environment variable (or the `--cdp-endpoint` option) and connects on the first browser tool call.

### Add Playwright MCP to Claude Code

Run this from your project folder. The `local` scope stores the server in your own Claude Code settings, not in the repository:

<Tabs>
  <TabItem value="bash" label="macOS / Linux" default>

```bash
claude mcp add testmu-browser -s local \
  -e PLAYWRIGHT_MCP_CDP_ENDPOINT="$(node cdp-endpoint.mjs 'Playwright MCP')" \
  -- npx @playwright/mcp@latest
```

  </TabItem>
  <TabItem value="powershell" label="Windows (PowerShell)">

```powershell
claude mcp add testmu-browser -s local -e "PLAYWRIGHT_MCP_CDP_ENDPOINT=$(node cdp-endpoint.mjs 'Playwright MCP')" '--' npx @playwright/mcp@latest
```

Keep the quotes around `'--'`. Without them, PowerShell drops the `--` and the command fails with `missing required argument 'commandOrUrl'`.

  </TabItem>
</Tabs>

Do not use `-s project`: it writes the endpoint, and your access key with it, to `.mcp.json`, which teams usually commit.

### Add Playwright MCP to Any MCP Client With a JSON Config

Most MCP clients accept this configuration. Replace the value with the endpoint that `cdp-endpoint.mjs` printed:

```json
{
  "mcpServers": {
    "testmu-browser": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"],
      "env": {
        "PLAYWRIGHT_MCP_CDP_ENDPOINT": "<endpoint printed by cdp-endpoint.mjs>"
      }
    }
  }
}
```

The [Playwright MCP README](https://github.com/microsoft/playwright-mcp) gives the exact setup steps for each client. Keep the file that holds the endpoint out of version control.

### Run a First Browser Task Through Playwright MCP

Ask your agent for a browser task, for example:

```text
Use the testmu-browser tools to open https://www.testmuai.com/selenium-playground/ and tell me the page title.
```

The first tool call starts the Browser Cloud session, which took 7 to 10 seconds in our runs. Later calls reuse the same session.

### End a Playwright MCP Session on Browser Cloud

The `browser_close` tool closes the cloud browser, and the dashboard lists the session as **Completed**. Quitting the MCP client also ends the session, which the dashboard then lists as **Cancelled**. A session that receives no command for `idleTimeout` seconds (300 by default) ends on its own.


## Connect Playwright CLI to Browser Cloud

Install the CLI, and install its skills so your coding agent learns the commands:

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

### Point Playwright CLI at Browser Cloud With a Config File

Playwright CLI reads `.playwright/cli.config.json` from the folder it runs in. Put the endpoint in `browser.cdpEndpoint`:

```json title=".playwright/cli.config.json"
{
  "browser": {
    "cdpEndpoint": "<endpoint printed by cdp-endpoint.mjs>"
  }
}
```

Add `.playwright/` to your `.gitignore`, because the file holds your access key.

:::note
`playwright-cli attach --cdp=<endpoint>` also connects, but it prints the full endpoint, access key included, in its output, where your coding agent reads and logs it. The config file keeps the endpoint out of the output.
:::

### Run Playwright CLI Commands in a Browser Cloud Session

`open` starts a Browser Cloud session and attaches to it. The other commands run in that session:

```bash
playwright-cli open https://www.testmuai.com/selenium-playground/
playwright-cli snapshot
playwright-cli eval "() => document.title"
playwright-cli close
```

`playwright-cli list` shows the session as `chrome (attached)`. A coding agent with the skills installed runs the same commands. Ask it, for example, to "use playwright-cli to open the Selenium Playground and check the page title".

### End a Playwright CLI Session on Browser Cloud

`playwright-cli close` and `playwright-cli detach` both disconnect, and Browser Cloud ends the session. In our runs the dashboard listed both as **Cancelled**, with the video and logs still recorded.


## Change Platform and Idle Timeout for Playwright Sessions

Edit `LT:Options` in `cdp-endpoint.mjs`, then generate a new endpoint:

| Option | What it sets | Example |
|---|---|---|
| `platform` | Operating system of the cloud machine | `'Windows 11'` |
| `build`, `name` | The build and session names shown on the dashboard | `'Playwright'` |
| `network`, `console` | Record network and browser console logs | `true` |
| `resolution` | Screen size (default `1920x1080`) | `'1366x768'` |
| `idleTimeout` | Seconds without a command before the session ends (default 300, maximum 1800) | `600` |
| `tunnel`, `tunnelName` | Send traffic through a running tunnel to reach `localhost` or staging | `true`, `'my-tunnel'` |

[Capabilities for Puppeteer](/support/docs/capabilities-for-puppeteer/) lists every option. To reach private sites, start a tunnel first: [Testing Locally Hosted Pages](/support/docs/testing-locally-hosted-pages/) shows how.


## Troubleshoot Playwright MCP and Playwright CLI Connections

| Error or symptom | Cause and fix |
|---|---|
| `401 Unauthorized` with `Unauthorized, either Username or AccessKey is invalid` | Browser Cloud rejected the credentials in the endpoint. Check `LT_USERNAME` and `LT_ACCESS_KEY`, run `cdp-endpoint.mjs` again and replace the old endpoint. |
| A CDP connection timeout from Playwright MCP | Playwright MCP waits 30 seconds by default. Raise it with `--cdp-timeout` or `PLAYWRIGHT_MCP_CDP_TIMEOUT`, and allow outbound WebSocket traffic to `cdp.lambdatest.com` on port 443. |
| Playwright CLI opens a local browser | The CLI did not find `.playwright/cli.config.json`. Run it from the folder that holds the `.playwright` folder. |
| The session ends during a long pause | The agent sent no command for `idleTimeout` seconds. Raise `idleTimeout`, up to 1800. |

:::warning
When the connection fails, Playwright MCP repeats the full endpoint in its error message to the agent, access key included. If that happens in a shared or logged session, rotate your access key.
:::


## Browser Use, SDK and Capability Guides for Browser Cloud

- [Browser Use on Browser Cloud](/support/docs/browser-cloud-browser-use/): run Browser Use agents in Python through the same CDP endpoint.
- [Connect to a Session](/support/docs/connect-to-session/): drive Browser Cloud from Node.js with the Playwright library and the <BrandName /> Browser SDK.
- [Capabilities for Puppeteer](/support/docs/capabilities-for-puppeteer/): every option you can set in `LT:Options`.
- [Replay and Debug Sessions](/support/docs/browser-cloud-debugging/): video, console logs and network logs for each session.
- [Playwright MCP Guide](https://www.testmuai.com/blog/playwright-mcp/) and [Playwright CLI Guide](https://www.testmuai.com/blog/playwright-cli/): how each tool works outside Browser Cloud.
