# How to Run Appium JavaScript Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Running Appium JavaScript tests on TestMu AI executes native and hybrid mobile app automation across real Android and iOS devices. Set credentials, upload your app, configure desired capabilities, then run with Vanilla JavaScript, WebDriverIO, or Mocha and view dashboard results.

**Supported on:** Real &amp; Virtual devices

Prefer another language? See [all supported Appium languages and frameworks](/support/docs/appium-agent-skills/#supported-languages-and-frameworks).

## Prerequisites


Make sure you have the following set up before you start.

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Install **npm** from the official [npm website](https://www.npmjs.com/).
- Download and install **NodeJS** from official [NodeJS website](https://nodejs.org/en/). You should be having **NodeJS v6** or newer.
- Make sure you are using the latest version of **JavaScript**.

## Set Your Credentials


You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.





  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}






  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}





## Upload Your App


Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk or .aab file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

Make sure to add the path of the **appFile** in the cURL request. Below is an example cURL request to upload your app using our REST API:






      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""`}







      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"`}







  - You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
  - You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).
  - If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
  - Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step.


## Run a Test With Your Framework


Pick your framework below. Each tab contains the complete flow for that framework: automation script, capabilities, execution commands, and its agent skill. The credentials and app upload from the sections above are shared across all three.





### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub


### Step 2: Update your Automation Script

An automation script for the sample application available above has been provided here. Ensure to update the `APP_URL`, `username` and `accesKey` in the code scripts before running the tests.





```javascript title="iOS.js"
var wd = require("wd");
var assert = require("assert");
var asserter = wd.asserters;
username =
process.env.LT_USERNAME == undefined
//highlight-next-line
? "username" //Enter the username here
: process.env.LT_USERNAME;
accesskey =
process.env.LT_ACCESS_KEY == undefined
//highlight-next-line
? "access_key" //Enter the access_key here
: process.env.LT_ACCESS_KEY;

desired_capabilities = {
deviceName: "iPhone 12",
platformVersion: "14",
platformName: "iOS",
isRealMobile: true,
//highlight-next-line
app: "APP_URL", //Enter the app (.ipa) url
visual: true,
video: true,
build: "NodeJS Vanilla - iOS",
name: "Sample Test - NodeJS",
};

driver = wd.promiseRemote(
`https://${username}:${accesskey}@mobile-hub.lambdatest.com/wd/hub`
);

async function iOStest() {
try {
driver
.init(desired_capabilities)
.then(function () {
return driver.waitForElementById("color", 10000);
})
.then(function (color) {
return color.click();
})
.then(function () {
return driver.waitForElementById("Text", 10000);
})
.then(function (text) {
text.click();
return driver.waitForElementById("toast", 10000);
})
.then(function (toast) {
toast.click();
return driver.waitForElementById("notification", 10000);
})
.then(function (notification) {
notification.click();
return driver.waitForElementById("geoLocation", 10000);
})
.then(function (geoLocation) {
return geoLocation.click();
})
.then(async function () {
return driver.waitForElementById("Back", 10000);
})
.then(function (Back) {
Back.click();
return driver.waitForElementById("speedTest", 10000);
})
.then(async function (speedTest) {
speedTest.click();
return driver.waitForElementById("Back", 10000);
})
.then(function (back) {
back.click();
return driver.waitForElementById("Browser", 10000);
})
.then(function (Browser) {
Browser.click();
return driver.waitForElementById("url", 10000);
})
.then(function (url) {
url.type("https://www.lambdatest.com");
return driver.waitForElementById("find", 10000);
})
.then(function (find) {
find.click();
driver.quit();
});
} catch (e) {
driver.quit();
}
}

iOStest();
```





```javascript title="Android.js"
const wd = require("wd");
//highlight-next-line
const username = process.env.LT_USERNAME || "username"; //Add username here

const accessKey = process.env.LT_ACCESS_KEY || "accessKey"; //Add accessKey here

const desiredCapabilities = {
app: "APP_URL", // Enter the app (.apk) url
build: "NodeJS - Android",
name: "Sample Test NodeJS",
deviceName: "Galaxy S20",
isRealMobile: true,
platformName: "android",
platformVersion: "11",
video: true,
visual: true,
};

const driver = wd.promiseRemote(
`https://${username}:${accessKey}@mobile-hub.lambdatest.com/wd/hub`
);

const DEFAULT_TIMEOUT = 10000;

async function runAndroidTest() {
try {
driver
.init(desiredCapabilities)
.then(function () {
return driver.waitForElementById("color", DEFAULT_TIMEOUT);
})
.then(function (colorButton) {
return colorButton.click();
})
.then(function () {
return driver.waitForElementById("Text", DEFAULT_TIMEOUT);
})
.then(function (text) {
text.click();
return driver.waitForElementById("toast", DEFAULT_TIMEOUT);
})
.then(function (toast) {
toast.click();
return driver.waitForElementById("notification", DEFAULT_TIMEOUT);
})
.then(function (notification) {
notification.click();
return driver.waitForElementById("geoLocation", DEFAULT_TIMEOUT);
})
.then(function (geoLocation) {
geoLocation.click();
return driver.waitForElementById("buttonPage", DEFAULT_TIMEOUT);
})
.then(function (Home) {
Home.click();
return driver.waitForElementById("speedTest", DEFAULT_TIMEOUT);
})
.then(function (speedTest) {
speedTest.click();
return driver.waitForElementById("webview", DEFAULT_TIMEOUT);
})
.then(function (Browser) {
Browser.click();
return driver.waitForElementById("url", DEFAULT_TIMEOUT);
})
.then(function (url) {
url.type("https://www.lambdatest.com");
return driver.waitForElementById("find", DEFAULT_TIMEOUT);
})
.then(function (find) {
find.click();
driver.quit();
});
} catch (e) {
driver.quit();
}
}

runAndroidTest();
```






- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**


### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:





```javascript
desired_capabilities = {
deviceName: "iPhone 12",
platformVersion: "14",
platformName: "iOS",
isRealMobile: true,
//highlight-next-line
app: "APP_URL", //Enter the app (.ipa) url
visual: true,
video: true,
build: "NodeJS Vanilla - iOS",
name: "Sample Test - NodeJS",
};
```




```javascript
desired_capabilities = {
deviceName: "Galaxy S20",
platformVersion: "11",
platformName: "android",
isRealMobile: true,
//highlight-next-line
app: "APP_URL", //Enter the app (.apk) url
visual: true,
video: true,
build: "NodeJS Vanilla - Android",
name: "Sample Test - NodeJS",
};
```






- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**




- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).



### Step 4: Execute and Monitor your Tests

- Run the following commands to install the required dependencies:

```bash
npm i wd
```

- The tests can be executed in the terminal using the following command:




```bash
node IOS.js
```




```bash
node Android.js
```




  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).





### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub


### Step 2: Update your Automation Script

An automation script for the sample application available above has been provided here. Ensure to update the `APP_URL`, `username` and `accesKey` in your scripts inside `specs` directory the  before running the tests.





```javascript title="specs/ios-test.js"
describe("Proverbial APK", () => {
it("Changes color", async () => {
var color = await $("id=color");
await color.waitForDisplayed({ timeout: 30000 });
await color.click();
await color.click();
});

it("Changes text", async () => {
var text = await $("id=Text");
await text.waitForDisplayed({ timeout: 30000 });
await text.click();
});

it("Toast", async () => {
var toast = await $("id=toast");
await toast.waitForDisplayed({ timeout: 30000 });
await toast.click();
});

it("Notification", async () => {
var nf = await $("id=notification");
await nf.waitForDisplayed({ timeout: 30000 });
await nf.click();
});

it("Geolocation", async () => {
var geo = await $("id=geoLocation");
await geo.waitForDisplayed({ timeout: 30000 });
await geo.click();

driver.back();
});

it("SpeedTest", async () => {
var st = await $("id=speedTest");
await st.waitForDisplayed({ timeout: 30000 });
await st.click();

await browser.pause(10000);
driver.back();
});

it("Browser", async () => {
var browser = await $("id=Browser");
await browser.waitForDisplayed({ timeout: 30000 });
await browser.click();

let el7 = await $("id=url");
await el7.click();
await el7.setValue("https://www.testmuai.com/");
driver.back();
});
});
```





```javascript title="specs/android-test.js"
describe("Proverbial APK", () => {
it("Changes color", async () => {
var color = await $("id=color");
await color.waitForDisplayed({ timeout: 30000 });
await color.click();
await color.click();
});

it("Changes text", async () => {
var text = await $("id=Text");
await text.waitForDisplayed({ timeout: 30000 });
await text.click();
});

it("Toast", async () => {
var toast = await $("id=toast");
await toast.waitForDisplayed({ timeout: 30000 });
await toast.click();
});

it("Notification", async () => {
var nf = await $("id=notification");
await nf.waitForDisplayed({ timeout: 30000 });
await nf.click();
});

it("Geolocation", async () => {
var geo = await $("id=geoLocation");
await geo.waitForDisplayed({ timeout: 30000 });
await geo.click();

driver.back();
});

it("SpeedTest", async () => {
var st = await $("id=speedTest");
await st.waitForDisplayed({ timeout: 30000 });
await st.click();

await browser.pause(10000);
driver.back();
});

it("Browser", async () => {
var browser = await $("id=Browser");
await browser.waitForDisplayed({ timeout: 30000 });
await browser.click();

let el7 = await $("id=url");
await el7.click();
await el7.setValue("https://www.testmuai.com/");
driver.back();
});
});
```



### Step 3: Configure the Test Capabilities

You need to update your capabilities in `*.conf.js` files. In this sample project, we have provided the examples for running tests on both **Android** and **iOS** apps. You can find the configs for both iOS and Android in the `ios-sample` and `android-sample` directories correspondingly.

We are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. You need to pass the path of your test script in `specs` object to run your own automation script. The capabilities object in the sample code for a single test are defined as:





```javascript title="ios-sample/ios-single.conf.js"
exports.config = {
//highlight-next-line
user: process.env.LT_USERNAME || "YOUR_USERNAME",
//highlight-next-line
key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",

updateJob: false,
//highlight-next-line
specs: ["./../specs/ios-test.js"], //path of your test script
exclude: [],

capabilities: [
{
build: "NodeJS WebDriverIO iOS",
name: "Sample Test - WebDriverIO",
isRealMobile: true,
deviceName: "iPhone 13 Pro",
platformVersion: "15",
platformName: "iOS",
//highlight-next-line
app: "YOUR_APP_URL", //Enter your app (.ipa) url
},
],

logLevel: "info",
coloredLogs: true,
screenshotPath: "./errorShots/",
baseUrl: "",
waitforTimeout: 10000,
connectionRetryTimeout: 90000,
connectionRetryCount: 3,
path: "/wd/hub",
hostname: "mobile-hub.lambdatest.com",
port: 80,

framework: "mocha",
mochaOpts: {
ui: "bdd",
timeout: 20000,
},
};
```



- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**





```javascript title="android-sample/android-single.conf.js"
exports.config = {
//highlight-next-line
user: process.env.LT_USERNAME || "YOUR_USERNAME",
//highlight-next-line
key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",

updateJob: false,
//highlight-next-line
specs: ["./../specs/android-test.js"], //path of your test script
exclude: [],

capabilities: [
{
build: "NodeJS WebDriverIO Android",
name: "Sample Test - WebDriverIO",
isRealMobile: true,
platformName: "Android",
deviceName: "Galaxy S9",
platformVersion: "10",
app: "YOUR_APP_URL", //Enter your app (.apk) url
},
],

logLevel: "info",
coloredLogs: true,
screenshotPath: "./errorShots/",
baseUrl: "",
waitforTimeout: 10000,
connectionRetryTimeout: 90000,
connectionRetryCount: 3,
path: "/wd/hub",
hostname: "mobile-hub.lambdatest.com",
port: 80,

framework: "mocha",
mochaOpts: {
ui: "bdd",
timeout: 20000,
},
};
```



- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**








- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).



### Step 4: Execute and Monitor your Tests

- Navigate to the corresponding directory based on your app.

```bash
cd ios
```
- Install the required dependencies using the following command:

```bash
npm i
```
- Execute the following command to run your test on TestMu AI platform:

```bash
npm run single
```

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).





### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub


### Step 2: Update your Automation Script

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


### Step 3: Configure the Test Capabilities

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



### Step 4: Execute and Monitor your Tests

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





## View Your Results


Open the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build) to see your test. Each session includes a video recording, step-by-step screenshots, device logs, and network logs.

## Next Steps


Continue with these related guides:

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
- [Appium languages and frameworks](/support/docs/appium-agent-skills/#supported-languages-and-frameworks)
