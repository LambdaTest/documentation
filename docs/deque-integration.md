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

url: https://www.testmu.ai/support/docs/deque-integration
site_name: LambdaTest
slug: deque-integration
canonical: https://www.testmu.ai/support/docs/deque-integration/
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


