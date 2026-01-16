---
id: airbrake-integration
title: Airbrake Integration
hide_title: true
sidebar_label: Airbrake 
description: Streamline Your Error Monitoring with TestMu AI's Airbrake Integration Documentation. Discover how to seamlessly integrate Airbrake with TestMu AI for efficient bug management and error tracking. Get step-by-step instructions and insights for optimizing your development workflow.
keywords:
  - testmu ai integrations
  - push issues to airbrake
  - free cross browser testing tool
  - cross platform testing tools
  - check browser compatibility online
  - testmu ai airbrake integration
  - integrate airbrake with testmu ai
  - create issue in airbrake from testmu ai
  - airbrake integration with testmu ai
  - create airbrake issues from testmu ai
  - bug tracking tools
  - project management tools
url: https://www.testmu.ai/support/docs/airbrake-integration/
site_name: LambdaTest
slug: airbrake-integration/
canonical: https://www.testmu.ai/support/docs/airbrake-integration/
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
          "name": "Airbrake Integration",
          "item": `${BRAND_URL}/support/docs/airbrake-integration/`
        }]
      })
    }}
></script>

# Airbrake Integration
***

Airbrake is a software tool and service designed to assist developers in tracking and monitoring errors within web and mobile applications. Its primary purpose is promptly identifying and diagnosing software errors and exceptions, enabling developers to react swiftly and effectively.

<div class="blog__ytframe">
<div class="blog__youtube" data-embed="_amxJrEiMyA">
    <div class="blog__play-button"></div>
</div>
</div>

<BrandName />'s integration with Airbrake provides a seamless solution for tracking and managing bugs and issues encountered during <a href={`${BRAND_URL}`}>cross-browser testing</a>. With this integration, developers can effortlessly log bugs directly from the <BrandName /> platform to their Airbrake instance, eliminating the need for manual maintenance of tasks and issues.

<div className="ytframe"> 
<div className="youtube" data-embed="_amxJrEiMyA">
    <div className="play-button"></div>
</div>
</div>


## Integrating Airbrake With <BrandName />
***

**Step 1:** Sign in to your <BrandName /> account. Don't have an account, [register for free](https://accounts.lambdatest.com/register).

**Step 2:** Select **Integrations** from the left sidebar and head to **Airbrake**.

<img loading="lazy" src={require('../assets/images/airbrake-integration/airbrake-install.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 3:** It will route you to the installing console window, where you are required to enter your Airbrake **Auth Token, Project ID, and Project Key**.

<img loading="lazy" src={require('../assets/images/airbrake-integration/instance-window.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

## Getting The Airbrake Auth Token, Project ID, and Project Key
***

**Step 1:** Login to your **Airbrake** account.

<img loading="lazy" src={require('../assets/images/airbrake-integration/airbrake-account.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 2:** From the left sidebar menu, hover on the **profile icon** and click the **Profile and Notifications** tab. 

<img loading="lazy" src={require('../assets/images/airbrake-integration/profile-notifications.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 3:** Copy the **Auth Token**. 

<img loading="lazy" src={require('../assets/images/airbrake-integration/api-token.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

To access your **Project ID** and **Key**, head to the **Projects** option in the top-left corner. 

<img loading="lazy" src={require('../assets/images/airbrake-integration/projects.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 1:** Select your preferred project or create a new project. 

<img loading="lazy" src={require('../assets/images/airbrake-integration/select-project.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 2:** Head to the **Settings** tab.

<img loading="lazy" src={require('../assets/images/airbrake-integration/settings-tab.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 3:** Copy the **Project ID** and **Project Key**. 

<img loading="lazy" src={require('../assets/images/airbrake-integration/project-id-key.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

Copy and paste the required credentials from your Airbrake account and click **Install**. 

<img loading="lazy" src={require('../assets/images/airbrake-integration/click-install.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

Now you have successfully integrated your <BrandName /> account with Airbrake. 

<img loading="lazy" src={require('../assets/images/airbrake-integration/success-install.webp').default} alt="add" width="1346" height="647" className="doc_img"/>


## One-Click Bug Logging With Airbrake
***

**Step 1:** In your <BrandName /> Dashboard, head to **Real-Time Testing > Browser Testing** from the left navigation menu.

**Step 2:** To perform **live-interactive testing** of your website or a web app, enter the web URL, select the testing type (Desktop/Mobile), select the browser version, OS, and resolution, and click **Start**.

<img loading="lazy" src={require('../assets/images/airbrake-integration/real-time-browser.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

Upon clicking, a cloud-based virtual machine will fire up, running real browsers and operating systems where you can test websites and web apps for filing bugs.

**Step 3:** Click on the **Bug icon** from the left in-session toolbar to take a screenshot of any bug you encounter. 

<img loading="lazy" src={require('../assets/images/airbrake-integration/bug-icon.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 4:** After marking the bugs, click on the **Bug** icon in front of **Airbrake** under the integrations section.

<img loading="lazy" src={require('../assets/images/airbrake-integration/airbrake-icon.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 5:** In the Airbrak ticket, fill the bug details like **Project, Summary, and Description** and click **Mark As Bug** to log the bugs in Airbrake.

<img loading="lazy" src={require('../assets/images/airbrake-integration/airbrake-mark-as-bug.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 6:** To view the logged issues, visit <BrandName /> Dashboard and head to **Manage > Issue Tracker** from the left navigation bar.


**Step 7:** Inside the **Issue Tracker**, you'll notice the logged bugs and their test environment details. Click on the **upper right arrow** in the square button to view your logged bugs in Airbrake instance.  

<img loading="lazy" src={require('../assets/images/airbrake-integration/issue-tracker.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 8:**  Upon clicking, you will be redirected to the Airbrake dashboard to find your **logged bugs**. 

<img loading="lazy" src={require('../assets/images/airbrake-integration/airbrake-instance.webp').default} alt="add" width="1346" height="647" className="doc_img"/>


## Uninstalling The Airbrake Integration

***

**Step 1:** Sign in to your <BrandName /> account and visit **Integrations** from the left sidebar menu.

**Step 2:** From My Integrations, click **Remove** under the **Airbrake** block.

<img loading="lazy" src={require('../assets/images/airbrake-integration/uninstall-airbrake.webp').default} alt="remove" width="1347" height="644" className="doc_img"/>

> That was all you need to know for <BrandName /> + Airbrake Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. Happy testing!


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
        Airbrake Integration
      </span>
    </li>
  </ul>
</nav>
