---
id: hyperexecute-karate-testing
title: How to Perform API Testing With Karate on HyperExecute
hide_title: false
sidebar_label: "Karate"
description: Run Karate API tests, with in-run mock servers, in parallel on HyperExecute. Set your credentials, configure HyperExecute.yaml, and trigger a cloud run.
keywords:
  - Karate
  - Karate API testing
  - Karate automation testing
  - Karate framework tutorial
  - Karate mock server
  - testmu ai Karate
  - frameworks on testmu ai
  - hyperexecute
  - hyperexecute Karate testing
  - hyperexecute automation testing
url: https://www.testmuai.com/support/docs/hyperexecute-karate-testing/
site_name: TestMu AI
slug: hyperexecute-karate-testing/
canonical: https://www.testmuai.com/support/docs/hyperexecute-karate-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import DocCard from '@site/src/component/DocCard';
import VerifiedTag from '@site/src/component/verifiedTag';

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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-karate-testing/"
    },
    "headline": "How to Perform API Testing With Karate on HyperExecute",
    "description": "Run Karate API tests, with in-run mock servers, in parallel on HyperExecute. Set your credentials, configure HyperExecute.yaml, and trigger a cloud run.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-karate-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "Karate",
      "Karate API testing",
      "Karate automation testing"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "A TestMu AI account. Get your LT_USERNAME and LT_ACCESS_KEY from Username and Access Key.; Git, to clone the sample repository..",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Set the OS, Java runtime, and how many sessions run in parallel",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "version: 0.1\nrunson: linux    # OS the tests run on (e.g. linux, win)\nautosplit: true\nconcurrency: 10  # number of test sessions to run in parallel\n\nruntime:\n  language: java\n  version: 11"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The pre step pulls all Maven dependencies into a local .m2 directory once, so each runner reuses them for a reproducible build",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "pre:\n  - mvn -Dmaven.repo.local=./.m2 dependency:resolve"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "With autosplit: true, HyperExecute passes each discovered .feature path in through the $test placeholder",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "testRunnerCommand: mvn test -Dtest=MyApiRunner -DFeaturePath=\"$test\" -Dhub=https://LT_USERNAME:LT_ACCESS_KEY@hub.lambdatest.com/wd/hub -Dmaven.repo.local=./.m2"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Test runner command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test -Dkarate.options=\"--tags @smoke\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "HyperExecute splits this list across the parallel nodes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "testDiscovery:\n  type: raw\n  mode: static\n  command: snooper --targetOs=win --featureFilePaths=src/test/java/app --frameWork=java | sed 's/:.*//' | uniq"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Each runner executes its feature in parallel, up to concurrency",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "src/test/java/app/login.feature\nsrc/test/java/app/signup.feature\nsrc/test/java/app/payments.feature"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Run Karate API tests on HyperExecute",
      "description": "Run Karate API tests, with in-run mock servers, in parallel on HyperExecute. Set your credentials, configure HyperExecute.yaml, and trigger a cloud run.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Clone the sample repository",
          "text": "Clone the Karate sample from the TestMu AI GitHub repository, or use your own project. Download or clone the Karate sample from the TestMu AI GitHub repository to run the tests on HyperExecute.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-karate-testing/#step-1-clone-the-sample-repository"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Download the HyperExecute CLI",
          "text": "The CLI triggers your tests on HyperExecute. Download the binary for your platform and copy it into the root folder of the sample repository.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-karate-testing/#step-2-download-the-hyperexecute-cli"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure HyperExecute.yaml",
          "text": "HyperExecute.yaml in the sample repo tells HyperExecute how to build, discover, and run the suite. The sections below explain each part. Set the OS, Java runtime, and how many sessions run in parallel: The pre step pulls all Maven dependencies into a local .m2 directory once, so each runner reuses them for a reproducible build: testRunnerCommand runs one feature file per runner. With autosplit: true, HyperExecute passes each discovered .feature path in through the $test placeholder: -Dtest=MyApiRunner: the JUnit 5 runner class (annotated with @Karate.Test) that executes the feature file from FeaturePath. -DFeaturePath=\"$test\": $test is one .feature path supplied by the discovery command. -Dhub=...: optional. Only needed when a Karate test drives a browser through the Selenium Grid for UI tests. -Dmaven.repo.local=./.m2: reuses the local Maven repo so dependencies are not re-downloaded on each runner. By default this runs one feature file per runner. To run a subset instead (for example, only scenarios tagged @smoke, a specific runner class, or a folder of features), pass Karate options: testDiscovery lists the .feature files to run and hands them to the runner. HyperExecute splits this list across the parallel nodes: snooper: a built-in TestMu AI utility that lists matching test files. --targetOs: the OS path format snooper uses when listing feature-file paths. --featureFilePaths=src/test/java/app: where the Karate .feature files live. --frameWork=java: the framework snooper...",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-karate-testing/#step-3-configure-hyperexecuteyaml"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Trigger the run from the CLI",
          "text": "From the project root directory, run the CLI command in your terminal: {./hyperexecute --user ${ YOURLAMBDATESTUSERNAME()} --key ${ YOURLAMBDATESTACCESS_KEY()} --config HyperExecute.yaml} If macOS reports permission denied when you run the CLI, make it executable with chmod u+x ./hyperexecute. If a security popup appears, allow the binary from System Preferences \u2192 Security & Privacy \u2192 General. A successful run shows the job as Completed in the HyperExecute dashboard, with each .feature file executed as a separate task and the Cucumber reports attached. Open any task to inspect its request and response logs.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-karate-testing/#step-4-trigger-the-run-from-the-cli"
        }
      ]
    }
  ]) }}
/>

To run Karate API tests on HyperExecute, set your TestMu AI credentials, configure `HyperExecute.yaml`, and trigger the run with the HyperExecute CLI. Karate is an open-source framework for API test automation, mocks, performance testing, and UI automation that uses Gherkin syntax with Java. On HyperExecute, the TestMu AI test orchestration platform, it autosplits your `.feature` files across parallel nodes, retries only the scenarios that fail, can start Karate mock servers inside the same run, and collects logs and Cucumber reports in the dashboard.

Run your own Karate (Java + Maven) project or the ready-made sample used in the steps below.

## How HyperExecute runs Karate

- **Autosplit across nodes.** HyperExecute discovers your `.feature` files and distributes them across parallel runners, one feature per runner, up to the `concurrency` you set.
- **Scenario-level retry.** Failed scenarios re-run on their own instead of forcing a full-suite rerun.
- **In-run mock servers.** A `background` step starts a Karate mock server for the run, so the system under test gets controlled responses without separate mock infrastructure. A `post` step stops it.
- **Unified reporting.** Per-test logs, console output, and Cucumber reports are collected in the HyperExecute dashboard.

## Prerequisites

Before you start, make sure you have:

- **A TestMu AI account.** Get your `LT_USERNAME` and `LT_ACCESS_KEY` from [Username and Access Key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/).
- **Git**, to clone the sample repository.

HyperExecute builds and runs the suite on the grid, so you do not need Java or Maven installed locally. Install them only if you want to run the suite on your own machine first.

## Run Karate API tests on HyperExecute

### Step 1: Clone the sample repository

Clone the Karate sample from the TestMu AI GitHub repository, or use your own project.

:::tip Sample repo

Download or clone the Karate sample from the TestMu AI GitHub repository to run the tests on HyperExecute.

<a href="https://github.com/lambdatest/hyperexecute-karate-sample/" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Download the HyperExecute CLI

The CLI triggers your tests on HyperExecute. Download the binary for your platform and copy it into the **root folder** of the sample repository.

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

### Step 3: Configure HyperExecute.yaml

`HyperExecute.yaml` in the sample repo tells HyperExecute how to build, discover, and run the suite. The sections below explain each part.

#### Environment and runtime

Set the OS, Java runtime, and how many sessions run in parallel:

<VerifiedTag value="Verified" />

```yaml
version: 0.1
runson: linux    # OS the tests run on (e.g. linux, win)
autosplit: true
concurrency: 10  # number of test sessions to run in parallel

runtime:
  language: java
  version: 11
```

#### Resolve Maven dependencies

The `pre` step pulls all Maven dependencies into a local `.m2` directory once, so each runner reuses them for a reproducible build:

<VerifiedTag value="Verified" />

```yaml
pre:
  - mvn -Dmaven.repo.local=./.m2 dependency:resolve
```

#### Test runner command

`testRunnerCommand` runs one feature file per runner. With `autosplit: true`, HyperExecute passes each discovered `.feature` path in through the `$test` placeholder:

<VerifiedTag value="Verified" />

```yaml
testRunnerCommand: mvn test -Dtest=MyApiRunner -DFeaturePath="$test" -Dhub=https://LT_USERNAME:LT_ACCESS_KEY@hub.lambdatest.com/wd/hub -Dmaven.repo.local=./.m2
```

- **`-Dtest=MyApiRunner`**: the JUnit 5 runner class (annotated with `@Karate.Test`) that executes the feature file from `FeaturePath`.
- **`-DFeaturePath="$test"`**: `$test` is one `.feature` path supplied by the discovery command.
- **`-Dhub=...`**: optional. Only needed when a Karate test drives a browser through the Selenium Grid for UI tests.
- **`-Dmaven.repo.local=./.m2`**: reuses the local Maven repo so dependencies are not re-downloaded on each runner.

:::info Change the run granularity

By default this runs one feature file per runner. To run a subset instead (for example, only scenarios tagged `@smoke`, a specific runner class, or a folder of features), pass Karate options:

<VerifiedTag value="Verified" />

```bash
mvn test -Dkarate.options="--tags @smoke"
```

:::

#### Test discovery

`testDiscovery` lists the `.feature` files to run and hands them to the runner. HyperExecute splits this list across the parallel nodes:

<VerifiedTag value="Verified" />

```yaml
testDiscovery:
  type: raw
  mode: static
  command: snooper --targetOs=win --featureFilePaths=src/test/java/app --frameWork=java | sed 's/:.*//' | uniq
```

- **`snooper`**: a built-in TestMu AI utility that lists matching test files.
- **`--targetOs`**: the OS path format snooper uses when listing feature-file paths.
- **`--featureFilePaths=src/test/java/app`**: where the Karate `.feature` files live.
- **`--frameWork=java`**: the framework snooper parses for.
- **`sed 's/:.*//' | uniq`**: trims and de-duplicates snooper's output.

#### How discovery and execution work

The discovery command runs first and lists paths to every `.feature` file. HyperExecute saves each path as a test case and passes one at a time to a runner through the `$test` placeholder. Each runner executes its feature in parallel, up to `concurrency`:

<VerifiedTag value="Verified" />

```
src/test/java/app/login.feature
src/test/java/app/signup.feature
src/test/java/app/payments.feature
```

The full configuration also defines a `background` step that starts the Karate mock server (`mvn clean test -Dtest=LocalRunner`), `report`/`partialReports` for the Cucumber reports, and a `post` step that stops the mock server (`curl http://localhost:8080/__admin/stop`):

<VerifiedTag value="Verified" />

```yaml reference title="HyperExecute.yaml"
https://github.com/LambdaTest/hyperexecute-karate-sample/blob/main/HyperExecute.yaml
```

For every YAML key and project-specific option, see the [YAML parameters reference](/support/docs/hyperexecute-yaml-parameters/).

### Step 4: Trigger the run from the CLI

From the project root directory, run the CLI command in your terminal:

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config HyperExecute.yaml`}
  </CodeBlock>
</div>

:::note macOS permissions

If macOS reports **permission denied** when you run the CLI, make it executable with `chmod u+x ./hyperexecute`. If a security popup appears, allow the binary from **System Preferences** → **Security & Privacy** → **General**.

:::

A successful run shows the job as **Completed** in the HyperExecute dashboard, with each `.feature` file executed as a separate task and the Cucumber reports attached. Open any task to inspect its request and response logs.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/karate/karate.png').default} alt="Karate suite results in the HyperExecute dashboard"  width="1920" height="868" className="doc_img"/>

## Related resources

<div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
  <DocCard heading="Smart test splitting and multiplexing" link="/support/docs/hyperexecute-test-splitting-and-multiplexing/" description="Distribute tests across parallel runners and control how they split." />
  <DocCard heading="Fail Fast" link="/support/docs/hyperexecute-failfast/" description="Stop a run on the first failure to save minutes." />
</div>

<div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
  <DocCard heading="Reports and logs" link="/support/docs/hyperexecute-reports/" description="Real-time terminal logs and rich test reports." />
  <DocCard heading="Getting started with HyperExecute" link="/support/docs/getting-started-with-hyperexecute/" description="Set up HyperExecute and trigger your first job on the grid." />
</div>
