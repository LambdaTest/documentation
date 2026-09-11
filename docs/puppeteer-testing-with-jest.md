---
id: puppeteer-jest
title: Run Puppeteer Tests With Jest
hide_title: true
sidebar_label: Integrate With Jest
description: Learn how to integrate and run your Puppeteer tests with Jest across multiple browser versions on the TestMu AI platform.
keywords:
  - puppeteer testing with jest
  - automation testing with puppeteer
  - how to use puppeteer for testing
  - test puppeteer
  - puppeteer testing tutorial
  - puppeteer testing testmu ai

  
url: https://www.testmuai.com/support/docs/puppeteer-testing-with-jest/
site_name: TestMu AI
slug: puppeteer-testing-with-jest/
canonical: https://www.testmuai.com/support/docs/puppeteer-testing-with-jest/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Puppeteer Testing With Jest",
          "item": `${BRAND_URL}/support/docs/puppeteer-testing-with-jest/`
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
      "@id": "https://www.testmuai.com/support/docs/puppeteer-testing-with-jest/"
    },
    "headline": "Run Puppeteer Tests With Jest",
    "description": "Learn how to integrate and run your Puppeteer tests with Jest across multiple browser versions on the TestMu AI platform.",
    "url": "https://www.testmuai.com/support/docs/puppeteer-testing-with-jest/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "puppeteer testing with jest",
      "automation testing with puppeteer",
      "how to use puppeteer for testing"
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
        "programmingLanguage": "text",
        "text": "npm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "set LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Tests Using Jest",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const caps_chrome = {\n\tbrowserName    : 'Chrome',\n\tbrowserVersion : 'latest',\n\t'LT:Options'   : {\n\t\tplatform   : 'Windows 10',\n\t\tbuild      : 'Sample Puppeteer-Jest',\n\t\tname       : 'Puppeteer-jest test on Chrome',\n\t\tresolution : '1366x768',\n\t\tuser       : process.env.LT_USERNAME,\n\t\taccessKey  : process.env.LT_USER_KEY,\n\t\tnetwork    : true\n\t}\n};\n\nconst caps_edge = {\n\tbrowserName    : 'MicrosoftEdge',\n\tbrowserVersion : 'latest',\n\t'LT:Options'   : {\n\t\tplatform   : 'Windows 10',\n\t\tbuild      : 'Sample Puppeteer-Jest',\n\t\tname       : 'Puppeteer-jest test on Edge',\n\t\tresolution : '1366x768',\n\t\tuser       : process.env.LT_USERNAME,\n\t\taccessKey  : process.env.LT_USER_KEY,\n\t\tnetwork    : true\n\t}\n};\n\nmodule.exports = {\n\tconnect : {\n\t\tbrowserWSEndpoint : `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(\n\t\t\tJSON.stringify(caps_chrome)\n\t\t)}`\n\t}\n};\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
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

# Puppeteer Testing With Jest
* * *

Jest is a Facebook-maintained framework for developing frontend and backend unit tests in JavaScript and executing end-to-end testing using Playwright. It provides you with the flexibility to target a single test, delivering structured output, or an entire suite for common assertions.

<BrandName /> allows you to run Puppeteer tests with Jest on a browser farm of real browsers and operating system combinations. 

This guide will cover the basics of getting started with Puppeteer testing with Jest on the <BrandName /> platform.

## Prerequisites
***

>Note: All the code samples in this documentation can be found in the <BrandName />'s Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/puppeteer-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

1. Clone the <BrandName />-Puppeteer repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Puppeteer tests with Jest, you will need to set your <BrandName /> username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>


**Windows**

<VerifiedTag value="Verified" />

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

<VerifiedTag value="Verified" />

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Running Tests Using Jest
---

>**Test Scenario**: The below test script searches <BrandName /> on DuckDuckGo and verifies the website title.

1. To run the Puppeteer tests using Jest on <BrandName />, you need make some tweaks to the `jest-puppeteer.config.js` file.

<VerifiedTag value="Verified" />

```js
const caps_chrome = {
	browserName    : 'Chrome',
	browserVersion : 'latest',
	'LT:Options'   : {
		platform   : 'Windows 10',
		build      : 'Sample Puppeteer-Jest',
		name       : 'Puppeteer-jest test on Chrome',
		resolution : '1366x768',
		user       : process.env.LT_USERNAME,
		accessKey  : process.env.LT_USER_KEY,
		network    : true
	}
};

const caps_edge = {
	browserName    : 'MicrosoftEdge',
	browserVersion : 'latest',
	'LT:Options'   : {
		platform   : 'Windows 10',
		build      : 'Sample Puppeteer-Jest',
		name       : 'Puppeteer-jest test on Edge',
		resolution : '1366x768',
		user       : process.env.LT_USERNAME,
		accessKey  : process.env.LT_USER_KEY,
		network    : true
	}
};

module.exports = {
	connect : {
		browserWSEndpoint : `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(
			JSON.stringify(caps_chrome)
		)}`
	}
};

```

2. Pass the below command to run the test.

```
npm run test
```

3. Visit the <BrandName /> Automation Dashboard to see the results of your Puppeteer Jest tests.





## Using the Jest Agent Skill with TestMu AI
***

The [jest-skill](https://github.com/LambdaTest/agent-skills/tree/main/jest-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The jest-skill package includes:

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

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/jest-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/jest-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only jest-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Puppeteer Testing With Jest
      </span>
    </li>
  </ul>
</nav>
