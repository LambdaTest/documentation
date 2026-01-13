---
id: selenium-three-capabilities
title: Selenium Capabilities for version <= 3
hide_title: false
sidebar_label: Selenium Capabilities v3
description: This document list down all the desired capabilities that are supported by TestMu AI for Selenium version 3 and less
keywords:
  - testmu ai automation
  - selenium capabilities
  - selenium version <=3
url: https://www.testmu.ai/support/docs/selenium-four-capabilities
site_name: LambdaTest
slug: selenium-three-capabilities
canonical: https://www.testmu.ai/support/docs/selenium-three-capabilities/
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
          "name": "Selenium Capabilities v3",
          "item": `${BRAND_URL}/support/docs/selenium-three-capabilities/`
        }]
      })
    }}
></script>

| Key | Values | Capability Description | Default Value | Alias  | Value Type | Example | Possible Errors |
|-----|--------|------------------------|---------------|--------|------------|---------|-----------------|
| `browserName` | <ul><li>Chrome</li><li>Firefox</li><li>Safari</li><li>MS Edge – Microsoft Edge</li><li>Opera</li><li> IE – Internet Explorer</li></ul> | This is a mandatory & case-sensitive capability, which represents the name of the selected browser. <br/> `capabilities.setCapability("browserName", "Chrome");` | Mandatory |browser |String |`capabilities.setCapability("browserName","chrome");` |Case Sensitive   <br/> Invalid browser error |
| `version` | Example: 101.0 (Beta) | This capability is for the version of the browser mentioned above. This version you provide as a desired capability needs to be a valid one.  <br/> `capabilities.setCapability("version","78.0");`|
| `latest` | – | The latest keyword will help you run your test cases over the most recent browser version available at <BrandName />. <br/> `capabilities.setCapability("version","latest");` |
| `latest-N` | latest-5 | This would allow you to execute your test over an older browser version. Here, N represents an integer. So if you wish to test your website over a browser version, which was released 5 versions before the latest one. You can do so using the below capability: <br/>`capabilities.setCapability("version","latest-5");`|
| `platformName` | **Supported Windows:** <ul><li>Windows 11</li><li>Windows 10</li><li>Windows 8.1</li><li>Windows 8</li><li>Windows 7</li></ul> **Supported macOS:** <ul><li>Monterey</li><li>Big Sur</li><li>Catalina</li><li>Mojave</li><li>High Sierra</li><li>Sierra</li><li>El Capitan</li><li>Mavericks</li><li>Yosemite</li></ul> | If a platform for testing is not declared then <BrandName /> will map your test to a relevant operating system for the selected browser. <br/>So, if you wish to perform Selenium automation testing of your web application on Windows 11 then you need to mention the below line of code in your Desired Selenium Capabilities class.   <br/>``` capabilities.setCapability("platformName", "Windows 11"); ``` <br/>Similarly, for macOS, if you wish to perform Selenium automation testing of your web application on macOS Monterey, then you need to mention the below line of code in your Desired Selenium Capabilities class.  <br/>``` capabilities.setCapability("platformName", "macOS Monterey"); ``` |select on the basis of browser.   <br />For web <ol><li>Linux</li><li>win10</li></ol> |platform,OS |String |```capabilities.setCapability("platformName", "Windows 10");``` |Case Sensitive <br />Invalid Platform Error |
| `resolution` | <ul><li>1024×768</li><li>1280×800</li><li>1280×1024</li><li>1366×768</li><li>1440×900</li><li>1680×1050</li><li>1600×1200</li><li>1920×1200</li><li>1920×1080</li><li>2048×1536</li></ul>These values are OS Dependent, Verify from Capability generator   <br />String: "1920x1200" | This capability would help you to specify a particular screen resolution for your VM(Virtual Machine). By default, the resolution would be 1024×768.   <br/>``` capabilities.setCapability("resolution","1600x1200"); ``` |1920 x1080 |viewport |String |```capabilities.setCapability("resolution","1600x1200");``` |Case Sensitive   <br />Invalid Resolution error |
| `name` | Example: ToDo Sample Test   <br/>name: "Login testcase"| Represents the name of a test.   <br/>``` capabilities.setCapability("name", "ToDo Sample Test"); ```  | test-id |testname,sessionname,test |String |```capabilities.setCapability("name", "ToDo Sample Test");``` |Case Sensitive > 255 char |
| `driver_version` | Example: "driver_version" : "99.0" | Used to specify the driver version of the browser you want to run the test on. Make sure to provide a valid driver version corresponding to the browser used.   <br/>``` capabilities.setCapability("driver_version","99.0");|
| `build` | build: "Regression Job #567" <br/>Example: 5. | Represent the build number for your test.   <br/>` capabilities.setCapability("build", "5.1");` <br/> Note: Build string should be less than 255 character |Untitled Build |buildName,job,jobName |String |`capabilities.setCapability("build", "5.1");` <br />Note: Build string should be less than 255 character |Case Sensitive > 255 char
| `projectName` |Example: My Test <br />projectName: "Xaviar Project" |Represent the name of a project. <br/>` capabilities.setCapability("projectName", "Test");` <br/> | Untitled |projectName,project |String |`caps.setCapability("projectName","Test");` |Case Sensitive > 255 char |
| tags       | Example: &lbrace;"Tag 1", "Tag 2", "Tag 3"&rbrace; <br /> tags: &lbrace;"Staging", "Critical, "Sanity"&rbrace;  | Allows to group your automation tests.   <br/>`String[] tags = {"Tags"};`<br/>`caps.setCapability("tags", tags);` <br/> For more details, visit our [documentation](/support/docs/group-tests-using-custom-tags/).| | |String |```String[] tags = {"Tags"};``` <br />```caps.setCapability("tags", tags);```<br />For more details, visit our documentation. |Case Sensitive > 50 char |
| `buildTags` | Example: &lbrace;"Build Tags"&rbrace; <br />buildTags: &lbrace;"Build Tags","Staging"&rbrace;   | Allows to group your tests builds. <br/> `String[] buildTagList = {"Build Tag"};` <br/> `caps.setCapability("buildTags", buildTagList);` <br/> For more details, visit our [documentation](/support/docs/group-and-filter-your-test-builds-using-build-tags/). | | |String |```String[] buildTagList = {"Build Tag"};``` <br />```caps.setCapability("buildTags", buildTagList);``` <br />For more details, visit our documentation. 
|`lambda:loadExtension`| Example: `https://automation-prod-user-files.s3.amazonaws.com/extensions/orgId-XXXX/2.1.0_0.zip` | Allows to test `.zip` extension files uploaded on TestMu AI storage. <br/>```String[] extension = {"https://automation-prod-user-files.s3.amazonaws.com/extensions/orgId-XXXX/2.1.0_0.zip"};```<br/>```capabilities.setCapability("lambda:loadExtension", extension);```<br/>To upload extension on TestMu AI storage, refer to our [documentation](/support/api-doc/#/extensions/UploadExtensions).         |  
|`lambda:userFiles`| Example:804402.png | Allows to test the uploaded files on LambdaTest.   <br/>``` capabilities.setCapability("lambda:userFiles", file); ```  <br/>For more details about uploading files, visit our [documentation](/support/docs/upload-files-using-testmu/). | -|
|`commandLog`| Example: true/false | Allows to hide the command logs.   <br/>``` capabilities.setCapability("commandLog", false); ```  <br/> | FALSE |commandLogs |Boolean |
|`systemLog`| Example: true/false | Allows to hide the Selenium/Appium logs.   <br/>``` capabilities.setCapability("systemLog", false); ```  <br/> |  FALSE |seleniumLogs |Boolean |
|`network.http2` | network.http2: true | This enables HTTP2 Support in Martian and has to be used along with network capability. |  FALSE | |Boolean | 
|`DisableXFHeaders`| DisableXFHeaders:true | This removes the X-Fowarded Headers added by Martian. |  FALSE | | Boolean |
|`network.debug` | network.debug: true | This enables Debug Logging in Martian. Martian will log every request and response. |  FALSE | | Boolean | 
|`ignoreFfOptionsArgs` | ignoreFfOptionsArgs:true | To ignore args in moz:firefoxOptions. |  FALSE | | Boolean | 
|`updateBuildStatusOnSuccess` | true/false | To update build Status on replication of test name |  FALSE | | Boolean | 
