---
id: hyperexecute-mcp-server
title: Introducing HyperExecute MCP Tool
hide_title: false
sidebar_label: HyperExecute
description: HyperExecute MCP Tool lets you set up test jobs, generate YAML configurations, and monitor HyperExecute runs directly from your IDE using natural language prompts.
keywords:
  - hyperexecute performance testing
  - hyperexecute
  - testmu ai
  - MCP
  - MCP server
url: https://www.testmuai.com/support/docs/hyperexecute-mcp-server/
site_name: TestMu AI
slug: hyperexecute-mcp-server/
canonical: https://www.testmuai.com/support/docs/hyperexecute-mcp-server/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-mcp-server/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-mcp-server/"
    },
    "headline": "Introducing HyperExecute MCP Tool",
    "description": "HyperExecute MCP Tool lets you set up test jobs, generate YAML configurations, and monitor HyperExecute runs directly from your IDE using natural language prompts.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-mcp-server/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "TestMu AI MCP Server",
    "keywords": [
      "hyperexecute performance testing",
      "hyperexecute",
      "testmu ai"
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

# Getting Started with HyperExecute MCP Tool
---

HyperExecute MCP Tool is part of the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/). It lets you set up HyperExecute test jobs, generate YAML configurations, and monitor runs directly from your IDE using natural language prompts.

<div className="ytframe"> 
<div className="youtube" data-embed="tLe5VPcGDxs">
    <div className="play-button"></div>
</div>
</div>

## Key Benefits

---

Here are the key benefits of using the HyperExecute tool:

- **Automated Setup:** Reduce configuration time from hours to seconds
- **Smart Analysis:** Automatically identify project types, frameworks, and test structures
- **Dynamic Commands:** Generate precise test commands tailored to your project
- **Auto-Configuration:** Create accurate YAML configuration files without manual intervention
- **Real-Time Monitoring:** Track test executions with immediate updates
- **Efficient Debugging:** Inspect the tasks, stages, logs and artifacts of a job
- **Instant Documentation:** Access relevant documentation through integrated AI agents

## Capabilities
---

The HyperExecute MCP Tool provides 15 tools.

**Set up a job**

| Tool | What it does |
|---|---|
| `generateHyperExecuteYAML` | Generates a HyperExecute YAML from the language, framework, test discovery command and test runner command of your project. It covers JavaScript and TypeScript (Playwright, Cypress, WebdriverIO, Puppeteer, Taiko), Python (Pytest, Behave, Robot Framework), Java (TestNG, JUnit, Cucumber), Ruby (RSpec, Capybara), C# (NUnit, xUnit, MSTest) and mobile apps (XCUI, Espresso, Appium). Your AI client works out the discovery and runner commands from your project and passes them in. |
| `answerHyperExecuteQuery` | Searches the HyperExecute documentation and returns the matching passages with links to their pages. Your AI client writes the answer from them. |

**Monitor and debug jobs**

| Tool | What it does |
|---|---|
| `listHyperExecuteJobs` | Lists your jobs, newest first, with an optional status filter over the 200 most recent jobs. |
| `getHyperExecuteJobInfo` | Gets the status, test results and progress of one job. |
| `getHyperExecuteJobSessions` | Gets the test sessions of one job. |
| `analyzeHyperExecuteJob` | Builds a full report of one job: its sessions, tasks, scenario stages and console logs, with pass and fail counts. |
| `getHyperExecuteJobLiveStream` | Streams the output of a job while it runs. A finished job has no live stream. |
| `getHyperExecuteTask` | Gets one task of a job. |
| `getHyperExecuteTaskLogs` | Gets the logs of one task. |
| `getHyperExecuteStage` | Gets the stages of a task, such as cache, pre-run and scenario. |
| `getHyperExecuteStageLogs` | Gets the logs of one stage. |
| `getHyperExecuteStageTasks` | Gets the tasks of one stage. |

**Artifacts**

| Tool | What it does |
|---|---|
| `getHyperExecuteJobArtifacts` | Lists the artifacts or categorized errors of a job or task. |
| `getJobArtifactDetail` | Gets the details of one artifact. |
| `downloadJobArtifact` | Returns an authenticated download URL for one artifact, with its size and status. It does not return the file itself. |

:::note
The live stream, task and stage tools use internal HyperExecute APIs, so the format of their output can change.
:::

## How to Invoke

---

Once your MCP client is connected, use natural language to interact with the HyperExecute tool. Example prompts:

- "Analyze this project and create a HyperExecute YAML file."
- "What does `failFast` mean in HyperExecute?"
- "Get the status of HyperExecute job `<jobID>`."
- "Show me session details for the last failed run."
- "Generate the test runner command for this Selenium project."

Your AI client will route the request to the appropriate capability and return the results inline.
