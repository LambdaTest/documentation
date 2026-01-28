---
id: supported-locales-espresso
title: Supported Locales And Languages - Espresso
hide_title: false
sidebar_label: Supported Locales And Languages
description: Checkout the list of all supported locales for espresso.
keywords:
  - Supported locales
  - Locales
  - Appium supported locales
  
url: https://www.testmuai.com/support/docs/supported-locales-espresso/
site_name: LambdaTest
slug: supported-locales-espresso/
canonical: https://www.testmuai.com/support/docs/supported-locales-espresso/
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
          "item": `${BRAND_URL}/support/docs/supported-locales-espresso/`
        }]
      })
    }}
></script>

Use the given below list of supported locale and language codes for app testing.

## Android Locales and Language Codes

To test localised strings in your android app, configure Appium's language capability with language code. 
:::info
Language to be passed in the capability - language:'fr' where fr is language code for french
:::

### Android Language and Language Codes

| Language               | Language Code              |              
| -----------------------| ---------------------------|                
| Arabic                 |  ar                        |
| Bulgarian              |  bg                        |
| Catalan                |  ca                        |
| Chinese                |  zh                        |
| Croatian               |  hr                        |
| Czech                  |  cs                        |
| Danish                 |  da                        |
| Dutch                  |  nl                        |
| English                |  en                        |
| Finnish                |  fi                        |
| French                 |  fr                        |
| German                 |  de                        |
| Greek                  |  el                        |
| Hebrew                 |  he                        |
| Hindi                  |  hi                        |
| Hungarian              |  hu                        |
| Indonesian             |  id                        |
| Italian                |  it                        |
| Japanese               |  ja                        |
| Korean                 |  ko                        |
| Latvian                |  lv                        |
| Lithuanian             |  lt                        |
| Norwegian-Bokmol       |  nb                        |
| Polish                 |  pl                        |
| Portuguese             |  pt                        |
| Romanian               |  ro                        |
| Russian                |  ru                        |
| Serbian                |  sr                        |
| Slovak                 |  sk                        |
| Slovenian              |  sl                        |
| Spanish                |  es                        |
| Swedish                |  sv                        |
| Tagalog                |  tl                        |
| Thai                   |  th                        |
| Turkish                |  tr                        |
| Ukrainian              |  uk                        |
| Vietnamese             |  vi                        |

### Android Locale and Locale Codes

Set Appium's locale capability with an appropriate country code to display or format data such as dates, times, decimal separators, and calendars in accordance with the specified country's regional conventions.

:::info
Locale to be passed in the capability - locale:'FR' where FR is the locale code for France
:::

| Locale                 | Locale Code                |
| -----------------------| ---------------------------|
| Australia              |  AU                        | 
| Austria                |  AT                        | 
| Belgium                |  BE                        | 
| Brazil                 |  BR                        | 
| Britain                |  GB                        | 
| Bulgaria               |  BG                        | 
| Canada                 |  CA                        | 
| Croatia                |  HR                        | 
| Czech Republic         |  CZ                        | 
| Denmark                |  DK                        | 
| Egypt                  |  EG                        | 
| Finland                |  FI                        | 
| France                 |  FR                        | 
| Germany                |  DE                        | 
| Greece                 |  GR                        | 
| Hong-Kong              |  HK                        | 
| Hungary                |  HU                        | 
| India                  |  IN                        | 
| Indonesia              |  ID                        | 
| Ireland                |  IE                        | 
| Israel                 |  IL                        | 
| Italy                  |  IT                        | 
| Japan                  |  JP                        | 
| Korea                  |  KR                        | 
| Latvia                 |  LV                        | 
| Liechtenstein          |  LI                        | 
| Lithuania              |  LT                        | 
| Mexico                 |  ES                        | 
| Netherlands            |  NL                        | 
| New Zealand            |  NZ                        | 
| Norway                 |  NO                        | 
| Philippines            |  PH                        | 
| Poland                 |  PL                        | 
| Portugal               |  PT                        | 
| PRC                    |  CN                        | 
| Romania                |  RO                        | 
| Russia                 |  RU                        | 
| Serbia                 |  RS                        | 
| Singapore              |  SG                        | 
| Slovakia               |  SK                        | 
| Slovenia               |  SI                        | 
| Spain                  |  ES                        | 
| Sweden                 |  SE                        | 
| Switzerland            |  CH                        | 
| Taiwan                 |  TW                        | 
| Thailand               |  TH                        | 
| Turkey                 |  TR                        | 
| Ukraine                |  UA                        | 
| US                     |  US                        | 
| USA                    |  US                        | 
| Vietnam                |  VN                        | 
| Zimbabwe               |  ZA                        | 


## How to Setup Locale and Language

You can also configure both locale and language during Espresso test execution for a seamless user experience in diverse linguistic and regional contexts of your app.

### Language

To test a localized version of your app on <BrandName />, use the `language` parameter in the Espresso test execution API request. This allows you to change the language of the application under test.

| Parameter | Description                            | Values     |
|-----------|----------------------------------------|------------|
| language  | Set the language of the app under test | Example: ‘hi’ |

### Locale

To test a localized version of your app on <BrandName />, use the `locale` parameter in the Espresso test execution API request. This allows you to set the locale for the application under test.

| Parameter | Description                       | Values     |
|-----------|-----------------------------------|------------|
| locale    | Set locale for the app under test | Example: IN (Country name abbreviation) |

**For Example:** 

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/espresso/v1/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "app_id",
    "testSuite": "testsuite_id",
    "device" :  ["Galaxy S20-10"],
    "queueTimeout": 360,
    "IdleTimeout": 150,
    "deviceLog": true,
    "build" : "Proverbial-Espresso",
    "language": "fr",
    "locale": "CA"
}'
```

:::note
- Ensure that both the **language** and **locale** parameters are passed simultaneously in the API request.
- App should support the language and locale mentioned in the API request to work.
- For espresso sharding tests, you have to mention this in the `.yaml` file.
:::