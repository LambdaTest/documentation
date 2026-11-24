---
id: app-testing-on-real-devices
title: Getting started with Real Device App Testing
hide_title: true
sidebar_label: Getting Started
description: Test mobile apps on 50,000+ real devices with TestMu AI. Upload, choose devices, regions, and OS versions, and start seamless manual app testing today!!
keywords:
- real device app testing 
- testmu ai real device app testing 
url: https://www.testmuai.com/support/docs/app-testing-on-real-devices/
site_name: TestMu AI
slug: app-testing-on-real-devices/
canonical: https://www.testmuai.com/support/docs/app-testing-on-real-devices/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/app-testing-on-real-devices/"
    },
    "headline": "Getting started with Real Device App Testing",
    "description": "Test mobile apps on 50,000+ real devices with TestMu AI. Upload, choose devices, regions, and OS versions, and start seamless manual app testing today!!",
    "url": "https://www.testmuai.com/support/docs/app-testing-on-real-devices/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Real Device",
    "keywords": [
      "real device app testing",
      "testmu ai real device app testing"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-04-07T12:50:21+05:30"
  }) }}
/>

# Getting Started with Real Device App Testing

Real device app testing is the process of testing a mobile application to ensure that their functionality and usability is not compromised when installed across multiple Android and iOS devices. With <BrandName />, you can test mobile applications manually to ensure they perform seamlessly across 50,000+ real Android and iOS devices.

For the basics, see our guide on [how to test on real devices](https://www.testmuai.com/blog/real-device-testing/).

:::info Plan requirement

Real devices are not part of the free plan or the Virtual Live plan. Manual app testing on real devices needs the Real Device Plus Live plan or an Enterprise plan. See [pricing](https://www.testmuai.com/pricing/) for the current plans.

:::

<div className="ytframe"> 
<div className="youtube" data-embed="k-DgcPraWns" data-loading-attribute="eager">
  <div className="play-button"></div>
</div>
</div>

***

**Step 1:** Login to your <BrandName /> account. Go to **App Testing** under **Real Device** from the left sidebar.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/rdapptesting/Startingstep.png').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

**Step 2**: Choose the OS version of your choice. ( Android or iOS )

<img loading="lazy" src={require('../assets/images/mobile-app-testing/rdapptesting/osofyourchoice.png').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

**Step 3**: You can upload an application directly from your system or by entering a valid public URL. Once the app gets uploaded you can select the app from the **applist** or use the search bar to find a specific application. The uploading time may vary depending on the size of the application.

In the case of **Android**, you can install from Play Store or App Center. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/rdapptesting/androidlaunch3.png').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

In the case of **iOS**, you can install from the App Store, Test Flight or from App Center. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/rdapptesting/ioslaunch3.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 4**: You can select your preferred region from the **Region** dropdown. Choose from the available regions i.e., North America, Europe, Asia, or select All. If you would like to choose devices from specific regions, please reach out to [support@testmuai.com](mailto:support@testmuai.com) to get the option enabled.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/rdapptesting/choosedeviceregion.png').default} alt="Real Device Region Feature"  className="doc_img" width="1366" height="629"/>

**Step 5**: Select the **Tunnel** option in the top right corner (optional) to test your locally hosted and privately hosted websites.

Check out our detailed [support documentation](/support/docs/testing-locally-hosted-pages/) to learn how to activate the LT Tunnel.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/rdapptesting/tunnellast.png').default} alt="Real Device Tunnel"  className="doc_img" width="1366" height="629"/>

**Step 6**: Select the preferred **Brand**, **Device Name** and **OS Version** to easily navigate to your required device. You can also use the search bar to select your devices.

**Step 7**: Click on **Start** to run your test session.

## Automate Your App on Real Devices With Appium

When a manual check should become a repeatable test, run the same app on real Android and iOS devices with Appium. Connect your test to the <BrandName /> hub at `mobile-hub.lambdatest.com/wd/hub` with your `LT_USERNAME` and `LT_ACCESS_KEY`, and pass capabilities like these. `isRealMobile` set to `True` runs the session on a real device.

<Tabs className="docs__val">

<TabItem value="android" label="Android" default>

```python title="android_caps.py"
desired_caps = {
    "deviceName": "Galaxy S20",
    "platformName": "Android",
    "platformVersion": "10",
    # highlight-next-line
    "app": "APP_URL",  # Enter app (.apk) url
    "isRealMobile": True,
    "build": "Python Vanilla Android",
    "name": "Sample Test - Python",
    "network": False,
    "visual": True,
    "video": True
}
```

</TabItem>

<TabItem value="ios" label="iOS">

```python title="ios_caps.py"
desired_caps = {
    "deviceName": "iPhone 12",
    "platformName": "ios",
    "platformVersion": "14",
    "isRealMobile": True,
    # highlight-next-line
    "app": "APP_URL",  # Enter app (.ipa) url
    "build": "Python Vanilla iOS",
    "name": "Sample Test - Python",
    "network": False,
    "visual": True,
    "video": True
}
```

</TabItem>

</Tabs>

:::info
- Set `app` to your app's `app_url`, of the form `lt://APP123456789123456789`, which the [app upload API](/support/docs/application-setup-via-api/) returns. For an app you uploaded on the Real Device dashboard, copy the App ID from the app's **Settings**, as shown in [uploading apps from the dashboard](/support/docs/application-setup-via-gui/).
- Set `isRealMobile` to `False` to run on virtual devices instead of real ones.
- Generate a capabilities set for any device and OS with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/). For every supported key, see [Appium automation capabilities](/support/docs/desired-capabilities-in-appium/), and for the full test that uses these capabilities, see how to [run your first Appium test](/support/docs/getting-started-with-appium-testing/).
:::

