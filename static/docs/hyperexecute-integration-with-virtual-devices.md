# Virtual Device Integration with HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This page outlines how to execute your Virtual Device tests on HyperExecute with [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/)

**Note**

Currently, App Automation is available for Emulators and Simulators in the Beta phase, with support for the Appium framework. To use this feature, [Contact Sales](https://www.testmuai.com/contact-us).

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Install [Appium Java Client](https://github.com/appium/java-client).
- Your TestMu AI [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- You have an access to an **Android** app (*.apk* or *.aab* file) or an **iOS** *zip* file (containing *.app* file).

Run your samplе tеsts on HyperExecute using our samplе Android and iOS applications:
* [Samplе Android App](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk)
* [Samplе iOS App](https://prod-mobile-artefacts.lambdatest.com/assets/docs/firefox.zip)

## Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

## Step 2: Setup the CLI in your Test Suite

After cloning / downloading the sample repo, you need to setup the CLI and the environment variables.

### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Upload your Application

Upload your **iOS** application (*.app* file) or **Android** application (*.apk* file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' --form 'name="Android_App"' --form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"'
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' --form 'name="Android_App"' --form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"'
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' --form 'name="Android_App"' --form 'url="https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=Proverbial_App"`}

> Response of above cURL will be a **JSON** object containing the `App URL` of the format `lt://APP123456789123456789`

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
