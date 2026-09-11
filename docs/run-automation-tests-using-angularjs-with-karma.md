---
id: run-automation-tests-using-angularjs-with-karma
title: Selenium With AngularJS and Karma
sidebar_label: AngularJS
description: Run AngularJS automated tests with Karma on TestMu AI cloud Selenium Grid with 3000+ real browsers and operating systems.
keywords:
  - angularjs selenium grid testing
  - angularjs karma automation setup
  - angularjs automated testing cloud
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/angularjs-with-karma-running-angular-tests-on-testmu-selenium-grid/
site_name: TestMu AI
slug: angularjs-with-karma-running-angular-tests-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/angularjs-with-karma-running-angular-tests-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "Selenium With AngularJS and Karma",
          "item": `${BRAND_URL}/support/docs/angularjs-with-karma-running-angular-tests-on-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/angularjs-with-karma-running-angular-tests-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With AngularJS and Karma",
    "description": "Run AngularJS automated tests with Karma on TestMu AI cloud Selenium Grid with 3000+ real browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/angularjs-with-karma-running-angular-tests-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "angularjs selenium grid testing",
      "angularjs karma automation setup",
      "angularjs automated testing cloud"
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
        "name": "Step 1: Clone the Sample Project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/angular-karma-sample",
        "text": "git clone https://github.com/LambdaTest/angular-karma-sample\ncd angular-karma-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the required dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure Your Test Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "customLaunchers: {\n        chrome: {\n             base: 'WebDriver',\n             config: webdriverConfig,\n             browserName: 'chrome',\n             platform: 'windows 10',\n             version: '71.0',\n             name: 'Karma With Heartbeat',\n             tunnel: true, // In case karma is running on local machine\n             video: true, // capture video for your test\n             user: process.env.LT_USERNAME,\n             accessKey: process.env.LT_ACCESS_KEY,\n             pseudoActivityInterval: 15000 // 15000 ms heartbeat to avoid timeouts\n        }\n    }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "karma start karma.conf.js"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Or run the test using",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "ng test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the skill",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/karma-skill .claude/skills/\n\n# For Cursor / Copilot\ncp -r agent-skills/karma-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

---

Run AngularJS tests with Karma on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::warning Deprecated Framework
AngularJS reached end-of-life in December 2021. Consider migrating to Angular with [Karma](/support/docs/karma-integration-with-testmu/) or [Playwright](/support/docs/playwright-testing/). This guide is maintained for existing users.
:::

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/angular-karma-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete these steps before running AngularJS tests with Karma on TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** v6 or newer from [nodejs.org](https://nodejs.org/en/).
3. Install **npm** and upgrade to the latest version: `npm install npm@latest -g`
4. Install [Angular CLI](https://angular.io/cli): `npm install -g @angular/cli`
5. Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website.

## Step 1: Clone the Sample Project
---
Clone the TestMu AI AngularJS Karma sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/angular-karma-sample
cd angular-karma-sample
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

<VerifiedTag value="Verified" />

```js
customLaunchers: {
        chrome: {
             base: 'WebDriver',
             config: webdriverConfig,
             browserName: 'chrome',
             platform: 'windows 10',
             version: '71.0',
             name: 'Karma With Heartbeat',
             tunnel: true, // In case karma is running on local machine
             video: true, // capture video for your test
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

**Parallel tests:**
```bash
ng test
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

## Run AngularJS with Karma Tests Using Agent Skills
---

Use AI coding assistants to generate and run AngularJS with Karma tests with the TestMu AI Agent Skill.

The [karma-skill](https://github.com/LambdaTest/agent-skills/tree/main/karma-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/karma-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/karma-skill .cursor/skills/
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
       Selenium With AngularJS and Karma
      </span>
    </li>
  </ul>
</nav>
