# Biometric Authentication on Real Devices

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Biometric Authentication is a security mechanism that utilizes unique biological traits to verify user identities. This feature is commonly implemented in native applications to enhance security while providing a frictionless user experience.

TestMu AI has extended its testing capabilities to include Biometric Authentication support for both iOS and Android real devices. This enhancement enables developers and QA teams to thoroughly evaluate their application's biometric authentication functionality across diverse device ecosystems.








**OS Version:** Biometric authentication is supported only on Android devices with OS version `11` or `above`, and on iOS devices with OS version `13` or `above`.


## Supported Biometric Authentication APIs

Below given is the list of Biometric Authentication APIs which are supported. Please ensure that your app uses these APIs only to enable Biometric Authentication.






    | Supported APIs |
    |----------------|
    | `LAContext`: The LAContext class is used to interact with the local authentication framework.|
    | `evaluatePolicy`: The evaluatePolicy(_:localizedReason:reply:) method of LAContext used to actually perform the biometric authentication, such as verifying a user's face or fingerprint. |
    |`canEvaluatePolicy`: The canEvaluatePolicy(_:error:) method of LAContext that checks whether a specific biometric authentication policy can be evaluated on the device.|







    | Supported APIs |
    |----------------|
    | `BiometricPrompt` class's `authenticate` method from the **AndroidX Biometric library** is used for Biometric authentication on Android devices. 📕For details, please check [AndroidX Biometric Documentation](https://developer.android.com/jetpack/androidx/releases/biometric). |
    | **Android's Native** `BiometricPrompt` API is part of the Android platform and is used for Biometric authentication on Android devices.📕 For details, please check [Android Developers Documentation](https://developer.android.com/reference/android/hardware/biometrics/BiometricPrompt).|





**note**
The OS versions and APIs mentioned above are subject to change as per the latest OS updates and best practices recommended by Android and iOS.


## Biometric Authentication in Real Device App Testing

This feature allows you to simulate successful or failed biometric authentication during real-time app testing. Follow the steps below to enable biometric authentication in your testing session:

**Step 1:** Click on the **Real Devices** > **App Testing**

**Step 2:** Select your required device and upload your application which supports the camera APIs listed above.

**Step 3:** Now, hover over your app and click on the **Settings** icon. Toggle the **Biometric Authentication** option and click on **Save Changes** button. Click on **Start** to run your app on the selected device.


After uploading your application, please wait atleast for 1-2 minutes for the application file patching process to complete.




**Step 4:** Once your session starts and biometric authentication is enabled for the app, use LambdaTest's **Biometric Authentication** pop-up shown below to interact with any instance where biometric authentication is invoked.
