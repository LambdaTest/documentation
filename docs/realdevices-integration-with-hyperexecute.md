---
id: real-devices-integration-with-hyperexecute
title: Real Devices
hide_title: true
sidebar_label: HyperExecute Real Devices Testing
description: Maximize real device testing with HyperExecute! Accelerate test orchestration and intelligence on real devices with TestMu AI's support. 
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with products
    - products
    - real devices
    - mobile testing
    - mobile testing on HyperExecute
    - mobile testing on testmu ai
    - fast mobile testing
    - mobile automation

url: https://www.testmu.ai/support/docs/realdevices-integration-with-hyperexecute
site_name: LambdaTest
slug: real-devices-integration-with-hyperexecute
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Katalon Integration with HyperExecute",
          "item": `${BRAND_URL}/support/docs/katalon-integration-with-hyperexecute/`
        }]
      })
    }}
></script>

# Real Devices Integration with HyperExecute

Till now you have executed your test scripts on the [Real Device Automation](/support/docs/appium-python-pytest/). This Document will not only explain to you about how to use Real Devices on HyperExecute but also the superpower you just unlocked with HyperExecute - Test Orchestration and Intelligence.

HyperExecute is a smart test orchestration platform to run end-to-end tests at the fastest speed possible. HyperExecute lets you achieve an accelerated time to market by providing a test infrastructure that offers optimal speed, test orchestration, and detailed execution logs.

**Let's first take a look at the different ways of executing tests on HyperExecute:**

## 1. Triggering a job on HyperExecute  
In order to trigger a job on HyperExecute, it requires the [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) and a set of instructions inside the [HyperExecute Yaml](/support/docs/deep-dive-into-hyperexecute-yaml/) file. When you trigger the CLI command, it connects with the HyperExecute APIs which then distributes the tests across different machines/nodes for parallel execution as shown in the diagram below:
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/real-devices/rd1.png').default} alt="Image"  className="doc_img"/>


## 2. Real Devices Test Execution on HyperExecute
In case of Real devices test execution the test scripts from the machines run the actual tests on connected real devices as shown in the diagram below:
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/real-devices/rd2.png').default} alt="Image"  className="doc_img"/>

## 3. Triggering through local machine
When you are triggering your test cases from the local machine the flow of data is as shown in the diagram below:
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/real-devices/rd3.png').default} alt="Image"  className="doc_img"/>

## 4. Triggering through Jenkins
In order to execute a job on HyperExecute via Jenkins, you would need to perform 2 simple steps :  
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/real-devices/rd4.png').default} alt="Image"  className="doc_img"/>   


You can read more about it [here](/support/docs/hyperexecute-integration-with-ci-cd-tools/).  When you want the job to be initiated from the Jenkins Pipeline, it would look as shown in the diagram below: 
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/real-devices/rd5.png').default} alt="Image"  className="doc_img"/>  

## 5. How to Trigger Real Device tests on HyperExecute ?
You can seamlessly trigger your favorite mobile app framework test scripts with HyperExecute.

<div className="support_main">  
  <a href="/support/docs/hyperexecute-appium-testing/">
    <div className="support_inners">
      <h3>Appium Testing for Apps</h3>
      <p>Test your native Android and iOS mobile applications on Appium automation cloud.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-webapp-appium-testing/">
    <div className="support_inners">
      <h3>Appium Testing for WebApps</h3>
      <p>Test your Android and iOS web applications on Appium automation cloud.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-espresso-testing/">
    <div className="support_inners">
      <h3>Espresso Testing</h3>
      <p>Test your Android mobile applications on Espresso automation cloud.</p>
    </div>
  </a>
    <a href="/support/docs/hyperexecute-maestro-testing/">
    <div className="support_inners">
      <h3>Maestro Testing</h3>
      <p>Test your Android mobile applications on Maestro automation cloud.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-xcui-testing">
    <div className="support_inners">
      <h3>XCUI Testing</h3>
      <p>Test your iOS applications on XCUI automation cloud.</p>
    </div>
  </a>
</div>

## Support

We at Lambdatest take pride in our Support system. We ensure that we do the heavy lifting while our customers can focus on the test scripts and strategy. As a first step in the POC, our support engineers conduct a working session over Zoom or Gmeet to understand your use case and provide you with the right configuration to execute your test cases on HyperExecute. Our support engineers are always available over slack, mail and calls to ensure that we provide you with the right kind of support and set you up for a win. 

Please feel free to give us a shout if you have any questions or require any assistance.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       HyperExecute Integration With Katalon
      </span>
    </li>
  </ul>
</nav>
