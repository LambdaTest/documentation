# Playwright Integration with HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

In the ever-evolving realm of web development, the need for a comprehensive and efficient solution for cross-browser testing became paramount. Developers and QA engineers yearned for a framework that transcended the limitations of existing tools. They craved a solution that could address challenges like:

- **Brittle and Flaky Tests:** Tests that randomly fail or pass, hindering reliable test results.

- **Laborious Debugging:** Struggling to identify the root cause of issues across different browsers.

- **Sequential Test Execution:** Slow test run times, especially for large test suites, delaying valuable feedback.

Hence they turned to Playwright, a revolutionary framework designed to address these very roadblocks. With its robust capabilities. Playwright promised a new era of streamlined and dependable web application testing.

As a web application developer or QA engineer, I want to leverage Playwright's powerful automation capabilities for cross-browser testing on a massive scale. So that I can ensure my application functions flawlessly across a wide range of real devices and browsers.

However, for larger projects and complex testing scenarios, certain challenges emerged, including **Flaky Tests Detections**, **Test Parallelization**, **CI Pipeline Infrastructure**, **Fail Fasts mechanism**, **Detailed Reports** etc. Here comes a need for an effective companion to augment the capabilities of Playwright.

## Advantages of Integrating Playwright with HyperExecute

**HyperExecute**, a powerful platform with features designed to seamlessly complement Playwright and address its limitations via:

    Intelligently Orchestrate Your Tests
    Use Smart Auto Split Strategy, Matrix Strategy or Hybrid Strategy modes to split and execute tests as per your requirements.

    Detailed Test Reports and Logs
    Get a detailed test report for every job and stream the terminal logs in real time to understand everything that happened with your test.

    Fail Fast Mechanism
    Run your jobs faster or fail them quickly to receive instant feedback and save your test time.

    Jobs Prioritization
    Label the jobs that you want to run first on HyperExecute by giving them a higher priority.

    Comprehensive Artifacts of Your Job
    HyperExecute also manages all of your test artifacts and provides you with the option to implement smart workflows on your test code without modifying it.

    AI Native Root Cause Analysis
    Root Cause Analysis and Error Classification features in HyperExecute to view different kinds of errors and directly land on corrective measures or fixes.

    Background Services
    Triggers long-running Application Servers tasks like running WebApps or Databases and generates the logs report in the Dashboard.

    Auto Healing
    Auto Healing Feature allows you to automatically rеcovеr from cеrtain typеs of failurеs during thе еxеcution of your tеst scripts.

    Projects
    Setup your custom projects using HyperExecute GUI itself and initiate the tests execution from the platform only.

    Jobs Archiving
    Jobs Archiving allows you to archive the non important jobs so that you and your team can focus only on required ones.

    Smart Caching
    Repeatedly fetching data during tests can slow down execution. HyperExecute's intelligent caching stores frequently accessed data, significantly speeding up test runs and optimizing resource utilization.

    Mute Your Flaky Tests
    Mute scenarios that have been continuously failing for a pre-defined number of times, ignore expected failures, achieve better runtimes and faster feedback on the executed Jobs.

    Auto Retries
    Occasional test failures happen. HyperExecute's configurable retry mechanism allows you to automatically re-run flaky or failed tests based on defined criteria, ensuring accurate results and preventing false negatives.

    Secure Upload, Zero Hassle
    HyperExecute streamlines your CI/CD workflows by eliminating the need for manual test script uploads. Configure the `sourcePayload` parameter in your HyperExecute YAML file, and it will securely access your test scripts directly from your Git repository using secure access tokens.

    Incremental Updates for Seamless Testing
    If your codebase changes are less than 75%, HyperExecute intelligently identifies and uploads only the updated or added parts, efficiently mapping the remainder from previous uploads. This approach minimizes wait times and streamlines your testing cycles, leading to faster results and a smoother overall testing experience.

## Run a Playwright Test in Your Language

Pick your language and framework below. Each variant uses its own TestMu AI sample repository (with a ready-to-run HyperExecute YAML), configures the YAML for that framework, and triggers the job from the repository root.

### Prerequisites

To run the tests on HyperExecute from your local system, you are required:

- Your TestMu AI [Username and Access key](/support/docs/hyperexecute-running-your-first-job/#how-to-get-my-username-and-access-key)
- [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/#hyperexecute-yaml-v02-framework-flags-and-discovery-config) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job.
- Setup the [Environmental Variable](/support/docs/hyperexecute-running-your-first-job/#set-up-authentication-and-environment-variables)

#### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

Once the CLI is downloaded and the environment variables are set, follow the framework-specific steps below.

### JavaScript

Playwright is a Node.js library that uses a single API to automate Chromium, Firefox, and WebKit. It is designed to enable powerful, reliable, and efficient automated browser testing. Playwright can also automate Microsoft Edge since it is built on the open-source Chromium web framework.

#### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**

Download or Clone the code sample for the VanillaJS from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub

If you are using your own project, make sure you update the **Hub endpoint** in your tests file.

By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 Capabilities Generator.

#### Step 2: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy). You can also opt for [Matrix](/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy) or [Hybrid](/support/docs/hyperexecute-test-splitting-and-multiplexing/#hybrid-strategy-in-hyperexecute) mode.
- **Pre and Post** commands
- **Reports and Artefacts** that will be generated after the completion of tests
- and other necessary YAML Parameters

```yaml
---
version: "0.1"

globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: linux

autosplit: true

retryOnFailure: false
maxRetries: 1

concurrency: 2

pre:
- npm install
- npx playwright install

cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
- node_modules

testDiscovery:
type: raw
mode: remote
command: grep -nri 'describe' tests  | sed 's/:test.*//'

testRunnerCommand: npx playwright test $test

jobLabel: [playwright-VanillaJS, linux, autosplit]
```

#### Step 3: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

#### Step 4: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

#### Step 5: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-job-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

Jest is a popular JavaScript testing framework primarily used for testing React applications, although it can be employed for any JavaScript project. Developed by Facebook, Jest is known for its simplicity and speed. It provides a testing environment, assertion utilities, and features like snapshot testing, parallel test execution, and mocking to ensure efficient and reliable testing of JavaScript codebases.

#### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**

Download or Clone the code sample for the Jest from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub

If you are using your own project, make sure you update the **Hub endpoint** in your tests file.

By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 Capabilities Generator.

#### Step 2: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy). You can also opt for [Matrix](/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy) or [Hybrid](/support/docs/hyperexecute-test-splitting-and-multiplexing/#hybrid-strategy-in-hyperexecute) mode.
- **Pre and Post** commands
- **Reports and Artefacts** that will be generated after the completion of tests
- and other necessary YAML Parameters

```yaml
---
version: "0.1"

globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: linux

autosplit: true

retryOnFailure: false
maxRetries: 1

concurrency: 2

pre:
- npm install
- npx playwright install

cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
- node_modules

testDiscovery:
type: raw
mode: remote
command: grep -lr 'describe' *.test.js

testRunnerCommand: npm test -- $test

jobLabel: [playwright-JestJS, linux, autosplit]
```

#### Step 3: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

#### Step 4: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

#### Step 5: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-job-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

CodeceptJS is a versatile end-to-end testing framework for JavaScript that allows testing web applications using various libraries like Puppeteer and WebDriver. It stands out for its simplicity and ability to write tests in a more human-readable and expressive manner, making it accessible for both developers and non-developers.

#### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**

Download or Clone the code sample for the CodeceptJS from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub

If you are using your own project, make sure you update the **Hub endpoint** in your tests file.

By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 Capabilities Generator.

#### Step 2: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy). You can also opt for [Matrix](/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy) or [Hybrid](/support/docs/hyperexecute-test-splitting-and-multiplexing/#hybrid-strategy-in-hyperexecute) mode.
- **Pre and Post** commands
- **Reports and Artefacts** that will be generated after the completion of tests
- and other necessary YAML Parameters

```yaml
---
version: "0.1"

globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: linux

autosplit: true

retryOnFailure: false
maxRetries: 1

concurrency: 2

pre:
- npm install
- npx playwright install

cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
- node_modules

testDiscovery:
type: raw
mode: remote
command: grep -lr 'Scenario' *test.js

testRunnerCommand: npx codeceptjs run $test --steps

jobLabel: [playwright-CodeceptJS, linux, autosplit]
```

#### Step 3: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

#### Step 4: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

#### Step 5: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-job-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

### Java

JUnit is a widely-used testing framework for Java applications, designed to simplify and enhance the testing process for developers. It provides a flexible and powerful platform for running test suites, enabling effective unit testing, integration testing, and end-to-end testing of Java applications.

#### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**

Download or Clone the code sample for the JUnit from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub

If you are using your own project, make sure you update the **Hub endpoint** in your tests file.

By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 Capabilities Generator.

#### Step 2: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy). You can also opt for [Matrix](/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy) or [Hybrid](/support/docs/hyperexecute-test-splitting-and-multiplexing/#hybrid-strategy-in-hyperexecute) mode.
- **Pre and Post** commands
- **Reports and Artefacts** that will be generated after the completion of tests
- and other necessary YAML Parameters

```yaml
---
version: 0.1
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: linux

autosplit: true
retryOnFailure: false

maxRetries: 1
concurrency: 1

env:
# PAT: ${{ .secrets.testKey }}
CACHE_DIR: m2_cache_dir
TARGET_OS: linux

cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
- ${CACHE_DIR}

shell: bash

pre:
# install playwright version to be used.
- npm install playwright@1.23.0 --save-exact
# Download and install packages in the CACHE_DIR.
# Skip execution of the tests in the pre step
- mvn -Dmaven.repo.local=${CACHE_DIR} -Dmaven.test.skip=true clean install

post:
- cat yaml/linux/junit_hyperexecute_autosplit_sample.yaml

mergeArtifacts: true

uploadArtefacts:
- name: Surefire-Report
path:
- target/surefire-reports/**

testDiscovery:
type: raw
mode: remote
command: grep 'public class' src/test/java/SampleTest.java | awk '{print$3}'

testRunnerCommand: mvn -Dplatname=linux -Dmaven.repo.local=m2_cache_dir -Dtest=$test test surefire-report:report

jobLabel: [playwright-Junit, linux, autosplit]
```

#### Step 3: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

#### Step 4: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

#### Step 5: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-job-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

### C# / .NET

Playwright for .NET is a framework that enables browser automation and end-to-end testing using the .NET programming language, such as C#. Developed by Microsoft, Playwright offers a comprehensive .NET API for automating interactions with web pages in Chromium, Firefox, and WebKit browsers.

#### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**

Download or Clone the code sample for the DotNet from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub

If you are using your own project, make sure you update the **Hub endpoint** in your tests file.

By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 Capabilities Generator.

#### Step 2: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy). You can also opt for [Matrix](/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy) or [Hybrid](/support/docs/hyperexecute-test-splitting-and-multiplexing/#hybrid-strategy-in-hyperexecute) mode.
- **Pre and Post** commands
- **Reports and Artefacts** that will be generated after the completion of tests
- and other necessary YAML Parameters

```yaml
---
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: win

concurrency: 3

autosplit: true

retryOnFailure: true

maxRetries: 5

env:
NUGET_PACKAGES: 'C:\nuget_global_cache'
NUGET_HTTP_CACHE_PATH: 'C:\nuget_http_cache'
NUGET_PLUGINS_CACHE_PATH: 'C:\nuget_plugins_cache'

pre:
# https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-list-package
- npm install playwright@1.25.0 --save-exact
- dotnet list PlaywrightDotnetTests.csproj package > packages.txt
- nuget locals all -clear
- dotnet build -c Release

runtime:
language: dotnet
version: "6.0.303"

testDiscovery:
type: raw
mode: remote
command: grep -lr 'GotoAsync' -ir --include=*.cs

post:
- cat yaml/linux/dotnet_playwright_hyperexecute_autosplit_sample.yaml

testRunnerCommand: dotnet run $test

jobLabel: [playwright-Dotnet, linux, autosplit]
```

#### Step 3: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

#### Step 4: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

#### Step 5: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-job-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

### Python

Playwright is a powerful browser automation library that allows developers to automate browser interactions. When using Python with Playwright, developers can leverage a robust testing framework to create automated tests for web applications. This combination enables end-to-end testing, ensuring the functionality, performance, and reliability of web applications.

#### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**

Download or Clone the code sample for the Python from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub

If you are using your own project, make sure you update the **Hub endpoint** in your tests file.

By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 Capabilities Generator.

#### Step 2: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy). You can also opt for [Matrix](/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy) or [Hybrid](/support/docs/hyperexecute-test-splitting-and-multiplexing/#hybrid-strategy-in-hyperexecute) mode.
- **Pre and Post** commands
- **Reports and Artefacts** that will be generated after the completion of tests
- and other necessary YAML Parameters

```yaml
---
version: "0.1"

globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: linux

autosplit: true

retryOnFailure: true
maxRetries: 1

concurrency: 1

env:
TARGET_OS: "LINUX"

cacheKey: '{{ checksum "requirement.txt" }}'
cacheDirectories:
- CacheDir

pre:
- pip3 install -r requirement.txt --cache-dir CacheDir
- playwright install
- npm install playwright --save-exact

post:
- cat yaml/linux/.hyperexecute_autosplits.yaml

testDiscovery:
type: raw
mode: remote
command: grep -lr 'def' *.py

testRunnerCommand: python $test

jobLabel: [playwright-Python, linux, autosplit]
```

#### Step 3: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

#### Step 4: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

#### Step 5: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-job-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

Pytest is a popular Python testing framework that can be seamlessly integrated with Playwright for efficient end-to-end testing of web applications. Pytest simplifies the testing process with its straightforward syntax and rich set of features.

#### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**

Download or Clone the code sample for the PyTest from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub

If you are using your own project, make sure you update the **Hub endpoint** in your tests file.

By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 Capabilities Generator.

#### Step 2: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy). You can also opt for [Matrix](/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy) or [Hybrid](/support/docs/hyperexecute-test-splitting-and-multiplexing/#hybrid-strategy-in-hyperexecute) mode.
- **Pre and Post** commands
- **Reports and Artefacts** that will be generated after the completion of tests
- and other necessary YAML Parameters

```yaml
---
version: "0.1"

globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: linux

autosplit: true

retryOnFailure: true
maxRetries: 1

concurrency: 1

env:
TARGET_OS: "LINUX"

cacheKey: '{{ checksum "requirement.txt" }}'
cacheDirectories:
- CacheDir

pre:
- npm install playwright --save-exact
- pip install -r requirement.txt --cache-dir CacheDir
- playwright install

post:
- cat yaml/linux/.hyperexecute_autosplits.yaml

testDiscovery:
type: raw
mode: remote
command: grep -lr 'def' *.py

testRunnerCommand: pytest $test

jobLabel: [playwright-pytest, linux, autosplit]
```

#### Step 3: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

#### Step 4: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

#### Step 5: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-job-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

### Real Device

This section explains how to run your **Playwright** tests on **Real devices (Android and iOS)** using HyperExecute.

#### Step 1: Set Up Your Test Project

You can use your own Playwright project or try the sample repo. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample for the Playwright Real Device from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub

##### Configure Desired Capabilities

Update your test configuration with the required capabilities.

```javascript title="playwright-android-real-device.js" reference
https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/playwright-android-real-device.js
```

```javascript title="playwright-ios-real-device.js" reference
https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/playwright-ios-real-device.js
```

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 Capabilities Generator.

##### Configure the CDP URL

You will have to update the **CDP (Chrome DevTools Protocol) URL** which is a protocol used for communication between the browser and the developer tools.

```javascript title="playwright-ios-real-device.js"
const browser = await chromium.connect({
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
})
```

#### Step 2: Configure YAML in your Test Suite
Use the sample YAML below to configure your execution:

```yaml title="hyperexecute_android.yaml" reference
https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/hyperexecute_android.yaml
```

```yaml title="hyperexecute_ios.yaml" reference
https://github.com/LambdaTest/LambdaTest-HyperExecute-Playwright-Appium-Sample/blob/main/hyperexecute_ios.yaml
```

To Run test on Mobile Containers in a Particular Region

```yaml title="hyperexecute.yaml"
dynamicAllocation: true

framework:
name: appium
args:
playwrightRD : true
region: ap       # supported regions -> ap, eu, us
reservation: false
```
- If **`reservation : false`**, it means that it will allocate the device from any region. If you want to allocate the device of any specific region, keep the **`reservation : true`**.

#### Step 3: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

#### Step 4: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

#### Step 5: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-job-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

## HyperExecute YAML Creation for Playwright

This guide outlines common use cases and solutions for configuring Playwright test executions on **TestMu AI HyperExecute**. It covers dependency management, environment setup, caching, reporting, and troubleshooting common issues.

### Q: How can private dependencies be accessed via a custom registry?
If your project uses private dependencies hosted on a custom registry, you must configure access before installing the packages. Add the following commands in the `pre` section of your YAML file:

```yaml title="hyperexecute.yaml"
pre:
- npm config set registry <URL>
- npm install
```

### Q: How can a specific Playwright project be executed?
When a project has multiple Playwright projects defined, it may be necessary to run a specific one. Using the `--project` flag ensures that only the intended project executes without affecting others. Check that your execution command includes `--project="PROJECTNAME"`and append it to the `testRunnerCommand`.

```javascript
npx playwright test --project=chromium
```

### Q: How can tests be executed with a specific configuration file?
For setups with multiple configuration files, specifying the correct config file during execution ensures that the intended environment and settings are applied, avoiding conflicts or unexpected behavior.

```javascript
npx playwright test --config=playwright.config.staging.ts
```

### Q: How can skipped tests be ignored during test discovery?
To ignore test cases marked with test.skip, create a custom Node.js script.

- Create a file named `discovery.js` and add the script from the [Gist](https://gist.github.com/mohitsaini28r/453368e52143fa43efa271b1511aa2e7).
- Update the `testDiscovery` block in your YAML:

```yaml title="hyperexecute.yaml"
testDiscovery:
command: node discovery.js
```

### Q: How can private dependencies be accessed through a private network proxy?
When private dependencies require access through a private network, configure HTTP and HTTPS proxies.

**For npm:**

```yaml title="hyperexecute.yaml"
pre:
- npm config set proxy http://${LT_PROXY_HOST}:${LT_PROXY_PORT}
- npm config set https-proxy http://${LT_PROXY_HOST}:${LT_PROXY_PORT}
```

**For yarn:**

```yaml title="hyperexecute.yaml"
pre:
- yarn config set proxy http://${LT_PROXY_HOST}:${LT_PROXY_PORT}
- yarn config set https-proxy http://${LT_PROXY_HOST}:${LT_PROXY_PORT}
```

### Q: How can scripts be run on each machine after test execution?
Use the `post` parameter in the YAML file. Typical use cases include:

- Running cleanup scripts
- Closing API connections
- Uploading test results to tools like Report Portal or Zephyr

```yaml title="hyperexecute.yaml"
post:
- ./scripts/cleanup.sh
- ./scripts/upload-results.sh
```

### Q: How can tasks be executed after all test executions are complete?
Use the `globalPost` parameter to execute tasks once all tests have finished. You can run it on local or remote machines and configure caching if needed.

Common use cases:
- Merging reports
- Sending email notifications
- Posting summaries to APIs or services

```yaml title="hyperexecute.yaml"
globalPost:
- ./scripts/merge-reports.sh
- ./scripts/send-summary.sh
```

### Q: How can scripts be executed before all test executions start?
Use the `globalPre` parameter to prepare environments or generate config files.

Examples:
- Generate runtime files
- Import data
- Run preparatory commands

```yaml title="hyperexecute.yaml"
globalPre:
- ./scripts/setup-env.sh
- ./scripts/import-data.sh
```

### Q: How can smart caching be enabled in HyperExecute?
Caching dependencies improves efficiency by avoiding repeated installations. Using `cacheKey` and `cacheDirectories` in the YAML file enables caching for npm or Yarn, ensuring that dependencies are reused across executions.

**For npm:**

```yaml title="hyperexecute.yaml"
cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
- node_modules
```

**For yarn:**

```yaml title="hyperexecute.yaml"
cacheKey: '{{ checksum "yarn.lock" }}'
cacheDirectories:
- node_modules
```

### Q: What is `testDiscovery` and how can it be configured?
`testDiscovery` identifies test files or methods to execute. It supports `raw` type with `static` or `remote` modes.

**File-level discovery:**

```yaml title="hyperexecute.yaml"
testDiscovery:
type: raw
mode: static
command: grep -lr 'describe' tests
```

**Test-level discovery:**

```yaml title="hyperexecute.yaml"
testDiscovery:
type: raw
mode: remote
command: grep -rn "test(" tests | cut -d: -f1,2
```

### Q: How can Playwright reports be configured in HyperExecute?
To generate and access Playwright HTML reports in HyperExecute, the reports must be stored in a known directory. The YAML file should include a `post` section to upload the directory as an artifact. Partial reports can be configured for framework-specific reporting.

- Update `playwright.config` to specify the report output location:

```javascript title="playwright.config"
reporter: [["html", { outputFolder: "playwright-report", open: "never" }]]
```

- Update `hyperexecute.yaml` file:

```yaml title="hyperexecute.yaml"
report: true
partialReports:
frameworkName: playwright
location: playwright-report
type: HTML
```

### Q: How can tag-level discovery be performed in Playwright tests?
If tests include tags and only specific tags need to be executed, a custom Node.js script can be used for tag-based discovery. This allows filtering tests at the method level and executing only those matching the desired tag expression.

- Create a file named `discovery.js` at the root level of the project (in the same directory as package.json).
- Copy the script from the [Gist](https://gist.github.com/gauravchawhan/9568ed96d6bc115707d37f695a56a6e7) into that file.
- Update the testDiscovery section in your hyperexecute.yaml to run this script using the node command, and pass your desired tag expression.

```yaml title="hyperexecute.yaml"
testDiscovery:
type: raw
mode: static
command: node discovery.js '(?=.*@PROD)(?=.*@LOGIN)'
```

### Q: Why do tests pass locally and on the automation grid but fail in HyperExecute?
This occurs due to a version mismatch between the Playwright client and server. In automation grid runs, the client is installed by the user, while the server is managed internally. In HyperExecute, both client and server must be explicitly installed and configured in the YAML to ensure compatibility.

- Verify the required Playwright version by checking the dependency listed in your `package.json` file.
- Once identified, install the specific version of Playwright during the pre step of the YAML:

```yaml title="hyperexecute.yaml"
pre:
- npx playwright@1.41.0 install
```
> Replace `1.41.0` with the version specified in the project’s package.json.

### Q: Why are tests retried multiple times within a single scenario?
Multiple retries occur when retry logic is configured both at the Playwright framework level and in HyperExecute YAML. This can cause duplicate scenarios, incorrect reporting, and multiple executions of the same test. Disabling framework-level retries and using only HyperExecute-level retries avoids this problem.

```yaml title="hyperexecute.yaml"
retryOnFailure: true
maxRetries: 1
```

### Q: How can environment variables required for test execution be configured?
Certain frameworks or projects require specific environment variables, such as credentials or base URLs. Configuring these variables via the `env` section in the YAML or using a `.env` file ensures that tests execute successfully in HyperExecute.

```yaml title="hyperexecute.yaml"
env:
BASE_URL: https://example.com
API_KEY: your_api_key_here
```

```bash title=".env"
BASE_URL=https://example.com
API_KEY=your_api_key_here
```

### Q: Why can tasks get stuck due to reports opening on a local server?
Playwright tests may hang if the HTML report is configured to automatically open on a local server after execution. Since HyperExecute runs in a headless CI environment, attempting to open the report in a browser window causes the process to stall indefinitely.

To prevent this, update your `playwright.config.ts` file to prevent the report from opening automatically by setting the open option to `'never'`.

```javascript title=playwright.config.ts"
reporter: [['html', { open: 'never' }]]
```

### Q: Why might a dependency work locally but fail on HyperExecute?
Dependencies that work locally may fail in HyperExecute due to OS-specific `package-lock.json` or `yarn.lock` files. These lock files may prevent correct resolution on a different operating system. Deleting or ignoring these files ensures fresh dependency installation. To ignore these files before uploading the project, add them to the `.gitignore` or `.hyperexecuteignore` file

### Q: Why do unexpected `driver.quit` errors occur when running tests with parameters?
These errors can happen when there is a version mismatch between the Playwright server installed in HyperExecute and the client used in the project. Installing the exact version in the YAML prevents unstable or unexpected behavior.

For example, to install version `1.50.0`:

```yaml title="hyperexecute.yaml"
pre:
- npx playwright@1.50.0 install
```

### Q: Why might the browser fail to launch on HyperExecute?
Tests may fail to start if required browser binaries are missing or not installed correctly. Installing all Playwright dependencies, including browsers, ensures successful test execution.

```yaml title="hyperexecute.yaml"
pre:
- npx playwright install --with-deps
```

### Q: Why do tests time out on HyperExecute but pass locally?
Tests can time out due to differences in resource availability, execution speed, or default timeouts between local and HyperExecute environments. Increasing the timeout in the Playwright config or test file mitigates this issue.

```javascript
test.setTimeout(60000); // 60 seconds
```

### Q: Why do configuration files fail when using hardcoded absolute paths?
Absolute paths specific to a local environment may not exist in HyperExecute. Using relative paths from the project root ensures that scripts and configuration files remain portable across environments.

```javascript
// Instead of require("C:/user/folder/test.js")
require("./tests/test.js")
```

### Q: Why are screenshots or videos not available in artifacts?
If Playwright is not configured to capture screenshots, videos, or traces, or if these artifacts are not uploaded correctly from HyperExecute, they will not appear in the report. Correct configuration in both `playwright.config.ts` and YAML ensures artifacts are captured and visible.

- Update the `playwright.config.ts` file:
```javascript title="playwright.config.ts"
use: {
screenshot: 'on',
video: 'on',
trace: 'on-first-retry',
}
```

- Update the `hyperexecute.yaml` file:
```yaml title="hyperexecute.yaml"
uploadArtefacts:
- name: FinalReport
path:
- test-results/**
- playwright-report/**
```

### Q: Why do "Cannot find module" errors occur during execution?
These errors occur when required modules are missing or the installation step is skipped. Ensuring that all dependencies listed in `package.json` are installed in the `pre` step of the YAML prevents this issue.

```yaml title="hyperexecute.yaml"
pre:
- npm install
```
