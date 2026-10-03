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
    "headline": "How to Run Puppeteer Tests With Jest on TestMu AI",
    "description": "Run Puppeteer tests with Jest across real browsers and operating systems on TestMu AI, including setup, capabilities, and test execution.",
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
      "puppeteer jest test runner",
      "run puppeteer tests on testmu ai",
      "automation testing with puppeteer",
      "puppeteer jest capabilities"
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
        "name": "Install the npm dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "npm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set credentials on Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "set LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set credentials on macOS/Linux",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run Puppeteer Jest Tests on TestMu AI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const caps_chrome = {\n\tbrowserName    : 'Chrome',\n\tbrowserVersion : 'latest',\n\t'LT:Options'   : {\n\t\tplatform   : 'Windows 10',\n\t\tbuild      : 'Sample Puppeteer-Jest',\n\t\tname       : 'Puppeteer-jest test on Chrome',\n\t\tresolution : '1366x768',\n\t\tuser       : process.env.LT_USERNAME,\n\t\taccessKey  : process.env.LT_USER_KEY,\n\t\tnetwork    : true\n\t}\n};\n\nconst caps_edge = {\n\tbrowserName    : 'MicrosoftEdge',\n\tbrowserVersion : 'latest',\n\t'LT:Options'   : {\n\t\tplatform   : 'Windows 10',\n\t\tbuild      : 'Sample Puppeteer-Jest',\n\t\tname       : 'Puppeteer-jest test on Edge',\n\t\tresolution : '1366x768',\n\t\tuser       : process.env.LT_USERNAME,\n\t\taccessKey  : process.env.LT_USER_KEY,\n\t\tnetwork    : true\n\t}\n};\n\nmodule.exports = {\n\tconnect : {\n\t\tbrowserWSEndpoint : `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(\n\t\t\tJSON.stringify(caps_chrome)\n\t\t)}`\n\t}\n};\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "npm run test"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# How to Run Puppeteer Tests With Jest on TestMu AI
***

If you write Puppeteer tests with Jest, you can run the same specs across real browsers and operating systems on TestMu AI instead of a single local machine. This gives you Jest's structured output and assertions on a browser farm, whether you target a single test or an entire suite. You connect Puppeteer to the TestMu AI cloud grid through a `browserWSEndpoint` in your Jest configuration, then run the suite with the standard `npm run test` command.

## Prerequisites
***

Before you run your first suite, clone the sample repository and set the credentials TestMu AI uses to authenticate your session.

:::tip Sample repo
<a href="https://github.com/LambdaTest/puppeteer-sample/tree/main/puppeteer-jest" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="TestMu AI Puppeteer Jest sample on GitHub"  className="doc_img"/> View on GitHub</a>
:::

1. Clone the TestMu AI Puppeteer repository on your system.

2. Install the npm dependencies.

<VerifiedTag value="Verified" />

```
npm install
```

3. Set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to find them.

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

## Run Puppeteer Jest Tests on TestMu AI
***

The sample test script searches for TestMu AI on DuckDuckGo and verifies the page title. Configure the capabilities, then run the suite with a single command.

1. To run the Puppeteer tests using Jest on TestMu AI, make the required changes to the `jest-puppeteer.config.js` file.

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

2. Run the following command to execute your test.

<VerifiedTag value="Verified" />

```bash
npm run test
```

3. Visit the TestMu AI Automation Dashboard to see the results of your Puppeteer Jest tests.


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
