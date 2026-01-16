---
id: app-center-integration
title: Configuring App Center on TestMu AI
hide_title: true
sidebar_label: Configuring App Center
description: This article will guide you on how to configure App Center on TestMu AI platform so you can run tests directly without uploading apps manually.
keywords:
  - App Center
  - Microsoft App Center
  - VS App Center
  - Configuring App Center on TestMu AI
  - Auto upload apps on TestMu AI
  - TestMu AI Cloud Platform
url: https://www.testmu.ai/support/docs/app-center/
site_name: LambdaTest
slug: app-center/
canonical: https://www.testmu.ai/support/docs/app-center/
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
          "name": "Migration",
          "item": `${BRAND_URL}/support/docs/app-center/`
        }]
      })
    }}
></script>

# Configuring App Center on <BrandName />

---

This article will guide you on how to configure App Center on <BrandName /> & manage your applications.

## Objective

---

By the end of this article, you will be able to :

- Install apps from App Center by configuring them on <BrandName />.
- Manage synced apps on <BrandName />.

## What is App Center?

---

**Visual Studio App Center** is an integrated mobile development lifecycle solution for iOS, Android, Windows and macOS apps. It brings together multiple services commonly used by mobile developers, including build, test, distribute, monitoring, diagnostics, etc., into one single integrated cloud solution. 

It can be used to decrease the manual effort of uploading the app & **automate** the process.

## Prerequisites

---

Before getting started with the setup, you would need access to the following:

1. Access to <BrandName /> [Real Devices](https://www.lambdatest.com/pricing).
2. Access to App Center & permissions to be able to generate API Token on App Center.

## Generating API Token on App Center

---

1. Click on your Profile icon > Account Settings

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center01.webp').default} alt="cmd" className="doc_img"/>

  ***

2. Click on the "User API Tokens" to generate a token.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center02.webp').default} alt="cmd" className="doc_img"/>

  ***

3. Click on "Add new API token" to add the new token.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center03.webp').default} alt="cmd" className="doc_img"/>

  ***

4. Now, you’ll get the API token, click on the Copy Button & we’ll use it in Step 2 in <BrandName /> Steps.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center04.webp').default} alt="cmd" className="doc_img"/>



## <BrandName /> Real-Time App Testing

---

1. Click on the "Configure" Button

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center05.webp').default} alt="cmd" className="doc_img"/>

  ***

2. Paste the API Token we copied 'App Center' & click 'Validate'.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center06.webp').default} alt="cmd" className="doc_img"/>

  ***

3. Now Select your Builds on App Center by clicking on "Select Builds" to Select the "Builds" from App Center.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center07.webp').default} alt="cmd" className="doc_img"/>

  ***

4. Click on Sync to sync the Builds with <BrandName />.
> **Note:** Only the Builds synced will appear on <BrandName />. In case you missed something, Click on 'Configure' to select other Builds later.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center08.webp').default} alt="cmd" className="doc_img"/>

App Center is now configured to be used with <BrandName />.
  ***


5. Selected Builds from App Center will now appear on <BrandName />. Click on them to toggle them & select the Version from the Build that you’d like to run the test on.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center09.webp').default} alt="cmd" className="doc_img"/>

  ***

6. Click on the sync icon & start the test using the selected application.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center10.webp').default} alt="cmd" className="doc_img"/>


## Managing App Center Builds on <BrandName />

---

> If an app is not synced, the test will not start. Make sure to sync the app before starting the test.

1. The app is not Synced.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center11.webp').default} alt="cmd" className="doc_img"/>

  ***

2. The app is ready for Testing

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center12.webp').default} alt="cmd" className="doc_img"/>

  ***

3. Delete the app by hovering over the Ready for Testing Apps.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center13.webp').default} alt="cmd" className="doc_img"/>


  ***

> That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**[24X7 Chat Support]**</span> or mail us directly at support@testmu.ai.

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
      Configuring App Center
      </span>
    </li>
  </ul>
</nav>
