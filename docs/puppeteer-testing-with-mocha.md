---
id: puppeteer-mocha
title: How to Run Puppeteer Tests With Mocha on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Mocha"
description: Run Puppeteer tests with Mocha on real browsers and operating systems on the TestMu AI cloud grid, including setup, capabilities, and execution.
keywords:
  - puppeteer testing with mocha
  - puppeteer mocha test runner
  - run puppeteer tests on testmu ai
  - automation testing with puppeteer
  - puppeteer mocha capabilities

url: https://www.testmuai.com/support/docs/puppeteer-testing-with-mocha/
site_name: TestMu AI
slug: puppeteer-testing-with-mocha/
canonical: https://www.testmuai.com/support/docs/puppeteer-testing-with-mocha/
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
          "name": "Puppeteer Testing With Mocha",
          "item": `${BRAND_URL}/support/docs/puppeteer-testing-with-mocha/`
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
      "@id": "https://www.testmuai.com/support/docs/puppeteer-testing-with-mocha/"
    },
    "headline": "Run Puppeteer Tests Using Mocha",
    "description": "Learn how to integrate and run your Puppeteer tests using Mocha across multiple browser versions on the TestMu AI platform.",
    "url": "https://www.testmuai.com/support/docs/puppeteer-testing-with-mocha/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "puppeteer testing with mocha test runner",
      "puppeteer testing with mocha test runner",
      "puppeteer mocha test runner"
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
        "name": "Running Tests Using Mocha",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const puppeteer = require('puppeteer');\nconst expect = require('chai').expect;\nconst caps_chrome = {\n\tbrowserName    : 'Chrome',\n\tbrowserVersion : 'latest',\n\t'LT:Options'   : {\n\t\tplatform   : 'Windows 10',\n\t\tbuild      : 'Sample Puppeteer-Mocha',\n\t\tname       : 'Puppeteer-mocha test on Chrome',\n\t\tresolution : '1366x768',\n\t\tuser       : process.env.LT_USERNAME,\n\t\taccessKey  : process.env.LT_ACCESS_KEY,\n\t\tnetwork    : true\n\t}\n};\nconst caps_edge = {\n\tbrowserName    : 'MicrosoftEdge',\n\tbrowserVersion : 'latest',\n\t'LT:Options'   : {\n\t\tplatform   : 'Windows 10',\n\t\tbuild      : 'Sample Puppeteer-Mocha',\n\t\tname       : 'Puppeteer-mocha test on Edge',\n\t\tresolution : '1366x768',\n\t\tuser       : process.env.LT_USERNAME,\n\t\taccessKey  : process.env.LT_ACCESS_KEY,\n\t\tnetwork    : true\n\t}\n};\n\nlet browser = null;\nlet page = null;\ndescribe('Search Text', () => {\n\tbeforeEach(async () => {\n\t\tbrowser = await puppeteer.connect({\n\t\t\tbrowserWSEndpoint : `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(\n\t\t\t\tJSON.stringify(caps_chrome)\n\t\t\t)}`\n\t\t});\n\t\tpage = await browser.newPage();\n\t});\n\n\tit('should be titled \"Google\"', async () => {\n\t\tlet text = 'Google';\n\t\tawait page.goto('https://www.duckduckgo.com');\n\t\tvar element = await page.$('[name=\"q\"]');\n\t\tawait element.click();\n\t\tawait element.type(text);\n\t\tawait Promise.all([\n\t\t\tpage.keyboard.press('Enter'),\n\t\t\tpage.waitForNavigation()\n\t\t]);\n\t\tvar title = await page.title();\n\t\ttry {\n\t\t\texpect(title).equal(text + ' at DuckDuckGo', 'Expected page title is incorrect!');\n\t\t\tawait page.evaluate(\n\t\t\t\t(_) => {},\n\t\t\t\t`lambdatest_action: ${JSON.stringify({\n\t\t\t\t\taction    : 'setTestStatus',\n\t\t\t\t\targuments : { status: 'passed', remark: 'assertion passed' }\n\t\t\t\t})}`\n\t\t\t);\n\t\t} catch (e) {\n\t\t\tawait page.evaluate(\n\t\t\t\t(_) => {},\n\t\t\t\t`lambdatest_action: ${JSON.stringify({\n\t\t\t\t\taction    : 'setTestStatus',\n\t\t\t\t\targuments : { status: 'failed', remark: e.name }\n\t\t\t\t})}`\n\t\t\t);\n\t\t}\n\t});\n\n\tafterEach(async () => {\n\t\tawait page.close();\n\t\tawait browser.close();\n\t});\n});"
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
        "name": "The mocha-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "mocha-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Mocha Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/mocha-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/mocha-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>


# How to Run Puppeteer Tests With Mocha on TestMu AI
***

If you write Puppeteer tests with Mocha, you can run the same specs across real browsers and operating systems on TestMu AI instead of a single local machine. This gives you serial, structured Mocha reporting on a browser farm that maps failures back to the right test cases. You connect Puppeteer to the TestMu AI cloud grid through a `browserWSEndpoint`, define your browser capabilities, and run the suite with the standard `npm run test` command.

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

## Run Puppeteer Mocha Tests on TestMu AI
***

The sample test script searches for TestMu AI on DuckDuckGo and verifies the page title. Configure the capabilities, then run the suite with a single command.

1. To run the Puppeteer Mocha tests on TestMu AI, make the required changes to the `google.spec.js` file.

<VerifiedTag value="Verified" />

```js
const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const caps_chrome = {
	browserName    : 'Chrome',
	browserVersion : 'latest',
	'LT:Options'   : {
		platform   : 'Windows 10',
		build      : 'Sample Puppeteer-Mocha',
		name       : 'Puppeteer-mocha test on Chrome',
		resolution : '1366x768',
		user       : process.env.LT_USERNAME,
		accessKey  : process.env.LT_ACCESS_KEY,
		network    : true
	}
};
const caps_edge = {
	browserName    : 'MicrosoftEdge',
	browserVersion : 'latest',
	'LT:Options'   : {
		platform   : 'Windows 10',
		build      : 'Sample Puppeteer-Mocha',
		name       : 'Puppeteer-mocha test on Edge',
		resolution : '1366x768',
		user       : process.env.LT_USERNAME,
		accessKey  : process.env.LT_ACCESS_KEY,
		network    : true
	}
};

let browser = null;
let page = null;
describe('Search Text', () => {
	beforeEach(async () => {
		browser = await puppeteer.connect({
			browserWSEndpoint : `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(
				JSON.stringify(caps_chrome)
			)}`
		});
		page = await browser.newPage();
	});

	it('should be titled "Google"', async () => {
		let text = 'Google';
		await page.goto('https://www.duckduckgo.com');
		var element = await page.$('[name="q"]');
		await element.click();
		await element.type(text);
		await Promise.all([
			page.keyboard.press('Enter'),
			page.waitForNavigation()
		]);
		var title = await page.title();
		try {
			expect(title).equal(text + ' at DuckDuckGo', 'Expected page title is incorrect!');
			await page.evaluate(
				(_) => {},
				`lambdatest_action: ${JSON.stringify({
					action    : 'setTestStatus',
					arguments : { status: 'passed', remark: 'assertion passed' }
				})}`
			);
		} catch (e) {
			await page.evaluate(
				(_) => {},
				`lambdatest_action: ${JSON.stringify({
					action    : 'setTestStatus',
					arguments : { status: 'failed', remark: e.name }
				})}`
			);
		}
	});

	afterEach(async () => {
		await page.close();
		await browser.close();
	});
});
```

2. Run the following command to execute your test.

<VerifiedTag value="Verified" />

```bash
npm run test
```

3. Visit the TestMu AI Automation Dashboard to see the results of your Puppeteer Mocha tests.

## Using the Mocha Agent Skill With TestMu AI
***

The Mocha Agent Skill helps AI coding assistants generate production-ready Mocha test automation for TestMu AI. It is part of the [TestMu AI agent skills collection](https://github.com/LambdaTest/agent-skills/), and you can read the [Mocha Agent Skill reference on GitHub](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill).

The mocha-skill package includes the following files:

<VerifiedTag value="Verified" />

```text
mocha-skill/
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

### Installing the Mocha Agent Skill
***

Clone the agent skills repository and copy the Mocha Agent Skill into your tool's skills directory.

<VerifiedTag value="Verified" />

```bash
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/mocha-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/mocha-skill .cursor/skills/
```

:::note
To install all available framework skills instead of only the Mocha Agent Skill, clone the repository directly into your tool's skills directory (for example, `.claude/skills/`, `.cursor/skills/`, `.gemini/skills/`, or `.agent/skills/`).
:::

## Related Puppeteer Guides
***

Continue with the guides below to configure and scale your Puppeteer runs on TestMu AI.

* [Run your first Puppeteer test on TestMu AI](/support/docs/puppeteer-testing/)
* [Run Puppeteer tests with Jest](/support/docs/puppeteer-testing-with-jest/)
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
        Puppeteer Testing With Mocha
      </span>
    </li>
  </ul>
</nav>
