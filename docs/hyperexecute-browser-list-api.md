---
id: hyperexecute-browser-list-api
title: How to List Supported Browser in HyperExecute via API
hide_title: true
sidebar_label: How to List Supported Browser in HyperExecute via API
description: Find out how to list the browser used in hyperexecute using the BrowserList API
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - How to List Supported Browser in HyperExecute via API
url: https://www.testmu.ai/support/docs/hyperexecute-browser-list-api/
site_name: LambdaTest
slug: hyperexecute-browser-list-api
canonical: https://www.testmu.ai/support/docs/hyperexecute-browser-list-api/
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
          "name": "Integrations",
          "item": `${BRAND_URL}/support/docs/hyperexecute-browser-list-api/`
        }]
      })
    }}
></script>

# How to GET Supported Browsers in HyperExecute via API

The Browser List API is a service provided by HyperExecute. It allows users to programmatically retrieve a list of all supported browsers and their versions on the HyperExecute platform. This information can be useful for compatibility checks and ensuring your web applications work across various browsers.

It will provide you the details like:
  - **platform name** 
  - **browsers name** and **versions**
  - **resolutions**

<!-- 
:::info 

- **Endpoint :** https://api.hyperexecute.cloud/v2.0/browsers

- **Request Type :** GET 

- **Authorization :** Basic
::: -->

## API Endpoint and Authorization

The Endpoint for the Browser List API is:

```bash
https://api.hyperexecute.cloud/v2.0/browsers
```

<!-- ## Authentication
To use the Browser List API, you will need an API key. You can obtain your API key by signing up for an account on HyperExecute and generating an API key from your account settings.

Include your API key in the request headers using Basic Authentication as follows: -->

```
Request Type : GET 
Authorization: Basic
```

## Request
The Browser List API supports a simple HTTP GET request to fetch the list of supported browsers

```bash
https://api.hyperexecute.cloud/v2.0/browsers
```

## Sample Response

The response will be in JSON format, containing an array of objects representing each supported browser along with its versions.

```bash
{
    "message": "",
    "platforms": {
        "desktop": [
            {
                "platform": "ubuntu 20",
                "browsers": [
                    {
                        "name": "Chrome",
                        "version": "99.0"
                    },
                    
                    {
                        "name": "Firefox",
                        "version": "99.0"
                    },
                    
                    {
                        "name": "MicrosoftEdge",
                        "version": "canary"
                    },
                    
                    {
                        "name": "Opera",
                        "version": "85.0"
                    },
                    {
                        "name": "Chrome",
                        "version": "latest"
                    },
                    {
                        "name": "Firefox",
                        "version": "latest"
                    },
                    {
                        "name": "MicrosoftEdge",
                        "version": "latest"
                    },
                    {
                        "name": "Opera",
                        "version": "latest"
                    }
                ],
                "resolutions": [
                    "1024x768",
                    "1280x800",
                    "1280x1024",
                    "1366x768",
                    "1440x900",
                    "1680x1050",
                    "1600x1200",
                    "1920x1200",
                    "1920x1080",
                    "2048x1536",
                    "2560x1440",
                    "1280x960"
                ]
            },
        ]
    },
    "status": 200
}
```

<!-- ## Error Handling
If there is an error with your request, the API will respond with an appropriate HTTP status code and an error message in the response body.

Example Error Response: -->

## Params

```bash
{
 "platform": "windows 10" #optional
 "stable":  true  #if passed we will return only stable version of browsers
}
```

### Sample Response

The response will be in JSON format, containing an array of objects representing each supported browser in **windows 10**  only along with its versions.

```bash
{
   "message": "",
   "platforms": {
       "desktop": [
           {
               "platform": "Windows 10",
               "browsers": [
                    {
                       "name": "Firefox",
                       "version": "99.0"
                    },               
                    {
                       "name": "Firefox",
                       "version": "100.0"
                    },
                    {
                       "name": "Firefox",
                       "version": "latest"
                    }
                ],
                "resolutions": [
                    "1024x768",
                    "1280x800",
                    "1280x1024",
                    "1366x768",
                    "1440x900",
                    "1680x1050",
                    "1600x1200",
                    "1920x1200",
                    "1920x1080",
                    "2048x1536",
                    "2560x1440"
                ]
            }
        ]
    },
   "status": 200
}
```

## cURL Command
You can also use the `curl` command to trigger the following api:

```
curl --location --request GET 'https://api-hyperexecute.lambdatest.com/sentinel/v2.0/browsers'
```

## Conclusion

The Browser List API simplifies the process of obtaining a comprehensive list of supported browsers and their versions on the HyperExecute platform. By using this information, you can ensure that your web applications are compatible across a wide range of browsers, leading to a better user experience for your audience.