---
id: hyperexecute-k6-ui-testing
title: Run k6 Performance Tests on HyperExecute
hide_title: false
sidebar_label: k6
description: Upload a k6 script, set the load from the HyperExecute dashboard and analyze the results of your k6 performance tests.
keywords:
  - hyperexecute performance testing
  - hyperexecute
  - testmu ai
  - k6
  - hyperexecute dashboard
url: https://www.testmuai.com/support/docs/hyperexecute-k6-ui-testing/
site_name: TestMu AI
slug: hyperexecute-k6-ui-testing/
canonical: https://www.testmuai.com/support/docs/hyperexecute-k6-ui-testing/
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
          "name": "Products Integration",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Performance Testing",
          "item": `${BRAND_URL}/support/docs/hyperexecute-k6-ui-testing/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-k6-ui-testing/"
    },
    "headline": "Run k6 Performance Tests on HyperExecute",
    "description": "Upload a k6 script, set the load from the HyperExecute dashboard and analyze the results of your k6 performance tests.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-k6-ui-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "hyperexecute performance testing",
      "hyperexecute",
      "testmu ai"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "A TestMu AI organization with access to HyperExecute performance testing; a k6 script (.js or .ts) that exports a default function.",
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
    "dateModified": "2026-10-28T12:00:00+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Run k6 Performance Tests on HyperExecute",
      "description": "Upload a k6 script, set the load from the HyperExecute dashboard and analyze the results of your k6 performance tests.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Setup your k6 Project",
          "text": "Go to the HyperExecute Projects dashboard, click New Project, select k6 as the Type of Project, enter a Project Name, upload your k6 script (.js or .ts) with any modules or data files it reads, and click Save.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-k6-ui-testing/#step-1-setup-your-k6-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure Test Load Criteria",
          "text": "Select your script, click Run, and set Total Users, Duration (min) and Ramp-up Time (min).",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-k6-ui-testing/#step-2-configure-test-load-criteria"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure Test Load Distribution",
          "text": "Review the region (East US), add Job Labels, set Max Users per Engine and the Global Timeout, and click Run Test.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-k6-ui-testing/#step-3-configure-test-load-distribution"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Analyze Your Test Results",
          "text": "Open the job from the Jobs section to follow the Summary, Timeline Report, Request Stats, Errors, Logs and Artifacts while the test runs.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-k6-ui-testing/#step-4-analyze-your-test-results"
        }
      ]
    }
  ]) }}
/>
[k6](https://grafana.com/docs/k6/latest/) is an open-source tool designed to make load testing easy and accessible for developers and QA engineers. It's specifically built for testing the performance of APIs, microservices, and websites.

[HyperExecute](/support/docs/getting-started-with-hyperexecute/) is an AI Native Test Orchestration Cloud Platform that empowers you to run **end-to-end** tests **quickly** and **efficiently**. It provides Just-in-Time (JIT) testing infrastructure with fast execution **speeds**, **smart orchestration**, and **detailed logs**.

HyperExecute lets you upload a k6 script, set the load from the dashboard, and run it without writing a YAML file.

## Prerequisites

- Your organization must have access to HyperExecute performance testing. If not, please [contact sales](https://www.testmuai.com/contact-us/).
- Your script must export a `default` function. HyperExecute runs that function for every virtual user.
- The **Total Users**, **Duration** and **Ramp-up Time** you set in the dashboard replace the load profile in your script (`vus`, `duration`, `stages` and `scenarios` in `options`). Everything else in the script, such as thresholds, checks and tags, still applies.

## Step 1: Setup your k6 Project

1. Go to the [HyperExecute Project's Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/projects) and click on the **New Project** button.
2. In **Type of Project**, select **k6**, enter a **Project Name** and click on the **Continue** button.
3. Browse and upload your k6 script (`.js` or `.ts`), along with any modules or data files it reads (for example `.json`, `.csv` or `.txt`).
4. Click on the **Save** button.

To add more files later, open the project and click on **+ Add files to Project**.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-project.png').default} alt="k6 project with an uploaded script" width="1400" height="863" className="doc_img"/>

## Step 2: Configure Test Load Criteria

Select your script and click on the **Run** button. Configure the following parameters and click on the **Continue** button:

- **Total Users:** The number of virtual users (VUs) you want to run. The maximum depends on your plan.
- **Duration (min):** How long the test runs at full load. The maximum depends on your plan.
- **Ramp-up Time (min):** How long it takes to go from zero to the full number of users. Set it to `0` to start all users at once.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-test-load-criteria.png').default} alt="k6 Test Load Criteria step" width="1400" height="863" className="doc_img"/>

## Step 3: Configure Test Load Distribution

- **Region:** k6 tests run from **East US (Richmond, Virginia)**.
- **Job Labels:** Add meaningful labels or tags for better identification and traceability.
- **Max Users per Engine:** The maximum number of virtual users each load generator runs (up to 1500). This option appears when **Ramp-up Time** is greater than `0`. HyperExecute splits the total users across as many load generators as needed and starts them together.
- **Global Timeout:** The maximum duration for the HyperExecute job (default: 90 minutes). **Ramp-up Time** plus **Duration** must be shorter than this value.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-test-load-distribution.png').default} alt="k6 Test Load Distribution step" width="1400" height="863" className="doc_img"/>

Click **Run Test** to start the execution.

## Step 4: Analyze Your Test Results

Toggle to the **Jobs** section and open your job. You can follow the results while the test is running:

- **Summary:** Virtual users, average and 90th percentile response time, throughput, error rate, bandwidth and data sent, with the **Load** and **Response Time** graphs.
- **Timeline Report:** Request count and response time over the course of the test.
- **Request Stats:** Per-request statistics, grouped by request name.
- **Errors:** Failed requests grouped by request name and by response code.
- **Logs:** The k6 output of each load generator.
- **Artifacts:** The k6 HTML report and the end-of-test summary (`k6-summary.json`).

### Summary Report

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-summary-report.png').default} alt="k6 job Summary report" width="1400" height="863" className="doc_img"/>

### Timeline Report

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-timeline-report.png').default} alt="k6 job Timeline report" width="1400" height="863" className="doc_img"/>

### Request Stats

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-request-stats.png').default} alt="k6 job Request Stats" width="1400" height="863" className="doc_img"/>

### Logs

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-logs.png').default} alt="k6 job logs" width="1400" height="863" className="doc_img"/>

:::tip Thresholds
If your script defines [thresholds](https://grafana.com/docs/k6/latest/using-k6/thresholds/) and one of them is crossed, the job is marked **Failed** and the job remark names the crossed threshold. The metrics and graphs collected up to that point remain available.
:::

## Frequently Asked Questions
***

### Why does my job run a different number of users than my script defines?

In the UI flow, the values you enter in **Total Users**, **Duration** and **Ramp-up Time** replace the load profile in your script, so every run uses the load you set in the dashboard.

### Why did my job fail a few seconds after it started?

This usually means k6 could not load the script, for example because of a syntax error or a missing module. The job remark shows k6's error, and the full message is in the **Logs** tab.

### Can I load test private or internal endpoints with k6?

Yes. A tunnel adds its own latency to every request, which skews response-time results, so it is not recommended for load testing. Instead, contact the <BrandName /> support team for HyperExecute's static outbound IPs and allow them in your firewall or security group.
