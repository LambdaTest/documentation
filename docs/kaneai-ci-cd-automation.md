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

## GithubActions sample
Here is a sample that you can use on how to integrate the API with GithubActions in your Github repository:

**Step 1: Create a GitHub Actions Workflow YAML File**
In your Git repository, navigate to .github/workflows/ and create a file named sanity-test.yml.

**Step 2: Sample for yml file**
In below sample, we are executing a test run using test_run_id and then verifying the result for it using HyperExecute job status API. You can find more details on HyperExecute APIs (here)[https://www.lambdatest.com/support/api-doc/?key=hyperexecute] and update the API in the .yml file based on your needs.

```yml
name: Run Sanity Tests on LambdaTest

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  sanity-test:
    runs-on: ubuntu-latest

    steps:
      - name: Trigger Sanity Test on LambdaTest
        id: trigger-test
        run: |
          echo "Triggering sanity tests on LambdaTest"
          response=$(curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \
            --header 'accept: application/json' \
            --header 'Content-Type: application/json' \
            --header 'Authorization: Basic <Base64Auth>' \
            --data '{
                "test_run_id" : "<test_run_id>",
                "concurrency" : 1,
            }')
          echo "Response: $response"
          job_id=$(echo $response | jq -r '.job_id')
          echo "Job ID: $job_id"
          echo "::set-output name=job_id::$job_id"
      
      - name: Check Test Status
        run: |
          echo "Checking test status"
          job_id=${{ steps.trigger-test.outputs.job_id }}
          sleep 240  # Wait before checking the status
          response=$(curl --location "https://api.hyperexecute.cloud/v2.0/job/$job_id" \
            --header "accept: application/json" \
            --header "Authorization: Basic <Base64Auth>")
            
          echo "Response: $response"
          status=$(echo $response | jq -r '.data.status')
          echo "Test status: $status"
          if [[ "$status" != "completed" ]]; then
            echo "Tests failed. Exiting with error."
            exit 1
          fi
          echo "Sanity tests passed successfully."
```

**Step 3: Define Workflow Triggers**
Set the workflow to trigger on push and pull_request events (you can modify the trigger based on your needs) under "on" section of the yaml above.


## Video Explanation

:::tip
The video consists of old configuration with Test Plans and Builds instead of Test Runs. Please keep this in mind while going through the video. The video will be updated soon.
:::

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/output.mp4').default} type="video/mp4" />
</video>
