---
id: hyperexecute-background-services
title: Background Services
hide_title: false
sidebar_label: Background Services
description: This documentation will help you 
keywords:
- hyperexecute background services
url: https://www.testmuai.com/support/docs/hyperexecute-background-services/
site_name: LambdaTest
slug: hyperexecute-background-services/
canonical: https://www.testmuai.com/support/docs/hyperexecute-background-services/
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
          "name": "Background Services",
          "item": `${BRAND_URL}/support/docs/hyperexecute-background-services/`
        }]
      })
    }}
></script>
Background Services is a feature of HyperExecute which is generally used to run the long running **Application Servers**. You can trigger the background services by using either the `background` or `backgroundDirectives` property in the [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/#background) file.

This feature is useful for the following cases:

- Web Applications or Servers.
- Running databases.
- Providing file sharing or streaming services.
- Running messaging or chat applications.
- Providing APIs for other applications to use.

## Enable Background Service
There are two methods to enable the **Background Service** from the HyperExecute YAML file:

### 1. Using `backgroundDirectives`

```yaml
backgroundDirectives:
  shell: bash
  commands:
    - name: YOUR_SERVICE_NAME
      command: npx static-server
    - name: Database
      command: mysql-server
```
- `shell`: defines the terminal it should use to run the background service.
- `command`: specifies the command to be executed in the background.
- `name`: specifies the name of your Background Service.

### 2. Using `background`

```yaml
background:
  - npx static-server
  - mysql-server
```
<!-- If background command fails, then the whole task will be marked as a fail -->

## Background Service Logs

To check the background service logs, follow the below mentioned steps:



**Step 1:** After executing your job, go to the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute/jobs) to check the status of the job.

**Step 2:** Click on the **Background Service** button.

**Step 3:** Click on the desired **background service** you have triggered to check its logs.

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/jxrlvsdcnfte?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

## Frequently Asked Questions

<details><summary>Is the service intended to operate within the same Virtual Machine or externally?</summary> Yes, the service will run within the same Virtual Machine. </details>

<details><summary>What is the service's commencement and cessation schedule?</summary> It initiates the execution of all background commands concurrently with the pre-stage and continues until the completion of post-run command execution. </details>

<details><summary>Will the Database, for example, run on a single VM and be accessible for testing on other VMs?</summary> No, the background service can only be accessed from within the same VM.</details>

<details><summary>Will the identical set of background services be initiated within every VM?</summary> Yes, if the same set of background services, such as **`npm run server`**, are establishing HTTP servers on the same port, it is likely that one of the commands will encounter a binding issue and fail. </details>


<!-- <details><summary>Will the identical set of background services be initiated within every VM?</summary>

Yes, if the same set of background services, such as npm run server, are establishing HTTP servers on the same port, it is likely that one of the commands will encounter a binding issue and fail.</details> -->