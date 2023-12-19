---
id: playwright-python-on-hyperexecute
title: Run playwright automation tests on HyperExecute using Python
hide_title: true
sidebar_label: Python
description: Learn how to run playwright automation tests on HyperExecute using Python framework
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
url: https://www.lambdatest.com/support/docs/playwright-python-on-hyperexecute/
site_name: LambdaTest
slug: playwright-python-on-hyperexecute/
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
          "name": "How to run Playwright automation tests on HyperExecute using Python framework",
          "item": "https://www.lambdatest.com/support/docs/playwright-python-on-hyperexecute/"
        }]
      })
    }}
></script>

# Run Playwright Automation Tests on HyperExecute Using Python
* * *
Playwright is a Node.js library that uses a single API to automate Chromium, Firefox, and WebKit. It is designed to enable powerful, reliable, and efficient [automated browser testing](https://www.lambdatest.com/automated-browser-testing). Playwright can also automate Microsoft Edge since it is built on the open-source Chromium web framework.

LambdaTest allows you to run Playwright tests across 40+ real browsers and operating system combinations. This guide will cover the basics of getting started with Playwright testing using Python on the Lambdatest HyperExecute grid.

> HyperExecute has several state of the art features to help you optmize your testing process. Go through the [features page](/support/docs/key-features-of-hyperexecute/) to take a look at all the tools that HyperExecute offers. 

>HyperExecute is compliant with leading security standards - SOC2, GDPR, and CCPA. Refer to [HyperExecute Getting Started Guide](/docs/getting-started-with-hyperexecute) for more information about features offered by HyperExecute.

> All the code samples in this documentation can be found in the [Playwright-Python HyperExecute GitHub repository](https://github.com/LambdaTest/hyperexecute-playwright-python-sample/). You can either download or clone the repository to run tests on the HyperExecute Grid.


## Gitpod
***
Follow the below steps to run Gitpod button:
1. Click the **Open in Gitpod** button (You will be redirected to Login/Signup page).
<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>
2. Login with Lambdatest credentials. You will be redirected to HyperExecute dashboard with pop-up confirming to **'Proceed'** to Gitpod editor in the new tab and current tab will show hyperexecute dashboard.
[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=PlayWright&framework=Python)

## Prerequisites for running Playwright-Python tests on the HyperExecute Grid
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
## Auto-Split Execution with Playwright-Python
***
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
maxRetries: 5
concurrency: 2
```

## Pre Steps and Dependency Caching

To leverage the advantage offered by *Dependency Caching* in HyperExecute, the integrity of *requirements.txt* is checked using the checksum functionality.

```yaml
cacheKey: '{{ checksum "requirement.txt" }}'
```

By default, *pip* in Python saves the downloaded packages in the cache so that next time, the package download request can be serviced from the cache (rather than re-downloading it again).

The caching advantage offered by *pip* can be leveraged in HyperExecute, whereby the downloaded packages can be stored (or cached) in a secure server for future executions. The packages available in the cache will only be used if the checksum stage results in a Pass.

The *cacheDirectories* directive is used for specifying the directory where the packages have to be cached. The mentioned directory will override the default directory where Python packages are usually cached; further information about caching in pip is available [here](https://pip.pypa.io/en/stable/cli/pip_cache/). The packages downloaded using pip will be cached in the directory (or location) mentioned under the *cacheDirectories* directive.

In our case, the downloaded packages are cached in the *CacheDir* folder in the project's root directory. The folder is automatically created when the packages mentioned in *requirements.txt* are downloaded.  

```yaml
cacheDirectories:
  - CacheDir
```

Content under the *pre* directive is the precondition that will run before the tests are executed on the HyperExecute grid. The *--cache-dir* option in *pip3* is used for specifying the cache directory. It is important to note that downloaded cached packages are securely uploaded to a secure cloud before the execution environment is auto-purged after build completion. Please modify *requirements.txt* as per the project requirements.

```yaml
pip3 install -r requirements.txt  --cache-dir CacheDir
```

## Post Steps

The *post* directive contains a list of commands that run as a part of post-test execution. Here, the contents of *yaml/win/.hyperexecute_autosplits.yaml* are read using the *cat* command as a part of the post step.

```yaml
post:
  - cat yaml/win/*.*hyperexecute_autosplits.yaml
```

The *testDiscovery* directive contains the command that gives details of the mode of execution, along with detailing the command that is used for test execution. Here, we are fetching the list of Python files that would be further executed using the *value* passed in the *testRunnerCommand*

```yaml
testDiscovery:
  type: raw
  mode: dynamic
  command: grep -lr 'def' *.py

testRunnerCommand: python $test
```

Running the above command on the terminal will give a list of Python files that are located in the Project folder:

* test_sample_.py
* test_app.py

The *testRunnerCommand* contains the command that is used for triggering the test. The output fetched from the *testDiscoverer* command acts as an input to the *testRunner* command.

```yaml
testRunnerCommand: python $test
```

### Test Execution

The CLI option *--config* is used for providing the custom HyperExecute YAML file (i.e. *yaml/win/.hyperexecute_autosplits.yaml* for Windows, *yaml/linux/.hyperexecute_autosplits.yaml* for Linux and  *yaml/linux/.hyperexecute_autosplits.yaml* for Max).

#### Execute Playwright-Python tests using Autosplit mechanism on Windows platform

Run the following command on the terminal to trigger the tests in Python files with HyperExecute platform set to Windows. The *--download-artifacts* option is used to inform HyperExecute to download the artifacts for the job.

```bash
./hyperexecute --download-artifacts --config --verbose yaml/win/.hyperexecute_autosplits.yaml
```

#### Execute Playwright-Python tests using Autosplit mechanism on Linux platform

Run the following command on the terminal to trigger the tests in Python files with HyperExecute platform set to Linux. The *-ifacts* option is used to inform HyperExecute to download the artifacts for the job.

```bash
./hyperexecute --download-artifacts --config --verbose yaml/linux/.hyperexecute_autosplits.yaml
```

#### Execute Playwright-Python tests using Autosplit mechanism on Mac platform

Run the following command on the terminal to trigger the tests in Python files with HyperExecute platform set to MAc. The *-ifacts* option is used to inform HyperExecute to download the artifacts for the job.

```bash
./hyperexecute --download-artifacts --config --verbose yaml/mac/.hyperexecute_autosplits.yaml
```

# Matrix Execution with Playwright-Python

Matrix-based test execution is used for running the same tests across different test (or input) combinations. The Matrix directive in HyperExecute YAML file is a *key:value* pair where value is an array of strings.

Also, the *key:value* pairs are opaque strings for HyperExecute. For more information about matrix multiplexing, check out the [Matrix Getting Started Guide](/support/docs/hyperexecute-matrix-multiplexing-strategy/)

### Core

In the current example, matrix YAML file (*yaml/win/.hyperexecute_matrix.yaml*) in the repo contains the following configuration:

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

Python files in the 'tests' folder contain the test suites run on the HyperExecute grid. In the example, the tests in the files *tests/lt_sample_todo.py* and *tests/lt_selenium_playground.py* run in parallel using the specified input combinations.

```yaml
files: ["test_app.py", "test_sample_.py"]
```

The *testSuites* object contains a list of commands (that can be presented in an array). In the current YAML file, commands for executing the tests are put in an array (with a '-' preceding each item). The Python command is used to run tests in *.py* files. The files are mentioned as an array to the *files* key that is a part of the matrix.

```yaml
testSuites:
  - python $files
```

### Pre Steps and Dependency Caching

Dependency caching is enabled in the YAML file to ensure that the package dependencies are not downloaded in subsequent runs. The first step is to set the Key used to cache directories.

```yaml
cacheKey: '{{ checksum "requirement.txt" }}'
```

Set the array of files & directories to be cached. In the example, all the packages will be cached in the *CacheDir* directory.

```yaml
cacheDirectories:
  - CacheDir
```

Commands that must run before the test execution are listed in the *pre* run step. In the example, the packages listed in *requirements.txt* are installed using the *pip3* command.

The *--cache-dir* option is used for specifying the location of the directory used for caching the packages (i.e. *CacheDir*). It is important to note that downloaded cached packages are securely uploaded to a secure cloud before the execution environment is auto-purged after build completion. Please modify *requirements.txt* as per the project requirements.

```yaml
pre:
  - pip3 install -r requirements.txt --cache-dir CacheDir
```

### Post Steps

Steps (or commands) that need to run after the test execution are listed in the *post* step. In the example, we *cat* the contents of *yaml/win/.hyperexecute_matrix.yaml*

```yaml
post:
  - cat yaml/win/.hyperexecute_matrix.yaml
```

## Test Execution

The CLI option *--config* is used for providing the custom HyperExecute YAML file (i.e. *yaml/win/.hyperexecute_matrix.yaml* or *yaml/linux/.hyperexecute_matrix.yaml* or *yaml/mac/.hyperexecute_matrix.yaml*).

#### Execute Playwright-Python tests using Matrix mechanism on Windows platform

Run the following command on the terminal to trigger the tests in Python files with HyperExecute platform set to Windows. The *--download-artifacts* option is used to inform HyperExecute to download the artifacts for the job.

```bash
./hyperexecute --download-artifacts --config --verbose yaml/win/.hyperexecute_matrix.yaml
```

#### Execute Playwright-Python tests using Matrix mechanism on Linux platform

Run the following command on the terminal to trigger the tests in Python files with HyperExecute platform set to Linux. The *--download-artifacts* option is used to inform HyperExecute to download the artifacts for the job.

```bash
./hyperexecute --download-artifacts --config --verbose yaml/linux/.hyperexecute_matrix.yaml
```

#### Execute Playwright-Python tests using Matrix mechanism on Mac platform

Run the following command on the terminal to trigger the tests in Python files with HyperExecute platform set to MAC. The *--download-artifacts* option is used to inform HyperExecute to download the artifacts for the job.

```bash
./hyperexecute --download-artifacts --config --verbose yaml/mac/.hyperexecute_matrix.yaml
```


## Secrets Management
In case you want to use any secret keys in the YAML file, you can set it set by clicking on the **Secrets** button on the dashboard.
Now create a secret key that you can use in the HyperExecute YAML file.

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