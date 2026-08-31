# How to Set Up the Playwright Test Environment on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

When you run a Playwright test on TestMu AI, you set the operating system, browser, and session behavior through capabilities passed to the CDP endpoint. Configuring these capabilities lets you select browser-OS combinations, organize builds, change desktop resolution, and capture debug logs. The TestMu AI Capabilities Generator can auto-create the capabilities class for your Playwright automation scripts.

## Choosing the Browser and OS


Every Playwright run needs a target browser and platform. Define the `browserName`, `browserVersion`, and `platform` capabilities in your automation scripts to choose the combination you want.

| Key | Expected Values | Description | Capability|
| -------- | -----| ------------ | --------------|
| browserName   |  Chrome, Microsoft Edge **Playwright Bundled Browsers**: pw-chromium, pw-webkit, and pw-firefox |   Specify the browser to test on    |  `const capability = {"browserName": "pw-webkit"}`|
| browserVersion  |  Chrome 83 & above, Edge 83 & above | Specify the browser version to test on |  `const capability = {"browserVersion": "latest"}`|
| platform  |  **Windows**: 11, 10, 8, 8.1, 7  **macOS**: Monterey, Big Sur, Catalina, Mojave |    Specify the platform name    | `const capability = { "LT:Options": {"platform": "Windows 10",}}` |

### Playwright Supported Browsers


Each Playwright version ships with its own bundled browser builds. The table below lists the compatible bundled browsers you can use to run tests on TestMu AI for each Playwright version.


View compatible bundled browsers for each Playwright version

| Playwright Versions | Compatible Browsers |
| --------------------|---------------------|
| v1.44               | **Chromium** 125.0  **Firefox** 125.0.1  **WebKit** 17.4 |
| v1.43               | **Chromium** 124.0  **Firefox** 124.0  **WebKit** 17.4 |
| v1.42               | **Chromium** 123.0  **Firefox** 123.0  **WebKit** 17.4 |
| v1.41               | **Chromium** 121.0  **Firefox** 121.0  **WebKit** 17.4 |
| v1.40               | **Chromium** 120.0  **Firefox** 119.0  **WebKit** 17.4 |
| v1.39               | **Chromium** 119.0  **Firefox** 118.0  **WebKit** 17.4 |
| v1.38               | **Chromium** 117.0  **Firefox** 117.0  **WebKit** 17.0 |
| v1.37               | **Chromium** 116.0  **Firefox** 115.0  **WebKit** 17.0 |
| v1.36               | **Chromium** 115.0  **Firefox** 115.0  **WebKit** 17.0 |
| v1.35               | **Chromium** 115.0  **Firefox** 113.0  **WebKit** 16.4 |
| v1.34               | **Chromium** 115.0  **Firefox** 113.0  **WebKit** 16.4 |
| v1.33               | **Chromium** 113.0  **Firefox** 112.0  **WebKit** 16.4 |
| v1.32               | **Chromium** 112.0  **Firefox** 111.0  **WebKit** 16.4 |
| v1.31               | **Chromium** 111.0  **Firefox** 109.0  **WebKit** 16.4 |
| v1.30               | **Chromium** 110.0  **Firefox** 108.0  **WebKit** 16.4 |
| v1.29               | **Chromium** 109.0  **Firefox** 107.0  **WebKit** 16.0 |
| v1.28               | **Chromium** 108.0  **Firefox** 106.0  **WebKit** 16.4 |
| v1.27               | **Chromium** 107.0  **Firefox** 105.0  **WebKit** 16.0 |
| v1.26               | **Chromium** 106.0  **Firefox** 104.0  **WebKit** 16.0 |
| v1.25               | **Chromium** 105.0  **Firefox** 103.0  **WebKit** 16.0 |
| v1.24               | **Chromium** 103.0  **Firefox** 102.0  **WebKit** 16.0 |
| v1.23               | **Chromium** 103.0  **Firefox** 100.0  **WebKit** 15.4 |
| v1.22               | **Chromium** 102.0  **Firefox** 99.0  **WebKit** 15.4  |
| v1.21               | **Chromium** 101.0  **Firefox** 98.0  **WebKit** 15.4  |
| v1.20               | **Chromium** 101.0  **Firefox** 97.0  **WebKit** 15.4  |
| v1.19               | **Chromium** 100.0  **Firefox** 96.0  **WebKit** 15.4  |
| v1.18               | **Chromium** 99.0  **Firefox** 95.0  **WebKit** 15.4   |
| v1.17               | **Chromium** 98.0  **Firefox** 94.0  **WebKit** 15.4   |
| v1.16               | **Chromium** 97.0  **Firefox** 93.0  **WebKit** 15.4   |
| v1.15               | **Chromium** 96.0  **Firefox** 92.0  **WebKit** 15.0   |



### Bundled Browser Versions


Use this table when you want TestMu AI to match the bundled browser version to your local Playwright version. When you set the `useSpecificBundleVersion: true` capability, TestMu AI selects the Chromium, Firefox, or WebKit version that matches your local machine's Playwright version.

```yaml
const capabilities = { "LT:Options": {"useSpecificBundleVersion": true,}}
```


View available bundled browser versions for each Playwright version

| Playwright Versions | Chromium | Firefox | Webkit |
|---------------------|----------|---------|--------|
|1.50| 130-133 except - 132, 126, 122 | 130-134, except - 131,133,126,122,120 | 18.0, 18.2 |
|1.49| 130-133 except - 132, 126, 122 | 130-134, except - 131,133,126,122,120 | 18.0, 18.2 |
|1.48| 130-133 except - 132, 126, 122 | 130-134, except - 131,133,126,122,120 | 18.0, 18.2 |
|1.47| 129 except - 132, 126, 122 | 130, except - 131,133,126,122,120 | 18.0 |
|1.46| 119-133, except - 132, 126, 122 | 118-134, except - 131,133, 126,122,120 | 17.4, 18.2 |
|1.45| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.44| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.43| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.42| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.41| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.40| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.39| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.38| 114-117 | 113-117 | 17 |
|1.37| 114-117 | 113-117 | 17 |
|1.36| 114-117 | 113-117 | 17 |
|1.35| 114-117 | 113-117 | 16.4 |
|1.34| 114-117 | 113-117 | 16.4 |
|1.33| 104-113 | 103-112 | 16.4 |
|1.32| 104-113 | 103-112 | 16.4 |
|1.31| 104-113 | 103-112 | 16.4 |
|1.30| 104-113 | 103-112 | 16.4 |
|1.29| 104-113 | 103-112 | 16.4 |
|1.28| 104-113 | 103-112 | 16.4 |
|1.27| 104-113 | 103-112 | 16.4 |
|1.26| 104-113 | 103-112 | 16 |
|1.25| 104-113 | 103-112 | 16 |
|1.24| 103-104 | 100-102 | 16 |



## Organizing Tests


Naming and tagging your runs makes them easier to find and filter in the TestMu AI dashboard. Use the following capabilities to name test cases and group your Playwright builds by build number, build name, test tags, and build tags.

| Key | Values | Description | Capability |
| -------- | -----| ------------ | -------- |
| build   |  Playwright Sample Build | Represent the build number for your test |```const capability = {"LT:Options": {"build": "",}}```  |
| name   |  Playwright Sample Test | Represents the name of a test | `const capability = {"LT:Options": {"name": "",}}` |
| projectName   |  Playwright Sample Project | Represents the name of a project | `const capability = {"LT:Options": {"projectName": "",}}` |
| tags   |  ["tag1", "tag2", "tag3"] |  Group your Playwright tests |``const capability = {"LT:Options": { "tags": ["tag1", "tag2", "tag3"], }}`` |
| buildTags   |  ["build1", "build2", "build3"] |  Group your Playwright builds |`const capability = {"LT:Options": { "buildTags": ["build1", "build2", "build3"] }}` |



## Changing Desktop Resolutions


Playwright tests run at `1920x1080` by default for desktop browsers. Set the `resolution` capability when you need to reproduce a specific screen size. The supported values per platform are listed below.

| Capability | Description  | Expected Values | Example |
| -------- | -----| ------------ | -----------------------------|
| resolution   |  Specifying your desktop resolution before initiating the test |   String, **Default value**: 1920x1080   **Windows 11 & 10**: `1024x768, 1280x800, 1280x1024, 1366x768, 1440x900, 1680x1050, 1600x1200, 1920x1200, 1920x1080 and 2048x1536`  **macOS**: `1024x768, 1280x960, 1280x1024, 1600x1200 and 1920x1080`  | `const capabilities = { 'LT:Options': {'resolution': '2048x1536',}}` |

## Changing Browser Window Size


The viewport controls the drawable area inside the browser, separate from the desktop resolution. The default viewport for Playwright tests is 1280x720. To set a different viewport, create the browser context with the size you want, as shown below.

```js
// Create context with given viewport
const context = await browser.newContext({
viewport: { width: 1280, height: 1024 }
});
```
The above Playwright test runs on a default viewport of 1280x1024. However, you can also select any other viewport when creating a `new context`.

If you resize viewport for individual page then run the below command.

```js
await page.setViewportSize({ width: 1600, height: 1200 });
```

## Setting Browser Options


Playwright lets you pass browser arguments to Chromium based browsers. For Chrome and Edge, set browser options through the `'goog:chromeOptions'` and `'ms:edgeOptions'` capabilities, as shown below.

**For Chrome**

```js
const { chromium } = require('playwright');

const capabilities = {
'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
'browserVersion': 'latest',
'LT:Options': {
'platform': 'Windows 10',
'build': 'Playwright Sample Build',
'name': 'Playwright Sample Test',
'user': process.env.LT_USERNAME,
'accessKey': process.env.LT_ACCESS_KEY,
'goog:chromeOptions':[
'--user-agent=<Any custom user agent>',
],

}
}

const browser = await chromium.connect({
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
})
```

  **For Edge**

```js
const { chromium } = require('playwright');

const capabilities = {
'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
'browserVersion': 'latest',
'LT:Options': {
'platform': 'Windows 10',
'build': 'Playwright Sample Build',
'name': 'Playwright Sample Test',
'user': process.env.LT_USERNAME,
'accessKey': process.env.LT_ACCESS_KEY,
'ms:edgeOptions':[
'--user-agent=<Any custom user agent>',
],

}
}

const browser = await chromium.connect({
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
})
```

>**Note**: You can define any Chromium based argument from the [list of Chromium command line arguments](https://peter.sh/experiments/chromium-command-line-switches/).

## Getting Session Details


Each Playwright test on TestMu AI generates logs and metadata tied to its session. To retrieve details such as the test ID, status, and log URLs for the current session, add the snippet below to your Playwright test scripts.

```js
let response = JSON.parse(await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'getTestDetails' })}`))
console.log(response);
```

Upon executing the script, you will get the details for the particular test session as a JSON response as shown below.

```js
{
data: {
test_id: 'RWA9R-AC4V8-GJRET-YHBO2',
build_id: 9415381,
name: 'Playwright Sample Test',
user_id: 1001150,
username: 'kaustubhd',
test_type: 'playwright',
platform: 'win10',
browser: 'Chrome',
browser_version: '107.0',
status_ind: 'running',
session_id: 'RWA9R-AC4V8-GJRET-YHBO2',
build_name: 'Playwright Sample Build',
create_timestamp: '2022-12-07 10:53:16',
start_timestamp: '2022-12-07 10:53:16',
remark: 'running',
console_logs_url: 'https://api.lambdatest.com/automation/api/v1/sessions/RWA9R-AC4V8-GJRET-YHBO2/log/console',
network_logs_url: 'https://api.lambdatest.com/automation/api/v1/sessions/RWA9R-AC4V8-GJRET-YHBO2/log/network',
command_logs_url: 'https://api.lambdatest.com/automation/api/v1/sessions/RWA9R-AC4V8-GJRET-YHBO2/log/command',
video_url: 'https://automation.lambdatest.com/public/video?testID=RWA9R-AC4V8-GJRET-YHBO2&auth=50471585dd55293d204fe87f63400f5f',
screenshot_url: 'https://video-bundler.lambdatest.com/RWA9R-AC4V8-GJRET-YHBO2/screenshots.zip?orgId=588659&createTimestamp=1670410396&testCreateTimestamp=2022-12-07%2010:53:16'
},
message: 'Retrieve session was successful',
status: 'success'
}
```

## Configuring Geolocation


Geolocation testing lets you verify how your application behaves for users in different countries. Run your Playwright tests across 53+ geographies with the `'geoLocation'` capability, as shown below.

| Key | Values | Description | Capability |
| -------- | -----| ------------ | -------- |
| geoLocation   |  US | Represents the geolocation - United States  |`const capabilities = { "LT:Options": { 'geoLocation': 'US', }}`  |

## Debugging Tests


When a test fails on TestMu AI, the captured logs help you trace what went wrong. Enable the debugging capabilities below to record network logs, console logs, and video for your Playwright sessions.

| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| network   | true/false |   Enable network logs    |  `const capabilities = { 'LT:Options': {'network': true,}}` |
| console  | true/false |   Enable browser console logs  | `const capabilities = { 'LT:Options': {'console': true,}}` |
| video   |  true/false |    Enable Video recording of the entire screen     | `const capabilities = { 'LT:Options': {'video': true,}}` |

## Marking Tests as Passed or Failed


A test that fails on your local instance can pass on TestMu AI, so the automatic status does not always reflect your intended outcome. Mark each test as **Passed** or **Failed** explicitly to record the result you expect.

By default, the Status of each test that runs successfully is marked as **Completed**, and if there are any issues, the Status is marked as **Failed**.

Shown below is syntax how to mark Playwright tests as **Passed** or **Failed**.

1. To mark test status as **passed**.

```js
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status:'passed', remark: 'Title matched' } })}`)
```

2. To mark test status as **failed**.

```js
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status:'failed', remark: 'Title not matched' } })}`)
```

## Capabilities Reference


This is the complete set of capabilities you can configure for Playwright tests on TestMu AI. The TestMu AI Capabilities Generator can auto-create this capabilities class for your scripts.

| Key | Expected Values | Description |Capability|
|----|----------|----------|------------|
| browserName| Chrome, Microsoft Edge **Playwright Bundled Browsers**: pw-chromium, pw-webkit, and pw-firefox| Specify the browser to test on | `const capability = {"browserName": "pw-webkit"}`                                    |
| browserVersion | Chrome 83 & above, Edge 83 & above | Specify the browser version to test on                        | `const capability = {"browserVersion": "latest"}` |
| platform | **Windows**: 11, 10, 8, 8.1, 7  **macOS**: Monterey, Big Sur, Catalina, Mojave| Specify the platform name | `const capability = { "LT:Options": {"platform": "Windows 10",}}`|
| build | Playwright Sample Build | Represent the build number for your test | ```const capability = {"LT:Options": {"build": "",}}```                  |
| name| Playwright Sample Test| Represents the name of a test| `const capability = {"LT:Options": {"name": "",}}`|
| projectName | Playwright Sample Project| Represents the name of a project | `const capability = {"LT:Options": {"projectName": "",}}`|
| tags| ["tag1", "tag2", "tag3"]| Group your Playwright tests | ``const capability = {"LT:Options": { "tags": ["tag1", "tag2", "tag3"], }}``|
| buildTags| ["build1", "build2","build3"]| Group your Playwright builds| `const capability = {"LT:Options": { "buildTags": ["build1", "build2", "build3"] }}` |
| resolution| String, **Default value**: 1920x1080   **Windows 11 & 10**: `1024x768, 1280x800, 1280x1024, 1366x768, 1440x900, 1680x1050, 1600x1200, 1920x1200, 1920x1080 and 2048x1536`  **macOS**: `1024x768, 1280x960, 1280x1024, 1600x1200 and 1920x1080` | Specifying your desktop resolution before initiating the test | `const capabilities = { "LT:Options": {"resolution": "2048x1536",}}`|
| projectName| My Test| Represent the name of your project| `const capability = { "LT:Options": {"projectName": "",}}`|
| network| true/false| Enable network logs| `const capability = { "LT:Options": {"network": true,}}`|
| console| true/false| Enable browser console logs| `const capabilities = { "LT:Options": {"console": true,}}`|
| video| true/false| Enable video recording of the entire screen| `const capability = { "LT:Options": {"video": true,}}`|
| visual| true/false| Captures screenshot for every command| `const capability = { "LT:Options": {"visual": true,}}`|
| tunnel| true/false| Enable tunnel for local testing| `const capability = { "LT:Options": {"tunnel": true,}}`|
| tunnelName | true /false | Specify tunnel name | `const capability = { "LT:Options": {"tunnelName": "",}}`|
| geoLocation | AR (Argentina) | Specify country code | `const capability = { "LT:Options": {"geoLocation": "AR",}}`|
| idleTimeout | number| Specifies the timeout of the commands in seconds.  Default value: 300  Max value: 1800 If a value greater than 1800 is added, idleTimeout will be set to 1800.| `const capability = { "LT:Options": {"idleTimeout": "",}}`|
| lambdaMaskCommands | array |  `sendType` or `sendFill`  Masks the type method of the ElementHandle and Locator class.  `sendPress` Masks the press method of the ElementHandle and Locator class.  `setHTTPCredentials` Masks the HTTP credentials parameter in the newContext and newPage method of the browser class.  `setStorageState` Masks the storage state parameter in the newContext and newPage method of the browser class  `setGeolocation` Masks the Geolocation parameter in the newContext and newPage method of the browser class.|`const capability = { "LT:Options": {'lambdaMaskCommands': ["sendType", "sendFill", "sendPress", "setHTTPCredentials", "setStorageState", "setGeolocation"]}}`  |
| useSpecificBundleVersion | Boolean | If set **`true`:** TestMu AI will select the playwright server version as per the browser version you have passed in the capabilities. Check the [supported browser version list](/support/docs/playwright-test-execution-setup/#playwright-supported-browsers).  If the value set in the `browser version` capability is supported by multiple Playwright versions, TestMu AI checks your Playwright client version and sets the Playwright version accordingly.  If set **`false` :** TestMu AI will run your playwright tests with the same version as setup in your local system and the browser version will also be used the compatible one as per the [supported browser version list](/support/docs/playwright-test-execution-setup/#playwright-supported-browsers) and not your defined one. | `const capability = { "LT:Options": {"useSpecificBundleVersion": true,}}` |
| lambdaSetBrowserPosition | | The `lambdaSetBrowserPosition` function is designed to arrange two browser windows on the screen, ensuring each occupies exactly half of the available screen space. This layout facilitates side-by-side browser comparisons or multitasking workflows.   OS Supported - Windows  Browsers supported : Chrome, Microsoft Edge , pw-chroium, pw-webkit & pw-firefox | `const capability = {action: 'lambdaSetBrowserPosition',}` |

## Related Playwright Guides


Continue with the guides below to configure and run your Playwright tests on TestMu AI.

- [Configure Playwright capabilities](/support/docs/capabilities-for-playwright/) documents the full capability reference.
- [Migrate existing Playwright tests to TestMu AI](/support/docs/migrate-existing-playwright-tests/) moves your local tests to the cloud grid.
- [Get started with Playwright testing on TestMu AI](/support/docs/playwright-testing/) walks through your first cloud run.
