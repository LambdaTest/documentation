---
id: test-manager-mcp-server
title: Introducing Test Manager MCP Tool
hide_title: false
sidebar_label: Test Manager
description: Manage the complete test management lifecycle with Test Manager MCP Tool. Generate test cases with AI, build configured test runs, record results in bulk, and track milestones and coverage from your AI client.
keywords:
  - test manager
  - test case management
  - test runs
  - milestones
  - testmu ai
  - MCP
  - MCP server
url: https://www.testmuai.com/support/docs/test-manager-mcp-server/
site_name: TestMu AI
slug: test-manager-mcp-server/
canonical: https://www.testmuai.com/support/docs/test-manager-mcp-server/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Test Manager MCP Tool",
          "item": `${BRAND_URL}/support/docs/test-manager-mcp-server/`
        }]
      })
    }}
></script>

# Getting Started with Test Manager MCP Tool
---

Test Manager MCP Tool is part of the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/). It connects your AI client to [Test Manager](/support/docs/test-manager/) so an assistant can run the complete test management lifecycle on your behalf: generate test cases from requirements with AI, organize them into folders, build test runs with the right configurations, record results in bulk, track milestones, link work to Jira or Azure DevOps, and report on coverage, without leaving your IDE or chat.

Everything the assistant does happens in your own Test Manager projects, filtered to what your account is allowed to see.

## How Does It Work?

---

Once connected to the TestMu AI MCP Server, your AI client discovers a set of tools prefixed `tm_`. You describe what you want in natural language and the client picks the right tools, in the right order. A typical flow:

1. **Discover:** list projects, then fetch the folder tree, existing Modules, and saved Configurations to reference by id.
2. **Author:** generate test cases from a requirement with AI, or create individual cases with steps.
3. **Execute:** create a milestone, build a run from chosen cases with Configurations applied, and record results in bulk as testing progresses.
4. **Report:** check run summaries, milestone progress, and automation coverage on demand.

## Available Tools

---

The Test Manager MCP Tool exposes 22 tools: 8 to read and discover, 14 to act. Each tool below lists its inputs, what it returns, and an example prompt you can adapt.

### Projects

:::note
Project and Organization Instructions (the Memory Layer) stay managed in the Test Manager UI. The AI generator applies them automatically.
:::

#### tm_list_projects

Lists every project the authenticated user is allowed to see.

| Input | Type | Required | Description |
|---|---|---|---|
| `search` | string | No | Filter projects by name keyword |
| `page` | number | No | Page number, 1-based |
| `limit` | number | No | Max results per page |

**Output:** a paginated list of projects, each with its project id, name, description, and tags.

**Example prompt:**

> "List my Test Manager projects that mention payments."

#### tm_create_project

Creates a new project.

| Input | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Project name |
| `description` | string | No | What the project covers |
| `tags` | array of strings | No | Labels |

**Output:** the created project with its project id.

**Example prompt:**

> "Create a Test Manager project called Mobile Banking with the tag q3-release."

#### tm_update_project

Updates a project's name, description, or tags. Only the fields you pass change.

| Input | Type | Required | Description |
|---|---|---|---|
| `project_id` | string | Yes | Project id |
| `name` | string | No | New name |
| `description` | string | No | New description |
| `tags` | array of strings | No | Replaces the current tags |

**Output:** the updated project.

**Example prompt:**

> "Rename the Mobile Banking project to Mobile Banking App and tag it regression."

### Folders and Modules

Modules are reusable step blocks shared across projects. The assistant references an existing Module by id when creating or editing a test case, which includes the Module's steps. The Module itself is never changed through the connection. Creating Modules stays in the Test Manager UI.

#### tm_list_folders

Returns a folder tree. Test Manager keeps three trees: per-project Test Cases and Test Runs trees, and the organization-level Modules tree.

| Input | Type | Required | Description |
|---|---|---|---|
| `tree` | string | No | `test-cases` (default), `test-runs`, or `modules` |
| `project_id` | string | Conditional | Required for the test-cases and test-runs trees, not used for modules |

**Output:** the folder hierarchy with each folder's id, name, and nesting.

**Example prompt:**

> "Show the test case folder tree for the Payments project."

#### tm_create_folder

Creates a folder in any of the three trees, optionally nested under an existing parent.

| Input | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Folder name |
| `tree` | string | No | `test-cases` (default), `test-runs`, or `modules` |
| `project_id` | string | Conditional | Required for the test-cases and test-runs trees |
| `parent_folder_id` | string | No | Nest under this folder, omit for top level |
| `description` | string | No | Optional description |

**Output:** the created folder with its folder id.

**Example prompt:**

> "Create a P0 Regression folder under Checkout in the Payments project."

#### tm_update_folder

Renames a folder, changes its description, or moves it under a different parent.

| Input | Type | Required | Description |
|---|---|---|---|
| `folder_id` | string | Yes | Folder id |
| `name` | string | No | New name |
| `description` | string | No | New description |
| `parent_folder_id` | string | No | Move under this folder, or pass `root` to make it top level |
| `tree` | string | No | Which tree the folder belongs to (default `test-cases`) |
| `project_id` | string | Conditional | Required when moving a test-cases or test-runs folder |

**Output:** the updated folder.

**Example prompt:**

> "Move the Smoke folder under Regression and rename it to Smoke Pack."

#### tm_list_modules

Lists the organization's reusable step [Modules](/support/docs/create-modules/).

| Input | Type | Required | Description |
|---|---|---|---|
| `search` | string | No | Filter modules by name keyword |
| `folder_id` | string | No | Only modules in this Modules folder |
| `include_subfolders` | boolean | No | With `folder_id`, also include modules from its subfolders |
| `page` | number | No | Page number, 1-based |
| `limit` | number | No | Max results per page (default 100) |

**Output:** a paginated list of Modules with each Module's id and name, ready to reference from `tm_create_test_case` or `tm_update_test_case`.

**Example prompt:**

> "List our shared step Modules that mention login."

### Test Cases

#### tm_get_test_cases

Finds test cases by filters and search, or fetches one case in full detail. Filters combine with AND.

| Input | Type | Required | Description |
|---|---|---|---|
| `case_id` | string | No | When given, returns that case's full detail and all other filters are ignored |
| `project_id` | string | Conditional | Required unless `case_id` is given |
| `folder_id` | string | No | Only cases in this folder |
| `priority` | string | No | `Lowest`, `Low`, `Medium`, `High`, or `Highest` |
| `automation_status` | string | No | `Automated`, `Not Automated`, or `To Be Automated` |
| `type` | string | No | Test type, for example `Functional`, `Regression`, `Smoke & Sanity` |
| `tags` | array of strings | No | Filter by tags |
| `search` | string | No | Full-text keyword or a case id like TC-123, minimum 3 characters |
| `page`, `limit` | number | No | Pagination |

**Output:** matching case summaries with ids, titles, priorities, and statuses. With `case_id`, the case's full detail: steps, BDD scenarios, and field values.

**Example prompts:**

> "Find all High priority, not automated Regression cases in the Checkout folder."

> "Show me the full steps of TC-101."

#### tm_create_test_case

Creates a single test case with optional steps and referenced Modules. For many cases from one requirement, prefer `tm_generate_test_cases`.

| Input | Type | Required | Description |
|---|---|---|---|
| `project_id` | string | Yes | Project id |
| `title` | string | Yes | Test case title |
| `folder_id` | string | No | Folder to file the case into |
| `description` | string | No | What the case verifies |
| `preconditions` | string | No | Setup required before the steps |
| `test_steps` | array of objects | No | Ordered steps. Each step has `action` (required), `outcome`, and `description` |
| `module_ids` | array of strings | No | Existing Module ids to include, appended after `test_steps` |
| `priority` | string | No | `Lowest`, `Low`, `Medium`, `High`, or `Highest` |
| `type` | string | No | For example `Functional`, `Regression`, `Smoke & Sanity` |
| `status` | string | No | For example `Live`, `Unverified`, `Ready` (default per project settings) |
| `automation_status` | string | No | `Automated`, `Not Automated`, or `To Be Automated` |
| `estimated_time` | number | No | Estimated execution time in minutes |
| `tags` | array of strings | No | Labels |

**Output:** the created case with its case id.

**Example prompt:**

> "Create a High priority case titled Verify 3DS payment in the Checkout folder, reusing our Login Module for the setup steps."

#### tm_update_test_case

Edits an existing case. Only the fields you pass change. Passed `test_steps` replace the case's steps, and `module_ids` append Module reference steps.

| Input | Type | Required | Description |
|---|---|---|---|
| `case_id` | string | Yes | Test case id |
| `project_id` | string | Yes | Project id |
| `folder_id` | string | No | Move the case to this folder |
| Other fields | | No | Same optional fields as `tm_create_test_case` |

**Output:** the updated case.

**Example prompt:**

> "Mark TC-101 as Automated and move it to the Automated folder."

#### tm_generate_test_cases

Generates structured test cases from a requirement or prompt with the Test Manager AI generator. See [Generating Test Cases with AI](#generating-test-cases-with-ai) for the full flow.

| Input | Type | Required | Description |
|---|---|---|---|
| `prompt` | string | Conditional | The requirement to generate from. Required when starting a new generation |
| `project_id` | string | Conditional | Required when starting a new generation |
| `folder_id` | string | Conditional | Folder to file generated cases into. Required when starting a new generation |
| `test_scenario_limit` | number | No | Max scenarios to generate (default 3) |
| `per_scenario_test_cases_limit` | number | No | Max cases per scenario (default 3) |
| `jira_ids` | array of strings | No | Jira issue keys to use as requirement context |
| `files` | array of objects | No | Up to 5 reference files, each a `name` plus base64 `content_base64`, 10 MB max each |
| `auto_save` | boolean | No | Default true. Pass false to review before saving |
| `request_id` | number | Conditional | Resume an earlier generation: check progress, fetch results, or save |

**Output:** a `request_id` and a browser progress URL immediately. Polling with the `request_id` returns progress, then the generated scenarios and cases and whether they were saved.

**Example prompt:**

> "Generate up to 15 checkout test cases from this PRD into the P0 Regression folder, and let me review them before saving."

### Test Runs and Results

Each test case included in a run becomes a **test run instance**: the executable copy of that case inside the run, carrying its own status, remarks, and exactly one Configuration.

#### tm_list_configurations

Lists saved run Configurations, the reusable platform, browser, OS, and device setups created in the Test Manager UI.

| Input | Type | Required | Description |
|---|---|---|---|
| `run_type` | string | No | `manual` or `kaneai`, shows only configurations usable for that run type |
| `project_id` | string | No | Optionally scope to a project |
| `page`, `limit` | number | No | Pagination |

**Output:** each Configuration's top-level id, name, and environments (OS, browser, resolution, or device). Pass the top-level id to the run tools, not the nested environment id.

**Example prompt:**

> "Which saved configurations can I use for a KaneAI run?"

#### tm_create_test_run

Creates a test run from chosen cases, manual by default or KaneAI with `run_type: "kaneai"`.

| Input | Type | Required | Description |
|---|---|---|---|
| `project_id` | string | Yes | Project id |
| `title` | string | Yes | Run title |
| `test_case_ids` | array of strings | No | Cases to include. They must match the run type |
| `run_type` | string | No | `manual` (default) or `kaneai` |
| `configuration_id` | number | No | Apply one Configuration to every included case |
| `configuration_ids` | array of numbers | No | Apply multiple Configurations, one instance per case and configuration |
| `milestone_ids` | array of strings | No | Existing milestones to attach the run to |
| `folder_id` | string | No | Test-run folder to file the run into |
| `assignee` | string | No | Assign every created instance to an organization member (email, username, or user id) |
| `objective` | string | No | What this run verifies |
| `tags` | array of strings | No | Labels |
| `is_sequential` | boolean | No | KaneAI runs only, execute the instances sequentially |

**Output:** the created run with its run id and instances.

**Example prompt:**

> "Create a run called Sprint 47 Regression with every High priority case from the Checkout folder, apply our Chrome Windows and iOS Safari configurations, and assign the instances to priya@example.com."

#### tm_update_test_run

Updates an open run. Adding cases and milestones appends, never replaces. Only open runs can be updated.

| Input | Type | Required | Description |
|---|---|---|---|
| `run_id` | string | Yes | Test run id |
| `status` | string | No | Overall run status: `Passed`, `Failed`, `Skipped`, or `In Progress`. Manual runs only |
| `title` | string | No | New title |
| `objective` | string | No | New objective |
| `add_test_case_ids` | array of strings | No | Cases to add, each becomes a new instance |
| `configuration_id` | number | No | Set one Configuration on the run's instances |
| `configuration_ids` | array of numbers | No | Append additional instances per configuration |
| `apply_to_test_case_ids` | array of strings | No | With a configuration input, only apply to these cases |
| `milestone_ids` | array of strings | No | Milestones to attach |
| `folder_id` | string | No | Move to this run folder |
| `assignee` | string | No | Assign the run's instances (`none` clears) |
| `is_sequential` | boolean | No | KaneAI runs only |
| `archive` | boolean | No | Archive (close) the run |

**Output:** the updated run.

**Example prompt:**

> "Add TC-150 and TC-151 to the Sprint 47 Regression run and mark the run In Progress."

#### tm_get_test_runs

Fetches one run's detail with its result summary, or lists a project's runs with filters.

| Input | Type | Required | Description |
|---|---|---|---|
| `run_id` | string | No | When given, returns detail plus result summary |
| `project_id` | string | Conditional | Required when `run_id` is not given |
| `run_type` | string | No | `manual`, `kaneai`, or `automation`. The buckets are disjoint |
| `status` | string | No | `Not Started`, `In Progress`, `Passed`, `Failed`, or `Skipped` |
| `search` | string | No | Search runs by title |
| `folder_id` | string | No | Only runs in this folder |
| `page`, `limit` | number | No | Pagination |

**Output:** run detail with instance counts by status (passed, failed, skipped, not started, in progress) and pass rate, or the filtered run list. Every run carries `run_type` identifying KaneAI runs.

**Example prompts:**

> "Show the result summary of the Sprint 47 Regression run."

> "List all KaneAI runs in the Payments project."

#### tm_record_test_results

Records execution results on a manual run's instances, up to 500 per request, all or nothing. See [Recording Results in Bulk](#recording-results-in-bulk).

| Input | Type | Required | Description |
|---|---|---|---|
| `run_id` | string | Yes | Test run id |
| `results` | array of objects | Yes | Up to 500 results. Each has `status` (required: `Passed`, `Failed`, `Skipped`, or `Not Started`), `instance_id` or `test_case_id` to target the instance, optional `remarks`, optional `assignee`, and optional `steps` with per-step `status` and `remarks` |

**Output:** a confirmation of every recorded result, echoing per-step outcomes.

**Example prompt:**

> "In the Sprint 47 run, mark TC-101 to TC-140 as Passed and fail TC-141 with the remark payment timeout on 3DS."

### Milestones

#### tm_create_milestone

Creates a [milestone](/support/docs/milestone-creation-and-management/) in a project. New milestones start as Open.

| Input | Type | Required | Description |
|---|---|---|---|
| `project_id` | string | Yes | Project id |
| `title` | string | Yes | Milestone title |
| `description` | string | No | What this milestone covers |
| `start_at` | string | No | Start date (YYYY-MM-DD) |
| `end_at` | string | No | End date (YYYY-MM-DD) |
| `owner` | string | No | Milestone owner, an organization member (email, username, or user id) |
| `tags` | array of strings | No | Labels |
| `test_run_ids` | array of strings | No | Existing runs to attach |

**Output:** the created milestone with its milestone id.

**Example prompt:**

> "Create a Sprint 47 milestone from 2026-07-20 to 2026-08-02 owned by priya@example.com."

#### tm_update_milestone

Updates a milestone or changes its status between Open and Complete.

| Input | Type | Required | Description |
|---|---|---|---|
| `milestone_id` | string | Yes | Milestone id |
| `project_id` | string | Yes | Project id |
| `title` | string | No | New title |
| `description` | string | No | New description |
| `start_at` | string | No | New start date (YYYY-MM-DD) |
| `end_at` | string | No | New end date (YYYY-MM-DD) |
| `status` | string | No | `Open` (reopen) or `Complete` |
| `owner` | string | No | Change the milestone owner |
| `tags` | array of strings | No | Replaces the current tags |

**Output:** the updated milestone.

**Example prompt:**

> "Mark the Sprint 47 milestone as Complete."

#### tm_get_milestone

Fetches one milestone's detail with live completion progress, or lists a project's milestones.

| Input | Type | Required | Description |
|---|---|---|---|
| `milestone_id` | string | No | When given, returns detail plus progress |
| `project_id` | string | Conditional | Required when `milestone_id` is not given |

**Output:** milestone detail with attached runs and completion progress, or the project's milestone list.

**Example prompt:**

> "How far along is the Sprint 47 milestone?"

### Issue Tracking and Coverage

Linking a run result also links its test case and run. Both linking tools need the corresponding integration set up for your organization first. If it is not, the tool returns a clear "set up the integration first" message.

#### tm_link_jira_issue

Links a test case, test run, or run result to a [Jira issue](/support/docs/link-jira-issues-with-test-manager/). Linked test cases are what give the issue its test coverage and traceability.

| Input | Type | Required | Description |
|---|---|---|---|
| `entity_type` | string | Yes | `test_case`, `test_run`, or `test_run_instance` |
| `entity_id` | string | Yes | Id of the case, run, or instance |
| `issue_id` | string | Yes | Jira issue key, for example PROJ-123 |

**Output:** confirmation of the link.

**Example prompt:**

> "Link test case TC-88 to Jira issue PROJ-456."

#### tm_link_ado_issue

Links a test case, test run, or run result to an [Azure DevOps work item](/support/docs/link-ado-issues-with-test-manager/) by its URL.

| Input | Type | Required | Description |
|---|---|---|---|
| `entity_type` | string | Yes | `test_case`, `test_run`, or `test_run_instance` |
| `entity_id` | string | Yes | Id of the case, run, or instance |
| `project_id` | string | Yes | Project the entity belongs to |
| `work_item_url` | string | Yes | The work item URL, for example `https://dev.azure.com/<organization>/<project>/_workitems/edit/165` |

**Output:** confirmation of the link.

**Example prompt:**

> "Link the Sprint 47 Regression run to the Azure DevOps work item at https://dev.azure.com/acme/web/_workitems/edit/165."

#### tm_get_coverage_summary

Test coverage for a project, overall and per folder, computed live from the project's test cases. Pass a Jira key for requirement traceability coverage.

| Input | Type | Required | Description |
|---|---|---|---|
| `project_id` | string | Yes | Project id |
| `folder_id` | string | No | Optional folder scope |
| `jira_id` | string | No | A Jira issue key, scopes coverage to the cases linked to that requirement |

**Output:** case counts and automation coverage, overall and per folder. With `jira_id`, the cases linked to that requirement and how many are automated. A scope with no cases returns all zeros.

**Example prompts:**

> "Which folders in the Payments project have the lowest automation coverage?"

> "What is the test coverage for Jira issue PROJ-123?"

## Generating Test Cases with AI

---

`tm_generate_test_cases` drives the same [AI test case generation](/support/docs/generate-test-cases-with-ai/) you get in the Test Manager UI, applying your Project and Organization Instructions automatically. A few behaviors worth knowing:

- **Generation is asynchronous.** The call returns fast with a `request_id` and a browser progress URL. Generation takes roughly 30 to 90 seconds. The assistant polls with the `request_id` to check progress and fetch results.
- **Volume is capped at 50 cases per call.** Volume = scenarios x cases per scenario (both default to 3).
- **Review before saving.** By default all generated cases are saved into the chosen folder, one sub-folder per scenario. Pass `auto_save: false` to review first. That choice persists across polls, and nothing is saved until the assistant calls again with the `request_id` and `auto_save: true`.
- **Ground the generation with context.** Reference files (requirement docs, specs, spreadsheets, screenshots) can be attached, and Jira issue keys can be passed as requirement context.

:::note
AI generation consumes AI generation credits, the same as generating from the UI.
:::

## Working with Configurations

---

Configurations are reusable platform, browser, OS, and device setups, created in the Test Manager UI and referenced by id. Two parameters control how they apply to a run:

- `configuration_ids` (plural) applies **multiple** Configurations: each targeted test case gets one instance per Configuration (case x configuration), like the Add Configuration checkboxes in the UI. On update it appends new instances and leaves existing ones untouched.
- `configuration_id` (singular) sets **one** Configuration on the run's instances. On update this follows the UI's latest-selection behavior and replaces an instance's current Configuration.

:::tip
To apply several Configurations, or to add one without touching what is already applied, use `configuration_ids`.
:::

## KaneAI Test Runs

---

Test runs are manual by default. Passing `run_type: "kaneai"` to `tm_create_test_run` creates a KaneAI run instead:

- Only KaneAI-authored test cases with completed code generation can be included. Mixing in a manual case is rejected with a clear message and nothing is written.
- Configurations applied to a KaneAI run must be KaneAI-supported and platform-compatible with each case. `tm_list_configurations` accepts a `run_type` filter to show only usable ones.
- Instances can be set to execute sequentially with `is_sequential`.
- A KaneAI run's status and results are managed by KaneAI executions. Manual status updates and manual result entry on a KaneAI run are rejected.

Every run returned by `tm_get_test_runs` carries a `run_type` field of `kaneai` or `manual`, and the run list filters by `run_type` into three disjoint buckets: `manual`, `kaneai`, and `automation` (framework-uploaded runs).

## Recording Results in Bulk

---

`tm_record_test_results` records execution results on a manual run's instances, targeting each by `instance_id` or simply by `test_case_id`:

- **Up to 500 results per request, all or nothing.** Larger requests are rejected cleanly and nothing is recorded.
- Instance statuses are `Passed`, `Failed`, `Skipped`, or `Not Started`, each with optional remarks and an assignee.
- Individual test steps and BDD scenario rows can be marked with per-step statuses and remarks, like the per-step Mark Status in the UI.
- Instance results are independent of the run's **overall** status. The overall status (`Passed`, `Failed`, `Skipped`, `In Progress`) is set separately through `tm_update_test_run`.

## How to Invoke

---

Once your MCP client is connected, use natural language. Example prompts:

- "List my Test Manager projects and show the folder tree for the Payments project."
- "Generate 15 checkout test cases from this PRD into the P0 Regression folder, must-haves as High priority."
- "Create a Sprint 47 milestone and a regression run of all High priority cases from the Checkout folder, apply our Chrome Windows and iOS Safari configurations, and attach the run to the milestone."
- "Mark TC-101 to TC-140 as Passed in run Sprint 47 Regression, and fail TC-141 with remark 'payment timeout on 3DS'."
- "Which folders in this project have the lowest automation coverage?"
- "What is the test coverage for Jira issue PROJ-123?"
- "Link test case TC-88 to Jira issue PROJ-456."

## Guardrails

---

The tool set is designed so an assistant cannot cause data loss or overload shared systems:

- **No delete tools.** Nothing through the connection deletes a project, folder, test case, run, or milestone. Removal stays a human action in the Test Manager UI. Runs can be archived through `tm_update_test_run`.
- **Reusable scaffolding stays human-owned.** Modules and Configurations are created in the UI. The assistant fetches and references them by id.
- **Only open runs can be updated.** Updating a closed or archived run returns a clear message instead of failing silently.
- **Volume caps are all or nothing.** 50 generated cases per call, 500 recorded results per request. Nothing partial is ever written.
- **Errors are plain and recoverable.** Missing integrations, permission limits, and oversized requests each return a message saying what happened and what to do next.

## Error Handling

---

If a referenced id is invalid or a precondition is not met, the tool responds with a plain-language message, for example:

> "A KaneAI run only takes KaneAI-authored test cases. Incompatible: TC-611. Nothing was written."

> "Jira is not set up for this organization. Set up the Jira integration first."

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'>
        Test Manager MCP Tool
      </span>
    </li>
  </ul>
</nav>
