---
id: playwright-real-device-on-hyperexecute
title: Running Playwright Real Device Tests on HyperExecute
hide_title: false
sidebar_label: Real Device
description: Learn how to run playwright automation tests using Real Devices on HyperExecute
keywords:
    - hyperexecute
    - hyperexecute testing
    - real devices
    - playwright
    - playwright test
    - playwright hyperexecute
    - real device playwright
    - real device test
url: https://www.testmuai.com/support/docs/playwright-real-device-on-hyperexecute/
site_name: TestMu AI
slug: playwright-real-device-on-hyperexecute/
canonical: https://www.testmuai.com/support/docs/playwright-real-device-on-hyperexecute/
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
          "name": "How to run playwright real deices automation tests on HyperExecute",
          "item": `${BRAND_URL}/support/docs/playwright-real-device-on-hyperexecute/`
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
      "@id": "https://www.testmuai.com/support/docs/playwright-real-device-on-hyperexecute/"
    },
    "headline": "Running Playwright Real Device Tests on HyperExecute",
    "description": "Learn how to run playwright automation tests using Real Devices on HyperExecute",
    "url": "https://www.testmuai.com/support/docs/playwright-real-device-on-hyperexecute/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "hyperexecute",
      "hyperexecute testing",
      "real devices"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key; HyperExecute YAML file with the test configuration.; HyperExecute CLI in order to initiate a test execution Job ..",
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
        "name": "Configure Desired Capabilities (Android)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample",
        "text": "  <\/TabItem>\n\n  <TabItem value=\"ios\" label=\"iOS\" default>\n    ```javascript title=\"playwright-ios-real-device.js\" reference\n    https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/playwright-ios-real-device.js"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Configure the CDP URL",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample",
        "text": "\n## Step 2: Download the CLI in your Project\nThe CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the project to execute the tests on HyperExecute.\n\nYou can download the CLI for your desired platform from the below mentioned links:\n\n| Host Machine | HyperExecute CLI |\n| ---------| ---------------- |\n| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |\n| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |\n| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |\n\n## Step 3: Configure YAML in your Test Suite\nUse the sample YAML below to configure your execution:\n\n<Tabs className=\"docs__val\">\n  <TabItem value=\"android\" label=\"Android\" default>\n    ```yaml title=\"hyperexecute_android.yaml\" reference\n    https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/hyperexecute_android.yaml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure YAML in your Test Suite (iOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "  <\/TabItem>\n<\/Tabs>\n\n:::info\nTo Run test on Mobile Containers in a Particular Region\n\n```yaml title=\"hyperexecute.yaml\"\ndynamicAllocation: true\n\nframework:\n  name: appium\n  args:\n    playwrightRD : true\n    region: ap       # supported regions -> ap, eu, us \n    reservation: false"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The playwright-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "playwright-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Playwright Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/playwright-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/playwright-skill .cursor/skills/"
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
      "name": "Running Playwright Real Device Tests on HyperExecute",
      "description": "Learn how to run playwright automation tests using Real Devices on HyperExecute",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Set Up Your Test Project",
          "text": "You can use your own Playwright project or try the sample repo:. For demo purposes, we are using the sample repository. Download or Clone the code sample for the Playwright Real Device from the TestMu AI GitHub repository to run the tests on the HyperExecute. Update your test configuration with the required capabilities. You can also use dev and beta browser versions. To generate capabilities for your test requirements, you can use our inbuilt \ud83d\udd17 Capabilities Generator. You will have to update the CDP (Chrome DevTools Protocol) URL which is a protocol used for communication between the browser and the developer tools.",
          "url": "https://www.testmuai.com/support/docs/playwright-real-device-on-hyperexecute/#step-1-set-up-your-test-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Download the CLI in your Project",
          "text": "The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the project to execute the tests on HyperExecute. You can download the CLI for your desired platform from the below mentioned links:",
          "url": "https://www.testmuai.com/support/docs/playwright-real-device-on-hyperexecute/#step-2-download-the-cli-in-your-project"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure YAML in your Test Suite",
          "text": "Use the sample YAML below to configure your execution: To Run test on Mobile Containers in a Particular Region If reservation : false, it means that it will allocate the device from any region. If you want to allocate the device of any specific region, keep the reservation : true.",
          "url": "https://www.testmuai.com/support/docs/playwright-real-device-on-hyperexecute/#step-3-configure-yaml-in-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Execute your Test Suite",
          "text": "NOTE : In case of MacOS, if you get a permission denied warning while executing CLI, simply run chmod u+x ./hyperexecute to allow permission. In case you get a security popup, allow it from your System Preferences \u2192 Security & Privacy \u2192 General tab. Run the below command in your terminal at the root folder of the project: {./hyperexecute --user ${ YOURLAMBDATESTUSERNAME()} --key ${ YOURLAMBDATESTACCESSKEY()} --config RELATIVEPATHOFYOURYAMLFILE }",
          "url": "https://www.testmuai.com/support/docs/playwright-real-device-on-hyperexecute/#step-4-execute-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Monitor the Test Execution",
          "text": "Visit the HyperExecute Dashboard and check your Job status.",
          "url": "https://www.testmuai.com/support/docs/playwright-real-device-on-hyperexecute/#step-5-monitor-the-test-execution"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Download Artifacts and Reports",
          "text": "HyperExecute also facilitates the provision to download the Artifacts and Reports on your local machine. Click on the corresponding button to download your generated artifacts and reports.",
          "url": "https://www.testmuai.com/support/docs/playwright-real-device-on-hyperexecute/#step-6-download-artifacts-and-reports"
        }
      ]
    }
  ]) }}
/>
This guide explains how to run your **Playwright** tests on **Real devices (Android and iOS)**  using HyperExecute:

## Prerequisites
Before running your tests, ensure you have:

- Your <BrandName /> [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file with the test configuration.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .

## Step 1: Set Up Your Test Project
You can use your own Playwright project or try the sample repo:. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the Playwright Real Device from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Configure Desired Capabilities
Update your test configuration with the required capabilities.

<Tabs className="docs__val">
  <TabItem value="android" label="Android" default>
    ```javascript title="playwright-android-real-device.js" reference
    https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/playwright-android-real-device.js
    ```
  </TabItem>

  <TabItem value="ios" label="iOS" default>
    ```javascript title="playwright-ios-real-device.js" reference
    https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/playwright-ios-real-device.js
    ```
  </TabItem>
</Tabs>

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator</a>.

### Configure the CDP URL
You will have to update the **CDP (Chrome DevTools Protocol) URL** which is a protocol used for communication between the browser and the developer tools.

```javascript title="playwright-ios-real-device.js"
const browser = await chromium.connect({
  wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
})
```

## Step 2: Download the CLI in your Project
The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the project to execute the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Host Machine | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

## Step 3: Configure YAML in your Test Suite
Use the sample YAML below to configure your execution:

<VerifiedTag value="Verified" />

<Tabs className="docs__val">
  <TabItem value="android" label="Android" default>
    ```yaml title="hyperexecute_android.yaml" reference
    https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/hyperexecute_android.yaml
    ```
  </TabItem>

  <TabItem value="ios" label="iOS" default>
    ```yaml title="hyperexecute_ios.yaml" reference
    https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/hyperexecute_ios.yaml
    ```
  </TabItem>
</Tabs>

:::info
To Run test on Mobile Containers in a Particular Region

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
dynamicAllocation: true

framework:
  name: appium
  args:
    playwrightRD : true
    region: ap       # supported regions -> ap, eu, us 
    reservation: false
```
- If **`reservation : false`**, it means that it will allocate the device from any region. If you want to allocate the device of any specific region, keep the **`reservation : true`**.
:::

## Step 4: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

## Step 5: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/playwright/real-device/3.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Step 6: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/playwright/real-device/4.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>


## Using the Playwright Agent Skill with TestMu AI
***

The [playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The playwright-skill package includes:

<VerifiedTag value="Verified" />

```
playwright-skill/
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


### Installing Playwright Agent Skill
***

Install a Playwright Agent Skill using the command below:

<VerifiedTag value="Verified" />

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/playwright-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/playwright-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only playwright-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
