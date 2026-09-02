# How to Run Selenium Tests With JavaScript on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your JavaScript Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites

Before running any framework below, you need a TestMu AI account, your credentials, Node.js and npm, and the Selenium JavaScript bindings.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Node.js](https://nodejs.org/en/) (v6 or newer) and npm.
4. Install the [Selenium JavaScript bindings](https://www.selenium.dev/downloads/).

## Set Your Credentials

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## How the Sample Test Works

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

Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build a capabilities block for any browser, version, and OS combination.

## Run a Test in Your Framework

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), set your browser and OS in its config, then run.

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

TestCafe connects through an npm plugin rather than a sample repo, so there is nothing to clone.

1. Install the plugin in your TestCafe project:

```bash
npm install testcafe-browser-provider-lambdatest
```

2. Run your test against the grid, naming the browser and OS in the command:

```bash
testcafe "lambdatest:Chrome@74.0:Windows 8" 'path/to/test/file.js'
```

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

**Deprecated**
Protractor reached end-of-life in August 2023 and is no longer maintained. For new projects, use the actively maintained **WebdriverIO** framework instead (see the WebdriverIO tab).

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

**Deprecated**
WD is no longer maintained. For new projects, use the actively maintained **WebdriverIO** framework instead (see the WebdriverIO tab).

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

**Deprecated**
AngularJS reached end-of-life in December 2021 and is no longer maintained. For new projects, use the actively maintained **Karma** framework instead (see the Karma tab).

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

## View Your Results

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

**Next steps:** If this is your first run, walk through [running your first Selenium test](/support/docs/testmu-running-your-first-selenium-test/) end to end. From there, explore the full set of [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) you can pass to the grid, learn how to [debug your Selenium tests](/support/docs/debugging-options/), and organize and [filter your Selenium tests](/support/docs/filter-your-selenium-tests/) as your suite grows.

## Next Steps

Continue with these related guides:

- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Debugging Options](/support/docs/debugging-options/)
- [Filter Your Selenium Tests](/support/docs/filter-your-selenium-tests/)
