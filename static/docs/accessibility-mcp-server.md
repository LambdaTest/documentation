# Getting Started with Accessibility MCP Tool

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Accessibility MCP Tool is part of the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/). It runs accessibility checks on publicly hosted URLs and local web applications, and returns a detailed report with remediation guidance.

## Key Features

- Identifies accessibility issues in your application.
- Generates an accessibility report you can share with your team.
- Provides remediation guidance for a11y issues in locally hosted applications.

## Capabilities

The Accessibility MCP Tool provides three tools:

1. **getAccessibilityReport**: Runs an accessibility scan on one or more publicly reachable URLs and returns the issues, most severe first. Each issue carries its own fix guidance and the accessibility criteria it fails. You can filter by severity or by page. Every call with `urls` starts a new scan, which runs as a test on your account. To read more results from the same scan, your client passes the `testId` from the first response instead. The result includes a dashboard link, which needs a login, and the first scan also returns a public shareable link.
2. **buildLocalAppForAnalysis**: Returns step-by-step commands to build and serve a local web app that uses npm, and to open a TestMu AI tunnel to it. It detects the output folder of Vite, Next.js, Create React App and Angular projects. It does not build, run or scan anything itself: you or your AI client run the commands, then scan the app with `analyzeAppViaTunnel`. The commands never include your access key.
3. **analyzeAppViaTunnel**: Scans an app that is running locally and reachable through an active TestMu AI tunnel. It needs the local port and the name and id of the tunnel. The scan runs as a test on your account.

## How to Invoke

Once your MCP client is connected, use natural language to interact with the Accessibility tool. Example prompts:

- "Run an accessibility report on `https://example.com`."
- "Help me serve my local app on port 3000 and check it for accessibility issues."
- "I have a local app running on port 3000 via TestMu AI tunnel, check it for a11y failures."
- "Show me the accessibility violations on the homepage and how to fix them."

Your AI client will route the request to the appropriate capability and return the report or remediation guidance inline.
