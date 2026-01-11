---
id: selenium-automation-capabilities
title: Desired Capabilities in Selenium 
hide_title: false
sidebar_label: Desired Capabilities In Selenium
description: This document will teach you how to leverage TestMu AI Capability Generator to easily for declaring desired capabilities in selenium for both desktop and mobile browsers.
keywords:
- cross browser testing
- selenium capabilities generator
- selenium desired capabilities
- testmu ai selenium grid capabilities
- testmu ai automation capabilities generator
- selenium capability configuration
- selenium automation testing
- selenium automation grid online
- configure selenium tests with desired capabilities
- selenium webdriver capabilities for running tests on testmu ai
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmu.ai/support/docs/selenium-automation-capabilities
site_name: LambdaTest
slug: selenium-automation-capabilities
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
          "name": "Desired Capabilities In Selenium",
          "item": `${BRAND_URL}/support/docs/selenium-automation-capabilities/`
        }]
      })
    }}
></script>
Desired Capabilities in Selenium test scripts, encoded as key-value pairs, allow you, as a tester or a developer, to define specific test environment requirements. These requirements encompass operating systems, browser combinations, versions, and other parameters supported by <BrandName />'s Cloud Grid to run your desired [automation framework tests](/support/docs/getting-started-with-testmu-automation/#supported-languages-and-frameworks).

:::tip
You can also use <BrandName />'s [Automation Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) to autogenerate your required capabilities class to run Selenium and Appium automation test scripts on the <BrandName /> [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/).

You can generate the capabilities in all of the six programming languages i.e. Java, PHP, Ruby, JavaScript, C#, and Python.
:::

>The values provided for any capability are both **space-insensitive** and **case-insensitive**. This means that any value you provide as **Mac OS X 10.13** or **mac os x 10.13** would be correct.

<div className="support_main">
  <a href = "/support/docs/selenium-default-capabilities/">
  <div className="support_inners">
    <h3>Selenium Default Capabilities</h3>
    <p>Learn about the built-in capabilities supported by Selenium for launching browsers.</p>
  </div>
  </a>

  <a href = "/support/docs/selenium-three-capabilities/">
  <div className="support_inners">
    <h3>Selenium v3</h3>
    <p>Understand the capabolities supported in <BrandName /> for Selenium version 3</p>
  </div>
  </a>

  <a href = "/support/docs/selenium-four-capabilities/">
  <div className="support_inners">
    <h3>Selenium v4</h3>
    <p>Understand the capabolities supported in <BrandName /> for Selenium version 4</p>
  </div>
  </a>

  <a href = "/support/docs/lambdatest-selenium-advance-capabilities/">
  <div className="support_inners">
    <h3><BrandName /> Advanced Capabilities</h3>
    <p>Discover additional capabilities offered by <BrandName /> beyond Selenium defaults for more control over test execution.</p>
  </div>
  </a>
  
  <a href = "/support/docs/perform-selenium-automation-on-headless-browsers/">
  <div className="support_inners">
    <h3>Headless Browser Testing</h3>
    <p>Explore how to run automated tests in browsers without a graphical user interface.</p>
  </div>
  </a>

  <a href = "/support/docs/upload-custom-chrome-profile/">
  <div className="support_inners">
    <h3>Custom Chrome Profile</h3>
    <p>Configure a custom Chrome profile with specific extensions or settings for your tests.</p>
  </div>
  </a>

  <a href = "/support/docs/selenium-set-browser-options/">
  <div className="support_inners">
    <h3>Setting Browser Options</h3>
    <p>Define preferences like browser size, language, and cookies for your tests.</p>
  </div>
  </a>

  <a href="/support/docs/network-throttling/">
  <div className="support_inners">
    <h3>Network Throttling</h3>
    <p>Simulate different internet connection speeds to test website behavior under various network conditions.</p>
  </div>
  </a>

  <a href="/support/docs/custom-dns-map/">
  <div className="support_inners">
    <h3>Custom DNS Mapping</h3>
    <p>Map custom domain names to specific IP addresses for your testing needs.</p>
  </div>
  </a>

  <a href="/support/docs/view-lighthouse-performance-metrics/">
  <div className="support_inners">
    <h3>Lighthouse Performance Metrics</h3>
    <p>Leverage Lighthouse to analyze website performance metrics within your tests.</p>
  </div>
  </a>

  <a href="/support/docs/generate-multiple-lighthouse-reports/">
  <div className="support_inners">
    <h3>Generate Multiple Lighthouse Reports</h3>
    <p>Run multiple Lighthouse audits and generate reports for comparison.</p>
  </div>
  </a>

  <a href="/support/docs/debugging-options/">
  <div className="support_inners">
    <h3>Debugging Options</h3>
    <p>Explore debugging tools provided by <BrandName /> to troubleshoot your tests.</p>
  </div>
  </a>

  <a href="/support/docs/selenium-telemetry-logs/">
  <div className="support_inners">
    <h3>Telemetry Logs</h3>
    <p>Access detailed logs generated during your test execution for analysis.</p>
  </div>
  </a>

  <a href="/support/docs/smart-wait/">
  <div className="support_inners">
    <h3>SmartWait Functionality</h3>
    <p>Understand how <BrandName />'s SmartWait feature waits for elements to become interactive before proceeding with tests.</p>
  </div>
  </a>

  <a href="/support/docs/custom-headers/">
  <div className="support_inners">
    <h3>CustomHeaders</h3>
    <p>Set custom headers in your test requests to simulate specific scenarios.</p>
  </div>
  </a>
  
  <a href="/support/docs/auto-healing/">
  <div className="support_inners">
    <h3>Autohealing</h3>
    <p>Learn about <BrandName />'s autohealing functionality that automatically recovers from unexpected session issues.</p>
  </div>
  </a>

  <a href="/support/docs/command-annotations/">
  <div className="support_inners">
    <h3>Command Annotations</h3>
    <p>Discover how to use <BrandName />'s command annotations to control test execution flow.</p>
  </div>
  </a>  

  <a href="/support/docs/har-log-viewer-with-waterfall/">
  <div className="support_inners">
    <h3>HAR Logs</h3>
    <p>Utilize HTTP Archive (HAR) logs to analyze network traffic during your tests.</p>
  </div>
  </a>  

  <a href="/support/docs/selenium-mask-your-data/">
  <div className="support_inners">
    <h3>Mask your Sensitive Data</h3>
    <p>Protect sensitive information like passwords or tokens from being exposed in test logs.</p>
  </div>
  </a>    
</div>


>Got any questions?<br/>
Please reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at support@testmu.ai.

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
       Desired Capabilities In Selenium
      </span>
    </li>
  </ul>
</nav>









[1]: https://www.lambdatest.com/capabilities-generator/

[3]: https://www.lambdatest.com/list-of-browsers/
[4]: https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/
[5]: http://www.w3.org/TR/2009/WD-webstorage-20091029/
