# Getting Started with Automation MCP Tool

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Automation MCP Tool is part of the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/). It connects your AI client to test execution data on TestMu AI, letting you triage and debug automation failures directly from your IDE.

## Key Benefits

Use the Automation tool to accelerate debugging and test analysis:

- Access your test execution data on TestMu AI directly from your IDE or editor.
- Triage and troubleshoot test failures to identify the root cause (RCA).
- Fix your test code based on the RCA and accelerate your development.
- Generate new test cases using execution data from TestMu AI.
- Use network logs, Selenium logs, and console logs to pinpoint bottlenecks and failures.

## Capabilities

The Automation MCP Tool provides 19 tools. Tools that take a `testId` work for web and app automation tests; set `platform` to `web` or `app`.

**Find tests and builds**

| Tool | What it does |
|---|---|
| `automationQuery` | Lists builds, gets one build, lists the sessions in a build, gets test details, and gets test logs (command, network, console, Selenium or instrumentation), for web or app automation. |

**Test details and logs**

| Tool | What it does |
|---|---|
| `getAutomationTestDetails` | Gets the details of one test: browser or device, OS, status, duration and more. |
| `getAutomationTestCommandLogs` | Gets the commands the test sent, page by page. |
| `getAutomationTestNetworkLogs` | Gets the network traffic of the test. |
| `getAutomationTestBrowserConsoleLogs` | Gets the browser console logs. Web tests only. |
| `getAutomationTestSeleniumLogs` | Gets the Selenium logs of a web test, the Appium logs of an Appium test, or the instrumentation logs of an XCUI or Espresso test. |

**Session recordings and logs (web automation only)**

| Tool | What it does |
|---|---|
| `getSessionScreenshots` | Gets the screenshot taken at each command. |
| `getSessionVideo` | Gets the URL of the session video. |
| `getSessionV2CommandLogs` | Gets the command logs as structured JSON. |
| `getSessionV2SeleniumLogs` | Gets the Selenium or WebDriver request and response logs. |
| `getLiveSessionLogs` | Gets the request and response log of a session, while it runs or after it ends. |

For app automation sessions, these five tools return "not found". `listMobileSessions` returns the video, screenshot and log links of app sessions instead.

**Update, stop and delete**

| Tool | What it does |
|---|---|
| `updateSession` | Changes the name of a session or marks it passed, failed, error or skipped. |
| `postSessionExceptions` | Attaches exception logs to a session. |
| `postTestExceptions` | Attaches exception logs to a test. |
| `updateBuild` | Renames a web automation build. |
| `stopSession` | Stops a running session. |
| `stopBuild` | Stops every running test in a web automation build. |
| `deleteSession` | Permanently deletes a session. |
| `deleteBuild` | Permanently deletes a web automation build and its test results. |

`deleteSession` and `deleteBuild` cannot be undone, and `stopSession` and `stopBuild` end running tests immediately. These tools declare that they modify data, so MCP clients that use tool annotations ask you to confirm before running them. Exceptions attached after a test has ended may not appear on the Automation dashboard.

## How to Invoke

Once your MCP client is connected, use natural language to interact with the Automation tool. Example prompts:

- "Triage the failure for TestID ``."
- "Show me the network logs for TestID ``."
- "What console errors occurred during the last failed test?"
- "Pull the Selenium command logs for `` and tell me where it failed."
- "Generate a new test case based on the execution flow of TestID ``."

Your AI client will route the request to the appropriate capability, pull the relevant data from TestMu AI, and return the results inline.
