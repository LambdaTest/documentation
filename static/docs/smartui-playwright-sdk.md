# SmartUI Playwright SDK

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The SmartUI Playwright SDK integrates visual regression testing into your existing Playwright suite across JavaScript, Java, and Python. It captures, compares, and analyzes screenshots across a multitude of browsers and resolutions, so you can detect visual discrepancies early, keep your application's UI consistent across every supported environment, and get comprehensive coverage with minimal setup.

Select your language from the tabs below to follow the setup and usage steps for JavaScript, Java, or Python.

## Prerequisites

- Basic understanding of Command Line Interface and Playwright is required.
- Login to [TestMu AI SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on TestMu AI platform using SmartUI Playwright SDK integration.

## Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as CLI for executing your `SDK` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Steps to run your first test

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Select your language below and follow the steps to successfully generate screenshots.

### Step 1: Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `plawrightCloud.js` file present in the `sdk` folder.

```bash
git clone https://github.com/LambdaTest/smartui-playwright-sample
cd smartui-playwright-sample/sdk
```

### Step 2: Install the Dependencies

Install required NPM modules for `TestMu AI SmartUI Playwright SDK` in your **Frontend** project.

```bash
npm install @lambdatest/smartui-cli @lambdatest/playwright-driver playwright
```

If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.

### Step 3: Configure your Project Token

Setup your project token shown in the **SmartUI** app after creating your project.

```bash
export PROJECT_TOKEN=123456#1234abcd-****-****-****-************"
```

```bash
set PROJECT_TOKEN=123456#1234abcd-****-****-****-************"
```

```powershell
$env:PROJECT_TOKEN=123456#1234abcd-****-****-****-************"
```

### Step 4: Create and Configure SmartUI Config

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

### Step 5: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Playwright` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of Playwright script of which we would like to take the screenshot, as shown below:

```js
const { chromium } = require("playwright");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
// Launch a local browser instance
const browser = await chromium.launch({
headless: false, // Set to false to see the browser UI
});

const page = await browser.newPage();

// Navigate to the desired URL
await page.goto("https://www.lambdatest.com");

// Use smartuiSnapshot to take a visual snapshot locally
await smartuiSnapshot.smartuiSnapshot(page, "LambdaTest");

// Close the browser
await browser.close();
})();

```

### Step 6: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui exec node playwrightCloud.js --config .smartui.json
```

You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.

### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample for the Java from the TestMu AI GitHub repository to run the tests on the SmartUI.

 View on GitHub

### Step 2: Install the Dependencies

Update your dependencies in `pom.xml` file Install required modules for TestMu AI SmartUI SDK in your frontend project.

```bash
npm install @lambdatest/smartui-cli @lambdatest/playwright-driver playwright
mvn clean compile
```

If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.

### Step 3: Setup your credentials

```bash
export LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
```

```bash
set LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
```

```powershell
$env:LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
```

### Step 4: Create and Configure SmartUI Config

You can now configure your project configurations on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
npx smartui config:create smartui-web.json
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

### Step 5: Adding SmartUI function to take screenshot

You can incorporate SmartUI into your custom `Playwright` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of Playwright script of which we would like to take the screenshot, as shown below:

```java reference
https://github.com/LambdaTest/smartui-java-playwright-sample/blob/main/src/test/java/com/lambdatest/SmartUISDKPlaywrightCloud.java
```

### Step 6: Execute the Tests on SmartUI Cloud

Execute visual regression tests on SmartUI using the following commands

```bash
npx smartui exec -- mvn test -D suite="sdk-playwright-local-java.xml
```

You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.

Install **virtualenv** which is the recommended way to run your tests. It will isolate the build from other setups you may have running and ensure that the tests run with the specified versions of the modules.

```bash
pip install virtualenv
```

### Step 1: Create/Update your test

- You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `SmartUI_SDK_LT_hub.py` file.

```bash
git clone https://github.com/LambdaTest/smartui-playwright-python-sdk-sample
cd smartui-playwright-python-sdk-sample
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

Install required NPM modules for `TestMu AI SmartUI Playwright Python SDK` in your **Frontend** project.

```bash
npm install @lambdatest/smartui-cli
```

If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.

```bash
pip install lambdatest-playwright-driver
```

### Step 3: Configure your Project Token

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

### Step 4: Create and Configure SmartUI Config

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

### Step 5: Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Playwright` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of playwright script of which we would like to take the screenshot, as shown below:

```python
from playwright.sync_api import sync_playwright, Playwright
from lambdatest_playwright_driver import smartui_snapshot

def run(playwright: Playwright):
webkit = playwright.webkit
browser = webkit.launch()
context = browser.new_context()
page = context.new_page()

try:
page.goto("Required URL")
smartui_snapshot(page, "Screenshot Name")

print("SmartUI snapshot taken successfully!")

except Exception as e:
print(f"Error occurred during SmartUI snapshot: {e}")

finally:
browser.close()

with sync_playwright() as playwright:
run(playwright)
```

### Step 6: Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui --config .smartui.json exec -- python SmartUI_SDK_LT_hub.py
```

You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.

##  View SmartUI Results

You have successfully integrated SmartUI SDK with your Playwright tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

## Arguments supported in the `smartUISnapshot` function

The following are the different options which are currently supported:

| Key                       | Description                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `page` (instance)    | The instance of page used in your tests. |
| `"Screenshot Name"` (string)    | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `options` (object)    | Specify one or a combination of selectors in the `ignoreDOM` or `selectDOM` objects. These selectors can be based on `HTML DOM IDs, CSS classes, CSS selectors, or XPaths` used by your webpage. They define elements that should be excluded from or included in the visual comparison.|

| Key                       | Description                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `driver` (instance)    | The instance of the web driver used in your tests. |
| `"Screenshot Name"` (string)    | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `options` (object)    | Specify one or a combination of selectors in the `ignoreDOM` or `selectDOM` objects. These selectors can be based on `HTML DOM IDs, CSS classes, CSS selectors, or XPaths` used by your webpage. They define elements that should be excluded from or included in the visual comparison.|

| Key                       | Description                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `page` (instance)    | The instance of the page used in your tests. |
| `"Screenshot Name"` (string)    | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `options` (object)    | Specify one or a combination of selectors in the `ignoreDOM` or `selectDOM` objects. These selectors can be based on `HTML DOM IDs, CSS classes, CSS selectors, or XPaths` used by your webpage. They define elements that should be excluded from or included in the visual comparison.|

## Handling Dynamic Data in SmartUI SDK  ****

When conducting visual tests, you may encounter scenarios where certain elements within your application change between test runs. These changes  might introduce inconsistencies in your test results.You can ignore / select specific element(s) to be removed from the comparison by parsing the options in the `smartuiSnapshot` function in the following way

```js title="This is a sample for your configuration for Playwright to ignore by" ID"
let options = {
ignoreDOM: {
id: ["ID-1", "ID-2"],
}
}
await page.goto('Required URL');
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

```js title="This is a sample for your configuration for Playwright to ignore by" Class"
let options = {
ignoreDOM: {
class: ["Class-1", "Class-2"],
}
}
await page.goto('Required URL');
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

```js title="This is a sample for your configuration for Playwright to ignore by" XPath"
let options = {
ignoreDOM: {
xpath: ["Xpath-1", "Xpath-2"],
}
}
await page.goto('Required URL');
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

```js title="This is a sample for your configuration for Playwright to ignore by CSS" Selector"
let options = {
ignoreDOM: {
cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
}
}
await page.goto('Required URL');
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

```js title="This is a sample for your configuration for Playwright to select by" ID."
let options = {
selectDOM: {
id: ["ID-1", "ID-2"],
}
}
await page.goto('Required URL');
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

```js title="This is a sample for your configuration for Playwright to select by" Class"
let options = {
selectDOM: {
class: ["Class-1", "Class-2"],
}
}
await page.goto('Required URL');
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

```js title="This is a sample for your configuration for Playwright to select by" XPath"
let options = {
selectDOM: {
xpath: ["Xpath-1", "Xpath-2"],
}
}
await page.goto('Required URL');
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

```js title="This is a sample for your webhook configuration for Playwright to select by CSS" Selector"
let options = {
selectDOM: {
cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
}
}
await page.goto('Required URL');
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
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

```java title="This is a sample for your configuration for Java to select by" ID."
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

```python title="This is a sample for your configuration for Python to ignore by ID"
options = {
"ignoreDOM": {
"id": ["ID-1", "ID-2"],
}
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to ignore by Class"
options = {
"ignoreDOM": {
"class": ["Class-1", "Class-2"],
}
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to ignore by XPath"
options = {
"ignoreDOM": {
"xpath": ["Xpath-1", "Xpath-2"],
}
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to ignore by CSS Selector"
options = {
"ignoreDOM": {
"cssSelector": ["CSS-Selector-1", "CSS-Selector-2"],
}
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to select by ID."
options = {
"selectDOM": {
"id": ["ID-1", "ID-2"],
}
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to select by Class"
options = {
"selectDOM": {
"class": ["Class-1", "Class-2"],
}
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to select by XPath"
options = {
"selectDOM": {
"xpath": ["Xpath-1", "Xpath-2"],
}
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

```python title="This is a sample for your webhook configuration for Python to select by CSS Selector"
options = {
"selectDOM": {
"cssSelector": ["CSS-Selector-1", "CSS-Selector-2"],
}
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

## For capturing the screenshot of a specific element

You can capture screenshots of targeted elements by leveraging various locator mechanisms such as XPath, CSS ID, class, and selectors. This precision-driven approach ensures accurate and specific visual regression testing for your web application's components.

```js title="This is a sample for your configuration for Playwright to capture an element by" ID."
let options = {
element: {
id: 'Required ID',
}
};
await page.goto('Required URL');
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

```js title="This is a sample for your configuration for Playwright to capture an element by" Class"
let options = {
element: {
class: 'Required Class',
}
};
await page.goto('Required URL');
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

```js title="This is a sample for your configuration for Playwright to capture an element by" XPath"
let options = {
element: {
xpath: 'Required Xpath',
}
};
await page.goto('Required URL');
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

```js title="This is a sample for your webhook configuration for Playwright to capture an element by CSS" Selector"
let options = {
element: {
cssSelector: 'Required CSS Selector',
}
};
await page.goto('Required URL');
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name", options);
```

```java title="This is a sample for your configuration for Javas to capture an element by" ID."
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

```python title="This is a sample for your configuration for Python to capture an element by ID."
options = {
"element": {
"id": "Required ID",
}
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to capture an element by Class"
options = {
"element": {
"class": "Required Class",
}
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

```python title="This is a sample for your configuration for Python to capture an element by XPath"
options = {
"element": {
"xpath": "Required Xpath",
}
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

```python title="This is a sample for your webhook configuration for Python to capture an element by CSS Selector"
options = {
"element": {
"cssSelector": "Required CSS Selector",
}
}
page.goto("Required URL")
smartui_snapshot(page,"<Screenshot Name>", options)
```

## For capturing interactive lazy loading elements

If you encounter difficulties loading interactive elements that appear on scroll in full-page screenshots, consider functionally incorporating a full-page scroll into your script before capturing the screenshot. This approach ensures the elements load first, facilitating the screenshot processing.

```js Example for scrolling to bottom for lazy elements
const { chromium } = require('playwright');
const smartuiSnapshot = require('@lambdatest/playwright-driver');

(async () => {
const browser = await chromium.launch({ headless: false }); // Set headless: false to see the browser UI
const page = await browser.newPage();

try {
await page.goto('Required URL');

// Function to scroll to the bottom of the page
async function quickScrollToBottom(lastPageWait) {
await page.evaluate(async (lastPageWait) => {
const scrollToBottom = async (lastPageWait) => {
const getScrollHeight = () => document.body.scrollHeight;
let lastHeight = await getScrollHeight();
let currentHeight = 0;

while (currentHeight < lastHeight) {
window.scrollTo(0, lastHeight);
await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for page to load
currentHeight = lastHeight;
lastHeight = await getScrollHeight();
}

if (lastPageWait) {
await new Promise(resolve => setTimeout(resolve, lastPageWait)); // Additional wait at the bottom
}

// Scroll back to the top after reaching the bottom
window.scrollTo(0, 0);
await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for scroll to top
};

await scrollToBottom(lastPageWait);
}, lastPageWait);
}

await quickScrollToBottom(100); // Adjust wait time as needed
await smartuiSnapshot.smartuiSnapshot(page, "Screenshot Name");

} finally {
await browser.close();
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

## Best Practices

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**
```javascript
await smartuiSnapshot.smartuiSnapshot(page, HomePage-Header");
await smartuiSnapshot.smartuiSnapshot(page, "ProductPage-MainContent");
```

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Playwright's built-in wait methods for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**
```javascript
await page.goto('https://example.com');
await page.waitForSelector('#main-content', { state: 'visible' });
await smartuiSnapshot.smartuiSnapshot(page, Page Loaded");
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
- Use Playwright's built-in wait methods for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**
```java
page.navigate("https://example.com");
page.waitForSelector("#main-content", new Page.WaitForSelectorOptions().setState(WaitForSelectorState.VISIBLE));
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
```python
smartui_snapshot(page, "HomePage-Header")
smartui_snapshot(page, "ProductPage-MainContent")
```

**Wait for Page Load**

- Always wait for pages to fully load before taking screenshots
- Use Playwright's built-in wait methods for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**
```python
page.goto("https://example.com")
page.wait_for_selector("#main-content", state="visible")
page.wait_for_load_state("networkidle")
smartui_snapshot(page, "Page Loaded")
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
await page.waitForSelector('#content', { state: 'visible' });
await page.waitForLoadState('networkidle');
```

2. Enable JavaScript in configuration:
```json
{
enableJavaScript": true
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

**Symptoms**: npm cannot find `@lambdatest/playwright-driver` or `@lambdatest/smartui-cli`

**Possible Causes**:
- Incorrect package version
- npm registry access issues
- Network connectivity problems

**Solutions**:
1. Check latest versions on npm:
```bash
npm view @lambdatest/playwright-driver version
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

- Review the [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- Check [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [TestMu AI Support](https://www.testmuai.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support)

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
page.waitForSelector(#content", new Page.WaitForSelectorOptions().setState(WaitForSelectorState.VISIBLE));
page.waitForLoadState(LoadState.NETWORKIDLE);
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

**Symptoms**: Maven cannot find `lambdatest-java-sdk` or dependencies fail

**Possible Causes**:
- Incorrect dependency version
- Maven repository access issues
- Network connectivity problems

**Solutions**:
1. Check latest version on [Maven Central](https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-java-sdk)
2. Clear Maven cache:
```bash
mvn clean
```
3. Verify internet connectivity for Maven repository access
4. Check pom.xml for version conflicts

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
page.wait_for_selector("#content", state="visible")
page.wait_for_selector(".main-content", state="visible")
page.wait_for_load_state("networkidle")
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

**Symptoms**: pip cannot find `lambdatest-playwright-driver` or package installation fails

**Possible Causes**:
- Incorrect package version
- pip registry access issues
- Network connectivity problems
- Python version mismatch

**Solutions**:
1. Check latest version:
```bash
pip index versions lambdatest-playwright-driver
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
pip install lambdatest-playwright-driver
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

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.testmuai.com/support/api-doc/)
