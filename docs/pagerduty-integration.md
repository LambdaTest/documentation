---
id: pagerduty-integration
title: PagerDuty Integration
hide_title: true
sidebar_label: PagerDuty 
description: You can log defects with a single click when performing cross-browser testing using TestMu AI and PagerDuty integration. Capture screenshots, pinpoint errors, and send them straight to PagerDuty from the TestMu AI platform.
keywords:
  - TestMu AI integration with PagerDuty
  - TestMu AI and PagerDuty Integration
  - PagerDutyIntegration
url: https://www.testmu.ai/support/docs/pagerduty-integration
site_name: LambdaTest
slug: pagerduty-integration
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
          "name": "PagerDuty Integration",
          "item": `${BRAND_URL}/support/docs/pagerduty-integration/`
        }]
      })
    }}
></script>

# PagerDuty Integration
***

PagerDuty is a bug tracking platform that uses machine learning and automation to notify clients of interrupts and failures. These flaws are discovered in real-time, informing the appropriate people to react to any issue as quickly as possible to avoid them in the future.

With <BrandName /> and PagerDuty integration, you can log issues directly while perform [cross browser testing](https://www.lambdatest.com/) of your websites (and web apps) from the <BrandName /> platform to PagerDuty.

## Integrating PagerDuty With <BrandName />
***

1. Login to your <BrandName /> account. To setup integrations, make sure you have admin or user level access.

2. From the left menu, click **Integrations** then **PagerDuty**.

<img loading="lazy" src={require('../assets/images/pagerduty-integration/select-pagerduty.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

3. Enter your **PagerDuty Token**. 

<img loading="lazy" src={require('../assets/images/pagerduty-integration/enter-token.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

>
*   **What is a PagerDuty Token?**<br/>
The PagerDuty REST API supports authentication through an account or user API token. Account API tokens have read-only access to all data on an account and can be granted full read, write, update, and delete access. User API tokens for PagerDuty accounts with Advanced Permissions have access to all the linked user account's data.

### Getting the PagerDuty Token
***

1. Sign in to your PagerDuty account and navigate to the Profile avatar. 

<img loading="lazy" src={require('../assets/images/pagerduty-integration/prof-avatar.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

2. Select the **User Settings** tab.

<img loading="lazy" src={require('../assets/images/pagerduty-integration/user-settings.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

3. Click on **Create API User Token**.

<img loading="lazy" src={require('../assets/images/pagerduty-integration/create-token.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

4. Provide the API token name and press **Create Token**.

<img loading="lazy" src={require('../assets/images/pagerduty-integration/generate-token.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

5. Copy the generated API User Token.

<img loading="lazy" src={require('../assets/images/pagerduty-integration/copy-token.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

Paste the generated PagerDuty API User Token in the provided field and click **Install**.

<img loading="lazy" src={require('../assets/images/pagerduty-integration/install.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

The PagerDuty will be successfully integrated with your <BrandName /> account.

## One-Click Bug Logging With PagerDuty
***

1. Select **Real Time Testing** section from the left menu.

2. Enter the test URL, select browser, browser versions, operating system and resolution and click **START**.

<img loading="lazy" src={require('../assets/images/pagerduty-integration/select-config.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

A cloud-based virtual machine will launch, allowing you to perform real-time browser testing of websites and web applications.

3. While testing the websites, if you find an issue, click on Bug icon to capture the screenshot.  

<img loading="lazy" src={require('../assets/images/pagerduty-integration/spider.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

4. You can use the in-built image editor tools to annotate issues or tasks you've identified. After annotating the bugs, click on **Mark As Bug**.

<img loading="lazy" src={require('../assets/images/pagerduty-integration/mark-as-bug.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

5. A PagerDuty ticket will open up. Enter the details like Service, Assignee, Urgency, Summary and Description. Now click on **Create Issue**. 

<img loading="lazy" src={require('../assets/images/pagerduty-integration/pagerduty-ticket.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

Your bugs will be marked right away.

6. Visit the PagerDuty dashboard, you'll find the logged issues under the Incidents section.

<img loading="lazy" src={require('../assets/images/pagerduty-integration/logged-bugs.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

7. Scroll down and you will find the data you submitted via <BrandName /> would already be displayed in it. <BrandName /> automatically attaches test environment data and relevant screenshots to tickets.

<img loading="lazy" src={require('../assets/images/pagerduty-integration/bug-details.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

## Uninstalling The PagerDuty Integration
***

1. Login to your <BrandName /> account and visit Integrations from the left menu.

2. Visit 'My Integrations'and click on **REMOVE** adjacent to the PagerDuty.

<img loading="lazy" src={require('../assets/images/pagerduty-integration/remove-pagerduty.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

>
For any queries, feel free to drop them at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us directly at **[support@testmu.ai](mailto:support@testmu.ai)**.

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
       PagerDuty Integration
      </span>
    </li>
  </ul>
</nav>








