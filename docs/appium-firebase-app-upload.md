---
id: appium-firebase-app-upload
title: Uploading app via Firebase
hide_title: false
sidebar_label: Uploading app via Firebase
description: Discover how to test an app uploaded on Firebase seamlessly through Appium at LambdaTest! Our guide simplifies your Appium Firebase app upload process for efficient testing!
keywords:
  - lambdatest automation
  - lambdatest appium
  - lambdatest real device
  - firebase
  - lambdatest firebase
  - firebase app upload
  - app automation
image: /assets/images/og-images/Getting-Started-with-Lambdatest-Automation.jpg
url: https://www.lambdatest.com/support/docs/appium-firebase-app-upload/
site_name: Uploading app via Firebase
slug: appium-firebase-app-upload/
---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Getting Started With HyperExecute on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/appium-firebase-app-upload/"
        }]
      })
    }}
></script>

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';

---
<RealDeviceTag value="Real Device" /> 
## Tutorial to test an app uploaded on Firebase

**Firebase** is a platform developed by **Google** for creating mobile and web applications. **LambdaTest cloud platform** provides you various methods to upload your files on a real device like from playstore and appstore. Uploading an app through Firebase is one such method.

## How to Start with Firebase
---

Before using LambdaTest you should have a Firebase account where you can upload your app and use later. We will demonstrate the steps required to set up a Firebase account.

1. Visit [**official website**](https://firebase.google.com/) of Firebase if you have not used it earlier and get started.
2. You will find an option to **Add a Project**.
3. After this you will be asked to name your project. We named it **Proverbial**. You would require to add the parent resource connected to your google account. In our case it would be `lambdatest.com`.

<img loading="lazy" src={require('../assets/images/app-automation/parent-source.webp').default} alt="Image"  className="doc_img doc_img_dimension" width="1234" height="286"/>


4. If you desire, you can connect your **Google Analytics Account** to your project.
5. After you have done the above steps successfully you will find yourself redirected to **Firebase Dashboard**. You have successfully set up a Firebase account and created a Project too.

## How to Register App on Firebase Account
---

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

## How to use Firebase App for Real Device App Testing?
---

After you have uploaded your application to your Firebase account, you can use the same account on a **LambdaTest Real Device** to retrieve your app and start testing. Below are the steps for the same:

1. Go to [**Real Device App Testing**](https://applive.lambdatest.com/app) on LambdaTest console and start the test session.
2. After you start the test, go to the **Gmail** or any other mail client on the phone and login to your registered **Google Account**. You would have received an invitation if you added yourself as a tester. 

<img loading="lazy" src={require('../assets/images/app-automation/mail1.png').default} alt="Image"  className="doc_img doc_img_dimension" width="1234" height="564"/>

3. Post accepting the invite received you will be taken to Firebase console on the real device where you can see your app with a **download link**.
4. Download the app and **Allow installation of unknown apps** to install the app on the selected real device.
5. Finally you have your application running on a LambdaTest real device. Continue testing the features of your app.

## How to use Firebase App for App Automation?
---

After you have uploaded your application to your Firebase account, you can use the same account on a **LambdaTest Real Device** to retrieve your app and start testing. Below are the steps for the same:

1. Get the Firebase **projects.apps.releases.get** API. You can find it from [Firebase official documentation](https://firebase.google.com/docs/reference/app-distribution/rest/v1/projects.apps.releases/get).

2. It will generate a **Release** response containing a public downloadable URI.

3. You can use this downloadable URI while uploading apps using App URL on the LambdaTest cloud.


<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"
`}
</CodeBlock>
</div>

4. Now use the App ID generated in your automation scripts to run App Automation tests on real devices.