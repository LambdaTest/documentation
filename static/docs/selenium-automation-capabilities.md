# How to Configure Selenium Capabilities on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Capabilities in Selenium test scripts, encoded as key-value pairs, allow you to define specific test environment requirements. These requirements include operating systems, browser combinations, versions, and other parameters supported by TestMu AI's Cloud Grid to run your automation framework tests.

You can also use TestMu AI [Automation Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to autogenerate your required capabilities class to run Selenium test scripts on TestMu AI.

>The values provided for any capability are both **space-insensitive** and **case-insensitive**. This means that any value you provide as **Mac OS X 10.13** or **mac os x 10.13** would be correct.

## Default Capabilities

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

Beyond the defaults, use the following capabilities to configure browser, platform, and test metadata for Selenium version 3 and below.

| Key | Values | Capability Description | Default Value | Alias  | Value Type | Example | Possible Errors |
|-----|--------|------------------------|---------------|--------|------------|---------|-----------------|
| `browserName` | ChromeFirefoxSafariMS Edge - Microsoft EdgeOpera IE - Internet Explorer | This is a mandatory and case-sensitive capability that represents the name of the selected browser.  `capabilities.setCapability("browserName", "Chrome");` | Mandatory |browser |String |`capabilities.setCapability("browserName","chrome");` |Case Sensitive    Invalid browser error |
| `version` | Example: 101.0 (Beta) | This capability sets the version of the browser mentioned above. The version you provide as a capability must be valid.   `capabilities.setCapability("version","78.0");`|
| `latest` | - | The latest keyword runs your test cases on the most recent browser version available at TestMu AI.  `capabilities.setCapability("version","latest");` |
| `latest-N` | latest-5 | This allows you to execute your test on an older browser version. Here, N represents an integer. If you want to test your website on a browser version released 5 versions before the latest one, use the below capability: `capabilities.setCapability("version","latest-5");`|
| `platformName` | **Supported Windows:** Windows 11Windows 10Windows 8.1Windows 8Windows 7 **Supported macOS:** MontereyBig SurCatalinaMojaveHigh SierraSierraEl CapitanMavericksYosemite | If you do not declare a platform, TestMu AI maps your test to a relevant operating system for the selected browser. To run Selenium automation testing on Windows 11, add the below line of code in your Desired Selenium Capabilities class:   ``` capabilities.setCapability("platformName", "Windows 11"); ``` For macOS Monterey, add the below line:  ``` capabilities.setCapability("platformName", "macOS Monterey"); ``` |select on the basis of browser.   For web Linuxwin10 |platform,OS |String |```capabilities.setCapability("platformName", "Windows 10");``` |Case Sensitive Invalid Platform Error |
| `resolution` | 1024x7681280x8001280x10241366x7681440x9001680x10501600x12001920x12001920x10802048x1536These values are OS Dependent, Verify from Capability generator   String: "1920x1200" | This capability specifies a particular screen resolution for your VM (Virtual Machine). By default, the resolution is 1024x768.   ``` capabilities.setCapability("resolution","1600x1200"); ``` |1920 x1080 |viewport |String |```capabilities.setCapability("resolution","1600x1200");``` |Case Sensitive   Invalid Resolution error |
| `name` | Example: ToDo Sample Test   name: "Login testcase"| Represents the name of a test.   ``` capabilities.setCapability("name", "ToDo Sample Test"); ```  | test-id |testname,sessionname,test |String |```capabilities.setCapability("name", "ToDo Sample Test");``` |Case Sensitive > 255 char |
| `driver_version` | Example: "driver_version" : "99.0" | Specifies the driver version of the browser you want to run the test on. Provide a valid driver version corresponding to the browser used.   ``` capabilities.setCapability("driver_version","99.0");|
| `build` | build: "Regression Job #567" Example: 5. | Represents the build number for your test.   ` capabilities.setCapability("build", "5.1");`  Note: Build string should be less than 255 characters. |Untitled Build |buildName,job,jobName |String |`capabilities.setCapability("build", "5.1");` Note: Build string should be less than 255 characters. |Case Sensitive > 255 char
| `projectName` |Example: My Test projectName: "Xaviar Project" |Represents the name of a project. ` capabilities.setCapability("projectName", "Test");`  | Untitled |projectName,project |String |`caps.setCapability("projectName","Test");` |Case Sensitive > 255 char |
| tags       | Example: &lbrace;"Tag 1", "Tag 2", "Tag 3"&rbrace;  tags: &lbrace;"Staging", "Critical", "Sanity"&rbrace;  | Groups your automation tests.   `String[] tags = {"Tags"};``caps.setCapability("tags", tags);`  For more details, visit our [group tests using custom tags](/support/docs/filter-your-selenium-tests/#group-tests-using-custom-tags) guide.| | |String |```String[] tags = {"Tags"};``` ```caps.setCapability("tags", tags);```For more details, visit our documentation. |Case Sensitive > 50 char |
| `buildTags` | Example: &lbrace;"Build Tags"&rbrace; buildTags: &lbrace;"Build Tags","Staging"&rbrace;   | Groups your test builds.  `String[] buildTagList = {"Build Tag"};`  `caps.setCapability("buildTags", buildTagList);`  For more details, visit our [group and filter test builds using build tags](/support/docs/filter-your-selenium-tests/#group-and-filter-builds-using-build-tags) guide. | | |String |```String[] buildTagList = {"Build Tag"};``` ```caps.setCapability("buildTags", buildTagList);``` For more details, visit our documentation.
|`lambda:loadExtension`| Example: `https://automation-prod-user-files.s3.amazonaws.com/extensions/orgId-XXXX/2.1.0_0.zip` | Tests `.zip` extension files uploaded on TestMu AI storage. ```String[] extension = {"https://automation-prod-user-files.s3.amazonaws.com/extensions/orgId-XXXX/2.1.0_0.zip"};``````capabilities.setCapability("lambda:loadExtension", extension);```To upload an extension on TestMu AI storage, refer to the [upload extensions API](/support/api-doc/#/extensions/UploadExtensions).         |
|`lambda:userFiles`| Example:804402.png | Tests the uploaded files on TestMu AI.   ``` capabilities.setCapability("lambda:userFiles", file); ```  For more details about uploading files, visit our upload files using TestMu AI guide. | -|
|`commandLog`| Example: true/false | Hides or shows the command logs.   ``` capabilities.setCapability("commandLog", false); ```   | FALSE |commandLogs |Boolean |
|`systemLog`| Example: true/false | Hides or shows the Selenium/Appium logs.   ``` capabilities.setCapability("systemLog", false); ```   |  FALSE |seleniumLogs |Boolean |
|`network.http2` | network.http2: true | Enables HTTP2 support in Martian. Use this along with the network capability. |  FALSE | |Boolean |
|`DisableXFHeaders`| DisableXFHeaders:true | Removes the X-Forwarded Headers added by Martian. |  FALSE | | Boolean |
|`network.debug` | network.debug: true | Enables debug logging in Martian. Martian logs every request and response. |  FALSE | | Boolean |
|`ignoreFfOptionsArgs` | ignoreFfOptionsArgs:true | Ignores args in moz:firefoxOptions. |  FALSE | | Boolean |
|`updateBuildStatusOnSuccess` | true/false | Updates build status on replication of test name. |  FALSE | | Boolean |

## Selenium 4 Capabilities (and above)

Selenium version 4 supports everything covered in the previous section and introduces the following additional capabilities. Use these to configure authentication, browser version, platform, and session settings for Selenium 4.

| Key | Values | Capability Description | Default Value | Alias  | Value Type | Example | Possible Errors |
|-----|--------|------------------------|---------------|--------|------------|---------|-----------------|
| `user` |```user: "Username"```    Example: YOUR_LAMBDATEST_USERNAME | Find this under your TestMu AI profile. If you are already logged into TestMu AI, the Desired Selenium Capabilities Generator automatically fetches your TestMu AI username under the desired Selenium capabilities class.   ``` capabilities.setCapability("user","YOUR_LAMBDATEST_USERNAME"); ``` |Mandatory |username  |String |If you are already logged into TestMu AI then the Desired Selenium Capabilities Generator automatically fetches your TestMu AI username under the desired Selenium capabilities class.   ```capabilities.setCapability("user","YOUR_LAMBDATEST_USERNAME");```|401   Unauthorized   case sensitive |
| `accessKey`|```accessKey: "Access Key"```    Example: YOUR_LAMBDATEST_ACCESS_KEY | Find this under your TestMu AI profile. If you are already logged into TestMu AI, the Desired Selenium Capabilities Generator automatically fetches your TestMu AI Access Key under the desired Selenium capabilities class.   ``` capabilities.setCapability("accessKey","YOUR_LAMBDATEST_ACCESS_KEY");```  |Mandatory |key |String |```capabilities.setCapability(""accessKey"",""YOUR_LAMBDATEST_ACCESS_KEY"");``` |401   Unauthorized   case sensitive |
| `driver_version`| Example: "driver_version" : "99.0"| Specifies the driver version of the browser you want to run the test on. Provide a valid driver version corresponding to the browser used.    `capabilities.setCapability("driver_version","99.0");` | Dynamic map by system |driverVersion,driver |String |
|  `browserVersion` |  Ex: 101.0 (Beta) |  Declares the specific browser version on which you want your test automation scripts to run using the Selenium Automation Grid. Provide a valid browser version in your desired Selenium capabilities class.    ``` capabilities.setCapability("browserVersion","79.0"); ```You can use "latest", "latest-1" and so on to select the latest browser version.   | latest |version |String |```capabilities.setCapability("browserVersion","91.0");``````capabilities.setCapability("browserVersion","latest");``` ```capabilities.setCapability("browserVersion","latest-1");``` |Case Sensitive Invalid version error |
| `latest` | - | The latest keyword runs your test cases on the most recent browser version available at TestMu AI.   ``` capabilities.setCapability("version","latest"); ```   |
| `latest-N` | latest-5 | This allows you to execute your test on older browser versions. Here, N represents an integer. To test your website on the 5 most recently released browser versions, use the below capability:    `capabilities.setCapability("version","latest-5");`|
| `platformName` |  **Supported Windows:** Windows 11Windows 10Windows 8.1Windows 8Windows 7 **Supported macOS:** MontereyBig SurCatalinaMojaveHigh SierraSierraEl CapitanMavericksYosemite | Specifies the platform on which you want to run your Selenium automation testing. If you do not declare a platform, TestMu AI maps your test to a relevant operating system for the selected browser. To run Selenium automation testing on Windows 11, add the below line of code in your Desired Selenium Capabilities class:   ``` capabilities.setCapability("platformName", "Windows 11"); ``` For macOS Monterey, add the below line:  ``` capabilities.setCapability("platformName", "macOS Monterey"); ``` | Select based on browser.  LinuxWindows 10|platform,OS | String |```capabilities.setCapability("platformName", "Windows 10");``` |Case Sensitive  Invalid Platform Error |
| selenium_version | Example: `"selenium_version", "4.0.0"` | Defines the Selenium version for the test session.  | Dynamic map by system |seleniumVersion,seVersion | String |
| idleTimeout | - | Defines the idle timeout for the session.  | 600 sec |idle |

## Advanced Capabilities

Beyond the version-specific capabilities above, the following ones give you more control over video, screenshots, network, console logs, tunnels, and other session settings.

| Key | Values | Capability Description  | Default Value | Alias | Value Type | Example | Possible Errors |
|-----|--------|-------------------------|---------------|-------|------------|---------|-----------------|
| `video` | true, false | Records video of the complete screen while the test runs. You can record up to 10 minutes. By default, video is set to true. To turn off video recording, use the Capabilities Generator or set the flag in your capabilities class.    `capabilities.setCapability("video",false);` | TRUE | |Boolean |`capabilities.setCapability("video",false);` |Case Sensitive Unable to generate video Video is not playing in video player |
| `visual` | true, false | Records command-by-command screenshots at each test step. By default the flag is set to off. **Note:** 1. Test execution time increases when set to `true`.  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2. This capability takes a total of 150 screenshots. After that, use the screenshot command.  `capabilities.setCapability("visual",true)`;|FALSE |debug |Boolean |`capabilities.setCapability("visual",true);` |Case sensitive Unable to generate screenshot   Screenshot is broken |
| `network` |true, false | Captures a recording for network packets while the test runs. By default, the network flag is set to false. **Note**: Test execution time increases when set to 'true'.  `capabilities.setCapability("network",true)`;      | FALSE |networkLogs |Boolean |`capabilities.setCapability("network",true);` |Case sensitive Network logs not supported|
| `console` | true, false | Records JavaScript logs for the test. By default, it is set to false. **Note:** Test execution time increases when set to 'true'.    `capabilities.setCapability("console",true)`; | FALSE |Capture browser console errors |String |JavaScript logs are recorded for the test. By default, it is set to false. `capabilities.setCapability("console","disable");` |Case Sensitive No error found Not supported on this browser |
| `tunnel` | true, false | Tests your locally hosted web application with Lambda Tunnel, which establishes a TCP with TLS 1.2 secure connection between your system and the cloud servers. By default, the tunnel flag is set to false.  `capabilities.setCapability("tunnel",true);` Find more about Lambda Tunnel from our documentation to test on  [locally hosted web applications.](/docs/testing-locally-hosted-pages/)   | FALSE |local |Boolean |`capabilities.setCapability("tunnel",true);` Find more about TestMu AI Tunnel from our documentation to test on locally hosted web applications. |Case Sensitive Tunnel not running |
| `tunnelName` | Your desired tunnel name | Provides the tunnel identifier in your test suite capability when you want to execute the test through a particular tunnel.  `capabilities.setCapability("tunnelName","your desired tunnel name")`;| |localName |String |`capabilities.setCapability("tunnelName","your desired tunnel name");` |Case Sensitive   Tunnel not running   Tunnel Name not exists |
| `timezone` | Example: UTC+07:00 | Sets a custom timezone for executing a test. `capabilities.setCapability("timezone","UTC+07:00")`; | UTC+00:00| |String |`capabilities.setCapability("timezone","UTC+07:00");` |Case sensitive  Timezone not supported by OS Timezone is different |
| `verboseWebDriverLogging` | true, false | Enables detailed Selenium logs to debug issues using insights including command execution, communication with the browser, and responses. `capabilities.setCapability("verboseWebDriverLogging", true)` | FALSE | | Boolean | `capabilities.setCapability("verboseWebDriverLogging", true)` |
| `network.mask` | true, false | Masks network traffic during automated testing. Use this capability when you need secure or anonymized network interactions during test execution - for example, when dealing with sensitive data, internal environments, or compliance requirements.`capabilities.setCapability("network.mask", true)` | FALSE | | Boolean | `capabilities.setCapability("network.mask", true)` | Case Sensitive |

## Explore More Capabilities

Once you have configured the capabilities above, explore the related guides below for headless testing, custom profiles, network controls, logs, tunnels, and other advanced session features.

    Selenium Default Capabilities
    Learn about the built-in capabilities supported by Selenium for launching browsers.

    Selenium v3
    Understand the capabilities supported in TestMu AI for Selenium version 3

    Selenium v4
    Understand the capabilities supported in TestMu AI for Selenium version 4

    TestMu AI Advanced Capabilities
    Discover additional capabilities offered by TestMu AI beyond Selenium defaults for more control over test execution.

    Headless Browser Testing
    Run automated tests in browsers without a graphical user interface.

    Custom Chrome Profile
    Configure a custom Chrome profile with specific extensions or settings for your tests.

    Network Throttling
    Simulate different internet connection speeds to test website behavior under various network conditions.

    Custom DNS Mapping
    Map custom domain names to specific IP addresses for your testing needs.

    Lighthouse Performance Metrics
    Analyze website performance metrics within your tests using Lighthouse.

    Generate Multiple Lighthouse Reports
    Run multiple Lighthouse audits and generate reports for comparison.

    Debugging Options
    Use debugging tools provided by TestMu AI to troubleshoot your tests.

    Telemetry Logs
    Access detailed logs generated during your test execution for analysis.

    SmartWait Functionality
    Use TestMu AI's SmartWait feature to wait for elements to become interactive before proceeding with tests.

    CustomHeaders
    Set custom headers in your test requests to simulate specific scenarios.

    Autohealing
    Use TestMu AI's autohealing functionality to recover automatically from unexpected session issues.

    Command Annotations
    Use TestMu AI's command annotations to control test execution flow.

    HAR Logs
    Analyze network traffic during your tests using HTTP Archive (HAR) logs.

    Mask your Sensitive Data
    Protect sensitive information like passwords or tokens from being exposed in test logs.

    Test in IE Mode on Microsoft Edge
    Run legacy Internet Explorer tests in IE mode on Microsoft Edge.

    Run a Pre-Test Executable
    Execute a pre-run executable to prepare the VM before your test starts.

    WebDriver BiDi Testing
    Run web automation tests using the WebDriver BiDi protocol.

    Inject a Mock Video Stream
    Inject a mock video stream into Selenium and Chromium web automation tests.

    Test Locally Hosted Websites
    Test locally hosted websites with Selenium using TestMu AI Tunnel.

>Got any questions?
Please reach out at our **24x7 Chat Support** or you could also mail us at support@testmuai.com.

## Next Steps

Continue with these related guides:

- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Debugging Options](/support/docs/debugging-options/)
- [IE Mode on Edge](/support/docs/ie-mode-on-edge/)
- [Run Selenium Tests Behind the Proxy](/support/docs/selenium-tests-behind-proxy/)
- [Custom DNS Map](/support/docs/custom-dns-map/)

[1]: https://www.testmuai.com/capabilities-generator/

[3]: https://www.testmuai.com/list-of-browsers/
[4]: https://www.testmuai.com/support/docs/testing-locally-hosted-pages/
[5]: http://www.w3.org/TR/2009/WD-webstorage-20091029/
