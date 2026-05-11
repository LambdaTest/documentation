---
id: accessibility-mcp-server
title: Accessibility MCP Tool
sidebar_label: Accessibility
description: Run accessibility checks on hosted URLs or local React apps and get detailed remediation guidance using the Accessibility MCP Tool.
slug: accessibility-mcp-server/
url: https://www.testmuai.com/support/docs/accessibility-mcp-server/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-mcp-server/
keywords:
  - accessibility testing
  - accessibility mcp
  - a11y
  - testmu ai
  - MCP
  - MCP server
---

import CodeBlock from '@theme/CodeBlock';
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
          "name": "Accessibility MCP Tool",
          "item": `${BRAND_URL}/support/docs/accessibility-mcp-server/`
        }]
      })
    }}
></script>

# Getting Started with Accessibility MCP Tool

Accessibility MCP Tool is part of the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/). It runs accessibility checks on publicly hosted URLs and local React applications, and returns a detailed report with remediation guidance.


## Key Features

---

- Identifies accessibility issues in your application.
- Generates an accessibility report you can share with your team.
- Provides remediation guidance for a11y issues in locally hosted applications.

## Capabilities

---

1. **getAccessibilityReport** - Fetches a detailed accessibility report for a public URL. You can view the report in your browser to analyze the issues.
2. **buildLocalAppForAnalysis** - Builds and serves your local React application via TestMu AI and identifies accessibility issues.
3. **analyseAppViaTunnel** - Tests a local app already running via TestMu AI tunnel for accessibility failures.

## How to Invoke

---

Once your MCP client is connected, use natural language to interact with the Accessibility tool. Example prompts:

- "Run an accessibility report on `https://example.com`."
- "Build my local React app and check it for accessibility issues."
- "I have a local app running on port 3000 via TestMu AI tunnel, check it for a11y failures."
- "Show me the accessibility violations on the homepage and how to fix them."

Your AI client will route the request to the appropriate capability and return the report or remediation guidance inline.

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
        Accessibility MCP Tool
      </span>
    </li>
  </ul>
</nav>
