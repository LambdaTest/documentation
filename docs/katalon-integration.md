---
id: katalon-integration
title: Katalon Integration with TestMu AI
sidebar_label: Katalon - Real Devices
description: Leverage TestMu AI's cloud mobile devices to run automation testing using Katalon Studio.
keywords:
  - katalon studio
  - integraion
  - test recording
  - automation easy
  - no code automation
  - no code mobile automation
  - gui based mobile automation
  - real devices
url: https://www.testmu.ai/support/docs/katalon-integration
site_name: LambdaTest
slug: katalon-integration
---
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
          "name": "Katalon Integration",
          "item": `${BRAND_URL}/support/docs/katalon-integration/`
        }]
      })
    }}
></script>

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using Katalon Studio with Real Devices
---

[Katalon Studio](https://katalon.com/) is an automation tool for web, API, mobile, and desktop application testing. Katalon Studio offers a flexible automation platform that fits teams and projects of any size, for any purpose. It supports users from creating tests, execution, and reports to seamless integration with the CI/CD ecosystem.

Katalon Studio offers cross-platform testing — from Windows, macOS, and Linux for web automation, to Android and iOS for mobile automation. It also comes with a built-in intuitive interface for codeless automation testing and validating the UI elements of your web application.

This integration between <BrandName /> and Katalon Studio enables you to automate the cross-browser testing process through the Selenium Grid of more than 2,000 real devices.

As a result, you’ll be able to expand your test coverage, analyze and extract insightful test reports, and enhance your team collaboration.

## Objective

---

By the end of this topic, you will know:

1. How can we use Katalon Spy with <BrandName />.
2. How can we record interactions using Katalon Record Mobile and create Automation Scripts.
3. Executing Katalon Scripts using <BrandName />’s real device cloud.

## Prerequisites for Getting Started

---

Before you can start performing App automation using Katalon Studio with Lambdatest, you would need to follow these steps:

- You will need a <BrandName /> username and access key. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [automation dashboard](https://appautomation.lambdatest.com/).
- [Katalon Studio](https://katalon.com/)
- Access to an Android app (.apk) or an iOS app (.ipa).

:::tip

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on <BrandName /> by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - ``lt://APP123456789123456789`` and will be used in the next steps.

:::

## Katalon Spy with <BrandName />

---

### 1. Katalon Studio Web Interface
Once you have started Katalon Studio, load your project/ one of the sample projects provided by Katalon using the [web interface](https://my.katalon.com/home).

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/001.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

Once the project has been created, we can now move to the Katalon Studio on Windows/Mac.

### 2. Katalon Studio on PC
Open the Katalon Studio on the Windows/Mac:

Click on File > Open Project.

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/002.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

### 3. Fetch Project & add credentials
Now we can click on Fetch Project > which will list all the Projects and make a selection.

Add in the Username & Personal Access Token & click Ok.

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/003.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>


Now we can see that there are 2 icons:

The first one is the Katalon Spy and the next one is the Katalon Mobile Record.

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/004.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

### 4. Katalon Spy Kick-start
To start using Katalon Spy with <BrandName />, just click on the Katalon Spy icon dropdown and select Remote Devices.

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/005.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

### 5. Edit Configuration
Click on Edit Configuration

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/006.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

#### a. Hub URL
Now we need to fill in the details for Remote Server URL that will be found on your App Automation Dashboard.

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/007.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

Copy the Hub URL and add it to the Remote Server URL from the App Automation Dashboard.

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/008.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

For the rest of the details, quickly head over to [Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) and now we can proceed with the next steps.

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/009.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

#### b. Desired Capabilities
Add in all the [Desired Capabilities](https://www.lambdatest.com/capabilities-generator/) as shown below, then click Apply and Close.

**Mandatory Capabilities:**
```java
"platformName", "android";
"deviceName", "Pixel 6";
"platformVersion", "12";
"isRealMobile", true;
```

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/010.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

Now for the last step we need the App ID.

Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the <BrandName /> servers using our **REST API**. You need to provide your <BrandName /> **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for the authentication. Make sure to add the path of the **appFile** in the cURL request if required. Here is an example cURL request to upload your app using our REST API:

 **Using App File from System:**

 <div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" `}
</CodeBlock>
</div>

**Using App URL:**

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App" `}
</CodeBlock>
</div>


<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/011.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

<!-- We can easily fetch it from the App Live Dashboard and add it in the Cloud Application ID section:

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/012.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/> -->

### 6. App ID
Now just add in your App ID and click Start

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/013.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

### 7. Run Mobile Spy
The session now starts and it’ll look like this:

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/014.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

We can now begin to select the elements on the screen and Capture them using the Katalon Studio and the captured items will be shown as shown below:

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/015.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>


## Katalon Mobile Recorder with <BrandName />

### 1. Starting off with Katalon Mobile Recorder
To start using Katalon Mobile Recorder with <BrandName />, just click on the Katalon Mobile Recorder the icon dropdown and select Remote Devices.

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/016.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

### 2. Kick Start Mobile Recorder
Now we have already added the Configuration while starting the Katalon Mobile Spy, so we can now just add the Cloud Application ID and click Start.

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/017.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

### 3. Record actions
Now we can start interacting with the device and it will now start to Record all the Actions that we perform on the Device.

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/018.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

### 3. Save Recorded actions
Here’s how it would look like once all the steps are recorded. Post this we can Save this Recorded Steps in the form of a Script and save it.

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/019.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

You’ll now be prompted with where do you want to save this script, select the desired location and save it.

### 4. Saved actions
Once saved, we can now see how it looks like!

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/020.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

Now for the final task, let’s run this saved script.

## Executing Katalon Scripts using <BrandName />’s Cloud Devices

### 1. Run Saved actions
Click on the dropdown next to the Run Test icon on Katalon Studio and click Remote.

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/021.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

### 2. Test Executing
Now we can see that the test starts running. 

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/022.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

### 3. View test execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at [<BrandName /> Automation](https://appautomation.lambdatest.com/build).

<img loading="lazy" src={require('../assets/images/katalon-integration-realDevices/023.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>


## Additional Links

---

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [Automation Capabilities Generator](https://www.lambdatest.com/capabilities-generator/)

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
      Java With Appium
</span>
    </li>
  </ul>
</nav>
