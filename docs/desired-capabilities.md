---
id: desired-capabilities
title: Desired Capabilities In Selenium To Run Automated Tests
hide_title: true
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

# Desired Capabilities In Selenium
***
LambdaTest [Desired Selenium Capabilities Generator][1] autogenerates the capabilities class needed to run your Selenium and Appium automation testing scripts on LambdaTest [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/). The Selenium capabilities generator will provide you with the entire code of capabilities class based on your mouse-interactions from the UI. Also, you will get the code for your selected configurations in all of the six programming languages i.e. Java, PHP, Ruby, JavaScript, C#, and Python. 

This document will teach you how to leverage LambdaTest Capability Generator to easily for declaring desired capabilities in selenium for both desktop and mobile browsers.

In this document, we will talk about the following:

- Desired Capabilities in Selenium<br/>
- Desired Capabilities in Selenium 4<br/>
- Appium Capabilities<br/>
- Selenium testing from Different Countries<br/>
- LambdaTest Advanced Selenium Capabilities<br/>
- Lighthouse Performance<br/>
- Network Throttling<br/>
- Headless Browser Testing<br/>
- Default Selenium Capabilities<br/>
- Hide/Mask Sensitive Information Through Selenium Capabilities

>The values provided for any capability are both **space-insensitive** and **case-insensitive**. This means that any value you provide as **Mac OS X 10.13** or **mac os x 10.13** would be correct.

## Selenium Capabilities

* * *

| KEY  | VALUES | CAPABILITY  | DEFAULT VALUE | ALIAS  | CAPABILITY DESCRIPTION  | VALUE TYPE  | EXAMPLE  | POSSIBLE ERRORS  |
|-----------------|-----------|-------------| ------|--------|---------------|-------------| ------|----------------|
| browserName | <ul><li>Chrome</li><li>Firefox</li><li>Safari</li><li>MS Edge – Microsoft Edge</li><li>Opera</li><li> IE – Internet Explorer</li></ul>                                                                   |  This is a mandatory & case-sensitive capability, which represents the name of the selected browser.    <br/>``` capabilities.setCapability("browserName", "Chrome"); ```   | Mandatory |browser |Name of Browser |String |```capabilities.setCapability("browserName","chrome");``` |Case Sensitive   <br/> Invalid browser error |
|  version    |  Example: 101.0 (Beta)                                                                                                                         |  This capability is for the version of the browser mentioned above. This version you provide as a desired capability needs to be a valid one.    <br/>``` capabilities.setCapability("version","78.0"); ```                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| latest      | –                                                                                                                                      | The latest keyword will help you run your test cases over the most recent browser version available at LambdaTest.   <br/>``` capabilities.setCapability("version","latest"); ```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| latest-N    | latest-5                                                                                                                               | This would allow you to execute your test over an older browser version. Here, N represents an integer. So if you wish to test your website over a browser version, which was released 5 versions before the latest one. You can do so using the below capability:   <br/>``` capabilities.setCapability("version","latest-5"); ```                                                                                                                                                                                                                                                                                                                                                 |
| platformName   | **Supported Windows:** <ul><li>Windows 11</li><li>Windows 10</li><li>Windows 8.1</li><li>Windows 8</li><li>Windows 7</li></ul> **Supported macOS:** <ul><li>Monterey</li><li>Big Sur</li><li>Catalina</li><li>Mojave</li><li>High Sierra</li><li>Sierra</li><li>El Capitan</li><li>Mavericks</li><li>Yosemite</li></ul> | If a platform for testing is not declared then LambdaTest will map your test to a relevant operating system for the selected browser. <br/>So, if you wish to perform Selenium automation testing of your web application on Windows 11 then you need to mention the below line of code in your Desired Selenium Capabilities class.   <br/>``` capabilities.setCapability("platformName", "Windows 11"); ``` <br/>Similarly, for macOS, if you wish to perform Selenium automation testing of your web application on macOS Monterey, then you need to mention the below line of code in your Desired Selenium Capabilities class.  <br/>``` capabilities.setCapability("platformName", "macOS Monterey"); ``` |select on the basis of browser.   <br />For web <ol><li>Linux</li><li>win10</li></ol> |platform,OS |Name of OS |String |```capabilities.setCapability("platformName", "Windows 10");``` |Case Sensitive <br />Invalid Platform Error |
| resolution  | <ul><li>1024×768</li><li>1280×800</li><li>1280×1024</li><li>1366×768</li><li>1440×900</li><li>1680×1050</li><li>1600×1200</li><li>1920×1200</li><li>1920×1080</li><li>2048×1536</li></ul>These values are OS Dependent, Verify from Capability generator   <br />String: "1920x1200" | This capability would help you to specify a particular screen resolution for your VM(Virtual Machine). By default, the resolution would be 1024×768.   <br/>``` capabilities.setCapability("resolution","1600x1200"); ``` |1920 x1080 |viewport |Resolution of Machine, Works only in desktops |String |```capabilities.setCapability("resolution","1600x1200");``` |Case Sensitive   <br />Invalid Resolution error |
| name | Example: ToDo Sample Test   <br/>name: "Login testcase"| Represents the name of a test.   <br/>``` capabilities.setCapability("name", "ToDo Sample Test"); ```  | test-id |testname,sessionname,test |Name of your Test |String |```capabilities.setCapability("name", "ToDo Sample Test");``` |Case Sensitive > 255 char |
| driver_version       | Example:    "driver_version" : "99.0"                                                                                                                                                                    | Used to specify the driver version of the browser you want to run the test on. Make sure to provide a valid driver version corresponding to the browser used.   <br/>``` capabilities.setCapability("driver_version","99.0");    |
| build       | build: "Regression Job #567"   <br/>Example: 5. | Represent the build number for your test.   <br/>``` capabilities.setCapability("build", "5.1"); ```  <br/>Note: Build string should be less than 255 character |Untitled Build |buildName,job,jobName |You can group your tests like a job containing multiple tests |String |```capabilities.setCapability("build", "5.1");```   <br />Note: Build string should be less than 255 character |Case Sensitive > 255 char
| projectName      |Example: My Test   <br />projectName: "Xaviar Project" |Represent the name of a project.   <br/>``` capabilities.setCapability("projectName", "Test"); ```  <br/> | Untitled |projectName,project |You can group your builds like a project containing multiple jobs |String |```caps.setCapability("projectName","Test");``` |Case Sensitive > 255 char |
| tags       | Example: {“Tag 1”, “Tag 2”, “Tag 3”} <br /> tags: {“Staging”, “Critical, “Sanity”}  | Allows to group your automation tests.   <br/>`String[] tags = {"Tags"};`<br/>`caps.setCapability("tags", tags);` <br/> For more details, visit our [documentation](https://www.lambdatest.com/support/docs/group-tests-using-custom-tags/).| | |To add labels on tests to group tests among builds |String |```String[] tags = {"Tags"};``` <br />```caps.setCapability("tags", tags);```<br />For more details, visit our documentation. |Case Sensitive > 50 char |
| buildTags       | Example: {“Build Tags”} <br />buildTags: {“Build Tags”,"Staging"}   | Allows to group your tests builds.   <br/>``` String[] buildTagList = {"Build Tag"}; ```  <br/>```caps.setCapability("buildTags", buildTagList);```<br/> For more details, visit our [documentation](https://www.lambdatest.com/support/docs/group-and-filter-your-test-builds-using-build-tags/).     | | |To add labels on builds to group builds |String |```String[] buildTagList = {"Build Tag"};``` <br />```caps.setCapability("buildTags", buildTagList);``` <br />For more details, visit our documentation. 
|lambda:loadExtension| Example: `https://automation-prod-user-files.s3.amazonaws.com/extensions/orgId-XXXX/2.1.0_0.zip` | Allows to test `.zip` extension files uploaded on LambdaTest storage. <br/>```String[] extension = {"https://automation-prod-user-files.s3.amazonaws.com/extensions/orgId-XXXX/2.1.0_0.zip"};```<br/>```capabilities.setCapability("lambda:loadExtension", extension);```<br/>To upload extension on LambdaTest storage, refer to our [documentation](https://www.lambdatest.com/support/docs/api-doc/#/extensions/UploadExtensions).         |  
|lambda:userFiles| Example:804402.png | Allows to test the uploaded files on LambdaTest.   <br/>``` capabilities.setCapability("lambda:userFiles", file); ```  <br/>For more details about uploading files, visit our [documentation](https://www.lambdatest.com/support/docs/upload-files-using-lambdatest/). | -|
|commandLog| Example: true/false | Allows to hide the command logs.   <br/>``` capabilities.setCapability("commandLog", false); ```  <br/> | FALSE |commandLogs |To hide command logs |Boolean |
|systemLog| Example: true/false | Allows to hide the Selenium/Appium logs.   <br/>``` capabilities.setCapability("systemLog", false); ```  <br/> |  FALSE |seleniumLogs |To hide selenium/appium logs |Boolean |
|network.http2 | network.http2: true | This enables HTTP2 Support in Martian and has to be used along with network capability. |  FALSE | |This enables HTTP2 Support in Martian and has to be used along with network capability. |Boolean | 
|DisableXFHeaders| DisableXFHeaders:true | This removes the X-Fowarded Headers added by Martian. |  FALSE | |This removes the X-Fowarded Headers added by Martian. | Boolean |
|network.debug | network.debug: true | This enables Debug Logging in Martian. Martian will log every request and response. |  FALSE | |This enables Debug Logging in Martian. Martian will log every request and response. | Boolean | 
|ignoreFfOptionsArgs | ignoreFfOptionsArgs:true | To ignore args in moz:firefoxOptions. |  FALSE | |To ignore args in moz:firefoxOptions. | Boolean | 
|updateBuildStatusOnSuccess | true/false | To update build Status on replication of test name |  FALSE | |To update build Status on replication of test name | Boolean | 

## Desired Capabilities in Selenium 4

* * *

We have introduced a new tab for desired Capabilities in Selenium 4 in our [Desired Capabilities Generator][1]. With respect to Selenium 4, there a few changes to observe while declaring the Desired Selenium Capabilities class.

<img loading="lazy" src={require('../assets/images/selenium-automation-capabilities/selenium-test-capabilities-1.webp').default} alt="Image" width="1347" height="565" className="doc_img"/>

Here is a table to represent the capabilities that have been updated or newly introduced for Selenium 4.

| KEY  | VALUES | CAPABILITY  | DEFAULT VALUE | ALIAS  | CAPABILITY DESCRIPTION  | VALUE TYPE  | EXAMPLE  | POSSIBLE ERRORS  |
|-----------------|-----------|-------------| ------|--------|---------------|-------------| ------|----------------|
| user            |```user: "Username"```   <br /> Example: harshitp | Can be found under your LambdaTest profile. If you are already logged into LambdaTest, then the Desired Selenium Capabilities Generator will automatically fetch your LambdaTest username under the desired Selenium capabilities class.   <br/>``` capabilities.setCapability("user","harshitp"); ``` |Mandatory |username  |Your LT Username |String |If you are already logged into LambdaTest then the Desired Selenium Capabilities Generator will automatically fetch your LambdaTest username under the desired Selenium capabilities class.   <br/>```capabilities.setCapability("user","harshitp");```|401   <br/>Unauthorized   <br/>case sensitive |
| accessKey       |```accessKey: "Access Key"```   <br /> Example: 123ABC                                                                                                                                                                       | Can be found under your LambdaTest profile. If you are already logged into LambdaTest, then the Desired Selenium Capabilities Generator will automatically fetch your LambdaTest Access Key under the desired Selenium capabilities class.   <br/>``` capabilities.setCapability("accessKey","123ABC");```  |Mandatory |key |Your LT access key |String |```capabilities.setCapability(""accessKey"",""123ABC"");``` |401   <br/>Unauthorized   <br/>case sensitive |                                                                             
| driver_version       | Example:    "driver_version" : "99.0"| Used to specify the driver version of the browser you want to run the test on. Make sure to provide a valid driver version corresponding to the browser used.   <br/>``` capabilities.setCapability("driver_version","99.0"); ```    | Dynamic map by system |driverVersion,driver |To define driver version for test session |String |
|  browserVersion |  Ex: 101.0 (Beta)                                                                                                                                                                             |  This capability is used to declare the specific browser version on which you want your test automation scripts to be executed using our Selenium Automation Grid. Make sure to provide a valid browser version in your desired Selenium capabilities class.    <br/>``` capabilities.setCapability("browserVersion","79.0"); ```<br />You can use "latest", "lates-1" and so-on to select latest browser version   | latest |version | Browser Version |String |```capabilities.setCapability("browserVersion","91.0");```<br />```capabilities.setCapability("browserVersion","latest");```<br /> ```capabilities.setCapability("browserVersion","latest-1");``` |Case Sensitive <br />Invalid version error |
| latest          | –                                                                                                                                                                                     | The latest keyword will help you run your test cases over the most recent browser version available at LambdaTest.   <br/>``` capabilities.setCapability("version","latest"); ```   |
| latest-N        | latest-5                                                                                                                                                                              | This would allow you to execute your test over the older browser versions. Here, N represents an integer. So if you wish to test your website over the 5 most recently released browser versions. You can do so using the below capability:   <br/>``` capabilities.setCapability("version","latest-5"); ```                                                                            |
| platformName    |  **Supported Windows:** <ul><li>Windows 11</li><li>Windows 10</li><li>Windows 8.1</li><li>Windows 8</li><li>Windows 7</li></ul> **Supported macOS:** <ul><li>Monterey</li><li>Big Sur</li><li>Catalina</li><li>Mojave</li><li>High Sierra</li><li>Sierra</li><li>El Capitan</li><li>Mavericks</li><li>Yosemite</li></ul> | This capability is used to specify the platform on which you wish to run your Selenium automation testing. If a platform for testing is not declared then LambdaTest will map your test to a relevant operating system for the selected browser. <br/>So, if you wish to perform Selenium automation testing of your web application on Windows 11 then you need to mention the below line of code in your Desired Selenium Capabilities class.   <br/>``` capabilities.setCapability("platformName", "Windows 11"); ``` <br/>Similarly for macOS, if you wish to perform Selenium automation testing of your web application on macOS Monterey then you need to mention the below line of code in your Desired Capabilities class.  <br/>``` capabilities.setCapability("platformName", "macOS Monterey"); ``` | Select based on browser. <br/> <ul><li>Linux</li><li>Windows 10</li></ul>|platform,OS |Name of OS |String |```capabilities.setCapability("platformName", "Windows 10");``` |Case Sensitive <br/> Invalid Platform Error |
| selenium_version            | Example: `"selenium_version", "4.0.0"` | To define Selenium version for test session.  | Dynamic map by system |seleniumVersion,seVersion |To define selenium version for test session |String |
| idleTimeout            | - | To define idle Timeout.  | 600 sec |idle |

## Desired Capability to Automate IE Mode in Microsoft Edge
---

LambdaTest's Automation allows you to automate IE Mode in Microsoft Edge on Windows 11. You can pass the below desired capability in your test script and execute your tests.

```java
InternetExplorerOptions browserOptions = new InternetExplorerOptions();
browserOptions.setPlatformName("Windows 11");
browserOptions.setBrowserVersion("11.0");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "Your LambdaTest Username");
ltOptions.put("accessKey", "Your LambdaTest Access Key");
ltOptions.put("project", "Untitled");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```

## Appium Capabilities

* * *

We have come up with a new tab for Appium in our Desired Capabilities Generator. Here are the unique capabilities that you may have to keep in mind while executing Appium tests using LambdaTest Selenium Grid.

| KEY  | VALUES | CAPABILITY  | DEFAULT VALUE |
|-----------------|-----------|-------------| ------|
| deviceName      | Example: <ul><li>Galaxy S10</li><li>iPhone XS</li></ul> | This capability allows you to specify the particular device on which you wish to run your Appium automation testing.   <br/>``` capabilities.setCapability("deviceName", "Galaxy S10"); ```<br/> Similarly for iPhone XS, the capability would be as follow.   <br/>``` capabilities.setCapability("deviceName", "iPhone XS"); ```   | Mandatory |
| platformVersion | Example: <ul><li>Android 9.0</li><li>iOS 12.1</li></ul> | This capability allows you to specify the particular Android OS version or iOS version, for which you wish to run your Appium automation testing. <br/>In case you wish to run your tests on Android version 9.0, then you will get the below capability for Java from our capability generator.  <br/>``` capabilities.setCapability("platformVersion","9.0"); ```<br/> Similarly if you wish to run for iOS version 12.1, you may get the below capability from our Desired capabilities generator.   <br/>``` capabilities.setCapability("platformVersion","12.1"); ``` |

To check the entire list of devices available, along with operating systems for different desktop and mobile browsers, visit our [list of browsers][3].

## Selenium Automation Testing From Different GeoLocations

* * *

We have come up with a new Capability drop down that would allow you to run your test from different geographies across the world.

| KEY  | VALUES | CAPABILITY  | DEFAULT VALUE | ALIAS  | CAPABILITY DESCRIPTION  | VALUE TYPE  | EXAMPLE  | POSSIBLE ERRORS  |
|-----------------|-----------|-------------| ------|--------|---------------|-------------| ------|----------------|
| geoLocation | Example: US | This capability helps you to perform Selenium automation testing from different countries.         <br/>``` capabilities.setCapability("geoLocation","US"); ``` | |geo |Test from Different countries |String |```capabilities.setCapability("geoLocation","US");```|Case Sensitive <br/>Invalid location error

This capability helps you to perform Selenium automation testing from different countries.


You can perform Selenium automation testing from the below-listed countries.

| COUNTRY         | COUNTRY CODES      | 
|-----------------|--------------------|
| Albania         | "AL" | 
| Andorra         | "AD" | 
| Argentina       | "AR" | 
| Armenia         | "AM" | 
| Australia       | "AU" | 
| Austria         | "AT" | 
| Azerbaijan      | "AZ" | 
| Bahrain         | "BH" | 
| Bangladesh      | "BD" | 
| Belarus         | "BY" | 
| Belgium         | "BE" | 
| Bosnia and Herzegovina| "BA" | 
| Brazil          | "BR" | 
| Bulgaria        | "BG" | 
| Cambodia        | "KH" | 
| Canada          | "CA" | 
| Chile           | "CL" | 
| China           | "CN" | 
| Colombia        | "CO" | 
| Costa Rica      | "CR" | 
| Croatia         | "HR" | 
| Curacao         | "CW" | 
| Cyprus          | "CY" | 
| Czech Republic  | "CZ" | 
| Denmark         | "DK" | 
| Dominican Republic| "DO" | 
| Ecuador         | "EC" | 
| Egypt           | "EG" | 
| El Salvador     | "SV" | 
| Estonia         | "EE" | 
| Finland         | "FI" | 
| France          | "FR" | 
| Georgia         | "GE" | 
| Germany         | "DE" | 
| Greece          | "GR" | 
| Guatemala       | "GT" | 
| Honduras        | "HN" | 
| Hong Kong       | "HK" | 
| Hungary         | "HU" | 
| Iceland         | "IS" | 
| India           | "IN" | 
| Indonesia       | "ID" | 
| Ireland         | "IE" | 
| Isle of Man     | "IM" | 
| Israel          | "IL" | 
| Italy           | "IT" | 
| Jamaica         | "JM" | 
| Japan           | "JP" | 
| Jordan          | "JO" | 
| Kazakhstan      | "KZ" | 
| Kenya           | "KE" | 
| Korea           | "KR" | 
| Kuwait          | "KW" | 
| Kyrgyzstan      | "KG" | 
| Latvia          | "LV" | 
| Lebanon         | "LB" | 
| Lithuania       | "LT" | 
| Luxembourg      | "LU" | 
| Malaysia        | "MY" | 
| Malta           | "MT" | 
| Mexico          | "MX" | 
| Moldova         | "MD" | 
| Mongolia        | "MN" | 
| Morocco         | "MA" | 
| Netherlands     | "NL" | 
| New Zealand     | "NZ" | 
| Nicaragua       | "NI" | 
| Nigeria         | "NG" | 
| Norway          | "NO" | 
| Oman            | "OM" | 
| Pakistan        | "PK" | 
| Panama          | "PA" | 
| Paraguay        | "PY" | 
| Peru            | "PE" | 
| Philippines     | "PH" | 
| Poland          | "PL" | 
| Portugal        | "PT" | 
| Puerto Rico     | "PR" | 
| Qatar           | "QA" | 
| Romania         | "RO" | 
| Russian Federation| "RU" | 
| Saudi Arabia    | "SA" | 
| Serbia          | "RS" | 
| Singapore       | "SG" | 
| Slovakia        | "SK" | 
| Slovenia        | "SI" | 
| South Africa    | "ZA" | 
| Spain           | "ES" | 
| Sweden          | "SE" | 
| Switzerland     | "CH" | 
| Taiwan          | "TW" | 
| Tanzania        | "TZ" | 
| Thailand        | "TH" | 
| Tunisia         | "TN" | 
| Turkey          | "TR" | 
| Ukraine         | "UA" | 
| United Arab Emirates| "AE" | 
| United Kingdom  | "GB" | 
| United States   | "US" | 
| Uruguay         | "UY" | 
| Uzbekistan      | "UZ" | 
| Venezuela       | "VE" | 
| Vietnam         | "VN" | 


**Important Note:** You cannot perform Geolocation testing with locally hosted web applications using LambdaTest Tunnel in a single test case. If you wish to perform both, then you can leverage parallel testing to run two tests simultaneously, one for Geolocation and the other for LambdaTest Tunnel.

<div className="ytframe"> 
<div className="youtube" data-embed="n71MfNyDF5E">
    <div className="play-button"></div>
</div>
</div>

## List of Supported Timezones
---

Following are the list of supported Timezones for automation testing on the LambdaTest platform.


| City           | Timezone                                                       |  
| -------------- | -------------------------------------------------------------- | 
| Abidjan        | {"Africa/Abidjan", "Greenwich Standard Time"},                 |  |
| Accra          | {"Africa/Accra", "Greenwich Standard Time"},                   |  |
| Addis_Ababa    | {"Africa/Addis_Ababa", "E. Africa Standard Time"},             |  |
| Algiers        | {"Africa/Algiers", "W. Central Africa Standard Time"},         |  |
| Asmara         | {"Africa/Asmara", "nan"},                                      |  |
| Bamako         | {"Africa/Bamako", "Greenwich Standard Time"},                  |  |
| Bangui         | {"Africa/Bangui", "W. Central Africa Standard Time"},          |  |
| Banjul         | {"Africa/Banjul", "Greenwich Standard Time"},                  |  |
| Bissau         | {"Africa/Bissau", "Greenwich Standard Time"},                  |  |
| Blantyre       | {"Africa/Blantyre", "South Africa Standard Time"},             |  |
| Brazzaville    | {"Africa/Brazzaville", "W. Central Africa Standard Time"},     |  |
| Bujumbura      | {"Africa/Bujumbura", "South Africa Standard Time"},            |  |
| Cairo          | {"Africa/Cairo", "Egypt Standard Time"},                       |  |
| Casablanca     | {"Africa/Casablanca", "Morocco Standard Time"},                |  |
| Ceuta          | {"Africa/Ceuta", "Romance Standard Time"},                     |  |
| Conakry        | {"Africa/Conakry", "Greenwich Standard Time"},                 |  |
| Dakar          | {"Africa/Dakar", "Greenwich Standard Time"},                   |  |
| Dar_es_Salaam  | {"Africa/Dar_es_Salaam", "E. Africa Standard Time"},           |  |
| Djibouti       | {"Africa/Djibouti", "E. Africa Standard Time"},                |  |
| Douala         | {"Africa/Douala", "W. Central Africa Standard Time"},          |  |
| El_Aaiun       | {"Africa/El_Aaiun", "Morocco Standard Time"},                  |  |
| Freetown       | {"Africa/Freetown", "Greenwich Standard Time"},                |  |
| Gaborone       | {"Africa/Gaborone", "South Africa Standard Time"},             |  |
| Harare         | {"Africa/Harare", "South Africa Standard Time"},               |  |
| Johannesburg   | {"Africa/Johannesburg", "South Africa Standard Time"},         |  |
| Juba           | {"Africa/Juba", "E. Africa Standard Time"},                    |  |
| Kampala        | {"Africa/Kampala", "E. Africa Standard Time"},                 |  |
| Khartoum       | {"Africa/Khartoum", "E. Africa Standard Time"},                |  |
| Kigali         | {"Africa/Kigali", "South Africa Standard Time"},               |  |
| Kinshasa       | {"Africa/Kinshasa", "W. Central Africa Standard Time"},        |  |
| Lagos          | {"Africa/Lagos", "W. Central Africa Standard Time"},           |  |
| Libreville     | {"Africa/Libreville", "W. Central Africa Standard Time"},      |  |
| Lome           | {"Africa/Lome", "Greenwich Standard Time"},                    |  |
| Luanda         | {"Africa/Luanda", "W. Central Africa Standard Time"},          |  |
| Lubumbashi     | {"Africa/Lubumbashi", "South Africa Standard Time"},           |  |
| Lusaka         | {"Africa/Lusaka", "South Africa Standard Time"},               |  |
| Malabo         | {"Africa/Malabo", "W. Central Africa Standard Time"},          |  |
| Maputo         | {"Africa/Maputo", "South Africa Standard Time"},               |  |
| Maseru         | {"Africa/Maseru", "South Africa Standard Time"},               |  |
| Mbabane        | {"Africa/Mbabane", "South Africa Standard Time"},              |  |
| Mogadishu      | {"Africa/Mogadishu", "E. Africa Standard Time"},               |  |
| Monrovia       | {"Africa/Monrovia", "Greenwich Standard Time"},                |  |
| Nairobi        | {"Africa/Nairobi", "E. Africa Standard Time"},                 |  |
| Ndjamena       | {"Africa/Ndjamena", "W. Central Africa Standard Time"},        |  |
| Niamey         | {"Africa/Niamey", "W. Central Africa Standard Time"},          |  |
| Nouakchott     | {"Africa/Nouakchott", "Greenwich Standard Time"},              |  |
| Ouagadougou    | {"Africa/Ouagadougou", "Greenwich Standard Time"},             |  |
| Porto-Novo     | {"Africa/Porto-Novo", "W. Central Africa Standard Time"},      |  |
| Sao_Tome       | {"Africa/Sao_Tome", "Greenwich Standard Time"},                |  |
| Tripoli        | {"Africa/Tripoli", "Libya Standard Time"},                     |  |
| Tunis          | {"Africa/Tunis", "W. Central Africa Standard Time"},           |  |
| Windhoek       | {"Africa/Windhoek", "Namibia Standard Time"},                  |  |
| Adak           | {"America/Adak", "nan"},                                       |  |
| Anchorage      | {"America/Anchorage", "Alaskan Standard Time"},                |  |
| Anguilla       | {"America/Anguilla", "SA Western Standard Time"},              |  |
| Antigua        | {"America/Antigua", "SA Western Standard Time"},               |  |
| Araguaina      | {"America/Araguaina", "SA Eastern Standard Time"},             |  |
| Buenos_Aires   | {"America/Argentina/Buenos_Aires", "nan"},                     |  |
| Catamarca      | {"America/Argentina/Catamarca", "nan"},                        |  |
| Cordoba        | {"America/Argentina/Cordoba", "nan"},                          |  |
| Jujuy          | {"America/Argentina/Jujuy", "nan"},                            |  |
| La_Rioja       | {"America/Argentina/La_Rioja", "Argentina Standard Time"},     |  |
| Mendoza        | {"America/Argentina/Mendoza", "nan"},                          |  |
| Rio_Gallegos   | {"America/Argentina/Rio_Gallegos", "Argentina Standard Time"}, |  |
| Salta          | {"America/Argentina/Salta", "Argentina Standard Time"},        |  |
| San_Juan       | {"America/Argentina/San_Juan", "Argentina Standard Time"},     |  |
| San_Luis       | {"America/Argentina/San_Luis", "Argentina Standard Time"},     |  |
| Tucuman        | {"America/Argentina/Tucuman", "Argentina Standard Time"},      |  |
| Ushuaia        | {"America/Argentina/Ushuaia", "Argentina Standard Time"},      |  |
| Aruba          | {"America/Aruba", "SA Western Standard Time"},                 |  |
| Asuncion       | {"America/Asuncion", "Paraguay Standard Time"},                |  |
| Atikokan       | {"America/Atikokan", "nan"},                                   |  |
| Bahia          | {"America/Bahia", "Bahia Standard Time"},                      |  |
| Bahia_Banderas | {"America/Bahia_Banderas", "Central Standard Time (Mexico)"},  |  |
| Barbados       | {"America/Barbados", "SA Western Standard Time"},              |  |
| Belem          | {"America/Belem", "SA Eastern Standard Time"},                 |  |
| Belize         | {"America/Belize", "Central America Standard Time"},           |  |
| Blanc-Sablon   | {"America/Blanc-Sablon", "SA Western Standard Time"},          |  |
| Boa_Vista      | {"America/Boa_Vista", "SA Western Standard Time"},             |  |
| Bogota         | {"America/Bogota", "SA Pacific Standard Time"},                |  |
| Boise          | {"America/Boise", "Mountain Standard Time"},                   |  |
| Cambridge_Bay  | {"America/Cambridge_Bay", "Mountain Standard Time"},           |  |
| Campo_Grande   | {"America/Campo_Grande", "Central Brazilian Standard Time"},   |  |
| Cancun         | {"America/Cancun", "Eastern Standard Time (Mexico)"},          |  |
| Caracas        | {"America/Caracas", "Venezuela Standard Time"},                |  |
| Cayenne        | {"America/Cayenne", "SA Eastern Standard Time"},               |  |
| Cayman         | {"America/Cayman", "SA Pacific Standard Time"},                |  |
| Chicago        | {"America/Chicago", "Central Standard Time"},                  |  |
| Chihuahua      | {"America/Chihuahua", "Mountain Standard Time (Mexico)"},      |  |
| Costa_Rica     | {"America/Costa_Rica", "Central America Standard Time"},       |  |
| Creston        | {"America/Creston", "US Mountain Standard Time"},              |  |
| Cuiaba         | {"America/Cuiaba", "Central Brazilian Standard Time"},         |  |
| Curacao        | {"America/Curacao", "SA Western Standard Time"},               |  |
| Danmarkshavn   | {"America/Danmarkshavn", "UTC"},                               |  |
| Dawson         | {"America/Dawson", "Pacific Standard Time"},                   |  |
| Dawson_Creek   | {"America/Dawson_Creek", "US Mountain Standard Time"},         |  |
| Denver         | {"America/Denver", "Mountain Standard Time"},                  |  |
| Detroit        | {"America/Detroit", "Eastern Standard Time"},                  |  |
| Dominica       | {"America/Dominica", "SA Western Standard Time"},              |  |
| Edmonton       | {"America/Edmonton", "Mountain Standard Time"},                |  |
| Eirunepe       | {"America/Eirunepe", "SA Pacific Standard Time"},              |  |
| El_Salvador    | {"America/El_Salvador", "Central America Standard Time"},      |  |
| Fortaleza      | {"America/Fortaleza", "SA Eastern Standard Time"},             |  |
| Glace_Bay      | {"America/Glace_Bay", "Atlantic Standard Time"},               |  |
| Godthab        | {"America/Godthab", "Greenland Standard Time"},                |  |
| Goose_Bay      | {"America/Goose_Bay", "Atlantic Standard Time"},               |  |
| Grand_Turk     | {"America/Grand_Turk", "SA Western Standard Time"},            |  |
| Grenada        | {"America/Grenada", "SA Western Standard Time"},               |  |
| Guadeloupe     | {"America/Guadeloupe", "SA Western Standard Time"},            |  |
| Guatemala      | {"America/Guatemala", "Central America Standard Time"},        |  |
| Guayaquil      | {"America/Guayaquil", "SA Pacific Standard Time"},             |  |
| Guyana         | {"America/Guyana", "SA Western Standard Time"},                |  |
| Halifax        | {"America/Halifax", "Atlantic Standard Time"},                 |  |
| Havana         | {"America/Havana", "Eastern Standard Time"},                   |  |
| Hermosillo     | {"America/Hermosillo", "US Mountain Standard Time"},           |  |
| Indianapolis   | {"America/Indiana/Indianapolis", "nan"},                       |  |
| Knox           | {"America/Indiana/Knox", "Central Standard Time"},             |  |
| Marengo        | {"America/Indiana/Marengo", "US Eastern Standard Time"},       |  |
| Petersburg     | {"America/Indiana/Petersburg", "Eastern Standard Time"},       |  |
| Tell_City      | {"America/Indiana/Tell_City", "Central Standard Time"},        |  |
| Vevay          | {"America/Indiana/Vevay", "US Eastern Standard Time"},         |  |
| Vincennes      | {"America/Indiana/Vincennes", "Eastern Standard Time"},        |  |
| Winamac        | {"America/Indiana/Winamac", "Eastern Standard Time"},          |  |
| Inuvik         | {"America/Inuvik", "Mountain Standard Time"},                  |  |
| Iqaluit        | {"America/Iqaluit", "Eastern Standard Time"},                  |  |
| Jamaica        | {"America/Jamaica", "SA Pacific Standard Time"},               |  |
| Juneau         | {"America/Juneau", "Alaskan Standard Time"},                   |  |
| Louisville     | {"America/Kentucky/Louisville", "nan"},                        |  |
| Monticello     | {"America/Kentucky/Monticello", "Eastern Standard Time"},      |  |
| Kralendijk     | {"America/Kralendijk", "SA Western Standard Time"},            |  |
| La_Paz         | {"America/La_Paz", "SA Western Standard Time"},                |  |
| Lima           | {"America/Lima", "SA Pacific Standard Time"},                  |  |
| Los_Angeles    | {"America/Los_Angeles", "Pacific Standard Time"},              |  |
| Lower_Princes  | {"America/Lower_Princes", "SA Western Standard Time"},         |  |
| Maceio         | {"America/Maceio", "SA Eastern Standard Time"},                |  |
| Managua        | {"America/Managua", "Central America Standard Time"},          |  |
| Manaus         | {"America/Manaus", "SA Western Standard Time"},                |  |
| Marigot        | {"America/Marigot", "SA Western Standard Time"},               |  |
| Martinique     | {"America/Martinique", "SA Western Standard Time"},            |  |
| Matamoros      | {"America/Matamoros", "Central Standard Time"},                |  |
| Mazatlan       | {"America/Mazatlan", "Mountain Standard Time (Mexico)"},       |  |
| Menominee      | {"America/Menominee", "Central Standard Time"},                |  |
| Merida         | {"America/Merida", "Central Standard Time (Mexico)"},          |  |
| Metlakatla     | {"America/Metlakatla", "nan"},                                 |  |
| Mexico_City    | {"America/Mexico_City", "Central Standard Time (Mexico)"},     |  |
| Miquelon       | {"America/Miquelon", "nan"},                                   |  |
| Moncton        | {"America/Moncton", "Atlantic Standard Time"},                 |  |
| Monterrey      | {"America/Monterrey", "Central Standard Time (Mexico)"},       |  |
| Montevideo     | {"America/Montevideo", "Montevideo Standard Time"},            |  |
| Montreal       | {"America/Montreal", "Eastern Standard Time"},                 |  |
| Montserrat     | {"America/Montserrat", "SA Western Standard Time"},            |  |
| Nassau         | {"America/Nassau", "Eastern Standard Time"},                   |  |
| New_York       | {"America/New_York", "Eastern Standard Time"},                 |  |
| Nipigon        | {"America/Nipigon", "Eastern Standard Time"},                  |  |
| Nome           | {"America/Nome", "Alaskan Standard Time"},                     |  |
| Noronha        | {"America/Noronha", "UTC-02"},                                 |  |
| Beulah         | {"America/North_Dakota/Beulah", "Central Standard Time"},      |  |
| Center         | {"America/North_Dakota/Center", "Central Standard Time"},      |  |
| New_Salem      | {"America/North_Dakota/New_Salem", "Central Standard Time"},   |  |
| Ojinaga        | {"America/Ojinaga", "Mountain Standard Time"},                 |  |
| Panama         | {"America/Panama", "SA Pacific Standard Time"},                |  |
| Pangnirtung    | {"America/Pangnirtung", "Eastern Standard Time"},              |  |
| Paramaribo     | {"America/Paramaribo", "SA Eastern Standard Time"},            |  |
| Phoenix        | {"America/Phoenix", "US Mountain Standard Time"},              |  |
| Port-au-Prince | {"America/Port-au-Prince", "Eastern Standard Time"},           |  |
| Port_of_Spain  | {"America/Port_of_Spain", "SA Western Standard Time"},         |  |
| Porto_Velho    | {"America/Porto_Velho", "SA Western Standard Time"},           |  |
| Puerto_Rico    | {"America/Puerto_Rico", "SA Western Standard Time"},           |  |
| Rainy_River    | {"America/Rainy_River", "Central Standard Time"},              |  |
| Rankin_Inlet   | {"America/Rankin_Inlet", "Central Standard Time"},             |  |
| Recife         | {"America/Recife", "SA Eastern Standard Time"},                |  |
| Regina         | {"America/Regina", "Canada Central Standard Time"},            |  |
| Resolute       | {"America/Resolute", "Central Standard Time"},                 |  |
| Rio_Branco     | {"America/Rio_Branco", "SA Pacific Standard Time"},            |  |
| Santa_Isabel   | {"America/Santa_Isabel", "Pacific Standard Time (Mexico)"},    |  |
| Santarem       | {"America/Santarem", "SA Eastern Standard Time"},              |  |
| Santiago       | {"America/Santiago", "Pacific SA Standard Time"},              |  |
| Santo_Domingo  | {"America/Santo_Domingo", "SA Western Standard Time"},         |  |
| Sao_Paulo      | {"America/Sao_Paulo", "E. South America Standard Time"},       |  |
| Scoresbysund   | {"America/Scoresbysund", "Azores Standard Time"},              |  |
| Shiprock       | {"America/Shiprock", "nan"},                                   |  |
| Sitka          | {"America/Sitka", "Alaskan Standard Time"},                    |  |
| St_Barthelemy  | {"America/St_Barthelemy", "SA Western Standard Time"},         |  |
| St_Johns       | {"America/St_Johns", "Newfoundland Standard Time"},            |  |
| St_Kitts       | {"America/St_Kitts", "SA Western Standard Time"},              |  |
| St_Lucia       | {"America/St_Lucia", "SA Western Standard Time"},              |  |
| St_Thomas      | {"America/St_Thomas", "SA Western Standard Time"},             |  |
| St_Vincent     | {"America/St_Vincent", "SA Western Standard Time"},            |  |
| Swift_Current  | {"America/Swift_Current", "Canada Central Standard Time"},     |  |
| Tegucigalpa    | {"America/Tegucigalpa", "Central America Standard Time"},      |  |
| Thule          | {"America/Thule", "Atlantic Standard Time"},                   |  |
| Thunder_Bay    | {"America/Thunder_Bay", "Eastern Standard Time"},              |  |
| Tijuana        | {"America/Tijuana", "Pacific Standard Time"},                  |  |
| Toronto        | {"America/Toronto", "Eastern Standard Time"},                  |  |
| Tortola        | {"America/Tortola", "SA Western Standard Time"},               |  |
| Vancouver      | {"America/Vancouver", "Pacific Standard Time"},                |  |
| Whitehorse     | {"America/Whitehorse", "Pacific Standard Time"},               |  |
| Winnipeg       | {"America/Winnipeg", "Central Standard Time"},                 |  |
| Yakutat        | {"America/Yakutat", "Alaskan Standard Time"},                  |  |
| Yellowknife    | {"America/Yellowknife", "Mountain Standard Time"},             |  |
| Casey          | {"Antarctica/Casey", "W. Australia Standard Time"},            |  |
| Davis          | {"Antarctica/Davis", "SE Asia Standard Time"},                 |  |
| DumontDUrville | {"Antarctica/DumontDUrville", "West Pacific Standard Time"},   |  |
| Macquarie      | {"Antarctica/Macquarie", "Central Pacific Standard Time"},     |  |
| Mawson         | {"Antarctica/Mawson", "West Asia Standard Time"},              |  |
| McMurdo        | {"Antarctica/McMurdo", "New Zealand Standard Time"},           |  |
| Palmer         | {"Antarctica/Palmer", "Pacific SA Standard Time"},             |  |
| Rothera        | {"Antarctica/Rothera", "SA Eastern Standard Time"},            |  |
| South_Pole     | {"Antarctica/South_Pole", "nan"},                              |  |
| Syowa          | {"Antarctica/Syowa", "E. Africa Standard Time"},               |  |
| Troll          | {"Antarctica/Troll", "nan"},                                   |  |
| Vostok         | {"Antarctica/Vostok", "Central Asia Standard Time"},           |  |
| Longyearbyen   | {"Arctic/Longyearbyen", "W. Europe Standard Time"},            |  |
| Aden           | {"Asia/Aden", "Arab Standard Time"},                           |  |
| Almaty         | {"Asia/Almaty", "Central Asia Standard Time"},                 |  |
| Amman          | {"Asia/Amman", "Jordan Standard Time"},                        |  |
| Anadyr         | {"Asia/Anadyr", "Russia Time Zone 11"},                        |  |
| Aqtau          | {"Asia/Aqtau", "West Asia Standard Time"},                     |  |
| Aqtobe         | {"Asia/Aqtobe", "West Asia Standard Time"},                    |  |
| Ashgabat       | {"Asia/Ashgabat", "West Asia Standard Time"},                  |  |
| Baghdad        | {"Asia/Baghdad", "Arabic Standard Time"},                      |  |
| Bahrain        | {"Asia/Bahrain", "Arab Standard Time"},                        |  |
| Baku           | {"Asia/Baku", "Azerbaijan Standard Time"},                     |  |
| Bangkok        | {"Asia/Bangkok", "SE Asia Standard Time"},                     |  |
| Beirut         | {"Asia/Beirut", "Middle East Standard Time"},                  |  |
| Bishkek        | {"Asia/Bishkek", "Central Asia Standard Time"},                |  |
| Brunei         | {"Asia/Brunei", "Singapore Standard Time"},                    |  |
| Chita          | {"Asia/Chita", "North Asia East Standard Time"},               |  |
| Choibalsan     | {"Asia/Choibalsan", "Ulaanbaatar Standard Time"},              |  |
| Chongqing      | {"Asia/Chongqing", "nan"},                                     |  |
| Colombo        | {"Asia/Colombo", "Sri Lanka Standard Time"},                   |  |
| Damascus       | {"Asia/Damascus", "Syria Standard Time"},                      |  |
| Dhaka          | {"Asia/Dhaka", "Bangladesh Standard Time"},                    |  |
| Dili           | {"Asia/Dili", "Tokyo Standard Time"},                          |  |
| Dubai          | {"Asia/Dubai", "Arabian Standard Time"},                       |  |
| Dushanbe       | {"Asia/Dushanbe", "West Asia Standard Time"},                  |  |
| Gaza           | {"Asia/Gaza", "nan"},                                          |  |
| Harbin         | {"Asia/Harbin", "nan"},                                        |  |
| Hebron         | {"Asia/Hebron", "nan"},                                        |  |
| Ho_Chi_Minh    | {"Asia/Ho_Chi_Minh", "nan"},                                   |  |
| Hong_Kong      | {"Asia/Hong_Kong", "China Standard Time"},                     |  |
| Hovd           | {"Asia/Hovd", "SE Asia Standard Time"},                        |  |
| Irkutsk        | {"Asia/Irkutsk", "North Asia East Standard Time"},             |  |
| Jakarta        | {"Asia/Jakarta", "SE Asia Standard Time"},                     |  |
| Jayapura       | {"Asia/Jayapura", "Tokyo Standard Time"},                      |  |
| Jerusalem      | {"Asia/Jerusalem", "Israel Standard Time"},                    |  |
| Kabul          | {"Asia/Kabul", "Afghanistan Standard Time"},                   |  |
| Kamchatka      | {"Asia/Kamchatka", "Russia Time Zone 11"},                     |  |
| Karachi        | {"Asia/Karachi", "Pakistan Standard Time"},                    |  |
| Kashgar        | {"Asia/Kashgar", "nan"},                                       |  |
| Kathmandu      | {"Asia/Kathmandu", "nan"},                                     |  |
| Katmandu       | {"Asia/Katmandu", "Nepal Standard Time"},                      |  |
| Khandyga       | {"Asia/Khandyga", "Yakutsk Standard Time"},                    |  |
| Kolkata        | {"Asia/Kolkata", "India Standard Time"},                       |  |
| Krasnoyarsk    | {"Asia/Krasnoyarsk", "North Asia Standard Time"},              |  |
| Kuala_Lumpur   | {"Asia/Kuala_Lumpur", "Singapore Standard Time"},              |  |
| Kuching        | {"Asia/Kuching", "Singapore Standard Time"},                   |  |
| Kuwait         | {"Asia/Kuwait", "Arab Standard Time"},                         |  |
| Macau          | {"Asia/Macau", "China Standard Time"},                         |  |
| Magadan        | {"Asia/Magadan", "Magadan Standard Time"},                     |  |
| Makassar       | {"Asia/Makassar", "Singapore Standard Time"},                  |  |
| Manila         | {"Asia/Manila", "Singapore Standard Time"},                    |  |
| Muscat         | {"Asia/Muscat", "Arabian Standard Time"},                      |  |
| Nicosia        | {"Asia/Nicosia", "GTB Standard Time"},                         |  |
| Novokuznetsk   | {"Asia/Novokuznetsk", "North Asia Standard Time"},             |  |
| Novosibirsk    | {"Asia/Novosibirsk", "N. Central Asia Standard Time"},         |  |
| Omsk           | {"Asia/Omsk", "N. Central Asia Standard Time"},                |  |
| Oral           | {"Asia/Oral", "West Asia Standard Time"},                      |  |
| Phnom_Penh     | {"Asia/Phnom_Penh", "SE Asia Standard Time"},                  |  |
| Pontianak      | {"Asia/Pontianak", "SE Asia Standard Time"},                   |  |
| Pyongyang      | {"Asia/Pyongyang", "nan"},                                     |  |
| Qatar          | {"Asia/Qatar", "Arab Standard Time"},                          |  |
| Qyzylorda      | {"Asia/Qyzylorda", "Central Asia Standard Time"},              |  |
| Rangoon        | {"Asia/Rangoon", "Myanmar Standard Time"},                     |  |
| Riyadh         | {"Asia/Riyadh", "Arab Standard Time"},                         |  |
| Sakhalin       | {"Asia/Sakhalin", "Vladivostok Standard Time"},                |  |
| Samarkand      | {"Asia/Samarkand", "West Asia Standard Time"},                 |  |
| Seoul          | {"Asia/Seoul", "Korea Standard Time"},                         |  |
| Shanghai       | {"Asia/Shanghai", "China Standard Time"},                      |  |
| Singapore      | {"Asia/Singapore", "Singapore Standard Time"},                 |  |
| Srednekolymsk  | {"Asia/Srednekolymsk", "Russia Time Zone 10"},                 |  |
| Taipei         | {"Asia/Taipei", "Taipei Standard Time"},                       |  |
| Tashkent       | {"Asia/Tashkent", "West Asia Standard Time"},                  |  |
| Tbilisi        | {"Asia/Tbilisi", "Georgian Standard Time"},                    |  |
| Tehran         | {"Asia/Tehran", "Iran Standard Time"},                         |  |
| Thimphu        | {"Asia/Thimphu", "Bangladesh Standard Time"},                  |  |
| Tokyo          | {"Asia/Tokyo", "Tokyo Standard Time"},                         |  |
| Ulaanbaatar    | {"Asia/Ulaanbaatar", "Ulaanbaatar Standard Time"},             |  |
| Urumqi         | {"Asia/Urumqi", "Central Asia Standard Time"},                 |  |
| Ust-Nera       | {"Asia/Ust-Nera", "Vladivostok Standard Time"},                |  |
| Vientiane      | {"Asia/Vientiane", "SE Asia Standard Time"},                   |  |
| Vladivostok    | {"Asia/Vladivostok", "Vladivostok Standard Time"},             |  |
| Yakutsk        | {"Asia/Yakutsk", "Yakutsk Standard Time"},                     |  |
| Yekaterinburg  | {"Asia/Yekaterinburg", "Ekaterinburg Standard Time"},          |  |
| Yerevan        | {"Asia/Yerevan", "Caucasus Standard Time"},                    |  |
| Azores         | {"Atlantic/Azores", "Azores Standard Time"},                   |  |
| Bermuda        | {"Atlantic/Bermuda", "Atlantic Standard Time"},                |  |
| Canary         | {"Atlantic/Canary", "GMT Standard Time"},                      |  |
| Cape_Verde     | {"Atlantic/Cape_Verde", "Cape Verde Standard Time"},           |  |
| Faroe          | {"Atlantic/Faroe", "nan"},                                     |  |
| Madeira        | {"Atlantic/Madeira", "GMT Standard Time"},                     |  |
| Reykjavik      | {"Atlantic/Reykjavik", "Greenwich Standard Time"},             |  |
| South_Georgia  | {"Atlantic/South_Georgia", "UTC-02"},                          |  |
| St_Helena      | {"Atlantic/St_Helena", "Greenwich Standard Time"},             |  |
| Stanley        | {"Atlantic/Stanley", "SA Eastern Standard Time"},              |  |
| Adelaide       | {"Australia/Adelaide", "Cen. Australia Standard Time"},        |  |
| Brisbane       | {"Australia/Brisbane", "E. Australia Standard Time"},          |  |
| Broken_Hill    | {"Australia/Broken_Hill", "Cen. Australia Standard Time"},     |  |
| Currie         | {"Australia/Currie", "Tasmania Standard Time"},                |  |
| Darwin         | {"Australia/Darwin", "AUS Central Standard Time"},             |  |
| Eucla          | {"Australia/Eucla", "nan"},                                    |  |
| Hobart         | {"Australia/Hobart", "Tasmania Standard Time"},                |  |
| Lindeman       | {"Australia/Lindeman", "E. Australia Standard Time"},          |  |
| Lord_Howe      | {"Australia/Lord_Howe", "nan"},                                |  |
| Melbourne      | {"Australia/Melbourne", "AUS Eastern Standard Time"},          |  |
| Perth          | {"Australia/Perth", "W. Australia Standard Time"},             |  |
| Sydney         | {"Australia/Sydney", "AUS Eastern Standard Time"},             |  |
| Amsterdam      | {"Europe/Amsterdam", "W. Europe Standard Time"},               |  |
| Andorra        | {"Europe/Andorra", "W. Europe Standard Time"},                 |  |
| Athens         | {"Europe/Athens", "GTB Standard Time"},                        |  |
| Belgrade       | {"Europe/Belgrade", "Central Europe Standard Time"},           |  |
| Berlin         | {"Europe/Berlin", "W. Europe Standard Time"},                  |  |
| Bratislava     | {"Europe/Bratislava", "Central Europe Standard Time"},         |  |
| Brussels       | {"Europe/Brussels", "Romance Standard Time"},                  |  |
| Bucharest      | {"Europe/Bucharest", "GTB Standard Time"},                     |  |
| Budapest       | {"Europe/Budapest", "Central Europe Standard Time"},           |  |
| Busingen       | {"Europe/Busingen", "W. Europe Standard Time"},                |  |
| Chisinau       | {"Europe/Chisinau", "GTB Standard Time"},                      |  |
| Copenhagen     | {"Europe/Copenhagen", "Romance Standard Time"},                |  |
| Dublin         | {"Europe/Dublin", "GMT Standard Time"},                        |  |
| Gibraltar      | {"Europe/Gibraltar", "W. Europe Standard Time"},               |  |
| Guernsey       | {"Europe/Guernsey", "GMT Standard Time"},                      |  |
| Helsinki       | {"Europe/Helsinki", "FLE Standard Time"},                      |  |
| Isle_of_Man    | {"Europe/Isle_of_Man", "GMT Standard Time"},                   |  |
| Istanbul       | {"Europe/Istanbul", "Turkey Standard Time"},                   |  |
| Jersey         | {"Europe/Jersey", "GMT Standard Time"},                        |  |
| Kaliningrad    | {"Europe/Kaliningrad", "Kaliningrad Standard Time"},           |  |
| Kiev           | {"Europe/Kiev", "FLE Standard Time"},                          |  |
| Lisbon         | {"Europe/Lisbon", "GMT Standard Time"},                        |  |
| Ljubljana      | {"Europe/Ljubljana", "Central Europe Standard Time"},          |  |
| London         | {"Europe/London", "GMT Standard Time"},                        |  |
| Luxembourg     | {"Europe/Luxembourg", "W. Europe Standard Time"},              |  |
| Madrid         | {"Europe/Madrid", "Romance Standard Time"},                    |  |
| Malta          | {"Europe/Malta", "W. Europe Standard Time"},                   |  |
| Mariehamn      | {"Europe/Mariehamn", "FLE Standard Time"},                     |  |
| Minsk          | {"Europe/Minsk", "Belarus Standard Time"},                     |  |
| Monaco         | {"Europe/Monaco", "W. Europe Standard Time"},                  |  |
| Moscow         | {"Europe/Moscow", "Russian Standard Time"},                    |  |
| Oslo           | {"Europe/Oslo", "W. Europe Standard Time"},                    |  |
| Paris          | {"Europe/Paris", "Romance Standard Time"},                     |  |
| Podgorica      | {"Europe/Podgorica", "Central Europe Standard Time"},          |  |
| Prague         | {"Europe/Prague", "Central Europe Standard Time"},             |  |
| Riga           | {"Europe/Riga", "FLE Standard Time"},                          |  |
| Rome           | {"Europe/Rome", "W. Europe Standard Time"},                    |  |
| Samara         | {"Europe/Samara", "Russia Time Zone 3"},                       |  |
| San_Marino     | {"Europe/San_Marino", "W. Europe Standard Time"},              |  |
| Sarajevo       | {"Europe/Sarajevo", "Central European Standard Time"},         |  |
| Simferopol     | {"Europe/Simferopol", "Russian Standard Time"},                |  |
| Skopje         | {"Europe/Skopje", "Central European Standard Time"},           |  |
| Sofia          | {"Europe/Sofia", "FLE Standard Time"},                         |  |
| Stockholm      | {"Europe/Stockholm", "W. Europe Standard Time"},               |  |
| Tallinn        | {"Europe/Tallinn", "FLE Standard Time"},                       |  |
| Tirane         | {"Europe/Tirane", "Central Europe Standard Time"},             |  |
| Uzhgorod       | {"Europe/Uzhgorod", "FLE Standard Time"},                      |  |
| Vaduz          | {"Europe/Vaduz", "W. Europe Standard Time"},                   |  |
| Vatican        | {"Europe/Vatican", "W. Europe Standard Time"},                 |  |
| Vienna         | {"Europe/Vienna", "W. Europe Standard Time"},                  |  |
| Vilnius        | {"Europe/Vilnius", "FLE Standard Time"},                       |  |
| Volgograd      | {"Europe/Volgograd", "Russian Standard Time"},                 |  |
| Warsaw         | {"Europe/Warsaw", "Central European Standard Time"},           |  |
| Zagreb         | {"Europe/Zagreb", "Central European Standard Time"},           |  |
| Zaporozhye     | {"Europe/Zaporozhye", "FLE Standard Time"},                    |  |
| Zurich         | {"Europe/Zurich", "W. Europe Standard Time"},                  |  |
| GMT            | {"GMT", "GMT Standard Time"},                                  |  |
| Antananarivo   | {"Indian/Antananarivo", "E. Africa Standard Time"},            |  |
| Chagos         | {"Indian/Chagos", "Central Asia Standard Time"},               |  |
| Christmas      | {"Indian/Christmas", "SE Asia Standard Time"},                 |  |
| Cocos          | {"Indian/Cocos", "Myanmar Standard Time"},                     |  |
| Comoro         | {"Indian/Comoro", "E. Africa Standard Time"},                  |  |
| Kerguelen      | {"Indian/Kerguelen", "West Asia Standard Time"},               |  |
| Mahe           | {"Indian/Mahe", "Mauritius Standard Time"},                    |  |
| Maldives       | {"Indian/Maldives", "West Asia Standard Time"},                |  |
| Mauritius      | {"Indian/Mauritius", "Mauritius Standard Time"},               |  |
| Mayotte        | {"Indian/Mayotte", "E. Africa Standard Time"},                 |  |
| Reunion        | {"Indian/Reunion", "Mauritius Standard Time"},                 |  |
| Apia           | {"Pacific/Apia", "Samoa Standard Time"},                       |  |
| Auckland       | {"Pacific/Auckland", "New Zealand Standard Time"},             |  |
| Bougainville   | {"Pacific/Bougainville", "Central Pacific Standard Time"},     |  |
| Chatham        | {"Pacific/Chatham", "nan"},                                    |  |
| Chuuk          | {"Pacific/Chuuk", "nan"},                                      |  |
| Easter         | {"Pacific/Easter", "nan"},                                     |  |
| Efate          | {"Pacific/Efate", "Central Pacific Standard Time"},            |  |
| Enderbury      | {"Pacific/Enderbury", "Tonga Standard Time"},                  |  |
| Fakaofo        | {"Pacific/Fakaofo", "Tonga Standard Time"},                    |  |
| Fiji           | {"Pacific/Fiji", "Fiji Standard Time"},                        |  |
| Funafuti       | {"Pacific/Funafuti", "UTC+12"},                                |  |
| Galapagos      | {"Pacific/Galapagos", "Central America Standard Time"},        |  |
| Gambier        | {"Pacific/Gambier", "nan"},                                    |  |
| Guadalcanal    | {"Pacific/Guadalcanal", "Central Pacific Standard Time"},      |  |
| Guam           | {"Pacific/Guam", "West Pacific Standard Time"},                |  |
| Honolulu       | {"Pacific/Honolulu", "Hawaiian Standard Time"},                |  |
| Johnston       | {"Pacific/Johnston", "Hawaiian Standard Time"},                |  |
| Kiritimati     | {"Pacific/Kiritimati", "Line Islands Standard Time"},          |  |
| Kosrae         | {"Pacific/Kosrae", "Central Pacific Standard Time"},           |  |
| Kwajalein      | {"Pacific/Kwajalein", "UTC+12"},                               |  |
| Majuro         | {"Pacific/Majuro", "UTC+12"},                                  |  |
| Marquesas      | {"Pacific/Marquesas", "nan"},                                  |  |
| Midway         | {"Pacific/Midway", "UTC-11"},                                  |  |
| Nauru          | {"Pacific/Nauru", "UTC+12"},                                   |  |
| Niue           | {"Pacific/Niue", "UTC-11"},                                    |  |
| Norfolk        | {"Pacific/Norfolk", "nan"},                                    |  |
| Noumea         | {"Pacific/Noumea", "Central Pacific Standard Time"},           |  |
| Pago_Pago      | {"Pacific/Pago_Pago", "UTC-11"},                               |  |
| Palau          | {"Pacific/Palau", "Tokyo Standard Time"},                      |  |
| Pitcairn       | {"Pacific/Pitcairn", "nan"},                                   |  |
| Pohnpei        | {"Pacific/Pohnpei", "nan"},                                    |  |
| Ponape         | {"Pacific/Ponape", "Central Pacific Standard Time"},           |  |
| Port_Moresby   | {"Pacific/Port_Moresby", "West Pacific Standard Time"},        |  |
| Rarotonga      | {"Pacific/Rarotonga", "Hawaiian Standard Time"},               |  |
| Saipan         | {"Pacific/Saipan", "West Pacific Standard Time"},              |  |
| Tahiti         | {"Pacific/Tahiti", "Hawaiian Standard Time"},                  |  |
| Tarawa         | {"Pacific/Tarawa", "UTC+12"},                                  |  |
| Tongatapu      | {"Pacific/Tongatapu", "Tonga Standard Time"},                  |  |
| Truk           | {"Pacific/Truk", "West Pacific Standard Time"},                |  |
| Wake           | {"Pacific/Wake", "UTC+12"},                                    |  |
| Wallis         | {"Pacific/Wallis", "UTC+12"},                                  |  |


## LambdaTest Advanced Selenium Capabilities

* * *

In this table, LambdaTest advanced capabilities key,values and capabilities are listed.

| KEY  | VALUES | CAPABILITY  | DEFAULT VALUE | ALIAS  | CAPABILITY DESCRIPTION  | VALUE TYPE  | EXAMPLE  | POSSIBLE ERRORS  |
|-----------------|-----------|-------------| ------|--------|-----------------|-------------| ------|----------------|
| video      | true, false             | By default, the video is set as true. This capability helps in video recording of the complete screen while the test gets executed. You can record maximum up to 10 minutes. In case you need to turn off the video recording, you can do so by turning off the button on our Desired Capabilities Generator. <br/>If you turn the video flag off, then for Java, it may provide the below piece of code in the capabilities class.    <br/>```capabilities.setCapability("video",false);``` | TRUE | |video recording of the complete screen |Boolean |```capabilities.setCapability(""video"",false);``` |Case Sensitive <br />Unable to generate video <br/>Video is not playing in video player |
| visual     | true, false             | Command by command screenshots will be recorded at each test step. By default the flag is set as off. <br/>**Note:** test execution time will increase if it’s set as ‘true’.  <br/>```capabilities.setCapability("visual",true)```;|FALSE |debug |Command by command screenshots will be recorded at each test step. By default the flag is set as off. Note: test execution time will increase if it’s set as ‘true’. |Boolean |```capabilities.setCapability(""visual"",true);``` |Case sensitive <br />Unable to generate screenshot   <br/>Screenshot is broken |
| network    |true / false <br />disable: stops capturing the console logs <br /> errors: shows only error output in console <br /> warnings: shows warning and error output in the console <br /> info: shows info statement, warning and error output in the console <br />true/verbose: shows all console output"             | Captures a recording for network packets while the test gets executed. By default, the network flag is set as false. <br/>**Note**: test execution time will increase if it’s set as ‘true’.  <br/>```capabilities.setCapability("network",true)```; <br />     | FALSE |networkLogs |recording for newtwork packets |Boolean |```capabilities.setCapability(""network"",true);``` |Case sensitive <br />Network logs not supported|
| console    | true, false             | Javascript logs will be recorded for the test. By default, it is set as false. <br/>**Note:** test execution time will increase if it’s set as ‘true’.   <br/>```capabilities.setCapability("console",true)```; | FALSE |Capture browser console errors |Capture browser console errors  |String |Javascript logs will be recorded for the test. By default, it is set as false. ```capabilities.setCapability("console","disable");``` |Case Sensitive <br/>No error found <br />Not supported on this browser |
| tunnel     | true, false      | To test your locally hosted web application with Lambda Tunnel, which establishes an SSH(Secure Shell) connection between your system and our cloud servers. By default, the tunnel flag, will be set as false.  <br/>```capabilities.setCapability("tunnel",true);```  <br/>Find more about Lambda Tunnel from our documentation to test on  [locally hosted web applications.](/docs/testing-locally-hosted-pages/)   | FALSE |local |To test your locally hosted web application with LambdaTest Tunnel which establishes an SSH(Secure Shell) connection between your system and our cloud servers. By default, the tunnel flag, will be set as false. |Boolean |```capabilities.setCapability("tunnel",true);```<br/> Find more about LambdaTest Tunnel from our documentation to test on locally hosted web applications. |Case Sensitive <br/>Tunnel not running |
| tunnelName | Your desire tunnel name | To provide the tunnel identifier in your test suite capability when user wants to execute the test through a particular tunnel  <br/>```capabilities.setCapability("tunnelName","your desire tunnel name")```;| |localName |Tunnel Name to identify your tunnel among all tunnels in your account |String |```capabilities.setCapability("tunnelName","your desire tunnel name");``` |Case Sensitive   <br/>Tunnel not running   <br />Tunnel Name not exisits |
| timezone   | Example: UTC+07:00      | Represents the custom timezone you select for executing a test.   <br/>```capabilities.setCapability("timezone","UTC+07:00")```;    | UTC+00:00| |Change the timezone of OS |String |```capabilities.setCapability("timezone","UTC+07:00");``` |Case sensitive <br/> Timezone not supported by OS <br />Timezone is different |
## View Lighthouse Performance Metrics
***

LambdaTest now integrates [Lighthouse](https://developers.google.com/web/tools/lighthouse) to view the performance metrics (Lighthouse Audits) on its online cloud based Selenium Grid. You can now view the scores of:

* Performance,
* Accessibility,
* Best Practices,
* SEO, and
* Progressive Web App

metrics with the help of LambdaTest.

You can view the Lighthouse Performance metrics by enabling capability via code, using the below syntax:

`capabilities.setCapability("performance", true);`

Please refer to the [Lighthouse Performance Metrics documentation](https://www.lambdatest.com/support/docs/view-lighthouse-performance-metrics/).




## Network Throttling

***

In order to validate your website on different network profiles (LTE/3G/2G), you can simulate these network conditions using our capabilities.

| KEY        | VALUES                  | CAPABILITY                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|------------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| networkThrottling     | Regular 4G, Regular 3G, Regular 2G, Good 3G, Good 2G, Offline, Reset, GPRS, DSL             | Based on the user-provided input, this capability helps to start test suite with default network. For example, if user selects the value **Regular 4G** then the capabilities will look like this: <br/> ```capabilities.setCapability("networkThrottling", "Regular 4G");``` |

For more info, visit our documentation on [Network Throttling](https://www.lambdatest.com/support/docs/network-throttling/).        

## Headless Browser

***  

You can now perform Headless browser testing easily, by adding their capability to your desired capabilities.

You can either do that by selecting the option **Headless**, under the browser-specific capabilities in the Desired Capabilities Generator, as shown in the image below:

<img loading="lazy" src={require('../assets/images/selenium-automation-capabilities/2.webp').default} alt="Image" width="768" height="344" className="doc_img"/>

Or you can just enable the Headless capability via code, using the below syntax:

```capabilities.setCapability("headless", true);```

Please refer to [Headless Browser Testing documentation](https://www.lambdatest.com/support/docs/perform-selenium-automation-on-headless-browsers/) for complete details.



## Default Selenium Capabilities

* * *

| KEY                      | VALUES                  | CAPABILITY                                                                                                                                                                                                                                                                                                                                     |
|--------------------------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| javascriptEnabled        | true, false             | Based on the user provided input, this capability helps to enable the support for JavaScript execution.                                                                                                                                                                                                                                        |
| databaseEnabled          | true, false             | Decides if a session could communicate with the database.                                                                                                                                                                                                                                                                                      |
| locationContextEnabled   | true, false             | Decides if a session can use the features with respect to different geographic locations.                                                                                                                                                                                                                                                      |
| applicationCacheEnabled  | true, false             | Decides if a session is able to utilize the application cache.                                                                                                                                                                                                                                                                                 |
| browserConnectionEnabled | true, false             | Determines the browser connectivity with respect to the query involved in the session. Also checks whether the session can be disabled if required by the end user.                                                                                                                                                                            |
| webStorageEnabled        | true, false             | Decides if a session is able to connect with [storage objects](https://www.w3.org/TR/2009/WD-webstorage-20091029/).                                                                                                                                                                                                                                                                                  |
| acceptSslCerts           | true, false             | Decides if a session by default should accept all SSL certificates.                                                                                                                                                                                                                                                                            |
| unexpectedAlertBehaviour | accept, dismiss, ignore | Determines the action of a browser for handling alerts, prior to pointing the UnhandledAlertException.                                                                                                                                                                                                                                         |
| elementScrollBehavior    | integer                 | Determines the scrolling behavior according to the user provided input. The user can decide if the elements should be aligned to top(0) or bottom(1) with respect to the elements scroll-ability inside the viewport. By default the value is set to 1, aligning the scroll behavior to top. This is compatible with IE and Firefox (since 2.36) |

## Hide/Mask Sensitive Information Through Selenium Capabilities
***

With the help of **maskCommands** capability, you can now hide sensitive and important data, sent to or retrieve from the remote browsers at LambdaTest. When used, this will hide all the keystrokes and other required values, and replace them with **‘*’** in test session logs (both text and raw).

**Syntax (Java)**:

`capabilities.setCapability("lambdaMaskCommands", {"<array of values to be hidden>"});`

<img loading="lazy" src={require('../assets/images/selenium-automation-capabilities/bf6eb74a-fa83-46b8-a647-d3a0d143fd03.webp').default} alt="Image" width="768" height="344" className="doc_img"/>

List of comma separated values that can be hidden:

| VALUE | DESCRIPTION |
|-------|-------------|
| setValues	| Hide/Redact all the text sent via sendKeys command. |
| setCookies | Hide/Redact all the cookies set by the addCookie command.|
| getCookies | Hide/Redact all the cookie values obtained using the getCookies and getCookieNamed command.|

For example:

| LANGUAGE | EXAMPLE |
|-------|-------------|
| Java	|capabilities.setCapability(“lambdaMaskCommands”, {“setValues”, “setCookies, getCookies”}); |
| Node.js | capabilities[‘lambdaMaskCommands’] = [“setValues”, “setCookies”, “getCookies”]|
| C# | capabilities.SetCapability(“lambdaMaskCommands”, {“setValues”, “setCookies”, “getCookies”});|
| PHP	| $capabilities[“lambdaMaskCommands”] = array(“setValues”, “setCookies”, “getCookies”)|
| Python | capabilities[“lambdaMaskCommands”] = [“setValues”, “setCookies”, “getCookies”]|
| Ruby |capabilities[“lambdaMaskCommands”] = [“setValues”, “setCookies”, “getCookies”]|

>Got any questions?<br/>
Please reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at support@lambdatest.com.

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