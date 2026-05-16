---
id: gradle-integration-with-lambdatest
title: Gradle Plugin Integration With TestMu AI
hide_title: false
sidebar_label: Gradle Plugin
description: Automate testing at scale! Integrate TestMu AI with Gradle for seamless CI/CD & lightning-fast execution.
keywords:
  - testmu ai integrations
  - push issues to localstack
  - free cross browser testing tool
  - cross platform testing tools
  - check browser compatibility online
  - testmu ai gradle integration
  - integrate gradle with testmu ai
  - create issue in gradle from testmu ai
  - gradle integration with testmu ai
  - bug tracking tools
  - project management tools
url: https://www.testmuai.com/support/docs/gradle-integration-with-testmu/
site_name: TestMu AI
slug: gradle-integration-with-testmu/
canonical: https://www.testmuai.com/support/docs/gradle-integration-with-testmu/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Gradle Integration",
          "item": `${BRAND_URL}/support/docs/gradle-integration-with-testmu/`
        }]
      })
    }}
></script>
Gradle is a build automation tool for multi-language software development. It controls the development process across various tasks, including compilation, packaging, testing, deployment, and publishing. Supported languages include Java, Kotlin, Groovy, Scala, C/C++, and JavaScript.

<div className="ytframe"> 
<div className="youtube" data-embed="as5IU-UjtAg">
    <div className="play-button"></div>
</div>
</div>

## Steps to Setup the Gradle Plugin

### Step 1: Add <BrandName /> Gradle Plugin to the `build.gradle` file

```java title="build.gradle"
plugins {
    id 'io.github.lambdatest.gradle' version '1.0.7'
}

repositories {
    maven {
        url "https://plugins.gradle.org/m2/"
    }
}
```

### Step 2: Configure <BrandName /> Parameters in `build.gradle` file

```java title="build.gradle"
runLambdaTest {
  username = 'YOUR_LAMBDATEST_USERNAME'
  accessKey = 'YOUR_LAMBDATEST_ACCESS_KEY>'
  appFilePath = 'PATH_TO_YOUR_APP_FILE'
  testSuiteFilePath = 'PATH_TO_YOUR_TEST_SUITE'
  device = 'YOUR_DESIRED_DEVICE_FOR_TESTING'
  isFlutter = true //if you are running flutter dart tests
  appId = "lt://1234343" //provide this only if you have already uploaded the app
  testSuiteId = "lt://1223444" //provide this only if you have already uploaded the app
}
```

### Step 3: Configure Upload APK Parameters
With the release of version **`1.0.7`** of the `lambdatest-gradle-plugin`, users now have the option to upload their APK files directly to <BrandName />. Add the following configuration to build.gradle to enable APK upload:

```java title="build.gradle"
uploadApkToLambdaTest {
  username = 'YOUR_LAMBDATEST_USERNAME'
  accessKey = 'YOUR_LAMBDATEST_ACCESS_KEY>'
  appFilePath = 'PATH_TO_YOUR_APP_FILE'
  testSuiteFilePath = 'PATH_TO_YOUR_TEST_SUITE'
}
```
### Step 4: Execute the Plugin
To run the plugin configured in build.gradle, execute the following command:

```bash
./gradlew runLambdaTest
```

If you only want to upload your APK files to <BrandName />, use the following command:

```bash
./gradlew uploadApkToLambdaTest
```

## Post Upload Configuration
Once the upload process is completed, <BrandName /> will return unique IDs for the uploaded files. These IDs can be used in the run<BrandName /> configuration to execute your tests seamlessly.

## Virtual Device Support
The <BrandName /> Gradle plugin now supports virtual devices. To execute tests on a virtual device, set **`isVirtualDevice: true`** in both **`runLambdaTest`** and **`uploadApkToLambdaTest`** configurations. If this flag is not provided, tests will default to running on a real device.

## Supported Capabilities

The <BrandName /> Gradle Plugin supports the following capabilities:

| Capability | Description | Example |
|------------|-------------|---------|
| `appId` | Enter the app id generated while uploading the app. | `appId= lt://APP123456789123456789` |
| `testSuiteID` | Enter the test suite id generated while uploading the test suite. | `testSuiteID= lt://APP123456789123456789` |
| `device` | Enter the name and OS version of the device in "DeviceName-OSVersion" format. | `device= 'Pixel 3 XL-9'` or `device= 'Galaxy S21 Ultra 5G-11'` |
| `video` | Generate a video for all the tests that have run. | `true` or `false` |
| `queueTimeout`| Enter the time in seconds after which you want your build to timeout from queue. | `queueTimeout= 300` |
| `idleTimeout` | Enter the time in seconds for maximum running time on a test in the build. | `idleTimeout= 120`|
| `deviceLog` | Boolean value to generate device logs. | `deviceLog= true` or `false` |
| `build` | Set the name of the Espresso test build. | `My Espresso Build` |
| `geoLocation` | Set the geolocation country code if you want to enable the same in your test. | `FR` |
| `tunnel`, `tunnelName`| Set `tunnel` as `true` and provide the `tunnelName` as needed if you are running a tunnel.  | `tunnel= true` <br /> `tunnelName= NewTunnel`|
| `disableAnimation` | Set `disableAnimation` to `true` if you want to disable animations for espresso tests. <br /> Default value is `false`. | `disableAnimation= false`|
| `clearPackageData` | Set `clearPackageData` to `true` if you want to clear the app data after each test has completed running. <br /> Default value is `false`. | `clearPackageData= false` |
| `singleRunnerInvocation` | Set `singleRunnerInvocation` to `true` if you want to execute test cases together with a single test runner invocation. <br /> This can help significantly speed up the test execution time. By default, each test case is invoked separately. <br /> Default value is `false`.| `singleRunnerInvocation= true` | 
