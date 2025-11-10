---
id: selenium-visual-regression
title: Getting Started With Visual Regression Testing Using Selenium On SmartUI
sidebar_label: Selenium
description: Master Selenium Visual Regression testing with LambdaTest. Detect visual deviations early in your web applications to ensure a seamless user experience.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests

url: https://www.lambdatest.com/support/docs/selenium-visual-regression/
site_name: LambdaTest
slug: selenium-visual-regression/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';

---

Using the LambdaTest platform, perform regression testing in just one click and find Visual UI Regression bugs easily with the help of Smart Testing. This documentation will act as your step-by-step guide in performing successful Visual Regression tests.

- Basic understanding of Selenium and WebDriver is required.
- Go to [`LambdaTest SmartUI`](https://smartui.lambdatest.com/) and login along with your credentials.
- Access your Hub for your selenium **remote connection** instance at `hub.lambdatest.com/wd/hub`.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from `Access Key` button on the top right of the dashboard.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export LT_USERNAME="YOUR_USERNAME" 
export LT_ACCESS_KEY="YOUR ACCESS KEY"
```
</TabItem>
<TabItem value="Windows" label="Windows-CMD" default>

```bash
set LT_USERNAME="YOUR_USERNAME" 
set LT_ACCESS_KEY="YOUR ACCESS KEY"
```
</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:LT_USERNAME="YOUR_USERNAME"
$env:LT_ACCESS_KEY="YOUR ACCESS KEY"
```
</TabItem>

</Tabs>

The following steps will guide you in running your first Visual Regression test on LambdaTest platform -

### Step 1: Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your **builds** run on the project.
To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>Web</b> for executing your `Selenium` tests. 
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

<!-- <img loading="lazy" src={require('../assets/images/uploads/smart-ui-1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/> -->

### Step 2: Configure your test with Selenium Desired Capabilities

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots -

1. Please clone the following sample Github repo (`https://github.com/LambdaTest/smartui-node-sample`).

```bash
git clone https://github.com/LambdaTest/smartui-node-sample
```

2. Set up the LambdaTest credentials by following the instructions mentioned in the `README.md` file.
3. Edit the required capabilities for your test suite.

<Tabs className="docs__val" groupId="language">
<TabItem value="nodejs" label="NodeJS" default>

```javascript title="Please replace your capabilities in your Remote Webdriver DesiredCapabilities configuration"
let capabilities = {
  platform: "Windows 10", // Configure your OS for Selenium test
  browserName: "chrome", // Configure your Browser for Selenium test
  version: "latest", // Configure your Browser Version for Selenium test
  visual: true, // Configure your Capture screenshot  for Selenium test
  name: "test session", // name of the test for Selenium
  build: "Automation Build", // name of the build for Selenium
  //highlight-start
  "smartUI.project": "<Your Project Name>", // Replace the name of project with the new project name
  "smartUI.build": "<Your Build Name>", // Replace the name of Build with the new Build name
  "smartUI.baseline": false, // Enable if you want to update to a new baseline build
  //highlight-end
};

// Connecting to the Lambdatest Selenium Cloud Grid with SmartUI
let gridUrl =
  "https://" +
  "<Your Username>" +
  ":" +
  "<Your Access Key>" +
  `hub.lambdatest.com/wd/hub`;

// Here is your Remote WebDrive Connection
let driver = await new webdriver.Builder()
  .usingServer(gridUrl)
  .withCapabilities(capabilities)
  .build();
```

</TabItem>

<TabItem value="python" label="Python" default>

```python title="Please replace your capabilities in your Remote Webdriver DesiredCapabilities configuration"
options = ChromeOptions()
options.browser_version = "120.0"
options.platform_name = "Windows 10"
lt_options = {};
lt_options["username"] = "USERNAME";
lt_options["accessKey"] = "ACCESS_KEY";
lt_options["project"] = "Untitled";
#highlight-start
lt_options["smartUI.project"] = "<Project Name>";
#highlight-end
lt_options["w3c"] = True;
lt_options["plugin"] = "python-python";
options.set_capability('LT:Options', lt_options);


options.set_capability('LT:Options', lt_options);

#Connecting to the Lambdatest Selenium Cloud Grid with SmartUI
self.driver = webdriver.Remote(
command_executor=  "https://" +"<Your Username>" +":" +"<Your Access Key>" + `hub.lambdatest.com/wd/hub`.format(username, access_key),options=options)
```

</TabItem>
<TabItem value="ruby" label="Ruby" default>

```ruby title="Please replace your capabilities in your Remote Webdriver DesiredCapabilities configuration"
options = Selenium::WebDriver::Options.chrome
options.browser_version = "120.0"
options.platform_name = "Windows 10"
lt_options = {};
lt_options[:username] = "USERNAME";
lt_options[:accessKey] = "ACCESS_KEY";
lt_options[:project] = "Untitled";
lt_options[:w3c] = true;
lt_options[:plugin] = "ruby-ruby";
options.set_capability('LT:Options', lt_options);
#highlight-start
lt_options[:'smartUI.project']="SmartUI_Project_Name"
#highlight-end

options.set_capability('LT:Options', lt_options);

#Connecting to the Lambdatest Selenium Cloud Grid with SmartUI
self.driver = webdriver.Remote(
command_executor=  "https://" +"<Your Username>" +":" +"<Your Access Key>" + `hub.lambdatest.com/wd/hub`.format(username, access_key),options=options)
```

</TabItem>
<TabItem value="csharp" label="C#" default>

```csharp title="Please replace your capabilities in your Remote Webdriver DesiredCapabilities configuration"
String LT_USERNAME = GetEnvironmentVariable("LT_USERNAME");
String LT_ACCESS_KEY =  GetEnvironmentVariable("LT_ACCESS_KEY");
IWebDriver driver;
ChromeOptions capabilities = new ChromeOptions();
capabilities.BrowserVersion = "latest";
Dictionary<string, object> ltOptions = new Dictionary<string, object>();
ltOptions.Add("username", LT_USERNAME);
ltOptions.Add("accessKey", LT_ACCESS_KEY);
ltOptions.Add("platformName", "Windows 10");
ltOptions.Add("project", "Demo LT");
ltOptions.Add("build", "C# Build");
ltOptions.Add("sessionName", "C# Single Test");
//highlight-start
ltOptions.Add("smartUI.project", "<SMARTUI PROJECT NAME>");
//highlight-end
ltOptions.Add("w3c", true);
ltOptions.Add("plugin", "c#-c#");
capabilities.AddAdditionalOption("LT:Options", ltOptions);

// Connecting to the Lambdatest Selenium Cloud Grid with SmartUI
driver = new RemoteWebDriver(new Uri("https://hub.lambdatest.com/wd/hub/"), capabilities);
```

</TabItem>
<TabItem value="java" label="Java" default>

```java title="Please replace your capabilities in your Remote Webdriver DesiredCapabilities configuration"
ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 10");
browserOptions.setBrowserVersion("120.0");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<USERNAME>");
ltOptions.put("accessKey", "<ACCESS_KEY>");
ltOptions.put("project", "Untitled");
//highlight-start 
ltOptions.put("smartUI.project", "<SmartUI Project Name>");
//highlight-end
ltOptions.put("w3c", true);
ltOptions.put("plugin", "java-java");
browserOptions.setCapability("LT:Options", ltOptions);

// Connecting to the Lambdatest Selenium Cloud Grid with SmartUI
driver = new RemoteWebDriver(new URL("https://" + username + ":" + accesskey + gridURL), capabilities);
```

</TabItem>
</Tabs>

- Installing dependency and for executing the test.

<Tabs className="docs__val" groupId="language">
<TabItem value="nodejs" label="NodeJS" default>

```
npm i && node <file_name>
```
</TabItem>

<TabItem value="python" label="Python" default>

```
pip install -r requirements.txt && python3 <file_name>
```
</TabItem>
<TabItem value="ruby" label="Ruby" default>

```
sudo gem install selenium-webdriver && ruby <file_name>
```
</TabItem>

<TabItem value="csharp" label="C#" default>

```
cd Packages nuget.exe install ..NUnitSeleniumpackages.config nmake clean build make <file_name>
```

</TabItem>
<TabItem value="java" label="Java" default>

```
mvn clean install && mvn test -P <file_name>
```

</TabItem>
</Tabs>

<!-- <img loading="lazy" src={require('../assets/images/uploads/smart-ui-2.webp').default} alt="cmd" width="768" height="373" className="doc_img"/> -->

Here you can explore multiple features and execute more such builds.

## Step 3: Configure your Screenshot Capturing Options
---

### For taking viewport screenshot

This part of the code needs to be attached below the required segment of selenium script of which we would like to take the screenshot to test on.
<Tabs className="docs__val" groupId="language">
<TabItem value="nodejs" label="NodeJS" default>

```javascript
let config = {
  screenshotName: '<Name of your screenshot>'
};
await driver.executeScript("smartui.takeScreenshot", config);
```
</TabItem>

<TabItem value="python" label="Python" default>

```python
config = {
  'screenshotName': '<Your Screenshot Name>'
}
driver.execute_script("smartui.takeScreenshot", config)
```
</TabItem>
<TabItem value="ruby" label="Ruby" default>

```ruby
config = {
  'screenshotName' => '<Your Screenshot Name>'
}
driver.execute_script("smartui.takeScreenshot", config)
```
</TabItem>

<TabItem value="csharp" label="C#" default>

```csharp
var config = new Dictionary<string, string> {
  {"screenshotName", "<Your Screenshot Name>"}
};
driver.ExecuteScript("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value="java" label="Java" default>

```java
Map<String, Object> config = new HashMap<>();
config.put("screenshotName", "<Your Screenshot Name>");
((JavascriptExecutor)driver).executeScript("smartui.takeScreenshot", config);
```

</TabItem>
</Tabs>

### For capturing full page screenshot

You can capture the full page screenshot for all different websites which have a scrolling functionality on their application user interface for your **Selenium** functional testing.

Add the following **Webhook** to your test cases where we need to capture the screenshot of your application.


<Tabs className="docs__val" groupId="language">
<TabItem value="nodejs" label="NodeJS" default>

```javascript
driver.executeScript("smartui.takeFullPageScreenshot=<Your Screenshot Name>")
```

</TabItem>

<TabItem value="python" label="Python" default>

```python
driver.execute_script("smartui.takeFullPageScreenshot=<Your Screenshot Name>")
```

</TabItem>
<TabItem value="ruby" label="Ruby" default>

```ruby
driver.execute_script("smartui.takeFullPageScreenshot=<Your Screenshot Name>")
```

</TabItem>
<TabItem value="csharp" label="C#" default>

```csharp
driver.ExecuteScript("smartui.takeFullPageScreenshot=<Your Screenshot Name>");
```

</TabItem>
<TabItem value="java" label="Java" default>

```java
((JavascriptExecutor)driver).executeScript("smartui.takeFullPageScreenshot=<Your Screenshot Name>");
```

</TabItem>
</Tabs>

:::caution
The following feature is applicable for `Selenium >= 4.0.0 with Chrome` versions only. Please ensure that the `Lambdatest Capabilities` are updated in your project for executing full page screenshot(s). 
:::


#### SmartScroll (For browsers other than Chrome) <NewTag value="BETA" bgColor="#ffec02" color="#000" />
For browsers other than chrome (Mozilla, Safari etc.) and for websites `Full Page Screenshot` fails, you can use smartscroll to take a full page screenshot of your web page by adding this hook in your test script.


<Tabs className="docs__val" groupId="language">
<TabItem value="nodejs" label="NodeJS" default>

```javascript
await driver.executeScript("smartui.takeFullPageScreenshot,{\"screenshotName\":\"<screenshot-name>\", \"smartScroll\":true }");
```
</TabItem>

<TabItem value="python" label="Python" default>

```python
driver.execute_script("smartui.takeFullPageScreenshot,{\"screenshotName\":\"<screenshot-name>\", \"smartScroll\":true }")
```
</TabItem>
<TabItem value="ruby" label="Ruby" default>

```ruby
driver.execute_script("smartui.takeFullPageScreenshot,{\"screenshotName\":\"<screenshot-name>\", \"smartScroll\":true }")
```
</TabItem>

<TabItem value="csharp" label="C#" default>

```csharp
driver.ExecuteScript("smartui.takeFullPageScreenshot,{\"screenshotName\":\"<screenshot-name>\", \"smartScroll\":true }");
```

</TabItem>
<TabItem value="java" label="Java" default>

```java
((JavascriptExecutor)driver).executeScript("smartui.takeFullPageScreenshot,{\"screenshotName\":\"<screenshot-name>\", \"smartScroll\":true }");
```

</TabItem>
</Tabs>

### For capturing the screenshot of a specific element

You can capture screenshots of targeted elements by leveraging various locator mechanisms such as XPath, CSS ID, class, and selectors. This precision-driven approach ensures accurate and specific visual regression testing for your web application.

Add the following **Webhook** to your test cases where you need to capture the screenshot of a particular element on your UI.

<Tabs className="docs__val" groupId="language">
<TabItem value="nodejs" label="NodeJS" default>

```javascript
let config = {
      screenshotName: '<Screenshot Name>',
      elementType: 'xpath'/'css_selector'/'id'/'class',  //Choose one from the following options - xpath, css_selector, id or class
      element: '<Required Element>'                      //Add your required element here
await driver.executeScript("smartui.takeScreenshot", config);
```
</TabItem>

<TabItem value="python" label="Python" default>

```python
config = {
  'screenshotName': '<Your Screenshot Name>',
   'elementType': 'xpath'/'css_selector'/'id'/'class', #Choose one from the following options - xpath, css_selector, id or class
    'element': '<Required Element>'                    #Add your required element here
}
driver.execute_script("smartui.takeScreenshot", config)
```
</TabItem>
<TabItem value="ruby" label="Ruby" default>

```ruby
config = {
  'screenshotName' => '<Your Screenshot Name>',
    'elementType'=> 'xpath'/'css_selector'/'id'/'class', #Choose one from the following options - xpath, css_selector, id or class
    'element'=> '<Required Element>'                     #Add your required element here
}
driver.execute_script("smartui.takeScreenshot", config)
```
</TabItem>

<TabItem value="csharp" label="C#" default>

```csharp
var config = new Dictionary<string, string> {
  {"screenshotName", "<Your Screenshot Name>"},
  {"elementType","xpath"/"css_selector"/"id"/"class"},       //Choose one from the following options - xpath, css_selector, id or class
    {"element", "<Required Element>"}                        //Add your required element here
};
driver.ExecuteScript("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value="java" label="Java" default>

```java
Map<String, Object> config = new HashMap<>();
config.put("screenshotName", "<Your Screenshot Name>");
config.put("elementType", "xpath"/"css_selector"/"id"/"class"); //Choose one from the following options - xpath, css_selector, id or class
config.put("element", "<Required Element>");                    //Add your required element here
((JavascriptExecutor)driver).executeScript("smartui.takeScreenshot", config);
```

</TabItem>
</Tabs>

## Step 4: View SmartUI Results

You have successfully integrated SmartUI with your Selenium tests. Visit your [SmartUI project](https://smartui.lambdatest.com/projects) to view builds and compare snapshots between different test runs.

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

## Fetching Screenshot Status and Results using WebHook


You can fetch the status of the screenshot captured and the results of the screenshot captured using the following webhook.
<Tabs className="docs__val" groupId="language">
<TabItem value="nodejs" label="NodeJS" default>

```javascript
driver.executeScript("smartui.fetchScreenshotStatus")
```

</TabItem>

<TabItem value="python" label="Python" default>

```python
driver.execute_script("smartui.fetchScreenshotStatus")
```

</TabItem>
<TabItem value="ruby" label="Ruby" default>

```ruby
driver.execute_script("smartui.fetchScreenshotStatus=<Your Screenshot Name>")
```

</TabItem>
<TabItem value="csharp" label="C#" default>

```csharp
driver.ExecuteScript("smartui.fetchScreenshotStatus");
```

</TabItem>
<TabItem value="java" label="Java" default>

```java
((JavascriptExecutor)driver).executeScript("smartui.fetchScreenshotStatus");
```

</TabItem>
</Tabs>

For fetching results specific to a screenshot, you can use the following webhook by adding the `Screenshot Name` to the WebHook.


<Tabs className="docs__val" groupId="language">
<TabItem value="nodejs" label="NodeJS" default>

```javascript
driver.executeScript("smartui.fetchScreenshotStatus=<Your Screenshot Name>")
```

</TabItem>

<TabItem value="python" label="Python" default>

```python
driver.execute_script("smartui.fetchScreenshotStatus=<Your Screenshot Name>")
```

</TabItem>
<TabItem value="ruby" label="Ruby" default>

```ruby
driver.execute_script("smartui.fetchScreenshotStatus=<Your Screenshot Name>")
```

</TabItem>
<TabItem value="csharp" label="C#" default>

```csharp
driver.ExecuteScript("smartui.fetchScreenshotStatus=<Your Screenshot Name>");
```

</TabItem>
<TabItem value="java" label="Java" default>

```java
((JavascriptExecutor)driver).executeScript("smartui.fetchScreenshotStatus=<Your Screenshot Name>");
```

</TabItem>
</Tabs>
The following webhook will return the status of the screenshot captured. The status can be one of the following:

```json
{
  screenshotsData: [
    {
      screenshotName: '<Your Screenshot Name>',
      screenshotURL: '<Link to the screenshot captured>',
      screenshotStatus: 'Changes found', // Status of the screenshot
      misMatchPercentage: 10.04, // Percentage of mismatch in the screenshot
      threshold: 100,            // Threshold set for the screenshot
      browserName: 'chrome',     // Browser used for capturing the screenshot
      resolution: '1920x1080'    // Resolution of the screenshot
    }

    ../Other Screenshots
  ],
  buildId: '<Your Build ID>',
  buildName: '<Your Build Name>',
  projectName: '<Name of the Project>'
}
```

The following are the description of the parameters: 

| Parameter            | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| `screenshotName`     | Name of the screenshot for which the result is to be fetched. |
| `screenshotURL`      | URL of the screenshot captured.                               |
| `screenshotStatus`   | Status of the screenshot captured.                            |
| `misMatchPercentage` | Percentage of mismatch in the screenshot captured.            |
| `threshold`          | Threshold set for the screenshot captured.                    |
| `browserName`        | Browser used for capturing the screenshot.                    |
| `resolution`         | Resolution of the screenshot captured.                        |
| `buildId`            | ID of the build in which the screenshot was captured.         |
| `buildName`          | Name of the build in which the screenshot was captured.       |
| `projectName`        | Name of the project in which the screenshot was captured.     |


:::caution Please Note

The webhook will return the result of the screenshot captured only if the screenshot is processed and the result is available.

This may take a few seconds to process the screenshot. Please ensure that you have added a delay before fetching the result of the screenshot.
:::
## Advanced Options for Screenshot Comparison


  **Build Configuration** - If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite, want to add a build as a baseline from your test suite or need to access more SmartUI Build Config Options, click [here](https://www.lambdatest.com/support/docs/smart-ui-build-options/).
  

  **Advanced Test Settings** - We offer multiple options for comparing the **Baseline** and the **Test Output** screenshots captured during your automation testing suites. To know more about our advanced P2P comparison options, click [here](https://www.lambdatest.com/support/docs/test-settings-options/).
  

  **Handling Dynamic Data** - In case if you have any dynamic elements that are not in the same position across test runs, you can ignore or select a specific area to be removed from the comparison. For accessing such HTML DOM Config and Options, click [here](/support/docs/html-dom-smartui-options/#configuration-for-selenium).


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
      <span className="breadcrumbs__link"> Selenium Visual Regression </span>
    </li>
  </ul>
</nav>