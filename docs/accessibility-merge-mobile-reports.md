---
id: accessibility-merge-mobile-reports
title: Merge Reports for Mobile Accessibility
sidebar_label: Merge Reports (Mobile)
description: Combine 2 to 10 completed mobile accessibility reports into a single merged report with consolidated violations, insights, and an averaged Accessibility Score.
keywords:
  - TestMu AI
  - Accessibility
  - Merge reports
  - Merged report
  - Mobile accessibility
  - App Automation
  - App Live
  - Android
  - iOS
url: https://www.testmuai.com/support/docs/accessibility-merge-mobile-reports/
site_name: TestMu AI
slug: accessibility-merge-mobile-reports/
canonical: https://www.testmuai.com/support/docs/accessibility-merge-mobile-reports/
---

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
          "name": "Merge Reports for Mobile Accessibility",
          "item": `${BRAND_URL}/support/docs/accessibility-merge-mobile-reports/`
        }]
      })
    }}
></script>

# Merge Reports for Mobile Accessibility

Combine the results of multiple mobile accessibility test runs into a single report. Instead of opening twenty reports one by one to assess a release, merge them and review everything — violations, insights, and an overall score — in one place.

Merge Reports works for both **[App Automation](/support/docs/accessibility-native-app-automation-test/)** and **manual ([App Live](/support/docs/accessibility-app-scanner/))** accessibility reports, on real devices, for Android and iOS — including both platforms together in one merged report.

## Who needs this?

- **Release managers** signing off on a build that was validated across many separate device runs.
- **QA leads** who run one report per screen or flow and need a single number for the release.
- **Accessibility programs** producing one consolidated artifact for an audit trail instead of a folder of individual reports.
- **Teams testing across platforms**, who want Android and iOS results reviewed together.

## What you can do

- Select **2 to 10 completed reports** from the **[Accessibility dashboard](/support/docs/accessibility-testing-navigating-dashboard/)** and merge them into a new, named report.
- The merged report opens like any other report, with the same sections: Violations, Insights, Recommendations, and **[Accessibility Score](/support/docs/accessibility-web-score/)**.
- Every violation keeps its full context — you can always see which screen it came from, with its screenshot and highlighted element.
- The report header shows which test runs were merged, so you can trace any finding back to the run it came from.
- Merged reports are saved to your dashboard permanently: rename, share via public link, or delete them like any other report. Deleting a merged report never affects the original reports, and changes to the originals never alter the merged report.

## Requirements and limits

- **2–10 completed reports** per merge. Reports that are still running cannot be merged.
- All reports must be of the **same kind**: App Automation reports merge with App Automation reports, manual reports with manual reports.
- Android and iOS reports **can** be merged together, and reports from different apps can be merged too.
- The combined reports can cover up to **1,000 screens** in total. Merges near that limit take noticeably longer to build — see the note at the end of this page.

:::caution Web and mobile cannot be mixed
A merged report is either all web or all mobile. Web reports cannot be merged with mobile reports.
:::

## Creating a merged report

1. Open the **[Accessibility dashboard](/support/docs/accessibility-testing-navigating-dashboard/)** and go to your App Automation (or manual) reports list.
2. Select the reports to combine and choose **Merge** from the bulk actions.
3. Give the report a name. A default with the date and time is pre-filled — replace it with something meaningful like `Release 4.2 — Checkout flow` so the report is easy to find later.
4. Confirm the merge.
5. The new report appears in your list immediately with a *merging* status, and switches to completed when ready — usually within seconds. Very large merges take longer; see the note on [merge duration](#interpreting-a-merged-report) below.

If a merge can't be created — for example, a selected report is still running, was deleted, or the selection exceeds the limits — you'll see a message explaining exactly what to change.

## How merged results are calculated

### Violations are combined, not deduplicated

Mobile screens don't have a stable identity the way web pages have URLs, so the merged report shows **every occurrence from every run**.

If the same issue was found in three of your runs, it appears three times — that's a signal of a **recurring problem**, not a duplicate. The report also shows how many *distinct* rules failed, so you can tell "many occurrences of a few issues" apart from "many different issues."

### The score is the average of your runs' scores

A merge of reports scoring 80, 90, 70, and 100 shows **85**.

The score is labeled as an average of the source reports. It summarizes how your selected runs performed, and it is **not** recalculated from the combined violation list — recalculating would unfairly penalize issues that appear in several runs.

### The WCAG standard shown is the broadest one you tested against

Merging a WCAG 2.1 A run with a WCAG 2.2 AAA run produces a report labeled **WCAG 2.2 AAA**, because the combined results include findings from the broader rule set.

### Rule settings are shown honestly

In the merged report, every rule is shown as either enabled or disabled:

| State | Meaning |
| --- | --- |
| **Enabled** | The rule was enabled in **any** merged run that includes it |
| **Disabled** | The rule was off in **all** merged runs |

A rule counts as enabled as soon as one of your runs checked it, so the merged report reflects everything that was actually evaluated across the combined screens.

## Interpreting a merged report

- **A merged report is a snapshot.** It captures the selected reports as they were at merge time. Re-running tests or editing the originals afterward doesn't change it — create a new merge to get an updated view.
- **Compare like with like.** Merged violation counts grow with the number of reports you select, since recurring issues are counted once per run. Compare merged reports with other merged reports of similar scope, not with single-test reports.
- **Use the score as a trend, not a verdict.** The averaged score inherits every caveat of the [Accessibility Score](/support/docs/accessibility-web-score/) — it reflects automated findings only and is not WCAG conformance sign-off.

:::note Merging large reports takes longer
A combined report can hold a maximum of **1,000 screens**. Merges of that size are not instant — merging a report with 1,000 screens takes around **17–18 minutes** to complete. Smaller merges finish in seconds. The report stays in a *merging* state until it's ready, and you can carry on working in the dashboard while it completes.
:::

## Related docs

- [Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)
- [Accessibility Score](/support/docs/accessibility-web-score/)
- [Exporting & Sharing Reports](/support/docs/accessibility-exporting-sharing-reports/)
- [Accessibility App Scanner](/support/docs/accessibility-app-scanner/)
- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/)
