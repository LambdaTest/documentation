---
id: puppeteer-mocha
title: Run Puppeteer Tests Using Mocha
hide_title: true
sidebar_label: Integrate With Mocha
description: Learn how to integrate and run your Puppeteer tests using Mocha across multiple browser versions on the TestMu AI platform.
keywords:
  - puppeteer testing with mocha test runner
  - puppeteer testing with mocha test runner
  - puppeteer mocha test runner
  - puppeteer mocha
  - automation testing with puppeteer
  - how to use puppeteer for testing
  - test puppeteer
  - puppeteer testing tutorial
  - puppeteer testing testmu ai

url: https://www.testmuai.com/support/docs/puppeteer-testing-with-mocha/
site_name: TestMu AI
slug: puppeteer-testing-with-mocha/
canonical: https://www.testmuai.com/support/docs/puppeteer-testing-with-mocha/
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

# Puppeteer Testing With Mocha
* * *

Mocha is a JavaScript automation testing framework to run the tests on Node.js and the browser. It enables you to run test cases serially, providing greater flexibility and accurate test reporting while mapping unidentified bugs to the correct test cases.

<BrandName /> allows you to run Puppeteer tests with Mocha on a browser farm of real browsers and operating system combinations. 

This guide will cover the basics of getting started with Puppeteer testing with Mocha on the <BrandName /> platform.

## Prerequisites
***

>Note: All the code samples in this documentation can be found in the <BrandName />'s Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/puppeteer-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

1. Clone the <BrandName />-Puppeteer repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Puppeteer tests with Mocha, you will need to set your <BrandName /> username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>


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

## Running Tests Using Mocha
--- 

>**Test Scenario**: The below test script searches <BrandName /> on DuckDuckGo and verifies the website title.

1. To run the Puppeteer Mocha tests on <BrandName />, you need make some tweaks to the `google.spec.js` file.

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

2. Now pass the below command to run your test.

```
npm run test
```


3. Visit the <BrandName /> Automation Dashboard to see the results of your Puppeteer Mocha tests.




## Using the Mocha Agent Skill with TestMu AI
***

The [mocha-skill](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The mocha-skill package includes:

```
mocha-skill/
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


### Installing Mocha Agent Skill
***

Install a Mocha Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/mocha-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/mocha-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only mocha-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

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
