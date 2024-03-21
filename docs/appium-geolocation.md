---
id: appium-ip-geolocation
title: IP Geolocation 
hide_title: true
sidebar_label: IP Geolocation 
description: This document provides information about configuring IP Geolocation for tests on the LambdaTest platform and also provides a list of supported geolocations on Real Devices.
keywords:
 - IP Geolocation
 - geolocation testing
 - testing tools
 - LambdaTest 
 - IP geolocation support

url: https://www.lambdatest.com/support/docs/appium-ip-geolocation/
site_name: LambdaTest
slug: appium-ip-geolocation/
---


import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "IP Geolocation",
          "item": "https://www.lambdatest.com/support/docs/appium-ip-geolocation/"
        }]
      })
    }}
></script>

# IP Geolocation 

Lambdatest's IP Geolocation feature empowers users to test their websites and mobile applications from various geographical locations worldwide. This feature enables users to simulate traffic originating from different countries and regions, allowing for comprehensive testing of platform functionalities across diverse global markets.

By the end of this document, you'll learn how to use this feature in both manual and automation tests. Additionally, this document will provide a list of all supported IP geolocations on Lambdatest.


## Support for Manual Testing on Real Devices

Once a session starts , navigate to the toolbar and select **IP Geolocation** followed by any location from the list to change the geolocation of the device.


<img loading="lazy" src={require('../assets/images/app-automation/ipgeolocation.png').default} alt="Image" width="100" height="100" className="doc_img"/>

## Support for Automation on Real Devices

To harness the **IP Geolocation** feature in your automated tests, employ the `geoLocation` capability along with a two-letter country code from the list of supported countries provided below. This capability enables you to modify the device's geolocation to the specified location. If this capability is not added, the device will automatically update its geolocation based on its physical location.

**Java Example:** 
```java
// Java code for configuring IP Geolcation in tests on LambdaTest
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("geoLocation", "FR");
// Add other capabilities as needed
```

## Supported IP Geolocations

Below is the list of supported countries along with their respective country codes:

| Name                   | Code |
| ---------------------- | --- |
| Albania                | AL  |
| Andorra                | AD  |
| Argentina              | AR  |
| Armenia                | AM  |
| Australia              | AU  |
| Austria                | AT  |
| Azerbaijan             | AZ  |
| Bahrain                | BH  |
| Bangladesh             | BD  |
| Belarus                | BY  |
| Belgium                | BE  |
| Bosnia and Herzegovina| BA  |
| Brazil                 | BR  |
| Bulgaria               | BG  |
| Cambodia               | KH  |
| Canada                 | CA  |
| Chile                  | CL  |
| China                  | CN  |
| Colombia               | CO  |
| Costa Rica             | CR  |
| Croatia                | HR  |
| Curacao                | CW  |
| Cyprus                 | CY  |
| Czech Republic         | CZ  |
| Denmark                | DK  |
| Dominican Republic     | DO  |
| Ecuador                | EC  |
| Egypt                  | EG  |
| El Salvador            | SV  |
| Estonia                | EE  |
| Finland                | FI  |
| France                 | FR  |
| Georgia                | GE  |
| Germany                | DE  |
| Greece                 | GR  |
| Guatemala              | GT  |
| Honduras               | HN  |
| Hong Kong              | HK  |
| Hungary                | HU  |
| Iceland                | IS  |
| India                  | IN  |
| Indonesia              | ID  |
| Ireland                | IE  |
| Israel                 | IL  |
| Italy                  | IT  |
| Jamaica                | JM  |
| Japan                  | JP  |
| Jordan                 | JO  |
| Kazakhstan             | KZ  |
| Kenya                  | KE  |
| Kuwait                 | KW  |
| Kyrgyzstan             | KG  |
| Latvia                 | LV  |
| Lebanon                | LB  |
| Lithuania              | LT  |
| Luxembourg             | LU  |
| Malaysia               | MY  |
| Malta                  | MT  |
| Mexico                 | MX  |
| Moldova                | MD  |
| Mongolia               | MN  |
| Morocco                | MA  |
| Netherlands            | NL  |
| New Zealand            | NZ  |
| Nicaragua              | NI  |
| Nigeria                | NG  |
| Norway                 | NO  |
| Oman                   | OM  |
| Pakistan               | PK  |
| Panama                 | PA  |
| Paraguay               | PY  |
| Peru                   | PE  |
| Philippines            | PH  |
| Poland                 | PL  |
| Portugal               | PT  |
| Puerto Rico            | PR  |
| Qatar                  | QA  |
| Romania                | RO  |
| Russia                 | RU  |
| Saudi Arabia           | SA  |
| Serbia                 | RS  |
| Singapore              | SG  |
| Slovakia               | SK  |
| Slovenia               | SI  |
| South Africa           | ZA  |
| South Korea            | KR  |
| Spain                  | ES  |
| Sweden                 | SE  |
| Switzerland            | CH  |
| Taiwan                 | TW  |
| Tanzania               | TZ  |
| Thailand               | TH  |
| Tunisia                | TN  |
| Turkey                 | TR  |
| UAE                    | AE  |
| Ukraine                | UA  |
| United Kingdom         | GB  |
| United States          | US  |
| Uzbekistan             | UZ  |
| Venezuela              | VE  |
| Vietnam                | VN  |
| Washington D.C.        | Z6  |
| Winnipeg, MB           | D2  |




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
       IP Geolocation
      </span>
    </li>
  </ul>
</nav>