---
id: reg-expression
title: Regular Expression (REGEX)
# hide_title: true
sidebar_label: Regular Expression
description: There may be instances when the device you chose for a test on LambdaTest is not available. In these scenarios, REGEX will help you widen the search request for devices to run the test on.
keywords:
- regular expression lambdatest
- regular expression app automation

url: https://www.lambdatest.com/support/docs/regular-expression/
site_name: LambdaTest
slug: regular-expression/
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
          "item": "https://www.lambdatest.com/support/docs/regular-expression/"
        }]
      })
    }}
></script>

## REGEX for App/Browser Automation

Regular Expression or REGEX is widely used to make searching/find characters in a string.

When you run a test on LambdaTest using a specific device, there may be scenarios, in which the particular device that you selected isn’t available. In these scenarios, REGEX will help you widen the search request for devices to run the test on.

To quote an example, consider you want to run the test on an iPhone. It doesn’t matter which one, but it’s got to be an iPhone. In these cases, we can use REGEX to specify exactly that. You’ll now be allotted any iPhone that’s available which widens the search of devices considerably.

| REGEX CHARACTERS | DESCRIPTION | EXAMPLE |
|-----------------|-------------|------------|
| `.*` | The characters `.*` are used to include all the devices that match the string passed.<br/><br/>**In the example given**:<br/>You’ll be allocated any device from the Inventory that’s an iPhone or a Pixel device respectively.<br/><br/>See detailed examples for using this RegEx here:<br/>a) **For iPhone**: https://regex101.com/r/4BOgRs/1<br/>b) **For Pixel**: https://regex101.com/r/7dovT2/1    | `"iPhone.*"` <br/>`"Pixel.*"` |
| `,` | This character `,` is used to include more combinations of different devices.<br/><br/>**In the example given**:<br/>1. We have added  2 regex characters `.*` and `,` to show that using both in combination, we’ll fetch any device from the Inventory that contains the string Pixel, Nexus, Galaxy.<br/>2. You’ll be allocated any available Pixel or Nexus or Galaxy device.| `"Pixel.*,Nexus.*,Galaxy.*"` |
| `[]` | The `[]` is used to include special characters like `+` in the search. Not using the `[]` will prevent the special characters from being included in the search.<br/><br/>**In the example given**:<br/>1. You’ll be allocated any Galaxy Note 10+.<br/>2. in case you send `"Galaxy Note 10+"` then, you’ll get Galaxy Note 10.| `"Galaxy Note 10[+]"` |
| `[]` | The `[]` is used to include a range of devices in the combination mentioned using a **single character only**.<br/><br/>**In the example given**:<br/>Fetching any device available from Pixel 3, Pixel 3a, Pixel 4, Pixel 5, Pixel 6, Pixel 6 Pro, etc.<br/><br/>See detailed examples for using this RegEx here:<br/>https://regex101.com/r/H4IvpF/1 | `“Pixel [3456]"` |
| `$` | The `$` character indicates the end of a string. <br/><br/>**In the example given**:<br/>1. Allocating only Pixel 6 device & will neglect the Pixel 6 Pro devices.<br/>2. Allocating only the Pixel 3 device while neglecting Pixel 3a, Pixel 3 XL etc.<br/><br/>See detailed examples for using this RegEx here:<br/>a) **For Pixel 6**: https://regex101.com/r/8qYuq6/1<br/>b) **For Pixel 6 & 3**: https://regex101.com/r/9p7sqe/1 | `“Pixel 6$"` <br/> `"Pixel [36]$"` |
| `^` | The `^` is used to negate a character from the search.  <br/><br/>**In the example given**:<br/>The first part of this regex .* includes all the OnePlus devices, whereas the second part `[^8]` neglects OnePlus 8, OnePlus 8 Pro devices as it contains the character `8`, which is negated.<br/><br/>See detailed examples for using this RegEx here:<br/>https://regex101.com/r/sIciqS/1| `“OnePlus.[^8].*"` |

## REGEX for XCUI & Espresso Tests

Platform version is not mandatory only if `deviceName` is passed using regex. If there is no regex in `deviceName`, passing `platformVersion` is mandatory.

Usual way to pass the `deviceName` and `platformVersion` looks like this: <br/>

```java
"device" : [“Pixel 6 Pro-12“]
```

Passing `deviceName` using REGEX:<br/>
```java
"device" : [“Pixel.*-12“]
```

:::tip Right way to pass REGEX:

``Pixel.*-12`` <br/>
``Pixel.*``

:::

:::caution
REGEX is currently possible on the `deviceName` as of now and *not* on the ``platformversion``. <br/>
:::

-----

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

