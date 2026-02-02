---
id: hyperexecute-release-notes-2-3-8
title: Version 2.3.8
hide_title: false
sidebar_label: Version 2.3.8
description: Version 2.3.8
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-3-8/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-3-8/
canonical: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-3-8/
---


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
          "name": "Version",
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-3-8/`
        }]
      })
    }}
></script>
## Location Support for TimeZone Capability 🚀

HyperExecute has released an update for the location-based timezone capability.

With this exciting update, you can now use location names (e.g., "Kolkata") alongside UTC offsets. This empowers you to set precise timezones based on a user's location, ensuring a more seamless user experience.

:::warning note
This capability will work with Selenium, Playwright, Puppeteer, Cypress, and Appium, except for Espresso and XCUI frameworks.
:::

Previously, you might have needed to use:
```yaml
capabilities.setCapability("timezone", "UTC+05:30");
```

Now, you can simply set:
```bash
capabilities.setCapability("timezone", "Kolkata");
```

📕 Learn how to use [timezone capability](/support/docs/selenium-automation-capabilities/#lambdatest-advanced-selenium-capabilities:~:text=Name%20not%20exists-,timezone,-Example%3A%20UTC%2B07)

