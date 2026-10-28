---
id: accessibility-mcp-server
title: Accessibility MCP Tool
sidebar_label: Accessibility
description: Run accessibility checks on hosted URLs or local web apps and get detailed remediation guidance using the Accessibility MCP Tool.
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/accessibility-mcp-server/"
    },
    "headline": "Accessibility MCP Tool",
    "description": "Run accessibility checks on hosted URLs or local web apps and get detailed remediation guidance using the Accessibility MCP Tool.",
    "url": "https://www.testmuai.com/support/docs/accessibility-mcp-server/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "TestMu AI MCP Server",
    "keywords": [
      "accessibility testing",
      "accessibility mcp",
      "a11y"
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

# Getting Started with Accessibility MCP Tool

Accessibility MCP Tool is part of the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/). It runs accessibility checks on publicly hosted URLs and local web applications, and returns a detailed report with remediation guidance.


## Key Features

---

- Identifies accessibility issues in your application.
- Generates an accessibility report you can share with your team.
- Provides remediation guidance for a11y issues in locally hosted applications.

## Capabilities
---

The Accessibility MCP Tool provides three tools:

1. **getAccessibilityReport**: Runs an accessibility scan on one or more publicly reachable URLs and returns the issues, most severe first. Each issue carries its own fix guidance and the accessibility criteria it fails. You can filter by severity or by page. Every call with `urls` starts a new scan, which runs as a test on your account. To read more results from the same scan, your client passes the `testId` from the first response instead. The result includes a dashboard link, which needs a login, and the first scan also returns a public shareable link.
2. **buildLocalAppForAnalysis**: Returns step-by-step commands to build and serve a local web app that uses npm, and to open a TestMu AI tunnel to it. It detects the output folder of Vite, Next.js, Create React App and Angular projects. It does not build, run or scan anything itself: you or your AI client run the commands, then scan the app with `analyzeAppViaTunnel`. The commands never include your access key.
3. **analyzeAppViaTunnel**: Scans an app that is running locally and reachable through an active TestMu AI tunnel. It needs the local port and the name and id of the tunnel. The scan runs as a test on your account.

## How to Invoke

---

Once your MCP client is connected, use natural language to interact with the Accessibility tool. Example prompts:

- "Run an accessibility report on `https://example.com`."
- "Help me serve my local app on port 3000 and check it for accessibility issues."
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
