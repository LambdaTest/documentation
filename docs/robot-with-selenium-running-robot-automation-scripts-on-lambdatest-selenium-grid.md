---
id: robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid
title: Selenium With Robot Framework
sidebar_label: Robot
description: Run Robot Framework Selenium tests on TestMu AI cloud grid with 10,000+ browser/device combinations. Setup, config, and parallel execution included.
keywords:
  - robot framework selenium testing
  - run robot tests on cloud grid
  - robot framework automation cloud
  - selenium webdriver robot framework
  - cross browser testing robot
  - robot framework parallel testing
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Selenium With Robot Framework",
          "item": `${BRAND_URL}/support/docs/robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With Robot Framework",
    "description": "Run Robot Framework Selenium tests on TestMu AI cloud grid with 10,000+ browser/device combinations. Setup, config, and parallel execution included.",
    "url": "https://www.testmuai.com/support/docs/robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "robot framework selenium testing",
      "run robot tests on cloud grid",
      "robot framework automation cloud"
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
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pip install virtualenv"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Clone the Sample Project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Robot-Selenium-Sample",
        "text": "git clone https://github.com/LambdaTest/Robot-Selenium-Sample\ncd Robot-Selenium-Sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Create a virtual environment and activate it",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "virtualenv venv\nsource venv/bin/activate"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the required packages",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pip install -r requirements.txt"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure Your Test Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "*** Settings ***\nLibrary  Selenium2Library\n \n*** Variables ***\n \n@{_tmp}\n    ...  browserName: %{browserName},\n    ...  platformName: %{platform},\n    ...  browserVersion: %{version},\n    ...  name: RobotFramework Lambda Test\n \n${BROWSER}          %{ROBOT_BROWSER}\n${CAPABILITIES}     ${EMPTY.join(${_tmp})}\n${KEY}              <YOUR_LAMBDATEST_USERNAME>:<YOUR LAMBDATEST ACCESS KEY>\n${REMOTE_URL}       https://${KEY}@hub.lambdatest.com/wd/hub\n \n \n*** Keywords ***\n \nOpen test browser\n    Open browser  https://lambdatest.github.io/sample-todo-app/  browser=${BROWSER}\n    ...  remote_url=${REMOTE_URL}\n    ...  desired_capabilities=${CAPABILITIES}\n \nClose test browser\n    Close all browsers"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "make test_Windows_10_chrome_latest"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To run parallel tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "make run_all_in_parallel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the skill",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/robot-framework-skill .claude/skills/\n\n# For Cursor / Copilot\ncp -r agent-skills/robot-framework-skill .cursor/skills/"
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
      "name": "Selenium With Robot Framework",
      "description": "Run Robot Framework Selenium tests on TestMu AI cloud grid with 10,000+ browser/device combinations. Setup, config, and parallel execution included.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Clone the Sample Project",
          "text": "Clone the repository and set up the environment. Create a virtual environment and activate it: Install the required packages:",
          "url": "https://www.testmuai.com/support/docs/robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid/#step-1-clone-the-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set Your Credentials",
          "text": "Configure your credentials to connect to the TestMu AI Selenium Grid. Set TestMu AI Username and Access Key in environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid/#step-2-set-your-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure Your Test Capabilities",
          "text": "Define browser, version, and OS settings for your test run. Here is common.robot file to setup mandatory details to run at TestMu AI. Use the TestMu AI Capabilities Generator to auto-generate the capabilities class for your test requirements.",
          "url": "https://www.testmuai.com/support/docs/robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid/#step-3-configure-your-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run the Test",
          "text": "Execute the Robot Framework test from the command line. To run parallel tests:",
          "url": "https://www.testmuai.com/support/docs/robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid/#step-4-run-the-test"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: View Your Results",
          "text": "Check the test output on the console and the TestMu AI dashboard. Visit the TestMu AI Automation Dashboard to view your test results. The dashboard provides: Text logs for each test step Screenshots captured during execution Video recordings of the full test session",
          "url": "https://www.testmuai.com/support/docs/robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid/#step-5-view-your-results"
        }
      ]
    }
  ]) }}
/>

---

Run Robot Framework tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/Robot-Selenium-Sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete these steps before running your first Robot Framework Selenium test.

1. Install the latest Python build from the [official website](https://www.python.org/downloads/).
2. Verify that **pip** is installed in your system. Install **pip** from [official pip documentation](https://pip.pypa.io/en/stable/installation/).
3. Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/).
4. Install **virtualenv** to isolate the build from other setups and ensure tests run with the specified module versions.
```bash
pip install virtualenv
```

## Step 1: Clone the Sample Project
---
Clone the repository and set up the environment.

```bash
git clone https://github.com/LambdaTest/Robot-Selenium-Sample
cd Robot-Selenium-Sample
```

Create a virtual environment and activate it:
```bash
virtualenv venv
source venv/bin/activate
```

Install the required packages:
```bash
pip install -r requirements.txt
```

## Step 2: Set Your Credentials
---
Configure your credentials to connect to the TestMu AI Selenium Grid.

Set TestMu AI `Username` and `Access Key` in environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="macOS / Linux" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 3: Configure Your Test Capabilities
---
Define browser, version, and OS settings for your test run.

Here is `common.robot` file to setup mandatory details to run at TestMu AI.

<VerifiedTag value="Verified" />

```python
*** Settings ***
Library  Selenium2Library
 
*** Variables ***
 
@{_tmp}
    ...  browserName: %{browserName},
    ...  platformName: %{platform},
    ...  browserVersion: %{version},
    ...  name: RobotFramework Lambda Test
 
${BROWSER}          %{ROBOT_BROWSER}
${CAPABILITIES}     ${EMPTY.join(${_tmp})}
${KEY}              <YOUR_LAMBDATEST_USERNAME>:<YOUR LAMBDATEST ACCESS KEY>
${REMOTE_URL}       https://${KEY}@hub.lambdatest.com/wd/hub
 
 
*** Keywords ***
 
Open test browser
    Open browser  https://lambdatest.github.io/sample-todo-app/  browser=${BROWSER}
    ...  remote_url=${REMOTE_URL}
    ...  desired_capabilities=${CAPABILITIES}
 
Close test browser
    Close all browsers
```

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Execute the Robot Framework test from the command line.

```bash
make test_Windows_10_chrome_latest
```

To run parallel tests:
```bash
make run_all_in_parallel
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Robot Framework Tests Using Agent Skills
---

Use AI coding assistants to generate and run Robot Framework tests with the TestMu AI Agent Skill.

The [robot-framework-skill](https://github.com/LambdaTest/agent-skills/tree/main/robot-framework-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/robot-framework-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/robot-framework-skill .cursor/skills/
```

:::tip
Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
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
      <span className="breadcrumbs__link">
      Selenium With Robot Framework
      </span>
    </li>
  </ul>
</nav>
