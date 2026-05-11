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

The Automation MCP Tool provides four capabilities:

1. **Automation Test Details:** Fetches detailed information about a specific TestID from the TestMu AI cloud.
2. **Automation Command Logs:** Retrieves execution logs for Selenium commands run on TestMu AI.
3. **Automation Network Logs:** Accesses test network logs, offering insights into browser traffic and behavior.
4. **Automation Console Logs:** Fetches browser console logs, surfacing error-level messages and warnings.

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
