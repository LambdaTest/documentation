---
id: selenium-three-capabilities
title: Selenium Capabilities for Version 3 and Below
sidebar_label: Selenium 3 Capabilities
description: Configure desired capabilities for Selenium version 3 and below on the TestMu AI cloud grid.
keywords:
  - selenium 3 capabilities setup
  - selenium v3 desired capabilities
  - configure selenium 3 browser platform
  - selenium 3 build name resolution
  - selenium v3 testmu ai grid capabilities
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/selenium-three-capabilities/
site_name: TestMu AI
slug: selenium-three-capabilities/
canonical: https://www.testmuai.com/support/docs/selenium-three-capabilities/
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
          "name": "Selenium Capabilities v3",
          "item": `${BRAND_URL}/support/docs/selenium-three-capabilities/`
        }]
      })
    }}
></script>

## Capabilities Reference
---
Use these capabilities to configure browser, platform, and test metadata for Selenium version 3 and below.

| Key | Values | Capability Description | Default Value | Alias  | Value Type | Example | Possible Errors |
|-----|--------|------------------------|---------------|--------|------------|---------|-----------------|
| `browserName` | <ul><li>Chrome</li><li>Firefox</li><li>Safari</li><li>MS Edge - Microsoft Edge</li><li>Opera</li><li> IE - Internet Explorer</li></ul> | This is a mandatory and case-sensitive capability that represents the name of the selected browser. <br/> `capabilities.setCapability("browserName", "Chrome");` | Mandatory |browser |String |`capabilities.setCapability("browserName","chrome");` |Case Sensitive   <br/> Invalid browser error |
| `version` | Example: 101.0 (Beta) | This capability sets the version of the browser mentioned above. The version you provide as a desired capability must be valid.  <br/> `capabilities.setCapability("version","78.0");`|
| `latest` | - | The latest keyword runs your test cases on the most recent browser version available at TestMu AI. <br/> `capabilities.setCapability("version","latest");` |
| `latest-N` | latest-5 | This allows you to execute your test on an older browser version. Here, N represents an integer. If you want to test your website on a browser version released 5 versions before the latest one, use the below capability: <br/>`capabilities.setCapability("version","latest-5");`|
| `platformName` | **Supported Windows:** <ul><li>Windows 11</li><li>Windows 10</li><li>Windows 8.1</li><li>Windows 8</li><li>Windows 7</li></ul> **Supported macOS:** <ul><li>Monterey</li><li>Big Sur</li><li>Catalina</li><li>Mojave</li><li>High Sierra</li><li>Sierra</li><li>El Capitan</li><li>Mavericks</li><li>Yosemite</li></ul> | If you do not declare a platform, TestMu AI maps your test to a relevant operating system for the selected browser. <br/>To run Selenium automation testing on Windows 11, add the below line of code in your Desired Selenium Capabilities class:   <br/>``` capabilities.setCapability("platformName", "Windows 11"); ``` <br/>For macOS Monterey, add the below line:  <br/>``` capabilities.setCapability("platformName", "macOS Monterey"); ``` |select on the basis of browser.   <br />For web <ol><li>Linux</li><li>win10</li></ol> |platform,OS |String |```capabilities.setCapability("platformName", "Windows 10");``` |Case Sensitive <br />Invalid Platform Error |
| `resolution` | <ul><li>1024x768</li><li>1280x800</li><li>1280x1024</li><li>1366x768</li><li>1440x900</li><li>1680x1050</li><li>1600x1200</li><li>1920x1200</li><li>1920x1080</li><li>2048x1536</li></ul>These values are OS Dependent, Verify from Capability generator   <br />String: "1920x1200" | This capability specifies a particular screen resolution for your VM (Virtual Machine). By default, the resolution is 1024x768.   <br/>``` capabilities.setCapability("resolution","1600x1200"); ``` |1920 x1080 |viewport |String |```capabilities.setCapability("resolution","1600x1200");``` |Case Sensitive   <br />Invalid Resolution error |
| `name` | Example: ToDo Sample Test   <br/>name: "Login testcase"| Represents the name of a test.   <br/>``` capabilities.setCapability("name", "ToDo Sample Test"); ```  | test-id |testname,sessionname,test |String |```capabilities.setCapability("name", "ToDo Sample Test");``` |Case Sensitive > 255 char |
| `driver_version` | Example: "driver_version" : "99.0" | Specifies the driver version of the browser you want to run the test on. Provide a valid driver version corresponding to the browser used.   <br/>``` capabilities.setCapability("driver_version","99.0");|
| `build` | build: "Regression Job #567" <br/>Example: 5. | Represents the build number for your test.   <br/>` capabilities.setCapability("build", "5.1");` <br/> Note: Build string should be less than 255 characters. |Untitled Build |buildName,job,jobName |String |`capabilities.setCapability("build", "5.1");` <br />Note: Build string should be less than 255 characters. |Case Sensitive > 255 char
| `projectName` |Example: My Test <br />projectName: "Xaviar Project" |Represents the name of a project. <br/>` capabilities.setCapability("projectName", "Test");` <br/> | Untitled |projectName,project |String |`caps.setCapability("projectName","Test");` |Case Sensitive > 255 char |
| tags       | Example: &lbrace;"Tag 1", "Tag 2", "Tag 3"&rbrace; <br /> tags: &lbrace;"Staging", "Critical, "Sanity"&rbrace;  | Groups your automation tests.   <br/>`String[] tags = {"Tags"};`<br/>`caps.setCapability("tags", tags);` <br/> For more details, visit our [documentation](/support/docs/group-tests-using-custom-tags/).| | |String |```String[] tags = {"Tags"};``` <br />```caps.setCapability("tags", tags);```<br />For more details, visit our documentation. |Case Sensitive > 50 char |
| `buildTags` | Example: &lbrace;"Build Tags"&rbrace; <br />buildTags: &lbrace;"Build Tags","Staging"&rbrace;   | Groups your test builds. <br/> `String[] buildTagList = {"Build Tag"};` <br/> `caps.setCapability("buildTags", buildTagList);` <br/> For more details, visit our [documentation](/support/docs/group-and-filter-your-test-builds-using-build-tags/). | | |String |```String[] buildTagList = {"Build Tag"};``` <br />```caps.setCapability("buildTags", buildTagList);``` <br />For more details, visit our documentation. 
|`lambda:loadExtension`| Example: `https://automation-prod-user-files.s3.amazonaws.com/extensions/orgId-XXXX/2.1.0_0.zip` | Tests `.zip` extension files uploaded on TestMu AI storage. <br/>```String[] extension = {"https://automation-prod-user-files.s3.amazonaws.com/extensions/orgId-XXXX/2.1.0_0.zip"};```<br/>```capabilities.setCapability("lambda:loadExtension", extension);```<br/>To upload an extension on TestMu AI storage, refer to our [documentation](/support/api-doc/#/extensions/UploadExtensions).         |  
|`lambda:userFiles`| Example:804402.png | Tests the uploaded files on TestMu AI.   <br/>``` capabilities.setCapability("lambda:userFiles", file); ```  <br/>For more details about uploading files, visit our [documentation](/support/docs/upload-files-using-testmu/). | -|
|`commandLog`| Example: true/false | Hides or shows the command logs.   <br/>``` capabilities.setCapability("commandLog", false); ```  <br/> | FALSE |commandLogs |Boolean |
|`systemLog`| Example: true/false | Hides or shows the Selenium/Appium logs.   <br/>``` capabilities.setCapability("systemLog", false); ```  <br/> |  FALSE |seleniumLogs |Boolean |
|`network.http2` | network.http2: true | Enables HTTP2 support in Martian. Use this along with the network capability. |  FALSE | |Boolean | 
|`DisableXFHeaders`| DisableXFHeaders:true | Removes the X-Forwarded Headers added by Martian. |  FALSE | | Boolean |
|`network.debug` | network.debug: true | Enables debug logging in Martian. Martian logs every request and response. |  FALSE | | Boolean | 
|`ignoreFfOptionsArgs` | ignoreFfOptionsArgs:true | Ignores args in moz:firefoxOptions. |  FALSE | | Boolean | 
|`updateBuildStatusOnSuccess` | true/false | Updates build status on replication of test name. |  FALSE | | Boolean | 

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
        Selenium Capabilities for Version 3 and Below
      </span>
    </li>
  </ul>
</nav>
