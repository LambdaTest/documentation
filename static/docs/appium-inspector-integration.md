# How to Use Appium Inspector on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Appium Inspector on TestMu AI is a GUI tool for inspecting mobile app elements on real Android and iOS devices. Upload your app to get a unique app URL, set desired capabilities, then interact with elements and run Appium commands.

## Introduction

A **GUI inspector** for mobile apps and more, powered by a (separately installed) **Appium server**. Appium Inspector is an Appium client (like WebdriverIO, Appium's Java client, Appium's Python client, etc) with a User Interface. We can use the interface for specifying Appium Server Version, Setting Capabilities. Once the Appium Server is up & running with the App, we can interact with elements and run other Appium Commands.

By the end of this topic, you will be able to:

1. Upload your Application to TestMu AI Server & Receive the Unique App URL.
2. Run the Test using the Unique App URL.

Please download the latest version of Appium Inspector - :link: [Official Appium Inspector](https://github.com/appium/appium-inspector/releases).

## Starting an Appium Session

### Step 1: Upload your Application.

Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \\
--form 'name="Android_App"' \\
--form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"'
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk""`}

**Using App URL:**

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/upload/realDevice" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=Proverbial_App"`}

{`curl --location --request POST "https://manual-api.lambdatest.com/app/upload/realDevice" -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=test" --data-urlencode "custom_id=my_app"`}

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

### Step 2: Start a Session on Appium Inspector

Start the Appium Inspector & Select TestMu AI from the list of Cloud Test Providers.

### Step 3: Configure your Credentials

Enter in your UserName & Access Key. You may find the credentials available on [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/)

### Step 4: Configure Desired Capabilities & Start the Session

Configure TestMu AI capabilities in the desired capabilities tab on Appium inspector. Use the unique app URL obtained in Step 1 to set the app capability Value.For more details, please refer to our guide on [Desired Capabilities in Appium](/support/docs/desired-capabilities-in-appium/).

Alternatively, we can also go to our [capabilities generator](https://www.testmuai.com/capabilities-generator/) and generate the Capability Representation using GUI.

Once this is complete, you can now run the test by clicking on start session. Once you start the session, a video recording along with detailed information and logs of the test run will be available on the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Attaching to a running session in Appium Inspector

### Step 1: Configure your Credentials
After you have added your credentials from [Step 2 of Starting an Appium Session](/support/docs/appium-inspector-integration/#attaching-to-a-running-session-in-appium-inspector), click on Attach to Session.

### Step 2: Run a session
Start an App Automation that you'd like to attach to.

### Step 3: Choose the session to attach
Click on the refresh button and choose a session to attach to.

### Step 4: Attach to Session
Once you have selected a session, click on Attach to Session.

### Step 5: Viewing the session
We have now successfully attached to the session and can see & perform operations as well.

> Got any questions?
> Please reach out at our **24x7 Chat Support** or you could also mail us at [support@testmuai.com](https://support.lambdatest.com/).
