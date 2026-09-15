# Virtual Devices

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

\n<!DOCTYPE suite SYSTEM \"http://testng.org/testng-1.0.dtd\">\n\n\n\n    \n        \n        \n        \n        \n            \n        <\/classes>\n    <\/test>\n\n    \n        \n        \n        \n        \n            \n        <\/classes>\n    <\/test>\n<\/suite>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "iOS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "XML",
        "text": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE suite SYSTEM \"http://testng.org/testng-1.0.dtd\">\n\n\n\n    \n        \n        \n        \n        \n            \n        <\/classes>\n    <\/test>\n\n    \n        \n        \n        \n        \n            \n        <\/classes>\n    <\/test>\n<\/suite>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 5: Configure YAML in your Test Suite",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "---\nversion: 0.2\nglobalTimeout: 150\ntestSuiteTimeout: 150\ntestSuiteStep: 150\n\nrunson: android\n\nconcurrency: 2\n\nautosplit: true\n\nretryOnFailure: false\nmaxRetries: 1\n\nappium: true\nframework:\n  name: maven/testng\n  defaultReports: false\n  discoveryType: xmltest\n  flags: [\"-Pios-single\"]\n\njobLabel: ['HYP', 'Virtual Device', 'iOS', 'Single Device']"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the below command in your terminal at the root folder of the project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

 Response of above cURL will be a **JSON** object containing the `App URL` of the format `lt://APP123456789123456789`

## Step 4: Update Your Automation Script

Here is a sample automation script in Java for the sample app downloaded above. In the below test script, ensure to update the `app_url`, or `app_id`

**Set the Capability**
To run the test on Emulator/Simulator, set the `isRealMobile` capability to `false`.

```java
@Test
@org.testng.annotations.Parameters(value = {"device", "version", "platform"})
public void AndroidApp1(String device, String version, String platform) {
version = System.getProperty("platformVersion");
try {
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build","Java TestNG Android");
capabilities.setCapability("name",platform+" "+device+" "+version);
capabilities.setCapability("deviceName", device);
capabilities.setCapability("platformVersion",version);
capabilities.setCapability("platformName", platform);
// highlight-next-line
capabilities.setCapability("isRealMobile", false);

// highlight-next-line
capabilities.setCapability("app", "lt://APP1123456789"); //Enter your app url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console", true);
capabilities.setCapability("network", false);
// capabilities.setCapability("visual", true);
capabilities.setCapability("devicelog", true);
//capabilities.setCapability("geoLocation", "HK");
```

```java
@Test
@org.testng.annotations.Parameters(value = {"device", "version", "platform"})
public void iOSApp1(String device, String version, String platform) {
try {
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build","Java TestNG iOS");
capabilities.setCapability("name",platform+" "+device+" "+version);
capabilities.setCapability("deviceName", device);
capabilities.setCapability("platformVersion",version);
capabilities.setCapability("platformName", platform);
// highlight-next-line
capabilities.setCapability("isRealMobile", false);

// highlight-next-line
capabilities.setCapability("app", "lt://APP123456789"); //Enter your app url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console", true);
capabilities.setCapability("network", false);
// capabilities.setCapability("visual", true);
capabilities.setCapability("devicelog", true);
//capabilities.setCapability("geoLocation", "HK");
```

2. Create `.XML` file in order to run your test and define device capabilities. Please find sample code below for the same.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite thread-count="100" name="Mobile" parallel="tests">

<test name="AppTest 1">
<parameter name="version" value="11"/>
<parameter name="platform" value="Android"/>
<parameter name="device" value="Galaxy S21 Ultra 5G"/>
<classes>
<class name="AndroidApp"/>
</classes>
</test>

<test name="AppTest 2">
<parameter name="version" value="11"/>
<parameter name="platform" value="Android"/>
<parameter name="device" value="Galaxy S21"/>
<classes>
<class name="AndroidApp"/>
</classes>
</test>
</suite>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite thread-count="100" name="Mobile" parallel="tests">

<test name="iOSApp 1">
<parameter name="version" value="14"/>
<parameter name="platform" value="iOS"/>
<parameter name="device" value="iPhone 11"/>
<classes>
<class name="iOSApp"/>
</classes>
</test>

<test name="iOSApp 2">
<parameter name="version" value="14"/>
<parameter name="platform" value="iOS"/>
<parameter name="device" value="iPhone 12 Pro"/>
<classes>
<class name="iOSApp"/>
</classes>
</test>
</suite>
```

## Step 5: Configure YAML in your Test Suite

```yaml
---
version: 0.2
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: android

concurrency: 2

autosplit: true

retryOnFailure: false
maxRetries: 1

appium: true
framework:
name: maven/testng
defaultReports: false
discoveryType: xmltest
flags: ["-Pios-single"]

jobLabel: ['HYP', 'Virtual Device', 'iOS', 'Single Device']
```

## Step 6: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status 🚀
