---
id: opsgenie-integration
title: OpsGenie Integration
hide_title: true
sidebar_label: OpsGenie
description: You can log incidents with a single click when performing cross-browser testing using TestMu AI and OpsGenie integration. Capture screenshots, pinpoint errors, and send them straight to OpsGenie from the TestMu AI platform.
keywords:
  - TestMu AI integration with OpsGenie
  - TestMu AI and OpsGenie Integration
  - OpsGenie Integration
url: https://www.testmuai.com/support/docs/opsgenie-integration/
site_name: TestMu AI
slug: opsgenie-integration/
canonical: https://www.testmu.ai/support/docs/opsgenie-integration/
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
          "name": "OpsGenie Integration",
          "item": `${BRAND_URL}/support/docs/opsgenie-integration/`
        }]
      })
    }}
></script>

# OpsGenie Integration
***

OpsGenie is a modern incident management platform by Atlassian that ensures critical alerts are never missed. It offers intelligent alerting, on-call scheduling, and escalation policies to help teams respond to incidents faster. OpsGenie aggregates alerts from monitoring tools and custom applications, routing them to the right people through multiple notification channels.

With <BrandName /> and OpsGenie integration, you can log incidents directly while performing [cross browser testing](https://www.lambdatest.com/) of your websites (and web apps) from the <BrandName /> platform to OpsGenie.

## Integrating OpsGenie With <BrandName />
***

1. Login to your <BrandName /> account. To setup integrations, make sure you have admin or user level access.

2. From the left menu, click **Integrations** then search for **OpsGenie** under Communication section and click on **Connect**.

<img loading="lazy" src={require('../assets/images/opsgenie-integration/setup-opsgenie.png').default} alt="Setup OpsGenie Integration" width="1353" height="622" className="doc_img"/>

3. Select your **Region** (US or EU) based on your OpsGenie account location and enter your **OpsGenie API Key**.

>
*   **What is an OpsGenie API Key?**<br/>
The OpsGenie API Key is used to authenticate API requests to OpsGenie. API keys can be created from the OpsGenie Settings page. The API key grants access to create alerts, manage incidents, and interact with OpsGenie programmatically.

> **Important:** The API key must have **Create and update** alert permissions enabled to allow <BrandName /> to send alerts to OpsGenie.

### Getting the OpsGenie API Key
***

1. Sign in to your OpsGenie account and navigate to **Settings** from the top navigation bar.

2. Click on **API key management** under the Settings section.

<img loading="lazy" src={require('../assets/images/opsgenie-integration/api-key-management.png').default} alt="OpsGenie API Key Management" width="1353" height="622" className="doc_img"/>

3. Click on **Add new API key** button.

4. Provide a name for your API key (e.g., "TestMu AI") and configure the access rights:
   - Enable **Read** access
   - Enable **Create and update** access

<img loading="lazy" src={require('../assets/images/opsgenie-integration/add-api-key.png').default} alt="Add New OpsGenie API Key" width="1353" height="622" className="doc_img"/>

5. Click **Add API key** and copy the generated API Key.

6. Paste the generated OpsGenie API Key in the provided field on <BrandName /> and click **Install**.

<img loading="lazy" src={require('../assets/images/opsgenie-integration/updating-opsgenie.png').default} alt="Updating OpsGenie Integration" width="1353" height="622" className="doc_img"/>

The OpsGenie integration will be successfully connected with your <BrandName /> account.

<img loading="lazy" src={require('../assets/images/opsgenie-integration/integration-connected.png').default} alt="OpsGenie Integration Connected" width="1353" height="622" className="doc_img"/>

### Editing the OpsGenie API Key
***

If you need to update your API key, click on the **Edit** button in the Setup OpsGenie dialog.

<img loading="lazy" src={require('../assets/images/opsgenie-integration/edit-api-key.png').default} alt="Edit OpsGenie API Key" width="1353" height="622" className="doc_img"/>

## Configuring OpsGenie Integration
***

After connecting OpsGenie, you can configure notification preferences to customize which alerts are sent.

1. Click on the three-dot menu next to the OpsGenie integration and select **Settings**.

<img loading="lazy" src={require('../assets/images/opsgenie-integration/opsgenie-menu.png').default} alt="OpsGenie Integration Menu" width="1353" height="622" className="doc_img"/>

2. In the Configure OpsGenie panel, you can set up the following notification preferences:
   - **Screenshot Test Completion Messages** - Get notified when screenshot tests complete
   - **Build completion messages** - Receive alerts when builds finish
   - **Test Fail messages** - Get alerted on test failures
   - **Test Pass messages** - Get notified on test passes
   - **Notification Time** - Set the notification timing
   - **Linked Service Accounts** - Link specific service accounts for routing alerts

<img loading="lazy" src={require('../assets/images/opsgenie-integration/configure-settings.png').default} alt="Configure OpsGenie Settings" width="1353" height="622" className="doc_img"/>

3. To link service accounts, click on **Linked Service Accounts** and select the accounts you want to associate with OpsGenie alerts.

<img loading="lazy" src={require('../assets/images/opsgenie-integration/link-service-accounts.png').default} alt="Link Service Accounts" width="1353" height="622" className="doc_img"/>

4. Click **Confirm** to save your service account links.

<img loading="lazy" src={require('../assets/images/opsgenie-integration/service-accounts-updated.png').default} alt="Service Accounts Updated" width="1353" height="622" className="doc_img"/>

## Sharing OpsGenie Integration
***

You can share the OpsGenie integration with other team members in your organization.

> **Note:** You must have **Admin** access to your organization to share integrations.

1. Click on the three-dot menu next to OpsGenie and select **Share**.

2. Once shared, other team members will see the OpsGenie integration under **Shared Integrations**.

<img loading="lazy" src={require('../assets/images/opsgenie-integration/shared-successfully.png').default} alt="OpsGenie Shared Successfully" width="1353" height="622" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/opsgenie-integration/shared-integrations.png').default} alt="Shared Integrations View" width="1353" height="622" className="doc_img"/>

## Viewing Alerts in OpsGenie
***

Once the integration is set up, alerts from <BrandName /> will automatically appear in your OpsGenie dashboard.

1. Navigate to the **Alerts** section in your OpsGenie account to view all incoming alerts.

<img loading="lazy" src={require('../assets/images/opsgenie-integration/opsgenie-alerts.png').default} alt="OpsGenie Alerts Dashboard" width="1353" height="622" className="doc_img"/>

2. Click on any alert to view detailed information including:
   - Source IP and Integration details
   - Responders and Owner Team
   - Description with ticket information
   - Priority level

<img loading="lazy" src={require('../assets/images/opsgenie-integration/alert-details.png').default} alt="OpsGenie Alert Details" width="1353" height="622" className="doc_img"/>

3. For test-related alerts, you'll find comprehensive test execution details including:
   - Test ID and Test name
   - Status (passed/failed)
   - OS, Browser, and Version information
   - Resolution details
   - Direct link to view the test on <BrandName />

<img loading="lazy" src={require('../assets/images/opsgenie-integration/alert-test-details.png').default} alt="OpsGenie Alert Test Details" width="1353" height="622" className="doc_img"/>

## Uninstalling The OpsGenie Integration
***

1. Login to your <BrandName /> account and visit **Integrations** from the left menu.

2. Find the OpsGenie integration, click on the three-dot menu and select **Remove**.

<img loading="lazy" src={require('../assets/images/opsgenie-integration/integration-disconnected.png').default} alt="OpsGenie Integration Disconnected" width="1353" height="622" className="doc_img"/>

>
For any queries, feel free to drop them at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us directly at **[support@testmu.ai](mailto:support@testmu.ai)**.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
       OpsGenie Integration
      </span>
    </li>
  </ul>
</nav>
