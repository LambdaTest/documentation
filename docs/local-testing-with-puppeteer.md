---
id: local-testing-puppeteer
title: Run Local Tests Using Puppeteer
hide_title: true
sidebar_label:  Local Testing
description: Learn how to perform local testing with Puppeteer across 40+ browser versions on the TestMu AI platform.
keywords:
  - local testing
  - testmu ai tunnel features
  - local testing for puppeteer
  - local cross browser testing
  - local testing puppeteer
  
url: https://www.testmu.ai/support/docs/local-testing-with-puppeteer/
site_name: LambdaTest
slug: local-testing-with-puppeteer
canonical: https://www.testmu.ai/support/docs/local-testing-with-puppeteer/
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
          "name": "Local Testing Using Puppeteer",
          "item": `${BRAND_URL}/support/docs/local-testing-using-playwright/`
        }]
      })
    }}
></script>

# Local Testing Using Puppeteer
* * *

<BrandName /> tunnel feature lets you test private server URLs, locally hosted web apps, and websites on 3000+ real browsers and operating systems. On <BrandName />, you can test plain HTML, CSS, PHP, Python, and other similar web files saved locally. When connecting to corporate firewalls or proxy settings, no restrictions apply to the new <BrandName /> tunnel binary. To establish a secure and unique tunnel connection between your system and <BrandName /> cloud servers, the <BrandName /> tunnel utilizes various protocols like Web Sockets, HTTPS, SSH(Secure Shell), etc.

Learn how to perform local testing using Puppeteer across 40+ real browsers and operating systems.

## Puppeteer Testing Of Locally Hosted Websites
***

You can run Puppeteer testing of locally hosted websites and web apps via <BrandName /> tunnel binary.

1. Clone the <BrandName />-Puppeteer repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Puppeteer tests, you will need to set your <BrandName /> username and access key in the environment variables.

**Windows**

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

4. To establish a tunnel connection between your local device and <BrandName />, download the binary file based on your OS.

- Windows **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/32bit/LT_Windows.zip)**
- macOS **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/32bit/LT_Mac.zip)**
- Linux **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/32bit/LT_Linux.zip)**

5. Extract the downloaded binary file.

6. Navigate to the directory or folder where you extracted the binary file in the Command Prompt.

7. Run the below command in the terminal.

```js
./LT --user {user's login email} --key {user's access key} --tunnelName {user's tunnel name}
```

8. In desired capability, add the capability `tunnel: true`.

If multiple tunnels are running, you can add `tunnel` and `tunnel ID` capabilities.

```js
'use strict';
const { strict } = require('once');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;

(async () => {    
    const capabilities = {
        'browserName': 'Chrome',
        'browserVersion': 'latest',
        'LT:Options': {
            'platform': 'Windows 10',
            'build': 'puppeteer-build-1',
            'name': 'My first Puppeteer test',
            'resolution':'1366x768',
            'user': process.env.LT_USERNAME || "Your Username",
            'accessKey': process.env.LT_ACCESS_KEY || "Your Access Key",
            'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
            'tunnelName': '' // Optional
        }
   };
   ```

You can view test reports for your local tests on the <BrandName /> automation dashboard.

 

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
        Local Testing Using Puppeteer
      </span>
    </li>
  </ul>
</nav>

