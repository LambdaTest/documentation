# Migrating from Zephyr Enterprise to Test Manager

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Move your test case library from **Zephyr Enterprise** into TestMu AI Test Manager using CSV import.

## What migrates

| Carried over | Not carried over |
|---|---|
| Name → Title, Description | File attachments|
| Test Steps + Expected Results, in order | Test Cycles, Phases, Test Executions |
| Priority, Tags | Version history (restarts at import) |
| Folder hierarchy (from full folder paths) | Test case owner (you become creator of all) |
| Custom fields | |
| Test Data, case Comment (as custom fields) | |
| Alt ID / Mapping Requirement → Jira links | |
| Zephyr test case ID (as a custom field) | |

Test Manager's **Precondition**, **Status**, and **Type** have no Zephyr Enterprise source field. Leave them unmapped so imported cases take the project default, or add a column to your CSV and map it.

## Prerequisites

**Zephyr Enterprise:** access to the Test Repository and export permission. Note which release's repository you're exporting — project-level and release-level repositories are separate.

**TestMu AI Test Manager:** Test Manager access, permission to create projects and edit test cases, and two things done before import:

- [Custom fields](/support/docs/system-and-custom-fields/) created and linked to the target project
- [Jira instance connected](/support/docs/link-jira-issues-with-test-manager/), if you want ticket links

## Step 1: Export from Zephyr Enterprise

Zephyr Enterprise has no "Export to CSV" button. The export dialog offers report formats — PDF, HTML, Word, and an Excel (data) report in most current versions. Use **Excel**; it's the only structured output.

1. Go to **Test Repository**, select the release, then tick the test cases you want, or use the option beside a folder and choose **Export Tests**.
2. In the dialog:
   - **Report type:** `Detailed` — the Summary report omits test steps, and Test Data is only available on Detailed.
   - **Select fields:** tick generously — it's easier to ignore a column at import than to re-export.
   - **Output file:** `Excel`
3. Click **Save**, then **Download**.

**Fields to select** (Zephyr's own field names): Name, Alt ID, Priority, Tags, Description, Comment, Mapping Requirement, Test Steps (Step, Test Data, Expected Result), folder/phase path, and your custom fields.

Two things to tick deliberately:

- **The folder/phase path.** If your export carries the complete path per test case rather than just the leaf folder, Test Manager rebuilds your whole hierarchy on import — no manual folder creation. The separator must be `>`, `/`, or `.`; anything else needs converting first. See Step 2.
- **Alt ID**, if you use Jira. It holds the Jira ID for linked test cases and is the cleanest source for Test Manager's **Link Jira** field.

Zephyr Enterprise has no Precondition, Status, or Type field on a test case — Test Manager has all three. Teams usually keep preconditions at the top of the Description, in a custom field, or as the first test step, so check where yours live before exporting.

**Export folder by folder, not the whole release**
TestMu AI caps CSV uploads at **10 MB**, and a detailed multi-row export hits that fast. Folder-level exports also give you checkpoints if something goes wrong.

## Step 2: Prepare the CSV

**Convert to CSV.** Use **File > Save As > CSV UTF-8 (Comma delimited)**. Pick the UTF-8 variant specifically — plain CSV uses your system encoding and corrupts accented and non-Latin characters.

**Check your folder path column.** Test Manager rebuilds your entire folder hierarchy from a single column containing the full path — you don't create folders manually or import folder by folder. Map that column to **Folder**, tell the importer which delimiter separates the levels, and each test case lands in the right place, with any missing folders created automatically.

The importer offers three delimiters, plus a no-split option:

| Option | Splits on | Example path |
|---|---|---|
| **Split by (>)** | `>` | `Regression > Checkout > Payment` |
| **Split by (/)** | `/` | `Regression/Checkout/Payment` |
| **Split by (.)** | `.` | `Regression.Checkout.Payment` |
| **Plain text** | nothing | Whole value becomes one folder name, no hierarchy |

If your Zephyr export uses any other separator — `\`, `|`, `::`, `-` — find-and-replace it with `>`, `/`, or `.` in your spreadsheet before importing. Anything else won't split.

Then open your export and check what the folder column contains:

- **Full path already present** → map it and select the matching delimiter.
- **Only the leaf folder name** → your cases will all sit at one level. Rebuild the path before importing.
- **Levels split across separate columns** → join them: `=TEXTJOIN("/",TRUE,D2,E2,F2)`

Rows with no folder value land in a folder called **Untitled**. Keep folder names within **100 characters** — longer names are truncated.

**Check your folder names don't contain the delimiter**
A folder called `Login / Logout` split by `/` silently becomes two folders. This bites hardest with **Split by (.)** — periods are common in names like `v2.1 Regression` or `Module 3.4`. If your names contain the separator, switch to one of the other two.

**Clean up:**

- Rich text may export as raw HTML (``, ``) — strip it or accept it.
- Attachment links point back at your Zephyr server and import as plain text.
- Remove blank titles (those rows get skipped).
- Check for duplicate titles — they import fine, but they make test cases hard to tell apart afterwards.
- Line breaks and commas inside quoted cells are fine; spot-check the file in a text editor.

**Add a Zephyr ID column** if it didn't export. Map it to a custom field for permanent traceability back to the source. (Tags truncate at 48 characters, so use a custom field for long IDs.)

## Step 3: Set up the target project

1. Go to **Test Manager Projects** and create the project.
2. Go to **Project Settings > Custom Fields** and create every custom field your CSV carries, with the right type (dropdown, date, user, checkbox). You can create them inline during import via **Add New Field**, but doing it now gives you control over field types and speeds up mapping.
3. [Connect Jira](/support/docs/link-jira-issues-with-test-manager/) if you use it. If you forget, links resolve automatically once the integration is added later.

Decide whether Zephyr releases become separate projects or top-level folders. Folders usually win — everything stays searchable in one place.

## Step 4: Import

**Upload.** Open the project and go to **Add Test Case > Import CSV** (or use **Drop your CSV or browse** on an empty project). Select the layout:

| Layout | Use when |
|---|---|
| **Test cases use multiple rows** | Standard for a Zephyr Detailed export — each step is its own row |
| **Test cases use a single row** | Steps combined in one cell, numbered inline |

Check the preview's valid-row count. If it looks wrong, fix the file rather than continuing.

**Map fields.** Mapping a column to **Title** is mandatory. Leave unwanted columns as **Ignore Field** — they're never written. Columns with no matching field can become custom fields via **Add New Field**.

**Map values.** Existing system field values map automatically; use **Create new value** for ones that don't exist (for example, Zephyr's "Blocker" → Test Manager's "Critical").

Then set the **Folder Delimiter** — the options are **Split by (>)**, **Split by (/)**, **Split by (.)**, and **Plain text**. Pick the one matching your folder column and the importer builds the full hierarchy, creating any folders that don't yet exist. Choose **Plain text** only if you want each value treated as a single flat folder name.

**Preview and import.** Nothing is written until you confirm. The importer checks every row and reports what it will do:

| Summary | Meaning |
|---|---|
| **Will be created new** | A new test case is created and assigned a Test Case ID |
| **Needs attention (Skipped)** | The row can't be applied and will be ignored |

On a first migration into an empty project, every row should fall under **Will be created new**. If you see a meaningful number of skipped rows, stop and investigate before importing — use **Download Skipped Rows (CSV)** to get each one with its reason, fix them in your spreadsheet, and import that file separately.

Keep the tab open while the file prepares — closing or refreshing cancels preparation. Once the import is running you can navigate away; it continues in the background.

For the full behaviour of each import step, see [Import Test Cases from CSV](/support/docs/csv-import/).

## Step 5: Verify

- Test case count and folder structure match the export.
- Nothing unexpected in the **Untitled** folder.
- Spot-check 5 cases across different folders: steps present and in order, expected results aligned, preconditions, priority, custom fields, tags.
- Check the awkward ones: longest test case, heaviest formatting, non-English characters, deepest folder path.
- Jira links resolve correctly.
- Skipped rows report reviewed, fixed, and re-imported.

## Handling what CSV can't carry

- **Attachments** — keep Zephyr accessible read-only so exported links keep working, re-upload the critical ones manually, or bulk-move files to shared storage and swap the URLs in your CSV before importing. Most teams do a mix of the last two.
- **Executions and cycles** — export execution reports to PDF/HTML from Zephyr's Test Execution section and archive them before decommissioning. Plan a clean break: finish the current cycle in Zephyr, start the next in Test Manager.
- **Requirements** — if they're Jira tickets, map your ticket-key column to **Link Jira**. If they're native Zephyr requirements, bring them across as a custom field and rebuild links in your chosen tool.
- **Owners** — add an `Original Owner` custom field; the import assigns you as creator regardless.

## Troubleshooting

| Problem | Fix |
|---|---|
| Test steps or Test Data missing from export | Re-export with report type **Detailed** |
| No Excel option in the export dialog | Check with your Zephyr admin; otherwise script the export via the REST API |
| "File couldn't be read as CSV" | Often an `.xlsx` renamed — re-save properly as CSV UTF-8 |
| "Over the 10 MB limit" | Split by folder, import sequentially |
| Accented/non-Latin characters corrupted | Re-save as **CSV UTF-8** specifically |
| Everything in the **Untitled** folder | No folder column mapped, or the values are blank — map the folder path column |
| Folder tree flat instead of nested | Your separator isn't one of the three supported (`>`, `/`, `.`) — find-and-replace it in the CSV. Or **Plain text** was selected, or the column holds only the leaf folder name |
| Folders created with odd names or stray characters | The delimiter also appears inside a folder name (for example, `.` in `v2.1 Regression`) — switch to a separator your names don't contain |
| Steps split across separate cases | Wrong CSV layout — choose **Test cases use multiple rows** |
| All steps in one case | Case-level values must repeat on every step row |
| Custom fields empty or missing | Create and link them under **Project Settings**, then re-import |
| Jira links missing | Connect the integration — existing cases link automatically |
| Duplicate test cases after importing | The same file was imported twice, or overlapping folder exports contained the same cases — delete the duplicates and re-import once |
| Import stopped partway | Rows already written stay written. Check what was created before re-importing, and import only the remainder, otherwise you'll get duplicates |
| Folder names or tags cut off | 100-character limit on folders, 48-character limit on tags |

## Mapping reference

Both products name things differently. Read this section once before you export — it saves most of the guesswork.

### A. Structure: how the two hierarchies line up

Zephyr Enterprise organizes work as **Project → Release → Test Repository → folders → Test Case**. Test Manager is flatter: **Project → Folder (nested) → Test Case**.

| Zephyr Enterprise | TestMu AI Test Manager | How to handle it |
|---|---|---|
| Project | Project | Direct match. One Zephyr project → one Test Manager project. |
| Release | No direct equivalent | Releases are a Zephyr-only layer. Either make each release a top-level folder (keeps everything searchable in one project — recommended), or a separate project if teams are genuinely independent. |
| Test Repository | Test Case listing | The library itself. |
| Repository folder / node | Folder | Nested folders on both sides. Reconstructed from your folder path column. |
| Test Case | Test Case | Direct match. |
| Test Step | Step | Direct match, order preserved. |
| Test Planning → Test Cycle | Test Run | Not migrated by CSV. Recreate the cycles you still need. |
| Planning Phase | Test Run (or Milestone) | A Zephyr cycle's phases usually become separate runs. |
| Test Execution | Test Run execution | Not migrated. Archive from Zephyr first. |
| Requirement | Linked Jira issue | Via Issue Tracker integration. |
| Defect | Linked Jira issue | Via Issue Tracker integration. |

**The Release layer is the one decision to make before you start**
Zephyr keeps a separate repository per release, so the same test case can exist in several releases. Test Manager has one library per project. Decide whether you're migrating one release, several as sibling folders, or consolidating to a single current set — and de-duplicate before exporting, or you'll import the same test case several times.

### B. Test case fields

Zephyr Enterprise's test case fields are Name, Alt ID, Priority, Tags, Description, Comment, Mapping Requirement, Test Steps, Attachments, plus any custom fields your admin has configured. This maps them to Test Manager's fields and to the target you choose during **Map fields**.

| Zephyr Enterprise field | TestMu AI field | Import mapping target | Notes |
|---|---|---|---|
| Name | Test Case Title | `Title` | Mandatory on both sides. Zephyr defaults unnamed cases to "Untitled" — search for those before exporting. |
| Description | Description | System field | May carry HTML from Zephyr's rich text editor. |
| Priority | Priority | System field | Values mapped at the **Map values** step. |
| Tags | Tag(s) | System field | 48-character limit per tag. |
| Test Steps → Step | Step | `Steps` | One row per step in a Detailed export. |
| Test Steps → Expected Result | Expected Outcome | `Outcome` | Aligns to its step by row. |
| Test Steps → Test Data | No equivalent | Custom field | Or fold into the step text. Only exported on the Detailed report. |
| Test Steps → Comment | No equivalent | Custom field | Step-level comments have no home; usually safe to drop. |
| Comment (case level) | No equivalent | Custom field | |
| Alt ID (Jira ID) | Jira link | `Link Jira` | This is your cleanest Jira mapping — Alt ID is populated when a case is linked to or imported from Jira. |
| Mapping Requirement | Linked Jira issue | `Link Jira` or custom field | Use **Link Jira** if requirements are Jira issues; a custom field if they're native Zephyr requirements. |
| Repository folder path | Folder | `Folder` | Full path in one column. Delimiter must be `>`, `/`, or `.` — convert anything else first. Missing folders are created automatically. |
| Attachments | Attachments | Not mappable | CSV carries text only. Zephyr exports these as links back to your server. |
| Custom fields | Custom fields | Custom field | Create them in Test Manager before importing. |
| Zephyr test case ID | — | Custom field | Keep it — your permanent link back to Zephyr for audits and reconciliation. |
| Zephyr version | Version History | Not mappable | Versioning restarts in Test Manager at import. |

### C. Value mapping

Field mapping connects columns; value mapping connects the contents. Zephyr's priority scheme is admin-configurable, so yours may not match Test Manager's out of the box:

| Typical Zephyr Enterprise value | Map to | Or |
|---|---|---|
| Blocker / Critical | Highest | Create new value |
| High | High | |
| Medium / Normal | Medium | |
| Low / Minor | Low | |
| Trivial | Lowest | Create new value |

Do the same for any custom dropdown fields. Where a Zephyr value has no sensible home, **Create new value** adds it rather than forcing a bad match — but agree the scheme with your team first, or you'll end up with both "Blocker" and "Critical" in the same project.

## Why this migration uses CSV

Test Manager offers [one-click migration](/support/docs/one-click-migration-from-zephyr-scale/) for some tools, which works by calling the source tool's API directly from our servers. That approach isn't available for Zephyr Enterprise:

- Your instance is self-hosted. Its API lives at `https://your-zephyr-server/flex/services/rest/`, usually behind a corporate firewall, so our servers have no route to it.
- Authentication uses your Zephyr username and password, or a session cookie that expires in ~9 minutes — not a model suited to a third-party service.
- Endpoints differ across Zephyr 6.x, 7.x, and 8.x, and the API is documented mainly for importing *into* Zephyr, with no single bulk-export endpoint.

CSV import keeps the data in your hands and needs no network or firewall changes.

## Reference documentation

Behaviour described in this guide comes from the Test Manager product docs:

| Topic | Doc |
|---|---|
| Layouts, field mapping, preview, skipped rows | [Import Test Cases from CSV](/support/docs/csv-import/) |
| Creating custom fields before import | [System and Custom Fields](/support/docs/system-and-custom-fields/) |
| Connecting Jira before import | [Link Jira Issues with Test Manager](/support/docs/link-jira-issues-with-test-manager/) |
| Editing fields in bulk after import | [Bulk Update Test Case Fields](/support/docs/bulk-update-fields/) |
| Exporting from Test Manager to verify results | [Export Test Cases](/support/docs/export-test-cases/) |
| Organizing test cases after import | [Copy and Move Test Cases](/support/docs/copy-and-move-support-for-test-cases/) |
