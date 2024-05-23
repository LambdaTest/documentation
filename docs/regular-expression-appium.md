---
id: regular-expression-appium
title: Regular Expression (REGEX)
# hide_title: true
sidebar_label: Regular Expression
description: There may be instances when the device you chose for a test on LambdaTest is not available. In these scenarios, REGEX will help you widen the search request for devices to run the test on.
keywords:
- regular expression lambdatest
- regular expression app automation
url: https://www.lambdatest.com/support/docs/regular-expression-appium/
site_name: LambdaTest
slug: regular-expression-appium/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "App Automation: Regular Expression",
          "item": "https://www.lambdatest.com/support/docs/regular-expression-appium/"
        }]
      })
    }}
></script>
Regular Expressions (RegEx) are powerful tools for searching and manipulating strings. When running tests on LambdaTest with a specific device, there may be times when the exact device you selected isn't available. In such cases, RegEx will help you widen your search criteria to find any available device that matches your requirements.

LambdaTest provides RegEx support for both **deviceName** and **platformVersion**, making it easier to find the right devices for your tests.

## Why Use RegEx?

Imagine you want to run a test on an iPhone. You don't need a specific model, just any iPhone. Using **RegEx**, you can specify this requirement, and LambdaTest will allocate any available iPhone. This flexibility can significantly broaden the search and increase the chances of finding a suitable device quickly.


## Regex Characters for `deviceName`

| REGEX CHARACTERS | DESCRIPTION | EXAMPLE |
|------------------|-------------|---------|
| `.*`             | The characters `.*` are used to include all the devices that match the string passed.<br/><br/>**In the example given**:<br/>You'll be allocated any device from the Inventory that's an iPhone or a Pixel device respectively.<br/><br/>See detailed examples for using this RegEx here:<br/>a) **For iPhone**: [regex101 example](https://regex101.com/r/4BOgRs/1)<br/>b) **For Pixel**: [regex101 example](https://regex101.com/r/7dovT2/1)    | `"(iPhone.*)"`<br/>`"(Pixel.*)"` |
| `,`              | This character `,` is used to include more combinations of different devices in a single expression.You can also use `OR` operator in these cases. <br/><br/>**In the example given**:<br/>1. We have added 2 regex characters `.*` and `,` to show that using both in combination, we'll fetch any device from the Inventory that contains the string Pixel, Nexus, Galaxy.<br/>2. You'll be allocated any available Pixel or Nexus or Galaxy device.| `"(Pixel.*),(Nexus.*),(Galaxy.*)"` |
| `[]`             | The `[]` is used to match special/reserved characters such as `+`,`.`,`(`,`)` etc. in the device name search. Not using the `[]` may treat these characters as regex characters.<br/><br/>**In the example given**:<br/>1. You'll be allocated any iPad Pro 12.9 (2022).<br/>2. In case you send `"iPad Pro 12.9 (2022).*"` that will throw an error.| `"iPad Pro 12[.]9 [(]2022[)].*"` |
| `[]`             | The `[]` is used to include a range of devices in the combination mentioned using a **single character only**.<br/><br/>**In the example given**:<br/>Fetching any device available from Pixel 3, Pixel 3a, Pixel 4, Pixel 5, Pixel 6, Pixel 6 Pro, etc.<br/><br/>See detailed examples for using this RegEx here:<br/>[regex101 example](https://regex101.com/r/H4IvpF/1) | `"(Pixel [356].*)"` `"(Pixel [3-7].*)"` |
| `$`              | The `$` character indicates the end of a string. <br/><br/>**In the example given**:<br/>1. Allocating only Pixel 6 device & will neglect the Pixel 6 Pro devices.<br/>2. Allocating only the Pixel 3 device while neglecting Pixel 3a, Pixel 3 XL etc.<br/><br/>See detailed examples for using this RegEx here:<br/>a) **For Pixel 6**: [regex101 example](https://regex101.com/r/8qYuq6/1)<br/>b) **For Pixel 6 & 3**: [regex101 example](https://regex101.com/r/9p7sqe/1) | `"(Pixel 6$)"`<br/>`"(Pixel [36]$)"` |
| `^`              | The `^` character serves multiple purposes, it negates a character set when used inside brackets (e.g., [^8] matches any except 8), signifies that the match must occur at the beginning of the line when placed at the start of a pattern and, in combination with a negative lookahead (?!), it excludes specific patterns from matching. <br/><br/>**In the example given**:<br/> 1.The first part of this regex `.*` includes all the OnePlus devices, whereas the second part `[^8]` neglects devices containing `8` <br/>2. Excludes all the devices containing `Tab`  | `"(OnePlus [^8].*)"`<br/> `"(^(?!.*Tab).*)"`|

---

## Regex Characters for `platformVersion`

| REGEX CHARACTERS | DESCRIPTION | EXAMPLE |
|------------------|-------------|---------|
| `.*`             | The characters `.*` are used to match any version that starts with the given string.<br/><br/>**In the example given**:<br/>You'll be allocated any platform version that starts with 13 or 14.   | `"(13.*)"`<br/>`"(14.*)"` |
| `,`              | This character `,` is used to include more combinations of different versions.<br/><br/>**In the example given**:<br/>1. We have added 2 regex characters `.*` and `,` to show that using both in combination, we'll fetch any platform version that contains the string 13, 14, or 15.<br/>2. You'll be allocated any available platform version 13, 14, or 15.| `"(13.*),(14.*),(15.*)"` |
| `[]`             | The `[]` is used to include a range of versions in the combination mentioned using a **single character only**.<br/><br/>**In the example given**:<br/>Fetching any platform version available from 12, 13, 14, 15 | `"1[235]"` |
| `^`              | The `^` is used to negate a character from the search.  <br/><br/>**In the example given**:<br/>The first part of this regex includes all the versions starting with `1`, whereas the second part `[^5]` neglects versions containing `0`, like  12,13,14,16 .<br/><br/> | `"1[^5]"` |


:::tip
You can pass both `deviceName` and `platformVersion` regex patterns together or use any one of them as per your requirements. This flexibility allows you to match specific devices, versions, or combinations based on your needs.
:::

> Got any questions?<br/>
> Please reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at [support@lambdatest.com](mailto:support@lambdatest.com).

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       Regular Expression
      </span>
    </li>
  </ul>
</nav>

