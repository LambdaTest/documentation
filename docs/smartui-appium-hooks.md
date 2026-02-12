---
id: smartui-appium-hooks
title: Getting Started With Visual Regression Testing Using Appium On SmartUI Real Devices (NodeJS)
sidebar_label: Appium Hooks
description: Explore our Appium Visual Regression support documentation for step-by-step guidance! Conduct visual testing, manage apps, and ensure your mobile apps are flawless before launch.
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

url: https://www.testmuai.com/support/docs/smartui-appium-hooks/
site_name: TestMu AI
slug: smartui-appium-hooks/
canonical: https://www.testmuai.com/support/docs/smartui-appium-hooks/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import CodeBlock from '@theme/CodeBlock';
import NewTag from '../src/component/newTag';
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
          "name": "SmartUI-Hooks",
          "item": `${BRAND_URL}/support/docs/smartui-appium-hooks/`
        }]
      })
    }}
></script>

Using the <BrandName /> platform, perform regression testing in just one click and find Visual UI Regression bugs easily with the help of Smart Testing. This documentation will act as your step-by-step guide in performing successful Visual Regression tests.

<div className='storylane-iframe'>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className='sl-embed'>
    <iframe loading="lazy" className='sl-demo' src="https://app.storylane.io/demo/pmuhutnb9ixb?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

## Prerequisites for SmartUI with App Automation

- Basic understanding of [appium](https://appium.io/docs/en/2.0/intro/) and remote [WebDriver](https://www.selenium.dev/documentation/webdriver/drivers/remote_webdriver/) is required.
- Go to [`TestMu AI SmartUI`](https://smartui.lambdatest.com/) and login along with your credentials.
- Access your Hub for your appium **remote connection** instance at `@mobile-hub.lambdatest.com/wd/hub`.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from `Access Key` button on the top right of the dashboard.

Below are code examples for taking viewport screenshots using SmartUI with Appium across different programming languages and frameworks:

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

```bash
set LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

```powershell
$env:LT_USERNAME="YOUR_USERNAME"
```

</TabItem>
</Tabs>

The following steps will guide you in running your first Visual Regression test on <BrandName /> platform -

## Step 1: Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your **builds** run on the project.
To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>Real Device </b> for executing your `Appium` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

<!-- <img loading="lazy" src={require('../assets/images/uploads/smart-ui-1.webp').default} alt="cmd" width="768" height="373" className='doc_img'/> -->

## Step 2: Upload your application

Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

<Tabs className='docs__val' groupId='language'>
<TabItem value='App File' label='App File' default>

 <div className='lambdatest__codeblock'>
<CodeBlock className='language-bash'>
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""
`}
</CodeBlock>
</div>

</TabItem>
<TabItem value='App URL' label='App URL' default>

<div className='lambdatest__codeblock'>
<CodeBlock className='language-bash'>
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"
`}
</CodeBlock>
</div>

</TabItem>
</Tabs>

:::tip

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on <BrandName /> by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - ```lt://APP123456789123456789``` and will be used in the next step.

:::

## Step 3: Clone the sample project

Clone the <BrandName />’s :link: [LT-appium-nodejs](https://github.com/LambdaTest/LT-appium-nodejs) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-nodejs
cd LT-appium-nodejs
```

## Step 4: Set up your authentication

Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName />. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [Automation Dashboard](https://appautomation.lambdatest.com/). Then, set <BrandName /> `Username` and `Access Key` in environment variables with following commands.

<Tabs className='docs__val'>

<TabItem value='bash' label='Linux / MacOS' default>
  <div className='lambdatest__codeblock'>
  <CodeBlock className='language-bash'>
  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \\
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>

<TabItem value='powershell' label='Windows' default>

  <div className='lambdatest__codeblock'>
  <CodeBlock className='language-powershell'>
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \`
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 5: Configure your test with Appium Desired Capabilities

:::tip Explore more capabilities

To view and generate more capabilities for your appium application test suite, please see the capability generator here: https://www.lambdatest.com/capabilities-generator/

:::

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
:::caution Important

It is important that the `visual:true` is set your capabilities configuration for capturing the screenshots to SmartUI - Visual Regression tests and add into the build for comparison. If this capability is not added then the build status will be shown as `Error`.

:::

- Webhook for taking the screenshot - This part of the code needs to be attached below the required segment of appium script of which we would like to take the screenshot to test on.

```javascript title="For Example if your are using with NodeJS"
driver.execute("smartui.takeScreenshot=<Name of your screenshot>");
```

:::caution

Appium with SmartUI is currently only supports the viewport based screenshot comparisons.

:::

- Execute your test suite as per the execution command depending on your framework or language.

```bash title="For Example if your are using with NodeJS"
npm i && node your_test_script.js
```

- You can check the executed builds over at [TestMu AI SmartUI](https://smartui.lambdatest.com/).

## Smart Crop With SmartUI

The all-new **Real Device mobile notification status bar and navigation bar crop** feature in SmartUI allows you to take your visual regression testing workflows to the next level. With Smart Crop, you can crop the status bar and navigation bar or footer from screenshots, enabling them to focus solely on the core UI elements during visual comparisons.

By leveraging machine learning algorithms, it accurately detects and crops the status bar and navigation bar from screenshots. With precise image processing techniques, SmartUI precisely identifies the location of status bar elements. By excluding it from visual comparisons, the focus is solely on critical UI elements.

### Original Screenshot:

<img loading="lazy" src={require('../assets/images/smart-visual-testing/screenshot.webp').default} alt="Profile" width="1360" height="603" className='doc_img'/>

### Cropped Screenshot

<img loading="lazy" src={require('../assets/images/smart-visual-testing/cropped_ss.jpg').default} alt="Profile" width="1360" height="603" className='doc_img'/>

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

<Tabs className='docs__val' groupId='language'>
<TabItem value='nodejs' label='Node.js' default>

```javascript
let config = {
  screenshotName: '<Your Screenshot Name>',
  ignoreBoxes: JSON.stringify({
    xpath: ["//*[@text='Dynamic Ad']", "//*[@id='timestamp']"]
  })
};
await driver.execute("smartui.takeScreenshot", config);
```

</TabItem>

<TabItem value='python' label='Python'>

```python
config = {
    'screenshotName': '<Your Screenshot Name>',
    'ignoreBoxes': '{"xpath": ["//*[@text=\'Dynamic Ad\']", "//*[@id=\'timestamp\']"]}'
}
driver.execute_script("smartui.takeScreenshot", config)
```

</TabItem>

<TabItem value='java' label='Java'>

```java
Map<String, Object> configIgnore = new HashMap<>();
configIgnore.put("screenshotName", "Screenshot");

Map<String, Object> ignoreBoxes = new HashMap<>();
ignoreBoxes.put("xpath", new String[]{
    "//*[@name='Toast']"
});

configIgnore.put("ignoreBoxes", ignoreBoxes);
((JavaScriptExecutor) driver).executeScript("smartui.takeScreenshot", configIgnore);

```
</TabItem>

<TabItem value='csharp' label='C#'>

```csharp
var config = new Dictionary<string, object> {
  {"screenshotName", "<Your Screenshot Name>"},
  {"ignoreBoxes", "{\"xpath\": [\"//*[@text='Dynamic Ad']\", \"//*[@id='timestamp']\"]}"}
};
driver.ExecuteScript("smartui.takeScreenshot", config);
```

</TabItem>

<TabItem value='ruby' label='Ruby'>

```ruby
config = {
  'screenshotName' => '<Your Screenshot Name>',
  'ignoreBoxes' => '{"xpath": ["//*[@text=\'Dynamic Ad\']", "//*[@id=\'timestamp\']"]}'
}
driver.execute_script("smartui.takeScreenshot", config)
```

</TabItem>
</Tabs>

### Configuration Keys

| Key | Type | Description | Required |
|-----|------|-------------|----------|
| `ignoreBoxes` | JSON String | Defines regions to ignore during visual comparison. Accepts XPath locators. | No |
| `selectBoxes` | JSON String | Defines regions to include in visual comparison. Accepts XPath locators. | No |

:::note Best Practices
- Use `ignoreBoxes` for elements that change frequently (e.g., ads, timestamps, user avatars).
- Use `selectBoxes` when you want to focus comparison only on critical UI sections.
- Avoid using both `ignoreBoxes` and `selectBoxes` in the same config — they are mutually exclusive.
- Ensure XPath expressions are unique and stable across test runs.
- Test your XPath locators using Appium Inspector or similar tools before integrating.
:::

## Running Tests on Other Languages and Frameworks

---

In this module we discussed about running smart visual tests on **NodeJS**, here we will know more about running those tests for any language or framework with appium.

In a similar way, we can run visual tests for other languages and frameworks using their corresponding script executing commands. To understand better, we provided the commands for some of the popular languages and frameworks:

### For taking viewport screenshot

This part of the code needs to be attached below the required segment of selenium script of which we would like to take the screenshot to test on.

<Tabs className='docs__val' groupId='language'>
<TabItem value='nodejs-1' label='NodeJS' default>

```javascript
driver.execute("smartui.takeScreenshot=<Name of your screenshot>");
```

</TabItem><TabItem value='python-1' label='Python' default>

```python
driver.execute("smartui.takeScreenshot=<Your Screenshot Name>")
```

</TabItem>
<TabItem value='ruby-1' label='Ruby' default>

```ruby
driver.execute("smartui.takeScreenshot=<Your Screenshot Name>")
```

</TabItem>
<TabItem value="csharp-1" label='C#'>

```csharp
driver.Execute("smartui.takeScreenshot=<Your Screenshot Name>");
```

</TabItem>
<TabItem value='java-1' label='Java' default>

```java
((JavaScriptExecutor)driver).executeScript("smartui.takeScreenshot=<Your Screenshot Name>");
```

</TabItem>
</Tabs>

### For capturing full page screenshot in Native Apps <NewTag value="BETA" bgColor="#ffec02" color="#000" />

You can capture the full page screenshot for apps which have a scrolling functionality on their application user interface for your **Appium** functional testing.

Add the following **Webhook** to your test cases where we need to capture the screenshot of your application.

<Tabs className='docs__val' groupId='language'>
<TabItem value='nodejs-2' label='NodeJS' default>

```javascript
let config = {
  screenshotName: '<Name of your screenshot>',
  fullPage: true,
  pageCount: 15   // Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
};
await driver.execute("smartui.takeScreenshot", config);
```
</TabItem>
<TabItem value="python-2" label='Python' default>

```python
config = {
  'screenshotName': '<Your Screenshot Name>',
  'fullPage': True,
  'pageCount': 15 # Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
}
driver.execute("smartui.takeScreenshot", config)
<TabItem value='ruby-2' label='Ruby' default>

```ruby
config = {
  'screenshotName' => '<Your Screenshot Name>',
  'fullPage': true,
  'pageCount': 15 # Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
}
driver.execute("smartui.takeScreenshot", config)
```

</TabItem>
<TabItem value='csharp-2' label='C#' default>

```csharp
var config = new Dictionary<string, string> {
  {"screenshotName", "<Your Screenshot Name>"},
  {"fullPage", true},
  {"pageCount", 15} // Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
};
driver.Execute("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value='java-2' label='Java' default>

```java
Map<String, Object> config = new HashMap<>();
config.put("screenshotName", "<Your Screenshot Name>");
config.put("fullPage", true);
config.put("pageCount", 15); // Enter the number of pages for the Full Page screenshot (Minimum 1, Maximum 20)
((JavaScriptExecutor)driver).executeScript("smartui.takeScreenshot", config);
```

</TabItem>
</Tabs>

:::note
Please note that this webhook is only applicable to <b>native app screenshots</b> and has known limitations. You can use an optimized value of page count (between 1 and 20) to get the best results of your full page screenshots, according to your use case.
:::

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='screenshot-naming' label='Screenshot Naming' default>

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

</TabItem>
<TabItem value='wait-for-screen-load' label='Wait for Screen Load'>

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

</TabItem>
<TabItem value='handle-dynamic-content' label='Handle Dynamic Content'>

**Handle Dynamic Content**

- Use `ignoreBoxes` for elements that change between runs (ads, timestamps, user avatars)
- Use `selectBoxes` when you only need to compare specific regions
- Test XPath locators using Appium Inspector before integrating

</TabItem>
<TabItem value='smart-crop-configuration' label='Smart Crop Configuration'>

**Smart Crop Configuration**

- Enable `cropStatusBar` to focus on core UI elements
- Enable `cropNavigationBar` for Android devices
- Test cropped screenshots to ensure important content isn't removed

</TabItem>
<TabItem value='test-organization' label='Test Organization'>

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests on consistent device configurations

</TabItem>
<TabItem value='test-organization-1' label='Test Organization'>

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests on consistent device configurations

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='screenshots-not-captured' label='Screenshots Not Captured' default>

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

</TabItem>
<TabItem value='project-not-found-error' label='Project Not Found Error'>

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

</TabItem>
<TabItem value='screenshots-show-blank-or-incorrect-content' label='Screenshots Show Blank or Incorrect Content'>

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

</TabItem>
<TabItem value='full-page-screenshot-issues' label='Full Page Screenshot Issues'>

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

</TabItem>
<TabItem value='ignoreboxes-selectboxes-not-working' label='ignoreBoxes/selectBoxes Not Working'>

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
- Visit [TestMu AI Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [Appium Documentation](/support/docs/appium-nodejs/)

For additional information about appium framework please explore the documentation [here](/support/docs/appium-nodejs/)

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'> SmartUI Appium Hooks </span>
    </li>
  </ul>
</nav>
