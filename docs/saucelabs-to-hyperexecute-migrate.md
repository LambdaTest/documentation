---
id: saucelabs-to-hyperexecute-migrate
title: Sauce Labs to HyperExecute
hide_title: true
sidebar_label: Sauce Labs to HyperExecute
description: Understand how to migrate from Sauce Labs to HyperExecute
keywords:
  - TestMu AI HyperExecute
  - TestMu AI HyperExecute help
  - TestMu AI HyperExecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/saucelabs-to-hyperexecute-migrate/
site_name: TestMu AI
slug: saucelabs-to-hyperexecute-migrate/
canonical: https://www.testmu.ai/support/docs/saucelabs-to-hyperexecute-migrate/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Sauce Labs to HyperExecute",
          "item": `${BRAND_URL}/support/docs/saucelabs-to-hyperexecute-migrate/`
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
      "@id": "https://www.testmuai.com/support/docs/saucelabs-to-hyperexecute-migrate/"
    },
    "headline": "Sauce Labs to HyperExecute",
    "description": "Understand how to migrate from Sauce Labs to HyperExecute",
    "url": "https://www.testmuai.com/support/docs/saucelabs-to-hyperexecute-migrate/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "TestMu AI HyperExecute",
      "TestMu AI HyperExecute help",
      "TestMu AI HyperExecute documentation"
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
        "name": "For macOS / Linux",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=YOUR_LT_USERNAME\nexport LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set LT_USERNAME=YOUR_LT_USERNAME\nset LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure and Update your Test Scripts",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "---\nversion: 0.2\nglobalTimeout: 150\ntestSuiteTimeout: 150\ntestSuiteStep: 150\n\nrunson: win\n\nautosplit: true\nretryOnFailure: true\n\nmaxRetries: 1\nconcurrency: 4\nshell: bash\nenv:\n  # PAT: ${{ .secrets.testKey }}\n  CACHE_DIR: m2_cache_dir\n\ncacheKey: '{{ checksum \"pom.xml\" }}'\ncacheDirectories:\n  - .m2\n\npre:\n  # Skip execution of the tests in the pre step\n  - mvn -Dmaven.repo.local=./.m2 dependency:resolve\n\npost:\n  - ls target/surefire-reports/\n\nmergeArtifacts: true\n\n\nuploadArtefacts:\n - name: ExecutionSnapshots\n   path:\n    - target/surefire-reports/html/**\n\nreport: true\npartialReports:\n  location: target/surefire-reports/html\n  type: html\n  frameworkName: extent\n\nframework:\n  name: maven/testng\n  defaultReports: false\n  flags:\n    - \"-Dplatname=mac\"\n\njobLabel: [selenium-testng, mac, autosplit, migration]\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "MutableCapabilities sauceOptions = new MutableCapabilities();\nsauceOptions.setCapability(\"username\", System.getenv(\"SAUCE_USERNAME\"));\nsauceOptions.setCapability(\"accessKey\", System.getenv(\"SAUCE_ACCESS_KEY\"));\nsauceOptions.setCapability(\"name\", method.getName());\nsauceOptions.setCapability(\"browserVersion\", \"latest\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities capabilities = new DesiredCapabilities();\ncapabilities.setCapability(\"build\", \"[HyperExecute - 2] Demonstration of the TestNG Framework\");\ncapabilities.setCapability(\"name\", \"[HyperExecute - 2] Demonstration of the TestNG Framework\");\n\ncapabilities.setCapability(\"platform\", System.getenv(\"HYPEREXECUTE_PLATFORM\"));\ncapabilities.setCapability(\"browserName\", browser);\ncapabilities.setCapability(\"version\", version);\n\ncapabilities.setCapability(\"tunnel\",false);\ncapabilities.setCapability(\"network\",true);\ncapabilities.setCapability(\"console\",true);\ncapabilities.setCapability(\"visual\",true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Update the Hub URL and Authentication in the Test Scripts",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n**HyperExecute**\n``` js\n// test.java\npublic static final String user_name = \"LambdaTest_UserName\";\npublic static final String access_key = \"LambdaTest_AccessKey\";"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Update the Hub URL and Authentication in the Test Scripts",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "**<BrandName />**\n``` js\n// test.java\npublic static final String Hub_URL = \"https://\" + user_name + \":\" + access_key + \"@hub.lambdatest.com/wd/hub\";"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Steps to Migrate",
      "description": "To migrate your Test from Sauce Labs to HyperExecute, you need to follow the below mentioned steps: For demonstration purposes, we'll be using Selenium with the TestNG framework in our examples.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Create your account in HyperExecute",
          "text": "Before starting the migration process, make sure you have created your account in HyperExecute and that you have also configured your HyperExecute UserName and Access Key.",
          "url": "https://www.testmuai.com/support/docs/saucelabs-to-hyperexecute-migrate/#step-1-create-your-account-in-hyperexecute"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure CLI and Environment Variables",
          "text": "Since we will be performing the test from our local system, thus in order to initiate a test execution Job, you are required to download HyperExecute CLI and set the environment variable. The HyperExecute CLI is used for triggering tests on HyperExecute. It is recommended to download the CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below: Run the below mentioned commands in the terminal to setup the CLI and the environment variables. For macOS / Linux: For Windows:",
          "url": "https://www.testmuai.com/support/docs/saucelabs-to-hyperexecute-migrate/#step-2-configure-cli-and-environment-variables"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure and Update your Test Scripts",
          "text": "Add the HyperExecute YAML file in the root folder of your test code repository. Sample YAML File Replace the Sauce Labs Hooks with TestMu AI Hooks (if required). Update the Sauce Labs Dependencies and Capabilities. Sauce Labs HyperExecute For a Java-based implementation, here are the changes in the script as far as the authentication stage is concerned: Sauce Labs HyperExecute For a Java-based implementation, here are the changes in the script as far as the Hub URL is concerned: Sauce Labs TestMu AI",
          "url": "https://www.testmuai.com/support/docs/saucelabs-to-hyperexecute-migrate/#step-3-configure-and-update-your-test-scripts"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Execute your Job in HyperExecute",
          "text": "Run the below command in your downloaded CLI to trigger your test scripts in the HyperExecute Platform. {./hyperexecute --user ${ YOURLAMBDATESTUSERNAME()} --key ${ YOURLAMBDATESTACCESSKEY()} --config RELATIVEPATHOFYOURYAMLFILE } In case of MAC, if you get a permission denied warning while executing CLI, simply run chmod u+x ./hyperexecute to allow permission. In case you get a security popup, allow it from your System Preferences \u2192 Security & Privacy \u2192 General tab. Here is the output in the HyperExecute Dashboard.",
          "url": "https://www.testmuai.com/support/docs/saucelabs-to-hyperexecute-migrate/#step-4-execute-your-job-in-hyperexecute"
        }
      ]
    }
  ]) }}
/>

# Migrate from SauceLabs to HyperExecute

## Overview

Sauce Labs and HyperExecute are both cloud-based testing platforms that provide a wide range of browsers and devices for running automated tests. However, HyperExecute provides you with a variety of [features](/support/docs/key-features-of-hyperexecute) to help you manage and analyze your test results more easily and efficiently.

By making the switch to HyperExecute, you're not just migrating; you're upgrading your entire testing experience. This document ensures that you have all the information required for a successful migration. Whether you're driven by cost-efficiency, scalability, performance, or advanced features, HyperExecute is the perfect choice for your automated testing needs.

<!-- caters to the needs of product managers, new users, and experienced developers, -->

## Why Migrate to HyperExecute?

There are several benefits to migrating your tests from Sauce Labs to HyperExecute, including:

- **High Speed, High-Quality Testing :** HyperExecute is renowned for its fast and reliable performance. Realize shorter test cycles and quicker feedback, enabling you to deliver high-quality applications at lightning speed.

- **Test Orchestration :** HyperExecute is a cloud-based Test Orchestration platform that enables teams to run tests efficiently across multiple devices and browsers, featuring parallel execution, smart test distribution, automatic test reordering, retry logic, and real-time reporting and analytics.

- **Cost-Efficiency :** HyperExecute doesn't just offer superior [features](/support/docs/key-features-of-hyperexecute); it's also cost-effective. By reducing testing time and enhancing productivity, you can optimize your testing budget, allocating resources to other critical areas of your project.

- **Seamless Integration :** HyperExecute provides out-of-the-box support for popular tools such as [Tosca](/support/docs/tosca-integration-with-hyperexecute/), [Katalon](/support/docs/katalon-integration-with-hyperexecute/), and [ACCELQ](/support/docs/hyperexecute-accelq-integration/). This means you can effortlessly integrate your testing workflow with your preferred tools, streamlining your testing processes.

- **CI/CD Tools :** We offer robust support for [CI/CD](/support/docs/hyperexecute-integration-with-ci-cd-tools/) tools, allowing you to automate testing and release processes seamlessly, resulting in faster software delivery.

## Steps to Migrate

To migrate your Test from Sauce Labs to HyperExecute, you need to follow the below mentioned steps:

> For demonstration purposes, we'll be using Selenium with the TestNG framework in our examples.

### Step 1: Create your account in HyperExecute

Before starting the migration process, make sure you have created your account in [HyperExecute](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/) and that you have also configured your HyperExecute [UserName and Access Key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/).

### Step 2: Configure CLI and Environment Variables

Since we will be performing the test from our local system, thus in order to initiate a test execution Job, you are required to download HyperExecute [CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) and set the environment variable.

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommended to download the CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

For macOS / Linux:

<VerifiedTag value="Verified" />

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Windows:

<VerifiedTag value="Verified" />

```bash
set LT_USERNAME=YOUR_LT_USERNAME
set LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

### Step 3: Configure and Update your Test Scripts

- Add the [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/) file in the root folder of your test code repository.

**Sample YAML File**

<VerifiedTag value="Verified" />

```yaml
---
version: 0.2
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: win

autosplit: true
retryOnFailure: true

maxRetries: 1
concurrency: 4
shell: bash
env:
  # PAT: ${{ .secrets.testKey }}
  CACHE_DIR: m2_cache_dir

cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - .m2

pre:
  # Skip execution of the tests in the pre step
  - mvn -Dmaven.repo.local=./.m2 dependency:resolve

post:
  - ls target/surefire-reports/

mergeArtifacts: true


uploadArtefacts:
 - name: ExecutionSnapshots
   path:
    - target/surefire-reports/html/**

report: true
partialReports:
  location: target/surefire-reports/html
  type: html
  frameworkName: extent

framework:
  name: maven/testng
  defaultReports: false
  flags:
    - "-Dplatname=mac"

jobLabel: [selenium-testng, mac, autosplit, migration]

```

- Replace the Sauce Labs Hooks with [<BrandName /> Hooks](/support/docs/lambda-hooks/) (if required). 
- Update the Sauce Labs Dependencies and Capabilities.

**Sauce Labs** 

```java
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("username", System.getenv("SAUCE_USERNAME"));
sauceOptions.setCapability("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
sauceOptions.setCapability("name", method.getName());
sauceOptions.setCapability("browserVersion", "latest");
```

**HyperExecute**

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build", "[HyperExecute - 2] Demonstration of the TestNG Framework");
capabilities.setCapability("name", "[HyperExecute - 2] Demonstration of the TestNG Framework");

capabilities.setCapability("platform", System.getenv("HYPEREXECUTE_PLATFORM"));
capabilities.setCapability("browserName", browser);
capabilities.setCapability("version", version);

capabilities.setCapability("tunnel",false);
capabilities.setCapability("network",true);
capabilities.setCapability("console",true);
capabilities.setCapability("visual",true);
```

#### Update the **Hub URL** and **Authentication** in the Test Scripts

For a Java-based implementation, here are the changes in the script as far as the authentication stage is concerned:

**Sauce Labs** 
``` js
// test.java
public static final String user_name = "SauceLabs_UserName";
public static final String access_key = "SauceLabs_AccessKey";
```

**HyperExecute**
``` js
// test.java
public static final String user_name = "LambdaTest_UserName";
public static final String access_key = "LambdaTest_AccessKey";
```

For a Java-based implementation, here are the changes in the script as far as the Hub URL is concerned:

**Sauce Labs**
``` js
// test.java
public static final String Hub_URL = "https://" + user_name + ":" + access_key + "@ondemand.us-west-1.saucelabs.com:443/wd/hub";
```
**<BrandName />**
``` js
// test.java
public static final String Hub_URL = "https://" + user_name + ":" + access_key + "@hub.lambdatest.com/wd/hub";
```

### Step 4: Execute your Job in HyperExecute

Run the below command in your downloaded CLI to trigger your test scripts in the HyperExecute Platform.

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

> In case of MAC, if you get a permission denied warning while executing CLI, simply run `chmod u+x ./hyperexecute` to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Here is the output in the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs).

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/sl_hyp_migration/1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Troubleshooting

If you are having trouble migrating your tests from Sauce Labs to HyperExecute, here are some possible solutions:

- #### You may not have updated your Test Scripts.

  To fix this, you will need to replace the Sauce Labs specific code with the equivalent HyperExecute code. You can use the [HyperExecute Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to help you generate the correct desired capabilities for your tests.

- #### Your Job is executed, but you are getting an error in the HyperExecute Dashboard.

  To fix this, you can check the [documentation](/support/docs/hyperexecute-how-to-debug-job/) explaining how you can debug a failed job on your own.

> If you are still having trouble migrating your tests, you can contact <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**HyperExecute 24×7 Chat Support**</span>  or you can also drop a mail to **support@testmuai.com**.<br /> for assistance.
