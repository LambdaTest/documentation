---
id: phone-agent-performance-testing
toc_max_heading_level: 2
title: Phone Agent Performance Testing With TestMu AI
hide_title: false
sidebar_label: Performance Testing
description: Configure a performance test for your AI phone agent on TestMu AI, follow its four phases, and read the load, reliability, latency, and concurrency results.
keywords:
 - voice agent load testing
 - phone agent performance testing
 - voice agent performance testing
 - concurrent call load testing
 - ai phone agent stress testing
url: https://www.testmuai.com/support/docs/phone-agent-performance-testing/
site_name: TestMu AI
slug: phone-agent-performance-testing/
canonical: https://www.testmuai.com/support/docs/phone-agent-performance-testing/
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
          "name": "Phone Agent Performance Testing",
          "item": `${BRAND_URL}/support/docs/phone-agent-performance-testing`
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
      "@id": "https://www.testmuai.com/support/docs/phone-agent-performance-testing/"
    },
    "headline": "Phone Agent Performance Testing With TestMu AI",
    "description": "Configure a performance test for your AI phone agent on TestMu AI, follow its four phases, and read the load, reliability, latency, and concurrency results.",
    "url": "https://www.testmuai.com/support/docs/phone-agent-performance-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "voice agent load testing",
      "phone agent performance testing",
      "voice agent performance testing"
    ],
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
    "dateModified": "2026-09-30T19:28:43+05:30"
  }) }}
/>

Performance testing on the TestMu AI Agent Testing Platform measures how an AI phone agent behaves when it handles many calls at the same time. You run a performance test on a phone suite: TestMu AI uses the suite's scenarios to place real phone calls to your agent, holds a target number of concurrent calls for a set period, and reports on load delivery, reliability, and responsiveness. The run page shows the test's current phase live.

## When to Use Performance Testing

---

Choose the test that matches what you want to check.

- Use a performance test to measure how your agent behaves under concurrent load: whether the requested number of concurrent calls is sustained, whether calls connect and conversations end as expected, and how quickly the agent responds as load changes.
- Use a standard [phone agent test](/support/docs/phone-agent/) on the same suite to confirm that your agent behaves correctly on an individual call. A performance test does not evaluate conversation content. See [Scope and Exclusions](/support/docs/phone-agent-performance-testing/#scope-and-exclusions).

## Prerequisites

---

- A phone suite that contains at least one scenario. To set up scenarios and test suites, see [inbound phone agent testing](/support/docs/inbound-phone-agent/).
- Enough available parallels to cover the target load. A parallel is the capacity for one concurrent call. See [Parallels and Pricing](/support/docs/phone-agent-performance-testing/#parallels-and-pricing).

## Configure a Performance Test

---

Set two parameters for the test: how many concurrent calls to hold, and for how long.

| Parameter | Description | Accepted range |
|---|---|---|
| **Target** | Number of concurrent calls to maintain during the hold | 1 to the number of available parallels |
| **Hold duration** | Length of the steady-state measurement period | 1 to 120 minutes. The default is 5. |

TestMu AI places every call over live telephony to your agent, using the scenarios, voices, background noise profiles, and personas configured in the suite. It distributes calls evenly across every scenario and configuration combination (voice, noise profile, and persona) in the suite, so the test exercises each scenario.

:::note
Each call in a performance test is charged for its call minutes, the same as a standard test call. See [Usage Charges](/support/docs/phone-agent-performance-testing/#usage-charges).
:::

## What Happens During a Performance Test

---

Each test moves through four phases: ramp up, hold, drain, and finalizing. The run page shows the current phase live.

| Phase | What happens |
|---|---|
| **1. Ramp up** | TestMu AI initiates calls at a rate of 5 per second until it reaches the target. If the test does not reach the target within the expected ramp time plus a 60-second allowance, it proceeds to the hold and records that the ramp timed out. |
| **2. Hold** | TestMu AI maintains the target load for the configured **Hold duration**. It checks concurrency every 2 seconds and replaces each completed call with a new one. This is the only scored phase. |
| **3. Drain** | TestMu AI initiates no new calls. Calls in progress get up to 60 seconds to complete. TestMu AI ends any call still active after this window and classifies it as **Ended by test**. |
| **4. Finalizing** | TestMu AI waits for the final call records from the voice platform (duration, end reason, and cost), then compiles the results. |

:::info Measurement window
TestMu AI calculates load, reliability, and latency metrics on the hold phase only, so start-up and wind-down activity does not distort the measurements. The ramp up and drain phases introduce and remove load in a controlled way, and TestMu AI excludes them from scoring.
:::

## Safeguards

---

Performance tests run with the following safeguards.

| Safeguard | Behavior |
|---|---|
| **Parallel limit** | A test never exceeds your organization's parallel limit. If not enough parallels are available at start, the test does not launch, and TestMu AI displays the available count. |
| **Platform capacity** | If the voice platform reports that it is at capacity, TestMu AI pauses new calls for 5 seconds before retrying. It records each occurrence as a *capacity rejection*. |
| **Repeated start failures** | If 10 consecutive calls fail to start for reasons other than capacity, TestMu AI stops the test and marks it as failed. |
| **Manual stop** | You can stop a test at any time. TestMu AI ends the active calls and compiles results from the data collected. |

## View the Results

---

A performance test reports on three areas.

| Area | Question it answers |
|---|---|
| **Load delivery** | Was the requested level of concurrent calls sustained for the full test? |
| **Reliability** | Did calls connect, and did conversations end as expected? |
| **Responsiveness** | How quickly did the agent respond to the caller, and how did that change under load? |

The results include summary metrics, an outcome for every call, a per-second load timeline, agent response latency percentiles, and a breakdown by concurrency level with automated findings. Summary metrics cover the hold phase only, while call outcomes and the load timeline cover the full test.

### Summary Metrics

The summary reports four metrics for the hold phase.

| Metric | What it shows |
|---|---|
| **Load achieved** | Percentage of the hold during which concurrent calls were at or above 90% of the target. Reported with the average number of concurrent calls, the total seconds below target, and the number of capacity rejections. |
| **Connection reliability** | Connected calls as a percentage of all calls that reached a final connection result (connected or not connected). |
| **Response latency (hold)** | P50 and P95 agent response time across all responses recorded during the hold. Reported with the sample count, the call count, and the number of connected calls that received no agent response. |
| **Conversation reliability** | Calls that ended normally as a percentage of all connected calls that have completed. |

### Call Outcomes

TestMu AI assigns each call to exactly one outcome, so totals always reconcile.

| Outcome | Definition |
|---|---|
| **Submitted** | All calls the test attempted to place |
| **Dispatch failed** | The call could not be initiated |
| **Not connected** | The call was placed but did not connect, for example no answer or busy |
| **Connected** | The call reached the agent |
| **Ended normally** | A connected call ended by the caller, ended by the agent, or transferred by the agent |
| **Ended abnormally** | A connected call that ended for any other reason, such as a silence timeout or agent error. TestMu AI displays the reason. |
| **Ended by test** | A connected call still active when the drain window closed. TestMu AI ends the call, counts it as connected, and excludes it from normal and abnormal endings. |
| **Still active** | Calls ringing or connected while the test is running |

### Load Timeline

The load timeline is a per-second view of the full test, with the ramp up, hold, and drain phases highlighted. It plots the following.

| Series | What it shows |
|---|---|
| **In flight** | All active calls, ringing or connected |
| **Connected** | Calls answered by the agent |
| **Ringing** | Calls placed but not yet answered |
| **Target** | The configured concurrency level |

### Agent Response Latency

Agent response latency is the time between the end of the simulated caller's speech and the start of the agent's reply. TestMu AI measures it on every conversational turn.

| Percentile | Interpretation |
|---|---|
| **P50** | Median response time. Represents the typical caller experience. |
| **P90** | 90% of responses were at or below this value. |
| **P95** | 95% of responses were at or below this value. The primary indicator used for degradation analysis. |
| **P99** | 99% of responses were at or below this value. Represents the slowest experiences callers encounter. |

:::tip
A widening gap between P50 and the upper percentiles as load increases indicates that a subset of callers is experiencing materially longer delays.
:::

If the results show latency as not supported, see [Scope and Exclusions](/support/docs/phone-agent-performance-testing/#scope-and-exclusions).

### Concurrency Analysis

TestMu AI breaks the results down by concurrency level to identify the point at which performance degrades. It groups calls by the number of concurrent calls active when each call started. The groups are 1, 2 to 5, 6 to 10, 11 to 20, 21 to 50, 51 to 100, 101 to 200, and 201 to 500.

Each group reports the following.

| Metric | Description |
|---|---|
| **Calls** | Number of calls in the group |
| **Success rate and drop rate** | Share of completed calls that ended normally (success rate) or dropped (drop rate) |
| **Time to connect** | Average time from call initiation to connection |
| **First response** | Average time to the agent's first reply |
| **Response latency** | P50, P90, P95, and P99 agent response time |
| **Call duration** | Average length of a call |
| **Error distribution** | Call endings grouped by reason, such as drop, silence timeout, agent error, maximum duration reached, or no answer |
| **Cost** | Average cost per call |

## How Automated Findings Are Decided

---

TestMu AI derives findings from the concurrency analysis using fixed rules. No AI model is involved, and the same data always produces the same findings.

| Finding | Rule |
|---|---|
| **Breaking point** | The lowest concurrency group where the success rate falls below **80%**, or where P95 response latency exceeds **2x** the P95 of the lowest group |
| **Latency degradation** | Ratio of P95 response latency at peak concurrency to P95 at the lowest group |
| **Drop rate alert** | The lowest concurrency group where the drop rate reaches **15%** or higher |
| **Safe operating capacity** | The highest concurrency group below the breaking point, or confirmation that no degradation was observed |

:::info Confidence thresholds
A concurrency group contributes to findings only when it contains at least **3 calls** and at least **10 response samples**. TestMu AI still displays groups below these thresholds and marks them as low confidence, so that isolated events are not reported as capacity issues.
:::

## Scope and Exclusions

---

Performance tests focus on load behavior. The following are outside their scope.

| Not included | Detail |
|---|---|
| **Transcript analysis** | AI does not evaluate performance calls. A performance test produces no validation criteria, scenario pass or fail results, [custom metrics](/support/docs/phone-agent-custom-metrics/), or conversation quality scores. To evaluate conversation content, run the suite as a standard test. |
| **Ramp up and drain scoring** | TestMu AI calculates summary metrics on the hold phase only. |
| **Agent infrastructure metrics** | TestMu AI takes measurements from the caller's perspective. It does not observe server resources, model provider limits, or other systems internal to your agent. |
| **Latency without timed messages** | Response latency requires timestamped messages for both caller and agent from the voice platform. When these are unavailable, TestMu AI reports latency as not supported. |
| **Load above the parallel limit** | Tests do not raise your organization's parallel limit. Additional parallels are required to test higher concurrency. |

## Parallels and Pricing

---

A parallel is the capacity for one concurrent call. The number of available parallels determines the maximum target for a performance test. Parallels in use by other tests in your organization reduce the number available.

| Item | Price |
|---|---|
| **Included parallels** | 5 per organization, at no additional cost |
| **Additional parallels** | $60 per parallel |

:::note Example
A test with a target of 15 concurrent calls requires 15 parallels. With 5 included, 10 additional parallels are needed, at a cost of 10 x $60 = $600.
:::

### Usage Charges

Calls placed during a performance test are charged as follows.

- Each call is charged for its call minutes (voice platform and telephony), consistent with standard test calls.
- No analysis charges apply, as performance calls are not evaluated by AI.
- Calls that do not connect incur no call charge, and any credits reserved for them are released.
- Charges are settled when the test completes.

## Troubleshooting

---

| Symptom | Cause | What to do |
|---|---|---|
| The test does not launch, and the available parallel count is displayed | Fewer parallels were available at start than the **Target** needs | Set **Target** to the available count or lower, or add parallels. Parallels in use by other tests in your organization reduce the number available. |
| The maximum **Target** is lower than expected | The target is limited to available parallels, and other tests running in your organization at the same time use parallels | Run the test when fewer parallels are in use by other tests, or add parallels. See [Parallels and Pricing](/support/docs/phone-agent-performance-testing/#parallels-and-pricing). |
| The test stops and is marked as failed | 10 consecutive calls failed to start for reasons other than capacity | Review the call outcomes. TestMu AI counts calls that could not be initiated as **Dispatch failed**. |
| The test records that the ramp timed out | The test did not reach the target within the expected ramp time plus the 60-second allowance | The test still proceeds to the hold. Check **Load achieved** for the percentage of the hold during which concurrent calls were at or above 90% of the target. |
| Calls show **Ended abnormally** | The calls connected but did not end normally, for example because of a silence timeout or agent error | Read the reason displayed for each call. To see the concurrency levels at which these endings occur, check **Error distribution** in the [concurrency analysis](/support/docs/phone-agent-performance-testing/#concurrency-analysis). |
| A concurrency group is marked low confidence | The group has fewer than 3 calls or fewer than 10 response samples | Increase the **Hold duration** or the **Target** to collect more data. |
| The results show no validation criteria, scenario pass or fail results, custom metrics, or conversation quality scores | AI does not evaluate performance calls | Run the same suite as a standard test to evaluate conversation content. |

## Related TestMu AI Guides

---

- See the [phone agent testing overview](/support/docs/phone-agent/) for standard phone tests scored on call quality metrics.
- See how to [test an inbound phone agent](/support/docs/inbound-phone-agent/) with scenarios, personas, and test suites.
- See how to [add custom metrics to phone agent tests](/support/docs/phone-agent-custom-metrics/) to grade your own business rules.
- See how TestMu AI [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/).
