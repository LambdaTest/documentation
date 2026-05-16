---
id: automation-testing-with-mocha-and-selenium
title: Selenium With Mocha
sidebar_label: Mocha
description: Run Mocha Selenium automation tests on TestMu AI cloud grid with 3000+ real browsers. Use parallel testing to speed up builds.
keywords:
  - mocha selenium grid testing
  - run mocha tests cloud
  - mocha parallel testing selenium
  - mocha selenium cloud execution
  - mocha javascript test automation
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/automation-testing-with-mocha-and-selenium/
site_name: TestMu AI
slug: /automation-testing-with-mocha-and-selenium/
canonical: https://www.testmuai.com/support/docs/automation-testing-with-mocha-and-selenium/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Selenium With Mocha",
          "item": `${BRAND_URL}/support/docs/automation-testing-with-mocha-and-selenium/`
        }]
      })
    }}
></script>

---

Run Mocha tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/mocha-selenium-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete these steps before running Mocha Selenium tests on TestMu AI.

1. Create a [TestMu AI account](https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** v6 or newer from [nodejs.org](https://nodejs.org/en/).
3. Install **npm** from the [official npm website](https://www.npmjs.com/).
4. Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website.

## Step 1: Clone the Sample Project
---
Clone the TestMu AI Mocha Selenium sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/mocha-selenium-sample
cd mocha-selenium-sample
```

Install the required dependencies:
```bash
npm i
npm install selenium-webdriver
```

## Step 2: Set Your Credentials
---
Set your TestMu AI username and access key as environment variables.

* For **macOS/Linux**:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`export LT_USERNAME= "${ YOUR_LAMBDATEST_USERNAME()}" 
export LT_ACCESS_KEY= "${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
</CodeBlock>
</div>

* For **Windows**:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`set LT_USERNAME= "${ YOUR_LAMBDATEST_USERNAME()}" 
set LT_ACCESS_KEY= "${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
</CodeBlock>
</div>

## Step 3: Configure Your Test Capabilities
---
Update the capabilities in `conf/single.conf.js` to define the browser and platform settings.

```js
exports.capabilities = {
        'build': 'Mocha-Selenium-Sample', //Build name
        'name': 'Your Test Name', // Test name
        'platformName':'Windows 10', // OS name
        'browserName': 'chrome', // Browser name
        'browserVersion': 'latest', // Browser version
        'visual': false,  // To take step by step screenshot
        'network':false,  // To capture network Logs
        'console':false, // To capture console logs.
        'tunnel': false // If you want to run the localhost than change it to true
};
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
After running the test, view your results on the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build).

The dashboard provides:
- Video recordings of each test session
- Screenshots captured at each step
- Console logs from the browser
- Network logs for debugging
- Detailed command logs

## Run Mocha Tests Using Agent Skills
---

Use AI coding assistants to generate and run Mocha tests with the TestMu AI Agent Skill.

The [mocha-skill](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/mocha-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/mocha-skill .cursor/skills/
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
       Selenium With Mocha
      </span>
    </li>
  </ul>
</nav>
