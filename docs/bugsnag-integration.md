---
id: bugsnag-integration
title: Bugsnag Integration
hide_title: true
sidebar_label: Bugsnag 
description: With TestMu AI and Bugsnag integration, you can easily mark your bugs, keep a track of them, share, and collaborate with your team on your Bugsnag projects.
keywords:
  - TestMu AI integration with Bugsnag
  - TestMu AI and Bugsnag Integration
  - Bugsnag Integration
url: https://www.testmu.ai/support/docs/bugsnag-integration
site_name: LambdaTest
slug: bugsnag-integration
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
          "name": "Bugsnag Integration",
          "item": `${BRAND_URL}/support/docs/bugsnag-integration/`
        }]
      })
    }}
></script>

# Bugsnag Integration
***

Bugsnag is an error-monitoring tool that allows your developers to quickly find, prioritize, and reproduce errors. Individual crashes are gathered together by underlying cause and shown as discrete errors in Bugsnag to allow for easy prioritizing; the error inbox can be sorted by event count, impacted users, error severity, or it can be limited to provide a list of errors matching a specified search parameter. 

The <BrandName /> and Bugsnag integration allows you to perform one-click bug logging from <BrandName /> to your Bugsnag projects while perform [cross browser testing](https://www.lambdatest.com/) of your websites (and web apps).

## Integrating Bugsnag With <BrandName />
***

1. Login to your <BrandName /> account. Make sure you have admin or user level access before you begin configuring integrations.

2. From the left menu, select **Integrations** then **Bugsnag**.

<img loading="lazy" src={require('../assets/images/bugsnag-integration/select-bugsnag.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

3. Enter your **Bugsnag Auth Token**. 

<img loading="lazy" src={require('../assets/images/bugsnag-integration/enter-auth.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

>
*   **What is a Bugsnag Auth Token?**<br/>
The Bugsnag Auth token gives you access to information about your organization, projects, issues, and more, allowing you to create custom integrations with your Bugsnag data.

### Getting the Bugsnag Token
***

1. Sign in to your Bugsnag account. Click on the Profile avatar and then **My account settings**. 

<img loading="lazy" src={require('../assets/images/bugsnag-integration/account-settings.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

2. Click on **Personal auth tokens**.

<img loading="lazy" src={require('../assets/images/bugsnag-integration/personal-authtokens.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

3. To generate token, click on **Generate New Token**.

<img loading="lazy" src={require('../assets/images/bugsnag-integration/create-auth.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

4. Enter the Bugsnag Auth token name and press **Generate Token**.

<img loading="lazy" src={require('../assets/images/bugsnag-integration/generate-auth.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

5. Copy the Bugsnag Auth API Token.

<img loading="lazy" src={require('../assets/images/bugsnag-integration/copy-auth.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

6. Paste the copied Bugsnag Auth Token into the provided field and press **Install**.

<img loading="lazy" src={require('../assets/images/bugsnag-integration/install-bugsnag.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

The Bugsnag will be integrated with your <BrandName /> account.

## One-Click Bug Logging With Bugsnag
***

1. Choose **Real Time Testing** tab from the left menu.

2. Specify the test URL, then select the browser, browser versions, operating system, and click **START**.

<img loading="lazy" src={require('../assets/images/bugsnag-integration/configuration.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

A cloud-based virtual machine will be launched, providing you to conduct browser testing of websites and web apps.

3. If you discover an issue while testing the websites, click the Bug icon to grab a screenshot. 

<img loading="lazy" src={require('../assets/images/bugsnag-integration/spider-icon.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

4. Once you have grabbed the screenshot, you can use the in-built image editor tools to annotate issues or tasks. After annotating the issues (or bugs), click on **Mark As Bug**.

<img loading="lazy" src={require('../assets/images/bugsnag-integration/mark-as-bug.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

5. A Bugsnag ticket will be opened. Enter information such as Organization, Project, Release, Summary, and Description. Now, select **Create Issue**.

<img loading="lazy" src={require('../assets/images/bugsnag-integration/bugsnag-ticket.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

Your bugs will be logged right away.

6. Open the Bugsnag dashboard, you'll find the marked issues.

<img loading="lazy" src={require('../assets/images/bugsnag-integration/logged-issues.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

7. Select the **Exceptions** tab and you will notice the data you submitted via <BrandName /> would already be presented in it. <BrandName /> attaches test environment data and related screenshots to tickets automatically.

<img loading="lazy" src={require('../assets/images/bugsnag-integration/bug-details.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

## Uninstalling The Bugsnag Integration
***

1. Login to your <BrandName /> account and visit Integrations from the left menu.

2. Navigate to 'My Integrations'and click on **REMOVE** under the Bugsnag block.

<img loading="lazy" src={require('../assets/images/bugsnag-integration/remove-bugsnag.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

The Bugsnag integration will be uninstalled.

>
For any queries, feel free to drop them at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us directly at **[support@lambdatest.com](mailto:support@lambdatest.com)**.

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
       Bugsnag Integration
      </span>
    </li>
  </ul>
</nav>








