---
id: hyperexecute-karate-testing
title: Karate Automation on HyperExecute
hide_title: false
sidebar_label: Karate
description: Learn how to run Selenium automation tests on HyperExecute using the Karate framework
keywords:
  - Karate
  - Karate selenium
  - Karate Java Selenium
  - Karate automation testing
  - selenium webdriver Karate
  - selenium Karate testing tutorial
  - Karate Java Selenium framework
  - lambdatest Karate
  - frameworks on lambdatest
  - hyperexecute
  - hyperexecute Karate testing
  - hyperexecute Karate testing
  - hyperexecute automation testing
  - HyperExecute Selenium automation
url: https://www.lambdatest.com/support/docs/hyperexecute-karate-testing/
site_name: LambdaTest
slug: hyperexecute-karate-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "How to run automation tests on HyperExecute using Karate framework",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-karate-testing/"
        }]
      })
    }}
></script>
Karate is a popular open-source test automation framework for API, performance, and UI testing. It combines API testing with BDD-style syntax and supports parallel execution.

## 🚀 Why choose HyperExecute for Karate Testing?
While Gatling is powerful on its own, running large-scale performance tests using traditional setups often introduces significant bottlenecks:

### ⚠️ Challenges with Traditional Runners
- **Limited Parallelism:** Local runners struggle to scale effectively across multiple CPU cores or nodes.
- **Environment Inconsistencies:** Variations in environments lead to flaky tests and hard-to-reproduce bugs.
- **Manual Test Orchestration:** Managing dependencies, execution order, and reporting manually is error-prone.
- **Lack of Observability:** Debugging failures can be slow due to scattered logs and minimal visibility.

### ✅ How HyperExecute Enhances Karate Testing
LambdaTest’s HyperExecute platform eliminates these issues with a modern, cloud-native test runner that offers:

- **⚡ Smart Test Distribution:** HyperExecute auto-splits Karate feature files across multiple nodes to optimize execution speed.
- **🔒 Isolated Test Environments:** Each test job runs in a clean, sandboxed environment with controlled dependencies.
- **📦 Seamless Artifact Upload:** Automatically captures and uploads Karate test reports for easier analysis.
- **🔁 Built-in Retries & Stability Handling:** Reduce flakiness with automatic retries for failed test jobs.
- **📈 Unified Dashboard & Logs:** Get centralized access to logs, artifacts, and test metadata for efficient debugging.

## Prerequisites
To run the Tests on HyperExecute from your Local System, you are required:

- Your LambdaTest [Username and Access key](https://www.lambdatest.com/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](https://www.lambdatest.com/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](https://www.lambdatest.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](https://www.lambdatest.com/support/docs/hyperexecute-environment-variable-setup/)

## Run a Sample Project
### Step 1: Download Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the Karate from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyperexecute-karate-sample/" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Download the CLI in your Project
Download the HyperExecute CLI and copy it into the root folder of the downloaded sample repository.

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

### Step 3: Configyure `karate-config.js` file
This file defines runtime behaviors and integrates Karate with LambdaTest status reporting.

```javascript
function fn() {
  var lambdaHooks = function() {
    if (karate.info.errorMessage) {
      script('lambda-status=failed');
    } else {
      script('lambda-status=passed');
    }
  }

  var env = karate.env || 'dev';
  karate.log('karate.env:', env);

  var config = {
    env: env,
    hub: karate.properties['hub']
  };

  karate.configure('afterScenario', lambdaHooks);

  return config;
}
```

:::note 
- `lambdaHooks` sets test status based on execution outcome.
- `hub` is dynamically picked to support Selenium Grid for UI tests.
- Supports environment-based configuration using `karate.env`.
:::


### Step 4: Create your hyperexecute.yml file
The core of HyperExecute configuration lies in the `hyperexecute.yaml` file. Let’s break down the structure and understand each section:

#### 1. Environment & Runtime Setup
This section specifies the OS, runtime language, concurrency, and autosplit features:

```yaml
version: 0.1
runson: linux   # OS to run the tests (e.g., linux, win)
autosplit: true
concurrency: 2   # Defines the number of test sessions to run concurrently

runtime:
  language: java
  version: 11
```

#### 2. Dependency Resolution with Maven
Before running the actual performance test, ensure all project dependencies are resolved locally for a reproducible build. This step pulls all required Maven dependencies to a local directory (.m2), ensuring environment consistency.

```yaml
pre:
  - mvn -Dmaven.repo.local=./.m2 dependency:resolve
```

#### 3. Configure Test Discovery
Test discovery determines what files or test suites should be run. Use the [snooper](https://www.lambdatest.com/support/docs/hyperexecute-snooper/) utility to identify test files dynamically. 

```yaml
testDiscovery:
  type: raw
  mode: static
  command: snooper --targetOs=win --featureFilePaths=src/test/java/app --frameWork=java | sed 's/:.*//' | uniq
```

> You can change discovery logic to run at the scenario, tag, or step definition level based on your need.

#### 4. Configure the Test Execution Command
The execution command uses Maven and passes feature file paths from discovery:

```yaml
testRunnerCommand: mvn test -Dtest=MyApiRunner -DFeaturePath="$test" -Dhub=https://LT_USERNAME:LT_ACCESS_KEY@hub.lambdatest.com/wd/hub -Dmaven.repo.local=./.m2
```

Here is a complete working YAML configuration that runs Gatling performance tests on linux runners via HyperExecute:

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/hyperexecute-karate-sample/blob/main/HyperExecute.yaml
```

> 📘 For a deeper understanding and project-specific configurations, check out the [YAML documentation](https://www.lambdatest.com/support/docs/hyperexecute-yaml-parameters/).

### Step 5: Execute your Test Suite
From the project root directory, execute the below CLI command in your terminal:

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config hyperexecute.yaml`}
  </CodeBlock>
</div>

> **NOTE :** In case of macOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/karate/karate.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Advanced Parameters
Optimize your test pipeline using the following advanced features:

- ✅ [Smart Test Splitting](/support/docs/hyperexecute-test-splitting-and-multiplexing/) – Automatically distribute tests across parallel runners
- ⚡ [Fail Fast](/support/docs/hyperexecute-failfast/) – Stop test runs on the first failure
- 📊 [Detailed Reports](/support/docs/hyperexecute-reports/) – Real-time terminal logs & rich test reports