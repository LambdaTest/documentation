---
id: smartui-audit-logs-annotations
title: Annotations in SmartUI Audit Logs
hide_title: true
sidebar_label: Annotations in Audit Logs
description: SmartUI audit logs now show the annotations applied to a screenshot, so you can see exactly which ignore regions were drawn, by whom, and when.
keywords:
  - SmartUI Audit Logs Annotations
  - Screenshot Annotation Updated
  - Ignore Region Audit
  - Visual Testing Audit Trail
  - SmartUI Annotation History
url: https://www.testmuai.com/support/docs/smartui-audit-logs-annotations/
site_name: TestMu AI
slug: smartui-audit-logs-annotations/
canonical: https://www.testmuai.com/support/docs/smartui-audit-logs-annotations/
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
          "name": "Annotations in SmartUI Audit Logs",
          "item": `${BRAND_URL}/support/docs/smartui-audit-logs-annotations/`
        }]
      })
    }}
></script>

# Annotations in SmartUI Audit Logs

SmartUI audit logs now surface the **annotations** applied to a screenshot. When someone draws an ignore region on a screenshot, the audit log records the change and shows a preview of the annotated screenshot, so you can see exactly what was marked, on which screenshot, and by whom.

:::note
This is the first phase of annotations in audit logs. More annotation detail and controls will be added to this view soon.
:::

---

## The annotation

An annotation is a region you draw on a screenshot to mark it as ignored during comparison. In the captured view below, the highlighted rectangles are drawn ignore areas. Hovering an area shows its details: the label **Ignored Area (Drawn)**, the source (`Captured View, #5`), and the exact coordinates and size (`X: 406, Y: 38, W: 488, H: 434`).

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/annotation_ignore_region_drawn.png').default} alt="SmartUI captured view with drawn ignore regions and an Ignored Area tooltip showing source and coordinates" />

Every time these annotations are added or changed, SmartUI records the edit in the audit log.

---

## The audit log list

Open the **Audit Logs** panel to see annotation edits alongside every other tracked event. Each **Screenshot annotation updated** row shows who made the change, when, a plain-language description, and the build and baseline it belongs to.

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/annotation_audit_log_list.png').default} alt="Audit Logs list showing Screenshot annotation updated events with date, user, description, and build columns" />

| Column | What it shows |
| --- | --- |
| **Date & Time** | When the annotation was updated (e.g. Jul 13, 2026, 6:30 PM). |
| **Users** | The team member who made the change (`chaitanyas`). |
| **Event** | The event type: *Screenshot annotation updated*. |
| **Description** | A readable summary, e.g. *chaitanyas updated annotations for screenshot '1' in build 'm2-phase4-live-2'*. |
| **Build Name / Build # / Baseline #** | The build and baseline the screenshot belongs to. |

Use the **Events**, **Users**, **Branches**, and **Build No.** filters at the top to narrow the list, or toggle **System Logs** to include automated events.

---

## The annotation preview

Open an entry to see a preview of the screenshot exactly as it was annotated, so you can confirm the change without leaving the log.

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/annotation_audit_log.png').default} alt="Expanded audit log entry showing a preview of the annotated screenshot with an Ignore region" />

| Element | What it shows |
| --- | --- |
| **Event header** | The event line reads *Screenshot annotation updated*, with the date and time (Jul 13, 2026, 6:26 PM), the build and number (`m2-phase4-live-2 - #5`), the user who made the change (`chaitanyas`), and the count of affected screenshots (1 Screenshots). |
| **Screenshot preview** | A thumbnail of the screenshot with its annotations, captured at the time of the change. |
| **Ignore region** | The highlighted rectangle marks the area set to be ignored during comparison. Its **Ignore** label identifies the annotation type. |
| **Environment** | The browser and resolution the screenshot was captured on (Chrome, 1920x1080). |

When a screenshot carries more than one annotation, the preview shows every drawn ignore region together.

<img loading="lazy" className='doc_img' src={require('../assets/images/smart-visual-testing/audit-history/annotation_audit_log_all_regions.png').default} alt="Expanded audit log entry showing a preview of the annotated screenshot with multiple drawn ignore regions" />

---

## Why it helps

- **Traceability**: Every annotation change is attributed to a user with a timestamp, so you always know who marked a region and when.
- **Context at a glance**: The inline preview shows the exact region that was ignored, so you do not have to open the build to understand the change.
- **Accountability**: Annotation edits sit alongside approvals, rejections, and baseline changes in the same audit trail.

---

## Related documentation

- [SmartUI Audit & Activity Logs](/support/docs/smartui-audit-logs/): The full audit trail across projects, builds, and screenshots.
- [Ignore Regions](/support/docs/smartui-hooks-region-ignore/): How to draw and manage ignore regions on your screenshots.
