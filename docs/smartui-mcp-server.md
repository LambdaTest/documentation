---
id: smartui-mcp-server
title: Introducing SmartUI MCP Server
hide_title: false
sidebar_label: SmartUI MCP Server
description: Debug visual regressions faster with SmartUI MCP Server—get natural-language insights, human-like summaries, visual change detection, and root cause analysis from SmartUI comparison runs.
keywords:
  - smartui
  - visual testing
  - visual regression testing
  - lambdatest
  - MCP
  - MCP server
url: https://www.lambdatest.com/support/docs/smartui-mcp-server/
site_name: LambdaTest
slug: smartui-mcp-server/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Languages and Framework",
          "item": "https://www.lambdatest.com/support/docs/smartui-mcp-server/"
        }]
      })
    }}
></script>

# Getting Started with SmartUI MCP Server
***
The SmartUI  MCP Server allows you to debug visual regressions using SmartUI comparison runs, returning natural-language insights such as human-like summaries, visual change detection, and root cause analysis. It is built on [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) and connects to the LambdaTest SmartUI infrastructure via `comparisonId`.

<div className="ytframe"> 
<div className="youtube" data-embed="2Z5F52XxSxQ" data-loading-attribute="eager">
  <div className="play-button"></div>
</div>
</div>

## How Does It Work?​

This MCP server processes SmartUI visual comparison data by calling specific analysis tools with a comparisonId. Each tool simulates a different debugging layer—pixel diff, layout, DOM structure, and human perception.

The server fetches the visual assets (screenshots, DOM snapshots, metadata) and returns natural-language outputs such as:

- "The CTA button lost color contrast, impacting accessibility."

- "Header layout shifted left due to padding changes."

## Key Benefits of SmartUI MCP Server

Here are the key benefits of using the SmartUI  MCP Server:

- **No Manual Debugging:** Automatically detects visual regressions and UI layout shifts from screenshots and DOM changes.
- **Human-Like Interpretation:** Simulates how a real user perceives visual changes using cognitive and Gestalt principles.
- **Context-Aware Fixes:** Suggests accurate UI fixes based on visual evidence (React, HTML, CSS).
- **Rapid RCA:** Identifies exact UI elements responsible for changes and provides the root cause in plain language.
- **Layered Visual Analysis:** Run independent or combined analysis: pixel-level, layout, DOM structure, and perceptual.
- **MCP-Native Integration:** Seamlessly works with LambdaTest’s MCP-enabled environments and SmartUI workflows.
- **Developer-Ready Summaries:** Outputs are designed for frontend teams—easy to read, act, and commit to code.

## Prerequisites

To use the SmartUI  MCP Server:

1. Run SmartUI visual tests via LambdaTest and obtain the comparisonId.
2. Use an MCP-compatible client (e.g., cline) to call the tools.

## Connecting to SmartUI MCP Server​

### Connecting with Cline

Cline (The Collaborative AI Coder) is an advanced AI-powered coding assistant that integrates directly into your development workflow. It provides intelligent code suggestions and documentation assistance, and now, with MCP support, you can interface with external tools like SmartUI to enhance your testing capabilities. Cline offers natural language interactions with your codebase, allowing you to simply describe what you need rather than manually configuring everything.

#### Installing Cline in VS Code:

**Step 1:** Open VS Code.<br />
**Step 2:** Click on the Extensions icon in the Activity Bar on the side of the window (or press `Ctrl+Shift+X`).<br />
**Step 3:** Search for **Cline** in the Extensions Marketplace.

<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/installing-cline.webp').default} alt="automation-dashboard"  width="1920" height="868" className='doc_img'/>

**Step 4:** Click **Install** on the Cline – The Collaborative AI Coder extension.<br />
**Step 5:** Once installed, you'll see the Cline icon in your VS Code sidebar.<br />
**Step 6:** Click on the Cline icon to open the Cline panel.<br />
**Step 7:** Complete any authentication steps required during first-time setup.

### Connecting Cline to SmartUI MCP Server

#### VS Code Configuration:

**Step 1:** In VS Code, click on the Cline icon in the sidebar to open the Cline panel.<br />
**Step 2:** Under the **MCP Servers** section, click **Remote Servers**.
<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/vs-code-config.webp').default} alt="automation-dashboard"  width="1920" height="868" className='doc_img'/>

**Step 3:** Add Server Name as **LambdaTest-MCP**.<br />
**Step 4:** Enter the following URL in the server URL field: `http://mcp-api.lambdatest.com/automation?&LT_USERNAME=[your-lt-username]&LT_ACCESS_KEY=[your-lt-access-key]` <br />
**Step 5:** Replace [your-lt-username] and [your-lt-access-key] with your LambdaTest credentials. <br />
**Step 6:** Click on **Add Server**.

## Supported Tools

The following tools return human-readable summaries and require only a comparisonId as input.

1. `getSmartUIResources`:

Fetches all assets for a SmartUI visual comparison run.

**Input:**
```
{
  "comparisonId": "string"
}
```

**Output:**

A human-friendly description of which assets were found (e.g., screenshots, DOM JSONs), and suggestions if any are missing.

2. `summarizePixelDiff`:

Summarizes raw pixel differences between baseline and current screenshots.

**Example Output:**

> "Significant pixel differences were detected in the hero banner and footer. These likely stem from background color changes and text shifts."

3. `summarizeLayoutDiff`:

Identifies spacing, alignment, and size-related layout issues.

**Example Output:**

> "The login button has moved 16px downward compared to the baseline. This affects the visual balance of the form."

4. `summarizeDomDiff`:

Describes what changed in the DOM structure and attributes.

**Example Output:**

> "The `aria-label` for the submit button has been removed. The button also now includes an extra `disabled` attribute."

5. `analyzeHumanDiff`:

Simulates how a human eye would perceive the change. Focuses on color, emphasis, and Gestalt principles.

**Example Output:**

> "The pricing table appears visually heavier due to a font weight increase. This disrupts the balance between sections."

6. `analyzeSmartUIRun`:

Runs a multi-layer analysis across pixel, layout, DOM, and perception layers. Best used when you want a full debugging summary.

**Example Output:**

> "The 'Subscribe' CTA lost its background color and dropped in emphasis. This is likely due to a CSS override on `.cta-btn`. Padding changes have also affected alignment. Suggest restoring background and resetting layout values."

## Error Handling

If the `comparisonId` is invalid or resources are missing, a message like the following will be returned:

> "Error analyzing SmartUI run: comparisonId not found or visual resources are incomplete."

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'>
        SmartUI MCP Server
      </span>
    </li>
  </ul>
</nav>
