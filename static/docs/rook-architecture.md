# Rook Architecture and Data Flow

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Rook has 3 deployables: the CLI, the controller, and the API. The agent under test and cloud results UI are connected systems shown for context. The most important architectural fact is the boundary between code and evidence on your machine, model orchestration in the controller, and synchronized records in the API.

    Execution and evidence stay local. Model orchestration and synchronization cross separate, explicit boundaries.

    Your Machine

        Rook CLI
        Local

      Reads and writes the workspace. Contains no managed prompts or model keys.

      ↓
      Execute hook
      Scenario goal on stdin

        Your Agent
        Real Target

      Runs in your environment. Its tool calls and writes have real effects.

      ↓
      Hook result
      Output, conversation, usage, calls, and evidence

        Authoritative Local Record

      Agents, features, scenarios, profiles, hooks, runs, and verdict evidence under .testmuai/rook/.

    Explicit Boundary Crossings

      Model work
      Rook CLI ⇄ Controller
      Role and scoped context out; managed prompt result back

      Synchronization
      Local record → Rook API
      Reviewed project tree and completed run results

    TestMu AI

          Rook Controller
          Stateless

        Supplies managed prompts, model access, authentication, and credit accounting.

          Rook API
          Stateful

        Stores synchronized versions, runs, verdicts, and artifacts in PostgreSQL and object storage.

      ↓
      Rook API supplies synchronized records

        Cloud Results UI

      Presents synchronized evidence and comparisons. It is not authoritative over the local workspace.

## Components

    Rook CLI
    Location: Your machine
    Reads the workspace, writes scenarios and profiles, runs hooks, records evidence, and coordinates synchronization.
    State: Local files under .testmuai/rook/

    Agent Under Test
    Location: Your environment
    Receives real goals through the profile's execute hook and may produce real external effects.
    State: Owned by the target system

    Rook Controller
    Location: TestMu AI
    Supplies role-specific prompts, model access, credit accounting, and authenticated model-backed operations.
    State: Stateless

    Rook API
    Location: TestMu AI
    Stores synchronized versions, runs, verdicts, and artifacts.
    State: PostgreSQL and object storage

    Cloud Results UI
    Location: TestMu AI
    Presents synchronized projects and run evidence through records supplied by the Rook API.

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

**Real effects**
The agent runs in its actual environment. Rook does not virtualize or roll back target writes. Use staging systems and disposable fixtures.

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
