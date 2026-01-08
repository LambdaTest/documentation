---
id: selenium-default-capabilities
title: Selenium Default Capabilities
hide_title: false
sidebar_label: Default Capabilities
description: This document list downs the default Capabilities in selenium that are supported in TestMu AI
keywords:
  - testmu ai automation
  - selenium automation grid
  - selenium capabilities
url: https://www.testmu.ai/support/docs/selenium-default-capabilities
site_name: LambdaTest
slug: selenium-default-capabilities
---

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

| Key | Values | Capability Description |
|-----|--------|------------------------|
| `javascriptEnabled` | true, false | Based on the user provided input, this capability helps to enable the support for JavaScript execution.|
| `databaseEnabled` | true, false | Decides if a session could communicate with the database. |
| `locationContextEnabled` | true, false | Decides if a session can use the features with respect to different geographic locations.|
| `applicationCacheEnabled` | true, false | Decides if a session is able to utilize the application cache.|
| `browserConnectionEnabled` | true, false | Determines the browser connectivity with respect to the query involved in the session. Also checks whether the session can be disabled if required by the end user. |
| `webStorageEnabled` | true, false | Decides if a session is able to connect with [storage objects](https://www.w3.org/TR/2009/WD-webstorage-20091029/).|
| `acceptSslCerts` | true, false | Decides if a session by default should accept all SSL certificates.|
| `unexpectedAlertBehaviour` | accept, dismiss, ignore | Determines the action of a browser for handling alerts, prior to pointing the UnhandledAlertException. |
| `elementScrollBehavior` | integer | Determines the scrolling behavior according to the user provided input. The user can decide if the elements should be aligned to top(0) or bottom(1) with respect to the elements scroll-ability inside the viewport. By default the value is set to 1, aligning the scroll behavior to top. This is compatible with IE and Firefox (since 2.36) |
| `preventCrossSiteTracking` | true, false | Blocks or unblocks cross-site tracking. |
