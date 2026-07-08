# GitHub Actions Pipeline Integration with Hyperexecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.

This document will show you how to integrate GitHub Actions Pipeline with HyperExecute to greatly shorten your test cycles.

## How To Integrate GitHub Actions Pipeline with Hyperexecute

To integrate GitHub Actions Pipeline with HyperExecute, follow the below steps:

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub

### 1. Log into your GitHub account
-  Navigate to the main page of the repository.
-  Under your repository name, click  **Actions**.

### 2. Create a New Workflow
In the left sidebar, click the **New workflow** button.

### 3. Create the GitHub Actions work-flow YAML file:

To create the GitHub Actions pipeline YAML file, follow the sample command below:

```bash
name: HyperExecute
on:
workflow_dispatch:
inputs:
username:
required: true
description: LT Username
accessKey:
description: LT Access Key
required: true

jobs:
HyperExecute:
runs-on: ubuntu-latest
timeout-minutes: 15
strategy:
fail-fast: false
steps:
- name: Checkout sources
uses: actions/checkout@v2

- name: Download CLI and Setting Environment Variables
shell: bash
run: |
curl https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute -o hyperexecute
chmod +x hyperexecute

- name: Executing the Job
shell: bash
run: |
./hyperexecute --user ${{ github.event.inputs.username }} --key ${{ github.event.inputs.accessKey }} --download-artifacts --config yaml/autosplit_linux.yaml
echo "Test completion"
```
- **On:**
  - **Workflow_dispatch:** In the **workflow_dispatch** section, you should declare the pre-defined variables that will be used before running the GitHub Actions PipeLine as an input.
- **Jobs:**
 In the Jobs Section, declare the workflow of the pipeline execution.
  - **runs-on**: Runs-on contains the value of the OS flavor you would like to execute the GitHub Actions Pipeline on.
- **Steps**:
In the steps section, you should declare the execution commands.
  - The first step in the above sample YAML changes the path of the root directory.
  - In the second step it downloads the HyperExecute CLI binary.
  - The third step is the execution command which executes The Hyperexecute CLI binary. This contains TestMu AI username, access key, and path of the Yaml created for Hyperexecute. You can find more information on this [here.](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/)

### 4. Run the Workflow
To run the new pipeline that you just created, click the **Run workflow** button on the workflow page.

**Below is an example of how a test that is run on the GitHub Actions pipeline gets executed:**

**Below is an example of a Hyperexecute job that was triggered through the above pipeline:**

>
**Run your tests at speeds never seen before. Happy testing! :)**
