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

url: https://www.testmuai.com/support/docs/automated-screenshot-api-for-cross-browser-testing/
site_name: TestMu AI
slug: automated-screenshot-api-for-cross-browser-testing/
canonical: https://www.testmuai.com/support/docs/automated-screenshot-api-for-cross-browser-testing/
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/automated-screenshot-api-for-cross-browser-testing/"
    },
    "headline": "Automated Screenshot API For Cross Browser Testing",
    "description": "Automated Screenshot API will help you capture full-page screenshots of any URL by invoking an API call to TestMu AI cloud servers. You can ensure cross browser compatibility of your website stays in check by performing bulk screenshot testing on a regular basis.",
    "url": "https://www.testmuai.com/support/docs/automated-screenshot-api-for-cross-browser-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Other Docs",
    "keywords": [
      "automated screenshot api",
      "automated screenshot generation",
      "screenshot api"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "TestMu AI Authentication Credentials; For Linux/Mac:; For Windows:.",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Fetch All OS + Browser Combinations",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "https://api.lambdatest.com/screenshots/v1/os-browsers"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Client URL would be as followed",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "curl -X GET \"https://api.lambdatest.com/screenshots/v1/os-browsers\"\n-H \"accept: application/json\" -H \"Authorization: Basic 123456789abcdefghijklmno=\" "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Fetch All OS + Browser Combinations",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n  \"windows 10\": {\n    \"chrome\": [\n      \"74\",\n      \"73\"\n    ],\n    \"firefox\": [\n      \"66\",\n      \"65\"\n    ],\n    \"opera\": [\n      \"55\",\n      \"54\"\n    ]\n  },\n  \"macos mojave\": {\n    \"chrome\": [\n      \"74\",\n      \"73\"\n    ],\n    \"firefox\": [\n      \"66\",\n      \"65\"\n    ],\n    \"opera\": [\n      \"55\",\n      \"54\"\n    ]\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Fetch Every Screen Resolutions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "https://api.lambdatest.com/screenshots/v1/resolutions"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Client URL would be as followed",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "curl -X GET \"https://api.lambdatest.com/screenshots/v1/resolutions\"\n-H \"accept: application/json\" -H \"Authorization: Basic 123456789abcdefghijklmno=\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Fetch Every Screen Resolutions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n  \"mac_res\": [\n    \"1024x768\",\n    \"1280x1024\"\n  ],\n  \"win_res\": [\n    \"1024x768\",\n    \"1280x1024\"\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "You would get the below details",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "https://api.lambdatest.com/screenshots/v1/Test ID"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Client URL would be",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "curl -X GET \"https://api.lambdatest.com/screenshots/v1/TES11111111111111111111111111\"\n-H \"accept: application/json\" -H \"Authorization: Basic 123456789abcdefghijklmno=\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example Value",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "  {\n  \"test_id\": \"TES11111111111111111111111111\",\n  \"defer_time\": 5,\n  \"test_status\": \"completed\",\n  \"url\": \"https://www.testmuai.com\",\n  \"callback_url\": \"https://www.example.com\",\n  \"screenshots\": [\n    {\n      \"os\": \"windows 10\",\n      \"browser\": \"chrome\",\n      \"browser_version\": \"74\",\n      \"status\": \"completed\",\n      \"screenshot_url\": \"https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-74.0.png\",\n      \"thumbnail_url\": \"https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-74.0.png\",\n      \"activity_id\": \"ACT100968331562237283340194\",\n      \"resolution\": \"1024x768\"\n    }\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run A Screenshot Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "https://api.lambdatest.com/screenshots/v1"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Client URL would be as followed",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "curl -X POST \"https://api.lambdatest.com/screenshots/v1\" -H \"accept: application/json\" \n-H \"Authorization: Basic 123456789abcdefghijklmno=\" -H \"Content-Type: application/json\" -d \"\n{\\\"url\\\":\\\"https://www.testmuai.com\\\",\\\"defer_time\\\":5,\\\"email\\\":true,\\\"mac_res\\\":\\\"1024x768\\\",\n\\\"win_res\\\":\\\"1366X768\\\",\\\"configs\\\":{\\\"windows 10\\\":{\\\"chrome\\\":[\\\"74\\\"],\\\"firefox\\\":[\\\"66\\\"],\n\\\"opera\\\":[\\\"58\\\"],\\\"ie\\\":[\\\"11\\\"]},\\\"macos mojave\\\":{\\\"chrome\\\":[\\\"74\\\"]}}}\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example value",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n  \"url\": \"https://www.testmuai.com\",\n  \"defer_time\": 5,\n  \"email\": true,\n  \"mac_res\": \"1024x768\",\n  \"win_res\": \"1366X768\",\n  \"configs\": {\n    \"windows 10\": {\n      \"chrome\": [\n        \"74\"\n      ],\n      \"firefox\": [\n        \"66\"\n      ],\n      \"opera\": [\n        \"58\"\n      ],\n      \"ie\": [\n        \"11\"\n      ]\n    },\n    \"macos mojave\": {\n      \"chrome\": [\n        \"74\"\n      ]\n    }\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example Value",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n  \"url\": \"https://www.testmuai.com\",\n  \"defer_time\": 5,\n  \"email\": true,\n  \"tunnel\": true,\n  \"mac_res\": \"1024x768\",\n  \"win_res\": \"1366X768\",\n  \"configs\": {\n    \"windows 10\": {\n      \"chrome\": [\n        \"74\",\n        \"73\"\n      ]\n  }\n}\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Screenshot Test With Basic Authentication",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\"url\": \"https://www.basic-auth.com\",\n\"username\": \"username\",\n  \"password\": \"password\","
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n  \"url\": \"https://www.basic-auth.com\",\n  \"defer_time\": 5,\n  \"email\": true,\n  \"mac_res\": \"1024x768\",\n  \"win_res\": \"1366X768\",\n  \"username\": \"username\",\n  \"password\": \"password\",\n  \"configs\": {\n    \"windows 10\": {\n      \"chrome\": [\n        \"74\",\n        \"73\"\n      ]\n\n\n  }\n}\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Route Test Details To Your Colleagues Through A Callback URL",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\"callbackurl\": \"https://www.example.com\","
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example Value",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n  \"url\": \"https://www.testmuai.com\",\n  \"defer_time\": 5,\n  \"email\": true,\n  \"mac_res\": \"1024x768\",\n  \"win_res\": \"1366X768\",\n\"callbackurl\": \"https://www.example.com\",\n  \"configs\": {\n    \"windows 10\": {\n      \"chrome\": [\n        \"74\",\n        \"73\"\n      ]\n  }\n}\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Stop A Screenshot Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "https://api.lambdatest.com/screenshots/v1/stop/TES11111111111111111111"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Stop A Screenshot Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "Client URL: curl -X PUT \"https://api.lambdatest.com/screenshots/v1/stop/TES100962431563281759448763\"\n-H \"accept: application/json\" -H \"Authorization: Basic 123456789abcdefghijklmno=\""
      }
    ],
    "dateModified": "2026-08-12T15:40:32+05:30"
  }) }}
/>

# Automated Screenshot API For Cross Browser Testing
***
Automated Screenshot API will help you [capture full-page screenshots](https://www.testmuai.com/full-page-screen-capture/) of any URL by invoking an API call to <BrandName /> cloud servers. You can ensure cross browser compatibility of your website stays in check by performing bulk screenshot testing regularly. You can do that without logging into <BrandName />, by executing a JSON file in your preferred API development environment such as Postman.

This document will help you leverage <BrandName /> [Automated Screenshot](https://www.testmuai.com/automated-screenshot/). You would learn how to:

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
Ensure that you have your <BrandName /> authentication credentials, i.e., your <BrandName /> username, access key, and HubURL. You need to set them up as your environment variables. You can retrieve them from your [<BrandName /> automation dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com) by clicking on the key icon near the help button.

- For Linux/Mac:

$ export LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`

$ export LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`

- For Windows:

$ set LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`

$ set LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/api-doc/#screenshots">Open API Document For Automated Screenshot Testing</a>
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
  "url": "https://www.testmuai.com",
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
{\"url\":\"https://www.testmuai.com\",\"defer_time\":5,\"email\":true,\"mac_res\":\"1024x768\",
\"win_res\":\"1366X768\",\"configs\":{\"windows 10\":{\"chrome\":[\"74\"],\"firefox\":[\"66\"],
\"opera\":[\"58\"],\"ie\":[\"11\"]},\"macos mojave\":{\"chrome\":[\"74\"]}}}"
```
Example value:

```javascript
{
  "url": "https://www.testmuai.com",
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
  "url": "https://www.testmuai.com",
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
  "url": "https://www.testmuai.com",
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
