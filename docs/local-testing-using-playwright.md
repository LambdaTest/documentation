---
id: local-testing-playwright
title: How to Test Locally Hosted Pages With Playwright on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Local Testing"
description: Test locally hosted and privately hosted web pages with Playwright on TestMu AI using the TestMu AI Tunnel across real browsers and operating systems.
keywords:
  - local testing playwright
  - testmu ai tunnel features
  - local testing for playwright
  - playwright local cross browser testing
  - test locally hosted website playwright

url: https://www.testmuai.com/support/docs/local-testing-using-playwright/
site_name: TestMu AI
slug: local-testing-using-playwright/
canonical: https://www.testmuai.com/support/docs/local-testing-using-playwright/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
    "headline": "How to Test Locally Hosted Pages With Playwright on TestMu AI",
    "description": "Test locally hosted and privately hosted web pages with Playwright on TestMu AI using the TestMu AI Tunnel across real browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/local-testing-using-playwright/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "local testing playwright",
      "testmu ai tunnel features",
      "local testing for playwright",
      "playwright local cross browser testing"
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
        "name": "Install npm dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set credentials on Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "set LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set credentials on macOS or Linux",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Start the TestMu AI Tunnel",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./LT --user {user's login email} --key {user's access key} --tunnelName {user's tunnel name}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add the tunnel capability",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { chromium } = require('playwright')\nconst { expect } = require('@playwright/test');\n\n(async () => {\n  const capabilities = {\n    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    'browserVersion': 'latest',\n    'LT:Options': {\n      'platform': 'Windows 10',\n      'build': 'Playwright Sample Build',\n      'name': 'Playwright Sample Test',\n      'user': process.env.LT_USERNAME,\n      'accessKey': process.env.LT_ACCESS_KEY,\n      'tunnel': true, // Add tunnel configuration if testing a locally hosted webpage\n      'tunnelName': '' // Optional\n    }\n  }\n})()"
      }
    ],
    "dateModified": "2026-09-27T00:00:00+05:30"
  }) }}
/>

# How to Test Locally Hosted Pages With Playwright on TestMu AI
***

The <BrandName /> Tunnel lets you test private server URLs, locally hosted web apps, and websites on real browsers and operating systems. On <BrandName />, you can test plain HTML, CSS, PHP, Python, and other similar web files saved locally. When connecting through corporate firewalls or proxy settings, no restrictions apply to the <BrandName /> Tunnel binary. To establish a secure and unique tunnel connection between your system and the <BrandName /> cloud servers, the <BrandName /> Tunnel uses protocols such as Web Sockets, HTTPS, and SSH (Secure Shell).

This guide walks you through running Playwright tests against locally hosted pages across real browsers and operating systems.

## Playwright Testing Of Locally Hosted Websites
***

You can run Playwright tests against locally hosted websites and web apps by routing traffic through the <BrandName /> Tunnel binary.

:::tip Sample repo

Clone the <BrandName /> Playwright sample repository used in this document to follow along with the same files shown here. <a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-test-js" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="TestMu AI Playwright sample repository on GitHub" className="doc_img"/> View on GitHub</a>

:::

1. Clone the <BrandName /> Playwright repository on your system.

2. Install the npm dependencies.

<VerifiedTag value="Verified" />

```bash
npm install
```

3. To run your Playwright tests, set your <BrandName /> username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to find both values.

**Windows**

<VerifiedTag value="Verified" />

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

<VerifiedTag value="Verified" />

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

4. To establish a tunnel connection between your local device and <BrandName />, download the binary file for your OS.

- Windows **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/32bit/LT_Windows.zip)**
- macOS **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/32bit/LT_Mac.zip)**
- Linux **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/32bit/LT_Linux.zip)**

5. Extract the downloaded binary file.

6. In the command prompt, navigate to the directory where you extracted the binary file.

7. Run the command below in the terminal to start the tunnel.

<VerifiedTag value="Verified" />

```bash
./LT --user {user's login email} --key {user's access key} --tunnelName {user's tunnel name}
```

8. In your desired capabilities, add the capability `tunnel: true`. If multiple tunnels are running, add both the `tunnel` and `tunnelName` capabilities to target the correct one.

<VerifiedTag value="Verified" />

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
      'tunnel': true, // Add tunnel configuration if testing a locally hosted webpage
      'tunnelName': '' // Optional
    }
  }
})()
```

Once the test runs, you can view the reports for your local tests on the <BrandName /> Automation Dashboard.

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
