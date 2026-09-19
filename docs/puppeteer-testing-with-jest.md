---
id: puppeteer-jest
title: How to Run Puppeteer Tests With Jest on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Jest"
description: Run Puppeteer tests with Jest across real browsers and operating systems on TestMu AI, including setup, capabilities, and test execution.
keywords:
  - puppeteer testing with jest
  - puppeteer jest test runner
  - run puppeteer tests on testmu ai
  - automation testing with puppeteer
  - puppeteer jest capabilities
url: https://www.testmuai.com/support/docs/puppeteer-testing-with-jest/
site_name: TestMu AI
slug: puppeteer-testing-with-jest/
canonical: https://www.testmuai.com/support/docs/puppeteer-testing-with-jest/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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

# How to Run Puppeteer Tests With Jest on TestMu AI
***

If you write Puppeteer tests with Jest, you can run the same specs across real browsers and operating systems on TestMu AI instead of a single local machine. This gives you Jest's structured output and assertions on a browser farm, whether you target a single test or an entire suite. You connect Puppeteer to the TestMu AI cloud grid through a `browserWSEndpoint` in your Jest configuration, then run the suite with the standard `npm run test` command.

## Prerequisites
***

Before you run your first suite, clone the sample repository and set the credentials TestMu AI uses to authenticate your session.

:::note
All the code samples in this documentation are available in the TestMu AI repository on GitHub. Download or clone the repository to run your tests quickly.
:::

<a href="https://github.com/LambdaTest/puppeteer-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="TestMu AI Puppeteer sample repository on GitHub"  className="doc_img"/> View on GitHub</a>

1. Clone the TestMu AI Puppeteer repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. Set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to find them.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Access Key button at the top-right of the TestMu AI Automation Dashboard" width="1444" height="703"  className="doc_img"/>

**Windows**

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Run Puppeteer Jest Tests on TestMu AI
***

The sample test script searches for TestMu AI on DuckDuckGo and verifies the page title. Configure the capabilities, then run the suite with a single command.

1. To run the Puppeteer tests using Jest on TestMu AI, make the required changes to the `jest-puppeteer.config.js` file.

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

2. Run the following command to execute your test.

```bash
npm run test
```

3. Visit the TestMu AI Automation Dashboard to see the results of your Puppeteer Jest tests.

## Using the Jest Agent Skill With TestMu AI
***

The Jest Agent Skill helps AI coding assistants generate production-ready Jest test automation for TestMu AI. It is part of the [TestMu AI agent skills collection](https://github.com/LambdaTest/agent-skills/), and you can read the [Jest Agent Skill reference on GitHub](https://github.com/LambdaTest/agent-skills/tree/main/jest-skill).

The jest-skill package includes the following files:

```text
jest-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for the following areas:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration

### Installing the Jest Agent Skill
***

Clone the agent skills repository and copy the Jest Agent Skill into your tool's skills directory.

```bash
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/jest-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/jest-skill .cursor/skills/
```

:::note
To install all available framework skills instead of only the Jest Agent Skill, clone the repository directly into your tool's skills directory (for example, `.claude/skills/`, `.cursor/skills/`, `.gemini/skills/`, or `.agent/skills/`).
:::

## Related Puppeteer Guides
***

Continue with the guides below to configure and scale your Puppeteer runs on TestMu AI.

* [Run your first Puppeteer test on TestMu AI](/support/docs/puppeteer-testing/)
* [Run Puppeteer tests with Mocha](/support/docs/puppeteer-testing-with-mocha/)
* [Configure Puppeteer capabilities](/support/docs/capabilities-for-puppeteer/)

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
