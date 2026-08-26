---
id: lambdatest-running-your-first-selenium-test
title: How to Run Your First Selenium Test on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Run First Test"
description: "Run your first Selenium test on the TestMu AI cloud grid: clone a sample project, set credentials, configure capabilities, and view results."
keywords:
  - selenium first test
  - run selenium test online
  - selenium cloud testing
  - selenium python pytest
  - testmu ai selenium tutorial
  - selenium getting started
  - cross browser testing selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/testmu-running-your-first-selenium-test/
site_name: TestMu AI
slug: testmu-running-your-first-selenium-test/
canonical: https://www.testmuai.com/support/docs/testmu-running-your-first-selenium-test/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Run Your First Selenium Test",
          "item": `${BRAND_URL}/support/docs/testmu-running-your-first-selenium-test/`
        }]
      })
    }}
></script>

# How to Run Your First Selenium Test on TestMu AI
---


This guide walks you through running a sample Selenium test on the TestMu AI cloud grid using Python and the pytest framework. Clone a sample project, set your credentials, and execute a test.

:::tip Sample repo
All the code used in this guide is available in the sample repository. Clone it to get started.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/pytest-selenium-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Python](https://www.python.org/downloads/) 3.7 or later (`pip` is included).

## Step 1: Clone the Sample Project
---

Pull the sample repo to your local machine and navigate into the project directory.

```bash
git clone https://github.com/LambdaTest/pytest-selenium-sample
cd pytest-selenium-sample
```

## Step 2: Install Dependencies
---

Install the project's Python dependencies, including Selenium, pytest, and pytest-xdist (for parallel runs), from `requirements.txt`.

```bash
pip install -r requirements.txt
```

## Step 3: Set Your Credentials
---

Add your TestMu AI credentials as environment variables so the test can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then set them as environment variables:

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
  {`$env:LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
$env:LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 4: Configure Your Test Capabilities
---

Define which browser, version, and OS your test runs on.

The sample keeps its capabilities in `conftest.py`, inside the `driver` fixture that starts the browser session. Here is the configuration from the sample:

```python title="conftest.py"
chrome_options = webdriver.ChromeOptions()
option = {
    "platform": "Windows 10",
    "version": "latest",
    "name": test_name,
    "Build": build,
    "video": True,
    "visual": True,
    "network": True,
    "console": True
}
chrome_options.set_capability("LT:Options", option)
browser = webdriver.Remote(
    command_executor=selenium_endpoint,
    options=chrome_options
)
```

Within the fixture, `selenium_endpoint`, `test_name`, and `build` are derived from your credentials, the test parameters, and the `BUILD` environment variable.

You can customize these values to test on any browser, version, or OS. Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities code for your target configuration.

:::note
For the full list of supported capabilities, see [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/).
:::

## Step 5: Run the Test
---

Trigger the test from your terminal. Run a single test, or run in parallel with `pytest-xdist`:

<Tabs className="docs__val">

<TabItem value="single" label="Single Test" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`pytest -s tests/lt_sample_todo.py`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="parallel" label="Parallel Test" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`pytest -s -n=2 tests/lt_sample_todo.py`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 6: View Your Results
---

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action

<img loading="lazy" src={require('../assets/images/selenium/running-first-test/run-first-test.png').default} alt="TestMu AI Automation Dashboard showing test results"  className="doc_img"/>

## Next Steps
---

Continue with these related guides:

- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Debugging Options](/support/docs/debugging-options/)
- [Filter Your Selenium Tests](/support/docs/filter-your-selenium-tests/)
- [Selenium Agent Skills](/support/docs/selenium-agent-skills/)

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
       Run Your First Selenium Test
      </span>
    </li>
  </ul>
</nav>
