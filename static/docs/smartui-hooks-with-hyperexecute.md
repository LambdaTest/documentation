# SmartUI Testing on HyperExecute with Hooks

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

There are two ways to run SmartUI visual regression tests on HyperExecute. You can use SmartUI Hooks inside your existing Selenium, Cypress, or Playwright test suite, or you can perform no-code URL capture with the SmartUI CLI. This guide covers both approaches.

## Prerequisites

- Your TestMu AI [Username and Access key](/support/docs/hyperexecute-running-your-first-job/#how-to-get-my-username-and-access-key)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environment Variable](/support/docs/hyperexecute-running-your-first-job/#set-up-authentication-and-environment-variables)
- [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/#hyperexecute-yaml-v02-framework-flags-and-discovery-config) file which contains all the necessary instructions.
- To run SmartUI tests, you need to have a **Baseline Image** and a **Comparison** image. A baseline image is the reference image with which you want to compare. You can either upload this image from your computer or take a screenshot from your browser.


After creating the project, you will get your `PROJECT_TOKEN`. You need to keep this project token safe as it will be used in the further steps below.


## Run Your Test Suite with SmartUI Hooks




This documentation will guide you step-by-step to execute the SmartUI tests on the HyperExecute platform using Selenium

### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample for the TestNG from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub


If you are using your own project, make sure you update the **HUB endpoint** in your tests file.

By setting up the HUB endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

```bash
const GRID_HOST = "@hub.lambdatest.com/wd/hub";
```

Configure the desired capabilities based on your test requirements. For example:

```bash
DesiredCapabilities capability = new DesiredCapabilities();
capability.setCapability(CapabilityType.BROWSER_NAME, browser);
capability.setCapability(CapabilityType.VERSION, version);
capability.setCapability(CapabilityType.PLATFORM, os);
capability.setCapability("screen_resolution", res);
capability.setCapability("build", "Cucu-Sel-TestNG-" + jobid);
capability.setCapability("name", scenario);
capability.setCapability("network", true);
capability.setCapability("video", true);
capability.setCapability("console", true);
capability.setCapability("visual", true);
capability.setCapability("smartUI.project", "HyperExecute-smartUI-project");
```
> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 Capabilities Generator.

### Step 2: Setup the CLI in your Test Suite

After cloning / downloading the sample repo, you need to setup the CLI and the environment variables.

#### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.








  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}









  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}






### Step 3: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy). You can also opt for [Matrix](/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy) or [Hybrid](/support/docs/hyperexecute-test-splitting-and-multiplexing/#hybrid-strategy-in-hyperexecute) mode.
- **Pre and Post** commands
- **Reports and Artefacts** that will be generated after the completion of tests
- and other necessary YAML Parameters

```yaml
---
version: "0.1"
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: win

autosplit: true

retryOnFailure: true
maxRetries: 2

concurrency: 1

debug: false

dataJsonPath: ['src/datame.json', 'src/data1.json','me/data.json', 'data.json']

mergeArtifacts: true
stripParentDirectory: true
taskIdentifierInNonConflictingArtefacts: true

pre:
- pwd
- echo ${PAT}
- echo ${qa}
- echo %PAT%
- echo %qa%
- sed -i -e 's/MyKey/%PAT%/g' key.txt
- cat key.txt
- mvn compile
- cat longlogs.txt

post:
- cat hyperexecute.yaml
- cat longlogs.txt

testRunnerCommand: mvn test `-Dcucumber.options="$test" `-Dscenario="$test" `-Dmaven.repo.local=m2_cache_dir

testDiscovery:
type: raw
mode: static
command: snooper --featureFilePaths=src/main/**/ --frameWork=java --query="@Addition AND @me"| sed -n 1,'5p'

jobLabel: [ 'HYP', 'Selenium', 'smartUI']
```

### Step 4: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.



    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}



### Step 5: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.





Here you can see the difference.



### Handling Dynamic Data with DOM Configuration

| Key | Description |
|-----|------------ |
| `screenshotName` (string) | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `fullPage` (boolean) | Specify `true` if you want to take a Full Page Screenshot and `false` for viewport screenshots; `fullPage: true` is currently only supported for `Chrome`. |
| `ignoreDOM` (object) | Specify one or a combination of selectors based on the `HTML DOM ID, CSS class, CSS selector or Xpath` used by your webpage that should be excluded from the comparison. |
| `selectDOM` (object) | Specify one or a combination of selectors based on the `HTML DOM ID, CSS class, CSS selector or XPath` used by your webpage that should be included in the comparison. |




```js title="This is a sample for your webhook configuration for JavaScript to ignore by ID"
let config = {
screenshotName: "Ignore-ID",
fullPage: false, //You can make this property as true in case of Chrome browser
ignoreDOM: {
id: ["ID-1", "ID-2"], // Ignoring elements by ID, you can ignore multiple at once
},
};
await driver.executeScript("smartui.takeScreenshot", config);
```




```js title="This is a sample for your webhook configuration for JavaScript to ignore by Class"
let config = {
screenshotName: "Ignore-Class",
fullPage: false, //You can make this property as true in case of Chrome browser
ignoreDOM: {
class: ["Class-1", "Class-2"], // Ignoring elements by class, you can ignore multiple at once
},
};
await driver.executeScript("smartui.takeScreenshot", config);
```




```js title="This is a sample for your webhook configuration for JavaScript to ignore by XPath"
let config = {
screenshotName: "Ignore-XPath",
fullPage: false, //You can make this property as true in case of Chrome browser
ignoreDOM: {
xpath: ["Xpath-1", "Xpath-2"], // Ignoring elements by XPath, you can ignore multiple at once
},
};
await driver.executeScript("smartui.takeScreenshot", config);
```





```js title="This is a sample for your webhook configuration for JavaScript to ignore by CSS Selector"
let config = {
screenshotName: "Ignore-cssSelector",
fullPage: false, //You can make this property as true in case of Chrome browser
ignoreDOM: {
cssSelector: ["CSS-Selector-1", "CSS-Selector-2"], // Ignoring elements by CSS selector, you can ignore multiple at once
},
};
await driver.executeScript("smartui.takeScreenshot", config);
```







```js title="This is a sample for your webhook configuration for JavaScript to select by ID."
let config = {
screenshotName: "Select-ID",
fullPage: false, //You can make this property as true in case of Chrome browser
selectDOM: {
id: ["ID-1", "ID-2"], // Selecting elements by ID, you can select multiple at once
},
};
await driver.executeScript("smartui.takeScreenshot", config);
```




```js title="This is a sample for your webhook configuration for JavaScript to select by Class"
let config = {
screenshotName: "Select-Class",
fullPage: false, //You can make this property as true in case of Chrome browser
selectDOM: {
class: ["Class-1", "Class-2"], // Selecting elements by class, you can select multiple at once
},
};
await driver.executeScript("smartui.takeScreenshot", config);
```




```js title="This is a sample for your webhook configuration for JavaScript to select by XPath"
let config = {
screenshotName: "Select-XPath",
fullPage: false, //You can make this property as true in case of Chrome browser
selectDOM: {
xpath: ["Xpath-1", "Xpath-2"], // Selecting elements by XPath, you can select multiple at once
},
};
await driver.executeScript("smartui.takeScreenshot", config);
```





```js title="This is a sample for your webhook configuration for JavaScript to select by CSS Selector"
let config = {
screenshotName: "Select-cssSelector",
fullPage: false, //You can make this property as true in case of Chrome browser
selectDOM: {
cssSelector: ["CSS-Selector-1", "CSS-Selector-2"], // Selecting elements by CSS selector, you can select multiple at once
},
};
await driver.executeScript("smartui.takeScreenshot", config);
```




> **NOTE :** Please contact [Customer Support](mailto:support@testmuai.com) team to enable the **ignoreDOM** feature.




This documentation will guide you step-by-step to execute the SmartUI tests on the HyperExecute platform using Cypress

### Step 1: Setup your Project

#### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable

Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

For macOS / Linux:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Windows:

```bash
set LT_USERNAME=YOUR_LT_USERNAME
set LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

### Step 2: Configure your Cypress Project

1. Go to your project **YAML** file.

2. Your test files must have this code snippet in order for them to take screenshots.

```java
cy.screenshot('my-image')
```

Here **'my-image'** is the name of the image which will be rendered on the Dashboard.
> Refer to the [Cypress Documentation](https://docs.cypress.io/api/commands/screenshot) to understand the different methods for taking screenshots.

3. Paste the below mentioned code in your YAML file.

```bash
cypressOps:
Build: "test_01"
Tags: ["smart-ui", "hyperexecute", "cypress"]
BuildTags: ["t1"]
smartUICaps:
# highlight-next-line
smartUIProjectName: <Enter your Project Name>
smartUIOptions:
output:
errorColor:
red: 0
green: 200
blue: 0
errorType: flat,
transparency: 1,
largeImageThreshold: 100,
useCrossOrigin: false,
outputDiff: true
scaleToSameSize: true,
ignore: antialiasing
SmartUIBaseline: true
```

### Step 3: Execute your Project and Compare the Results

To execute the project run the below command in your terminal at the root folder.

```bash
./hyperexecute --config <yaml-file-path> --download-artifacts --force-clean-artifacts
```
- Now, visit to the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) to check the status of your project.

- Click on the **SmartUI Tests** button.



- Click on **Compare** button to compare the changes made.






This documentation will guide you step-by-step to execute the SmartUI tests on the HyperExecute platform using Playwright.

### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample for the Playwright JavaScript from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub


If you are using your own project, make sure you update the **CDP endpoint** in your tests file.

By setting up the CDP endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

```bash
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

Configure the desired capabilities based on your test requirements. For example:

```bash
const capabilities = {
'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
'browserVersion': 'latest',
'LT:Options': {
'platform': process.env.HYPEREXECUTE_PLATFORM,
'build': 'Playwright SmartUI Build',
'name': 'Playwright SmartUI Test',
'user': process.env.LT_USERNAME,
'accessKey': process.env.LT_ACCESS_KEY,
'network': true,
'video': true,
'console': true,
'smartUIProjectName': process.env.SMARTUI_PROJECT || 'SmartUI-PW',
'smartUIBaseline': true
}
}
```

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 Capabilities Generator.

### Step 2: Setup the CLI in your Test Suite

After cloning / downloading the sample repo, you need to setup the CLI and the environment variables.

#### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.








  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}









  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}






### Step 3: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Pre** command
- and other necessary YAML Parameters

```yaml
---
version: 0.1
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: win

retryOnFailure: true
maxRetries: 1

concurrency: 1

env:
CACHE_DIR: m2_cache_dir

# Dependency caching for Windows
cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
- ${CACHE_DIR}

matrix:
classname: ["pw-smartui.js"]

pre:
# install playwright version to be used.
- npm install playwright@1.42.0 --save-exact

testSuites:
- node hooks/pw-smartui.js

jobLabel: ['HYP', 'Playwright' 'SmartUI']

```

### Step 4: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 3.



    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}



### Step 5: Monitor the Test Execution

- Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. Click on the **Approved** button.



- This will redirect you the SmartUI dashboard where you can see all the images you have pushed for the testing.



- Now you can make the changes in the UI as per your requirement and trigger the Job once again.

- Again click on the **Apprved** button again.



- Now, you will find two builds in your dashboard. One will be the **Baseline Build** and the other one will be the **Non Baseline Build**



- Open any screenshot from the **Non Baseline Build**, and you can see the comparison between the two screenshots, i.e. the Baseline Image and the Non Baseline Image.

- You can now approve or reject the changes directly from the dashboard as well.






## No-Code URL Capture with the SmartUI CLI

This comprehensive guide will walk you through setting up and running SmartUI Capture tests on HyperExecute. SmartUI Capture allows you to perform visual regression testing by capturing screenshots of static URLs across multiple browsers and devices, all orchestrated through HyperExecute's powerful test execution platform.

### Prerequisites

Before you begin, ensure you have the following:

- **Node.js v20.3 or higher** (required for SmartUI CLI v4.x.x)
- **npm** or **yarn** package manager
- **TestMu AI account** with active subscription
- **HyperExecute CLI** installed ([Download Guide](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/))
- Basic understanding of:
  - Command Line Interface (CLI)
  - YAML configuration files
  - JSON file structure
  - Visual regression testing concepts

**Node.js Version Requirement**
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.


### Overview

SmartUI Capture on HyperExecute combines the power of:
- **SmartUI CLI Capture**: Captures screenshots of static URLs across browsers and devices
- **HyperExecute**: Orchestrates and executes tests at scale with parallel execution
- **Visual Regression Testing**: Compares screenshots to detect UI changes

This integration is ideal for:
- Testing production and staging environments
- Monitoring website visual consistency
- Detecting UI regressions across multiple pages
- Running large-scale visual tests in parallel

### Step 1: Create a SmartUI Project

The first step is to create a SmartUI project in the dashboard. This project will contain all your builds and visual comparisons.

1. Go to [SmartUI Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Click on the **New Project** button
3. Select the platform as **CLI** for executing your capture tests
4. Add the following details:
   - **Project Name**: A descriptive name (e.g., "Example Company Visual Tests")
   - **Approvers**: Team members who can approve visual changes
   - **Tags**: Optional tags for filtering and organization
5. Click on **Submit** or **Continue**

**Project Token**
After creating the project, you will receive a `PROJECT_TOKEN`. Save this token securely as you'll need it in the next steps. The token format looks like: `123456#1234abcd-****-****-****-************`


### Step 2: Set Up Your Project Structure

Create a new directory for your SmartUI Capture project or use an existing one. Here's the recommended structure:

```
smartui-capture-project/
├── config.json              # SmartUI configuration
├── urlTest.json             # Test environment URLs
├── urlProd.json             # Production environment URLs
├── test/                    # Optional: Split test URLs
│   ├── urls_test_1.json
│   ├── urls_test_2.json
│   └── ...
├── prod/                    # Optional: Split production URLs
│   ├── urls_prod_1.json
│   ├── urls_prod_2.json
│   └── ...
├── hyperexecute.yaml        # HyperExecute configuration
└── package.json             # Node.js dependencies
```

#### Initialize Your Project

If you're starting fresh, initialize a new Node.js project:

```bash
mkdir smartui-capture-project
cd smartui-capture-project
npm init -y
```

### Step 3: Install Dependencies

Install the required SmartUI CLI package. You can install it globally or locally in your project.

#### Global Installation (Recommended)

```bash
npm install -g @lambdatest/smartui-cli@4.1.54-beta.0
```

#### Local Installation

```bash
npm install @lambdatest/smartui-cli@4.1.54-beta.0
```

**Sample Repository**
You can also clone the sample repository to get started quickly:

```bash
git clone https://github.com/LambdaTest/smartui-playwright-sample
cd smartui-playwright-sample
```

 View on GitHub


### Step 4: Configure Environment Variables

Set up your environment variables for authentication and configuration.

#### Set Project Token

The `PROJECT_TOKEN` is required for SmartUI CLI capture commands.




```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```




```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```




```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```




#### Set HyperExecute Credentials

For HyperExecute, you'll need your LambdaTest username and access key.




```bash
export LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
export LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```




```bash
set LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
set LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```




```powershell
$env:LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
$env:LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```




**Getting Your Credentials**
- **Username and Access Key**: Available in your [LambdaTest Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile)
- **Project Token**: Available in your SmartUI project settings after creation


### Step 5: Create URL Configuration Files

Create JSON files containing the URLs you want to test. Each URL entry should have a name, URL, and optional wait timeout.

#### Create URL File Using CLI

You can generate a sample URL file using the SmartUI CLI:

```bash
npx smartui config:create-web-static urls.json
```

#### Manual URL File Creation

Alternatively, create your URL file manually. Here's the structure:

```json title="urlTest.json"
[
{
"name": "homepage",
"url": "https://test.example.com/",
"waitForTimeout": 5000
},
{
"name": "about_page",
"url": "https://test.example.com/about/",
"waitForTimeout": 5000
},
{
"name": "contact_page",
"url": "https://test.example.com/contact/",
"waitForTimeout": 5000
}
]
```

#### URL File Structure

Each URL object supports the following properties:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Unique identifier for the screenshot (used in SmartUI dashboard) |
| `url` | string | Yes | The URL to capture |
| `waitForTimeout` | number | No | Wait time in milliseconds before capturing (useful for lazy-loaded content) |

**Wait Timeout Best Practices**
- Use `waitForTimeout` only when necessary (e.g., for lazy-loaded components or async content)
- Higher timeout values increase test execution time
- Start with lower values (1000-3000ms) and increase if needed
- Consider using `execute` options for more complex interactions


#### Splitting URLs for Parallel Execution

For large test suites, you can split URLs into multiple files for better parallel execution:

```json title="test/urls_test_1.json"
[
{
"name": "product_category_feature_a",
"url": "https://test.example.com/product-category/feature-a/",
"waitForTimeout": 5000
},
{
"name": "product_category_feature_b",
"url": "https://test.example.com/product-category/feature-b/",
"waitForTimeout": 5000
}
]
```

### Step 6: Create SmartUI Configuration

Create a `config.json` file to configure browsers, viewports, and other SmartUI settings.

#### Generate Configuration File

```bash
npx smartui config:create config.json
```

#### Manual Configuration

Create `config.json` with your desired settings:

```json title="config.json"
{
"web": {
"browsers": [
"safari",
"chrome"
],
"viewports": [
[1367]
]
},
"mobile": {
"devices": [
"iPhone 14",
"iPad 10.2 (2021)",
"Pixel 8"
],
"orientation": "portrait"
},
"cliEnableJavaScript": true,
"lazyLoadConfiguration": {
"enabled": true,
"jumpBackToTop": true,
"scrollDelay": 250,
"scrollStep": 250
},
"waitForTimeout": 5000
}
```

#### Configuration Options Explained

##### Web Configuration

- **browsers**: Array of browser names (`"chrome"`, `"firefox"`, `"safari"`, `"edge"`)
- **viewports**: Array of viewport sizes
  - `[1367]` - Full page screenshot at 1367px width
  - `[1920, 1080]` - Viewport screenshot at 1920x1080

##### Mobile Configuration

- **devices**: Array of device names (e.g., `"iPhone 14"`, `"Galaxy S24"`, `"Pixel 8"`)
- **orientation**: `"portrait"` or `"landscape"`
- **fullPage**: `true` by default for mobile

##### Lazy Loading Configuration

- **enabled**: Enable lazy loading detection
- **jumpBackToTop**: Scroll back to top after capturing
- **scrollDelay**: Delay between scroll steps (milliseconds)
- **scrollStep**: Pixels to scroll per step

**Advanced Configuration**
For more configuration options, refer to the [SmartUI SDK Config Options](/support/docs/smartui-sdk-config-options/) documentation.


### Step 7: Create HyperExecute YAML Configuration

Create a `hyperexecute.yaml` file to configure HyperExecute execution settings.

#### Basic HyperExecute YAML

```yaml title="hyperexecute.yaml"
---
version: 0.1
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: win

retryOnFailure: true
maxRetries: 1

concurrency: 1

env:
CACHE_DIR: node_modules_cache
PROJECT_TOKEN: ${PROJECT_TOKEN}

# Dependency caching
cacheKey: '{{ checksum "package.json" }}'
cacheDirectories:
- ${CACHE_DIR}

pre:
# Install SmartUI CLI and dependencies
- npm install @lambdatest/smartui-cli@4.1.54-beta.0
- npm install playwright@1.57.0
- npx playwright install

testSuites:
- npx smartui capture urlTest.json --config config.json --buildName "Test-Release-v1.0"

jobLabel: ['HYP', 'SmartUI', 'Capture']
```

#### Advanced HyperExecute YAML with Multiple Test Suites

For running multiple URL files in parallel:

```yaml title="hyperexecute.yaml"
---
version: 0.1
globalTimeout: 300
testSuiteTimeout: 300
testSuiteStep: 150

runson: win

retryOnFailure: true
maxRetries: 1

concurrency: 3

env:
CACHE_DIR: node_modules_cache
PROJECT_TOKEN: ${PROJECT_TOKEN}

cacheKey: '{{ checksum "package.json" }}'
cacheDirectories:
- ${CACHE_DIR}

pre:
- npm install @lambdatest/smartui-cli@4.1.54-beta.0
- npm install playwright@1.57.0
- npx playwright install

matrix:
urlFile: ["urlTest.json", "urlProd.json"]

testSuites:
- npx smartui capture ${urlFile} --config config.json --buildName "Build-${urlFile}"

jobLabel: ['HYP', 'SmartUI', 'Capture', 'Parallel']
```

#### HyperExecute YAML Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `version` | YAML schema version | `0.1` |
| `globalTimeout` | Maximum time for entire job (minutes) | `150` |
| `testSuiteTimeout` | Maximum time per test suite (minutes) | `150` |
| `runson` | Operating system (`win`, `mac`, `linux`) | `win` |
| `concurrency` | Number of parallel test executions | `3` |
| `retryOnFailure` | Retry failed tests | `true` |
| `maxRetries` | Maximum retry attempts | `1` |
| `pre` | Commands to run before test execution | Installation commands |
| `testSuites` | Test commands to execute | SmartUI capture commands |
| `matrix` | Matrix for parallel execution | Multiple URL files |

**HyperExecute YAML Documentation**
For detailed YAML configuration options, refer to the [HyperExecute YAML Documentation](/support/docs/deep-dive-into-hyperexecute-yaml/#hyperexecute-yaml-v02-framework-flags-and-discovery-config).


### Step 8: Execute Tests on HyperExecute

#### Download HyperExecute CLI

Download the HyperExecute CLI for your operating system:

| Platform | Download Link |
|----------|--------------|
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Set Execute Permissions (MacOS/Linux)

```bash
chmod u+x ./hyperexecute
```

#### Run Tests

Execute your tests using the HyperExecute CLI:

```bash
./hyperexecute --config hyperexecute.yaml
```

Or with explicit credentials:

```bash
./hyperexecute --user ${YOUR_LAMBDATEST_USERNAME} --key ${YOUR_LAMBDATEST_ACCESS_KEY} --config hyperexecute.yaml
```

#### Capture Command Options

You can enhance your capture commands with additional options:

```bash
# With custom build name
npx smartui capture urlTest.json --config config.json --buildName "Release-v1.0"

# With results export
npx smartui capture urlTest.json --config config.json --fetch-results results.json

# With parallel execution
npx smartui capture urlTest.json --config config.json --parallel 3

# Combined options
npx smartui capture urlTest.json --config config.json --buildName "Release-v1.0" --fetch-results results.json --parallel 3
```

### Step 9: Monitor Test Execution

#### HyperExecute Dashboard

1. Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute)
2. Find your job in the job list
3. Click on the job to view detailed execution logs
4. Monitor test progress in real-time

#### SmartUI Dashboard

1. After test execution completes, navigate to [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Select your project
3. View the build with your specified build name
4. Review captured screenshots
5. Compare with baseline images (if available)

#### Understanding Results

- **Baseline Build**: First build in a project (reference images)
- **Comparison Build**: Subsequent builds compared against baseline
- **Mismatches**: Visual differences detected between builds
- **Approved**: Manually approved visual changes
- **Rejected**: Visual changes that need fixing

#### Using SmartUI Reporter Tool

The [SmartUI Reporter](https://smartui-reporter.netlify.app/) is a web-based tool that provides a comprehensive tabular view of your test results with statistics and export capabilities.

##### Step 1: Export Results JSON

**From CLI Capture Command:**
```bash
npx smartui capture urlTest.json --config config.json --fetch-results results.json
```

**From CLI Exec Command:**
```bash
npx smartui --config config.json exec --fetch-results results.json -- <execution-command>
```

**From SmartUI API:**
You can also fetch results using the [Fetch Build Screenshots API endpoint](https://swagger-api-support.lambdatest.com/smartui/index.html#/Fetch%20Build%20Screenshots):
```
GET /build/screenshots?project_id=YOUR_PROJECT_ID&build_id=YOUR_BUILD_ID
```

##### Step 2: Upload to Reporter

1. Visit [SmartUI Reporter](https://smartui-reporter.netlify.app/)
2. Upload your `results.json` file (drag & drop or click to upload)
3. View results in a tabular format with:
   - Screenshot statistics
   - Browser and viewport information
   - Mismatch percentages
   - Status indicators
   - Direct links to baseline, captured, and diff images

##### Step 3: Export Options

- **Export to PDF**: Generate a comprehensive PDF report for sharing
- **Export to CSV**: Export data for analysis in spreadsheet applications

For detailed information, see the [Fetch Results Documentation](/support/docs/smartui-sdk-fetch-results/#using-smartui-reporter-tool).

### Best Practices

#### 1. URL Organization




**Separate Test and Production URLs**

Keep test and production URLs in separate files:

- `urlTest.json` - Staging/test environment
- `urlProd.json` - Production environment

This allows you to test both environments independently.





**Split Large URL Lists**

For projects with many URLs, split them into multiple files:

```
test/
├── urls_test_1.json  (10 URLs)
├── urls_test_2.json  (10 URLs)
└── urls_test_3.json  (10 URLs)
```

This enables better parallel execution and easier management.





**Use Descriptive Names**

Use clear, descriptive names for your URLs:

```json
{
"name": "product_category_feature_a",
"url": "https://example.com/product-category/feature-a/"
}
```

Avoid generic names like `"page1"` or `"test"`.




#### 1.1. URL Grouping Strategies for Large Test Suites

When working with large numbers of URLs (e.g., 1000+ URLs) that can be logically divided into sections or groups (e.g., Section 1: Product Category A, Section 2: Product Category B, Section 3: Product Category C, etc.), you have two primary strategies for organizing your SmartUI projects:




**Single Project with Branching Strategy**

Use a single SmartUI project and leverage SmartUI's branching capabilities to organize different URL groups within the same project.

##### How It Works

- **Single Project**: All URL groups/sections are managed in one SmartUI project
- **Branching Strategy**: Use SmartUI's [Smart Git feature](/support/docs/smartui-git-branching-strategy/#smart-git-strategy) to create separate branches for each section/group
- **Unified Tracking**: All URLs and automation are tracked in a single project dashboard
- **Independent Baselines**: Each branch maintains its own baseline and comparison history

##### Implementation

**Step 1: Create URL Groups**

Organize your URLs into logical groups:

```
project/
├── sections/
│   ├── section1_category_a.json    (200 URLs)
│   ├── section2_category_b.json    (200 URLs)
│   ├── section3_category_c.json     (200 URLs)
│   ├── section4_category_d.json     (200 URLs)
│   └── section5_category_e.json    (200 URLs)
├── config.json
└── hyperexecute.yaml
```

**Step 2: Configure HyperExecute with Matrix**

Use HyperExecute matrix to run each section:

```yaml title="hyperexecute.yaml"
---
version: 0.1
globalTimeout: 300
testSuiteTimeout: 150

runson: win
concurrency: 5

env:
PROJECT_TOKEN: ${PROJECT_TOKEN}
SMART_GIT: true  # Enable Smart Git for branch management

pre:
- npm install @lambdatest/smartui-cli@4.1.54-beta.0

matrix:
section: ["section1_category_a", "section2_category_b", "section3_category_c", "section4_category_d", "section5_category_e"]

testSuites:
- npx smartui capture sections/${section}.json --config config.json --buildName "${section}-Build"
```

**Step 3: Use Branching for Organization**

Each section can run in its own branch or use build names to group:

```bash
# Option A: Use Smart Git with branches
export SMART_GIT=true
git checkout -b section1-category-a
npx smartui capture sections/section1_category_a.json --config config.json --buildName "Section1-CategoryA"

# Option B: Use build names for grouping (single branch)
npx smartui capture sections/section1_category_a.json --config config.json --buildName "Section1-CategoryA-Build"
```

##### Use Cases

✅ **Best for:**
- Teams that want centralized project management
- Organizations needing unified reporting and analytics
- Projects where sections share common configuration
- Teams that want to track all URLs in one dashboard
- Scenarios requiring cross-section comparisons

✅ **Benefits:**
- Single project dashboard for all sections
- Unified baseline management
- Easier cross-section analysis
- Simplified project administration
- Single project token to manage

❌ **Not ideal for:**
- Teams requiring completely isolated section management
- Organizations with different approval workflows per section
- Projects where sections have vastly different configurations





**Separate Projects Strategy**

Create individual SmartUI projects for each URL group/section, providing complete isolation and independent management.

##### How It Works

- **Multiple Projects**: Each section/group has its own dedicated SmartUI project
- **Independent Management**: Each project operates independently with its own baseline, approvals, and settings
- **Minimal Projects**: Each project contains only one branch (typically `main` or `master`)
- **Clear Separation**: Complete bifurcation between different sections

##### Implementation

**Step 1: Create Separate Projects**

Create a SmartUI project for each section:

- Project 1: "Product Category A Visual Tests" → `PROJECT_TOKEN_1`
- Project 2: "Product Category B Visual Tests" → `PROJECT_TOKEN_2`
- Project 3: "Product Category C Visual Tests" → `PROJECT_TOKEN_3`
- Project 4: "Product Category D Visual Tests" → `PROJECT_TOKEN_4`
- Project 5: "Product Category E Visual Tests" → `PROJECT_TOKEN_5`

**Step 2: Organize URL Files**

```
project/
├── category_a/
│   ├── urls_category_a.json
│   ├── config.json
│   └── hyperexecute_category_a.yaml
├── category_b/
│   ├── urls_category_b.json
│   ├── config.json
│   └── hyperexecute_category_b.yaml
└── category_c/
├── urls_category_c.json
├── config.json
└── hyperexecute_category_c.yaml
```

**Step 3: Configure Each Project Separately**

Each project has its own configuration and HyperExecute YAML:

```yaml title="category_a/hyperexecute_category_a.yaml"
---
version: 0.1
globalTimeout: 150
testSuiteTimeout: 150

runson: win
concurrency: 2

env:
PROJECT_TOKEN: ${PROJECT_TOKEN_CATEGORY_A}  # Unique token per project

pre:
- npm install @lambdatest/smartui-cli@4.1.54-beta.0

testSuites:
- npx smartui capture urls_category_a.json --config config.json --buildName "CategoryA-Build"
```

**Step 4: Execute Projects Independently**

Run each project separately or in parallel:

```bash
# Execute category A project
cd category_a
export PROJECT_TOKEN="${PROJECT_TOKEN_CATEGORY_A}"
./hyperexecute --config hyperexecute_category_a.yaml

# Execute category B project
cd ../category_b
export PROJECT_TOKEN="${PROJECT_TOKEN_CATEGORY_B}"
./hyperexecute --config hyperexecute_category_b.yaml
```

##### Use Cases

✅ **Best for:**
- Teams requiring complete section isolation
- Organizations with different approval workflows per section
- Projects where sections have independent release cycles
- Teams needing separate access controls per section
- Scenarios where sections have different configurations

✅ **Benefits:**
- Complete isolation between sections
- Independent baseline management
- Separate approval workflows
- Individual project settings per section
- Clear project boundaries

❌ **Not ideal for:**
- Teams wanting unified reporting
- Organizations needing cross-section analysis
- Projects with shared configurations
- Teams preferring centralized management




##### Decision Matrix

Use this matrix to decide which strategy fits your needs:

| Requirement | Single Project with Branching | Separate Projects |
|-------------|------------------------------|-------------------|
| **Unified Dashboard** | ✅ Yes | ❌ No |
| **Cross-Section Analysis** | ✅ Yes | ❌ No |
| **Complete Isolation** | ❌ No | ✅ Yes |
| **Independent Approvals** | ⚠️ Partial (via branches) | ✅ Yes |
| **Project Management Complexity** | ✅ Lower | ❌ Higher |
| **Token Management** | ✅ Single token | ❌ Multiple tokens |
| **Configuration Sharing** | ✅ Easy | ❌ Requires duplication |
| **Reporting & Analytics** | ✅ Unified | ❌ Separate per project |

##### Hybrid Approach

You can also combine both strategies:

- **Major Sections**: Use separate projects (e.g., "Production URLs" vs "Staging URLs")
- **Sub-sections**: Use branching within each project (e.g., within "Production URLs", use branches for different product categories)

```bash
# Production Project - Category A Section
export PROJECT_TOKEN="${PROJECT_TOKEN_PROD}"
export SMART_GIT=true
git checkout -b production-category-a
npx smartui capture sections/category_a_prod.json --config config.json

# Staging Project - Category A Section
export PROJECT_TOKEN="${PROJECT_TOKEN_STAGING}"
export SMART_GIT=true
git checkout -b staging-category-a
npx smartui capture sections/category_a_staging.json --config config.json
```

##### Best Practices for Large URL Sets

1. **Logical Grouping**: Group URLs by functionality, product category, or business domain
2. **Consistent Naming**: Use consistent naming conventions across groups
3. **Documentation**: Document which URLs belong to which section
4. **Regular Review**: Periodically review and reorganize groups as needed
5. **Parallel Execution**: Leverage HyperExecute's parallel execution for faster test runs

#### 2. Configuration Management




**Select Relevant Browsers**

Only test browsers that your users actually use:

```json
{
"web": {
"browsers": ["chrome", "safari", "firefox"]
}
}
```

Avoid testing unnecessary browsers to reduce execution time and costs.





**Optimize Viewport Sizes**

Test realistic viewport sizes:

```json
{
"viewports": [
[1920],    // Desktop
[1366],    // Laptop
[768]      // Tablet
]
}
```

Focus on viewports your users actually use.





**Optimize Wait Timeouts**

Start with minimal timeouts and increase only when needed:

```json
{
"waitForTimeout": 2000  // Start low, increase if needed
}
```

Higher timeouts increase execution time.




#### 3. HyperExecute Configuration




**Optimize Concurrency**

Set appropriate concurrency based on your test suite size:

```yaml
concurrency: 3  # For 20-30 URLs
```

Too high concurrency may cause resource issues.





**Set Realistic Timeouts**

Configure timeouts based on your test duration:

```yaml
globalTimeout: 300      # 5 hours for large suites
testSuiteTimeout: 150    # 2.5 hours per suite
```

Account for network latency and page load times.





**Enable Dependency Caching**

Cache node_modules to speed up subsequent runs:

```yaml
cacheKey: '{{ checksum "package.json" }}'
cacheDirectories:
- node_modules_cache
```

This significantly reduces setup time.




#### 4. Build Naming

Use descriptive build names that include:
- Environment (Test/Prod)
- Version or release number
- Date or timestamp

```bash
--buildName "Test-Release-v1.0-2024-01-15"
```

#### 5. Regular Baseline Updates

- Update baselines when intentional UI changes are made
- Review and approve changes regularly
- Keep baseline builds organized with clear naming

### Troubleshooting

#### Common Issues and Solutions




**Issue**: `PROJECT_TOKEN is not set` or authentication failures

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:
```bash
echo $PROJECT_TOKEN  # MacOS/Linux
echo %PROJECT_TOKEN%  # Windows CMD
```

2. Check token format (should include `#`):
```
123456#1234abcd-****-****-****-************
```

3. Verify token in SmartUI dashboard project settings

4. For HyperExecute, also verify `LT_USERNAME` and `LT_ACCESS_KEY`





**Issue**: Errors with SmartUI CLI v4.x.x

**Solutions**:
1. Check Node.js version:
```bash
node --version  # Should be v20.3 or higher
```

2. Upgrade Node.js if needed:
```bash
# Using nvm
nvm install 20.3
nvm use 20.3
```

3. Verify npm version:
```bash
npm --version
```





**Issue**: Tests timing out or incomplete captures

**Solutions**:
1. Increase `waitForTimeout` in URL files:
```json
{
"name": "slow-page",
"url": "https://example.com/",
"waitForTimeout": 10000
}
```

2. Increase HyperExecute timeouts:
```yaml
globalTimeout: 300
testSuiteTimeout: 300
```

3. Check network connectivity and page load times





**Issue**: Some URLs not captured or missing in dashboard

**Solutions**:
1. Verify URLs are accessible and return 200 status
2. Check for JavaScript errors on pages
3. Ensure `waitForTimeout` is sufficient for page load
4. Review SmartUI dashboard for error messages
5. Check HyperExecute logs for execution errors





**Issue**: Tests failing with parallel execution

**Solutions**:
1. Reduce concurrency:
```yaml
concurrency: 1  # Start with 1, increase gradually
```

2. Split URLs into smaller files
3. Check system resources and network bandwidth
4. Verify HyperExecute account limits





**Issue**: HyperExecute YAML parsing errors

**Solutions**:
1. Validate YAML syntax using online validators
2. Check indentation (YAML is space-sensitive)
3. Verify all required fields are present
4. Review [HyperExecute YAML documentation](/support/docs/deep-dive-into-hyperexecute-yaml/#hyperexecute-yaml-v02-framework-flags-and-discovery-config)




#### Debugging Tips

1. **Test Locally First**: Run SmartUI capture locally before HyperExecute:
```bash
npx smartui capture urlTest.json --config config.json
```

2. **Check Logs**: Review HyperExecute job logs for detailed error messages

3. **Verify Configuration**: Use `npx smartui --help` to verify CLI installation

4. **Test Individual URLs**: Test problematic URLs individually to isolate issues

5. **Monitor Dashboard**: Check both HyperExecute and SmartUI dashboards for errors

### Advanced Usage

#### CI/CD Integration

Integrate SmartUI Capture with your CI/CD pipeline:

```yaml title=".github/workflows/smartui-capture.yml"
name: SmartUI Capture Tests

on:
pull_request:
branches: [main]
workflow_dispatch:

env:
LT_USERNAME: ${{ secrets.LT_USERNAME }}
LT_ACCESS_KEY: ${{ secrets.LT_ACCESS_KEY }}
PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}

jobs:
smartui-capture:
name: Execute SmartUI Capture
runs-on: ubuntu-latest
steps:
- name: Checkout repo
uses: actions/checkout@v2

- name: Install Dependencies
run: |
npm install @lambdatest/smartui-cli@4.1.54-beta.0
npm install playwright@1.57.0
npx playwright install

- name: Run SmartUI Capture
run: |
npx smartui capture urlTest.json --config config.json --buildName "PR-${{ github.event.pull_request.number }}"

- name: Fetch Results
run: |
npx smartui capture urlTest.json --config config.json --fetch-results results.json
```

#### Scheduled Test Runs

Use the `--scheduled` flag for scheduled test executions:

```bash
npx smartui capture urlProd.json --config config.json --scheduled "schedule-123"
```

#### Custom Build Names with Variables

Use environment variables in build names:

```yaml
testSuites:
- npx smartui capture urlTest.json --config config.json --buildName "Build-${BUILD_NUMBER}"
```

### Next Steps

Now that you've set up SmartUI Capture with HyperExecute, explore these resources:

- **[SmartUI Dashboard Guide](/support/docs/smartui-project-settings/#projects-page)**: Learn to manage tests and approve changes
- **[Baseline Management](/support/docs/smartui-baseline-management/)**: Understand baseline workflows
- **[Handling Dynamic Content](/support/docs/smartui-handle-dynamic-data/)**: Test pages with dynamic elements
- **[Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/)**: Comprehensive troubleshooting solutions
- **[SmartUI CLI Reference](/support/docs/smartui-cli-complete-reference/)**: Complete CLI command reference
- **[HyperExecute Documentation](/support/docs/hyperexecute-running-your-first-job/)**: Learn more about HyperExecute
- **[SmartUI SDK with Playwright on HyperExecute](/support/docs/smartui-sdk-with-hyperexecute/)**: Run SmartUI SDK visual tests with Playwright on HyperExecute
- **[SmartUI SDK with Cypress on HyperExecute](/support/docs/smartui-sdk-with-hyperexecute/)**: Run SmartUI SDK visual tests with Cypress on HyperExecute

### Additional Resources

- [SmartUI CLI Documentation](/support/docs/smartui-cli-complete-reference/) - Complete CLI guide
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options/) - All configuration options
- [HyperExecute YAML Reference](/support/docs/deep-dive-into-hyperexecute-yaml/#hyperexecute-yaml-v02-framework-flags-and-discovery-config) - YAML configuration details
- [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/) - Common issues and solutions
- [LambdaTest Support](https://www.testmuai.com/support/) - Get help from our support team
