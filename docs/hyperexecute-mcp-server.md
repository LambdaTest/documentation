---
id: hyperexecute-mcp-server
title: Introducing HyperExecute MCP Server
hide_title: false
sidebar_label: HyperExecute MCP Server
description: HyperExecute MCP Server is an AI-native test orchestration platform that dramatically simplifies and accelerates your automated testing workflow.
keywords:
  - hyperexecute performance testing
  - hyperexecute
  - lambdatest
  - MCP
  - MCP server
url: https://www.lambdatest.com/support/docs/hyperexecute-mcp-server/
site_name: LambdaTest
slug: hyperexecute-mcp-server/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-mcp-server/"
        }]
      })
    }}
></script>

# Getting Started with HyperExecute MCP Server
***

## Introduction 

HyperExecute MCP Server is an AI-native test orchestration platform that dramatically simplifies and accelerates your automated testing workflow. By leveraging the Model Context Protocol (MCP), it enables seamless integration between AI assistants and your testing environment, reducing setup time from hours to minutes.

## Watch HyperExecute MCP in Action​

Get a comprehensive overview of HyperExecute's capabilities by watching our introductory video.

<div className="ytframe"> 
<div className="youtube" data-embed="tLe5VPcGDxs">
    <div className="play-button"></div>
</div>
</div>


## What is Model Context Protocol (MCP)?

The Model Context Protocol (MCP) acts like a "USB-C for AI integrations," creating a universal language between AI models and applications. This standardized interface allows AI assistants to connect with diverse software tools, making it significantly easier to expand capabilities across your digital workflow.

## Key Benefits of HyperExecute MCP Server

Here are the key benefits of using HyperExecute MCP Server:

- **Automated Setup:** Reduce configuration time from hours to seconds
- **Smart Analysis:** Automatically identify project types, frameworks, and test structures
- **Dynamic Commands:** Generate precise test commands tailored to your project
- **Auto-Configuration:** Create accurate YAML configuration files without manual intervention
- **Real-Time Monitoring:** Track test executions with immediate updates
- **Efficient Debugging:** Inspect test results with comprehensive recordings
- **Instant Documentation:** Access relevant documentation through integrated AI agents

## Connecting to HyperExecute MCP Server


### Connecting with Cline

#### What is Cline?

Cline (The Collaborative AI Coder) is an advanced AI-powered coding assistant that integrates directly into your development workflow. It provides intelligent code suggestions and documentation assistance, and now, with MCP support, you can interface with external tools like HyperExecute to enhance your testing capabilities. Cline offers natural language interactions with your codebase, allowing you to simply describe what you need rather than manually configuring everything.

#### Installing Cline in VS Code:

1. Open VS Code.
2. Click on the Extensions icon in the Activity Bar on the side of the window (or press `Ctrl+Shift+X`).
3. Search for **Cline**"** in the Extensions Marketplace.

<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/installing-cline.webp').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

4. Click **Install** on the Cline – The Collaborative AI Coder extension.
5. Once installed, you'll see the Cline icon in your VS Code sidebar.
6. Click on the Cline icon to open the Cline panel.
7. Complete any authentication steps required during first-time setup.

### Connecting Cline to HyperExecute MCP Server

#### VS Code Configuration:

1. In VS Code, click on the Cline icon in the sidebar to open the Cline panel.
2. Under the **MCP Servers** section, click **Remote Servers**.

<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/vs-code-config.webp').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

3. Add Server Name as **MCP-HyperExecute**.
4. Enter the following URL in the server URL field: `http://mcp.lambdatest.com/hyperexecute?&username=[your-lt-username]&accessKey=[your-lt-access-key]`
6. Replace [your-lt-username] and [your-lt-access-key] with your LambdaTest credentials.
7. Click on **Add Server**.

<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/mcp-add-server.webp').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

### Interacting with HyperExecute MCP Server

Once connected, you can start using Cline to interact with the HyperExecute MCP Server. A common workflow would be:

1. Open your project in VS Code.
2. Open the Cline panel.
3. Type the following prompt: `Analyze the project and create a HyperExecute YAML file using MCP HyperExecute server.`
4. Cline will:
- analyze your project structure.
- Identify your testing framework and test files.
- Generate appropriate test runner commands.
- Create a complete HyperExecute YAML configuration file tailored to your project.
- Save the YAML file to your project directory.
5. You can then review the generated YAML file and make any necessary adjustments (if any, e.g., adding environment variables, etc.) before running your tests on the LambdaTest HyperExecute Platform.

You can also ask Cline for more specific operations, such as:

- "What are the key features of HyperExecute?"
- "What does failFast in HyperExecute mean?"

The natural language interface allows you to work with HyperExecute without having to remember specific command syntax or configuration details.

**Available Tools:**

HyperExecute MCP Server provides five main tools:

1. **Test Runner Command Generation Tool:** Analyzes your project structure and generates appropriate test commands.
2. **HyperExecute YAML Generation Tool:** Creates configuration files based on project analysis.
3. **HyperExecute Documentation Tool:** Provides answers to your queries by fetching information from documentation.
4. **HyperExecute Job Info Tool:** Retrieves information about specific test jobs.
5. **HyperExecute Sessions Tool:** Fetches session details for comprehensive test analysis.






