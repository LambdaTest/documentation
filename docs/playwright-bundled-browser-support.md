---
id: playwright-bundled-browser-support
title: Playwright Bundled Browser Support
hide_title: false
sidebar_label: Bundled Browser Support List
description: List of all the Playwright Bundled Browser Support
keywords:
    - testmu ai
    - playwright
    - support
    - browsers
    - bundled browser
    - playwright bundled
    - playwright browsers
url: https://www.testmuai.com/support/docs/playwright-bundled-browser-support/
site_name: TestMu AI
slug: playwright-bundled-browser-support/
canonical: https://www.testmuai.com/support/docs/playwright-bundled-browser-support/
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
          "name": "Playwright Bundled Browser Support",
          "item": `${BRAND_URL}/support/docs/playwright-bundled-browser-support/`
        }]
      })
    }}
></script>

When you set the capability [`useSpecificBundleVersion: true`](/support/docs/capabilities-for-playwright/#:~:text=setHTTPCredentials%22%2C%20%22setStorageState%22%2C%20%22setGeolocation%22%5D%7D%7D-,useSpecificBundleVersion,-Boolean), then <BrandName /> will select the browser (Chromium, Firefox, Webkit) version as per your local machine's PLaywright version. 

```yaml
const capabilities = { "LT:Options": {"useSpecificBundleVersion": true,}}
```

| Playwright Versions | Chromium | Firefox | Webkit |
|---------------------|----------|---------|--------|
|1.50| 130-133 except - 132, 126, 122 | 130-134, except - 131,133,126,122,120 | 18.0, 18.2 |
|1.49| 130-133 except - 132, 126, 122 | 130-134, except - 131,133,126,122,120 | 18.0, 18.2 |
|1.48| 130-133 except - 132, 126, 122 | 130-134, except - 131,133,126,122,120 | 18.0, 18.2 |
|1.47| 129 except - 132, 126, 122 | 130, except - 131,133,126,122,120 | 18.0 |
|1.46| 119-133, except - 132, 126, 122 | 118-134, except - 131,133, 126,122,120 | 17.4, 18.2 |
|1.45| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.44| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.43| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.42| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.41| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.40| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.39| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.38| 114-117 | 113-117 | 17 |
|1.37| 114-117 | 113-117 | 17 |
|1.36| 114-117 | 113-117 | 17 |
|1.35| 114-117 | 113-117 | 16.4 |
|1.34| 114-117 | 113-117 | 16.4 |
|1.33| 104-113 | 103-112 | 16.4 |
|1.32| 104-113 | 103-112 | 16.4 |
|1.31| 104-113 | 103-112 | 16.4 |
|1.30| 104-113 | 103-112 | 16.4 |
|1.29| 104-113 | 103-112 | 16.4 |
|1.28| 104-113 | 103-112 | 16.4 |
|1.27| 104-113 | 103-112 | 16.4 |
|1.26| 104-113 | 103-112 | 16 |
|1.25| 104-113 | 103-112 | 16 |
|1.24| 103-104 | 100-102 | 16 |
