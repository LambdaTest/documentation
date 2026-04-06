---
id: lambdatest-selenium-advance-capabilities
title: TestMu AI Advanced Capabilities
sidebar_label: Advanced Capabilities
description: Configure advanced TestMu AI capabilities for video, network, console logging, tunnels, and more.
keywords:
  - testmu ai advanced selenium capabilities
  - selenium video recording capability
  - selenium network logs capability
  - selenium tunnel testing capability
  - testmu ai console log capture
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/testmu-selenium-advance-capabilities/
site_name: TestMu AI
slug: testmu-selenium-advance-capabilities/
canonical: https://www.testmuai.com/support/docs/testmu-selenium-advance-capabilities/
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
          "name": "Selenium Capabilities",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Advanced Capabilities",
          "item": `${BRAND_URL}/support/docs/lambdatest-selenium-advance-capabilities/`
        }]
      })
    }}
></script>

## Advanced Capabilities Reference
---
These capabilities extend beyond Selenium defaults and give you more control over video, screenshots, network, console logs, tunnels, and other session settings.

| Key | Values | Capability Description  | Default Value | Alias | Value Type | Example | Possible Errors |
|-----|--------|-------------------------|---------------|-------|------------|---------|-----------------|
| `video` | true, false | Records video of the complete screen while the test runs. You can record up to 10 minutes. By default, video is set to true. To turn off video recording, use the Desired Capabilities Generator or set the flag in your capabilities class.    <br/>`capabilities.setCapability("video",false);` | TRUE | |Boolean |`capabilities.setCapability("video",false);` |Case Sensitive <br />Unable to generate video <br/>Video is not playing in video player |
| `visual` | true, false | Records command-by-command screenshots at each test step. By default the flag is set to off. <br/>**Note:** 1. Test execution time increases when set to `true`. <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2. This capability takes a total of 150 screenshots. After that, use the screenshot command.  <br/>`capabilities.setCapability("visual",true)`;|FALSE |debug |Boolean |`capabilities.setCapability("visual",true);` |Case sensitive <br />Unable to generate screenshot   <br/>Screenshot is broken |
| `network` |true, false | Captures a recording for network packets while the test runs. By default, the network flag is set to false. <br/>**Note**: Test execution time increases when set to 'true'.  <br/>`capabilities.setCapability("network",true)`; <br />     | FALSE |networkLogs |Boolean |`capabilities.setCapability("network",true);` |Case sensitive <br />Network logs not supported|
| `console` | true, false | Records JavaScript logs for the test. By default, it is set to false. <br/>**Note:** Test execution time increases when set to 'true'.   <br/> `capabilities.setCapability("console",true)`; | FALSE |Capture browser console errors |String |JavaScript logs are recorded for the test. By default, it is set to false. `capabilities.setCapability("console","disable");` |Case Sensitive <br/>No error found <br />Not supported on this browser |
| `tunnel` | true, false | Tests your locally hosted web application with Lambda Tunnel, which establishes a TCP with TLS 1.2 secure connection between your system and the cloud servers. By default, the tunnel flag is set to false.  <br/>`capabilities.setCapability("tunnel",true);` <br/>Find more about Lambda Tunnel from our documentation to test on  [locally hosted web applications.](/docs/testing-locally-hosted-pages/)   | FALSE |local |Boolean |`capabilities.setCapability("tunnel",true);`<br/> Find more about TestMu AI Tunnel from our documentation to test on locally hosted web applications. |Case Sensitive <br/>Tunnel not running |
| `tunnelName` | Your desired tunnel name | Provides the tunnel identifier in your test suite capability when you want to execute the test through a particular tunnel.  <br/>`capabilities.setCapability("tunnelName","your desired tunnel name")`;| |localName |String |`capabilities.setCapability("tunnelName","your desired tunnel name");` |Case Sensitive   <br/>Tunnel not running   <br />Tunnel Name not exists |
| `timezone` | Example: UTC+07:00 | Sets a custom timezone for executing a test. <br/>`capabilities.setCapability("timezone","UTC+07:00")`; | UTC+00:00| |String |`capabilities.setCapability("timezone","UTC+07:00");` |Case sensitive <br/> Timezone not supported by OS <br />Timezone is different |
| `verboseWebDriverLogging` | true, false | Enables detailed Selenium logs to debug issues using insights including command execution, communication with the browser, and responses. <br />`capabilities.setCapability("verboseWebDriverLogging", true)` | FALSE | | Boolean | `capabilities.setCapability("verboseWebDriverLogging", true)` | 
| `network.mask` | true, false | Masks network traffic during automated testing. Use this capability when you need secure or anonymized network interactions during test execution - for example, when dealing with sensitive data, internal environments, or compliance requirements.<br />`capabilities.setCapability("network.mask", true)` | FALSE | | Boolean | `capabilities.setCapability("network.mask", true)` | Case Sensitive |

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
        TestMu AI Advanced Capabilities
      </span>
    </li>
  </ul>
</nav>
