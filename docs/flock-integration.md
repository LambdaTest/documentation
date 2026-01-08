---
id: flock-integration
title: Flock Integration
hide_title: true
sidebar_label: Flock
description: TestMu AI's integration with Flock lets you log bugs directly into Flock team channels with just one click while running cross browser testing of websites across 3000+ browser and OS combinations.
keywords:
  - testmu ai integrations
  - push issues to flock
  - free cross browser testing tool
  - cross platform testing tools
  - check browser compatibility online
  - testmu ai flock integration
  - integrate flock with testmu ai
  - create issue in flock from testmu ai
  - flock integration with testmu ai
  - communication tools
url: https://www.testmu.ai/support/docs/flock-integration
site_name: LambdaTest
slug: flock-integration
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
          "name": "Flock Integration",
          "item": `${BRAND_URL}/support/docs/flock-integration/`
        }]
      })
    }}
></script>

# Flock Integration
***

Flock is a communication and collaboration platform for cross-functional teams. Using Flock, you can streamline all communication and decision-making processes. Flock provides top-notch features such as easy file sharing and management, simple onboarding, 24x7 support, and data security & privacy. 

Integrating Flock with <BrandName />, you can post bugs or issues to Flock's team channels directly from the <BrandName /> platform and collaborate faster on websites and web apps issues. 

## Integrating Flock With Your <BrandName /> Account
***

1. Login to your <BrandName /> account. Before configuring integrations, ensure you have administrator or user access.

2. Select **Integrations** from the <BrandName /> left menu.

3. From the COMMUNICATION category, select **FLOCK**.

<img loading="lazy" src={require('../assets/images/flock-integration/select-flock.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

4. It will redirect to the console where you will need to enter **Webhook URL**.

<img loading="lazy" src={require('../assets/images/flock-integration/enter-webhook.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>


### Generating The Webhook URL
***

1. Login to your Flock account.

2. From the left menu, click **Webhooks**.

<img loading="lazy" src={require('../assets/images/flock-integration/select-hook.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

3. Select **Add** under Incoming Webhooks.

<img loading="lazy" src={require('../assets/images/flock-integration/add.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

4. Select the channel where you wish to post the message, provide a Webhook name, and choose an icon.

<img loading="lazy" src={require('../assets/images/flock-integration/select-channel.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

5. After that, click **Save and Generate URL**.

<img loading="lazy" src={require('../assets/images/flock-integration/create-url.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

Paste the Webhook URL in the provided field and click **Install**. 

<img loading="lazy" src={require('../assets/images/flock-integration/enter-install.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

You now have successfully integrated Flock with your <BrandName /> account.

## One-Click Bug Logging With Flock Integration
***

1. From the <BrandName /> dashboard, navigate to **Real Time Testing** from the left menu.

2. Specify the test URL, select the browser, browser versions, operating system, and click **START**.

<img loading="lazy" src={require('../assets/images/flock-integration/select-env.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

It will redirect you to the cloud-based virtual machine where you can perform web testing of websites (and web apps.)

3. If you come across any UI glitch or issue, click the **Bug** icon from the left in-built tools to capture the screenshot of the web page.

<img loading="lazy" src={require('../assets/images/flock-integration/bug-icon.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

4. To annotate any issues or task, you can use the in-built image editor tools from the left menu. After annotating, click **Mark as Bug**.

<img loading="lazy" src={require('../assets/images/flock-integration/mab.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

5. On clicking Mark as Bug, a ticket will show up. Fill the details like Assignee, Issue Type, Priority, Summary, and Description. Now click **CREATE ISSUE**.

>**Note**: By default, the *Send to Flock* checkbox is marked as checked.

<img loading="lazy" src={require('../assets/images/flock-integration/create-issue.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

Your bugs will be logged to the selected Flock's channel.

6. You can view logged issues in your Flock's workspace. Marked bugs can be found in the set Flock channel along with test environment details.

<img loading="lazy" src={require('../assets/images/flock-integration/flock-channel.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

## Uninstalling The Flock Integration
***

1. Login to your <BrandName /> account.

2. Select **Integrations** from the <BrandName /> left menu.

3. Click **REMOVE** adjacent to the Flock logo in the **MY INTEGRATION** category. 

<img loading="lazy" src={require('../assets/images/flock-integration/remove.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

Alternatively, you can remove the integration by navigating to Flock under the COMMUNICATION category and clicking **REMOVE**.

<img loading="lazy" src={require('../assets/images/flock-integration/remove-2.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

>If you have any questions or need further assistance regarding <BrandName /> + Flock integration, feel free to reach out to us at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>24x7 Chat Support</span> or email us at [support@lambdatest.com](mailto:support@lambdatest.com).

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
        Flock Integration
      </span>
    </li>
  </ul>
</nav>
