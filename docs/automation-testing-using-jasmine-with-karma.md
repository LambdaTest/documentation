---
id: automation-testing-using-jasmine-with-karma
title: Selenium With Jasmine and Karma
sidebar_label: Jasmine
description: Run Jasmine BDD tests with Karma on TestMu AI cloud Selenium Grid with 3000+ real browsers and operating systems.
keywords:
  - jasmine karma selenium grid testing
  - run jasmine tests cloud
  - jasmine bdd test automation
  - karma test runner selenium setup
  - jasmine selenium cloud execution
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/jasmine-with-karma-running-jasmine-tests-on-testmu-selenium-grid/
site_name: TestMu AI
slug: jasmine-with-karma-running-jasmine-tests-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/jasmine-with-karma-running-jasmine-tests-on-testmu-selenium-grid/
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
          "name": "Selenium With Jasmine and Karma",
          "item": `${BRAND_URL}/support/docs/jasmine-with-karma-running-jasmine-tests-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

---

Run Jasmine BDD tests with Karma on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/karma-jasmine-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete these steps before running Jasmine tests with Karma on TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** and **npm** from [nodejs.org](https://nodejs.org/en/).
3. Install [Node.js](https://nodejs.org/) (latest LTS version recommended).

## Step 1: Clone the Sample Project
---
Clone the TestMu AI Jasmine Karma sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/karma-jasmine-sample
cd karma-jasmine-sample
```

Install the required dependencies:
```bash
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
Update the capabilities in the `karma.conf.js` file to define the browser and platform settings.

``` js
customLaunchers: {
        chrome: {
             base: 'WebDriver',
             config: webdriverConfig,
             browserName: 'chrome',
             platform: 'windows 10',
             version: '71.0',
             name: 'Karma With Heartbeat',
             user: process.env.LT_USERNAME,
             accessKey: process.env.LT_ACCESS_KEY,
             pseudoActivityInterval: 15000 // 15000 ms heartbeat to avoid timeouts
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
karma start karma.conf.js
```

Or run the test using:
```bash
npm test
```

## Step 5: View Your Results
---
After running the test, view your results on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

The dashboard provides:
- Video recordings of each test session
- Screenshots captured at each step
- Console logs from the browser
- Network logs for debugging
- Detailed command logs

## Run Jasmine Tests Using Agent Skills
---

Use AI coding assistants to generate and run Jasmine tests with the TestMu AI Agent Skill.

The [jasmine-skill](https://github.com/LambdaTest/agent-skills/tree/main/jasmine-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/jasmine-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/jasmine-skill .cursor/skills/
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
        Selenium With Jasmine and Karma
      </span>
    </li>
  </ul>
</nav>
