# How to Upload Apps on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Uploading apps on TestMu AI lets you push your Android (`.apk`, `.aab`) or iOS (`.ipa`) build to the Real Device Cloud four ways: from your local system, a public URL, the REST API, or Firebase, then test on real devices.

TestMu AI lets you upload your Android (`.apk`, `.aab`) or iOS (`.ipa`) application four ways (from your local system, a public URL, the REST API, or Firebase) so you can test on real Android and iOS devices and confirm your app performs across diverse user environments. Pick the method that fits your workflow below; the dashboard is quickest for one-off uploads, while the REST API is best for CI/CD pipelines.

## Upload via the Dashboard

The dashboard is the fastest way to upload an app: select a file (or paste a URL) and it is ready to test in seconds.

**From Your System:** Select the **Upload** button to add an application from your system.

**Via URL:** If your app is hosted online, you can also upload it by simply entering its public URL in the designated **Upload via URL** field.

**Via API:** Upload apps via API onto the real device dashboard. Check out our detailed [app testing APIs documentation](/support/docs/app-testing-apis/#uploading-your-application) to learn how to upload apps via API, or follow the [Upload via the REST API](#upload-via-the-rest-api) section below.

### Real Device Dashboard

Upload directly from the Real Device dashboard and copy the App ID for use in your tests.

- **Access the Dashboard :** Log in to your TestMu AI account and navigate to the [Real Device dashboard](https://applive.lambdatest.com/app).
- **Initiate the Upload :** Click the Upload button in the dashboard and select your application file from your local system:
  - **For Android :** Ensure the file is in `.apk` or `.aab` format.
  - **For iOS :** Use `.ipa` format.
Wait for the file to upload and process. A success message will indicate when your application is ready.
- **Open App Settings :** Once uploaded, find your application in the list and click on the Settings button.
- **Copy the App ID :** In the settings, locate the App ID field. Copy this ID, as it will be required to reference your app in automated tests or other configurations.

- You can access the [**Virtual Device Dashboard**](https://www.testmuai.com/login/?redirectTo=https://app.lambdatest.com/console/realtime/app).
- For **Virtual Devices**, the steps remain identical to those for Real Devices.
- The only difference is that for **iOS applications**, you must upload a **.zip** file instead of an `.ipa` file, as simulators accept `.zip` format.

### Automation Dashboard

Upload from the App Automation Dashboard and copy the generated `app_url` for your test scripts.

- **Access the App Automation Dashboard :** Log in to your TestMu AI account and navigate to the [App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).
- **Upload the Application :** Click the Browse File button in the App tab under the Real Device or Virtual Device section. Select your application file from your local system:
  - **Android :** Upload a `.aab` or `.apk` file.
  - **iOS :** Upload an `.ipa` file.
- **Copy the App URL :** After uploading, an `app_url` will be generated (format: `"lt://"`). Copy this app_url and use it in your test scripts to identify your application.

- The **App Automation Dashboard** supports both **Real** and **Virtual Devices**.
- To perform testing on Virtual Devices, simply select the **Virtual Device** option during upload. The rest of the flow remains identical.

## Upload via the REST API

To test your **iOS** (.ipa file) or **Android** (.apk or .aab file) application on TestMu AI, you can use our public REST APIs. In this section, we have listed all the operations you can perform with your application via APIs or cURL commands for both Virtual and Real Devices.

The maximum size for application should not exceed 1GB.

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

### Upload your Application

Pass any of the optional parameters below to control how TestMu AI stores and shares your uploaded app.

| PARAMETER | EXAMPLE | DESCRIPTION |
|-----------------|-------------|------------|
| `custom_id` | `-F "custom_id="Proverbial_1.0"` | You do not have to remember the `app_URL` and only use the `custom_id` to run your automation on the same app. |
| `storage` | `-F "storage=file"`  DEFAULT: `url` | Used to change the way TestMu AI stores the link.  Used when we Upload using App URL |
| `visibility` | `-F "visibility=team"`  DEFAULT: `individual` | Used to change the visibility of the application being uploaded. Once the app is uploaded using the `team`, everyone in the organisation can use the same URL to run the tests. |

#### Using App File

Upload a local app file with the `appFile` field for either a real or virtual device.

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/Appname.apk"" -F "name="appname""`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" -F "appFile=@"/Users/macuser/Downloads/Appname.apk"" -F "name="appname""`}

#### Using App URL

Upload a publicly hosted app with the `url` field for either a real or virtual device.

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App" -F "custom_id=sampleName" -F "storage=url" -F "visibility=individual"`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" -F "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App" -F "custom_id=sampleName" -F "storage=url" -F "visibility=individual"`}

- Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789``

**note**
The upload time of your application can range from a few seconds to a minute, depending on the size of your application. Therefore, do not interrupt the cURL command request until you receive the response.

### Fetch your Applications for Real Devices

Retrieve a list of the apps you have uploaded for real devices, by platform.

  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=android&level=user"`}

  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=ios&level=user"`}

Shown below is the response to the above cURL request.

```javascript
{
  "metaData": {
    "type": "ios",
    "total": 1
  },
  "data": [
    {
      "app_id": "APP100245789181570497850",
      "name": "proverbial_ios.ipa",
      "type": "ios",
      "updated_at": "2022-05-10T11:19:30.000Z",
      "shared": false,
      "source": "web-client"
    }
  ]
}
```

### Fetch your Applications for Virtual Devices

Retrieve a list of the apps you have uploaded for virtual devices, by platform.

  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=emulator&level=user"`}

  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=simulator&level=user"`}

### Deleting your Application

Delete one or more apps by passing their app IDs, for either a real or virtual device.

{`curl --location --request DELETE "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/delete" \
--header 'Content-Type: application/json' \
--data-raw '{
    "appIds" : "APPID1,APPID2"
}'
`}

{`curl --location --request DELETE "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/delete" \
--header 'Content-Type: application/json' \
--data-raw '{
    "appIds" : "APPID1,APPID2"
}'
`}

Shown below is the response to the above cURL request.

```javascript
{
  "message": "Deleted successfully."
}
```

### Processing check for your Application

Check whether app processing for network logs, image injection, or screenshot unblock is complete.

{`curl --location --request POST 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/fetchpatchedapkurl' \
--header 'Authorization: Basic ' \
--header 'Content-Type: application/json' \
--data-raw '{
    "appId": "APP10160161171698993659206876",
    "networkLogsEnabled": true,
    "imageInjectionEnabled": true,
    "screenshotUnblockEnabled": true
}'`}

{`curl --location --request POST 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/fetchpatchedapkurl/virtualDevice' \
--header 'Authorization: Basic ' \
--header 'Content-Type: application/json' \
--data-raw '{
    "appId": "APP10160161171698993659206876",
    "networkLogsEnabled": true,
    "imageInjectionEnabled": true,
    "screenshotUnblockEnabled": true
}'`}

The payload allows you to check the processing status for specific features. If the **patched_url** is empty, the processing is still in progress. To check if the processing for image injection or screenshot unblock is complete, pass either **imageInjectionEnabled** or **screenshotUnblockEnabled** as `true` based on the feature you are testing.

```javascript
{
    "data": {
        "imageinjection_ready": false, //current processing status
        "patched_url": "",
        "screenshotunblock_ready": false, //current processing status
        "status": "success"
    },
    "status": "success"
}
```

## Upload from Firebase

**Firebase** is a platform developed by **Google** for creating mobile and web applications. **TestMu AI cloud platform** provides you various methods to upload your files on a real device like from playstore and appstore. Uploading an app through Firebase is one such method.

### How to Start with Firebase

Before using TestMu AI you should have a Firebase account where you can upload your app and use later. We will demonstrate the steps required to set up a Firebase account.

1. Visit [**official website**](https://firebase.google.com/) of Firebase if you have not used it earlier and get started.
2. You will find an option to **Add a Project**.
3. After this you will be asked to name your project. We named it **Proverbial**. You would require to add the parent resource connected to your google account. In our case it would be `lambdatest.com`.

4. If you desire, you can connect your **Google Analytics Account** to your project.
5. After you have done the above steps successfully you will find yourself redirected to **Firebase Dashboard**. You have successfully set up a Firebase account and created a Project too.

### How to Register App on Firebase Account

After you have created the **Firebase account** and added a project. Now, you need to **Upload/Register your app** in the account so that you can use it further without any link by just logging in to your Firebase account. Let's see how to do so:

1. In the sidebar of the dashboard, you will see a **Build Option**.
2. Go to **Build** and choose **App Distribution** option from the menu.

3. Choose the application type (ios or android) now add the relevant details on the next page as shown below. In the step 3, click next or feel free to add the Firebase SDK to your project.

4. We are done with the initial setup, please click on **Continue to Console** now and then get started.
5. We are now at the **App Distribution page**, now just upload your application here!

6. After the app is uploaded, add the relevant testers (these persons will be allowed to use the application through google login). Now, we see that the **Distribution is successful**.

### How to use Firebase App for Real Device App Testing?

After you have uploaded your application to your Firebase account, you can use the same account on a **TestMu AI Real Device** to retrieve your app and start testing. Below are the steps for the same:

1. Go to [**Real Device App Testing**](https://applive.lambdatest.com/app) on TestMu AI console and start the test session.
2. After you start the test, go to the **Gmail** or any other mail client on the phone and login to your registered **Google Account**. You would have received an invitation if you added yourself as a tester.

3. Post accepting the invite received you will be taken to Firebase console on the real device where you can see your app with a **download link**.
4. Download the app and **Allow installation of unknown apps** to install the app on the selected real device.
5. Finally you have your application running on a TestMu AI real device. Continue testing the features of your app.

### How to use Firebase App for App Automation?

After you have uploaded your application to your Firebase account, you can use the same account on a **TestMu AI Real Device** to retrieve your app and start testing. Below are the steps for the same:

1. Get the Firebase **projects.apps.releases.get** API. You can find it from [Firebase official documentation](https://firebase.google.com/docs/reference/app-distribution/rest/v1/projects.apps.releases/get).

2. It will generate a **Release** response containing a public downloadable URI.

3. You can use this downloadable URI while uploading apps using App URL on the TestMu AI cloud.

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"
`}

4. Now use the App ID generated in your automation scripts to run App Automation tests on real devices.

## Next Steps

Continue with these related guides:

- [Run your first Appium test](/support/docs/getting-started-with-appium-testing/)
- [App Automation Dashboard](/support/docs/app-automation-dashboard/)
- [Appium automation capabilities](/support/docs/desired-capabilities-in-appium/)
