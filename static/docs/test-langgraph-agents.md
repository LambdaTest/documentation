# How to Test LangGraph Agents With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

LangGraph agents are text agents exposed over HTTP, with state held in a graph and threaded across turns. There is no voice or phone surface. TestMu AI connects to the deployed endpoint, drives full multi-turn conversations across personas and edge cases, and scores every run.

## Before You Begin

Before you connect a LangGraph agent, make sure you have:

- A deployed graph with a reachable endpoint, self-hosted or on LangGraph Platform
- TestMu AI workspace with agent-testing permissions
- Source docs for scenario generation: prompt, PRD, or knowledge base

## Test a LangGraph Chat Agent

Chat testing covers text conversations against a deployed graph, whether streaming or non-streaming. Upload the graph definition and supporting docs to generate scenarios, then create the endpoint profile using the deployment's REST endpoint, with a fresh thread per scenario. It scores reasoning, tool call correctness, grounding, and safety, and runs in CI on every commit.

Full setup: [Chat agent testing](/support/docs/chat-agent/)

## What You Get With Agent Testing

Every LangGraph run, on any surface it supports, is scored across:

- 30+ metrics across 8 categories, with configurable thresholds
- Context-aware scenario generation
- Adversarial testing and automated issue detection
- Multilingual conversations
- Quality scoring
- Automated issue detection

## LangGraph-Specific Considerations

A few LangGraph behaviours are worth building dedicated scenarios around:

- State lives on the thread, so reusing one across scenarios contaminates results
- Human-in-the-loop interrupts pause the graph mid-run, and a harness that does not resume reads the pause as a hang
- Tool calls and their failure branches are where these agents actually break, so weight scenarios there
- Deployment varies across self-hosted, LangGraph Platform, and custom servers, which changes the endpoint shape
- There is no voice or phone surface, so voice metrics and personas do not apply

## Troubleshooting

Common failure modes to watch for:

- Thread state carried over between runs
- Graph paused on an interrupt
- Tool call returns malformed output
- Endpoint auth failure
