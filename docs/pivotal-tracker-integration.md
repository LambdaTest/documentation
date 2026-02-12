---
id: pivotal-tracker-integration
title: TestMu AI Integration with Pivotal Tracker
hide_title: true
sidebar_label: Pivotal Tracker
description: TestMu AI provides integrations with Pivotal Tracker to help you log bugs directly from the middle of your test session on TestMu AI to your Pivotal Tracker.
keywords:
  - testmu ai integrations
  - push issues to pivotal tracker
  - free cross browser testing tool
url: https://www.testmuai.com/support/docs/pivotal-tracker-integration/
site_name: TestMu AI
slug: pivotal-tracker-integration/
canonical: https://www.testmu.ai/support/docs/pivotal-tracker-integration/
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
          "name": "Pivotal Tracker Integration",
          "item": `${BRAND_URL}/support/docs/pivotal-tracker-integration/`
        }]
      })
    }}
>
</script>

# Pivotal Tracker Integration

* * *

Pivotal Tracker offers a project management platform on cloud. Designed for Agile teams, the tracker helps you organize your release cycle through an intuitive dashboard where everyone can monitor who is working on what, along with their upcoming tasks! Also, a shared backlog is there to help the team prioritize tasks which require more attention. Tracker automatically calculates your team's velocity by analyzing the past iterations, to help you calculate ETAs on your future sprints.

<div className="ytframe"> 
<div className="youtube" data-embed="auUaheszuvs">
    <div className="play-button"></div>
</div>
</div>

<BrandName /> integration with Pivotal Tracker will help you instantly log UI bugs from <BrandName /> to your projects on the Pivotal Tracker. That way, you can report any cross browser compatibility issues with your team as soon as you encounter them while cross browser testing with <BrandName />.

## How To Integrate Pivotal Tracker With Your <BrandName /> Account?

* * *

**Step 1:** Login to your <BrandName /> account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select 'Integration' from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Under the category of **Project Management**, click on the block that says **'Pivotal Tracker'**.

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pt1.webp').default} alt="Pivotal Tracker Integration" width="1347" height="499" className="doc_img"/>

**Step 4:** You will be routed to the below screen where you are required to fill your **Pivotal Tracker API token**.

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pt2.webp').default} alt="Pivotal Tracker Integration" width="1340" height="554" className="doc_img"/>

**Step 5:** Log into your Pivotal Tracker account and visit your Profile.

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pt3.webp').default} alt="Pivotal Tracker Integration" width="1365" height="619" className="doc_img"/>

**Step 6:** Scroll down on your Profile page and you will find a section where you have your API token generated. This API token will help you authenticate your access as you integrate your Pivotal tracker with any third-party applications. Please handle the API token with care. Treat them as your passwords as somebody else can authenticate a third-party application on your behalf. In case you feel your API token has been revealed to someone you don't trust then you can create a new API token in the Pivotal tracker. You can also remove an older API token if you like.

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pt4.webp').default} alt="Pivotal Tracker Integration" width="992" height="405" className="doc_img"/>

**Step 7:** Copy the API token from your Pivotal Tracker profile and paste it on <BrandName /> authentication and hit the **Install** button.

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pt5.webp').default} alt="Pivotal Tracker Integration" width="1336" height="540" className="doc_img"/>

**Step 8:** Once you hit the Install button, you will notice that you have successfully integrated Pivotal Tracker with your <BrandName /> account. You can find it under the section which says "MY INTEGRATIONS".

>**Note:** You can leverage the Resync button to synchronize your latest projects of Pivotal Tracker into your <BrandName /> accounts.

## Log Your First Bug From <BrandName /> Integration With Pivotal Tracker

* * *

**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking **"Real Time Test"** option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & hit **'Start'**.

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pt6.webp').default} alt="Pivotal Tracker Integration" width="1340" height="617" className="doc_img"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **Bug icon** from the left panel for capturing a screenshot of the same. We have highlighted that option with yellow in the below image.

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pt7.webp').default} alt="Pivotal Tracker Integration" width="1340" height="617" className="doc_img"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an in-built image editor. Once you are done highlighting the bug, click on the **Bug** icon beside Pivotal Tracker under Integrations.

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pivotal-one.webp').default} alt="Pivotal Tracker Integration" width="1340" height="617" className="doc_img"/>

**Step 5:** After clicking on **Bug** icon, a form specific to Pivotal Tracker would open up. Fill the fields as per your requirement, and click on **Mark As Bug** button.

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pivotal-two.webp').default} alt="Pivotal Tracker Integration" width="1340" height="617" className="doc_img"/>

**Note:** After you click on **Mark As Bug**, you will be able to observe it being successfully marked through a single click effort. You will get prompt messages on top of your Virtual Machine indicating the progress of bug logging. After few seconds you will be notified with a **prompt message** *"Your bug has been logged successfully"* indicating that the screenshot has been pushed to your **Pivotal Tracker project**. 

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pivotal-three.png').default} alt="Pivotal Tracker Integration" width="1340" height="617" className="doc_img"/>

**Step 6:** Now, go to your Pivotal Tracker project and you will notice your logged task under the Icebox of your project as a story.

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pt11.webp').default} alt="Pivotal Tracker Integration" width="1340" height="617" className="doc_img"/>

**Step 7:** Click on the task under Icebox and you will find all the details that you shared while logging the bug from <BrandName />.

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pt12.webp').default} alt="Pivotal Tracker Integration" width="1340" height="617" className="doc_img"/>

## Remove <BrandName /> Integration With Pivotal Tracker

* * *

>You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **remove** your current integration. Here is how you can do that.

**Step 1:** Login to your <BrandName /> account.

**Step 2:** Select **'Integrations'** from the left-navigation menu. This will guide you to a screen where you will find 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Under the section of **MY INTEGRATIONS**, you will find the remove button. Click on it to remove <BrandName /> integration with Pivotal Tracker.

<img loading="lazy" src={require('../assets/images/pivotal-tracker-integration/pt13.webp').default} alt="Pivotal Tracker Integration" width="1340" height="617" className="doc_img"/>

That was all you need to know for integrating <BrandName /> with Pivotal Tracker. In case you have any questions, feel free to share them with out product experts on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>. Happy testing! 🙂 

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
        Pivotal Tracker
      </span>
    </li>
  </ul>
</nav>
