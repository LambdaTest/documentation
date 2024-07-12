---
id: selenium-automation-capabilities
title: Desired Capabilities in Selenium 
hide_title: false
sidebar_label: Desired Capabilities In Selenium
description: This document will teach you how to leverage LambdaTest Capability Generator to easily for declaring desired capabilities in selenium for both desktop and mobile browsers.
keywords:
- cross browser testing
- selenium capabilities generator
- selenium desired capabilities
- lambdatest selenium grid capabilities
- lambdatest automation capabilities generator
- selenium capability configuration
- selenium automation testing
- selenium automation grid online
- configure selenium tests with desired capabilities
- selenium webdriver capabilities for running tests on lambdatest
image: /assets/images/og-images/Selenium-Capabilities.jpg
url: https://www.lambdatest.com/support/docs/selenium-automation-capabilities/
site_name: LambdaTest
slug: selenium-automation-capabilities/
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
          "name": "Desired Capabilities In Selenium",
          "item": "https://www.lambdatest.com/support/docs/selenium-automation-capabilities/"
        }]
      })
    }}
></script>
Desired Capabilities in Selenium test scripts, encoded as key-value pairs, allow you, as a tester or a developer, to define specific test environment requirements. These requirements encompass operating systems, browser combinations, versions, and other parameters supported by LambdaTest's Cloud Grid to run your desired [automation framework tests](/support/docs/getting-started-with-lambdatest-automation/#supported-languages-and-frameworks).

:::tip
You can also use LambdaTest's [Automation Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) to autogenerate your required capabilities class to run Selenium and Appium automation test scripts on the LambdaTest [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/).

You can generate the capabilities in all of the six programming languages i.e. Java, PHP, Ruby, JavaScript, C#, and Python.
:::

>The values provided for any capability are both **space-insensitive** and **case-insensitive**. This means that any value you provide as **Mac OS X 10.13** or **mac os x 10.13** would be correct.

<div className="support_main">
  <a href = "/support/docs/selenium-default-capabilities/">
  <div className="support_inners">
    <h3>Selenium Default Capabilites</h3>
    <p>Use Smart Auto Split Strategy, Matrix Strategy or Hybrid Strategy modes to split and execute tests as per your requirements.</p>
  </div>
  </a>

  <a href = "/support/docs/selenium-three-capabilities/">
  <div className="support_inners">
    <h3>Selenium v3</h3>
    <p>Use Smart Auto Split Strategy, Matrix Strategy or Hybrid Strategy modes to split and execute tests as per your requirements.</p>
  </div>
  </a>

  <a href = "/support/docs/selenium-four-capabilities/">
  <div className="support_inners">
    <h3>Selenium v4</h3>
    <p>Use Smart Auto Split Strategy, Matrix Strategy or Hybrid Strategy modes to split and execute tests as per your requirements.</p>
  </div>
  </a>

  <a href = "/support/docs/lambdatest-selenium-advance-capabilities/">
  <div className="support_inners">
    <h3>LambdaTest Advanced Capabilities</h3>
    <p>Use Smart Auto Split Strategy, Matrix Strategy or Hybrid Strategy modes to split and execute tests as per your requirements.</p>
  </div>
  </a>
  
  <a href = "/support/docs/perform-selenium-automation-on-headless-browsers/">
  <div className="support_inners">
    <h3>Headless Browser Testing</h3>
    <p>Use Smart Auto Split Strategy, Matrix Strategy or Hybrid Strategy modes to split and execute tests as per your requirements.</p>
  </div>
  </a>

  <a href = "/support/docs/upload-custom-chrome-profile/">
  <div className="support_inners">
    <h3>Custom Chrome Profile</h3>
    <p>Get a detailed test report for every job and stream the terminal logs in real time to understand everything that happened with your test.</p>
  </div>
  </a>

  <a href = "/support/docs/selenium-set-browser-options/">
  <div className="support_inners">
    <h3>Setting Browser Options</h3>
    <p>Get a detailed test report for every job and stream the terminal logs in real time to understand everything that happened with your test.</p>
  </div>
  </a>

  <a href="/support/docs/network-throttling/">
  <div className="support_inners">
    <h3>Network Throttling</h3>
    <p>Run your jobs faster or fail them quickly to receive instant feedback and save your test time.</p>
  </div>
  </a>

  <a href="/support/docs/custom-dns-map/">
  <div className="support_inners">
    <h3>Custom DNS Mapping</h3>
    <p>Label the jobs that you want to run first on HyperExecute by giving them a higher priority.</p>
  </div>
  </a>

  <a href="/support/docs/view-lighthouse-performance-metrics/">
  <div className="support_inners">
    <h3>Lighthouse Performance Metrics</h3>
    <p>HyperExecute also manages all of your test artifacts and provides you with the option to implement smart workflows on your test code without modifying it.</p>
  </div>
  </a>

  <a href="/support/docs/generate-multiple-lighthouse-reports/">
  <div className="support_inners">
    <h3>Generate Multiple Lighthouse Reports</h3>
    <p>Root Cause Analysis and Error Classification features in HyperExecute to view different kinds of errors and directly land on corrective measures or fixes.</p>
  </div>
  </a>

  <a href="/support/docs/debugging-options/">
  <div className="support_inners">
    <h3>Debugging Options</h3>
    <p>Triggers long-running Application Servers tasks like running WebApps or Databases and generates the logs report in the Dashboard.</p>
  </div>
  </a>

  <a href="/support/docs/selenium-telemetry-logs/">
  <div className="support_inners">
    <h3>Telemetry Logs</h3>
    <p>Auto Healing Feature allows you to automatically rеcovеr from cеrtain typеs of failurеs during thе еxеcution of your tеst scripts.</p>
  </div>
  </a>

  <a href="/support/docs/smart-wait/">
  <div className="support_inners">
    <h3>SmartWait Functionality</h3>
    <p>Setup your custom projects using HyperExecute GUI itself and initiate the tests execution from the platform only.</p>
  </div>
  </a>

  <a href="/support/docs/custom-headers/">
  <div className="support_inners">
    <h3>CustomHeaders</h3>
    <p>Jobs Archiving allows you to archive the non important jobs so that you and your team can focus only on required ones.</p>
  </div>
  </a>
  
  <a href="/support/docs/auto-healing/">
  <div className="support_inners">
    <h3>Autohealing</h3>
    <p>Schedule your tests smartly on the HyperExecute to perform the tests automatically at the scheduled day, date and time.</p>
  </div>
  </a>

  <a href="/support/docs/command-annotations/">
  <div className="support_inners">
    <h3>Command Annotations</h3>
    <p>Mute scenarios that have been continuously failing for a pre-defined number of times, ignore expected failures, achieve better runtimes and faster feedback on the executed Jobs.</p>
  </div>
  </a>  

  <a href="/support/docs/har-log-viewer-with-waterfall/">
  <div className="support_inners">
    <h3>HAR Logs</h3>
    <p>Track your CPU, and Memory utilization of the virtual machines for a seamless user experience.</p>
  </div>
  </a>  

  <a href="/support/docs/selenium-mask-your-data/">
  <div className="support_inners">
    <h3>Mask your Sensitive Data</h3>
    <p>Track your CPU, and Memory utilization of the virtual machines for a seamless user experience.</p>
  </div>
  </a>    
</div>


>Got any questions?<br/>
Please reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at support@lambdatest.com.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
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
       Desired Capabilities In Selenium
      </span>
    </li>
  </ul>
</nav>









[1]: https://www.lambdatest.com/capabilities-generator/

[3]: https://www.lambdatest.com/list-of-browsers/
[4]: https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/
[5]: http://www.w3.org/TR/2009/WD-webstorage-20091029/