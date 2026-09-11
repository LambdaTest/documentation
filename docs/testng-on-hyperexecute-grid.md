---
id: testng-on-hyperexecute-grid
title: Run automation tests on HyperExecute using TestNG
hide_title: true
sidebar_label: TestNG
description: Learn how to run Selenium automation tests on HyperExecute using the TestNG framework
keywords:
  - TestNG
  - TestNG selenium
  - TestNG Java Selenium
  - TestNG automation testing
  - selenium webdriver TestNG
  - selenium TestNG testing tutorial
  - TestNG Java Selenium framework
  - testmu ai TestNG
  - frameworks on testmu ai
  - hyperexecute
  - hyperexecute TestNG testing
  - hyperexecute TestNG testing
  - hyperexecute automation testing
  - HyperExecute Selenium automation
url: https://www.testmuai.com/support/docs/testng-on-hyperexecute-grid/
site_name: TestMu AI
slug: testng-on-hyperexecute-grid/
canonical: https://www.testmuai.com/support/docs/testng-on-hyperexecute-grid/
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
          "name": "How to run automation tests on HyperExecute using TestNG framework",
          "item": `${BRAND_URL}/support/docs/testng-on-hyperexecute-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/testng-on-hyperexecute-grid/"
    },
    "headline": "Run automation tests on HyperExecute using TestNG",
    "description": "Learn how to run Selenium automation tests on HyperExecute using the TestNG framework",
    "url": "https://www.testmuai.com/support/docs/testng-on-hyperexecute-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "TestNG",
      "TestNG selenium",
      "TestNG Java Selenium"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key; HyperExecute YAML file which contains all the necessary instructions.; HyperExecute CLI in order to initiate a test execution Job .; Setup the Environmental Variable.",
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
        "name": "Step 2: Setup Hub Endpoints and Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/testng-selenium-hyperexecute-sample",
        "text": "\n> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt \ud83d\udd17 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator<\/a>.\n\n### Step 2: Setup the CLI in your Test Suite\n\nAfter cloning / downloading the sample repo, you need to setup the CLI and the environment variables.\n\n#### Download the HyperExecute CLI\n\nThe CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.\n\nYou can download the CLI for your desired platform from the below mentioned links:\n\n| Platform | HyperExecute CLI |\n| ---------| ---------------- |\n| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |\n| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |\n| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |\n\n#### Setup Environment Variable\n\nNow, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).\n\nRun the below mentioned commands in your terminal to setup the CLI and the environment variables.\n\nimport Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs className=\"docs__val\">\n\n<TabItem value=\"bash\" label=\"Linux / MacOS\" default>\n\n  <div className=\"lambdatest__codeblock\">\n    <CodeBlock className=\"language-bash\">\n  {`export LT_USERNAME=\"${ YOUR_LAMBDATEST_USERNAME()}\"\nexport LT_ACCESS_KEY=\"${ YOUR_LAMBDATEST_ACCESS_KEY()}\"`}\n  <\/CodeBlock>\n<\/div>\n\n<\/TabItem>\n\n<TabItem value=\"powershell\" label=\"Windows\" default>\n\n  <div className=\"lambdatest__codeblock\">\n    <CodeBlock className=\"language-powershell\">\n  {`set LT_USERNAME=\"${ YOUR_LAMBDATEST_USERNAME()}\"\nset LT_ACCESS_KEY=\"${ YOUR_LAMBDATEST_ACCESS_KEY()}\"`}\n  <\/CodeBlock>\n<\/div>\n\n<\/TabItem>\n<\/Tabs>\n\n### Step 3: Configure YAML in your Test Suite\n\nConfigure your YAML file as per your use cases using **key value** pairs.\n\nIn this sample YAML file, we have mentioned:\n\n- **version** of the YAML file\n- **Timeouts** for executing your project\n- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-auto-split-strategy/). You can also opt for [Matrix](/support/docs/hyperexecute-matrix-multiplexing-strategy/) or [Hybrid](/support/docs/hyperexecute-hybrid-strategy/) mode.\n- **Pre and Post** commands\n- **Reports and Artefacts** that will be generated after the completion of tests\n- and other necessary YAML Parameters\n\n\n```yaml reference title=\"HyperExecute AutoSplit YAML\"\nhttps://github.com/LambdaTest/testng-selenium-hyperexecute-sample/blob/main/yaml/linux/v2/testng_hyperexecute_autosplit_sample.yaml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the below command in your terminal at the root folder of the project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The testng-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "testng-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a TestNG Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/testng-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/testng-skill .cursor/skills/"
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
      "name": "Configure your own Project",
      "description": "Learn how to run Selenium automation tests on HyperExecute using the TestNG framework",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Download the CLI in your Project",
          "text": "Download the HyperExecute CLI and copy it into the root folder .",
          "url": "https://www.testmuai.com/support/docs/testng-on-hyperexecute-grid/#step-1-download-the-cli-in-your-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Setup Hub Endpoints and Capabilities",
          "text": "Update your TestNG test configuration to point to the TestMu AI hub and set capabilities as needed: You can also use dev and beta browser versions. To generate capabilities for your test requirements, you can use our inbuilt \ud83d\udd17 Capabilities Generator.",
          "url": "https://www.testmuai.com/support/docs/testng-on-hyperexecute-grid/#step-2-setup-hub-endpoints-and-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 2: Setup the CLI in your Test Suite",
          "text": "After cloning / downloading the sample repo, you need to setup the CLI and the environment variables. The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute. You can download the CLI for your desired platform from the below mentioned links: Now, you need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in the TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the CLI and the environment variables. import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/testng-on-hyperexecute-grid/#step-2-setup-the-cli-in-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 3: Configure YAML in your Test Suite",
          "text": "Configure your YAML file as per your use cases using key value pairs. In this sample YAML file, we have mentioned: version of the YAML file Timeouts for executing your project Mode of execution is Autosplit. You can also opt for Matrix or Hybrid mode. Pre and Post commands Reports and Artefacts that will be generated after the completion of tests and other necessary YAML Parameters",
          "url": "https://www.testmuai.com/support/docs/testng-on-hyperexecute-grid/#step-3-configure-yaml-in-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 4: Execute your Test Suite",
          "text": "NOTE : In case of MacOS, if you get a permission denied warning while executing CLI, simply run chmod u+x ./hyperexecute to allow permission. In case you get a security popup, allow it from your System Preferences \u2192 Security & Privacy \u2192 General tab. Run the below command in your terminal at the root folder of the project: OR use this command if you have not exported your username and access key in the step 2. {./hyperexecute --user ${ YOURLAMBDATESTUSERNAME()} --key ${ YOURLAMBDATESTACCESSKEY()} --config RELATIVEPATHOFYOURYAMLFILE }",
          "url": "https://www.testmuai.com/support/docs/testng-on-hyperexecute-grid/#step-4-execute-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 5: Monitor the Test Execution",
          "text": "Visit the HyperExecute Dashboard and check your Job status.",
          "url": "https://www.testmuai.com/support/docs/testng-on-hyperexecute-grid/#step-5-monitor-the-test-execution"
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Step 6: Download Artifacts and Reports",
          "text": "HyperExecute also facilitates the provision to download the Artifacts and Reports on your local machine. Click on the corresponding button to download your generated artifacts and reports.",
          "url": "https://www.testmuai.com/support/docs/testng-on-hyperexecute-grid/#step-6-download-artifacts-and-reports"
        }
      ]
    }
  ]) }}
/>

# Running TestNG Framework Tests on HyperExecute
TestNG is a widely-used testing framework for Java applications, designed to simplify and enhance the testing process for developers. It provides a flexible and powerful platform for running test suites, enabling effective unit testing, integration testing, and end-to-end testing of Java applications

HyperExecute is an AI Native Test Orchestration Cloud Platform that empowers you to run **end-to-end** tests **quickly** and **efficiently**. It provides Just-in-Time (JIT) testing infrastructure with fast execution **speeds**, **smart orchestration**, and **detailed logs**.

This guide details how to execute your **TestNG** framework tests on **HyperExecute** using [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/) via two different methods:

- [**Using Local System**](/support/docs/testng-on-hyperexecute-grid/#1-testing-using-local-system) - You can use your own local machine to execute tests.
- [**Using Gitpod Platform**](/support/docs/testng-on-hyperexecute-grid/#2-testing-using-gitpod) -  Execute tests using GitPod. (Requires a [Gitpod](https://gitpod.io/login/) account)

## 1. Testing Using Local System

Follow the step-by-step guide to execute your test on HyperExecute.

### Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your <BrandName /> [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)

### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the TestNG from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/testng-selenium-hyperexecute-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

If you are using your own project, make sure you update the **Hub endpoint** in your tests file.

By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.


<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config hyperexecute.yaml`}
  </CodeBlock>
</div>

> **NOTE :** In case of macOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/cmd_1.png').default} alt="TestNG HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/cmd_2.png').default} alt="TestNG HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

<br /><br />

🎉 Congratulations! You've successfully triggered the TestNG tests on HyperExecute. Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/testng_autosplit_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Configure your own Project

### Step 1: Download the CLI in your Project
Download the HyperExecute CLI and copy it into the root folder  .

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

### Step 2: Setup Hub Endpoints and Capabilities
Update your TestNG test configuration to point to the <BrandName /> hub and set capabilities as needed:

```java title="test.java"
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("version", "70.0");
capabilities.setCapability("platform", "win10"); # If this cap isn't specified, it will just get the any available one
capabilities.setCapability("build", "TestMu AI SampleApp");
capabilities.setCapability("name", "TestMu AI JavaSample");
```

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator</a>.

### Step 2: Setup the CLI in your Test Suite

After cloning / downloading the sample repo, you need to setup the CLI and the environment variables.

#### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

### Step 3: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-auto-split-strategy/). You can also opt for [Matrix](/support/docs/hyperexecute-matrix-multiplexing-strategy/) or [Hybrid](/support/docs/hyperexecute-hybrid-strategy/) mode.
- **Pre and Post** commands
- **Reports and Artefacts** that will be generated after the completion of tests
- and other necessary YAML Parameters


<VerifiedTag value="Verified" />

```yaml reference title="HyperExecute AutoSplit YAML"
https://github.com/LambdaTest/testng-selenium-hyperexecute-sample/blob/main/yaml/linux/v2/testng_hyperexecute_autosplit_sample.yaml
```

### Step 4: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

<VerifiedTag value="Verified" />

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>


<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/cmd_1.png').default} alt="TestNG HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/cmd_2.png').default} alt="TestNG HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

### Step 5: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/testng_autosplit_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

### Step 6: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/testng_autosplit_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## 2. Testing Using Gitpod

You can also use the Gitpod platform to execute our sample repository. It will fetch all the sample codebases and trigger the CLI to execute the tests.

Follow the below steps to run Test using Gitpod:

**Step 1:**  Click '**Open in Gitpod**' button. You will be redirected to Login/Signup page. This button is configured to redirect you to the Gitpod platform where you will be able to execute our sample repository.

[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=Selenium&framework=TestNG)

**Step 2:** Login with <BrandName /> credentials. Once logged in, a pop-up confirmation will appear, asking you to **'Proceed'** to the Gitpod editor in a new tab. The current tab will display the HyperExecute Dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>

**Step 3:** Choose your preferred editor (we recommend VS Code Editor)

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_config.png').default} alt="Image"  className="doc_img"/>

**Step 4:**  As you are running a sample project, Fetching of the Test Scripts, [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/), [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) and Triggering your tests using the `Execution Command` will be automated. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod2.png').default} alt="Image"  className="doc_img"/>

**Step 5:**  Once you see the `Job Link` in the logs, you can visit the [HyperExecute dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) to see the tests getting executed.

:::tip

You can also implement [Secret Keys](/support/docs/hyperexecute-how-to-save-and-manage-secrets/) in your YAML file.
:::

## Navigation in Automation Dashboard

Every test run on the HyperExecute has a unique *jobId* associated with it. Each *jobId* can in turn constitute single (or multiple) *groupId*(s). You can visit [HyperExecute Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) for checking the status of the test execution.

You can seamlessly navigate between JobId's and taskId's. You need to click on the *testID* to navigate from the HyperExecute logs to the Automation Dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/dashboard2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

The snapshot below shows the videos, logs and other meta data for that specific *test_ID*

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/testng_artifacts_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

> For any query or doubt, please feel free to contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@testmuai.com**.<br />



## Using the TestNG Agent Skill with TestMu AI
***

The [testng-skill](https://github.com/LambdaTest/agent-skills/tree/main/testng-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The testng-skill package includes:

<VerifiedTag value="Verified" />

```
testng-skill/
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


### Installing TestNG Agent Skill
***

Install a TestNG Agent Skill using the command below:

<VerifiedTag value="Verified" />

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/testng-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/testng-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only testng-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

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
      Run TestNG tests on HyperExecute
      </span>
    </li>
  </ul>
</nav>
