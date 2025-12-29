---
id: lambdatest-selenium-advance-capabilities
title: TestMu AI Advanced Capabilities
hide_title: false
sidebar_label: TestMu AI Advanced Capabilities
description: This document list down the advance TestMu AI 
keywords:
  - testmu ai automation
  - selenium automation grid
  - selenium advance testmu ai capbilities
url: https://www.lambdatest.com/support/docs/lambdatest-selenium-advance-capabilities/
site_name: LambdaTest
slug: lambdatest-selenium-advance-capabilities/
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
          "name": "Selenium Capabilities",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Advance Capabilities",
          "item": "https://www.lambdatest.com/support/docs/lambdatest-selenium-advance-capabilities/"
        }]
      })
    }}
></script>

| Key | Values | Capability Description  | Default Value | Alias | Value Type | Example | Possible Errors |
|-----|--------|-------------------------|---------------|-------|------------|---------|-----------------|
| `video` | true, false | By default, the video is set as true. This capability helps in video recording of the complete screen while the test gets executed. You can record maximum up to 10 minutes. In case you need to turn off the video recording, you can do so by turning off the button on our Desired Capabilities Generator. <br/>If you turn the video flag off, then for Java, it may provide the below piece of code in the capabilities class.    <br/>`capabilities.setCapability("video",false);` | TRUE | |Boolean |`capabilities.setCapability("video",false);` |Case Sensitive <br />Unable to generate video <br/>Video is not playing in video player |
| `visual` | true, false | Command by command screenshots will be recorded at each test step. By default the flag is set as off. <br/>**Note:** 1. Test execution time will increase if it’s set as `true`. <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2. This capability will only take total of 150 screenshots, after that you will have to use screenshot command.  <br/>`capabilities.setCapability("visual",true)`;|FALSE |debug |Boolean |`capabilities.setCapability("visual",true);` |Case sensitive <br />Unable to generate screenshot   <br/>Screenshot is broken |
| `network` |true, false | Captures a recording for network packets while the test gets executed. By default, the network flag is set as false. <br/>**Note**: test execution time will increase if it’s set as ‘true’.  <br/>`capabilities.setCapability("network",true)`; <br />     | FALSE |networkLogs |Boolean |`capabilities.setCapability("network",true);` |Case sensitive <br />Network logs not supported|
| `console` | true, false | JavaScript logs will be recorded for the test. By default, it is set as false. <br/>**Note:** test execution time will increase if it’s set as ‘true’.   <br/> `capabilities.setCapability("console",true)`; | FALSE |Capture browser console errors |String |Javascript logs will be recorded for the test. By default, it is set as false. `capabilities.setCapability("console","disable");` |Case Sensitive <br/>No error found <br />Not supported on this browser |
| `tunnel` | true, false | To test your locally hosted web application with Lambda Tunnel, which establishes an TCP with TLS 1.2  secure connection between your system and our cloud servers. By default, the tunnel flag, will be set as false.  <br/>`capabilities.setCapability("tunnel",true);` <br/>Find more about Lambda Tunnel from our documentation to test on  [locally hosted web applications.](/docs/testing-locally-hosted-pages/)   | FALSE |local |Boolean |`capabilities.setCapability("tunnel",true);`<br/> Find more about LambdaTest Tunnel from our documentation to test on locally hosted web applications. |Case Sensitive <br/>Tunnel not running |
| `tunnelName` | Your desire tunnel name | To provide the tunnel identifier in your test suite capability when user wants to execute the test through a particular tunnel  <br/>`capabilities.setCapability("tunnelName","your desire tunnel name")`;| |localName |String |`capabilities.setCapability("tunnelName","your desire tunnel name");` |Case Sensitive   <br/>Tunnel not running   <br />Tunnel Name not exists |
| `timezone` | Example: UTC+07:00 | Represents the custom timezone you select for executing a test. <br/>`capabilities.setCapability("timezone","UTC+07:00")`; | UTC+00:00| |String |`capabilities.setCapability("timezone","UTC+07:00");` |Case sensitive <br/> Timezone not supported by OS <br />Timezone is different |
| `verboseWebDriverLogging` | true, false | To enable detailed Selenium logs to debug issues of your application using detailed insights including command execution, communication with the browser, and responses. <br />`capabilities.setCapability("verboseWebDriverLogging", true)` | FALSE | | Boolean | `capabilities.setCapability("verboseWebDriverLogging", true)` | 
| `network.mask` | true, false | This capability allows you to mask network traffic during automated testing. This capability is useful when you require secure or anonymized network interactions during test execution — for example, when dealing with sensitive data, internal environments, or compliance requirements.<br />`capabilities.setCapability("network.mask", true)` | FALSE | | Boolean | `capabilities.setCapability("network.mask", true)` | Case Sensitive |
