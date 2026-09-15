# How to Test LangGraph Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

LangGraph agents are text agents exposed over HTTP, with state held in a graph and threaded across turns. There is no voice or phone surface. The TestMu AI Agent Testing Platform connects to your deployed endpoint and drives the graph through multi-turn conversations across personas and edge cases, scoring each run so you can test it in CI on every commit.

To connect one, you need a deployed graph with a reachable endpoint (self-hosted or on LangGraph Platform), a TestMu AI workspace with agent-testing permissions, and source docs for scenario generation such as the prompt, PRD, or knowledge base.

## Why does LangGraph thread state change how you test the agent?

A LangGraph agent is a graph with state on the thread, so a few behaviours drive how you write scenarios:

- **Thread state.** State lives on the thread, so reusing one across scenarios contaminates results. Use a fresh thread per scenario.
- **Human-in-the-loop interrupts.** Interrupts pause the graph mid-run, and a harness that does not resume reads the pause as a hang.
- **Tool-call branches.** Tool calls and their failure branches are where these agents actually break, so weight scenarios there.
- **Deployment shape.** Self-hosted, LangGraph Platform, and custom servers each change the endpoint shape.
- **No voice or phone surface.** Voice metrics and personas do not apply.

Chat testing covers text conversations against a deployed graph, whether streaming or non-streaming. Upload the graph definition and supporting docs to generate scenarios, then create the endpoint profile using the deployment's REST endpoint, with a fresh thread per scenario. It scores reasoning, tool call correctness, grounding, and safety, and runs in CI on every commit. See [chat agent testing](/support/docs/chat-agent/) for the full setup.

## Where does a LangGraph run get stuck?

Common failure modes to watch for:

- Thread state carried over between runs
- Graph paused on an interrupt
- Tool call returns malformed output
- Endpoint auth failure
