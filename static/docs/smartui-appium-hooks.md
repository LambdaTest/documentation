# Getting Started With Visual Regression Testing Using Appium On SmartUI Real Devices (NodeJS)

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Using the TestMu AI platform, perform regression testing in just one click and find Visual UI Regression bugs easily with the help of Smart Testing. This documentation will act as your step-by-step guide in performing successful Visual Regression tests.

## Prerequisites for SmartUI with App Automation

- Basic understanding of [appium](https://appium.io/docs/en/2.0/intro/) and remote [WebDriver](https://www.selenium.dev/documentation/webdriver/drivers/remote_webdriver/) is required.
- Go to [`TestMu AI SmartUI`](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) and login along with your credentials.
- Access your Hub for your appium **remote connection** instance at `@mobile-hub.lambdatest.com/wd/hub`.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from `Access Key` button on the top right of the dashboard.

Below are code examples for taking viewport screenshots using SmartUI with Appium across different programming languages and frameworks:

```bash
export LT_USERNAME="YOUR_USERNAME"
```

```bash
set LT_USERNAME="YOUR_USERNAME"
```

```powershell
$env:LT_USERNAME="YOUR_USERNAME"
```

The following steps will guide you in running your first Visual Regression test on TestMu AI platform -

## Step 1: Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your **builds** run on the project.
To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as Real Device  for executing your `Appium` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Step 2: Upload your application

Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"
`}

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - ```lt://APP123456789123456789``` and will be used in the next step.

## Step 3: Clone the sample project

Clone the TestMu AI’s :link: [LT-appium-nodejs](https://github.com/LambdaTest/LT-appium-nodejs) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-nodejs
cd LT-appium-nodejs
```

## Step 4: Set up your authentication

Make sure you have your TestMu AI credentials with you to run test automation scripts on TestMu AI. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/). Then, set TestMu AI `Username` and `Access Key` in environment variables with following commands.

  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \\
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \`
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## Step 5: Configure your test with Appium Desired Capabilities

**Explore more capabilities**

To view and generate more capabilities for your appium application test suite, please see the capability generator here: https://www.testmuai.com/capabilities-generator/

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Edit the required capabilities for your test suite as shown in the below sample code snippet:

```javascript title="Please replace your capabilities in your Remote Webdriver DesiredCapabilities configuration. This sample is for NodeJS"
let capabilities = {
deviceName: "iPhone 12", // Configure your Device for appium test (Mandatory)
platformName: "ios", // Configure your OS for appium test (Mandatory)
platformVersion: "14", // Configure your OS Version for appium test (Mandatory)
isRealMobile: true, // Configure if you want to test in a real-device (Mandatory)
app: "APP_URL", // Set your uploaded App URL for testing (Mandatory)
//highlight-next-line
visual: true, // Configure your Capture screenshot  for appium test (Mandatory)
name: "testing app session ", // Name of the test for appium (Recommended)
build: "Real Device App Build", // Name of the build for appium (Recommended)
//highlight-start
"smartUI.project": "<Your Project Name>", // Replace the name of project with the new project name (Mandatory)
"smartUI.build": "<Your Build Name>", // Replace the name of Build with the new Build name (Optional)
"smartUI.baseline": false, // Enable if you want to update to a new baseline build (Optional)
"smartUI.cropStatusBar" : true, // Optional (By default true)
"smartUI.cropFooter" : true, // Optional (By default false)
//highlight-end
};

// Connecting to the LambdaTest appium Cloud Grid with SmartUI
let gridUrl =
"https://" +
"<Your Username>" +
":" +
"<Your Access Key>" +
`@mobile-hub.lambdatest.com/wd/hub`;

// Here is your Remote WebDrive Connection
let driver = await new webdriver.Builder()
.usingServer(gridUrl)
.withCapabilities(capabilities)
.build();
```
**Important**

It is important that the `visual:true` is set your capabilities configuration for capturing the screenshots to SmartUI - Visual Regression tests and add into the build for comparison. If this capability is not added then the build status will be shown as `Error`.

- Webhook for taking the screenshot - This part of the code needs to be attached below the required segment of appium script of which we would like to take the screenshot to test on.

```javascript title="For Example if your are using with NodeJS"
driver.execute("smartui.takeScreenshot=<Name of your screenshot>");
```

Appium with SmartUI is currently only supports the viewport based screenshot comparisons.

- Execute your test suite as per the execution command depending on your framework or language.

```bash title="For Example if your are using with NodeJS"
npm i && node your_test_script.js
```

- You can check the executed builds over at [TestMu AI SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/).

## Smart Crop With SmartUI

The all-new **Real Device mobile notification status bar and navigation bar crop** feature in SmartUI allows you to take your visual regression testing workflows to the next level. With Smart Crop, you can crop the status bar and navigation bar or footer from screenshots, enabling them to focus solely on the core UI elements during visual comparisons.

By leveraging machine learning algorithms, it accurately detects and crops the status bar and navigation bar from screenshots. With precise image processing techniques, SmartUI precisely identifies the location of status bar elements. By excluding it from visual comparisons, the focus is solely on critical UI elements.

### Original Screenshot:

### Cropped Screenshot

## Region-Based Ignore/Select for Dynamic Content (Advanced)

To handle dynamic content like timestamps, user names, ads, or banners that cause false positives in visual comparisons, SmartUI supports region-based ignore and select functionality using **XPath locators**.

You can either:
- **Ignore specific regions** during comparison using `ignoreBoxes`
- **Compare only specific regions** using `selectBoxes`

This is especially useful for enterprise applications where certain UI elements change dynamically between test runs.

### Usage in Node.js (Primary Example)

```javascript title="Example: Ignoring Dynamic Elements in Node.js"
let config = {
screenshotName: 'Home Screen',
ignoreBoxes: JSON.stringify({
xpath: [
"//*[@text='Backpack']",
"//*[@text='Onesie']",
"//*[@text='PRODUCTS']",
"//*[@text='Terms of Service | Privacy Policy']"
]
})
};

await driver.execute("smartui.takeScreenshot", config);
```

```javascript title="Example: Selecting Only Critical Regions in Node.js"
let config = {
screenshotName: 'Checkout Form',
selectBoxes: JSON.stringify({
xpath: [
"//*[@resource-id='checkout-form']",
"//*[@resource-id='total-amount']"
]
})
};

await driver.execute("smartui.takeScreenshot", config);
```

### Cross-Framework Examples

```javascript
let config = {
screenshotName: '<Your Screenshot Name>',
ignoreBoxes: JSON.stringify({
xpath: ["//*[@text='Dynamic Ad']", "//*[@id='timestamp']"]
})
};
await driver.execute("smartui.takeScreenshot", config);
```

```python
config = {
'screenshotName': '<Your Screenshot Name>',
'ignoreBoxes': '{"xpath": ["//*[@text=\'Dynamic Ad\']", "//*[@id=\'timestamp\']"]}'
}
driver.execute_script("smartui.takeScreenshot", config)
```

```java
Map<String, Object> configIgnore = new HashMap<>();
configIgnore.put("screenshotName", "Screenshot");

Map<String, Object> ignoreBoxes = new HashMap<>();
ignoreBoxes.put("xpath", new String[]{
"//*[@name='Toast']"
});

configIgnore.put("ignoreBoxes", ignoreBoxes);
((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot", configIgnore);

```

```csharp
var config = new Dictionary<string, object> {
{"screenshotName", "<Your Screenshot Name>"},
{"ignoreBoxes", "{\"xpath\": [\"//*[@text='Dynamic Ad']\", \"//*[@id='timestamp']\"]}"}
};
driver.ExecuteScript("smartui.takeScreenshot", config);
```

```ruby
config = {
'screenshotName' => '<Your Screenshot Name>',
'ignoreBoxes' => '{"xpath": ["//*[@text=\'Dynamic Ad\']", "//*[@id=\'timestamp\']"]}'
}
driver.execute_script("smartui.takeScreenshot", config)
```

### Configuration Keys

| Key | Type | Description | Required |
|-----|------|-------------|----------|
| `ignoreBoxes` | JSON String | Defines regions to ignore during visual comparison. Accepts XPath locators. | No |
| `selectBoxes` | JSON String | Defines regions to include in visual comparison. Accepts XPath locators. | No |

**Best Practices**
- Use `ignoreBoxes` for elements that change frequently (e.g., ads, timestamps, user avatars).
- Use `selectBoxes` when you want to focus comparison only on critical UI sections.
- Avoid using both `ignoreBoxes` and `selectBoxes` in the same config; they are mutually exclusive.
- Ensure XPath expressions are unique and stable across test runs.
- Test your XPath locators using Appium Inspector or similar tools before integrating.

## Running Tests on Other Languages and Frameworks

In this module we discussed about running smart visual tests on **NodeJS**, here we will know more about running those tests for any language or framework with appium.

In a similar way, we can run visual tests for other languages and frameworks using their corresponding script executing commands. To understand better, we provided the commands for some of the popular languages and frameworks:

### For taking viewport screenshot

This part of the code needs to be attached below the required segment of selenium script of which we would like to take the screenshot to test on.

```javascript
driver.execute("smartui.takeScreenshot=<Name of your screenshot>");
```

```python
driver.execute_script("smartui.takeScreenshot=<Your Screenshot Name>")
```

```ruby
driver.execute("smartui.takeScreenshot=<Your Screenshot Name>")
```

```csharp
driver.Execute("smartui.takeScreenshot=<Your Screenshot Name>");
```

```java
((JavascriptExecutor)driver).executeScript("smartui.takeScreenshot=<Your Screenshot Name>");
```

### For capturing full page screenshot in Native Apps

You can capture the full page screenshot for apps which have a scrolling functionality on their application user interface for your **Appium** functional testing.

Add the following **Webhook** to your test cases where we need to capture the screenshot of your application.

```javascript
let config = {
screenshotName: '<Name of your screenshot>',
fullPage: true,
pageCount: 15   // Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
};
await driver.execute("smartui.takeScreenshot", config);
```

```python
config = {
'screenshotName': '<Your Screenshot Name>',
'fullPage': True,
'pageCount': 15 # Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
}
driver.execute_script("smartui.takeScreenshot", config)
```

```ruby
config = {
'screenshotName' => '<Your Screenshot Name>',
'fullPage': true,
'pageCount': 15 # Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
}
driver.execute("smartui.takeScreenshot", config)
```

```csharp
var config = new Dictionary<string, string> {
{"screenshotName", "<Your Screenshot Name>"},
{"fullPage", true},
{"pageCount", 15} // Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
};
driver.Execute("smartui.takeScreenshot", config);
```

```java
Map<String, Object> config = new HashMap<>();
config.put("screenshotName", "<Your Screenshot Name>");
config.put("fullPage", true);
config.put("pageCount", 15); // Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
((JavascriptExecutor)driver).executeScript("smartui.takeScreenshot", config);
```

Please note that this webhook is only applicable to native app screenshots and has known limitations. You can use an optimized value of page count (between 1 and 20) to get the best results of your full page screenshots, according to your use case.

## Best Practices

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include screen/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**
```javascript
await driver.execute("smartui.takeScreenshot=HomeScreen-Header");
await driver.execute("smartui.takeScreenshot=CheckoutScreen-PaymentForm");
```

**Wait for Screen Load**

- Always wait for screens to fully load before taking screenshots
- Use Appium's wait methods for dynamic content
- Consider device-specific loading times

**Example:**
```javascript
const { until, By } = require('selenium-webdriver');
await driver.wait(until.elementLocated(By.id('main-content')), 10000);
await driver.execute("smartui.takeScreenshot=Screen Loaded");
```

**Handle Dynamic Content**

- Use `ignoreBoxes` for elements that change between runs (ads, timestamps, user avatars)
- Use `selectBoxes` when you only need to compare specific regions
- Test XPath locators using Appium Inspector before integrating

**Smart Crop Configuration**

- Enable `cropStatusBar` to focus on core UI elements
- Enable `cropNavigationBar` for Android devices
- Test cropped screenshots to ensure important content isn't removed

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests on consistent device configurations

## Troubleshooting

**Issue: Screenshots Not Captured**

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

4. Check network connectivity to LambdaTest

**Issue: "Project Not Found" Error**

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

**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**: Screenshots captured but show blank screens or incorrect content

**Possible Causes**:
- Screen not fully loaded
- App state issues
- Timing issues
- Device-specific rendering

**Solutions**:
1. Add explicit waits before screenshots:
```javascript
await driver.wait(until.elementLocated(By.id('content')), 10000);
```

2. Wait for specific elements to be visible:
```javascript
await driver.wait(until.elementIsVisible(By.id('main-content')), 10000);
```

3. Increase wait time for slow-loading screens

4. Verify app is in correct state before screenshot

**Issue: Full Page Screenshot Issues**

**Symptoms**: Full page screenshots incomplete or incorrect

**Possible Causes**:
- `pageCount` value too low
- App doesn't support scrolling
- Content not loading properly

**Solutions**:
1. Increase `pageCount` value (between 1-20):
```javascript
let config = {
screenshotName: 'Full Page',
fullPage: true,
pageCount: 15  // Increase if needed
};
```

2. Verify app supports scrolling functionality

3. Test with different `pageCount` values to find optimal setting

**Issue: ignoreBoxes/selectBoxes Not Working**

**Symptoms**: Dynamic content still causing false positives

**Possible Causes**:
- XPath locators incorrect
- Elements not found at screenshot time
- JSON string formatting issues

**Solutions**:
1. Verify XPath locators using Appium Inspector
2. Ensure elements exist at screenshot time
3. Check JSON string formatting:
```javascript
ignoreBoxes: JSON.stringify({
xpath: ["//*[@text='Dynamic Ad']"]
})
```

4. Test XPath locators in isolation before using in config

**Getting Help**

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [TestMu AI Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [Appium Documentation](/support/docs/appium-nodejs/)

For additional information about appium framework please explore the documentation [here](/support/docs/appium-nodejs/)
