---
id: hyperexecute-workflows
title: Workflows in HyperExecute
sidebar_label: Workflows
description: Schedule and orchestrate HyperExecute jobs without a full CI/CD, chain workflows across projects, and parameterize runs with workflow variables.
keywords:
  - LambdaTest HyperExecute
  - HyperExecute Workflows
  - schedule tests
  - connected workflows
  - test chains
url: https://www.lambdatest.com/support/docs/hyperexecute-workflows/
site_name: LambdaTest
slug: hyperexecute-workflows/
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
          "name": "Workflows in HyperExecute",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-workflows/"
        }]
      })
    }}
></script>
Workflows give you the speed, reliability, and platform‑native orchestration of HyperExecute on a schedule. Think of Workflows as a lightweight, cloud-native alternative and companion to CI/CD, with all the functionalities of HyperExecute such as reporting, RCA etc.

## Why Workflows
- **Schedule-first orchestration:** Run regular suites by just connecting your Git repo, without wiring a CI pipeline.
- **Native to HyperExecute:** Leverage JIT infrastructure, smart test discovery/splitting, and rich artifacts in one place.
- **Chainable runs:** Trigger downstream workflows on success to form full test chains across projects.
- **Customizable:** Use Workflow Variables to reuse the same YAML across environments and scenarios.

## How Workflows are Used
Workflows are schedule and platform driven, not commit-driven yet. Workflows can be thought of as UI alternative for CLI-based executions, if your project is available on Git. They’re great for:
- Nightly smoke/regression runs across browsers/devices.
- Scheduled environment checks (staging, pre-prod) before business hours.
- Chaining suites across multiple repositories or projects.

## Prerequisites
- A [HyperExecute Project](/support/docs/hyperexecute-projects/) connected to **GitHub** or **Bitbucket**.
- A HyperExecute YAML present on the specified branch, or provide a Custom YAML during setup. New to YAML? See [Generate YAML](/support/docs/hyperexecute-generate-sample-yaml/) and the [Deep Dive](/support/docs/deep-dive-into-hyperexecute-yaml/).
- Note: Workflows currently work with the [dynamic mode of test discovery](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery).

## Create a Workflow
1) In your Project, click **Setup Workflow**.
2) Enter details:
   - **Workflow name**
   - **Branch name** (source branch containing the YAML)
   - **YAML file path** (path in repo) or add Custom YAML
3) (Optional) Configure the **schedule** or skip it if you want to run workflow manually.
4) (Optional) You can **link your workflow** by selecting existing workflows to trigger automatically after this workflow completes successfully.
5) (Optional) You may also define **Workflow Variables** which can be used in the YAML to customize behavior at runtime for a specific workflow.
6) Click **Finish** and your workflow is ready. Click on Play button in the workflow list to run the job manually.

All jobs appear under the same Project. View jobs from the Project’s **Jobs** tab or by clicking the workflow name to open **Past Jobs** view.

:::note
If you don’t see a job after clicking Run or after the scheduled time, open the workflow and check **Past Occurrences**. Runs that failed to create a job (e.g., due to YAML validation, missing file path, or branch mismatch) are listed there with error details.
:::

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/mm0v54k4vzmb?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
  </div>

## Connected Workflows (Test Chains)
Use Workflow Linking to form test chains. For example, run a daily smoke suite first and trigger a broader regression only if smoke passes. You can link across projects you own to coordinate multi-repo testing.

- Learn the pattern with real examples: [Test Chains](/support/docs/hyperexecute-test-chains/)

## Workflow Variables
Variables let you customize job runs without the need of creating multiple workflows with different YAML configurations for the same project or editing YAML before every run. To set workflow variables for a single workflow, you need to follow the following steps:
1. Create or edit a workflow. On Step 3, turn on **Workflow Variables** and add these keys (`key_1`, `key_2` and `key_3`) in the **Key** column. 
2. For the values of the corresponding keys, you can:
    - **Add single value**: This value will be considered default when workflow runs through schedule. While manually running you can edit the value at runtime too.
    - **Add multiple values**: Among these, the first value will be considered default while running the workflow through schedule. At runtime, you will be able to select any value from all these.
    - **Do not add any value**: You can keep the value of a key empty too and fill it later at runtime. The value will be passed as `null` if you do not add any value at runtime.
3. Once you have added all the keys and their values, save the workflow.
4. You have the flexibility to edit the values for specific keys at the runtime, whenever you are running the workflow manually.

> Please note that the variables added from the workflows dashboard will be automatically added to the YAML file.

<br />
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/workflow/workflow_vars.mp4').default} style={{ height: '300px' }} type="video/mp4" />
</video>

**Maximum Limits:**
- Up to **100 variables per workflow**.
- Up to **25 values per variable**.
- Value length limit: **500 characters** (excluding commas/spaces).

## FAQ
- **Which repos are supported for Projects?** Currently **GitHub** and **Bitbucket**.
- **Is dynamic test discovery required?** Yes, Workflows currently work with the [dynamic mode of test discovery](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery).
- **Can I trigger other workflows automatically?** Yes, via Workflow Linking to build [Test Chains](/support/docs/hyperexecute-test-chains/).
- **Among runtime and workflow variables, what takes precedence?** Runtime value > Workflow‑level defaults.
