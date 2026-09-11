---
id: running-javascript-test-scripts-on-lambdatest
title: Selenium With JavaScript
sidebar_label: JavaScript
description: Run JavaScript Selenium test scripts on TestMu AI cloud grid with 3000+ real browsers and operating systems.
keywords:
  - javascript selenium grid testing
  - run javascript selenium tests cloud
  - selenium webdriver javascript setup
  - javascript browser automation tutorial
  - javascript selenium cloud execution
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';
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
          "name": "Selenium With JavaScript",
          "item": `${BRAND_URL}/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With JavaScript",
    "description": "Run JavaScript Selenium test scripts on TestMu AI cloud grid with 3000+ real browsers and operating systems. Covers Mocha, Nightwatch, WebdriverIO, Jest, CucumberJS, Jasmine, Karma, TestCafe, NemoJS, and CodeceptJS.",
    "url": "https://www.testmuai.com/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "javascript selenium grid testing",
      "run javascript selenium tests cloud",
      "selenium webdriver javascript setup"
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
        "name": "A minimal one looks like this",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const capabilities = {\n  build: 'NodeJS build',\n  name: 'Test 1',\n  platformName: 'Windows 10',\n  browserName: 'chrome',\n  browserVersion: 'latest',\n  network: true,\n  visual: true,\n  console: true,\n  video: true\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/mocha-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/mocha-selenium-sample\ncd mocha-selenium-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Mocha",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nnpm run single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/nightwatch-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/nightwatch-selenium-sample\ncd nightwatch-selenium-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm run single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/webdriverio-selenium",
        "text": "git clone https://github.com/LambdaTest/webdriverio-selenium\ncd webdriverio-selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 7",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nnpm run single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/jest-selenium-webdriver-sample",
        "text": "git clone https://github.com/LambdaTest/jest-selenium-webdriver-sample\ncd jest-selenium-webdriver-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set your browser and OS in the capabilities object",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const capabilities = {\n  build: 'jest-LambdaTest-Single',\n  browserName: 'chrome',\n  browserVersion: 'latest',\n  platformName: 'Windows 10',\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm test single.test.js"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/NodeJs-Cucumber-Selenium",
        "text": "git clone https://github.com/LambdaTest/NodeJs-Cucumber-Selenium\ncd NodeJs-Cucumber-Selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "CucumberJS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nnpm run single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/karma-jasmine-sample",
        "text": "git clone https://github.com/LambdaTest/karma-jasmine-sample\ncd karma-jasmine-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Jasmine",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nkarma start karma.conf.js"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/angular-karma-sample",
        "text": "git clone https://github.com/LambdaTest/angular-karma-sample\ncd angular-karma-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Karma",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nkarma start karma.conf.js"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the plugin in your TestCafe project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install testcafe-browser-provider-lambdatest"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run your test against the grid, naming the browser and OS in the command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "testcafe \"lambdatest:Chrome@74.0:Windows 8\" 'path/to/test/file.js'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Nemo-Lambdatest-sample",
        "text": "git clone https://github.com/LambdaTest/Nemo-Lambdatest-sample\ncd Nemo-Lambdatest-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "NemoJS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nnpx nemo -P chrome"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/lambdatest-codeceptjs-sample",
        "text": "git clone https://github.com/LambdaTest/lambdatest-codeceptjs-sample\ncd lambdatest-codeceptjs-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 22",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nnpm test"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

---

Run your JavaScript Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites
---
Complete these steps before running JavaScript Selenium tests on TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** v6 or newer from [nodejs.org](https://nodejs.org/en/).
3. Install **npm** from the [official npm website](https://www.npmjs.com/).
4. Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website.

## Step 1: Clone the Sample Project
---
Clone the TestMu AI JavaScript Selenium sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/nodejs-selenium-sample
cd nodejs-selenium-sample
```

Install the required dependencies:
```bash
npm install selenium-webdriver
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
Update the capabilities object in your test script to define the browser and platform settings.

<VerifiedTag value="Verified" />

```js
// index.js
const capabilities = {
        build: 'NodeJS build',      // Name of the build
        name: 'Test 1',             // Name of the test
        platformName: 'Windows 10', // Name of Operating System
        browserName: 'chrome',      // Name of the browser
        browserVersion: 'latest',   // Version of the browser
        resolution: '1280x800',     // Resolution of the screen 
        network: true,              // Enable to capture browser network logs
        visual: true,               // Enable to capture screenshot on every command
        console: true,              // Enable to capture the console log
        video: true                 // Enable to capture the video recording of the test
}
```

:::tip
Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).
:::

## Step 4: Run the Test
---
Execute the test using one of the following commands.

```bash
npm test
```

Or run the file directly:

```bash
node index.js
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

## Run JavaScript Selenium Tests Using Agent Skills
---

Use AI coding assistants to generate and run JavaScript Selenium tests with the TestMu AI Agent Skill.

The [selenium-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/selenium-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/selenium-skill .cursor/skills/
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
      Selenium With JavaScript  
      </span>
    </li>
  </ul>
</nav>
