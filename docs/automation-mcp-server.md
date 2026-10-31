---
id: automation-mcp-server
title: Getting Started with Automation MCP Tool
sidebar_label: Automation
description: Triage test failures faster with the Automation MCP Tool by connecting AI assistants to your test execution data.
keywords:
  - automation mcp server setup
  - mcp test failure triaging
  - ai-assisted test debugging
  - selenium mcp integration
  - model context protocol testing
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/automation-mcp-server/
site_name: TestMu AI
slug: automation-mcp-server/
canonical: https://www.testmuai.com/support/docs/automation-mcp-server/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Connect via MCP Server",
          "item": `${BRAND_URL}/support/docs/automation-mcp-server/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/automation-mcp-server/"
    },
    "headline": "Getting Started with Automation MCP Tool",
    "description": "Triage test failures faster with the Automation MCP Tool by connecting AI assistants to your test execution data.",
    "url": "https://www.testmuai.com/support/docs/automation-mcp-server/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "TestMu AI MCP Server",
    "keywords": [
      "automation mcp server setup",
      "mcp test failure triaging",
      "ai-assisted test debugging"
    ],
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
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
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
    "dateModified": "2026-10-28T18:00:00+05:30"
  }) }}
/>

# Getting Started with Automation MCP Tool
---

Automation MCP Tool is part of the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/). It connects your AI client to test execution data on TestMu AI, letting you triage and debug automation failures directly from your IDE.


<div className="ytframe"> 
<div className="youtube" data-embed="AZMoC_DqUZE" data-loading-attribute="eager">
    <div className="play-button"></div>
</div>
</div>

## Key Benefits

---

Use the Automation tool to accelerate debugging and test analysis:

- Access your test execution data on TestMu AI directly from your IDE or editor.
- Triage and troubleshoot test failures to identify the root cause (RCA).
- Fix your test code based on the RCA and accelerate your development.
- Generate new test cases using execution data from TestMu AI.
- Use network logs, Selenium logs, and console logs to pinpoint bottlenecks and failures.

## Capabilities
---

The Automation MCP Tool provides 19 tools. Tools that take a `testId` work for web and app automation tests; set `platform` to `web` or `app`.

**Find tests and builds**

| Tool | What it does |
|---|---|
| `automationQuery` | Lists builds, gets one build, lists the sessions in a build, gets test details, and gets test logs (command, network, console, Selenium or instrumentation), for web or app automation. |

**Test details and logs**

| Tool | What it does |
|---|---|
| `getAutomationTestDetails` | Gets the details of one test: browser or device, OS, status, duration and more. |
| `getAutomationTestCommandLogs` | Gets the commands the test sent, page by page. |
| `getAutomationTestNetworkLogs` | Gets the network traffic of the test. |
| `getAutomationTestBrowserConsoleLogs` | Gets the browser console logs. Web tests only. |
| `getAutomationTestSeleniumLogs` | Gets the Selenium logs of a web test, the Appium logs of an Appium test, or the instrumentation logs of an XCUI or Espresso test. |

**Session recordings and logs (web automation only)**

| Tool | What it does |
|---|---|
| `getSessionScreenshots` | Gets the screenshot taken at each command. |
| `getSessionVideo` | Gets the URL of the session video. |
| `getSessionV2CommandLogs` | Gets the command logs as structured JSON. |
| `getSessionV2SeleniumLogs` | Gets the Selenium or WebDriver request and response logs. |
| `getLiveSessionLogs` | Gets the request and response log of a session, while it runs or after it ends. |

For app automation sessions, these five tools return "not found". `listMobileSessions` returns the video, screenshot and log links of app sessions instead.

**Update, stop and delete**

| Tool | What it does |
|---|---|
| `updateSession` | Changes the name of a session or marks it passed, failed, error or skipped. |
| `postSessionExceptions` | Attaches exception logs to a session. |
| `postTestExceptions` | Attaches exception logs to a test. |
| `updateBuild` | Renames a web automation build. |
| `stopSession` | Stops a running session. |
| `stopBuild` | Stops every running test in a web automation build. |
| `deleteSession` | Permanently deletes a session. |
| `deleteBuild` | Permanently deletes a web automation build and its test results. |

:::warning
`deleteSession` and `deleteBuild` cannot be undone, and `stopSession` and `stopBuild` end running tests immediately. These tools declare that they modify data, so MCP clients that use tool annotations ask you to confirm before running them. Exceptions attached after a test has ended may not appear on the Automation dashboard.
:::

## How to Invoke

---

Once your MCP client is connected, use natural language to interact with the Automation tool. Example prompts:

- "Triage the failure for TestID `<testID>`."
- "Show me the network logs for TestID `<testID>`."
- "What console errors occurred during the last failed test?"
- "Pull the Selenium command logs for `<testID>` and tell me where it failed."
- "Generate a new test case based on the execution flow of TestID `<testID>`."

Your AI client will route the request to the appropriate capability, pull the relevant data from TestMu AI, and return the results inline.


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Automation MCP Tool
      </span>
    </li>
  </ul>
</nav>
