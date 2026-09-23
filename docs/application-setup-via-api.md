---
id: application-setup-via-api
title: How to Upload Apps on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Upload Apps
description: Upload apps to TestMu AI's Real Device Cloud from your system, a public URL, the REST API, or Firebase for testing on real Android and iOS devices.
keywords:
- upload apps on real device cloud
- real device cloud
- uploading apps
- upload app via api
- upload app via dashboard
- firebase app upload
- appium app upload
url: https://www.testmuai.com/support/docs/application-setup-via-api/
site_name: TestMu AI
slug: application-setup-via-api/
canonical: https://www.testmuai.com/support/docs/application-setup-via-api/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import RealDeviceTag from '@site/src/component/realDevice';
import VirtualDeviceTag from '@site/src/component/virtualDevice';


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
          "name": "How to Upload Apps on TestMu AI",
          "item": `${BRAND_URL}/support/docs/application-setup-via-api/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/application-setup-via-api/"
    },
    "headline": "Perform Operations on your Application via API",
    "description": "This guide will explain how to perform operations with your applications via api for real and virtual devices.",
    "url": "https://www.testmuai.com/support/docs/application-setup-via-api/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "appium",
      "application operations",
      "testmu ai"
    ],
    "proficiencyLevel": "Beginner",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Fetch your Applications for Real Devices (iOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n  \"metaData\": {\n    \"type\": \"ios\",\n    \"total\": 1\n  },\n  \"data\": [\n    {\n      \"app_id\": \"APP100245789181570497850\",\n      \"name\": \"proverbial_ios.ipa\",\n      \"type\": \"ios\",\n      \"updated_at\": \"2022-05-10T11:19:30.000Z\",\n      \"shared\": false,\n      \"source\": \"web-client\"\n    }\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Virtual Device",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n  \"message\": \"Deleted successfully.\"\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Virtual Device",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n    \"data\": {\n        \"imageinjection_ready\": false, //current processing status\n        \"patched_url\": \"\",\n        \"screenshotunblock_ready\": false, //current processing status\n        \"status\": \"success\"\n    },\n    \"status\": \"success\"\n}"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

# How to Upload Apps on <BrandName />
---


Uploading apps on TestMu AI lets you push your Android (`.apk`, `.aab`) or iOS (`.ipa`) build to the Real Device Cloud four ways: from your local system, a public URL, the REST API, or Firebase, then test on real devices.

<BrandName /> lets you upload your Android (`.apk`, `.aab`) or iOS (`.ipa`) application four ways (from your local system, a public URL, the REST API, or Firebase) so you can test on real Android and iOS devices and confirm your app performs across diverse user environments. Pick the method that fits your workflow below; the dashboard is quickest for one-off uploads, while the REST API is best for CI/CD pipelines.


## Upload via the Dashboard
---

The dashboard is the fastest way to upload an app: select a file (or paste a URL) and it is ready to test in seconds.

**From Your System:** Select the **Upload** button to add an application from your system.

**Via URL:** If your app is hosted online, you can also upload it by simply entering its public URL in the designated **Upload via URL** field.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/upload-through-url.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

**Via API:** Upload apps via API onto the real device dashboard. Check out our detailed [app testing APIs documentation](/support/docs/app-testing-apis/#uploading-your-application) to learn how to upload apps via API, or follow the [Upload via the REST API](#upload-via-the-rest-api) section below.

### Real Device Dashboard

Upload directly from the Real Device dashboard and copy the App ID for use in your tests.

- **Access the Dashboard :** Log in to your <BrandName /> account and navigate to the [Real Device dashboard](https://applive.lambdatest.com/app).
- **Initiate the Upload :** Click the Upload button in the dashboard and select your application file from your local system:
  - **For Android :** Ensure the file is in `.apk` or `.aab` format.
  - **For iOS :** Use `.ipa` format.
Wait for the file to upload and process. A success message will indicate when your application is ready.
- **Open App Settings :** Once uploaded, find your application in the list and click on the Settings button.
- **Copy the App ID :** In the settings, locate the App ID field. Copy this ID, as it will be required to reference your app in automated tests or other configurations.

<video class="right-side" width="80%" controls id="vid">
<source src= {require('../assets/images/appium-app/application/real-device-upload.mp4').default} style={{ height: '300px' }} type="video/mp4" />
</video>

:::info
- You can access the [**Virtual Device Dashboard**](https://www.testmuai.com/login/?redirectTo=https://app.lambdatest.com/console/realtime/app).
- For **Virtual Devices**, the steps remain identical to those for Real Devices.
- The only difference is that for **iOS applications**, you must upload a **.zip** file instead of an `.ipa` file, as simulators accept `.zip` format.
:::

### Automation Dashboard

Upload from the App Automation Dashboard and copy the generated `app_url` for your test scripts.

- **Access the App Automation Dashboard :** Log in to your <BrandName /> account and navigate to the [App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).
- **Upload the Application :** Click the Browse File button in the App tab under the Real Device or Virtual Device section. Select your application file from your local system:
  - **Android :** Upload a `.aab` or `.apk` file.
  - **iOS :** Upload an `.ipa` file.
- **Copy the App URL :** After uploading, an `app_url` will be generated (format: `"lt://<app_url>"`). Copy this app_url and use it in your test scripts to identify your application.

<img loading="lazy" src={require('../assets/images/appium-app/application/automation-upload.gif').default} alt="Image" className="doc_img"/>


:::info
- The **App Automation Dashboard** supports both **Real** and **Virtual Devices**.
- To perform testing on Virtual Devices, simply select the **Virtual Device** option during upload. The rest of the flow remains identical.
:::

## Upload via the REST API
---

To test your **iOS** (.ipa file) or **Android** (.apk or .aab file) application on <BrandName />, you can use our public REST APIs. In this section, we have listed all the operations you can perform with your application via APIs or cURL commands for both Virtual and Real Devices.

:::note
The maximum size for application should not exceed 1GB.
:::

:::tip
- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on <BrandName /> by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
:::

### Upload your Application

Pass any of the optional parameters below to control how <BrandName /> stores and shares your uploaded app.

| PARAMETER | EXAMPLE | DESCRIPTION |
|-----------------|-------------|------------|
| `custom_id` | `-F "custom_id="Proverbial_1.0"` | You do not have to remember the `app_URL` and only use the `custom_id` to run your automation on the same app. |
| `storage` | `-F "storage=file"` <br/> DEFAULT: `url` | Used to change the way <BrandName /> stores the link. <br/> Used when we Upload using App URL |
| `visibility` | `-F "visibility=team"` <br/> DEFAULT: `individual` | Used to change the visibility of the application being uploaded. Once the app is uploaded using the `team`, everyone in the organisation can use the same URL to run the tests. |

#### Using App File

Upload a local app file with the `appFile` field for either a real or virtual device.

<Tabs className="docs__val">

<TabItem value="real" label="Real Device" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/Appname.apk"" -F "name="appname""`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="virtual" label="Virtual Device">
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" -F "appFile=@"/Users/macuser/Downloads/Appname.apk"" -F "name="appname""`}
</CodeBlock>
</div>
</TabItem>

</Tabs>

#### Using App URL

Upload a publicly hosted app with the `url` field for either a real or virtual device.

<Tabs className="docs__val">

<TabItem value="real" label="Real Device" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App" -F "custom_id=sampleName" -F "storage=url" -F "visibility=individual"`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="virtual" label="Virtual Device">
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" -F "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App" -F "custom_id=sampleName" -F "storage=url" -F "visibility=individual"`}
</CodeBlock>
</div>
</TabItem>

</Tabs>

- Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789``

:::warning note
The upload time of your application can range from a few seconds to a minute, depending on the size of your application. Therefore, do not interrupt the cURL command request until you receive the response.
:::

### Fetch your Applications for Real Devices

Retrieve a list of the apps you have uploaded for real devices, by platform.

<Tabs className="docs__val">

<TabItem value="android" label="Android" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=android&level=user"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="ios" label="iOS" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=ios&level=user"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

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

<Tabs className="docs__val">

<TabItem value="android" label="Android" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=emulator&level=user"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="ios" label="iOS" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=simulator&level=user"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>


### Deleting your Application

Delete one or more apps by passing their app IDs, for either a real or virtual device.

<Tabs className="docs__val">

<TabItem value="real" label="Real Device" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --location --request DELETE "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/delete" \
--header 'Content-Type: application/json' \
--data-raw '{
    "appIds" : "APPID1,APPID2"
}'
`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="virtual" label="Virtual Device">
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --location --request DELETE "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/delete" \
--header 'Content-Type: application/json' \
--data-raw '{
    "appIds" : "APPID1,APPID2"
}'
`}
</CodeBlock>
</div>
</TabItem>

</Tabs>

Shown below is the response to the above cURL request.

```javascript
{
  "message": "Deleted successfully."
}
```

### Processing check for your Application

Check whether app processing for network logs, image injection, or screenshot unblock is complete.

<Tabs className="docs__val">

<TabItem value="real" label="Real Device" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --location --request POST 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/fetchpatchedapkurl' \
--header 'Authorization: Basic <Basic>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "appId": "APP10160161171698993659206876",
    "networkLogsEnabled": true,
    "imageInjectionEnabled": true,
    "screenshotUnblockEnabled": true
}'`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="virtual" label="Virtual Device">
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --location --request POST 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/fetchpatchedapkurl/virtualDevice' \
--header 'Authorization: Basic <Basic>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "appId": "APP10160161171698993659206876",
    "networkLogsEnabled": true,
    "imageInjectionEnabled": true,
    "screenshotUnblockEnabled": true
}'`}
</CodeBlock>
</div>
</TabItem>

</Tabs>

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
---

**Firebase** is a platform developed by **Google** for creating mobile and web applications. **<BrandName /> cloud platform** provides you various methods to upload your files on a real device like from playstore and appstore. Uploading an app through Firebase is one such method.

### How to Start with Firebase

Before using <BrandName /> you should have a Firebase account where you can upload your app and use later. We will demonstrate the steps required to set up a Firebase account.

1. Visit [**official website**](https://firebase.google.com/) of Firebase if you have not used it earlier and get started.
2. You will find an option to **Add a Project**.
3. After this you will be asked to name your project. We named it **Proverbial**. You would require to add the parent resource connected to your google account. In our case it would be `lambdatest.com`.

<img loading="lazy" src={require('../assets/images/app-automation/parent-source.webp').default} alt="Image"  className="doc_img doc_img_dimension" width="1234" height="286"/>


4. If you desire, you can connect your **Google Analytics Account** to your project.
5. After you have done the above steps successfully you will find yourself redirected to **Firebase Dashboard**. You have successfully set up a Firebase account and created a Project too.

### How to Register App on Firebase Account

After you have created the **Firebase account** and added a project. Now, you need to **Upload/Register your app** in the account so that you can use it further without any link by just logging in to your Firebase account. Let's see how to do so:

1. In the sidebar of the dashboard, you will see a **Build Option**.
2. Go to **Build** and choose **App Distribution** option from the menu.

<img loading="lazy" src={require('../assets/images/app-automation/app-distribution.webp').default} alt="Image"  className="doc_img doc_img_dimension" width="1234" height="564"/>

3. Choose the application type (ios or android) now add the relevant details on the next page as shown below. In the step 3, click next or feel free to add the Firebase SDK to your project.

<img loading="lazy" src={require('../assets/images/app-automation/details.webp').default} alt="Image"  className="doc_img doc_img_dimension" width="1234" height="564"/>

4. We are done with the initial setup, please click on **Continue to Console** now and then get started.
5. We are now at the **App Distribution page**, now just upload your application here!

<img loading="lazy" src={require('../assets/images/app-automation/appd1.png').default} alt="Image"  className="doc_img doc_img_dimension" width="1234" height="564"/>

6. After the app is uploaded, add the relevant testers (these persons will be allowed to use the application through google login). Now, we see that the **Distribution is successful**.

### How to use Firebase App for Real Device App Testing?

After you have uploaded your application to your Firebase account, you can use the same account on a **<BrandName /> Real Device** to retrieve your app and start testing. Below are the steps for the same:

1. Go to [**Real Device App Testing**](https://applive.lambdatest.com/app) on <BrandName /> console and start the test session.
2. After you start the test, go to the **Gmail** or any other mail client on the phone and login to your registered **Google Account**. You would have received an invitation if you added yourself as a tester.

<img loading="lazy" src={require('../assets/images/app-automation/mail1.png').default} alt="Image"  className="doc_img doc_img_dimension" width="1234" height="564"/>

3. Post accepting the invite received you will be taken to Firebase console on the real device where you can see your app with a **download link**.
4. Download the app and **Allow installation of unknown apps** to install the app on the selected real device.
5. Finally you have your application running on a <BrandName /> real device. Continue testing the features of your app.

### How to use Firebase App for App Automation?

After you have uploaded your application to your Firebase account, you can use the same account on a **<BrandName /> Real Device** to retrieve your app and start testing. Below are the steps for the same:

1. Get the Firebase **projects.apps.releases.get** API. You can find it from [Firebase official documentation](https://firebase.google.com/docs/reference/app-distribution/rest/v1/projects.apps.releases/get).

2. It will generate a **Release** response containing a public downloadable URI.

3. You can use this downloadable URI while uploading apps using App URL on the <BrandName /> cloud.


<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"
`}
</CodeBlock>
</div>

4. Now use the App ID generated in your automation scripts to run App Automation tests on real devices.

## Next Steps
---

Continue with these related guides:

- [Run your first Appium test](/support/docs/getting-started-with-appium-testing/)
- [App Automation Dashboard](/support/docs/app-automation-dashboard/)
- [Appium automation capabilities](/support/docs/desired-capabilities-in-appium/)


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        How to Upload Apps on TestMu AI
      </span>
    </li>
  </ul>
</nav>
