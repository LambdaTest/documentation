---
id: smartui-baseline-history
title: Baseline History
sidebar_label: Baseline History
description: Learn how Baseline History in TestMu AI's SmartUI shows which build a project's baseline points at today, which builds held the role before it, and every event that changed a reference image.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - SmartUI Baseline History
  - Current Baseline
  - Past Baselines
  - Baseline Provenance
  - Reference Image

url: https://www.testmuai.com/support/docs/smartui-baseline-history/
slug: smartui-baseline-history/
canonical: https://www.testmuai.com/support/docs/smartui-baseline-history/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Baseline History",
          "item": `${BRAND_URL}/support/docs/smartui-baseline-history/`
        }]
      })
    }}
></script>

# Baseline History <NewTag value="New" />

A comparison is only as trustworthy as the reference image it ran against. **Baseline History** answers the question that follows every surprising result: which build is the baseline today, which builds held that role before it, and what changed each reference image along the way.

It is a read only view. Nothing in it can approve, reject, promote or move a baseline, so it is safe to open during a review or hand to an auditor.

## Opening Baseline History

On the **Projects** screen, open the overflow menu on a project row and select **Baseline History**. It sits directly after **Audit Logs**.

## What the three screens show

### 1. Current and past baselines

The first screen is the project's baseline lineage.

- **Current baseline**, with the build it points at, how long it has held the role, and the state it is in.
- **Which later builds ran without displacing it**, so a build that found changes and was never approved is visible as a build that did not become the baseline, rather than as a gap.
- **The composition of the baseline**: how many reference images were captured in that build, and how many were promoted into it from elsewhere by an approval or a merge.
- **A grid of reference screenshots**, each card carrying its own provenance.
- **Past baselines**, newest first, with how long each held the role and which build superseded it.

### 2. Variant picker

Selecting a screenshot opens its variants, grouped by resolution with one row per browser.

A variant is the unit the comparison engine actually keys on:

`Screenshot Name` + `Browser` + `Resolution`

One screenshot captured on two browsers at two viewports is four variants, and each of them can have a different history. Picking the variant first is what stops the timeline from mixing four unrelated stories into one.

### 3. Evolution timeline

The timeline is scoped to a single variant and lists every event that touched it, with its effect on the baseline stated plainly:

- The build that first captured the reference image.
- Pointer moves, where the project baseline moved from one build to another.
- Image replacements, showing both the promoted image and the image it displaced.
- Approvals, including automatic approvals recorded at a 0.00% difference.
- Rejections.
- Build level approvals that swept the variant up with everything else in the build.

A panel stays pinned beside the timeline showing where the live reference image actually lives: the build it belongs to, the build that captured it, the action that placed it there and who performed that action.

## How the history is derived

Baseline History does not maintain a separate record of its own. Every screen is derived at read time from the builds, approvals and baseline pointers the project already has, using the same rule the comparison engine uses to resolve a baseline.

Two consequences are worth knowing:

- **Deleting a build removes it from the history**, because the history is a view over the builds that exist, not an append only log kept beside them.
- **The lineage always agrees with what the comparison engine did**, because both read the same pointers. If a build shows a baseline you did not expect, the timeline shows the event that put it there.

For the approval actions themselves, with actor and timestamp, see [Audit Logs and Annotations](/support/docs/smartui-audit-logs-annotations/).

## Reading a baseline that moved

The pattern that brings most teams to this screen is a comparison that ran against an unexpected reference. Working through it:

1. Open **Baseline History** for the project and read the **current baseline** block. If the build named there is not the build you expected, the answer is already on this screen.
2. Check **past baselines**. The entry that superseded the build you expected names the build that took over and when.
3. Open the screenshot, then the variant that surprised you. Browser and resolution are part of the key, so confirm you are looking at the same variant your test captured.
4. Read the timeline from the bottom. The first event that changed the reference image after the point you trusted is the one to take back to the person who performed it.

## Availability

Baseline History is rolled out progressively. If you expect it on a project row and do not see it, your organisation may not be enabled yet. Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support).

## Additional Resources

- [Baseline Management](/support/docs/smartui-baseline-management/)
- [Baseline Strategy for Omni Projects](/support/docs/smartui-baseline-strategy/)
- [Audit Logs and Annotations](/support/docs/smartui-audit-logs-annotations/)
- [Approval and Baseline Management Guide](/support/docs/smartui-approval-workflow-guide/)
