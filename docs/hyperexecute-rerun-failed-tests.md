---
id: hyperexecute-rerun-failed-tests
title: Rerun Failed Tests on HyperExecute
hide_title: false
sidebar_label: Rerun Failed Tests
description: Speed up debugging by rerunning only failed tests or entire jobs on HyperExecute using the rerun job feature.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmu.ai/support/docs/hyperexecute-rerun-failed-tests/
site_name: LambdaTest
slug: hyperexecute-rerun-failed-tests
canonical: https://www.testmu.ai/support/docs/hyperexecute-rerun-failed-tests/
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
          "name": "HyperExecute Concepts",
          "item": `${BRAND_URL}/support/docs/hyperexecute-rerun-failed-tests/`
        }]
      })
    }}
></script>
:::info BETA
The feature is currently in **BETA**.
:::

Debugging test failures often involves **identifying the root cause, fixing the issue, and rerunning tests to validate the fix**. However, in large test suites with hundreds or thousands of tests, rerunning the entire job consumes significant time and resources.

To address this, HyperExecute supports Rerun Job functionality, a feature that allows you to rerun only the failed scenarios or all the scenarios directly from the dashboard, drastically reducing your feedback loop and helping you validate the fixes faster.

## Prerequisites
To rerun a job, the following requirements must be fulfilled. 

- Your test suite should be available on **Git** (Github, Azure Repos and Bitbucket are supported) and linked to a [Project](/support/docs/hyperexecute-projects). This is required because each time a job is rerun, HyperExecute needs access to your test suite.
- Make sure you are using **YAML version 0.1** with auto-split mode and discovery mode as local only. 

> Support for YAML version 0.2 and other modes will be added soon.

:::note
You can use the rerun feature for jobs started from your **local machine as long as Git info is available** (i.e., you’re running tests from a cloned Git repo).
 - Make sure the project details are set in your job’s YAML, and the project is linked to the same Git repo you’re running from.
 - If your local repo has uncommitted changes (a “dirty” working tree), rerun will not work. Commit or stash your changes before running the job.
:::

## Why Use Rerun Feature?
Consider a scenario where you’ve executed 1000 tests in a single HyperExecute job, and 50 tests failed due to a bug, either in your test code, infrastructure, or application under test. Previously, you were bound to run the complete job again which would have taken a lot more time (as you would have run the passed tests too) to check if the previously failed tests are passing or not. With **Rerun Job Feature**, your whole process is streamlined as given below:

**View failed scenarios -> Identify the fix via AI RCA -> Apply your fix and deploy -> Rerun only failed scenarios of the job**

### Benefits
- **Faster feedback loop:** Rerun only what matters (failed scenarios), so you confirm fixes quickly instead of re-running the full suite.
 - **Reproducible results:** Reruns always use the same YAML as the original job, even when you choose the latest commit, ensuring consistent environment settings.
 - **Better flaky test diagnosis:** By rerunning only the failed scenarios on the same configuration, it’s much easier to distinguish genuine regressions from flaky tests.
## Rerun Configuration Options
HyperExecute provides you flexibility to select different parameters while rerunning the job.
- **Failed or All Scenarios:** You can rerun only the failed scenarios or all scenarios of that job.
- **Using Same or Latest Commit:** You can reuse the same commit as the original job or the latest commit from your repository. This lets you rerun after fixing your test suite or application under test.
- **Adjusting Concurrency:** The **YAML remains the same** for the rerun and the original job to maintain the same environment, but you can change the concurrency on which the rerun job will run.

> If there are multiple test cases under a failed scenario, all those test cases will be rerun if the scenario is marked as failed.

## How to Rerun a Job
**Step 1 :** Go to the **Jobs** section in the HyperExecute dashboard. <br />
**Step 2 :** Open the job you want to rerun and click the **Rerun** button in the top bar. <br />

<img loading="lazy" src={require('../assets/images/hyperexecute/features/rerun/1.png').default} alt="Image"  className="doc_img"/>
<br /><br />

**Step 3 :** In the Rerun dialog:
- Select the **commit** you want to use (same commit as the original job or the latest commit from the repo).
- Optionally adjust the **concurrency** for the rerun.
Then click **Rerun** to start the new job.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/rerun/2.png').default} alt="Image"  className="doc_img"/>


> If you do not satisfy the mentioned conditions but still want to use the rerun job feature, please reach out to us at [support@testmu.ai](mailto:support@testmu.ai). We will be constantly evolving this feature and are looking forward to your feedback to make it better.