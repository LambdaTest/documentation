---
id: local-testing-playwright
title: Run Local Tests Using Playwright
hide_title: true
sidebar_label:  Local Testing
description: Learn how to perform local testing with Playwright across multiple browser versions on the TestMu AI platform.
keywords:
  - local testing
  - testmu ai tunnel features
  - local testing for playwright
  - local cross browser testing
  - local testing playwright
  
url: https://www.testmuai.com/support/docs/local-testing-using-playwright/
site_name: TestMu AI
slug: local-testing-using-playwright/
canonical: https://www.testmuai.com/support/docs/local-testing-using-playwright/
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
          "name": "Local Testing Using Playwright",
          "item": `${BRAND_URL}/support/docs/local-testing-using-playwright/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/local-testing-using-playwright/"
    },
    "headline": "Run Local Tests Using Playwright",
    "description": "Learn how to perform local testing with Playwright across multiple browser versions on the TestMu AI platform.",
    "url": "https://www.testmuai.com/support/docs/local-testing-using-playwright/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "local testing",
      "testmu ai tunnel features",
      "local testing for playwright"
    ],
    "proficiencyLevel": "Beginner",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Playwright Testing Of Locally Hosted Websites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "npm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Playwright Testing Of Locally Hosted Websites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "set LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Playwright Testing Of Locally Hosted Websites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "./LT --user {user's login email} --key {user's access key} --tunnelName {user's tunnel name}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { chromium } = require('playwright')\nconst { expect } = require('@playwright/test');\n\n(async () => {\n  const capabilities = {\n    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    'browserVersion': 'latest',\n    'LT:Options': {\n      'platform': 'Windows 10',\n      'build': 'Playwright Sample Build',\n      'name': 'Playwright Sample Test',\n      'user': process.env.LT_USERNAME,\n      'accessKey': process.env.LT_ACCESS_KEY,\n      'tunnel': false, // Add tunnel configuration if testing locally hosted webpage\n      'tunnelName': '' // Optional\n    }\n  }"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Local Testing Using Playwright
* * *

<BrandName /> tunnel feature lets you test private server URLs, locally hosted web apps, and websites on real browsers and operating systems. On <BrandName />, you can test plain HTML, CSS, PHP, Python, and other similar web files saved locally. When connecting to corporate firewalls or proxy settings, no restrictions apply to the new <BrandName /> tunnel binary. To establish a secure and unique tunnel connection between your system and <BrandName /> cloud servers, the <BrandName /> tunnel utilizes various protocols like Web Sockets, HTTPS, SSH(Secure Shell), etc.

Learn how to perform local testing using Playwright across real browsers and operating systems.

## Playwright Testing Of Locally Hosted Websites
***

You can run Playwright testing of locally hosted websites and web apps via <BrandName /> tunnel binary.

1. Clone the <BrandName />-Playwright repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Playwright tests, you will need to set your <BrandName /> username and access key in the environment variables.

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
const { chromium } = require('playwright')
const { expect } = require('@playwright/test');

(async () => {
  const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
      'tunnelName': '' // Optional
    }
  }
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
        Local Testing Using Playwright
      </span>
    </li>
  </ul>
</nav>
