# Capabilities for Playwright Testing

The TestMu AI Capability Generator allows you to automatically create the capabilities class needed to run your
Playwright automation scripts on TestMu AI. Here are a few capabilities that you can configure to run your Playwright
tests.

| Key | Expected Values | Description |Capability|
|----|----------|----------|------------|
| browserName| Chrome, Microsoft Edge **Playwright Bundled Browsers**: pw-chromium, pw-webkit, and pw-firefox| Specify the browser to test on | `const capability = {"browserName": "pw-webkit"}`                                    |
| browserVersion | Chrome 83 & above, Edge 83 & above | Specify the browser version to test on                        | `const capability = {"browserVersion": "latest"}` |
| platform | **Windows**: 11, 10, 8, 8.1, 7  **macOS**: Monterey, Big Sur, Catiline, Mojave| Specify the platform name | `const capability = { "LT:Options": {"platform": "Windows 10",}}`|
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
