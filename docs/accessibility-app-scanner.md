---
id: accessibility-app-scanner
title: Accessibility App Scanner
sidebar_label: Manual
description: TestMu AI Accessibility DevTools help automate detection and reporting of accessibility issues based on WCAG guidelines.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Manual
    - Accessibility Testing Settings
url: https://www.testmu.ai/support/docs/accessibility-app-scanner/
site_name: LambdaTest
slug: accessibility-app-scanner/
canonical: https://www.testmu.ai/support/docs/accessibility-app-scanner/
---
 
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Accessibility Android Test",
          "item": `${BRAND_URL}/support/docs/accessibility-app-scanner/`
        }]
      })
    }}
></script>

<BrandName /> offers a powerful Accessibility Scanner for native Android and iOS apps, integrated seamlessly with our manual app testing environment. This helps QA teams and developers identify accessibility issues directly during real-time testing sessions. Follow this guide to understand how to perform accessibility scans manually.

## Prerequisites
- You must have access to the <BrandName /> Real Device Cloud.
- Your Android app (.apk or .aab) or iOS app should be uploaded to the platform.


## Steps to perform Accessibility Testing using the App Scanner
### Step 1: Navigate to the Accessibility Section
- Log in to your <BrandName /> dashboard.
- From the left-hand menu, click on Accessibility.
- Select the **App Scanner** tab under the Accessibility tab.

### Step 2: Upload your Application
- To start accessibility testing, you need to upload your application first.
- Click on the **Upload** button to upload it from your local system.
- You can also install via Playstore or Firebase or upload via URL.

<img loading="lazy" src={require('../assets/images/accessibility-testing/app-automation/app-upload.png').default} alt="Image" className="doc_img img_center"/>

### Step 3: Launch Manual App Testing
- Choose the target Android or iOS device and select your application.
- Click on the **Start** button to launch the manual testing session on the selected device.

### Step 4: Scan the App Screens
- Once the session is started and your app is launched on the device, click on the **Start Scanning** button to start the scanning of current page.
<img loading="lazy" src={require('../assets/images/accessibility-testing/app-automation/1.png').default} alt="Image" className="doc_img img_center"/>
<br />
- Interact with your app just like a real user — navigate through different screens, buttons, and views.
- The scanner will analyze the current screen and return a list of detected accessibility issues.

<img loading="lazy" src={require('../assets/images/accessibility-testing/app-automation/2.png').default} alt="Image" className="doc_img img_center"/>

### Step 5: Review Accessibility Issues
After scanning, you’ll see a categorized list of issues based on severity (Critical, Serious, Moderate, Minor). Each issue includes:
- Description of the accessibility problem.
- List of affected element.
- Suggested fix or recommendation.

Continue testing by navigating to additional screens in the app and scanning them one-by-one. This helps ensure that your entire app meets accessibility standards across all flows and use cases.

<img loading="lazy" src={require('../assets/images/accessibility-testing/app-automation/3.png').default} alt="Image" className="doc_img img_center"/>

### Step 6: Accessibility Report
After completion of your scanning, click on the **Save Test** button.
- Go to the **Manual Reports** tab under the Accessibility tab.
- Select your desired report
- You can also share the report over email, export it in JSON, CSV and PDF format, and also you create an issue as well for that report.

<img loading="lazy" src={require('../assets/images/accessibility-testing/app-automation/4.png').default} alt="Image" className="doc_img img_center"/>
