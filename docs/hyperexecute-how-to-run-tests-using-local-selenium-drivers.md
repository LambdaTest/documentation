---
id: hyperexecute-how-to-run-tests-using-local-selenium-drivers
title: Trigger Your Job via Local Selenium Web Driver
hide_title: false
sidebar_label: How to Run Tests on HyperExecute using Local Selenium Web Driver
description: How to Run Tests on HyperExecute using Local Selenium Web Driver
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - How to Get my Username and Access key
url: https://www.testmuai.com/support/docs/hyperexecute-how-to-run-tests-using-local-selenium-drivers/
site_name: TestMu AI
slug: hyperexecute-how-to-run-tests-using-local-selenium-drivers/
canonical: https://www.testmuai.com/support/docs/hyperexecute-how-to-run-tests-using-local-selenium-drivers/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "How to Guides",
          "item": `${BRAND_URL}/support/docs/hyperexecute-how-to-run-tests-using-local-selenium-drivers/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-how-to-run-tests-using-local-selenium-drivers/"
    },
    "headline": "Trigger Your Job via Local Selenium Web Driver",
    "description": "How to Run Tests on HyperExecute using Local Selenium Web Driver",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-run-tests-using-local-selenium-drivers/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
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
        "name": "Step 2: Update YAML Configuration:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "---\nversion: 0.1\nglobalTimeout: 150\ntestSuiteTimeout: 150\ntestSuiteStep: 150\n\nrunson: win\n\nautosplit: true\n\nretryOnFailure: true\nmaxRetries: 1\n\nparallelism: 1\nconcurrency: 1\n\nenv:\n  CACHE_DIR: m2_cache_dir\n\ncacheKey: '{{ checksum \"pom.xml\" }}'\ncacheDirectories:\n  - m2_cache\n\npre:\n  - mvn dependency:resolve\n\nmergeArtifacts: true\nuploadArtefacts:\n - name: ExecutionSnapshots\n   path:\n    - target/surefire-reports/html/**\n\nreport: true\npartialReports:\n  location: target/surefire-reports/html\n  type: html\n  frameworkName: extent\n\ntestDiscovery:\n  type: raw\n  mode: remote\n  command: grep 'test name' xml/testng.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/\\x3e//g'\n\ntestRunnerCommand: mvn test dependency:resolve\nwinTestRunnerCommand: mvn test dependency:resolve\nmacTestRunnerCommand: mvn test dependency:resolve\nlinuxTestRunnerCommand: mvn test dependency:resolve\n\n#highlight-start\nplatformConfig:\n  platform:\n    - os: win10\n      browserName: chrome\n      browserVersion: latest\n      build: win10\n      network: false\n    - os: win11\n      browserName: chrome\n      goog:chromeOptions:\n        args: [ \"--start-maximized\", \"--disable-gpu\" ]\n    - os: mac\n      browserName: firefox\n      browserVersion: 119\n    - os: linux\n      browserName: firefox\n      browserVersion: 115\n    - os: android\n      deviceName: .*\n      browserName: chrome\n    - os: ios\n      deviceName: .*\n\n  config:\n    build: latest\n    network: true\n    console: true\n#highlight-end"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Trigger Your Tests?",
      "description": "To utilize the native Selenium driver support in HyperExecute, you need to incorporate the following steps into your testing workflow:",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Configure Your Test Suite",
          "text": "You can use your own project to configure and test it. For demo purposes, we are using the sample repository. Download or Clone the code sample for the TestNG from the TestMu AI GitHub repository to run the tests on the HyperExecute.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-run-tests-using-local-selenium-drivers/#step-1-configure-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Update YAML Configuration:",
          "text": "Add the platformConfig flag to your YAML file, specifying the platforms and configurations for your tests. Use the platform flag to define individual platform configurations (OS, browser/device, capabilities). (Optional) Utilize the config flag to set global capabilities applicable to all platforms. For operating system win, mac, and linux, only the os flag is mandatory, rest are optional. For operating system android and ios, the os and deviceName flags are mandatory, rest are optional. In the above sample YAML file, we have passed parallelism = 1 and total number of platforms = 6 The number of tasks created = (total number of platforms) (parallelism)** = 6 tasks 1 windows 10 with Chrome Browser 1 windows 11 with Chrome browser 1 mac with Firefox browser 1 android with any device (we have not specified device name) 1 ios with any device (we have not specified device name) You can also use dev and beta browser versions. To generate capabilities for your test requirements, you can use our inbuilt \ud83d\udd17 Capabilities Generator.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-run-tests-using-local-selenium-drivers/#step-2-update-yaml-configuration"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Run Your Tests:",
          "text": "Execute your tests as usual through your test framework (e.g., JUnit, TestNG). HyperExecute automatically intercepts Selenium commands and routes them to its platform. {./hyperexecute --user ${ YOURLAMBDATESTUSERNAME()} --key ${ YOURLAMBDATESTACCESSKEY()} --config RELATIVEPATHOFYOURYAMLFILE }",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-run-tests-using-local-selenium-drivers/#step-3-run-your-tests"
        }
      ]
    }
  ]) }}
/>

As a tester, whenever you switch from local web driver to remote web driver can be a tedious and time-consuming process. You will have to manually modify your tests which includes adding Desired Capabilities, and adjusting code just to get them running on a cloud testing platform. 

HyperExecute's support for **Local Selenium Driver** allows you to seamlessly run your tests on our platform with very minimal changes. It will help you in

- **Reduce Onboarding Time :** You can skip the manual code changes and configuration associated with remote web drivers, and accelerate your integration with HyperExecute.
- **Minimal Code Refactoring :** You can now maintain your existing test code, without worrying about the need for significant modifications.
- **Seamless Platform Transitions :** You can run both web and mobile tests (using Selenium and Appium) without platform-specific changes.

## How to Trigger Your Tests?

To utilize the native Selenium driver support in HyperExecute, you need to incorporate the following steps into your testing workflow:

### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the TestNG from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/testng-selenium-hyperexecute-sample/tree/localdriver" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Update YAML Configuration:

- Add the `platformConfig` flag to your YAML file, specifying the platforms and configurations for your tests.
- Use the `platform` flag to define individual platform configurations (OS, browser/device, capabilities).
- **(Optional)** Utilize the `config` flag to set global capabilities applicable to all platforms.

<VerifiedTag value="Verified" />

```yaml
---
version: 0.1
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: win

autosplit: true

retryOnFailure: true
maxRetries: 1

parallelism: 1
concurrency: 1

env:
  CACHE_DIR: m2_cache_dir

cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - m2_cache

pre:
  - mvn dependency:resolve

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

testDiscovery:
  type: raw
  mode: remote
  command: grep 'test name' xml/testng.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/\x3e//g'

testRunnerCommand: mvn test dependency:resolve
winTestRunnerCommand: mvn test dependency:resolve
macTestRunnerCommand: mvn test dependency:resolve
linuxTestRunnerCommand: mvn test dependency:resolve

#highlight-start
platformConfig:
  platform:
    - os: win10
      browserName: chrome
      browserVersion: latest
      build: win10
      network: false
    - os: win11
      browserName: chrome
      goog:chromeOptions:
        args: [ "--start-maximized", "--disable-gpu" ]
    - os: mac
      browserName: firefox
      browserVersion: 119
    - os: linux
      browserName: firefox
      browserVersion: 115
    - os: android
      deviceName: .*
      browserName: chrome
    - os: ios
      deviceName: .*

  config:
    build: latest
    network: true
    console: true
#highlight-end
```

:::info
- For operating system **win, mac,** and **linux**, only the **os** flag is mandatory, rest are optional.
- For operating system **android** and **ios**, the **os** and **deviceName** flags are mandatory, rest are optional.
:::

In the above sample YAML file, we have passed **parallelism = 1** and **total number of platforms = 6**

The number of tasks created = **(total number of platforms) * (parallelism)** = 6 tasks

- 1 windows 10 with Chrome Browser
- 1 windows 11 with Chrome browser
- 1 mac with Firefox browser
- 1 android with any device (we have not specified device name)
- 1 ios with any device (we have not specified device name)

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/how-to-guide/local-driver-os.png').default} alt="Image"  className="doc_img"/>

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator</a>.

### Step 3: Run Your Tests:

- Execute your tests as usual through your test framework (e.g., JUnit, TestNG).
- HyperExecute automatically intercepts Selenium commands and routes them to its platform.

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/how-to-guide/local-web-driver.png').default} alt="Image"  className="doc_img"/>

## Priority Mapping of Capability Selection

HyperExecute follows a specific priority order when selecting capabilities. The capabilities added in the `config` flag are **global** and applicable to all the platforms.

So in the above example, `network:true` capability is applied to all the platform configurations but in the case of **platform win10-chrome** network capabilities will be set as `false`.

| Script Config | YAML `config` | YAML `platform` | Final Status |
|---------------|-------------|-------------|--------------|
|`"console": info` | `"console": debug` | `"console": warning` | `"console": warning` |
|`"console": info` | `"console": debug` | NA | `"console": debug` |
|`"console": debug` | NA | `"console": debug` | `"console": debug` |
| NA | `"console": debug` | `"console": warning` | `"console": warning` |

## Considerations and Constraints

While HyperExecute's native Selenium driver support offers significant advantages, it's essential to note the following constraints:

- If you are using **IEDriver** in your scripts, the tests won’t be run on any platform beside **Windows 10**
- Currently **SafariDriver** is not compatible with the following feature.
- Scripts with hardcoded paths for Selenium drivers may require minor adjustments.
- Support for **AndroidDriver** is not yet available; however, **Chromedriver** can be used for Appium testing.
