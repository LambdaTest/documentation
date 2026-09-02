---
id: selenium-mask-your-data
title: Mask Your Sensitive Data in Selenium Tests
sidebar_label: Mask Test Data
description: Mask sensitive data like usernames and access keys in TestMu AI platform logs using the maskCommands capability.
keywords:
  - selenium mask commands capability
  - hide sensitive data selenium logs
  - mask cookies sendkeys selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/selenium-mask-your-data/
site_name: TestMu AI
slug: selenium-mask-your-data/
canonical: https://www.testmuai.com/support/docs/selenium-mask-your-data/
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
          "name": "Other Capabilities",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Mask your Data",
          "item": `${BRAND_URL}/support/docs/selenium-mask-your-data/`
        }]
      })
    }}
></script>

## Overview
---

Use the **maskCommands** capability to hide sensitive data sent to or retrieved from remote browsers at TestMu AI.

When used, this capability hides all the keystrokes and other required values, and replaces them with **'*'** in test session logs (both text and raw).

## Syntax
---

Add the maskCommands capability to your desired capabilities configuration.

**Syntax (Java)**:

`capabilities.setCapability("lambdaMaskCommands", {"<array of values to be hidden>"});`

## Supported Values
---

Use the following comma-separated values to specify what data to mask.

| Value | Description |
|-------|-------------|
| `setValues`	| Hide/Redact all the text sent via sendKeys command. |
| `setCookies` | Hide/Redact all the cookies set by the addCookie command.|
| `getCookies` | Hide/Redact all the cookie values obtained using the getCookies and getCookieNamed command.|

## Language Examples
---

The following examples show how to configure maskCommands in each supported language.

| Language | Example |
|-------|-------------|
| Java	|`capabilities.setCapability("lambdaMaskCommands", {"setValues", "setCookies, getCookies"});` |
| Node.js | `capabilities['lambdaMaskCommands'] = ["setValues", "setCookies", "getCookies"]`|
| C# | `capabilities.SetCapability("lambdaMaskCommands", {"setValues", "setCookies", "getCookies"});`|
| PHP	| `$capabilities["lambdaMaskCommands"] = array("setValues", "setCookies", "getCookies")`|
| Python | `capabilities["lambdaMaskCommands"] = ["setValues", "setCookies", "getCookies"]`|
| Ruby |`capabilities["lambdaMaskCommands"] = ["setValues", "setCookies", "getCookies"]`|

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
        Mask Your Sensitive Data in Selenium Tests
      </span>
    </li>
  </ul>
</nav>
