---
id: kaneai-custom-headers
title: Custom Headers in KaneAI
hide_title: true
sidebar_label: Custom Headers
description: Guide for usage of Database custom headers in KaneAI
keywords:
  - Custom Headers
  - Headers
url: https://www.testmu.ai/support/docs/kaneai-custom-headers
site_name: LambdaTest
slug: kaneai-custom-headers
canonical: https://www.testmu.ai/support/docs/kaneai-custom-headers/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Custom Headers",
          "item": `${BRAND_URL}/support/docs/kaneai-custom-headers/`
        }]
      })
    }}
></script>

# Custom Headers in KaneAI Web Test Authoring

Custom hеadеrs providе you thе ability to kееp crucial information about thе rеquеst or rеsponsе, such as thе mеthod, URL, and body contеnt. You can modify thе paramеtеrs of thе HTTP rеquеsts dеlivеrеd in your tеsts by manipulating thеsе hеadеrs. 

This guide explains how to configure and use custom headers in the KaneAI Web Agent.

## Steps to Use Custom Headers in KaneAI Web Agent

Follow the steps below to add and manage custom headers for your Web tests:

### Configure & Add Custom Headers for a Section
Start by creating a Web session by going on the [KaneAI page](https://kaneai.lambdatest.com/objective) and clicking on the **Create a Web Test** button. You will find the **Custom Headers** section there. 

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/create_web_test_custom_headers.png').default} alt="objective-page" className="doc_img"/>

Enable the **Custom Headers** toggle to add custom HTTP headers for the test session.

You can add new header rows by clicking the **+** button. Each row will have two fields: **Header Name** and **Header Value**.


:::note
You can add up to 10 custom headers.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/add_custom_headers.png').default} alt="objective-page" className="doc_img"/>

#### Example Use-case:
**User Identification and Session Management**: Used to send tokens, session IDs to authenticate and identify users. This helps in managing user sessions, implement stateless authentication mechanisms, track user behavior.

Example: The Custom header `X-Session-ID`is used to track user sessions.

```java
X-Session-ID: 1234567890 
```

:::note
 If you provide a Default Header in the Custom Header section your Default header will get overridden. 
::: 

***

### Authoring with Custom Headers
After configuring the custom headers, initiate the Web Authoring session. The headers you added will be applied during the test session, allowing you to test under the configured conditions.

Custom Headers will be applied to all the API call you make in the session like 'Go to https://lambdatest.com' or doing API testing like shown below:

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/custom_headers_appliend.png').default} alt="objective-page" className="doc_img"/>

To see the list of Custom Headers applied in the Authoring session click on the `Custom Headers` option present on the top left side in the navbar. 

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/view_custom_headers_while_authoring.png').default} alt="objective-page" className="doc_img"/>

You will see the list of applied Custom Headers.

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/custom_headers_modal.png').default} alt="objective-page" className="doc_img"/>

***

### View the Custom Headers in the Summary Page
Once the session completes, the custom headers used during the session will be displayed on the summary page, similar to how Chrome options are shown.

You can click on `view details` to see the value of Custom Headers. 

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/view_custom_headers_in_testcase.png').default} alt="objective-page" className="doc_img"/>
<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/custom_headers_testcase_modal.png').default} alt="objective-page" className="doc_img"/>