---
id: hyperexecute-hybrid-strategy
title: Hybrid Strategy in HyperExecute
hide_title: false
sidebar_label: Hybrid Strategy
description: Unlock efficient testing with HyperExecute’s Hybrid Strategy! Our guide walks you through combining AutoSplit and Matrix Strategy for parallel test execution, saving time without sacrificing test coverage.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-hybrid-strategy/
site_name: LambdaTest
slug: hyperexecute-hybrid-strategy/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-hybrid-strategy/"
        }]
      })
    }}
></script>
HyperExecute’s Hybrid Strategy is a combination of AutoSplit and Matrix Strategy. You can run all of the combinations of [Matrix Strategy](/support/docs/hyperexecute-matrix-multiplexing-strategy/), and use the [AutoSplit Strategy](/support/docs/hyperexecute-auto-split-strategy/) to run them in parallel on our virtual machines.

## Why do you need the Hybrid Strategy?

- **Addressing Long-Running Matrix Jobs :**
For Matrix jobs involving numerous combinations, execution time might be longer. Hybrid Strategy mitigates this by distributing tests across specified machines.

- **Time-Saving Potential of Hybrid Approach :**
The Hybrid Strategy is a time-saving solution for matrix-intensive jobs. By harnessing parallelism, you can expedite testing without compromising coverage.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/hybrid/hyp_hybrid.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'700px', height:'auto'}}/>

Based on the above instructions passed as parameters in your [YAML](#sample-yaml-file) file, HyperExecute will now generate Virtual Machines.
- 1 VM for Win + Chrome
- 1 VM for Win + Firefox
- 1 VM for Linux + Chrome
- 1 VM for Linux + Firefox

Now the given `parallelism` is 2, hence it will create the same set of the above combination, and since Hybrid Mode is the combination of Autosplit and Matrix method, HyperExecute will intelligently distribute tests over these Virtual Machines.

## Using Hybrid Strategy with HyperExecute

### Prerequisites:

-   The version of the YAML file that you are using is `0.1`.    
-   The test discovery mode has to be dynamic.

> You can run your tests in Hybrid Strategy by configuring the following flags in your [YAML file](/support/docs/deep-dive-into-hyperexecute-yaml/).


- **autosplit**: To use HyperExecute’s AutoSplit Strategy, you need to set this flag to `true`. Similarly, this flag should be set to `true` in Hybrid Strategy too.

```yaml
autosplit: true
```

- **parallelism**: This key indicates the number of tests that can run in parallel.  
      
    
```yaml
parallelism: 5
```
    
- You can define the `parallelism` for each operating system. If you have not defined the `parallelism` for any particular OS, then the value for that OS will be set to the global `parallelism` value.         
        
```yaml
Parallelism: 4 
winParallelism: 2 
macParallelism: 3
```
        
- In the example given above, the `parallelism` for Linux tests is not defined and if any tests are run on Linux OS, then they will be run in 4 different virtual machines because the global value of `parallelism` is set to 4.  
            
- **matrix**: This flag is used to define the combination of tests you want to run in your job. You can use the matrix flag to define combinations of browsers, operating systems, and even custom parameters like files, folders, tags, scenarios, and more.  
      
    
```yaml
matrix:
  os: [mac, win, linux] 
  var: [1,2,3] 
runson: ${matrix.os}
```

- If you want to run a combination of different operating systems in Hybrid Strategy, then you can configure the `runson` key as `${matrix.os}`. This will only work if you have added some input for the `os` flag under `matrix` in your YAML file.  
          
- **testDiscovery**: The `testDiscovery` command is used to list down all the values that have to be distributed. It can be used to split tests over files, modules, or any level supported by your language and framework.  

```yaml
testDiscovery:
  type: raw
  mode: dynamic
  command: snooper --featureFilePaths=src/main//Features/ --frameWork=java 
```
    
- It can also be defined selectively for every platform. If you have not defined the `testDiscovery` command for a specific OS, then it takes the global value of the command.  
            
```yaml
testDiscovery:
  type: raw
  mode: dynamic
  command: snooper --featureFilePaths=src/main//Features/ --frameWork=java 
    winCommand: snooper --featureFilePaths=src/main//Features/ --frameWork=java 
    macCommand: snooper --featureFilePaths=src/main/**/Features/ --frameWork=java
```
        
- In the example given above, the `testDiscovery` command for Linux will be: `snooper --featureFilePaths=src/main//Features/ --frameWork=java`  
              
- **testRunnerCommand**: The `testRunnerCommand` tells the system how to run a single test entity in isolation. This entity could be a file, module, feature or scenario. It will run over each of the values extracted from the `testDiscovery` command.  
      
```yaml
testRunnerCommand: mvn test -Dcucumber.options="$test" -Dscenario="$test" -DOs="win 10"
  winTestRunnerCommand: mvn test -Dcucumber.options="$test" -Dscenario="$test" -DOs="win 10"
  macTestRunnerCommand: mvn test -Dcucumber.options="$test" -Dscenario="$test" -DOs="Mac"
  linuxTestRunnerCommand: mvn test -Dcucumber.options="$test" -Dscenario="$test" -DOs="linux"
```
    
-   If the `testRunnerCommand` is not defined for a particular OS, then it takes the global value of the parameter that is defined. In the example given above, if the `testRunnerCommand` was not defined for macOS, then it would have taken the value: `mvn test -Dcucumber.options="$test" -Dscenario="$test" -DOs="win 10"`

### Sample YAML file

A sample YAML file used to run a job on Hybrid Strategy for your reference below:

```yaml
---
version: 0.1
runson: ${matrix.os}

autosplit: true
concurrency: 3

matrix:
  os: [mac, win, linux]
parallelism: 2

env:
  CACHE_DIR: m2_cache_dir

cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - ${CACHE_DIR}

pre:
  - mvn -Dmaven.repo.local=${CACHE_DIR} -Dmaven.test.skip=true clean install

testDiscovery:
  type: raw
  mode: dynamic
  macCommand: |
    grep 'test name' xml/testng_mac.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/\x3e//g'
  winCommand: | 
    grep 'test name' xml/testng_win.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/\x3e//g'
  linuxCommand: |
    grep 'test name' xml/testng_linux.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/\x3e//g' ${param}

linuxTestRunnerCommand: mvn test -Dplatname=linux -Dmaven.repo.local=./.m2 dependency:resolve -DselectedTests=$tests
winTestRunnerCommand: mvn test `-Dplatname=win `-Dmaven.repo.local=.m2 dependency:resolve `-DselectedTests=$tests
macTestRunnerCommand: mvn test -Dplatname=mac -Dmaven.repo.local=./.m2 dependency:resolve -DselectedTests=$tests

retryOnFailure: false
maxRetries: 1

post:
  - cat yaml/${matrix.os}/testng_hyperexecute_matrix_sample.yaml

mergeArtifacts: true

uploadArtefacts:
  - name: XmlReports
    path:
      - target/surefire-reports/html/**

jobLabel: ['hybrid-mode']
```

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
        Hybrid Strategy in HyperExecute
      </span>
    </li>
  </ul>
</nav>