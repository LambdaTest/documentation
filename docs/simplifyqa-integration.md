---
id: simplifyqa-integration
title: How to integrate SimplyfyQA With TestMu AI
hide_title: false
sidebar_label: SimplifyQA
description: This guide walk you through how you can run your tests using simplifyqa after integrating on TestMu AI's real device.
keywords:
  - TestMu AI integration
  - testmu ai integration with simplifyqa
  - simplifyqa
  - simplifyex
  - testmu ai
  - real device
  - simplifyqa real device
url: https://www.testmu.ai/support/docs/simplifyqa-integration
site_name: LambdaTest
slug: simplifyqa-integration
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "SimplifyQA Integration",
          "item": `${BRAND_URL}/support/docs/simplifyqa-integration/`
        }]
      })
    }}
></script>
SimplifyQA is a test automation platform designed to leverage AI for creating, executing, and managing automated tests with ease. The platform's codeless approach democratizes test automation, allowing QA teams to achieve broader test coverage and faster release cycles without the need for extensive programming skills. SimplifyQA aims to streamline the entire QA workflow with its comprehensive suite of features supporting web, mobile, and API testing.

This document will guide you step-by-step method to integrate the SimplifyQA with <BrandName />'s Real Device.

## Prerequisites 
- SimplifyQA subscription 
- SimplifyQA agent installed in Local Machine 
- <BrandName /> Subscription 
- Required .apk or .ipa files

## Steps to integrate SimplifyQA

### Step 1: Fetch your <BrandName /> Credentials
- Login to Lambdatest account and click on the profile icon. 
- Navigate to **Account Settings** > **Password and Security**. Copy the provided **Username** and **Access Key**

<img loading="lazy" src={require('../assets/images/integrations/simplifyqa/username-accesskey.gif').default} alt="Image"  className="doc_img"/>

### Step 2: Setup your SimplifyQA platform
- Login to SimplifyQA as non-admin user. Click on the **Settings** icon > **Mobile Settings** .
- Go to Cloud Setup and navigate to <BrandName /> tab. Enter details copied from <BrandName /> and save the settings:
  - Username – Your <BrandName /> Username
  - AccessKey – Your <BrandName /> Access Key
  - Build – Reference build numbers

<img loading="lazy" src={require('../assets/images/integrations/simplifyqa/setup-simplifyqa.gif').default} alt="Image"  className="doc_img"/>

### Step 3: Upload your application
- Go to <BrandName />'s **Real Device** > **App Testing** and upload your desired **.apk** file.
- After successfully uploading the APK, click on the settings icon and copy the provided **App ID**.

<img loading="lazy" src={require('../assets/images/integrations/simplifyqa/upload-app.gif').default} alt="Image"  className="doc_img"/>

### Step 4: Trigger your tests from SimplifyQA
- Record your test cases in SimplifyQA. Go to the Test Case module > click on **+** icon and select the **Mobile** to record your test cases.
> **Note:** You should use **Cloud Start App** method instead of **Launch App** method.
- Click on test data and paste the App ID copied from Lambda Test in **APP Id** parameter.
- In the Execute Tab, choose **Cloud Automation**. Click on <BrandName />.
- Select Release, Sprint. In the Devices dropdown choose the device of your choice and click on Execute button.
> To view the <BrandName /> execution, navigate to [automation](https://appautomation.lambdatest.com/build) in the left panel in <BrandName />.
