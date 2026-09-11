---
id: speedup-xcui
title: Filters for XCUI Tests
sidebar_label: Filters for XCUI Tests
description: Filter XCUI test cases with TestMu AI's REST API. Run specific tests or skip others using customizable parameters. Streamline your testing process effortlessly.
keywords:
  - XCUI test filters
  - app test automation
  - XCUI
  - filter
  - testmu ai
  - framework on testmu ai
  - testing in XCUI
  - XCUI testing
  - real devices
url: https://www.testmuai.com/support/docs/speedup-xcui/
site_name: TestMu AI
slug: speedup-xcui/
canonical: https://www.testmu.ai/support/docs/speedup-xcui/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Filters for XCUI Test",
          "item": `${BRAND_URL}/support/docs/speedup-xcui/`
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
      "@id": "https://www.testmuai.com/support/docs/speedup-xcui/"
    },
    "headline": "Filters for XCUI Tests",
    "description": "Filter XCUI test cases with TestMu AI's REST API. Run specific tests or skip others using customizable parameters. Streamline your testing process effortlessly.",
    "url": "https://www.testmuai.com/support/docs/speedup-xcui/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "XCUI test filters",
      "app test automation",
      "XCUI"
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
        "name": "Given below is the REST API endpoint",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \\\n--header 'Authorization: Basic BASIC_AUTH_TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n  \"app\" : \"APP_ID\",\n  \"testSuite\": \"TEST_SUITE_ID\",\n  \"device\" :  [\"iPhone 11-14\"],\n  \"video\" : true,\n  \"queueTimeout\": 10800,\n  \"idleTimeout\": 150,\n  \"devicelog\": true,\n  \"network\": false,\n  \"build\" : \"Proverbial-XCUITest\"\n}'"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
Usually, all the test cases of your XCUI test suite are executed, but there is a way to filter these. You can specify some selected classes or tests, which provides you with options to filter the test cases which you want to execute.

To filter the test cases, you just need to pass the suitable parameters in <BrandName />’s REST API request. Refer to the table below to understand how to use various filters provided by <BrandName />.

Given below is the REST API endpoint:

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
  "app" : "APP_ID",
  "testSuite": "TEST_SUITE_ID",
  "device" :  ["iPhone 11-14"],
  "video" : true,
  "queueTimeout": 10800,
  "idleTimeout": 150,
  "devicelog": true,
  "network": false,
  "build" : "Proverbial-XCUITest"
}'
```

| Parameters | Description | Values | Datatype | 
|----------- | ----------- | ------ | -------- |
| `only-testing` <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />| Allows the user to run only those tests/classes provided in the list | Values can be of the following format: className or className/testName. E.g. `["Class1/Test1", "Class2"]` | Array |
| `skip-testing`<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" /> | Allows the user to run all the tests/classes except the ones provided in the list | Values can be of the following format: className or className/testName. E.g. `["Class1/Test1", "Class2"]` | Array |

:::info Note
You can not use the following filters simultaneously. 
- `only-testing` and `skip-testing`
- `xctestplan` and `only-testing`/`skip-testing`
:::
