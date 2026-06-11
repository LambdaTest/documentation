---
id: run-nightwatch-tests-on-lambdatest-selenium-grid
title: Selenium With Nightwatch.js
sidebar_label: Nightwatch
description: Run Nightwatch Selenium automation scripts on TestMu AI cloud grid with 3000+ real browsers and operating systems.
keywords:
  - nightwatch selenium grid testing
  - run nightwatch tests cloud
  - nightwatch parallel testing selenium
  - nightwatch automation setup guide
  - nightwatch selenium cloud execution
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/nightwatch-with-selenium-running-nightwatch-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: nightwatch-with-selenium-running-nightwatch-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/nightwatch-with-selenium-running-nightwatch-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';

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
          "name": "Selenium With Nightwatch.js",
          "item": `${BRAND_URL}/support/docs/nightwatch-with-selenium-running-nightwatch-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

---

Run Nightwatch.js tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/nightwatch-selenium-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete these steps before running Nightwatch Selenium tests on TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** v6 or newer from [nodejs.org](https://nodejs.org/en/).
3. Install **npm** from the [official npm website](https://www.npmjs.com/).
4. Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website.

## Step 1: Clone the Sample Project
---
Clone the TestMu AI Nightwatch Selenium sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/nightwatch-selenium-sample
cd nightwatch-selenium-sample
```

Install the required dependencies:
```bash
npm i
```

## Step 2: Set Your Credentials
---
Set your TestMu AI username and access key as environment variables.

<Tabs className="docs__val">
<TabItem value="bash" label="Linux / MacOS" default>
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
Update the capabilities in `nightwatch.conf.js` to define the browser and platform settings.

```javascript title="nightwatch.conf.js" reference
https://github.com/LambdaTest/nightwatch-selenium-sample/blob/master/nightwatch.conf.js
```

:::tip
Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).
:::

## Step 4: Run the Test
---
Execute the test using the following command.

**Single test:**
```bash
npm run single
```

**Parallel tests:**
```bash
npm run parallel
```

## Step 5: View Your Results
---
After running the test, view your results on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

<img loading="lazy" src={require('../assets/images/automation/nightwatch/nightwatch-2.png').default} alt="Image"  className="doc_img"/> <br />

The dashboard provides:
- Video recordings of each test session
- Screenshots captured at each step
- Console logs from the browser
- Network logs for debugging
- Detailed command logs

<img loading="lazy" src={require('../assets/images/automation/nightwatch/nightwatch-1.png').default} alt="Image"  className="doc_img"/> <br />

## Run Nightwatch.js Tests Using Agent Skills
---

Use AI coding assistants to generate and run Nightwatch.js tests with the TestMu AI Agent Skill.

The [nightwatchjs-skill](https://github.com/LambdaTest/agent-skills/tree/main/nightwatchjs-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/nightwatchjs-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/nightwatchjs-skill .cursor/skills/
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
       Selenium With Nightwatch.js
      </span>
    </li>
  </ul>
</nav>
