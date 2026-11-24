---
id: smartui-ai-build-summary
title: AI Build Summary in SmartUI
sidebar_label: AI Build Summary
description: Use SmartUI AI Build Summary to review a whole build at once. Get a risk score, changes grouped by type across screenshots, and project-level ignore rules.
keywords:
  - AI Build Summary
  - SmartUI AI Summary
  - Visual AI
  - Risk score
  - Ignore rules
  - TestMu AI SmartUI
  - Visual Regression AI
url: https://www.testmuai.com/support/docs/smartui-ai-build-summary/
site_name: TestMu AI
slug: smartui-ai-build-summary/
canonical: https://www.testmuai.com/support/docs/smartui-ai-build-summary/
---

import NewTag from '../src/component/newTag';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/smartui-ai-build-summary/"
    },
    "headline": "AI Build Summary in SmartUI",
    "description": "Use SmartUI AI Build Summary to review a whole build at once. Get a risk score, changes grouped by type across screenshots, and project-level ignore rules.",
    "url": "https://www.testmuai.com/support/docs/smartui-ai-build-summary/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "AI Build Summary",
      "SmartUI AI Summary",
      "Visual AI"
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
    "dateModified": "2026-11-23T20:00:00+05:30"
  }) }}
/>

# AI Build Summary

<NewTag value="New" color="#000" bgColor="#ffec02" />

**AI Build Summary** evaluates the screenshots of a SmartUI build with AI and generates one build-level report. Instead of opening every changed screenshot, you get a risk score for the build, every change classified by type, similar changes grouped across screenshots, and a way to hide changes you do not want to see again.

Each screenshot still gets its own diff analysis from the [Visual AI Agent](/support/docs/smartui-visual-ai/). AI Build Summary collects those per-screenshot results into a single view of the build.

---

## What You Get

| Capability | What it does |
| :--- | :--- |
| **Build risk score** | A score from 0 to 100, based on how many of the analyzed screenshots contain a likely bug. |
| **Build summary** | A short written review of what changed in the build. |
| **Change classification** | Every change is assigned a type, such as Content, Colour or Layout. |
| **Change groups** | Similar changes on different screenshots are grouped under one description, so you review them once. |
| **Group actions** | Approve, reject or ignore all screenshots of a change group in one step. |
| **Ignore rules** | Ignored changes become project-level rules that hide matching changes in future builds. |

---

## Prerequisites

- A SmartUI project with a build that has been compared against a baseline.
- At least one screenshot in the build that differs from its baseline. Screenshots with no difference are not analyzed.
- AI credits available for your organization. See [Credits](#credits).

:::note
If you do not see the **AI Summary** tab on your builds, contact [support](mailto:support@testmuai.com) to have AI Build Summary enabled for your organization.
:::

---

## Open the AI Summary

1. Open your project in the SmartUI dashboard and select a build.
2. The build page has two tabs: **AI Summary** and **Screenshots**. Select **AI Summary**.

For new builds, SmartUI analyzes the screenshots automatically as they finish comparing. While this is running, the tab shows how many screenshots are still being processed, and the summary appears when the analysis is complete.

If a build has no summary yet, for example a build created before the feature was enabled, the tab shows a **Review Changes with AI** banner. Click **Generate AI Summary** to start the analysis.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ai-build-summary/ai-summary-overview.webp').default} alt="AI Summary tab of a SmartUI build showing changes found, average and maximum diff, likely bugs, and the risk score with a written summary" width="768" height="312" className='doc_img'/>

---

## Read the Summary

### Build metrics

The top of the tab shows which build the summary is compared with (**Comparison with Build #N**) and the following metrics:

| Metric | Meaning |
| :--- | :--- |
| **Changes Found** | Total number of changes found in the analyzed screenshots, with a bar showing how they split across change types. |
| **Avg. Diff** | Average mismatch percentage across the compared screenshots of the build. |
| **Max Diff** | Highest mismatch percentage of any compared screenshot in the build. |
| **Likely Bug** | Number of changes the AI flagged as likely bugs. |

### Risk score

The **AI Analysis** section shows a risk score from 0 to 100 next to a short written summary of the build.

The score is the percentage of analyzed screenshots that contain at least one likely bug. For example, if 100 screenshots were analyzed and 20 of them contain a likely bug, the risk score is 20.

| Risk score | Risk level |
| :--- | :--- |
| 0 | No Risk |
| 1 to 33 | Low |
| 34 to 66 | Medium |
| 67 to 100 | High |

A score of 0 does not mean the build has no changes. It means none of the changes found look like bugs.

### Change types

Every change is classified into one of six types. Select a type under **Change Types** to see its change groups.

| Change type | Typical examples |
| :--- | :--- |
| **Content** | Text, numbers or images that changed. |
| **Typography** | Font family, size or weight changes. |
| **Colour** | Color changes to text, backgrounds or other elements. |
| **Layout** | Elements that moved, resized or changed spacing. |
| **Elements** | Elements that were added or removed. |
| **Uncategorized** | Changes that do not fit any of the other types. |

### Change groups

Under **Changes Found in Screenshots**, similar changes are grouped together. Each group shows:

- A plain-language description of the change.
- A **Likely bug** label when the AI considers the change a probable defect.
- The number of screenshots that contain the change.

Expand a group to see its screenshots. Click a screenshot to open it in the comparison view with that change selected.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ai-build-summary/change-groups.webp').default} alt="Change types list with Layout selected and an expanded change group showing the screenshots that share the change" width="768" height="333" className='doc_img'/>

---

## Review Change Groups

Each change group has three actions. Every action asks for confirmation before it is applied.

| Action | Result |
| :--- | :--- |
| **Approve** | Marks all screenshots of the group as approved. |
| **Reject** | Marks all screenshots of the group as rejected. |
| **Ignore** | Creates an [ignore rule](#ignore-rules), so matching changes stay hidden in future builds of the project. |

After an action is applied, the group shows its status (**Approved**, **Rejected** or **Ignored**) with an **Undo** button. Undoing an approval or rejection sets the screenshots back to their previous review state, except for screenshots someone has changed since. Undoing an ignore removes the rule.

:::tip
Group approval works alongside the standard review flow. For how approvals affect baselines, see the [Approval Workflow Guide](/support/docs/smartui-approval-workflow-guide/).
:::

---

## Ignore Rules

Ignore rules let you stop the AI Build Summary from highlighting changes you do not want to review again, such as a date that changes on every run. Rules are saved at the project level.

### Create a rule

You can create a rule in two ways:

- **From the AI Summary tab**: click **Ignore** on a change group. The rule covers that change on all screenshots of the group.
- **From the comparison view**: open the **AI Summary** panel for a screenshot and click **Ignore** on a single change. The rule covers that one change on that screenshot variant.

If the change is flagged as a likely bug, SmartUI warns you that the rule also hides matching breakages in future builds, and asks you to confirm with **Ignore Anyway**.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ai-build-summary/ignore-change-confirmation.webp').default} alt="Confirmation asking whether to ignore a change on 2 screenshots, with Cancel and Ignore Change buttons" width="544" height="250" style={{width: '544px'}} className='doc_img'/>

### How rules apply

- A rule applies to **future builds** of the same project. It does not change the results of the build it was created on.
- A change is hidden when it has the same kind of change on the same screenshot name, in the same area of the screenshot.
- Hidden changes are left out of **Changes Found**, the change type counts and the **Likely Bug** count.

### See what was hidden

When rules hide changes in a build, a **Hidden Changes** entry appears below the change types. It lists each rule that hid something in this build, and you can expand a rule to see the affected screenshots.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ai-build-summary/hidden-changes.webp').default} alt="Hidden Changes list in the AI Summary tab showing one hidden change and the screenshots it was hidden on" width="768" height="298" className='doc_img'/>

In the comparison view, hidden changes are marked **Hidden** and can be shown with the **Hidden Changes** filter.

### Manage rules

1. Open your project and go to **Project Settings**.
2. Select **Ignored Rules**.

Each rule shows the build it was created from, its scope (**Change group** or **Single change**) and the change type it matches. Use the search box to find a rule by title.

To delete a rule, click **Remove** and confirm with **Remove Rule**. Matching changes are highlighted again in later builds.

---

## AI Summary in the Comparison View

When you open a screenshot, select **AI Summary** under **Diff Controls** in the comparison view. The differences of that screenshot are grouped by AI classification and listed in the **AI Summary** panel.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ai-build-summary/comparison-view-ai-summary.webp').default} alt="Comparison view with AI Summary selected, changes boxed on the captured screenshot and listed in the AI Summary panel with their change type" width="768" height="311" className='doc_img'/>

- The panel lists every change with its change type and a **Likely bug** label where it applies.
- Use the filter chips to show one or more change types, or **Hidden Changes**.
- Select a change to highlight its location on the screenshot.
- Click **Ignore** on a change to create an ignore rule for it, or **Undo** to remove that rule.

---

## Group Screenshots by Diff Type

In the **Screenshots** tab of a build, set **Group By** to **Diff Type** to browse screenshots by the type of change they contain. You can then switch between **All**, **Content**, **Typography**, **Colour**, **Layout**, **Elements** and **Uncategorized**.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ai-build-summary/group-by-diff-type.webp').default} alt="Screenshots tab grouped by Diff Type, with tabs for each change type and per-type change counts on every screenshot card" width="768" height="396" className='doc_img'/>

---

## Credits

AI Build Summary uses your organization's AI credits, the same credits used by the [Visual AI Agent](/support/docs/smartui-visual-ai/).

### How credits are consumed

| What is charged | Credits |
| :--- | :--- |
| Each analyzed screenshot, small or normal size | \~1–4 credits |
| Each analyzed screenshot, large or full-page | \~5–8 credits |
| Grouping the changes and writing the build summary | A small additional amount, once per build |

- Only screenshots that differ from their baseline are analyzed. Unchanged screenshots consume no credits.
- At most 100 screenshots per build are analyzed, so a build is never charged for more than 100 screenshots.
- A screenshot is analyzed once. Opening **Visual AI** or the **AI Summary** panel for an already analyzed screenshot does not consume credits again.
- A screenshot whose analysis fails is not charged.

For balances, limits and how to buy credits, see [Credits Management](/support/docs/credits-management/#smartui-ai-build-summary).

### When credits run out

| Situation | What you see | What to do |
| :--- | :--- | :--- |
| Credits run out before the summary is generated | **Credits Needed for AI Summary** | Click **Manage Credits** to add credits, then **Regenerate AI Summary**. |
| Your organization has reached its credit limit | **Credits Needed for AI Summary** | Ask your admin to raise the limit, then click **Regenerate AI Summary**. |
| Credits run out part-way through a build | A notice that some screenshots were not analyzed. The summary covers only the analyzed screenshots. | Add credits, then open the skipped screenshots to analyze them again. |

---

## Things to Keep in Mind

- **100 screenshots per build**: AI Build Summary covers up to 100 screenshots of a build. If a build has more than 100 screenshots, only 100 are picked for the summary, and the risk score and counts reflect those screenshots only.
- **Unchanged screenshots are skipped**: Screenshots that match their baseline are not analyzed. A build with no differences shows "No screenshots changed. This build is clean."
- **A baseline is required**: A screenshot with no baseline to compare against has no AI summary.
- **Retry on failure**: If the summary cannot be generated, the tab shows an error with the option to generate it again.

> **AI Build Summary can make mistakes. Review likely bugs and ignored changes before you approve a build.**

---

## Related Resources

- [Visual AI Agent](/support/docs/smartui-visual-ai/)
- [Smart RCA (Root Cause Analysis)](/support/docs/smartui-root-cause-analysis/)
- [Smart Ignore](/support/docs/smartui-smartignore/)
- [Project Settings](/support/docs/smartui-project-settings/)
- [Approval Workflow Guide](/support/docs/smartui-approval-workflow-guide/)
