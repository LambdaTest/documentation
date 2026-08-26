---
id: selenium-automation-capabilities
title: How to Configure Selenium Capabilities on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Automation Capabilities"
description: "Configure Selenium capabilities on TestMu AI: default, Selenium 3, Selenium 4, and advanced capabilities for cloud browser testing."
keywords:
  - selenium capabilities generator
  - configure selenium test capabilities
  - selenium grid capability settings
  - selenium webdriver capabilities testmu ai
  - selenium automation capabilities setup
  - declare capabilities selenium
  - selenium default capabilities list
  - selenium 3 capabilities setup
  - selenium 4 capabilities setup
  - testmu ai advanced selenium capabilities
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/selenium-automation-capabilities/
site_name: TestMu AI
slug: selenium-automation-capabilities/
canonical: https://www.testmuai.com/support/docs/selenium-automation-capabilities/
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
          "name": "Capabilities In Selenium",
          "item": `${BRAND_URL}/support/docs/selenium-automation-capabilities/`
        }]
      })
    }}
></script>

# How to Configure Selenium Capabilities on TestMu AI
---

Capabilities in Selenium test scripts, encoded as key-value pairs, allow you to define specific test environment requirements. These requirements include operating systems, browser combinations, versions, and other parameters supported by TestMu AI's Cloud Grid to run your automation framework tests.

:::tip
You can also use TestMu AI [Automation Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to autogenerate your required capabilities class to run Selenium test scripts on TestMu AI.
:::

>The values provided for any capability are both **space-insensitive** and **case-insensitive**. This means that any value you provide as **Mac OS X 10.13** or **mac os x 10.13** would be correct.

## Default Capabilities
---
Start with the built-in capabilities that Selenium supports for browser session configuration.

| Key | Values | Capability Description |
|-----|--------|------------------------|
| `javascriptEnabled` | true, false | Enables or disables JavaScript execution support based on the provided input.|
| `databaseEnabled` | true, false | Determines whether a session can communicate with the database. |
| `locationContextEnabled` | true, false | Determines whether a session can use features related to different geographic locations.|
| `applicationCacheEnabled` | true, false | Determines whether a session can use the application cache.|
| `browserConnectionEnabled` | true, false | Determines the browser connectivity for the query involved in the session. Also checks whether the end user can disable the session if required. |
| `webStorageEnabled` | true, false | Determines whether a session can connect with [storage objects](https://www.w3.org/TR/2009/WD-webstorage-20091029/).|
| `acceptSslCerts` | true, false | Determines whether a session should accept all SSL certificates by default.|
| `unexpectedAlertBehaviour` | accept, dismiss, ignore | Determines the browser action for handling alerts before pointing the UnhandledAlertException. |
| `elementScrollBehavior` | integer | Determines the scrolling behavior based on the provided input. You can align elements to top(0) or bottom(1) with respect to the elements scroll-ability inside the viewport. By default the value is set to 1, aligning the scroll behavior to top. This is compatible with IE and Firefox (since 2.36). |
| `preventCrossSiteTracking` | true, false | Blocks or unblocks cross-site tracking. |

## Selenium 3 Capabilities (and below)
---
Beyond the defaults, use the following capabilities to configure browser, platform, and test metadata for Selenium version 3 and below.

| Key | Values | Capability Description | Default Value | Alias  | Value Type | Example | Possible Errors |
|-----|--------|------------------------|---------------|--------|------------|---------|-----------------|
| `browserName` | <ul><li>Chrome</li><li>Firefox</li><li>Safari</li><li>MS Edge - Microsoft Edge</li><li>Opera</li><li> IE - Internet Explorer</li></ul> | This is a mandatory and case-sensitive capability that represents the name of the selected browser. <br/> `capabilities.setCapability("browserName", "Chrome");` | Mandatory |browser |String |`capabilities.setCapability("browserName","chrome");` |Case Sensitive   <br/> Invalid browser error |
| `version` | Example: 101.0 (Beta) | This capability sets the version of the browser mentioned above. The version you provide as a capability must be valid.  <br/> `capabilities.setCapability("version","78.0");`|
| `latest` | - | The latest keyword runs your test cases on the most recent browser version available at TestMu AI. <br/> `capabilities.setCapability("version","latest");` |
| `latest-N` | latest-5 | This allows you to execute your test on an older browser version. Here, N represents an integer. If you want to test your website on a browser version released 5 versions before the latest one, use the below capability: <br/>`capabilities.setCapability("version","latest-5");`|
| `platformName` | **Supported Windows:** <ul><li>Windows 11</li><li>Windows 10</li><li>Windows 8.1</li><li>Windows 8</li><li>Windows 7</li></ul> **Supported macOS:** <ul><li>Monterey</li><li>Big Sur</li><li>Catalina</li><li>Mojave</li><li>High Sierra</li><li>Sierra</li><li>El Capitan</li><li>Mavericks</li><li>Yosemite</li></ul> | If you do not declare a platform, TestMu AI maps your test to a relevant operating system for the selected browser. <br/>To run Selenium automation testing on Windows 11, add the below line of code in your Desired Selenium Capabilities class:   <br/>``` capabilities.setCapability("platformName", "Windows 11"); ``` <br/>For macOS Monterey, add the below line:  <br/>``` capabilities.setCapability("platformName", "macOS Monterey"); ``` |select on the basis of browser.   <br />For web <ol><li>Linux</li><li>win10</li></ol> |platform,OS |String |```capabilities.setCapability("platformName", "Windows 10");``` |Case Sensitive <br />Invalid Platform Error |
| `resolution` | <ul><li>1024x768</li><li>1280x800</li><li>1280x1024</li><li>1366x768</li><li>1440x900</li><li>1680x1050</li><li>1600x1200</li><li>1920x1200</li><li>1920x1080</li><li>2048x1536</li></ul>These values are OS Dependent, Verify from Capability generator   <br />String: "1920x1200" | This capability specifies a particular screen resolution for your VM (Virtual Machine). By default, the resolution is 1024x768.   <br/>``` capabilities.setCapability("resolution","1600x1200"); ``` |1920 x1080 |viewport |String |```capabilities.setCapability("resolution","1600x1200");``` |Case Sensitive   <br />Invalid Resolution error |
| `name` | Example: ToDo Sample Test   <br/>name: "Login testcase"| Represents the name of a test.   <br/>``` capabilities.setCapability("name", "ToDo Sample Test"); ```  | test-id |testname,sessionname,test |String |```capabilities.setCapability("name", "ToDo Sample Test");``` |Case Sensitive > 255 char |
| `driver_version` | Example: "driver_version" : "99.0" | Specifies the driver version of the browser you want to run the test on. Provide a valid driver version corresponding to the browser used.   <br/>``` capabilities.setCapability("driver_version","99.0");|
| `build` | build: "Regression Job #567" <br/>Example: 5. | Represents the build number for your test.   <br/>` capabilities.setCapability("build", "5.1");` <br/> Note: Build string should be less than 255 characters. |Untitled Build |buildName,job,jobName |String |`capabilities.setCapability("build", "5.1");` <br />Note: Build string should be less than 255 characters. |Case Sensitive > 255 char
| `projectName` |Example: My Test <br />projectName: "Xaviar Project" |Represents the name of a project. <br/>` capabilities.setCapability("projectName", "Test");` <br/> | Untitled |projectName,project |String |`caps.setCapability("projectName","Test");` |Case Sensitive > 255 char |
| tags       | Example: &lbrace;"Tag 1", "Tag 2", "Tag 3"&rbrace; <br /> tags: &lbrace;"Staging", "Critical", "Sanity"&rbrace;  | Groups your automation tests.   <br/>`String[] tags = {"Tags"};`<br/>`caps.setCapability("tags", tags);` <br/> For more details, visit our [group tests using custom tags](/support/docs/filter-your-selenium-tests/#group-tests-using-custom-tags) guide.| | |String |```String[] tags = {"Tags"};``` <br />```caps.setCapability("tags", tags);```<br />For more details, visit our documentation. |Case Sensitive > 50 char |
| `buildTags` | Example: &lbrace;"Build Tags"&rbrace; <br />buildTags: &lbrace;"Build Tags","Staging"&rbrace;   | Groups your test builds. <br/> `String[] buildTagList = {"Build Tag"};` <br/> `caps.setCapability("buildTags", buildTagList);` <br/> For more details, visit our [group and filter test builds using build tags](/support/docs/filter-your-selenium-tests/#group-and-filter-builds-using-build-tags) guide. | | |String |```String[] buildTagList = {"Build Tag"};``` <br />```caps.setCapability("buildTags", buildTagList);``` <br />For more details, visit our documentation. 
|`lambda:loadExtension`| Example: `https://automation-prod-user-files.s3.amazonaws.com/extensions/orgId-XXXX/2.1.0_0.zip` | Tests `.zip` extension files uploaded on TestMu AI storage. <br/>```String[] extension = {"https://automation-prod-user-files.s3.amazonaws.com/extensions/orgId-XXXX/2.1.0_0.zip"};```<br/>```capabilities.setCapability("lambda:loadExtension", extension);```<br/>To upload an extension on TestMu AI storage, refer to the [upload extensions API](/support/api-doc/#/extensions/UploadExtensions).         |  
|`lambda:userFiles`| Example:804402.png | Tests the uploaded files on TestMu AI.   <br/>``` capabilities.setCapability("lambda:userFiles", file); ```  <br/>For more details about uploading files, visit our upload files using TestMu AI guide. | -|
|`commandLog`| Example: true/false | Hides or shows the command logs.   <br/>``` capabilities.setCapability("commandLog", false); ```  <br/> | FALSE |commandLogs |Boolean |
|`systemLog`| Example: true/false | Hides or shows the Selenium/Appium logs.   <br/>``` capabilities.setCapability("systemLog", false); ```  <br/> |  FALSE |seleniumLogs |Boolean |
|`network.http2` | network.http2: true | Enables HTTP2 support in Martian. Use this along with the network capability. |  FALSE | |Boolean | 
|`DisableXFHeaders`| DisableXFHeaders:true | Removes the X-Forwarded Headers added by Martian. |  FALSE | | Boolean |
|`network.debug` | network.debug: true | Enables debug logging in Martian. Martian logs every request and response. |  FALSE | | Boolean | 
|`ignoreFfOptionsArgs` | ignoreFfOptionsArgs:true | Ignores args in moz:firefoxOptions. |  FALSE | | Boolean | 
|`updateBuildStatusOnSuccess` | true/false | Updates build status on replication of test name. |  FALSE | | Boolean | 

## Selenium 4 Capabilities (and above)
---
Selenium version 4 supports everything covered in the previous section and introduces the following additional capabilities. Use these to configure authentication, browser version, platform, and session settings for Selenium 4.

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

## Advanced Capabilities
---
Beyond the version-specific capabilities above, the following ones give you more control over video, screenshots, network, console logs, tunnels, and other session settings.

| Key | Values | Capability Description  | Default Value | Alias | Value Type | Example | Possible Errors |
|-----|--------|-------------------------|---------------|-------|------------|---------|-----------------|
| `video` | true, false | Records video of the complete screen while the test runs. You can record up to 10 minutes. By default, video is set to true. To turn off video recording, use the Capabilities Generator or set the flag in your capabilities class.    <br/>`capabilities.setCapability("video",false);` | TRUE | |Boolean |`capabilities.setCapability("video",false);` |Case Sensitive <br />Unable to generate video <br/>Video is not playing in video player |
| `visual` | true, false | Records command-by-command screenshots at each test step. By default the flag is set to off. <br/>**Note:** 1. Test execution time increases when set to `true`. <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2. This capability takes a total of 150 screenshots. After that, use the screenshot command.  <br/>`capabilities.setCapability("visual",true)`;|FALSE |debug |Boolean |`capabilities.setCapability("visual",true);` |Case sensitive <br />Unable to generate screenshot   <br/>Screenshot is broken |
| `network` |true, false | Captures a recording for network packets while the test runs. By default, the network flag is set to false. <br/>**Note**: Test execution time increases when set to 'true'.  <br/>`capabilities.setCapability("network",true)`; <br />     | FALSE |networkLogs |Boolean |`capabilities.setCapability("network",true);` |Case sensitive <br />Network logs not supported|
| `console` | true, false | Records JavaScript logs for the test. By default, it is set to false. <br/>**Note:** Test execution time increases when set to 'true'.   <br/> `capabilities.setCapability("console",true)`; | FALSE |Capture browser console errors |String |JavaScript logs are recorded for the test. By default, it is set to false. `capabilities.setCapability("console","disable");` |Case Sensitive <br/>No error found <br />Not supported on this browser |
| `tunnel` | true, false | Tests your locally hosted web application with Lambda Tunnel, which establishes a TCP with TLS 1.2 secure connection between your system and the cloud servers. By default, the tunnel flag is set to false.  <br/>`capabilities.setCapability("tunnel",true);` <br/>Find more about Lambda Tunnel from our documentation to test on  [locally hosted web applications.](/docs/testing-locally-hosted-pages/)   | FALSE |local |Boolean |`capabilities.setCapability("tunnel",true);`<br/> Find more about TestMu AI Tunnel from our documentation to test on locally hosted web applications. |Case Sensitive <br/>Tunnel not running |
| `tunnelName` | Your desired tunnel name | Provides the tunnel identifier in your test suite capability when you want to execute the test through a particular tunnel.  <br/>`capabilities.setCapability("tunnelName","your desired tunnel name")`;| |localName |String |`capabilities.setCapability("tunnelName","your desired tunnel name");` |Case Sensitive   <br/>Tunnel not running   <br />Tunnel Name not exists |
| `timezone` | Example: UTC+07:00 | Sets a custom timezone for executing a test. <br/>`capabilities.setCapability("timezone","UTC+07:00")`; | UTC+00:00| |String |`capabilities.setCapability("timezone","UTC+07:00");` |Case sensitive <br/> Timezone not supported by OS <br />Timezone is different |
| `verboseWebDriverLogging` | true, false | Enables detailed Selenium logs to debug issues using insights including command execution, communication with the browser, and responses. <br />`capabilities.setCapability("verboseWebDriverLogging", true)` | FALSE | | Boolean | `capabilities.setCapability("verboseWebDriverLogging", true)` | 
| `network.mask` | true, false | Masks network traffic during automated testing. Use this capability when you need secure or anonymized network interactions during test execution - for example, when dealing with sensitive data, internal environments, or compliance requirements.<br />`capabilities.setCapability("network.mask", true)` | FALSE | | Boolean | `capabilities.setCapability("network.mask", true)` | Case Sensitive |

## Explore More Capabilities
---
Once you have configured the capabilities above, explore the related guides below for headless testing, custom profiles, network controls, logs, tunnels, and other advanced session features.

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
    <p>Understand the capabilities supported in TestMu AI for Selenium version 3</p>
  </div>
  </a>

  <a href = "/support/docs/selenium-four-capabilities/">
  <div className="support_inners">
    <h3>Selenium v4</h3>
    <p>Understand the capabilities supported in TestMu AI for Selenium version 4</p>
  </div>
  </a>

  <a href = "/support/docs/testmu-selenium-advance-capabilities/">
  <div className="support_inners">
    <h3>TestMu AI Advanced Capabilities</h3>
    <p>Discover additional capabilities offered by TestMu AI beyond Selenium defaults for more control over test execution.</p>
  </div>
  </a>
  
  <a href = "/support/docs/perform-selenium-automation-on-headless-browsers/">
  <div className="support_inners">
    <h3>Headless Browser Testing</h3>
    <p>Run automated tests in browsers without a graphical user interface.</p>
  </div>
  </a>

  <a href = "/support/docs/upload-custom-chrome-profile/">
  <div className="support_inners">
    <h3>Custom Chrome Profile</h3>
    <p>Configure a custom Chrome profile with specific extensions or settings for your tests.</p>
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

  <a href="/support/docs/generate-multiple-lighthouse-reports/#view-lighthouse-performance-metrics">
  <div className="support_inners">
    <h3>Lighthouse Performance Metrics</h3>
    <p>Analyze website performance metrics within your tests using Lighthouse.</p>
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
    <p>Use debugging tools provided by TestMu AI to troubleshoot your tests.</p>
  </div>
  </a>

  <a href="/support/docs/debugging-options/#telemetry-logs">
  <div className="support_inners">
    <h3>Telemetry Logs</h3>
    <p>Access detailed logs generated during your test execution for analysis.</p>
  </div>
  </a>

  <a href="/support/docs/smart-wait/">
  <div className="support_inners">
    <h3>SmartWait Functionality</h3>
    <p>Use TestMu AI's SmartWait feature to wait for elements to become interactive before proceeding with tests.</p>
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
    <p>Use TestMu AI's autohealing functionality to recover automatically from unexpected session issues.</p>
  </div>
  </a>

  <a href="/support/docs/filter-your-selenium-tests/#command-annotations">
  <div className="support_inners">
    <h3>Command Annotations</h3>
    <p>Use TestMu AI's command annotations to control test execution flow.</p>
  </div>
  </a>  

  <a href="/support/docs/debugging-options/#har-log-viewer">
  <div className="support_inners">
    <h3>HAR Logs</h3>
    <p>Analyze network traffic during your tests using HTTP Archive (HAR) logs.</p>
  </div>
  </a>  

  <a href="/support/docs/selenium-mask-your-data/">
  <div className="support_inners">
    <h3>Mask your Sensitive Data</h3>
    <p>Protect sensitive information like passwords or tokens from being exposed in test logs.</p>
  </div>
  </a>

  <a href="/support/docs/ie-mode-on-edge/">
  <div className="support_inners">
    <h3>Test in IE Mode on Microsoft Edge</h3>
    <p>Run legacy Internet Explorer tests in IE mode on Microsoft Edge.</p>
  </div>
  </a>

  <a href="/support/docs/setup-pre-run-executable/">
  <div className="support_inners">
    <h3>Run a Pre-Test Executable</h3>
    <p>Execute a pre-run executable to prepare the VM before your test starts.</p>
  </div>
  </a>

  <a href="/support/docs/run-tests-with-webdriver-bidi/">
  <div className="support_inners">
    <h3>WebDriver BiDi Testing</h3>
    <p>Run web automation tests using the WebDriver BiDi protocol.</p>
  </div>
  </a>

  <a href="/support/docs/mock-video-injection-web-automation-selenium-chromium/">
  <div className="support_inners">
    <h3>Inject a Mock Video Stream</h3>
    <p>Inject a mock video stream into Selenium and Chromium web automation tests.</p>
  </div>
  </a>

  <a href="/support/docs/test-locally-hosted-websites-with-selenium/">
  <div className="support_inners">
    <h3>Test Locally Hosted Websites</h3>
    <p>Test locally hosted websites with Selenium using TestMu AI Tunnel.</p>
  </div>
  </a>
</div>


>Got any questions?<br/>
Please reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at support@testmuai.com.

## Next Steps
---

Continue with these related guides:

- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Debugging Options](/support/docs/debugging-options/)
- [IE Mode on Edge](/support/docs/ie-mode-on-edge/)
- [Run Selenium Tests Behind the Proxy](/support/docs/selenium-tests-behind-proxy/)
- [Custom DNS Map](/support/docs/custom-dns-map/)

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
       Capabilities In Selenium
      </span>
    </li>
  </ul>
</nav>

[1]: https://www.testmuai.com/capabilities-generator/

[3]: https://www.testmuai.com/list-of-browsers/
[4]: https://www.testmuai.com/support/docs/testing-locally-hosted-pages/
[5]: http://www.w3.org/TR/2009/WD-webstorage-20091029/
