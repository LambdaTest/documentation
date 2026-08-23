---
id: kane-ai-azure-devops-integration
title: How to Integrate Azure DevOps With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Azure DevOps
description: Integrate Azure DevOps with KaneAI to link test cases to work items and generate test cases with AI inside the Azure DevOps interface.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai azure devops integration
  - azure devops test management
  - generate test cases from azure devops work items
  - azure devops marketplace app
  - link test cases to work items
  - AI test generation azure devops
  - test manager azure devops
  - work item test traceability
url: https://www.testmuai.com/support/docs/kane-ai-azure-devops-integration/
site_name: TestMu AI
slug: kane-ai-azure-devops-integration/
canonical: https://www.testmuai.com/support/docs/kane-ai-azure-devops-integration/
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
          "name": "How to Integrate Azure DevOps with KaneAI",
          "item": `${BRAND_URL}/support/docs/kane-ai-azure-devops-integration/`
        }]
      })
    }}
></script>

# How to Integrate Azure DevOps With KaneAI
***

The KaneAI Azure DevOps integration brings test management into your Azure DevOps environment through a Marketplace app. Once it is installed and authenticated, you can link existing test cases to work items and generate new test cases with AI, without leaving the Azure DevOps interface. This keeps your testing traceable to development tasks and connected to your <BrandName /> account.

## Prerequisites
***

Before you begin, make sure you have:

- An Azure DevOps organization where you can install apps from the Azure DevOps Marketplace.
- A <BrandName /> account with access to Test Manager.
- Azure DevOps connected under integrations in that same <BrandName /> account, set up with the credentials you use to configure the app.

## Install and Configure the App
***

Install the app from the Azure DevOps Marketplace, then authenticate it with your <BrandName /> credentials.

1. Open the [TestMu AI Test Manager](https://marketplace.visualstudio.com/items?itemName=Lambdatest.lambdatest-ai-tms-app) app on the Azure DevOps Marketplace and select **Get it free**.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/1-search-app-ado-marketplace.png').default} alt="TestMu AI Test Manager app on the Azure DevOps Marketplace" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/2-install-app.png').default} alt="Get the TestMu AI Azure DevOps app for free" className="doc_img"/>

2. Select the Azure DevOps organization where you want the app, then click **Install**.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/3-choose-organization.png').default} alt="Select an Azure DevOps organization for the TestMu AI app" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/4-final-screen.png').default} alt="TestMu AI app installation complete in Azure DevOps" className="doc_img"/>

3. In **Organization Settings**, go to **Extensions**, open **TestMu AI Test Manager**, enter the **Username** and **Access Key** from your <BrandName /> account, and click **Authenticate**.

:::note
The <BrandName /> account you use to configure the app must also have Azure DevOps connected under its integrations.
:::

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/5-authenticate-with-credentials.png').default} alt="Authenticate the Azure DevOps app with TestMu AI credentials" className="doc_img"/>

## Link Existing Test Cases
***

Connect test cases from your <BrandName /> organization to any Azure DevOps work item, then track their runs from the same place.

1. Open an Azure DevOps work item, select the **TestMu AI** tab in the work item details, and click **Link Test Case**.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/6-link-test-case.png').default} alt="Link a test case from the TestMu AI tab in an Azure DevOps work item" className="doc_img"/>

2. Search by test case name or ID and select the ones you want to link. Test cases from every project in your <BrandName /> organization are available here.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/7-search-test-case.png').default} alt="Search and select TestMu AI test cases to link to a work item" className="doc_img"/>

Each linked test case then appears in the **Test Cases** section of the work item.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/8-view-linked-test-case.png').default} alt="Linked test cases listed in an Azure DevOps work item" className="doc_img"/>

3. Open **Execution History** to review every run of the test cases linked to that work item.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/9-view-execution-history.png').default} alt="Execution history of test cases linked to an Azure DevOps work item" className="doc_img"/>

## Generate Test Cases With AI
***

Create test cases directly from a work item, letting AI turn its requirements into ready-to-run tests.

1. Click **Add Test Case** and choose **Generate with AI** to start. You can also add test cases manually from the same menu.

:::note
Generating test cases requires access to Test Manager in your <BrandName /> account.
:::

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/10-create-test-cases.png').default} alt="Add a test case with AI or manually from an Azure DevOps work item" className="doc_img"/>

2. Describe your requirements as text or attach files. The current Azure DevOps work item is attached to the input by default.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/enter-input-requirements.png').default} alt="Enter requirements to generate Azure DevOps test cases with AI" className="doc_img"/>

3. AI generates scenarios and test cases from your input, each with a title, description, pre-conditions, and steps. Review them, select the ones you want, and save them to a specific project and folder.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/11-generate-with-ai.png').default} alt="Review AI-generated test cases before saving them" className="doc_img"/>

4. Saved test cases appear in the **Test Cases** section and link automatically to the originating work item, so traceability is maintained end to end.

<img loading="lazy" src={require('../assets/images/test-manager-ado-app/12-test-cases-post-generation.png').default} alt="AI-generated test cases saved and linked to an Azure DevOps work item" className="doc_img"/>

## Next Steps
***

Continue with these guides:

- Organize your linked and generated test cases in [Test Manager](/support/docs/test-manager/).
- Turn more requirements into coverage with [Generate Test Cases With AI](/support/docs/generate-test-cases-with-ai/).
- Automate your reviewed test cases with the [KaneAI Command Guide](/support/docs/kane-ai-command-guide/).
