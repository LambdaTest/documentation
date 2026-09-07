---
id: rook-architecture
title: Rook Architecture and Data Flow
hide_title: false
sidebar_label: Architecture
description: Understand the boundary between the local Rook CLI, the stateless controller, the stateful Rook API, and the cloud results UI.
keywords:
  - rook architecture
  - rook controller
  - rook api
  - autonomous agent testing architecture
url: https://www.testmuai.com/support/docs/rook-architecture/
site_name: TestMu AI
slug: rook-architecture/
canonical: https://www.testmuai.com/support/docs/rook-architecture/
---

# Rook Architecture and Data Flow

Rook has 3 deployables: the CLI, the controller, and the API. The agent under test and cloud results UI are connected systems shown for context. The most important architectural fact is the boundary between code and evidence on your machine, model orchestration in the controller, and synchronized records in the API.

<figure className="rookArchitecture" aria-labelledby="rook-architecture-caption">
  <figcaption id="rook-architecture-caption" className="rookArchitecture__caption">
    Execution and evidence stay local. Model orchestration and synchronization cross separate, explicit boundaries.
  </figcaption>

  <section className="rookArchitecture__zone rookArchitecture__zone--local" aria-labelledby="rook-local-zone">
    <p id="rook-local-zone" className="rookArchitecture__zoneLabel">Your Machine</p>

    <div className="rookArchitecture__node rookArchitecture__node--orange">
      <div className="rookArchitecture__nodeHeader">
        <strong>Rook CLI</strong>
        <span className="rookArchitecture__badge">Local</span>
      </div>
      <p>Reads and writes the workspace. Contains no managed prompts or model keys.</p>
    </div>

    <div className="rookArchitecture__connector">
      <span aria-hidden="true">↓</span>
      <strong>Execute hook</strong>
      <small>Scenario goal on stdin</small>
    </div>

    <div className="rookArchitecture__node rookArchitecture__node--blue">
      <div className="rookArchitecture__nodeHeader">
        <strong>Your Agent</strong>
        <span className="rookArchitecture__badge rookArchitecture__badge--blue">Real Target</span>
      </div>
      <p>Runs in your environment. Its tool calls and writes have real effects.</p>
    </div>

    <div className="rookArchitecture__connector">
      <span aria-hidden="true">↓</span>
      <strong>Hook result</strong>
      <small>Output, conversation, usage, calls, and evidence</small>
    </div>

    <div className="rookArchitecture__node">
      <div className="rookArchitecture__nodeHeader">
        <strong>Authoritative Local Record</strong>
      </div>
      <p>Agents, features, scenarios, profiles, hooks, runs, and verdict evidence under <code>.testmuai/rook/</code>.</p>
    </div>
  </section>

  <section className="rookArchitecture__boundary" aria-labelledby="rook-boundary-label">
    <p id="rook-boundary-label" className="rookArchitecture__zoneLabel">Explicit Boundary Crossings</p>
    <div className="rookArchitecture__boundaryRow">
      <strong>Model work</strong>
      <span>Rook CLI ⇄ Controller</span>
      <small>Role and scoped context out; managed prompt result back</small>
    </div>
    <div className="rookArchitecture__boundaryRow">
      <strong>Synchronization</strong>
      <span>Local record → Rook API</span>
      <small>Reviewed project tree and completed run results</small>
    </div>
  </section>

  <section className="rookArchitecture__zone rookArchitecture__zone--cloud" aria-labelledby="rook-cloud-zone">
    <p id="rook-cloud-zone" className="rookArchitecture__zoneLabel">TestMu AI</p>

    <div className="rookArchitecture__services">
      <div className="rookArchitecture__node rookArchitecture__node--orange">
        <div className="rookArchitecture__nodeHeader">
          <strong>Rook Controller</strong>
          <span className="rookArchitecture__badge">Stateless</span>
        </div>
        <p>Supplies managed prompts, model access, authentication, and credit accounting.</p>
      </div>

      <div className="rookArchitecture__node rookArchitecture__node--blue">
        <div className="rookArchitecture__nodeHeader">
          <strong>Rook API</strong>
          <span className="rookArchitecture__badge rookArchitecture__badge--blue">Stateful</span>
        </div>
        <p>Stores synchronized versions, runs, verdicts, and artifacts in PostgreSQL and object storage.</p>
      </div>
    </div>

    <div className="rookArchitecture__connector">
      <span aria-hidden="true">↓</span>
      <strong>Rook API supplies synchronized records</strong>
    </div>

    <div className="rookArchitecture__node">
      <div className="rookArchitecture__nodeHeader">
        <strong>Cloud Results UI</strong>
      </div>
      <p>Presents synchronized evidence and comparisons. It is not authoritative over the local workspace.</p>
    </div>
  </section>
</figure>

## Components

<div className="rookArchitectureCards">
  <article>
    <h3>Rook CLI</h3>
    <p><strong>Location:</strong> Your machine</p>
    <p>Reads the workspace, writes scenarios and profiles, runs hooks, records evidence, and coordinates synchronization.</p>
    <p><strong>State:</strong> Local files under <code>.testmuai/rook/</code></p>
  </article>
  <article>
    <h3>Agent Under Test</h3>
    <p><strong>Location:</strong> Your environment</p>
    <p>Receives real goals through the profile's <code>execute</code> hook and may produce real external effects.</p>
    <p><strong>State:</strong> Owned by the target system</p>
  </article>
  <article>
    <h3>Rook Controller</h3>
    <p><strong>Location:</strong> TestMu AI</p>
    <p>Supplies role-specific prompts, model access, credit accounting, and authenticated model-backed operations.</p>
    <p><strong>State:</strong> Stateless</p>
  </article>
  <article>
    <h3>Rook API</h3>
    <p><strong>Location:</strong> TestMu AI</p>
    <p>Stores synchronized versions, runs, verdicts, and artifacts.</p>
    <p><strong>State:</strong> PostgreSQL and object storage</p>
  </article>
  <article>
    <h3>Cloud Results UI</h3>
    <p><strong>Location:</strong> TestMu AI</p>
    <p>Presents synchronized projects and run evidence through records supplied by the Rook API.</p>
  </article>
</div>

## Model Boundary

The CLI ships with no model prompt and no model API key. For a model-backed task, it sends a role name and scoped task context to the controller. The controller supplies the corresponding system prompt and returns the model response.

This keeps model credentials and centrally managed prompts out of the distributed binary while allowing discovery, scenario generation, profile authoring, judging, and RCA to use specialized roles.

## Local Invocation Path

```text
scenario goal
    ↓ standard input
profile execute hook
    ↓ real invocation
agent under test
    ↓ JSON on standard output
reply · conversation · usage · calls · custom evidence
    ↓
local run directory
```

The hook contains the transport-specific code. It can call HTTP, a command, a subprocess, a socket, or an adapter. Rook owns the lifecycle order; the script owns how each phase reaches the target.

:::warning Real effects
The agent runs in its actual environment. Rook does not virtualize or roll back target writes. Use staging systems and disposable fixtures.
:::

## Controller Flow

Model-backed operations follow a role-based request:

1. The CLI identifies the operation and role, such as agent discovery, scenario generation, hook authoring, judging, or RCA.
2. It sends only the context needed for that role to the controller.
3. The controller supplies its managed prompt and model credentials.
4. The result returns to the CLI, which validates it and writes the resulting project or run files locally.

Commands that only inspect existing state—such as `status`, `scenarios`, `env`, and most `mcp` operations—do not need a model call.

## Local State Is the Record

`.testmuai/rook/` is authoritative for the workspace. `rook sync` copies the current project tree to the Rook API. Run results are also recorded locally as they happen and can be reconciled upstream later.

```text
local project tree ── rook sync ──▶ Rook API ──▶ cloud UI
local run evidence ── run sync ───▶ Rook API ──▶ reports and comparison
```

Cloud state does not silently overwrite the local workspace. Ahead, behind, and diverged states are reported for deliberate reconciliation.

## Trust and Secret Boundaries

- Profile files store `${VARIABLE}` references; values remain in the local Rook home.
- Hook scripts execute locally and receive short-lived Rook context through `ROOK_*` variables.
- Repository-declared or discovered MCP servers require explicit approval before Rook starts them.
- Permission grants are scoped to operations and phases so approval during exploration does not automatically authorize judging or CI.
- A judge should verify through read-only evidence sources. Calling a write operation to check whether a write occurred would create new state rather than verify existing state.

## What Leaves the Machine

Rook uses different outbound paths for model work and persistence:

- **Model-backed commands:** the CLI sends the selected role and scoped task context to the controller. Depending on the operation, that context can include relevant source excerpts, agent definitions, scenario material, or recorded evidence needed to produce the result.
- **Project synchronization:** `rook sync` sends the reviewed project tree to the Rook API. It is an explicit action rather than a background upload.
- **Run records:** completed run results are written locally first and recorded through the Rook API as the run progresses or during later reconciliation.
- **Secret values:** profile environment values, the local credential store, and controller model keys are not included in project synchronization.
- **Local results UI:** `rook ui --local` serves the on-disk evidence without requiring an account or network connection.

Review source material and result evidence for sensitive target data before model-backed operations, synchronization, or artifact upload in CI.

## Evidence Boundary

Rook distinguishes the target's statement from independently observable evidence. A reply can be graded for content, but a claimed ticket, refund, deployment, or file change should be checked through tool-call evidence, filesystem observation, a read endpoint, a trace, or an approved read-only MCP tool.

If the required observation is unavailable, the result is **Unable to Verify**. It is never converted into a pass or failure merely to produce a complete-looking score.

## Related Documentation

- [Profiles and hooks](/support/docs/rook-profiles-and-hooks/)
- [Permissions and safety](/support/docs/rook-permissions-and-safety/)
- [Environment and secrets](/support/docs/rook-environment-and-secrets/)
- [What lands on disk](/support/docs/rook-workspace-files/)
