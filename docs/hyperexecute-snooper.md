---
id: hyperexecute-snooper
title: Using Snooper on Hyperexecute
hide_title: true
sidebar_label: Using Snooper on Hyperexecute
description: Learn more about Using Snooper on Hyperexecute
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-snooper/
site_name: Using Snooper on Hyperexecute
slug: hyperexecute-snooper/
---

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
          "name": "Using Snooper on Hyperexecute",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-snooper"
        }]
      })
    }}
></script>

# Snooper Command
***

A `snooper` is a command that can be used to discover the list of Feature file scenarios that would be further executed using the value passed in the `testRunnerCommand`. The `snooper` command takes two arguments:

- **`featureFilePaths`**: This argument specifies the path to the Feature files that you want to discover.

- **`frameWork`**: This argument specifies the framework that you are using for your tests.

For example, the following command will discover the list of Feature file scenarios in the features folder that are using the Java framework:

```
snooper --featureFilePaths=features/ --frameWork=java
```

## How to implement Snooper on HyperExecute

To implement the `snooper` command on HyperExecute, we simply need to update our YAML file's `testDiscovery` and `testRunnerCommand` parameters.
***

### Pre-requisite

- The project must be integrated with the LambdaTest grid.

- Download or Clone the Sample Project.

:::tip Sample repo
All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/cucumber-selenium-hyperexecute-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

 > Follow the steps [here](https://www.lambdatest.com/support/docs/cucumber-on-hyperexecute-grid/) to implement the above Sample Project Test on HyperExecute using Cucumber.

### Downloading the HyperExecute Snooper CLI

You can download the `HyperExecute CLI` for your OS from the links given below :

| Platform | Download Link |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/snooper.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/snooper |
| macOS ARM64 | https://downloads.lambdatest.com/hyperexecute/darwin/arm64/snooper |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/snooper |

### `testDiscovery`
***
This command helps to discover all the test scenarios within the project.

It offers two methods to implement it:

#### Method 1: Discovering test cases on Hyperexecute machines:

In this method, tests are discovered on the user's machine. The user needs to configure the appropriate parameters, and the command will be executed automatically with the appropriate parameters.

```bash
 testDiscovery:
  type: automatic
  mode: static
  args:
    featureFilePaths: src/test/java/Features/
    frameWork: java
    specificTags: [""]
```

The user needs to configure the following parameters as per their requirements:

- **`featureFilePaths`:** Path where all feature files are located
- **`frameWork`:** Framework of Testing
- **`specificTags`:** (optional) Tags that need to be tested

#### Method 2: Discovering test cases on Local machines:

In this method, tests are discovered on the user's machine. The user needs to provide a `command` and appropriate tags that will be executed.

```bash
testDiscovery: 
  type: raw 
  mode: static
  command: snooper  --targetOs=win --featureFilePaths=src/test/java/Features/ --frameWork=java --specificTags=@tag1,@tag2
```

The user needs to configure the following parameters as per their requirements:

- **`command`:** It is a mandatory parameter in the yaml file and would throw an error if not found by the compiler.


### `testRunnerCommand`
***

This command helps to execute the test cases and needs a command that will help to execute the single test. It is executed on the Hyperexecute VMs for each scenario at an individual level.

There are two methods to execute the runner command for cucumber:

#### Method 1: Using `options` flag

```bash
testRunnerCommand: mvn test -Dcucumber.options="$test"
```

- **`-Dcucumber.options`:** This parameter is used to specify the feature that will help execute on VMs.

#### Method 2: Using `features` flag

> **Note:** This flag is applicable for cucumber version 7 and above only.

```bash
testRunnerCommand: mvn test -Dcucumber.features="$test"
```

- **`-Dcucumber.features`:** This parameter is used to execute one single feature file.

## Debug

We can also debug `testDiscovery` using `snooper` to check whether all the desired test scenarios have been discovered or not. This can be implemented using the Snooper CLI binary present in the **.hyperexecute folder**.

To debug the discovery of the snooper, configure the following command as per the desired parameters:

```bash
.hyperexecute/snooper --targetOs=win --ignoredTags=@ignore @skipDaily --featureFilePaths=src/test/java/Features --frameWork=java | sed 's/:.*//' | uniq
```

> **Note:** .hyperexecute and snooper binary are created only after first execution of the yaml file.

## Sample YAML File
***
Here is a sample HyperExecute file with cucumber 7 and above to discover all the feature files without any tags.

```bash
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: win

autosplit: true
retryOnFailure: true

maxRetries: 1
concurrency: 4

env:
  CACHE_DIR: m2_cache_dir

cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - ${CACHE_DIR}

pre:
  - mvn -Dmaven.repo.local=${CACHE_DIR} -Dmaven.test.skip=true clean install

mergeArtifacts: true

uploadArtefacts:
  - name: XmlReports
    path:
      - target/surefire-reports/testng-results.xml
  - name: JsonReports
    path:
      - target/cucumber-reports/CucumberTestReport.json

testDiscovery:
  type: automatic
  mode: static
  args:
    featureFilePaths: src/test/java/Features
    frameWork: java
testRunnerCommand: mvn test -Dcucumber.features="$test"
```