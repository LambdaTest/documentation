---
id: smartui-audit-logs
title: SmartUI Audit & Activity Logs
sidebar_label: Audit & Activity Logs
description: Track and audit all significant actions in your SmartUI projects. Use project-, build-, and screenshot-level logs for accountability and compliance.
keywords:
  - SmartUI Audit Logs
  - Activity Logs
  - Visual Testing Audit
  - SmartUI Accountability
  - Audit Trail
  - Project History
  - Build History
  - Screenshot History
url: https://www.testmuai.com/support/docs/smartui-audit-logs/
site_name: LambdaTest
slug: smartui-audit-logs/
canonical: https://www.testmuai.com/support/docs/smartui-audit-logs/
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
          "name": "SmartUI Audit & Activity Logs",
          "item": `${BRAND_URL}/support/docs/smartui-audit-logs/`
        }]
      })
    }}
></script>

**Audit Logs** give you a permanent, searchable record of every important action in your SmartUI projects—who did it, when, and what changed. Use them for compliance, accountability, and tracing baseline history across projects, builds, and individual screenshots.

---

## Why use Audit Logs

| Need | How Audit Logs help |
| --- | --- |
| **Compliance & audits** | Immutable log of project and baseline changes with timestamps and actors. |
| **Accountability** | Every action is attributed to a user or the system; filter by person to review their impact. |
| **Baseline traceability** | See when a screenshot became the baseline, who approved it, and whether it was manual or automatic. |
| **Human vs system** | Clearly separate manual approvals/rejections from auto-approvals and system-driven changes. |
| **Bulk action clarity** | One log entry per bulk approve/reject, with a visual preview of which screenshots were included. |

---

## Where to look: project, build, or screenshot

Logs are available at three levels. Choose the level that matches what you need to prove or investigate.

| Level | Use it to | Access |
| --- | --- | --- |
| **Project** | Audit project creation/deletion, settings changes, and baseline merges. | <img loading="lazy" className='doc_img' width="480" src={require('../assets/images/smart-visual-testing/audit-history/access_project_level.png').default} alt="Entry point for Project-level logs" /> |
| **Build** | Audit build lifecycle, bulk approvals/rejections, and who changed what in a test run. | <img loading="lazy" className='doc_img' width="480" src={require('../assets/images/smart-visual-testing/audit-history/access_build_level.png').default} alt="Entry point for Build-level logs" /> |
| **Screenshot** | See full baseline and status history for a single asset (approvals, rejections, annotations). | <img loading="lazy" className='doc_img' width="480" src={require('../assets/images/smart-visual-testing/audit-history/access_screenshot_level.png').default} alt="Entry point for Screenshot-level logs" /> |

---

## Tracking baseline and screenshot history

Use this table to go straight to the right log and filters.

| What you need | Where | What to do |
| --- | --- | --- |
| When the project baseline was merged or updated | Project-level log | Filter by event type: *Merged to Baseline*, *Project Updated*. Check timestamp and actor. |
| Who approved/rejected screenshots in a build | Build-level log | Filter by event type (*Screenshot Approved*, *Screenshot Rejected*) and optionally by User. |
| Full history of one screenshot (approvals, rejections, annotations) | Screenshot-level log | Open the screenshot → open its Audit Log. Timeline shows every change. |
| Which screenshots were in a bulk approve/reject | Build-level log | Find the bulk event; use the visual preview (hover/click) to see affected screenshots. |
| Whether a change was human or automatic | Any level | Filter by **Actor**: User = human, System = automated. |
| Activity for a specific branch | Project- or build-level log | Use **Branch** filter; add event-type filter for merges/approvals. |
| All actions by one team member | Any level | Use **Users** (Actor) filter. |

:::tip **Baseline history in one place**
For a **single screenshot**, the **screenshot-level** log is that asset’s baseline history. For **project-wide** baseline changes (e.g. merge to baseline), use **project-level** logs. For **bulk** updates in a build, use **build-level** logs and the bulk-action preview.
:::

---

## What each level shows

**Project history** — Project created/deleted; settings updated; builds merged to baseline.

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/project_level_history.png').default} alt="Project-level audit history" />

**Build history** — Build created/completed/failed; re-runs (re-execute vs re-run comparison); bulk approve/reject; build deleted.

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/build_level_history.png').default} alt="Build-level audit history" />

**Screenshot history** — Approvals and rejections (single and bulk); live comparisons; ignore zones/annotations; screenshot added/deleted.

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/screenshot_level_history.png').default} alt="Screenshot-level audit history" />

---

## What each log entry contains

Every event shows **who**, **when**, and **what**:

| Field | Meaning |
| --- | --- |
| **Date & time** | When the action occurred. |
| **User (actor)** | Who did it: a **User** (team member) or **System** (automated). |
| **Event name** | Action type (e.g. `SS_APPROVE`, `BUILD_UPDATE`). |
| **Description** | Short summary of the action. |
| **Metadata (visuals)** | For bulk actions: list and preview of affected screenshots. |

---

## Filters: find the right events quickly

Use filters to narrow by **who** (user or system), **what** (event type), **branch**, or **screenshot name**.

**By user or system** — Filter by specific users for accountability, or by **System** to see only automated events (e.g. auto-approvals).

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/filters_users.png').default} alt="Filter by team members" />

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/filters_system_logs.png').default} alt="Filter by System actions" />

**By event type** — e.g. Approve, Reject, Merged to Baseline, Build Re-executed.

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/filters_events.png').default} alt="Filter by event type" />

**By branch** — Restrict to a Git branch.

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/filters_branches.png').default} alt="Filter by branch" />

**By screenshot name** — Search for a specific snapshot.

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/filters_screenshots.png').default} alt="Filter by screenshot name" />

**Bulk actions** — One event per bulk approve/reject; hover or click to see a visual preview of the screenshots included.

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/ss_preview_build_level.png').default} alt="Preview of screenshots in a bulk action" />

---

## Common scenarios: how to get the answer

### Who approved this screenshot as the new baseline?

Open the **screenshot** → **Audit Log** (screenshot-level). Filter by *Screenshot Approved* (or similar). The **User** and **Date & time** columns show who and when.

### Did we merge this branch into baseline, and who did it?

Open **Project** → **Audit Log** (project-level). Filter by **Branch**, then by event type *Merged to Baseline* (or *Project Updated*). Check **User** and timestamp.

### Was this build’s baseline changed by a bulk approve? Which screenshots?

Open the **build** → **Audit Log** (build-level). Filter by *Screenshot Approved* / *Bulk Approve*. Open the event and use the **visual preview** to see the list of screenshots. **User** and **Date & time** show who and when.

### Was this change manual or auto-approved by the system?

Open the Audit Log at the level you need. Use **Actor**: **System** = automated; **User(s)** = manual. Use **Event type** to focus on approvals if needed.

### What did a specific team member do in this project?

Open **Audit Log** (project- or build-level). Filter by **Users** → select that person. Optionally add **Event type** or **Branch**. You see every approval, rejection, merge, or config change by them.

### When was this snapshot (by name) approved or rejected?

Open **Audit Log** (build or project). Use the **Screenshot** or **Search** filter and enter the snapshot name. Review the filtered events for that snapshot’s history.

---

## Events that are logged

| Scope | Events |
| --- | --- |
| **Project** | Created, Updated, Deleted, Merged to Baseline. |
| **Build** | Created, Completed, Updated by User, Re-run Comparison, Re-executed, Deleted, Merged. |
| **Screenshot** | Approved, Rejected, Annotation Updated, Status Changed, Live Comparison Triggered, Added, Deleted. |

Use the **Event type** filter in the UI to restrict to these categories.

---

## Related documentation

- [Approval & Baseline Management](/support/docs/smartui-approval-workflow-guide/) — How approve, reject, move, and merge affect baselines.
- [Multiselect & Bulk Operations](/support/docs/smartui-multiselect-bulkops/) — How bulk actions work and how they appear in audit logs.
