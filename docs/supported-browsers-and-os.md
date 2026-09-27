---
id: supported-browsers-and-os
title: How to Set Browsers and OS for Cypress Tests on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Browsers & OS"
description: See the browsers, versions, and operating systems supported for Cypress testing on TestMu AI, and how to set them in lambdatest-config.json or the CLI.
keywords:
  - cypress supported browsers and os
  - cypress browser os matrix testmu ai
  - run cypress on multiple browsers
  - cypress webkit testing
  - supported cypress versions

url: https://www.testmuai.com/support/docs/supported-browsers-and-os/
site_name: TestMu AI
slug: supported-browsers-and-os/
canonical: https://www.testmuai.com/support/docs/supported-browsers-and-os/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';
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
      "@id": "https://www.testmuai.com/support/docs/supported-browsers-and-os/"
    },
    "headline": "How to Set Browsers and OS for Cypress Tests on TestMu AI",
    "description": "See the browsers, versions, and operating systems supported for Cypress testing on TestMu AI, and how to set them in lambdatest-config.json or the CLI.",
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
      "cypress supported browsers and os",
      "cypress browser os matrix testmu ai",
      "run cypress on multiple browsers"
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
        "name": "Configuring the browser and platform keys in lambdatest-config.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "   \"browsers\": [\n      {\n         \"browser\": \"Chrome\",\n         \"platform\": \"Windows 10\",\n         \"versions\": [\n            \"latest-1\"\n         ]\n      },\n   ],"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Selecting the browser and platform with the Cypress CLI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress run --browsers \"platform:browser:version\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Setting the browser to Webkit in the browsers array of lambdatest-config.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\"browsers\": [\n   { \"browser\": \"Webkit\", \"platform\": \"Windows 11\",     \"versions\": [\"latest\"] },\n   { \"browser\": \"Webkit\", \"platform\": \"Windows 10\",     \"versions\": [\"latest\"] },\n   { \"browser\": \"Webkit\", \"platform\": \"MacOS Monterey\", \"versions\": [\"latest\"] },\n   { \"browser\": \"Webkit\", \"platform\": \"MacOS Big Sur\",  \"versions\": [\"latest\"] }\n]"
      }
    ],
    "dateModified": "2026-09-27T00:00:00+05:30"
  }) }}
/>

# How to Set Browsers and OS for Cypress Tests on TestMu AI
***

When you run Cypress tests on the cloud, you need to know which browser and OS combinations are available and how to target them. TestMu AI runs Cypress on Chrome, Firefox, Edge, Electron, and WebKit across a range of macOS and Windows versions. You pick a combination either by adding a `browsers` object to `lambdatest-config.json` or by passing the `--browsers` flag to the CLI.

TestMu AI supports the browsers, browser versions, and operating systems listed below for Cypress testing.

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

>**Note**: TestMu AI Automation also supports Cypress testing on the Electron browser and in WebKit.
* **Electron**: Supported on all OS.
* **WebKit**: Supported on Windows 10 and 11, and macOS Big Sur and Monterey. See [how to run Cypress tests on WebKit](/support/docs/cypress-testing-using-webkit/).

You can run Cypress tests across multiple browser and OS combinations in two ways.

1. Configuring the browser and platform keys in `lambdatest-config.json`
2. Using the **--browsers** flag

## Configuring the Browser and Platform Keys in lambdatest-config.json
***

To run Cypress tests on multiple browser and OS configurations, add the `browsers` object to `lambdatest-config.json` and define a list of browsers, browser versions, and platforms. Each entry sets one browser, its platform, and the versions to run, as shown in the syntax below.

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

## Using the Cypress CLI Command
***

You can also select the browser and platform at run time with the Cypress CLI instead of editing `lambdatest-config.json`. The `--browsers` flag takes one or more `platform:browser:version` values, as described below.

| Flag | Purpose | Type |
|------|---------|------|
| **--brs, --browsers**  | Test will be run on the specified browsers<br/> in the format: `platform:browser:version` |String |

Pass each combination to the `--brs, --browsers` flag using the `platform:browser:version` format shown below.

<VerifiedTag value="Verified" />

```js
lambdatest-cypress run --browsers "platform:browser:version"
```

For the Cypress versions TestMu AI supports and how to set them, see [Supported Cypress Versions](/support/docs/supported-cypress-versions/).

## Related Cypress Guides
***

Continue with the guides below to configure and run your Cypress tests on TestMu AI.

- [Configure Cypress run settings](/support/docs/run-settings/) covers every run setting and CLI flag, including resolution and environment variables.
- [Reference the Cypress CLI commands](/support/docs/cypress-cli-commands/) documents the full lambdatest-cypress command reference.
- [Run your first Cypress test on TestMu AI](/support/docs/getting-started-with-cypress-testing/) covers cloning the sample project and running a test.

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

