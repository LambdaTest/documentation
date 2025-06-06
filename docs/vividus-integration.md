---
id: vividus-integration
title: How to Perform Vividus Automation Tests Using LambdaTest?
hide_title: true
sidebar_label: Vividus
description: With this integration, run your tests from Vividus tool, directly on LambdaTest cloud-based Selenium Grid, on 10000+ desktop &amp; mobile browser and OS combinations
keywords:
- lambdatest integrations
- vividus
- test automation for gui testing
- test automation
- vividus integration with lambdatest
- lambdatest integration with vividus
url: https://www.lambdatest.com/support/docs/vividus-integration/
site_name: LambdaTest
slug: vividus-integration/
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
          "name": "Vividus LambdaTest Integration",
          "item": "https://www.lambdatest.com/support/docs/vividus-integration/"
        }]
      })
    }}
></script>

# Vividus Tests On LambdaTest
* * *
Vividus is a codeless test automation tool, developed with the aim to help testers perform automation testing for any application, test, or scenario, using a single tool and common language.

LambdaTest now integrates with the Vividus tool to help you execute automation tests on its cloud-based Selenium Grid. This LambdaTest-Vividus integration will help you perform cross-browser testing of your website, web app, or your mobile website, over 3000+ real desktop devices, mobile viewports, and operating system combinations on LambdaTest platform. This document is a comprehensive guide to help you understand how to integrate Vividus with your LambdaTest account.

## How To Setup Your LambdaTest Account With Vividus?

* * * 

Once you have your project set up using the Vividus tool, here’s a step by step guide to help you setup your LambdaTest account with Vividus tool:

1. Once you have your test scenario ready, you need to add the LambdaTest plugin in the build.gradle -> dependencies, using the below command.

```javascript
implementation(group: 'org.vividus', name: 'vividus-plugin-lambdatest', version: vividusVersion)
```

2. Next you need to add the LambdaTest cloud as the executing platform. To do so, open the configuration.properties file and add the below profile in it:

```javascript
Next you need to add the LambdaTest cloud as the executing platform. To do so, open the configuration.properties file and add the below profile in it:
```

3. Now you need to specify you LambdaTest username and access key in the same configuration.properties file, using below syntax:

```javascript
selenium.grid.username=<LT_USERNAME>
selenium.grid.password=<LT_ACCESS_KEY>
```

This will verify your credentials and connect your LambdaTest account with the Vividus tool successfully, based on your current plan.

To get your Username and Access Key, go to your [LambdaTest automation dashboard](https://automation.lambdatest.com/timeline/) and click on the "key" icon left to the help button, on the top right corner.

<img loading="lazy" src={require('../assets/images/vividus-integration/lt-credentials.webp').default} alt="Finding Username and Access Key to Perform Automation Testing" width="1281" height="721" className="doc_img"/>

Once done, you will be able to select your desired capabilities in their corresponding fields, like the platform, browser, browser version, resolution, etc. To know more about desired capabilities, refer to our [Capabilities Generator Guide](/docs/selenium-automation-capabilities/).

That’s it. Vividus tool has been integrated successfully with your LambdaTest account. Now you can execute your automated tests on LambdaTest’s cloud-based Selenium Grid.

## Running Tests From Your Vividus App On LambdaTest Platform

* * *

For demo purpose, we have recorded a test scenario, which includes:

```javascript
- Opening <a href="https://lambdatest.github.io/sample-todo-app/" rel="noopener" target="_blank">LambdaTest ToDo App</a>
- Check the first item in the list
- Check the second item in the list
- Add a new item in the list, with text "Yey, Let's add it to list".
```

* Use the below syntax to pass the desired capabilities:

```javascript
selenium.grid.capabilities.<capability>=<value>
```

For example, we have used the below desired capabilities for demo purpose:

```javascript
selenium.grid.capabilities.build=VividusDemo
selenium.grid.capabilities.visual=true
selenium.grid.capabilities.console=true
selenium.grid.capabilities.network=true
selenium.grid.capabilities.version=13.0
selenium.grid.capabilities.platform=MacOS Big Sur
```

> Note: If no browser version or OS capability is passed, it will take the latest version of the browser available on LambdaTest platform, along with latest Windows OS version.

* Now you need to select the desired browser, on which you want to run your tests. To do so, open the configuration.properties file, and change the name of the browser to the desired one, from Chrome.

Syntax:

```javascript
configuration.profiles=lambdatest/web,web/desktop/<browser name>
```

For example, let’s change the browser to Safari:

```javascript
configuration.profiles=lambdatest/web,web/desktop/safari

// Previously it was configuration.profiles=lambdatest/web,web/desktop/chrome
```

* To run your test, using the below command:

```javascript
./gradlew runStories
```

<img loading="lazy" src={require('../assets/images/vividus-integration/vividus.webp').default} alt="Run Tests Using LambdaTest Vividus Integration" width="1242" height="473" className="doc_img"/>

* The test execution will then start, and you can see the same on the automation dashboard of your LambdaTest account.

<img loading="lazy" src={require('../assets/images/vividus-integration/vividus-1.webp').default} alt="LambdaTest automation dashboard" width="1281" height="721" className="doc_img"/>

* Once the test is complete, you can view the test result on the automation dashboard by clicking on the test case. You can see and verify if the test has been passed or failed in the Automation Logs.

<img loading="lazy" src={require('../assets/images/vividus-integration/vividus-2.webp').default} alt="Test Automation Logs" width="1281" height="721" className="doc_img"/>

For each test executed overthe LambdaTest platform, you can view logs, [mark bugs](/docs/mark-as-bug-in-automation-testing/), and do much more.

## Running Tests From Vividus In Parallel On LambdaTest Platform

* * *

Parallel execution is available out of the box and limited only with machine resources and cloud concurrency. In Vividus, concurrency is available at the story level, i.e., each story will use a new session. To configure how many threads you would like to use you need to change the value threads value in the suite.properties file, as shown below:

<img loading="lazy" src={require('../assets/images/vividus-integration/vividus-parallel.webp').default} alt="Test Suite Properties" width="1676" height="781" className="doc_img"/>

> Congrats! You have successfully integrated the Vividus tool with your LambdaTest account. Now run your test cases over the LambdaTest’s cloud-based Seleniunm Grid. If you come across any doubts or questions, reach out to us via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or mail us at support@lambdatest.com. Happy testing! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Vividus LambdaTest Integration</span>
    </li>
  </ul>
</nav>