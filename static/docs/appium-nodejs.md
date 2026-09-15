# Appium with Nodejs

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

\n\n\n\n```javascript title=\"Android.js\"\nconst wd = require(\"wd\");\n//highlight-next-line\nconst username = process.env.LT_USERNAME || \"username\"; //Add username here\n\nconst accessKey = process.env.LT_ACCESS_KEY || \"accessKey\"; //Add accessKey here\n\nconst desiredCapabilities = {\n  app: \"APP_URL\", // Enter the app (.apk) url\n  build: \"NodeJS - Android\",\n  name: \"Sample Test NodeJS\",\n  deviceName: \"Galaxy S20\",\n  isRealMobile: true,\n  platformName: \"android\",\n  platformVersion: \"11\",\n  video: true,\n  visual: true,\n};\n\nconst driver = wd.promiseRemote(\n  `https://${username}:${accessKey}@mobile-hub.lambdatest.com/wd/hub`\n);\n\nconst DEFAULT_TIMEOUT = 10000;\n\nasync function runAndroidTest() {\n  try {\n    driver\n      .init(desiredCapabilities)\n      .then(function () {\n        return driver.waitForElementById(\"color\", DEFAULT_TIMEOUT);\n      })\n      .then(function (colorButton) {\n        return colorButton.click();\n      })\n      .then(function () {\n        return driver.waitForElementById(\"Text\", DEFAULT_TIMEOUT);\n      })\n      .then(function (text) {\n        text.click();\n        return driver.waitForElementById(\"toast\", DEFAULT_TIMEOUT);\n      })\n      .then(function (toast) {\n        toast.click();\n        return driver.waitForElementById(\"notification\", DEFAULT_TIMEOUT);\n      })\n      .then(function (notification) {\n        notification.click();\n        return driver.waitForElementById(\"geoLocation\", DEFAULT_TIMEOUT);\n      })\n      .then(function (geoLocation) {\n        geoLocation.click();\n        return driver.waitForElementById(\"buttonPage\", DEFAULT_TIMEOUT);\n      })\n      .then(function (Home) {\n        Home.click();\n        return driver.waitForElementById(\"speedTest\", DEFAULT_TIMEOUT);\n      })\n      .then(function (speedTest) {\n        speedTest.click();\n        return driver.waitForElementById(\"webview\", DEFAULT_TIMEOUT);\n      })\n      .then(function (Browser) {\n        Browser.click();\n        return driver.waitForElementById(\"url\", DEFAULT_TIMEOUT);\n      })\n      .then(function (url) {\n        url.type(\"https://www.lambdatest.com\");\n        return driver.waitForElementById(\"find\", DEFAULT_TIMEOUT);\n      })\n      .then(function (find) {\n        find.click();\n        driver.quit();\n      });\n  } catch (e) {\n    driver.quit();\n  }\n}\n\nrunAndroidTest();"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The capabilities object in the sample code are defined as (iOS.js)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "desired_capabilities = {\n  deviceName: \"iPhone 12\",\n  platformVersion: \"14\",\n  platformName: \"iOS\",\n  isRealMobile: true,\n  //highlight-next-line\n  app: \"APP_URL\", //Enter the app (.ipa) url\n  visual: true,\n  video: true,\n  build: \"NodeJS Vanilla - iOS\",\n  name: \"Sample Test - NodeJS\",\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 5: Configure the Test Capabilities (Android.js)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "desired_capabilities = {\n  deviceName: \"Galaxy S20\",\n  platformVersion: \"11\",\n  platformName: \"android\",\n  isRealMobile: true,\n  //highlight-next-line\n  app: \"APP_URL\", //Enter the app (.apk) url\n  visual: true,\n  video: true,\n  build: \"NodeJS Vanilla - Android\",\n  name: \"Sample Test - NodeJS\",\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  npm i wd"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests (iOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  node IOS.js"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Execute and Monitor your Tests (Android)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  node Android.js"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The appium-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "appium-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Appium Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/appium-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/appium-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

In this documentation, you will learn how to configure and run your **NodeJS** automation testing scripts with **Appium** on TestMu AI, set the desired capabilities for appium testing, and other advanced features of TestMu AI.

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

  - You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
  - You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step.

### Step 4: Update your Automation Script

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

### Step 5: Configure the Test Capabilities

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

### Step 6: Execute and Monitor your Tests

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

## Using the Appium Agent Skill with TestMu AI

The [appium-skill](https://github.com/LambdaTest/agent-skills/tree/main/appium-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The appium-skill package includes:

```
appium-skill/
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

### Installing Appium Agent Skill

Install a Appium Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/appium-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/appium-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only appium-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
