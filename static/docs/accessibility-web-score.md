# Accessibility Score

The **Accessibility Score** is a single number from **0 to 100** that represents the accessibility health of a scanned page or screen. Instead of only reading long reports, the score gives you a **clear, actionable signal** for where the product stands relative to the issues found in that scan. Use it to **track progress over time**, **compare releases**, and **show improvement trends** to stakeholders—**together** with issue detail and any manual testing your program requires.

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

If you ship digital products for real users, the score is a useful **signal**—not the only bar for "done."

## Score bands

Every score maps to a label and color band for an at-a-glance read of accessibility health:

| Score range | Label | What it means |
| --- | --- | --- |
| **90–100** | **Excellent** | Few or no automated findings. In great shape from an automated-testing perspective; keep monitoring each release. |
| **70–89** | **Good** | Some issues found, but manageable in scope. Review and plan remediation in upcoming sprints. |
| **50–69** | **Needs Work** | Significant issues that likely affect users of assistive technologies. Prioritize fixing these. |
| **1–49** | **Poor** | Major accessibility barriers. Users with disabilities will face serious difficulty. Immediate remediation recommended. |
| **0** | **Keyboard scan** | A keyboard-only scan—no visual score is assigned. |

Exact cutoffs are **guidance**; your product's risk tolerance may differ.

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

- **Severity distribution** — More weight on critical/serious issues lowers the score faster than many minor-only findings.
- **Issue density** — More issues **per scored element** lowers the score; a small critical flow is penalized more than a large page with the same issues.
- **Scored element count** — Larger, meaningful DOMs/screens change the density denominator so the score stays fair across page sizes.

## When the score updates

The score is not static. It recomputes automatically when the underlying issue data changes:

- **Hiding an issue** (e.g. marking a known exception) recomputes the score from the remaining visible issues—the dashboard updates in real time. See **[Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/)**.
- **Restoring a hidden issue** recomputes again and the score decreases to include it.
- **Toggling "Needs Review"** updates issue counts but **does not change the score**, because needs-review items are excluded from scoring.

## Improving your score

Focus on **high-impact** changes:

1. **Fix critical issues first** — They carry the most weight and usually block real users.
2. **Reduce density** — Systematic patterns (wrong component-library defaults, shared header issues) hurt more than one-off edge cases.
3. **Prioritize by page** — Use per-page/per-screen scores to fix the lowest-scoring critical flows (login, checkout, registration) first.
4. **Re-scan after meaningful fixes** — Compare score **and** issue lists run-over-run; use **[Exporting & Sharing Reports](/support/docs/accessibility-exporting-sharing-reports/)** for audit trails.

For fix order and rule context, use the **[Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)** and platform checklists: [Web](/support/docs/accessibility-web-what-we-cover/) · [iOS](/support/docs/accessibility-ios-what-we-cover/) · [Android](/support/docs/accessibility-android-what-we-cover/).

## How to use the score in reviews (short checklist)

1. Open the report from **[Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)** and note the score **vs** the previous comparable build.
2. Open **[Issue Summary](/support/docs/accessibility-testing-dashboard-issue-summary/)** to see **which severities and rules** moved.
3. Only then decide if the score alone is enough for a stakeholder update—or if you need **[Passed Test Cases](/support/docs/accessibility-passed-test-cases/)** and manual notes.

## API response

When the score is enabled, these fields appear in accessibility test API responses for **every product**:

| Field | Type | Description |
| --- | --- | --- |
| `accessibility_score` | integer | The score from 0 to 100. 0 means a keyboard-only scan; 1–100 is the density-adjusted score. |
| `score_label` | string | `Excellent`, `Good`, `Needs Work`, `Poor`, or `Keyboard scan`. |
| `scored_element_count` | integer | Meaningful elements evaluated after excluding decorative/structural elements. |

The fields appear at **two levels**: the **test level** (aggregate across all pages/screens) and the **per-scan level** (each URL on web, each screen on mobile).

```json
{
"test_info": { "test_id": "AUT_abc123", "status": "completed" },
"accessibility_score": 72,
"score_label": "Good",
"scored_element_count": 1627,
"scan_info": [
{
"page_url": "https://example.com/login",
"issue_count": 5,
"accessibility_score": 43,
"score_label": "Poor",
"scan_id": "AUT_abc123_1"
},
{
"page_url": "https://example.com/dashboard",
"issue_count": 8,
"accessibility_score": 88,
"score_label": "Good",
"scan_id": "AUT_abc123_2"
}
]
}
```

If a test ran before the score was enabled, or `scored_element_count` is unavailable, these fields are omitted. The existing `accessibility_level` (Critical / Serious / Moderate / Minor) is still returned and can be used as a fallback.

## FAQ

**What does a score of 100 mean?**
No automated issues were detected by the scanning engine. It does **not** mean full WCAG conformance—automated tools catch roughly 30–40% of WCAG issues. A manual audit is still recommended.

**Why is my score different from before?**
The old ratio-based score counted decorative and structural elements as "passing," which inflated results. The density-adjusted model only weighs meaningful, functional elements—so scores are generally lower but more honest.

**Why don't I see a score on my test?**
The score requires `scored_element_count`, collected by newer versions of the scanning extensions and SDKs. Tests run before the feature was enabled show the existing accessibility level instead.

**Does hiding issues change the score?**
Yes. Hiding an issue recomputes the score from the remaining visible issues, and the dashboard updates in real time. Restoring a hidden issue recomputes again.

**Is the score the same across web and mobile?**
Yes. The formula is identical everywhere; only the exclusion rules that decide which elements count differ (web uses DOM rules, Android uses `AccessibilityNodeInfo`, iOS uses `XCUIElement`).

**Does toggling "Needs Review" change the score?**
No. Needs-review items are excluded from scoring because they require manual verification. Toggling updates issue counts but not the score.

**What is the minimum score?**
1. A score of 0 is reserved exclusively for keyboard-only scans.

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
