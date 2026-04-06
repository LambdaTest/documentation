---
id: automation-mcp-server
title: Getting Started with Automation MCP Server
sidebar_label: Connect via MCP Server
description: Triage test failures faster with the Automation MCP Server by connecting AI assistants to your test execution data.
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

# Getting Started with Automation MCP Server
Automation MCP Server simplifies test failure triaging for all automation test cases executed on TestMu AI. By using the Model Context Protocol (MCP), it enables integration between AI assistants and your test execution data on TestMu AI - reducing triage and troubleshooting time.


<div className="ytframe"> 
<div className="youtube" data-embed="AZMoC_DqUZE" data-loading-attribute="eager">
    <div className="play-button"></div>
</div>
</div>

## What Is Model Context Protocol (MCP)?
---
MCP acts as a universal interface between AI models and applications, creating a standardized language for AI assistants to connect with software tools.

The Model Context Protocol (MCP) creates a standardized interface that allows AI assistants to connect with diverse software tools. This makes it easier to expand capabilities across your digital workflow.

## Key Benefits of Automation MCP Server
---
Use the Automation MCP Server to accelerate debugging and test analysis.

1. Access your test execution data on TestMu AI directly from your IDE or editor.
2. Triage and troubleshoot test failures to identify the root cause (RCA).
3. Fix your test code based on the RCA and accelerate your development.
4. Generate new test cases using execution data from TestMu AI.
5. Use network logs, Selenium logs, and console logs to pinpoint bottlenecks and failures.

## Supported Tools
---
Automation MCP Server provides five core tools for test analysis.

1. **Automation Test Details:** Fetches detailed information about a specific TestID from the TestMu AI cloud.
2. **Automation Command Logs:** Retrieves execution logs for Selenium commands run on TestMu AI.
3. **Automation Network Logs:** Accesses test network logs, offering insights into browser traffic and behavior.
4. **Automation Console Logs:** Fetches browser console logs, surfacing error-level messages and warnings.
5. **Automation MCP Server:** Core interface that powers the above tools and connects your AI assistant to TestMu AI data.


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
        Automation MCP Server
      </span>
    </li>
  </ul>
</nav>
