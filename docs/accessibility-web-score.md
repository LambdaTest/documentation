---
id: accessibility-web-score
title: Accessibility Web Score
sidebar_label: Accessibility Web Score
description: How the Accessibility Web Score works—severity weights, issue density, formula, bands, and how to use it without mistaking it for legal compliance.
keywords:
  - TestMu AI
  - Accessibility
  - Web score
  - Accessibility score
  - WCAG
slug: accessibility-web-score/
url: https://www.testmuai.com/support/docs/accessibility-web-score/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-web-score/
---

# Accessibility Web Score

The **Accessibility Web Score** is a unified metric that represents the accessibility health of your website or application workflow. Instead of only reading long reports, the score gives you a **clear, actionable number** for where the product stands relative to the issues found in that scan. Use it to **track progress over time**, **compare releases**, and **show improvement trends** to stakeholders—**together** with issue detail and any manual testing your program requires.

:::caution Not legal or WCAG certification
The score is **not** the same as WCAG conformance sign-off, VPAT completion, or legal accessibility certification. Always interpret it with **[Issue Summary](/support/docs/accessibility-testing-dashboard-issue-summary/)**, **[All Issues](/support/docs/accessibility-testing-dashboard-all-issues/)**, and your own manual coverage ([compliance guide](/support/docs/accessibility-compliance-guide/)).
:::

## Who needs this?

The Accessibility Web Score helps:

- **Product managers** who need to quantify accessibility health and show progress to leadership  
- **QA engineers** tracking improvements across sprints and releases  
- **Accessibility teams** monitoring problem areas and regression risk  
- **Developers** who want quick feedback on whether a change **improved or hurt** accessibility before merge  

If you ship digital products for real users, the score is a useful **signal**—not the only bar for “done.”

## Where to find it

Open any **completed** accessibility test in your TestMu AI **Accessibility** flow. The score appears **on the test report** for that run so you can see how that specific scan performed at a glance. Start from **[Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)** if you are unsure how reports are listed.

## What the score is good for

- Comparing runs over time and across releases  
- Spotting regressions or improvement trends before reading every issue  
- Getting a quick read before deep triage in **[All Issues](/support/docs/accessibility-testing-dashboard-all-issues/)**  

## How the score is calculated

The Accessibility Web Score reflects **both** how many issues were found and **how severe** they are. A report with many **minor** issues behaves differently in the model than one with a smaller count of **critical** blockers.

The methodology below is a **proprietary TestMu AI metric**. It is designed for **trend and prioritization** on this platform; it is not a public WCAG scoring rubric.

### Step 1: Weight issues by severity

Not every violation should affect the score the same way. Severities are weighted as follows:

| Severity  | Weight | Why this matters |
|-----------|--------|------------------|
| Critical  | 1.0    | Complete blockers that prevent access |
| Serious   | 0.75   | Major barriers that significantly impair experience |
| Moderate  | 0.50   | Notable issues affecting usability |
| Minor     | 0.25   | Smaller problems with limited impact |

Let **z** be the **weighted severity** term built from the **percentage** of issues in each severity bucket:

```text
z = (% critical × 1.0) + (% serious × 0.75) + (% moderate × 0.50) + (% minor × 0.25)
```

That produces a single value representing how “heavy” the severity mix is across all issues in the scan.

### Step 2: Measure issue density

Raw counts alone do not describe spread across the page. **Density** compares issues to the amount of structure scanned.

Let **y** be issue density:

```text
y = Total issues / Total elements
```

So the same number of issues on a **larger** DOM (more elements) yields **lower** density than on a very small page, all else equal.

### Step 3: Calculate the final score

Severity weighting and density are combined so they **reduce** the score from a perfect **100**:

```text
Accessibility Web Score = 100 − (y × 100 × z)
```

The result is on a **0–100** scale. Use these **interpretation bands** as practical guardrails (not official WCAG levels):

| Range   | Typical read |
|---------|----------------|
| 90–100  | Strong accessibility signal for that scan; few high-severity findings relative to structure |
| 70–89   | Good direction; prioritize serious/critical items from **[All Issues](/support/docs/accessibility-testing-dashboard-all-issues/)** |
| 50–69   | Moderate risk; review density drivers (repeated components, templates, shared nav) |
| Below 50| Significant barriers; treat as release risk until triaged |

Exact cutoffs are **guidance**; your product’s risk tolerance may differ.

### Calculating across pages and tests

The **same formula idea** applies whether you are viewing a **single page** or a **multi-page** test: problematic pages are not averaged away by cleaner pages in a way that hides risk. Use per-page or per-URL drill-down in the report when you need to see **which URL** drags the composite down.

## What impacts your score

- **Severity distribution** — More weight on critical/serious issues lowers the score faster than many minor-only findings.  
- **Issue density** — More issues **per element** lowers the score; a complex page with more elements affects **y** relative to a tiny page.  
- **Total element count** — Larger DOMs change the density denominator; the formula is built so density stays meaningful across page sizes.  

## Improving your score

Focus on **high-impact** changes:

1. **Fix critical issues first** — They carry the most weight and usually block real users.  
2. **Reduce density** — Systematic patterns (wrong component library defaults, shared header issues) hurt more than one-off edge cases.  
3. **Re-scan after meaningful fixes** — Compare score **and** issue lists run-over-run; use **[Exporting & Sharing Reports](/support/docs/accessibility-exporting-sharing-reports/)** for audit trails.  

For fix order and rule context, use the **[Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)** and platform checklists: [Web](/support/docs/accessibility-web-what-we-cover/) · [iOS](/support/docs/accessibility-ios-what-we-cover/) · [Android](/support/docs/accessibility-android-what-we-cover/).

## How to use the score in reviews (short checklist)

1. Open the report from **[Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)** and note the score **vs** the previous comparable build.  
2. Open **[Issue Summary](/support/docs/accessibility-testing-dashboard-issue-summary/)** to see **which severities and rules** moved.  
3. Only then decide if the score alone is enough for a stakeholder update—or if you need **[Passed Test Cases](/support/docs/accessibility-passed-test-cases/)** and manual notes.  

## Remember

- The Accessibility Web Score is a **TestMu AI proprietary** metric; it is **unique to this platform** and is meant for **product and engineering prioritization**, not as a substitute for legal analysis.  
- It does **not** replace manual testing, screen reader validation ([overview](/support/docs/screen-reader-on-accessibility/)), or documented compliance processes.  

## Related docs

- [Issue Summary](/support/docs/accessibility-testing-dashboard-issue-summary/)  
- [All Issues](/support/docs/accessibility-testing-dashboard-all-issues/)  
- [Passed Test Cases](/support/docs/accessibility-passed-test-cases/)  
- [Exporting & Sharing Reports](/support/docs/accessibility-exporting-sharing-reports/)  
- [Accessibility Compliance Guide (ADA / WCAG / EAA / 508)](/support/docs/accessibility-compliance-guide/)  
- [VPAT and ACR evidence (customer-owned templates)](/support/docs/accessibility-vpat-report-generation/)  
