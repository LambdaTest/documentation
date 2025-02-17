---
id: install-apps-from-firebase
title: How to Test Apps Installed via Firebase?
hide_title: true
sidebar_label: Firebase
description: Learn how to test apps installed from the firebase on LambdaTest for optimal performance on real iOS devices.
keywords:
- install apps from firebase
url: https://www.lambdatest.com/support/docs/install-apps-from-firebase/
site_name: LambdaTest
slug: install-apps-from-firebase/
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
          "name": "How to Test Apps Installed via App Center?",
          "item": "https://www.lambdatest.com/support/docs/install-apps-from-firebase/"
        }]
      })
    }}
></script>
# How to Test Apps Installed via Firebase?
LambdaTest offers real device testing capabilities, enabling developers and QA teams to test on actual Android and iOS devices in the cloud. With Firebase App Distribution, you can easily configure your Firebase account within LambdaTest to seamlessly distribute apps from Firebase to LambdaTest App Live. This integration allows you to collaborate by sharing projects within your team on LambdaTest and test on real devices.

Let’s dive in to learn how to test apps installed from Firebase.

**Prerequisites:**

Create a project on Firebase and open this project on Google Cloud Platform (GCP). 

Here, create an OAuth Client ID. 

In this step, add the Authorized Redirect URL:
https://mobile-mwc-bye-app-center-dev.lambdatestinternal.com/app
and the Authorized JavaScript URL:
https://mobile-mwc-bye-app-center-dev.lambdatestinternal.com


Download the OAuth client config JSON file, or simply take note of the Project ID, Client ID, and Client Secret Key.

Go to Firebase and navigate to App Distribution to upload your application.


:::tip
In GCP, go to the OAuth consent screen --> Audience section, and you can add more testers for your project.
You must be a tester for your own project, or you must publish it to ensure that this works.
:::

Steps to Test apps:

**Step 1:** 
Login to your LambdaTest account. Visit **Real Device** from the left panel and navigate to **App Testing** and click on Install from Firebase.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/1photo.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 2:**
When you click on Add Project, you can integrate your Firebase account with LambdaTest either by uploading a **config file** or connecting **using credentials**. You should have these credentials from the prerequisite step.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/2photo.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 3:**
After entering these details, the option to **sign in with Google** will appear. Follow the steps and choose the Google account through which you would like to integrate Firebase with LambdaTest.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/3photo.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>
<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/1blurry.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>
<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/2blurry.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**Step 4:**
You will have successfully integrated LambdaTest with Firebase. You can now click on **Share Now** to share the project with the testers you added in GCP.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/firebase/6photo.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>
