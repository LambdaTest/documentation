---
id: behave-with-selenium-running-behave-automation-scripts-on-lambdatest-selenium-grid
title: Selenium With Behave
sidebar_label: Behave
description: Run Behave automation scripts on TestMu AI Selenium Grid with 3000+ browser and OS combinations. Setup, config, and execution steps included.
keywords:
  - behave selenium cloud testing
  - run behave tests on selenium grid
  - behave automation cloud grid
  - selenium webdriver behave tutorial
  - python behave BDD testing
  - cross browser behave selenium
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/behave-with-selenium-running-behave-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: behave-with-selenium-running-behave-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/behave-with-selenium-running-behave-automation-scripts-on-testmu-selenium-grid/
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
          "name": "Selenium With Behave",
          "item": `${BRAND_URL}/support/docs/behave-with-selenium-running-behave-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

---

Run Behave tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/Python-Behave-Selenium" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete these steps before running your first Behave Selenium test.

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
git clone https://github.com/LambdaTest/Python-Behave-Selenium
cd Python-Behave-Selenium
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

In `config/config.json`, update your test capabilities. This code passes browser, browser version, and operating system information, along with TestMu AI Selenium grid capabilities via the capabilities object.

```python
[
    {
      "platformName": "Windows 10",
      "browserName": "chrome",
      "browserVersion": "latest",
      "build": "Behave Selenium Sample",
      "name": "Behave Sample Test"
    }
  ]
```

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Execute the Behave test from the command line.

```bash
behave features/test.feature 
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Behave Tests Using Agent Skills
---

Use AI coding assistants to generate and run Behave tests with the TestMu AI Agent Skill.

The [behave-skill](https://github.com/LambdaTest/agent-skills/tree/main/behave-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/behave-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/behave-skill .cursor/skills/
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
     Selenium With Behave
     </span>
    </li>
  </ul>
</nav>
