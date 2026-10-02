---
id: install-apps-from-firebase
title: How to Test Apps Installed via Firebase?
hide_title: true
sidebar_label: Firebase
description: Learn how to test apps installed from the firebase on TestMu AI for optimal performance on real iOS devices.
keywords:
- install apps from firebase
url: https://www.testmuai.com/support/docs/install-apps-from-firebase/
site_name: TestMu AI
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/install-apps-from-firebase/"
    },
    "headline": "How to Test Apps Installed via Firebase?",
    "description": "Learn how to test apps installed from the firebase on TestMu AI for optimal performance on real iOS devices.",
    "url": "https://www.testmuai.com/support/docs/install-apps-from-firebase/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Real Device",
    "keywords": [
      "install apps from firebase"
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
    "dateModified": "2026-02-12T19:51:34+05:30"
  }) }}
/>
# Test Apps Installed via Firebase App Distribution
<BrandName /> offers real device testing capabilities, enabling developers and QA teams to test on actual Android and iOS devices in the cloud. With Firebase App Distribution, you can easily configure your Firebase account within <BrandName /> to seamlessly distribute apps from Firebase to <BrandName /> App Live. This integration allows you to collaborate by sharing projects within your team on <BrandName /> and test on real devices.

Let’s dive in to learn how to integrate Firebase App Distribution with <BrandName /> and test apps installed from Firebase.

:::tip
Access to the project is granted only if- 
1. You are the owner.
2. You are a tester for the app.
3. The app is published.

These settings can be updated in the OAuth consent screen.
:::

**Prerequisites:**

1. Sign in to the [Google Cloud Console](https://console.cloud.google.com/), search for **Clients**, and select **Clients** (Google Auth Platform) from the results.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-clientsearch.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

2. On the **Clients** page, click **Create project**, enter your project details, click **Create**, and then click **Get started**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-createproject.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-getstarted.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

3. Enter your app information, select **Internal** or **External** as per the preference, add your contact information, and click **Create**.

4. Click **Create OAuth client**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-createOauth.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

5. Select **Web application** as the application type, and enter a name for the client (for example, `Web Client 1`). Update the following URLs, and then click **Create**:

| Input Field | URL |
|-----------------|-------------|
| Authorized JavaScript origins | https://applive.lambdatest.com |
| Authorized Redirect URIs| https://applive.lambdatest.com/app |     


For more information, see [OAuth 2.0 Client IDs](https://developers.google.com/identity/protocols/oauth2).

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-Oauthdetail.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

After the OAuth client is created, click the **Download** icon to download the JSON file, and then click **OK**.

7. Search for **Firebase** in the search bar and select **Firebase** from the results.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-searchproduct.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

8. Select **Firestore**, click **Get started**, and then click **Continue**.

9. Select the **Default account for Firebase**, click **Add Firebase**, and when the confirmation message appears, click **Continue** to open the Firebase console.

10. Select your project, click **Add app**, and choose your platform (for example, **Android**).

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-selectapp.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

11. On the **Add Firebase to your Android app** page, register your app, download the `google-services.json` file, add the Firebase SDK, and then click **Continue to console**.

12. On the project page, go to **DevOps & Engagement** > **App Distribution**, and upload your `.apk` file by dragging and dropping it or clicking **Browse**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-browse.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

13. After the upload completes, add the email addresses of your testers, click **Next**, and then click **Distribute to [n] testers**.

14. Each tester receives an invitation email from Firebase, and once they accept it, their status appears in the **Testers** list as shown below.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-acceptinvite.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>



## Steps to Integrate with <BrandName /> and test apps:

1. In the <BrandName /> dashboard, go to **Real Device** > **App Testing**, select **Install from Firebase**, and click the **Add Project** icon.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-uploadconfig.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

2. Choose whether to connect your Firebase account by uploading a **config file** or by using **credentials**, and upload the JSON file you downloaded in step 5. In the pop-up that appears, click **Sign in with Google** and follow the prompts to select the Google account you want to use to integrate Firebase with <BrandName />.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-selectaccount.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-allowaccount.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

4. After the integration is complete, your Firebase project appears in the projects list, and you can click **Share Now** to share it with the testers you added in Google Cloud.

:::note
Projects can also be shared later directly from the menu.
::: 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/firebase-integrate.png').default} alt="Real "  className="doc_img" width="1366" height="450"/>

:::info
* The **Access Expired** behavior is expected when the Google OAuth consent screen is configured in **Testing** mode, because Google automatically expires refresh tokens after 7 days and requires users to re-authenticate periodically; this is controlled by Google's OAuth policy and cannot be modified from <BrandName />.
* The Google account used for the Firebase integration must have the `firebaseappdistro.releases.list` permission, because default project roles may not provide sufficient access to view releases even with project owner-level access. We recommend creating a custom role in Google Cloud with the following minimum required permissions and assigning it to the user, so the same role can also be shared with other members of your organization without granting broader access:

- `firebase.clients.list`
- `firebase.projects.get`
- `firebaseappdistro.releases.list`
- `resourcemanager.projects.get`

After assigning these permissions, retry the integration.
::: 












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
