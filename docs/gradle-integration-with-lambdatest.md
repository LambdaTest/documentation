---
id: gradle-integration-with-lambdatest
title: Gradle Plugin Integration With LambdaTest
hide_title: true
sidebar_label: Gradle Plugin Integration
description: Control the development process in the tasks of compilation and packaging to testing, deployment, and publishing with LambdaTest integration
keywords:
  - lambdatest integrations
  - push issues to localstack
  - free cross browser testing tool
  - cross platform testing tools
  - check browser compatibility online
  - lambdatest gradle integration
  - integrate gradle with lambdatest
  - create issue in gradle from lambdatest
  - gradle integration with lambdatest
  - bug tracking tools
  - project management tools
url: https://www.lambdatest.com/support/docs/gradle-integration-with-lambdatest/
site_name: LambdaTest
slug: gradle-integration-with-lambdatest/
---

<script type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Gradle Integration",
          "item": "https://www.lambdatest.com/support/docs/gradle-integration-with-lambdatest/"
        }]
      })
    }}
></script>

# Gradle Integration with LambdaTest
***

Gradle is a build automation tool for multi-language software development. It controls the development process in the tasks of compilation and packaging to testing, deployment, and publishing. Supported languages include Java, Kotlin, Groovy, Scala, C/C++, and JavaScript.

## Steps to Setup the Gradle Plugin

**Step 1:** Add LambdaTest Gradle Plugin to the `build.gradle` file.

```bash
plugins {
    id 'io.github.lambdatest.gradle' version '1.0.5'
}

repositories {
    maven {
        url "https://plugins.gradle.org/m2/"
    }
}
```

**Step 2:** Configure LambdaTest Parameters in `build.gradle`

```bash
runLambdaTest {
  username = '<your_lambdatest_username>'
  accessKey = '<your_lambdatest_access_key>'
  appFilePath = '<path_to_your_App_File>'
  testSuiteFilePath = '<path_to_your_Test_Suite>'
  device = '<your_desired_device_for_Testing>'
  isFlutter = true # if you are running flutter dart tests
  appId = "lt://1234343" #provide this only if you have already uploaded the app
  testSuiteId = "lt://1223444" #provide this only if you have already uploaded the app
}
```

## Execution

To run the plugin added in the project's `build.gradle`, use the following command:

```bash
./gradlew runLambdaTest
```

## Supported Capabilities

The LambdaTest Gradle Plugin supports the following capabilities:

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
