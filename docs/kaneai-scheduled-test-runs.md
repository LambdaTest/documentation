---
id: kaneai-scheduled-test-runs
title: How to Schedule Test Runs With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Scheduled Test Runs
description: Schedule recurring KaneAI test runs to execute automatically at set times.
keywords:
- kaneai scheduled test runs
- schedule test execution
- recurring test runs
url: https://www.testmuai.com/support/docs/kaneai-scheduled-test-runs/
site_name: TestMu AI
slug: kaneai-scheduled-test-runs/
canonical: https://www.testmuai.com/support/docs/kaneai-scheduled-test-runs/
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
          "name": "How to Schedule Test Runs in KaneAI",
          "item": `${BRAND_URL}/support/docs/kaneai-scheduled-test-runs/`
        }]
      })
    }}
></script>

# How to Schedule Test Runs With KaneAI
***

Scheduled test runs re-execute an existing KaneAI test run automatically at set times. You select a test run, choose its configurations, and define a recurring schedule. The steps below show how.

## Prerequisites
***

:::note
You need an existing test run. Create it before you schedule, you cannot schedule a run that does not exist yet.
:::

## Schedule a Test Run
***

Follow these steps to select a test run, set its configurations, and define a recurring schedule.

### Step 1: Open the Test Runs Section
***

Navigate to **Test Manager**, select your project, and open the **Test Runs** section.

<img loading="lazy" src={require('../assets/images/kane-ai/features/schedule-tests/test-run-one.png').default} alt="Scheduling a KaneAI test run"  className="doc_img" />

**Result:** The Test Runs section lists your existing test runs.

### Step 2: Create a Schedule
***

Click the three dots next to a test run and select **Create Schedule**. Alternatively, open the **Scheduled runs** section to view all existing schedules, then click **Create a Scheduled Run**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/schedule-tests/2.png').default} alt="Scheduling a KaneAI test run"  className="doc_img" />

**Result:** The schedule creation form opens.

### Step 3: Enter Schedule Details
***

Enter the **Schedule Name**, select the existing test run you want to schedule, and set the date and time.

<img loading="lazy" src={require('../assets/images/kane-ai/features/schedule-tests/3.png').default} alt="Scheduling a KaneAI test run"  className="doc_img" />

**Result:** The schedule is defined with your selected test run and timing.

### Step 4: Review the Summary
***

Click **Next** to review a summary of the schedule, including the scheduled date and time.

<img loading="lazy" src={require('../assets/images/kane-ai/features/schedule-tests/4.png').default} alt="Scheduling a KaneAI test run"  className="doc_img" />

**Result:** The summary confirms the schedule details before you save.

### Step 5: Set Build Parameters and Schedule
***

In the **Build Parameters** box, define the concurrency for the tests. Click **Advanced Configurations** to configure settings such as network throttling, URL replacement, visual regression, accessibility testing, and [Reports](/support/docs/kaneai-hyperexecute-test-run-execution/#reports). Click **Schedule Test Run** to create the recurring schedule.

<img loading="lazy" src={require('../assets/images/kane-ai/features/schedule-tests/5.png').default} alt="Scheduling a KaneAI test run"  className="doc_img" />

**Result:** The recurring schedule is created and runs automatically at the set times.

### Step 6: Review a Schedule
***

Click any existing schedule to view its details, including a summary of test outcomes, passed and failed cases, and their instances.

<img loading="lazy" src={require('../assets/images/kane-ai/features/schedule-tests/6.png').default} alt="Scheduling a KaneAI test run"  className="doc_img" />

**Result:** The schedule detail view shows the outcomes of each scheduled run.

## Next Steps
***

Continue with these guides:

- [KaneAI HyperExecute Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/): Create and execute a test run before scheduling it.
- [Test Runs Configurations](/support/docs/test-runs-configurations/): Manage the browser and device configurations a schedule uses.

## Video Explanation
***

Watch a short walkthrough:

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/schedule-tests/output.mp4').default} type="video/mp4" />
</video>
