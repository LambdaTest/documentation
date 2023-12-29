---
id: playwright-vanillajs-on-hyperexecute
title: Run playwright automation tests on HyperExecute using VanillaJs
hide_title: true
sidebar_label: VanillaJs
description: Learn how to run playwright automation tests on HyperExecute using Vanilla Javascript
keywords:
  - unittest
  - unittest selenium
  - python selenium
  - unit testing
  - unit testing tutorial
  - python unit testing
  - python automation testing
  - selenium webdriver python
  - selenium python testing tutorial
  - python selenium framework
  - selenium
  - selenium automation testing
  - selenium testing tool
  - selenium testing tutorial
  - hyperexecute grid
  - hyperexecute pyunit testing
  - hyperexecute automation testing
  - hyperexecute pyunit testing
  - hyperexecute python testing
url: https://www.lambdatest.com/support/docs/playwright-vanillajs-on-hyperexecute/
site_name: LambdaTest
slug: playwright-vanillajs-on-hyperexecute/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "How to run playwright automation tests on HyperExecute using VanillaJs framework",
          "item": "https://www.lambdatest.com/support/docs/playwright-vanillajs-on-hyperexecute/"
        }]
      })
    }}
></script>

# Run Playwright Automation Tests on HyperExecute Using VanillaJs
* * *
Playwright is a Node.js library that uses a single API to automate Chromium, Firefox, and WebKit. It is designed to enable powerful, reliable, and efficient [automated browser testing](https://www.lambdatest.com/automated-browser-testing). Playwright can also automate Microsoft Edge since it is built on the open-source Chromium web framework.

LambdaTest allows you to run Playwright tests across 40+ real browsers and operating system combinations. This guide will cover the basics of getting started with Playwright testing using Vanilla Javascript on the Lambdatest HyperExecute grid.

> HyperExecute has several state of the art features to help you optimize your testing process. Go through the [features page](/support/docs/key-features-of-hyperexecute/) to take a look at all the tools that HyperExecute offers. 

>HyperExecute is compliant with leading security standards - SOC2, GDPR, and CCPA. Refer to [HyperExecute Getting Started Guide](/docs/getting-started-with-hyperexecute) for more information about features offered by HyperExecute.

> All the code samples in this documentation can be found in the [Playwright Vanilla Javascript HyperExecute GitHub repository](https://github.com/LambdaTest/HyperExecute-Playwright-Vanilla-Javascript.git). You can either download or clone the repository to run tests on the HyperExecute Grid.

## Gitpod
***
Follow the below steps to run Gitpod button:
1. Click the **Open in Gitpod** button (You will be redirected to Login/Signup page).
<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>
2. Login with Lambdatest credentials. You will be redirected to HyperExecute dashboard with pop-up confirming to **'Proceed'** to Gitpod editor in the new tab and current tab will show hyperexecute dashboard.
[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=Playwright&framework=Playwright-JS)

## Prerequisites for running Playwright-VanillaJs Tests On The HyperExecute Grid
***
-  ### Download the HyperExecute CLI:
The *HyperExecute* CLI is used for interacting with,  and running the tests on the HyperExecute Grid. It provides a host of other useful features that accelerate test execution. You need to download the HyperExecute CLI binary corresponding to the platform (or OS) from where the tests are triggered. 
Shown below is the HyperExecute CLI download location for different platforms:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
For detailed information about HyperExecute CLI, please refer to [HyperExecute CLI section](/docs/getting-started-with-hyperexecute/#hyperexecute-cli-to-interact-with-hyperexecute) in the HyperExecute getting started guide.

- ### Configure Environment Variables:
Before the tests are run, please set the environment variables LT_USERNAME & LT_ACCESS_KEY from the terminal. The account details are available on your [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile) page.
For macOS:
```bash
export LT_USERNAME=LT_USERNAME
export LT_ACCESS_KEY=LT_ACCESS_KEY
```
For Linux:
```bash
export LT_USERNAME=LT_USERNAME
export LT_ACCESS_KEY=LT_ACCESS_KEY
```
For Windows:
```bash
set LT_USERNAME=LT_USERNAME
set LT_ACCESS_KEY=LT_ACCESS_KEY
```
## Auto-Split Execution with Playwright-VanillaJs

Auto-split execution mechanism lets you run tests at predefined concurrency and distribute the tests over the available infrastructure. Concurrency can be achieved at different levels - file, module, test suite, test, scenario, etc.

For more information about auto-split execution, check out the [Auto-Split Getting Started Guide](https://www.lambdatest.com/support/docs/getting-started-with-hyperexecute/#smart-auto-test-splitting)

### Core

Auto-split YAML file (*yaml/win/.hyperexecute_autosplits.yaml*) in the repo contains the following configuration:

```yaml
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
```

Global timeout, testSuite timeout, and testSuite timeout are set to 90 minutes.
 
The *runson* key determines the platform (or operating system) on which the tests are executed. Here we have set the target OS as Windows.

```yaml
runson: win
```

Auto-split is set to true in the YAML file.

```yaml
 autosplit: true
```

*retryOnFailure* is set to true, instructing HyperExecute to retry failed command(s). The retry operation is carried out till the number of retries mentioned in *maxRetries* are exhausted or the command execution results in a *Pass*. In addition, the concurrency (i.e. number of parallel sessions) is set to 2.

```yaml
retryOnFailure: true
runson: win
maxRetries: 2
```

### Pre Steps and Dependency Caching
To leverage the advantage offered by *Dependency Caching* in HyperExecute, the integrity of *package-lock.json* is checked using the checksum functionality.

```yaml
cacheKey: '{{ checksum "package-lock.json" }}'
```

The caching advantage offered by *NPM* can be leveraged in HyperExecute, whereby the downloaded packages can be stored (or cached) in a secure server for future executions. The packages available in the cache will only be used if the checksum stage results in a Pass.



```yaml
cacheDirectories:
  - node_modules
```

The *testDiscovery* directive contains the command that gives details of the mode of execution, along with detailing the command that is used for test execution. Here, we are fetching the list of Test file scenario that would be further executed using the *value* passed in the *testRunnerCommand*

```yaml
testDiscovery:
  type: raw
  mode: dynamic
  command: grep -nri 'describe' tests  | sed 's/:test.*//'
testRunnerCommand: npx playwright test $test
```

Running the above command on the terminal will give a list of Test Scenario lines that are located in the Project folder:

Test Discovery Output:
tests/test_4.spec.js:4
tests/test_3.spec.js:4
tests/test_2.spec.js:4
tests/test_1.spec.js:4

The *testRunnerCommand* contains the command that is used for triggering the test. The output fetched from the *testDiscoverer* command acts as an input to the *testRunner* command.

```yaml
testRunnerCommand: npx playwright test $test
```

### Artifacts Management

The *mergeArtifacts* directive (which is by default *false*) is set to *true* for merging the artifacts and combing artifacts generated under each task.

The *uploadArtefacts* directive informs HyperExecute to upload artifacts [files, reports, etc.] generated after task completion.  In the example, *path* consists of a regex for parsing the directory (i.e. *reports* that contains the test reports).

```yaml
mergeArtifacts: true

uploadArtefacts:
  [{
    "name": "Reports",
    "path": ["Reports\\"]
  }]

```
HyperExecute also facilitates the provision to download the artifacts on your local machine. To download the artifacts, click on *Artifacts* button corresponding to the associated TestID.

### Test Execution

The CLI option *--config* is used for providing the custom HyperExecute YAML file (i.e. *yaml/.hyperexecute_autosplits.yaml*). Run the following command on the terminal to trigger the tests in JS files on the HyperExecute grid. The *--download-artifacts* option is used to inform HyperExecute to download the artifacts for the job.

```bash
./hyperexecute --config --verbose yaml/win/.hyperexecute_autosplits.yaml
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution

# Matrix Execution with Playwright-VanillaJs

Matrix-based test execution is used for running the same tests across different test (or input) combinations. The Matrix directive in HyperExecute YAML file is a *key:value* pair where value is an array of strings.

Also, the *key:value* pairs are opaque strings for HyperExecute. For more information about matrix multiplexing, check out the [Matrix Getting Started Guide](/support/docs/hyperexecute-matrix-multiplexing-strategy/)

### Core

In the current example, matrix YAML file (*yaml/hyperexecute_matrix_sample.yaml*) in the repo contains the following configuration:

```yaml
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
```

Global timeout, testSuite timeout, and testSuite timeout are set to 90 minutes.
 
The target platform is set to Windows. Please set the *[runson]* key to *[mac]* if the tests have to be executed on the macOS platform.

```yaml
runson: win
```

Playwright-JS js files in the 'Tests' folder contain the Test Scenario run on the HyperExecute grid. In the example, the Test file *tests/test_4.spec.js* run in parallel on the basis of scenario by using the specified input combinations.

```yaml
matrix:
  os: [linux]
  methods: ['tests/test_4.spec.js:4','tests/test_3.spec.js:4','tests/test_2.spec.js:4','tests/test_1.spec.js:4']

```

The *testSuites* object contains a list of commands (that can be presented in an array). In the current YAML file, commands for executing the tests are put in an array (with a '-' preceding each item). The npx command is used to run tests in *.js* files. The tags are mentioned as an array to the *methods* key that is a part of the matrix.

```yaml
testSuites:
  - npx playwright test $methods
```

### Pre Steps and Dependency Caching

Dependency caching is enabled in the YAML file to ensure that the package dependencies are not downloaded in subsequent runs. The first step is to set the Key used to cache directories.

```yaml
cacheKey: '{{ checksum "package-lock.json" }}'
```

Set the array of files & directories to be cached. In the example, all the packages will be cached in the *CacheDir* directory.

```yaml
cacheDirectories:
  - node_modules
```

Steps (or commands) that must run before the test execution are listed in the *pre* run step. In the example, the packages listed in *requirements.txt* are installed using the *npm install* command.

```yaml
pre:
  - npm install
```

### Artifacts Management

The *mergeArtifacts* directive (which is by default *false*) is set to *true* for merging the artifacts and combing artifacts generated under each task.

The *uploadArtefacts* directive informs HyperExecute to upload artifacts [files, reports, etc.] generated after task completion. In the example, *path* consists of a regex for parsing the directory (i.e. *reports* that contains the test reports).

```yaml
mergeArtifacts: true

uploadArtefacts:
  [{
    "name": "Reports",
    "path": ["Reports\\"]
  }]
```

HyperExecute also facilitates the provision to download the artifacts on your local machine. To download the artifacts, click on Artifacts button corresponding to the associated TestID.


## Test Execution

The CLI option *--config* is used for providing the custom HyperExecute YAML file (i.e. *yaml/win/.hyperexecute_matrix.yaml*). Run the following command on the terminal to trigger the tests in Test file Scenario on the HyperExecute grid.

```bash
./hyperexecute --config --verbose yaml/win/.hyperexecute_matrix.yaml
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution:

## Run Playwright-VanillaJS tests on Windows and Linux platforms

The CLI option *--config* is used for providing the custom HyperExecute YAML file (i.e. *yaml/win/.hyperexecute_autosplits.yaml* for Windows and *yaml/linux/.hyperexecute_autosplits.yaml* for Linux).

Run the following command on the terminal to trigger tests on Windows platform:

```bash
./hyperexecute --config --verbose yaml/win/.hyperexecute_autosplits.yaml
```

Run the following command on the terminal to trigger tests on Linux platform:

```bash
./hyperexecute --config --verbose yaml/win/.hyperexecute_autosplits.yaml
```

## Secrets Management

In case you want to use any secret keys in the YAML file, this can be set by clicking on the **Secrets** button on the dashboard.


All you need to do is create an environment variable that uses the secret key:

```yaml
env:
  AccessKey: ${{.secrets.AccessKey}}
```

>
For any query or doubt, please feel free to contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />
Happy testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
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
      Run PyUnit tests on HyperExecute Grid
      </span>
    </li>
  </ul>
</nav>