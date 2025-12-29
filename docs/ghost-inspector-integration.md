---
id: ghost-inspector-integration
title: Ghost Inspector Integration With TestMu AI’s Cloud 
hide_title: true
sidebar_label: Ghost Inspector
description: TestMu AI now integrates with Ghost Inspector to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - ghost inspector
  - ghost inspector integration
url: https://www.testmu.ai/support/docs/ghost-inspector-integration-with-testmu
site_name: LambdaTest
slug: ghost-inspector-integration-with-testmu
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
          "name": "Ghost Inspector Integration",
          "item": "https://www.lambdatest.com/support/docs/ghost-inspector-integration-with-lambdatest/"
        }]
      })
    }}
></script>

# Ghost Inspector Integration With LambdaTest’s Cloud
***

LambdaTest provides support with Selenium WebDriver for pacing the execution of your automation test scripts. LambdaTest is a cloud-based, cross browser testing tool, providing a [Selenium Grid](https://www.lambdatest.com/selenium-automation/) of 3000+ browsers and browser versions running through real operating systems to speed up automation testing of your web-app or website. This topic will help you to automate your website testing using Ghost Inspector on LambdaTest.


## What is Ghost Inspector?
* * *
Ghost Inspector is a codeless automation tool that lets a software tester automate the process of writing test scripts.

This integration between LambdaTest and Ghost Inspector enables you to automate the cross-browser testing process through the Selenium Grid of more than 2,000 browsers.

As a result, you’ll be able to expand your test coverage, analyze and extract insightful test reports, and enhance your team collaboration.

# How To Integrate LambdaTest With Ghost Inspector?
* * *
* All the test suites will be reflected in the Ghost Inspector dashboard.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/ghost-inspector-dashboard.webp').default} alt="Integrate Ghost Inspector" width="775" height="647" className="doc_img"/>
</p>

* Click on the desired test suite.
* Click on the desired test case under test suites.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/ghost-inspector-dashboard-2.webp').default} alt="Integrate Ghost Inspector" width="775" height="647" className="doc_img"/>
</p>

* Once you have selected the desired test case, click on **More** -> **Export Suite** and select the format as New Selenium IDE (.side).

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/ghost-inspector-dashboard-3.webp').default} alt="Integrate Ghost Inspector" width="775" height="647" className="doc_img"/>
</p>

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/ghost-inspector-dashboard-4.webp').default} alt="Integrate Ghost Inspector" width="775" height="647" className="doc_img"/>
</p>

### Setup Selenium IDE Side Runner:

* Node.js programming language (version 8 or 10).
* NPM or Node.js Package Manager.
* Selenium IDE Plugin, for either Google Chrome and Mozilla Firefox.
* Selenium IDE (SIDE) Runner. You can download SIDE runner using below code:

```bash
npm install -g selenium-side-runner
```
* You also need your LambdaTest authentication credentials, which includes your LambdaTest username, and access key. These will be set up as the Secrets for configuring the pipeline. To get your Username and Access Key, go to your LambdaTest automation dashboard and click on the "key" icon left to the help button, on the top right corner.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/ghost-inspector-dashboard-5.webp').default} alt="Integrate Ghost Inspector" width="775" height="647" className="doc_img"/>
</p>

* Open Selenium IDE and click on ‘Open an existing project'.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/ghost-inspector-dashboard-6.webp').default} alt="Integrate Ghost Inspector" width="775" height="647" className="doc_img"/>
</p>

* Right click on the test suite and go to Settings. Test Suite Settings.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/ghost-inspector-dashboard-7.webp').default} alt="Integrate Ghost Inspector" width="775" height="647" className="doc_img"/>
</p>

* In the Settings window, tick the Run in Parallel checkbox. Test Suite Properties.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/ghost-inspector-dashboard-8.webp').default} alt="Integrate Ghost Inspector" width="775" height="647" className="doc_img"/>
</p>

* Save the SIDE project.
* We have successfully activated Parallel Testing in Selenium IDE. Now we can execute tests Selenium IDE tests in parallel on LambdaTest Selenium Cloud Grid.

## Executing Selenium IDE Tests on LambdaTest Selenium Cloud Grid
***

* Set the Desired Capabilities in Selenium. For this article, we have set the Chrome browser (version 72.0) for Windows 10, to run our Selenium IDE tests.
* The LambdaTest Selenium Desired Capabilities Generator is used to generate the capabilities. Below are the desired capabilities used in this article for the required test combination, provided in Python Language.

```bash
capabilities = {
                "platform" : "Windows 10",
                "browserName" : "Chrome",
                "version" : "72.0"
        }
```

In the string format, it will be represented as:
```bash
 **"browserName='chrome' version='72.0' platform='Windows 10'"**
 ```

* Get the Grid URL for executing tests on LambdaTest. Get your username and access key from your LambdaTest's Profile section (as shown in the prerequisites), and replace it in the below URL.

```bash
https://user-name:access-key@hub.lambdatest.com/wd/hub
```

* Specify the desired capabilities along with the Grid URL. Replace the desired capabilities and the Grid URL from the above steps in the below code:

```bash
selenium-side-runner --server <lambdatest grid="" url=""> --capabilities </lambdatest>
```
* Mention the number of parallel processes to be executed at a time. You can use any of the below syntax to specify the count of parallel processes to be executed at the above mentioned Grid URL:

```bash
selenium-side-runner --w <num of="" parallel="" processes="">--server 
https://user-name:access-key@hub.lambdatest.com/wd/hub</num>
```

OR

```bash
selenium-side-runner --max-workers <num of="" parallel="" processes="">--server 
https://user-name:access-key@hub.lambdatest.com/wd/hub</num>
```

For this article, we have set the number of parallel processes as '4'.

* Now we have all the components of the SIDE Runner command to execute the tests. So we will run the Selenium IDE tests on LambdaTest Selenium Cloud Grid. Navigate to the directory where the .SIDE file is located (here it is located at "LambdaTest-IDE.side") and execute the below command in the terminal, after replacing the GRID URL:

```bash
selenium-side-runner -w 4 "LambdaTest-IDE.side" --server 
https://user-name:acces-key@hub.lambdatest.com/wd/hub -c "browserName='chrome' 
version='72.0' platform='Windows 10'"
```

* We have successfully executed all the steps to run Selenium IDE tests on LambdaTest Selenium Cloud Grid. Now you can see our tests being executed along with their status in the Automation Timeline of your LambdaTest profile.

* Below are the execution snapshots of the SIDE Runner and the automation timeline instance, that shows the successful execution of the desired tests: test execution snapshots automation test timeline.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/ghost-inspector-dashboard-9.webp').default} alt="Integrate Ghost Inspector" width="775" height="647" className="doc_img"/>
</p>

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/ghost-inspector-dashboard-10.webp').default} alt="Integrate Ghost Inspector" width="775" height="647" className="doc_img"/>
</p>


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Ghost Inspector Integration
      </span>
    </li>
  </ul>
</nav>
