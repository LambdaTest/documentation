# Bitbucket Pipeline Integration

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Bitbucket Pipelines is a CI/CD service that is built into Bitbucket. It enables you to build, test, and even deploy your code automatically based on a configuration file in your repository.

This document will show you how to integrate Bitbucket Pipelines with HyperExecute to greatly shorten your test cycles

### Prerequisites:
-	You need to have a Bitbucket Cloud account.
-	Your workspace must have at least one repository.

## How To Integrate Bitbucket Pipeline with HyperExecute

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub

### 1. Log into your [Bitbucket](https://www.atlassian.com/software/bitbucket/bundle) cloud account.

### 2. Select a Repository
- If you do not have a repository set up yet, select **Repositories** then select **Create your own repository** as shown below.

- Fill in the required information, then select **Create repository**.

### 3. Create Your Pipeline

- In your repository, go to the sidebar on the left and select **Pipelines**

- Click **Create your first pipeline** to scroll down to the template section.

- Select **Starter pipeline**

### 4. Define Your Environment Variables
- In the sidebar, go into your repository settings.
- In the **Pipelines** section, select **Deployments**

- Click on any environment to:
  - Change its name
  - Set environment-specific deployment variables.

- You can define custom variables that you can use in the YAML file. To add a variable, fill in the name, the value, check whether you want to encrypt it by clicking the secured box, and click **Add**.

### 5. Run Your Job
After configuring your environment variables, select **Commit file** at the bottom of your screen to commit  and run your test job.

- You will be redirected to the screen below

**Below is an example of a HyperExecute job that was triggered through the above pipeline:**

## Sample Bitbucket Workflow File

```bash
image: ubuntu:latest  # Adjust for macOS if needed

pipelines:
default:
branches:
- master  # Adjust as needed
steps:
## Download Hyperexecute CLI (descriptive name)
- name: Download Hyperexecute CLI
script: |
wget https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute
chmod u+x hyperexecute

## Run Hyperexecute tests (descriptive name)
- name: Run Hyperexecute Tests
script: |
./hyperexecute --user <your_username> --key <your_access_key> --config <your_yaml_file_path>
```

>
**Run your tests at speeds never seen before. Happy testing! :)**
