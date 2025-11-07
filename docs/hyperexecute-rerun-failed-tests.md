---
id: hyperexecute-rerun-failed-tests
title: Rerun Failed Tests on HyperExecute
hide_title: false
sidebar_label: Rerun Failed Tests
description: Optimize  your workspace with HyperExecute job archiving to boost productivity. Keep only relevant jobs. Learn more!
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-rerun-failed-tests/
site_name: LambdaTest
slug:  hyperexecute-rerun-failed-tests/
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
          "name": "HyperExecute Concepts",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-rerun-failed-tests/"
        }]
      })
    }}
></script>
Debugging test failures often involves identifying the root cause, fixing the issue, and rerunning tests to validate the fix. However, in large test suites with hundreds or thousands of tests, rerunning the entire job consumes significant time and resources.

To address this, HyperExecute introduces Rerun Failed Tests, a feature that allows you to rerun only the failed tests or scenarios from a previous job, drastically reducing your feedback loop and helping you validate fixes faster.

## Why Use Rerun Failed Tests?
Consider a scenario where you’ve executed 1000 tests in a single HyperExecute job, and 50 tests failed due to a bug, either in your test code, infrastructure, or application under test. Previously, you’d need to rerun the entire job to verify the fix. With **Rerun Failed Tests**, you can now:
- Quickly identify failed tests via RCA (Root Cause Analysis).
- Apply your fix (in code or application).
- Rerun only failed tests from the same job, instead of re-running the entire suite.

This shortens your CI/CD cycle, saves compute time, and accelerates feedback.
<!-- 
## Types of Rerun

| Rerun Type | Description | Use Case |
| ---------- | ----------- | -------- |
| **Rerun Complete Job** | Reruns the entire workflow from scratch | Useful when the fix impacts multiple parts of the codebase or environment |
| **Rerun Failed Scenarios Only** | Reruns only the failed test cases or scenarios from the selected job | Ideal for quick validation of specific fixes | -->

## How to Rerun Failed Tests

**Step 1 :** Go to the Jobs section in the HyperExecute Dashboard.

**Step 2 :** Open the job you want to rerun. Click on the **Rerun** button

<img loading="lazy" src={require('../assets/images/hyperexecute/features/rerun/1.png').default} alt="Image"  className="doc_img"/>

**Step 3 :** Select the **Commit** whether you want to rerun with the same commit or with the latest one and select the Concurrency as well. Click on the **Rerun** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/rerun/2.png').default} alt="Image"  className="doc_img"/>

HyperExecute will automatically trigger a new job referencing the same commit or sourcePayload.

## Benefits
- **Reduce feedback loop time :** no need to rerun full test suites.
- **Save resources :** run only what failed.
- **Simplify debugging :** rerun failed scenarios directly after applying fixes.
- **Integrates seamlessly :** works across Dashboard, CLI, and APIs.
- Supports same or latest commit reruns.