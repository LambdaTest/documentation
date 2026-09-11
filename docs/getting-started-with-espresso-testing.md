---
id: getting-started-with-espresso-testing
title: Espresso Testing On TestMu AI
sidebar_label: Espresso Testing
description: Now you can run your automation scripts using Espresso framework on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - espresso
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/getting-started-with-espresso-testing/
site_name: TestMu AI
slug: getting-started-with-espresso-testing/
canonical: https://www.testmuai.com/support/docs/getting-started-with-espresso-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';


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
          "name": "Getting Started With Espresso Testing on TestMu AI",
          "item": `${BRAND_URL}/support/docs/getting-started-with-espresso-testing/`
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
      "@id": "https://www.testmuai.com/support/docs/getting-started-with-espresso-testing/"
    },
    "headline": "Espresso Testing On TestMu AI",
    "description": "Now you can run your automation scripts using Espresso framework on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.",
    "url": "https://www.testmuai.com/support/docs/getting-started-with-espresso-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "espresso",
      "java",
      "testmu ai java"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key.; Access to an Android app (.apk) and an Espresso Test app (.apk file)..",
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
        "name": "Step 3: Executing The Test (Linux / MacOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \\\n--header 'Authorization: Basic BASIC_AUTH_TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"app\": \"APP_ID\",\n    \"testSuite\": \"TEST_SUITE_ID\",\n    \"device\": [\"Galaxy S21 5G-12\"],\n    \"queueTimeout\": 10800,\n    \"IdleTimeout\": 150,\n    \"deviceLog\": true,\n    \"network\": false,\n    \"build\": \"Proverbial-Espresso\",\n    \"geoLocation\": \"FR\"\n}'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl --location --request POST \"https://mobile-api.lambdatest.com/framework/v1/espresso/build\" ^\n--header \"Authorization: Basic BASIC_AUTH_TOKEN\" ^\n--header \"Content-Type: application/json\" ^\n--data \"{\\\"app\\\":\\\"APP_ID\\\",\\\"testSuite\\\":\\\"TEST_SUITE_ID\\\",\\\"device\\\":[\\\"Pixel 6-12\\\"],\\\"queueTimeout\\\":10800,\\\"IdleTimeout\\\":150,\\\"deviceLog\\\":true,\\\"network\\\":false,\\\"build\\\":\\\"Proverbial-Espresso\\\",\\\"geoLocation\\\":\\\"FR\\\"}\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Linux / MacOS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \\\n--header 'Authorization: Basic BASIC_AUTH_TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"app\": \"APP_ID\",\n    \"testSuite\": \"TEST_SUITE_ID\",\n    \"device\": [\"Galaxy S21 5G-12.0\"],\n    \"isVirtualDevice\": true,\n    \"queueTimeout\": 10800,\n    \"IdleTimeout\": 150,\n    \"deviceLog\": true,\n    \"network\": false,\n    \"build\": \"Proverbial-Espresso\",\n    \"geoLocation\": \"FR\"\n}'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl --location --request POST \"https://mobile-api.lambdatest.com/framework/v1/espresso/build\" ^\n--header \"Authorization: Basic BASIC_AUTH_TOKEN\" ^\n--header \"Content-Type: application/json\" ^\n--data \"{\\\"app\\\":\\\"APP_ID\\\",\\\"testSuite\\\":\\\"TEST_SUITE_ID\\\",\\\"device\\\":[\\\"Pixel 6-12.0\\\"],\\\"isVirtualDevice\\\":true,\\\"queueTimeout\\\":10800,\\\"IdleTimeout\\\":150,\\\"deviceLog\\\":true,\\\"network\\\":false,\\\"build\\\":\\\"Proverbial-Espresso\\\",\\\"geoLocation\\\":\\\"FR\\\"}\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Tests in Parallel (Linux / MacOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \\\n--header 'Authorization: Basic BASIC_AUTH_TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"app\": \"APP_ID\",\n    \"testSuite\": \"TEST_SUITE_ID\",\n    \"device\": [\"Galaxy S20-10\",\"Galaxy S20-10\",\"Redmi Note 9-10\",\"Galaxy S10+-10\",\"Galaxy S7 edge-8\",\"Galaxy S9+-8\"],\n    \"queueTimeout\": 10800,\n    \"IdleTimeout\": 150,\n    \"deviceLog\": true,\n    \"network\": false,\n    \"build\": \"Proverbial-Espresso\",\n    \"geoLocation\": \"FR\"\n}'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl --location --request POST \"https://mobile-api.lambdatest.com/framework/v1/espresso/build\" ^\n--header \"Authorization: Basic BASIC_AUTH_TOKEN\" ^\n--header \"Content-Type: application/json\" ^\n--data \"{\\\"app\\\":\\\"APP_ID\\\",\\\"testSuite\\\":\\\"TEST_SUITE_ID\\\",\\\"device\\\":[\\\"Galaxy S20-10\\\",\\\"Galaxy S20-10\\\",\\\"Redmi Note 9-10\\\",\\\"Galaxy S10+-10\\\",\\\"Galaxy S7 edge-8\\\",\\\"Galaxy S9+-8\\\"],\\\"queueTimeout\\\":10800,\\\"IdleTimeout\\\":150,\\\"deviceLog\\\":true,\\\"network\\\":false,\\\"build\\\":\\\"Proverbial-Espresso\\\",\\\"geoLocation\\\":\\\"FR\\\"}\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Linux / MacOS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \\\n--header 'Authorization: Basic BASIC_AUTH_TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"app\": \"APP_ID\",\n    \"testSuite\": \"TEST_SUITE_ID\",\n    \"device\": [\"Galaxy S20-10.0\",\"Galaxy S20-10.0\",\"Redmi Note 9-10.0\",\"Galaxy S10+-10.0\",\"Galaxy S7 edge-8.0\",\"Galaxy S9+-8.0\"],\n    \"isVirtualDevice\": true,\n    \"queueTimeout\": 10800,\n    \"IdleTimeout\": 150,\n    \"deviceLog\": true,\n    \"network\": false,\n    \"build\": \"Proverbial-Espresso\",\n    \"geoLocation\": \"FR\"\n}'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl --location --request POST \"https://mobile-api.lambdatest.com/framework/v1/espresso/build\" ^\n--header \"Authorization: Basic BASIC_AUTH_TOKEN\" ^\n--header \"Content-Type: application/json\" ^\n--data \"{\\\"app\\\":\\\"APP_ID\\\",\\\"testSuite\\\":\\\"TEST_SUITE_ID\\\",\\\"device\\\":[\\\"Galaxy S20-10.0\\\",\\\"Galaxy S20-10.0\\\",\\\"Redmi Note 9-10.0\\\",\\\"Galaxy S10+-10.0\\\",\\\"Galaxy S7 edge-8.0\\\",\\\"Galaxy S9+-8.0\\\"],\\\"isVirtualDevice\\\":true,\\\"queueTimeout\\\":10800,\\\"IdleTimeout\\\":150,\\\"deviceLog\\\":true,\\\"network\\\":false,\\\"build\\\":\\\"Proverbial-Espresso\\\",\\\"geoLocation\\\":\\\"FR\\\"}\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The espresso-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "espresso-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Espresso Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/espresso-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/espresso-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
Espresso is a widely-used testing framework for Android, designed to simplify the process of writing reliable and efficient UI tests. It allows developers to create automated tests that simulate user interactions within an app, ensuring that the app's UI behaves as expected. With its straightforward API and synchronization capabilities, Espresso provides a robust solution for validating the functionality and performance of Android applications.

In this documentation, you will learn how to trigger a automation script of Java for application testing with Appium on <BrandName />, set the desired capabilities for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Access to an **Android** app (.apk) and an **Espresso Test** app (.apk file).

:::tip
If you do not have any **Android** app (.apk) and an **Espresso Test** app (.apk) file, you can run your sample tests on <BrandName /> by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) and a sample :link: [Espresso Test](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android_expressotest.apk).
:::

## Running Your First Test: A Step-by-Step Guide

### Step 1: Upload Your Application

To begin testing, upload your Android application (.apk file) to <BrandName />'s servers. You'll use our **REST API** for this process.

- **Authentication :** You'll need your <BrandName /> Username and AccessKey. Combine them in the format `Username:AccessKey`.
- **Uploading the App :** Use **cURL command** to send a request to our API. The request should include the path to your application file (**appFile**).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@"<PATH_OF_YOUR_ANDROID_APP>"' --form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"<PATH_OF_YOUR_ANDROID_APP>"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::info
- Provide the path of your android application in the above URL in place of `<PATH_OF_YOUR_ANDROID_APP>`
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.
:::

### Step 2: Upload Your Test Suite

Upload your Espresso test suite (.apk) file to <BrandName /> servers using our REST API.

The following sample cURL command shows how to upload a test suite:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@"<PATH_OF_YOUR_TEST_SUITE_APP>"' --form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"<PATH_OF_YOUR_TEST_SUITE_APP>"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::info
- Provide the path of your android application in the above URL in place of `<PATH_OF_YOUR_TEST_SUITE_APP>`
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.
:::

### Step 3: Executing The Test

- You will need **base64 encoded authentication** in order to execute your Espresso automation test suite. Enter your `username:accesskey` in **[Basic Authentication Header Generator](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** to generate your auth token.

Take note of the base64 encoded authentication which needs to be added in the next step.

<div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

- Once you have uploaded your app and test suite, you can execute your test by running the following command:

:::note
* On Windows, run the following `curl` command from **Command Prompt (cmd.exe)**. The command is formatted for the Windows CMD terminal and may require different syntax if executed from PowerShell or another shell.
* Before running the command, replace `BASIC_AUTH_TOKEN`, `APP_ID`, and `TEST_SUITE_ID` with your actual LambdaTest credentials and resource IDs obtained from the above curl commands.
  :::

<Tabs className="docs__val">

<TabItem value="real-device" label="Real Device" default>

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app": "APP_ID",
    "testSuite": "TEST_SUITE_ID",
    "device": ["Galaxy S21 5G-12"],
    "queueTimeout": 10800,
    "IdleTimeout": 150,
    "deviceLog": true,
    "network": false,
    "build": "Proverbial-Espresso",
    "geoLocation": "FR"
}'
```

</CodeBlock>
</div>
</TabItem>

<TabItem value="powershell" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="lamguage-powershell">

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" ^
--header "Authorization: Basic BASIC_AUTH_TOKEN" ^
--header "Content-Type: application/json" ^
--data "{\"app\":\"APP_ID\",\"testSuite\":\"TEST_SUITE_ID\",\"device\":[\"Pixel 6-12\"],\"queueTimeout\":10800,\"IdleTimeout\":150,\"deviceLog\":true,\"network\":false,\"build\":\"Proverbial-Espresso\",\"geoLocation\":\"FR\"}"
```
</CodeBlock>
</div>
</TabItem>

</Tabs>
</TabItem>

<TabItem value="virtual-device" label="Virtual Device" default>

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app": "APP_ID",
    "testSuite": "TEST_SUITE_ID",
    "device": ["Galaxy S21 5G-12.0"],
    "isVirtualDevice": true,
    "queueTimeout": 10800,
    "IdleTimeout": 150,
    "deviceLog": true,
    "network": false,
    "build": "Proverbial-Espresso",
    "geoLocation": "FR"
}'
```

</CodeBlock>
</div>
</TabItem>

<TabItem value="powershell" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="lamguage-powershell">

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" ^
--header "Authorization: Basic BASIC_AUTH_TOKEN" ^
--header "Content-Type: application/json" ^
--data "{\"app\":\"APP_ID\",\"testSuite\":\"TEST_SUITE_ID\",\"device\":[\"Pixel 6-12.0\"],\"isVirtualDevice\":true,\"queueTimeout\":10800,\"IdleTimeout\":150,\"deviceLog\":true,\"network\":false,\"build\":\"Proverbial-Espresso\",\"geoLocation\":\"FR\"}"
```

</CodeBlock>
</div>
</TabItem>
</Tabs>

</TabItem>
</Tabs>

### Step 4: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at <a href="https://www.testmuai.com/login/" onClick={CookieTrackingLogin}><BrandName /> Automation</a>.

<img loading="lazy" src={require('../assets/images/espresso/espresso-test.jpeg').default} alt="Image" width="521" height="268" className="doc_img"/>

## Running Tests in Parallel

You can run tests in parallel on multiple devices by passing the device name in comma separated format in the execute command as show below:

:::note
* On Windows, run the following `curl` command from **Command Prompt (cmd.exe)**. The command is formatted for the Windows CMD terminal and may require different syntax if executed from PowerShell or another shell.
* Before running the command, replace `BASIC_AUTH_TOKEN`, `APP_ID`, and `TEST_SUITE_ID` with your actual LambdaTest credentials and resource IDs obtained from the above curl commands.
:::

<Tabs className="docs__val">

<TabItem value="real-device" label="Real Device" default>

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app": "APP_ID",
    "testSuite": "TEST_SUITE_ID",
    "device": ["Galaxy S20-10","Galaxy S20-10","Redmi Note 9-10","Galaxy S10+-10","Galaxy S7 edge-8","Galaxy S9+-8"],
    "queueTimeout": 10800,
    "IdleTimeout": 150,
    "deviceLog": true,
    "network": false,
    "build": "Proverbial-Espresso",
    "geoLocation": "FR"
}'
```

</CodeBlock>
</div>
</TabItem>

<TabItem value="powershell" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="lamguage-powershell">

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" ^
--header "Authorization: Basic BASIC_AUTH_TOKEN" ^
--header "Content-Type: application/json" ^
--data "{\"app\":\"APP_ID\",\"testSuite\":\"TEST_SUITE_ID\",\"device\":[\"Galaxy S20-10\",\"Galaxy S20-10\",\"Redmi Note 9-10\",\"Galaxy S10+-10\",\"Galaxy S7 edge-8\",\"Galaxy S9+-8\"],\"queueTimeout\":10800,\"IdleTimeout\":150,\"deviceLog\":true,\"network\":false,\"build\":\"Proverbial-Espresso\",\"geoLocation\":\"FR\"}"
```
</CodeBlock>
</div>
</TabItem>

</Tabs>
</TabItem>

<TabItem value="virtual-device" label="Virtual Device" default>

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app": "APP_ID",
    "testSuite": "TEST_SUITE_ID",
    "device": ["Galaxy S20-10.0","Galaxy S20-10.0","Redmi Note 9-10.0","Galaxy S10+-10.0","Galaxy S7 edge-8.0","Galaxy S9+-8.0"],
    "isVirtualDevice": true,
    "queueTimeout": 10800,
    "IdleTimeout": 150,
    "deviceLog": true,
    "network": false,
    "build": "Proverbial-Espresso",
    "geoLocation": "FR"
}'
```

</CodeBlock>
</div>
</TabItem>

<TabItem value="powershell" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="lamguage-powershell">

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" ^
--header "Authorization: Basic BASIC_AUTH_TOKEN" ^
--header "Content-Type: application/json" ^
--data "{\"app\":\"APP_ID\",\"testSuite\":\"TEST_SUITE_ID\",\"device\":[\"Galaxy S20-10.0\",\"Galaxy S20-10.0\",\"Redmi Note 9-10.0\",\"Galaxy S10+-10.0\",\"Galaxy S7 edge-8.0\",\"Galaxy S9+-8.0\"],\"isVirtualDevice\":true,\"queueTimeout\":10800,\"IdleTimeout\":150,\"deviceLog\":true,\"network\":false,\"build\":\"Proverbial-Espresso\",\"geoLocation\":\"FR\"}"
```

</CodeBlock>
</div>
</TabItem>
</Tabs>

</TabItem>
</Tabs>


## Using the Espresso Agent Skill with TestMu AI
***

The [espresso-skill](https://github.com/LambdaTest/agent-skills/tree/main/espresso-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The espresso-skill package includes:

```
espresso-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing Espresso Agent Skill
***

Install a Espresso Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/espresso-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/espresso-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only espresso-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

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
      Espresso Testing 
      </span>
    </li>
  </ul>
</nav>
