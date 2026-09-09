---
id: selenium-four-capabilities
title: Selenium Capabilities for Version 4 and Above
sidebar_label: Selenium 4 Capabilities
description: Configure desired capabilities for Selenium version 4 and above on the TestMu AI cloud grid.
keywords:
  - selenium 4 capabilities setup
  - selenium v4 desired capabilities
  - configure selenium 4 browser version
  - selenium 4 platform capabilities
  - selenium v4 testmu ai grid settings
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/selenium-four-capabilities/
site_name: TestMu AI
slug: selenium-four-capabilities/
canonical: https://www.testmuai.com/support/docs/selenium-four-capabilities/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";


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

In addition to the capabilities supported in [Selenium version 3](/support/docs/selenium-three-capabilities/), Selenium version 4 introduces the following new capabilities.

## Capabilities Reference
---
Use these capabilities to configure authentication, browser version, platform, and session settings for Selenium 4.

| Key | Values | Capability Description | Default Value | Alias  | Value Type | Example | Possible Errors |
|-----|--------|------------------------|---------------|--------|------------|---------|-----------------|
| `user` |```user: "Username"```   <br /> Example: YOUR_LAMBDATEST_USERNAME | Find this under your TestMu AI profile. If you are already logged into TestMu AI, the Desired Selenium Capabilities Generator automatically fetches your TestMu AI username under the desired Selenium capabilities class.   <br/>``` capabilities.setCapability("user","YOUR_LAMBDATEST_USERNAME"); ``` |Mandatory |username  |String |If you are already logged into TestMu AI then the Desired Selenium Capabilities Generator automatically fetches your TestMu AI username under the desired Selenium capabilities class.   <br/>```capabilities.setCapability("user","YOUR_LAMBDATEST_USERNAME");```|401   <br/>Unauthorized   <br/>case sensitive |
| `accessKey`|```accessKey: "Access Key"```   <br /> Example: YOUR_LAMBDATEST_ACCESS_KEY | Find this under your TestMu AI profile. If you are already logged into TestMu AI, the Desired Selenium Capabilities Generator automatically fetches your TestMu AI Access Key under the desired Selenium capabilities class.   <br/>``` capabilities.setCapability("accessKey","YOUR_LAMBDATEST_ACCESS_KEY");```  |Mandatory |key |String |```capabilities.setCapability(""accessKey"",""YOUR_LAMBDATEST_ACCESS_KEY"");``` |401   <br/>Unauthorized   <br/>case sensitive |                                                                             
| `driver_version`| Example: "driver_version" : "99.0"| Specifies the driver version of the browser you want to run the test on. Provide a valid driver version corresponding to the browser used.   <br/> `capabilities.setCapability("driver_version","99.0");` | Dynamic map by system |driverVersion,driver |String |
|  `browserVersion` |  Ex: 101.0 (Beta) |  Declares the specific browser version on which you want your test automation scripts to run using the Selenium Automation Grid. Provide a valid browser version in your desired Selenium capabilities class.    <br/>``` capabilities.setCapability("browserVersion","79.0"); ```<br />You can use "latest", "latest-1" and so on to select the latest browser version.   | latest |version |String |```capabilities.setCapability("browserVersion","91.0");```<br />```capabilities.setCapability("browserVersion","latest");```<br /> ```capabilities.setCapability("browserVersion","latest-1");``` |Case Sensitive <br />Invalid version error |
| `latest` | - | The latest keyword runs your test cases on the most recent browser version available at TestMu AI.   <br/>``` capabilities.setCapability("version","latest"); ```   |
| `latest-N` | latest-5 | This allows you to execute your test on older browser versions. Here, N represents an integer. To test your website on the 5 most recently released browser versions, use the below capability:   <br/> `capabilities.setCapability("version","latest-5");`|
| `platformName` |  **Supported Windows:** <ul><li>Windows 11</li><li>Windows 10</li><li>Windows 8.1</li><li>Windows 8</li><li>Windows 7</li></ul> **Supported macOS:** <ul><li>Monterey</li><li>Big Sur</li><li>Catalina</li><li>Mojave</li><li>High Sierra</li><li>Sierra</li><li>El Capitan</li><li>Mavericks</li><li>Yosemite</li></ul> | Specifies the platform on which you want to run your Selenium automation testing. If you do not declare a platform, TestMu AI maps your test to a relevant operating system for the selected browser. <br/>To run Selenium automation testing on Windows 11, add the below line of code in your Desired Selenium Capabilities class:   <br/>``` capabilities.setCapability("platformName", "Windows 11"); ``` <br/>For macOS Monterey, add the below line:  <br/>``` capabilities.setCapability("platformName", "macOS Monterey"); ``` | Select based on browser. <br/> <ul><li>Linux</li><li>Windows 10</li></ul>|platform,OS | String |```capabilities.setCapability("platformName", "Windows 10");``` |Case Sensitive <br/> Invalid Platform Error |
| selenium_version | Example: `"selenium_version", "4.0.0"` | Defines the Selenium version for the test session.  | Dynamic map by system |seleniumVersion,seVersion | String |
| idleTimeout | - | Defines the idle timeout for the session.  | 600 sec |idle |

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
        Selenium Capabilities for Version 4 and Above
      </span>
    </li>
  </ul>
</nav>
