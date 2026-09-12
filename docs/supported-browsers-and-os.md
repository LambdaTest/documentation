---
id: supported-browsers-and-os
title: Supported Browsers and Operating Systems for Cypress
sidebar_label: Specify Browsers and OS
description: Check out the list of supported browsers and operating systems for Cypress testing on the TestMu AI platform.
keywords:
  - Cypress Automation
  - Cypress Testing Guide
  - Cypress Test Automation
  - Cypress Automation Testing
  - Running Cypress Tests
  - Cypress Testing Online
  - Run Cypress
  - Cypress Run Specific Test
  - Cypress Testing Environment
  - How to Run Cypress Tests

url: https://www.testmuai.com/support/docs/supported-browsers-and-os/
site_name: TestMu AI
slug: supported-browsers-and-os/
canonical: https://www.testmuai.com/support/docs/supported-browsers-and-os/
---
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
          "name": "Supported Browsers and Operating Systems for Cypress",
          "item": `${BRAND_URL}/support/docs/supported-browsers-and-os/`
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
      "@id": "https://www.testmuai.com/support/docs/supported-browsers-and-os/"
    },
    "headline": "Supported Browsers and Operating Systems for Cypress",
    "description": "Check out the list of supported browsers and operating systems for Cypress testing on the TestMu AI platform.",
    "url": "https://www.testmuai.com/support/docs/supported-browsers-and-os/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "Cypress Automation",
      "Cypress Testing Guide",
      "Cypress Test Automation"
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
        "name": "Code sample 1",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n   \"lambdatest_auth\": {\n      \"username\": \"<Your LambdaTest username>\",\n      \"access_key\": \"<Your LambdaTest access key>\"\n   },\n   \"browsers\": [\n      {\n         \"browser\": \"Chrome\",\n         \"platform\": \"Windows 10\",\n         \"versions\": [\n            \"latest\",\"latest-1\"\n         ]\n      }\n   ],"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Configuring The Browser And Platform Keys In lambdatest-config.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "   \"browsers\": [\n      {\n         \"browser\": \"Chrome\",\n         \"platform\": \"Windows 10\",\n         \"versions\": [\n            \"latest-1\"\n         ]\n      },\n   ],"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using The Cypress CLI Command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "lambdatest-cypress run --browsers \"platform:browser:version\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To target it, set the browser to Webkit in the browsers array of lambdatest-config.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\"browsers\": [\n   { \"browser\": \"Webkit\", \"platform\": \"Windows 11\",     \"versions\": [\"latest\"] },\n   { \"browser\": \"Webkit\", \"platform\": \"Windows 10\",     \"versions\": [\"latest\"] },\n   { \"browser\": \"Webkit\", \"platform\": \"MacOS Monterey\", \"versions\": [\"latest\"] },\n   { \"browser\": \"Webkit\", \"platform\": \"MacOS Big Sur\",  \"versions\": [\"latest\"] }\n]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "WebKit runs on Cypress v10.8.0 only, so pin these under run_settings.npm_dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\"npm_dependencies\": {\n   \"cypress\": \"10.8.0\",\n   \"playwright-webkit\": \"^1.28.1\"\n}"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

<BrandName /> supports the below listed browsers, browser versions and Operating Systems for Cypress testing:

<VerifiedTag value="Verified" />

```json
{
   "lambdatest_auth": {
      "username": "<Your LambdaTest username>",
      "access_key": "<Your LambdaTest access key>"
   },
   "browsers": [
      {
         "browser": "Chrome",
         "platform": "Windows 10",
         "versions": [
            "latest","latest-1"
         ]
      }
   ],
```

| OPERATING SYSTEM | CHROME                   | FIREFOX      | EDGE                     |
| ---------------- | ------------------------ | ------------ | ------------------------ |
| macOS Ventura    | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| macOS Monterey   | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| macOS Big Sur    | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| macOS Mojave     | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| macOS Catalina   | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 11       | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 10       | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 8.1      | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 8        | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 7        | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |

>**Note**: <BrandName /> Automation also supports Cypress testing on Electron browser and in WebKit.
* **Electron**: Supported on all OS.
* **WebKit**: Supported on - macOS Big Sur and macOS Monterey.

You can run Cypress tests across multiple browsers and OS combinations using the following ways.

1. Configuring the browser and platform keys in `lambdatest-config.json`
2. Using the **--browsers** flag 


## Configuring The Browser And Platform Keys In lambdatest-config.json
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

To run Cypress tests on multiple browser and OS configurations, add the *browsers* object in the `lambdatest-config.json` file to define a list of browsers, browser versions and platforms.

Below is the syntax for configuring the browser and platform keys in the `lambdatest-config.json` file.

<VerifiedTag value="Verified" />

```js
   "browsers": [
      {
         "browser": "Chrome",
         "platform": "Windows 10",
         "versions": [
            "latest-1"
         ]
      },
   ],
```

## Using The Cypress CLI Command
---

You can also run Cypress tests on multiple configurations by specifying the browser and platform using our Cypress CLI command. 

| Flag | Purpose | Type |
|------|---------|------|
| **--brs, --browsers**  | Test will be run on the specified browsers<br/> in the format: `platform:browser:version` |String |

Below is the command for specifying the browser and platform using **--brs, --browsers** flag.

<VerifiedTag value="Verified" />

```js
lambdatest-cypress run --browsers "platform:browser:version"
```


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
       Supported Browsers And OS
      </span>
    </li>
  </ul>
</nav>








