# Semaphore Integration with HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Semaphore CI/CD is a cloud-based platform that helps engineering teams of all sizes build, test, and deploy their software faster and more reliably. It provides a powerful and flexible way to automate your entire CI/CD pipeline, from code builds to unit tests to production deployments. It is easy to get started with and use, even if you're new to CI/CD. It offers a wide range of features and integrations, so you can customize your pipelines to meet the specific needs of your team and project.

This document will show you how to integrate Semaphore CI/CD with HyperExecute to greatly shorten your test cycles.

## How to Integrate Semaphore with HyperExecute

To integrate Semaphore Pipeline with HyperExecute, follow the below steps:

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub

**Step 1:** Go to the [Semaphore CI/CD](https://semaphoreci.com/) website and login to the site using GitHub or Bitbucket.

**Step 2:** Click on **Choose Repository** button.

**Step 3:** Select the desired repository and click on **Next** button.

**Step 4:** Click on **Continue to workflow setup** button.

**Step 5:** Select the  **Customize** button for custom setting in the workflow.

**Step 6:** In the #Job1 add the below mentioned script. Make sure to replace the `username` and `key` with your TestMu AI [UserName and Access Key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/).

```bash
curl -O https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute
chmod +x hyperexecute
./hyperexecute --user <username> --key <key> --config <file>
```

Click on **Run the workflow** button.

- Logs of the Pipeline executed.

- Output in the [HyperExecute](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs) Dashboard

## Sample Workflow File

```bash
version: 1

image: ubuntu:latest  # Adjust for macOS if needed

stages:
- download  # Descriptive stage name
- run-tests  # Descriptive stage name

jobs:
download:  # Descriptive job name
stage: download
tasks:
- name: Download Hyperexecute CLI  # Descriptive task name
command: wget https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute
- name: Make Hyperexecute executable  # Descriptive task name
command: chmod u+x hyperexecute

run-tests:  # Descriptive job name
stage: run-tests
depends_on: download  # Specify dependency on download job
tasks:
- name: Run Hyperexecute Tests  # Descriptive task name
command: ./hyperexecute --user <your_username> --key <your_access_key> --config <RELATIVE_PATH_OF_YOUR_YAML_FILE_path>
```
