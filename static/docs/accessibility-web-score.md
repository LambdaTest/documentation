# Accessibility Score

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The **Accessibility Web Score** is a unified metric that represents the accessibility health of your website or application workflow. Instead of only reading long reports, the score gives you a **clear, actionable number** for where the product stands relative to the issues found in that scan. Use it to **track progress over time**, **compare releases**, and **show improvement trends** to stakeholders, **together** with issue detail and any manual testing your program requires.

**Not legal or WCAG certification**
The score is **not** the same as WCAG conformance sign-off, VPAT completion, or legal accessibility certification. A score of 100 means **no automated findings were detected**—automated tools catch roughly 30–40% of WCAG issues, so a manual audit is still required for full conformance. Always interpret the score with **[Issue Summary](/support/docs/accessibility-testing-dashboard-issue-summary/)**, **[All Issues](/support/docs/accessibility-testing-dashboard-all-issues/)**, and your own manual coverage ([compliance guide](/support/docs/accessibility-compliance-guide/)).

## Available across all accessibility products

The score now uses the **same scoring model across every accessibility testing flow**, so results are directly comparable across platforms and test types:

| Flow | Platform |
| --- | --- |
| Web Automated (Selenium, Playwright, Cypress) | Web |
| Web Manual (Accessibility DevTools) | Web |
| Web Scheduled (Test Scheduling) | Web |
| Native Android (Real Device) | Mobile |
| Native iOS (Real Device) | Mobile |

The math is identical across platforms—only the rules that decide which elements are "meaningful" differ (DOM for web, `AccessibilityNodeInfo` for Android, `XCUIElement` for iOS).

**Updated scoring model**
The Accessibility Score now uses an improved **density-adjusted** model. Earlier scores could be inflated by decorative and structural elements that trivially passed; the current model focuses on **meaningful, functional elements** only, so the number reflects the real state of the page. Scores are generally lower but more honest—a page with critical issues will not show as "Excellent." Tests run before this model was enabled continue to show the existing accessibility level as a fallback.

## Who needs this?

The Accessibility Score helps:

- **Product managers** who need to quantify accessibility health and show progress to leadership
- **QA engineers** tracking improvements across sprints and releases
- **Accessibility teams** monitoring problem areas and regression risk
- **Developers** who want quick feedback on whether a change **improved or hurt** accessibility before merge

If you ship digital products for real users, the score is a useful **signal**, not the only bar for “done.”

## Where to find it

Open any **completed** accessibility test in your TestMu AI **Accessibility** flow. You'll see:

- The **overall score** for the run, its **label**, and a **color indicator** on the test report.
- A **per-page (web) or per-screen (mobile) score** below the overall score, so you can prioritize which pages to fix first.
- The same scores on **scheduled scans**, **[shared reports](/support/docs/accessibility-exporting-sharing-reports/)**, and **merged reports**.

Start from **[Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)** if you are unsure how reports are listed.

**Severity is a separate item from the score**
In the report, **Severity** (the accessibility level—Critical, Serious, Moderate, Minor) is a **distinct item** shown alongside the Accessibility Score, not part of the score number itself. Severity classifies **individual issues** by how badly they affect users; the **score** is the single aggregate, density-adjusted number for the whole page or screen. Severity *feeds into* how the score is weighted (see [Step 3](#step-3--calculate-deductions)), but the two are displayed and used independently—so a report can show a high-severity issue **and** its own separate score. In the API these map to the separate `accessibility_level` and `accessibility_score` fields.

## How the score is calculated

The Accessibility Score reflects **both** how many issues were found and **how severe** they are, adjusted for the **size** of the page or screen. It is a **density-adjusted deduction model**: it starts at a perfect **100** and deducts points based on the number, severity, and concentration of confirmed issues. The methodology is a **proprietary TestMu AI metric** designed for **trend and prioritization**—it is not a public WCAG scoring rubric. The same four steps run for every product.

### Step 1 — Filter

Not all issues count toward the score. The following are **excluded**:

| Excluded from score | Reason |
| --- | --- |
| Best-practice issues | Recommendations, not WCAG requirements |
| Needs-review issues | Require manual verification—not confirmed failures |
| AI-generated rule findings | Inferred by AI, not confirmed by the rule engine |

Only issues with a confirmed severity—**Critical**, **Serious**, **Moderate**, or **Minor**—contribute.

### Step 2 — Deduplicate

Issues are grouped by their **signature**: the rule that failed, the type of element it failed on, and the page or screen where it occurred. If 50 buttons on the same page fail the same contrast rule, they count as **one signature with 50 instances**, not 50 separate issues—so a single CSS bug can't disproportionately tank the score.

### Step 3 — Calculate deductions

Issues are weighted by severity: **Critical** issues have the largest impact, followed by **Serious**, **Moderate**, and **Minor**. When the same issue appears on multiple elements, each additional occurrence adds to the penalty, but with **diminishing returns** so one repeated pattern can't dominate the score.

### Step 4 — Apply density adjustment

This is what makes the score **page-size aware**. The same 2 critical issues have very different impact on a 12-element login form versus a 2000-element dashboard. Using the [scored element count](#scored-element-count) as the denominator:

```text
Density = Total issue instances / Scored elements on the page
```

Higher density means issues are more concentrated, and deductions are multiplied accordingly—so small critical flows (login, checkout, payment) are correctly flagged as high priority while large pages with a few scattered issues are not over-penalized.

### Final score

The deductions are combined into the final score:

```text
Score = max(1, floor(100 × e^(−AdjustedDeductions / 133)))
```

The minimum graded score is **1**. A score of **0** is reserved exclusively for **keyboard-only scans**.

### Scored element count

Density depends on the **scored element count**: the number of elements on a page or screen that are meaningful from an accessibility perspective (buttons, inputs, links, headings, images, and so on). Decorative, structural, and hidden elements are **excluded** so they don't inflate the score.

A page with 1000 scored elements and 5 issues is in far better shape than one with 10 scored elements and 5 issues, and the score reflects that.

## Per-product nuances

The scoring math—filtering, dedup, severity weighting, density, and bands—is **identical everywhere**. The only thing that differs by product is **which elements are treated as "meaningful"** and a few flow-specific behaviors. Everything below lives in this single doc so you never have to look in more than one place.

### Web (Automated, Manual/DevTools, Scheduled)

Elements are evaluated from the **DOM**. Not counted toward the scored element count:

- Structural containers without an ARIA role (``, ``)
- Script, style, and metadata tags (``, ``, ``, ``)
- Formatting elements (``, ``, ``)
- Decorative images (``—an empty alt means intentionally decorative)
- Hidden elements (`display:none`, `visibility:hidden`, `aria-hidden="true"`)
- Elements with `role="presentation"` or `role="none"`
- Table structure elements (``, ``, ``)
- Container frames (``—content inside is scored separately)
- ``, ``, `` without an accessible name

**Flow notes:** all three web flows use the same rules; **Scheduled** scans additionally track the score run-over-run over time, and a **keyboard-only scan** reports **0** (Keyboard scan) rather than a graded score.

### Native Android (Real Device)

Elements are evaluated from `AccessibilityNodeInfo`. Not counted:

- Layout containers (`LinearLayout`, `ConstraintLayout`, `FrameLayout`, `RelativeLayout`, `ViewGroup`)
- Scroll containers (`ScrollView`, `RecyclerView`, `NestedScrollView`)
- Spacing elements (`Space`)
- Decorative `ImageView` without a `contentDescription`
- Non-displayed elements

### Native iOS (Real Device)

Elements are evaluated from `XCUIElement`. Not counted:

- Container types (`XCUIElementTypeWindow`, `XCUIElementTypeOther`, `XCUIElementTypeGroup`)
- Scroll containers (`XCUIElementTypeScrollView`, `XCUIElementTypeTable`, `XCUIElementTypeCollectionView`)
- System elements (`XCUIElementTypeStatusBar`, `XCUIElementTypeKeyboard`)
- Decorative `XCUIElementTypeImage` without a label
- Non-visible elements

### Always counted (overrides)

Regardless of platform, an element is **always scored**—even if it would otherwise be excluded—when it is genuinely interactive or explicitly exposed to assistive tech:

- It has an explicit ARIA role (e.g. ``)
- It is an `` **without** an `alt` attribute (the missing alt *is* the accessibility issue)
- It is clickable or editable (Android: `isClickable`, `isLongClickable`)
- It has `isImportantForAccessibility=true` (Android)

Because these rules only change the **denominator**, scores stay directly comparable across web and mobile.

## Worked examples

These show how the same model plays out on each product.

### Web — E-commerce checkout page

**Setup:** 200 total elements, but only **80 are scored** (the rest are decorative wrappers, icons, and structural ``s). The scan found 1 critical missing label on the payment input, 8 serious button-contrast issues, and 3 serious link-contrast issues—**3 signatures, 12 instances**, affecting ~15% of scored elements.

| Scoring model | Score | Label |
| --- | --- | --- |
| Old ratio-based | 95 | Excellent |
| **Density-adjusted** | **55** | **Needs Work** |

The old score was inflated by 120 decorative elements that trivially passed. The new score correctly flags a checkout page where a customer cannot complete a purchase because the payment input has no label for screen readers.

### Native mobile — App login screen

**Setup:** 12 total elements, **all 12 scored** (no decorative elements on a login screen). The scan found 3 critical missing labels on the 3 input fields and 2 serious button-contrast issues—**2 signatures, 5 instances**, affecting ~42% of scored elements.

| Scoring model | Score | Label |
| --- | --- | --- |
| Old ratio-based | 62 | Needs Work |
| **Density-adjusted** | **43** | **Poor** |

42% of the login screen is critically broken—users literally cannot identify the form fields. This should be the first thing the team fixes; no user can log in without accessible input labels.

### Web — Marketing landing page

**Setup:** 2500 total elements, but only **400 are scored** (the rest are decorative SVGs, background images, and layout containers). The scan found 3 serious missing alt texts on hero images and 5 moderate heading-order issues—**2 signatures, 8 instances**, affecting ~2% of scored elements.

| Scoring model | Score | Label |
| --- | --- | --- |
| Old ratio-based | 99 | Excellent |
| **Density-adjusted** | **84** | **Good** |

The issues are real (3 hero images are invisible to screen readers) but dispersed across a large page. Fix them next sprint—no need to panic.

### Same issues, different scores

Density is why the **same 2 critical issues** produce different scores by page size:

| Page | Scored elements | Density | Score | Label |
| --- | --- | --- | --- | --- |
| Login form | 10 | 20% | **54** | Needs Work |
| Settings page | 50 | 4% | **69** | Needs Work |
| Product catalog | 200 | 1% | **72** | Good |
| Large dashboard | 1000 | 0.2% | **74** | Good |

## What impacts your score

- **Severity distribution**: More weight on critical/serious issues lowers the score faster than many minor-only findings.
- **Issue density**: More issues **per element** lowers the score; a complex page with more elements affects **y** relative to a tiny page.
- **Total element count**: Larger DOMs change the density denominator; the formula is built so density stays meaningful across page sizes.

## Improving your score

Focus on **high-impact** changes:

1. **Fix critical issues first**: They carry the most weight and usually block real users.
2. **Reduce density**: Systematic patterns (wrong component library defaults, shared header issues) hurt more than one-off edge cases.
3. **Re-scan after meaningful fixes**: Compare score **and** issue lists run-over-run; use **[Exporting & Sharing Reports](/support/docs/accessibility-exporting-sharing-reports/)** for audit trails.

For fix order and rule context, use the **[Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)** and platform checklists: [Web](/support/docs/accessibility-web-what-we-cover/) · [iOS](/support/docs/accessibility-ios-what-we-cover/) · [Android](/support/docs/accessibility-android-what-we-cover/).

## How to use the score in reviews (short checklist)

1. Open the report from **[Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)** and note the score **vs** the previous comparable build.
2. Open **[Issue Summary](/support/docs/accessibility-testing-dashboard-issue-summary/)** to see **which severities and rules** moved.
3. Only then decide if the score alone is enough for a stakeholder update, or if you need **[Passed Test Cases](/support/docs/accessibility-passed-test-cases/)** and manual notes.

## Remember

- The Accessibility Score is a **TestMu AI proprietary** metric; it is **unique to this platform** and is meant for **product and engineering prioritization**, not as a substitute for legal analysis.
- It does **not** replace manual testing, screen reader validation ([overview](/support/docs/screen-reader-on-accessibility/)), or documented compliance processes.

## Related docs

- [Issue Summary](/support/docs/accessibility-testing-dashboard-issue-summary/)
- [All Issues](/support/docs/accessibility-testing-dashboard-all-issues/)
- [Passed Test Cases](/support/docs/accessibility-passed-test-cases/)
- [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/)
- [Exporting & Sharing Reports](/support/docs/accessibility-exporting-sharing-reports/)
- [Accessibility Compliance Guide (ADA / WCAG / EAA / 508)](/support/docs/accessibility-compliance-guide/)
- [VPAT and ACR evidence (customer-owned templates)](/support/docs/accessibility-vpat-report-generation/)
