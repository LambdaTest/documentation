---
id: appium-ip-geolocation
title: IP Geolocation 
hide_title: true
sidebar_label: IP Geolocation 
description: This document provides information about configuring IP Geolocation for tests on the TestMu AI platform and also provides a list of supported geolocations on Real Devices.
keywords:
 - IP Geolocation
 - geolocation testing
 - testing tools
 - TestMu AI 
 - IP geolocation support

url: https://www.testmuai.com/support/docs/appium-ip-geolocation/
site_name: TestMu AI
slug: appium-ip-geolocation/
canonical: https://www.testmuai.com/support/docs/appium-ip-geolocation/
---


import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';

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
          "name": "IP Geolocation",
          "item": `${BRAND_URL}/support/docs/appium-ip-geolocation/`
        }]
      })
    }}
></script>

# IP Geolocation 
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

<BrandName />'s IP Geolocation feature empowers users to test their websites and mobile applications from various geographical locations worldwide. This feature enables users to simulate traffic originating from different countries and regions, allowing for comprehensive testing of platform functionalities across diverse global markets.

By the end of this document, you'll learn how to use this feature in both manual and automation tests. Additionally, this document will provide a list of all supported IP geolocations on <BrandName />.

## Support for Automation on Real Devices

To harness the **IP Geolocation** feature in your automated tests, employ the `geoLocation` capability along with a two-letter country code from the list of supported countries provided below. This capability enables you to modify the device's geolocation to the specified location. If this capability is not added, the device will automatically update its geolocation based on its physical location.

**Java Example:** 
```java
// Java code for configuring IP Geolcation in tests on <BrandName />
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("geoLocation", "FR");
// Add other capabilities as needed
```

## Supported IP Geolocations

Below is the list of supported countries along with their respective country codes:

| Name                              | Code     |
| --------------------------------- | -------- |
| Adelaide (Australia)              | AU/AL    |
| Albania                           | AL       |
| Alberta (Canada)                  | CA/AB    |
| Albuquerque, New Mexico (US)      | US/ABQ   |
| Argentina                         | AR       |
| Armenia                           | AM       |
| Ashburn, Virginia (US)            | US/AB    |
| Atlanta, Georgia (US)             | US/AT    |
| Australia                         | AU       |
| Austria                           | AT       |
| Azerbaijan                        | AZ       |
| Bahrain                           | BH       |
| Bangladesh                        | BD       |
| Belarus                           | BY       |
| Belgium                           | BE       |
| Berlin                            | V2       |
| Berkeley Springs, WV (US)         | US/BS    |
| Billings, Montana (US)           | US/BL    |
| Boca Raton, Florida (US)          | US/BR    |
| Bolivia (La Paz)                  | BO/LPZ   |
| Bosnia and Herzegovina            | BA       |
| Boston, Massachusetts (US)        | US/BO    |
| Brazil                            | BR       |
| British Colombia (Canada)         | CA/BC    |
| Brunswick, Maine (US)             | US/BWK   |
| Buffalo, New York (US)            | US/BU    |
| Bulgaria                          | BG       |
| Cambodia                          | KH       |
| Canada                            | CA       |
| Canberra (Australia)              | AU/CN    |
| Charlotte, NC (US)                | US/CH    |
| Cheyenne, Wyoming (US)           | US/CY    |
| Chile                             | CL       |
| China                             | CN       |
| Chicago, Illinois (US)            | US/CHI   |
| Colombia                          | CO       |
| Columbus, Ohio (US)               | US/CO    |
| Connecticut (US)                  | US/CN    |
| Costa Rica                        | CR       |
| Cromwell, Connecticut (US)        | US/CM    |
| Curacao                           | CW       |
| Cyprus                            | CY       |
| Czech Republic                    | CZ       |
| Dallas, Texas (US)                | US/DL    |
| Dallas-Ft. Worth, Texas (US)      | US/DFW   |
| Denmark                           | DK       |
| Denver, Colorado (US)             | Y6    |
| Des Moines, Iowa (US)             | US/DM    |
| Detroit, Michigan (US)            | US/DET   |
| Dominican Republic                | DO       |
| Ecuador                           | EC       |
| Egypt                             | EG       |
| El Salvador                       | SV       |
| Estonia                           | EE       |
| Finland                           | FI       |
| France                            | FR       |
| Georgia                           | GE       |
| Germany                           | DE       |
| Greece                            | GR       |
| Guatemala                         | GT       |
| Harrisburg, Pennsylvania (US)     | US/HB    |
| Hollywood, Florida (US)           | US/HW    |
| Honduras                          | HN       |
| Hong Kong                         | HK       |
| Honolulu, HI                      | U3       |
| Houston, Texas (US)               | US/HO    |
| Hungary                           | HU       |
| Iceland                           | IS       |
| India                             | IN       |
| Indonesia                         | ID       |
| Indianapolis, Indiana (US)        | US/IN    |
| Iowa (US)                          | US/IW   |
| Ireland                           | IE       |
| Isle of Man                       | IM       |
| Israel                            | IL       |
| Italy                             | IT       |
| Jamaica                           | JM       |
| Japan                             | JP       |
| Jersey City, New Jersey (US)      | US/JC    |
| Jordan                            | JO       |
| Kansas City, Missouri (US)        | US/KC    |
| Kazakhstan                        | KZ       |
| Kenya                             | KE       |
| Korea                             | KR       |
| Kuwait                            | KW       |
| Kyrgyzstan                        | KG       |
| La Paz (Bolivia)                  | BO/LPZ   |
| Las Vegas, Nevada (US)            | US/LV    |
| Latvia                            | LV       |
| Lebanon                           | LB       |
| Lincoln, Nebraska (US)            | US/LC    |
| Lithuania                         | LT       |
| London                            | W8       |
| Los Angeles, California (US)      | US/LA    |
| Luxembourg                        | LU       |
| Manhattan, New York (US)          | US/MHT   |
| Maryland (US)                     |  US/ML   |
| Malta                             | MT       |
| Melbourne (Australia)             | AU/ML    |
| Memphis, Tennessee (US)           | W4    |
| Mexico                            | MX       |
| Miami, Florida (US)               | US/MI    |
| Moldova                           | MD       |
| Mongolia                          | MN       |
| Montana (US)                      | US/MT   |
| Monticello, Illinois (US)         | US/MO    |
| Morocco                           | MA       |
| Nebraska (US)                     | US/NB    |
| New Hamisphere (US)               | US/NH   |
| New Jersey, New Jersey            | X4       |
| New Orleans, Louisiana (US)       | US/NO    |
| New York City, New York (US)      | US/NYC   |
| New York City, New York (US)      | Z0       |
| New Zealand                       | NZ       |
| Nicaragua                         | NI       |
| Nigeria                           | NG       |
| Norway                            | NO       |
| Oklahoma City, Oklahoma (US)      | US/OKC   |
| Oman                              | OM       |
| Ontario (Canada)                  | CA/ON    |
| Orlando, Florida (US)             | US/ORL   |
| Pakistan                          | PK       |
| Panama                            | PA       |
| Paraguay                          | PY       |
| Perth (Australia)                 | AU/PT    |
| Peru                              | PE       |
| Philippines                       | PH       |
| Phoenix, Arizona (US)             | US/PHX   |
| Pittsburgh, Pennsylvania (US)     | US/PIT   |
| Poland                            | PL       |
| Portugal                          | PT       |
| Puerto Rico                       | PR       |
| Qatar                             | QA       |
| Raleigh, North Carolina (US)      | US/RA    |
| Reston, Virginia (US)             | US/RT    |
| Richmond, Virginia (US)           | US/RM    |
| Romania                           | RO       |
| Russian Federation                | RU       |
| Sacramento, California (US)       | US/SAC   |
| Salem, New Hampshire (US)         | US/SLE   |
| Salem, NH                         | U5       |
| Salt Lake City, Utah (US)         | US/SLC   |
| San Diego, California (US)        | US/SD    |
| San Francisco, California (US)    | US/SF    |
| San Jose, California (US)         | US/SJ    |
| Santa Clara, California (US)      | US/SC    |
| Saudi Arabia                      | SA       |
| Serbia                            | RS       |
| Seattle, Washington (US)          | US/SEA   |
| Singapore                         | SG       |
| Sioux Falls, South Dakota (US)    | US/SFL   |
| Slovakia                          | SK       |
| Slovenia                          | SI       |
| South Africa                      | ZA       |
| South Bend, Indiana (US)          | US/SB    |
| Spain                             | ES       |
| Sterling, Virginia (US)           | US/ST    |
| St Louis, Missouri (US)           | US/STL   |
| Sweden                            | SE       |
| Switzerland                       | CH       |
| Sydney (Australia)                | AU/SY    |
| Taiwan                            | TW       |
| Tampa, Florida (US)               | US/TPA   |
| Tanzania                          | TZ       |
| Thailand                          | TH       |
| Tunisia                           | TN       |
| Turkey                            | TR       |
| Turkmenistan                      | TM       |
| Ukraine                           | UA       |
| United Arab Emirates              | AE       |
| United Kingdom                    | GB       |
| United States                     | US       |
| Uruguay                           | UY       |
| Uzbekistan                        | UZ       |
| Venezuela                         | VE       |
| Vietnam                           | VN       |
| Washington                         | Z6       |
| Washington (Herndon), Virginia    | US/WAV   |
| Wilmington, DE                    | U4       |
| Wilmington, Delaware (US)         | US/WILM  |




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
       IP Geolocation
      </span>
    </li>
  </ul>
</nav>
