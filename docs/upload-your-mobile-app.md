---
id: upload-your-mobile-app
title: How To Upload Your Mobile Apps 
hide_title: true
sidebar_label: Uploading Your App
description: Quick guide on how to upload Apps for Mobile Automation testing.
keywords:
- how to upload apps for automation
- appium automation for mobile apps
- mobile app automation testing using appium
url: https://www.lambdatest.com/support/docs/upload-your-mobile-app/
site_name: LambdaTest
slug: upload-your-mobile-app
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
          "name": "LambdaTest Core Concepts",
          "item": "https://www.lambdatest.com/support/docs/upload-your-mobile-app/"
        }]
      })
    }}
></script>

# Uploading Your Mobile App
***

To perform mobile app automation using Appium, you will need to upload your app to our cloud servers. Using the REST API, you can upload an Android app (.apk or.aab file) and an iOS app (.ipa file) from your local file system or public cloud URL on LambdaTest servers.

There are two methods for uploading your mobile apps on LambdaTest servers:

1. Upload apps from local file system

2. Upload apps using public cloud URL

## Uploading App From Local File System
***

You can use the local file system to upload an app. If you don't already have an app, the LambdaTest sample app will help you easily get started with mobile app automation testing.

To upload Android or iOS apps on LambdaTest cloud, you have to use the REST API. Below is the cURL command to upload the app.

```js
curl -u "LT_USERNAME:LT_ACCESS_KEY" 
-X POST "https://manual-api.lambdatest.com/app/upload/realDevice"
-F "appFile=@"D:\WikipediaSample.apk""
```

Once the app is uploaded, you would get a response command for the above cURL request. Depending on the size of the application, the uploading process will take few seconds to a couple of minutes.

```python
"app":"lt://APP10051525539885437397"
```
The app URL (`"app":"lt://APP10051525539885437397"`) received in the response of the cURL command will be used in your Appium automation scripts to set the desired app capability.


To run the appium app test, you need to make some tweaks in the desired capability of the below Python test script. Use the response cURL command value (`"lt://APP10051525539885437397"`) to configure the ‘app’ capability. 

## Uploading App Using Public Cloud URL
***

You can use the public cloud link to upload a mobile app. If you don't already have an app, the LambdaTest sample app will help you easily get started with app automation testing.

To upload Android or iOS apps through public cloud URL on LambdaTest cloud, you have to use the REST API. Below is the cURL command to upload the app.

```js
curl --location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \
--header 'Authorization: Basic c2Frc2hhbWFnYXJ3YWw6Qk9iSFEyZFowc25rR1NJQ0ZsSXZjVUpLbXlrT2ZtcVU4Q01qSEhxbDREM2FMTWZGa08=' \
--header 'Content-Type: application/json' \
--data-raw '{
    "url":"https://falcon-2.0.s3.amazonaws.com/sample-apps/emulator/sample.apk",
    "name":"sample.apk"
}'
```

Once the app is uploaded, you would get a response command for the above cURL request. Depending on the size of the application, the uploading process will take few seconds to a couple of minutes.

```python
"app":"lt://APP10051525539885437397"
```
The app URL (`"app":"lt://APP10051525539885437397"`) received in the response of the cURL command will be used in your Appium automation scripts to set the desired app capability.

To run the appium app test, you need to make some tweaks in the desired capability of the below Python test script. Use the response cURL command value (`"lt://APP10051525539885437397"`) to configure the ‘app’ capability. 

>That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@lambdatest.com.

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
      Upload Mobile App
      </span>
    </li>
  </ul>
</nav>