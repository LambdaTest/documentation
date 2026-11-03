---
id: link-ado-issues-with-test-manager
title: Link Azure DevOps Issues with Test Manager
hide_title: true
sidebar_label: Azure DevOps Integration
description: Effortlessly link Azure DevOps issues with Test Manager using TestMu AI to streamline workflows and enhance project management efficiency.
keywords:
  - link Azure DevOps issues
  - link Azure DevOps issues with test manager
  - link ADO issues
  - link ADO issues with test manager
url: https://www.testmuai.com/support/docs/link-ado-issues-with-test-manager/
site_name: TestMu AI
slug: link-ado-issues-with-test-manager/
canonical: https://www.testmuai.com/support/docs/link-ado-issues-with-test-manager/
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
          "name": "Link Azure DevOps Issues with Test Manager",
          "item": `${BRAND_URL}/support/docs/link-ado-issues-with-test-manager/`
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
      "@id": "https://www.testmuai.com/support/docs/link-ado-issues-with-test-manager/"
    },
    "headline": "Link Azure DevOps Issues with Test Manager",
    "description": "Effortlessly link Azure DevOps issues with Test Manager using TestMu AI to streamline workflows and enhance project management efficiency.",
    "url": "https://www.testmuai.com/support/docs/link-ado-issues-with-test-manager/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Test Manager",
    "keywords": [
      "link Azure DevOps issues",
      "link Azure DevOps issues with test manager",
      "link ADO issues"
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

## Link Azure DevOps Issues with Test Manager

Test Manager enhances its functionality by seamlessly linking test cases with Azure DevOps Work Items. This integration ensures a reliable connection between your testing activities and Azure DevOps Work Items, optimizing project management and collaboration across teams.

### Prerequisites
- Active Microsoft Azure DevOps account
- Appropriate permissions to access Azure DevOps projects

### Initial Setup and Configuration

> **Note:** If you have already integrated Azure DevOps with your <BrandName /> account, you can skip this section and proceed directly to [Linking Azure DevOps Work Items](#linking-azure-devops-work-items)

1. Navigate to the [Integration page](https://integrations.lambdatest.com/) to integrate your <BrandName /> account with Azure DevOps. Click on **Connect** as shown in the image.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/1.png').default} alt="Azure DevOps Integration Card" className="doc_img" width="1366" height="629"/>

2. A side drawer will open to initiate Azure DevOps integration. Click on **Install** to proceed.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/2.png').default} alt="Azure DevOps Install Drawer" className="doc_img" width="1366" height="629"/>

3. Select your Azure DevOps Organization and click **Install**. Azure DevOps is now integrated with your <BrandName /> account.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/3.png').default} alt="Azure DevOps Organization Selection" className="doc_img" width="1366" height="629"/>

### Requirements and defects

Where you link an Azure DevOps work item decides what it is in Test Manager:

| Where the work item is linked | What it becomes | What it tells you |
|---|---|---|
| Test case or test run | Requirement | What the test validates |
| Test instance or step in a test run | Defect | What testing found |

The work item type in Azure DevOps does not change this. A Bug linked on a test case is a requirement, because the test checks that bug, and a Task linked on a step is a defect. To change the role of a link, unlink the work item and link it in the right place.

Work items you linked before this change were given a role automatically, using the same rule.

:::info
Requirements and defects are currently in slow rollout. To get early access, raise a request to our support team. Until they are enabled for your organization, linked issues appear in a single list.
:::

### Linking Azure DevOps Work Items

Once the integration is complete, follow these steps to link a requirement to your test cases or test runs:

1. Open the **Issues** tab of a test case and click **Link requirement**. On a test run, open its **Issues** tab and click **Link requirement to run**.
> Note: To link a defect on a test instance or a step, see [Track Bugs and Issues in Test Runs](/support/docs/track-issues-in-test-runs/).

<img loading="lazy" src={require('../assets/images/test-manager/requirements-defects/test-case-link-requirement.png').default} alt="Issues tab of a test case with the Link requirement action" className="doc_img"/>

2. Select **Azure DevOps**, enter the Azure DevOps Work Item ID or URL, and click **Link requirement**.

<img loading="lazy" src={require('../assets/images/test-manager/requirements-defects/link-requirement-ado.png').default} alt="Link requirement dialog with Azure DevOps selected and a work item entered" className="doc_img"/>


3. The Azure DevOps Work Item from your integrated Organization is linked and listed under **Requirements**. You can view the work item name, ID, type, state, priority, and creator.

{/* IMAGE PLACEHOLDER: replace 6.png below with an Azure DevOps work item listed in the Requirements tab of a test case.
    Suggested filename: ../assets/images/test-manager/requirements-defects/ado-requirement-listed.png */}
<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/6.png').default} alt="Link Azure DevOps Issue" className="doc_img" width="1366" height="629"/>

4. To **unlink an issue**, click on the unlink button located on the right side of the work item.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/7.png').default} alt="Link Azure DevOps Issue" className="doc_img" width="1366" height="629"/>

### Issues on a test case

The **Issues** tab of a test case has two tabs, each grouped by tracker. Use the search box and the **Status** and **Issue Type** filters to narrow a long list.

- **Requirements**: the work items linked on this test case. You can link and unlink them here.
- **Defects**: the defects raised or linked on this test case's instances and steps, across its test runs. Each one shows where it was raised, and **View in run** opens that run. This list is read-only, so you add and remove defects from the test run.

A defect counts as open based on its state in Azure DevOps.



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
       Link Azure DevOps Issues with Test Manager
      </span>
    </li>
  </ul>
</nav>
