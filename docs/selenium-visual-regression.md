---
id: selenium-visual-regression
title: Getting Started With Visual Regression Testing Using Selenium On SmartUI
sidebar_label: Selenium
description: Master Selenium Visual Regression testing with TestMu AI. Detect visual deviations early in your web applications to ensure a seamless user experience.
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

url: https://www.testmuai.com/support/docs/selenium-visual-regression/
site_name: TestMu AI
slug: selenium-visual-regression/
canonical: https://www.testmuai.com/support/docs/selenium-visual-regression/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';

---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

Using the <BrandName /> platform, perform regression testing in just one click and find Visual UI Regression bugs easily with the help of Smart Testing. This documentation will act as your step-by-step guide in performing successful Visual Regression tests.

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

The following steps will guide you in running your first Visual Regression test on <BrandName /> platform -

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

2. Set up the <BrandName /> credentials by following the instructions mentioned in the `README.md` file.
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


  **Build Configuration** - If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite, want to add a build as a baseline from your test suite or need to access more SmartUI Build Config Options, click [here](/support/docs/smart-ui-build-options/).
  

  **Advanced Test Settings** - We offer multiple options for comparing the **Baseline** and the **Test Output** screenshots captured during your automation testing suites. To know more about our advanced P2P comparison options, click [here](/support/docs/test-settings-options/).
  

  **Handling Dynamic Data** - In case if you have any dynamic elements that are not in the same position across test runs, you can ignore or select a specific area to be removed from the comparison. For accessing such HTML DOM Config and Options, see [Handling Dynamic Data with DOM Configuration](/support/docs/html-dom-smartui-options).

## Best Practices

<Tabs className="docs__val" groupId="best-practices">
<TabItem value="capability-configuration" label="Capability Configuration" default>

### Capability Configuration

- Always set `visual: true` in your capabilities to enable SmartUI
- Use consistent project and build names across test runs
- Set meaningful test names for better organization

**Example:**
```javascript
let capabilities = {
  visual: true,
  name: "Homepage Visual Test",
  build: "Release 1.0",
  "smartUI.project": "MyProject",
  "smartUI.build": "Build-1.0"
};
```

</TabItem>
<TabItem value="screenshot-timing" label="Screenshot Timing">

### Screenshot Timing

- Wait for page elements to load before capturing screenshots
- Use explicit waits for dynamic content
- Consider page load time when setting up tests

</TabItem>
<TabItem value="screenshot-naming" label="Screenshot Naming">

### Screenshot Naming

- Use descriptive, consistent names
- Include context (page, component, state) in names
- Avoid special characters

</TabItem>
<TabItem value="baseline-management" label="Baseline Management">

### Baseline Management

- Establish baselines from stable builds
- Review and approve baselines before using
- Update baselines when intentional changes are made

</TabItem>
<TabItem value="viewport-selection-1" label="Viewport Selection">

### Viewport Selection

- Test on viewports that match your user base
- Include mobile, tablet, and desktop viewports
- Consider both portrait and landscape orientations

</TabItem>
<TabItem value="viewport-selection-2" label="Viewport Selection">

### Viewport Selection

- Test on viewports that match your user base
- Include mobile, tablet, and desktop viewports
- Consider both portrait and landscape orientations

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className="docs__val" groupId="troubleshooting">
<TabItem value="screenshots-not-captured" label="Screenshots Not Captured" default>

### Issue: Screenshots Not Captured

**Symptoms**: Tests run but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- `visual: true` not set in capabilities
- Incorrect project name
- Network connectivity issues
- Credentials not set correctly

**Solutions**:
1. Verify `visual: true` is set in capabilities:
   ```javascript
   let capabilities = {
     visual: true, // Must be set
     // ... other capabilities
   };
   ```

2. Check project name matches exactly (case-sensitive):
   ```javascript
   "smartUI.project": "ExactProjectName"
   ```

3. Verify credentials are set:
   ```bash
   echo $LT_USERNAME
   echo $LT_ACCESS_KEY
   ```

4. Check network connectivity to <BrandName />

</TabItem>
<TabItem value="project-not-found-error" label="Project Not Found Error">

### Issue: "Project Not Found" Error

**Symptoms**: Error indicating SmartUI project cannot be found

**Possible Causes**:
- Project name typo or mismatch
- Project deleted
- Wrong account credentials

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project name directly from dashboard
3. Check credentials match the account with the project
4. Ensure project name is in capabilities, not just in dashboard

</TabItem>
<TabItem value="screenshots-show-blank-pages" label="Screenshots Show Blank Pages">

### Issue: Screenshots Show Blank Pages

**Symptoms**: Screenshots captured but show blank or incomplete content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Timing issues
- Viewport issues

**Solutions**:
1. Add explicit waits before screenshot:
   ```javascript
   await driver.wait(until.elementLocated(By.id('content')), 10000);
   ```

2. Wait for specific elements to be visible:
   ```javascript
   await driver.wait(until.elementIsVisible(By.css('.main-content')), 10000);
   ```

3. Increase wait time for slow-loading pages

4. Check viewport size matches expected dimensions

</TabItem>
<TabItem value="build-name-conflicts" label="Build Name Conflicts">

### Issue: Build Name Conflicts

**Symptoms**: Screenshots appear in wrong build or build name issues

**Possible Causes**:
- Build name not set consistently
- Special characters in build name
- Build name conflicts

**Solutions**:
1. Set build name in capabilities:
   ```javascript
   "smartUI.build": "ConsistentBuildName"
   ```

2. Avoid special characters in build names

3. Use consistent naming convention across team

</TabItem>
<TabItem value="webhook-not-receiving-results" label="Webhook Not Receiving Results">

### Issue: Webhook Not Receiving Results

**Symptoms**: Webhook configured but not receiving screenshot results

**Possible Causes**:
- Webhook URL incorrect
- Screenshot not processed yet
- Network/firewall blocking webhook
- Delay too short

**Solutions**:
1. Verify webhook URL is correct and accessible

2. Add sufficient delay before fetching results:
   ```javascript
   await new Promise(resolve => setTimeout(resolve, 10000)); // Wait 10 seconds
   ```

3. Check webhook endpoint is publicly accessible

4. Verify webhook is receiving requests (check server logs)

</TabItem>
<TabItem value="mismatch-percentage-unexpected" label="Mismatch Percentage Unexpected">

### Issue: Mismatch Percentage Unexpected

**Symptoms**: Mismatch percentage higher or lower than expected

**Possible Causes**:
- Threshold settings
- Dynamic content not ignored
- Rendering differences
- Baseline issues

**Solutions**:
1. Review threshold settings in project settings

2. Use `ignoreDOM` for dynamic content:
   ```javascript
   "smartUI.options": {
     "ignoreDOM": {
       "id": ["timestamp", "user-id"]
     }
   }
   ```

3. Check baseline is correct and up-to-date

4. Review comparison settings in project

### Getting Help

If you encounter issues not covered here:

- Review [SmartUI Build Options](/support/docs/smart-ui-build-options) documentation
- Check [Advanced Test Settings](/support/docs/test-settings-options/) for comparison options
- Visit [<BrandName /> Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [SmartUI Build Options](/support/docs/smart-ui-build-options)
- [Advanced Test Settings](/support/docs/test-settings-options/)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Project Settings](/support/docs/smartui-project-settings)


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
      <span className="breadcrumbs__link"> Selenium Visual Regression </span>
    </li>
  </ul>
</nav>
