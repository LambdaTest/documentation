---
id: accessibility-mcp-server
title: Introducing Accessibility MCP Server
hide_title: false
sidebar_label: Accessibility MCP Server
description: TestMu AI’s Accessibility MCP Server tests public URLs and React apps, providing detailed reports and AI-driven insights to quickly identify and fix accessibility issues.

keywords:
  - accessibility testing
  - accessibility
  - testmu ai
  - MCP
  - MCP server
url: https://www.testmu.ai/support/docs/accessibility-mcp-server
site_name: LambdaTest
slug: accessibility-mcp-server
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
          "item": `${BRAND_URL}/support/docs/accessibility-mcp-server/`
        }]
      })
    }}
></script>

# Getting Started with Accessibility MCP Server
<BrandName />’s Accessibility MCP Server enables comprehensive accessibility testing for both publicly hosted URLs and still-in-development front-end React applications. It delivers detailed accessibility reports that identify issues and provide guidance on remediation.

Users receive actionable insights that not only helps to pinpoint and report roadblocks within web applications but also help in resolving them.

The server utilizes the Model Context Protocol (MCP) to streamline the integration of AI and assistance, thereby minimizing the effort required to address accessibility concerns.

<div className="ytframe"> 
<div className="youtube" data-embed="2G_U2LYzIao" data-loading-attribute="eager">
  <div className="play-button"></div>
</div>
</div>

## What is Model Context Protocol (MCP)?

The Model Context Protocol (MCP) acts like a "USB-C for AI integrations," creating a universal language between AI models and applications. This standardized interface allows AI assistants to connect with diverse software tools, making it significantly easier to expand capabilities across your digital workflow.

## Key Features of Accessibility MCP Server

Here are the key benefits of using Accessibility MCP Server:

- Conducts analysis to identify accessibility issues within the application.
- Generates a comprehensive accessibility report that can be shared with team members.
- Provides suggested remediations for addressing accessibility (a11y) issues in locally hosted applications.

## **Available Tools**

Accessibility MCP Server provides following two core tools:

1. `getAccessibilityReport`: Fetches detailed accessibility report for the specified public URL. Users can view this report in their browser to analyse the issues.
2. `buildLocalAppForAnalysis`:  Builds and serves your local react application via <BrandName /> and identifies accessibility issues in the application.
3. `AnalyseAppViaTunnel`: Helps test local apps which are already running via <BrandName /> tunnel for accessibility failures.

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
        Accessibility MCP Server
      </span>
    </li>
  </ul>
</nav>


