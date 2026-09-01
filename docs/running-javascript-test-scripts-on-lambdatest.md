---
id: running-javascript-test-scripts-on-lambdatest
title: How to Run Selenium Tests With JavaScript on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "JavaScript"
description: Run JavaScript Selenium tests on TestMu AI across 10,000+ browsers. Covers Mocha, Nightwatch, WebdriverIO, Jest, CucumberJS, Jasmine, and more.
keywords:
  - javascript selenium grid testing
  - run javascript selenium tests cloud
  - selenium webdriver javascript setup
  - javascript browser automation tutorial
  - javascript selenium cloud execution
  - mocha nightwatch webdriverio jest cucumberjs selenium
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

# How to Run Selenium Tests With JavaScript on TestMu AI
---


Run your JavaScript Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites
---

Before running any framework below, you need a TestMu AI account, your credentials, Node.js and npm, and the Selenium JavaScript bindings.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Node.js](https://nodejs.org/en/) (v6 or newer) and npm.
4. Install the [Selenium JavaScript bindings](https://www.selenium.dev/downloads/).

## Set Your Credentials
---

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

<Tabs className="docs__val" groupId="os">

<TabItem value="macos" label="macOS / Linux" default>

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="win-cmd" label="Windows (CMD)">

<div className="lambdatest__codeblock">
    <CodeBlock className="language-batch">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

</TabItem>

</Tabs>

## How the Sample Test Works
---

Every framework below connects to the grid at `hub.lambdatest.com/wd/hub` and passes your browser and OS choices through a capabilities object. A minimal one looks like this:

```js
const capabilities = {
  build: 'NodeJS build',
  name: 'Test 1',
  platformName: 'Windows 10',
  browserName: 'chrome',
  browserVersion: 'latest',
  network: true,
  visual: true,
  console: true,
  video: true
}
```

What changes between frameworks is only how those capabilities are wired in: an inline object, a `.conf.js` file, or a runner config. That is what each tab covers.

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build a capabilities block for any browser, version, and OS combination.
:::

## Run a Test in Your Framework
---

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), set your browser and OS in its config, then run.

<Tabs className="docs__val" groupId="js-framework" queryString="framework">

<TabItem value="mocha" label="Mocha" default>

Mocha reads its capabilities from a `conf/single.conf.js` file.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/mocha-selenium-sample):

```bash
git clone https://github.com/LambdaTest/mocha-selenium-sample
cd mocha-selenium-sample
```

2. Set your browser and OS in `conf/single.conf.js`:

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

```bash
npm install
```

4. Run the test:

```bash
npm run single
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="nightwatch" label="Nightwatch">

Nightwatch reads its grid setup from `nightwatch.conf.js` in the cloned project.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/nightwatch-selenium-sample):

```bash
git clone https://github.com/LambdaTest/nightwatch-selenium-sample
cd nightwatch-selenium-sample
```

2. Set your browser and OS in `nightwatch.conf.js`.
3. Install the project dependencies:

```bash
npm install
```

4. Run the test:

```bash
npm run single
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="webdriverio" label="WebdriverIO">

WebdriverIO reads user, key, and capabilities from `conf/single.conf.js`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/webdriverio-selenium):

```bash
git clone https://github.com/LambdaTest/webdriverio-selenium
cd webdriverio-selenium
```

2. Set your browser and OS in `conf/single.conf.js`:

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

```bash
npm install
```

4. Run the test:

```bash
npm run single
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="jest" label="Jest">

Jest defines capabilities inline in the test file, so there is no separate config to edit.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/jest-selenium-webdriver-sample):

```bash
git clone https://github.com/LambdaTest/jest-selenium-webdriver-sample
cd jest-selenium-webdriver-sample
```

2. Set your browser and OS in the capabilities object:

```js
const capabilities = {
  build: 'jest-LambdaTest-Single',
  browserName: 'chrome',
  browserVersion: 'latest',
  platformName: 'Windows 10',
};
```

3. Install the project dependencies:

```bash
npm install
```

4. Run the test:

```bash
npm test single.test.js
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="cucumberjs" label="CucumberJS">

CucumberJS runs BDD feature files, with grid capabilities set in `conf/single.conf.js`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/NodeJs-Cucumber-Selenium):

```bash
git clone https://github.com/LambdaTest/NodeJs-Cucumber-Selenium
cd NodeJs-Cucumber-Selenium
```

2. Set your browser and OS in `conf/single.conf.js`:

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

```bash
npm install
```

4. Run the test:

```bash
npm run single
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="jasmine" label="Jasmine">

Jasmine runs through Karma, which defines cloud browsers in `customLaunchers` inside `karma.conf.js`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/karma-jasmine-sample):

```bash
git clone https://github.com/LambdaTest/karma-jasmine-sample
cd karma-jasmine-sample
```

2. Set your browser and OS in `karma.conf.js`:

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

```bash
npm install
```

4. Run the test:

```bash
karma start karma.conf.js
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="karma" label="Karma">

Karma with Angular CLI defines cloud browsers in `customLaunchers` inside `karma.conf.js`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/angular-karma-sample):

```bash
git clone https://github.com/LambdaTest/angular-karma-sample
cd angular-karma-sample
```

2. Set your browser and OS in `karma.conf.js`:

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

```bash
npm install
```

4. Run the test:

```bash
karma start karma.conf.js
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="testcafe" label="TestCafe">

TestCafe connects through an npm plugin rather than a sample repo, so there is nothing to clone.

1. Install the plugin in your TestCafe project:

```bash
npm install testcafe-browser-provider-lambdatest
```

2. Run your test against the grid, naming the browser and OS in the command:

```bash
testcafe "lambdatest:Chrome@74.0:Windows 8" 'path/to/test/file.js'
```

</TabItem>

<TabItem value="nemojs" label="NemoJS">

NemoJS reads its capabilities from `nemo.config.js`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Nemo-Lambdatest-sample):

```bash
git clone https://github.com/LambdaTest/Nemo-Lambdatest-sample
cd Nemo-Lambdatest-sample
```

2. Set your browser and OS in `nemo.config.js`:

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

```bash
npm install
```

4. Run the test:

```bash
npx nemo -P chrome
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="codeceptjs" label="CodeceptJS">

CodeceptJS uses a WebDriver helper in `codecept.conf.js`, with an optional service to sync test names and statuses to the dashboard.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/lambdatest-codeceptjs-sample):

```bash
git clone https://github.com/LambdaTest/lambdatest-codeceptjs-sample
cd lambdatest-codeceptjs-sample
```

2. Set your browser and OS in `codecept.conf.js`:

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

```bash
npm install
```

4. Run the test:

```bash
npm test
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="protractor" label="Protractor">

:::warning Deprecated
Protractor reached end-of-life in August 2023 and is no longer maintained. For new projects, use the actively maintained **WebdriverIO** framework instead (see the WebdriverIO tab).
:::

Protractor reads its grid setup from the config file in the cloned project.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/protractor-selenium-sample):

```bash
git clone https://github.com/LambdaTest/protractor-selenium-sample
cd protractor-selenium-sample
```

2. Set your browser and OS in the config file.
3. Install the project dependencies:

```bash
npm install
```

4. Run the test:

```bash
npm run single
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="wd" label="WD">

:::warning Deprecated
WD is no longer maintained. For new projects, use the actively maintained **WebdriverIO** framework instead (see the WebdriverIO tab).
:::

WD reads its capabilities from `conf/single.conf.js` in the cloned project.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/wd-selenium-sample):

```bash
git clone https://github.com/LambdaTest/wd-selenium-sample
cd wd-selenium-sample
```

2. Set your browser and OS in `conf/single.conf.js`.
3. Install the project dependencies:

```bash
npm install
```

4. Run the test:

```bash
npm run single
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="angular" label="AngularJS">

:::warning Deprecated
AngularJS reached end-of-life in December 2021 and is no longer maintained. For new projects, use the actively maintained **Karma** framework instead (see the Karma tab).
:::

AngularJS runs through Karma, which defines cloud browsers in `customLaunchers` inside `karma.conf.js`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/angular-karma-sample):

```bash
git clone https://github.com/LambdaTest/angular-karma-sample
cd angular-karma-sample
```

2. Set your browser and OS in `karma.conf.js`.
3. Install the project dependencies:

```bash
npm install
```

4. Run the test:

```bash
karma start karma.conf.js
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

</Tabs>

## View Your Results
---

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

**Next steps:** If this is your first run, walk through [running your first Selenium test](/support/docs/testmu-running-your-first-selenium-test/) end to end. From there, explore the full set of [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) you can pass to the grid, learn how to [debug your Selenium tests](/support/docs/debugging-options/), and organize and [filter your Selenium tests](/support/docs/filter-your-selenium-tests/) as your suite grows.

## Next Steps
---

Continue with these related guides:

- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Debugging Options](/support/docs/debugging-options/)
- [Filter Your Selenium Tests](/support/docs/filter-your-selenium-tests/)

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