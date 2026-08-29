---
id: cypress-integration-with-hyperexecute
title: Cypress Integration with HyperExecute
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Cypress"
description: You can now integrate Cypress with HyperExecute. To do so, follow the steps listed in the document.
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with cypress
    - products
    - cypress integration
    - cypress integration with hyperexecute
url: https://www.testmuai.com/support/docs/cypress-integration-with-hyperexecute/
site_name: TestMu AI
slug: cypress-integration-with-hyperexecute/
canonical: https://www.testmuai.com/support/docs/cypress-integration-with-hyperexecute/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Cypress Integration with HyperExecute",
          "item": `${BRAND_URL}/support/docs/cypress-integration-with-hyperexecute/`
        }]
      })
    }}
></script>

# Cypress Integration with HyperExecute

In the realm of the software development and testing, developers and QA engineers embarked on a quest to ensure the reliability and efficiency of their applications.

They needed a robust end-to-end testing framework that can help them to deal with issues like flaky tests, time travel debugging, parallel test execution, etc. Hence they turned to Cypress, that provides the following advantages:

- **Parallel Test Execution :** Cypress supports parallel test execution, enabling faster test runs and optimized resource utilization.
- **End-to-End Test Execution :** Cypress allows you to write and run end-to-end tests for web applications. You can easily run these tests locally on your machine verify the checks.
- **Dashboard and Reports :** Cypress offers a Cloud Based Dashboard, a centralized location for all the reports and tests result visualizations.
- **Flaky Test Detections :** Cypress is a great framework option for addressing flaky tests and providing a stable testing environment.

However, for larger projects and complex testing scenarios, certain challenges emerged, including **Test Parallelization**, **CI Pipeline Infrastructure**, **Fail Fasts mechanism**, **Detailed Reports** etc. Here comes a need for an effective companion to augment the capabilities of Cypress.

:::info
Currently HyperExecute support these Operating Systems:

- Linux
- Windows -> Windows 10, Windows 11
- macOS -> Monterra, Ventura
:::

## Advantages of Integrating Cypress with HyperExecute

**HyperExecute**, a powerful platform with features designed to seamlessly complement Cypress and address its limitations via:

### Intelligently Orchestrate Your Tests

Cypress excels in parallel testing, but managing large test suites within complex CI pipelines can be challenging. HyperExecute's [**AI Native orchestration**](/support/docs/hyperexecute-test-splitting-and-multiplexing/) intelligently distributes tests across available resources, optimizing execution speed and ensuring CI/CD stability.

### Comprehensive Artifacts of Your Job

While Cypress offers basic [**test reports**](/support/docs/cypress-mochaawesome-report/), detailed logs and [**artifacts**](/support/docs/hyperexecute-artifacts/) can be crucial for debugging and analysis. HyperExecute captures every step of your test run, providing comprehensive artifacts for in-depth troubleshooting and failure identification.

### Fail Fast Mechanism

Cypress prioritizes fast execution, but catching flaky tests early on can save time and prevent unnecessary re-runs. HyperExecute's smart "[**Fail Fast**](/support/docs/hyperexecute-failfast/)" mechanism identifies flaky tests quickly, stopping irrelevant test executions and focusing resources on reliable tests.

### Mute Your Flaky Tests

Flaky tests can disrupt your testing workflow. HyperExecute allows you to temporarily [**mute unreliable tests**](/support/docs/hyperexecute-test-muting/) while investigating the root cause, eliminating wasted resources and maintaining testing stability.

### Smart Caching

Repeatedly fetching data during tests can slow down execution. HyperExecute's [**intelligent caching**](/support/docs/deep-dive-into-hyperexecute-yaml/#cachekey) stores frequently accessed data, significantly speeding up test runs and optimizing resource utilization.

### Detailed Reports of Your Job

Beyond basic pass/fail information, HyperExecute generates [**detailed reports**](/support/docs/cypress-mochaawesome-report/) with performance metrics, logs, and screenshots for each test case. This granularity provides deeper insights into your testing process and facilitates informed decision-making.

### Auto Retries

Occasional test failures happen. HyperExecute's configurable [**retry mechanism**](/support/docs/deep-dive-into-hyperexecute-yaml/#retryonfailure) allows you to automatically re-run flaky or failed tests based on defined criteria, ensuring accurate results and preventing false negatives.

### Prioritizing your Jobs

In complex testing scenarios, prioritizing critical tests is essential. HyperExecute lets you define [**job priorities**](/support/docs/hyperexecute-prioritize-tests/), ensuring high-priority tests get executed first, maximizing efficiency and meeting your testing goals.

### Run Background Services

Cypress focuses on browser interactions. HyperExecute empowers you to run [**background services**](/support/docs/hyperexecute-background-services/) like database calls or API tests alongside your Cypress tests, streamlining your testing workflow and reducing overall execution time.

### Archive Your Jobs

Maintaining a clean testing history is crucial. HyperExecute lets you [**archive your jobs**](/support/docs/hyperexecute-jobs-archiving/) with their artifacts and reports, providing a comprehensive audit trail and valuable data for future analysis.

### Secure Upload, Zero Hassle

HyperExecute streamlines your CI/CD workflows by eliminating the need for manual test script uploads. All you have to do is just configure the [**`sourcePayload`**](/support/docs/hyperexecute-how-to-configure-sourcePayload/) parameter in your HyperExecute YAML file, and it will securely access your test scripts directly from your Git repository using secure access tokens.

### Incremental Updates for Seamless Testing

Optimize your testing workflows with HyperExecute's intelligent [**Incremental Code Updates**](/support/docs/deep-dive-into-hyperexecute-yaml/#differentialupload) feature. This feature significantly reduces upload times by only transferring necessary files for subsequent test runs.

If your codebase changes are less than 75%, HyperExecute intelligently identifies and uploads only the updated or added parts, efficiently mapping the remainder from previous uploads. This approach minimizes wait times and streamlines your testing cycles, leading to faster results and a smoother overall testing experience.

## Run a Cypress Test in HyperExecute
---

HyperExecute is a smart test orchestration platform that allows you to run end-to-end Cypress tests as quickly as possible by providing a test infrastructure with optimal speed, test orchestration, and detailed execution logs.

Pick your Cypress version below. Each tab contains the full guide for that version, including the sample repository, HyperExecute YAML configuration, execution methods, and additional details.

Before you begin, make sure you have the following in place:

- [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/#hyperexecute-yaml-v02-framework-flags-and-discovery-config) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job.
- Your TestMu AI [Username and Access key](/support/docs/hyperexecute-running-your-first-job/#how-to-get-my-username-and-access-key)
- Setup the Environmental Variable

#### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable

Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

<Tabs className="docs__val" groupId="cypress-version">

<TabItem value="v10" label="Cypress v10" default>

> **NOTE :** This documentation is applicable for **Cypress v10** and **later versions**.

Get started with Cypress v10 testing on HyperExecute.

:::tip Sample repo
You can either download or clone the code samples of Cypress v10 from the **<BrandName />'s GitHub Repository** to quickly run your tests. <a href="https://github.com/LambdaTest/hyperexecute-cypress-v10-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

#### Running Cypress v10 Tests on HyperExecute

Cypress Tests can be executed on HyperExecute using 2 ways:

1. [**Using Local System**](/support/docs/cypress-integration-with-hyperexecute/) - Requires [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) to execute tests from your Local System.
2. [**Using Gitpod**](/support/docs/cypress-integration-with-hyperexecute/) -  Execute tests using GitPod. (Requires a [Gitpod](https://gitpod.io/login/) account)

#### 1. Testing Using Local System

##### Execution Methods:

Cypress Tests can be executed on HyperExecute using 2 methods:

##### 1. Execution Using Auto-Split

The Auto-Split mechanism enables you to run tests at predefined concurrency levels and distribute them across available infrastructure. Concurrency can be achieved at various levels, including file, module, test suite, test, and scenario.

> To learn more about Auto-Split, refer to the [Auto-Split Getting Started Guide](/support/docs/getting-started-with-hyperexecute/#smart-auto-test-splitting)

###### Core

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

###### Pre Steps

Steps (or commands) that must run before the test execution are listed in the *pre* run step.

```yaml
pre:
  - npm install
```

###### Post Steps

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

###### Test Execution

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

Visit [HyperExecute Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/hyperexecute) to check the status of execution

###### Sample YAML File for Auto-Split

```yaml
---
version: 0.1

runson: win
cypress: true

autosplit: true
concurrency: 2

retryOnFailure: true
maxRetries: 1

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
  Network: true
  FullHar: true

post:
  - cat yaml/win/.hyperexecute_autosplit.yaml

jobLabel: [cypress-v10, win, autosplit]
```

##### 2. Execution Using Matrix

Matrix-based test execution is used for running the same tests across different test (or input) combinations. The Matrix directive in HyperExecute YAML file is a *key:value* pair where value is an array of strings. Also, the *key:value* pairs are opaque strings for HyperExecute.

> To learn more about Auto-Split, refer to the [Matrix Getting Started Guide](/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy)

###### Core

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
###### Pre Steps

Steps (or commands) that must run before the test execution are listed in the *pre* run step.

```yaml
pre:
  -  npm install
```

###### Post Steps

Steps (or commands) that need to run after the test execution are listed in the *post* step. In the example, we *cat* the contents of *yaml/.hyperexecute_matrix.yaml*

```yaml
post:
  - cat yaml/win/.hyperexecute_matrix.yaml
```

###### Test Execution

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

Visit [HyperExecute Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/hyperexecute) to check the status of execution

###### Sample YAML File for Matrix
```yaml
---
version: 0.1

runson: ${matrix.os}
cypress: true

parallelism: 1

retryOnFailure: false
maxRetries: 2

cacheKey: '{{ checksum "package.json" }}'
cacheDirectories:
  - node_modules

pre:
  - npm install
  - npm install cypress --save-dev

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
  Network: true
  FullHar: true

post:
  - cat yaml/win/.hyperexecute_matrix.yaml

jobLabel: [cypress-v10, win, matrix]
```

#### 2. Testing Using Gitpod

Follow the below steps to run Cypress Tests on HyperExecute using Gitpod:

**Step 1:** Click the **Open in Gitpod** button (You will be redirected to Login/Signup page).

[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=Cypress&framework=Cypress-v10)

**Step 2:** Login with TestMu AI credentials. You will be redirected to HyperExecute dashboard with pop-up confirming to **'Proceed'** to Gitpod editor in the new tab and current tab will show hyperexecute dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>

**Step 3:** You will need to login into your Gitpod account, or create a new one. <br/>
  (If you are creating a new account, choose your preferred editor. We recommend VS Code)

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod2.png').default} alt="Image"  className="doc_img"/>

**Step 4:** As you are running a sample project, Fetching of the Test Scripts, [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/), [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) and Triggering your tests using the `Execution Command` will be automated. 

**Step 5:** Once you see the `Job Link` in the logs, you can visit the [HyperExecute dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) to see the tests getting executed.

#### Additional Details

##### Secrets Management

If you want to use any secret keys in the YAML file, this can be set by clicking on the **Secrets** button on the dashboard. All you need to do is create an environment variable that uses the secret key:

```yaml
env:
  PAT: ${{ .secrets.testKey }}
```

##### HAR Logs

HAR files are a standardized format for archiving HTTP Archive data. They provide a detailed record of all network requests and responses made by a web browser, including information like URLs, headers, timings, and response data.

HAR logs offer a comprehensive view of your application's network activity during testing. This can be helpful for:

- Debugging network-related issues
- Analyzing performance bottlenecks
- Diagnosing Load Order Issues

Network Logs are disabled by default. To enable it, pass the `Network` and `FullHar` capability to `true` in the [`cypressOps`](/support/docs/deep-dive-into-hyperexecute-yaml/#cypressops) flag.

```yaml
cypressOps:
  Network: true
  FullHar: true
```

:::tip
You can download network logs via the Automate Dashboard. You can visualize HAR files using the [HAR Viewer](http://www.softwareishard.com/har/viewer/).
:::

##### Detailed Cypress Command Logs
> To enable it for your organization, please contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@testmuai.com**.<br />

The **Detailed Command Logs** feature can be used to generate a comprehensive record of all Cypress commands and their results, both in the console and in a file. This can be extremely useful for debugging and troubleshooting Cypress tests because it narrows down the logs to reveal specific information. The logs are presented in a human-readable format, making them simple to read and comprehend.

Prerequisite to get the detailed logs in HyperExecute:

```yaml
pre:
  - npm install cypress-terminal-report --save-dev
```

:::tip
For in detailed information on how to configure it properly, visit [Cypress Detailed Command Logs](/support/docs/cypress-detailed-command-logs/#for-cypress-v10-and-later-versions) documentation.
:::

</TabItem>

<TabItem value="v9" label="Cypress v9">

> **NOTE :** This documentation is applicable for **Cypress v9** and **previous versions**.

Get started with Cypress v9 testing on HyperExecute.

:::tip Sample repo
You can either download or clone the code samples of Cypress v9 from the **<BrandName />'s GitHub Repository** to quickly run your tests. <a href="https://github.com/LambdaTest/hyperexecute-cypress-v9-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

#### Running Cypress v9 Tests on HyperExecute

Cypress Tests can be executed on HyperExecute using 2 ways:

1. [**Using Local System**](/support/docs/cypress-integration-with-hyperexecute/) - Requires [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) to execute tests from your Local System.
2. [**Using Gitpod**](/support/docs/cypress-integration-with-hyperexecute/) -  Execute tests using GitPod. (Requires a [Gitpod](https://gitpod.io/login/) account)

#### 1. Testing Using Local System

##### Execution Methods:

Cypress Tests can be executed on HyperExecute using 2 methods:

##### 1. Execution Using Auto-Split

The Auto-Split mechanism enables you to run tests at predefined concurrency levels and distribute them across available infrastructure. Concurrency can be achieved at various levels, including file, module, test suite, test, and scenario.

> To learn more about Auto-Split, refer to the [Auto-Split Getting Started Guide](/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy)

###### Core

Auto-split YAML file (*yaml/.hyperexecute_autosplit.yaml*) in the repo contains the following configuration:

```yaml
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
```
 
The **`runson`** key determines the platform (or operating system) on which the tests are executed. Here we have set the target OS as Windows.

```yaml
runson: win
```

Auto-split is set to true in the YAML file.

```yaml
 autosplit: true
```

**`retryOnFailure`** is set to true, instructing HyperExecute to retry failed command(s). The retry operation is carried out till the number of retries mentioned in **`maxRetries`** are exhausted or the command execution results in a *Pass*. In addition, the **`concurrency`** (i.e. number of parallel sessions) is set to 2.

```yaml
retryOnFailure: true
maxRetries: 1
concurrency: 2
```
**`cypress`** is set to true in the YML file.

```yaml
cypress: true
```

Cypress Build name and tags are added in the YML file.

```yaml
cypressOps:
 Build: "Hyperexecute Cypress Sample Build"
 Tags: ["Hyperexecute","Cypress", "Windows", "Autosplit", "V9"]
 BuildTags: ["Hyperexecute-Cypress"]
```

###### Pre Steps

Steps (or commands) that must run before the test execution are listed in the *pre* run step.

```yaml
pre:
  - npm install
```

###### Post Steps

Steps (or commands) that need to run after the test execution are listed in the *post* step. In the example, we *cat* the contents of *yaml/.hyperexecute_autosplit.yaml*

```yaml
post:
  - cat yaml/.hyperexecute_autosplit.yaml
```

The **`testDiscovery`** directive contains the command that gives details of the mode of execution, along with detailing the command that is used for test execution. Here, we are fetching the list of class names that would be further passed in the *testRunnerCommand*

```yaml
testDiscovery:
  type: raw
  mode: static
  command: ls cypress/integration | sed -n 1,'10p'
```

Running the above command on the terminal will give a list of scenarios present in the *feature* files:

* actions.spec.js
* aliasing.spec.js
* assertions.spec.js
* connectors.spec.js
* cookies.spec.js
* local_storage.spec.js
* navigation.spec.js
* querying.spec.js
* sample.spec.js
* spies_stubs_clocks.spec.js

The **`testRunnerCommand`** contains the command that is used for triggering the test. The output fetched from the *testDiscoverer* command acts as an input to the *testRunner* command.

```yaml
testRunnerCommand: npx cypress run  --spec ./cypress/integration/$test --browser=chrome-95.0 --headed --config video=false
```

###### Test Execution

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

Visit [HyperExecute Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/hyperexecute) to check the status of execution

###### Sample YAML File for Auto-Split

```yaml
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
# cacheKey: '{{ checksum "package.json" }}'
# cacheDirectories:
#   - node_modules
#   - cypressCache
env:
  CYPRESS_CACHE_FOLDER: cypressCache
testDiscovery:
  mode: static
  type: raw
  command: ls cypress/integration
testRunnerCommand: npx cypress run  --spec ./cypress/integration/$test --browser=chrome-95.0 --headed --config video=false
cypressOps:
 Build: "Hyperexecute Cypress Sample Build"
 Tags: ["Hyperexecute","Cypress", "Windows", "Autosplit", "V9"]
 BuildTags: ["Hyperexecute-Cypress"]
post:
  - cat ./yaml/win/.hyperexecute_matrix.yaml
pre:
  - npm install

jobLabel: [cypress-v9, win, autosplit]
```

##### 2. Execution Using Matrix

Matrix-based test execution is used for running the same tests across different test (or input) combinations. The Matrix directive in HyperExecute YAML file is a *key:value* pair where value is an array of strings. Also, the *key:value* pairs are opaque strings for HyperExecute.

> To learn more about Auto-Split, refer to the [Matrix Getting Started Guide](/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy)

###### Core

In the current example, matrix YAML file in the repo contains the following configuration:

```yaml
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
```
 
The target platform is set to Win. Please set the **`runso`n** key to **`mac`** if the tests have to be executed on the macOS platform.

```yaml
runson: win
```

The **`matrix`** constitutes of the following entries - *classname*. The entries represent the class names in the test code.

```yaml
matrix:
   os: [win]
   browser: ["chrome-95.0","chrome-96.0","chrome-97.0","chrome-98.0","chrome-99.0","chrome-100.0","chrome-101.0","chrome-102.0","chrome-103.0","chrome-104.0","chrome-105.0"]
   files: ["actions.spec.js", "aliasing.spec.js", "assertions.spec.js", "connectors.spec.js", "cookies.spec.js", "local_storage.spec.js", "navigation.spec.js", "querying.spec.js"]
```

The **`testSuites`** object contains a list of commands (that can be presented in an array). In the current YAML file, commands for executing the tests are put in an array (with a '-' preceding each item). The Maven command *mvn test* is used to run tests located in the current project. In the current project, parallel execution is achieved at the *class* level. The *maven.repo.local* parameter in Maven is used for overriding the location where the dependent Maven packages are downloaded.

```yaml
testSuites:
  - npx cypress run  --spec ./cypress/integration/$files --browser=$browser --headed --config video=false
```

###### Pre Steps

Steps (or commands) that must run before the test execution are listed in the *pre* run step.

```yaml
pre:
  - npm install
```

###### Post Steps

Steps (or commands) that need to run after the test execution are listed in the *post* step. In the example, we *cat* the contents of *yaml/.hyperexecute_matrix.yaml*

```yaml
post:
  - cat yaml/.hyperexecute_matrix.yaml
```

###### Test Execution

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

Visit [HyperExecute Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/hyperexecute) to check the status of execution:

###### Sample YAML File for Matrix

```yaml
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
cacheKey: '{{ checksum "package.json" }}'
cacheDirectories:
  - node_modules
pre:
  - npm install
matrix:
   os: [win]
   browser: ["chrome-104.0","chrome-105.0"]
   files: ["actions.spec.js", "aliasing.spec.js"]
testSuites: 
  - npx cypress run  --spec ./cypress/integration/$files --browser=$browser --headed --config video=false
cypressOps:
 Build: "Hyperexecute Cypress Sample Build"
 Tags: ["Hyperexecute","Cypress", "Windows", "Matrix", "V9"]
 BuildTags: ["Hyperexecute-Cypress"]
post:
  - cat ./yaml/win/.hyperexecute_autosplit.yaml

jobLabel: [cypress-v9, win, matrix]
```

#### 2. Testing Using Gitpod

Follow the below steps to run Cypress Tests on HyperExecute using Gitpod:

**Step 1:** Click the **Open in Gitpod** button (You will be redirected to Login/Signup page).

[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=Cypress&framework=Cypress-v9)

**Step 2:** Login with TestMu AI credentials. You will be redirected to HyperExecute dashboard with pop-up confirming to **'Proceed'** to Gitpod editor in the new tab and current tab will show hyperexecute dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>

**Step 3:** You will need to login into your Gitpod account, or create a new one. <br/>
  (If you are creating a new account, choose your preferred editor. We recommend VS Code)

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod2.png').default} alt="Image"  className="doc_img"/>

**Step 4:** As you are running a sample project, Fetching of the Test Scripts, [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/), [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) and Triggering your tests using the `Execution Command` will be automated. 

**Step 5:** Once you see the `Job Link` in the logs, you can visit the [HyperExecute dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) to see the tests getting executed.

#### Additional Details

##### Secrets Management

If you want to use any secret keys in the YAML file, this can be set by clicking on the **Secrets** button on the dashboard. All you need to do is create an environment variable that uses the secret key:

```yaml
env:
  PAT: ${{ .secrets.testKey }}
```

##### HAR Logs
HAR files are a standardized format for archiving HTTP Archive data. They provide a detailed record of all network requests and responses made by a web browser, including information like URLs, headers, timings, and response data

HAR logs offer a comprehensive view of your application's network activity during testing. This can be helpful for:

- Debugging network-related issues
- Analyzing performance bottlenecks
- Diagnosing Load Order Issues

Network Logs are disabled by default. To enable it, pass the `Network` and `FullHar` capability to `true` in the [`cypressOps`](/support/docs/deep-dive-into-hyperexecute-yaml/#cypressops) flag.

```yaml
cypressOps:
  Network: true
  FullHar: true
```

:::tip
You can download network logs via the Automate Dashboard. You can visualize HAR files using the [HAR Viewer](http://www.softwareishard.com/har/viewer/).
:::

##### Detailed Cypress Command Logs
> To enable it for your organization, please contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@testmuai.com**.<br />

The **Detailed Command Logs** feature can be used to generate a comprehensive record of all Cypress commands and their results, both in the console and in a file. This can be extremely useful for debugging and troubleshooting Cypress tests because it narrows down the logs to reveal specific information. The logs are presented in a human-readable format, making them simple to read and comprehend.

Prerequisite to get the detailed logs in HyperExecute:

```yaml
pre:
  - npm install cypress-terminal-report --save-dev
```

:::tip
For in detailed information on how to configure it properly, visit [Cypress Detailed Command Logs](/support/docs/cypress-detailed-command-logs/#for-cypress-v9-and-previous-versions) documentation.
:::

</TabItem>
</Tabs>

