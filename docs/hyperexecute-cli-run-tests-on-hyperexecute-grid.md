---
id: hyperexecute-cli-run-tests-on-hyperexecute-grid
title: HyperExecute CLI - Run test on HyperExecute Grid
hide_title: true
sidebar_label: HyperExecute CLI - Run test on HyperExecute Grid
description: Explains about HyperExecute CLI
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
url: https://www.lambdatest.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/
site_name: LambdaTest
slug: hyperexecute-cli-run-tests-on-hyperexecute-grid/
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
          "item": "https://www.lambdatest.com/support/docs/getting-started-with-hyperexecute/"
        }]
      })
    }}
></script>


# HyperExecute CLI 

`HyperExecute CLI` is a command line interface that is required to run tests on HyperExecute. This page outlines all you need to know about the CLI and also explains about the different flags & functionalities supported by the HyperExecute CLI.

***

### Downloading the HyperExecute CLI

You can download the `HyperExecute CLI` for your OS from the links given below :

| Platform | Download Link |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

## HyperExecute CLI Supported Flags 

HyperExecute CLI provides different command-line flags that let you control the HyperExecute platform as per your customised requirements. You can run `hyperexecute.exe --help` on your terminal to explore the different flags.

<img loading="lazy" src={require('../assets/images/hyperexecute/cli/cli-help.png').default} alt="Image"  className="doc_img"/>

***

The various flags that are supported are listed below. 

| Flags | Type | Description
|---|---|---|
| [-h, --help](#-h---help) | NA | Help for hyperexecute. |
| [--version](#--version) | NA | Prints the HyperExecute CLI version. |
| [-u, --user](#-u---user) | string | LambdaTest username. |
| [-k, --key](#-k---key) | string | LambdaTest Access Key. |
| [--concurrency](#--concurrency) | Numerical | Indicates the number of concurrent sessions on HyperExecute. | 
| [--config](#--config) | string | Custom location for hyperexecute.yaml. |
| [--no-track](#--no-track) | NA | Stops updating the progress of the uplodaed jobs. |
| [--download-artifacts](#--download-artifacts) | NA | Whether artifacts have to be downloaded or not. |
| [--preserve-payload](#--preserve-payload) | string | Preserves the job payload after its successful completion. |
| [analyze](#analyze) | NA | Shows the project description of the user. |
| [-t, --target-directory](#-t---target-directory) | string | Directory where the test script has to be uploaded. |
| [--target-path](#--target-path) | string | Upload the files and folders as part of the suite payload. |
| [-z, --use-zip](#-z---use-zip) | string | Path of the zip file that needs to be uploaded. |
| [--verbose](#--verbose) | NA | Logging of every proxy request to stdout. |
| [--vars](#--vars) | string |  Method used to name keys. |

*** 

### `-h, --help`
You can run this command if you need any help in understanding the definition of the flags on the CLI itself. However, if you need any further assistance we're just a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**ping**</span> away. 
```bash
--help
```
***
### `--version`
This flag indicates the version of HyperExecute CLI binary that you are running on your system. 
```bash
--version 
```
***
### `-u, --user`
The username of your LambdaTest account. 
```bash
--user "randomdeveloper"
```
***
### `-k, --key`
The access key of your LambdaTest account. To find out how to retrieve your access key, visit [this page](/support/docs/hyperexecute-guided-walkthrough/#hyperexecute-dashboard).
```bash
--key "your_access_key"
```
***
### `--concurrency`
This flag allows you to define the number of concurrent sessions running on HyperExecute. For more information on concurrency, go to [this page](/support/docs/hyperexecute-auto-split-strategy/).
```bash
--concurrency 2
```
***
### `--config`

This flag allows you to enter a custom location where you can download the HyperExecute YAML file. To learn more about the HyperExecute YAML, visit [this page](/support/docs/deep-dive-into-hyperexecute-yaml/).  
```bash
--config "/home/usera/work/yaml/"  
```
***
### `--no-track`
You can track the progress of your uploaded jobs with HyperExecute. However, this flag allows you to opt out of receiving those updates. 

```bash
--no-track
```
***

### `--download-artifacts`
This flag allows you to download all the test related results that are generated by your testing framework. You can use this key if you want to download the artifacts. 
  - **--download-artifacts-path**: In case you want the artifacts to be downloaded to a specific directory, please provide the exact path followed by the flag as shown in the example below.

```bash
--download-artifacts-path "/home/usera/work/yaml/artifacts/"
```
***
### `--preserve-payload`
This flag allows you to preserve the job payload after the job is completed successfully. 
```bash
--preserve-payload
```
***

### `analyze`
This flag runs **HyperExecute Analyze**, which is a language and environment detection tool used to render every language and framework detail the user has in his project, which includes finding private dependencies.

```bash
hyperexecute analyze
```

***

### `-t, --target-directory`
<!-- You can choose the directory where the test scripts have to be uploaded by using this flag.   -->

The `targetDirectory` option in the HyperExecute CLI specifies the directory where the output of the executed command will be stored. If this option is not specified, the output will be stored in the current working directory.

```bash
--target-directory "/home/usera/work/yaml/scripts/"
```
***

### `--target-path`
<!-- You can choose the files and folders that will be uploaded as a payload by using this flag.   -->

The `target-path` flag allows you to selectively upload specific files and folders as part of the suite payload. This can be used for streamlining the uploading process and ensuring that only relevant files are included in the payload.
It can also be useful if a user wants to run tests in a monorepo for multiple services.

```bash
--target-path "src/test-suite/**"
```
***

### `-z, --use-zip`
This flag allows you to indicate the path of the zip file that needs to be uploaded for your tests to run. 
```bash
--use-zip "/home/usera/work/yaml/zip/"
```
***

### `--verbose`
This flag allows you to log all of your proxy requests to the output section (stdout). 
```bash
--verbose 
```
***

### `--vars`
This method allows you to name your variables. It helps you optimize the content of your YAML file by allowing for more flexibility. 
```bash
--vars "org=Lambdatest" --vars "product=HyperExecute"
```
***

## Running HyperExecute CLI 

In order to trigger your test on Hyperexecute, just need to use the following command. Please replace the placeholder values with your details. 

``` bash
./hyperexecute --user <your_username> --key <your_access_key> --config <your_yaml_file_name>
```

> **Note**: If you're running on a minimal alpine image, please make sure to install essential linux dependencies for HyperExecute CLI to work. 
(An example with our sample repo has been given below):
  ``` bash
  apk add libc6-compat git bash
  git clone https://github.com/LambdaTest/behave-selenium-hyperexecute-sample.git
  cd behave-selenium-hyperexecute-sample/
  wget https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute
  chmod +x hyperexecute
  ./hyperexecute --user <lt_user> --key <lt_access_key> --config yaml/win/behave_hyperexecute_autosplit_sample.yaml
  ```

*** 

### `.gitignore` & `.hyperexecuteignore` 

The HyperExecute CLI binary ignores all the files listed in the `.gitignore` file during the testing process. 

We also provide a similar functionality using te `.hyperexecuteignore`. [Learn More](/support/docs/hyperexecute-gitignore/)

> Feel free to go over the [frequently asked questions](/support/docs/hyperexecute-cli-faqs/) about the HyperExecute CLI.

## Running HyperExecute CLI in Quiet Mode

Each time a job is run in Hyperexecute, a large number of logs are produced. These logs are sometimes beneficial for thorough debugging and analysis, it occasionally overwhelms Continuous Integration (CI) systems with an excessive amount of logs, especially when handling a large number of test executions. Hyperexecute provides a **"Quiet mode"** as a solution to this issue and to give users more control over the logging output. By only displaying significant updates during the test execution, this enables you to run tests with less logs.

### Enabling Quiet Mode using CLI
First, you need to paas these commands in CLI or terminal to enable the **Quiet Mode** and then trigger the command to execute your job.

For macOS / Linux:

```bash
env | grep CI
# Used to check if the CI variable is set to true or not

export CI=true
# If it's not set to true, then use this command to set as true
```

For Windows:

```bash
env | grep CI
# Used to check if the CI variable is set to true or not

set CI=true
# If it's not set to true, then use this command to set as true
```

#### Output

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/quiet-mode.webp').default} alt="Image" width="1350" height="619" className="doc_img"/>
