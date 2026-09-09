# Appium With Mocha

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

In this documentation, you will learn how to configure and run your **Mocha** automation testing scripts with **Appium** on TestMu AI, set the desired capabilities for appium testing, and other advanced features of TestMu AI.

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Install **npm** from the official [npm website](https://www.npmjs.com/).
- Download and install **NodeJS** from official [NodeJS website](https://nodejs.org/en/). You should be having **NodeJS v6** or newer.
- Make sure you are using the latest version of **JavaScript**.

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Setup the Environment Variables

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

### Step 3: Upload your Application
Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk or .aab file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

Make sure to add the path of the **appFile** in the cURL request. Below is an example cURL request to upload your app using our REST API:

      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""`}

      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"`}

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step.

### Step 4: Update your Automation Script

An automation script for the sample application available above has been provided here.

```javascript title="ios_test.js"
const driver= require("appium-base-driver")

//const { default: driver } = require("appium-android-driver/build/lib/driver");
const { By } = require("selenium-webdriver");
const { element } = require("wd/lib/element-commands");

require("appium-base-driver")
var assert= require("assert"),
webdriver = require("selenium-webdriver"),
conf_file= process.argv[3] || "conf/ios.conf.js";

var caps = require("../" + conf_file).capabilities;

var buildDriver = function(caps) {
return new webdriver.Builder()
.usingServer(
"http://" +
LT_USERNAME +
":" +
LT_ACCESS_KEY +
"@mobile-hub.lambdatest.com/wd/hub"
)
.withCapabilities(caps)
.build();
};

describe("Mocha Appium iOS Test " + caps.browserName, function() {
var driver;
this.timeout(0);
it ('Application is launched', function name(done) {
driver=buildDriver(caps);
driver.findElement(By.xpath('//XCUIElementTypeButton[@name="color"]')).click().then(function(){
console.log("Successfully clicked Color");

});
driver.findElement(By.xpath('//XCUIElementTypeStaticText[@name="Notification"]')).click().then(function(){
console.log("Successfully clicked Notification");
});
driver.findElement(By.xpath('//XCUIElementTypeStaticText[@name="Toast"]')).click().then(function(){
console.log("Successfully clicked Toast");
});
driver.findElement(By.xpath('//XCUIElementTypeButton[@name="Text"]')).click().then(function(){
console.log("Successfully clicked Text");
driver.quit()
});
});
});

```

```javascript title="android_test.js"
const { default: driver } = require("appium-android-driver/build/lib/driver");
const { By } = require("selenium-webdriver");
const { capabilities } = require("../conf/android.conf");

require("appium-android-driver")
var assert= require("assert"),
webdriver = require("selenium-webdriver"),
conf_file= process.argv[3] || "conf/Appp.conf.js";

var caps = require("../" + conf_file).capabilities;

var buildDriver = function(caps) {
return new webdriver.Builder()
.usingServer(
"http://" +
LT_USERNAME +
":" +
LT_ACCESS_KEY +
"@mobile-hub.lambdatest.com/wd/hub"
)
.withCapabilities(caps)
.build();
};

describe("Mocha Appium Test " + caps.browserName, function() {
var driver;
this.timeout(0);

it ('Application is launched', function name(done) {
driver=buildDriver(caps);

driver.findElement(By.id('com.lambdatest.proverbial:id/color')).click().then(function(){
console.log("Successfully clicked Color");
});
driver.findElement(By.id('com.lambdatest.proverbial:id/Text')).click().then(function(){
console.log("Successfully clicked Text");
});
driver.findElement(By.id('com.lambdatest.proverbial:id/notification')).click().then(function(){
console.log("Successfully clicked Notification");
})
driver.findElement(By.id('com.lambdatest.proverbial:id/toast')).click().then(function(){
console.log("Successfully clicked Toast");
driver.quit()
})
});

});
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests. The capabilities object in the sample code are defined as:

```javascript title="android.conf.js"
LT_USERNAME = process.env.LT_USERNAME || "<your username>";      //Enter your LambdaTest username here
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<your accessKey>";  //Enter your LambdaTest accessKey here

exports.capabilities = {
'build': 'Mocha-Appium-Sample', //Build name
'name': 'Mocha-Android', // Test name
'platformName':'android', // OS name
'deviceName': 'Galaxy S10', // Device name
'platformVersion': '11', // OS version
'app' : 'lt://proverbial-android',     // Add app (.apk) url here
'isRealMobile' : true,
'visual': false,  // To take step by step screenshot
'network':false,  // To capture network Logs
'console':false, // To capture console logs.
'tunnel': false // If you want to run the localhost than change it to true
};
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

```javascript title="ios.conf.js"
LT_USERNAME = process.env.LT_USERNAME || "<your username>";        //Enter your LambdaTest username here
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<your accessKey>";    //Enter your LambdaTest accessKey here

exports.capabilities = {
'build': 'Mocha-iOS-Sample', //Build name
'name': 'Mocha-iOS', // Test name
'platformName':'ios', // OS name
'deviceName': 'iPhone 12 Pro', // Device name
'platformVersion': '15', // OS version
'app' : 'lt://proverbial-ios',     // Add app (.ipa) url here
'isRealMobile' : true,
'visual': false,  // To take step by step screenshot
'network':false,  // To capture network Logs
'console':false, // To capture console logs.
'tunnel': false // If you want to run the localhost than change it to true
};
```

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 6: Execute and Monitor your Tests

- Execute the following commands to install the required dependencies:

```bash
npm i
npm install
npm install selenium-webdriver
npm i appium-android-driver
npm i appium-base-driver
npm install --save
```
- The tests can be executed in the terminal using the following command:

```js
npm run android    //to run single test
npm run parallel_android    //to run parallel tests
```

```js
npm run ios    //to run single test
npm run parallel_ios    //to run parallel tests
```

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the Mocha Agent Skill with TestMu AI

The [mocha-skill](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The mocha-skill package includes:

```
mocha-skill/
├── SKILL.md
└── reference/
├── playbook.md
└── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration

### Installing Mocha Agent Skill

Install a Mocha Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/mocha-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/mocha-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only mocha-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
