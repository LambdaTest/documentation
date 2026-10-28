---
id: running-javascript-test-scripts-on-lambdatest
title: Selenium With JavaScript
sidebar_label: JavaScript
description: Run JavaScript Selenium test scripts on TestMu AI cloud grid with 3000+ real browsers and operating systems.
keywords:
  - javascript selenium grid testing
  - run javascript selenium tests cloud
  - selenium webdriver javascript setup
  - javascript browser automation tutorial
  - javascript selenium cloud execution
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';
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
          "name": "Selenium With JavaScript",
          "item": `${BRAND_URL}/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With JavaScript",
    "description": "Run JavaScript Selenium test scripts on TestMu AI cloud grid with 3000+ real browsers and operating systems. Covers Mocha, Nightwatch, WebdriverIO, Jest, CucumberJS, Jasmine, Karma, TestCafe, NemoJS, and CodeceptJS.",
    "url": "https://www.testmuai.com/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "javascript selenium grid testing",
      "run javascript selenium tests cloud",
      "selenium webdriver javascript setup"
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
        "name": "A minimal one looks like this",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const capabilities = {\n  build: 'NodeJS build',\n  name: 'Test 1',\n  platformName: 'Windows 10',\n  browserName: 'chrome',\n  browserVersion: 'latest',\n  network: true,\n  visual: true,\n  console: true,\n  video: true\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/mocha-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/mocha-selenium-sample\ncd mocha-selenium-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Mocha",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nnpm run single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/nightwatch-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/nightwatch-selenium-sample\ncd nightwatch-selenium-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm run single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/webdriverio-selenium",
        "text": "git clone https://github.com/LambdaTest/webdriverio-selenium\ncd webdriverio-selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 7",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nnpm run single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/jest-selenium-webdriver-sample",
        "text": "git clone https://github.com/LambdaTest/jest-selenium-webdriver-sample\ncd jest-selenium-webdriver-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set your browser and OS in the capabilities object",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const capabilities = {\n  build: 'jest-LambdaTest-Single',\n  browserName: 'chrome',\n  browserVersion: 'latest',\n  platformName: 'Windows 10',\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm test single.test.js"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/NodeJs-Cucumber-Selenium",
        "text": "git clone https://github.com/LambdaTest/NodeJs-Cucumber-Selenium\ncd NodeJs-Cucumber-Selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "CucumberJS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nnpm run single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/karma-jasmine-sample",
        "text": "git clone https://github.com/LambdaTest/karma-jasmine-sample\ncd karma-jasmine-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Jasmine",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nkarma start karma.conf.js"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/angular-karma-sample",
        "text": "git clone https://github.com/LambdaTest/angular-karma-sample\ncd angular-karma-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Karma",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nkarma start karma.conf.js"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the plugin in your TestCafe project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install testcafe-browser-provider-lambdatest"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run your test against the grid, naming the browser and OS in the command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "testcafe \"lambdatest:Chrome@74.0:Windows 8\" 'path/to/test/file.js'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Nemo-Lambdatest-sample",
        "text": "git clone https://github.com/LambdaTest/Nemo-Lambdatest-sample\ncd Nemo-Lambdatest-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "NemoJS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nnpx nemo -P chrome"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/lambdatest-codeceptjs-sample",
        "text": "git clone https://github.com/LambdaTest/lambdatest-codeceptjs-sample\ncd lambdatest-codeceptjs-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 22",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nnpm test"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

---

Run your JavaScript Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites
---
Complete these steps before running JavaScript Selenium tests on TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** v6 or newer from [nodejs.org](https://nodejs.org/en/).
3. Install **npm** from the [official npm website](https://www.npmjs.com/).
4. Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website.

## Step 1: Clone the Sample Project
---
Clone the TestMu AI JavaScript Selenium sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/nodejs-selenium-sample
cd nodejs-selenium-sample
```

Install the required dependencies:

<VerifiedTag value="Verified" />

```bash
npm install selenium-webdriver
```

## Step 2: Set Your Credentials
---
Set your TestMu AI username and access key as environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="macOS / Linux" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 3: Configure Your Test Capabilities
---
Update the capabilities object in your test script to define the browser and platform settings.

<VerifiedTag value="Verified" />

```js
// index.js
const capabilities = {
        build: 'NodeJS build',      // Name of the build
        name: 'Test 1',             // Name of the test
        platformName: 'Windows 10', // Name of Operating System
        browserName: 'chrome',      // Name of the browser
        browserVersion: 'latest',   // Version of the browser
        resolution: '1280x800',     // Resolution of the screen 
        network: true,              // Enable to capture browser network logs
        visual: true,               // Enable to capture screenshot on every command
        console: true,              // Enable to capture the console log
        video: true                 // Enable to capture the video recording of the test
}
```

:::tip
Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).
:::

## Step 4: Run the Test
---

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), set your browser and OS in its config, then run.

<Tabs className="docs__val" groupId="js-framework" queryString="framework">

<TabItem value="mocha" label="Mocha" default>

Mocha reads its capabilities from a `conf/single.conf.js` file.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/mocha-selenium-sample):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/mocha-selenium-sample
cd mocha-selenium-sample
```

2. Set your browser and OS in `conf/single.conf.js`:

<VerifiedTag value="Verified" />

```js title="conf/single.conf.js"
exports.capabilities = {
  'build': 'Mocha-Selenium-Sample',
  'name': 'Your Test Name',
  'platformName':'Windows 10',
  'browserName': 'chrome',
  'browserVersion': 'latest',
  'visual': false,
  'network':false,
  'console':false,
  'tunnel': false
};
```

3. Install the project dependencies:

<VerifiedTag value="Verified" />

```bash
npm install
```

4. Run the test:

<VerifiedTag value="Verified" />

```bash
npm run single
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="nightwatch" label="Nightwatch">

Nightwatch reads its grid setup from `nightwatch.conf.js` in the cloned project.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/nightwatch-selenium-sample):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/nightwatch-selenium-sample
cd nightwatch-selenium-sample
```

2. Set your browser and OS in `nightwatch.conf.js`.
3. Install the project dependencies:

<VerifiedTag value="Verified" />

```bash
npm install
```

4. Run the test:

<VerifiedTag value="Verified" />

```bash
npm run single
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="webdriverio" label="WebdriverIO">

WebdriverIO reads user, key, and capabilities from `conf/single.conf.js`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/webdriverio-selenium):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/webdriverio-selenium
cd webdriverio-selenium
```

2. Set your browser and OS in `conf/single.conf.js`:

<VerifiedTag value="Verified" />

```js title="conf/single.conf.js"
exports.config = {
  user: process.env.LT_USERNAME || "<your username>",
  key: process.env.LT_ACCESS_KEY || "<your accessKey>",
  specs: ['./tests/specs/single_test.js'],
  capabilities: [{
    browserName: 'chrome',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    name: "Test webdriverio",
    build: "build 1",
  }],
  path: '/wd/hub',
  hostname: 'hub.lambdatest.com',
  port: 80,
  framework: 'mocha',
  mochaOpts: { ui: 'bdd' }
}
```

3. Install the project dependencies:

<VerifiedTag value="Verified" />

```bash
npm install
```

4. Run the test:

<VerifiedTag value="Verified" />

```bash
npm run single
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="jest" label="Jest">

Jest defines capabilities inline in the test file, so there is no separate config to edit.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/jest-selenium-webdriver-sample):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/jest-selenium-webdriver-sample
cd jest-selenium-webdriver-sample
```

2. Set your browser and OS in the capabilities object:

<VerifiedTag value="Verified" />

```js
const capabilities = {
  build: 'jest-LambdaTest-Single',
  browserName: 'chrome',
  browserVersion: 'latest',
  platformName: 'Windows 10',
};
```

3. Install the project dependencies:

<VerifiedTag value="Verified" />

```bash
npm install
```

4. Run the test:

<VerifiedTag value="Verified" />

```bash
npm test single.test.js
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="cucumberjs" label="CucumberJS">

CucumberJS runs BDD feature files, with grid capabilities set in `conf/single.conf.js`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/NodeJs-Cucumber-Selenium):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/NodeJs-Cucumber-Selenium
cd NodeJs-Cucumber-Selenium
```

2. Set your browser and OS in `conf/single.conf.js`:

<VerifiedTag value="Verified" />

```js title="conf/single.conf.js"
capabilities: [{
  browserName: 'chrome',
  platformName: 'Windows 10',
  browserVersion: 'latest',
  name: "cucumber-js-single-test",
  build: "cucumber-js-LambdaTest-single"
}]
```

3. Install the project dependencies:

<VerifiedTag value="Verified" />

```bash
npm install
```

4. Run the test:

<VerifiedTag value="Verified" />

```bash
npm run single
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="jasmine" label="Jasmine">

Jasmine runs through Karma, which defines cloud browsers in `customLaunchers` inside `karma.conf.js`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/karma-jasmine-sample):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/karma-jasmine-sample
cd karma-jasmine-sample
```

2. Set your browser and OS in `karma.conf.js`:

<VerifiedTag value="Verified" />

```js title="karma.conf.js"
customLaunchers: {
  chrome: {
    base: 'WebDriver',
    config: webdriverConfig,
    browserName: 'chrome',
    platform: 'windows 10',
    version: '71.0',
    name: 'Karma With Heartbeat',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    pseudoActivityInterval: 15000
  }
}
```

3. Install the project dependencies:

<VerifiedTag value="Verified" />

```bash
npm install
```

4. Run the test:

<VerifiedTag value="Verified" />

```bash
karma start karma.conf.js
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="karma" label="Karma">

Karma with Angular CLI defines cloud browsers in `customLaunchers` inside `karma.conf.js`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/angular-karma-sample):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/angular-karma-sample
cd angular-karma-sample
```

2. Set your browser and OS in `karma.conf.js`:

<VerifiedTag value="Verified" />

```js title="karma.conf.js"
customLaunchers: {
  chrome: {
    base: 'WebDriver',
    config: webdriverConfig,
    browserName: 'chrome',
    platform: 'windows 10',
    version: '71.0',
    name: 'Karma With Heartbeat',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    pseudoActivityInterval: 5000
  }
}
```

3. Install the project dependencies:

<VerifiedTag value="Verified" />

```bash
npm install
```

4. Run the test:

<VerifiedTag value="Verified" />

```bash
karma start karma.conf.js
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="testcafe" label="TestCafe">

TestCafe connects through an npm plugin rather than a sample repo, so there is nothing to clone.

1. Add `"testcafe": "<testcafe_version>"` to the dependencies in your `package.json`, then install the plugin in your TestCafe project:

<VerifiedTag value="Verified" />

```bash
npm install testcafe-browser-provider-lambdatest
```

2. Run your test against the grid, naming the browser and OS in the command:

<VerifiedTag value="Verified" />

```bash
testcafe "lambdatest:Chrome@74.0:Windows 8" 'path/to/test/file.js'
```

To run the test on several browsers in parallel, pass a comma-separated list of browsers:

<VerifiedTag value="Verified" />

```bash
testcafe "lambdatest:Chrome@74.0:Windows 8","lambdatest:Chrome@75.0:Windows 10" "path/to/test/file.js"
```

You can also run the test from code with the TestCafe runner API:

<VerifiedTag value="Verified" />

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('lambdatest:Chrome@74.0:Windows 8')
    .run();
```

To list all available browser aliases:

<VerifiedTag value="Verified" />

```bash
testcafe -b lambdatest
```

Configure the run with these environment variables:

| VARIABLE            | DESCRIPTION                                                                                                                                                                                                                                                                          |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LT_TEST_NAME        | Specify a name for your test on TestMu AI Selenium Grid.                                                                                                                                                                                                                          |
| LT_BUILD            | Specify a name for your build on TestMu AI Selenium Grid.                                                                                                                                                                                                                         |
| LT_CAPABILITY_PATH  | Specify the path of a JSON file that declares additional Desired Capabilities. <br/> `     "Chrome@63.0:Windows 8.1" : {`             <br/>`"network" : true,`         <br/>`"visual" : true,`         <br/>`"timezone" : "UTC+11:00"`     <br/>`}`  <br/>Here, ``Chrome@63.0:Windows 8.1`` represents browser alias. | 
| LT_RESOLUTION       | Perform cross browser testing on a specific screen resolution in the &#36;&lbrace;width&rbrace;x&#36;&lbrace;height&rbrace; format.                                                                                                                                                                                   |
| LT_LOGFILE          | View detailed logs of your automation script execution. Provide a specific path to this file. If you don't provide a path, the logs save in your present working directory by the filename: tunnel.log.                                                            |
| LT_VERBOSE          | Set flag for verbose to either true or false.                                                                                                                                                                                                                                         |
| LT_PROXY_HOST       | A required variable if you perform cross browser testing through proxy. Declare the hostname/IP of proxy.                                                                                                                                |
| LT_PROXY_PORT       | Port of the proxy. Default value for proxy port is 3128.                                                                                                                                                                                                                       |
| LT_PROXY_USER       | Username for connecting to proxy. Required for using 'proxypass'.                                                                                                                                                                                                             |
| LT_PROXY_PASS       | Password for the USERNAME option.                                                                                                                                                                                                                                                    |
| LT_TUNNEL_NAME      | Human readable tunnel identifier (Name of the tunnel).                                                                                                                                                                                                                               |
| LT_DIR              | Path of the local folder you want to test.                                                                                                                                                                                                                                           |
| LT_SELENIUM_VERSION | Browser specific capability.                                                                                                                                                                                                                                                          |
| LT_CONSOLE          | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_NETWORK          | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_VIDEO            | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_SCREENSHOT       | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_TIMEZONE         | Configure tests to run on a custom time zone.                                                                                                                                                                                                                                        |
| LT_TUNNEL_NUMBER       |  Number of tunnels to spawn at a time.                                                                                                                                                                                                                                                           |
| LOAD_BALANCED_MODE       | Load Balanced Mode in TestCafe.                                                                                                                                                                                                                                                         |

:::tip
Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).
:::

</TabItem>

<TabItem value="nemojs" label="NemoJS">

NemoJS reads its capabilities from `nemo.config.js`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Nemo-Lambdatest-sample):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/Nemo-Lambdatest-sample
cd Nemo-Lambdatest-sample
```

2. Set your browser and OS in `nemo.config.js`:

<VerifiedTag value="Verified" />

```js title="nemo.config.js"
"withCapabilities": [{
  "build": "LT Nemo Sample Tests",
  "name": "LT Nemo sample test",
  "platformName": "Windows 10",
  "browserName": "Chrome",
  "browserVersion": "latest",
  "user": "env:LT_USERNAME",
  "accessKey": "env:LT_ACCESS_KEY"
}]
```

3. Install the project dependencies:

<VerifiedTag value="Verified" />

```bash
npm install
```

4. Run the test:

<VerifiedTag value="Verified" />

```bash
npx nemo -P chrome
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="codeceptjs" label="CodeceptJS">

CodeceptJS uses a WebDriver helper in `codecept.conf.js`, with an optional service to sync test names and statuses to the dashboard.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/lambdatest-codeceptjs-sample):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/lambdatest-codeceptjs-sample
cd lambdatest-codeceptjs-sample
```

2. Set your browser and OS in `codecept.conf.js`:

<VerifiedTag value="Verified" />

```js title="codecept.conf.js"
helpers: {
  WebDriver: {
    url: 'http://google.com/ncr',
    browser: 'chrome',
    host: 'hub.lambdatest.com',
    port: 80,
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    desiredCapabilities: {
      name: '[CodeceptJS] Automation Sample',
      build: '[CodeceptJS] Automation Sample',
      platformName: 'Windows 11',
      browserName: 'Chrome',
      browserVersion: 'dev'
    }
  }
}
```

3. Install the project dependencies:

<VerifiedTag value="Verified" />

```bash
npm install
```

4. Run the test:

<VerifiedTag value="Verified" />

```bash
npm test
```

Or run the file directly:

<VerifiedTag value="Verified" />

```bash
node index.js
```

## Step 5: View Your Results
---
After running the test, view your results on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

The dashboard provides:
- Video recordings of each test session
- Screenshots captured at each step
- Console logs from the browser
- Network logs for debugging
- Detailed command logs

## Run JavaScript Selenium Tests Using Agent Skills
---

Use AI coding assistants to generate and run JavaScript Selenium tests with the TestMu AI Agent Skill.

The [selenium-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/selenium-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/selenium-skill .cursor/skills/
```

:::tip
Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
:::

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
      Selenium With JavaScript  
      </span>
    </li>
  </ul>
</nav>