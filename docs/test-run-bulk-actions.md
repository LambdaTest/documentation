---
id: test-run-bulk-actions
title: Bulk Move, Copy, and Delete Test Runs in Test Manager
hide_title: true
sidebar_label: Bulk Move, Copy & Delete Test Runs
description: Move test runs between folders without losing execution history, copy them into a fresh run for the next cycle, or delete them in one action in Test Manager.
keywords:
  - move test runs
  - copy test runs
  - delete test runs
  - bulk actions test runs
  - test run folders
  - test manager
url: https://www.testmuai.com/support/docs/test-run-bulk-actions/
site_name: TestMu AI
slug: test-run-bulk-actions/
canonical: https://www.testmuai.com/support/docs/test-run-bulk-actions/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Bulk Move, Copy, and Delete Test Runs in Test Manager",
          "item": `${BRAND_URL}/support/docs/test-run-bulk-actions/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/test-run-bulk-actions/"
    },
    "headline": "Bulk Move, Copy, and Delete Test Runs in Test Manager",
    "description": "Move test runs between folders without losing execution history, copy them into a fresh run for the next cycle, or delete them in one action in Test Manager.",
    "url": "https://www.testmuai.com/support/docs/test-run-bulk-actions/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Test Manager",
    "keywords": [
      "move test runs",
      "copy test runs",
      "delete test runs"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-09-14T12:00:00+05:30"
  }) }}
/>

# Bulk Move, Copy, and Delete Test Runs

Teams organize test runs into folders that mirror their releases, sprints, or modules. Those structures change over time. A release gets renamed, sprints get merged, or a module is split in two. At the same time, the same scope is often run again every cycle, such as a regression suite, a release sign-off, or a per-environment pass. And once a release is closed, its folder fills up with runs that nobody needs any more.

<BrandName /> Test Manager lets you act on many test runs at once:

- **Move** runs to another folder. They keep their ID, URL, and full execution history.
- **Copy** runs into another folder as fresh runs with the same test cases, ready to execute again.
- **Delete** a selection of runs in one action.

---

## At a glance

| | Move | Copy | Delete |
|---|---|---|---|
| **Source run** | Relocated to the destination folder | Left unchanged in its current folder | Removed |
| **Run ID and URL** | Unchanged | The copy gets a new ID and URL | Removed |
| **Execution results and history** | Kept with the run | Not copied. Every test instance in the copy starts at **Not Started** | Removed |
| **When it completes** | Immediately | In the background, run by run | Immediately |
| **Runs that are In Progress** | Moved | Copied | Skipped and reported |

All three actions work within a single project. Test runs cannot be moved or copied to a different project.

---

## Select test runs

1. Open your project in Test Manager and go to the **Test Runs** tab.
2. In the **Folders** panel, choose the section to work in. Use search or filters to narrow the list if needed.
   - **All Test Runs** lists test runs across all folders in the project.
   - A folder lists only the test runs in that folder.
3. Select the test runs you want to act on using their checkboxes. The number of selected runs is shown above the list.
4. To select every test run in the chosen section, use the checkbox at the top of the list, or click **Select all *N* test runs**. From **All Test Runs**, this selects runs across all folders. From a folder, it selects only the runs in that folder.
5. With runs selected, the bulk action options **Move test runs**, **Copy test runs**, and **Delete test runs** appear above the list. Hover over an option to see its name.

<!-- screenshot: Test Runs list with multiple runs selected, showing the selected count, the Select all test runs link, and the Move test runs, Copy test runs, and Delete test runs options -->

:::note
A single bulk action covers up to **1000 test runs**. If you use **Select all *N* test runs** and the selection comes to more than 1000 runs, the action is rejected and you are told about the limit. Narrow the list with a folder, search, or filters, or work in batches.
:::

---

## Move test runs

Moving a test run changes only the folder it lives in. Nothing else about the run changes.

1. Select the test runs and click **Move test runs**.
2. In the folder picker, choose the destination folder.
3. Confirm the move.

<!-- screenshot: folder picker for moving test runs -->

<!-- screenshot: confirmation after test runs are moved -->

What to expect:

- **The run is the same run.** Its ID, URL, test instances, statuses, remarks, attachments, and linked issues all stay as they were. Any link or bookmark to the run keeps working.
- **Runs already in the destination folder are left as they are.** They are reported as already in that folder, not as a failure.
- **The move completes straight away.** You do not need to wait for a background job.
- **Runs that are In Progress can be moved.** Anyone executing the run can carry on.

---

## Copy test runs

Copying creates a new test run that has the same scope as the original but no results. Use it to repeat a regression suite, a release pass, or an environment-specific run without rebuilding it by hand.

1. Select the test runs and click **Copy test runs**.
2. In the folder picker, choose the destination folder. This can be the same folder the runs are already in.
3. Confirm the copy.

<!-- screenshot: folder picker for copying test runs -->

### What a copy contains

| Carried into the copy | Not carried into the copy |
|---|---|
| Test cases in the run | Test instance statuses. Every instance starts at **Not Started** |
| Configurations for each test instance | Who executed each instance, and when |
| Assignees | Remarks and actual results |
| Order of test instances | Linked issues |
| Tags | Archived test cases |

Archived test cases are left out of a copy. See [Archive and Restore Test Cases](/support/docs/test-case-archive/).

### How copies are named

Each copy is named `Copy of <original name>`. If a run with that name already exists in the destination folder, a number is added, for example `Copy of Regression Suite (2)`. A run with the same name in a *different* folder does not count as a clash.

Very long names are shortened so the copy stays within the title length limit, and the `Copy of` prefix is always kept.

### Tracking a copy

Copies are created in the background, so you can keep working while they run.

- **New runs appear in the destination folder one by one** as each copy starts. A run that is still being built shows as being prepared until its copy finishes.
- **A progress summary shows how the copy is going.** When it finishes, the summary lists how many runs were copied, how many failed and why, and how many were skipped.
- **A failed copy leaves nothing behind.** If a run cannot be copied, its partial copy is removed and the other runs in the selection carry on.
- **A run deleted before its turn is skipped.** If one of the selected runs is deleted after you start the copy but before it is reached, it is reported as skipped and the rest of the selection is unaffected.

<!-- screenshot: progress summary for a bulk copy of test runs -->

:::tip
You can copy the same test run more than once, and you can copy a run while someone is executing it. The copy takes only the run's structure, so results recorded during the copy never reach it.
:::

### Cancel a copy

You can cancel a bulk copy while it is running.

- Runs that have not finished copying are stopped, and their partial copies are removed.
- Runs that had already finished copying are kept.
- The summary tells you how many runs were stopped and how many had already finished.
- As soon as the cancel completes, the project is free for another bulk action.

If the copy finishes just before your cancel reaches it, the cancel does nothing and reports every run as already finished.

<!-- screenshot: cancelling a bulk copy of test runs -->

---

## Delete test runs

1. Select the test runs and click **Delete test runs**.
2. Review the confirmation and confirm the deletion.

<!-- screenshot: confirmation dialog for bulk deleting test runs -->

What to expect:

- **Deletion is permanent.** Deleted test runs cannot be restored from Test Manager.
- **Runs that are In Progress are never deleted.** They are skipped and listed as skipped, and the rest of the selection is deleted. This also applies to a run that starts executing after you confirm the deletion, so nobody loses work they are in the middle of.
- **The deletion completes straight away.**

:::note
If you want a completed run out of the way but still available for reference, archive it instead of deleting it. See [Test Run Options](/support/docs/test-run-creation-and-management/#7-test-run-options).
:::

---

## While a bulk action is running

### One bulk action per project

A project runs one bulk action on test runs at a time. While a move, copy, or delete is running, any other bulk action in that project is blocked with a message that a bulk operation is already in progress. This applies whoever starts it and whichever action it is. Wait for the current action to finish, or cancel a running copy, then try again.

Bulk actions in other projects are not affected.

### Runs being copied are protected

Until a run's own copy finishes, changes that would alter what gets copied are blocked on that run. For a run in a bulk copy, you cannot:

- Edit the run, for example to add or remove test cases
- Archive or delete the run
- Move the run to another folder
- Change a test instance's assignee, configuration, test case, or order

Execution is not affected. On the same run you can still:

- Execute test instances
- Update the status of test instances and test steps
- Add remarks and actual results

Each run is released as soon as its own copy completes, so you do not need to wait for the whole selection to finish. Runs in the selection that are still waiting for their copy are protected from the moment you start the copy. Every other test run in the project stays fully editable and executable throughout.

---

## Permissions

Bulk actions use the same test run permissions as their single-run equivalents:

| Action | Permission required on test runs in the project |
|---|---|
| Move | **Update** |
| Copy | **Create** |
| Delete | **Delete** |

Permissions apply across the whole project. If you can copy or move test runs, you can use any folder in that project as the destination.

See [RBAC Roles and Permissions](/support/docs/rbac-roles-and-permissions/) for how permissions are assigned.

---

## Limitations

- **Up to 1000 test runs per action.** Larger selections, including **Select all *N* test runs** when the view holds more than 1000 runs, need to be split into batches.
- **Within one project only.** Test runs cannot be moved or copied to another project.
- **One bulk action per project at a time.** A second bulk action in the same project is blocked until the first finishes.
- **Delete skips runs that are In Progress.** To delete them, wait until they finish, then delete them again.
- **Copies start without results or linked issues.** Only the run's structure is copied.
- **Deleting a folder is not blocked during a copy.** If you delete a folder that contains runs waiting to be copied, those runs are reported as skipped.
- **Runs with the same name copied together can end up with the same name.** If two selected runs share a name, both copies may be given the same numbered name, such as `Copy of Smoke Suite (2)`. Rename one afterwards if you need to tell them apart.

---

## Related resources

| Topic | Doc |
|---|---|
| Creating, editing, and archiving a single test run | [Test Run Creation and Management](/support/docs/test-run-creation-and-management/) |
| Linking bugs and issues to test runs | [Track Bugs and Issues in Test Runs](/support/docs/track-issues-in-test-runs/) |
| Moving and copying test cases | [Copy and Move Test Cases](/support/docs/copy-and-move-support-for-test-cases/) |
| Retiring test cases without deleting them | [Archive and Restore Test Cases](/support/docs/test-case-archive/) |
| Assigning permissions | [RBAC Roles and Permissions](/support/docs/rbac-roles-and-permissions/) |


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Bulk Move, Copy, and Delete Test Runs
      </span>
    </li>
  </ul>
</nav>
