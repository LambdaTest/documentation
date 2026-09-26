# Configure Accessibility Automation

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This document details the configuration options available for your automated accessibility tests, ensuring comprehensive and efficient assessments.

To enable the accessibility testing within your automated test suite, set the accessibility: true in your configuration file. You can also define other settings capabilities as described below.

```java
"accessibility" : true,                 // Enable accessibility testing
"accessibility.wcagVersion": "wcag21a", // Specify WCAG version (e.g., WCAG 2.1 Level A)
"accessibility.bestPractice": false,    // Exclude best practice issues from results
"accessibility.needsReview": true,      // Include issues that need review
"accessibility.excludeRules": ["color-contrast", "image-alt"], // Skip specific axe rules
"accessibility.excludeRuleCategories": "aria"                  // Skip every rule in a category
```

## Key Configurations Options

By configuring these options effectively, you can tailor your accessibility tests to achieve a balance between thoroughness and efficiency, ensuring your web applications are inclusive for all users.

### 1. Enable Accessibility Checks

- **Purpose:** Activate accessibility testing within your automated test suite. This allows you to identify and address accessibility violations that might hinder usability for users with disabilities.
- **Implementation:** Set the `accessibility` property to `true` within your configuration file.

```bash
accessibility : true
```

### 2. WCAG Version

- **Purpose:** Define the specific Web Content Accessibility Guidelines (WCAG) version your tests should evaluate against. WCAG defines internationally recognized standards for web accessibility.
- **Options:** Common options include WCAG 2.0, WCAG 2.1 Level A, or WCAG 2.1 Level AAA. Each level represents increasing accessibility requirements.
- **Implementation:** Specify the desired WCAG version using the wcagVersion property within your configuration file.

```bash
accessibility.wcagVersion: 'wcag21a'
```

### 3. Best Practices Checks

- **Purpose:** Include or exclude checks that go beyond the defined WCAG standards but are considered good practices for optimal usability.
- **Default Value:** The default setting is false, focusing strictly on WCAG violations.
- **Implementation:** Enable best practice checks by setting bestPractice to true in your configuration file.

```bash
accessibility.bestPractice: false
```

### 4. Needs Review

- **Purpose:** Flag potential accessibility issues that might require human evaluation for definitive assessment.
- **Implementation:** Enable needs review checks by setting needsReview to true in your configuration file. This ensures potentially ambiguous issues get flagged for manual review.

```bash
accessibility.needsReview: true
```

### 5. Exclude Rules

- **Purpose:** Skip specific accessibility rules that your team has reviewed and accepted, so they do not fail every build. Excluded rules are switched off before the scan runs and do not count towards the score.
- **Options:** An array of axe-core rule IDs, or a comma-separated string. Unknown IDs are logged and ignored; the session still runs.
- **Implementation:** Set `accessibility.excludeRules` in your capabilities. Supported on Selenium and Playwright sessions, on the cloud grid and on HyperExecute.

```bash
accessibility.excludeRules: ["color-contrast", "image-alt"]
```

### 6. Exclude Rule Categories

- **Purpose:** Skip every rule in a category in one setting, for example all ARIA rules.
- **Options:** An array of category slugs, or a comma-separated string. The twelve web categories are `aria`, `structure-and-semantics`, `text-alternatives`, `keyboard`, `name-role-value`, `tables`, `forms`, `language`, `time-and-media`, `color-contrast`, `sensory-and-visual-cues` and `parsing`.
- **Implementation:** Set `accessibility.excludeRuleCategories` in your capabilities.

```bash
accessibility.excludeRuleCategories: "aria"
```

If the two exclusion lists remove every rule in scope, the session is rejected at creation and no browser is allocated. Keep at least one rule enabled, or set `accessibility` to `false` for that session.

For rule IDs, category slugs, precedence and error handling, see [Rule and Category Exclusion for Web Accessibility Automation](/support/docs/accessibility-web-automation-rule-exclusion/).
