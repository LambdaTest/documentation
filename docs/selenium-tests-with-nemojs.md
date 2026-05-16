---
id: selenium-tests-with-nemojs
title: Selenium With NemoJS
sidebar_label: NemoJS
description: Run NemoJS Selenium automated tests on TestMu AI cloud grid with 3000+ real browsers and operating systems.
keywords:
  - nemojs selenium grid testing
  - run nemojs tests cloud
  - nemojs automation setup guide
  - nemojs parallel testing selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/selenium-tests-with-nemojs/
site_name: TestMu AI
slug: selenium-tests-with-nemojs/
canonical: https://www.testmuai.com/support/docs/selenium-tests-with-nemojs/
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
          "name": "Selenium With NemoJS",
          "item": `${BRAND_URL}/support/docs/selenium-tests-with-nemojs/`
        }]
      })
    }}
></script>

---

Run NemoJS tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/Nemo-Lambdatest-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete these steps before running NemoJS Selenium tests on TestMu AI.

1. Create a [TestMu AI account](https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** from [nodejs.org](https://nodejs.org/en/).
3. Install **npm**: `npm init`
4. Install **NemoJS**: `npm install --save-dev nemo`

## Step 1: Clone the Sample Project
---
Clone the TestMu AI NemoJS sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/Nemo-Lambdatest-sample
cd Nemo-Lambdatest-sample
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

Set the environment variables in the `nemo.config.js` file with your TestMu AI Username and Access Key.

## Step 3: Configure Your Test Capabilities
---
Update the capabilities in `nemo.config.js` to define the browser and platform settings.

``` js
"withCapabilities": [{
    "build": "LT Nemo Sample Tests",
    "name": "LT Nemo sample test",
    "platformName" : "Windows 10",
    "browserName" : "Chrome",
    "browserVersion" : "latest",
    "user": "env:LT_USERNAME",
    "accessKey": "env:LT_ACCESS_KEY"
}]
```

:::tip
Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).
:::

## Step 4: Run the Test
---
Execute the test using the following command.

**Single test:**
``` js
npx nemo -P chrome
```

**Parallel tests:**
``` js
npx nemo -P chrome,chrome_2,firefox
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

## Run NemoJS Tests Using Agent Skills
---

Use AI coding assistants to generate and run NemoJS tests with the TestMu AI Agent Skill.

The [nemojs-skill](https://github.com/LambdaTest/agent-skills/tree/main/nemojs-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/nemojs-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/nemojs-skill .cursor/skills/
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
        Selenium With NemoJS
      </span>
    </li>
  </ul>
</nav>
