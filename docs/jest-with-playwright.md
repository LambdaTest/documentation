---
id: jest-with-playwright
title: Run your Jest test scripts with Playwright on TestMu AI
hide_title: true
sidebar_label: Jest
description: Run your Jest scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.
keywords:
  - jest playwright
  - jest automation testing
  - playwrightjest 
  - playwright jest testing guide
  - jest playwright framework

url: https://www.testmuai.com/support/docs/jest-with-playwright/
site_name: TestMu AI
slug: jest-with-playwright/
canonical: https://www.testmuai.com/support/docs/jest-with-playwright/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Jest with Playwright",
          "item": `${BRAND_URL}/support/docs/jest-with-playwright/`
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
      "@id": "https://www.testmuai.com/support/docs/jest-with-playwright/"
    },
    "headline": "Run your Jest test scripts with Playwright on TestMu AI",
    "description": "Run your Jest scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/jest-with-playwright/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "jest playwright",
      "jest automation testing",
      "playwrightjest"
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
        "text": "git clone https://github.com/LambdaTest/playwright-sample.git\ncd playwright-sample\ncd playwright-jest-js"
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
        "name": "Run your Playwright tests with Jest",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const cp = require('child_process');\nconst playwrightClientVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];\n\nconst caps_chromium = {\n  'browserName': 'pw-chromium', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n  'browserVersion': 'latest',\n  'LT:Options': {\n    'platform': 'Windows 10',\n    'build': 'Playwright-Jest Build',\n    'name': 'Playwright-Jest Test on Chromium',\n    'user': process.env.LT_USERNAME,\n    'accessKey': process.env.LT_ACCESS_KEY,\n    'network': true,\n    'video': true,\n    'console': true,\n    'tunnel': false, // Add tunnel configuration if testing locally hosted webpage\n    'tunnelName': '', // Optional\n    'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/\n    'playwrightClientVersion': playwrightClientVersion\n  }\n};\n\nconst caps_firefox = {\n  'browserName': 'pw-firefox', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n  'browserVersion': 'latest',\n  'LT:Options': {\n    'platform': 'Windows 10',\n    'build': 'Playwright-Jest Build ',\n    'name': 'Playwright-Jest Test on Firefox',\n    'user': process.env.LT_USERNAME,\n    'accessKey': process.env.LT_ACCESS_KEY,\n    'network': true,\n    'video': true,\n    'console': true,\n    'tunnel': false, // Add tunnel configuration if testing locally hosted webpage\n    'tunnelName': '', // Optional\n    'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/\n  }\n};\n\nconst caps_webkit = {\n  'browserName': 'pw-webkit', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n  'browserVersion': 'latest',\n  'LT:Options': {\n    'platform': 'Windows 10',\n    'build': 'Playwright-Jest Build',\n    'name': 'Playwright-Jest Test on WebKit',\n    'user': process.env.LT_USERNAME,\n    'accessKey': process.env.LT_ACCESS_KEY,\n    'network': true,\n    'video': true,\n    'console': true,\n    'tunnel': false, // Add tunnel configuration if testing locally hosted webpage\n    'tunnelName': '', // Optional\n    'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/\n  }\n};\n\nmodule.exports = {\n    connectOptions: {\n        chromium: {\n          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(caps_chromium))}`\n        },\n        firefox: {\n          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(caps_firefox))}`\n        },\n        webkit: {\n            wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(caps_webkit))}`\n        }\n      },\n      browsers: ['chromium', 'firefox', 'webkit'],\n}"
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
        "name": "The jest-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "jest-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Jest Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/jest-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/jest-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Jest with Playwright: Running Your First Test
* * *

Learn how to use Playwright with Jest framework to automate web application testing across real browsers and operating systems on <BrandName /> cloud platform.

## Prerequisites
***

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or clone the code sample for the Playwright Jest from the <BrandName /> GitHub repository to run the tests.

<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-jest-js" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-jest-js
```

2. Install the npm dependencies.

<VerifiedTag value="Verified" />

```
npm install
```

3. A <BrandName /> Username and Access key. You can get it from your <BrandName /> Profile section. Don't have an account, <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>sign up for free</a>.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="Image" width="1444" height="703"  className="doc_img"/>

4. To run Playwright tests, set your <BrandName /> Username and Access key in the Environment Variables.


## Run your Playwright tests with Jest
---

Navigate to the `jest-playwright.config.js` file in the `playwright-jest-js` directory and provide your <BrandName /> Username and Access key.

```js
const cp = require('child_process');
const playwrightClientVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];

const caps_chromium = {
  'browserName': 'pw-chromium', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'Windows 10',
    'build': 'Playwright-Jest Build',
    'name': 'Playwright-Jest Test on Chromium',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY,
    'network': true,
    'video': true,
    'console': true,
    'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
    'tunnelName': '', // Optional
    'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    'playwrightClientVersion': playwrightClientVersion
  }
};

const caps_firefox = {
  'browserName': 'pw-firefox', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'Windows 10',
    'build': 'Playwright-Jest Build ',
    'name': 'Playwright-Jest Test on Firefox',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY,
    'network': true,
    'video': true,
    'console': true,
    'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
    'tunnelName': '', // Optional
    'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
  }
};

const caps_webkit = {
  'browserName': 'pw-webkit', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'Windows 10',
    'build': 'Playwright-Jest Build',
    'name': 'Playwright-Jest Test on WebKit',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY,
    'network': true,
    'video': true,
    'console': true,
    'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
    'tunnelName': '', // Optional
    'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
  }
};

module.exports = {
    connectOptions: {
        chromium: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(caps_chromium))}`
        },
        firefox: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(caps_firefox))}`
        },
        webkit: {
            wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(caps_webkit))}`
        }
      },
      browsers: ['chromium', 'firefox', 'webkit'],
}
```

Pass the below command in the terminal to run the test.

```js
npm run test
```

## View your test results
---

Go to the [<BrandName /> Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright JavaScript test results.






## Using the Jest Agent Skill with TestMu AI
***

The [jest-skill](https://github.com/LambdaTest/agent-skills/tree/main/jest-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The jest-skill package includes:

<VerifiedTag value="Verified" />

```
jest-skill/
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


### Installing Jest Agent Skill
***

Install a Jest Agent Skill using the command below:

<VerifiedTag value="Verified" />

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/jest-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/jest-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only jest-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
