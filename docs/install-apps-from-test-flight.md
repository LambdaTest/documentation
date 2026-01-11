---
id: install-apps-from-test-flight
title: How to Test Apps Installed via Test flight?
hide_title: true
sidebar_label: Test Flight
description: Learn how to test apps via Test Flight on TestMu AI, optimizing performance on real iOS devices before App Store release.
keywords:
- install apps from test flight
- test flight
url: https://www.testmu.ai/support/docs/install-apps-from-test-flight
site_name: LambdaTest
slug: install-apps-from-test-flight
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
          "name": "How to Test Apps Installed via Test flight?",
          "item": `${BRAND_URL}/support/docs/install-apps-from-test-flight/`
        }]
      })
    }}
></script>

# How to Test Apps Installed via Test flight?

<BrandName /> provides a seamless testing environment for beta versions of mobile applications on real iOS devices. With TestFlight preinstalled, developers can log into TestFlight, install their beta apps on iOS devices, and test before the apps are released on the App Store. This allows developers to effectively assess and improve app performance and user experience prior to launch.

Let's dive in to learn how to test apps installed from Test Flight.

**Step 1**: Login to your <BrandName /> account. Visit **Real Device** from the left panel and navigate to the **App Testing**.

**Step 2**: Next, choose the OS version. In this case lets choose **iOS**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/upload-apps-through-ios.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 3**: From the uploading apps section choose **Install from Test Flight**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/install-from-test-flight.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 4**: Select the **iOS device** and **resolution** of your choice to launch the test session.

**Step 5**: Login to TestFlight with your Apple ID and password, install your app, and begin testing.



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
        Real Device App Testing
      </span>
    </li>
  </ul>
</nav>
