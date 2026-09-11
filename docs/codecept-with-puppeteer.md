---
id: puppeteer-codecept
title: Run Puppeteer Tests Using CodeceptJS
hide_title: true
sidebar_label: Integrate With CodeceptJS
description: Learn how to integrate and run your Puppeteer tests using CodeceptJS across multiple browser versions on the TestMu AI platform.
keywords:
  - puppeteer testing with codeceptjs
  - puppeteer codecept
  - puppeteer mocha
  - automation testing with puppeteer
  - how to use puppeteer for testing
  - test puppeteer
  - puppeteer testing tutorial
  - puppeteer testing testmu ai

url: https://www.testmuai.com/support/docs/puppeteer-testing-with-codecept/
site_name: TestMu AI
slug: puppeteer-testing-with-codecept/
canonical: https://www.testmuai.com/support/docs/puppeteer-testing-with-codecept/
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/puppeteer-testing-with-codecept/"
    },
    "headline": "Run Puppeteer Tests Using CodeceptJS",
    "description": "Learn how to integrate and run your Puppeteer tests using CodeceptJS across multiple browser versions on the TestMu AI platform.",
    "url": "https://www.testmuai.com/support/docs/puppeteer-testing-with-codecept/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "puppeteer testing with codeceptjs",
      "puppeteer codecept",
      "puppeteer mocha"
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
        "codeRepository": "https://github.com/LambdaTest/puppeteer-sample",
        "text": "git clone https://github.com/LambdaTest/puppeteer-sample.git\ncd puppeteer-sample\ncd puppeteer-codecept\n"
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
        "name": "If you are running Codecept for the first time, run the below command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "npm install codeceptjs puppeteer --save"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "set LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Tests Using CodeceptJS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { setHeadlessWhen } = require('@codeceptjs/configure');\n\n// turn on headless mode when running with HEADLESS=true environment variable\n// export HEADLESS=true && npx codeceptjs run\nsetHeadlessWhen(process.env.HEADLESS);\n\nconst caps_chrome = {\n\tbrowserName    : 'Chrome',\n\tbrowserVersion : 'latest',\n\t'LT:Options'   : {\n\t\tplatform   : 'Windows 10',\n\t\tbuild      : 'Sample Puppeteer-Codecept',\n\t\tname       : 'Puppeteer-Codecept test on Chrome',\n\t\tresolution : '1366x768',\n\t\tuser       : process.env.LT_USERNAME,\n\t\taccessKey  : process.env.LT_USER_KEY,\n\t\tnetwork    : true\n\t}\n};\n\nconst caps_edge = {\n\tbrowserName    : 'MicrosoftEdge',\n\tbrowserVersion : 'latest',\n\t'LT:Options'   : {\n\t\tplatform   : 'Windows 10',\n\t\tbuild      : 'Sample Puppeteer-Codecept',\n\t\tname       : 'Puppeteer-Codecept test on Edge',\n\t\tresolution : '1366x768',\n\t\tuser       : process.env.LT_USERNAME,\n\t\taccessKey  : process.env.LT_USER_KEY,\n\t\tnetwork    : true\n\t}\n};\n\nexports.config = {\n  tests: './specs/*.spec.js',\n  output: './output',\n  helpers: {\n    Puppeteer: {\n      chrome: {\n        browserWSEndpoint : `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(caps_chrome))}`,\n        \"ignoreHTTPSErrors\": true\n      }\n    }\n  },\n  include: {\n    I: './steps_file.js'\n  },\n  bootstrap: null,\n  mocha: {},\n  name: 'codeceptjs-example',\n  plugins: {\n    pauseOnFail: {},\n    retryFailedStep: {\n      enabled: true\n    },\n    tryTo: {\n      enabled: true\n    },\n    screenshotOnFail: {\n      enabled: true\n    }\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 7",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "npx codeceptjs run"
      }
    ],
    "dateModified": "2026-08-14T19:24:28+05:30"
  }) }}
/>

# Puppeteer Testing With CodeceptJS
* * *

Learn how to run your Puppeteer tests with CodeceptJS across real browsers and operating systems on the <BrandName /> platform. 

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

<VerifiedTag value="Verified" />

```
npm install
```

3. If you are running Codecept for the first time, run the below command:

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```
npx codeceptjs run
```

3. Visit the [<BrandName /> Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your test results.
