---
id: hyperexecute-test-splitting-and-multiplexing
title: Test Splitting and Multiplexing
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Test Splitting and Multiplexing"
description: Boost testing efficiency with HyperExecute's test splitting and multiplexing in TestMu AI's documentation.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmuai.com/support/docs/hyperexecute-test-splitting-and-multiplexing/
site_name: TestMu AI
slug: hyperexecute-test-splitting-and-multiplexing/
canonical: https://www.testmuai.com/support/docs/hyperexecute-test-splitting-and-multiplexing/
---


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
          "name": "HyperExecute Concepts",
          "item": `${BRAND_URL}/support/docs/hyperexecute-test-splitting-and-multiplexing/`
        }]
      })
    }}
></script>

# Test Splitting and Multiplexing

HyperExecute has 3 different modes to select and execute tests:
- Auto Split Strategy
- Matrix Strategy
- Hybrid Strategy

You can utilise these modes to split and execute tests as per your requirements. 

<div className="support_main">
  
  <a href = "/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy">
  <div className="support_inners mb-5">
    <h3>Auto Split Strategy</h3>
    <p>Allows you to distribute your tests over multiple nodes by intelligently distributing them over multiple nodes to reduce the test execution time.</p>
  </div>
  </a>
  <a href = "/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy">
  <div className="support_inners">
    <h3>Matrix Multiplexing Strategy</h3>
    <p>Allows you to split the test cases across different combinations of browsers, OS and custom parameters like files, folders, features, scenarios, etc.</p>
  </div>
  </a>
  <a href = "/support/docs/hyperexecute-test-splitting-and-multiplexing/#hybrid-strategy-in-hyperexecute">
  <div className="support_inners">
    <h3>Hybrid Strategy</h3>
    <p>Combination of both Auto Split Strategy and Matrix Multiplexing Strategy to run tests in parallel on our virtual machines.</p>
  </div>
  </a>
</div>

## AutoSplit Strategy

The Smart **Auto Split Strategy** enables you to distribute tests across multiple virtual machines efficiently. This strategy ensures optimal utilization of concurrency by allowing you to split tests based on various levels, such as files, modules, and scenarios.

### Key Benefits of Auto Split Strategy
- Efficient distribution of tests across nodes.
- Fine-grained control over test distribution.
- Maximization of concurrency for faster results.
- [Automatic reordering of test cases](/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy), prioritizing failed ones for faster feedback in subsequent executions.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/autosplit/autosplit.png').default} alt="Image"  className="doc_img" />


> HyperExecute provides flexibility to distribute tests at file level, scenario level, module level, and practically anything, provided you have a way to list down all the possible values of the entity that has to be distributed.

### Enabling Auto-Test Splitting

For enabling auto-test splitting, set the `autosplit` key to *true*  in the HyperExecute YAML file.

``` yaml
autosplit: true
```

Along with that, you need to provide [`testDiscovery`](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery) and [`testRunnerCommand`](/support/docs/deep-dive-into-hyperexecute-yaml/#testrunnercommand) flags in your YAML file as well.

#### Configuration Parameters

##### 1. `concurrency`
The `concurrency`  key indicates the total number of concurrent sessions that can run in parallel. With both of these commands (`testDiscovery` and `testRunnerCommand`), HyperExecute intelligently distributes tests over multiple virtual machines as specified by the `concurrency` directive in the YAML file.

For example, assume that the total number of test scenarios [discovered via `testDiscovery`] are 27 and `concurrency` is set to 7. In this case, HyperExecute would allocate 7 nodes for running the 27 tests in parallel.

``` yaml
concurrency: 7
```

##### 2. `testDiscovery`
- It is used to list down all the values to be distributed. HyperExecute will execute the **`testDiscovery`** command verbatim and expects distinct values to be on separate lines. It can be as simple as a list of files on different lines.
- This can be used later to split tests over files, modules, or any level supported by your [language and framework](/support/docs/getting-started-with-hyperexecute/).
- It is used for locating/discovering the tests that are a part of the project. You can use the combination of *grep*, **`awk`**, **`sed`**, or any valid command to locate the tests that you intend to run. For NodeJS, usually at file level, for Python at class level, in Java  at class and module level. For Cucumber based frameworks at scenario level or feature level or at tag level. 

A few samples are given below:

```yaml
# The following command (or value) when assigned to testDiscoverer key searches for the scenarios by matching the string Scenario [or Scenario Outline] in the .feature  files located in the *src* directory of the project.
testDiscovery:
  type: raw
  mode: remote
  command: grep -nri 'Scenario:\^|Scenario Outline:' src -ir --include=\*.feature |  awk '{print $1}' | sed 's/\.\///g' | sed 's/\(.*\):/\1 /'
```

```yaml
testDiscovery:
  type: raw
  mode: remote
  command: grep 'class name' testng.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/\x3e//g'
```

##### 3. `testRunnerCommand`
- It is used to run a single item from the **`testDiscovery`**. You need to add **`$test`** in the `testRunnerCommand` for interpolating one of the values from the `testDiscovery`.
- It tells the system how to run a single test entity in isolation. This entity could be a file, module, feature or scenario. Test runner command will run over each of the values extracted from the `testDiscovery` command.

### Advanced Concepts

#### Automatic Reordering of Test Cases

Suppose you are performing regression testing in your large test suite project via github actions, but some test cases are failing unexpectedly for no reason. These flaky tests have become a time-consuming nightmare for QA and developers. After fixing the issues, you trigger the testing pipeline again, but you have to wait to check the status of that particular test.

It would be much better if those flaky tests ran first in the sequence, so you don't have to wait longer to see the status of your previously failed tests.

That's exactly the problem HyperExecute's autosplit with automatic re-ordering aims to solve! It's like having a testing assistant who remembers which tests were tricky last time.

##### How does it work?
When you run tests with HyperExecute's autosplit feature, your tests are divided up and run simultaneously on multiple machines, executing them in parallel. This is great for speeding things up, but during this run, HyperExecute keeps track of which tests fail.

After the initial run is complete, HyperExecute takes note of the failing tests. It may use this information to automatically reorder your tests for the next time you run them.

On subsequent runs, HyperExecute might prioritize the failing tests from the previous run for faster feedback.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/autosplit/auto-reorder.png').default} alt="Image"  className="doc_img" />

:::important info
Automatic reordering is a behind-the-scenes feature that optimizes test execution. You don't need to specifically configure it; it might happen automatically as part of the autosplit process. It's like a hidden perk that can significantly improve your testing experience.
:::

## Matrix Multiplexing Strategy

HyperExecute's Matrix Multiplexing Strategy allows you to execute test cases across a variety of combinations efficiently. This strategy is especially useful when dealing with browser and OS combinations or other parameters like files, tags, and more.

By utilizing the Matrix Multiplexing Strategy, you can parallelize your testing process and achieve faster results. HyperExecute generates permutations and combinations using key-value pairs, launching virtual machines for each combination and running tests in parallel.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/matrix/hyp_matrix.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'700px', height:'auto'}}/>

### Configuration and Execution

#### Setting Up Matrix Multiplexing

To initiate Matrix Multiplexing, define `key-value` pairs in the HyperExecute YAML file. Each pair represents a combination of parameters under consideration, such as browser versions, OS, files, folders, tags, features, scenarios, input values, etc.

#### Generating and Running Virtual Machines

HyperExecute will generate and manage virtual machines for each key-value combination, injecting them as environment variables or command-line variables. The specified commands will then run for each combination.

Consider a scenario where the matrix calculation results in 10 different possible combinations. In such a case, 10 different Test Execution nodes, known as `Tasks` will be spawned in parallel and all the tests will be run in parallel on the respective node.

You can use a key as [browser], [files]  or any other unique key name. 

``` yaml
matrix:
  files: ["Test1","Test2","Test3"]
testSuites:
  - mvn test -Dtest=$files
```

In the YAML file shown above, **files**  is a user-generated key. **Files**  and its associated value(s) are opaque to HyperExecute. You can also name it as **Files1**, **FileNames**, etc., as long as the Key is unique in that YAML file.

### When to opt for Matrix Strategy

Matrix multiplexing strategy is ideally used when you have to run specific test scenarios across different input (or value) combinations. For example, this approach would be useful if you have to run "scenario1"  on "N" version(s) of Chrome and Firefox browsers (that are installed on the Windows 10 platform).

Here, ‘N’ could be browser version  number(s) that are common between the two web browsers e.g. 68.0, 69.0, 89.0, etc. You can also leverage matrix multiplexing strategy to run scenarios based on different tags, files, features, and more. You can specify required key:value pairs in the HyperExecute YAML file or you can specify the same in the source code.

In matrix multiplexing strategy, *`key`:`value`* pairs mentioned in the source code override the same `key`:`value`  pairs mentioned in the HyperExecute YAML file.

Let’s modify the above YAML file to run the scenarios on "latest" version of the Firefox browser:

``` yaml
#runson defines the OS of your test execution node.
runson: ${matrix.os}

matrix:
  os: ["win", "linux"]
  version: ["latest", "beta", "dev"]
  browser: ["Chrome", "Firefox"]
  files: ["@File1","@File2"]

```

A combination of test scenarios is generated using the following formula:

> **Total Test Scenarios** = *[Entries in os  List] x [Entries in browser version  List] x [Entries in browser  List] x [Entries in Files List]*

Let’s take a case where the test scenarios are implemented in Java. Files File1.java and File2. java contains one test method each. In such a scenario, the total number of test combinations would be  (1 x 1 x 2 x 2)  →  4. Here is the list of the  total test scenarios that would be run on HyperExecute (based on the YAML file shown earlier):

| Test Number | FileName | OS | Browser | Browser Version |
|---|---|---|---|---|
| 1 | @File1 (Test Method_1) | Win (Windows 11) | Chrome | latest |
| 2 | @File1 (Test Method_1) | Win (Windows 11) | Firefox | latest |
| 3 | @File2 (Test Method_2) | Win (Windows 11) | Chrome | latest |
| 4 | @File2 (Test Method_2) | Win (Windows 11) | Firefox | latest |

### Exclusion in Matrix Strategy
Assuming that you created a matrix but there is one specific combination that you don't want the system to consider. This can happen for instance if you have a combination of Safari and Windows which won't be a valid combination, in such cases you can exclude such a combination using the `exclusionMatrix` parameter as shown below.

```yaml
#runson defines the OS of your test execution node.
runson: ${matrix.os}

matrix:
  # Browser version(s) separated by Comma
  version: ["latest"]
  # OS name sepataed by Coma
  os: ["win", "mac", "linux"]
  # Browser name separated by Comma
  browser: ["Chrome", "Firefox", "Safari"]
  # Test Files separated by Comma
  files: ["@File1","@File2","@File3","@File4"]

exclusionMatrix: 
  - os: [win]
    browser: ["Safari"]
    files: ["@File2","@File3"]
```

## Hybrid Strategy in HyperExecute

HyperExecute’s Hybrid Strategy is a combination of AutoSplit and Matrix Strategy. You can run all of the combinations of [Matrix Strategy](/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy), and use the [AutoSplit Strategy](/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy) to run them in parallel on our virtual machines.

### Why do you need the Hybrid Strategy?

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

### Using Hybrid Strategy with HyperExecute

#### Prerequisites:

-   The version of the YAML file that you are using is `0.1`.    
-   The test discovery mode has to be `remote`.

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
  mode: remote
  command: snooper --featureFilePaths=src/main//Features/ --frameWork=java 
```
    
- It can also be defined selectively for every platform. If you have not defined the `testDiscovery` command for a specific OS, then it takes the global value of the command.  
            
```yaml
testDiscovery:
  type: raw
  mode: remote
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
  mode: remote
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
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Test Splitting and Multiplexing
      </span>
    </li>
  </ul>
</nav>

