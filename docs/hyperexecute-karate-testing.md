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
  - testmu ai Karate
  - frameworks on testmu ai
  - hyperexecute
  - hyperexecute Karate testing
  - hyperexecute Karate testing
  - hyperexecute automation testing
  - HyperExecute Selenium automation
url: https://www.testmu.ai/support/docs/hyperexecute-karate-testing/
site_name: LambdaTest
slug: hyperexecute-karate-testing/
canonical: https://www.testmu.ai/support/docs/hyperexecute-karate-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "How to run automation tests on HyperExecute using Karate framework",
          "item": `${BRAND_URL}/support/docs/hyperexecute-karate-testing/`
        }]
      })
    }}
></script>
Karate is a popular open-source test automation framework that combines API test-automation, mocks, performance testing, and even UI testing into a single framework. It allows writing expressive tests in a simple Gherkin syntax, while leveraging Java for extensibility.

## Why Choose Karate for API Testing?
Karate is a unified test automation framework that combines API test automation, mocks, performance testing, and UI automation into a single tool. It’s designed for simplicity and power:

### Key Benefits of Karate:

- **Readable BDD syntax:** Write feature files in plain English.
- **Built-in HTTP client:** No need for external tools.
- **Supports parallel execution:** Speed up test cycles.
- **All-in-one testing:** Covers API, UI, mocks, and performance.
- **CI-friendly:** Works well with Jenkins, GitHub Actions, GitLab, and more.

## The Challenge: Scaling Karate Tests in CI/CD
As your project grows, so do your tests. And with scale come challenges:

- **Long test execution times** (e.g., 30+ minutes for 100+ feature files)
- **Inefficient retries**, often requiring full suite re-runs
- **Hard-to-debug flakiness** and poor visibility into trends
- **Scattered logs** and reports across environments

## Why HyperExecute Is Built for Karate Teams
| Challenge             | Karate Alone      | Karate + HyperExecute         |
| --------------------- | ----------------- | ----------------------------- |
| Slow suite execution  | 30+ mins          | < 5 mins with autosplitting   |
| Flaky test tracking   | Manual logs       | Built-in flakiness insights   |
| Parallel test scaling | Custom threads    | Seamless, node-based scaling  |
| Debug logs & reports  | Scattered         | Unified dashboard & rich logs |
| Retry support         | Full suite reruns | Scenario-level retry logic    |

## Example Use Case: Scaling Karate API Tests with HyperExecute
A QA team executes 100+ Karate feature files nightly. Over time, they face:

- 30+ minute run times
- Flaky test behavior hard to trace
- Manual re-runs of the entire test suite on failure

### HyperExecute Solution:
#### 1. Blazing Fast Execution via Autosplit

```yaml
autosplit: true
concurrency: 10
```
HyperExecute distributes feature files intelligently across defined parallel nodes, bringing execution time down to minutes from hours.

#### 2. Retry Only What Fails
Automatically re-run failed scenarios without restarting the entire suite.

#### 3. Real-Time Logs & Reports**
Debug faster with per-test logs, reports, and console outputs—available instantly in the HyperExecute dashboard.

#### 4. Flakiness & Stability Insights**
Track unstable tests using built-in analytics that detect patterns of failure across builds.

## Getting Started with Karate on HyperExecute

### Prerequisites
To run the Tests on HyperExecute from your Local System, you are required:

- Your <BrandName /> [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)

### Step 1: Download Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the Karate from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/lambdatest/hyperexecute-karate-sample/" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Download the CLI in your Project
Download the HyperExecute CLI and copy it into the root folder of the downloaded sample repository.

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

### Step 3: Configyure `karate-config.js` file
This file defines runtime behaviors and integrates Karate with <BrandName /> status reporting.

```javascript title="karate-config.js"
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

#### 3. Configure the Test Execution Command
The `testRunnerCommand` defines how each test is executed on the HyperExecute infrastructure. With `autosplit: true`, HyperExecute dynamically distributes each test to a separate runner, enabling parallel execution.

```yaml
testRunnerCommand: mvn test -Dtest=MyApiRunner -DFeaturePath="$test" -Dhub=https://LT_USERNAME:LT_ACCESS_KEY@hub.lambdatest.com/wd/hub -Dmaven.repo.local=./.m2
```

- **-Dtest=MyApiRunner:** Specifies the Java class that acts as the Karate runner. It must extend KarateRunner.
- **-DFeaturePath="$test":** $test is dynamically provided by the discovery command. Each value here is a specific .feature file path.
- **-Dhub=...:** Optional. Used when your Karate test needs to connect to Selenium Grid for UI tests.
- **-Dmaven.repo.local=./.m2:** Uses a local Maven repo to avoid repeated dependency downloads on each VM.

:::info
This command runs one feature file per runner, as decided by autosplit. However, you can change the granularity and run:

- All scenarios tagged with @smoke
- A specific step definition class
- A subset of feature files based on folder/module

> mvn test -Dkarate.options="--tags @smoke"
:::

#### 4. Test Discovery Configuration
Test discovery determines which test files or test cases to run, and provides those to the test runner. In HyperExecute, the `testDiscovery` block parses and lists all .feature files, which are then split and executed.

```yaml
testDiscovery:
  type: raw
  mode: static
  command: snooper --targetOs=win --featureFilePaths=src/test/java/app --frameWork=java | sed 's/:.*//' | uniq
```

- **snooper:** A built-in utility provided by <BrandName /> to list relevant test files.
- **--targetOs=win:** Targets Windows OS runners.
- **--featureFilePaths=src/test/java/app:** Points to where Karate .feature files are located.
- **--frameWork=java:** Indicates framework type for parsing.
- **sed 's/:.*//' | uniq:** Cleans up duplicate or unnecessary output from the snooper tool.

#### How It Works
Discovery command runs first and lists paths to all .feature files. These paths are saved as individual test cases. HyperExecute passes one path at a time to each test runner via the $test placeholder.

The runner command executes the test against that feature. Each of these will be executed in parallel across the nodes defined under concurrency.

```
src/test/java/app/login.feature
src/test/java/app/signup.feature
src/test/java/app/payments.feature
```

Here is a complete working YAML configuration that runs Gatling performance tests on linux runners via HyperExecute:

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/hyperexecute-karate-sample/blob/main/HyperExecute.yaml
```

> 📘 For a deeper understanding and project-specific configurations, check out the [YAML documentation](/support/docs/hyperexecute-yaml-parameters/).

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