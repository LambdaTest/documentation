# Biometric Authentication

Biometric Authentication is a security process that leverages the unique biological characteristics of individuals to verify their identities. In native applications, it is often used to provide a seamless, secure, and efficient user experience.

TestMu AI now supports Biometric Authentication for real devices (iOS and android). This new feature allows you to test your application's biometric authentication functionality more accurately and ensures your app provides an optimal user experience across a range of devices and platforms.

**OS Version:** Biometric authentication is supported only on Android devices with OS version `11` or `above`, and on iOS devices with OS version `13` or `above`.

## Supported Biometric Authentication APIs

Below given is the list of Biometric Authentication APIs which are supported. Please ensure that your app uses these APIs only to enable Biometric Authentication.

    | Supported APIs |
    |----------------|
    | `LAContext`: The LAContext class is used to interact with the local authentication framework.|
    | `evaluatePolicy`: The evaluatePolicy(_:localizedReason:reply:) method of LAContext used to actually perform the biometric authentication, such as verifying a user's face or fingerprint. |
    |`canEvaluatePolicy`: The canEvaluatePolicy(_:error:) method of LAContext that checks whether a specific biometric authentication policy can be evaluated on the device.|

**note**
  We don’t support apps using IOS Keychain APIs with Biometric access control. For more details [IOS Keychain Documentation](https://developer.apple.com/documentation/localauthentication/accessing-keychain-items-with-face-id-or-touch-id)

    | Supported APIs |
    |----------------|
    | `BiometricPrompt` class's `authenticate` method from the **AndroidX Biometric library** is used for Biometric authentication on Android devices. 📕For details, please check [AndroidX Biometric Documentation](https://developer.android.com/jetpack/androidx/releases/biometric). |
    | **Android's Native** `BiometricPrompt` API is part of the Android platform and is used for Biometric authentication on Android devices.📕 For details, please check [Android Developers Documentation](https://developer.android.com/reference/android/hardware/biometrics/BiometricPrompt).|
    | `BiometricManager` API 📕 For more details [BiometricManager Documentation](https://developer.android.com/reference/android/hardware/biometrics/BiometricManager) |
    | `KeyguardManager`  API 📕 For more details [KeyguardManager Documentation](https://developer.android.com/reference/android/app/KeyguardManager) |

The OS versions and APIs mentioned above are subject to change as per the latest OS updates and best practices recommended by Android and iOS.

## Biometric Authentication in App Automation

### Using desired Capabilities

To enable biometric authentication feature in your automation script, set the capability `enableBiometricsAuthentication` to `true`.

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setcapability("enableBiometricsAuthentication",true)
```

### Using Lambda-Hook

To implement `pass` or `fail` conditions for biometric authentication in your automation script, you have to use our Lambda-hook mentioned below:

```python
driver.execute_script("lambda-biometric-injection=fail")
```

| TYPE | KEY | DATA TYPE| VALUES |
|------|-----|----------|--------|
| capability (for both iOS & android)|enableBiometricsAuthentication|boolean| `true`  OR  `false`
| lambda-hook | lambda-biometric-injection  || `lambda-biometric-injection=fail`  OR  `lambda-biometric-injection=pass` |

- To use the web hook, passing `enableBiometricsAuthentication` capability is mandatory.
- If you plan to use the **Uninstall Lambda Hook**, and then the **Install Lambda Hook** for the same application, biometric authentication can be used afterwards only via the lambda-hook. In this case, the initial capability won't be applicable anymore.
- When biometric capability is `true`, set `autoAcceptAlerts` and `autoDismissAlerts` to `false`. For help, contact [support](https://www.testmuai.com/support/).

> 📕 Check the [documentation for Biometrics Authentication](/support/docs/biometric-authentication-on-real-devices/) feature in Manual App Testing on Real devices
