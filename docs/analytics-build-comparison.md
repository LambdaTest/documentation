---
id: analytics-build-comparison
title: Build Comparison - Compare Test Builds and Track Regressions
sidebar_label: Build Comparison
description: Compare two builds side by side to identify new failures, fixed tests, and stability changes across your test suite
keywords:
  - analytics
  - build comparison
  - build compare
  - regression detection
  - test stability
  - build diff
  - test observability
url: https://www.lambdatest.com/support/docs/analytics-build-comparison/
site_name: LambdaTest
slug: analytics-build-comparison/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Build Comparison",
          "item": "https://www.lambdatest.com/support/docs/analytics-build-comparison/"
        }]
      })
    }}
></script>

---

import NewTag from '../src/component/newTag';

## Overview

Build Comparison is a powerful feature within Build Insights that allows you to compare two builds side by side. Instead of manually reviewing test results from different runs, you can instantly see what changed between any two builds—which tests started failing, which got fixed, and which remain stable.

This feature is essential for teams who need to:
- Validate whether a new deployment introduced regressions
- Confirm that bug fixes actually resolved failing tests
- Track test stability across different environments or configurations
- Make data-driven release decisions with confidence

## Accessing Build Comparison

To access Build Comparison:

1. Navigate to **Insights** from the left sidebar
2. Click on **Build Insights** to view your list of builds
3. Click on any build to open the **Build Details** page
4. Select the **Compare** tab at the top of the page

## Selecting Builds to Compare

At the top of the Compare tab, you'll see two dropdown selectors:

- **Base**: The reference build you want to compare against (typically an older or known-stable build)
- **Compare**: The target build you want to analyze (typically a newer build or the one under investigation)

**Business Use Case**: When deploying a new release, select your last stable production build as the **Base** and the new release candidate as **Compare** to instantly identify any regressions introduced by the new code.

---

## Key Comparison Metrics

The Compare tab displays six critical metrics that give you an immediate understanding of what changed between builds:

<img loading="lazy" src={require('../assets/images/analytics/build-comparison-summary.webp').default} alt="Build Comparison - Key Metrics Summary" className="doc_img"/>

### New Failures

<div className="lt-highlight-box">
<strong>Definition:</strong> Tests that passed in the Base build but failed in the Compare build.
</div>

**Why This Matters**: New failures are your top priority. These represent regressions—functionality that was working but is now broken. A spike in new failures typically indicates:
- A code change broke existing functionality
- Environment or configuration issues
- Flaky infrastructure causing false positives

**Business Use Case**: Before approving a release, check if **New Failures = 0**. If there are new failures, investigate each one to determine if they are true regressions or environmental issues.

### Pass Rate

<div className="lt-highlight-box">
<strong>Definition:</strong> The percentage of tests that passed in the Compare build, displayed with a delta (↗ or ↘) showing the change from the Base build.
</div>

**Why This Matters**: Pass rate gives you a single number to communicate build health. The delta indicator (e.g., `↘ 0.77`) shows whether the build is improving or degrading compared to the baseline.

**Business Use Case**: Set team thresholds like "Release only if pass rate is above 95%" or "Investigate if pass rate drops by more than 2%."

### Fixed

<div className="lt-highlight-box">
<strong>Definition:</strong> Tests that failed in the Base build but passed in the Compare build.
</div>

**Why This Matters**: Fixed tests confirm that bug fixes and improvements are working. This metric helps you:
- Validate that reported issues have been resolved
- Track the effectiveness of your debugging efforts
- Communicate positive progress to stakeholders

**Business Use Case**: After a sprint focused on stabilization, use the Fixed count to demonstrate progress. Report "We fixed 15 failing tests this sprint" with data to back it up.

### No Change

<div className="lt-highlight-box">
<strong>Definition:</strong> Tests that had the same outcome in both builds (passed in both or failed in both).
</div>

**Why This Matters**: A high No Change count indicates stability. Most of your tests should fall into this category—it means your test suite is behaving predictably.

**Business Use Case**: If No Change is low compared to your total test count, your test suite may be too volatile. Consider investigating flaky tests or environment instability.

### Additional Tests

<div className="lt-highlight-box">
<strong>Definition:</strong> Tests that exist in the Compare build but were not present in the Base build.
</div>

**Why This Matters**: This metric tracks test coverage growth. When new features are added, new tests should accompany them. Additional Tests helps you:
- Verify that new features include test coverage
- Track test suite growth over time
- Identify when tests were added to address gaps

**Business Use Case**: During code reviews, check if new features have corresponding Additional Tests. A feature PR with zero additional tests may indicate insufficient test coverage.

### Dropped Tests

<div className="lt-highlight-box">
<strong>Definition:</strong> Tests that existed in the Base build but are missing from the Compare build.
</div>

**Why This Matters**: Dropped tests could indicate:
- Intentional test removal (deprecated features)
- Accidental test deletion
- Test execution issues (tests not running due to errors)

**Business Use Case**: Unexpected dropped tests are a red flag. If you see dropped tests you didn't intentionally remove, investigate immediately—tests may have been accidentally deleted or are failing to execute.

---

## Results Comparison Chart

The Results Comparison chart provides a visual side-by-side comparison of test outcomes between the Base and Compare builds.

<img loading="lazy" src={require('../assets/images/analytics/build-comparison-charts.webp').default} alt="Build Comparison - Results Comparison and Status Changes Charts" className="doc_img"/>

### Understanding the Chart

The horizontal bar chart groups tests by their execution status. Each status that appears in either build will have its own row in the chart.

#### Available Test Statuses

| Status | Description |
|--------|-------------|
| **Passed** | Test completed successfully with all assertions met |
| **Failed** | Test did not pass due to assertion failures or test logic errors |
| **Completed** | Test execution finished (typically used for manual or hybrid tests) |
| **Idle Timeout** | Test exceeded the maximum allowed idle time without activity |
| **Queue Timeout** | Test waited too long in the execution queue and was terminated |
| **Error** | Test encountered an unexpected error during execution |
| **Lambda Error** | Test failed due to an infrastructure or Lambda function error |
| **Skipped** | Test was intentionally skipped based on conditions or configuration |

:::note
The chart will only display statuses that are present in either the Base or Compare build. If all your tests passed, you may only see the "Passed" row.
:::

Each status row shows two bars:
- **Purple bar (Base)**: Number of tests with that status in the Base build
- **Orange bar (Compare)**: Number of tests with that status in the Compare build

**How to Read the Chart**:
- If the orange bar (Compare) is longer than the purple bar (Base) for **Failed** or **Error** statuses, more tests are failing in the newer build
- If the orange bar is longer for **Passed**, more tests are passing—indicating improvement
- Significant differences in timeout statuses (**Idle Timeout**, **Queue Timeout**) may indicate performance regressions or infrastructure issues

**Business Use Case**: Use this chart in stakeholder meetings to visually communicate build health. A quick glance shows whether the build is improving (more green, less red) or degrading.

---

## Status Changes Chart

The Status Changes donut chart categorizes every test instance into one of four groups based on how its status changed between builds:

### New Failures

Tests that transitioned from **Passed → Failed**. These are regressions that need immediate attention.

**Action Required**: Prioritize investigating these tests. Check recent code changes, environment configurations, and test dependencies.

### Fixed Instances

Tests that transitioned from **Failed → Passed**. These represent successful bug fixes or stability improvements.

**Action Required**: Verify that these fixes are genuine and not due to flaky behavior. Consider adding these to your regression suite if they exposed real bugs.

### Stable Instances

Tests that maintained the same **Passed → Passed** status across both builds. These are your reliable tests.

**Action Required**: No immediate action. These tests are working as expected. High stable instance counts indicate a healthy, predictable test suite.

### Consistent Failures

Tests that remained **Failed → Failed** across both builds. These are known issues that haven't been addressed.

**Action Required**: Review these tests to determine if they represent:
- Known bugs waiting for fixes
- Tests that need updating due to intentional behavior changes
- Flaky tests that need stabilization
- Obsolete tests that should be removed

**Business Use Case**: Before a release, ensure that Consistent Failures are all documented and accepted. Any undocumented consistent failure should be triaged.

---

## Test Instances Comparison Table

The Test Instances Comparison table provides a detailed, test-by-test breakdown of how each test performed across both builds.

<img loading="lazy" src={require('../assets/images/analytics/build-comparison-table.webp').default} alt="Build Comparison - Test Instances Comparison Table" className="doc_img"/>

### Table Columns Explained

#### Test Instances

Displays the full test identifier, including:
- **Test name**: The descriptive name of the test (e.g., `PROD_Verify Web Automation - Sub Organization Browser/OS Usage Filters in Configure Widget`)
- **Spec file**: The test file name (e.g., `atx_configure_widget.spec.ts`)
- **Platform**: The operating system used (e.g., Windows 10)
- **Browser**: The browser and version used (e.g., Chrome 143.0)

**Use Case**: Click on any test instance to navigate to the full test details, including logs, screenshots, and video recordings.

#### Base

Shows the test execution status in the Base build. Common statuses include:

| Status | Indicator | Description |
|--------|-----------|-------------|
| **Passed** | ✓ Green | Test completed successfully |
| **Failed** | ✗ Red | Test failed due to assertion or logic errors |
| **Completed** | ✓ Blue | Test execution finished |
| **Idle Timeout** | ⏱ Yellow | Test exceeded maximum idle time |
| **Queue Timeout** | ⏱ Orange | Test timed out waiting in queue |
| **Error** | ⚠ Red | Unexpected error during execution |
| **Lambda Error** | ⚠ Dark Red | Infrastructure or Lambda function error |
| **Skipped** | ⊘ Grey | Test was skipped |

Also displays the execution duration (e.g., `1m 26s`).

#### Compare

Shows the test execution status in the Compare build, using the same status indicators as the Base column.

**Use Case**: Quickly scan this column to identify tests that changed status. Any difference between Base and Compare columns warrants investigation.

#### Duration Change

Displays the difference in execution time between the two builds:
- **Positive values** (e.g., `20s`, `3m 19s`): Test took longer in the Compare build
- **Negative values** (e.g., `-2s`, `-3m 27s`): Test was faster in the Compare build
- **0s or small values** (e.g., `0s`, `1s`): Execution time remained consistent

**Business Use Case**: Large duration increases may indicate:
- Performance regressions in the application
- Increased network latency
- Resource contention issues
- New functionality that adds execution time

Set alerts for tests with duration increases above a threshold (e.g., >30%) to catch performance issues early.

#### Change Type

Categorizes each test into one of the following types:

| Change Type | Color | Description |
|-------------|-------|-------------|
| **Stable** | Green | Test passed in both builds—no concerns |
| **No Change** | Grey | Test had a non-passing status in both builds (e.g., both Error) |
| **Status Change** | Teal | Test changed from one status to another (e.g., Passed → Error) |
| **Consistent Failure** | Blue | Test failed in both Base and Compare builds |
| **Fixed** | Green | Test failed in Base but passed in Compare—verify the fix |

**Business Use Case**: Filter the table by **Change Type** to focus your analysis:
- During release validation: Filter by **Status Change** to find tests that changed behavior
- After bug fixes: Filter by **Fixed** to verify resolutions
- For stability analysis: Filter by **Consistent Failure** to find persistent issues that need attention

---

## Filtering and Searching

### Search Functionality

Use the search bar to quickly find specific tests by name or spec file. This is especially useful when:
- A developer reports a specific test is failing
- You need to verify a particular feature's test status
- You're investigating a known issue

### Filter Options

Apply filters to narrow down the comparison results:

| Filter | Description |
|--------|-------------|
| **All** | Dropdown to filter by change type (All, Stable, Status Change, etc.) |
| **Search** | Search bar to find specific tests by name or spec file |
| **OS** | Filter by operating system (Windows 10, macOS, Linux, etc.) |
| **Browser** | Filter by browser type and version (Chrome, Firefox, Safari, Edge) |
| **Test Tags** | Filter by custom tags applied to tests |

**Business Use Case**: If failures are only occurring on a specific browser or OS, use filters to isolate the issue. This helps determine whether a failure is:
- A cross-platform issue requiring broad attention
- A browser-specific bug that may be lower priority
- An environment-specific problem in your test infrastructure

---

## Common Use Cases

### Use Case 1: Pre-Release Validation

**Scenario**: Your team is preparing to deploy a new release to production.

**Steps**:
1. Select the last stable production build as **Base**
2. Select the release candidate as **Compare**
3. Check that **New Failures = 0**
4. Verify **Pass Rate** meets your release threshold (e.g., >98%)
5. Review any **Consistent Failures** to ensure they are documented and accepted
6. Confirm no unexpected **Dropped Tests**

**Decision Criteria**: Proceed with release if no new failures are introduced and pass rate meets standards.

### Use Case 2: Debugging a Broken Build

**Scenario**: Your nightly build started failing, and you need to identify what broke.

**Steps**:
1. Select the last passing nightly build as **Base**
2. Select the failing nightly build as **Compare**
3. Review **New Failures** to identify which tests started failing
4. Check the **Duration Change** column for performance-related failures
5. Use filters to determine if failures are isolated to specific platforms
6. Click on failed test instances to view detailed logs and error messages

**Outcome**: Quickly pinpoint the exact tests that started failing and correlate with recent code changes.

### Use Case 3: Measuring Stabilization Progress

**Scenario**: Your team spent a sprint focusing on test stabilization.

**Steps**:
1. Select the build from the start of the sprint as **Base**
2. Select the latest build as **Compare**
3. Review the **Fixed** count to quantify improvements
4. Check if **Consistent Failures** decreased
5. Verify that no **New Failures** were introduced during stabilization

**Outcome**: Demonstrate measurable progress with concrete data (e.g., "We fixed 23 flaky tests and reduced consistent failures by 40%").

### Use Case 4: Environment Comparison

**Scenario**: You need to verify that tests behave the same in staging as they do in production.

**Steps**:
1. Run your test suite against both environments
2. Select the production build as **Base**
3. Select the staging build as **Compare**
4. Review any differences in test outcomes
5. Investigate environment-specific failures

**Outcome**: Identify environment configuration differences that cause test behavior variations.

### Use Case 5: Cross-Browser Compatibility Check

**Scenario**: You want to ensure a feature works consistently across all supported browsers.

**Steps**:
1. Run tests on your primary browser (e.g., Chrome)
2. Run the same tests on secondary browsers (e.g., Firefox, Safari)
3. Compare builds to identify browser-specific failures
4. Use the **Browser** filter to isolate issues by browser type

**Outcome**: Catch browser compatibility issues before they reach production.

---

## Best Practices

### 1. Compare Strategically

Always compare builds that share the same test suite. Comparing builds with different test sets can lead to misleading Additional/Dropped Tests counts.

### 2. Investigate New Failures Immediately

New failures in the Compare build represent potential regressions. Investigate these before merging code or deploying to production.

### 3. Verify Fixed Tests Are Truly Fixed

When tests transition from Failed to Passed, verify that the fix is genuine and not due to:
- Flaky test behavior
- Environmental factors
- Timing-related issues

Consider running the fixed tests multiple times to confirm stability.

### 4. Monitor Duration Changes

Significant duration increases (>20-30%) may indicate performance regressions. Track these trends over time to catch gradual performance degradation.

### 5. Document Consistent Failures

Maintain a list of known, accepted failures (Consistent Failures) with explanations. This helps team members understand which failures are expected and which require investigation.

### 6. Use Filters to Focus Analysis

When investigating issues, use filters to narrow down to specific:
- Platforms (if failures are OS-specific)
- Browsers (if failures are browser-specific)
- Tags (if failures are feature-specific)

### 7. Establish Comparison Baselines

Define standard comparison points for your team:
- Compare against the last production release for deployment validation
- Compare against the previous nightly build for daily monitoring
- Compare against the sprint-start build for measuring progress

---

## Glossary of Terms

| Term | Definition |
|------|------------|
| **Base Build** | The reference build used as the baseline for comparison |
| **Compare Build** | The target build being analyzed against the baseline |
| **New Failure** | A test that passed in Base but failed in Compare |
| **Fixed Instance** | A test that failed in Base but passed in Compare |
| **Stable Instance** | A test that passed in both Base and Compare builds |
| **Consistent Failure** | A test that failed in both Base and Compare builds |
| **Pass Rate** | Percentage of tests that passed, calculated as (Passed / Total) × 100 |
| **Duration Change** | The difference in test execution time between Compare and Base builds |
| **Dropped Test** | A test present in Base but missing from Compare |
| **Additional Test** | A test present in Compare but missing from Base |
| **Test Status** | The outcome of a test execution (Passed, Failed, Completed, Idle Timeout, Queue Timeout, Error, Lambda Error, Skipped) |

---

## Frequently Asked Questions

### Can I compare builds from different projects?

No, Build Comparison works within the same build name/project. Comparing builds across different projects would not provide meaningful results due to different test suites.

### Why are some tests showing as "Dropped" when they should be running?

Dropped tests may occur due to:
- Tests being skipped or excluded in the test configuration
- Test execution failures preventing the test from running
- Tests being removed from the test suite

Check your test configuration and execution logs to determine the cause.

### How is Pass Rate calculated?

Pass Rate is calculated as: `(Number of Passed Tests / Total Number of Tests) × 100`

The delta shown next to the pass rate indicates the change from the Base build.

### Can I share a comparison view with my team?

Yes, you can share the current comparison view using the share functionality available in the Build Details page. Note that any filters applied may need to be reapplied after sharing.

### How far back can I compare builds?

You can compare any two builds within your data retention period. The available builds for comparison depend on your subscription plan's data retention settings.

