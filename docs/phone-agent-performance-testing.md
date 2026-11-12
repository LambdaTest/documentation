---
id: phone-agent-performance-testing
toc_max_heading_level: 3
title: Inbound Phone Agent Performance Testing With TestMu AI
hide_title: false
sidebar_label: Performance Testing (Inbound)
description: Load test an inbound phone agent on TestMu AI with concurrent real calls. Measure load delivery, call reliability, and response latency, and find where it degrades.
keywords:
 - phone agent performance testing
 - phone agent load testing
 - voice agent load testing
 - inbound phone agent concurrency testing
 - call center ai load testing
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
          "name": "Inbound Phone Agent Performance Testing",
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
    "headline": "Inbound Phone Agent Performance Testing With TestMu AI",
    "description": "Load test an inbound phone agent on TestMu AI with concurrent real calls. Measure load delivery, call reliability, and response latency, and find where it degrades.",
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
      "phone agent performance testing",
      "phone agent load testing",
      "voice agent load testing"
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
    "dateModified": "2026-11-12T13:50:45+05:30"
  }) }}
/>

Performance testing on the TestMu AI Agent Testing Platform measures how an AI phone agent behaves when it handles many calls at the same time. You run a performance test on a phone suite: TestMu AI uses the suite's scenarios to place real phone calls to your agent, holds a target number of concurrent calls for a set period, and reports on load delivery, reliability, and responsiveness. The run page shows the test's current phase live. Because the test places calls to your agent, it applies only to inbound agents, which answer calls.

## When to Use Performance Testing

---

Choose the test that matches what you want to check.

- Use a performance test to measure how your agent behaves under concurrent load: whether the requested number of concurrent calls is sustained, whether calls connect and conversations end as expected, and how quickly the agent responds as load changes.
- Use a standard [inbound phone agent test](/support/docs/phone-agent/#test-an-inbound-phone-agent-pre-analysis) on the same suite to confirm that your agent behaves correctly on an individual call. A performance test does not evaluate conversation content. See [Performance Testing Scope and Exclusions](#performance-testing-scope-and-exclusions).

## Performance Testing Prerequisites

---

- A phone suite that contains at least one scenario. To set up scenarios and test suites, see [Test an Inbound Phone Agent](/support/docs/phone-agent/#test-an-inbound-phone-agent-pre-analysis).
- Enough available parallels to cover the target load. A parallel is the capacity for one concurrent call. See [Parallels](#parallels).

## Configure a Performance Test

---

<!-- TODO: add the steps to start a performance test from a suite, with screenshots, once confirmed with product. -->

Set two parameters for the test: how many concurrent calls to hold, and for how long.

| Parameter | Description | Accepted range |
|---|---|---|
| **Target** | Number of concurrent calls to maintain during the hold | 1 to the number of available parallels |
| **Hold duration** | Length of the steady-state measurement period | 1 to 120 minutes. The default is 5. |

TestMu AI places every call over live telephony to your agent, using the scenarios, voices, background noise profiles, and personas configured in the suite. It distributes calls evenly across every scenario and configuration combination (voice, noise profile, and persona) in the suite, so the test exercises each scenario.

## What Happens During a Performance Test

---

Each test moves through four phases: ramp up, hold, drain, and finalizing. The run page shows the current phase live.

| Phase | What happens |
|---|---|
| **1. Ramp up** | TestMu AI initiates calls at a rate of 5 per second until it reaches the target. If the test does not reach the target within the expected ramp time plus a 60-second allowance, it proceeds to the hold and records that the ramp timed out. |
| **2. Hold** | TestMu AI maintains the target load for the configured **Hold duration**. When a call ends, a replacement call starts immediately, so concurrency stays at the target. This is the only scored phase. |
| **3. Drain** | TestMu AI initiates no new calls. Calls in progress get up to 60 seconds to complete. TestMu AI ends any call still active after this window and classifies it as **Ended by test**. |
| **4. Finalizing** | TestMu AI waits for the final call records from the voice platform (duration, end reason, and cost), then compiles the results. |

:::info Measurement window
TestMu AI calculates load, reliability, and latency metrics on the hold phase only, so start-up and wind-down activity does not distort the measurements. The ramp up and drain phases introduce and remove load in a controlled way, and TestMu AI excludes them from scoring.
:::

## Performance Test Safeguards

---

Performance tests run with the following safeguards.

| Safeguard | Behavior |
|---|---|
| **Parallel limit** | A test never exceeds your organization's parallel limit. If not enough parallels are available at start, the test does not launch, and TestMu AI displays the available count. |
| **Platform capacity** | If the voice platform reports that it is at capacity, TestMu AI pauses new calls for 5 seconds before retrying. It records each occurrence as a *capacity rejection*. |
| **Repeated start failures** | If 10 consecutive calls fail to start for reasons other than capacity, TestMu AI stops the test and marks it as failed. |
| **Abort** | You can abort a test at any time. TestMu AI stops placing new calls immediately, ends all active calls, including calls still connecting, and compiles results from the data collected. |

## View Performance Test Results

---

A performance test reports on three areas.

| Area | Question it answers |
|---|---|
| **Load delivery** | Was the requested level of concurrent calls sustained for the full test? |
| **Reliability** | Did calls connect, and did conversations end as expected? |
| **Responsiveness** | How quickly did the agent respond to the caller, and how did that change under load? |

The results include summary metrics, an outcome for every call, a per-second load timeline, agent response latency percentiles, and a breakdown by concurrency level with automated findings. Summary metrics cover the hold phase only, while call outcomes and the load timeline cover the full test.

To share a run with a stakeholder, send its report through a link that needs no login. The shared view shows aggregate metrics only, with no recordings, transcripts, or call IDs. Turning the feature off for your organization revokes every link it has issued.

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

The **Latency** tab shows the total number of calls and the average, highest, and lowest reply latency in colour bands, which you set for each run. Its per-call table updates live while the test runs. Open any call to see each turn: what the caller said, what the agent replied, and the reply latency.

If the results show latency as not supported, see [Performance Testing Scope and Exclusions](#performance-testing-scope-and-exclusions).

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

## Performance Testing Scope and Exclusions

---

Performance tests focus on load behavior. The following are outside their scope.

| Not included | Detail |
|---|---|
| **Transcript analysis** | AI does not evaluate performance calls. A performance test produces no validation criteria, scenario pass or fail results, custom metrics, or conversation quality scores. To evaluate conversation content, run the suite as a standard test. |
| **Ramp up and drain scoring** | TestMu AI calculates summary metrics on the hold phase only. |
| **Agent infrastructure metrics** | TestMu AI takes measurements from the caller's perspective. It does not observe server resources, model provider limits, or other systems internal to your agent. |
| **Latency without timed messages** | Response latency requires timestamped messages for both caller and agent from the voice platform. When these are unavailable, TestMu AI reports latency as not supported. |
| **Load above the parallel limit** | Tests do not raise your organization's parallel limit. Additional parallels are required to test higher concurrency. |

## Parallels

---

A parallel is the capacity for one concurrent call. The number of available parallels determines the maximum target for a performance test. Parallels in use by other tests in your organization reduce the number available.

## Troubleshoot Performance Tests

---

| Symptom | Cause | What to do |
|---|---|---|
| The test does not launch, and the available parallel count is displayed | Fewer parallels were available at start than the **Target** needs | Set **Target** to the available count or lower, or add parallels. Parallels in use by other tests in your organization reduce the number available. |
| The maximum **Target** is lower than expected | The target is limited to available parallels, and other tests running in your organization at the same time use parallels | Run the test when fewer parallels are in use by other tests, or add parallels. See [Parallels](#parallels). |
| The test stops and is marked as failed | 10 consecutive calls failed to start for reasons other than capacity | Review the call outcomes. TestMu AI counts calls that could not be initiated as **Dispatch failed**. |
| The test records that the ramp timed out | The test did not reach the target within the expected ramp time plus the 60-second allowance | The test still proceeds to the hold. Check **Load achieved** for the percentage of the hold during which concurrent calls were at or above 90% of the target. |
| Calls show **Ended abnormally** | The calls connected but did not end normally, for example because of a silence timeout or agent error | Read the reason displayed for each call. To see the concurrency levels at which these endings occur, check **Error distribution** in the [concurrency analysis](#concurrency-analysis). |
| A concurrency group is marked low confidence | The group has fewer than 3 calls or fewer than 10 response samples | Increase the **Hold duration** or the **Target** to collect more data. |
| The results show no validation criteria, scenario pass or fail results, custom metrics, or conversation quality scores | AI does not evaluate performance calls | Run the same suite as a standard test to evaluate conversation content. |

## Related TestMu AI Guides

---

- See how to [test an inbound phone agent](/support/docs/phone-agent/#test-an-inbound-phone-agent-pre-analysis) step by step, including scenarios and test suites.
- See the [phone agent testing overview](/support/docs/phone-agent/) for inbound and outbound agents, live test calls, and production call analysis.
