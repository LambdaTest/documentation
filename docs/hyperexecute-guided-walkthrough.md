---
id: hyperexecute-guided-walkthrough
title: Guided Walkthrough of HyperExecute
hide_title: false
sidebar_label: Guided Walkthrough 
description: Learn how to manage Jobs, configure tunnels, upgrade subscriptions, and access detailed test and job information. Discover the power of custom report, analytic.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-guided-walkthrough
site_name: LambdaTest
slug: hyperexecute-guided-walkthrough
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
          "name": "Guided Walkthrough of HyperExecute",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-guided-walkthrough/"
        }]
      })
    }}
></script>
This page gives you a guided walkthrough of all the things on the HyperExecute Dashboard and how you can get the most out of the platform once you have successfully [run your first sample Job](/support/docs/hyperexecute-running-your-first-job/). 

## Jobs Page

All the tests on HyperExecute get executed as a Job. All the Jobs can be found on our [Jobs page](https://hyperexecute.lambdatest.com/hyperexecute). Each [Job](/support/docs/hyperexecute-status/#1-job-level-status) has a [`Status`](/support/docs/hyperexecute-status/#3-stage-level-status), a unique `Job Number`, a set of [`Labels`](/support/docs/deep-dive-into-hyperexecute-yaml/#joblabel), info on number of [`Tasks`](/support/docs/hyperexecute-status/#2-task-level-status) executed as part of that Job, and a `Summary` section followed by the details of the `Job Duration` and who initiated the Job.

On this page you have other things such as filters, help center, docs, [secrets management](/support/docs/hyperexecute-how-to-save-and-manage-secrets/) and much more. You can also filter through all of the jobs on the basis of the date, status, type etc.

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/guided-walkthrough/1.png').default} alt="Image"  className="doc_img"/>

> Learn more about [Secrets Management](/support/docs/hyperexecute-how-to-save-and-manage-secrets/), getting [User Name and Access Key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/) from our [Knowledge Base](/support/docs/hyperexecute-knowledge-base/)

### Top Panel
    
<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/guided-walkthrough/3.png').default} alt="Image"  className="doc_img"/>

The top panel contains multiple items:

- **Parallel**: It reflects the number of tasks running parallelly
- **Queued**: It shows number of the tasks queued and are not yet started.
- **Configure Tunnel**: Tunnel is used to ensure the security of your data for private websites. 
- **Announcements**: The latest announcements and updates can be found here.
- **Settings**: Manage all of your account and organisation details in this section.
- **Upgrade**: You can upgrade your LambdaTest subscription from here.
      
*** 

## Job Details Page

You can click on a particular Job to navigate to the Job Details Page.

- On the top you can see all the Job related details like Job Number, Summary etc.
  -   **Job Number** - The Number of your Job.
  -   **Summary** - A brief breakdown of all of your tests on the basis of their status.
  -   **Status** - The status of your Job.
  -   **Created At** - The date of the creation of the Job.  
  -   **User** - Your user details who triggered the Job.
  -   **Job Duration**: The time it took to run your entire Job.
  -   **Test Duration**: The time it took to run your tests.
  -   **Type**: The job type (Selenium, Playwright, etc) along with the mode of the job (AutoSplit or Matrix).
  -   **[Artifacts](/support/docs/hyperexecute-artifacts/)**: Can be used to configure and generate custom reports and artifacts.
  -   **[Report](/support/docs/hyperexecute-reports/)**: A detailed report for your test execution for the Job.
- The left side shows all the Tasks (Just-in-time testing environments) that were a part of the Job.
- Each Task has 3 types of Stages : [Pre stages, Scenario stages, Post stages](/support/docs/hyperexecute-status/#3-stage-level-status).

<!-- > **Note** - You can learn about Job, Tasks and Stages [here](/support/docs/hyperexecute-concepts/). -->

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/guided-walkthrough/4.png').default} alt="Image"  className="doc_img"/>

*** 

## Test Details
  
You can access a much more detailed section for your test cases on the Automation dashboard by clicking on the **Test** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/guided-walkthrough/5.png').default} alt="Image"  className="doc_img"/>

It provides you with all the necessary data points that you need for your test. 

### Basic Summary
You can see the details of your test on the panel on the top of the screen. It contains several details like the browser, the test status, the test name, and more.

- **Test Status**: The status of your test. If the test has passed, the status will be passed.  
- **Test Name**: The name of your test. You can rename the test, copy the name and see all the tests in the build.  
- **Test ID**: The test ID of your test. You can copy the test ID by clicking on the **Copy** button. 
- **Browser**: The browser on which your tests are run. 
- **OS**: The Operating System on which your tests are run.
- **Resolution**: The resolution of the screen.
- **Duration**: The amount of time it took for your test to run.
- **Test Meta Data**: You can view the test meta data by clicking on the **info** icon.
- **Tunnel Information**: Tells whether you have used a tunnel to run your tests or not.
- **Share**: You can share the details of this test by clicking on the **Share** icon.
- **Delete**: You can delete the test entirely by clicking on the **Delete** icon.
### Videos and Screenshots

HyperExecute provides you with tools like videos and screenshots of your tests to give you a clear picture of what goes on in the background.

### Commands and Logs

You can access the commands involved in the test, and the logs on the right hand side on this Dashboard.

-   **All Commands**: Each command that is run as a part of your test case is shown here. Each command also contains its own parameters, that can be accessed by hovering on the command and clicking on **View Parameters**.
-   **Network**: Access the network logs while your tests were getting executed on the **Network** tab.
-   **Logs**: View all kinds of logs at one place. You can toggle between the **Console Logs**, **Terminal Logs** and the **Test Framework Logs**.

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/guided-walkthrough/6.png').default} alt="Image"  className="doc_img"/>

>**Note**: You can download the logs by clicking on the Download button on the top right-hand corner of the logs tab. 

## Test Summary Hyperlink

This introduces clickable links within your **test summary**. When you click on these hyperlinks, it dynamically redirects you to the automation dashboard, providing immediate access to detailed test information corresponding to the specific test status clicked.

Additionally, upon redirection, the automation dashboard opens the relevant tab that aligns with the selected test status, streamlining your experience.

  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/guided-walkthrough/16.png').default} alt="Image"  className="doc_img"/> 

### How to Activate Test Summary Hyperlinks

- #### Update your Org Configuration :

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/getting-started/guided-walkthrough/test-summary.mp4').default} type="video/mp4" />
</video>

- #### Frontend Configuration :

  > For frontend activation, please contact us via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />

- #### Backend Configuration :

  Update your designated HyperExecute YAML file with [`buildConfig`](/support/docs/deep-dive-into-hyperexecute-yaml/#buildconfig) configuration to activate the "**Test Summary Hyperlink**" feature. This configuration allows you to define specific parameters that govern the behavior of the hyperlinks based on the test summary status.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Guided Walkthrough</span>
    </li>
  </ul>
</nav>