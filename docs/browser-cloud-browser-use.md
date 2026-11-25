---
id: browser-cloud-browser-use
title: Browser Use Integration - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Browser Use (Python)
description: Run Browser Use AI agents on TestMu AI Browser Cloud. Connect browser-use 1.0 to a cloud Chrome session over CDP in Python and replay each run on the dashboard.
keywords:
  - browser use
  - browser use cloud browser
  - browser use cdp url
  - python ai browser agent
  - browser use remote browser
url: https://www.testmuai.com/support/docs/browser-cloud-browser-use/
site_name: TestMu AI
slug: browser-cloud-browser-use/
canonical: https://www.testmuai.com/support/docs/browser-cloud-browser-use/
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
      "@id": "https://www.testmuai.com/support/docs/browser-cloud-browser-use/"
    },
    "headline": "Browser Use Integration - TestMu AI Browser Cloud",
    "description": "Run Browser Use AI agents on TestMu AI Browser Cloud. Connect browser-use 1.0 to a cloud Chrome session over CDP in Python and replay each run on the dashboard.",
    "url": "https://www.testmuai.com/support/docs/browser-cloud-browser-use/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Browser Cloud",
    "keywords": [
      "browser use",
      "browser use cloud browser",
      "browser use cdp url"
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
        "name": "Set Up Credentials and Python for Browser Use",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=\"your_username\"\nexport LT_ACCESS_KEY=\"your_access_key\"\nexport ANTHROPIC_API_KEY=\"your_anthropic_api_key\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set Up Credentials and Python for Browser Use",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:LT_USERNAME = \"your_username\"\n$env:LT_ACCESS_KEY = \"your_access_key\"\n$env:ANTHROPIC_API_KEY = \"your_anthropic_api_key\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install browser-use 1.0.8",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pip install \"browser-use==1.0.8\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "testmu_cdp.py",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "import json\nimport os\nfrom urllib.parse import quote\n\n\ndef testmu_cdp_url(name: str) -\u003e str:\n    \"\"\"Return a CDP URL that starts a TestMu AI Browser Cloud session.\"\"\"\n    capabilities = {\n        \"browserName\": \"Chrome\",\n        \"browserVersion\": \"latest\",\n        \"LT:Options\": {\n            \"platform\": \"Windows 11\",\n            \"build\": \"Browser Use\",\n            \"name\": name,\n            \"user\": os.environ[\"LT_USERNAME\"],\n            \"accessKey\": os.environ[\"LT_ACCESS_KEY\"],\n            \"network\": True,\n            \"console\": True,\n        },\n    }\n    return \"wss://cdp.lambdatest.com/puppeteer?capabilities=\" + quote(\n        json.dumps(capabilities), safe=\"\"\n    )"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "agent.py",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "import asyncio\n\nfrom browser_use import Agent, Browser, ChatAnthropic\n\nfrom testmu_cdp import testmu_cdp_url\n\n\nasync def main():\n    agent = Agent(\n        \"Open https://www.testmuai.com/selenium-playground/ and return the page title.\",\n        llm=ChatAnthropic(\"claude-sonnet-5-5\"),\n        browser=Browser(cdp_url=testmu_cdp_url(\"Browser Use: read playground title\")),\n    )\n    result = await agent.run()\n    print(result.final_result())\n\n\nasyncio.run(main())"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run a Browser Use Agent on a Cloud Browser",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "python agent.py"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Keep One Cloud Browser Across Several Browser Use Runs",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "import asyncio\n\nfrom browser_use import Agent, Browser, ChatAnthropic\n\nfrom testmu_cdp import testmu_cdp_url\n\n\nasync def main():\n    llm = ChatAnthropic(\"claude-sonnet-5-5\")\n    browser = Browser(cdp_url=testmu_cdp_url(\"Browser Use: two tasks\"), keep_alive=True)\n\n    await Agent(\"Open https://www.testmuai.com/selenium-playground/\", llm=llm, browser=browser).run()\n    await Agent(\"Return the text of the main heading on the open page.\", llm=llm, browser=browser).run()\n\n    await browser.stop()  # disconnects, which ends the Browser Cloud session\n\n\nasyncio.run(main())"
      }
    ],
    "datePublished": "2026-11-23T12:00:00+05:30",
    "dateModified": "2026-11-23T12:00:00+05:30"
  }) }}
/>

# Run Browser Use Agents on TestMu AI Browser Cloud

[Browser Use](https://github.com/browser-use/browser-use) is an open-source Python library that lets an LLM operate a real browser. Give it the CDP URL of a <BrandName /> Browser Cloud session, and the agent works in a cloud Chrome browser instead of one on your machine. Each run is recorded on your dashboard with video, console logs and network logs.

We checked this setup on November 23, 2026 with browser-use 1.0.8 on Python 3.14. Browser Use connected to a Chrome 158 session on Windows 11, opened a page, read its title, and the session ended when the run returned.

:::note
browser-use 1.0 changed its API from the 0.x releases. The code on this page needs browser-use 1.0 or later.
:::

## Set Up Credentials and Python for Browser Use

1. A <BrandName /> account. Your **Username** and **Access Key** are under **Settings** > **Account Settings**.
2. Python 3.11 or later.
3. An API key for the model that drives the agent. The example uses Anthropic's Claude through `ANTHROPIC_API_KEY`. browser-use also includes `ChatOpenAI` and `ChatGoogle`.

Set the keys as environment variables in the shell that runs the agent:

<Tabs>
  <TabItem value="bash" label="macOS / Linux" default>

```bash
export LT_USERNAME="your_username"
export LT_ACCESS_KEY="your_access_key"
export ANTHROPIC_API_KEY="your_anthropic_api_key"
```

  </TabItem>
  <TabItem value="powershell" label="Windows (PowerShell)">

```powershell
$env:LT_USERNAME = "your_username"
$env:LT_ACCESS_KEY = "your_access_key"
$env:ANTHROPIC_API_KEY = "your_anthropic_api_key"
```

  </TabItem>
</Tabs>


## Install browser-use 1.0.8

```bash
pip install "browser-use==1.0.8"
```

Pin the exact version. The Browser Use README asks for an exact pin because a new release can change the API.


## Build a Browser Cloud CDP URL in Python

Browser Cloud accepts Chrome DevTools Protocol (CDP) connections at `wss://cdp.lambdatest.com/puppeteer`. The session settings go in a `capabilities` query parameter as URL-encoded JSON, in the same format as the [Puppeteer capabilities](/support/docs/capabilities-for-puppeteer/). Each new connection to the URL starts a new session.

Save this helper as `testmu_cdp.py`:

```python title="testmu_cdp.py"
import json
import os
from urllib.parse import quote


def testmu_cdp_url(name: str) -> str:
    """Return a CDP URL that starts a TestMu AI Browser Cloud session."""
    capabilities = {
        "browserName": "Chrome",
        "browserVersion": "latest",
        "LT:Options": {
            "platform": "Windows 11",
            "build": "Browser Use",
            "name": name,
            "user": os.environ["LT_USERNAME"],
            "accessKey": os.environ["LT_ACCESS_KEY"],
            "network": True,
            "console": True,
        },
    }
    return "wss://cdp.lambdatest.com/puppeteer?capabilities=" + quote(
        json.dumps(capabilities), safe=""
    )
```

:::warning
The URL contains your access key. Build it from environment variables when the script runs, and keep it out of logs, screenshots, prompts and version control.
:::

These `LT:Options` settings change the session:

| Option | What it sets | Example |
|---|---|---|
| `platform` | Operating system of the cloud machine | `"Windows 11"` |
| `build`, `name` | The build and session names shown on the dashboard | `"Browser Use"` |
| `network`, `console` | Record network and browser console logs | `True` |
| `resolution` | Screen size (default `1920x1080`) | `"1366x768"` |
| `idleTimeout` | Seconds without a command before the session ends (default 300, maximum 1800) | `600` |
| `tunnel`, `tunnelName` | Send traffic through a running tunnel to reach private sites | `True`, `"my-tunnel"` |

[Capabilities for Puppeteer](/support/docs/capabilities-for-puppeteer/) lists every option and its allowed values.


## Run a Browser Use Agent on a Cloud Browser

Pass the URL to `Browser(cdp_url=...)` and give that browser to the agent. Save this as `agent.py` next to `testmu_cdp.py`:

```python title="agent.py"
import asyncio

from browser_use import Agent, Browser, ChatAnthropic

from testmu_cdp import testmu_cdp_url


async def main():
    agent = Agent(
        "Open https://www.testmuai.com/selenium-playground/ and return the page title.",
        llm=ChatAnthropic("claude-sonnet-5-5"),
        browser=Browser(cdp_url=testmu_cdp_url("Browser Use: read playground title")),
    )
    result = await agent.run()
    print(result.final_result())


asyncio.run(main())
```

Run it:

```bash
python agent.py
```

The agent connects to a new Browser Cloud session, opens the page and prints its answer. In our run the page title was `Selenium Grid Online | Run Selenium Test On Cloud`. The first connection takes a few seconds while the session starts.

:::note
Always pass `browser=`. An `Agent` without it does not use Browser Cloud: browser-use 1.0 then starts a browser from Browser Use's own cloud service, which needs a separate Browser Use API key.
:::


## Replay Each Browser Use Run's Video and Logs

Each session appears on the [Web Automation Dashboard](https://automation.lambdatest.com/logs/) under the build name you set (`Browser Use` in `testmu_cdp.py`) and the session name you pass to `testmu_cdp_url()`. Open a session to replay its video and read the console, network and command logs. [Replay and Debug Sessions](/support/docs/browser-cloud-debugging/) explains each view.


## Keep One Cloud Browser Across Several Browser Use Runs

`agent.run()` disconnects from the browser when it returns. To hand the same page from one agent to the next, create the browser with `keep_alive=True` and stop it yourself:

```python
import asyncio

from browser_use import Agent, Browser, ChatAnthropic

from testmu_cdp import testmu_cdp_url


async def main():
    llm = ChatAnthropic("claude-sonnet-5-5")
    browser = Browser(cdp_url=testmu_cdp_url("Browser Use: two tasks"), keep_alive=True)

    await Agent("Open https://www.testmuai.com/selenium-playground/", llm=llm, browser=browser).run()
    await Agent("Return the text of the main heading on the open page.", llm=llm, browser=browser).run()

    await browser.stop()  # disconnects, which ends the Browser Cloud session


asyncio.run(main())
```

In our run the second agent started on the page the first one opened, and `browser.stop()` ended the session.


## How a Browser Use Session Ends on Browser Cloud

- When `agent.run()` returns, or when you call `browser.stop()` on a `keep_alive` browser, Browser Use disconnects and Browser Cloud ends the session.
- Browser Use disconnects without closing the browser, so the dashboard lists the session as **Cancelled** instead of **Completed**. The video and logs are still recorded.
- A connected session that receives no command for `idleTimeout` seconds (300 by default) ends on its own.


## Reach Localhost From Browser Use With a Tunnel

A cloud browser reaches public URLs only. To let the agent open `localhost` or a staging server, start a <BrandName /> tunnel on the machine that can reach the site, then add `"tunnel": True` and `"tunnelName": "<your tunnel name>"` to `LT:Options` in `testmu_cdp.py`. [Testing Locally Hosted Pages](/support/docs/testing-locally-hosted-pages/) shows how to start the tunnel.


## Troubleshoot Browser Use Connections to Browser Cloud

| Error or symptom | Cause and fix |
|---|---|
| `Browser(cdp_url=...) could not connect to a browser at wss://cdp.lambdatest.com: CDP WS handshake failed: server rejected WebSocket connection: HTTP 401` | Browser Cloud rejected the username or access key. Check `LT_USERNAME` and `LT_ACCESS_KEY` in the shell that runs the script. |
| The same message without `HTTP 401` | The connection never reached Browser Cloud. Allow outbound WebSocket traffic to `cdp.lambdatest.com` on port 443 through your firewall or proxy. |
| A `TypeError` about `Browser(headers=...)` | browser-use 1.0 cannot send custom headers on a CDP connection. Keep the credentials in the capabilities, as `testmu_cdp_url()` does. |
| A Browser Use login page opens, or no session appears on the dashboard | The `Agent` has no `browser=` argument, so it never connected to Browser Cloud. |
| The session shows **Cancelled** on the dashboard | Expected. Browser Use disconnects instead of closing the browser. |
| The session ends during a long task | The agent sent no command for `idleTimeout` seconds. Raise `idleTimeout` in `LT:Options`, up to 1800. |


## Playwright, SDK and Capability Guides for Browser Cloud

- [Playwright CLI and Playwright MCP on Browser Cloud](/support/docs/browser-cloud-playwright-cli-mcp/): connect coding agents to the same CDP endpoint.
- [Connect to a Session](/support/docs/connect-to-session/): drive Browser Cloud from Node.js with the <BrandName /> Browser SDK.
- [Capabilities for Puppeteer](/support/docs/capabilities-for-puppeteer/): every option you can set in `LT:Options`.
- [Set Up Browser Cloud in Your Coding Agent](https://www.testmuai.com/browser-cloud/agents/): the setup page written for coding agents.
- [Browser Infrastructure for AI Agents](https://www.testmuai.com/blog/browser-infrastructure-for-ai-agents/): why agents need real, recorded browser sessions.
