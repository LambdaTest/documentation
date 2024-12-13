---
id: kaneai-ci-cd-automation
title: Automating Test Plan Execution with CI/CD on KaneAI
hide_title: false
sidebar_label: Test Automation with CI/CD
description: Automate test plan execution on KaneAI with CI/CD tools like GitHub Actions and Jenkins. Follow our step-by-step guide for seamless integration.
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai guided walkthrough
  - kane ai test plan
  - hyperexecute
  - test plan
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
This guide provides a detailed walkthrough for automating the execution of test plans using CI/CD tools such as GitHub Actions or Jenkins on the KaneAI platform. By following these steps, you can effortlessly integrate test plan executions with your pipelines.

## Prerequisites
- Access to Test Manager.
- A project with KaneAI-generated test cases.
- Credentials for LambdaTest platform.

## Step-by-Step Guide
### Step 1: Navigate to the Test Manager
- Log in to the KaneAI platform and go to the Test Manager page.
- Access the project where the test plan is located.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/image1.png').default} alt="Image" className="doc_img"/>

### Step 2: Locate the 'Test Plans' Section
Inside your selected project, navigate to the Test Plans section. Select the desired test plan for integration or direct triggering from your CI/CD pipeline.

:::tip
A list of test instances with various configurations will be displayed for each test plan.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/image2.png').default} alt="Image" className="doc_img"/>

### Step 3: Copy the Test Plan ID
Open the test plan to view its URL. Copy the Test Plan ID from the URL. This ID will be used in the API call for integration.

#### Example API Call:

```yaml
curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic <Base64Auth>' \
--data '{
    "test_plan_id": "YOUR_TEST_PLAN_ID", #enter test plan id
    "concurrency": 1, # Optional, Default 1
    "title": "UNIQUE_BUILD_NAME", #Optional
    "region": "YOUR_DESIRED_REGION" #eastus, centralindia
}'
```

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/image3.png').default} alt="Image" className="doc_img"/>

#### Example API Response:
```yaml
{
    "jobID": "aea5602b-abcd-1234-abcd-1234abcd1234",
    "testBuildID": "01LAMBDATEST2024KANEAIJ8NPGDP",
    "jobLink": "https://hyperexecute.lambdatest.com/hyperexecute/task?jobId=<job-id>"
}
```

### Step 4: Configure the API Call
Replace `<TestPlanID>` with the actual ID from the URL and set additional optional parameters:

- **Concurrency :** Defaults to 1 if not specified.
- **Title :** Assign a unique job title; a random one will be generated if omitted.
- **Region :** Choose a region such as eastus or centralindia.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/image4.png').default} alt="Image" className="doc_img"/>

### Step 5: Ensure Job Details Are Unique
Confirm that the job title is unique to avoid conflicts. Select a region if you require a specific allocation for your devices.

:::tip Best Practice
Assign clear and descriptive titles to distinguish between jobs.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/image5.png').default} alt="Image" className="doc_img"/>

### Step 6: Authenticate and Trigger the Job
- Provide your LambdaTest username and access key for Basic Authentication.
- Submit the API call to trigger the job. The process will start within seconds.

> **Important :** Keep your credentials secure to maintain platform integrity.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/image6.png').default} alt="Image" className="doc_img"/>

### Step 7: Monitor Test Executions
- Follow the link provided in the API response to view the HyperExecute Job.
- Monitor running executions in real time through the dashboard.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/image7.png').default} alt="Image" className="doc_img"/>

## Video Explanation
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/test-manager/test-plan-ci-cd/output.mp4').default} type="video/mp4" />
</video>