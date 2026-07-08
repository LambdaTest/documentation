# Perform Operations on your Application via GUI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

To test your iOS (.ipa file) or Android (.apk or .aab file) application on TestMu AI, you can upload them directly from the dashboard. In this documentation, we have listed the the ways via which you can upload your application for both Virtual and Real Devices.

## Real Device Dashboard
- **Access the Dashboard :** Log in to your TestMu AI account and navigate to the [Real Device dashboard](https://applive.lambdatest.com/app).
- **Initiate the Upload :** Click the Upload button in the dashboard and select your application file from your local system:
  - **For Android :** Ensure the file is in `.apk` or `.aab` format.
  - **For iOS :** Use `.ipa` format.
Wait for the file to upload and process. A success message will indicate when your application is ready.
- **Open App Settings :** Once uploaded, find your application in the list and click on the Settings button.
- **Copy the App ID :** In the settings, locate the App ID field. Copy this ID, as it will be required to reference your app in automated tests or other configurations.

> Learn how to [Upload Apps on TestMu AI’s Real Device Cloud](/support/docs/upload-apps-on-real-device-cloud/) in detail.

- You can access the [**Virtual Device Dashboard**](https://www.testmuai.com/login/?redirectTo=https://app.lambdatest.com/console/realtime/app).
- For **Virtual Devices**, the steps remain identical to those for Real Devices.
- The only difference is that for **iOS applications**, you must upload a **.zip** file instead of an `.ipa` file, as simulators accept `.zip` format.

## Automation Dashboard
- **Access the App Automation Dashboard :** Log in to your TestMu AI account and navigate to the [App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).
- **Upload the Application :** Click the Browse File button in the App tab under the Real Device or Virtual Device section. Select your application file from your local system:
  - **Android :** Upload a `.aab` or `.apk` file.
  - **iOS :** Upload an `.ipa` file.
- **Copy the App URL :** After uploading, an `app_url` will be generated (format: `"lt://"`). Copy this app_url and use it in your test scripts to identify your application.

- The **App Automation Dashboard** supports both **Real** and **Virtual Devices**.
- To perform testing on Virtual Devices, simply select the **Virtual Device** option during upload — the rest of the flow remains identical.
