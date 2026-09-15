# Appium With WebDriverIO

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

\n\n\n\n```javascript title=\"specs/android-test.js\"\ndescribe(\"Proverbial APK\", () => {\n  it(\"Changes color\", async () => {\n    var color = await $(\"id=color\");\n    await color.waitForDisplayed({ timeout: 30000 });\n    await color.click();\n    await color.click();\n  });\n\n  it(\"Changes text\", async () => {\n    var text = await $(\"id=Text\");\n    await text.waitForDisplayed({ timeout: 30000 });\n    await text.click();\n  });\n\n  it(\"Toast\", async () => {\n    var toast = await $(\"id=toast\");\n    await toast.waitForDisplayed({ timeout: 30000 });\n    await toast.click();\n  });\n\n  it(\"Notification\", async () => {\n    var nf = await $(\"id=notification\");\n    await nf.waitForDisplayed({ timeout: 30000 });\n    await nf.click();\n  });\n\n  it(\"Geolocation\", async () => {\n    var geo = await $(\"id=geoLocation\");\n    await geo.waitForDisplayed({ timeout: 30000 });\n    await geo.click();\n\n    driver.back();\n  });\n\n  it(\"SpeedTest\", async () => {\n    var st = await $(\"id=speedTest\");\n    await st.waitForDisplayed({ timeout: 30000 });\n    await st.click();\n\n    await browser.pause(10000);\n    driver.back();\n  });\n\n  it(\"Browser\", async () => {\n    var browser = await $(\"id=Browser\");\n    await browser.waitForDisplayed({ timeout: 30000 });\n    await browser.click();\n\n    let el7 = await $(\"id=url\");\n    await el7.click();\n    await el7.setValue(\"https://www.testmuai.com/\");\n    driver.back();\n  });\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 2",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n\n:::tip\n- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**\n:::\n\n<\/TabItem>\n\n\n```javascript title=\"android-sample/android-single.conf.js\"\nexports.config = {\n  //highlight-next-line\n  user: process.env.LT_USERNAME || \"YOUR_USERNAME\",\n  //highlight-next-line\n  key: process.env.LT_ACCESS_KEY || \"YOUR_ACCESS_KEY\",\n\n  updateJob: false,\n  //highlight-next-line\n  specs: [\"./../specs/android-test.js\"], //path of your test script\n  exclude: [],\n\n  capabilities: [\n    {\n      build: \"NodeJS WebDriverIO Android\",\n      name: \"Sample Test - WebDriverIO\",\n      isRealMobile: true,\n      platformName: \"Android\",\n      deviceName: \"Galaxy S9\",\n      platformVersion: \"10\",\n      app: \"YOUR_APP_URL\", //Enter your app (.apk) url\n    },\n  ],\n\n  logLevel: \"info\",\n  coloredLogs: true,\n  screenshotPath: \"./errorShots/\",\n  baseUrl: \"\",\n  waitforTimeout: 10000,\n  connectionRetryTimeout: 90000,\n  connectionRetryCount: 3,\n  path: \"/wd/hub\",\n  hostname: \"mobile-hub.lambdatest.com\",\n  port: 80,\n\n  framework: \"mocha\",\n  mochaOpts: {\n    ui: \"bdd\",\n    timeout: 20000,\n  },\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "cd ios"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm i"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm run single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The webdriverio-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "webdriverio-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a WebdriverIO Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/webdriverio-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/webdriverio-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

In this documentation, you will learn how to configure and run your **WebdriverIO** automation testing scripts with **Appium** on TestMu AI, set the desired capabilities for appium testing, and other advanced features of TestMu AI.

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

### Step 5: Configure the Test Capabilities

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

### Step 6: Execute and Monitor your Tests

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

## Using the WebdriverIO Agent Skill with TestMu AI

The [webdriverio-skill](https://github.com/LambdaTest/agent-skills/tree/main/webdriverio-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The webdriverio-skill package includes:

```
webdriverio-skill/
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

### Installing WebdriverIO Agent Skill

Install a WebdriverIO Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/webdriverio-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/webdriverio-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only webdriverio-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
