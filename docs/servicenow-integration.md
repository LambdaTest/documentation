---
id: servicenow-integration
title: ServiceNow Integration with TestMu AI
hide_title: false
sidebar_label: ServiceNow
description: TestMu AI helps you manage your incidents in ServiceNow by moving them to your project in a single click. All the details you provide in TestMu AI like task list, assignee, title, and description would automatically be presented in the project on ServiceNow.
keywords:
  - testmu ai integrations
  - push issues to servicenow
  - free cross browser testing tool
  - cross platform testing tools
  - check browser compatibility online
  - testmu ai servicenow integration
  - integrate servicenow with testmu ai
  - create issue in servicenow from testmu ai
  - servicenow integration with testmu ai
  - create servicenow issues from testmu ai
  - bug tracking tools
  - project management tools
url: https://www.testmu.ai/support/docs/servicenow-integration
site_name: LambdaTest
slug: servicenow-integration
---

import CodeBlock from '@theme/CodeBlock';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "ServiceNow Integration",
          "item": `${BRAND_URL}/support/docs/servicenow-integration/`
        }]
      })
    }}></script>

ServiceNow is a cloud-based platform for IT service management and automating business processes. Integrating ServiceNow with <BrandName /> enables you to log incidents directly from your testing sessions into ServiceNow, streamlining your workflow and enhancing team collaboration.

> ServiceNow Integration with <BrandName /> is available for both freemium and premium plans.

### Create an OAuth Application for <BrandName /> in ServiceNow

> Only an administrator of your ServiceNow instance can create the OAuth application required for integration.

To enable integration, you need to create an OAuth application in your ServiceNow instance for <BrandName />:

1. **Log in to your ServiceNow instance** as an administrator.
2. Go to **System OAuth > Application Registry** in the left navigation pane.
<img loading="lazy" src={require('../assets/images/integrations/servicenow/1.png').default} alt="1" className="doc_img"/>
3. Click **New** and select **Create an OAuth API endpoint for external clients**.
4. Fill in the required fields:
   - **Name:** Enter a name (e.g., <BrandName /> Integration).
   - **Client ID:** (Optional) Leave blank to auto-generate or specify your own.
   - **Client Secret:** (Optional) Leave blank to auto-generate or specify your own.
   - **Redirect URL:** <div className="lambdatest__codeblock"><CodeBlock>https://integrations.lambdatest.com/servicenow/auth/callback</CodeBlock></div>
   - **Logo URL:** <CodeBlock>https://www.lambdatest.com/resources/images/logos/logo.svg</CodeBlock>
  <img loading="lazy" src={require('../assets/images/integrations/servicenow/2.png').default} alt="2" className="doc_img"/>

5. Click **Submit** to create the application.
6. After creation, copy the **Client ID** and **Client Secret**. You will need these values to complete the integration in <BrandName />.




Once the OAuth application is set up, proceed with the integration steps below.

## Integrate ServiceNow from your <BrandName /> Account

**Step 1:** Log in to your [LambdaTest](https://accounts.lambdatest.com/) account. Ensure you have Admin or User level access to manage integrations.

**Step 2:** Navigate to `Settings` -> `Integrations` -> `Bug Tracker`.

**Step 3:** Click on the **Connect** button of the ServiceNow block.

**Step 4:** In the integration setup form, enter the following details:

- **ServiceNow Instance URL:** The URL of your ServiceNow instance (e.g., `https://your-instance.service-now.com`).
- **Client ID:** The Client ID from your ServiceNow OAuth application.
- **Client Secret:** The Client Secret from your ServiceNow OAuth application.


After filling in the details, click on the **Install** button to establish the integration.

<video class="right-side" width="100%" controls id="vid">
<source src={require('../assets/videos/integration/bug-tracking/servicenow/install.mov').default} type="video/mp4" />
</video>

## Log your First Incident

**Step 1:** Ensure you have access to the appropriate ServiceNow instance and the Incident table is available.

**Step 2:** While working on <BrandName />, if you encounter an incident, click on the **Mark as Bug** button available on different products.

**Step 3:** In the incident logging form, provide the necessary details such as:

- **User:** The user in ServiceNow to whom the incident should be assigned.
- **Short Description:** A concise summary of the incident.
- **Description:** Detailed information about the incident.
- **Urgency:** Select the urgency level for the incident.
- **Priority:** Select the priority for the incident.
- **Due Date:** The date by which the incident should be resolved.

**Step 4:** Click on the **Create Issue** button. The incident will be logged into your ServiceNow instance, and you can view it directly from your ServiceNow dashboard.

<img loading="lazy" src={require('../assets/images/integrations/servicenow/3.png').default} alt="4" className="doc_img"/>


## Resync ServiceNow Integration

To ensure that the latest users from your ServiceNow system are available in <BrandName />, you can resync the integration.

**Step 1:** Navigate to `Settings` -> `Integrations` in your <BrandName /> account.

**Step 2:** Locate the ServiceNow integration and click on the **Resync** button.

- This will fetch the latest users from your ServiceNow system.

- If your refresh token has expired, you will be prompted to reauthorize your ServiceNow integration.
<img loading="lazy" src={require('../assets/images/integrations/servicenow/4.png').default} alt="4" className="doc_img"/>

Once resynced, the latest data will be available for use.

## Uninstall ServiceNow Integration

**Step 1:** Navigate to `Settings` -> `Integrations` in your <BrandName /> account.

**Step 2:** Locate the ServiceNow integration and click on the **Remove** button to uninstall the integration.

> That was all you need to know for <BrandName /> + ServiceNow Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock.
