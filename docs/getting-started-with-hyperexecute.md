---
id: getting-started-with-hyperexecute
title: Getting started with Hyperexecute
hide_title: true
sidebar_label: HyperExecute 
description: Get started with HyperExecute on LambdaTest for faster web automation tests using Matrix and Auto-Split strategies. Test with Selenium languages at high speeds.
keywords:
  - lambdatest automation
  - lambdatest hyperexecute
  - hyperexecute automation grid
  - hyperexecute grid online
  - online hyperexecute grid
  - hyperexecute automation grid online
  - lambdatest hypterest tutorial
  - hyperexecute getting started
  - lambdatest hyperexecute getting started
  - hyperexecute automation testing
  - hyperexecute matrix execution
  - hyperexecute autosplit execution
  - hyperexecute auto-split execution
image: /assets/images/og-images/Getting-Started-with-Lambdatest-Automation.jpg
url: https://www.lambdatest.com/support/docs/getting-started-with-hyperexecute
site_name: LambdaTest
slug: getting-started-with-hyperexecute/
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
          "name": "Getting Started With HyperExecute on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/getting-started-with-hyperexecute"
        }]
      })
    }}
></script>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started with HyperExecute 
* * *
HyperExecute is an AI Powered Test Orchestration Cloud Platform, enabling test automation teams worldwide to achieve an accelerated time to market by providing JIT (Just-in-time) testing infrastructure that offers enhanced test execution speeds, smart test orchestration, detailed execution logs and much more.

It requires a [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/) file which contains all the necessary instructions and a [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution [`Job`](/support/docs/hyperexecute-concepts/#1-jobs).

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/hyperexecute.png').default} alt="Image"  className="doc_img"/>

> See our [Guided walkthrough](/support/docs/hyperexecute-guided-walkthrough/) to learn more. 
You can also find us on the [Microsoft Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/lambdatestinc1584019832435.hyper_execute?exp=ubp8&tab=Overview).

<div className="support_main">
  <a href="/support/docs/hyperexecute-running-your-first-job/">
    <div className="support_inners">
      <h3>Running Your First Job on HyperExecute</h3>
      <p>A step-by-step walkthrough of how to run your first job on the HyperExecute Platform.</p>
    </div>
  </a>
   <a href="/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/">
    <div className="support_inners"> 
      <h3>HyperExecute CLI</h3>
      <p>Understand how you can initiate jobs using our CLI from your local setup or CI/CD pipelines.</p>
    </div>
  </a>
   <a href="/support/docs/deep-dive-into-hyperexecute-yaml/">
    <div className="support_inners">
      <h3>HyperExecute YAML</h3>
      <p>Learn about the different configurations & creating a YAML suited for your needs.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-concepts/">
    <div className="support_inners">
      <h3>Concepts</h3>
      <p>Everything you need to know about HyperExecute concepts and how it works.</p>
    </div>
  </a>
  <a href="/support/docs/key-features-of-hyperexecute/">
    <div className="support_inners">
      <h3>Key Features</h3>
      <p>Learn about the different features and how you can use them in your project.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-vs-traditional-test-grids/">
    <div className="support_inners">
      <h3>HyperExecute vs Traditional Test grids</h3>
      <p>Understand how we expedite test execution as compared to traditional grids.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-private-cloud-setup/">
    <div className="support_inners">
      <h3>HyperExecute Private Cloud</h3>
      <p>Learn how to setup HyperExecute Private Cloud for your organization.</p>
    </div>
  </a>
  <a href="/support/docs/integration-with-hyperexecute/">
    <div className="support_inners">
      <h3>Integrations</h3>
      <p>Know how to setup with your CI/CD, Project management tools and LambdaTest products.</p>
    </div>
  </a>
</div>

<!-- Here are all the languages and frameworks supported by HyperExecute Grid. -->

<div className= "lt_framework_list_row">
<p></p>
<p> </p>
<Tabs
  groupId="languages"
  defaultValue= 'Selenium'
  values={[
    {label: 'Selenium', value: 'Selenium'},
    {label: 'Puppeteer', value: 'Puppeteer'},
     {label: 'Playwright', value: 'Playwright'},
     {label: 'Cypress', value: 'Cypress'},
  ]}>

<TabItem value="Selenium">
<div className="lt_row">
<div className="lt_col lt_framework_wrapper">
 <img loading="lazy" src={require('../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/docs/testng-on-hyperexecute-grid/">TestNG</a>
    </li>
    <li>
      <a href="/docs/junit-on-hyperexecute-grid/">JUnit</a>
    </li>
    <li>
      <a href="/docs/cucumber-on-hyperexecute-grid/">Cucumber</a>
    </li>
  </ul>
</div>
<div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/docs/webdriverio-on-hyperexecute-grid/">WebdriverIO</a>
    </li>
    <li>
      <a href="/docs/protractor-on-hyperexecute-grid/">Protractor</a>
    </li>
    <li>
      <a href="/docs/nightwatch-on-hyperexecute-grid/">Nightwatch</a>
    </li>
  </ul>
</div>
<div className="lt_col lt_framework_wrapper">
 <img loading="lazy" src={require('../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/docs/nunit-on-hyperexecute-grid/">NUnit</a>
    </li>
    <li>
      <a href="/docs/specflow-on-hyperexecute-grid/">SpecFlow</a>
    </li>
  </ul>
</div>
<div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/docs/pyunit-on-hyperexecute-grid/">PyUnit</a>
    </li>
    <li>
      <a href="/docs/pytest-on-hyperexecute-grid/">PyTest</a>
    </li>
    <li>
      <a href="/docs/robot-on-hyperexecute-grid/">Robot</a>
    </li>
    <li>
      <a href="/docs/behave-on-hyperexecute-grid/">Behave</a>
    </li>
  </ul>
</div>
<div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/ruby-icon.webp').default} alt="Ruby" width="200" height="200" className="language-icon"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/docs/ruby-on-hyperexecute-grid/">Ruby</a>
    </li>
    <li>
      <a href="/docs/capybara-on-hyperexecute-grid/">Capybara</a>
    </li>
  </ul>
</div>
</div>
</TabItem>

<TabItem value="Puppeteer">
<div className="lt_row ">
    <div className="lt_col lt_framework_wrapper">
      <img loading="lazy" src={require('../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/docs/jest-on-hyperexecute/">Jest</a>
        </li>
        <li>
          <a href="/docs/mocha-on-hyperexecute/">Mocha</a>
        </li>
         <li>
          <a href="/docs/codecept-on-hyperexecute/">CodeceptJs</a>
        </li>
      </ul>
    </div>
    </div>
</TabItem>

<TabItem value="Playwright">
<div className="lt_row">
<div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/docs/pytest-on-hyperexecute/">PyTest</a>
        </li>
        <li>
          <a href="/docs/playwright-python-on-hyperexecute/">Python</a>
        </li>
      </ul>
    </div>
    <div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/color-js.webp').default} alt="Javascript" width="200" height="200" className="language-icon"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/docs/playwright-vanillajs-on-hyperexecute/">VanillaJs</a>
        </li>
        <li>
          <a href="/docs/playwright-codeceptjs-on-hyperexecute/">CodeceptJs</a>
        </li>
        <li>
          <a href="/docs/playwright-jest-on-hyperexecute/">Jest</a>
        </li>
      </ul>
    </div>
    <div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/docs/playwright-junit-on-hyperexecute/">JUnit</a>
        </li>
      </ul>
    </div>
     <div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/docs/playwright-dotnet-on-hyperexecute/">.Net</a>
        </li>
      </ul>
    </div>
     <div className="lt_col lt_framework_wrapper">
      <ul className="lt_framework_list">
        <li>
        </li>
        <li>     
        </li>
      </ul>
    </div>
     <div className="lt_col lt_framework_wrapper">
      <ul className="lt_framework_list">
        <li>
        </li>
        <li>     
        </li>
      </ul>
    </div>
     <div className="lt_col lt_framework_wrapper">
      <ul className="lt_framework_list">
        <li>
        </li>
        <li>     
        </li>
      </ul>
    </div>
     <div className="lt_col lt_framework_wrapper">
      <ul className="lt_framework_list">
        <li>
        </li>
        <li>     
        </li>
      </ul>
    </div>
     <div className="lt_col lt_framework_wrapper">
      <ul className="lt_framework_list">
        <li>
        </li>
        <li>     
        </li>
      </ul>
    </div>
    </div>
</TabItem>

<TabItem value="Cypress">
<div className="lt_row ">
    <div className="lt_col lt_framework_wrapper">
      <img loading="lazy" src={require('../assets/images/getting-started/cypress_logo.png').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
      <ul className="lt_framework_list">
        <li>
          <a href="/docs/cypressv9-on-hyperexecute/">Cypress v9</a>
        </li>
        <li>
          <a href="/docs/cypressv10-on-hyperexecute/">Cypress v10</a>
        </li>
      </ul>
    </div>
    </div>
</TabItem>

</Tabs>
</div>


<div className="lt-framework-list-footer">
    <p>In case your favorite framework or tool isn't listed here, just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Shout Out Here</span>.
    <br/>In case of any other problems, feel free to <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Contact Us</span>.</p>
  </div>

> HyperExecute supports multiple languages and testing frameworks. See the comprehensive list & samples [here](/support/docs/hyperexecute-supported-languages-and-frameworks/).

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
       Languages and Frameworks Supported By HyperExecute Grid
      </span>
    </li>
  </ul>
</nav>

<!--
## How to run Java Tests on HyperExecute Cloud

Now that we have covered the essentials of matrix-based multiplexing and auto-split test execution, let’s cover different ways in which you can leverage the HyperExecute cloud to run tests at scale.

### Trigger Tests Based on File Names

#### Test Scenario

Consider a scenario where you have X number of tests in Y different Java Files. The files are named in a particular nomenclature (e.g. Test1. java, Test2.java… TestN.java).

The intent is to trigger all the tests (i.e. ‘X’ tests) that are available in the respective Java files (that can be easily located using ‘the evident pattern-based file name).

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/hyperexecute_5.png').default} width="341" height="127" alt="Image"  className="doc_img" width="682" height="254" style={{ width:'520px', height:'auto'}}/>

Before using HyperExecute, you have to download HyperExecute CLI corresponding to the host OS. Along with it, you also need to export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile) page.

We would not deep dive into the internals of the tests, since tests are distributed at the file level. Shown below is the HyperExecute CLI download location for different platforms:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

For demonstration, the browser and operating system combination is maintained in the implementation (i.e. the YAML file does not have any mention of the test combinations).

### Naming Nomenclature
Three simple test scenarios that append a new item in the [ToDo List](https://todomvc.com/examples/react/#/) are added in the respective files (Test1.java, Test2.java, and Test3.java).

### Auto Split Test Execution
Important keys like globalTimeout, testSuiteTimeout, etc. are set to 90 minutes. Since we are using Auto Split execution, autosplit is set to true.

Concurrency or parallelism is set to 3 (i.e. three parallel test sessions would be executed in parallel).

``` yaml
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

autosplit: true

runson: win

retryOnFailure: false
concurrency: 3

testDiscovery:
  type: raw
  mode: dynamic
  command: grep 'class name' testng.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/\x3e//g'

testRunnerCommand: mvn test -Dtest=$test
```

Since it is a Maven based project, we have downloaded the Maven CLI from [here](https://maven.apache.org/download.cgi). You can refer to the [Maven Command Cheat Sheet](https://www.journaldev.com/33645/maven-commands-options-cheat-sheet) that provides detailed information on how to use Maven CLI commands.

The heart of the HyperExecute YAML file is the *testDiscovery* command where grep is used on testng.xml to fetch the class names mentioned in testng.xml. Shown below is the execution snapshot of the *testDiscoverer* command:

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/hyperexecute_26.png').default} alt="Image"  className="doc_img"/>

We have used the combination of grep, sed, gawk, etc. to extract the *Class Names* (which are similar to the *File Names*) from testng.xml.

testDiscoverery command

``` yaml
testDiscovery:
  type: raw
  mode: dynamic
  command: grep 'class name' testng.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/\x3e//g'
```

<b>FileName - testng.xml</b>

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="Demonstration of TestNG on HyperExecute" parallel="methods" thread-count="1">
<test name="Demonstration of TestNG on HyperExecute">
   <test name="Test 1">
       <classes>
           <class name="Test1"> </class>
       </classes>
   </test>
   <test name="Test 2">
       <classes>
           <class name="Test2"> </class>
       </classes>
   </test>
       <test name="Test 3">
       <classes>
           <class name="Test3"> </class>
       </classes>
   </test>
</suite>
```

Once the testDiscoverer command provides the class names, the next step is to use the extracted information in the <b>testRunner</b> command. Here, we use the mvn command to trigger the tests inside the <b>designated class</b>.

``` bash
testRunnerCommand: mvn test -Dtest=$test
```

Since our implementation comprises of three classes (Test1, Test2, and Test3); the testRunnerCommand will run the following commands in parallel on different VMs spawned by HyperExecute:

Machine 1
``` bash
testRunnerCommand: mvn test -Dtest=Test1
```

Machine 2
``` bash
testRunnerCommand: mvn test -Dtest=Test2
```

Machine 3
``` bash
testRunnerCommand: mvn test -Dtest=Test3
```

<b>Execution</b>

Now that we have the basic premise for auto-split execution, the next step is to trigger the YAML file from the command line. Before execution, set the environment variables <b>LT_USERNAME</b> and <b>LT_ACCESS_KEY</b> by triggering the following command on the terminal (PS: The UserName and AccessKey are available in the LambdaTest Profile Section):

<b>Windows</b>

``` bash
set LT_USERNAME = <lambdatest_username>
set LT_ACCESS_KEY = <lambdatest_access_key>
```

<b>macOS</b>

``` bash
export LT_USERNAME = <lambdatest_username>
export LT_ACCESS_KEY = <lambdatest_access_key>
```

<b>Linux</b>

``` bash
export LT_USERNAME = <lambdatest_username>
export LT_ACCESS_KEY = <lambdatest_access_key>
```

To trigger HyperExecute in the Auto Split mode, trigger the following command:

* For Default YAML file (.hyperexecute.yaml)

``` bash
./hyperexecute --download-artifacts --force-clean-artifacts
```

* For Custom YAML file
``` bash
./hyperexecute --config yaml/testng_hyperexecute_autosplit_sample.yaml --download-artifacts --force-clean-artifacts
```

--config: Indicates the location of the custom HyperExecute YAML file

Once the command is triggered, navigate to HyperExecute Automation Dashboard to check the status of the test execution. The HyperExecute CLI uploads the code (in a zip format) to the secure cloud so that the tests can be run at an expedited pace. Each test run is assigned a unique testID through which you can keep a track of the status of the test.

Each test (i.e. Test1, Test2, and Test3) goes through 4 steps:

* <b>Pre</b>: Step where the necessary project dependencies and other pre-requisites are downloaded on the execution machine
* <b>Discovery</b>: Step to locate the tests in the *testDiscovery* command
* <b>Execution</b>: Tests located via the *testDiscovery* command are executed using the command specified in *testRunnerCommand*
* <b>Artifacts</b>: Optional step to download the execution artifacts from the VM to the local machine

Shown below are the test suite logs that are akin to the logs that you will observe when the tests are run locally:

<img loading="lazy" src={require('../assets/images/hyperexecute/testng/testng_autosplit_1.png').default} alt="Image"  className="doc_img"/>

You can also download the execution artifacts as shown below:

<img loading="lazy" src={require('../assets/images/hyperexecute/testng/testng_artifacts_2.png').default} alt="Image"  className="doc_img"/>

### Matrix-based Test Execution

Here we have assigned default values (in minutes) to *globalTimeout*, *globalSuite*, and *testSuite*.

``` yaml
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: win

matrix:
 files: ["Test1","Test2","Test3"]

uploadArtefacts:
  - name: ExecutionSnapshots
    path:
     - target/surefire-reports/html/**

testSuites:
 - mvn test -Dtest=$files
 ```

Inside the matrix tag, the *runson* directive is set to win. This means that the target platform on which the tests would be executed is Windows. The *key:value* pairs are opaque in HyperExecute, what matters for HyperExecute is the matrix multiplication.

Here, the user-defined key ‘files’ is set to Test1..Test3. These are nothing but the files that are a part of the Java project.

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/hyperexecute_10.png').default} alt="Image"  className="doc_img" width="804" height="700" style={{ width:'400px', height:'auto'}}/>

Now that we have extracted the filenames, the next step is to inform HyperExecute to run the test methods inside those files. Since it is a Maven-based project, we use the *mvn command* with the *-Dtest* option to run tests inside the respective files.

``` yaml
testSuites:
 - mvn test -Dtest=$files
```

<b>Execution</b>

Now that we have the basic premise for matrix-based execution, the next step is to trigger the YAML file from the command line. The steps mentioned below remain unchanged irrespective of the execution mechanism used by HyperExecute.

Before execution, set the environment variables LT_USERNAME and LT_ACCESS_KEY by triggering the following command on the terminal (PS: The UserName and AccessKey are available in the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile) section):

<b>Windows</b>

``` bash
set LT_USERNAME = <lambdatest_username>
set LT_ACCESS_KEY = <lambdatest_access_key>
```

<b>macOS</b>

``` bash
export LT_USERNAME = <lambdatest_username>
export LT_ACCESS_KEY = <lambdatest_access_key>
```

<b>Linux</b>

``` bash
export LT_USERNAME = <lambdatest_username>
export LT_ACCESS_KEY = <lambdatest_access_key>
```

To trigger HyperExecute in the Matrix mode, trigger the following command on the terminal:

``` bash
./hyperexecute --config .hyperexecute_autosplit.yaml --download-artifacts --force-clean-artifacts
```

--config: Indicates the location of the custom HyperExecute YAML file

Once the command is triggered, navigate to [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of the test execution. As seen below, the Concierge uploads the code (in a zip format) to the secure cloud so that the tests can be run at an expedited pace.

Each test run is assigned a unique testID through which you can keep a track of the status of the test. As seen below, all the three files are executed in parallel (whereas tests inside a particular file will be run in series). You can identify each test with the unique TaskID assigned by HyperExecute.

## HyperExecute Automation Dashboard

Once you have triggered the test using the CLI, its execution status can be monitored on the [Automation Dashboard](https://automation.lambdatest.com/timeline/). Every execution has a unique JobID and every group has a unique TaskID. Under each TaskID, there will be multiple stages where each stage indicates one test.

Here is a sneak peek into the HyperExecute automation dashboard:

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/hyperexecute_25.png').default} alt="Image"  className="doc_img"/>

You can seamlessly navigate from/to *Test Logs* in Automation Dashboard from/to stage in *HyperExecute logs*. You should be able to relate HyperExecute stage to Selenium automation test, whereby you would be able to get relevant Selenium test details like video, network log, commands, Exceptions, etc.

Now you can effortlessly navigate from the automation dashboard to HyperExecute logs (and vice-versa) to get more details of the test execution.

<img loading="lazy" src={require('../assets/images/hyperexecute/testng/testng_artifacts_2.png').default} alt="Image"  className="doc_img"/>

## Advanced Features of HyperExecute

Here are some of the advanced HyperExecute features that must be leveraged to make the most out of the platform: when using HyperExecute:

### Post Steps

Steps (or commands) that need to run after the test execution are listed in the *post* step. In the example, we cat the contents of *yaml/testng_hyperexecute_matrix_sample.yaml*. For instance - you can use *post* steps to stop the binary and hit an API call (e.g. curl -X post https://api.lambdatest.com/xkcd)

```yaml
post:
  - cat yaml/testng_hyperexecute_matrix_sample.yaml
```

### Retry Test Execution on Failures

The *retryOnFailure* command is used for instructing HyperExecute to retry failed commands (till the time execution is successful or it reaches *maxRetries*). It is a Boolean variable which is by default set to *False*. Here is the combination of *retryOnFailure* and *maxRetries* can be used for retrying command (or test) execution:

```yaml
  retryOnFailure: true
  maxRetries: 5
```

### Setting Environment Variables

The *env* directive can be used for setting the environment variables.

``` yaml
env:
  CACHE_DIR: m2_cache_dir
```

### Dependency Caching

Dependency caching is enabled in the YAML file to ensure that the package dependencies are not downloaded in subsequent runs. The first step is to set the Key used to cache directories. In the below example, directory *m2_cache_dir* is created in the project's root directory.

``` yaml
cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - m2_cache_dir
```

### Artifacts Management

* The *uploadArtefacts* directive is useful when you intend to upload artifacts (files, reports, etc.) generated after task completion. The *--download-artifacts* option must be passed to the HyperExecute CLI for downloading execution artifacts. The artifacts will be uploaded to the folder which is mentioned in the YAML.

As shown below, the artifacts in *target/surefire-reports/html/* will be downloaded to the *Example* folder.

``` yaml
mergeArtifacts: true

uploadArtefacts:
  - name: Example
     path:
      - target/surefire-reports/html/**
```

It is recommended to use the *mergeArtifacts* directive that lets you merge artifacts that are generated under each task. By default it is *false*, you just have to set it to *true* in the HyperExecute YAML file.

``` yaml
mergeArtifacts: true
```

## Automation Testing using HyperExecute

Here are all the languages and frameworks supported by HyperExecute grid on LambdaTest:

<div className="lt_row lt_framework_list_row">
<div className="lt_col lt_framework_wrapper">
 <img loading="lazy" src={require('../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/support/docs/testng-on-hyperexecute-grid/">TestNG</a>
    </li>
    <li>
      <a href="/support/docs/junit-on-hyperexecute-grid/">JUnit</a>
    </li>
    <li>
      <a href="/support/docs/cucumber-on-hyperexecute-grid/">Cucumber</a>
    </li>
  </ul>
</div>
<div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/color-js.webp').default} alt="JavaScript" width="200" height="200" className="language-icon"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/support/docs/webdriverio-on-hyperexecute-grid/">WebdriverIO</a>
    </li>
    <li>
      <a href="/support/docs/protractor-on-hyperexecute-grid/">Protractor</a>
    </li>
    <li>
      <a href="/support/docs/nightwatch-on-hyperexecute-grid/">Nightwatch</a>
    </li>
  </ul>
</div>
<div className="lt_col lt_framework_wrapper">
 <img loading="lazy" src={require('../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/support/docs/nunit-on-hyperexecute-grid/">NUnit</a>
    </li>
    <li>
      <a href="/support/docs/specflow-on-hyperexecute-grid/">SpecFlow</a>
    </li>
  </ul>
</div>
<div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/support/docs/pyunit-on-hyperexecute-grid/">PyUnit</a>
    </li>
    <li>
      <a href="/support/docs/pytest-on-hyperexecute-grid/">PyTest</a>
    </li>
    <li>
      <a href="/support/docs/robot-on-hyperexecute-grid/">Robot</a>
    </li>
    <li>
      <a href="/support/docs/behave-on-hyperexecute-grid/">Behave</a>
    </li>
  </ul>
</div>
<div className="lt_col lt_framework_wrapper">
  <img loading="lazy" src={require('../assets/images/getting-started/ruby-icon.webp').default} alt="Ruby" width="200" height="200" className="language-icon"/>
  <ul className="lt_framework_list">
    <li>
      <a href="/support/docs/ruby-on-hyperexecute-grid/">Ruby</a>
    </li>
    <li>
      <a href="/support/docs/capybara-on-hyperexecute-grid/">Capybara</a>
    </li>
  </ul>
</div>

  </div>
  <div className="lt-framework-list-footer">
    <p>We support all languages and frameworks that are compatible with Selenium, so in case your favorite isn't in the table.<br/>Don't worry, you can still run the test. <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Contact Us</span> for any help.</p>
  </div>

For any query or doubt, please feel free to contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />
Happy testing!

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
      Getting started with HyperExecute on LambdaTest
      </span>
    </li>
  </ul>
</nav>
-->
