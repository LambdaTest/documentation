# Run Selenium Tests With Google Cloud CI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Google Cloud Platform is one of the market’s leading public cloud providers and offers a variety of management services. Google Cloud Build and Google Cloud Run are two Google Cloud services that use pipelines to automate builds and deployments.

Integrate your Selenium test suites with Google Cloud CI and perform automated cross-browser testing on [online Selenium Grid](https://www.testmuai.com/selenium-automation) over 3000+ real browser environments. With this integration, you can also perform local testing of locally or privately hosted projects and Parallel testing to cut short test execution cycles and achieve faster go-to-market delivery.

## Prerequisites

Before integrating Google Cloud CI with TestMu AI, make sure you have the following things:

1. A GitHub or a BitBucket repository. All the code samples in this documentation can be found at [TestMu AI Google Cloud CI](https://github.com/LambdaTest/Java-TestNG-Selenium) repository on GitHub .

2. To integrate test suites with Google Cloud CI, you would need to set your TestMu AI username and access key in environment variables. You can get them from [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/) by clicking on the Key button from the top-right.

*   **For Windows:**
```
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

*   **For Mac/Linux:**
```
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Integrating A GitHub Repository With Google Cloud CI

To integrate Google Cloud CI with TestMu AI, you will need to fork the above TestMu AI Google Cloud CI repository.

1.  Go to the Google Cloud CI console and select **'Cloud Build'**.

2.  Once you're in the Cloud Build, click on **'Triggers'**.

3.  To use the trigger functionality, you will need to connect your GitHub repository to Google Cloud CI instance. Click on **'Connect Repository'**.

Once you click on Connect Repository, you will need to complete the steps in order to connect your repository.

## Running Single Test Via Google Cloud CI

1. After connecting to the repository, click on **'Create Trigger'**.

* Provide a Trigger name.

*   Select the repository's source and then select the branch.

*   Under the **'Configuration'**, select _**Cloud Build configuration file (yaml or json)**_.

*   In the **'Advanced'** category, click on **'Add Variable'**.

Enter your TestMu AI Username and Access Key in the provided field and then click on **'Create'**.

2.  Your trigger project will be created on the selected Google Cloud CI GitHub repository. To run the single test through Google Cloud CI, click on **'Run'**.

A new build can be seen in the Google Cloud CI console. The current status of this build will be ‘Running’ or ‘Successful’.

You can also view the detailed insights of your test execution on [TestMu AI Automation dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/timeline/).

## Running Parallel Test Via Google Cloud CI

To run parallel tests on TestMu AI cloud, you will need to make minor tweaks in `cloudbuild.yml` file.

```
steps:
- name: gcr.io/cloud-builders/docker
args: ['run' , '-d', '--name=lt', '--network=cloudbuild', 'lambdatest/tunnel', '--user', '${_LT_USERNAME}', '--key', '${_LT_ACCESS_KEY}', '--tunnelName', 'GCloud', '--infoAPIPort', '15000','--load-balanced']
- name: curlimages/curl
args: ['-s', '--retry-connrefused', '--connect-timeout', '5', '--max-time', '5', '--retry', '30', '--retry-delay', '2', '--retry-max-time', '60', 'http://lt:15000/api/v1.0/info']
- name: 'ubuntu'
args: ['sleep', '20']
- name: 'bash'
args: ['ls']
- name: 'maven'
entrypoint: 'mvn'
args: ['test', '-P', 'parallel']
env:
- 'LT_USERNAME=${_LT_USERNAME}'
- 'LT_ACCESS_KEY=${_LT_ACCESS_KEY}'
```

In the above YAML code, you need to add the following command to **args**.

`mvn test -P parallel`

Below is the screenshot of the above-executed parallel tests.

## Running Local Test Via Google Cloud CI

To run local tests on TestMu AI cloud, you will need to make minor tweaks in `cloudbuild.yml` file.

```
steps:
- name: gcr.io/cloud-builders/docker
args: ['run' , '-d', '--name=lt', '--network=cloudbuild', 'lambdatest/tunnel', '--user', '${_LT_USERNAME}', '--key', '${_LT_ACCESS_KEY}', '--tunnelName', 'GCloud', '--infoAPIPort', '15000','--load-balanced']
- name: curlimages/curl
args: ['-s', '--retry-connrefused', '--connect-timeout', '5', '--max-time', '5', '--retry', '30', '--retry-delay', '2', '--retry-max-time', '60', 'http://lt:15000/api/v1.0/info']
- name: 'ubuntu'
args: ['sleep', '20']
- name: 'bash'
args: ['ls']
- name: 'maven'
entrypoint: 'mvn'
args: ['test', '-P', 'local']
env:
- 'LT_USERNAME=${_LT_USERNAME}'
- 'LT_ACCESS_KEY=${_LT_ACCESS_KEY}'
```

Add the below command to **args**.

`mvn test -P local`

Below is the screenshot of the above-executed local tests.

>
That's all! Ship your quality product faster using TestMu AI and Google Cloud CI integration. In case you have any queries for us, feel free to drop them at our 24*7 Customer Chat Support or you can also mail us at [support@testmuai.com](mailto:support@testmuai.com). Happy Testing!
