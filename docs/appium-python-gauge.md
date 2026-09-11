---
id: appium-python-gauge
title: Appium with Gauge
sidebar_label: Gauge
description: Complete guide to running your first Gauge Appium automated test script on TestMu AI Real Device Cloud Platform. Test on 5000+ Real Devices.
keywords:
  - python gauge
  - appium
  - gauge
  - python gauge appium tutorial
  - real devices
  - testmu ai cloud platform
  - app automation
  - real time testing
  - appium automation

url: https://www.testmuai.com/support/docs/appium-python-gauge/
site_name: TestMu AI
slug: appium-python-gauge/
canonical: https://www.testmuai.com/support/docs/appium-python-gauge/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

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
          "name": "Python With Appium",
          "item": `${BRAND_URL}/support/docs/appium-python-gauge/`
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
      "@id": "https://www.testmuai.com/support/docs/appium-python-gauge/"
    },
    "headline": "Appium with Gauge",
    "description": "Complete guide to running your first Gauge Appium automated test script on TestMu AI Real Device Cloud Platform. Test on 5000+ Real Devices.",
    "url": "https://www.testmuai.com/support/docs/appium-python-gauge/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "python gauge",
      "appium",
      "gauge"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key.; You should have Python installed.; Download and install pip..",
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
        "name": "def home()",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Step 5: Configure the Test Capabilities\n\nYou can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.\n\nEnsure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests. The capabilities object in the sample code are defined as:\n\n```python title=\"driver.py\"\ncaps['name'] = 'Gauge Sample Test'\ncaps['build'] = 'Python_Gauge_LambdaTest'\ncaps['isRealMobile'] = 'true'\ncaps['platformVersion'] = '11'\ncaps['platform'] = 'Android'\ncaps['deviceName'] = 'Galaxy S21 Ultra 5G'\n#highlight-next-line\ncaps['app'] = 'APP_URL'   #add app url here\n}\n\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pip install -r requirements.txt\nnpm install -g @getgauge/cli\nset PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python    #for Windows\nexport PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python  #for MacOS/Linux"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "gauge run specs"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The gauge-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "gauge-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Gauge Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/gauge-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/gauge-skill .cursor/skills/"
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
      "name": "Try our Sample Repository",
      "description": "Complete guide to running your first Gauge Appium automated test script on TestMu AI Real Device Cloud Platform. Test on 5000+ Real Devices.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Get a Sample Project",
          "text": "You can use your own project to configure and test it. For demo purposes, we are using the sample repository. All the code samples in this documentation can be found on TestMu AI's Github Repository. You can either download or clone the repository to quickly run your tests. View on GitHub",
          "url": "https://www.testmuai.com/support/docs/appium-python-gauge/#step-1-get-a-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Setup the Environment Variables",
          "text": "You need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in your TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/appium-python-gauge/#step-2-setup-the-environment-variables"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Upload your Application",
          "text": "Upload your iOS application (.ipa file) or android application (.apk or .aab file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format Username:AccessKey in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Below is an example cURL request to upload your app using our REST API: {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"appFile=@\"/Users/macuser/Downloads/proverbialandroid.apk\"\" -F \"name=\"proverbial_app\"\"} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbialandroid.apk\" -F \"name=Proverbial_App\"} If you do not have any .apk or .ipa file, you can run your sample tests on TestMu AI by using our sample apps, :link: Android app or :link: iOS app. Response of above cURL will be a JSON object containing the APP_URL of the format - lt://APP123456789123456789 and will be used in the next step",
          "url": "https://www.testmuai.com/support/docs/appium-python-gauge/#step-3-upload-your-application"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Update your Automation Script",
          "text": "An automation script for the sample application given above has been provided here.",
          "url": "https://www.testmuai.com/support/docs/appium-python-gauge/#step-4-update-your-automation-script"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Configure the Test Capabilities",
          "text": "You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. Ensure to update the APP_URL, username and accessKey in the code scripts before running the tests. The capabilities object in the sample code are defined as: You must add the generated APPURL** to the app capability in the config file. You must set isRealMobile capability to False in the config file to run on Virtual Devices You can generate capabilities for your test requirements with the help of our inbuilt Capabilities Generator tool.For more details, please refer to our guide on Desired Capabilities in Appium.",
          "url": "https://www.testmuai.com/support/docs/appium-python-gauge/#step-5-configure-the-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Execute and Monitor your Tests",
          "text": "Install the required packages from the cloned project directory: Run the following command in the directory where your project has been saved to execute your build. Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the TestMu AI App Automation Dashboard.",
          "url": "https://www.testmuai.com/support/docs/appium-python-gauge/#step-6-execute-and-monitor-your-tests"
        }
      ]
    }
  ]) }}
/>

In this documentation, you will learn how to trigger a automation script of **Gauge** for application testing with **Appium** on <BrandName />, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- You should have [Python](https://www.python.org/downloads/) installed.
- Download and install [**pip**](https://pip.pypa.io/en/stable/installation/).

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-python-gauge" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Setup the Environment Variables

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

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

### Step 3: Upload your Application
Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk or .aab file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

Make sure to add the path of the **appFile** in the cURL request. Below is an example cURL request to upload your app using our REST API:

<Tabs className="docs__val">

<TabItem value="bash" label="App File" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""`}
    </CodeBlock>
  </div>
</TabItem>

<TabItem value="powershell" label="App URL" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"`}
    </CodeBlock>
  </div>
</TabItem>

</Tabs>

:::tip

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on <BrandName /> by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step

:::

### Step 4: Update your Automation Script

An automation script for the sample application given above has been provided here.

```python title="get_started.py"
from sqlite3 import Time
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from getgauge.python import step
from step_impl.utils.driver import Driver

@step("changes color to pink")
def change_color():
  colorElement = WebDriverWait(Driver.driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/color")))
  colorElement.click()

@step("changes the text to Proverbial")
def chnage_text():
    textElement = WebDriverWait(Driver.driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ID, "com.lambdatest.proverbial:id/Text")))
    textElement.click()

@step("toast will be visible")
def toast_visible():
    toastElement = WebDriverWait(Driver.driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/toast")))
    toastElement.click()

@step("notification will be visible")
def notification():
  notification = WebDriverWait(Driver.driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/notification")))
  notification.click()

@step("perform the speed test")
def speedTest():
  speedTest = WebDriverWait(Driver.driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/speedTest")))
  speedTest.click()

@step("back to home")
def home():
  home = WebDriverWait(Driver.driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/buttonPage")))
  home.click()
```

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests. The capabilities object in the sample code are defined as:

```python title="driver.py"
caps['name'] = 'Gauge Sample Test'
caps['build'] = 'Python_Gauge_LambdaTest'
caps['isRealMobile'] = 'true'
caps['platformVersion'] = '11'
caps['platform'] = 'Android'
caps['deviceName'] = 'Galaxy S21 Ultra 5G'
#highlight-next-line
caps['app'] = 'APP_URL'   #add app url here
}


```

:::info
- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).
:::

### Step 6: Execute and Monitor your Tests

- Install the required packages from the cloned project directory:

<VerifiedTag value="Verified" />

```bash
pip install -r requirements.txt
npm install -g @getgauge/cli
set PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python    #for Windows
export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python  #for MacOS/Linux
```

- Run the following command in the directory where your project has been saved to execute your build.

<VerifiedTag value="Verified" />

```bash
gauge run specs
```

> Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [<BrandName /> App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the Gauge Agent Skill with TestMu AI
***

The [gauge-skill](https://github.com/LambdaTest/agent-skills/tree/main/gauge-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The gauge-skill package includes:

<VerifiedTag value="Verified" />

```
gauge-skill/
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


### Installing Gauge Agent Skill
***

Install a Gauge Agent Skill using the command below:

<VerifiedTag value="Verified" />

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/gauge-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/gauge-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only gauge-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).


## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)



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
      Gauge With Appium
</span>
    </li>
  </ul>
</nav>
