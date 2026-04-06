---
id: automation-testing-selenium-with-lettuce
title: Selenium With Lettuce
sidebar_label: Lettuce
description: Run Lettuce Selenium test scripts on TestMu AI cloud grid with 3000+ desktop and mobile browsers. Setup, config, and execution steps included.
keywords:
  - lettuce selenium cloud testing
  - run lettuce tests on selenium grid
  - lettuce automation cloud grid
  - selenium webdriver lettuce tutorial
  - python lettuce BDD testing
  - cross browser lettuce selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/automation-testing-selenium-with-lettuce/
site_name: TestMu AI
slug: automation-testing-selenium-with-lettuce/
canonical: https://www.testmuai.com/support/docs/automation-testing-selenium-with-lettuce/
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
          "name": "Selenium With Lettuce",
          "item": `${BRAND_URL}/support/docs/automation-testing-selenium-with-lettuce/`
        }]
      })
    }}
></script>

---

Run Lettuce tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::warning Deprecated Framework
Lettuce has not been updated since 2016 and only supports Python 2. Consider migrating to [Behave](/support/docs/behave-with-selenium/) or [PyTest](/support/docs/pytest-with-selenium/). This guide is maintained for existing users.
:::

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/sample-lettuce" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete these steps before running your first Lettuce Selenium test.

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
git clone https://github.com/LambdaTest/sample-lettuce
cd sample-lettuce
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

In the `config.json` file, update your test capabilities. This code passes browser, browser version, and operating system information, along with TestMu AI Selenium grid capabilities via the capabilities object.

```python
capabilities = {
        "build": "Sample lettuce Build",
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
Execute the Lettuce test from the command line.

Navigate to the `tests` directory and run:
```bash
cd tests //navigate to tests directory
python lt_sample_todo.py
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Lettuce Tests Using Agent Skills
---

Use AI coding assistants to generate and run Lettuce tests with the TestMu AI Agent Skill.

The [lettuce-skill](https://github.com/LambdaTest/agent-skills/tree/main/lettuce-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/lettuce-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/lettuce-skill .cursor/skills/
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
      Selenium With Lettuce
      </span>
    </li>
  </ul>
</nav>
