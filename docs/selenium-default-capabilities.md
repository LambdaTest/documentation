---
id: selenium-default-capabilities
title: Selenium Default Capabilities
sidebar_label: Default Capabilities
description: View the default Selenium capabilities supported in TestMu AI for browser configuration and session control.
keywords:
  - selenium default capabilities list
  - selenium built-in capabilities reference
  - selenium javascript enabled capability
  - selenium ssl certificate capability
  - configure selenium session defaults
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/selenium-default-capabilities/
site_name: TestMu AI
slug: selenium-default-capabilities/
canonical: https://www.testmuai.com/support/docs/selenium-default-capabilities/
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
          "name": "Selenium Capabilities",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Selenium Default Capability",
          "item": `${BRAND_URL}/support/docs/selenium-default-capabilities/`
        }]
      })
    }}
></script>

## Default Capabilities Reference
---
These are the built-in capabilities that Selenium supports for browser session configuration.

| Key | Values | Capability Description |
|-----|--------|------------------------|
| `javascriptEnabled` | true, false | Enables or disables JavaScript execution support based on the provided input.|
| `databaseEnabled` | true, false | Determines whether a session can communicate with the database. |
| `locationContextEnabled` | true, false | Determines whether a session can use features related to different geographic locations.|
| `applicationCacheEnabled` | true, false | Determines whether a session can use the application cache.|
| `browserConnectionEnabled` | true, false | Determines the browser connectivity for the query involved in the session. Also checks whether the end user can disable the session if required. |
| `webStorageEnabled` | true, false | Determines whether a session can connect with [storage objects](https://www.w3.org/TR/2009/WD-webstorage-20091029/).|
| `acceptSslCerts` | true, false | Determines whether a session should accept all SSL certificates by default.|
| `unexpectedAlertBehaviour` | accept, dismiss, ignore | Determines the browser action for handling alerts before pointing the UnhandledAlertException. |
| `elementScrollBehavior` | integer | Determines the scrolling behavior based on the provided input. You can align elements to top(0) or bottom(1) with respect to the elements scroll-ability inside the viewport. By default the value is set to 1, aligning the scroll behavior to top. This is compatible with IE and Firefox (since 2.36). |
| `preventCrossSiteTracking` | true, false | Blocks or unblocks cross-site tracking. |

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
        Selenium Default Capabilities
      </span>
    </li>
  </ul>
</nav>
