---
id: rook-command-profile
title: Rook /profile Command
sidebar_label: /profile
description: Add, verify, inspect, edit, select, export, or remove an agent invocation profile.
slug: rook-command-profile/
---

# <code>/profile</code> Command

A profile is the fixed, reviewable recipe Rook uses to invoke a live agent. Use <code>/profile</code> to connect HTTP, command, asynchronous, multi-turn, and artifact-producing targets.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-profile.png').default} alt="Rook profile command help showing profile management subcommands" width="1556" height="1466" className="doc_img"/>

## Interactive syntax

~~~text
/profile
/profile add
/profile list
/profile use <name>
/profile show <name>
/profile edit <name>
/profile test <name>
/profile curl <name>
/profile rm <name>
~~~

## Headless syntax

~~~bash
rook profile list [name] [--entity <id>] [--json]
rook profile show [name] [--entity <id>] [--json]
rook profile use [name] [--entity <id>] [--json]
rook profile rm [name] [--entity <id>] [--json]
~~~

Creation, editing, testing, and cURL export are interactive in the current release.

## Typical setup

1. Confirm the live staging request works outside Rook.
2. Enter <code>/profile add</code>.
3. Name the profile by environment or variant, such as <code>refund-staging</code>.
4. Paste the cURL request or enter the local command.
5. Confirm which field receives the scenario goal and which field carries conversation state.
6. Confirm the result extraction path.
7. Let Rook make one harmless probe call.
8. Approve the extracted response only when it is the agent's answer.

## Real-world HTTP example

~~~bash
curl https://agent.staging.example.com/v1/chat \
  -H 'authorization: Bearer replace-with-your-token' \
  -H 'content-type: application/json' \
  -d '{"message":"check order ORD-1042","session_id":"profile-probe"}'
~~~

Rook lifts the Authorization value out of the request, replaces it with <code>$&#123;ROOK_AGENT_TOKEN&#125;</code>, and securely asks for the value. Use the exact generated name if your credential is in a different header or field.

## Multiple profiles

~~~text
/profile list
/profile test refund-staging
/profile use refund-staging
/profile show refund-staging
~~~

Use separate profiles for staging, production read-only, fast-model, careful-model, or regional endpoints. Each run records the profile it used.

## State, safety, and limits

Profiles are stored with the active agent below <code>.testmuai/rook/</code>. Adding or testing a profile invokes the target once; the test call is real.

Native attachment input is not implemented. SSE, NDJSON, and WebSocket responses are recorded but not executed. Direct MCP profiles are not executable by <code>/profile test</code> or <code>/run</code>; use an HTTP or command adapter for the target.

An unverified profile cannot become active. If extraction fails, check the response type and JSON path rather than selecting an arbitrary non-empty field.

## Related commands

[Invocation profile concepts](/support/docs/rook-profiles/) · [<code>/env</code>](/support/docs/rook-command-env/) · [<code>/scenarios</code>](/support/docs/rook-command-scenarios/) · [<code>/run</code>](/support/docs/rook-command-run/)
