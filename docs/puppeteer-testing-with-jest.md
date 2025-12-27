---
id: puppeteer-jest
title: Run Puppeteer Tests With Jest
hide_title: true
sidebar_label: Integrate With Jest
description: Learn how to integrate and run your Puppeteer tests with Jest across 40+ browser versions on the TestMu AI platform.
keywords:
  - puppeteer testing with jest
  - automation testing with puppeteer
  - how to use puppeteer for testing
  - test puppeteer
  - puppeteer testing tutorial
  - puppeteer testing lambdatest

  
url: https://www.lambdatest.com/support/docs/puppeteer-testing-with-jest/
site_name: LambdaTest
slug: puppeteer-testing-with-jest/
---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Puppeteer Testing With Jest",
          "item": "https://www.lambdatest.com/support/docs/puppeteer-testing-with-jest/"
        }]
      })
    }}
></script>

# Puppeteer Testing With Jest
* * *

Jest is a Facebook-maintained framework for developing frontend and backend unit tests in JavaScript and executing end-to-end testing using Playwright. It provides you with the flexibility to target a single test, delivering structured output, or an entire suite for common assertions.

LambdaTest allows you to run Puppeteer tests with Jest on a browser farm of 40+ real browsers and operating system combinations. 

This guide will cover the basics of getting started with Puppeteer testing with Jest on the LambdaTest platform.

## Prerequisites
***

>Note: All the code samples in this documentation can be found in the LambdaTest's Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/puppeteer-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

1. Clone the LambdaTest-Puppeteer repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Puppeteer tests with Jest, you will need to set your LambdaTest username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

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

## Running Tests Using Jest
---

>**Test Scenario**: The below test script searches LambdaTest on DuckDuckGo and verifies the website title.

1. To run the Puppeteer tests using Jest on LambdaTest, you need make some tweaks to the `jest-puppeteer.config.js` file.

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

3. Visit the LambdaTest Automation Dashboard to see the results of your Puppeteer Jest tests.


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
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
