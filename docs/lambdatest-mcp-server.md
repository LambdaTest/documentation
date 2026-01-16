---
id: lambdatest-mcp-server
title: Introducing TestMu AI MCP Server
hide_title: False
sidebar_label: Setting up TestMu AI MCP Server
description: With TestMu AI MCP Server, explore all TestMu AI MCP Server tools in one place, from setup to usage.
keywords:
  - hyperexecute performance testing
  - hyperexecute
  - testmu ai
  - MCP
  - MCP server
url: https://www.testmu.ai/support/docs/testmu-mcp-server/
site_name: LambdaTest
slug: testmu-mcp-server/
canonical: https://www.testmu.ai/support/docs/testmu-mcp-server/
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
          "name": "LambdaTest MCP Server",
          "item": `${BRAND_URL}/support/docs/hyperexecute-mcp-server/`
        }]
      })
    }}
></script>

# Getting Started with <BrandName /> MCP Server
<BrandName /> MCP Server is all-in-one MCP server that dramatically simplifies and accelerates your automated testing workflow. By leveraging the Model Context Protocol (MCP), it enables seamless integration between AI assistants and your testing environment, reducing setup time from hours to minutes.


## What is Model Context Protocol (MCP)?

The Model Context Protocol (MCP) acts like a "USB-C for AI integrations," creating a universal language between AI models and applications. This standardized interface allows AI assistants to connect with diverse software tools, making it significantly easier to expand capabilities across your digital workflow.

## Key Benefits of <BrandName /> MCP Server

Here are the key benefits of using <BrandName /> MCP Server:

- **Automated Setup:** Reduce configuration time from hours to seconds
- **Smart Analysis:** Automatically identify project types, frameworks, and test structures
- **Dynamic Commands:** Generate precise test commands tailored to your project
- **Auto-Configuration:** Create accurate YAML configuration files without manual intervention
- **Real-Time Monitoring:** Track test executions with immediate updates
- **Efficient Debugging:** Inspect test results with comprehensive recordings
- **Instant Documentation:** Access relevant documentation through integrated AI agents

## Connecting to <BrandName /> MCP Server

### Connecting with Cline
Cline (The Collaborative AI Coder) is an advanced AI-powered coding assistant that integrates directly into your development workflow. It provides intelligent code suggestions and documentation assistance, and now, with MCP support, you can interface with external tools like HyperExecute to enhance your testing capabilities. Cline offers natural language interactions with your codebase, allowing you to simply describe what you need rather than manually configuring everything.

#### Installing Cline in VS Code:

**Step 1:** Open VS Code.<br />
**Step 2:** Click on the Extensions icon in the Activity Bar on the side of the window (or press `Ctrl+Shift+X`).<br />
**Step 3:** Search for **Cline** in the Extensions Marketplace.

<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/installing-cline.webp').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

**Step 4:** Click **Install** on the Cline – The Collaborative AI Coder extension.<br />
**Step 5:** Once installed, you'll see the Cline icon in your VS Code sidebar.<br />
**Step 6:** Click on the Cline icon to open the Cline panel.<br />


### Connecting Cline to <BrandName /> MCP Server

#### VS Code Configuration:

**Step 1:** In VS Code, click on the Cline icon in the sidebar to open the Cline panel.<br />
**Step 2:** Under the **MCP Servers** section, click **Remote Servers**.
<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/vs-code-config.webp').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

**Step 3:** Add Server Name as **MCP-<BrandName />**.<br />
**Step 4:** Enter the following server configuration and save it: `https://mcp.lambdatest.com/mcp` <br />
**Step 5:** Click on Authenticate and you will be redirected to lambdatest.com for authentication. 
<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/lt-mcp-auth.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>
**Step 6:** Provide valid credentials and authorise client to use <BrandName /> MCP server. 
<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/lt-auth-credentials.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>
**Step 7:** Post authorisation, launch your IDE. 
<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/lt-ide-auth.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>
**Step 8:** MCP Lambdatest should be connected successfully.
<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/lt-mcp-success.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>


### Interacting with <BrandName /> MCP Server

Once connected, you can start using Cline to interact with the <BrandName /> MCP Server. A common workflow would be:

**Step 1:** Open your project in VS Code.<br />
**Step 2:** Open the Cline panel.<br />
**Step 3:** Type the following prompt: `Analyze the project and create a LambdaTest YAML file using MCP LambdaTest server.`<br />
**Step 4:** Cline will:
- analyze your project structure.
- Identify your testing framework and test files.
- Generate appropriate test runner commands.
- Create a complete <BrandName /> YAML configuration file tailored to your project.
- Save the YAML file to your project directory.<br />

**Step 5:** You can then review the generated YAML file and make any necessary adjustments (if any, e.g., adding environment variables, etc.) before running your tests on the <BrandName /> MCP Platform.

You can also ask Cline for more specific operations, such as:

- "What are the key features of <BrandName />?"
- "What does failFast in HyperExecute mean?"

The natural language interface allows you to work with HyperExecute without having to remember specific command syntax or configuration details.

## Connecting With Other MCP-Compatible Tools

For any other MCP-compatible tool, use the following URL format:

```
https://mcp.lambdatest.com/mcp
```
In your MCP tool, use the following configuration file:

```
{
  "mcpServers": {
    "mcp-lambdatest": {
      "disabled": false,
      "timeout": 60,
      "type": "stdio",
      "command": "npx",
      "args": [
        "mcp-remote@latest",
        "https://mcp.lambdatest.com/mcp",
      ]
    }
  }
}
```

## Available <BrandName /> MCP Tools

<BrandName /> MCP Server provides five main tools:

1. **[HyperExecute MCP Server:](/support/docs/hyperexecute-mcp-server/)** HyperExecute MCP Server is an AI-native test orchestration platform that dramatically simplifies and accelerates your automated testing workflow
2. **[Automation MCP Server:](/support/docs/automation-mcp-server/)** Automation MCP Server simplifies test failure triaging for all automation test cases executed on <BrandName />. 
3. **[SmartUI MCP Server:](/support/docs/smartui-mcp-server/)** The SmartUI MCP Server allows you to debug visual regressions using SmartUI comparison runs, returning natural-language insights such as human-like summaries, visual change detection, and root cause analysis.
4. **[Accessibility MCP Server:](/support/docs/accessibility-mcp-server/)** <BrandName />’s Accessibility MCP Server enables comprehensive accessibility testing for both publicly hosted URLs and still-in-development front-end React applications. It delivers detailed accessibility reports that identify issues and provide guidance on remediation.
