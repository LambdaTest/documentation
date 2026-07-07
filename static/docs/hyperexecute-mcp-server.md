# Getting Started with HyperExecute MCP Tool

HyperExecute MCP Tool is part of the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/). It lets you set up HyperExecute test jobs, generate YAML configurations, and monitor runs directly from your IDE using natural language prompts.

## Key Benefits

Here are the key benefits of using the HyperExecute tool:

- **Automated Setup:** Reduce configuration time from hours to seconds
- **Smart Analysis:** Automatically identify project types, frameworks, and test structures
- **Dynamic Commands:** Generate precise test commands tailored to your project
- **Auto-Configuration:** Create accurate YAML configuration files without manual intervention
- **Real-Time Monitoring:** Track test executions with immediate updates
- **Efficient Debugging:** Inspect test results with comprehensive recordings
- **Instant Documentation:** Access relevant documentation through integrated AI agents

## Capabilities

The HyperExecute MCP Tool provides five capabilities:

1. **Test Runner Command Generation:** Analyzes your project structure and generates appropriate test commands.
2. **HyperExecute YAML Generation:** Creates a HyperExecute YAML configuration file based on your project analysis.
3. **HyperExecute Documentation Lookup:** Answers your queries by fetching information from the HyperExecute documentation.
4. **HyperExecute Job Info:** Retrieves information about a specific test job.
5. **HyperExecute Sessions:** Fetches session details for a given test run.

## How to Invoke

Once your MCP client is connected, use natural language to interact with the HyperExecute tool. Example prompts:

- "Analyze this project and create a HyperExecute YAML file."
- "What does `failFast` mean in HyperExecute?"
- "Get the status of HyperExecute job ``."
- "Show me session details for the last failed run."
- "Generate the test runner command for this Selenium project."

Your AI client will route the request to the appropriate capability and return the results inline.
