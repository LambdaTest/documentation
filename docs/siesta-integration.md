---
id: siesta-integration
title: Siesta Integration
hide_title: true
sidebar_label: Siesta
description: Integrate TestMu AI with Siesta to perform automated browser testing of your locally hosted websites and web pages across 3000+ real browsers and operating systems.
keywords:
  - testmu ai integration with siesta
  - testmu ai and siesta integration 
  - testmu ai siesta
url: https://www.testmuai.com/support/docs/siesta-integration/
site_name: TestMu AI
slug: siesta-integration/
canonical: https://www.testmuai.com/support/docs/siesta-integration/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "Siesta Integration",
          "item": `${BRAND_URL}/support/docs/siesta-integration/`
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
      "@id": "https://www.testmuai.com/support/docs/siesta-integration/"
    },
    "headline": "Siesta Integration",
    "description": "Integrate TestMu AI with Siesta to perform automated browser testing of your locally hosted websites and web pages across 3000+ real browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/siesta-integration/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "testmu ai integration with siesta",
      "testmu ai and siesta integration",
      "testmu ai siesta"
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
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "set LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Single Test With Siesta",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "C:\\xampp\\htdocs\\siesta\\bin\\webdriver http://localhost/siesta/examples/browser/index.html --filter basic --lambdatest LT_USERNAME, LT_ACCESS_KEY --cap browserName=firefox --cap platform=windows"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Parallel Testing With Siesta",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "C:\\xampp\\htdocs\\siesta\\bin\\webdriver http://localhost/siesta/examples/browser/index.html --filter basic --lambdatest LT_USERNAME, LT_ACCESS_KEY --cap browserName=firefox --cap platform=windows --max-workers"
      }
    ],
    "dateModified": "2026-08-14T19:24:28+05:30"
  }) }}
/>

# Siesta Integration
***

Siesta is a JavaScript and UI testing tool for web pages and Node.js processes. You can run tests in browsers, Node.js, and Deno on Linux, macOS, and Windows.

<BrandName /> and Siesta integration lets you perform automated browser testing of your locally hosted websites or web apps across 10,000+ browser/device combinations.

## Prerequisites
***

1. A <BrandName /> account. In case, you don't have an <BrandName /> account, <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>sign up for free</a>.

2. Download Siesta from official Bryntum website.

3. In order to run your Siesta tests, you will need to set your <BrandName /> username and access key in the environment variables. Click the Access Key button at the top-right of the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to access it.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Image" width="625" height="374"  className="doc_img"/>


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

## Running Single Test With Siesta
***

Configure your local web server "localhost" on port 80 and then run the below command in the CMD terminal -

<VerifiedTag value="Verified" />

```js
C:\xampp\htdocs\siesta\bin\webdriver http://localhost/siesta/examples/browser/index.html --filter basic --lambdatest LT_USERNAME, LT_ACCESS_KEY --cap browserName=firefox --cap platform=windows
```

<img loading="lazy" src={require('../assets/images/siesta/siesta-single-test.webp').default} alt="Image" width="1366" height="625"  className="doc_img"/>


To generate desired capabilities for your test script, head over to our [Desired Capabilities Generator](https://www.testmuai.com/capabilities-generator/).

## Parallel Testing With Siesta
***

<BrandName /> lets you to perform parallel testing with Siesta across 3000+ browsers and OS. You can run one test case across multiple browsers, or you can run multiple test case scenarios in the same browser with different browser versions.


To run your tests in parallel, pass the below command in the CMD terminal-

<VerifiedTag value="Verified" />

```js
C:\xampp\htdocs\siesta\bin\webdriver http://localhost/siesta/examples/browser/index.html --filter basic --lambdatest LT_USERNAME, LT_ACCESS_KEY --cap browserName=firefox --cap platform=windows --max-workers
```
---

> If you come across any issue or doubt, feel free to reach out to us via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>. Or you can even mail us at [support@testmuai.com](mailto:support@testmuai.com) Happy Testing!!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href={`${BRAND_URL}/support/docs/`}>Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Siesta Integration</span>
    </li>
  </ul>
</nav>
