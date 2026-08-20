---
id: select-pre-installed-apps
title: Select Pre-Installed App in Session
hide_title: false
sidebar_label: Select Pre-Installed Apps
description: Accelerate testing with pre-installed apps on TestMu AI. Start sessions faster, reduce setup time, and enhance efficiency in private cloud environments.
keywords:
  - select pre installed apps
  - select pre installed apps in session
url: https://www.testmuai.com/support/docs/select-pre-installed-apps/
site_name: TestMu AI
slug: select-pre-installed-apps/
canonical: https://www.testmuai.com/support/docs/select-pre-installed-apps/
---

import CodeBlock from '@theme/CodeBlock';
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
          "name": "Select Pre-Installed App in Session",
          "item": `${BRAND_URL}/support/docs/select-pre-installed-apps/`
        }]
      })
    }}
></script>

<BrandName /> empowers developers with a comprehensive testing environment, enabling thorough examination of mobile applications and websites across real devices and browsers. One standout feature is the ability to start testing sessions with pre-installed applications, enhancing efficiency, and reducing test start time,  in **private cloud** setups where data retention and reusability are paramount.

:::note
To access the pre-installed apps, you need to have a **Private Cloud** Plan. 

You can purchase or upgrade to the required [plan](https://www.testmuai.com/pricing/). If you need assistance, please contact your <BrandName /> support representative, reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**[24×7 Chat Support]**</span>, or email us at **support@testmuai.com**.
:::

---

## Start a Manual Session with Pre-Installed Apps

Let's delve into the streamlined steps to initiate a manual testing session with pre-installed applications:

**Step 1.** Login to your <BrandName /> account. Go to **App Testing** under **Real Device** from the left sidebar.

**Step 2.** Enable the toggle to enter into your **Private Cloud**.

**Step 3.** Select your preferred operating system version from the private device pool.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/os-version-from-private-device-pool.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 4.** Within the **App Testing** section, locate and select the option to start a session with pre-installed applications.

**Step 5.** Upon initiating the session, gain instant access to the pre-installed applications on the designated device. This seamless integration accelerates testing scenarios, significantly reducing start time.

By adhering to the above steps, you can seamlessly commence testing sessions with pre-installed applications on <BrandName />. This feature not only expedites the testing process but also enhances efficiency, making it particularly advantageous for private cloud environments. With data retained within the private cloud devices, <BrandName /> ensures enhanced flexibility and productivity in testing workflows.

---

## Start an Automation Session with Pre-Installed Apps

You can also run app automation tests directly on an app that is already installed on your private device, without reinstalling the app or resetting its existing state.

To do this, pass the `app` capability as `Stock`, in addition to your private cloud capabilities. Along with it:

- For **Android**, pass the `appPackage` and `appActivity` of your app.
- For **iOS**, pass the `bundleId` of your app.

<Tabs className="docs__val">

<TabItem value="android" label="Android" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-java">
  {`DesiredCapabilities capabilities = new DesiredCapabilities();
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("privateCloud", true);
ltOptions.put("udid", "<PRIVATE_DEVICE_UDID>");
ltOptions.put("platformName", "android");
ltOptions.put("deviceName", "Galaxy S24");
ltOptions.put("platformVersion", "14");
ltOptions.put("app", "stock");
ltOptions.put("appPackage", "com.proverbial");
ltOptions.put("appActivity", "com.proverbial.MainActivity");
capabilities.setCapability("lt:options", ltOptions);`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="ios" label="iOS">

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-java">
  {`DesiredCapabilities capabilities = new DesiredCapabilities();
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("privateCloud", true);
ltOptions.put("udid", "<PRIVATE_DEVICE_UDID>");
ltOptions.put("platformName", "ios");
ltOptions.put("deviceName", "iPhone 16");
ltOptions.put("platformVersion", "18");
ltOptions.put("app", "stock");
ltOptions.put("bundleId", "com.proverbial.ios");
capabilities.setCapability("lt:options", ltOptions);`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

> **Note:** Since the `app` capability is set to `Stock`, the session launches the app already present on the device, retaining its existing data and state.

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