---
id: selenium-four-capabilities
title: Selenium Capabilities for version >= 4
hide_title: false
sidebar_label: Selenium Capabilities v4
description: This document contains all the desired capabilities that are supported by TestMu AI for Selenium version 4 and above
keywords:
  - testmu ai automation
  - selenium capabilities
  - selenium version >=4
url: https://www.testmu.ai/support/docs/selenium-four-capabilities/
site_name: LambdaTest
slug: selenium-four-capabilities
canonical: https://www.testmu.ai/support/docs/selenium-four-capabilities/
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
          "name": "Selenium Capabilities",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Selenium Capabilities v4",
          "item": `${BRAND_URL}/support/docs/selenium-four-capabilities/`
        }]
      })
    }}
></script>

In addition to the capabilities supported in [selenium version 3](/support/docs/selenium-four-capabilities/), there are some new capabilities that are introduced in theSelenium version >= 4.

| Key | Values | Capability Description | Default Value | Alias  | Value Type | Example | Possible Errors |
|-----|--------|------------------------|---------------|--------|------------|---------|-----------------|
| `user` |```user: "Username"```   <br /> Example: harshitp | Can be found under your <BrandName /> profile. If you are already logged into <BrandName />, then the Desired Selenium Capabilities Generator will automatically fetch your <BrandName /> username under the desired Selenium capabilities class.   <br/>``` capabilities.setCapability("user","harshitp"); ``` |Mandatory |username  |String |If you are already logged into <BrandName /> then the Desired Selenium Capabilities Generator will automatically fetch your <BrandName /> username under the desired Selenium capabilities class.   <br/>```capabilities.setCapability("user","harshitp");```|401   <br/>Unauthorized   <br/>case sensitive |
| `accessKey`|```accessKey: "Access Key"```   <br /> Example: 123ABC | Can be found under your <BrandName /> profile. If you are already logged into <BrandName />, then the Desired Selenium Capabilities Generator will automatically fetch your <BrandName /> Access Key under the desired Selenium capabilities class.   <br/>``` capabilities.setCapability("accessKey","123ABC");```  |Mandatory |key |String |```capabilities.setCapability(""accessKey"",""123ABC"");``` |401   <br/>Unauthorized   <br/>case sensitive |                                                                             
| `driver_version`| Example: "driver_version" : "99.0"| Used to specify the driver version of the browser you want to run the test on. Make sure to provide a valid driver version corresponding to the browser used.   <br/> `capabilities.setCapability("driver_version","99.0");` | Dynamic map by system |driverVersion,driver |String |
|  `browserVersion` |  Ex: 101.0 (Beta) |  This capability is used to declare the specific browser version on which you want your test automation scripts to be executed using our Selenium Automation Grid. Make sure to provide a valid browser version in your desired Selenium capabilities class.    <br/>``` capabilities.setCapability("browserVersion","79.0"); ```<br />You can use "latest", "lates-1" and so-on to select latest browser version   | latest |version |String |```capabilities.setCapability("browserVersion","91.0");```<br />```capabilities.setCapability("browserVersion","latest");```<br /> ```capabilities.setCapability("browserVersion","latest-1");``` |Case Sensitive <br />Invalid version error |
| `latest` | – | The latest keyword will help you run your test cases over the most recent browser version available at <BrandName />.   <br/>``` capabilities.setCapability("version","latest"); ```   |
| `latest-N` | latest-5 | This would allow you to execute your test over the older browser versions. Here, N represents an integer. So if you wish to test your website over the 5 most recently released browser versions. You can do so using the below capability:   <br/> `capabilities.setCapability("version","latest-5");`|
| `platformName` |  **Supported Windows:** <ul><li>Windows 11</li><li>Windows 10</li><li>Windows 8.1</li><li>Windows 8</li><li>Windows 7</li></ul> **Supported macOS:** <ul><li>Monterey</li><li>Big Sur</li><li>Catalina</li><li>Mojave</li><li>High Sierra</li><li>Sierra</li><li>El Capitan</li><li>Mavericks</li><li>Yosemite</li></ul> | This capability is used to specify the platform on which you wish to run your Selenium automation testing. If a platform for testing is not declared then <BrandName /> will map your test to a relevant operating system for the selected browser. <br/>So, if you wish to perform Selenium automation testing of your web application on Windows 11 then you need to mention the below line of code in your Desired Selenium Capabilities class.   <br/>``` capabilities.setCapability("platformName", "Windows 11"); ``` <br/>Similarly for macOS, if you wish to perform Selenium automation testing of your web application on macOS Monterey then you need to mention the below line of code in your Desired Capabilities class.  <br/>``` capabilities.setCapability("platformName", "macOS Monterey"); ``` | Select based on browser. <br/> <ul><li>Linux</li><li>Windows 10</li></ul>|platform,OS | String |```capabilities.setCapability("platformName", "Windows 10");``` |Case Sensitive <br/> Invalid Platform Error |
| selenium_version | Example: `"selenium_version", "4.0.0"` | To define Selenium version for test session.  | Dynamic map by system |seleniumVersion,seVersion | String |
| idleTimeout | - | To define idle Timeout.  | 600 sec |idle |
