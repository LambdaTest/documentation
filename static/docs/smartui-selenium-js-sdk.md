# SmartUI Selenium SDK

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The SmartUI Selenium SDK is a visual regression testing tool that integrates into your existing Selenium suite to capture, compare, and analyze screenshots across a multitude of browsers and resolutions. It is available for JavaScript, Java, C#, Python, and Ruby, letting you add visual coverage to your automation scripts with a single snapshot function.

## Prerequisites

- Basic understanding of Command Line Interface and Selenium is required.
- Login to [TestMu AI SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on TestMu AI platform using SmartUI Selenium SDK integration.

## Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as CLI for executing your `SDK` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Configure your Project Token

Setup your project token shown in the **SmartUI** app after creating your project.

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

## Create and Configure SmartUI Config

You can now configure your project configurations on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
npx smartui config:create .smartui.json
```

Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

```json title="/smartui-sdk-project/.smartui.json"
{
"web": {
"browsers": [
"chrome",
"firefox",
"safari",
"edge"
],
"viewports": [
[
1920
],
[
1366
],
[
1028
]
] // Full Page screenshots are captured by default for web viewports
},
"mobile": {
"devices": [
"iPhone 14",  //iPhone 14 viewport
"Galaxy S24"  //Galaxy S24 viewport
],
"fullPage": true, //Full Page is true by default for mobile viewports
"orientation": "portrait" //Change to "landscape" for landscape snapshot
},
"waitForTimeout": 1000, //Optional (Should only be used in case lazy-loading/async components are present)
"waitForPageRender": 50000, //Optional (Should only be used in case of websites which take more than 30s to load)
"enableJavaScript": false, //Enable javascript for all the screenshots of the project
"allowedHostnames": [] //Additional hostnames to capture assets from
}
```
**Advanced options in SmartUI configuration**
- For capturing fullpage or viewport screenshots, please refer to this [documentation](/docs/smartui-sdk-config-options/#12-viewports)
- For the list of available mobile viewports, please refer to this [documentation](/docs/smartui-sdk-config-options/#list-of-supported-device-viewports)
- For more information about SmartUI config global options, please refer to this [documentation](/docs/smartui-sdk-config-options/#3-global-options-optional).

## Steps to run your first test

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Select your language below and follow the steps to set up dependencies, add the snapshot function, and execute your tests on SmartUI Cloud.

### Step 1: Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `sdk.js` file present in the `sdk` folder.

```bash
git clone https://github.com/LambdaTest/smartui-node-sample
cd smartui-node-sample/sdk
```

### Step 2: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Selenium SDK` in your **Frontend** project.

```bash
npm install @lambdatest/smartui-cli @lambdatest/selenium-driver selenium-webdriver
```

If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.

### Step 3: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:

```js
const { Builder, By, Key, until } = require('selenium-webdriver');
const { smartuiSnapshot } = require('@lambdatest/selenium-driver');

(async function example() {
let driver = await new Builder().forBrowser("chrome").build();

try {
await driver.get("https://www.lambdatest.com");
await smartuiSnapshot(driver, "LambdaTest");
await driver.get("https://www.pinterest.com/pin/112801165652823604/");
await smartuiSnapshot(driver, "NYC");
} finally {
await driver.quit();
}
})();
```

### Step 4: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui exec node sdkCloud.js --config .smartui.json
```

You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.

### Step 1: Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use `SmartUISDKCloud.java` file located in the `src/test/java/com/lambdatest/sdk` directory.

```bash
git clone https://github.com/LambdaTest/smartui-java-testng-sample
```

### Step 2: Update the Dependencies

- Add the following dependencies in your `pom.xml` file

```xml
<dependency>
<groupId>io.github.lambdatest</groupId>
<artifactId>lambdatest-java-sdk</artifactId>
<version>1.0.23</version>
</dependency>
```

You can check the latest version of [lambdatest-java-sdk]( https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-java-sdk) and update the latest version accordingly.

### Step 3: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Selenium SDK` in your **Frontend** project.

```bash
npm install @lambdatest/smartui-cli
```

If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.

```bash
mvn clean compile
```

### Step 4: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:

```java
//Importing the lambdatest-java SDK

//Rest of your code here

@Test
public void basicTest() throws Exception {
String spanText;
System.out.println("Loading URL");

driver.get("<Required URL>");

SmartUISnapshot.smartuiSnapshot(driver, "<Screenshot Name>");

Thread.sleep(5000);
Thread.sleep(1000);
System.out.println("TestFinished");

}

```

### Step 5: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui --config .smartui.json exec -- mvn test -D suite="sdk-cloud.xml"
```

You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.

### Step 1: Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use `LTCloudTest.cs` file located in the `LambdaTest.Selenium.Driver.Test` folder.

```bash
git clone https://github.com/LambdaTest/smartui-csharp-sample
cd smartui-csharp-sample/LambdaTest.Selenium.Driver.Test
```

### Step 2: Update the Dependencies

- Add the following dependencies in your `.csproj` file

```cs
<ItemGroup>
<PackageReference Include="LambdaTest.Selenium.Driver" Version="1.0.4" />
</ItemGroup>
```

You can check the latest version of [TestMu AI.Selenium.Driver]( https://www.nuget.org/packages/LambdaTest.Selenium.Driver) and update the latest version accordingly.

### Step 3: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Selenium SDK` in your **Frontend** project.

```bash
npm install @lambdatest/smartui-cli
```

If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.

```bash
dotnet restore
```

### Step 4: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:

```csharp
using System;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using LambdaTest.Selenium.Driver;

namespace LambdaTest.Selenium.TestProject
{
public static class LocalTest
{
using IWebDriver driver = new ChromeDriver();
try
{
Console.WriteLine("Driver started");
driver.Navigate().GoToUrl("Required URL");
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name"); //utilize this function to take the dom snapshot of your test
}
catch (Exception ex)
{
Console.WriteLine(ex);
}
finally
{
driver.Quit();
}
}
}
```

#### Additional Functionality: Using `sync` Option in SmartUI C# SDK

You can enable synchronous snapshot status response by setting the `sync` option to `true` in the options dictionary. This allows you to wait for the snapshot status and receive the result directly in your test script.

- The `sync` functionality is supported only in TestMu AI.Selenium.Driver version **1.0.4 and above**.

**Set the sync value in options:**

```csharp
var optionsForSync = new Dictionary<string, object>
{
{ "sync", true },
{ "timeout", 100 } // timeout in seconds (30-900, default 600)
};

Console.WriteLine("Driver started");
driver.Navigate().GoToUrl("https://www.testmuai.com");
var result = await SmartUISnapshot.CaptureSnapshot(driver, "NYC", optionsForSync);
Console.WriteLine(result);
```

**Notes:**
- The default value of `sync` is `false` if not specified.
- The `timeout` option defines how long to wait for the snapshot status response (in seconds). Allowed range: 30-900, default is 600.
- When `sync` is `true`, the `result` variable will hold the value of the snapshot status response.

**Sample response:**
```json
{
"snapshotName": "Sync-True",
"snapshotUUID": "95226130-72b6-4d45-ad6d-4ad8ddsa1",
"buildId": "8e0c078d-e85a-41ae-a8d5-4a0dsdf8bbd5",
"snapshotStatus": "failed",
"startedProcessingAt": "2025-08-26 09:58:21",
"finishedProcessingAt": "2025-08-26 10:03:12",
"screenshots": [
{
"captured_image": "<URL>",
"baseline_image": "<URL>",
"browser_name": "firefox",
"viewport": "1028",
"mismatch_percentage": 89.58,
"status": "Changes found",
"captured_image_timestamp": "2025-08-26 10:00:40",
"compared_image_timestamp": "2025-08-26 10:00:58",
"captured_diff": "<URL>",
"baseline_diff": "<URL>",
},
// ... more screenshots in the same format
]
}
```

### Step 5: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui --config .smartui.json exec -- dotnet run cloud
```

You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.

Install **virtualenv**, which is the recommended way to run your tests. It will isolate the build from other setups you may have running and ensure that the tests run with the specified versions of the modules.

```bash
pip install virtualenv
```

### Step 1: Create/Update your test

- You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `SmartUI_SDK_LT_hub.py` file.

```bash
git clone https://github.com/LambdaTest/smartui-python-sample
cd smartui-python-sample
```

- Create a virtual environment in your project folder (the environment name is arbitrary).

```bash
virtualenv venv
```

- Activate the environment.

```bash
source venv/bin/activate
```

### Step 2: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Selenium SDK` in your **Frontend** project.

```bash
npm install @lambdatest/smartui-cli
```

If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.

```bash
pip install lambdatest-selenium-driver
```

### Step 3: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:

```python
from lambdatest_selenium_driver import smartui_snapshot
from selenium import webdriver

driver = webdriver.Chrome()
try:
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>")
except Exception as err:
print(err)
finally:
driver.close()
```

### Step 4: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui exec python SmartUI_SDK_LT_hub.py --config .smartui.json
```

You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.

### Step 1: Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `sdkCloud.rb` file present in the `sdk` folder.

```bash
git clone https://github.com/LambdaTest/smartui-ruby-selenium-sample
cd smartui-ruby-selenium-sample/sdk
```

### Step 2: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Selenium SDK` in your **Frontend** project.

```bash
npm install @lambdatest/smartui-cli
```

If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.

```
gem install lambdatest-selenium-driver selenium-webdriver
```

### Step 3: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:

```ruby
require "selenium-webdriver"
require "lambdatest/selenium/driver"

driver = Selenium::WebDriver.for :chrome
driver.navigate.to "https://www.pinterest.com/pin/16958936087791895/"

# Take a snapshot
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name")

driver.quit
```

### Step 4: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui exec ruby sdkCloud.rb --config .smartui.json
```

You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.

## View SmartUI Results

You have successfully integrated SmartUI SDK with your Selenium tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

## Arguments supported in the `smartUISnapshot` function

The following are the different options which are currently supported:

| Key| Description |
| -- | ----------- |
| `driver` (instance)    | The instance of the web driver used in your tests. |
| `"Screenshot Name"` (string)    | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `options` (object)    | Specify one or a combination of selectors in the `ignoreDOM` or `selectDOM` objects. These selectors can be based on `HTML DOM IDs, CSS classes, CSS selectors, or XPaths` used by your webpage. They define elements that should be excluded from or included in the visual comparison.|

## Handling Dynamic Data in SmartUI SDK  ****

When conducting visual tests, you may encounter scenarios where certain elements within your application change between test runs. These changes  might introduce inconsistencies in your test results.You can ignore / select specific element(s) to be removed from the comparison by parsing the options in the `smartuiSnapshot` function in the following way

```js title="This is a sample for your configuration for JavaScript to ignore by ID"
let options = {
ignoreDOM: {
id: ["ID-1", "ID-2"],
}
}
await driver.get('Required URL');
await smartuiSnapshot(driver, 'Screenshot Name', options);
```

```js title="This is a sample for your configuration for JavaScript to ignore by Class"
let options = {
ignoreDOM: {
class: ["Class-1", "Class-2"],
}
}
await driver.get('Required URL');
await smartuiSnapshot(driver, 'Screenshot Name', options);
```

```js title="This is a sample for your configuration for JavaScript to ignore by XPath"
let options = {
ignoreDOM: {
xpath: ["Xpath-1", "Xpath-2"],
}
}
await driver.get('Required URL');
await smartuiSnapshot(driver, 'Screenshot Name', options);
```

```js title="This is a sample for your configuration for JavaScript to ignore by CSS Selector"
let options = {
ignoreDOM: {
cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
}
}
await driver.get('Required URL');
await smartuiSnapshot(driver, 'Screenshot Name', options);
```

```js title="This is a sample for your configuration for JavaScript to select by ID"
let options = {
selectDOM: {
id: ["ID-1", "ID-2"],
}
}
await driver.get('Required URL');
await smartuiSnapshot(driver, 'Screenshot Name', options);
```

```js title="This is a sample for your configuration for JavaScript to select by Class"
let options = {
selectDOM: {
class: ["Class-1", "Class-2"],
}
}
await driver.get('Required URL');
await smartuiSnapshot(driver, 'Screenshot Name', options);
```

```js title="This is a sample for your configuration for JavaScript to select by XPath"
let options = {
selectDOM: {
xpath: ["Xpath-1", "Xpath-2"],
}
}
await driver.get('Required URL');
await smartuiSnapshot(driver, 'Screenshot Name', options);
```

```js title="This is a sample for your webhook configuration for JavaScript to select by CSS Selector"
let options = {
selectDOM: {
cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
}
}
await driver.get('Required URL');
await smartuiSnapshot(driver, 'Screenshot Name', options);
```

```java title="This is a sample for your configuration for Java to ignore by ID"
List<String> cssID = Arrays.asList("<required ID>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> ignore = new HashMap<>();
ignore.put("id", cssID);
options.put("ignoreDOM", ignore);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```java title="This is a sample for your configuration for Java to ignore by Class"
List<String> cssclass = Arrays.asList("<required class>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> ignore = new HashMap<>();
ignore.put("class", cssclass);
options.put("ignoreDOM", ignore);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```java title="This is a sample for your configuration for Java to ignore by XPath"
List<String> path = Arrays.asList("<required xpath>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> ignore = new HashMap<>();
ignore.put("xpath", path);
options.put("ignoreDOM", ignore);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```java title="This is a sample for your configuration for Java to ignore by CSS Selector"
List<String> selector = Arrays.asList("<required selector>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> ignore = new HashMap<>();
ignore.put("cssSelector", selector);
options.put("ignoreDOM", ignore);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```java title="This is a sample for your configuration for Java to select by ID"
List<String> cssID = Arrays.asList("<required ID>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> select = new HashMap<>();
select.put("id", cssID);
options.put("selectDOM", select);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```java title="This is a sample for your configuration for Java to select by Class"
List<String> cssclass = Arrays.asList("<required class>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> select = new HashMap<>();
select.put("class", cssclass);
options.put("selectDOM", select);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```java title="This is a sample for your configuration for Java to select by XPath"
List<String> path = Arrays.asList("<required xpath>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> select = new HashMap<>();
select.put("xpath", path);
options.put("selectDOM", select);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```java title="This is a sample for your webhook configuration for Java to select by CSS Selector"
List<String> selector = Arrays.asList("<required selector>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> select = new HashMap<>();
select.put("cssSelector", selector);
options.put("selectDOM", select);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```cs title="This is a sample for your configuration for C# to ignore by ID"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
{ "ignoreDOM", new Dictionary<string, object>
{
{ "id", new[] { "ID-1", "ID-2" } }
}
}
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

```cs title="This is a sample for your configuration for C# to ignore by Class"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
{ "ignoreDOM", new Dictionary<string, object>
{
{ "class", new[] { "class-1", "class-2" } }
}
}
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

```cs title="This is a sample for your configuration for C# to ignore by XPath"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
{ "ignoreDOM", new Dictionary<string, object>
{
{ "xpath", new[] { "xpath-1", "xpath-2" } }
}
}
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

```cs title="This is a sample for your configuration for C# to ignore by CSS Selector"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
{ "ignoreDOM", new Dictionary<string, object>
{
{ "cssSelector", new[] { "cssSelector-1", "cssSelector-2" } }
}
}
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

```cs title="This is a sample for your configuration for C# to select by ID"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
{ "selectDOM", new Dictionary<string, object>
{
{ "id", new[] { "ID-1", "ID-2" } }
}
}
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

```cs title="This is a sample for your configuration for C# to select by Class"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
{ "selectDOM", new Dictionary<string, object>
{
{ "class", new[] { "class-1", "class-2" } }
}
}
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

```cs title="This is a sample for your configuration for C# to select by XPath"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
{ "selectDOM", new Dictionary<string, object>
{
{ "xpath", new[] { "xpath-1", "xpath-2" } }
}
}
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

```cs title="This is a sample for your configuration for C# to select by CSS Selector"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
{ "selectDOM", new Dictionary<string, object>
{
{ "cssSelector", new[] { "cssSelector-1", "cssSelector-2" } }
}
}
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

```python title="This is a sample for your configuration for Python to ignore by ID"
options = {
"ignoreDOM": {
"id": ["ID-1", "ID-2"],
}
}
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to ignore by Class"
options = {
"ignoreDOM": {
"class": ["Class-1", "Class-2"],
}
}
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to ignore by XPath"
options = {
"ignoreDOM": {
"xpath": ["Xpath-1", "Xpath-2"],
}
}
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to ignore by CSS Selector"
options = {
"ignoreDOM": {
"cssSelector": ["CSS-Selector-1", "CSS-Selector-2"],
}
}
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to select by ID."
options = {
"selectDOM": {
"id": ["ID-1", "ID-2"],
}
}
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to select by Class"
options = {
"selectDOM": {
"class": ["Class-1", "Class-2"],
}
}
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to select by XPath"
options = {
"selectDOM": {
"xpath": ["Xpath-1", "Xpath-2"],
}
}
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```

```python title="This is a sample for your webhook configuration for Python to select by CSS Selector"
options = {
"selectDOM": {
"cssSelector": ["CSS-Selector-1", "CSS-Selector-2"],
}
}
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```

```rb title="This is a sample for your configuration for Ruby to ignore by ID"
options = {
ignoreDOM: {
id: ["ID-1", "ID-2"],
}
}
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

```rb title="This is a sample for your configuration for Ruby to ignore by Class"
options = {
ignoreDOM: {
class: ["Class-1", "Class-2"],
}
}
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

```rb title="This is a sample for your configuration for Ruby to ignore by XPath"
options = {
ignoreDOM: {
xpath: ["Xpath-1", "Xpath-2"],
}
}
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

```rb title="This is a sample for your configuration for Ruby to ignore by CSS Selector"
options = {
ignoreDOM: {
cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
}
}
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

```rb title="This is a sample for your configuration for Ruby to select by ID"
options = {
selectDOM: {
id: ["ID-1", "ID-2"],
}
}
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

```rb title="This is a sample for your configuration for Ruby to select by Class"
options = {
selectDOM: {
class: ["Class-1", "Class-2"],
}
}
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

```rb title="This is a sample for your configuration for Ruby to select by XPath"
options = {
selectDOM: {
xpath: ["Xpath-1", "Xpath-2"],
}
}
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

```rb title="This is a sample for your webhook configuration for Ruby to select by CSS Selector"
options = {
selectDOM: {
cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
}
}
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

## For capturing the screenshot of a specific element

You can capture screenshots of targeted elements by leveraging various locator mechanisms such as XPath, CSS ID, class, and selectors. This precision-driven approach ensures accurate and specific visual regression testing for your web application's components.

```js title="This is a sample for your configuration for JavaScript to capture an element by ID"
let options = {
element: {
id: 'Required ID',
}
};
await driver.get('Required URL');
await smartuiSnapshot(driver, 'Screenshot Name', options);
```

```js title="This is a sample for your configuration for JavaScript to capture an element by Class"
let options = {
element: {
class: 'Required Class',
}
};
await driver.get('Required URL');
await smartuiSnapshot(driver, 'Screenshot Name', options);
```

```js title="This is a sample for your configuration for JavaScript to capture an element by XPath"
let options = {
element: {
xpath: 'Required Xpath',
}
};
await driver.get('Required URL');
await smartuiSnapshot(driver, 'Screenshot Name', options);
```

```js title="This is a sample for your webhook configuration for JavaScript to capture an element by CSS Selector"
let options = {
element: {
cssSelector: 'Required CSS Selector',
}
};
await driver.get('Required URL');
await smartuiSnapshot(driver, 'Screenshot Name', options);
```

You can also pass a resolved `WebElement` object directly to the `smartuiSnapshot` function. This is especially useful when stable locators (such as IDs or XPaths) are not available, as you can locate the element using any strategy in your test code and pass the reference directly.

```java title="This is a sample for your configuration for Java to capture an element by ID"
HashMap<String, Object> options = new HashMap<>();
HashMap<String, String> locator = new HashMap<>();
options.put("element", locator);
locator.put("id", "Required ID");
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```java title="This is a sample for your configuration for Java to capture an element by Class"
HashMap<String, Object> options = new HashMap<>();
HashMap<String, String> locator = new HashMap<>();
options.put("element", locator);
locator.put("class", "Required Class");
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```java title="This is a sample for your configuration for Java to capture an element by XPath"
HashMap<String, Object> options = new HashMap<>();
HashMap<String, String> locator = new HashMap<>();
options.put("element", locator);
locator.put("xpath", "Required Xpath");
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```java title="This is a sample for your configuration for Java to capture an element by CSS Selector"
HashMap<String, Object> options = new HashMap<>();
HashMap<String, String> locator = new HashMap<>();
options.put("element", locator);
locator.put("cssSelector", "Required Selector");
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```java title="This is a sample for your configuration for Java to capture an element by passing a WebElement object."
WebElement element = driver.findElement(By.id("Required ID")); // locate using any strategy
HashMap<String, Object> options = new HashMap<>();
options.put("element", element);
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

```cs title="This is a sample for your configuration for C# to capture an element by ID"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
{ "element", new Dictionary<string, object>
{
{ "id", new[] { "Required ID"} }
}
}
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

```cs title="This is a sample for your configuration for C# to capture an element by Class"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
{ "element", new Dictionary<string, object>
{
{ "class", new[] { "Required class" } }
}
}
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

```cs title="This is a sample for your configuration for C# to capture an element by XPath"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
{ "element", new Dictionary<string, object>
{
{ "xpath", new[] { "Required xpath"} }
}
}
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

```cs title="This is a sample for your configuration for C# to capture an element by CSS Selector"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
{ "element", new Dictionary<string, object>
{
{ "cssSelector", new[] { "Required cssSelector"} }
}
}
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

```python title="This is a sample for your configuration for Python to capture an element by ID."
options = {
"element": {
"id": "Required ID",
}
}
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to capture an element by Class"
options = {
"element": {
"class": "Required Class",
}
}
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to capture an element by XPath"
options = {
"element": {
"xpath": "Required Xpath",
}
}
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```

```python title="This is a sample for your webhook configuration for Python to capture an element by CSS Selector"
options = {
"element": {
"cssSelector": "Required CSS Selector",
}
}
driver.get('<Required URL>')
smartui_snapshot(driver,"<Screenshot Name>", options)
```

```rb title="This is a sample for your configuration for Ruby to capture an element by ID"
options = {
element: {
id: 'Required ID',
}
}
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

```rb title="This is a sample for your configuration for Ruby to capture an element by Class"
options = {
element: {
class: 'Required Class',
}
}
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

```rb title="This is a sample for your configuration for Ruby to capture an element by XPath"
options = {
element: {
xpath: 'Required Xpath',
}
}
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

```rb title="This is a sample for your webhook configuration for Ruby to capture an element by CSS Selector"
options = {
element: {
cssSelector: 'Required CSS Selector',
}
}
driver.navigate.to 'Required URL'
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name", options)
```

## For capturing interactive lazy loading elements

If you encounter difficulties loading interactive elements that appear on scroll in full-page screenshots, consider functionally incorporating a full-page scroll into your script before capturing the screenshot. This approach ensures the elements load first, facilitating the screenshot processing.

```js Example for scrolling to bottom for lazy elements
const { Builder, By, Key, until } = require('selenium-webdriver');
const { smartuiSnapshot } = require('@lambdatest/selenium-driver');

(async function example() {
let driver = await new Builder().forBrowser("chrome").build();

try {
await driver.get("Required URL");
async function quickScrollToBottom(lastPageWait) {
try {
let height = await driver.executeScript("return document.body.scrollHeight");
let heightOfPage = parseInt(height, 10);
let size = 200;
let noOfLoop = Math.floor(heightOfPage / size);

for (let i = 1; i <= noOfLoop; i++) {
await driver.executeScript(`window.scrollTo(${(i - 1) * size}, ${i * size})`);
await new Promise(resolve => setTimeout(resolve, 1000));
if (i === noOfLoop) {

await driver.executeScript(`window.scrollTo(${i * size}, ${heightOfPage})`);
await new Promise(resolve => setTimeout(resolve, lastPageWait));
}
}

// Now scroll to the top
await driver.executeScript("window.scrollTo(0,0)");
await new Promise(resolve => setTimeout(resolve, 10000));
console.log("Scroll Completed");
} catch (e) {
console.log("Got some errors" + e.toString());
}
}
await quickScrollToBottom(100); //use wait time accordingly
await smartuiSnapshot(driver, "Screenshot Name");
} finally {
await driver.quit();
}
})();

```

```java Example for scrolling to bottom for lazy elements
//Rest of your code here

@Test
public void basicTest() throws Exception {
System.out.println("Loading Url");
driver.get("Required URL");
quickScrollToBottom();

SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name");
Thread.sleep(5000); // wait for 5 seconds
System.out.println("Test Finished");
}

public void quickScrollToBottom() throws InterruptedException {
long lastHeight = ((Number) ((JavascriptExecutor) driver).executeScript("return document.body.scrollHeight")).longValue();
while (true) {
((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight);");
Thread.sleep(2000);

long newHeight = ((Number) ((JavascriptExecutor) driver).executeScript("return document.body.scrollHeight")).longValue();
if (newHeight == lastHeight) {
break;
}
lastHeight = newHeight;
}
((JavascriptExecutor) driver).executeScript("window.scrollTo(0, 0);");
Thread.sleep(1000); // wait for 1 second
}

@AfterMethod
public void tearDown() {
if (driver != null) {
driver.quit();
}
}
}
```

```python Example for scrolling to bottom for lazy elements
from selenium import webdriver
from lambdatest_selenium_driver import smartui_snapshot

def quick_scroll_to_bottom(driver, last_page_wait):
try:
height = driver.execute_script("return document.body.scrollHeight")
height_of_page = int(height)
size = 200
no_of_loop = height_of_page // size

for i in range(1, no_of_loop + 1):
driver.execute_script(f"window.scrollTo({(i - 1) * size}, {i * size})")
driver.implicitly_wait(1)
if i == no_of_loop:
driver.execute_script(f"window.scrollTo({i * size}, {height_of_page})")
driver.implicitly_wait(last_page_wait / 1000.0)

# Now scroll to the top
driver.execute_script("window.scrollTo(0,0)")
driver.implicitly_wait(10)  # Wait for 10 seconds
print("Scroll Completed")
except Exception as e:
print(f"Got some errors: {e}")

# Example usage
if __name__ == "__main__":
driver = webdriver.Chrome()  # Initialize the WebDriver instance
try:
driver.get("Required URL")  # Change "Required URL" to the actual URL you want to test
quick_scroll_to_bottom(driver, 100)  # Use wait time accordingly
smartui_snapshot(driver, "Screenshot Name")
finally:
driver.quit()
```

```rb Example for scrolling to bottom for lazy elements
require 'selenium-webdriver'
require 'lambdatest/selenium/driver'

def quick_scroll_to_bottom(driver, last_page_wait)
height = driver.execute_script("return document.body.scrollHeight")
height_of_page = height.to_i
size = 200
no_of_loop = height_of_page / size

(1..no_of_loop).each do |i|
driver.execute_script("window.scrollTo(#{(i - 1) * size}, #{i * size})")
sleep 1
if i == no_of_loop
driver.execute_script("window.scrollTo(#{i * size}, #{height_of_page})")
sleep last_page_wait / 1000.0
end
end

# Now scroll to the top
driver.execute_script("window.scrollTo(0,0)")
sleep 10 # Wait for 10 seconds
puts "Scroll Completed"
rescue => e
puts "Got some errors: #{e}"
end

driver = Selenium::WebDriver.for :chrome
begin
driver.get("Required URL")
quick_scroll_to_bottom(driver, 100) # Use wait time accordingly
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Screenshot Name")
ensure
driver.quit
end

```

## Best Practices

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**
```javascript
await smartuiSnapshot(driver, "HomePage-Header");
await smartuiSnapshot(driver, "ProductPage-MainContent");
```

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Selenium's WebDriverWait for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**
```javascript
const { until, By } = require('selenium-webdriver');
await driver.get('https://example.com');
await driver.wait(until.elementLocated(By.id('main-content')), 10000);
await smartuiSnapshot(driver, "Page Loaded");
```

**Handle Dynamic Content**

- Use `ignoreDOM` for elements that change between runs
- Use `selectDOM` when you only need to compare specific areas
- Document why elements are ignored for future reference

**Configuration Management**

- Keep `.smartui.json` in version control
- Use environment variables for sensitive data
- Document custom configuration choices

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests in consistent environments

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**
```java
SmartUISnapshot.smartuiSnapshot(driver, "HomePage-Header");
SmartUISnapshot.smartuiSnapshot(driver, "ProductPage-MainContent");
```

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use explicit waits for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**
```java
driver.get("https://example.com");
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.presenceOfElementLocated(By.id("main-content")));
SmartUISnapshot.smartuiSnapshot(driver, "Page Loaded");
```

**Handle Dynamic Content**

- Use `ignoreDOM` for elements that change between runs
- Use `selectDOM` when you only need to compare specific areas
- Document why elements are ignored for future reference

**Configuration Management**

- Keep `.smartui.json` in version control
- Use environment variables for sensitive data
- Document custom configuration choices

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests in consistent environments

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**
```csharp
await SmartUISnapshot.CaptureSnapshot(driver, "HomePage-Header");
await SmartUISnapshot.CaptureSnapshot(driver, "ProductPage-MainContent");
```

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Selenium's WebDriverWait for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**
```csharp
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium;

driver.Navigate().GoToUrl("https://example.com");
WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
wait.Until(ExpectedConditions.ElementExists(By.Id("main-content")));
await SmartUISnapshot.CaptureSnapshot(driver, "Page Loaded");
```

**Handle Dynamic Content**

- Use `ignoreDOM` for elements that change between runs
- Use `selectDOM` when you only need to compare specific areas
- Document why elements are ignored for future reference

**Configuration Management**

- Keep `.smartui.json` in version control
- Use environment variables for sensitive data
- Document custom configuration choices

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests in consistent environments

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**
```python
smartui_snapshot(driver, "HomePage-Header")
smartui_snapshot(driver, "ProductPage-MainContent")
```

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Selenium's WebDriverWait for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**
```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

driver.get('https://example.com')
wait = WebDriverWait(driver, 10)
wait.until(EC.presence_of_element_located((By.ID, 'main-content')))
smartui_snapshot(driver, "Page Loaded")
```

**Handle Dynamic Content**

- Use `ignoreDOM` for elements that change between runs
- Use `selectDOM` when you only need to compare specific areas
- Document why elements are ignored for future reference

**Configuration Management**

- Keep `.smartui.json` in version control
- Use environment variables for sensitive data
- Document custom configuration choices

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests in consistent environments

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**
```ruby
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "HomePage-Header")
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "ProductPage-MainContent")
```

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Selenium's wait methods for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**
```ruby
require 'selenium-webdriver'

driver.navigate.to 'https://example.com'
wait = Selenium::WebDriver::Wait.new(timeout: 10)
wait.until { driver.find_element(id: 'main-content') }
LambdaTest::Selenium::Driver.smartui_snapshot(driver, "Page Loaded")
```

**Handle Dynamic Content**

- Use `ignoreDOM` for elements that change between runs
- Use `selectDOM` when you only need to compare specific areas
- Document why elements are ignored for future reference

**Configuration Management**

- Keep `.smartui.json` in version control
- Use environment variables for sensitive data
- Document custom configuration choices

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests in consistent environments

## Troubleshooting

**Issue: Screenshots Not Appearing in Dashboard**

**Symptoms**: Tests run successfully but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect
- Project name mismatch
- Network connectivity issues
- CLI not installed or outdated

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:
```bash
echo $PROJECT_TOKEN
```

2. Check project name matches exactly (case-sensitive)

3. Verify SmartUI CLI is installed:
```bash
npx smartui --version
```

4. Check network connectivity to TestMu AI servers

5. Review test execution logs for error messages

**Issue: Project Not Found" Error**

**Symptoms**: Error message indicating project cannot be found

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check for extra spaces or quotes in token

**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**: Screenshots captured but show blank pages or incorrect content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues

**Solutions**:
1. Add explicit waits before screenshots:
```javascript
const { until, By } = require('selenium-webdriver');
await driver.wait(until.elementLocated(By.id('content')), 10000);
await driver.wait(until.elementIsVisible(By.css('.main-content')), 10000);
```

2. Enable JavaScript in configuration:
```json
{
"enableJavaScript": true
}
```

3. Increase `waitForTimeout` in configuration

4. Verify viewport size matches expected dimensions

**Issue: Build Execution Fails**

**Symptoms**: `npx smartui exec` command fails

**Possible Causes**:
- Missing or incorrect configuration file
- Invalid JSON in configuration
- Port conflicts
- Permission issues

**Solutions**:
1. Verify `.smartui.json` exists and is valid JSON
2. Check configuration file syntax
3. Try different port if default is in use:
```bash
npx smartui exec -P 5000 -- <command">
```
4. Check file permissions for configuration and project files

**Issue: npm Dependencies Not Resolving**

**Symptoms**: npm cannot find `@lambdatest/selenium-driver` or `@lambdatest/smartui-cli`

**Possible Causes**:
- Incorrect package version
- npm registry access issues
- Network connectivity problems

**Solutions**:
1. Check latest versions on npm:
```bash
npm view @lambdatest/selenium-driver version
npm view @lambdatest/smartui-cli version
```

2. Clear npm cache:
```bash
npm cache clean --force
```

3. Verify internet connectivity for npm registry access

4. Check package.json for version conflicts

**Issue: Screenshot Names Not Matching Baseline**

**Symptoms**: Screenshots appear as New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

**Getting Help**

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [TestMu AI Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

**Issue: Screenshots Not Appearing in Dashboard**

**Symptoms**: Tests run successfully but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect
- Project name mismatch
- Network connectivity issues
- CLI not installed or outdated

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:
```bash
echo $PROJECT_TOKEN
```

2. Check project name matches exactly (case-sensitive)

3. Verify SmartUI CLI is installed:
```bash
npx smartui --version
```

4. Check network connectivity to TestMu AI servers

5. Review test execution logs for error messages

**Issue: Project Not Found" Error**

**Symptoms**: Error message indicating project cannot be found

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check for extra spaces or quotes in token

**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**: Screenshots captured but show blank pages or incorrect content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues

**Solutions**:
1. Add explicit waits before screenshots:
```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.presenceOfElementLocated(By.id("content")));
```

2. Enable JavaScript in configuration:
```json
{
"enableJavaScript": true
}
```

3. Increase `waitForTimeout` in configuration

4. Verify viewport size matches expected dimensions

**Issue: Build Execution Fails**

**Symptoms**: `npx smartui exec` command fails

**Possible Causes**:
- Missing or incorrect configuration file
- Invalid JSON in configuration
- Port conflicts
- Permission issues

**Solutions**:
1. Verify `.smartui.json` exists and is valid JSON
2. Check configuration file syntax
3. Try different port if default is in use:
```bash
npx smartui exec -P 5000 -- <command">
```
4. Check file permissions for configuration and project files

**Issue: Maven Dependencies Not Resolving**

**Symptoms**: Maven cannot find `lambdatest-java-sdk` dependency

**Possible Causes**:
- Incorrect dependency version
- Maven repository access issues
- Network connectivity problems

**Solutions**:
1. Check latest version on [Maven Central](https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-java-sdk)
2. Update `pom.xml` with correct version
3. Clear Maven cache:
```bash
mvn clean
```
4. Verify internet connectivity for Maven repository access

**Issue: Screenshot Names Not Matching Baseline**

**Symptoms**: Screenshots appear as New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

**Getting Help**

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [TestMu AI Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

**Issue: Screenshots Not Appearing in Dashboard**

**Symptoms**: Tests run successfully but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect
- Project name mismatch
- Network connectivity issues
- CLI not installed or outdated

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:
```powershell
echo $env:PROJECT_TOKEN
```

2. Check project name matches exactly (case-sensitive)

3. Verify SmartUI CLI is installed:
```bash
npx smartui --version
```

4. Check network connectivity to TestMu AI servers

5. Review test execution logs for error messages

**Issue: "Project Not Found" Error**

**Symptoms**: Error message indicating project cannot be found

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check for extra spaces or quotes in token

**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**: Screenshots captured but show blank pages or incorrect content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues

**Solutions**:
1. Add explicit waits before screenshots:
```csharp
WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
wait.Until(ExpectedConditions.ElementExists(By.Id("content")));
wait.Until(ExpectedConditions.ElementIsVisible(By.CssSelector(".main-content")));
```

2. Enable JavaScript in configuration:
```json
{
"enableJavaScript": true
}
```

3. Increase `waitForTimeout` in configuration

4. Verify viewport size matches expected dimensions

**Issue: Build Execution Fails**

**Symptoms**: `npx smartui exec` command fails

**Possible Causes**:
- Missing or incorrect configuration file
- Invalid JSON in configuration
- Port conflicts
- Permission issues

**Solutions**:
1. Verify `.smartui.json` exists and is valid JSON
2. Check configuration file syntax
3. Try different port if default is in use:
```bash
npx smartui exec -P 5000 -- <command>
```
4. Check file permissions for configuration and project files

**Issue: NuGet Dependencies Not Resolving**

**Symptoms**: NuGet cannot find `LambdaTest.Selenium.Driver` package

**Possible Causes**:
- Incorrect package version
- NuGet registry access issues
- Network connectivity problems

**Solutions**:
1. Check latest version on [NuGet.org](https://www.nuget.org/packages/LambdaTest.Selenium.Driver)
2. Clear NuGet cache:
```bash
dotnet nuget locals all --clear
```
3. Verify internet connectivity for NuGet registry access
4. Check project file for version conflicts

**Issue: Screenshot Names Not Matching Baseline**

**Symptoms**: Screenshots appear as "New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

**Getting Help**

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [TestMu AI Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

**Issue: Screenshots Not Appearing in Dashboard**

**Symptoms**: Tests run successfully but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect
- Project name mismatch
- Network connectivity issues
- CLI not installed or outdated

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:
```bash
echo $PROJECT_TOKEN
```

2. Check project name matches exactly (case-sensitive)

3. Verify SmartUI CLI is installed:
```bash
npx smartui --version
```

4. Check network connectivity to TestMu AI servers

5. Review test execution logs for error messages

**Issue: "Project Not Found" Error**

**Symptoms**: Error message indicating project cannot be found

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check for extra spaces or quotes in token

**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**: Screenshots captured but show blank pages or incorrect content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues

**Solutions**:
1. Add explicit waits before screenshots:
```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

wait = WebDriverWait(driver, 10)
wait.until(EC.presence_of_element_located((By.ID, 'content')))
wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, '.main-content')))
```

2. Enable JavaScript in configuration:
```json
{
"enableJavaScript": true
}
```

3. Increase `waitForTimeout` in configuration

4. Verify viewport size matches expected dimensions

**Issue: Build Execution Fails**

**Symptoms**: `npx smartui exec` command fails

**Possible Causes**:
- Missing or incorrect configuration file
- Invalid JSON in configuration
- Port conflicts
- Permission issues

**Solutions**:
1. Verify `.smartui.json` exists and is valid JSON
2. Check configuration file syntax
3. Try different port if default is in use:
```bash
npx smartui exec -P 5000 -- <command>
```
4. Check file permissions for configuration and project files

**Issue: pip Dependencies Not Resolving**

**Symptoms**: pip cannot find `lambdatest-selenium-driver` or package installation fails

**Possible Causes**:
- Incorrect package version
- pip registry access issues
- Network connectivity problems
- Python version mismatch

**Solutions**:
1. Check latest version:
```bash
pip index versions lambdatest-selenium-driver
```

2. Clear pip cache:
```bash
pip cache purge
```

3. Verify internet connectivity for PyPI access

4. Check Python version compatibility:
```bash
python --version
```

5. Use virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install lambdatest-selenium-driver
```

**Issue: Screenshot Names Not Matching Baseline**

**Symptoms**: Screenshots appear as "New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

**Getting Help**

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [TestMu AI Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

**Issue: Screenshots Not Appearing in Dashboard**

**Symptoms**: Tests run successfully but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect
- Project name mismatch
- Network connectivity issues
- CLI not installed or outdated

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:
```bash
echo $PROJECT_TOKEN
```

2. Check project name matches exactly (case-sensitive)

3. Verify SmartUI CLI is installed:
```bash
npx smartui --version
```

4. Check network connectivity to TestMu AI servers

5. Review test execution logs for error messages

**Issue: Project Not Found" Error**

**Symptoms**: Error message indicating project cannot be found

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check for extra spaces or quotes in token

**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**: Screenshots captured but show blank pages or incorrect content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues

**Solutions**:
1. Add explicit waits before screenshots:
```ruby
wait = Selenium::WebDriver::Wait.new(timeout: 10)
wait.until { driver.find_element(id: 'content') }
wait.until { driver.find_element(css: '.main-content').displayed? }
```

2. Enable JavaScript in configuration:
```json
{
"enableJavaScript": true
}
```

3. Increase `waitForTimeout` in configuration

4. Verify viewport size matches expected dimensions

**Issue: Build Execution Fails**

**Symptoms**: `npx smartui exec` command fails

**Possible Causes**:
- Missing or incorrect configuration file
- Invalid JSON in configuration
- Port conflicts
- Permission issues

**Solutions**:
1. Verify `.smartui.json` exists and is valid JSON
2. Check configuration file syntax
3. Try different port if default is in use:
```bash
npx smartui exec -P 5000 -- <command">
```
4. Check file permissions for configuration and project files

**Issue: Gem Dependencies Not Resolving**

**Symptoms**: Bundler cannot find `lambdatest-selenium-driver` gem

**Possible Causes**:
- Incorrect gem version
- RubyGems registry access issues
- Network connectivity problems
- Ruby version mismatch

**Solutions**:
1. Check latest version on [RubyGems.org](https://rubygems.org/gems/lambdatest-selenium-driver)
2. Clear gem cache:
```bash
gem cleanup
```
3. Verify internet connectivity for RubyGems access
4. Check Ruby version compatibility:
```bash
ruby --version
```
5. Update Gemfile with specific version:
```ruby
gem 'lambdatest-selenium-driver', '~> 1.0'
```

**Issue: Screenshot Names Not Matching Baseline**

**Symptoms**: Screenshots appear as New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

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
- [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.testmuai.com/support/api-doc/)
