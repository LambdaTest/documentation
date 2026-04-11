---
id: install-apps-from-app-center
title: How to Test Apps Installed via App Center?
hide_title: true
sidebar_label: App Center (Deprecating)
description: Learn how to test apps installed from App Center on TestMu AI for optimal performance on real Android and iOS devices.
keywords:
- install apps from app center
- app center
url: https://www.testmuai.com/support/docs/install-apps-from-app-center/
site_name: TestMu AI
slug: install-apps-from-app-center/
canonical: https://www.testmuai.com/support/docs/install-apps-from-app-center/
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
          "name": "How to Test Apps Installed via App Center?",
          "item": `${BRAND_URL}/support/docs/install-apps-from-app-center/`
        }]
      })
    }}
></script>

# How to Test Apps Installed via App Center? 

:::warning note
This method of uploading applications will be deprecated on [31st March 2025](https://learn.microsoft.com/en-us/appcenter/retirement). 
:::

<BrandName /> enables developers to test their mobile applications and websites across a range of real devices and browsers. It allows you to install apps directly from the App Center to test them on real android or iOS devices, ensuring that they perform well in actual user environments.

Let's dive in to learn how to test apps installed from App Center.

**Step 1**: Login to your <BrandName /> account. Visit **Real Device** from the left panel and navigate to the **App Testing**.

**Step 2**: Choose the OS version of your choice. In this case lets choose **Android**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/real-devices-for-android.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 3**: From the uploading apps section choose **Install from App Center** and enter the **API Token**. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/install-from-app-center.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 4**: You will be able to view the **Configure App Center** detail box, enter the **API Token**, select the **Build** of your choice and click on **Sync**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/api-token.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 5**: You can also **Reconfigure** and share the Builds with other team members.

**Step 6**: Select the **Device** and **OS Version** of your choice to launch the test session.




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
