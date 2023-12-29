---
id: protractor-on-hyperexecute-grid
title: Run automation tests on HyperExecute using Protractor
hide_title: true
sidebar_label: Protractor
description: Learn how to run Selenium automation tests on HyperExecute grid using the Protractor framework
keywords:
  - Protractor
  - Protractor selenium
  - Protractor JavaScript Selenium
  - Protractor automation testing
  - selenium webdriver Protractor
  - selenium Protractor testing tutorial
  - Protractor JavaScript Selenium framework
  - lambdatest Protractor
  - frameworks on lambdatest
  - hyperexecute grid
  - hyperexecute Protractor testing
  - hyperexecute Protractor testing
  - hyperexecute automation testing
  - HyperExecute Selenium automation
url: https://www.lambdatest.com/support/docs/protractor-on-hyperexecute-grid/
site_name: LambdaTest
slug: protractor-on-hyperexecute-grid/
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
          "name": "How to run automation tests on HyperExecute using Protractor framework",
          "item": "https://www.lambdatest.com/support/docs/protractor-on-hyperexecute-grid/"
        }]
      })
    }}
></script>

# Run automation tests on HyperExecute using Protractor
***

HyperExecute lets you run E2E (End-to-End) Selenium tests at the fastest possible speed. Unlike normal Selenium grid that involves multiple hops during the process of test execution, speed of execution on HyperExecute Grid is *super fast* as the code is executed on a secure cloud.

End-to-end encryption of the data (including the source code) ensures that the *data* is secure whether it is at rest or in transit. YAML-based workflow helps in realizing the benefits of optimal test execution and orchestration. Along with the unique features offered by HyperExecute, you also get access to a host of LambdaTest cloud features like detailed logs, Smart CI features, network insights, video recording, access to a range of browsers & platforms on the cloud, amongst others.

> HyperExecute has several state of the art features to help you optimize your testing process. Go through the [features page](/support/docs/key-features-of-hyperexecute/) to take a look at all the tools that HyperExecute offers. 

>HyperExecute is compliant with leading security standards - SOC2, GDPR, and CCPA. Refer to [HyperExecute Getting Started Guide](/docs/getting-started-with-hyperexecute) for more information about features offered by HyperExecute.

> All the code samples in this documentation can be found in the [Protractor HyperExecute GitHub repository](https://github.com/LambdaTest/Protractor-HyperExecute-Sample). You can either download or clone the repository to run tests on the HyperExecute Grid.


## Getting started with Protractor tests on HyperExecute
***

The *HyperExecute CLI* is used for triggering tests on HyperExecute Grid. The CLI provides a host of other useful features that accelerate test execution. You should download the HyperExecute CLI binary on the host system for running tests on HyperExecute. Shown below is the HyperExecute CLI download location for different platforms:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

For detailed information about HyperExecute CLI, please refer to [HyperExecute CLI section](/docs/getting-started-with-hyperexecute/#hyperexecute-cli-to-interact-with-hyperexecute) in the HyperExecute getting started guide.

>
The fundamental difference between running Selenium tests on a cloud Selenium Grid and HyperExecute Grid is that you need not have any configurations on the local machine (i.e. the machine from where HyperExecute CLI is triggered). This is because the source code from the local machine will be zipped and securely uploaded to the cloud where the execution will be performed on the remote Virtual Machine (VM).

## Prerequisites for running Protractor tests on HyperExecute Grid
***

Before using HyperExecute, you have to download HyperExecute CLI corresponding to the host OS. You also need to export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile). Follow the below mentioned steps to set the environment variables *LT_USERNAME* & *LT_ACCESS_KEY* from the terminal.

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

Dependency caching is enabled in the YAML file to ensure that the package dependencies are not downloaded in subsequent runs. The integrity of *package-lock.json* is checked using the checksum functionality.

```yaml
cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
  - node_modules
```

Steps (or commands) that must run before the test execution are listed in the pre run step. In the example, the packages listed in *package-lock.json* are installed using the *npm install* command.

```yaml
pre:
  - npm install
```

To reduce the upload size, it is recommended to include *files to be added in the ignore list* in *.hyperexecuteignore* which is located at the root of the project. You can modify the content of *.hyperexecuteignore* as per your project requirements:

```
hyperexecute.exe
*.zip
*.log
artifacts
logs
```

## Running Protractor Tests on HyperExecute Grid using Matrix Execution
***

Shown below is the HyperExecute YAML file for matrix execution:

```yaml
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

pre:
  - npm install -g protractor
  - npm install

runons: linux

cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
  - node_modules

matrix:
  os: [linux]
  browser: ["chrome","firefox","edge"]
  Specs: ["specs/fileupload.js","specs/single.js"]

testSuites:
  - protractor conf/single.conf.js --specs=$Specs --browser=$browser

uploadArtefacts:
  - name: Reports
    path:
      - ProtractorTestReport.html
      - xmlresults.xml

post:
  - cat yaml/hyperExecute_matrix.yaml

env:
  LT_ACCESS_KEY: ${{.secrets.LT_ACCESS_KEY}}
  LT_USERNAME: LT_USERNAME
```

Here are the major pointers that you should know for executing Protractor tests using matrix execution:

- Global timeout, test suite timeout, and test suite step timeout : 90 minutes

```yaml
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
```

- The target platform is set to *win* using the *runson* key

```yaml
runson: linux
```

- The *matrix* constitutes of the following entries - *os*, *browser*, and *Specs*. PProtractor Spec files in the contain the Test Scenario run on the HyperExecute grid. In the example, *specs/fileupload.js* runs in parallel on the basis of scenario using the input combinations.

```yaml
matrix:
  os: [linux]
  browser: ["chrome","firefox","edge"]
  Specs: ["specs/fileupload.js","specs/single.js"]
```

- Test dependencies and required packages are installed as a part of the *pre* step.

```yaml
pre:
  - npm install -g protractor
  - npm install
```

- Commands that have to run after test execution are listed in the *post* step. In the example, we cat the contents of *yaml/hyperExecuteMatrix.yaml*

```yaml
post:
  - cat yaml/hyperExecute_matrix.yaml
```

### Test Execution using Matrix Multiplexing

The CLI option *--config* is used for providing the custom HyperExecute YAML file (i.e. *yaml/hyperExecute_matrix.yaml*). Run the following command on the terminal to trigger the tests on the HyperExecute Grid. The *--download-artifacts* option is used to inform HyperExecute to download the artifacts for the job.

Shown below is *HyperExecute CLI* command that has to be triggered from the root folder of the project (in case the execution platform is Windows):

```bash
./hyperexecute --config yaml/hyperExecuteMatrix.yaml --download-artifacts --force-clean-artifacts
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/protractor/protractor_matrix_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Running Protractor Tests on HyperExecute Grid using Auto-split Execution
***

Shown below is the HyperExecute YAML file for auto-split execution:

```yaml
---
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
retryOnFailure: true
runson: linux
maxRetries: 2
concurrency: 3
autosplit: true
pre:
  - npm install -g protractor
  - npm install

cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
  - node_modules
testDiscovery:
  type: raw
  mode: static
  command: grep -nri 'describe' specs -ir --include=\*.js | sed 's/:.*//'
testRunnerCommand: protractor conf/single.conf.js --specs=$test --browser=chrome

uploadArtefacts:
  - name: Reports
    path:
      - ProtractorTestReport.html
      - xmlresults.xml

post:
  - cat yaml/hyperExecute_autoSplit.yaml

env:
  LT_ACCESS_KEY: ${{.secrets.LT_ACCESS_KEY}}
  LT_USERNAME: LT_USERNAME
```

Here are the major pointers that you should know for executing Protractor tests using auto-split execution:

- The target platform is set to *linux* using the *runson* key

```yaml
runson: linux
```

- Auto-split is set to true in the YAML file

```yaml
autosplit: true
```

- *retryOnFailure* is set to true to instruct HyperExecute to retry the failed commands. The retry operation is carried out till the number of retries mentioned in *maxRetries* are exhausted or the command execution results in a Pass.

```yaml
autosplit: true
retryOnFailure: true
maxRetries: 2
```

- The concurrency (i.e. number of parallel sessions) is set to 3.

```yaml
concurrency: 3
```

- Steps (or commands) that must run before the test execution are listed in the *pre* run step. All the required packages in *package-lock.json* are installed using *npm install* in this step.

```yaml
pre:
  - npm install -g protractor
  - npm install
```

- Commands to be run after test execution are listed in the *post* step. In the example, we cat the contents of *yaml/hyperExecute_autoSplit.yaml*

```yaml
post:
  - cat yaml/hyperExecute_autoSplit.yaml
```

The *testDiscovery* directive contains the command that gives details of the mode of execution, along with detailing the command that is used for test execution. Here, we are fetching the list of Feature file scenarios that would be further executed using the value passed in the *testRunnerCommand*

```yaml
testDiscovery:
  type: raw
  mode: static
  command: grep -nri 'describe' specs -ir --include=\*.js | sed 's/:.*//'
testRunnerCommand: protractor conf/single.conf.js --specs=$test --browser=chrome
```

Running the above command on the terminal will give the list of JavaScript files that consist the test scenarios:

```
* specs/fileupload.js
* specs/single.js
```

The *testRunnerCommand* contains the command that is used for triggering the test. Its output is fetched to the *testRunnerCommand*

```yaml
testRunnerCommand: protractor conf/single.conf.js --specs=$test --browser=chrome
```

### Command to trigger Autosplit execution

Shown below is *HyperExecute CLI* command that has to be triggered from the root folder of the project:

```bash
./hyperexecute --config --verbose yaml/hyperExecute_autoSplit.yaml --download-artifacts --force-clean-artifacts
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/protractor/protractor_autosplit_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

Shown below is the execution screenshot when the YAML file is triggered from the terminal:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/protractor/protractor_autosplit_cmd_1.png').default} alt="Protractor HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>


## Pre Steps, Post Steps, Dependency Caching, and Artifacts Management
***

Here are some of the advanced features (i.e. dependency caching, retries, post, and artifacts management) of HyperExecute that must be leveraged for accelerated package installation and verifying the results of the test execution. All the advanced features are applicable to Matrix and Auto-split modes.

### Pre Steps and Dependency Caching

Dependency caching is enabled in the YAML file to ensure that the package dependencies are not downloaded in subsequent runs. The first step is to set the Key used to cache directories. Here, we cache the packages that are downloaded in the *node_modules* folder.

```yaml
cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
  - node_modules
```

Steps (or commands) that must run before the test execution are listed in the pre run step. Packages listed in *package.json* are installed using the *npm install* command.

```yaml
pre:
  - npm install -g protractor
  - npm install
```

### Post steps

Steps (or commands) that need to run after the test execution are listed in the *post* step. In the example, we *cat* the contents of *yaml/hyperExecute_autoSplit.yaml*

```yaml
post:
  - cat yaml/hyperExecute_autoSplit.yaml
```

### Retries

The *retryOnFailure* directive when set to *true* instructs HyperExecute to retry failed command(s). The retry operation is carried out till the number of retries mentioned in *maxRetries* are exhausted or the command execution results in a pass. Here is the combination of *retryOnFailure* and *maxRetries* that can be used for retrying command (or test) execution:

```yaml
retryOnFailure: true
maxRetries: 2
```

### Artifacts Management

The *mergeArtifacts* directive (which is by default *false*) is set to *true* for merging the artifacts and combing artifacts generated under each task.

The *uploadArtefacts* directive informs HyperExecute to upload artifacts [files, reports, etc.] generated after task completion. In the example, *path* consists of a regex for parsing the directory (i.e. *reports*) that contain the test execution report in the XML format.

```yaml
uploadArtefacts:
  - name: Reports
    path:
      - ProtractorTestReport.html
      - xmlresults.xml
```

HyperExecute also facilitates the provision to download the artifacts on your local machine. To download the artifacts, click on Artifacts button corresponding to the associated TestID.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/protractor/protractor_artifacts_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

You can download the artifacts by clicking on the Download button as shown below:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/protractor/protractor_artifacts_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Secrets Management

In case you want to use any secret keys in the YAML file, the same can be set by clicking on the Secrets button the dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/pytest/pytest_secret_management_1.png').default} alt="secret management"  width="1920" height="868" className="doc_img"/>

Now create secrets that you can use in the HyperExecute YAML file.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/pytest/pytest_secret_management_2.png').default} alt="secret management"  width="100" height="650" className="doc_img"/>

## Navigation in Automation Dashboard

Every test run on the HyperExecute Grid has a unique *jobId* associated with it. Each *jobId* can in turn constitute single (or multiple) *groupId*(s). You can visit [HyperExecute automation dashboard](https://automation.lambdatest.com/hyperexecute/) for checking the status of the test execution.

HyperExecute lets you seamlessly navigate between jobId's and taskId's. The same can be done by navigating to *Automation* -> *HyperExecute logs* -> *Corresponding jobId* on the HyperExecute automation dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/protractor/protractor_autosplit_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

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
      Run Protractor tests on HyperExecute Grid
      </span>
    </li>
  </ul>
</nav>