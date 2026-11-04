---
id: track-issues-in-test-runs
title: Track Bugs and Issues in Test Runs
hide_title: true
sidebar_label: Track Issues in Test Runs
description: Connect failing tests to tracked defects by linking Jira, Azure DevOps, and Linear issues to test instances in a Test Manager Test Run, and view every issue raised across the run.
keywords:
  - track bugs in test runs
  - test manager issues
  - link jira issues to test instance
  - link azure devops issues to test instance
  - link linear issues to test instance
  - test run defect tracking
url: https://www.testmuai.com/support/docs/track-issues-in-test-runs/
site_name: TestMu AI
slug: track-issues-in-test-runs/
canonical: https://www.testmuai.com/support/docs/track-issues-in-test-runs/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Track Bugs and Issues in Test Runs",
          "item": `${BRAND_URL}/support/docs/track-issues-in-test-runs/`
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
      "@id": "https://www.testmuai.com/support/docs/track-issues-in-test-runs/"
    },
    "headline": "Track Bugs and Issues in Test Runs",
    "description": "Connect failing tests to tracked defects by linking Jira, Azure DevOps, and Linear issues to test instances in a Test Manager Test Run, and view every issue raised across the run.",
    "url": "https://www.testmuai.com/support/docs/track-issues-in-test-runs/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Test Manager",
    "keywords": [
      "track bugs in test runs",
      "test manager issues",
      "link jira issues to test instance"
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
    "dateModified": "2026-09-24T12:00:00+05:30"
  }) }}
/>

# Track Bugs and Issues in Test Runs

## Overview

Test Manager connects the bugs found during testing to the test instances that exposed them. Any issue raised or linked on a test instance or a step is a **defect**, whatever its type in the tracker. Every test instance in a Test Run carries its own defects, so the run becomes a traceable map of test results and the bugs behind them. You can see which tests have known bugs and open any of them in one click.

Issues linked on a test case or on the Test Run itself are **requirements**: what the test validates. See [Link Jira Issues](/support/docs/link-jira-issues-with-test-manager/), [Link Azure DevOps Issues](/support/docs/link-ado-issues-with-test-manager/), or [Link Linear Issues](/support/docs/link-linear-issues-with-test-manager/).

:::info
Requirements and defects are currently in slow rollout. To get early access, raise a request to our support team. Until they are enabled for your organization, linked issues appear in a single list.
:::

There are two ways to put a bug on a test instance:

- **Link an existing issue**: connect a Jira, Azure DevOps, or Linear issue that already exists.
- **Raise a new bug with Mark as Bug**: create a new ticket in your bug tracker while you execute the test.

This works in Manual, KaneAI, and Automation Test Runs.

## Before you begin

- To link or raise bugs that are visible inside Test Manager, integrate **Jira**, **Azure DevOps**, or **Linear** with your <BrandName /> account:
  - [Link Jira Issues with Test Manager](/support/docs/link-jira-issues-with-test-manager/)
  - [Link Azure DevOps Issues with Test Manager](/support/docs/link-ado-issues-with-test-manager/)
  - [Link Linear Issues with Test Manager](/support/docs/link-linear-issues-with-test-manager/)
- Mark as Bug can also create tickets in other [bug tracking tools](/support/docs/bug-tracking-tools/). See [Supported trackers and visibility](#supported-trackers-and-visibility) for what that means inside Test Manager.

## How bug tracking works in a Test Run

A bug is always associated with a **test instance**, one test case running with one configuration inside a Test Run. Whether you link an existing issue or raise a new one, the association is the same, and the bug becomes visible in three places:

- On the test instance level.
- In the **Defects found** tab of the Test Run's **Issues** tab, which lists every bug in the run.
- In the **Defects** tab of the corresponding Test Case's **Issues** tab.

You can add a bug from the run's instance list, from inside an instance, or from a specific step of an instance. A bug added at a step is listed with its parent instance, so you always see the complete picture at the instance level.

On the test case, each defect shows where it was raised, and **View in run** opens that run:

<img loading="lazy" src={require('../assets/images/test-run-issues/test-case-defects-tab.png').default} alt="Defects tab of a test case listing a defect with the step and run it was raised in" className="doc_img"/>

## Link an existing issue to a test instance

Use this when the defect is already tracked in Jira, Azure DevOps, or Linear and you want to connect it to the test that found it.

1. Open the Test Run and stay on the **Test Instances** tab.
2. On the test instance you want, open the bug menu on its row and select **Link Issue**.

<img loading="lazy" src={require('../assets/images/test-run-issues/test-instance-issue-menu.png').default} alt="Bug menu on a test instance row with Link Issue and View Issues options" className="doc_img"/>

3. In the **Link Issues** dialog, choose the tracker: **Jira**, **Azure DevOps**, or **Linear**. Only trackers you have integrated are available.
4. Enter the issue key or paste its URL.
5. Click **Link Issue**.

<img loading="lazy" src={require('../assets/images/test-run-issues/link-issues-dialog.png').default} alt="Link Issues dialog with tracker selector and issue key field" className="doc_img"/>

The issue is now linked, and the test instance row shows a bug count. That count is your at-a-glance signal for which tests in the run have known defects.

## Raise a new bug with Mark as Bug

Use this when you find a defect while executing a test and no ticket exists yet.

1. On a test instance, or a specific step within it, choose **Mark as Bug**.
2. In the **Create an Issue** panel, confirm the bug tracker. Use **Switch App** to file the bug in a different connected tracker.
3. Fill in the issue details, such as the project, issue type, and summary. Required fields are marked. The panel already carries the test instance's context.
4. Click **Create Issue**.

<img loading="lazy" src={require('../assets/images/test-run-issues/mark-as-bug-create-issue.png').default} alt="Create an Issue panel for raising a new bug from a test instance" className="doc_img"/>

Test Manager files the ticket in your bug tracker without leaving the run. When the ticket is created in Jira, Azure DevOps, or Linear, it is added as a defect on the test instance or step, and appears in the **Defects** sections of the test case and the Test Run, in the same views as a linked issue.

:::note
Mark as Bug can file tickets in several bug trackers, but only Jira, Azure DevOps, and Linear tickets are tracked back to the test instance. See [Supported trackers and visibility](#supported-trackers-and-visibility).
:::

## Review the issues on an instance

You can review the bugs on a test instance in two ways:

- **From the run list**: open the bug menu on the instance row and select **View Issues**. A side panel lists every issue associated with that instance.
- **From the instance**: open the test instance and go to its **Issues** tab, the last of its three tabs, after **Test steps** and **Test case details**. The tab header shows how many defects the instance carries, and the list shows where each one was raised. This is only possible in Manual Test Runs.

Each issue entry shows its title, key, type, status, priority, the project it belongs to, and who created it, enough to triage without opening the tracker. Use the search box and the **Status** and **Issue Type** filters to narrow a long list.

<img loading="lazy" src={require('../assets/images/test-run-issues/view-issues-panel.png').default} alt="View Issues panel listing the bugs associated with a test instance" className="doc_img"/>

The test instance page also lists the test case's requirements under **Validates**, grouped by tracker, so you know what the test is checking while you run it.

<img loading="lazy" src={require('../assets/images/test-run-issues/instance-validates.png').default} alt="Test instance page listing the test case's requirements under Validates" className="doc_img"/>

## Add a bug while reviewing an instance or a step

You do not have to act from the run list. In a Manual Test Run, the test instance page lists the steps of the instance, and you can link an existing issue or raise a new bug at two levels:

- **At the instance**: for a defect that affects the test case as a whole. Use the bug action at the top of the page.
- **At a step**: on the **Test steps** tab, use the bug action on the step where the failure occurred, so the defect is recorded against the exact point of failure.

To link an issue at either level:

1. Open the menu next to the bug action and select **Link existing defect**.
2. Choose the tracker: **Jira**, **Azure DevOps**, or **Linear**.
3. Enter the issue key or paste its URL, and click **Link defect**.

<img loading="lazy" src={require('../assets/images/test-run-issues/step-linked-defect.png').default} alt="Step on the test instance page with a linked defect listed under it" className="doc_img"/>

A defect added at a step is listed under that step, on the instance's **Issues** tab, and on the test case's **Defects** tab, so the instance always reflects the full set of defects found.

## See every issue in the run

The Test Run's **Issues** tab has two tabs, each grouped by tracker, useful for a defect triage or a run sign-off.

**Defects found** lists every bug raised or linked across the run's test instances and steps. Each one shows its test case, where it was raised, the configuration, and the requirement it relates to. To focus the list, filter by **Test Case**, for example, to see only the bugs behind one failing test case. You can also filter by **Status** and **Issue Type**, or search by keyword.

<img loading="lazy" src={require('../assets/images/test-run-issues/run-defects-found.png').default} alt="Defects found tab of a Test Run listing a defect with its test case, step, configuration, and related requirements" className="doc_img"/>

**Requirements covered** lists the issues linked to the run itself and the requirements of the test cases in the run. Each one shows how many instances cover it, their results in this run, and its defects. Filter by **Test Case**, **Status**, and **Results**, or search by keyword.

<img loading="lazy" src={require('../assets/images/test-run-issues/run-requirements-covered.png').default} alt="Requirements covered tab of a Test Run listing requirements with their instance results and defects" className="doc_img"/>

To add an issue to the run's scope, click **Link requirement to run**, choose the tracker, enter the issue key or URL, and click **Link requirement**. It is added as a requirement, not as a defect. To record a defect, add it on a test instance or a step.

A defect counts as open based on its status in the tracker. A Linear issue in a **Canceled** status counts as an open defect.

## Unlink an issue

If a bug no longer belongs on a test instance or a step, open the instance's **Issues** tab (or the **View Issues** panel), find the issue, and use its unlink action. You can also unlink a defect from the step it is listed under. Unlinking removes the association in Test Manager only. The ticket itself stays in Jira, Azure DevOps, or Linear.

## Behavior in specific situations

| Situation | What happens |
|---|---|
| You copy a test case | The copy keeps its requirements and drops its defects, whether you copy it within a project or to another project |
| You update a test case to a new version | Its defects are kept |
| You link an issue to an archived test case | The link is blocked. Unarchive the test case first |
| A tracker is not connected to your account | You are prompted to connect it before you can link its issues |

## Supported trackers and visibility

The two ways of putting a bug on a test instance do not cover the same set of trackers.

Linking an existing issue is available for **Jira**, **Azure DevOps**, and **Linear**.

Mark as Bug can create tickets in several bug tracking tools, but only **Jira**, **Azure DevOps**, and **Linear** tickets are associated with, and visible in, Test Runs, Test Cases, and test instances. A bug raised in any other tracker is created successfully but does not appear in these views.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       Track Bugs and Issues in Test Runs
      </span>
    </li>
  </ul>
</nav>
