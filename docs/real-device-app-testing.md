---
id: real-device-app-testing
title: Getting started with Real Device App Testing
hide_title: true
sidebar_label: Getting Started
description: With TestMu AI, perform live interactive testing of mobile applications on Android emulators and iOS simulators and ensure your apps work seamlessly across multiple versions of Android emulators and iOS simulators.
keywords:
- real device app testing 
- testmu ai real device app testing 
url: https://www.testmuai.com/support/docs/real-device-app-testing/
site_name: TestMu AI
slug: real-device-app-testing/
canonical: https://www.testmuai.com/support/docs/real-device-app-testing/
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
          "name": "Native Mobile App Testing",
          "item": `${BRAND_URL}/support/docs/real-device-app-testing/`
        }]
      })
    }}
></script>

# Getting Started with Real Device App Testing

Real device app testing is the process of testing a mobile application to ensure that their functionality and usability is not comprised when installed across multiple Android and iOS devices. With <BrandName />, you can test mobile applications manually to ensure they perform seamlessly across all Android emulators and iOS simulators.

***

**Step 1:** Login to your <BrandName /> account. Go to "**App Testing**" under “**Real Device**” from the left navigation menu.

**Step 2**: Choose the OS version of your choice. ( Android or iOS )

<img loading="lazy" src={require('../assets/images/mobile-app-testing/real-device-dashboard.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

**Step 3**: You can upload an application directly from your files or by entering a URL. To select an app, simply scroll through the uploaded files or use the search bar to find a specific application. The uploading time may vary depending on the size of the application.

In the case of **Android**, you can install from Play Store or App Center. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/real-devices-for-android.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

In the case of **iOS**, you can install from the App Store, install from Test Flight or from App Center. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/real-devices-for-ios.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 4**: You can select your preferred region from the **Region** dropdown. Choose from the available regions i.e., North America, Europe, Asia, or select All. If you would like to choose devices from specific regions, please reach out to [support@testmuai.com](mailto:support@testmuai.com) to get the option enabled.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/real-device-region-feature.webp').default} alt="Real Device Region Feature"  className="doc_img" width="1366" height="629"/>

**Step 5**: Select the **Tunnel** option in the top right corner (optional) to test your locally hosted and privately hosted websites.

For detailed instructions on how to activate the tunnel, please refer to the detailed [support documentation](/support/docs/testing-locally-hosted-pages/).

<img loading="lazy" src={require('../assets/images/mobile-app-testing/real-device-tunnel.webp').default} alt="Real Device Tunnel"  className="doc_img" width="1366" height="629"/>

**Step 6**: Select the preferred **Brand**,**Device Name** and **OS Version** to easily navigate to your required device. You can also use the search bar to select your devices.

**Step 7**: Click on **Start** to execute your test.

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
