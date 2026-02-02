---
id: install-apps-from-firebase
title: How to Test Apps Installed via Firebase?
hide_title: true
sidebar_label: Firebase
description: Learn how to test apps installed from the firebase on TestMu AI for optimal performance on real iOS devices.
keywords:
- install apps from firebase
url: https://www.testmuai.com/support/docs/install-apps-from-firebase/
site_name: LambdaTest
slug: install-apps-from-firebase/
canonical: https://www.testmuai.com/support/docs/install-apps-from-firebase/
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
          "name": "How to Test Apps Installed via App Center?",
          "item": `${BRAND_URL}/support/docs/install-apps-from-firebase/`
        }]
      })
    }}
></script>
# How to Test Apps Installed via Firebase?
<BrandName /> offers real device testing capabilities, enabling developers and QA teams to test on actual Android and iOS devices in the cloud. With Firebase App Distribution, you can easily configure your Firebase account within <BrandName /> to seamlessly distribute apps from Firebase to <BrandName /> App Live. This integration allows you to collaborate by sharing projects within your team on <BrandName /> and test on real devices.

Let’s dive in to learn how to test apps installed from Firebase.

**Prerequisites:**

Create a new project on Firebase and open it in Google Cloud Platform (GCP). Using a new project is preferred, though an existing one can be used. 

Here, create an [OAuth Client ID](https://developers.google.com/identity/protocols/oauth2). 

In this step, update the following URLs as - 
| Input Field | URL |
|-----------------|-------------|
| JavaScript origins | https://applive.lambdatest.com |
| Redirect URIs| https://applive.lambdatest.com/app |

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/vaibhavrox.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>


Download the OAuth client config JSON file, or simply take note of the Project ID, Client ID, and Client Secret Key.

Next, add an app, navigate to Firebase, and proceed to App Distribution to upload the application releases.


:::tip
Access to the project is granted only if- 
1. You are the owner.
2. You are a tester for the app.
3. The app is published.

These settings can be updated in the OAuth consent screen.
:::

## Steps to Test apps:

**Step 1:** 
Login to your <BrandName /> account. Visit **Real Device** from the left panel and navigate to **App Testing** and click on Install from Firebase.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/1photo.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 2:**
When you click on Add Project, you can integrate your Firebase account with <BrandName /> either by uploading a **config file** or connecting **using credentials**. You should have these credentials from the prerequisite step.

**Upload a Config file -**  
<img loading="lazy" src={require('../assets/images/real-device-app-testing/firebase-application-upload-steps.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Connect with credentials -** 
<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/Animeshrox.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 3:**
After entering these details, the option to **sign in with Google** will appear. Follow the steps and choose the Google account through which you would like to integrate Firebase with <BrandName />.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/3photo.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>
<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/1blurryblurry.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>
<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/2blurryblurry.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 4:**
You will have successfully integrated <BrandName /> with Firebase. You can now click on **Share Now** to share the project with the testers you added in GCP.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/6photo.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

:::note
Projects can also be shared later directly from the menu.
::: 

**Step 5:**
Now, you can view all the apps you’ve uploaded along with their respective versions, which can be synced with <BrandName />. Select the application, choose the version, pick the device for testing, and **start the session.**

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/Noblurlaststep.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>



## Key Actions Overview 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/Buttonexplanation.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

1. **Add new project:** Click this button to add and sync new Firebase projects to your workspace.  
2. **Refresh:** This button refreshes the project list, apps, and releases to their latest state without affecting your synced releases.
3. **Project Menu:** Click here to manage your project. You can share it with team members or delete it from the list.
4. **Sync:** Sync your release. This is necessary to start any session and generates a unique app ID for the release, which will be used for automation test cases.

:::note

Please verify if your app is in testing mode. 

If it is, ensure that you add your email as a test user in GCP. This option is available in the 'Audience' section of GCP.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/Noteaddemail.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

::: 
