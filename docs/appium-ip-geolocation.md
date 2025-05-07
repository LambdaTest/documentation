---
id: appium-ip-geolocation
title: IP Geolocation 
hide_title: true
sidebar_label: Supported-IP-Geolocation 
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

| Name                              | Code     |
| --------------------------------- | -------- |
| Andorra                           | AD       |
| United Arab Emirates              | AE       |
| Albania                           | AL       |
| Armenia                           | AM       |
| Argentina                         | AR       |
| Austria                           | AT       |
| Australia                         | AU       |
| Adelaide (Australia)              | AU/AL    |
| Brisbane (Australia)              | AU/BS    |
| Canberra (Australia)              | AU/CN    |
| Melbourne (Australia)             | AU/ML    |
| Perth (Australia)                 | AU/PT    |
| Sydney (Australia)                | AU/SY    |
| Azerbaijan                        | AZ       |
| Bosnia and Herzegovina            | BA       |
| Bangladesh                        | BD       |
| Belgium                           | BE       |
| Bulgaria                          | BG       |
| Bahrain                           | BH       |
| La Paz (Bolivia)                  | BO/LPZ   |
| Brazil                            | BR       |
| Belarus                           | BY       |
| Canada                            | CA       |
| Alberta (Canada)                  | CA/AB    |
| British Colombia (Canada)         | CA/BC    |
| Ontario (Canada)                  | CA/ON    |
| Switzerland                       | CH       |
| Chile                             | CL       |
| China                             | CN       |
| Colombia                          | CO       |
| Costa Rica                        | CR       |
| Curacao                           | CW       |
| Cyprus                            | CY       |
| Czech Republic                    | CZ       |
| Germany                           | DE       |
| Denmark                           | DK       |
| Dominican Republic                | DO       |
| Ecuador                           | EC       |
| Estonia                           | EE       |
| Egypt                             | EG       |
| Spain                             | ES       |
| Finland                           | FI       |
| France                            | FR       |
| United Kingdom                    | GB       |
| Georgia                           | GE       |
| Greece                            | GR       |
| Guatemala                         | GT       |
| Hong Kong                         | HK       |
| Honduras                          | HN       |
| Croatia                           | HR       |
| Hungary                           | HU       |
| Indonesia                         | ID       |
| Ireland                           | IE       |
| Israel                            | IL       |
| Isle of Man                       | IM       |
| India                             | IN       |
| Iceland                           | IS       |
| Italy                             | IT       |
| Jamaica                           | JM       |
| Jordan                            | JO       |
| Japan                             | JP       |
| Kenya                             | KE       |
| Kyrgyzstan                        | KG       |
| Cambodia                          | KH       |
| Korea                             | KR       |
| Kuwait                            | KW       |
| Kazakhstan                        | KZ       |
| Lebanon                           | LB       |
| Lithuania                         | LT       |
| Luxembourg                        | LU       |
| Latvia                            | LV       |
| Morocco                           | MA       |
| Moldova                           | MD       |
| Mongolia                          | MN       |
| Malta                             | MT       |
| Mexico                            | MX       |
| Malaysia                          | MY       |
| Nigeria                           | NG       |
| Nicaragua                         | NI       |
| Netherlands                       | NL       |
| Norway                            | NO       |
| New Zealand                       | NZ       |
| Oman                              | OM       |
| Panama                            | PA       |
| Peru                              | PE       |
| Philippines                       | PH       |
| Pakistan                          | PK       |
| Poland                            | PL       |
| Puerto Rico                       | PR       |
| Portugal                          | PT       |
| Paraguay                          | PY       |
| Qatar                             | QA       |
| Romania                           | RO       |
| Serbia                            | RS       |
| Russian Federation                | RU       |
| Saudi Arabia                      | SA       |
| Sweden                            | SE       |
| Singapore                         | SG       |
| Slovenia                          | SI       |
| Slovakia                          | SK       |
| El Salvador                       | SV       |
| Thailand                          | TH       |
| Turkmenistan                      | TM       |
| Tunisia                           | TN       |
| Turkey                            | TR       |
| Taiwan                            | TW       |
| Tanzania                          | TZ       |
| Honolulu, HI                      | U3       |
| Wilmington, DE                    | U4       |
| Salem, NH                         | U5       |
| Ukraine                           | UA       |
| United States                     | US       |
| Ashburn, Virginia (US)            | US/AB    |
| Albuquerque, New Mexico (US)      | US/ABQ   |
| Atlanta, Georgia (US)             | US/AT    |
| Austin, Texas (US)                | US/AU    |
| Bluffton, South Carolina (US)     | US/BF    |
| Billings, Montana (US)            | US/BL    |
| Baltimore, Maryland (US)          | US/BM    |
| Boston, Massachusetts (US)        | US/BO    |
| Boca Raton, Florida (US)          | US/BR    |
| Berkeley Springs, WV (US)         | US/BS    |
| Buffalo, New York (US)            | US/BU    |
| Brunswick, Maine (US)             | US/BWK   |
| Charlotte, NC (US)                | US/CH    |
| Chicago, Illinois (US)            | US/CHI   |
| Cromwell, Connecticut (US)        | US/CM    |
| Columbus, Ohio (US)               | US/CO    |
| Cheyenne, Wyoming (US)            | US/CY    |
| Detroit, Michigan (US)            | US/DET   |
| Dallas-Ft. Worth, Texas (US)      | US/DFW   |
| Dallas, Texas (US)                | US/DL    |
| Des Moines, Iowa (US)             | US/DM    |
| Harrisburg, Pennsylvania (US)     | US/HB    |
| Houston, Texas (US)               | US/HO    |
| Hollywood, Florida (US)           | US/HW    |
| Indianapolis, Indiana (US)        | US/IN    |
| Jackson, Mississippi (US)         | US/JAC   |
| Jersey City, New Jersey (US)      | US/JC    |
| Kansas City, Missouri (US)        | US/KC    |
| Los Angeles, California (US)      | US/LA    |
| Lincoln, Nebraska (US)            | US/LC    |
| Las Vegas, Nevada (US)            | US/LV    |
| Manhattan, New York (US)          | US/MHT   |
| Miami, Florida (US)               | US/MI    |
| Minneapolis, Minnesota (US)       | US/MIN   |
| Monticello, Illinois (US)         | US/MO    |
| Milwaukee, Wisconsin (US)         | US/MW    |
| New Orleans, Louisiana (US)       | US/NO    |
| New York City, New York (US)      | US/NYC   |
| Ogden, Utah (US)                  | US/OD    |
| Oklahoma City, Oklahoma (US)      | US/OKC   |
| Orlando, Florida (US)             | US/ORL   |
| Philadelphia, Pennsylvania (US)   | US/PHI   |
| Phoenix, Arizona (US)             | US/PHX   |
| Pittsburgh, Pennsylvania (US)     | US/PIT   |
| Portland, Oregon (US)             | US/POR   |
| Raleigh, North Carolina (US)      | US/RA    |
| Richmond, Virginia (US)           | US/RM    |
| Reston, Virginia (US)             | US/RT    |
| Sacramento, California (US)       | US/SAC   |
| South Bend, Indiana (US)          | US/SB    |
| Santa Clara, California (US)      | US/SC    |
| San Diego, California (US)        | US/SD    |
| Seattle, Washington (US)          | US/SEA   |
| San Francisco, California (US)    | US/SF    |
| Sioux Falls, South Dakota (US)    | US/SFL   |
| San Jose, California (US)         | US/SJ    |
| Salt Lake City, Utah (US)         | US/SLC   |
| Salem, New Hampshire (US)         | US/SLE   |
| Sterling, Virginia (US)           | US/ST    |
| St Louis, Missouri (US)           | US/STL   |
| Tampa, Florida (US)               | US/TPA   |
| Memphis, Tennessee (US)           | US/W4    |
| Washington (Herndon), Virginia    | US/WAV   |
| Wilmington, Delaware (US)         | US/WILM  |
| Denver, Colorado (US)             | US/Y6    |
| Uruguay                           | UY       |
| Uzbekistan                        | UZ       |
| Berlin                            | V2       |
| Venezuela                         | VE       |
| Vietnam                           | VN       |
| London                            | W8       |
| New Jersey, New Jersey            | X4       |
| New York City, New York (US)      | Z0       |
| Washington                        | Z6       |
| South Africa                      | ZA       |




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