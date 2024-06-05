---
id: cypressv10-on-hyperexecute
title: Run automation tests on HyperExecute using Cypress v10
hide_title: true
sidebar_label: Cypress v10
description: Learn how to run playwright automation tests on HyperExecute using Cypress v10 framework
keywords:
  - end to end test
  - end to end test cypress
  - unit testing
  - unit testing tutorial
  - cypress testing
  - cypress automation testing
  - cypress v10 testing tutorial
  - cypress v9 testing tutorial
  - python selenium framework
  - selenium
  - selenium automation testing
  - selenium testing tool
  - selenium testing tutorial
  - hyperexecute
  - hyperexecute cypress testing
  - hyperexecute automation testing
  - hyperexecute cypressv10 testing
  - hyperexecute cypress testing
url: https://www.lambdatest.com/support/docs/cypressv10-on-hyperexecute/
site_name: LambdaTest
slug: cypressv10-on-hyperexecute/
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
          "name": "How to run cypress automation tests on HyperExecute using cypress v10 framework",
          "item": "https://www.lambdatest.com/support/docs/cypressv10-on-hyperexecute/"
        }]
      })
    }}
></script>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run Automation Tests Using Cypress v10
* * *

> **NOTE :** This documentation is applicable for **Cypress v10** and **later versions**.

HyperExecute is a smart test orchestration platform that allows you to run end-to-end Cypress tests as quickly as possible by providing a test infrastructure with optimal speed, test orchestration, and detailed execution logs.

This guide will cover the basics of getting started with Cypress v10 testing on the HyperExecute.

## Running Cypress v10 Tests on HyperExecute
***

Cypress Tests can be executed on HyperExecute using 2 ways:

1. [**Using Local System**](/support/docs/cypressv9-on-hyperexecute#1-testing-using-local-system) - Requires [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) to execute tests from your Local System. 
2. [**Using Gitpod**](/support/docs/cypressv9-on-hyperexecute#2-testing-using-gitpod) -  Execute tests using GitPod. (Requires a [Gitpod](https://gitpod.io/login/) account)

## 1. Testing Using Local System
***

### Pre-requisites:

To run the Tests on HyperExecute from your Local System, you are required:

- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Your lambdatest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- Setup the Environmental Variable

:::tip Sample repo
You can either download or clone the code samples of Cypress v9 from the **LambdaTest's GitHub Repository** to quickly run your tests. <a href="https://github.com/LambdaTest/hyperexecute-cypress-v10-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

#### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute Grid. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

<!-- For detailed information about HyperExecute CLI, please refer to [HyperExecute CLI section](/docs/getting-started-with-hyperexecute/#hyperexecute-cli-to-interact-with-hyperexecute) in the HyperExecute getting started guide. -->

<!-- > -->
<!-- The fundamental difference between running Selenium tests on a cloud Selenium Grid and HyperExecute Grid is that you need not have any configurations on the local machine (i.e. the machine from where HyperExecute CLI is triggered). This is because the source code from the local machine will be zipped and securely uploaded to the cloud where the execution will be performed on the remote Virtual Machine (VM). -->


#### Setup Environment Variable
Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

***

For macOS:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Linux:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Windows:

```bash
set LT_USERNAME=YOUR_LT_USERNAME
set LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

### Execution Methods:
***

Cypress Tests can be executed on HyperExecute using 2 methods:

### 1. Execution Using Auto-Split
***

The Auto-Split mechanism enables you to run tests at predefined concurrency levels and distribute them across available infrastructure. Concurrency can be achieved at various levels, including file, module, test suite, test, and scenario.

> To learn more about Auto-Split, refer to the [Auto-Split Getting Started Guide](https://www.lambdatest.com/support/docs/getting-started-with-hyperexecute/#smart-auto-test-splitting)

#### Core

Auto-split YAML file in the repo contains the following configuration:

```yaml
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
```

The **`runson`** key determines the platform (or operating system) on which the tests are executed. Here we have set the target OS as Windows.

```yaml
runson: win
```

**`auto-split`** is set to true in the YAML file.

```yaml
 autosplit: true
```

**`retryOnFailure`** is set to true, instructing HyperExecute to retry failed command(s). The retry operation is carried out till the number of retries mentioned in *maxRetries* are exhausted or the command execution results in a *Pass*. In addition, the concurrency (i.e. number of parallel sessions) is set to 4.

```yaml
retryOnFailure: true
maxRetries: 1
concurrency: 1
```

**`cypress`** is set to true in the YAML file.

```yaml
cypress: true
```
Cypress Build name and tags are added in the YAML file.

```yaml
cypressOps:
 Build: "Hyperexecute Cypress Sample Build"
 Tags: ["Hyperexecute","Cypress", "Windows", "Autosplit"]
 BuildTags: ["Hyperexecute-Cypress"]
```

#### Pre Steps

Steps (or commands) that must run before the test execution are listed in the *pre* run step.

```yaml
pre:
  - npm install
```

#### Post Steps

Steps (or commands) that need to run after the test execution are listed in the *post* step. In the example, we *cat* the contents of *yaml/.hyperexecute_autosplit.yaml*

```yaml
post:
  - cat yaml/win/.hyperexecute_autosplit.yaml
```

The **`testDiscovery`** directive contains the command that gives details of the mode of execution, along with detailing the command that is used for test execution. Here, we are fetching the list of class names that would be further passed in the *testRunnerCommand*

```yaml
testDiscovery:
  type: raw
  mode: static
  command: ls cypress/e2e/2-advanced-examples | sed -n 1,'1p'
```

Running the above command on the terminal will give a list of scenarios present in the *feature* files:

* actions.cy.js

The **`testRunnerCommand`** contains the command that is used for triggering the test. The output fetched from the *testDiscoverer* command acts as an input to the *testRunner* command.

```yaml
testRunnerCommand: npx cypress run  --spec ./cypress/e2e/2-advanced-examples/$test --browser=chrome-95.0 --headed --config video=false
```

#### Test Execution

Run the following command on the terminal to trigger the tests as per your machine.
<Tabs className="docs__val">
  <TabItem value="windows" label="Windows" default>

```bash
./hyperexecute --config yaml/win/.hyperexecute_autosplit.yaml --force-clean-artifacts --download-artifacts
```

  </TabItem>

  <TabItem value="mac" label="Mac" default>

```bash
./hyperexecute --config yaml/mac/.hyperexecute_autosplit.yaml --force-clean-artifacts --download-artifacts
```

  </TabItem>

  <TabItem value="linux" label="Linux" default>

```bash
./hyperexecute --config yaml/linux/.hyperexecute_autosplit.yaml --force-clean-artifacts --download-artifacts
```
    
  </TabItem>

</Tabs>


Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution

#### Sample YAML File for Auto-Split

```bash
---
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
retryOnFailure: true
runson: win
cypress: true
maxRetries: 1
concurrency: 2
autosplit: true
pre:
  - npm install
  - npm install cypress --save-dev
cacheKey: '{{ checksum "package.json" }}'
cacheDirectories:
  - node_modules
  - cypressCache
env:
  CYPRESS_CACHE_FOLDER: cypressCache
testDiscovery:
  mode: static
  type: raw
  command: ls cypress/e2e/2-advanced-examples
testRunnerCommand: npx cypress run  --spec ./cypress/e2e/2-advanced-examples/$test --browser=chrome-95.0 --headed --config video=false
cypressOps:
 Build: "Hyperexecute Cypress Sample Build"
 Tags: ["Hyperexecute","Cypress", "Windows", "Autosplit"]
 BuildTags: ["Hyperexecute-Cypress"]
post:
  - cat yaml/win/.hyperexecute_autosplit.yaml


jobLabel: [cypress-v10, win, autosplit]
```


### 2. Execution Using Matrix
***

Matrix-based test execution is used for running the same tests across different test (or input) combinations. The Matrix directive in HyperExecute YAML file is a *key:value* pair where value is an array of strings. Also, the *key:value* pairs are opaque strings for HyperExecute.

> To learn more about Auto-Split, refer to the [Matrix Getting Started Guide](/support/docs/hyperexecute-matrix-multiplexing-strategy/)

#### Core

In the current example, matrix YAML file in the repo contains the following configuration:

```yaml
globalTimeout: 100
testSuiteTimeout: 90
testSuiteStep: 90
```
 
The target platform is set to Win. Please set the **`runson`** key to mac if the tests have to be executed on the macOS platform.

```yaml
runson: win
```

The **`matrix`** constitutes of the following entries - *files*. The entries represent the test file names in the test code.

```yaml
matrix:
  os: [win]
  browser: ["chrome-95.0","chrome-96.0","chrome-97.0","chrome-98.0","chrome-99.0","chrome-100.0","chrome-101.0","chrome-102.0","chrome-103.0","chrome-104.0","chrome-105.0"]
  files: ["actions.cy.js"]
```

The **`testSuites`** object contains a list of commands (that can be presented in an array). In the current YAML file, commands for executing the tests are put in an array (with a '-' preceding each item). The Maven command *mvn test* is used to run tests located in the current project. In the current project, parallel execution is achieved at the *class* level. The *maven.repo.local* parameter in Maven is used for overriding the location where the dependent Maven packages are downloaded.

```yaml
testSuites:
  - npx cypress run  --spec ./cypress/e2e/2-advanced-examples/$files --browser=$browser --headed --config video=false
```

**`cypress`** is set to true in the YAML file.

```yaml
cypress: true
```
Cypress build name and tags are added in the YAML file.

```yaml
cypressOps:
 Build: "Hyperexecute Cypress Sample Build"
 Tags: ["Hyperexecute","Cypress", "Windows", "Matrix"]
 BuildTags: ["Hyperexecute-Cypress"]
```
#### Pre Steps

Steps (or commands) that must run before the test execution are listed in the *pre* run step.

```yaml
pre:
  -  npm install
```

#### Post Steps

Steps (or commands) that need to run after the test execution are listed in the *post* step. In the example, we *cat* the contents of *yaml/.hyperexecute_matrix.yaml*

```yaml
post:
  - cat yaml/win/.hyperexecute_matrix.yaml
```

#### Test Execution

Run the following command on the terminal to trigger the tests as per your machine.
<Tabs className="docs__val">
  <TabItem value="windows" label="Windows" default>

```bash
./hyperexecute --config yaml/win/.hyperexecute_matrix.yaml --force-clean-artifacts --download-artifacts
```

  </TabItem>

  <TabItem value="mac" label="Mac" default>

```bash
./hyperexecute --config yaml/mac/.hyperexecute_matrix.yaml --force-clean-artifacts --download-artifacts
```

  </TabItem>

  <TabItem value="linux" label="Linux" default>

```bash
./hyperexecute --config yaml/linux/.hyperexecute_matrix.yaml --force-clean-artifacts --download-artifacts
```
    
  </TabItem>

</Tabs>

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution

#### Sample YAML File for Matrix
```bash
---
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
retryOnFailure: false
runson: ${matrix.os}
cypress: true
maxRetries: 2
parallelism: 1
concurrency: 2
pre:
  - npm install
  - npm install cypress --save-dev
cacheKey: '{{ checksum "package.json" }}'
cacheDirectories:
  - node_modules
matrix:
   os: [win]
   browser: ["chrome-103.0","chrome-104.0","chrome-105.0"]
   files: ["actions.cy.js"]
testSuites: 
  - npx cypress run  --spec ./cypress/e2e/2-advanced-examples/$files --browser=$browser --headed --config video=false
cypressOps:
 Build: "Hyperexecute Cypress Sample Build"
 Tags: ["Hyperexecute","Cypress", "Windows", "Matrix"]
 BuildTags: ["Hyperexecute-Cypress"]
post:
  - cat yaml/win/.hyperexecute_matrix.yaml

jobLabel: [cypress-v10, win, matrix]
```


## 2. Testing Using Gitpod
***

Follow the below steps to run Cypress Tests on HyperExecute using Gitpod:

**Step 1:** Click the **Open in Gitpod** button (You will be redirected to Login/Signup page).

[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=Cypress&framework=Cypress-v10)

**Step 2:** Login with Lambdatest credentials. You will be redirected to HyperExecute dashboard with pop-up confirming to **'Proceed'** to Gitpod editor in the new tab and current tab will show hyperexecute dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>

**Step 3:** You will need to login into your Gitpod account, or create a new one. <br/>
  (If you are creating a new account, choose your preferred editor. We recommend VS Code)

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod2.png').default} alt="Image"  className="doc_img"/>

**Step 4:** As you are running a sample project, Fetching of the Test Scripts, [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/), [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) and Triggering your tests using the `Execution Command` will be automated. 

**Step 5:** Once you see the `Job Link` in the logs, you can visit the [HyperExecute dashboard](https://hyperexecute.lambdatest.com/hyperexecute) to see the tests getting executed.


## Secrets Management
***

If you want to use any secret keys in the YAML file, this can be set by clicking on the **Secrets** button on the dashboard. All you need to do is create an environment variable that uses the secret key:

```yaml
env:
  PAT: ${{ .secrets.testKey }}
```

>For any query or doubt, please feel free to contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />
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
      Run PyUnit tests on HyperExecute
      </span>
    </li>
  </ul>
</nav>