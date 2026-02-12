---
id: testing-apps-locally
title: Testing Locally Hosted Apps For App Automation
sidebar_label: Testing Locally Hosted Apps
description: TestMu AI tunnel allows you to test locally and privately hosted apps across various real Android and iOS devices. In this documentation, learn how to configure TestMu AI tunnel to test locally or privately hosted apps while running app automation.
keywords:
  - local testing
  - testmu ai tunnel features
  - local testing for app automation
  - local mobile app automation
  - local mobile app testing
url: https://www.testmuai.com/support/docs/testing-locally-hosted-apps/
site_name: TestMu AI
slug: testing-locally-hosted-apps/
canonical: https://www.testmuai.com/support/docs/testing-locally-hosted-apps/
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
          "name": "Local Testing",
          "item": `${BRAND_URL}/support/docs/testing-locally-hosted-apps/`
        }]
      })
    }}
></script>


Using the <BrandName /> tunnel, you can test locally and privately hosted apps across various real Android and iOS devices on the <BrandName /> Appium test automation platform. <BrandName /> tunnel uses protocols like **Web Socket, HTTPS/TCP** and more to let you build a secure and unique tunnel connection between your local system and <BrandName /> cloud servers.

In this documentation, learn how to configure <BrandName /> tunnel to test locally or privately hosted apps while performing mobile app automation.

To test apps locally, you will need to configure:

1. Connection with <BrandName /> tunnel.

2. Test scripts to run via <BrandName /> tunnel.

## Setting Up Connection With <BrandName /> Tunnel

---

Shown below are the steps to configure the connection with <BrandName /> tunnel.

1. Download the binary file based on your operating system.

- Windows **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/32bit/LT_Windows.zip)**
- macOS **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/32bit/LT_Mac.zip)**
- Linux **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/32bit/LT_Linux.zip)**

2. Extract the downloaded binary file.

3. Navigate to the Command Prompt and point to the directory/folder where you extracted the binary file.

4. Run the below command in the terminal.

```js
./LT --user {user's login email} --key {user's access key} --tunnelName {user's tunnel name}
```

## Configuring Test Scripts

---

After configuring the connection with <BrandName /> tunnel, you will need to set the capability `tunnel` to `True`.

| Key    | Values     | Description          | Desired Capability |
| ------ | ---------- | -------------------- | ------------------ |
| tunnel | true/false | Configure the tunnel | `"tunnel" : True,` |

You can also add the `tunnel` capability using <BrandName /> Capability Generator.

> In case you have any questions or need any additional information, drop them at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmuai.com.

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
       Testing Locally Hosted Apps
      </span>
    </li>
  </ul>
</nav>
