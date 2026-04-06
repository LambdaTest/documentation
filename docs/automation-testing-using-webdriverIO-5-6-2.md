---
id: automation-testing-using-webdriverIO-5-6-2
title: Selenium With WebDriverIO 5.6.2
sidebar_label: WebDriverIO 5.6.2
description: Run WebDriverIO 5.6.2 Selenium automation scripts on TestMu AI cloud grid with 3000+ real browsers and operating systems.
keywords:
  - webdriverio 5.6.2 selenium grid testing
  - run webdriverio tests cloud
  - webdriverio selenium cloud execution
  - webdriverio automation setup guide
  - webdriverio parallel testing selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/webdriverio-5-6-2-with-selenium-running-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: webdriverio-5-6-2-with-selenium-running-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/webdriverio-5-6-2-with-selenium-running-automation-scripts-on-testmu-selenium-grid/
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
          "name": "Selenium With WebDriverIO 5.6.2",
          "item": `${BRAND_URL}/support/docs/webdriverio-5-6-2-with-selenium-running-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

---

Run WebDriverIO 5.6.2 tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::warning Outdated Version
This guide covers WebDriverIO 5.6.2. The current version is 8+. For the latest WebDriverIO guide, see [Selenium With WebDriverIO](/support/docs/webdriverio-with-selenium-running-webdriverio-automation-scripts-on-testmu-selenium-grid/).
:::

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/webdriverio-selenium" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete these steps before running WebDriverIO 5.6.2 Selenium tests on TestMu AI.

1. Create a [TestMu AI account](https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** v6 or newer from [nodejs.org](https://nodejs.org/en/).
3. Install **WebDriverIO**: `npm install webdriverio`
4. Download [Selenium JavaScript bindings](http://www.seleniumhq.org/download/) from the official website.

## Step 1: Clone the Sample Project
---
Clone the TestMu AI WebDriverIO Selenium sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/webdriverio-selenium
cd webdriverio-selenium
```

Install the required dependencies:
```bash
npm i selenium-webdriver
npm install
```

## Step 2: Set Your Credentials
---
Set your TestMu AI username and access key as environment variables.

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
Update the capabilities in the config file to define the browser and platform settings.

``` js
user= process.env.LT_USERNAME || "<your username>",
key= process.env.LT_ACCESS_KEY || "<your accessKey>",
 
exports.config = {
 
  updateJob: false,
  user,
  key,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],
 
  capabilities: [{
    browserName: 'chrome',
    version:"64.0",
    name:"Test webdriverio",
    build:"build 1",
  }],
  sync: true,
  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: '/wd/hub',
  hostname: 'hub.lambdatest.com',
  port: 80,
 
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}
```

:::tip
Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).
:::

## Step 4: Run the Test
---
Execute the test using the following command.

```bash
npm run single
```

## Step 5: View Your Results
---
After running the test, view your results on the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build).

The dashboard provides:
- Video recordings of each test session
- Screenshots captured at each step
- Console logs from the browser
- Network logs for debugging
- Detailed command logs

## Run WebDriverIO 5.6.2 Tests Using Agent Skills
---

Use AI coding assistants to generate and run WebDriverIO 5.6.2 tests with the TestMu AI Agent Skill.

The [webdriverio-skill](https://github.com/LambdaTest/agent-skills/tree/main/webdriverio-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/webdriverio-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/webdriverio-skill .cursor/skills/
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
       Selenium With WebDriverIO 5.6.2
      </span>
    </li>
  </ul>
</nav>
