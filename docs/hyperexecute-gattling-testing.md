---
id: hyperexecute-gattling-testing
title: Gattling Automation on HyperExecute
hide_title: false
sidebar_label: Gattling
description: Learn how to run Selenium automation tests on HyperExecute using the Gattling framework
keywords:
  - Gattling
  - Gattling selenium
  - Gattling Java Selenium
  - Gattling automation testing
  - selenium webdriver Gattling
  - selenium Gattling testing tutorial
  - Gattling Java Selenium framework
  - testmu ai Gattling
  - frameworks on testmu ai
  - hyperexecute
  - hyperexecute Gattling testing
  - hyperexecute Gattling testing
  - hyperexecute automation testing
  - HyperExecute Selenium automation
url: https://www.testmu.ai/support/docs/hyperexecute-gattling-testing
site_name: LambdaTest
slug: hyperexecute-gattling-testing
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
          "name": "How to run automation tests on HyperExecute using Gattling framework",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-gattling-testing/"
        }]
      })
    }}
></script>
Gatling is an open-source load and performance testing framework designed for testing web applications. It uses a powerful Scala-based DSL to define test scenarios and is capable of simulating thousands of concurrent users, making it ideal for stress and performance testing.

## 🚀 Why Choose HyperExecute for Gatling Performance Testing?
While Gatling is powerful on its own, running large-scale performance tests using traditional setups often introduces significant bottlenecks:

### ⚠️ Common Challenges with Traditional Runners
- **Infrastructure Limitations:** Tests run sequentially or on underpowered machines, leading to long execution times.
- **Manual Setup & Maintenance:** Developers must handle environment configuration, dependency resolution, and runtime orchestration manually.
- **Limited Scalability:** Scaling tests across multiple machines requires complex setup and resource coordination.
- **Debugging Overhead:** Analyzing failures or performance issues often involves sifting through scattered logs and inconsistent outputs.

### ✅ How HyperExecute Solves These Challenges
LambdaTest’s HyperExecute platform is purpose-built to streamline and supercharge your Gatling test execution:

- **⚡ Smart Test Distribution:** Automatically splits and runs tests across multiple machines for faster execution and optimal resource utilization.
- **🧪 Isolated, Reproducible Environments:** Each test job runs in its own isolated environment with managed dependencies for consistent results.
- **📊 Built-in Reporting & Artifact Management:** Uploads Gatling reports and logs as artifacts that can be easily accessed and analyzed post-run.
- **🔁 Built-in Retry & Stability Handling:** Supports automatic retries for failed scenarios to minimize false negatives and flakiness.
- **🔍 Deep Debugging Insights:** Rich logs, structured output, and centralized monitoring help you trace performance bottlenecks with ease.

### 🚀 Result: Scalable, Reliable, and Faster Gatling Test Cycles
By integrating Gatling with HyperExecute, you can move beyond traditional limitations and run large-scale load tests with speed, precision, and confidence. This guide provides a structured approach to integrating the Gatling performance testing framework with the LambdaTest HyperExecute platform.

## Prerequisites
To run the Tests on HyperExecute from your Local System, you are required:

- Your LambdaTest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)

## Run a Sample Project
### Step 1: Download Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the Gattling Performance Testing from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/prateekLambda/Gatling-performance-hyperexecute" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Download the CLI in your Project
Download the HyperExecute CLI and copy it into the root folder of the downloaded sample repository.

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

### Step 3: Configure your hyperexecute.yml file
The core of HyperExecute configuration lies in the `hyperexecute.yaml` file. Let’s understand how it is constructed — step by step:

#### 1. Define Test Environment and Execution Strategy
The first step is to define the environment your tests will run on using the runson parameter. You can also configure intelligent parallelization and test exit conditions.

```yaml
version: 0.1
runson: linux   # OS to run the tests (e.g., linux, win)
autosplit: true
concurrency: 1   # Defines the number of test sessions to run concurrently
scenarioCommandStatusOnly: true
```

#### 2. Dependency Resolution with Maven
Before running the actual performance test, ensure all project dependencies are resolved locally for a reproducible build. This step pulls all required Maven dependencies to a local directory (.m2), ensuring environment consistency.

```yaml
pre:
  - mvn -Dmaven.repo.local=./.m2 dependency:resolve
```

#### 3. Configure Test Discovery (Optional)
Test discovery determines what files or test suites should be run. You can customize this to dynamically scan simulation classes.

```yaml
testDiscovery:
  type: raw
  mode: static
  command: echo "Test"
```
The `command` is a placeholder here. In advanced setups, you can provide a script to programmatically discover test files.

#### 4. Configure the Test Execution Command
Specify the command that runs your Gatling tests via Maven:

```yaml
testRunnerCommand: mvn gatling:test
```

#### 5. Add Background Services (Optional)
If your test depends on a backend server or application under test, you can spin it up in the background:

```yaml
background:
  - mvn spring-boot:run -Dspring-boot.run.main-class=dev.simonverhoeven.gatlingdemo.GatlingDemoApplication || true
```

When `autosplit` is enabled, this command can be intelligently distributed across runners.

#### 6. Upload Test Reports
Once the test completes, use uploadArtefacts to store Gatling reports:

```yaml
uploadArtefacts:
  - name: TestReport
    path:
    - target/gatling/**
```

These will be visible in the HyperExecute logs UI after the run.

#### 7. Add Retry Logic (Optional)
You can automatically retry failed tests to avoid flakiness.

```yaml
retryOnFailure: true
maxRetries: 1
```

Here is a complete working YAML configuration that runs Gatling performance tests on linux runners via HyperExecute:

```yaml reference title="hyperexecute.yaml"
https://github.com/prateekLambda/Gatling-performance-hyperexecute/blob/main/HYE.yaml
```

> 📘 For a deeper understanding and project-specific configurations, check out the [YAML documentation](/support/docs/hyperexecute-yaml-parameters/).

### Step 4: Execute your Test Suite
From the project root directory, execute the below CLI command in your terminal:

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config hyperexecute.yaml`}
  </CodeBlock>
</div>

> **NOTE :** In case of macOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/gattling.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Advanced Parameters
Optimize your test pipeline using the following advanced features:

- ✅ [Smart Test Splitting](/support/docs/hyperexecute-test-splitting-and-multiplexing/) – Automatically distribute tests across parallel runners
- ⚡ [Fail Fast](/support/docs/hyperexecute-failfast/) – Stop test runs on the first failure
- 📊 [Detailed Reports](/support/docs/hyperexecute-reports/) – Real-time terminal logs & rich test reports