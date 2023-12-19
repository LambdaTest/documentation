---
id: playwright-junit-on-hyperexecute
title: Run playwright automation tests on HyperExecute using JUnit
hide_title: true
sidebar_label: JUnit
description: Learn how to run playwright automation tests on HyperExecute using JUnit framework
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
url: https://www.lambdatest.com/support/docs/playwright-junit-on-hyperexecute/
site_name: LambdaTest
slug: playwright-junit-on-hyperexecute/
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
          "name": "How to run playwright automation tests on HyperExecute using JUnit framework",
          "item": "https://www.lambdatest.com/support/docs/playwright-junit-on-hyperexecute/"
        }]
      })
    }}
></script>

# Run Playwright Automation Tests on HyperExecute Using Junit
* * *
Playwright is a Node.js library that uses a single API to automate Chromium, Firefox, and WebKit. It is designed to enable powerful, reliable, and efficient [automated browser testing](https://www.lambdatest.com/automated-browser-testing). Playwright can also automate Microsoft Edge since it is built on the open-source Chromium web framework.

LambdaTest allows you to run Playwright tests across 40+ real browsers and operating system combinations. This guide will cover the basics of getting started with Playwright testing using Vanilla Javascript on the Lambdatest HyperExecute grid.

> HyperExecute has several state of the art features to help you optmize your testing process. Go through the [features page](/support/docs/key-features-of-hyperexecute/) to take a look at all the tools that HyperExecute offers. 

>HyperExecute is compliant with leading security standards - SOC2, GDPR, and CCPA. Refer to [HyperExecute Getting Started Guide](/docs/getting-started-with-hyperexecute) for more information about features offered by HyperExecute.

> All the code samples in this documentation can be found in the [Playwright-JUnit HyperExecute GitHub repository](https://github.com/LambdaTest/hyperexecute-java-playwright-sample). You can either download or clone the repository to run tests on the HyperExecute Grid.

## Gitpod
***
Follow the below steps to run Gitpod button:
1. Click the **Open in Gitpod** button (You will be redirected to Login/Signup page).
<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>
2. Login with Lambdatest credentials. You will be redirected to HyperExecute dashboard with pop-up confirming to **'Proceed'** to Gitpod editor in the new tab and current tab will show hyperexecute dashboard.
[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=PlayWright&framework=JUnit)

## Prerequisites for Running Playwright-JUnit Tests On The HyperExecute Grid
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
## Auto-Split Execution with JUnit

Auto-split execution mechanism lets you run tests at predefined concurrency and distribute the tests over the available infrastructure. Concurrency can be achieved at different levels - file, module, test suite, test, scenario, etc.

For more information about auto-split execution, check out the [Auto-Split Getting Started Guide](https://www.lambdatest.com/support/docs/getting-started-with-hyperexecute/#smart-auto-test-splitting)

### Core

Auto-split YAML file (*yaml/win/junit_hyperexecute_autosplit_sample.yaml*) in the repo contains the following configuration:

```yaml
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150
```

Global timeout, testSuite timeout, and testSuite timeout are set to 150 minutes.
 
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
maxRetries: 5
concurrency: 2
```

### Pre Steps and Dependency Caching

Dependency caching is enabled in the YAML file to ensure that the package dependencies are not downloaded in subsequent runs. The first step is to set the Key used to cache directories. The directory *m2_cache_dir* is created in the project's root directory.

```yaml
env:
  CACHE_DIR: m2_cache_dir

cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - $CACHE_DIR
```

Steps (or commands) that must run before the test execution are listed in the *pre* run step. In the example, the playwright version installation command has to be passed along with the maven command to download the Maven packages in the *m2_cache_dir*. To prevent test execution at the *pre* stage, the *maven.test.skip* parameter is set to *true* so that only packages are downloaded and no test execution is performed.

```yaml
pre:
  - npm install playwright@1.23.0 --save-exact
  - mvn -Dmaven.repo.local=$CACHE_DIR -Dmaven.test.skip=true clean install
```

### Post Steps

Steps (or commands) that need to run after the test execution are listed in the *post* step. In the example, we *cat* the contents of *yaml/win/junit_hyperexecute_autosplit_sample.yaml*

```yaml
post:
  - cat yaml/win/junit_hyperexecute_autosplit_sample.yaml
```

The *testDiscovery* directive contains the command that gives details of the mode of execution, along with detailing the command that is used for test execution. Here, we are fetching the list of class names that would be further passed in the *testRunnerCommand*

```yaml
testDiscovery:
  type: raw
  mode: static
  command: grep 'public class' src/test/java/SampleTest.java | awk '{print$3}'
```

Running the above command on the terminal will give a list of tests present in the SampleTest.java:

*sampleTest1

The *testRunnerCommand* contains the command that is used for triggering the test. The output fetched from the *testDiscoverer* command acts as an input to the *testRunner* command.

```yaml
testRunnerCommand: mvn -Dplatname=win -Dmaven.repo.local=m2_cache_dir -Dtest=$test test surefire-report:report
```

### Artifacts Management

The *mergeArtifacts* directive (which is by default *false*) is set to *true* for merging the artifacts and combing artifacts generated under each task.

The uploadArtefacts directive informs HyperExecute to upload artifacts [files, reports, etc.] generated after task completion. In the example, path consists of a regex for parsing the sure-fire reports (i.e. target/surefire-reports/) directory.

```yaml
mergeArtifacts: true

uploadArtefacts:
 - name: Surefire Report
   path:
    - target/surefire-reports/**
```

### Test Execution

The CLI option *--config* is used for providing the custom HyperExecute YAML file (i.e. *yaml/win/junit_hyperexecute_autosplit_sample.yaml* for Windows and *yaml/linux/junit_hyperexecute_autosplit_sample.yaml* for Linux).

#### Execute JUnit tests using Autosplit mechanism on Windows platform

Run the following command on the terminal to trigger Java tests on the Windows platform. The *--download-artifacts* option is used to inform HyperExecute to download the artifacts for the job. The *--force-clean-artifacts* option force cleans any existing artifacts for the project.

```bash
./hyperexecute --config yaml/win/junit_hyperexecute_autosplit_sample.yaml --force-clean-artifacts --download-artifacts
```

#### Execute JUnit tests using Autosplit mechanism on Linux platform

Run the following command on the terminal to trigger java tests on the Linux platform. The *--download-artifacts* option is used to inform HyperExecute to download the artifacts for the job. The *--force-clean-artifacts* option force cleans any existing artifacts for the project.

```bash
./hyperexecute --config yaml/linux/junit_hyperexecute_autosplit_sample.yaml --force-clean-artifacts --download-artifacts
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution

# Matrix Execution with JUnit

Matrix-based test execution is used for running the same tests across different test (or input) combinations. The Matrix directive in HyperExecute YAML file is a *key:value* pair where value is an array of strings.

Also, the *key:value* pairs are opaque strings for HyperExecute. For more information about matrix multiplexing, check out the [Matrix Getting Started Guide](/support/docs/hyperexecute-matrix-multiplexing-strategy/)

### Core

In the current example, matrix YAML file (*yaml/win/junit_hyperexecute_matrix_sample.yaml*) in the repo contains the following configuration:

```yaml
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150
```

Global timeout, testSuite timeout, and testSuite timeout are set to 150 minutes.
 
The target platform is set to Win. Please set the *[runson]* key to *[mac]* if the tests have to be executed on the macOS platform.

```yaml
runson: win
```

The matrix constitutes of the following entries - classname. The entries represent the class names in the test code.

```yaml
matrix:
  classname: ["SampleTest"] 
```

The testSuites object contains a list of commands (that can be presented in an array). In the current YAML file, commands for executing the tests are put in an array (with a '-' preceding each item). The Maven command mvn test is used to run tests located in the current project. In the current project, parallel execution is achieved at the class level. The maven.repo.local parameter in Maven is used for overriding the location where the dependent Maven packages are downloaded.

```yaml
testSuites:
  - mvn `-Dplatname=win `-Dmaven.repo.local=m2_cache_dir `-Dtest=$classname test surefire-report:report
```

### Pre Steps and Dependency Caching

Dependency caching is enabled in the YAML file to ensure that the package dependencies are not downloaded in subsequent runs. The first step is to set the Key used to cache directories. The directory *m2_cache_dir* is created in the project's root directory.

```yaml
env:
  CACHE_DIR: m2_cache_dir

cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - $CACHE_DIR
```

Steps (or commands) that must run before the test execution are listed in the *pre* run step. In the example, the playwright version installation command has to be passed along with the maven command to download the Maven packages in the *m2_cache_dir*. To prevent test execution at the *pre* stage, the *maven.test.skip* parameter is set to *true* so that only packages are downloaded and no test execution is performed.


```yaml
pre:
  - npm install playwright@1.23.0 --save-exact
  - mvn -Dmaven.repo.local=$CACHE_DIR -Dmaven.test.skip=true clean install
```

### Post Steps

Steps (or commands) that need to run after the test execution are listed in the *post* step. In the example, we *cat* the contents of *yaml/win/junit_hyperexecute_matrix_sample.yaml*

```yaml
post:
  - cat yaml/win/junit_hyperexecute_matrix_sample.yaml
```

### Artifacts Management

The mergeArtifacts directive (which is by default false) is set to true for merging the artifacts and combing artifacts generated under each task.

The uploadArtefacts directive informs HyperExecute to upload artifacts [files, reports, etc.] generated after task completion. In the example, path consists of a regex for parsing the sure-fire reports (i.e. target/surefire-reports/) directory.

```yaml
mergeArtifacts: true

uploadArtefacts:
 - name: Surefire Report
   path:
    - target/surefire-reports/**
```
### Test Execution

The CLI option *--config* is used for providing the custom HyperExecute YAML file (i.e. *yaml/win/junit_hyperexecute_matrix_sample.yaml* for Windows and *yaml/linux/junit_hyperexecute_matrix_sample.yaml* for Linux).

#### Execute JUnit tests using Matrix mechanism on Windows platform

Run the following command on the terminal to trigger junit tests on the Windows platform. The *--download-artifacts* option is used to inform HyperExecute to download the artifacts for the job. The *--force-clean-artifacts* option force cleans any existing artifacts for the project.

```bash
./hyperexecute --config yaml/win/junit_hyperexecute_matrix_sample.yaml --force-clean-artifacts --download-artifacts
```

#### Execute JUnit tests using Matrix mechanism on Linux platform

Run the following command on the terminal to trigger java tests on the Linux platform. The *--download-artifacts* option is used to inform HyperExecute to download the artifacts for the job. The *--force-clean-artifacts* option force cleans any existing artifacts for the project.

```bash
./hyperexecute --config yaml/linux/java_hyperexecute_matrix_sample.yaml --force-clean-artifacts --download-artifacts
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution:

## Secrets Management

If you want to use any secret keys in the YAML file, this can be set by clicking on the **Secrets** button on the dashboard.

All you need to do is create an environment variable that uses the secret key:

```yaml
env:
  PAT: ${{ .secrets.testKey }}
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