---
id: slack-app
title: Slack App Integration
hide_title: true
sidebar_label: Slack App
description: Integrate Slack App with TestMu AI and quickly launch the real-time and screenshot tests directly from Slack. Collaborate faster with your teammates on issues and fasten the feedback cycle.
keywords:
- integrate testmu ai with slack
- integrate testmu ai with slack app
- run realtime and screenshot tests with slack app
- how to integrate slack app with testmu ai
url: https://www.testmuai.com/support/docs/slack-app/
site_name: TestMu AI
slug: slack-app/
canonical: https://www.testmuai.com/support/docs/slack-app/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": "https://www.lambdatest.com/"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Slack App Integration",
          "item": `${BRAND_URL}/support/docs/slack-app/`
        }]
      })
    }}
></script>

# Slack App Integration

* * *

The <BrandName /> Slack App allows you to initiate real-time tests and screenshot tests directly from Slack. Your team can collaborate more effectively by easily communicating on bugs, reducing the feedback loop, and troubleshooting web elements in real-time.

By integrating <BrandName /> with Slack App,

* Perform Real time testing with access to 3000+ browser and operating systems on the <BrandName /> cloud.
* Run Screenshot testing to capture bulk screenshots of websites and web apps from the saved list. 
* Reuse the generated test cards and relaunch the test with the same configuration.

*To perform the Real-time testing and Screenshot testing, you will need to login with your <BrandName /> Account. If you don’t have an account on <BrandName />, visit the <a href="https://stage-accounts.lambdatestinternal.com/register" onClick={CookieTrackingSignup}><BrandName /> register page</a>.*


## Integrating Slack With Your <BrandName /> Account
* * *

>
**Note**: To push the Slack App alert notification of the logged bugs to your specified Slack channel, you will need to integrate Slack with your <BrandName /> account.


1. Login to your <BrandName /> account and visit **Integrations**.

2. From the **COMMUNICATION** category, select Slack.

<img loading="lazy" src={require('../assets/images/slack-app-integration/select-slack.webp').default} alt="Slack App"  width="1362" height="725" className="doc_img"/>

3. You'll be redirect to OAuth page. Enter the Slack channel on which you wish to receive Slack alert notifications.

<img loading="lazy" src={require('../assets/images/slack-app-integration/oauth-channel.webp').default} alt="Slack App"  width="1362" height="725" className="doc_img"/>

4. Click on **Allow**.

<img loading="lazy" src={require('../assets/images/slack-app-integration/oauth-integration.webp').default} alt="Slack App"  width="1362" height="725" className="doc_img"/>

Slack will be integrated successfully with your <BrandName /> account. You'll also receive the notification and the confirmation email of the same.

## Adding <BrandName /> From Slack App
***

**Step 1**: Open the Slack App.

**Step 2**: From the left menu, navigate to **Apps** and click on Add (+) icon.

<img loading="lazy" src={require('../assets/images/slack-app-integration/browse-apps.webp').default} alt="Slack App"  width="1362" height="725" className="doc_img"/>

**Step 3**: Search for <BrandName /> and then click on the <BrandName /> block.

<img loading="lazy" src={require('../assets/images/slack-app-integration/search-lambdatest.webp').default} alt="Slack App" width="1366" height="724" className="doc_img"/>

Upon successful integration, the <BrandName /> App will be added to Slack. 

## Performing Real Time Testing From Slack App
* * *

**Step 1**: From the Apps dropdown, click on the <BrandName /> App and select **Run Realtime Test**.

<img loading="lazy" src={require('../assets/images/slack-app-integration/run-realtimetest.webp').default} alt="Slack App" width="1360" height="722" className="doc_img"/>

**Step 2**: A pop-up box will appear where you need to provide the test environment details like Test URL, Device, Browser, Version, OS and Resolution.

<img loading="lazy" src={require('../assets/images/slack-app-integration/provide-realtimetest-details.webp').default} alt="Slack App" width="1353" height="721" className="doc_img"/>

**Step 3**: After entering the test environment details, click on **Submit**.

<img loading="lazy" src={require('../assets/images/slack-app-integration/submit-realtimetest.webp').default} alt="Slack App" width="1349" height="679" className="doc_img"/>

**Step 4**: After clicking on Submit button, you'll receive a Slack notification <br/>Open the notification and you'll find a Real-time test card that includes the test environment details that you just selected. 

To launch the Realtime test, click on **Run Test**.

<img loading="lazy" src={require('../assets/images/slack-app-integration/run-test1.webp').default} alt="Slack App" width="1366" height="724" className="doc_img"/>

**Step 6**: You'll be redirected to the <BrandName /> cloud-based VM where you can perform real-time testing of your websites and web apps. You can also perform one-click bug logging, capture full page screenshots, [geolocation testing](https://www.lambdatest.com/geolocation-testing), and more.

<img loading="lazy" src={require('../assets/images/slack-app-integration/realtime-vm.webp').default} alt="Slack App" width="1263" height="621" className="doc_img"/>

To know more about Real-time Testing, refer to the documentation [Real Time Browser Testing](/docs/getting-started-with-desktop-browser-real-time-testing/).

## Running Screenshot Tests From Slack App
* * *

**Step 1**: Click on the <BrandName /> App icon from the left menu and select **Run Screenshot Test**.

<img loading="lazy" src={require('../assets/images/slack-app-integration/added-app1.webp').default} alt="Slack App" width="1366" height="721" className="doc_img"/>

**Step 2**: A pop-up box will appear. Enter the Test URL and select the List on which you wish to run the Screenshot tests. You can run screenshot tests on the default list (Popular) for most popular configurations or choose from your saved lists (List 1, List 2 and List 3).

<img loading="lazy" src={require('../assets/images/slack-app-integration/selectscreenshot-config.webp').default} alt="Slack App" width="1366" height="724" className="doc_img"/>

*You can save your favorite browser-OS combinations as a list from the <BrandName /> Screenshot console page.*

**Step 3**: Click on **Submit**.

<img loading="lazy" src={require('../assets/images/slack-app-integration/submit-screenshot.webp').default} alt="Slack App" width="1366" height="724" className="doc_img"/>

**Step 4**: After clicking on Submit button, you'll receive a Slack notification. 

After few moments, you'll receive another Slack notification containing a Screenshot test card. The Screenshot test card includes the entered test URL and Test ID. 

To view the generated screenshots, click on **View Screenshot**.

<img loading="lazy" src={require('../assets/images/slack-app-integration/view-screenshot.webp').default} alt="Slack App" width="1263" height="621" className="doc_img"/>

**Step 6**: You will be routed to a <BrandName /> Screenshot console page where you can view, download and share the captured screenshots of your websites (and web apps).

<img loading="lazy" src={require('../assets/images/slack-app-integration/captured-screenshot.webp').default} alt="Slack App" width="1263" height="621" className="doc_img"/>

You can also download the screenshots as a zipped file by clicking on **Download All (Zip)**.

>You can also capture the screenshot through the Slack command in the integrated channel. <br/>**Syntax for Screenshot Slack Command**: `/screenshot [URL] [Optional ListName]`

For more information about Screenshot testing, refer to the documentation [Automated Screenshot Testing](/docs/automated-screenshot-testing/).


## Removing/Uninstalling The Slack App
* * *

**Step 1**: Navigate to **Apps**  from the Slack left menu.

**Step 2**: Once you hover on <BrandName /> App, a cross icon will appear. Click on the Cross icon.

<img loading="lazy" src={require('../assets/images/slack-app-integration/remove-app.webp').default} alt="Slack App" width="1360" height="719" className="doc_img"/>

The <BrandName /> Slack App will be removed successfully from Slack.

**Step 3**: Now visit **Integrations**. From the MY INTEGRATIONS section, click on **Remove** icon under the Slack block.

<img loading="lazy" src={require('../assets/images/slack-app-integration/remove-2.webp').default} alt="Slack App" width="1360" height="721"  className="doc_img"/>

The Slack will be uninstalled from your <BrandName /> account.

> That’s all about <BrandName />+Slack App integration. If you have any questions or require any further information, you can reach out to us at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat portal**</span> or drop us a mail at support@testmu.ai.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Slack App Integration
      </span>
    </li>
  </ul>
</nav>
