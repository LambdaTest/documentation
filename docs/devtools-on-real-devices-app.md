---
id: devtools-on-real-devices-app
title: DevTools On Real Devices
sidebar_label: DevTools
description: Inspect and debug embedded web views in real mobile devices using LambdaTest's DevTools.

keywords:
  - webview debugging on real device
  - inspect hybrid app webview
  - LambdaTest webview tools
  - real device DevTools
  - simulate GPS location iOS
  - mobile web view inspection
  - webview console logs
  - DOM inspection mobile
  - app testing
  - real devices
  - chrome devtools mobile
  - safari devtools mobile
  - app testing webview
url: https://www.lambdatest.com/support/docs/devtools-on-real-devices-app/
site_name: LambdaTest
slug: devtools-on-real-devices-app/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Screen Reader on Real Devices App",
          "item": `${BRAND_URL}/support/docs/devtools-on-real-devices-app/`
        }]
      })
    }}
></script>

> To enable it for your organization, please contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />

Testing hybrid apps or mobile websites that rely on embedded web views often requires advanced debugging capabilities. With <BrandName />, you can inspect and debug these web views directly on **real Android and iOS devices** using familiar tools like [**Chrome DevTools**](https://developer.chrome.com/docs/devtools/) and [**Safari Web Inspector**](https://developer.apple.com/safari/tools/#current).

This enables seamless inspection of DOM elements, console logs, network activity, and JavaScript execution—giving developers the same debugging power they enjoy on desktop browsers.



## Access DevTools on <BrandName /> Real Devices

**Step 1:** Log into your <BrandName /> dashboard and navigate to **Real Devices** > **App Testing**.

**Step 2:** Choose a real Android or iOS device, upload your app (APK/IPA) or open a browser URL, and click **Start** to launch your session.

**Step 3:** Once your app or mobile website loads, go to the screen with the WebView content.

**Step 4:** In the session toolbar, click on the **Chrome DevTools** button.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/Real_device_chrome_devtools.png').default} className="doc_img"/>

**Step 5:** A debugging window will open:
- On **Android**, this launches Chrome DevTools.
- On **iOS**, you can choose between Safari Web Inspector or Chrome DevTools.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/real_device_safari_devtools.png').default} className="doc_img"/>

Use the DevTools interface to inspect HTML structure, debug JavaScript, monitor network requests, and view console logs in real time.


---
## Supported Platforms

| Platform | Debugging Tools Available | OS Versions Supported |
|----------|---------------------------|------------------------|
| Android  | Chrome DevTools           | Android 9 and above    |
| iOS      | Safari Web Inspector, Chrome DevTools | iOS 13 and above    |

:::note
With Hybrid application, release builds must enable the ability to inspect web views in your application.

- On Android 4.4*, call WebView.setWebContentsDebuggingEnabled.
- On iOS 16.4+, set isinspectable to true on on the Webkit/WKWebView instance.
::: 
---

## Use Cases 

-  Inspect embedded content in hybrid mobile apps  
-  Debug JavaScript errors or performance issues  
-  Test mobile websites inside native wrappers  
-  Validate responsive design and layout within WebViews  
-  Troubleshoot third-party widget rendering or data fetching  
-  Test ad placements or dynamic content in app containers
-  Analyze network requests, responses, and timings to optimize your network.
-  View and edit DOM elements.

---