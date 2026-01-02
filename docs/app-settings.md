---
id: app-settings
title: App Settings in Real Device Cloud
hide_title: true
sidebar_label: App Settings
description: Explore App Settings in TestMu AI's Real Device Cloud to enhance testing functionality and ensure comprehensive app validation.
keywords:
- app settings 
url: https://www.testmu.ai/support/docs/app-settings
site_name: LambdaTest
slug: app-settings
---
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
          "name": "App Settings in Real Device Cloud",
          "item": `${BRAND_URL}/support/docs/app-settings/`
        }]
      })
    }}
></script>

# App Settings in Real Device Cloud

App settings play a crucial role in testing the environment for mobile applications. These settings, provided by <BrandName />, offer developers a range of capabilities to enhance testing procedures and ensure comprehensive validation of their apps functionality.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/app-settings.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

## Image Injection

Enable the Image Injection feature to capture images, QR codes, and barcode scans seamlessly within your app using <BrandName /> devices. Our approach utilizes Sensor Instrumentation to seamlessly integrate your app with various mobile sensors, such as the camera. By enabling Image Injection for a specific session, <BrandName /> seamlessly injects camera code modules into your app, effectively mocking or overriding the Android or iOS SDK used in your app.

Check out our detailed [support documentation](/support/docs/camera-image-injection/) to learn in detail about the image injection feature.

## Biometric Authentication

Enable this setting to effortlessly test your biometric authentication-reliant applications on designated remote Lambdatest devices. This functionality enables the emulation of diverse biometric authentication techniques such as fingerprint scanning, facial recognition and others. Leveraging this feature ensures thorough validation of your applications' security and functionality across a spectrum of realistic usage scenarios.

Check out our detailed [support documentation](/support/docs/biometric-authentication/) to learn in detail about the Biometric supported APIs and much more.

## Disable Screenshot Block (only Android)

Enable this setting to conduct uninterrupted testing of your application's performance, even when screenshot capture is restricted within your app. This tool facilitates testing in both app-live and app automation scenarios, ensuring seamless evaluation of your applications.

Check out our detailed [support documentation](/support/docs/disable-screenshot-block/) to learn in detail about disable screenshot block feature.

## Default Network Logs

Enable this feature to seamlessly initiate network log capturing at the beginning of each session within your application. By enabling this setting at the app level, you prioritize the logging of network activities over device logs, ensuring comprehensive monitoring of network interactions right from the start. 


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
