---
id: pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid
title: Selenium With PyTest
sidebar_label: pytest
description: Run PyTest Selenium test scripts on TestMu AI cloud grid with 3000+ desktop and mobile browsers. Setup, config, and parallel execution guide.
keywords:
  - pytest selenium cloud testing
  - run pytest on selenium grid
  - pytest automation cloud grid
  - selenium webdriver pytest tutorial
  - parallel testing pytest selenium
  - cross browser pytest python
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid/
site_name: TestMu AI
slug: pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid/
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
          "name": "Selenium With PyTest",
          "item": `${BRAND_URL}/support/docs/pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With PyTest",
    "description": "Run PyTest Selenium test scripts on TestMu AI cloud grid with 3000+ desktop and mobile browsers. Setup, config, and parallel execution guide.",
    "url": "https://www.testmuai.com/support/docs/pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "pytest selenium cloud testing",
      "run pytest on selenium grid",
      "pytest automation cloud grid"
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
        "codeRepository": "https://github.com/LambdaTest/pytest-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/pytest-selenium-sample\ncd pytest-selenium-sample"
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
        "text": "capabilities = {\n        \"build\": \"Sample PY Build\",\n        \"platformName\": \"Windows 11\",\n        \"browserName\": \"Chrome\",\n        \"browserVersion\": \"latest\",\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Navigate to the tests directory and run",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "cd tests //navigate to tests directory\npython lt_sample_todo.py"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To run parallel tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pytest -s -n=2 tests/lt_sample_todo.py"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the skill",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/pytest-skill .claude/skills/\n\n# For Cursor / Copilot\ncp -r agent-skills/pytest-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

---

Run PyTest tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/pytest-selenium-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete these steps before running your first PyTest Selenium test.

1. Install the latest Python build from the [official website](https://www.python.org/downloads/).
2. Verify that **pip** is installed in your system. Install **pip** from [pip documentation](https://pip.pypa.io/en/stable/installation/).
3. Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/).
4. Install **virtualenv** to isolate the build from other setups and ensure tests run with the specified module versions.
```bash
pip install virtualenv
```

## Step 1: Clone the Sample Project
---
Clone the repository and set up the environment.

```bash
git clone https://github.com/LambdaTest/pytest-selenium-sample
cd pytest-selenium-sample
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

In the `conftest.py` file, update your test capabilities. This code passes browser, browser version, and operating system information, along with TestMu AI Selenium grid capabilities via the capabilities object.

```python
capabilities = {
        "build": "Sample PY Build",
        "platformName": "Windows 11",
        "browserName": "Chrome",
        "browserVersion": "latest",
}
```

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Execute the PyTest Selenium test from the command line.

Navigate to the `tests` directory and run:
```bash
cd tests //navigate to tests directory
python lt_sample_todo.py
```

To run parallel tests:
```bash
pytest -s -n=2 tests/lt_sample_todo.py
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run PyTest Tests Using Agent Skills
---

Use AI coding assistants to generate and run PyTest tests with the TestMu AI Agent Skill.

The [pytest-skill](https://github.com/LambdaTest/agent-skills/tree/main/pytest-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/pytest-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/pytest-skill .cursor/skills/
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
      Selenium With PyTest
      </span>
    </li>
  </ul>
</nav>