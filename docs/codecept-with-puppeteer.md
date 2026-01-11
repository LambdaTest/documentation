---
id: puppeteer-codecept
title: Run Puppeteer Tests Using CodeceptJS
hide_title: true
sidebar_label: Integrate With CodeceptJS
description: Learn how to integrate and run your Puppeteer tests using CodeceptJS across 40+ browser versions on the TestMu AI platform.
keywords:
  - puppeteer testing with codeceptjs
  - puppeteer codecept
  - puppeteer mocha
  - automation testing with puppeteer
  - how to use puppeteer for testing
  - test puppeteer
  - puppeteer testing tutorial
  - puppeteer testing testmu ai

url: https://www.testmu.ai/support/docs/puppeteer-testing-with-codecept
site_name: LambdaTest
slug: puppeteer-testing-with-codecept
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
          "name": "Puppeteer Testing With CodeceptJS",
          "item": `${BRAND_URL}/support/docs/puppeteer-testing-with-codecept/`
        }]
      })
    }}
></script>

# Puppeteer Testing With CodeceptJS
* * *

Learn how to run your Puppeteer tests with CodeceptJS across 40+ real browsers and operating systems on the <BrandName /> platform. 

## Prerequisites
***

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or clone the code sample for the Puppeteer Codecept from the <BrandName /> GitHub repository to run the tests.

<a href="https://github.com/LambdaTest/puppeteer-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

```js
git clone https://github.com/LambdaTest/puppeteer-sample.git
cd puppeteer-sample
cd puppeteer-codecept

```

2. Install the npm dependencies.

```
npm install
```

3. If you are running Codecept for the first time, run the below command:

```
npm install codeceptjs puppeteer --save
```

4. To run Puppeteer tests with CodeceptJS, set your <BrandName /> username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="Image" width="1444" height="703"  className="doc_img"/>


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

## Running Tests Using CodeceptJS
--- 

>**Test Scenario**: The below test script searches <BrandName /> on DuckDuckGo and verifies the website title.

1. Navigate to the `codecept.conf.js` file in the `puppeteer-codecept` directory.


```js
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

const caps_chrome = {
	browserName    : 'Chrome',
	browserVersion : 'latest',
	'LT:Options'   : {
		platform   : 'Windows 10',
		build      : 'Sample Puppeteer-Codecept',
		name       : 'Puppeteer-Codecept test on Chrome',
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
		build      : 'Sample Puppeteer-Codecept',
		name       : 'Puppeteer-Codecept test on Edge',
		resolution : '1366x768',
		user       : process.env.LT_USERNAME,
		accessKey  : process.env.LT_USER_KEY,
		network    : true
	}
};

exports.config = {
  tests: './specs/*.spec.js',
  output: './output',
  helpers: {
    Puppeteer: {
      chrome: {
        browserWSEndpoint : `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(caps_chrome))}`,
        "ignoreHTTPSErrors": true
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-example',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
```

2. Now pass the below command to run your test.

```
npx codeceptjs run
```

3. Visit the [<BrandName /> Web Automation Dashboard](https://automation.lambdatest.com/build) to see your test results.
