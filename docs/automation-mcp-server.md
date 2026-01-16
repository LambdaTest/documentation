---
id: automation-mcp-server
title: Introducing Automation MCP Server
hide_title: false
sidebar_label: Automation MCP Server
description: Simplify test failure triaging with Automation MCP Server on TestMu AI. Powered by Model Context Protocol (MCP), it connects AI assistants to your test data for faster, smarter debugging.

keywords:
  - automation testing
  - automation mcp server
  - automated testing
  - testmu ai
  - MCP
  - MCP server
url: https://www.testmu.ai/support/docs/automation-mcp-server/
site_name: LambdaTest
slug: automation-mcp-server
canonical: https://www.testmu.ai/support/docs/automation-mcp-server/
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
          "name": "Languages and Framework",
          "item": `${BRAND_URL}/support/docs/automation-mcp-server/`
        }]
      })
    }}
></script>

# Getting Started with Automation MCP Server
Automation MCP Server simplifies test failure triaging for all automation test cases executed on <BrandName />. By leveraging the Model Context Protocol (MCP), it enables seamless integration between AI assistants and your test execution data on <BrandName />—significantly reducing triage and troubleshooting time.


<div className="ytframe"> 
<div className="youtube" data-embed="AZMoC_DqUZE" data-loading-attribute="eager">
    <div className="play-button"></div>
</div>
</div>

## What is Model Context Protocol (MCP)?
The Model Context Protocol (MCP) acts like a “USB-C for AI integrations,” creating a universal language between AI models and applications. This standardized interface allows AI assistants to connect with diverse software tools, making it much easier to expand capabilities across your digital workflow.

## Key Benefits of Automation MCP Server

Here are the key benefits of using the Automation MCP Server:

1. Access your test execution data on <BrandName /> directly from your IDE/editor.
2. Triage and troubleshoot test failures to identify the root cause (RCA).
3. Fix your test code based on the RCA and accelerate your development.
4. Generate new test cases using execution data from <BrandName />.
5. Leverage network logs, Selenium logs, and console logs to pinpoint bottlenecks and failures.

## Supported Tools 

Automation MCP Server provides five core tools:

1. **Automation Test Details:** Fetches detailed information about a specific TestID from the <BrandName /> cloud.
2. **Automation Command Logs:** Retrieves execution logs for Selenium commands run on <BrandName />.
3. **Automation Network Logs:** Accesses test network logs, offering insights into browser traffic and behavior.
4. **Automation Console Logs:** Fetches browser console logs, surfacing error-level messages and warnings.
5. **Automation MCP Server:** Core interface that powers the above tools and connects your AI assistant to <BrandName /> data.


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
