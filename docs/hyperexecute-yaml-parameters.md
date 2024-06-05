---
id: hyperexecute-yaml-parameters
title: HyperExecute YAML
hide_title: true
sidebar_label: HyperExecute YAML
description: This document list enumerates the diverse configuration options supported by HyperExecute YAML, providing you with the flexibility to tailor test execution according to the specific requirements of your project.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-yaml-parameters/
site_name: LambdaTest Deep dive into hyperexecute yaml
slug: hyperexecute-yaml-parameters/
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
          "name": "Deep Dive into HyperExecute YAML",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-yaml-parameters/"
        }]
      })
    }}
></script>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# HyperExecute YAML
***

The **HyperExecute YAML** file serves as the foundational component for test execution within the HyperExecute Platform. The subsequent list enumerates the diverse configuration options supported by HyperExecute YAML, providing you with the flexibility to tailor test execution according to the specific requirements of your project.

## Mandatory Parameters

| Key | Type | Description|
|:---|:--|:---|
| [version](/support/docs/deep-dive-into-hyperexecute-yaml/#version) | String | The version of HyperExecute YAML you are using. | 
| [runson](/support/docs/deep-dive-into-hyperexecute-yaml/#runson) | _linux_, _mac_, or _win_ | The OS on which you will run your Test. Can provide [`${matrix.os}`](/support/docs/deep-dive-into-hyperexecute-yaml/#matrix) as well to run a multi OS job.|
| [pre](/support/docs/deep-dive-into-hyperexecute-yaml/#pre) | List of Strings | The actions that are performed before test execution. |

## General Parameters

| Key | Type | Description|
|:---|:--|:---|
| [globalTimeout](/support/docs/deep-dive-into-hyperexecute-yaml/#globaltimeout) | Integer | It sets the max duration (1-150 mins) for a HyperExecute job. It terminates a job exceeding this limit. Default is 90 mins, but can be adjusted based on your requirements.|
| [runtime](/support/docs/deep-dive-into-hyperexecute-yaml/#runtime) | Map | Install any dependent language/framework with any specific version. |
| [jobLabel](/support/docs/deep-dive-into-hyperexecute-yaml/#joblabel) | List of Strings | Add tags or labels to jobs. This allows you to search your jobs using the labels or tags assigned to them. |
| [failFast](/support/docs/deep-dive-into-hyperexecute-yaml/#failfast) | Map | Flag to fail a job faster if there are `x` consecutive failures. |
| [base](/support/docs/deep-dive-into-hyperexecute-yaml/#base) | Map | Inherit the configurations of a base YAML file into your parent file. |
| [sourcePayload](/support/docs/deep-dive-into-hyperexecute-yaml/#sourcepayload) | Map | You can use this to define the source of your test scripts so that the scripts can directly be fetched from your git directly for execution on HyperExecute. |
| [hostsOverride](/support/docs/deep-dive-into-hyperexecute-yaml/#hostsoverride) | List of Maps |If you want to add custom domain mappings in local DNS entry. |
| [env](/support/docs/deep-dive-into-hyperexecute-yaml/#env) | Map | No | Here we can define all the env variables for VM , we can even refer all the key stored in vault by using syntax like `${{ .secrets.KeyName }}`.|
| [frameworkStatusOnly](/support/docs/deep-dive-into-hyperexecute-yaml/#frameworkstatusonly) | Boolean | Set status of scenario based on it’s tests status / remarks. |
| [testSuiteTimeout](/support/docs/deep-dive-into-hyperexecute-yaml/#testsuitetimeout) | Integer  | It is used to set the timeout on all scenario stages inside a task. If defined, your complete test suite should get executed within this time. Its max value is 150 minutes.|
| [testSuiteStep](/support/docs/deep-dive-into-hyperexecute-yaml/#testsuitestep) | Integer | It is used to timeout individual scenario  stages in a task. Each scenario in each task should get completed before this time. |
| [retryOnFailure](/support/docs/deep-dive-into-hyperexecute-yaml/#retryonfailure) | Boolean | If set to true, then it will retry tests based on `maxRetries` key as defined below. <br /> Default value is `false`. |
| [maxRetries](/support/docs/deep-dive-into-hyperexecute-yaml/#maxretries) | Integer | The maximum number of times your scenarios can be retried. <br /> If `retryOnFailure` is true then Default value will be 2. Value Range 1 to 5.|
| [retryOptions](/support/docs/deep-dive-into-hyperexecute-yaml/#retryoptions) | Array | Retries the test case if found specific errors in the logs. |
| [testDiscovery](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery) | Map | This key is used to locate or discover relevant tests via class names, filters, file names, etc. |
| [preDirectives](/support/docs/deep-dive-into-hyperexecute-yaml/#predirectives) | Map | Similar to pre with option to retry and specify shell. |
| [post](/support/docs/deep-dive-into-hyperexecute-yaml/#post) | List of Strings | The actions that are performed after test execution. |
| [postDirectives](/support/docs/deep-dive-into-hyperexecute-yaml/#postdirectives) | Map |Similar to post with option to retry. |
| [alwaysRunPostSteps](/support/docs/deep-dive-into-hyperexecute-yaml/#alwaysrunpoststeps) | Boolean | Execute the Post Steps in every scenario case |
| [cachekey](/support/docs/deep-dive-into-hyperexecute-yaml/#cachekey) | String | File which can be used to generate unique key for cache. Example : package.json |
| [cacheDirectories](/support/docs/deep-dive-into-hyperexecute-yaml/#cachedirectories) | List of Strings | Dependency directories that are cached to improve the test execution speed. |
| [projectName](/support/docs/deep-dive-into-hyperexecute-yaml/#projectname) | String | Segregate data at a project/repo level |
| [differentialUpload](/support/docs/deep-dive-into-hyperexecute-yaml/#differentialupload) | Map | Minimize the time of upload of code. |
| [report](/support/docs/deep-dive-into-hyperexecute-yaml/#report) | Boolean | To generate the test report at the end of the job using the framework generated reports, set this value to true. We also need to set partialReports for generating report |
| [partialReports](/support/docs/deep-dive-into-hyperexecute-yaml/#reports) | Map | Configurations related to generate report. |
| [errorCategorizedOnFailureOnly](/support/docs/deep-dive-into-hyperexecute-yaml/#errorcategorizedonfailureonly) | Boolean | Control the behavior of error categorization generated on your tests|
|[errorCategorizedReport](/support/docs/deep-dive-into-hyperexecute-yaml/#errorcategorizedreport) | Map, Boolean | Generate a RCA report for your failed tests.|
| [mergeArtifacts](/support/docs/deep-dive-into-hyperexecute-yaml/#mergeartifacts) | Boolean | Merge all the artifacts generated by each task. |
| [uploadArtefacts](/support/docs/deep-dive-into-hyperexecute-yaml/#uploadartefacts) | Map | The uploadArtifacts key contains the path and the name of the file which you want to download later as an artifact when job finishes.|
|[linkValidity](/support/docs/deep-dive-into-hyperexecute-yaml/#linkvalidity) | Integer | Customize the duration of validity for report and artifact URLs generated after job completion. |
| [stripParentDirectory](/support/docs/deep-dive-into-hyperexecute-yaml/#stripparentdirectory) | Boolean | When `mergeArtifacts` is true, providing this flag will strip the parent directory from all the downloaded artifacts and place the artifacts in base path. | 
| [generateArtifactAfterEveryStage](/support/docs/deep-dive-into-hyperexecute-yaml/#generateartifactaftereverystage)  | Boolean | With this flag `artifacts` will be generated after every `stage`, without this flag artifacts are generated after every task and avoid any overrides for artifacts of the same name. |
| [taskIdentifierInNonConflictingArtifacts](/support/docs/deep-dive-into-hyperexecute-yaml/#taskidentifierinnonconflictingartifacts) | Boolean |This flag when set to **true** specifies that the task ID should be included in the non-conflicting artifacts. |
| [smartGrid](/support/docs/deep-dive-into-hyperexecute-yaml/#smartgrid) | Boolean |When enabled, it will reduce the browser setup time in case of windows. |
| [scenarioCommandStatusOnly](/support/docs/deep-dive-into-hyperexecute-yaml/#scenariocommandstatusonly) | Boolean |When enabled, it will mark the scenario as passed even if no test is associated with it or will mark the status of scenario based on the status of the last test executed. |
| [skipArtifactStageIfNoTest](/support/docs/deep-dive-into-hyperexecute-yaml/#skipartifactstageifnotest) | Boolean |When enabled, it will mark artifact stage as skipped when there is no selenium/cdp test executed in the task. |
| [cypress](/support/docs/deep-dive-into-hyperexecute-yaml/#cypress) | Boolean |This is required to be true in case user is running Cypress test suite. |
| [cypressOps](/support/docs/deep-dive-into-hyperexecute-yaml/#cypressops) | Map |This map is used to pass cypress specific options. |  
| [shell](/support/docs/deep-dive-into-hyperexecute-yaml/#shell) | String |Defines the shell on which all your commands should run. | 
| [dataJsonPath](/support/docs/deep-dive-into-hyperexecute-yaml/#datajsonpath) | Array of String | DataJsonPaths helps to distribute data over VMs based on different Jsons.| 
| [strict](/support/docs/deep-dive-into-hyperexecute-yaml/#strict) | Boolean |If strict is set to true in yaml then the variables used in yaml must be present in either vars or environment variables on the user machine. | 
| [codeDirectory](/support/docs/deep-dive-into-hyperexecute-yaml/#codedirectory) | String |Defines in which directory all of your commands defined in yaml would run. Your code would be downloaded in this directory. | 
| [cacheTestURL](/support/docs/deep-dive-into-hyperexecute-yaml/#cachetesturl) | Boolean |It enables users to cache static test files. |
| [afterAll](/support/docs/deep-dive-into-hyperexecute-yaml/#afterall) | Map |It is used to run commands after the job has finished. |
| [captureScreenRecordingForScenarios](/support/docs/deep-dive-into-hyperexecute-yaml/#capturescreenrecordingforscenarios) | bool |If this key is set to true, the video will be recorded for whole scenario execution |
| [buildConfig](/support/docs/deep-dive-into-hyperexecute-yaml/#buildconfig) | Map | For managing the Hyperlink behaviour. |
| [captureCSVResult](/support/docs/deep-dive-into-hyperexecute-yaml/#capturecsvresult) | Boolean |If this directive is enabled, it will generate the performance stats artifact having aggregated information for the time taken by Selenium Commands. |
| [matrixEnvPrefix](/support/docs/deep-dive-into-hyperexecute-yaml/#matrixenvprefix) | Boolean |This flag is used to prefix env variables with `HE_ENV_` being set when you run a job in “matrix” mode. Default is false. |
| [dynamicAllocation](/support/docs/deep-dive-into-hyperexecute-yaml/#dynamicallocation) | Boolean |This flag dynamically allocate test cases to workers as they become available and ensures that all available resources are used to run tests. |
| [collectLocalGitData](/support/docs/deep-dive-into-hyperexecute-yaml/#collectlocalgitdata) | Boolean |This flag is used to store the git diff data related to the repository used to run HyperExecute Jobs. |
| [background](/support/docs/deep-dive-into-hyperexecute-yaml/#background) | Map |It is used to trigger long-running Application Servers tasks like running WebApps or databases |
| [vars](/support/docs/deep-dive-into-hyperexecute-yaml/#vars) | Map |  Here we define all the variable which can be refer in other parts of yaml. You can use these variables in the YAML file as `${your_variable_name}`. |
| [tunnel](/support/docs/deep-dive-into-hyperexecute-yaml/#tunnel) | Boolean | If set to true , tunnel will be spawn on run time , which connects system where we are running the cli to VM where tests are getting executed. |
| [tunnelOpts](/support/docs/deep-dive-into-hyperexecute-yaml/#tunnelopts) | Map | All the configuration related to tunnel will be mention here. Please note tunnelOpts will work along with either `tunnel` or `tunnelNames`. |
| [tunnelNames](/support/docs/deep-dive-into-hyperexecute-yaml/#tunnelnames) | List of Strings | List of tunnels name which has been registered and running with HyperExecute. |
| [testRunnerExecutor](/support/docs/deep-dive-into-hyperexecute-yaml/#testrunnerexecutor) | String | To switch the test execution from powershell to the command line. |
|[workingDirectory](/support/docs/deep-dive-into-hyperexecute-yaml/#workingdirectory)| Path of Location |This flag determines where test discovery and execution commands operate, including the creation of associated files or directories. |

## AutoSplit Mode Parameters

| Key | Type | Description|
|:---|:--|:---|
| [autosplit](/support/docs/deep-dive-into-hyperexecute-yaml/#autosplit) | Boolean | Autosplit utilizes an AI-based algorithm to intelligently distribute your discovered tests among concurrent virtual machines (VMs). It takes into account the previous test runs and statuses to achieve the most optimal distribution of tests. By doing so, it maximizes the efficiency and effectiveness of your test execution process. <br /> Default value is `false`. |
| [concurrency](/support/docs/deep-dive-into-hyperexecute-yaml/#concurrency) | Integer | Indicates the number of concurrent sessions on HyperExecute. |
| [testDiscovery](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery) | Map  | This key is used to locate or discover relevant tests via class names, filters, file names, etc. |
| [testRunnerCommand](/support/docs/deep-dive-into-hyperexecute-yaml/#testrunnercommand) | String | A command used to run a single test entity in isolation.This entity could be a file , module, feature or scenario. |

## Matrix Mode Parameters

| Key | Type | Description|
|:---|:--|:---|
| [matrix](/support/docs/deep-dive-into-hyperexecute-yaml/#matrix) | String | A matrix allows you to create multiple tasks by performing variable substitutions in a single job definition. |
| [combineTasksInMatrixMode](/support/docs/deep-dive-into-hyperexecute-yaml/#combinetasksinmatrixmode) | Boolean | This flag is passed in matrix mode to run the (matrix-multiplied) combinations as scenarios in the specified number of HyperExecute machines, instead of 1 machine per matrix-combination.|
| [testSuites](/support/docs/deep-dive-into-hyperexecute-yaml/#testsuites) | String | A command to run the tests that were mentioned in the scenario key for matrix based test execution. |

## Hybrid Mode Parameters

| Key | Type | Description|
|:---|:--|:---|
| [parallelism](/support/docs/deep-dive-into-hyperexecute-yaml/#parallelism) | Integer | Parallelism defines number VMs to be spawned in case of [`hybrid`](/support/docs/hyperexecute-hybrid-strategy/) mode, if the user is not defining the parallelism then he must define platform specific parallelism (win , mac and linux). If both are defined the preference will be given to platform base parallelism |
| [macParallelism](/support/docs/deep-dive-into-hyperexecute-yaml/#macparallelism) | Integer | It defines number of mac VM to be spawned for job. |
| [winParallelism](/support/docs/deep-dive-into-hyperexecute-yaml/#winparallelism) | Integer | It defines number of win VM to be spawned for job. |
| [linuxParallelism](/support/docs/deep-dive-into-hyperexecute-yaml/#linuxparallelism) | Integer | It defines number of linux VM to be spawned for job. |
| [testRunnerCommand](/support/docs/deep-dive-into-hyperexecute-yaml/#testrunnercommand) | String | A command used to run a single test entity in isolation.This entity could be a file , module, feature or scenario. |
| [macTestRunnerCommand](/support/docs/deep-dive-into-hyperexecute-yaml/#mactestrunnercommand) | String | Test runner command for MAC. | 
| [winTestRunnerCommand](/support/docs/deep-dive-into-hyperexecute-yaml/#wintestrunnercommand) | String | Test runner command for Windows. |
| [linuxTestRunnerCommand](/support/docs/deep-dive-into-hyperexecute-yaml/#linuxtestrunnercommand) | String | Test runner command for Linux. |

## Generating a HyperExecute YAML 

You can also generate the HyperExecute YAML directly from the HyperExecute Portal. To accomplish this, follow the below mentioned steps:

**Step 1:**  Go to [HyperExecute dashboard](https://hyperexecute.lambdatest.com/hyperexecute), click on the **Help Center**  and select **Generate YAML** from the dropdown.  

<img loading="lazy" src={require('../assets/images/hyperexecute/yaml/1.png').default} alt="Image"  className="doc_img"/>

**Step 2:** Select your preferred test automation framework.

<img loading="lazy" src={require('../assets/images/hyperexecute/yaml/2.png').default} alt="Image" className="doc_img"/>

**Step 3** You will be redirected to the configuring section, where you can configure the HyperExecute YAML parameters. Click on **Generate YAML** button. 

<img loading="lazy" src={require('../assets/images/hyperexecute/yaml/3.png').default} alt="Image" className="doc_img"/>

**Step 4:**  Once done, you can download the YAML file using the small icon on top. Alternatively, you can copy the contents of the file and modify them further according to your needs on your favorite IDE.  

<img loading="lazy" src={require('../assets/images/hyperexecute/yaml/4.png').default} alt="Image" className="doc_img"/>

> HyperExecute supports multiple languages and testing frameworks. See the comprehensive list & samples [here](/support/docs/hyperexecute-supported-languages-and-frameworks/).


## Sample HyperExecute YAML
A sample HyperExecute YAML file looks like this:

```bash
---
version: 0.1
runson: win
testSuiteTimeout: 65
autosplit: true
retryOnFailure: true
maxRetries: 2
concurrency: 1

env:
  CACHE_DIR: m2_cache_dir
  TARGET_OS: Windows 10

# Dependency caching for Windows
cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - ${CACHE_DIR}

# shell: bash

pre:
  # Create the Cache directory
  - mkdir -p m2_cache_dir
  # Download and install packages in the CACHE_DIR.
  # Skip execution of the tests in the pre step
  - mvn -Dmaven.repo.local=${CACHE_DIR} -Dmaven.test.skip=true clean install

testDiscovery:
  type: raw
  mode: dynamic
  command: grep 'public class' src/test/java/hyperexecute/*.java | awk '{print$3}'

testRunnerCommand: mvn `-Dplatname=win `-Dmaven.repo.local=m2_cache_dir `-Dtest=$test test site surefire-report:report
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
      Deep Dive into HyperExecute YAML
      </span>
    </li>
  </ul>
</nav>