---
id: supported-locales-xcui
title: Supported Locales And Languages - XCUI
hide_title: false
sidebar_label: Supported Locales And Languages
description: Checkout the list of all supported locales
keywords:
  - Supported locales
  - Locales
  - Appium supported locales
url: https://www.testmu.ai/support/docs/supported-locales-xcui/
site_name: LambdaTest
slug: supported-locales-xcui
canonical: https://www.testmu.ai/support/docs/supported-locales-xcui/
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
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "List of Supported Locales",
          "item": `${BRAND_URL}/support/docs/supported-locales-xcui/`
        }]
      })
    }}
></script>
Use the given below list of supported locale and language codes for app testing.

##  iOS Locales and Language Codes

To test localised strings in your iOS app, configure Appium's language capability with language code. 
:::info
Language to be passed in the capability - language:'fr' where fr is language code for french
:::

### iOS Language and Language Codes

| Language               | Language Code  |              
| -----------------------| ---------------------------| 
| Chinese                | zh                         |
| Czech                  | cs                         |
| Dutch                  | nl                         |
| English                | en                         |
| Finnish                | fi                         |
| French                 | fr                         |
| German                 | de                         |
| Greek                  | el                         |
| Hebrew                 | he                         |
| Hindi                  | hi                         |
| Hungarian              | hu                         |
| Indonesian             | id                         |
| Italian                | it                         |
| Japanese               | ja                         |
| Korean                 | ko                         |
| Malay                  | ms                         |
| Norwegian (Bokmal)     | nb                         |
| Polish                 | pl                         |
| Portuguese (Brazil)    | pt                         |
| Romanian               | ro                         |
| Russian                | ru                         |
| Slovak                 | sk                         |
| Spanish                | es                         |
| Swedish                | sv                         |
| Tagalog                | tl                         |
| Thai                   | th                         |
| Turkish                | tr                         |
| Ukrainian              | uk                         |
| Vietnamese             | vi                         |

Set Appium's locale capability with an appropriate country code to display or format data such as dates, times, decimal separators, and calendars in accordance with the specified country's regional conventions.

:::info
Locale to be passed in the capability - locale: 'fr_FR' where fr is language code for french and FR is the locale code for France
:::

### iOS Locale and Locale Codes

| Locale                 | Locale Code                |
| -----------------------| ---------------------------|
| Australia              | en_AU                      |
| Belgium                | nl_BE                      |
| Belgium                | fr_BE                      |
| Brunei Darussalam      | ms_BN                      |
| Canada                 | en_CA                      |
| Canada                 | fr_CA                      |
| Czech Republic         | cs_CZ                      |
| Finland                | fi_FI                      |
| Germany                | de_DE                      |
| Greece                 | el_GR                      |
| Hungary                | hu_HU                      |
| India                  | hi_IN                      |
| Indonesia              | id_ID                      |
| Israel                 | he_IL                      |
| Italy                  | it_IT                      |
| Japan                  | ja_JP                      |
| Malaysia               | ms_MY                      |
| Netherlands            | nl_NL                      |
| New Zealand            | en_NZ                      |
| Norway                 | nb_NO                      |
| Philippines            | tl_PH                      |
| Poland                 | pl_PL                      |
| PRC                    | zh_CN                      |
| Romania                | ro_RO                      |
| Russia                 | ru_RU                      |
| Singapore              | en_SG                      |
| Slovakia               | sk_SK                      |
| Korea                  | ko_KR                      |
| Sweden                 | sv_SE                      |
| Taiwan                 | zh_TW                      |
| Thailand               | th_TH                      |
| Turkey                 | tr_TR                      |
| UK                     | en_GB                      |
| Ukraine                | uk_UA                      |
| US                     | es_US                      |
| USA                    | en_US                      |
| Vietnam                | vi_VN                      |
| Brazil                 | pt-BR                      |
| China (Simplified)     | zh-Hans                    |
| China (Traditional)    | zh-Hant                    |
| Hong Kong              | zh-HK                      |
| India                  | en-IN                      |
| Ireland                | en-IE                      |
| Latin America          | es-419                     |
| Mexico                 | es-MX                      |
| South Africa           | en-ZA                      |


## How to Setup Locale and Language

You can also configure both locale and language during XCUI test execution for a seamless user experience in diverse linguistic and regional contexts of your app.

### Language

To test a localized version of your app on <BrandName />, use the `language` parameter in the XCUI test execution API request. This allows you to change the language of the application under test.

| Parameter | Description                            | Values     |
|-----------|----------------------------------------|------------|
| language  | Set the language of the app under test | Example: ‘hi’ |

### Locale

To test a localized version of your app on <BrandName />, use the `locale` parameter in the XCUI test execution API request. This allows you to set the locale for the application under test.

| Parameter | Description                       | Values     |
|-----------|-----------------------------------|------------|
| locale    | Set locale for the app under test | Example: IN (Country name abbreviation) |

**For Example:** 

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "lt://APP_ID",
    "testSuite": "lt://TestSuite_ID",
    "device" :  ["iPhone 11-14"],
    "video" : true,
    "queueTimeout": 10800,
    "idleTimeout": 150,
    "devicelog": true,
    "network": false,
    "build" : "Proverbial-XCUITest",
    "language": "fr",
    "locale": "CA"
}'
```

:::note
- When setting language or locale parameters, make sure your tests use the `ProcessInfo` object to pass these arguments correctly. This ensures the app launches with the specified language and locale settings.
 ```swift
    let app = XCUIApplication()
    app.launchArguments += ProcessInfo().arguments
    app.launch() 
```
-	The language and locale settings are applied at the app level.
-	To ensure your application under test displays the correct localized strings, dates, times, and calendar formats, include both language and locale in your desired capabilities.
- For XCUI sharding tests, you have to mention this in the  `.yaml` file.
:::