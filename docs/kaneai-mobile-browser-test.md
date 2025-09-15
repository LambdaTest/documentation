---
id: kaneai-mobile-browser-test
title: Automate your Mobile Browser Testing With KaneAI
hide_title: false
sidebar_label: Author your First Mobile Browser Test
description: Learn how to automate app testing with KaneAI. Generate and execute tests in plain English, save cases, and run them seamlessly
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai app test
url: https://www.lambdatest.com/support/docs/kaneai-mobile-browser-test
site_name: LambdaTest
slug: kaneai-mobile-browser-test/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "position": 4,
          "name": "KaneAI Web Test",
          "item": "https://www.lambdatest.com/support/docs/kaneai-mobile-browser-test"
        }]
      })
    }}
></script>

In this guide, we'll walk you through the process of generating, and executing automated tests for your Mobile Browser using KaneAI.

<Tabs className="docs__val">

<TabItem value="bash" label="Android" default>

  <div className="lambdatest__codeblock">


## Steps to generate the test cases - Android


### Step 1: Author a Browser Test

Navigate to the [KaneAI homepage](https://kaneai.lambdatest.com/objective) and click on the **Author Browser Test** button to initiate the process of generating test cases for your web app. In the right side, a window will open with which you can navigate to your platform to perform the testing.


<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/androidStep1.mp4').default} type="video/mp4" />
</video> <br /> <br />



### Step 2: Write Your Test Cases in Plain English

**Let KaneAI do the coding!** In this step, you'll describe your desired test outcomes using plain English. Don't worry about writing specific code or scripts – KaneAI will handle that for you.

For example:
- Visit the website "www.lambdatest.com" 
- Click on the Login button.

Keep adding tests in plain English as you go; KaneAI will automatically queue them up for execution, so you don't have to wait for one test to finish before writing the next. Click on the **Finish Test** button.
> **Remember:** The more specific you are, the more accurate KaneAI's generated test cases will be.

<img loading="lazy" src={require('../assets/images/kane-ai/Android-Img2_compressed.png').default} alt="Image" width="1347" height="616"  className="doc_img"/> <br /> <br />

### Step 3: Save your Test Case
Now, save your test cases that you have generated till now.

Select your Project, and the folder in which you want to store your test cases. The **Test Name** and the **Description** will be generated automatically, and you can also edit it. Select the **Type** of your test, and the status, and define the necessary tags which will help you to search your tests later.


<img loading="lazy" src={require('../assets/images/kane-ai/Android-Img3_compressed.png').default} alt="Image" width="1347" height="616"  className="doc_img"/> <br /> <br />

### Step 4: Execute your test

To execute your test, click on the HyperExecute button and you will be redirected to the HyperExecute dashboard where your tests will be executed.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/Execute-Android.mp4').default} type="video/mp4" />
</video> <br /> <br />


### Feature Support Matrix


| Feature / Action                                                        | Support Status         | Notes                                                                                   |
|-------------------------------------------------------------------------|-----------------------|-----------------------------------------------------------------------------------------|
| Element Scroll                                                          | Supported             |                                                                                         |
| Key Events (e.g. Enter, Space, Tab)                                     | Not Supported         |                                                                                         |
| Clear Input Fields                                                      | Supported             |                                                                                         |
| App Instructions (e.g. background, hide keyboard, show notifications)   | Not Supported         |                                                                                         |
| Textual & Visual Queries                                                | Supported             | Includes driver-based queries.                                                          |
| Sites with Permission Popups (notifications, cookies, location)         | Supported (Android only) | Popups are auto-accepted on Android. iOS not supported currently.                    |
| Cookies & Local Storage                                                 | Supported             |                                                                                         |
| DOM Elements Not Exposed (Qwen Use Cases)                               | Not Supported         | Qwen is not supported for browser-based tests.                                          |
| Network Assertions                                                      | Not Supported         | Not yet available for mobile web; only supported on web.                                |
| Negative Scenarios from App UX (e.g. switch app, go to home, go back)   | Not Supported         | These are app-specific and not currently available in browser testing mode.             |

> _Have any feedback or request? Reach out to us via support@lambdatest.com and we would be happy to hear from you._

  </div>

</TabItem>

<TabItem value="powershell" label="iOS" default>

  <div className="lambdatest__codeblock">
   
## Steps to generate the test cases - iOS


### Step 1: Author a Browser Test

Navigate to the [KaneAI homepage](https://kaneai.lambdatest.com/objective) and click on the **Author Browser Test** button to initiate the process of generating test cases for your web app. In the right side, a window will open with which you can navigate to your platform to perform the testing.


<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/iOSMobileBrowser.mp4').default} type="video/mp4" />
</video> <br /> <br />

### Step 2: Write Your Test Cases in Plain English
**Let KaneAI do the coding!** In this step, you'll describe your desired test outcomes using plain English. Don't worry about writing specific code or scripts – KaneAI will handle that for you.

For example:
- Visit the website "www.lambdatest.com"
- Click on the Login button.

Keep adding tests in plain English as you go; KaneAI will automatically queue them up for execution, so you don't have to wait for one test to finish before writing the next. Click on the **Finish Test** button.
> **Remember:** The more specific you are, the more accurate KaneAI's generated test cases will be.


<img loading="lazy" src={require('../assets/images/kane-ai/iOSbrowser-img2_compressed.png').default} alt="Image" width="1347" height="616"  className="doc_img"/> <br /> <br />

### Step 3: Save your Test Case
Now, save your test cases that you have generated till now.

Select your Project, and the folder in which you want to store your test cases. The **Test Name** and the **Description** will be generated automatically, and you can also edit it. Select the **Type** of your test, and the status, and define the necessary tags which will help you to search your tests later.

<img loading="lazy" src={require('../assets/images/kane-ai/iOSbrowserimg3_compressed.png').default} alt="Image" width="1347" height="616"  className="doc_img"/> <br /> <br />

### Step 4: Execute your test

To execute your test, click on the HyperExecute button and you will be redirected to the HyperExecute dashboard where your tests will be executed.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/iOSBrowserExecute.mp4').default} type="video/mp4" />
</video> <br /> <br />


Note:- “Permission pop-ups (notifications, location etc) are not supported on iOS at this time.

> _Have any feedback or request? Reach out to us via support@lambdatest.com and we would be happy to hear from you._

  </div>

</TabItem>
</Tabs>