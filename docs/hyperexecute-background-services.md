---
id: hyperexecute-background-services
title: Background Services in HyperExecute
hide_title: true
sidebar_label: Background Services
description: This documentation will help you 
keywords:
- hyperexecute background services
url: https://www.lambdatest.com/support/docs/hyperexecute-background-services/
site_name: LambdaTest
slug: hyperexecute-background-services/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Background Services",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-background-services/"
        }]
      })
    }}
></script>

# Background Services

Background Services is a feature of HyperExecute which is generally used to run the long running **Application Servers**. You can trigger the background services by using either the `background` or `backgroundDirectives` property in the [HyperExecute YAML](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#background) file.

This feature is useful for the following cases:

- Web Applications or Servers.
- Running databases.
- Providing file sharing or streaming services.
- Running messaging or chat applications.
- Providing APIs for other applications to use.

<!-- - **Generating Reports :**  Background services can be used to generate reports in the background. This can help to save the user time and effort, as they do not have to manually generate the reports.

- **Monitoring Systems :** Background services can be used to monitor systems in the background. This can help to identify any problems with the system early on, so that they can be fixed before they cause any major issues. -->

<!-- - **Flexibility :** You can use a YAML file to define a variety of background services, including HTTP requests, JavaScript functions, Python scripts, and Bash scripts. This gives you a lot of flexibility in how you use background services.

- **Efficiency :** Background services can be a more efficient way to run long-running tasks. This is because they can continue to run even when you are not using the HyperExecute dashboard. -->

## Enable Background Service
***

There are two methods to enable the **Background Service** from the HyperExecute YAML file:

### 1. Using `backgroundDirectives`

```bash
backgroundDirectives:
  shell: bash
  commands:
    - name: YOUR_SERVICE_NAME
      command: npx static-server
    - name: Database
      command: mysql-server
```
The **`shell`** property defines the terminal it should use to run the background service.

The **`command`** property specifies the command to be executed in the background.

The **`name`** property specifies the name of your Background Service.

### 2. Using `background`

```bash
background:
  - npx static-server
  - mysql-server
```
<!-- If background command fails, then the whole task will be marked as a fail -->

## Background Service Logs
***

To check the background service logs, follow the below mentioned steps:

**Step 1:** After executing your job, go to the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute/jobs) to check the status of the job.

**Step 2:** Click on the **Background Service** button.
<img loading="lazy" src={require('../assets/images/hyperexecute/background-service/Step2.webp').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

**Step 3:** Click on the desired **background service** you have triggered to check its logs.
<img loading="lazy" src={require('../assets/images/hyperexecute/background-service/Step3.webp').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Sample YAML File
***

```bash
---
version: 0.1
globalTimeout: 100
testSuiteTimeout: 90
testSuiteStep: 90
retryOnFailure: false
runson: ${matrix.os}
cypress: true
maxRetries: 0
parallelism: 1
concurrency: 2
autosplit: true

pre:
  - npm install

cacheKey: '{{ checksum "package.json" }}'
cacheDirectories:
  - node_modules

matrix:
   os: [win]
   browser: ["chrome-103.0","chrome-104.0","chrome-105.0"]

#highlight-next-line
background:
#highlight-next-line
  - npx static-server
  #highlight-next-line
  - mysql-server

testDiscovery:
  mode: dynamic
  type: raw
  command: ls cypress/integration | sed -n 1,'10p'

testRunnerCommand: npx cypress run  --spec ./cypress/integration/$test --browser=${matrix.browser} --headed --config video=false

cypressOps:
 Build: "Hyperexecute Cypress Sample Build"
 Tags: ["Hyperexecute","Cypress", "Windows", "Hybrid", "V9"]
 BuildTags: ["Hyperexecute-Cypress"]

jobLabel: [cypress-v9, hybrid]
```