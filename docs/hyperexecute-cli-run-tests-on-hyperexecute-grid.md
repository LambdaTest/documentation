---
id: hyperexecute-cli-run-tests-on-hyperexecute-grid
title: HyperExecute CLI - Run test on HyperExecute
hide_title: false
sidebar_label: HyperExecute CLI - Run test on HyperExecute
description: Explains about HyperExecute CLI
keywords:
  - testmu ai automation
  - testmu ai hyperexecute
  - hyperexecute automation grid
  - hyperexecute online
  - online hyperexecute
  - hyperexecute automation grid online
  - testmu ai hypterest tutorial
  - hyperexecute getting started
  - testmu ai hyperexecute getting started
  - hyperexecute automation testing
  - hyperexecute matrix execution
  - hyperexecute autosplit execution
  - hyperexecute auto-split execution
url: https://www.testmu.ai/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/
site_name: LambdaTest
slug: hyperexecute-cli-run-tests-on-hyperexecute-grid
canonical: https://www.testmu.ai/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/
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
          "name": "Getting Started With HyperExecute on TestMu AI",
          "item": `${BRAND_URL}/support/docs/getting-started-with-hyperexecute/`
        }]
      })
    }}
></script>
`HyperExecute CLI` is a command line interface that is required to run tests on HyperExecute. This page outlines all you need to know about the CLI and also explains about the different flags & functionalities supported by the HyperExecute CLI.

> HyperExecute CLI credentials (access keys, API tokens, etc.) are private and confidential. A system compromise may result in their unauthorized disclosure; therefore, you must secure the machine running the <BrandName />-HyperExecute CLI. Do not share or expose credentials in public code, repositories, or environments. In the event of a compromise, you are solely responsible for immediately revoking and regenerating the credentials. <BrandName /> assumes no liability for any losses arising from failure to comply.

## Download the HyperExecute CLI

You can download the `HyperExecute CLI` for your OS from the links given below :

| Platform | Download Link |
| ---------| --------------------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

## Verifying the Authenticity of the CLI
To ensure the binary you’ve downloaded is genuine and has not been tampered with, you can verify its digital signature or code signing certificate. <BrandName /> signs all official HyperExecute CLI releases for security and integrity assurance.

<Tabs className="docs__val">

<TabItem value="zsh" label="Linux" default>
You can verify the code signature of the binary using the `openssh` command. Download the [Signature](https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute.sig) and [Public Key](https://downloads.lambdatest.com/hyperexecute/linux/public_key.pem), keep it with your CLI, and paste the location in the below command:

```bash
openssl dgst -sha256 -verify <PUBLIC_KEY_PATH> -signature <SIGNATURE_PATH> <CLI_BINARY_PATH>
```

<img loading="lazy" src={require('../assets/images/hyperexecute/cli/linux-verification.png').default} alt="Image"  className="doc_img"/>

</TabItem>

<TabItem value="bash" label="macOS" default>
You can verify the code signature of the binary using the `codesign` command. In your terminal run the following command:

```bash
codesign -dvvv <PATH_TO_CLI>
```

<img loading="lazy" src={require('../assets/images/hyperexecute/cli/mac-verification.png').default} alt="Image"  className="doc_img"/>

</TabItem>

<TabItem value="powershell" label="Windows" default>

**Step 1:** Locate the downloaded CLI binary (e.g., hyperexecute.exe). <br />
**Step 2:** Right-click on the file and select Properties. <br />
**Step 3:** Go to the Digital Signatures tab. <br />
**Step 4:** Select the listed signature and click Details. <br />
**Step 5:** Click View Certificate → Details to inspect the certificate information. <br />

This certificate should display <BrandName />, Inc. as the verified publisher.

<img loading="lazy" src={require('../assets/images/hyperexecute/cli/windows-verification.png').default} alt="Image"  className="doc_img"/>

</TabItem>
</Tabs>

## HyperExecute CLI Supported Flags 

HyperExecute CLI provides different command-line flags that let you control the HyperExecute platform as per your customised requirements. You can run `hyperexecute.exe --help` on your terminal to explore the different flags.

<img loading="lazy" src={require('../assets/images/hyperexecute/cli/cli-help.png').default} alt="Image"  className="doc_img"/>

The various flags that are supported are listed below. 

| Flags | Type | Description|
|-------|------|------------|
| [analyze](#analyze) | NA | Analyzes the language and environment supported in your project.| 
| [completion](#completion) | NA | Generates the autocompletion script for HyperExecute for the specified shell. |
| [serve](#serve) | NA | Starts a server for HyperExecute info APIs |
| [update](#update) | NA | Update the HyperExecute Binary Version |
| [--add-testids](#--add-testids) | NA | Add test ids in job summary. |
| [--auto-proxy](#--auto-proxy) | NA | Use detected system proxy.|
| [--concurrency](#--concurrency) | Numerical | Indicates the number of concurrent sessions on HyperExecute. | 
| [--config](#--config) | string | Custom location for hyperexecute.yaml. |
| [--disable-updates](#--disable-updates) | NA | Disable auto update |
| [--download-artifacts](#--download-artifacts) | NA | Download the artifacts for a job. |
| [--download-artifacts-path](#--download-artifacts-path) | string | Path of the directory to download artifacts for a job |
| [--download-artifacts-zip](#--download-artifacts-zip) | NA | Download the artifacts for a job as a zip. |
| [--download-logs](#--download-logs) | NA | Downloads console logs of your every tests of a job. | 
| [--download-report](#--download-report) | NA | Whether reports have to be downloaded or not. |
| [--force-clean-artifacts](#--force-clean-artifacts) | NA | Download the updated artifacts of your job. |
| [-h, --help](#-h---help) | NA | Help for hyperexecute. |
| [--job-secret-file](#--job-secret-file) | string | Enter your secrets file path |
| [-k, --key](#-k---key) | string | <BrandName /> Access Key. |
| [--labels](#--labels) | string | Incorporates the labels in your job. |
| [--no-track](#--no-track) | NA | Stops updating the progress of the uplodaed jobs. |
--onprem-host
| [--preserve-payload](#--preserve-payload) | string | Preserves the job payload after its successful completion. |
| [--runson](#--runson) | string | (comma-separated values of) OS on which the tests should run. |
| [-s --scan](#-s---scan) | NA | Runs the network logs |
| [--server-port](#--server-port) | string | Port number for the server (default "9191") |
--static-data-filter
| [-t, --target-directory](#-t---target-directory) | string | Directory where the test script has to be uploaded. |
| [--target-path](#--target-path) | string | Upload the files and folders as part of the suite payload. |
| [--tests-per-tunnel](#--tests-per-tunnel) | INT | Run the number of tests via tunnel. |
| [-z, --use-zip](#-z---use-zip) | string | Path of the zip file that needs to be uploaded. |
| [-u, --user](#-u---user) | string | <BrandName /> username. |
| [--vars](#--vars) | string |  Method used to name keys. |
| [--validate](#--validate) | NA |  Validate HyperExecute YAML file. |
| [--verbose](#--verbose) | NA | Logging of every proxy request to stdout. |
| [--version](#--version) | NA | Version of the HyperExecute CLI. |

### `analyze`
This flag runs **HyperExecute Analyze**, which is a language and environment detection tool used to render every language and framework detail the user has in his project, which includes finding private dependencies.

```bash
hyperexecute analyze
```

<img loading="lazy" src={require('../assets/images/hyperexecute/cli/analyze.png').default} alt="Image"  className="doc_img"/>

***

### `completion`
This flag generates the autocompletion script for HyperExecute for the specified shell.

```bash
hyperexecute completion
```

<img loading="lazy" src={require('../assets/images/hyperexecute/cli/completion.png').default} alt="Image"  className="doc_img"/>

***

### `serve`
This flag starts a server for HyperExecute info APIs.

```bash
hyperexecute --user USER_NAME --key ACCESS_KEY serve
```

***

### `update`
This flag updates the hyperexecute binary version.

```bash
hyperexecute update
```

***

### `--add-testids`
This flag will add the test ids of your job in the result.json file that gets generated after your test execution.

```bash
hyperexecute --add-testids
```

***

### `--auto-proxy`
This flag use detected system proxy. It identifies and sets proxies including http_proxy and https_proxy variables.

```bash
hyperexecute --auto-proxy
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
--config "/home/users/work/yaml/"  
```
***

### `--disable-updates`
This flag allows you to disable the auto updation of your HyperExecute binary.

***

### `--download-artifacts`
This flag allows you to download all the test related results that are generated by your testing framework. You can use this key if you want to download the artifacts.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE --download-artifacts`}
  </CodeBlock>
</div>

:::note
- For Espresso with private devices HyperExecute can download user generated artefacts.
:::

***

### `--download-artifacts-path`
In case you want the artifacts to be downloaded to a specific directory, please provide the exact path followed by the flag as shown in the example below.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE --download-artifacts-path "PATH_OF_YOUR_SPECIFIED_DIRECTORY"`}
  </CodeBlock>
</div>

***

### `--download-artifacts-zip`
If you want to download the zip file of the artifacts for a job.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE --download-artifacts-zip`}
  </CodeBlock>
</div>

***

### `--download-logs`
This flag allows you to download the detailed console logs of your entire job including your individual tests and your pre and discovery phase.

***

### `--download-report`
This flag allows you to download all the test related results that are generated by your testing framework. You can use this key if you want to download the reports. 

***

### `--force-clean-artifacts`
This flag will download the new artifacts of your job and will store it into the `artifacts` folder. If you have previously downloaded artifacts, it will be renamed as `artifacts-old`. 

***

### `-h, --help`
You can run this command if you need any help in understanding the definition of the flags on the CLI itself. However, if you need any further assistance we're just a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**ping**</span> away. 
```bash
--help
```
***

### `--job-secret-file`

- This flag allows you to specify the Secrets file containing the necessary secrets (credentials, API keys, ) for a particular job.

- The contents of this file will be accessible only within the scope of that specific job execution, enhancing security and streamlining secret management.

- This eliminates the need to store secrets on the service account and prevents their accidental exposure through the `--vars` flag.

```bash
--job-secret-file <RELATIVE_PATH_OF_YOUR_SECRET_FILE>
```

#### Sample Secret File

```bash title="secretFile.txt"
secret1=value1
secret2=value2
```

:::info
The secrets file contains highly sensitive information and must be strictly excluded from public exposure. Here's how to ensure its security:

**Store Outside the Repository (Recommended)**

- Store the secrets file in a location outside your project repository altogether. This method is more secure as it automatically gets excluded from your code scripts zip file.

**Exclude from Version Control**

- Adding the relative path of the file (in which you have stored your secret data) to your [`.gitignore` or `.hyperexecuteignore`](/support/docs/hyperexecute-gitignore/) file. This prevents accidental inclusion of the file in your code repository.
:::

***

### `-k, --key`
The access key of your <BrandName /> account. To find out how to retrieve your access key, visit [this page](/support/docs/hyperexecute-guided-walkthrough/#hyperexecute-dashboard).

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`--key ${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

***

### `--labels`
This flag allows you to pass the labels of your Job. 
```bash
--labels "testing"
```
***

### `--no-track`
You can track the progress of your uploaded jobs with HyperExecute. However, this flag allows you to opt out of receiving those updates. 

```bash
--no-track
```
***

### `--preserve-payload`
This flag allows you to preserve the job payload after the job is completed successfully. 
```bash
--preserve-payload
```
***

### `--runson`
This flag overrides the defined OS value in your YAML file's [`runson`](/support/docs/deep-dive-into-hyperexecute-yaml/#runson) flag. You can also define multiple values for OS (comma separated) in the case of [Matrix](/support/docs/hyperexecute-matrix-multiplexing-strategy/) and [Hybrid](/support/docs/hyperexecute-hybrid-strategy/) mode execution.

In case of [AutoSplit](/support/docs/hyperexecute-auto-split-strategy/) mode:

```bash
--runson linux
```

In case of [Matrix](/support/docs/hyperexecute-matrix-multiplexing-strategy/) or [Hybrid](/support/docs/hyperexecute-hybrid-strategy/) mode:

```bash
--runson linux,win,win11,mac,mac13
```

***

### `-s, --scan`
This flag runs the network logs in your local machine console . 

```bash
--scan
```

<img loading="lazy" src={require('../assets/images/hyperexecute/cli/scan.png').default} alt="project-hyperexecute" className="doc_img "/>

***

### `--server-port`
The `--server-port` flag is used to specify the port number that the HyperExecute server will use for communication. This can be useful if you need to run the server on a specific port due to network configurations or to avoid port conflicts with other applications.

```bash
--server-port=8080
```

***

### `-t, --target-directory`
<!-- You can choose the directory where the test scripts have to be uploaded by using this flag.   -->

The `targetDirectory` option in the HyperExecute CLI specifies the directory where the output of the executed command will be stored. If this option is not specified, the output will be stored in the current working directory.

```bash
--target-directory "/home/users/work/yaml/scripts/"
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

### `--tests-per-tunnel`

This flag allows you to run a certain number of tests via tunnel. The default maximum number of tests is 10. 

```bash
--tests-per-tunnel 5
```
***

### `-z, --use-zip`
This flag allows you to indicate the path of the zip file that needs to be uploaded for your tests to run.
Let's say you already have a zipped payload that you want to upload, so you can provide the path of that payload and upload it.

Whenever you zip your test files, it creates a folder, let's say **tests.zip**. Now, when this zip folder is unarchived, HyperExecute searches for a file named **`hyperexecute.yaml`**.

In another scenario, suppose you first created a folder. Inside that folder, you put all your required test files and then zip that folder (say **folder.zip**). When this zip folder is unarchived, HyperExecute will again search for the **`hyperexecute.yaml`** file, which in this case won't be available as it will be inside the folder, which will throw an error.

```bash
--use-zip "/home/users/work/yaml/zip/"
```
***

### `-u, --user`
The username of your <BrandName /> account. 

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`--user ${ YOUR_LAMBDATEST_USERNAME()}`}
  </CodeBlock>
</div>

***

### `--vars`
This method allows you to name your variables. It helps you optimize the content of your YAML file by allowing for more flexibility.

You can specify the email address for sharing [reports](/support/docs/hyperexecute-reports/) or [artifacts](/support/docs/hyperexecute-artifacts/) in a YAML configuration file using a variable. This allows you to dynamically set the email address and pass it via CLI, providing more flexibility than hardcoding the email address in the YAML file. Learn about this in [detail](/support/docs/hyperexecute-email-reports/#how-to-dynamically-set-your-email-address).
```bash
--vars "org=Lambdatest" --vars "product=HyperExecute" --vars "email=xyz@abc.com" --vars "email1=abc@xyz.com"
```
***

### `--validate`
The new `--validate` flag in the HyperExecute CLI allows you to quickly check the syntax and structure of your YAML file without running any tests. Simply pass the `--validate` flag with your YAML file, and the CLI will validate its structure and syntax. It will then return a success or error message, helping you identify if the file is correctly formatted or if there are any issues that need attention.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE  --validate`}
  </CodeBlock>
</div>

***

### `--verbose`
This flag allows you to log all of your proxy requests to the output section (stdout). 
```bash
--verbose 
```
***

### `--version`
This flag indicates the version of HyperExecute CLI binary that you are running on your system. 
```bash
--version 
```
***

## Trigger your Test from HyperExecute CLI 

In order to trigger your job on HyperExecute, execute the following command in your terminal. You will need to insert the name of your YAML file in place of the `RELATIVE_PATH_OF_YOUR_YAML_FILE` before running this command.

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
    </CodeBlock>
  </div>

:::tip
In case of macOS, if you get a permission denied warning while executing CLI, simply run `chmod u+x ./hyperexecute` to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General** tab.
:::

:::note
If you're running on a minimal alpine image, please make sure to install essential linux dependencies for HyperExecute CLI to work. 
(An example with our sample repo has been given below):
  ``` bash
  apk add libc6-compat git bash
  git clone https://github.com/LambdaTest/behave-selenium-hyperexecute-sample.git
  cd behave-selenium-hyperexecute-sample/
  wget https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute
  chmod +x hyperexecute
  ./hyperexecute --user <lt_user> --key <lt_access_key> --config yaml/win/behave_hyperexecute_autosplit_sample.yaml
  ```
:::

## Running HyperExecute CLI in Quiet Mode

Each time a job is run in Hyperexecute, a large number of logs are produced. These logs are sometimes beneficial for thorough debugging and analysis, it occasionally overwhelms Continuous Integration (CI) systems with an excessive amount of logs, especially when handling a large number of test executions.

Hyperexecute provides a **"Quiet mode"** as a solution to this issue and to give users more control over the logging output. By only displaying significant updates during the test execution, this enables you to run tests with less logs.

To enable the **Quiet Mode**, you need to paas these commands in your terminal and then trigger the command to execute your job.

<Tabs className="docs__val">
<TabItem value="bash" label="Linux / macOS" default>
  ```yaml
  env | grep CI # Used to check if the CI variable is set to true or not
  export CI=true # If it's not set to true, then use this command to set as true
  ```
</TabItem>

<TabItem value="powershell" label="Windows" default>
  ```yaml
  env | grep CI # Used to check if the CI variable is set to true or not
  set CI=true # If it's not set to true, then use this command to set as true
  ```
</TabItem>
</Tabs>

#### Output

<img loading="lazy" src={require('../assets/images/hyperexecute/cli/cli-execute.png').default} alt="Image" width="1350" height="619" className="doc_img"/>
<br /><br />
> 📕 Use the HyperExecute CLI's [Frequently Asked Questions](/support/docs/hyperexecute-cli-faqs/) to gain more knowledge about it.

