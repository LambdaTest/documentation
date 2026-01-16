---
id: gocd-integration-with-hyperexecute
title: How to integrate GoCD With HyperExecute
sidebar_label: GoCD
hide_title: true
description: HyperExecute integration with GoCD will help your perform Test automation for your code changes on more than 3000+ real browsers for both mobile and desktop. You can trigger your testing scripts directly from GoCD instance and they would be executed over your HyperExecute Dashboard.
keywords:
  - gocd
  - testmu ai
  - gocd integrations
  - gocd pipelines
  - gocd testmu ai
  - gocd integration with hyperexecute
  - hyperexecute integration with gocd pipelines
  - ci/cd
url: https://www.testmu.ai/support/docs/gocd-integration-with-hyperexecute/
site_name: LambdaTest
slug: gocd-integration-with-hyperexecute
canonical: https://www.testmu.ai/support/docs/gocd-integration-with-hyperexecute/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "GoCD Integration",
          "item": `${BRAND_URL}/support/docs/gocd-integration-with-hyperexecute/`
        }]
      })
    }}
></script>

# GoCD Integration With HyperExecute
***

GoCD, short for "Go Continuous Delivery," is an open-source continuous integration and continuous delivery (CI/CD) server that helps automate and streamline the software development and release process. It is designed to facilitate the efficient and reliable delivery of software from development to production.

This document will show you how to integrate GoCD with HyperExecute to greatly shorten your test cycles.

## How to Integrate with HyperExecute

### Pre-requisite:

- [Download](https://www.gocd.org/download/#osx) the GoCD Server and Agent and unzip the folder.

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyp-ci-cd-integration-sample/tree/gocd" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 1: Start the GoCD Server

- Go to the gocd/bin folder and run the following commands:

  - To start the Server
  ```bash
  ./bin/go-server start
  ```

  - To start the Agent
  ```bash
  ./bin/go-agent start
  ```
- Now type ``http://localhost:8153/`` go in your browser to open the GoCD GUI.

- Click on the New Pipeline Button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gocd/1.png').default} alt="Image"  className="doc_img"/>

### Step 2: Configure the GoCD Pipeline

#### Part 1: Material

- Select the **Material Type**. For the demo purposes, we will be using the Git.

- Enter the **Repository URL** from which you want to set up the project.

- Enter your **Repository branch** name.

- Enter the **Username** and **Password** of your GitHub. (It is required in case the access to the repo needed authentication).

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gocd/2.png').default} alt="Image"  className="doc_img"/>

#### Part 2: Pipeline Name

- Enter your **Pipeline Name**.

#### Part 3: Stage Details

A Stage is a group of Jobs and a Job is a work which needs to be executed.

- Enter your **Stage Details**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gocd/3.png').default} alt="Image"  className="doc_img"/>

#### Part 4: Job and Tasks

- Enter the **Job Name**.

- Enter the below mentioned script in the space provided.

```bash
curl -O https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute
chmod +x hyperexecute
./hyperexecute --user <your_username> --key <your_access_key> --config <RELATIVE_PATH_OF_YOUR_YAML_FILE_name>
```

> Since my default agent is mac I am using darwin CLI in the cURL command. Kindly change it according to your system default agent. <br />
- **Mac** -> darwin <br />
- **Linux** -> linux <br />
- **Windows**-> windows

- Click on **Save + Run This Pipeline** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gocd/4.png').default} alt="Image"  className="doc_img"/>

### Job Running

Now the Job is executed and running. You can check the status of Job in the:

- #### GoCD GUI
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gocd/6.png').default} alt="Image"  className="doc_img"/>

- #### GoCD Console
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gocd/7.png').default} alt="Image"  className="doc_img"/>

- #### HyperExecute Dashboard

After the build is successful, go to your HyperExecute Dashboard and check the output of the triggered Job.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gocd/8.png').default} alt="Image"  className="doc_img"/>

- #### Job Status Passed

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gocd/9.png').default} alt="Image"  className="doc_img"/>

## Sample Workflow File

```xml
<pipeline name="Download-and-Run-Hyperexecute">
  <stage name="Download">
    <job name="Download-Hyperexecute">
      <run on="ubuntu" />  # Adjust for macOS if needed
      <tasks>
        <exec command="wget https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute" />
        <exec command="chmod u+x hyperexecute" />
      </tasks>
    </job>
  </stage>
  <stage name="Run-Tests">
    <job name="Run-Hyperexecute-Tests">
      <run on="ubuntu" />  # Adjust for macOS if needed
      <tasks>
        <exec command="./hyperexecute --user <your_username> --key <your_access_key> --config <RELATIVE_PATH_OF_YOUR_YAML_FILE_path>" />
      </tasks>
    </job>
  </stage>
</pipeline>
```
