# Getting Started with Test Manager MCP Tool

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Test Manager MCP Tool is part of the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/). It connects your AI client to [Test Manager](/support/docs/test-manager/) so an assistant can run the complete test management lifecycle on your behalf: generate test cases from requirements with AI, organize them into folders, build test runs with the right configurations, record results in bulk, track milestones, link work to Jira or Azure DevOps, and report on coverage, without leaving your IDE or chat.

Everything the assistant does happens in your own Test Manager projects, filtered to what your account is allowed to see.

## How Does It Work?

Once connected to the TestMu AI MCP Server, your AI client discovers a set of tools prefixed `tm_`. You describe what you want in natural language and the client picks the right tools, in the right order. A typical flow:

1. **Discover:** list projects, then fetch the folder tree, existing Modules, and saved Configurations to reference by id.
2. **Author:** generate test cases from a requirement with AI, or create individual cases with steps.
3. **Execute:** create a milestone, build a run from chosen cases with Configurations applied, and record results in bulk as testing progresses.
4. **Report:** check run summaries, milestone progress, and automation coverage on demand.

## Available Tools

The Test Manager MCP Tool exposes 22 tools: 8 to read and discover, 14 to act. **Bold** inputs are required. Ids are referenced across tools: projects, folders, cases, runs, and milestones use ULID strings, configurations and run instances use numbers.

### Projects

Project and Organization Instructions (the Memory Layer) stay managed in the Test Manager UI. The AI generator applies them automatically.

| Tool | Description | Inputs | Example prompt |
|---|---|---|---|
| `tm_list_projects` | Lists every project the user is allowed to see. Returns each project's id, name, description, and tags, paginated. | `search`, `page`, `limit` | "List my Test Manager projects that mention payments." |
| `tm_create_project` | Creates a project. Returns the new project id. | **`name`**, `description`, `tags` | "Create a Test Manager project called Mobile Banking with the tag q3-release." |
| `tm_update_project` | Updates a project's name, description, or tags. Only passed fields change, `tags` replace the current set. | **`project_id`**, `name`, `description`, `tags` | "Rename the Mobile Banking project to Mobile Banking App." |

### Folders and Modules

Modules are reusable step blocks shared across projects. The assistant references an existing Module by id when creating or editing a test case, which includes the Module's steps. The Module itself is never changed through the connection. Creating Modules stays in the Test Manager UI.

| Tool | Description | Inputs | Example prompt |
|---|---|---|---|
| `tm_list_folders` | Returns a folder tree with ids, names, and nesting. Three trees exist: per-project `test-cases` (default) and `test-runs`, and the organization-level `modules`. `project_id` is required for the two per-project trees. | `tree`, `project_id` | "Show the test case folder tree for the Payments project." |
| `tm_create_folder` | Creates a folder in any of the three trees, optionally nested under a parent. Returns the new folder id. | **`name`**, `tree`, `project_id`, `parent_folder_id`, `description` | "Create a P0 Regression folder under Checkout in the Payments project." |
| `tm_update_folder` | Renames a folder, changes its description, or moves it under a different parent (`root` moves it to top level). | **`folder_id`**, `name`, `description`, `parent_folder_id`, `tree`, `project_id` | "Move the Smoke folder under Regression and rename it to Smoke Pack." |
| `tm_list_modules` | Lists the organization's reusable step [Modules](/support/docs/create-modules/) with their ids, paginated. | `search`, `folder_id`, `include_subfolders`, `page`, `limit` | "List our shared step Modules that mention login." |

### Test Cases

| Tool | Description | Inputs | Example prompt |
|---|---|---|---|
| `tm_get_test_cases` | Finds cases by filters and search. Filters combine with AND, search needs at least 3 characters and matches title, description, steps, or a case id like TC-123. Returns summaries. With `case_id`, returns that one case in full detail: steps, BDD scenarios, and field values. | `case_id`, `project_id` (required unless `case_id` is given), `folder_id`, `priority`, `automation_status`, `type`, `tags`, `search`, `page`, `limit` | "Find all High priority, not automated Regression cases in the Checkout folder." |
| `tm_create_test_case` | Creates one case with steps, preconditions, priority, type, tags, and referenced Modules. Each entry in `test_steps` has `action` (required), `outcome`, and `description`. Returns the new case id. | **`project_id`**, **`title`**, `folder_id`, `description`, `preconditions`, `test_steps`, `module_ids`, `priority`, `type`, `status`, `automation_status`, `estimated_time`, `tags` | "Create a High priority case titled Verify 3DS payment in the Checkout folder." |
| `tm_update_test_case` | Edits a case. Only passed fields change, `test_steps` replace the case's steps, `module_ids` append Module reference steps. | **`case_id`**, **`project_id`**, plus the same optional fields as `tm_create_test_case` | "Mark TC-101 as Automated and move it to the Automated folder." |
| `tm_generate_test_cases` | Generates cases from a requirement with the Test Manager AI generator. Returns a `request_id` and a browser progress URL immediately, poll with `request_id` for results. Saving returns every saved case with its new id, grouped by scenario. See [Generating Test Cases with AI](#generating-test-cases-with-ai). | **`prompt`**, **`project_id`**, **`folder_id`** (all three for a new generation), `test_scenario_limit`, `per_scenario_test_cases_limit`, `jira_ids`, `files`, `auto_save`, `request_id` | "Generate 15 checkout cases from this PRD into the P0 Regression folder, and let me review them before saving." |

### Test Runs and Results

Each test case included in a run becomes a **test run instance**: the executable copy of that case inside the run, carrying its own status, remarks, and exactly one Configuration.

| Tool | Description | Inputs | Example prompt |
|---|---|---|---|
| `tm_list_configurations` | Lists saved run Configurations with their top-level id, name, and environments (OS, browser, resolution, or device). Pass the top-level id to the run tools, not the nested environment id. Filter by `run_type` to see what a manual or KaneAI run accepts. | `run_type`, `project_id`, `page`, `limit` | "Which saved configurations can I use for a KaneAI run?" |
| `tm_create_test_run` | Creates a manual (default) or KaneAI run from chosen cases. Returns the new run id and its `run_type`. | **`project_id`**, **`title`**, `test_case_ids`, `run_type`, `configuration_id`, `configuration_ids`, `milestone_ids`, `folder_id`, `assignee`, `objective`, `tags`, `is_sequential` | "Create a run called Sprint 47 Regression from the Checkout folder's High priority cases, apply our Chrome and Safari configurations, and assign the instances to priya@example.com." |
| `tm_update_test_run` | Updates an open run: overall status (manual runs only), title, objective, add cases, apply Configurations, attach milestones, move folder, assign, or archive. Adding appends, never replaces. | **`run_id`**, `status`, `title`, `objective`, `add_test_case_ids`, `configuration_id`, `configuration_ids`, `apply_to_test_case_ids`, `milestone_ids`, `folder_id`, `assignee`, `is_sequential`, `archive` | "Add TC-150 and TC-151 to the Sprint 47 Regression run and mark the run In Progress." |
| `tm_get_test_runs` | With `run_id`, one run's detail plus its result summary: instance counts by status (passed, failed, skipped, not started, in progress) and pass rate. Otherwise lists runs with filters. Every run carries `run_type`. | `run_id`, `project_id` (required without `run_id`), `run_type`, `status`, `search`, `folder_id`, `page`, `limit` | "Show the result summary of the Sprint 47 Regression run." |
| `tm_record_test_results` | Records up to 500 results on a manual run's instances, all or nothing. Each result has `status` (required), `instance_id` or `test_case_id` to pick the instance, and optional `remarks`, `assignee`, and per-step `steps`. Echoes every recorded result and per-step outcome. See [Recording Results in Bulk](#recording-results-in-bulk). | **`run_id`**, **`results`** | "In the Sprint 47 run, mark TC-101 to TC-140 as Passed and fail TC-141 with the remark payment timeout on 3DS." |

### Milestones

| Tool | Description | Inputs | Example prompt |
|---|---|---|---|
| `tm_create_milestone` | Creates a [milestone](/support/docs/milestone-creation-and-management/), starting as Open, with optional dates, owner, tags, and attached runs. Returns the new milestone id. | **`project_id`**, **`title`**, `description`, `start_at`, `end_at`, `owner`, `tags`, `test_run_ids` | "Create a Sprint 47 milestone from 2026-07-20 to 2026-08-02 owned by priya@example.com." |
| `tm_update_milestone` | Updates a milestone or flips its status between `Open` and `Complete` (`Active` and `Completed` are accepted as aliases and normalized). | **`milestone_id`**, **`project_id`**, `title`, `description`, `start_at`, `end_at`, `status`, `owner`, `tags` | "Mark the Sprint 47 milestone as Complete." |
| `tm_get_milestone` | With `milestone_id`, one milestone's detail with attached runs and live completion progress. Otherwise the project's milestone list. | `milestone_id`, `project_id` (required without `milestone_id`) | "How far along is the Sprint 47 milestone?" |

### Issue Tracking and Coverage

Linking a run result also links its test case and run. Both linking tools need the corresponding integration set up for your organization first. If it is not, the tool returns a clear "set up the integration first" message.

| Tool | Description | Inputs | Example prompt |
|---|---|---|---|
| `tm_link_jira_issue` | Links a case, run, or run result to a [Jira issue](/support/docs/link-jira-issues-with-test-manager/) for coverage and traceability. `entity_type` is `test_case`, `test_run`, or `test_run_instance`. | **`entity_type`**, **`entity_id`**, **`issue_id`** | "Link test case TC-88 to Jira issue PROJ-456." |
| `tm_link_ado_issue` | Links a case, run, or run result to an [Azure DevOps work item](/support/docs/link-ado-issues-with-test-manager/) by its URL. | **`entity_type`**, **`entity_id`**, **`project_id`**, **`work_item_url`** | "Link the Sprint 47 run to this Azure DevOps work item URL." |
| `tm_get_coverage_summary` | Test coverage computed live: case totals and automation percentage, overall and per folder. With `jira_id`, that requirement's linked-case coverage (zero linked cases means uncovered). An empty scope returns zeros, not an error. | **`project_id`**, `folder_id`, `jira_id` | "Which folders in the Payments project have the lowest automation coverage?" |

## Generating Test Cases with AI

`tm_generate_test_cases` drives the same [AI test case generation](/support/docs/generate-test-cases-with-ai/) you get in the Test Manager UI, applying your Project and Organization Instructions automatically. A few behaviors worth knowing:

- **Generation is asynchronous.** The call returns fast with a `request_id` and a browser progress URL. Generation takes roughly 30 to 90 seconds. The assistant polls with the `request_id` to check progress and fetch results.
- **Volume is capped at 50 cases per call.** Volume = scenarios x cases per scenario (both default to 3).
- **Review before saving.** By default all generated cases are saved into the chosen folder, one sub-folder per scenario. Pass `auto_save: false` to review first. That choice persists across polls, and nothing is saved until the assistant calls again with the `request_id` and `auto_save: true`. The save call returns every saved case with its new id.
- **Ground the generation with context.** Reference files (requirement docs, specs, spreadsheets, screenshots) can be attached, and Jira issue keys can be passed as requirement context.

AI generation consumes AI generation credits, the same as generating from the UI.

## Working with Configurations

Configurations are reusable platform, browser, OS, and device setups, created in the Test Manager UI and referenced by id. Two parameters control how they apply to a run:

- `configuration_ids` (plural) applies **multiple** Configurations: each targeted test case gets one instance per Configuration (case x configuration), like the Add Configuration checkboxes in the UI. On update it appends new instances and leaves existing ones untouched.
- `configuration_id` (singular) sets **one** Configuration on the run's instances. On update this follows the UI's latest-selection behavior and replaces an instance's current Configuration.

Configurations are validated against the run's type. Applying one that does not support the run (manual or KaneAI) is rejected with a clear message and nothing is applied. Use the `run_type` filter on `tm_list_configurations` to see what is usable.

To apply several Configurations, or to add one without touching what is already applied, use `configuration_ids`.

## KaneAI Test Runs

Test runs are manual by default. Passing `run_type: "kaneai"` to `tm_create_test_run` creates a KaneAI run instead:

- Only KaneAI-authored test cases with completed code generation can be included. Mixing in a manual case is rejected with a clear message and nothing is written.
- Configurations applied to a KaneAI run must be KaneAI-supported and platform-compatible with each case. `tm_list_configurations` accepts a `run_type` filter to show only usable ones.
- Instances can be set to execute sequentially with `is_sequential`.
- A KaneAI run's status and results are managed by KaneAI executions. Manual status updates and manual result entry on a KaneAI run are rejected.

Every run returned by `tm_get_test_runs` carries a `run_type` field of `kaneai` or `manual`, and the run list filters by `run_type` into three disjoint buckets: `manual`, `kaneai`, and `automation` (framework-uploaded runs).

## Recording Results in Bulk

`tm_record_test_results` records execution results on a manual run's instances, targeting each by `instance_id` or simply by `test_case_id`:

- **Up to 500 results per request, all or nothing.** Larger requests are rejected cleanly and nothing is recorded.
- Instance statuses are `Passed`, `Failed`, `Skipped`, or `Not Started`, each with optional remarks and an assignee.
- Individual test steps and BDD scenario rows can be marked with per-step statuses and remarks, like the per-step Mark Status in the UI. Re-recording a step replaces its result, and an omitted step remark is cleared.
- A case that runs under several Configurations has one instance per Configuration. `test_case_id` resolves to a single instance, so target multi-configuration cases by `instance_id` (from `tm_get_test_runs` detail).
- Instance results are independent of the run's **overall** status. The overall status (`Passed`, `Failed`, `Skipped`, `In Progress`) is set separately through `tm_update_test_run`.

## How to Invoke

Once your MCP client is connected, use natural language. Multi-step prompts compose several tools in one request:

- "List my Test Manager projects and show the folder tree for the Payments project."
- "Generate 15 checkout test cases from this PRD into the P0 Regression folder, must-haves as High priority."
- "Create a Sprint 47 milestone and a regression run of all High priority cases from the Checkout folder, apply our Chrome Windows and iOS Safari configurations, and attach the run to the milestone."
- "Mark TC-101 to TC-140 as Passed in run Sprint 47 Regression, and fail TC-141 with remark 'payment timeout on 3DS'."
- "Which folders in this project have the lowest automation coverage?"

## Guardrails

The tool set is designed so an assistant cannot cause data loss or overload shared systems:

- **No delete tools.** Nothing through the connection deletes a project, folder, test case, run, or milestone. Removal stays a human action in the Test Manager UI. Runs can be archived through `tm_update_test_run`.
- **Reusable scaffolding stays human-owned.** Modules and Configurations are created in the UI. The assistant fetches and references them by id.
- **Only open runs can be updated.** Updating a closed or archived run returns a clear message instead of failing silently.
- **Volume caps are all or nothing.** 50 generated cases per call, 500 recorded results per request. Nothing partial is ever written.
- **Errors are plain and recoverable.** Missing integrations, permission limits, and oversized requests each return a message saying what happened and what to do next.

## Error Handling

If a referenced id is invalid or a precondition is not met, the tool responds with a plain-language message, for example:

> "A KaneAI run only takes KaneAI-authored test cases. Incompatible: TC-97. Nothing was written."

> "The Jira integration is not set up for this organization. Nothing was linked. Set it up in LambdaTest under Integrations, then retry."

> "This test run is archived. Only open (active) runs can be updated. Re-open or duplicate it in the Test Manager UI first."
