---
id: deque-integration
title: How to perform Accessibility testing using Deque's axe
hide_title: true
sidebar_label: Deque axe
description: A quick guide to perform Automated Accessibility testing using Deque's axe across 3000+ browsers and OS combinations.
keywords:
  - accessibility testing with axe
  - testmu ai deque integration
  - testmu ai deque
  - testmu ai axe
  - testmu ai axe integration
  - web accessibility testing with axe

url: https://www.testmuai.com/support/docs/deque-integration/
site_name: TestMu AI
slug: deque-integration/
canonical: https://www.testmuai.com/support/docs/deque-integration/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Deque axe Integration",
          "item": `${BRAND_URL}/support/docs/deque-integration/`
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
      "@id": "https://www.testmuai.com/support/docs/deque-integration/"
    },
    "headline": "How to perform Accessibility testing using Deque's axe",
    "description": "A quick guide to perform Automated Accessibility testing using Deque's axe across 3000+ browsers and OS combinations.",
    "url": "https://www.testmuai.com/support/docs/deque-integration/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "accessibility testing with axe",
      "testmu ai deque integration",
      "testmu ai deque"
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
        "name": "Deque axe Integration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\"@axe-core/webdriverio\": \"4.1.2-alpha.106\"\n//**or the latest version"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Deque axe Integration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\"@wdio/lambdatest-service\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Deque axe Integration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// Specify LambdaTest Username and Access Key.\nuser: process.env.LT_USERNAME,\nkey: process.env.LT_ACCESS_KEY,"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const AxeWebdriverIO = require('@axe-core/webdriverio').default;\n\nbefore: function (capabilities, specs, browser) {\n        const axeWdio = new AxeWebdriverIO({\n            client: browser\n        })\n \n        // Configure Command to run axe\n        browser.addCommand('getAxeResults', async () => {\n            return axeWdio.analyze()\n            .then(async (result) => {\n              \n             \n                return result\n            })\n            .catch(err => {\n                console.log(err)\n            })\n        })\n \n    },"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": " browser.getAxeResults()"
      }
    ],
    "dateModified": "2026-02-12T19:51:34+05:30"
  }) }}
/>

# Deque axe Integration
***

Deque's axe is a world-class digital accessibility toolkit that allows you to integrate functionality into your tests to scan content and generate an a11y score.

Learn how to automate your Web Accessibility tests with <BrandName /> and Deque using Webdriver IO framework.


1. Ensure you have the below dependency for running accessibility tests.

```js
"@axe-core/webdriverio": "4.1.2-alpha.106"
//**or the latest version
```

2. The <BrandName /> Service, which you probably have in your project.

```js
"@wdio/lambdatest-service"
```

3. The next step will be to ensure that our <BrandName /> configuration file contains the desired browser configurations and <BrandName /> Username and Access Key.

```js
// Specify LambdaTest Username and Access Key.
user: process.env.LT_USERNAME,
key: process.env.LT_ACCESS_KEY,
```

4. In the `wdio.conf` file below, we build an axeWdio object, which then creates a new AxeWebdriverIO instance that uses the current browser (or client) object from WDIO. This injects axe-core into the current page, and when analyze() is invoked, axe-core scans the current page content.

```js
const AxeWebdriverIO = require('@axe-core/webdriverio').default;

before: function (capabilities, specs, browser) {
        const axeWdio = new AxeWebdriverIO({
            client: browser
        })
 
        // Configure Command to run axe
        browser.addCommand('getAxeResults', async () => {
            return axeWdio.analyze()
            .then(async (result) => {
              
             
                return result
            })
            .catch(err => {
                console.log(err)
            })
        })
 
    },
 ```

 5. Now call the below method in your tests

```js
 browser.getAxeResults()
```

---

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
      Deque axe Integration
      </span>
    </li>
  </ul>
</nav>


