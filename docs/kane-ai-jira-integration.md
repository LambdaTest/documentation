---
id: kane-ai-jira-integration
title: KaneAI - Jira Integration
hide_title: false
sidebar_label: Jira Integration
description: Learn how to integrate your jira tickets with KaneAI and test planner using Atalssian Marketplace
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai scroll elements
  - kaneai sidebar scroll
url: https://www.testmuai.com/support/docs/kane-ai-jira-integration/
site_name: TestMu AI
slug: kane-ai-jira-integration/
canonical: https://www.testmuai.com/support/docs/kane-ai-jira-integration/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "KaneAI Jira Integration",
          "item": `${BRAND_URL}/support/docs/kane-ai-jira-integration/`
        }]
      })
    }}
></script>
The "Jira integration" feature allows you to generate test cases from your Jira tickets automatically. This feature leverages AI to analyze the content of Jira tickets and transform written test case descriptions into executable test cases on the <BrandName /> platform. This documentation provides a detailed guide to help you understand and utilize this feature effectively.

## Key Benefits of the Kane AI Jira Integration:
- **Automated Test Creation :** Quickly transform test case descriptions in Jira into executable test cases without manual setup.
- **Efficient QA Workflow :** Simplify testing processes by managing test creation directly from Jira, saving time and reducing errors.
- **Reduced Bug Risk :** AI Native test creation helps reduce the likelihood of bugs by ensuring all outlined test cases are covered and refined.

## Step-by-Step Guide
### Step 1: Install <BrandName /> Application for Jira
Visit the Atlassian Marketplace, locate the **<BrandName /> AI Cloud** application for Jira and install app on your Jira instance.

:::note
Currently in the **Beta**. Please reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span> to enable the KaneAI for your organization.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/features/jira-integration/marketplace.png').default} alt="kenai-jira integration" className="doc_img"/>

### Step 2: Define Test Cases in a Jira Ticket
- **Create or Open a Jira Ticket :** Start by creating a Jira ticket or accessing an existing ticket where you want to outline test cases.
- **Write Test Case Details :** In the comments section, add detailed information about the test cases you want to execute. Clearly describe each test case's steps, conditions, expected outcomes, and any other relevant information to help Kane AI generate accurate tests.

### Step 3: Generate Test Cases Using Kane AI
To trigger Kane AI, add the comment to your Jira ticket calling <BrandName /> application, for example:

```bash
@LambdaTest create test case based on the details of this Jira
```

> **Note :** This comment signals Kane AI to analyze the Jira ticket content and automatically create test cases.

After you post the comment, Kane AI will process the request and respond with a confirmation message. The response includes a link to <BrandName /> where you can review, modify, and schedule the generated test case.

<img loading="lazy" src={require('../assets/images/kane-ai/features/jira-integration/jira-test-case.webp').default} alt="kenai-jira integration" className="doc_img"/>

### Step 4: Review and Schedule the Test Case on <BrandName />
- **Access the Test Case :** Click on the link provided by Kane AI in the Jira comment. This will create a [Test Plan](/support/docs/kane-ai-test-plan/#step-2-define-your-state-outcomes-error-messages-constraints-and-user-inputs) for you to review and execute via KaneAI.
- **Review Test Case Details :** Check the generated test case for accuracy. You can review test steps, expected outcomes, and conditions to ensure they align with your requirements.
- **Schedule the Task for KaneAI :** Once verified, schedule the task for KaneAI to generate and automate the test case on its own.

### Step 5: Check the test execution
Click on the Live Preview button to enter the playground and check the live execution of your test based on your defined objective.

<img loading="lazy" src={require('../assets/images/kane-ai/features/jira-integration/live-preview.png').default} alt="kenai-jira integration" className="doc_img"/>
