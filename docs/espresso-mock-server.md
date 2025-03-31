---
id: espresso-mock-server
title: Espresso Mock Server
sidebar_label: Mock Server
description: Now you can run your Espresso mock server on LambdaTest online grid of 3000+ real desktop browsers and real operating systems with its supported capabilities.
keywords:
  - espresso
  - java
  - mock server
  - lambdatest java
  - framework on lambdatest
  - testng
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/espresso-mock-server/
site_name: LambdaTest
slug: espresso-mock-server/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Espresso Mock Server",
          "item": "https://www.lambdatest.com/support/docs/espresso-mock-server"
        }]
      })
    }}
></script>
Espresso Mock Server (also known as MockWebServer from Square) lets you simulate server responses in your Android tests. You can control exactly what response an API call gets—status code, headers, body, delay, etc.

## Capability Support

To enable Espresso Mock Server in your LambdaTest Espresso tests, you must set the following desired capability:

```java
"enableWifi": true
```

This capability allows the Android emulator to expose internal ports to communicate with a mock server (e.g. MockWebServer) running within your test environment. This is helpful when your app communicates with a mock server running on a specific port within the emulator, and you want to control the server’s responses during testing.

## Limitation
Using `enableWifi: true` comes with the following restrictions:

You cannot use it in combination with other networking capabilities like:

- `network`
- `dedicatedProxy`
- `geoLocation`
- `tunnel`

Make sure to remove these if you're enabling the mock server capability.