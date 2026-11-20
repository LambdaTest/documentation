---
id: espresso-appcircle
title: How to integrate your Espresso tests with Appcircle
hide_title: true
sidebar_label: Appcircle - Espresso
description: Integrate TestMu AI with Appcircle CI/CD to run Espresso tests on a wide range of real Android devices directly from your Appcircle build workflow.
keywords:
- testmu ai appcircle
- appcircle with testmu ai
- espresso testing with appcircle
- espresso appcircle
- app testing with appcircle
- app automation appcircle
- appcircle ci/cd
url: https://www.testmuai.com/support/docs/appcircle-integration/
site_name: TestMu AI
slug: appcircle-integration/
canonical: https://www.testmuai.com/support/docs/appcircle-integration/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/appcircle-integration/"
    },
    "headline": "How to integrate your Espresso tests with Appcircle",
    "description": "Integrate TestMu AI with Appcircle CI/CD to run Espresso tests on a wide range of real Android devices directly from your Appcircle build workflow.",
    "url": "https://www.testmuai.com/support/docs/appcircle-integration/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "testmu ai appcircle",
      "appcircle with testmu ai",
      "espresso testing with appcircle"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-11-12T12:00:00+03:00"
  }) }}
/>

# Running Espresso Tests In Appcircle
***

[Appcircle](https://appcircle.io) is an enterprise-grade mobile DevOps platform that automates the build, test, signing, and distribution of mobile apps. It can be used as a cloud service or self-hosted, and provides ready-made workflow steps for every stage of the mobile delivery pipeline.

Using <BrandName /> with Appcircle, you can run [Espresso tests](https://www.testmuai.com/espresso-automation-testing) of your Android apps on an [online device farm](https://www.testmuai.com/online-device-farm) of real Android devices as part of every Appcircle build. The Appcircle workflow step uploads your app and test suite APKs to <BrandName />, starts the Espresso build, waits for the execution to complete, and downloads the JUnit test reports back to your Appcircle build.

## Prerequisites
***

1. Ensure you have access to <BrandName /> [real device cloud](https://www.testmuai.com/real-device-cloud). If not, please [contact sales](https://www.testmuai.com/contact-us).

2. Your <BrandName /> **Username** and **Access Key**. You can find them in your <BrandName /> [account settings](https://accounts.lambdatest.com/security) under **Password & Security**.

3. An [Appcircle](https://my.appcircle.io) account.

4. An Android project with Espresso tests, connected to an Appcircle **Build Profile** from GitHub, GitLab, Bitbucket, Azure DevOps or any other Git provider.

:::info Note
The workflow step is listed in Appcircle as **LambdaTest App Automate - Espresso**. It works with your <BrandName /> credentials as is.
:::

## Step 1: Store Your <BrandName /> Credentials In Appcircle
***

Keep your <BrandName /> credentials out of your source code by storing them as secret environment variables in Appcircle.

1. In Appcircle, go to **Build > Environment Variables** and click **Add New Group**. Give the group a name, for example `TESTMU_CREDENTIALS`.

2. Add the following variables to the group and enable the **Secret** option for both:

| Variable Name | Value |
| ------------- | ----- |
| `AC_LT_USERNAME` | Your <BrandName /> username |
| `AC_LT_ACCESS_KEY` | Your <BrandName /> access key |

3. Open your **Build Profile**, go to **Configuration > Env. Variables**, and select the group you created.

> For more details, refer to the Appcircle [environment variables documentation](https://docs.appcircle.io/environment-variables).

## Step 2: Add The Espresso Step To Your Workflow
***

1. Open your **Build Profile** and go to **Workflows**. Select the workflow you want to use and click **Manage Workflow**.

2. Make sure the workflow contains the [**Android Build for UI Testing**](https://docs.appcircle.io/workflows/android-specific-workflow-steps/android-build-for-ui-testing) step. This step builds both the app APK and the test (`*androidTest.apk`) APK that <BrandName /> needs to run Espresso tests.

3. Search for **LambdaTest App Automate - Espresso** in the step list, and drag it right after the **Android Build for UI Testing** step.

<img loading="lazy" src={require('../assets/images/appcircle-integration/workflow-steps.webp').default} alt="Appcircle workflow with the LambdaTest App Automate - Espresso step" width="1440" height="900"  className="doc_img img_center"/>

## Step 3: Configure The Step Inputs
***

Click the **LambdaTest App Automate - Espresso** step to configure its inputs.

<img loading="lazy" src={require('../assets/images/appcircle-integration/step-inputs.webp').default} alt="LambdaTest App Automate - Espresso step inputs in Appcircle" width="1440" height="900"  className="doc_img img_center"/>

| Input | Default Value | Description | Required |
| ----- | ------------- | ----------- | -------- |
| <BrandName /> username | `$AC_LT_USERNAME` | Username of your <BrandName /> account. | Yes |
| <BrandName /> access key | `$AC_LT_ACCESS_KEY` | Access key of your <BrandName /> account. | Yes |
| Path of the APK | `$AC_APK_PATH` | Full path of the app APK. Filled automatically by the **Android Build for UI Testing** step. | Yes |
| Path of the testSuite APK | `$AC_TEST_APK_PATH` | Full path of the `*androidTest.apk` file. Filled automatically by the **Android Build for UI Testing** step. | Yes |
| Build Payload | See below | JSON payload that defines the Espresso build on <BrandName />, such as the devices and timeouts. | No |
| Timeout | `600` | Maximum time in seconds the step waits for the test execution to finish. | Yes |

### Build Payload

The **Build Payload** is the request body sent to the <BrandName /> Espresso build API. The step uploads your APKs and replaces `AC_LT_APP_URL` and `AC_LT_TEST_URL` with the generated app and test suite URLs automatically, so you only need to set the remaining capabilities.

```json
{
  "app": "AC_LT_APP_URL",
  "testSuite": "AC_LT_TEST_URL",
  "device": ["Galaxy S21 5G-12"],
  "queueTimeout": 10800,
  "IdleTimeout": 150,
  "network": false,
  "deviceLog": true,
  "build": "Proverbial-Espresso"
}
```

To run your tests on more than one device, add them to the `device` array, for example `["Galaxy S21 5G-12", "Pixel 6-12"]`. A separate build is started for each device and the step tracks all of them in parallel.

:::info

[Espresso Testing On <BrandName />](/support/docs/getting-started-with-espresso-testing/)

[Automation Capabilities Generator For Selenium and Appium](https://www.testmuai.com/capabilities-generator/)
:::

Click **Save** to save the step configuration.

## Step 4: Run The Build And View The Results
***

1. Start a new build for your branch in Appcircle. The step uploads the APKs, starts the Espresso build on <BrandName />, and polls its status until it finishes or the timeout is reached.

2. When the execution is completed, the JUnit XML report of each device is downloaded to `$AC_OUTPUT_DIR/test-results`, and its path is exported as the `$AC_LT_TEST_RESULT_PATH` output variable.

3. Add the [**Test Reports for Android**](https://docs.appcircle.io/workflows/android-specific-workflow-steps/test-reports-for-android) step after the Espresso step to display the results in the Appcircle build **Test Reports** tab.

4. Visit the <BrandName /> [App Automation Dashboard](https://appautomation.lambdatest.com/build) to view your test results with video recordings, device logs, and network logs.

:::tip
The source code of the Appcircle step is available on [GitHub](https://github.com/appcircleio/appcircle-lambdatest-espresso-app-automate-component). For more details, refer to the [Appcircle documentation](https://docs.appcircle.io/workflows/android-specific-workflow-steps/lambdatest-app-automate-espresso).
:::
