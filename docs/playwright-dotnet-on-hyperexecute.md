---
id: playwright-dotnet-on-hyperexecute
title: Run playwright automation tests on HyperExecute using .Net
hide_title: true
sidebar_label: .Net
description: Learn how to run playwright automation tests on HyperExecute using .Net framework
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
url: https://www.lambdatest.com/support/docs/playwright-dotnet-on-hyperexecute/
site_name: LambdaTest
slug: playwright-dotnet-on-hyperexecute/
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
          "name": "How to run playwright automation tests on HyperExecute using .Net framework",
          "item": "https://www.lambdatest.com/support/docs/playwright-dotnet-on-hyperexecute/"
        }]
      })
    }}
></script>

# Run Playwright Automation Tests on HyperExecute Using .Net
* * *
Playwright is a Node.js library that uses a single API to automate Chromium, Firefox, and WebKit. It is designed to enable powerful, reliable, and efficient [automated browser testing](https://www.lambdatest.com/automated-browser-testing). Playwright can also automate Microsoft Edge since it is built on the open-source Chromium web framework.

LambdaTest allows you to run Playwright tests across 40+ real browsers and operating system combinations. This guide will cover the basics of getting started with Playwright testing using Vanilla Javascript on the Lambdatest HyperExecute grid.

> HyperExecute has several state of the art features to help you optmize your testing process. Go through the [features page](/support/docs/key-features-of-hyperexecute/) to take a look at all the tools that HyperExecute offers. 

>HyperExecute is compliant with leading security standards - SOC2, GDPR, and CCPA. Refer to [HyperExecute Getting Started Guide](/docs/getting-started-with-hyperexecute) for more information about features offered by HyperExecute.

> All the code samples in this documentation can be found in the [Playwright .Net HyperExecute GitHub repository](https://github.com/LambdaTest/dotnet_playwright_hyperexecute_sample/). You can either download or clone the repository to run tests on the HyperExecute Grid.

## Gitpod
***
Follow the below steps to run Gitpod button:
1. Click the **Open in Gitpod** button (You will be redirected to Login/Signup page).
<img loading="lazy" src={require('../assets/images/hyperexecute/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>
2. Login with Lambdatest credentials. You will be redirected to HyperExecute dashboard with pop-up confirming to **'Proceed'** to Gitpod editor in the new tab and current tab will show hyperexecute dashboard.
[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=PlayWright&framework=Playwright-.Net)

## Prerequisites for Running Playwright .Net Tests On The HyperExecute Grid
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
## Auto-Split Execution with Playwright .Net

Auto-split execution mechanism lets you run tests at predefined concurrency and distribute the tests over the available infrastructure. Concurrency can be achieved at different levels - file, module, test suite, test, scenario, etc.

For more information about auto-split execution, check out the [Auto-Split Getting Started Guide](https://www.lambdatest.com/support/docs/getting-started-with-hyperexecute/#smart-auto-test-splitting)

### Core

Auto-split YAML file (_yaml/win/dotnet_playwright_hyperexecute_autosplit_sample.yaml_) in the repo contains the following configuration:

```yaml
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150
```

Global timeout, testSuite timeout, and testSuite timeout are set to 150 minutes.

The _runson_ key determines the platform (or operating system) on which the tests are executed. Here we have set the target OS as Windows.

```yaml
runson: win
```

Auto-split is set to true in the YAML file.

```yaml
 autosplit: true
```

_retryOnFailure_ is set to true, instructing HyperExecute to retry failed command(s). The retry operation is carried out till the number of retries mentioned in _maxRetries_ are exhausted or the command execution results in a _Pass_. In addition, the concurrency (i.e. number of parallel sessions) is set to 4.

```yaml
retryOnFailure: true
maxRetries: 5
concurrency: 4
```

### Pre Steps and Dependency Caching

Dependency caching is enabled in the YAML file to ensure that the package dependencies are not downloaded in subsequent runs. The first step is to set the Key used to cache directories. The directory _m2_cache_dir_ is created in the project's root directory.

```yaml
env:
  NUGET_PACKAGES: 'C:\nuget_global_cache'
  NUGET_HTTP_CACHE_PATH: 'C:\nuget_http_cache'
  NUGET_PLUGINS_CACHE_PATH: 'C:\nuget_plugins_cache'
  # Secrets in Vault
  # PAT: ${{ .secrets.testKey }}

cacheKey: '{{ checksum "packages.txt" }}'
```

Steps (or commands) that must run before the test execution are listed in the _pre_ run step. In the example, the Maven packages are downloaded in the _m2_cache_dir_. To prevent test execution at the _pre_ stage, the _maven.test.skip_ parameter is set to _true_ so that only packages are downloaded and no test execution is performed.

```yaml
pre:
  - dotnet list PlaywrightDotnetTests.csproj package > packages.txt
  - nuget locals all -clear
  - dotnet build -c Release
```

### Post Steps

Steps (or commands) that need to run after the test execution are listed in the _post_ step. In the example, we _cat_ the contents of _yaml/win/dotnet_playwright_hyperexecute_autosplit_sample.yaml_

```yaml
post:
  - cat yaml/win/dotnet_playwright_hyperexecute_autosplit_sample.yaml
```

The _testDiscovery_ directive contains the command that gives details of the mode of execution, along with detailing the command that is used for test execution. Here, we are fetching the list of test names that would be further passed in the _testRunnerCommand_

```yaml
testDiscovery:
  type: raw
  mode: static
  command: grep "case" Program.cs | awk '{print$2}' | sed 's/://g'
```

Running the above command on the terminal will give a list of scenarios present in the Program file:

- single
- iphonetest
- ipadtest

The _testRunnerCommand_ contains the command that is used for triggering the test. The output fetched from the _testDiscoverer_ command acts as an input to the _testRunner_ command.

```yaml
testRunnerCommand: dotnet run $test
```

### Artifacts Management

The _mergeArtifacts_ directive (which is by default _false_) is set to _true_ for merging the artifacts and combing artifacts generated under each task.

The _uploadArtefacts_ directive informs HyperExecute to upload artifacts [files, reports, etc.] generated after task completion. In the example, _path_ consists of a regex for parsing the directories that contain the XML and JSON reports (i.e. _target/surefire-reports/testng-results.xml_ and _target/surefire-reports/testng-results.xml_) directory.

```yaml
mergeArtifacts: true

uploadArtefacts:
  - name: XmlReports
    path:
      - PlaywrightTestReport.xml
  - name: JsonReports
    path:
      - PlaywrightTestReport.json
```
### Test Execution

The CLI option _--config_ is used for providing the custom HyperExecute YAML file (i.e. _yaml/win/dotnet_playwright_hyperexecute_autosplit_sample.yaml_ for Windows and _yaml/linux/dotnet_playwright_hyperexecute_autosplit_sample.yaml_ for Linux).

#### Execute Playwright .Net tests using Autosplit mechanism on Windows platform

Run the following command on the terminal to trigger Playwright tests on the Windows platform. The _--download-artifacts_ option is used to inform HyperExecute to download the artifacts for the job. The _--force-clean-artifacts_ option force cleans any existing artifacts for the project.

```bash
./hyperexecute --config yaml/win/dotnet_playwright_hyperexecute_autosplit_sample.yaml --force-clean-artifacts --download-artifacts
```

#### Execute Playwright .Net tests using Autosplit mechanism on Linux platform

Run the following command on the terminal to trigger Playwright tests on the Linux platform. The _--download-artifacts_ option is used to inform HyperExecute to download the artifacts for the job. The _--force-clean-artifacts_ option force cleans any existing artifacts for the project.

```bash
./hyperexecute --config yaml/linux/dotnet_playwright_hyperexecute_autosplit_sample.yaml --force-clean-artifacts --download-artifacts
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution

## Matrix Execution with Playwright .Net

Matrix-based test execution is used for running the same tests across different test (or input) combinations. The Matrix directive in HyperExecute YAML file is a _key:value_ pair where value is an array of strings.

Also, the _key:value_ pairs are opaque strings for HyperExecute. For more information about matrix multiplexing, check out the [Matrix Getting Started Guide](/support/docs/hyperexecute-matrix-multiplexing-strategy/)
### Core

In the current example, matrix YAML file (_yaml/win/dotnet_playwright_hyperexecute_matrix_sample.yaml_) in the repo contains the following configuration:

```yaml
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150
```

Global timeout, testSuite timeout, and testSuite timeout are set to 150 minutes.

The target platform is set to Win. Please set the _[runson]_ key to _[mac]_ if the tests have to be executed on the macOS platform.

```yaml
runson: win
```

The _matrix_ constitutes of the following entries - _Playwrighttag_. The entries represent the scenario names in the feature files located in _src/main/java/Features_.

```yaml
matrix:
  tests: ["single", "iphonetest", "ipadtest"]
```

The _testSuites_ object contains a list of commands (that can be presented in an array). In the current YAML file, commands for executing the tests are put in an array (with a '-' preceding each item). The Maven command _mvn test_ is used to run tests located in the current project. In the current project, parallel execution is achieved at the _class_ level. The _maven.repo.local_ parameter in Maven is used for overriding the location where the dependent Maven packages are downloaded. The _Playwright.options_ parameter is used for filtering tests at the _scenario_ level.

```yaml
testSuites:
  - dotnet run $tests
```

### Pre Steps and Dependency Caching

Dependency caching is enabled in the YAML file to ensure that the package dependencies are not downloaded in subsequent runs. The first step is to set the Key used to cache directories. The directory _m2_cache_dir_ is created in the project's root directory.

```yaml
env:
  NUGET_PACKAGES: 'C:\nuget_global_cache'
  NUGET_HTTP_CACHE_PATH: 'C:\nuget_http_cache'
  NUGET_PLUGINS_CACHE_PATH: 'C:\nuget_plugins_cache'

cacheKey: '{{ checksum "packages.txt" }}'
```

Steps (or commands) that must run before the test execution are listed in the _pre_ run step. In the example, the Maven packages are downloaded in the _m2_cache_dir_. To prevent test execution at the _pre_ stage, the _maven.test.skip_ parameter is set to _true_ so that only packages are downloaded and no test execution is performed.

```yaml
pre:
  - dotnet list PlaywrightDotnetTests.csproj package > packages.txt
  - nuget locals all -clear
  - dotnet build -c Release
```

### Post Steps

Steps (or commands) that need to run after the test execution are listed in the _post_ step. In the example, we _cat_ the contents of _yaml/win/dotnet_playwright_hyperexecute_matrix_sample.yaml_

```yaml
post:
  - cat yaml/win/dotnet_playwright_hyperexecute_matrix_sample.yaml
```

### Artifacts Management

The _mergeArtifacts_ directive (which is by default _false_) is set to _true_ for merging the artifacts and combing artifacts generated under each task.

The _uploadArtefacts_ directive informs HyperExecute to upload artifacts [files, reports, etc.] generated after task completion. In the example, _path_ consists of a regex for parsing the directories that contain the XML and JSON reports (i.e. _target/surefire-reports/testng-results.xml_ and _target/surefire-reports/testng-results.xml_) directory.

```yaml
mergeArtifacts: true

uploadArtefacts:
  - name: XmlReports
    path:
      - PlaywrightTestReport.xml
  - name: JsonReports
    path:
      - PlaywrightTestReport.json
```

## Test Execution

The CLI option _--config_ is used for providing the custom HyperExecute YAML file (i.e. _yaml/win/dotnet_playwright_hyperexecute_matrix_sample.yaml_ for Windows and _yaml/linux/dotnet_playwright_hyperexecute_matrix_sample.yaml_ for Linux).

#### Execute Playwright .Net tests using Matrix mechanism on Windows platform

Run the following command on the terminal to trigger Playwright tests on the Windows platform. The _--download-artifacts_ option is used to inform HyperExecute to download the artifacts for the job. The _--force-clean-artifacts_ option force cleans any existing artifacts for the project.

```bash
./hyperexecute --config yaml/win/dotnet_playwright_hyperexecute_matrix_sample.yaml --force-clean-artifacts --download-artifacts
```

#### Execute Playwright .Net tests using Matrix mechanism on Linux platform

Run the following command on the terminal to trigger Playwright tests on the Linux platform. The _--download-artifacts_ option is used to inform HyperExecute to download the artifacts for the job. The _--force-clean-artifacts_ option force cleans any existing artifacts for the project.

```bash
./hyperexecute --config yaml/linux/dotnet_playwright_hyperexecute_matrix_sample.yaml --force-clean-artifacts --download-artifacts
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