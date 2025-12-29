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
url: https://www.testmu.ai/support/docs/app-center
site_name: LambdaTest
slug: app-center
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Migration",
          "item": "https://www.lambdatest.com/support/docs/app-center/"
        }]
      })
    }}
></script>

# Configuring App Center on LambdaTest

---

This article will guide you on how to configure App Center on LambdaTest & manage your applications.

## Objective

---

By the end of this article, you will be able to :

- Install apps from App Center by configuring them on LambdaTest.
- Manage synced apps on LambdaTest.

## What is App Center?

---

**Visual Studio App Center** is an integrated mobile development lifecycle solution for iOS, Android, Windows and macOS apps. It brings together multiple services commonly used by mobile developers, including build, test, distribute, monitoring, diagnostics, etc., into one single integrated cloud solution. 

It can be used to decrease the manual effort of uploading the app & **automate** the process.

## Prerequisites

---

Before getting started with the setup, you would need access to the following:

1. Access to LambdaTest [Real Devices](https://www.lambdatest.com/pricing).
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

4. Now, you’ll get the API token, click on the Copy Button & we’ll use it in Step 2 in LambdaTest Steps.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center04.webp').default} alt="cmd" className="doc_img"/>



## LambdaTest Real-Time App Testing

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

4. Click on Sync to sync the Builds with LambdaTest.
> **Note:** Only the Builds synced will appear on LambdaTest. In case you missed something, Click on 'Configure' to select other Builds later.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center08.webp').default} alt="cmd" className="doc_img"/>

App Center is now configured to be used with LambdaTest.
  ***


5. Selected Builds from App Center will now appear on LambdaTest. Click on them to toggle them & select the Version from the Build that you’d like to run the test on.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center09.webp').default} alt="cmd" className="doc_img"/>

  ***

6. Click on the sync icon & start the test using the selected application.

  <img loading="lazy" src={require('../assets/images/app-center-integration/app-center10.webp').default} alt="cmd" className="doc_img"/>


## Managing App Center Builds on LambdaTest

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

> That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**[24X7 Chat Support]**</span> or mail us directly at support@lambdatest.com.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
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
