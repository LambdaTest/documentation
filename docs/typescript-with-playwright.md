---
id: typescript-with-playwright
title: How to Run TypeScript Tests With Playwright on TestMu AI
hide_title: true
sidebar_label: TypeScript
description: Run your TypeScript automation scripts with Playwright on TestMu AI across 50+ real desktop browsers and operating systems.
keywords:
  - typescript playwright
  - typescript automation testing
  - playwright typescript
  - playwright typescript testing guide
  - typescript playwright framework

url: https://www.testmuai.com/support/docs/typescript-with-playwright/
site_name: TestMu AI
slug: typescript-with-playwright/
canonical: https://www.testmuai.com/support/docs/typescript-with-playwright/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';
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
          "name": "TypeScript with Playwright",
          "item": `${BRAND_URL}/support/docs/typescript-with-playwright/`
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
      "@id": "https://www.testmuai.com/support/docs/typescript-with-playwright/"
    },
    "headline": "How to Run TypeScript Tests With Playwright on TestMu AI",
    "description": "Run your TypeScript automation scripts with Playwright on TestMu AI across 50+ real desktop browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/typescript-with-playwright/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "typescript playwright",
      "typescript automation testing",
      "playwright typescript"
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
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/playwright-sample",
        "text": "git clone https://github.com/LambdaTest/playwright-sample.git\ncd playwright-sample\ncd playwright-test-ts"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run your Playwright tests with TypeScript",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "/**\n * Add the file in your test suite to run tests on LambdaTest.\n * Import `test` object from this file in the tests.\n */\n\nimport * as base from \"@playwright/test\";\nimport path from \"path\";\nimport { chromium } from \"playwright\";\n\n// LambdaTest capabilities\nconst capabilities = {\n  browserName: \"Chrome\", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n  browserVersion: \"latest\",\n  \"LT:Options\": {\n    platform: \"Windows 10\",\n    build: \"Playwright TypeScript Build\",\n    name: \"Playwright TypeScript Test\",\n    user: process.env.LT_USERNAME,\n    accessKey: process.env.LT_ACCESS_KEY,\n    network: true,\n    video: true,\n    console: true,\n    tunnel: false, // Add tunnel configuration if testing locally hosted webpage\n    tunnelName: \"\", // Optional\n    geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/\n  },\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm run test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The playwright-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "playwright-skill/\n├── SKILL.md\n└── reference/\n    ├── playbook.md\n    └── advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Playwright Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/playwright-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/playwright-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-27T00:00:00+05:30"
  }) }}
/>

# How to Run TypeScript Tests With Playwright on TestMu AI
***

Learn how to use Playwright with TypeScript to automate web application testing across 50+ real browsers and operating systems on the <BrandName /> cloud platform. You connect Playwright to the grid through a CDP WebSocket endpoint, pass your credentials and a `capabilities` object, then view the results on the Automation Dashboard.

## Prerequisites
***

Set up the following before you run the test so Playwright can authenticate and connect to the <BrandName /> grid.

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or clone the code sample for the Playwright TypeScript from the <BrandName /> GitHub repository to run the tests.

<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-test-ts" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="TestMu AI Playwright TypeScript sample repository on GitHub" className="doc_img"/> View on GitHub</a>
:::

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-test-ts
```

2. Install the npm dependencies.

<VerifiedTag value="Verified" />

```bash
npm install
```

3. A <BrandName /> Username and Access key. You can get it from your <BrandName /> Profile section. Don't have an account, <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>sign up for free</a>.

4. To run Playwright tests, set your <BrandName /> Username and Access key in the Environment Variables.

## Run your Playwright tests with TypeScript
***

Navigate to the `lambdatest-setup.ts` file in the `playwright-test-ts` directory. This TypeScript fixture builds the capabilities object, connects Playwright to the grid, and reports the test status.

<VerifiedTag value="Verified" />

```ts title="lambdatest-setup.ts"
/**
 * Add the file in your test suite to run tests on LambdaTest.
 * Import `test` object from this file in the tests.
 */

import * as base from "@playwright/test";
import path from "path";
import { chromium } from "playwright";

// LambdaTest capabilities
const capabilities = {
  browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 10",
    build: "Playwright TypeScript Build",
    name: "Playwright TypeScript Test",
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    video: true,
    console: true,
    tunnel: false, // Add tunnel configuration if testing locally hosted webpage
    tunnelName: "", // Optional
    geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
  },
};

// Patching the capabilities dynamically according to the project name.
const modifyCapabilities = (configName, testName) => {
  let config = configName.split("@lambdatest")[0];
  let [browserName, browserVersion, platform] = config.split(":");
  capabilities.browserName = browserName
    ? browserName
    : capabilities.browserName;
  capabilities.browserVersion = browserVersion
    ? browserVersion
    : capabilities.browserVersion;
  capabilities["LT:Options"]["platform"] = platform
    ? platform
    : capabilities["LT:Options"]["platform"];
  capabilities["LT:Options"]["name"] = testName;
};

const getErrorMessage = (obj, keys) =>
  keys.reduce(
    (obj, key) => (typeof obj == "object" ? obj[key] : undefined),
    obj
  );

const test = base.test.extend({
  page: async ({ page, playwright }, use, testInfo) => {
    // Configure LambdaTest platform for cross-browser testing
    let fileName = testInfo.file.split(path.sep).pop();
    if (testInfo.project.name.match(/lambdatest/)) {
      modifyCapabilities(
        testInfo.project.name,
        `${testInfo.title} - ${fileName}`
      );

      const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
          JSON.stringify(capabilities)
        )}`,
      });

      const ltPage = await browser.newPage(testInfo.project.use);
      await use(ltPage);

      const testStatus = {
        action: "setTestStatus",
        arguments: {
          status: testInfo.status,
          remark: getErrorMessage(testInfo, ["error", "message"]),
        },
      };
      await ltPage.evaluate(() => {},
      `lambdatest_action: ${JSON.stringify(testStatus)}`);
      await ltPage.close();
      await browser.close();
    } else {
      // Run tests in local in case of local config provided
      await use(page);
    }
  },
});

export default test;
```

Pass the below command in the terminal to run the test.

<VerifiedTag value="Verified" />

```bash
npm run test
```

## View your test results
***

Go to the [<BrandName /> Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright TypeScript test results.


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
      TypeScript with Playwright
      </span>
    </li>
  </ul>
</nav>
