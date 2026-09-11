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
url: https://www.testmuai.com/support/docs/hyperexecute-browser-list-api/
site_name: TestMu AI
slug: hyperexecute-browser-list-api/
canonical: https://www.testmuai.com/support/docs/hyperexecute-browser-list-api/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-browser-list-api/"
    },
    "headline": "How to List Supported Browser in HyperExecute via API",
    "description": "Find out how to list the browser used in hyperexecute using the BrowserList API",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-browser-list-api/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "TestMu AI Hyperexecute",
      "TestMu AI Hyperexecute help",
      "TestMu AI Hyperexecute documentation"
    ],
    "proficiencyLevel": "Beginner",
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
        "name": "The Endpoint for the Browser List API is",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "https://api.hyperexecute.cloud/v2.0/browsers"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "API Endpoint and Authorization",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Request Type : GET \nAuthorization: Basic"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Request",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "https://api.hyperexecute.cloud/v2.0/browsers"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Sample Response",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "{\n    \"message\": \"\",\n    \"platforms\": {\n        \"desktop\": [\n            {\n                \"platform\": \"ubuntu 20\",\n                \"browsers\": [\n                    {\n                        \"name\": \"Chrome\",\n                        \"version\": \"99.0\"\n                    },\n                    \n                    {\n                        \"name\": \"Firefox\",\n                        \"version\": \"99.0\"\n                    },\n                    \n                    {\n                        \"name\": \"MicrosoftEdge\",\n                        \"version\": \"canary\"\n                    },\n                    \n                    {\n                        \"name\": \"Opera\",\n                        \"version\": \"85.0\"\n                    },\n                    {\n                        \"name\": \"Chrome\",\n                        \"version\": \"latest\"\n                    },\n                    {\n                        \"name\": \"Firefox\",\n                        \"version\": \"latest\"\n                    },\n                    {\n                        \"name\": \"MicrosoftEdge\",\n                        \"version\": \"latest\"\n                    },\n                    {\n                        \"name\": \"Opera\",\n                        \"version\": \"latest\"\n                    }\n                ],\n                \"resolutions\": [\n                    \"1024x768\",\n                    \"1280x800\",\n                    \"1280x1024\",\n                    \"1366x768\",\n                    \"1440x900\",\n                    \"1680x1050\",\n                    \"1600x1200\",\n                    \"1920x1200\",\n                    \"1920x1080\",\n                    \"2048x1536\",\n                    \"2560x1440\",\n                    \"1280x960\"\n                ]\n            },\n        ]\n    },\n    \"status\": 200\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Params",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "{\n \"platform\": \"windows 10\" #optional\n \"stable\":  true  #if passed we will return only stable version of browsers\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Sample Response",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "{\n   \"message\": \"\",\n   \"platforms\": {\n       \"desktop\": [\n           {\n               \"platform\": \"Windows 10\",\n               \"browsers\": [\n                    {\n                       \"name\": \"Firefox\",\n                       \"version\": \"99.0\"\n                    },               \n                    {\n                       \"name\": \"Firefox\",\n                       \"version\": \"100.0\"\n                    },\n                    {\n                       \"name\": \"Firefox\",\n                       \"version\": \"latest\"\n                    }\n                ],\n                \"resolutions\": [\n                    \"1024x768\",\n                    \"1280x800\",\n                    \"1280x1024\",\n                    \"1366x768\",\n                    \"1440x900\",\n                    \"1680x1050\",\n                    \"1600x1200\",\n                    \"1920x1200\",\n                    \"1920x1080\",\n                    \"2048x1536\",\n                    \"2560x1440\"\n                ]\n            }\n        ]\n    },\n   \"status\": 200\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "You can also use the curl command to trigger the following api",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "curl --location --request GET 'https://api-hyperexecute.lambdatest.com/sentinel/v2.0/browsers'"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

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

<VerifiedTag value="Verified" />

```bash
https://api.hyperexecute.cloud/v2.0/browsers
```

<!-- ## Authentication
To use the Browser List API, you will need an API key. You can obtain your API key by signing up for an account on HyperExecute and generating an API key from your account settings.

Include your API key in the request headers using Basic Authentication as follows: -->

<VerifiedTag value="Verified" />

```
Request Type : GET 
Authorization: Basic
```

## Request
The Browser List API supports a simple HTTP GET request to fetch the list of supported browsers

<VerifiedTag value="Verified" />

```bash
https://api.hyperexecute.cloud/v2.0/browsers
```

## Sample Response

The response will be in JSON format, containing an array of objects representing each supported browser along with its versions.

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```bash
{
 "platform": "windows 10" #optional
 "stable":  true  #if passed we will return only stable version of browsers
}
```

### Sample Response

The response will be in JSON format, containing an array of objects representing each supported browser in **windows 10**  only along with its versions.

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```
curl --location --request GET 'https://api-hyperexecute.lambdatest.com/sentinel/v2.0/browsers'
```

## Conclusion

The Browser List API simplifies the process of obtaining a comprehensive list of supported browsers and their versions on the HyperExecute platform. By using this information, you can ensure that your web applications are compatible across a wide range of browsers, leading to a better user experience for your audience.
