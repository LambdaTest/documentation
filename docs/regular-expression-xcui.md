---
id: regular-expression-xcui
title: Regular Expression - XCUI
# hide_title: true
sidebar_label: Regular Expression
description: There may be instances when the device you chose for a test on TestMu AI is not available. In these scenarios, REGEX will help you widen the search request for devices to run the test on.
keywords:
- regular expression testmu ai
- regular expression app automation
url: https://www.testmuai.com/support/docs/regular-expression-xcui/
site_name: TestMu AI
slug: regular-expression-xcui/
canonical: https://www.testmuai.com/support/docs/regular-expression-xcui/
---

import RealDeviceTag from '../src/component/realDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "App Automation: Regular Expression",
          "item": `${BRAND_URL}/support/docs/regular-expression-xcui/`
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
      "@id": "https://www.testmuai.com/support/docs/regular-expression-xcui/"
    },
    "headline": "Regular Expression - XCUI",
    "description": "There may be instances when the device you chose for a test on TestMu AI is not available. In these scenarios, REGEX will help you widen the search request for devices to run the test on.",
    "url": "https://www.testmuai.com/support/docs/regular-expression-xcui/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "regular expression testmu ai",
      "regular expression app automation"
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
        "programmingLanguage": "Java",
        "text": "\"device\" : [\"Pixel 6 Pro-12\"]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 2",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "\"device\" : [\"Pixel.*-12\"]"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
<RealDeviceTag value="Real Device" />
Regular Expression or REGEX is widely used to make searching/find characters in a string.

When you run a test on <BrandName /> using a specific device, there may be scenarios, in which the particular device that you selected isn’t available. In these scenarios, REGEX will help you widen the search request for devices to run the test on.

To quote an example, consider you want to run the test on an iPhone. It doesn’t matter which one, but it’s got to be an iPhone. In these cases, we can use REGEX to specify exactly that. You’ll now be allotted any iPhone that’s available which widens the search of devices considerably.

Platform version is not mandatory only if `deviceName` is passed using regex. If there is no regex in `deviceName`, passing `platformVersion` is mandatory.

Usual way to pass the `deviceName` and `platformVersion` looks like this: <br/>

```java
"device" : ["Pixel 6 Pro-12"]
```

Passing `deviceName` using REGEX:<br/>
```java
"device" : ["Pixel.*-12"]
```

:::tip Right way to pass REGEX:

``Pixel.*-12`` <br/>
``Pixel.*``

:::

:::caution
REGEX is currently possible on the `deviceName` as of now and *not* on the ``platformVerison``. <br/>
:::
