---
id: automated-ss-api
title: Automated Screenshot API For Cross Browser Testing
hide_title: true
sidebar_label: Automated Screenshot API
description: Automated Screenshot API will help you capture full-page screenshots of any URL by invoking an API call to TestMu AI cloud servers. You can ensure cross browser compatibility of your website stays in check by performing bulk screenshot testing on a regular basis.
keywords:
  - automated screenshot api
  - automated screenshot generation
  - screenshot api
  - automated screenshot generation
  - screenshot api
  - automated screenshots
  - screenshot testing
  - bulk screenshot testing

url: https://www.testmu.ai/support/docs/automated-screenshot-api-for-cross-browser-testing
site_name: LambdaTest
slug: automated-screenshot-api-for-cross-browser-testing
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
          "name": "Automated Screenshot API For Cross Browser Testing",
          "item": `${BRAND_URL}/support/docs/automated-screenshot-api-for-cross-browser-testing/`
        }]
      })
    }}
></script>

# Automated Screenshot API For Cross Browser Testing
***
Automated Screenshot API will help you [capture full-page screenshots](https://www.lambdatest.com/full-page-screen-capture) of any URL by invoking an API call to <BrandName /> cloud servers. You can ensure cross browser compatibility of your website stays in check by performing bulk screenshot testing regularly. You can do that without logging into <BrandName />, by executing a JSON file in your preferred API development environment such as Postman.

This document will help you leverage <BrandName /> [Automated Screenshot](https://www.lambdatest.com/automated-screenshot). You would learn how to:

* Fetch all OS + Browser combinations.
* Fetch all Screen Resolutions.
* Fetch Screenshots of an already performed test session.
* Start a Screenshot Test Session
  1. Test your locally hosted web pages.
  2. Test web pages with basic authentication.
  3. Test web pages with a Callback URL.
- Stop a Screenshot test.

## Prerequisites
***

- **<BrandName /> Authentication Credentials**
Ensure that you have your <BrandName /> authentication credentials, i.e., your <BrandName /> username, access key, and HubURL. You need to set them up as your environment variables. You can retrieve them from your [<BrandName /> automation dashboard](https://automation.lambdatest.com) by clicking on the key icon near the help button.

- For Linux/Mac:

$ export LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`

$ export LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`

- For Windows:

$ set LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`

$ set LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/support/docs/api-doc/#screenshots">Open API Document For Automated Screenshot Testing</a>
</div>


## Fetch All OS + Browser Combinations
***

The below **GET** request will help you extract a list of all the combinations for (OS + Browser) offered by <BrandName />. You can download these combinations as a JSON file.

**Requested URL:**

```javascript
https://api.lambdatest.com/screenshots/v1/os-browsers
```

Client URL would be as followed:

```javascript
curl -X GET "https://api.lambdatest.com/screenshots/v1/os-browsers"
-H "accept: application/json" -H "Authorization: Basic 123456789abcdefghijklmno=" 
```

As you execute, you will find the Server response presented below.

```javascript
{
  "windows 10": {
    "chrome": [
      "74",
      "73"
    ],
    "firefox": [
      "66",
      "65"
    ],
    "opera": [
      "55",
      "54"
    ]
  },
  "macos mojave": {
    "chrome": [
      "74",
      "73"
    ],
    "firefox": [
      "66",
      "65"
    ],
    "opera": [
      "55",
      "54"
    ]
  }
}
```

## Fetch Every Screen Resolutions
***
To get a list of all the available **screen  resolutions** provided by <BrandName /> for you to perform cross browser testing, you would need to execute the below **GET** request. The GET request will help you extract the respective response from our cloud servers in a JSON format.

**Requested URL:**

```javascript
https://api.lambdatest.com/screenshots/v1/resolutions
```
Client URL would be as followed:

```javascript
curl -X GET "https://api.lambdatest.com/screenshots/v1/resolutions"
-H "accept: application/json" -H "Authorization: Basic 123456789abcdefghijklmno="
```
As you execute, you will find the Server response presented below.

```javascript
{
  "mac_res": [
    "1024x768",
    "1280x1024"
  ],
  "win_res": [
    "1024x768",
    "1280x1024"
  ]
}
```
## Fetch Details Of An Executed Test Session
***

In case you wish to fetch all the details from an already executed screenshot test session. These details will help you analyze the results of your [screenshot test session](/support/docs/automated-screenshot-testing/) at <BrandName />. You would get the below details:

* **Test Details**:
  * Test ID
  * Test status
  * Defer time
  * Tested URL
  * Callback URL(if any)
* **Screenshot Details**:
  * Operating System
  * Browser
  * Browser Version
  * Status
  * Screenshot URL
  * Thumbnail URL
  * Activity ID
  * Resolution

**Requested URL:**

```javascript
https://api.lambdatest.com/screenshots/v1/Test ID
```

> **Note:** Test ID is a mandatory field for making use of this GET request. This would fetch details in JSON format for all bulk screenshots captured in a test session specified by you.

Client URL would be:

```javascript
curl -X GET "https://api.lambdatest.com/screenshots/v1/TES11111111111111111111111111"
-H "accept: application/json" -H "Authorization: Basic 123456789abcdefghijklmno="
```

Example Value:

```javascript
  {
  "test_id": "TES11111111111111111111111111",
  "defer_time": 5,
  "test_status": "completed",
  "url": "https://www.lambdatest.com",
  "callback_url": "https://www.example.com",
  "screenshots": [
    {
      "os": "windows 10",
      "browser": "chrome",
      "browser_version": "74",
      "status": "completed",
      "screenshot_url": "https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-74.0.png",
      "thumbnail_url": "https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-74.0.png",
      "activity_id": "ACT100968331562237283340194",
      "resolution": "1024x768"
    }
  ]
}
```

## Run A Screenshot Test
***

To start a screenshot test using the API, you would need to trigger the below **POST** request.

```javascript
https://api.lambdatest.com/screenshots/v1
```

Client URL would be as followed:

```javascript
curl -X POST "https://api.lambdatest.com/screenshots/v1" -H "accept: application/json" 
-H "Authorization: Basic 123456789abcdefghijklmno=" -H "Content-Type: application/json" -d "
{\"url\":\"https://www.lambdatest.com\",\"defer_time\":5,\"email\":true,\"mac_res\":\"1024x768\",
\"win_res\":\"1366X768\",\"configs\":{\"windows 10\":{\"chrome\":[\"74\"],\"firefox\":[\"66\"],
\"opera\":[\"58\"],\"ie\":[\"11\"]},\"macos mojave\":{\"chrome\":[\"74\"]}}}"
```
Example value:

```javascript
{
  "url": "https://www.lambdatest.com",
  "defer_time": 5,
  "email": true,
  "mac_res": "1024x768",
  "win_res": "1366X768",
  "configs": {
    "windows 10": {
      "chrome": [
        "74"
      ],
      "firefox": [
        "66"
      ],
      "opera": [
        "58"
      ],
      "ie": [
        "11"
      ]
    },
    "macos mojave": {
      "chrome": [
        "74"
      ]
    }
  }
}
```

### Screenshot Testing For Locally Hosted Web Applications
***
To perform a screenshot test on your locally hosted web applications, you would need to declare the below parameter in your request before specifying the configurations:

`"tunnel": true`

Example Value:

```javascript
{
  "url": "https://www.lambdatest.com",
  "defer_time": 5,
  "email": true,
  "tunnel": true,
  "mac_res": "1024x768",
  "win_res": "1366X768",
  "configs": {
    "windows 10": {
      "chrome": [
        "74",
        "73"
      ]
  }
}
}
```
### Screenshot Test With Basic Authentication
***
Similarly, to perform a screenshot test on a web application with basic authentication, you would need to declare the below parameter in your request before specifying the configurations.

```javascript
"url": "https://www.basic-auth.com",
"username": "username",
  "password": "password",
```

Example:

```javascript
{
  "url": "https://www.basic-auth.com",
  "defer_time": 5,
  "email": true,
  "mac_res": "1024x768",
  "win_res": "1366X768",
  "username": "username",
  "password": "password",
  "configs": {
    "windows 10": {
      "chrome": [
        "74",
        "73"
      ]


  }
}
}
```

### Route Test Details To Your Colleagues Through A Callback URL
***
By specifying a Callback URL, you can route your test details to a specific IP or a specific URL. This would help you to share your test results with your colleagues or to keep them on a specific URL, so you could come back and assess these results when you have time. To invoke a Callback URL, you would need to declare the below parameter in your request before specifying the configurations.

```javascript
"callbackurl": "https://www.example.com",
```

Example Value:

```javascript
{
  "url": "https://www.lambdatest.com",
  "defer_time": 5,
  "email": true,
  "mac_res": "1024x768",
  "win_res": "1366X768",
"callbackurl": "https://www.example.com",
  "configs": {
    "windows 10": {
      "chrome": [
        "74",
        "73"
      ]
  }
}
}
```
## Stop A Screenshot Test
***
In case you wish to stop a screenshot test, you can do so with the help of a PUT request. Test ID is again mandatory over here as you need to convey which particular screenshot test you would want to be aborted.

**Requested URL:**

```javascript
https://api.lambdatest.com/screenshots/v1/stop/TES11111111111111111111
```

```javascript
Client URL: curl -X PUT "https://api.lambdatest.com/screenshots/v1/stop/TES100962431563281759448763"
-H "accept: application/json" -H "Authorization: Basic 123456789abcdefghijklmno="
```

> **Note:** This will terminate only a running test session. Providing a TestID of an already completed test session will provide you with a 404 error as the server response.

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
       Automated Screenshot API For Cross Browser Testing
      </span>
    </li>
  </ul>
</nav>
