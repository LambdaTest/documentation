---
id: getting-started-with-flutter-dart-android-automation
title: How to Run Flutter Dart Tests on TestMu AI - Android
sidebar_label: "Flutter Dart Testing"
description: This guide shows you how to run your first Flutter Dart test on 5000+ real Android devices using TestMu AI's Real Device Cloud.
keywords:
- flutter
- testmu ai
- framework on testmu ai
- app testing
- real devices
url: https://www.testmuai.com/support/docs/getting-started-with-flutter-dart-android-automation/
site_name: TestMu AI
slug: getting-started-with-flutter-dart-android-automation/
canonical: https://www.testmuai.com/support/docs/getting-started-with-flutter-dart-android-automation//
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "How to Run Flutter Dart Tests on TestMu AI - Android",
          "item": `${BRAND_URL}/support/docs/getting-started-with-flutter-dart-android-automation/`
        }]
      })
    }}
></script>

Running your first Flutter Dart test on TestMu AI automates Flutter apps on real Android devices in the cloud. Install the Flutter SDK, set credentials, upload the sample app and test suite, then execute and review results on the dashboard.

**Supported on:** Real devices

## Flutter Dart Testing on Android

In this section, we will run your first Flutter Dart test on an **Android** device using the <BrandName /> Real Device Cloud.

### Prerequisites for Getting Started

1. Flutter SDK installed on your system
2. You will need a <BrandName /> username and access key. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [automation dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/).
3. Access to an android **Sample** app (.apk) and an **Sample Test Suite** app (.apk file).

:::tip

If you do not have any **Flutter Android** app (.apk) and an **Flutter Test Suite** app (.apk) file, you can run your sample tests on <BrandName /> by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/sample-flutter-app.apk) and a sample :link: [Test Suite](https://prod-mobile-artefacts.lambdatest.com/assets/docs/sample-flutter-testsuite.apk).

:::

### Run Your First Test

#### Step 1: Create your Android Flutter app and test suite for testing
For testing, you need to build a Flutter app and test suite. You can create Flutter applications and test suites using either Flutter cli or Gradlew. The steps below demonstrate how to create apks with Gradlew.

- Create an instrumentation test file in your application's directory `android/app/src/androidTest/java/com/example/lambdatestSampleApp/`. Replace **com**, **example**, and **lambdatestSampleApp** values with those from your app's package name. 

  ```java title="SampleTest.java"
  package com.example.lambdatestSampleApp;
      import androidx.test.rule.SampleTestRule;
      import dev.flutter.plugins.integration_test.FlutterTestRunner;
      import org.junit.Rule;
      import org.junit.runner.RunWith;
      import com.example.lambdatestSampleApp.Sample;
      @RunWith(FlutterTestRunner.class)
      public class SampleTest {
        @Rule
        public SampleTestRule<Sample> rule = new SampleTestRule<>(Sample.class, true, false);
      }
  ```

- Update your application's `lambdatestSampleApp/android/app/build.gradle` file to use androidx's version of `AndroidJUnitRunner` and include the `androidx` libraries as dependencies.

  ```java title="build.gradle"
  android {
        ...
        defaultConfig {
          ...
          testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
        }
      }
      dependencies {
          testImplementation 'junit:junit:4.12'
          androidTestImplementation 'androidx.test:runner:1.2.0'
          androidTestImplementation 'androidx.test.espresso:espresso-core:3.2.0'
      }
   ```

- Use the following `Gradle` commands to build an instrumentation `test.apk` file(test suite) using the `Sample.java` created in the `androidTest` directory as mentioned in step 1.

  ```java title="Terminal"
  //Go to the android folder which contains the "gradlew" script used for building Android apps from the terminal
  pushd android
  //Build an Android test APK (uses the Sample.java file created in step 1)
  ./gradlew app:assembleAndroidTest
  //Build a debug APK by passing the integration test file
  ./gradlew app:assembleDebug -Ptarget="INTEGRATION_TEST_FILE_PATH"
  //Go back to the root of the project
  popd
  ```

:::info
Avoiding this step might result in **No Tests Ran** issue on the dashboard
:::

To create APKs with optional Flutter parameters, first run the Flutter tests in verbose mode with the flutter cli. This allows you to see the Gradle command used internally to build the APKs.

For example, to use `--no-sound-null-safety` in your tests, run the following command.

```bash
flutter run -v --no-sound-null-safety
```

Next, look for gradlew execution in the logs. The above command generates a gradlew command in the logs that looks something like the following. To build your apk files, replace the parameter `YOUR_APP_PATH` with your actual path of the application in the following command:

```bash
gradlew --full-stacktrace --info -Pverbose=true -Ptarget-platform=android-arm64 -Ptarget=YOUR_APP_PATH/lib/main.dart -Pbase-application-name=android.app.Application -Pdart-obfuscation=false -Pextra-front-end-options=--no-sound-null-safety -Ptrack-widget-creation=true -Ptree-shake-icons=false -Pfilesystem-scheme=org-dartlang-root assembleDebug  
```

#### Step 2: Upload Your Application

Upload your **android** application (.apk file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/sample-flutter-app.apk"' \
--form 'type="flutter-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/winuser/Downloads/proverbial_android.apk"" --form "type=\"flutter-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note

Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789123456789`` and will be used in the last step.

:::

#### Step 3: Uploading Test Suite

Upload your **test suite** (.apk file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/sample-flutter-testsuite.apk"' \
--form 'type="flutter-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/winuser/Downloads/proverbial_android_expressotest.apk"" --form "type=\"flutter-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note

Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789123456789`` and will be used in the next step.

:::

#### Step 4: Executing The Test

##### Basic Authentication

:::info
You will need base64 encoded authentication in order to execute your Flutter automation test suite. You need to enter your username:accesskey **[here](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** in order and click on encode to generate the base64 authentication. Take note of the **base64** encoded authentication which needs to be added in the next step.
:::

<div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

##### Execute Command

Once you have uploaded your app and test suite, you need to you can execute your test by running the following command:

:::info
Make sure to enter your **basic authentication**, **app url** (generated in the first step) and **testSuite url** (generated in the second step) in the below command.
:::

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/flutter/android/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "lt://APP_ID",
    "testSuite": "lt://TestSuite_ID",
    "device" :  ["Galaxy S21 5G-12"],
    "deviceLog": true,
    "network": false,
    "build" : "Sample-Flutter"
}'
```

</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/flutter/android/build" --header "Content-Type: application/json" --header "Authorization: Basic <Enter the Auth here>" --data-raw "{\"app\" : \"lt://APP_ID\",\"testSuite\": \"lt://APP_ID\",\"device\" :  [\"Pixel 6-12\"], \"deviceLog\": true,\"network\": false,\"build\" : \"Sample-Flutter\"}"
```

  </CodeBlock>
</div>

</TabItem>
</Tabs>

#### Step 5: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at [<BrandName /> Automation](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).


### Running Tests in Parallel

You can run tests in parallel on multiple devices by passing the device name in comma separated format in the execute command as show below:

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/flutter/android/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "app_id",
    "testSuite": "testsuite_id",
    "device" :  ["Galaxy S22 5G-12","Galaxy S24-14","Pixel 7-13","Galaxy S10+-10"],
    "queueTimeout": 10800,
    "testTimeout": 900,
    "deviceLog": true,
    "build" : "Sample-Flutter",
}'
```
:::note

Do note that Flutter builds when run in parallel, result in separate builds being generated for each parallel run.

:::

### Auto-Grant Permissions for Android Apps

While testing Android apps, user might need to handle various pop-ups or dialogs asking for permissions like contacts, notifications, photos, etc.

To simplify this process, set Flutter's `autoGrantPermissions` parameter to automatically grant the required permissions based on the [Android manifest](https://developer.android.com/guide/topics/manifest/manifest-intro) in the app’s **.APK** file.Please find a example `cURL` request to enable `autoGrantPermissions`:

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/flutter/android/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "app_id",
    "testSuite": "testsuite_id",
    "device" :  ["Galaxy S22 5G-12"]
    "queueTimeout": 10800,
    "testTimeout": 900,
    "deviceLog": true,
    "build" : "Sample-Flutter",
    "autoGrantPermissions" : true
}'
```



## Flutter Dart Testing on iOS

In this section, we will explore how to run your first Flutter Dart test on an iOS device using the <BrandName /> Real Device Cloud. By combining the capabilities of Flutter Dart and <BrandName />, you can ensure the proper functioning of your app across different devices and make your app more reliable and robust.

### Prerequisites for Getting Started

1. Flutter SDK installed on your system
2. You will need a <BrandName /> username and access key. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [automation dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/).
3. Access to a Flutter **Sample** test suite (.zip).

:::tip

If you do not have any **Flutter iOS** test suite (.zip), you can run your sample tests on <BrandName /> by using our sample :link: [Flutter iOS](https://prod-mobile-artefacts.lambdatest.com/assets/docs/Flutter_iOS.zip).

:::

### Run Your First Test

#### Step 1: Upload Your Test Suite

Upload your **iOS** test suite (.zip file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/flutter-ios.zip"' \
--form 'type="flutter-ios"'
--form 'name="Sample App"'
--form 'custom_id="Sample"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/winuser/Downloads/flutter-ios.zip"" --form "type=\"flutter-ios\"" --form "name=\"Sample App\"" --form "custom_id=\"Sample\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note

Response of above cURL will be a **JSON** object containing the `App id` of the format - ``lt://APP123456789123456789123456789`` and will be used in the last step.

:::

#### Step 2: Executing The Test

##### Basic Authentication

:::info
You will need base64 encoded authentication in order to execute your Flutter automation test suite. You need to enter your username:accesskey **[here](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** in order and click on encode to generate the base64 authentication. Take note of the **base64** encoded authentication which needs to be added in the next step.
:::

<div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

##### Execute Command

Once you have uploaded your test suite, you can execute your test by running the following command:

:::info
Make sure to enter your **basic authentication** and **app id** (generated in the first step) in the below command.
:::

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/flutter/ios/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "testSuite": "lt://App_id",
    "device": ["iPhone.*-16"],
    "video": true,
    "deviceLog": true,
    "queueTimeout": 9000,
    "network": true,
    "build": "Flutter iOS"
}'
```

</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">

```powershell
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/flutter/ios/build" --header "Content-Type: application/json" --header "Authorization: Basic <Enter the Auth here>" --data-raw "{\"testSuite\": \"lt://APP_ID\",\"device\" :  [\"iPhone 14-16\"], \"video\": true, \"deviceLog\": true, \"queueTimeout\" : \"9000\",\"idleTimeout\" : \"600\",\"network\": true,\"build\" : \"Flutter iOS\"}"
```

  </CodeBlock>
</div>

</TabItem>
</Tabs>

#### Step 3: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at [<BrandName /> Automation](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/builds).

### Capabilities Supported

The following capabilities are supported:

1. **testSuite:** Enter the app id generated while uploading the app. Example:`lt://APP123456789123456789123456789`
2. **device:** Enter the name and os version of the device in "DeviceName-OSVersion" format. Example: `iPhone 14-16` or `iPhone 15 Pro-17`. You can also choose to use regular expression for device name such as `iPhone.*-16`.
3. **video:** Generate video for all the tests that have run. Example: `true`.
4. **queueTimeout:** Enter the time in seconds for total execution time of the build. Example: `9000`. Minimum queueTimeout: `1800`, Maximum queueTimeout: `10800`
5. **network:** Boolean value to generate network logs. Example: `"network": true`.  
6. **build:** Set the name of the Flutter iOS test build. Example: `My Flutter iOS`.
7. **deviceLog:** Boolean value to generate device logs. Example: `true`.  
8. **tunnel:** Boolean value to run build via Tunnel. Example: `true`.  
9. **tunnelName:** Name of the tunnel to be used in conjunction with `tunnel` capability.  
10. **region:** String to device the region from which device will be allocated. Example - `eu`,`us`,`ap`.
11. **gpsLocation:** This capability should be defined to override the device’s default GPS coordinates and should be provided as a comma-separated string. Example: `"location": {"lat": "-50","long": "150.028333"}`.
12. **enableBluetooth:** This capability is used to enable the bluetooth functionality during the session. Example: `enableBluetooth: true`

:::note
Ensure that the latitude is between -90 and 90, and the longitude is between -180 and 180. Otherwise, an error will occur like "Invalid GPS location: Latitude must be between -90 and +90, Longitude must be between -180 and +180."
:::


### Running Tests in Parallel on iOS

You can run tests in parallel on multiple devices by passing the device name in comma separated format in the execute command as show below:

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/flutter/ios/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "testSuite": "lt://App_id",
    "device": ["iPhone.*-16","iPhone 14-16","iPhone 15-17"],
    "video": true,
    "deviceLog": true,
    "queueTimeout": 9000,
    "network": true,
    "build": "Flutter iOS - Parallel"
}'
```

:::tip

Do note that Flutter builds when run in parallel, result in separate builds being generated for each parallel run.

:::

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        How to Run Flutter Dart Tests on TestMu AI - Android
      </span>
    </li>
  </ul>
</nav>
