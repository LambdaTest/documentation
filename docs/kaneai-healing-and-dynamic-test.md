---
id: kaneai-healing-and-dynamic-test
title: Adaptive Heal and Dynamic Test in KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Adaptive Heal and Dynamic Test
description: Choose how a KaneAI test run maintains itself when a step fails. Adaptive Heal re-authors the failing objective onward, Dynamic Test re-authors on every run, and Retry on Failure runs the test again.
keywords:
  - kaneai adaptive heal
  - kaneai dynamic test
  - self-maintenance
  - retry on failure
  - maximum retries
  - auto-approve changes
  - org product preferences
  - kane ai organization settings
url: https://www.testmuai.com/support/docs/kaneai-healing-and-dynamic-test/
site_name: TestMu AI
slug: kaneai-healing-and-dynamic-test/
canonical: https://www.testmuai.com/support/docs/kaneai-healing-and-dynamic-test/
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
          "name": "KaneAI Adaptive Heal and Dynamic Test",
          "item": `${BRAND_URL}/support/docs/kaneai-healing-and-dynamic-test/`
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
      "@id": "https://www.testmuai.com/support/docs/kaneai-healing-and-dynamic-test/"
    },
    "headline": "Adaptive Heal and Dynamic Test in KaneAI",
    "description": "Choose how a KaneAI test run behaves when a step fails. Adaptive Heal repairs the step, Dynamic Test authors the test from its objective, and Retry on Failure runs the test again.",
    "url": "https://www.testmuai.com/support/docs/kaneai-healing-and-dynamic-test/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "kaneai adaptive heal",
      "kaneai dynamic test",
      "failure handling"
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
    "dateModified": "2026-09-08T11:29:04+05:30"
  }) }}
/>

# Adaptive Heal and Dynamic Test
***

A recorded test replays the steps it was authored with. When the application changes, a step can stop matching the page. [Auto-Heal](/support/docs/kaneai-auto-heal/) recovers the element locator where it can. It runs in every test run and consumes credits when it recovers a locator. What happens to a step Auto-Heal cannot recover depends on **Self-maintenance**.

**Self-maintenance** decides whether KaneAI re-authors the test as well. You pick one of three strategies, or leave it off. With it off, a step Auto-Heal cannot recover ends the run.

| Strategy | Replays the recorded steps | When a step fails to replay | Credits |
|---|---|---|---|
| **Off** (default) | Yes | Nothing is re-authored. Auto-Heal still runs, and a step it cannot recover ends the run | Yes |
| **Adaptive Heal** | Yes | The failing objective and every objective after it are re-authored | Yes |
| **Dynamic Test** | No | Not applicable, nothing is replayed | Yes |
| **Retry on Failure** | Yes | The test fails, then runs again from the start | - |

:::info Available on New Experience test cases running on Chrome
Adaptive Heal and Dynamic Test apply to a test case only when it uses New Experience and its browser configuration is Chrome. Every other test case replays its recorded steps, whatever is set here.
:::

:::note Only one strategy at a time
Adaptive Heal, Dynamic Test and Retry on Failure answer the same question in different ways, so only one can be active. Selecting one clears the others.

Leaving Self-maintenance off is a valid choice and is the default. The recorded steps stay as they are. Auto-Heal still runs, and a step it cannot recover ends the run and is reported.
:::

## Adaptive Heal {#adaptive-heal}
***

Adaptive Heal re-authors the test when an objective fails to replay, so the run continues instead of stopping at the failure.

It re-authors the **objective that contains the failing step, and every objective after it**. Objectives that already ran keep the result they replayed. In a test case with five objectives, a step that fails in the third one leaves the first two as they replayed, and the third, fourth and fifth are re-authored.


The re-authored content is saved as a **new version of the test case**, and by default that version waits for your approval before it becomes current. The run itself finishes on the re-authored content either way.

Use it when your application changes often enough that a recorded step goes stale, but the test is still describing the right thing.

:::warning Adaptive Heal consumes credits when it re-authors
Re-authoring is authoring work, so it consumes authoring credits. One trigger re-authors a whole objective and every objective after it, not a single step, so the cost of a trigger grows with how much of the test sits after the failure. A run in which nothing fails to replay does not trigger it at all.
:::

:::note Adaptive Heal is not Auto-Heal
[Auto-Heal](/support/docs/kaneai-auto-heal/) recovers a broken **element locator** at runtime. It tries the other locators captured for that same element, then rebuilds the locator from the step's original natural language instruction. It changes nothing in your test, creates no version and needs no approval. It runs whatever you select here.

Adaptive Heal re-authors the failing **objective** and every objective after it, and records the result as a version you can review, approve or decline. The two are separate features.
:::

## Dynamic Test {#dynamic-test}
***

Dynamic Test authors the test from its objectives instead of replaying the recorded steps. It re-authors every objective on every run, whether or not anything fails. It does not wait for a failure, because the recorded steps are never used.

Use it for pages that change so much that a recorded script is a liability.

:::warning Dynamic Test consumes credits on every run
Every run authors the test again, so every run consumes authoring credits. Replaying a recorded test consumes credits only when Auto-Heal triggers. Turning this on at the organization level commits every eligible run in scope to that cost.
:::

:::note Adaptive Heal and Dynamic Test are the same act
Both re-author the test. They differ in trigger and scope. Adaptive Heal re-authors only on a failure, and only from the failing objective onward. Dynamic Test re-authors every objective on every run.
:::

## Retry on Failure {#retry-on-failure}
***

Retry on Failure runs the whole test again from the start after it fails. Nothing about the test is changed, so nothing needs approval.

When it is selected, **Maximum Retries** sets how many further attempts to make. The maximum is 5.

Retry on Failure is available in a test run only. It is not an organization or project setting.

:::note
Retry on Failure re-runs a test case only when its exported code was generated on or after **May 10, 2026**. For code generated before that date, a retry runs only when the test runner command itself fails.
:::

## Auto-approve changes {#auto-approve-changes}
***

Adaptive Heal and Dynamic Test both produce a new version of the test case. **Auto-approve changes** decides what happens to it.

| Auto-approve | What happens to the new version |
|---|---|
| Off (default) | Held in Version History and becomes current only after your approval |
| On | Becomes current immediately, without review |

Auto-approve applies only to Adaptive Heal and Dynamic Test, because those are the only strategies that produce a version. With Retry on Failure selected, the control is disabled: nothing about the test changes, so there is nothing to approve.

A version approved automatically is marked as such in Version History, so the record always shows whether a person reviewed it.

:::tip Why approval matters
A re-authored objective is sometimes right, because the application moved on and the test needs to follow. Sometimes the step failed because the product genuinely broke, and re-authoring around it turns a real defect into a passing test. Reviewing the change is what keeps the second case visible.
:::

## Where to set it
***

Self-maintenance is set at three levels. Each one is a starting position for the level below it.

| Level | Where | Applies to | Strategies available |
|---|---|---|---|
| **Organization** | Organization Settings → Org Product Preferences → Kane AI → Healing and Dynamic Test | Every project in the organization | Adaptive Heal, Dynamic Test |
| **Project** | Test Manager → Project Settings → Healing and Dynamic Test | Every run in the project | Adaptive Heal, Dynamic Test |
| **Test run** | Advanced Configurations → Test Configurations | That run only | Adaptive Heal, Dynamic Test, Retry on Failure |

Set the organization default under **Organization Settings → Org Product Preferences → Kane AI → Healing and Dynamic Test**.

<img loading="lazy" src={require('../assets/images/kane-ai/healing-dynamic-test/organization-settings.webp').default} alt="Healing and Dynamic Test in Organization Settings, with the strategy toggle, Adaptive Heal, Dynamic Test and Auto-approve changes" width="1600" height="910" className="doc_img"/>

Set the project default under **Test Manager → Project Settings → Healing and Dynamic Test**.

<img loading="lazy" src={require('../assets/images/kane-ai/healing-dynamic-test/project-settings.webp').default} alt="Healing and Dynamic Test in Project Settings, showing Self-maintenance with Adaptive Heal and Dynamic Test, and the Auto-approve changes toggle" width="1600" height="911" className="doc_img"/>

A project follows the organization until someone changes it there. Once changed, the project keeps its own value and later organization changes no longer overwrite it.

A test run starts from the project's value and can override it for that run. Changing it in a run never writes back to the project or the organization.

Turning Self-maintenance on at the organization or project level applies from that point forward. Test runs that already exist are not eligible, and only runs created while the toggle is on use Adaptive Heal or Dynamic Test.

Retry on Failure exists only at the run level, so it is chosen per run.

### Set it for a run
***

1. On the test run screen, click **Advanced Configurations**.
2. Turn **Self-maintenance** on.
3. Select **Adaptive Heal**, **Dynamic Test** or **Retry on Failure**.
4. For Adaptive Heal or Dynamic Test, set **Auto-approve changes**. For Retry on Failure, set **Maximum Retries**.
5. Click **Execute**.

<img loading="lazy" src={require('../assets/images/kane-ai/healing-dynamic-test/advanced-configurations.webp').default} alt="Test Configurations under Advanced Configurations, showing Self-maintenance with Adaptive Heal, Dynamic Test and Retry on Failure, and the Auto-approve changes toggle" width="1600" height="912" className="doc_img"/>

### Check the strategy before you execute
***

The **Run with HyperExecute** panel carries a strategy tile in its Overview, beside the number of test instances, unique configurations and concurrency. Confirm the strategy in **Advanced Configurations** before you click **Execute**, because that is where the organization, project and run-level values resolve for this run.

<img loading="lazy" src={require('../assets/images/kane-ai/healing-dynamic-test/run-with-hyperexecute.webp').default} alt="The Run with HyperExecute panel, with the strategy tile in the Overview alongside test instances, configurations and concurrency" width="1600" height="827" className="doc_img"/>

See [KaneAI Test Runs](/support/docs/kaneai-hyperexecute-test-run-execution/#advanced-configurations) for the rest of the Advanced Configurations panel.

## Reviewing a change
***

When Adaptive Heal or Dynamic Test produces a new version and auto-approve is off, the version appears in the test case's **Version History** marked as a draft, attributed to the strategy that produced it rather than to the person who started the run.

:::note One test case, one draft
A test run can include the same test case under several configurations, such as more than one Chrome version or more than one operating system. It still produces a single draft, because it is one test case.
:::

From there you can read the proposed steps in full, compare them against the current version, and then **Approve** or **Decline**.

- **Approve** makes it the current version and regenerates the exported code for it.
- **Decline** discards it and leaves the current version untouched.

A draft cannot be edited while it is waiting for a verdict. Approve or decline it first, then edit the result like any other version.

## When these strategies do not apply
***

A run can be configured in ways that put it outside the scope of Adaptive Heal and Dynamic Test. In those cases the run behaves as it would with Self-maintenance off, whatever is selected.

### Test cases outside New Experience or Chrome
***

Adaptive Heal and Dynamic Test apply to a test case only when it uses New Experience **and** its browser configuration is Chrome. A test case on any other browser, or one not using New Experience, replays its recorded steps and nothing is re-authored.

### Other boundaries
***

- Only one strategy can be active at a time. Selecting one clears the others.
- Retry on Failure is a run-level setting and has no organization or project equivalent.

:::note Evidence
Only a test case whose browser configuration is Chrome is eligible for an evidence pack.
:::

## Next Steps
***

- [KaneAI Test Runs](/support/docs/kaneai-hyperexecute-test-run-execution/)
- [Auto-Heal in KaneAI](/support/docs/kaneai-auto-heal/)
- [Scheduled Test Runs](/support/docs/kaneai-scheduled-test-runs/)
