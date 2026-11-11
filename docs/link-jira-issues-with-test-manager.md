---
id: link-jira-issues-with-test-manager
title: Link Jira Issues with Test Manager
hide_title: true
sidebar_label: Link Jira Issues with Test Manager
description: Effortlessly link Jira issues with Test Manager using TestMu AI to streamline workflows and enhance project management efficiency.
keywords:
  - link jira issues
  - link jira issues with test manager
url: https://www.testmuai.com/support/docs/link-jira-issues-with-test-manager/
site_name: TestMu AI
slug: link-jira-issues-with-test-manager/
canonical: https://www.testmuai.com/support/docs/link-jira-issues-with-test-manager/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';



<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/link-jira-issues-with-test-manager/"
    },
    "headline": "Link Jira Issues with Test Manager",
    "description": "Effortlessly link Jira issues with Test Manager using TestMu AI to streamline workflows and enhance project management efficiency.",
    "url": "https://www.testmuai.com/support/docs/link-jira-issues-with-test-manager/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Test Manager",
    "keywords": [
      "link jira issues",
      "link jira issues with test manager"
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
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Link Jira Issues with Test Manager

Test Manager enhances its functionality by seamlessly linking test cases with Jira issues. This integration ensures a reliable connection between your testing activities and Jira tasks, optimizing project management and collaboration across teams.

## Initial Setup and Configuration

> **Note:** If you have already integrated Jira with your <BrandName /> account, you can skip this section and proceed directly to [Linking Jira Issues](#linking-jira-issues-in-test-manager)

1. Navigate to the [Integration page](https://integrations.lambdatest.com/) to integrate your <BrandName /> account with Jira. Search for Jira and click on **Connect**.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/Jira-Connect.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

2. A side drawer will open to initiate Jira integration. Click on **Install** to proceed.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/install-jira.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

3. A prompt will appear requesting access to your Atlassian account. Click on **Accept** to proceed.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/accept-the-request.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

4. Select your Jira instance site, click on **Select Site & Proceed**, then select your preferred project and click **Integrate Projects & Install**.

### Requirements and defects

Where you link a Jira issue decides what it is in Test Manager:

| Where the issue is linked | What it becomes | What it tells you |
|---|---|---|
| Test case or test run | Requirement | What the test validates |
| Test instance or step in a test run | Defect | What testing found |

The issue type in Jira does not change this. A Jira bug linked on a test case is a requirement, because the test checks that bug, and a sub-task linked on a step is a defect. To change the role of a link, unlink the issue and link it in the right place.

Issues you linked before this change were given a role automatically, using the same rule.

:::info
Requirements and defects are currently in slow rollout. To get early access, raise a request to our support team. Until they are enabled for your organization, linked issues appear in a single list.
:::

### Linking Jira Issues in Test Manager

Once the integration is complete, follow these steps to link a requirement to your test cases or test runs:

1. Open the **Issues** tab of a test case and click **Link requirement**. On a test run, open its **Issues** tab and click **Link requirement to run**.
> Note: To link a defect on a test instance or a step, see [Track Bugs and Issues in Test Runs](/support/docs/track-issues-in-test-runs/).

<img loading="lazy" src={require('../assets/images/test-manager/requirements-defects/test-case-link-requirement.png').default} alt="Issues tab of a test case with the Link requirement action" className="doc_img"/>

2. Select **Jira**, enter the Jira issue key or URL, and click **Link requirement**.

<img loading="lazy" src={require('../assets/images/test-manager/requirements-defects/link-requirement-jira.png').default} alt="Link requirement dialog with Jira selected and an issue key entered" className="doc_img"/>

3. The Jira issue from your integrated Jira Project is linked and listed under **Requirements**. You can view the Issue summary, ID, type, status, priority, and creator.

<img loading="lazy" src={require('../assets/images/test-manager/requirements-defects/jira-requirement-listed.png').default} alt="Jira issue listed in the Requirements tab of a test case" className="doc_img"/>

4. To **unlink an issue**, hover over the Jira issue and click **Unlink requirement** on the right side of its row.

<img loading="lazy" src={require('../assets/images/test-manager/requirements-defects/unlink-requirement-jira.png').default} alt="Unlink requirement action on a Jira issue in the Requirements tab" className="doc_img"/>

### Issues on a test case

The **Issues** tab of a test case has two tabs, each grouped by tracker. Use the search box and the **Status** and **Issue Type** filters to narrow a long list.

- **Requirements**: the issues linked on this test case. You can link and unlink them here.
- **Defects**: the defects raised or linked on this test case's instances and steps, across its test runs. Each one shows where it was raised, and **View in run** opens that run. This list is read-only, so you add and remove defects from the test run.

A defect counts as open based on its status in Jira.



