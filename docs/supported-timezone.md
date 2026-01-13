---
id: supported-timezone
title: Supported Timezones on TestMu AI
hide_title: true
sidebar_label: Supported Timezones
description: This document provides information about configuring timezone for tests on the TestMu AI platform and also provides list of supported timezones.
keywords:   
 - appium
 - appium languages
 - appium framework 
 - configuration
 - supported platforms
 - automation testing framework
 - test automation frameworks
 - app testing
 - timezone
url: https://www.testmu.ai/support/docs/supported-timezone
site_name: LambdaTest
slug: supported-timezone
canonical: https://www.testmu.ai/support/docs/supported-timezone/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
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
          "name": "Languages and Frameworks Supported on HyperExecute ",
          "item": `${BRAND_URL}/support/docs/supported-appium-versions/`
        }]
      })
    }}
></script>

# Setting up timezone 
<RealDeviceTag value="Real Device" /> 
<VirtualDeviceTag value="Virtual Device" />
In automated testing with Appium on <BrandName />, configuring the timezone accurately is crucial for precise testing scenarios. <BrandName /> provides support for various timezones, allowing users to customize their testing environments to meet specific requirements.

By default, the timezone for Appium testing on <BrandName /> is selected based on the device's default settings. However, users have the flexibility to explicitly specify the timezone using the **timezone** capability in their desired capabilities.

## Timezone Configuration
---
To specify the timezone for automated tests in Appium on <BrandName />, the **timezone** capability can be utilized. This ensures that tests are executed in the desired timezone, facilitating accurate validation of application behavior across different regions.

| Capability | Type | Description                                      |
|------------|-----------|--------------------------------------------------|
| **timezone**   | String    | Sets a specific timezone on the mobile device.  |            

Here's an example of how to set the timezone in your Appium test script:

**Java Example:** 
```java
// Java code example for configuring timezone in Appium tests on LambdaTest

DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("timezone", "Tonga");
capabilities.setCapability("platformName", "android");
// Add other capabilities as needed                       |
```


## Supported Timezones
----
Below is the list of supported **timezones** supported along with their corresponding cities and UTC times:
 
| Timezone    | City          | UTC Time |
|-------------|---------------|----------|
| Tonga       | Tonga         | UTC+13:00 |
| Auckland    | Auckland      | UTC+12:00 |
| Pohnpei     | Pohnpei       | UTC+11:00 |
| Melbourne   | Melbourne     | UTC+11:00 |
| Adelaide    | Adelaide      | UTC+10:30 |
| Tokyo       | Tokyo         | UTC+9:00  |
| Kuching     | Kuching       | UTC+8:00  |
| Pontianak   | Pontianak     | UTC+7:00  |
| Rangoon     | Rangoon       | UTC+6:30  |
| Dhaka       | Dhaka         | UTC+6:00  |
| Kathmandu   | Kathmandu     | UTC+5:45  |
| Colombo     | Colombo       | UTC+5:30  |
| Oral        | Oral          | UTC+5:00  |
| Kabul       | Kabul         | UTC+4:30  |
| Dubai       | Dubai         | UTC+4:00  |
| Moscow      | Moscow        | UTC+3:00  |
| Cairo       | Cairo         | UTC+2:00  |
| London      | London        | UTC+0:00  |
| UTC         | UTC           | UTC+0:00  |
| Cape Verde  | Cape Verde    | UTC-1:00  |
| Nuuk        | Nuuk          | UTC-3:00  |
| Buenos Aires| Buenos Aires  | UTC-3:00  |
| La Paz      | La Paz        | UTC-4:00  |
| Lima        | Lima          | UTC-5:00  |
| Tegucigalpa | Tegucigalpa  | UTC-6:00  |
| Los Angeles | Los Angeles   | UTC-8:00  |
| Pitcairn    | Pitcairn      | UTC-8:00  |
| Honolulu    | Honolulu      | UTC-10:00 |
| Niue        | Niue          | UTC-11:00 |
| Belgium     | Brussels      | UTC+1:00  |



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
       List of Supported Appium Versions
      </span>
    </li>
  </ul>
</nav>
