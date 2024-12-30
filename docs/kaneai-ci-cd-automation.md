---
id: kaneai-ci-cd-automation
title: Automating Test Runs Execution with CI/CD on KaneAI
hide_title: false
sidebar_label: Test Automation with CI/CD
description: Automate test run execution on KaneAI with CI/CD tools like GitHub Actions and Jenkins. Follow our step-by-step guide for seamless integration.
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai guided walkthrough
  - kane ai test run
  - hyperexecute
  - test run
  - test manager
  - ci/cd
  - jenkins
  - github actions
  - api
  - postman
url: https://www.lambdatest.com/support/docs/kaneai-ci-cd-automation
site_name: LambdaTest
slug: kaneai-ci-cd-automation/
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
          "name": "KaneAI CI/CD Automation",
          "item": "https://www.lambdatest.com/support/docs/kaneai-ci-cd-automation"
        }]
      })
    }}
></script>
This guide provides a detailed walkthrough for automating the execution of test runs using CI/CD tools such as GitHub Actions or Jenkins on the KaneAI platform. By following these steps, you can effortlessly integrate test run executions with your pipelines.

## Prerequisites
- Access to Test Manager.
- A project with KaneAI-generated test cases.
- Credentials for LambdaTest platform.

## Step-by-Step Guide
### Step 1: Navigate to the Test Manager
- Log in to the KaneAI platform and go to the Test Manager page.
- Access the project where the test run is located.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/step1.png').default} alt="Image" className="doc_img"/>

### Step 2: Locate the 'Test Runs' Section & Copy Test run ID
Inside your selected project, navigate to the Test Runs section. Select the desired test run for integration or direct triggering from your CI/CD pipeline.

Open the test run to view its URL. Copy the Test Run ID from the URL. This ID will be used in the API call for integration.

:::tip
A list of test instances with various configurations will be displayed for each test run.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/image2.png').default} alt="Image" className="doc_img"/>

#### Example API Call:

```yaml
curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic <Base64Auth>' \
--data '{
    "test_run_id": "YOUR_TEST_RUN_ID", #enter test run id
    "concurrency": 1, # Optional, Default 1
    "title": "UNIQUE_BUILD_NAME", #Optional
    "region": "YOUR_DESIRED_REGION" #eastus, centralindia
}'
```


#### Sample API Response:

The API response contains the job ID for both jobs created for desktop web tests as well as mobile tests on real devices. Here is a sample response for a test run which contains both app and web test cases:

```yaml
{
    "job_id": "abcd1234-abcd-1234-abcd-1234abcd1234",
    "app_job_id": "abcd1234-abcd-1234-abcd-1234abcd1234",
    "test_run_id": "01LAMBDATEST2024KANEAIJ8NPGDP",
    "job_link": "https://hyperexecute.lambdatest.com/hyperexecute/task?jobId=<job_id>",
    "mobile_job_link": "https://hyperexecute.lambdatest.com/hyperexecute/task?jobId=<app_job_id>"
}
```

### Step 3: Configure the API Call
Replace `<TestRunID>` with the actual ID from the URL and set additional optional parameters:

- **Concurrency :** Defaults to 1 if not specified.
- **Title :** Assign a unique job title; a random one will be generated if omitted.
- **Region :** Choose a region such as eastus or centralindia.

Confirm that the job title is unique to avoid conflicts. Select a region if you require a specific allocation for your devices.


### Step 4: Authenticate and Trigger the Job
- Provide your LambdaTest username and access key for Basic Authentication.
- Submit the API call to trigger the job. The process will start within seconds.

> **Important :** Keep your credentials secure to maintain platform integrity.


### Step 5: Monitor Test Executions
- Follow the link provided in the API response to view the HyperExecute Job.
- Monitor running executions in real time through the dashboard.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/image7.png').default} alt="Image" className="doc_img"/>

## Video Explanation

:::tip
The video consists of old configuration with Test Plans and Builds instead of Test Runs. Please keep this in mind while going through the video. The video will be updated soon.
:::

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/output.mp4').default} type="video/mp4" />
</video>
