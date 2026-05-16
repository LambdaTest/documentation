---
id: getting-started-with-flutter-dart-android-automation
title: Flutter Dart Testing On TestMu AI - Android
sidebar_label: Flutter Dart Android
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
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
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
          "name": "Getting Started With Flutter Tests on TestMu AI",
          "item": `${BRAND_URL}/support/docs/getting-started-with-flutter-dart-android-automation/`
        }]
      })
    }}
></script>
<RealDeviceTag value="Real Device" /> 
Flutter, an open-source UI toolkit created by Google, is a popular choice among developers to build natively compiled applications for mobile, web, and desktop from a single codebase. With Dart as its programming language, Flutter enables fast development of beautiful apps with a highly productive, extensible and open-source set of features.

In this guide, we will explore how to run your first Flutter Dart test on an Android device using the <BrandName /> Real Device Cloud. By combining the capabilities of Flutter Dart and <BrandName />, you can ensure the proper functioning of your app across different devices and make your app more reliable and robust.

## Prerequisites for Getting Started

1. Flutter SDK installed on your system
2. You will need a <BrandName /> username and access key. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [automation dashboard](https://appautomation.lambdatest.com/).
3. Access to an android **Sample** app (.apk) and an **Sample Test Suite** app (.apk file).

:::tip

If you do not have any **Flutter Android** app (.apk) and an **Flutter Test Suite** app (.apk) file, you can run your sample tests on <BrandName /> by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/sample-flutter-app.apk) and a sample :link: [Test Suite](https://prod-mobile-artefacts.lambdatest.com/assets/docs/sample-flutter-testsuite.apk).

:::

## Run Your First Test

### Step 1: Create your Android Flutter app and test suite for testing
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

### Step 2: Upload Your Application

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

### Step 3: Uploading Test Suite

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

### Step 4: Executing The Test

#### Basic Authentication

:::info
You will need base64 encoded authentication in order to execute your Espresso automation test suite. You need to enter your username:accesskey **[here](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** in order and click on encode to generate the base64 authentication. Take note of the **base64** encoded authentication which needs to be added in the next step.
:::

<div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

#### Execute Command

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
    <CodeBlock className="lamguage-powershell">

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/flutter/android/build" --header "Content-Type: application/json" --header "Authorization: Basic <Enter the Auth here>" --data-raw "{\"app\" : \"lt://APP_ID\",\"testSuite\": \"lt://APP_ID\",\"device\" :  [\"Pixel 6-12\"], \"deviceLog\": true,\"network\": false,\"build\" : \"Sample-Flutter\"}"
```

  </CodeBlock>
</div>

</TabItem>
</Tabs>

### Step 5: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at [<BrandName /> Automation](https://appautomation.lambdatest.com/build).


## Running Tests in Parallel

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

## Auto-Grant Permissions for Android Apps

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




## Using the Flutter Testing Agent Skill with TestMu AI
***

The [flutter-testing-skill](https://github.com/LambdaTest/agent-skills/tree/main/flutter-testing-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The flutter-testing-skill package includes:

```
flutter-testing-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing Flutter Testing Agent Skill
***

Install a Flutter Testing Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/flutter-testing-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/flutter-testing-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only flutter-testing-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

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
      Flutter Testing 
      </span>
    </li>
  </ul>
</nav>
