---
id: regular-expression-espresso
title: Regular Expression - Espresso
# hide_title: true
sidebar_label: Regular Expression
description: If your chosen device for testing on TestMu AI is unavailable, use REGEX to broaden the search for alternative devices to run espresso test.
keywords:
- regular expression testmu ai
- regular expression app automation
url: https://www.testmuai.com/support/docs/regular-expression-espresso/
site_name: TestMu AI
slug: regular-expression-espresso/
canonical: https://www.testmuai.com/support/docs/regular-expression-espresso/
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
          "item": `${BRAND_URL}/support/docs/regular-expression-espresso/`
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
      "@id": "https://www.testmuai.com/support/docs/regular-expression-espresso/"
    },
    "headline": "Regular Expression - Espresso",
    "description": "If your chosen device for testing on TestMu AI is unavailable, use REGEX to broaden the search for alternative devices to run espresso test.",
    "url": "https://www.testmuai.com/support/docs/regular-expression-espresso/",
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

Regular Expression or REGEX is widely used to make searching/find characters in a string.

When you run a test on <BrandName /> using a specific device, there may be scenarios, in which the particular device that you selected isn’t available. In these scenarios, REGEX will help you widen the search request for devices to run the test on.

To quote an example, consider you want to run the test on an iPhone. It doesn’t matter which one, but it’s got to be an iPhone. In these cases, we can use REGEX to specify exactly that. You’ll now be allotted any iPhone that’s available which widens the search of devices considerably.

Platform version is not mandatory only if `deviceName` is passed using regex. If there is no regex in `deviceName`, passing `platformVersion` is mandatory.

Usual way to pass the `deviceName` and `platformVersion` looks like this: <br/>

<VerifiedTag value="Verified" />

```java
"device" : ["Pixel 6 Pro-12"]
```

Passing `deviceName` using REGEX:<br/>

<VerifiedTag value="Verified" />

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
