---
id: semaphore-integration-with-hyperexecute
title: Semaphore CI Integration With HyperExecute
hide_title: true
sidebar_label: Semaphore
description: Semaphore CI/CD, a cloud-based platform, now seamlessly integrates with TestMu AI HyperExecute for enhanced testing performance.
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - ci/cd tools
  - continuous integration
  - continuous delivery
  - continuous integration tools
  - semaphore ci
url: https://www.testmuai.com/support/docs/semaphore-integration-with-hyperexecute/
site_name: TestMu AI
slug: semaphore-integration-with-hyperexecute/
canonical: https://www.testmu.ai/support/docs/semaphore-integration-with-hyperexecute/
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
          "name": "Semaphore Integration",
          "item": `${BRAND_URL}/support/docs/semaphore-integration-with-hyperexecute/`
        }]
      })
    }}
></script>

# Semaphore Integration with HyperExecute

Semaphore CI/CD is a cloud-based platform that helps engineering teams of all sizes build, test, and deploy their software faster and more reliably. It provides a powerful and flexible way to automate your entire CI/CD pipeline, from code builds to unit tests to production deployments. It is easy to get started with and use, even if you're new to CI/CD. It offers a wide range of features and integrations, so you can customize your pipelines to meet the specific needs of your team and project.

This document will show you how to integrate Semaphore CI/CD with HyperExecute to greatly shorten your test cycles.

## How to Integrate Semaphore with HyperExecute

To integrate Semaphore Pipeline with HyperExecute, follow the below steps:

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyp-ci-cd-integration-sample/tree/semaphore" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

**Step 1:** Go to the [Semaphore CI/CD](https://semaphoreci.com/) website and login to the site using GitHub or Bitbucket.

**Step 2:** Click on **Choose Repository** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/semaphore/1.png').default} alt="Image"  className="doc_img"/>

**Step 3:** Select the desired repository and click on **Next** button.
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/semaphore/2.png').default} alt="Image"  className="doc_img"/>

**Step 4:** Click on **Continue to workflow setup** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/semaphore/3.png').default} alt="Image"  className="doc_img"/>

**Step 5:** Select the  **Customize** button for custom setting in the workflow.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/semaphore/4.png').default} alt="Image"  className="doc_img"/>

**Step 6:** In the #Job1 add the below mentioned script. Make sure to replace the `username` and `key` with your <BrandName /> [UserName and Access Key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/).

```bash
curl -O https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute
chmod +x hyperexecute
./hyperexecute --user <username> --key <key> --config <file>
```

Click on **Run the workflow** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/semaphore/5.png').default} alt="Image"  className="doc_img"/>

- Logs of the Pipeline executed.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/semaphore/6.png').default} alt="Image"  className="doc_img"/>

- Output in the [HyperExecute](https://hyperexecute.lambdatest.com/hyperexecute/jobs) Dashboard

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/semaphore/7.png').default} alt="Image"  className="doc_img"/>

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
