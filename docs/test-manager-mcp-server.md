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

The Test Manager MCP Tool exposes 22 tools: 8 to read and discover, 14 to act.

### Projects

| Tool | What it does |
|---|---|
| `tm_list_projects` | Lists every project your account may see, with keyword search and pagination |
| `tm_create_project` | Creates a new project with a name, description, and tags |
| `tm_update_project` | Updates a project's name, description, or tags |

:::note
Project and Organization Instructions (the Memory Layer) stay managed in the Test Manager UI. The AI generator applies them automatically.
:::

### Folders and Modules

| Tool | What it does |
|---|---|
| `tm_list_folders` | Returns a folder tree: per-project Test Cases and Test Runs trees, or the organization-level Modules tree |
| `tm_create_folder` | Creates a folder in any of the three trees, optionally nested under a parent |
| `tm_update_folder` | Renames a folder, changes its description, or moves it under a different parent |
| `tm_list_modules` | Lists the organization's reusable step [Modules](/support/docs/create-modules/), with search and folder filters |

Modules are reusable step blocks shared across projects. The assistant references an existing Module by id when creating or editing a test case, which includes the Module's steps. The Module itself is never changed through the connection. Creating Modules stays in the Test Manager UI.

### Test Cases

| Tool | What it does |
|---|---|
| `tm_get_test_cases` | Finds cases by filters (folder, priority, automation status, type, tags) and full-text search. Pass a case id to get full detail: steps, BDD scenarios, and field values |
| `tm_create_test_case` | Creates a single case with steps, preconditions, priority, type, tags, and referenced Modules |
| `tm_update_test_case` | Edits a case. Only the fields you pass change. Passed steps replace the case's steps |
| `tm_generate_test_cases` | Generates structured cases from a requirement or prompt with the Test Manager AI generator |

Filters on `tm_get_test_cases` combine with AND, and keyword search needs at least 3 characters.

### Test Runs and Results

| Tool | What it does |
|---|---|
| `tm_list_configurations` | Lists saved run Configurations (reusable platform, browser, OS, and device setups) |
| `tm_create_test_run` | Creates a manual or KaneAI run from chosen cases, with Configurations, milestones, a run folder, and an assignee |
| `tm_update_test_run` | Updates an open run: overall status, title, added cases, Configurations, milestones, assignee, or archive |
| `tm_get_test_runs` | One run's detail with its result summary and pass rate, or a filtered run list |
| `tm_record_test_results` | Records execution results on a manual run's instances in bulk, up to 500 per request |

Each test case included in a run becomes a **test run instance**: the executable copy of that case inside the run, carrying its own status, remarks, and exactly one Configuration.

### Milestones

| Tool | What it does |
|---|---|
| `tm_create_milestone` | Creates a [milestone](/support/docs/milestone-creation-and-management/) with dates, owner, tags, and attached runs |
| `tm_update_milestone` | Updates a milestone or changes its status between Open and Complete |
| `tm_get_milestone` | One milestone's detail with live completion progress, or the project's milestone list |

### Issue Tracking and Coverage

| Tool | What it does |
|---|---|
| `tm_link_jira_issue` | Links a test case, run, or run result to a [Jira issue](/support/docs/link-jira-issues-with-test-manager/) |
| `tm_link_ado_issue` | Links a test case, run, or run result to an [Azure DevOps work item](/support/docs/link-ado-issues-with-test-manager/) by its URL |
| `tm_get_coverage_summary` | Test coverage for a project, overall and per folder. Pass a Jira key for that requirement's traceability coverage |

Linking a run result also links its test case and run. Both linking tools need the corresponding integration set up for your organization first. If it is not, the tool returns a clear "set up the integration first" message.

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
