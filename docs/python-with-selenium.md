---
id: python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid
title: Selenium With Python
sidebar_label: Python
description: Run Python Selenium test scripts on TestMu AI cloud grid with 10,000+ browser/device combinations. Covers unittest, pytest, Robot Framework, and Behave.
keywords:
- python selenium cloud testing
- run python selenium tests online
- selenium webdriver python tutorial
- python automation testing cloud grid
- cross browser testing python selenium
- selenium remote webdriver python
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmu.ai/support/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/
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
          "name": "Selenium With Python",
          "item": `${BRAND_URL}/support/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With Python",
    "description": "Run Python Selenium test scripts on TestMu AI cloud grid with 10,000+ browser/device combinations. Covers unittest, pytest, Robot Framework, and Behave.",
    "url": "https://www.testmuai.com/support/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "python selenium cloud testing",
      "run python selenium tests online",
      "selenium webdriver python tutorial"
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
        "name": "How the sample test works",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "capabilities = {\n    \"build\": \"your build name\",\n    \"name\": \"your test name\",\n    \"platformName\": \"Windows 10\",\n    \"browserName\": \"Chrome\",\n    \"browserVersion\": \"latest\",\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Python-UnitTest-Selenium",
        "text": "git clone https://github.com/LambdaTest/Python-UnitTest-Selenium\ncd Python-UnitTest-Selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set your browser and OS in the capabilities dictionary",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "capabilities = {\n    \"build\": \"UnitTest-Selenium-Sample\",\n    \"name\": \"UnitTest-Selenium-Test\",\n    \"platformName\": \"Windows 11\",\n    \"browserName\": \"Chrome\",\n    \"browserVersion\": \"latest\",\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "python lambdatest_test.py"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/pytest-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/pytest-selenium-sample\ncd pytest-selenium-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "pytest",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run a single test, or in parallel:\n\n```bash\npython tests/lt_sample_todo.py\npytest -s -n=2 tests/lt_sample_todo.py"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Robot-Selenium-Sample",
        "text": "git clone https://github.com/LambdaTest/Robot-Selenium-Sample\ncd Robot-Selenium-Sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Robot",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run a single test, or all in parallel:\n\n```bash\nmake test_Windows_10_chrome_latest\nmake run_all_in_parallel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Python-Behave-Selenium",
        "text": "git clone https://github.com/LambdaTest/Python-Behave-Selenium\ncd Python-Behave-Selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Behave",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nbehave features/test.feature"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

---

Run your Python Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites
---
Complete these steps before running your first Python Selenium test.

1. Install the latest Python build from the [official website](https://www.python.org/downloads/).
2. Verify that **pip** is installed in your system. Install **pip** from [pip documentation](https://pip.pypa.io/en/stable/installation/).
3. Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/).

## Step 1: Clone the Sample Project
---
Clone the repository and install dependencies.

```bash
git clone https://github.com/LambdaTest/python-selenium-sample
cd python-selenium-sample
```

Install the Selenium driver using pip:
```bash
pip install selenium
export PYTHONWARNINGS="ignore:Unverified HTTPS request"   //Disable ssl warning
```

## Step 2: Set Your Credentials
---
Configure your credentials to connect to the TestMu AI Selenium Grid.

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
    <CodeBlock className="language-batch">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 3: Configure Your Test Capabilities
---
Define browser, version, and OS settings for your test run.

In the Python script, update your test capabilities. This code passes browser, browser version, and operating system information, along with TestMu AI Selenium grid capabilities via the capabilities object.

```python
capabilities = {
        "build": "your build name",
        "name": "your test name",
        "platformName": "Windows 10",
        "browserName": "Chrome",
        "browserVersion": "latest",
}
```

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Execute the Python Selenium test from the command line.

```bash
python google-search-lambdatest.py
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Python Selenium Tests Using Agent Skills
---

Use AI coding assistants to generate and run Python Selenium tests with the TestMu AI Agent Skill.

The [selenium-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/selenium-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/selenium-skill .cursor/skills/
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
      Selenium With Python      
      </span>
    </li>
  </ul>
</nav>
