# Using Katalon Studio with Real Devices

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

[Katalon Studio](https://katalon.com/) is an automation tool for web, API, mobile, and desktop application testing. Katalon Studio offers a flexible automation platform that fits teams and projects of any size, for any purpose. It supports users from creating tests, execution, and reports to seamless integration with the CI/CD ecosystem.

Katalon Studio offers cross-platform testing, from Windows, macOS, and Linux for web automation, to Android and iOS for mobile automation. It also comes with a built-in intuitive interface for codeless automation testing and validating the UI elements of your web application.

This integration between TestMu AI and Katalon Studio enables you to automate the cross-browser testing process through the Selenium Grid of more than 2,000 real devices.

As a result, you’ll be able to expand your test coverage, analyze and extract insightful test reports, and enhance your team collaboration.

## Objective

By the end of this topic, you will know:

1. How can we use Katalon Spy with TestMu AI.
2. How can we record interactions using Katalon Record Mobile and create Automation Scripts.
3. Executing Katalon Scripts using TestMu AI’s real device cloud.

## Prerequisites for Getting Started

Before you can start performing App automation using Katalon Studio with Lambdatest, you would need to follow these steps:

- You will need a TestMu AI username and access key. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [automation dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/).
- [Katalon Studio](https://katalon.com/)
- Access to an Android app (.apk) or an iOS app (.ipa).

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - ``lt://APP123456789123456789`` and will be used in the next steps.

## Katalon Spy with TestMu AI

### 1. Katalon Studio Web Interface
Once you have started Katalon Studio, load your project/ one of the sample projects provided by Katalon using the [web interface](https://my.katalon.com/home).

Once the project has been created, we can now move to the Katalon Studio on Windows/Mac.

### 2. Katalon Studio on PC
Open the Katalon Studio on the Windows/Mac:

Click on File > Open Project.

### 3. Fetch Project & add credentials
Now we can click on Fetch Project > which will list all the Projects and make a selection.

Add in the Username & Personal Access Token & click Ok.

Now we can see that there are 2 icons:

The first one is the Katalon Spy and the next one is the Katalon Mobile Record.

### 4. Katalon Spy Kick-start
To start using Katalon Spy with TestMu AI, just click on the Katalon Spy icon dropdown and select Remote Devices.

### 5. Edit Configuration
Click on Edit Configuration

#### a. Hub URL
Now we need to fill in the details for Remote Server URL that will be found on your App Automation Dashboard.

Copy the Hub URL and add it to the Remote Server URL from the App Automation Dashboard.

For the rest of the details, quickly head over to [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) and now we can proceed with the next steps.

#### b. Desired Capabilities
Add in all the [Desired Capabilities](https://www.testmuai.com/capabilities-generator/) as shown below, then click Apply and Close.

**Mandatory Capabilities:**
```java
"platformName", "android";
"deviceName", "Pixel 6";
"platformVersion", "12";
"isRealMobile", true;
```

Now for the last step we need the App ID.

Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the TestMu AI servers using our **REST API**. You need to provide your TestMu AI **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for the authentication. Make sure to add the path of the **appFile** in the cURL request if required. Here is an example cURL request to upload your app using our REST API:

 **Using App File from System:**

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" `}

**Using App URL:**

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App" `}

### 6. App ID
Now just add in your App ID and click Start

### 7. Run Mobile Spy
The session now starts and it’ll look like this:

We can now begin to select the elements on the screen and Capture them using the Katalon Studio and the captured items will be shown as shown below:

## Katalon Mobile Recorder with TestMu AI

### 1. Starting off with Katalon Mobile Recorder
To start using Katalon Mobile Recorder with TestMu AI, just click on the Katalon Mobile Recorder the icon dropdown and select Remote Devices.

### 2. Kick Start Mobile Recorder
Now we have already added the Configuration while starting the Katalon Mobile Spy, so we can now just add the Cloud Application ID and click Start.

### 3. Record actions
Now we can start interacting with the device and it will now start to Record all the Actions that we perform on the Device.

### 3. Save Recorded actions
Here’s how it would look like once all the steps are recorded. Post this we can Save this Recorded Steps in the form of a Script and save it.

You’ll now be prompted with where do you want to save this script, select the desired location and save it.

### 4. Saved actions
Once saved, we can now see how it looks like!

Now for the final task, let’s run this saved script.

## Executing Katalon Scripts using TestMu AI’s Cloud Devices

### 1. Run Saved actions
Click on the dropdown next to the Run Test icon on Katalon Studio and click Remote.

### 2. Test Executing
Now we can see that the test starts running.

### 3. View test execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at [TestMu AI Automation](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Additional Links

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [Automation Capabilities Generator](https://www.testmuai.com/capabilities-generator/)
