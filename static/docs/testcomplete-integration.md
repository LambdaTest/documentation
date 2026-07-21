# TestComplete

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestComplete, from SmartBear, streamlines automated testing across desktop, web, and mobile applications. It goes beyond recording clicks build readable tests with keywords, identify UI elements for reliability, and leverage data-driven testing for comprehensive coverage.

TestMu AI integration with TestComplete lets you perform web and app automation testing across 3000+ real browsers, devices, and OS combinations.

> The TestComplete application will only work on the **Windows** operating system.

## Prerequisites

- TestMu AI account. You can sign up for free.
- TestMu AI [Username and Access Key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/).
- Download TestComplete from its official website and complete the signup process.
- Generate your App Id by uploading it to the TestMu AI Server.

## Steps to Automate your Application

**Step 1:** Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' --form 'name="Android_App"' --form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"'
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk""`}

**Step 2 :** Click on the Record Test button.

**Step 3 :** Enter your project name, select project location and select your desired test type. In this demo we are selecting the Javascript. Click on the Next button.

**Step 4 :** Now select Mobile as your application type and click on Record button.

**Step 5 :** Now your recording will start and a modal window will pop-up to enter the required capabilities in the parameters section as shown below. Click on OK button.

Update your **APP_ID**, **YOUR_LAMBDATEST_USERNAME**, and **YOUR_LAMBDATEST_ACCESS_KEY** while passing the capabilities.

```bash title="Sample code for capabilities"
{
"platformName": "android",
"deviceName": "Galaxy s21 5G",
"lt:options": {
"w3c": true,
"platformName": "android",
"deviceName": "Galaxy s21 5G",
"platformVersion": "12",
"isRealMobile": true,
"app":"<APP_ID>",
"user":"<YOUR_LAMBDATEST_USERNAME>",
"accessKey":"<YOUR_LAMBDATEST_ACCESS_KEY>"
}
}
```

**Step 6 :** Now whatever steps you will perform in the application will get recorded. Click on the stop button when you are completed with your testing.

**Step 7 :** This will start processing the complete recording and within no time-stamp you will be able to check your recordings.

Click on the run button to check your script.

Your test results would be displayed on on the [**TestMu AI App Automation Dashboard**](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

> In case you have any questions, feel free to share them with us through our **24*7 Chat Portal** or by mailing to us on [**support@testmuai.com**](mailto:support@testmuai.com).
