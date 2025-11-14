---
id: automation-mcp-server
title: Introducing Automation MCP Server
hide_title: false
sidebar_label: Automation MCP Server
description: Simplify test failure triaging with Automation MCP Server on LambdaTest. Powered by Model Context Protocol (MCP), it connects AI assistants to your test data for faster, smarter debugging.

keywords:
  - automation testing
  - automation mcp server
  - automated testing
  - lambdatest
  - MCP
  - MCP server
url: https://www.lambdatest.com/support/docs/automation-mcp-server/
site_name: LambdaTest
slug: automation-mcp-server/
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
          "item": "https://www.lambdatest.com/support/docs/automation-mcp-server/"
        }]
      })
    }}
></script>

# Getting Started with Automation MCP Server
Automation MCP Server simplifies test failure triaging for all automation test cases executed on LambdaTest. By leveraging the Model Context Protocol (MCP), it enables seamless integration between AI assistants and your test execution data on LambdaTest—significantly reducing triage and troubleshooting time.


<div className="ytframe"> 
<div className="youtube" data-embed="AZMoC_DqUZE" data-loading-attribute="eager">
    <div className="play-button"></div>
</div>
</div>

## What is Model Context Protocol (MCP)?
The Model Context Protocol (MCP) acts like a “USB-C for AI integrations,” creating a universal language between AI models and applications. This standardized interface allows AI assistants to connect with diverse software tools, making it much easier to expand capabilities across your digital workflow.

## Key Benefits of Automation MCP Server

Here are the key benefits of using the Automation MCP Server:

1. Access your test execution data on LambdaTest directly from your IDE/editor.
2. Triage and troubleshoot test failures to identify the root cause (RCA).
3. Fix your test code based on the RCA and accelerate your development.
4. Generate new test cases using execution data from LambdaTest.
5. Leverage network logs, Selenium logs, and console logs to pinpoint bottlenecks and failures.

## Connecting to Automation MCP Server​

### Connecting with Cline

Cline (The Collaborative AI Coder) is an advanced, AI-powered coding assistant that integrates seamlessly into your development workflow. It provides intelligent code suggestions and documentation help—and now, with MCP support, it can interface with tools like LambdaTest Automation MCP to enhance your testing capabilities.

Cline allows natural language interaction with your codebase—just describe what you want, instead of manually configuring it.

#### Installing Cline in VS Code:

**Step 1:** Open VS Code.<br />
**Step 2:** Click on the Extensions icon in the Activity Bar on the side of the window (or press `Ctrl+Shift+X`).<br />
**Step 3:** Search for **Cline** in the Extensions Marketplace.

<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/installing-cline.webp').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

**Step 4:** Click **Install** on the Cline – The Collaborative AI Coder extension.<br />
**Step 5:** Once installed, you'll see the Cline icon in your VS Code sidebar.<br />
**Step 6:** Click on the Cline icon to open the Cline panel.<br />
**Step 7:** Complete any authentication steps required during first-time setup.

### Connecting Cline to Automation MCP Server

#### VS Code Configuration:

**Step 1:** In VS Code, click on the Cline icon in the sidebar to open the Cline panel.<br />
**Step 2:** Under the **MCP Servers** section, click **Remote Servers**.
<img loading="lazy" src={require('../assets/images/hyperexecute-mcp/vs-code-config.webp').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

**Step 3:** Add Server Name as **LambdaTest-MCP**.<br />
**Step 4:** Enter the following URL in the server URL field: `https://mcp-api.lambdatest.com/automation?&LT_USERNAME=[your-lt-username]&LT_ACCESS_KEY=[your-lt-access-key]` <br />
**Step 5:** Replace [your-lt-username] and [your-lt-access-key] with your LambdaTest credentials. <br />
**Step 6:** Click on **Add Server**. 

### Interacting with Automation MCP Server

Once connected, you can begin using Cline to interact with the Automation MCP Server. A typical workflow:


**Step 1:** Open your project in VS Code.<br /> 
**Step 2:** Open the Cline panel.<br /> 
**Step 3:** Type the following prompt: 


```
Analyze the LambdaTest TestID. Review the command logs, network logs, and console logs to identify the cause of the test failure. Suggest a code fix based on your findings.
```

**Step 4:** Cline will:

- Pull command, network, and console logs from the LambdaTest cloud.
- Identify your testing framework and test code.
- Investigate the cause of failure and share the RCA.
- Create change requests/suggestions in the code to fix the failure or enhance error handling.
- Save the code changes to your project directory.

**Step 5:** Review the suggested changes and make any final adjustments before re-running your tests on the LambdaTest platform.

You can also ask Cline more specific questions like:

- *"What are the possible causes of failure, and what else can be done to mitigate them?"*
- *"What does the suggested code change do?"*

Cline’s natural language interface allows you to work on triaging and debugging Selenium tests directly alongside your code—highlighting the specific sections responsible for the failure.


## Supported Tools 

Automation MCP Server provides five core tools:

1. **Automation Test Details:** Fetches detailed information about a specific TestID from the LambdaTest cloud.
2. **Automation Command Logs:** Retrieves execution logs for Selenium commands run on LambdaTest.
3. **Automation Network Logs:** Accesses test network logs, offering insights into browser traffic and behavior.
4. **Automation Console Logs:** Fetches browser console logs, surfacing error-level messages and warnings.
5. **Automation MCP Server:** Core interface that powers the above tools and connects your AI assistant to LambdaTest data.


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
        Automation MCP Server
      </span>
    </li>
  </ul>
</nav>
