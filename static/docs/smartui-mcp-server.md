# Getting Started with SmartUI MCP Tool

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

SmartUI MCP Tool is part of the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/). It lets your AI client find SmartUI projects, builds and comparisons, read the CI gate verdict of a build, inspect the mismatch and screenshots of a comparison, and approve or reject changes, without opening the SmartUI dashboard.

## How Does It Work?

SmartUI data is nested: a project contains builds, and a build contains one comparison per screenshot. The tools follow the same path. Your AI client lists projects to get a `project_id`, lists the builds in that project to get a `build_id`, and lists the comparisons in that build to get a `comparison_id` and an `ss_id`. It then analyzes or reviews those comparisons. You can start from a project or build name, and the client looks up the ids for you.

A screenshot gets a `comparison_id` only after SmartUI has compared it with a baseline. A new screenshot with no baseline, or one that is still being processed, has an `ss_id` but no `comparison_id` yet.

## Tools

| Tool | What it does | Changes your project |
|---|---|---|
| `smartui_project_query` | Lists SmartUI projects, with an optional name search, or gets one project with its settings: baseline branch, approvers, Smart Baseline, auto-approval branch, overwrite screenshot, platform and project type. | No |
| `smartui_build_query` | Lists the builds in a project (filter by branch, status or name), gets one build, or returns the CI gate verdict for a build. | No |
| `smartui_comparison_query` | Lists the comparisons in a build (filter by status or minimum mismatch), or gets one comparison with its mismatch percentage, status, and the URLs of the baseline, current and diff images. | No |
| `smartui_comparison_analyze` | Analyzes one comparison through a lens: `consolidated` (default), `pixel` or `dom`. | No |
| `smartui_screenshot_review` | Approves or rejects comparisons, either by id or every comparison in a build that has a given status. It reads the status back after writing and reports which items were updated and which failed. | Yes |
| `smartui_baseline_manage` | Merges baselines across branches or builds, then reports the final status of the merged build. | Yes |
| `smartui_screenshot_upload` | Uploads screenshots to a project as a new build, optionally as a baseline. On the hosted server, pass public image URLs (up to 20); the server cannot read files on your machine. | Yes |

### CI Gate Verdict

`smartui_build_query` with `action=gate` returns one verdict for a build: `passed`, `failed`, `pending_approval`, `running` or `error`. It also returns the number of screenshots per status, the screenshots that are in the baseline but missing from the build, and the comparisons that block the build. A build that dropped baseline screenshots is `failed`, even if no comparison was rejected. Use this in a pipeline after `smartui_screenshot_upload` or your usual SmartUI capture step.

### Analysis Lenses

- **consolidated** (default): returns the comparison data, that is the mismatch percentage, the status, and the URLs of the baseline, current and diff images.
- **pixel**: returns the same data, focused on the diff image.
- **dom**: downloads the DOM snapshots of the baseline and the current screenshot and reports whether they are identical and how much their size differs. It does not list which elements changed. If the build has no DOM snapshot, it returns an error that says so.

The `consolidated` and `pixel` lenses report the numbers SmartUI has already computed. They do not run a separate image analysis. Any written explanation of a change comes from your AI client reading this data and the images.

By default the tool returns image URLs. If your AI client cannot open URLs, set `include_assets` to `inline` and the images are attached to the result: the diff image for `pixel`, and the baseline, current and diff images for `consolidated`. Images over 1.5 MB, or past 2.25 MB in total, are skipped and listed by URL instead.

`smartui_screenshot_review`, `smartui_baseline_manage` and `smartui_screenshot_upload` change your project.

- Approving comparisons on the baseline branch can make that build the new baseline.
- A merge permanently changes the baseline: the merged build becomes the baseline. If the merge fails or ends with no screenshots, the baseline is left on an empty build, and the tool returns an error.

These tools declare that they modify data, so MCP clients that use tool annotations ask you to confirm before running them.

## How to Invoke

Once your MCP client is connected, use natural language. Example prompts:

- "List my SmartUI projects and show the settings of the checkout project."
- "Did the latest build in my checkout project pass the visual gate? Which screenshots block it?"
- "Show the comparisons with more than 5% mismatch in build ``."
- "Analyze comparison `` and check whether the DOM changed."
- "Approve every comparison with changes in build ``."
- "Upload the screenshots at these URLs to my checkout project as a new baseline."

Your AI client chains the tools in order, for example project, then build, then comparisons, and returns the result inline.
