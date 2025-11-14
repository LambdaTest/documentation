---
id: accessibility-mcp-server
title: Introducing Accessibility MCP Server
hide_title: false
sidebar_label: Accessibility MCP Server
description: LambdaTest’s Accessibility MCP Server tests public URLs and React apps, providing detailed reports and AI-driven insights to quickly identify and fix accessibility issues.

keywords:
  - accessibility testing
  - accessibility
  - lambdatest
  - MCP
  - MCP server
url: https://www.lambdatest.com/support/docs/accessibility-mcp-server/
site_name: LambdaTest
slug: accessibility-mcp-server/
---

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
          "item": "https://www.lambdatest.com/support/docs/accessibility-mcp-server/"
        }]
      })
    }}
></script>

# Getting Started with Accessibility MCP Server
LambdaTest’s Accessibility MCP Server enables comprehensive accessibility testing for both publicly hosted URLs and still-in-development front-end React applications. It delivers detailed accessibility reports that identify issues and provide guidance on remediation.

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


## Connecting to Accessibility MCP Server

The interface can be used with various AI assistants that support the Model Context Protocol (MCP). Here's how to connect using popular assistants:

### Connecting with Cline
Cline (The Collaborative AI Coder) is an advanced, AI-powered coding assistant that integrates seamlessly into your development workflow. It provides intelligent code suggestions and documentation help—and now, with MCP support, it can interface with tools like LambdaTest Accessibility MCP to enhance your testing capabilities.

#### Installing Cline in VS Code:

**Step 1:** Open VS Code.<br />
**Step 2:** Click on the Extensions icon in the Activity Bar on the side of the window (or press `Ctrl+Shift+X`).<br />
**Step 3:** Search for **Cline** in the Extensions Marketplace.

<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/installing-cline.webp').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

**Step 4:** Click **Install** on the Cline – The Collaborative AI Coder extension.<br />
**Step 5:** Once installed, you'll see the Cline icon in your VS Code sidebar.<br />
**Step 6:** Click on the Cline icon to open the Cline panel.<br />
**Step 7:** Complete any authentication steps required during first-time setup.

### Connecting Cline to Accessibility MCP Server

#### VS Code Configuration:

**Step 1:** In VS Code, click on the Cline icon in the sidebar to open the Cline panel.<br />
**Step 2:** Under the **MCP Servers** section, click **Remote Servers**.
<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/vs-code-config.webp').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

**Step 3:** Add Server Name as **MCP-Accessibility**.<br />
**Step 4:** Enter the following URL in the server URL field: `http://mcp-api.lambdatest.com/automation?&LT_USERNAME=[your-lt-username]&LT_ACCESS_KEY=[your-lt-access-key]` <br />
**Step 5:** Replace [your-lt-username] and [your-lt-access-key] with your LambdaTest credentials. <br />
**Step 6:** Click on **Add Server**. 

<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/mcp-add-server.webp').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Interacting with Accessibility MCP Server

Once connected, you can begin using Cline to interact with the Accessibility MCP Server.	

A typical workflow would look like:

**1. Public URL:**  
 - **Prompt:** Find accessibility (a11y) issues on w3schools. 
    
    - Cline will:

     1. Open this URL in the browser via LambdaTest and generate accessibility issues.
     2. It will give a detailed accessibility report which can be shared with the users.


**2. Local FE (React) Apps:**  
 - **Prompt:** Build my app and fix accessibility issues.
    
    - Cline will:

     1. Host the local application and analyze this to identify all the areas which are causing a11y failures.
     2. It will check all the issues and try to fix them directly in the codebase to make the application more a11y compliant.  
     3. It will also give a detailed accessibility report to view the accessibility issues.

Cline’s natural language interface allows you to work on debugging accessibility issues directly alongside your code.

## **Available Tools**

Accessibility MCP Server provides following two core tools:

1. `getAccessibilityReport`: Fetches detailed accessibility report for the specified public URL. Users can view this report in their browser to analyse the issues.
2. `buildLocalAppForAnalysis`:  Builds and serves your local react application via LambdaTest and identifies accessibility issues in the application.
3. `AnalyseAppViaTunnel`: Helps test local apps which are already running via LambdaTest tunnel for accessibility failures.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
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


