---
id: hyperexecute-inherit-config
title: Inherit Your YAML Configurations
hide_title: true
sidebar_label: YAML Inheritance
description: Discover the Power of HyperExecute Inherit Config | Learn how to optimize your testing workflow with HyperExecute and inherit configurations seamlessly.!
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-inherit-config/
site_name: LambdaTest
slug: hyperexecute-inherit-config/
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
          "name": "HyperExecute Concepts",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-inherit-config/"
        }]
      })
    }}
></script>

# Inherit Your YAML Configurations

YAML inheritance in HyperExecute allows you to reuse common configuration settings across multiple [YAML](/support/docs/deep-dive-into-hyperexecute-yaml) files, improving efficiency, consistency, and flexibility.

For example, you can create a base YAML file with common settings like **browsers**, **OS versions**, and **devices**, and then inherit from it in other YAML files for different environments or test types. This **reduces boilerplate code and errors** while making it easy to switch between environments and manage complex test execution configurations.

***
### Prerequisites

-   You must inherit a YAML file of the same version as your original file.
    
-   The mode of execution, i.e. Matrix, AutoSplit, or Hybrid, must remain the same in both of the YAML files.
    
-   The files that you want to inherit cannot be cyclically dependent. If you want to inherit **A.yaml** in **B.yaml**, then **A.yaml** cannot inherit **B.yaml**.
    
***
### How do you use the Inheritance feature?

You can use the inheritance feature by entering the following flag in your YAML file:

```bash
  base:
    yamls:
      - ./<baseConfiguration1.yaml>
      - ./<baseConfiguration2.yaml>
```
-   Insert the path of the YAML files you want to inherit in place of the placeholder value `<baseConfiguration.yaml>`. The path of the YAML file that you want to inherit is relative to the main YAML file. 

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/7.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

***

-   If the configuration YAML file is passed via the [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/), then it will be treated as the main YAML. Hence, all values of the parent YAML will be overwritten by the values from the configuration YAML file. However, if the configuration YAML file has a flag that contains the Boolean value _False_ or numeric value '0', then the values from the parent YAML are used (if they are present).




***

> **Note**: If you want to inherit two YAML files, then the second YAML file takes precedence. If a key is not defined in the first file or the main YAML file, but it is defined in the second, then that key will take the value of the second file. Similarly, if a key is defined in the two YAML files that are inherited but not in the main file, then the value defined in the second file is used.

***

Go through the example attached below to understand how the resultant YAML will function if you inherit a base YAML in your parent YAML file. 

**Parent YAML**:
```bash
---
version: 0.1
testSuiteTimeout: 10
testSuiteStep: 8

base:
  yamls:
    - ./level1/base1.yaml

runson: win
autosplit: true
retryOnFailure: false
maxRetries: 5
concurrency: 2

env:
  CACHE_DIR: m2_cache_dir

preDirectives:
  commands:
    - pwd
    - echo yaml/level0/main.yaml
    - echo yaml/level0/level1/base1.yaml
    - mvn dependency:resolve

postDirectives:
  commands:
    - ls
    - pwd

mergeArtifacts: false

uploadArtefacts:
 - name: ExecutionSnapshots
   path:
    - target/surefire-reports/html/**

testDiscovery:
  type: raw
  command: grep 'test name' xml/testng_win.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/\x3e//g'

testRunnerCommand: mvn test `-Dplatname=win `-Dmaven.repo.local=./.m2 dependency:resolve `-DselectedTests=$test
```

**Base YAML**: 
```bash
---
version: 0.1
testSuiteTimeout: 10
testSuiteStep: 0


runson: mac
autosplit: true
retryOnFailure: true
maxRetries: 5
concurrency: 1

env:
  CACHE_DIR: m2_cache_dir

preDirectives:
  commands:
    - pwd
    - mvn dependency:resolve

postDirectives:
  commands:
    - ls
    - pwd

mergeArtifacts: false
taskIdentifierInNonConflictingArtefacts: true
uploadArtefacts:
 - name: ExecutionSnapshots
   path:
    - target/surefire-reports/html/**

testDiscovery:
  type: raw
  mode: static

testRunnerCommand: echo test

jobLabel: ['base1']
```


**Resultant YAML**: 
```bash
---
version: 0.1
testSuiteTimeout: 10
testSuiteStep: 8


runson: mac
autosplit: true
retryOnFailure: true
maxRetries: 5
concurrency: 1

env:
  CACHE_DIR: m2_cache_dir

preDirectives:
  commands:
    - pwd
    - mvn dependency:resolve

postDirectives:
  commands:
    - ls
    - pwd

mergeArtifacts: false
taskIdentifierInNonConflictingArtefacts: true
uploadArtefacts:
 - name: ExecutionSnapshots
   path:
    - target/surefire-reports/html/**

testDiscovery:
  type: raw
  mode: static
  command: grep 'test name' xml/testng_win.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/\x3e//g'

testRunnerCommand: mvn test `-Dplatname=win `-Dmaven.repo.local=./.m2 dependency:resolve `-DselectedTests=$test

jobLabel: ['base1']

```

To learn more about the HyperExecute YAML file, go through [this page](/support/docs/deep-dive-into-hyperexecute-yaml). 

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
        Inherit Your YAML Configurations
      </span>
    </li>
  </ul>
</nav>
