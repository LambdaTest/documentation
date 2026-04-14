---
id: kaneai-sequential-test-runs
title: Sequential Test Runs
hide_title: false
sidebar_label: Sequential Test Runs
description: Learn how to set up and execute sequential test runs in KaneAI to run dependent test cases in a defined order across single and multi-platform configurations.
keywords:
  - sequential test runs
  - kaneai test execution
  - dependent test cases
  - test run order
  - multi-platform testing
  - test manager
url: https://www.testmuai.com/support/docs/kaneai-sequential-test-runs/
site_name: TestMu AI
slug: kaneai-sequential-test-runs/
canonical: https://www.testmuai.com/support/docs/kaneai-sequential-test-runs/
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
          "name": "Sequential Test Runs",
          "item": `${BRAND_URL}/support/docs/kaneai-sequential-test-runs/`
        }]
      })
    }}
></script>

Sequential test runs let you execute dependent test cases in a specific order. Unlike parallel execution, where test cases run independently and concurrently, sequential execution ensures each test case completes before the next one begins. This is useful when test cases share state or depend on the outcome of a previous test — for example, a login test that must run before an account settings test.

## Prerequisites

- Access to Test Manager with an existing project
- KaneAI-generated test cases with successful code generation
- Credentials for <BrandName /> platform

## Create a Sequential Test Run

### Step 1: Enable Sequential Execution

Create a test run and add your test cases following the standard [test run setup](/support/docs/kaneai-hyperexecute-test-run-execution/). After adding the test cases, enable the **Execute instances sequentially** toggle.

Once enabled, you can arrange the test cases in the order you want them to execute. The test cases listed will be executed in this sequence for each configuration assigned.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/sequential-test-runs/image1.png').default} alt="enable-sequential-execution" className="doc_img"/>

:::note
Parameterized test cases must use the default dataset with single values when running sequentially.
:::

### Step 2: Configure for a Single Platform

For a **single-platform sequential run** (e.g., desktop web only), you can select multiple configurations at a global level. For example, you can run the same sequence on both Linux with Chrome 137 and Linux with Firefox — a separate sequential run is created for each configuration.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/sequential-test-runs/image2.png').default} alt="single-platform-configuration" className="doc_img"/>

### Step 3: Preview and Save

Click **Show execution preview** to review the test sequence before executing. The preview displays the exact order in which test cases will run for each configuration. Once verified, click **Save test run** and proceed to execution.

---

## Multi-Platform Sequential Runs

You can also configure sequential runs that span multiple platforms — for example, running a web test followed by a mobile app test. When multiple platforms are combined (desktop web, mobile browser, mobile app), the global configuration option is replaced with per-test-case configuration.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/sequential-test-runs/image3.png').default} alt="multi-platform-sequential-test-cases" className="doc_img"/>

### Step 1: Select Configurations Per Test Case

Assign the appropriate configuration to each test case individually. Choose configurations that match the platform each test case was authored on.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/sequential-test-runs/image4.png').default} alt="multi-platform-configurations" className="doc_img"/>

### Step 2: Arrange Execution Order and Preview

Set the execution order based on your test dependencies. Use the execution preview to verify the sequence — for example, a web login test running first, followed by an iOS app verification test.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/sequential-test-runs/image5.png').default} alt="multi-platform-execution-preview" className="doc_img"/>

### Step 3: Execute the Sequential Run

Save and execute the test run. The test instances will run one after another in the defined order.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/sequential-test-runs/image6.png').default} alt="execute-sequential-run" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/sequential-test-runs/image7.png').default} alt="sequential-run-results" className="doc_img"/>

---

## Key Differences: Single vs. Multi-Platform

| Aspect | Single-Platform Run | Multi-Platform Run |
|---|---|---|
| **Configurations** | Multiple global configurations allowed (one sequential run per config) | Single configuration per test case only |
| **Global config** | Supported | Not supported — group configuration is removed when multiple platforms are added |
| **Concurrency** | One per configuration sequence | Limited to one across the entire run |

---

## Limitations

- **Multi-platform runs support only a single configuration per test case.** When you add platforms such as mobile browser or mobile app alongside desktop web, the global (group) configuration option is removed.
- **Concurrency is limited to one for multi-platform sequential runs.** Tests always run one after another since they depend on execution order.
- **Execution order must be configured carefully.** The sequence directly impacts dependent test behavior — verify the order in the execution preview before saving.

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Group configuration option disappears after adding new platforms | This is expected for multi-platform sequential runs. Only single-configuration-per-test-case is supported in this mode. |
| Tests not running in the expected order | Re-check the configured sequence in the execution preview and ensure the test run was saved after making ordering changes. |
| Concurrency appears higher than expected | Confirm the run is configured as sequential (toggle enabled) and not mixed with parallel configurations. |
| Unexpected behavior with platform configurations | Ensure only configurations that match each test case's platform are selected. |

---

## Related Guides

- [Execute Test Runs on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/) — Standard test run creation and execution
- [Scheduled Test Runs](/support/docs/kaneai-scheduled-test-runs/) — Automate test run scheduling
- [Test Run Configurations](/support/docs/test-runs-configurations/) — Manage browser and device configurations
