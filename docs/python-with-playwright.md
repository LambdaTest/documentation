---
id: python-with-playwright
title: How to Run Playwright Tests With Python on TestMu AI
hide_title: true
sidebar_label: Python
description: Run your Python automation scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.
keywords:
  - python playwright
  - python automation testing
  - playwright python
  - playwright python testing guide
  - python playwright framework

url: https://www.testmuai.com/support/docs/python-with-playwright/
site_name: TestMu AI
slug: python-with-playwright/
canonical: https://www.testmuai.com/support/docs/python-with-playwright/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';


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
          "name": "Python with Playwright",
          "item": `${BRAND_URL}/support/docs/python-with-playwright/`
        }]
      })
    }}
></script>

# How to Run Playwright Tests With Python on TestMu AI
***

Run your Python Playwright tests on the TestMu AI cloud grid to reach 50+ real desktop browsers and operating systems without maintaining local infrastructure. You connect Playwright over a CDP WebSocket, pass your capabilities, then run the sample script.

## Prerequisites
***

Complete these before running the test below.

1. A TestMu AI **Username** and **Access Key**. Get them from your TestMu AI Profile section. Don't have an account? <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>Sign up for free</a>.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="TestMu AI Profile page showing the Username and Access Key credentials" width="1444" height="703"  className="doc_img"/>

2. [Python](https://www.python.org/downloads/) installed, along with the Playwright Python package.
3. Clone the sample repository. The Python sample lives in its own subdirectory.

:::tip Sample repo
<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-python" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="GitHub icon linking to the Playwright Python sample subdirectory" className="doc_img"/> View on GitHub</a>
:::

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-python
```

4. Install the Python dependencies from the sample directory:

```bash
pip install -r requirements.txt
```

## Set Your Credentials
***

Your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

<Tabs className="docs__val" groupId="os">

<TabItem value="macos" label="macOS / Linux" default>

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="win-cmd" label="Windows (CMD)">

<div className="lambdatest__codeblock">
    <CodeBlock className="language-batch">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

</TabItem>

</Tabs>

## How the Sample Test Works
***

The test builds a `capabilities` dictionary that carries the browser, version, platform, and your `LT:Options`, then connects Playwright to the grid at `wss://cdp.lambdatest.com/playwright`. The credentials come from the `LT_USERNAME` and `LT_ACCESS_KEY` environment variables you set above, and `set_test_status` reports whether the assertion passed.

```py
capabilities = {
    'browserName': 'Chrome',  # Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
        'platform': 'Windows 10',
        'user': os.getenv('LT_USERNAME'),
        'accessKey': os.getenv('LT_ACCESS_KEY'),
    }
}
```

The sample script wraps this connection, runs a search, then calls `set_test_status` to mark the result, as the steps below show.

## Run the Test With Python
***

The sample script connects Playwright to the grid, opens a page, runs a search, and reports the test status back to TestMu AI. You can use your own project, or the sample below.

1. Open the `playwright_sample.py` file in the `playwright-python` directory. It builds the capabilities, connects to the grid, and sets the test status:

```py title="playwright_sample.py"
import json
import os
import urllib
import subprocess

from playwright.sync_api import sync_playwright

capabilities = {
    'browserName': 'Chrome',  # Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
        'platform': 'Windows 10',
        'build': 'Playwright Python Build',
        'name': 'Playwright Python Test',
        'user': os.getenv('LT_USERNAME'),
        'accessKey': os.getenv('LT_ACCESS_KEY'),
        'network': True,
        'video': True,
        'console': True,
        'tunnel': False,  # Add tunnel configuration if testing locally hosted webpage
        'tunnelName': '',  # Optional
        'geoLocation': '', # country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    }
}


def run(playwright):
    playwrightVersion = str(subprocess.getoutput('playwright --version')).strip().split(" ")[1]
    capabilities['LT:Options']['playwrightClientVersion'] = playwrightVersion

    lt_cdp_url = 'wss://cdp.lambdatest.com/playwright?capabilities=' + urllib.parse.quote(
        json.dumps(capabilities))
    browser = playwright.chromium.connect(lt_cdp_url)
    page = browser.new_page()
    try:
        page.goto("https://www.bing.com/")
        page.fill("[aria-label='Enter your search term'] > input", 'LambdaTest')
        page.keyboard.press("Enter")
        page.wait_for_timeout(1000)

        title = page.title()

        print("Title:: ", title)

        if "LambdaTest" in title:
            set_test_status(page, "passed", "Title matched")
        else:
            set_test_status(page, "failed", "Title did not match")
    except Exception as err:
        print("Error:: ", err)
        set_test_status(page, "failed", str(err))

    browser.close()


def set_test_status(page, status, remark):
    page.evaluate("_ => {}",
                  "lambdatest_action: {\"action\": \"setTestStatus\", \"arguments\": {\"status\":\"" + status + "\", \"remark\": \"" + remark + "\"}}");


with sync_playwright() as playwright:
    run(playwright)

```

2. Run the test from the terminal:

```bash
python playwright_sample.py
```

## View Your Results
***

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms the test passed.

## Related Playwright Guides
***

Continue with these related guides:

- [Configure Playwright Capabilities for the TestMu AI Grid](/support/docs/capabilities-for-playwright/)
- [Get Started With Playwright Testing on TestMu AI](/support/docs/playwright-testing/)
- [Set Up Playwright Test Execution on TestMu AI](/support/docs/playwright-test-execution-setup/)

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
      Python with Playwright
      </span>
    </li>
  </ul>
</nav>
