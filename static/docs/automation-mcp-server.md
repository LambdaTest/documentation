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

The Automation MCP Tool provides four capabilities:

1. **Automation Test Details:** Fetches detailed information about a specific TestID from the TestMu AI cloud.
2. **Automation Command Logs:** Retrieves execution logs for Selenium commands run on TestMu AI.
3. **Automation Network Logs:** Accesses test network logs, offering insights into browser traffic and behavior.
4. **Automation Console Logs:** Fetches browser console logs, surfacing error-level messages and warnings.

## How to Invoke

Once your MCP client is connected, use natural language to interact with the Automation tool. Example prompts:

- "Triage the failure for TestID ``."
- "Show me the network logs for TestID ``."
- "What console errors occurred during the last failed test?"
- "Pull the Selenium command logs for `` and tell me where it failed."
- "Generate a new test case based on the execution flow of TestID ``."

Your AI client will route the request to the appropriate capability, pull the relevant data from TestMu AI, and return the results inline.
