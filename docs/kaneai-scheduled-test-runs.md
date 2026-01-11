---
id: kaneai-scheduled-test-runs
title: Scheduled Test Runs
hide_title: false
sidebar_label:  Scheduled Test Runs
description: This documentation will help you to understand how to create a scheduled test runs via KaneAI
keywords:
- users management testmu ai
- manage user
url: https://www.testmu.ai/support/docs/kaneai-scheduled-test-runs
site_name: LambdaTest
slug: kaneai-scheduled-test-runs
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
          "name": "Scheduled Test Runs",
          "item": `${BRAND_URL}/support/docs/kaneai-scheduled-test-runst/`
        }]
      })
    }}
></script>
In this documentation, you will learn how to create a scheduled test run using pre-existing test runs. This involves navigating through your project, selecting test configurations, and setting up recurring schedules to automate test executions at specified times.

**Step 1:** Navigate to **Test Manager** >> select your desired project >> **Test Runs** section.

<img loading="lazy" src={require('../assets/images/kane-ai/features/schedule-tests/test-run-one.png').default} alt="testing"  className="doc_img" />

**Step 2:** Here, you will see the details of your existing test runs. To create a schedule, click on the three dots next to a test run and select **Create Schedule**. Alternatively, you can go to the **Scheduled runs** section to view all existing schedules. If you don't have any existing schedule, click on **Create a Scheduled Run** button to create a scheduled run.

> Test Runs must be created before creating a test run schedule.

<img loading="lazy" src={require('../assets/images/kane-ai/features/schedule-tests/2.png').default} alt="testing"  className="doc_img" />

**Step 3:** Provide the details related to the test you want to schedule, like **Schedule Name**, select existing test run you want to schedule, and configure the date and time details.

<img loading="lazy" src={require('../assets/images/kane-ai/features/schedule-tests/3.png').default} alt="testing"  className="doc_img" />

**Step 4:** After making your selections, click **Next** to review a summary of the schedule, including the scheduled date and time.

<img loading="lazy" src={require('../assets/images/kane-ai/features/schedule-tests/4.png').default} alt="testing"  className="doc_img" />

**Step 5:** In the **Build Parameters** box, you can define your desired concurrency for the tests. Click on the **Advanced Configurations** button to configure settings like network logs, console settings, or accessibility testing. If necessary, [replace URL settings](/support/docs/kaneai-dynamic-url-replacement/). Finally, click **Schedule Test Run** to create a recurring schedule.

<img loading="lazy" src={require('../assets/images/kane-ai/features/schedule-tests/5.png').default} alt="testing"  className="doc_img" />

**Step 6:** Click on any existing schedule to view detailed information, including a summary of test outcomes, passed and failed cases, and their respective instances. This helps in easily reviewing and proceeding with the tests.

<img loading="lazy" src={require('../assets/images/kane-ai/features/schedule-tests/6.png').default} alt="testing"  className="doc_img" />

## Video Explanation

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/schedule-tests/output.mp4').default} type="video/mp4" />
</video>
