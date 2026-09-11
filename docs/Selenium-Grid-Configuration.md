---
id: Selenium-Grid-Configuration
title: Selenium Grid Configuration Guide
sidebar_label: View Grid Configuration
description: View the current Selenium Grid configuration including driver versions, HUB URI, ports, and defaults.
keywords:
  - selenium grid hub url configuration
  - chromedriver geckodriver version
  - selenium grid idle timeout setting
  - configure selenium grid resolution
  - selenium grid port and mode
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/testmu-grid-configuration/
site_name: TestMu AI
slug: testmu-grid-configuration/
canonical: https://www.testmuai.com/support/docs/testmu-grid-configuration/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "Selenium Grid Configuration",
          "item": `${BRAND_URL}/support/docs/lambdatest-grid-configuration`
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
      "@id": "https://www.testmuai.com/support/docs/testmu-grid-configuration/"
    },
    "headline": "Selenium Grid Configuration Guide",
    "description": "View the current Selenium Grid configuration including driver versions, HUB URI, ports, and defaults.",
    "url": "https://www.testmuai.com/support/docs/testmu-grid-configuration/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "selenium grid hub url configuration",
      "chromedriver geckodriver version",
      "selenium grid idle timeout setting"
    ],
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
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# TestMu AI Selenium Grid Configuration

***

We constantly upgrade our grid with the stable version of Selenium.

The grid auto-selects the latest stable versions of Selenium and browser drivers.

## Selenium Automation Grid Configuration
---
Review the current driver versions, HUB URI, port, and default settings for the grid.

| KEY                         | VALUE                                                   |
|-----------------------------|---------------------------------------------------------|
| Selenium version            | Latest (grid auto-selects) - Auto-updated<br/>[Want to change version?](https://www.testmuai.com/capabilities-generator/) |
| IEDriver version            | Latest (grid auto-selects) - Auto-updated<br/>[Want to change version?](https://www.testmuai.com/capabilities-generator/) |
| ChromeDriver version        | Latest (grid auto-selects) - Auto-updated<br/>[Want to change version?](https://www.testmuai.com/capabilities-generator/)           |
| Firefox/GeckoDriver Version | Latest (grid auto-selects) - Auto-updated<br/>[Want to change version?](https://www.testmuai.com/capabilities-generator/)          |
| HUB URI                     | [hub.lambdatest.com](https://hub.lambdatest.com/)                                      |
| HUB Port                    | 443 (HTTPS/SSL)                                          |
| Window Mode                 | Multi-window                                            |
| Default Idle Timeout        | 120 seconds<br/>[Want to change Idle Timeout?](https://www.testmuai.com/capabilities-generator/)                |
| Default Screen Resolution   | 1024x768<br/>[Want to change Resolution?](https://www.testmuai.com/capabilities-generator/)                     |

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
        Selenium Grid Configuration
      </span>
    </li>
  </ul>
</nav>
