---
id: speedup-espresso
title: Filters for Espresso Tests
sidebar_label: Filters for Espresso Tests
description: This document helps you learn how to speed up your Espresso Tests.
keywords:
  - espresso test filters
  - app test automation
  - espresso
  - filter
  - testmu ai
  - framework on testmu ai
  - testing in espresso
  - espresso testing
  - real devices
url: https://www.testmuai.com/support/docs/speedup-espresso/
site_name: TestMu AI
slug: speedup-espresso/
canonical: https://www.testmuai.com/support/docs/speedup-espresso/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Filters for Espresso Test",
          "item": `${BRAND_URL}/support/docs/speedup-espresso/`
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
      "@id": "https://www.testmuai.com/support/docs/speedup-espresso/"
    },
    "headline": "Filters for Espresso Tests",
    "description": "This document helps you learn how to speed up your Espresso Tests.",
    "url": "https://www.testmuai.com/support/docs/speedup-espresso/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "espresso test filters",
      "app test automation",
      "espresso"
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
        "text": "POST   /framework/v1/espresso/build"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "1. To run specifically defined packages (Windows)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  {`curl --location --request POST \"https://mobile-api.lambdatest.com/framework/v1/espresso/build\" --header \"Content-Type: application/json\" --header \"Authorization: Basic <Enter the Auth here>\" --data-raw \"{\\\"app\\\" : \\\"lt://APP_ID\\\",\\\"testSuite\\\": \\\"lt://APP_ID\\\",\\\"device\\\" :  [\\\"Pixel 6-12\\\"],\\\"queueTimeout\\\": 360,\\\"IdleTimeout\\\": 150,\\\"deviceLog\\\": true,\\\"network\\\": false,\\\"build\\\" : \\\"Proverbial-Espresso\\\",\\\"geoLocation\\\" : \\\"FR\\\", \\\"package\\\" : [\\\"com.example.proverbial.packagename1\\\", \\\"com.example.proverbial.packagename2\\\"]}\"`}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2. To run specifically defined classes (Windows)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  {`curl --location --request POST \"https://mobile-api.lambdatest.com/framework/v1/espresso/build\" --header \"Content-Type: application/json\" --header \"Authorization: Basic <Enter the Auth here>\" --data-raw \"{\\\"app\\\" : \\\"lt://APP_ID\\\",\\\"testSuite\\\": \\\"lt://APP_ID\\\",\\\"device\\\" :  [\\\"Pixel 6-12\\\"],\\\"queueTimeout\\\": 360,\\\"IdleTimeout\\\": 150,\\\"deviceLog\\\": true,\\\"network\\\": false,\\\"build\\\" : \\\"Proverbial-Espresso\\\",\\\"geoLocation\\\" : \\\"FR\\\", \\\"class\\\" : [\\\"com.example.proverbial.packagename.classname1\\\",\\\"com.example.proverbial.packagename.classname2\\\"]}\"`}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  {`curl --location --request POST \"https://mobile-api.lambdatest.com/framework/v1/espresso/build\" --header \"Authorization: Basic <Enter the Auth here>\" --header \"Content-Type: application/json\" --data-raw \"{\\\"app\\\": \\\"lt://APP_ID\\\", \\\"testSuite\\\": \\\"lt://APP_ID\\\", \\\"device\\\": [\\\"Pixel 6-12\\\"], \\\"queueTimeout\\\": 360, \\\"IdleTimeout\\\": 150, \\\"deviceLog\\\": true, \\\"network\\\": false, \\\"build\\\": \\\"Proverbial-Espresso\\\", \\\"geoLocation\\\": \\\"FR\\\", \\\"filters\\\": {\\\"annotation\\\": [\\\"com.lambdatest.proverbial.demo1\\\", \\\"com.lambdatest.proverbial.demo2\\\"]}}\"`}"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
---


Usually, all the test cases of your Espresso test suite are executed, but there is a way to filter these. You can use Espresso test runner (typically `AndroidJUnitRunner`), which provides you with multiple options to filter the test cases which you want to execute.

To filter the test cases, you just need to pass the suitable parameters in <BrandName />’s [REST API](/support/docs/getting-started-with-espresso-testing/) request. Refer to the table below to understand how to use various filters provided by <BrandName />.

Given below is the REST API endpoint:

```bash
POST   /framework/v1/espresso/build
```


| Parameters                  | Description                  | Values                                                                                                                                                                   | Datatype                                                                                                                                                                                                                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `package`               | Allows the user to only run specific packages defined               | Multiple packages can be passed in comma-separated format. E.g. `["com.example.proverbial.packagename"]`                                                                                                                                                             | Array                                                                                                                                                                                                                                                                                                                                                             |
| `skipPackage`               | Allows the user to run all packages except the ones defined               | Multiple packages can be passed in comma-separated format. E.g. `["com.example.proverbial.packagename"]`                                                                                                                                                             | Array                                                                                                                                                                                                                                                                                                                                                             |
| `class`               | Allows the user to only run specific classes defined               | Multiple classes can be passed in comma-separated format. E.g. `["com.example.proverbial.packagename.classname"]`                                                                                                                                                             | Array                                                                                                                                                                                                                                                                                                                                                             |
| `skipClass`               | Allows the user to run all classes except the ones defined               | Multiple classes can be passed in comma-separated format. E.g. `["com.example.proverbial.packagename.classname"]`                                                                                                                                                             | Array                                                                                                                                                                                                                                                                                                                                                             |
| `annotation`               | Allows the user to only run specific annotations defined               | Only a single annotation can be passed. E.g. `"com.example.proverbial.annotation"`                                                                                                                                                             | String                                                                                                                                                                                                                                                                                                                                                             |
| `skipAnnotation`               | Allows the user to run all annotations except the ones defined               | Only a single annotation can be passed. E.g. `"com.example.proverbial.annotation"`                                                                                                                                                             | String                                                                                                                                                                                                                                                                                                                                                             |
| `size`               | Allows the user to run only tests that are annotated with the matching size value `@SmallTest, @MediumTest or @LargeTest`               | You may specify only one value for this property from the three valid values i.e. `"small", "medium", "large"`                                                                                                                                                             | String                                                                                                                                                                                                                                                                                                                                                            |

:::info Note
You can not use the following filters simultaneously. 
- `class` and `package`
- `class` and `skipClass`
- `package` and `skipPackage`
:::

:::info Note
You can use the following filters simultaneously.
- `annotation` and `skipAnnotation`
:::


## Some Examples

Please refer to the example `cURL` requests given below for your reference.

### 1. To run specifically defined packages

<Tabs className="docs__val">

<TabItem value="bash" label="MacOS/Linux" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \\
        --header 'Authorization: Basic <Enter_Basic_Auth>' \\
        --header 'Content-Type: application/json' \\
        --data-raw '{
            "app" : "lt://APP_ID",
            "testSuite": "lt://TestSuite_ID",
            "device" :  ["Pixel 6-12"],
            "queueTimeout": 360,
            "IdleTimeout": 150,
            "deviceLog": true,
            "build" : "Proverbial-Espresso"
            "package" : ["com.example.proverbial.packagename1","com.example.proverbial.packagename2"] 
            }'`}
  </CodeBlock>
  </div>
</TabItem>


<TabItem value="powershell" label="Windows" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-powershell">

  ```
  {`curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" --header "Content-Type: application/json" --header "Authorization: Basic <Enter the Auth here>" --data-raw "{\"app\" : \"lt://APP_ID\",\"testSuite\": \"lt://APP_ID\",\"device\" :  [\"Pixel 6-12\"],\"queueTimeout\": 360,\"IdleTimeout\": 150,\"deviceLog\": true,\"network\": false,\"build\" : \"Proverbial-Espresso\",\"geoLocation\" : \"FR\", \"package\" : [\"com.example.proverbial.packagename1\", \"com.example.proverbial.packagename2\"]}"`}
  ```

  </CodeBlock>
  </div>
</TabItem>
</Tabs>

### 2. To run specifically defined classes

<Tabs className="docs__val">

<TabItem value="bash" label="MacOS/Linux" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \\
        --header 'Authorization: Basic <Enter_Basic_Auth>' \\
        --header 'Content-Type: application/json' \\
        --data-raw '{
            "app" : "lt://APP_ID",
            "testSuite": "lt://TestSuite_ID",
            "device" :  ["Pixel 6-12"],
            "queueTimeout": 360,
            "IdleTimeout": 150,
            "deviceLog": true,
            "build" : "Proverbial-Espresso"
            "class" : ["com.example.proverbial.packagename.classname1","com.example.proverbial.packagename.classname2"] 
            }'`}
  </CodeBlock>
  </div>
</TabItem>


<TabItem value="powershell" label="Windows" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-powershell">

  ```
  {`curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" --header "Content-Type: application/json" --header "Authorization: Basic <Enter the Auth here>" --data-raw "{\"app\" : \"lt://APP_ID\",\"testSuite\": \"lt://APP_ID\",\"device\" :  [\"Pixel 6-12\"],\"queueTimeout\": 360,\"IdleTimeout\": 150,\"deviceLog\": true,\"network\": false,\"build\" : \"Proverbial-Espresso\",\"geoLocation\" : \"FR\", \"class\" : [\"com.example.proverbial.packagename.classname1\",\"com.example.proverbial.packagename.classname2\"]}"`}
  ```

  </CodeBlock>
  </div>
</TabItem>
</Tabs>

### 3. To run specifically defined annotations

<Tabs className="docs__val">

<TabItem value="bash" label="MacOS/Linux" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \\
      --header 'Authorization: Basic <Enter_Basic_Auth>' \\
      --header 'Content-Type: application/json' \\
      --data-raw '{
          "app": "lt://APP_ID",
          "testSuite": "lt://TestSuite_ID",
          "device": ["Pixel 6-12"],
          "queueTimeout": 360,
          "IdleTimeout": 150,
          "deviceLog": true,
          "build": "Proverbial-Espresso",
          "filters": {
              "annotation": [
                  "com.lambdatest.proverbial.demo1","com.lambdatest.proverbial.demo2"
              ]
          }
      }'`}
  </CodeBlock>
  </div>
</TabItem>


<TabItem value="powershell" label="Windows" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-powershell">

  ```
  {`curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" --header "Authorization: Basic <Enter the Auth here>" --header "Content-Type: application/json" --data-raw "{\"app\": \"lt://APP_ID\", \"testSuite\": \"lt://APP_ID\", \"device\": [\"Pixel 6-12\"], \"queueTimeout\": 360, \"IdleTimeout\": 150, \"deviceLog\": true, \"network\": false, \"build\": \"Proverbial-Espresso\", \"geoLocation\": \"FR\", \"filters\": {\"annotation\": [\"com.lambdatest.proverbial.demo1\", \"com.lambdatest.proverbial.demo2\"]}}"`}
  ```

  </CodeBlock>
  </div>
</TabItem>
</Tabs>

:::info 
This configuration will run tests annotated with multiple annotations, i.e., only the intersection of all mentioned annotations will be considered.
:::


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
      <span className="breadcrumbs__link"> Speeding up Espresso Tests</span>
    </li>
  </ul>
</nav>
