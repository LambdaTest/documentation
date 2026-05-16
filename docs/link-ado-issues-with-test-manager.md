---
id: link-ado-issues-with-test-manager
title: Link Azure DevOps Issues with Test Manager
hide_title: true
sidebar_label: Link Azure DevOps Issues with Test Manager
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

### Linking Azure DevOps Work Items

Once the integration is complete, follow these steps to link work items with your test cases or test runs:

1. Head to the issues section in Test Manager, click on **Link Issue** and go to Azure DevOps.
> Note: Issue linking is supported in both Test Cases and Test Runs. To link issues, go to the Issues tab within a Test Case or a Test Run.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/4.png').default} alt="Link Azure DevOps Issue" className="doc_img" width="1366" height="629"/>

2. Enter the Azure DevOps Work Item ID or URL in the input field and click on **Link Issue**.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/5.png').default} alt="Link Azure DevOps Issue" className="doc_img" width="1366" height="629"/>


3. The Azure DevOps Work Item from your integrated Organization is successfully linked and listed. You can view the work item name, ID, type, state, priority, and creator.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/6.png').default} alt="Link Azure DevOps Issue" className="doc_img" width="1366" height="629"/>

4. To **unlink an issue**, click on the unlink button located on the right side of the work item.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/7.png').default} alt="Link Azure DevOps Issue" className="doc_img" width="1366" height="629"/>



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
