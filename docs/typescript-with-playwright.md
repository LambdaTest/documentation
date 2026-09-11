---
id: typescript-with-playwright
title: Run your TypeScript automation scripts with Playwright on TestMu AI
hide_title: true
sidebar_label: TypeScript
description: Run your TypeScript automation scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.
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
    "headline": "Run your TypeScript automation scripts with Playwright on TestMu AI",
    "description": "Run your TypeScript automation scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/typescript-with-playwright/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
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
        "programmingLanguage": "JavaScript",
        "codeRepository": "https://github.com/LambdaTest/playwright-sample",
        "text": "git clone https://github.com/LambdaTest/playwright-sample.git\ncd playwright-sample\ncd playwright-test-ts"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "npm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run your Playwright tests with TypeScript",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "/**\n * Add the file in your test suite to run tests on LambdaTest.\n * Import `test` object from this file in the tests.\n */\n\nimport * as base from \"@playwright/test\";\nimport path from \"path\";\nimport { chromium } from \"playwright\";\n\n// LambdaTest capabilities\nconst capabilities = {\n  browserName: \"Chrome\", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n  browserVersion: \"latest\",\n  \"LT:Options\": {\n    platform: \"Windows 10\",\n    build: \"Playwright TypeScript Build\",\n    name: \"Playwright TypeScript Test\",\n    user: process.env.LT_USERNAME,\n    accessKey: process.env.LT_ACCESS_KEY,\n    network: true,\n    video: true,\n    console: true,\n    tunnel: false, // Add tunnel configuration if testing locally hosted webpage\n    tunnelName: \"\", // Optional\n    geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/\n  },\n};\n\n// Patching the capabilities dynamically according to the project name.\nconst modifyCapabilities = (configName, testName) => {\n  let config = configName.split(\"@lambdatest\")[0];\n  let [browserName, browserVersion, platform] = config.split(\":\");\n  capabilities.browserName = browserName\n    ? browserName\n    : capabilities.browserName;\n  capabilities.browserVersion = browserVersion\n    ? browserVersion\n    : capabilities.browserVersion;\n  capabilities[\"LT:Options\"][\"platform\"] = platform\n    ? platform\n    : capabilities[\"LT:Options\"][\"platform\"];\n  capabilities[\"LT:Options\"][\"name\"] = testName;\n};\n\nconst getErrorMessage = (obj, keys) =>\n  keys.reduce(\n    (obj, key) => (typeof obj == \"object\" ? obj[key] : undefined),\n    obj\n  );\n\nconst test = base.test.extend({\n  page: async ({ page, playwright }, use, testInfo) => {\n    // Configure LambdaTest platform for cross-browser testing\n    let fileName = testInfo.file.split(path.sep).pop();\n    if (testInfo.project.name.match(/lambdatest/)) {\n      modifyCapabilities(\n        testInfo.project.name,\n        `${testInfo.title} - ${fileName}`\n      );\n\n      const browser = await chromium.connect({\n        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(\n          JSON.stringify(capabilities)\n        )}`,\n      });\n\n      const ltPage = await browser.newPage(testInfo.project.use);\n      await use(ltPage);\n\n      const testStatus = {\n        action: \"setTestStatus\",\n        arguments: {\n          status: testInfo.status,\n          remark: getErrorMessage(testInfo, [\"error\", \"message\"]),\n        },\n      };\n      await ltPage.evaluate(() => {},\n      `lambdatest_action: ${JSON.stringify(testStatus)}`);\n      await ltPage.close();\n      await browser.close();\n    } else {\n      // Run tests in local in case of local config provided\n      await use(page);\n    }\n  },\n});\n\nexport default test;"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "npm run test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The playwright-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "playwright-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Playwright Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/playwright-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/playwright-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# TypeScript with Playwright: Running Your First Test
* * *

Learn how to use Playwright with TypeScript to automate web application testing across real browsers and operating systems on <BrandName /> cloud platform.


## Prerequisites
***

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or clone the code sample for the Playwright TypeScript from the <BrandName /> GitHub repository to run the tests.

<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-test-ts" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

<VerifiedTag value="Verified" />

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-test-ts
```

2. Install the npm dependencies.

<VerifiedTag value="Verified" />

```
npm install
```

3. A <BrandName /> Username and Access key. You can get it from your <BrandName /> Profile section. Don't have an account, <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>sign up for free</a>.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="Image" width="1444" height="703"  className="doc_img"/>

4. To run Playwright tests, set your <BrandName /> Username and Access key in the Environment Variables.

## Run your Playwright tests with TypeScript
---

Navigate to the `lambdatest-setup.ts` file in the `playwright-test-ts` directory.

<VerifiedTag value="Verified" />

```js
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

```js
npm run test
```

## View your test results
---

Go to the [<BrandName /> Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright TypeScript test results.






## Using the Playwright Agent Skill with TestMu AI
***

The [playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The playwright-skill package includes:

<VerifiedTag value="Verified" />

```
playwright-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing Playwright Agent Skill
***

Install a Playwright Agent Skill using the command below:

<VerifiedTag value="Verified" />

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/playwright-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/playwright-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only playwright-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
