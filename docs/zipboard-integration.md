---
id: zipboard-integration
title: zipBoard Integration
hide_title: true
sidebar_label: zipBoard Integration
description: This document will help you integrate LambdaTest with zipBoard. That way, you can log bugs to your zipBoard project in a single click as you perform cross browser testing with LambdaTest.
keywords:
  - lambdatest integrations
  - push issues to zipboard
  - check browser compatibility online
  - lambdatest zipboard integration
  - cross browser testing tool
  - zipboard integration with lambdatest
  - create zipboard issues from lambdatest
  - bug tracking tools
  - project management tools
url: https://www.lambdatest.com/support/docs/zipboard-integration/
site_name: LambdaTest
slug: zipboard-integration/
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
          "name": "Zipboard Integration",
          "item": "https://www.lambdatest.com/support/docs/zipboard-integration/"
        }]
      })
    }}
></script>

# zipBoard Integration

* * *
zipBoard offers a review platform on cloud to help you collaborate with your team over a web project. You can attach an image and mention suggestions, tag your collaborators, and do more with full transparency. Using zipBoard your colleagues can view every reported bug or suggestion regarding the project, and understand who is doing what?

LambdaTest is a cross browser testing tool on a cloud which offers 3000+ real browsers and browser versions. You can perform both manual, and automated cross browser testing with an online Selenium Grid. LambdaTest integration with zipBoard will help you report bugs directly from LambdaTest to your zipBoard instance, in just a single click.

## How To Integrate zipBoard With Your LambdaTest Account?
***

**Step 1:** Login to your LambdaTest account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select ‘Integration’ from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Under the Bug Tracker category, click on the block that says **‘zipBoard’**.

<img loading="lazy" src={require('../assets/images/zipboard-integration/1.webp').default} alt="zipboard integration"  className="doc_img" width="1336" height="643"/>

**Step 4:** You will be routed to a screen where you need to fill up your API key.

<img loading="lazy" src={require('../assets/images/zipboard-integration/33.webp').default} alt="zipboard integration api"  className="doc_img" width="1341" height="546"/>

## Finding API Key In zipBoard
***

**Step 1:** Go to your zipBoard account and edit your profile by opening the drop-down menu from top-right corner of your screen.

<img loading="lazy" src={require('../assets/images/zipboard-integration/2.webp').default} alt="zipboard integration account"  className="doc_img" width="1365" height="631"/>

**Step 2:** Click on the + icon to generate your first API key if you don’t have one already.

<img loading="lazy" src={require('../assets/images/zipboard-integration/3.webp').default} alt="zipboard integration edit profile"  className="doc_img" width="1347" height="644"/>

**Step 3:** A prompt message would open up asking you to create a new API key. Click on Yes.

<img loading="lazy" src={require('../assets/images/zipboard-integration/4.webp').default} alt="zipboard integration create key"  className="doc_img" width="569" height="368"/>

> Note: This API key will be used to authenticate your zipBoard account with third-party applications. Make sure you don’t share it with anyone. In case you feel the API key has been misplaced then you can always regenerate a new API key from zipBoard by clicking on the refresh icon under your profile settings.

<img loading="lazy" src={require('../assets/images/zipboard-integration/5.webp').default} alt="zipboard integration api token"  className="doc_img" width="1341" height="651"/>

**Step 4:** Copy the API key and paste it on LambdaTest to integrate with zipBoard and hit Install.

<img loading="lazy" src={require('../assets/images/zipboard-integration/6.webp').default} alt="zipboard integration access"  className="doc_img" width="1365" height="523"/>

**Step 5:** You have successfully integrated zipBoard with LambdaTest. If you go to integrations tab you will find a green tick over the zipBoard block, indicating the integration is successful.

<img loading="lazy" src={require('../assets/images/zipboard-integration/7.webp').default} alt="zipboard integration install"  className="doc_img" width="1350" height="655"/>

## Logging The First Bug From LambdaTest To zipBoard
***

**Step 1:** Login to LambdaTest and perform any type of testing. In this case we will go with [Screenshot testing](https://www.lambdatest.com/support/docs/automated-screenshot-testing/) feature under the drop-down menu for Visual UI Testing.

<img loading="lazy" src={require('../assets/images/zipboard-integration/8.webp').default} alt="screenshot testing"  className="doc_img" width="1348" height="647"/>

**Step 2:** Select the browsers for which you wish to [capture screenshot](https://www.lambdatest.com/full-page-screen-capture) of your website and provide the test URL before you hit the Capture button.

<img loading="lazy" src={require('../assets/images/zipboard-integration/9.webp').default} alt="screenshot testing url"  className="doc_img" width="1346" height="655"/>

**Step 3:** Wait a few seconds and you will find your full-page screenshots for every configuration you selected.

<img loading="lazy" src={require('../assets/images/zipboard-integration/10.webp').default} alt="visual ui testing"  className="doc_img" width="1339" height="652"/>

**Step 4:** Once you have the screenshots ready, click on any screenshot and highlight the bug you wish to report. After you highlight click on the mark as bug button.

<img loading="lazy" src={require('../assets/images/zipboard-integration/11.webp').default} alt="mark as bug"  className="doc_img" width="1347" height="648"/>

**Step 5:** A form specific to zipBoard would open up. You will need to fill the details in this form before you create the issue. Doing so will directly mark a bug into your zipBoard instance.

You can attach the below details with the screenshot:

---

* Project
* Assignee
* Task Status
* Task Priority
* Task Type
* Task Name
* Description
---

<img loading="lazy" src={require('../assets/images/zipboard-integration/12.webp').default} alt="create issue"  className="doc_img" width="1346" height="653"/>

Every detail you provide at LambdaTest will automatically be reflected in the zipBoard task.

> Note: After you click on “Create Bug”, you will be able to observe it being successfully marked through a single click effort. You will get prompt messages on top of your Virtual Machine indicating the progress of bug logging. After few seconds you will be notified with a prompt message “Bug successfully marked” indicating that the screenshot has been pushed to your zipBoard project.

**Step 6:** If you visit your respective Project on zipBoard, you will find a new task created under it.

<img loading="lazy" src={require('../assets/images/zipboard-integration/13.webp').default} alt="zipboard integration"  className="doc_img" width="1365" height="653"/>

**Step 7:** Open tasks of the Project and you will find the bug marked from LambdaTest with all the information you specified while your performed cross browser testing.

<img loading="lazy" src={require('../assets/images/zipboard-integration/14.webp').default} alt="zipboard integration task"  className="doc_img" width="1365" height="656"/>

**Step 8:** Click on the task and you can also find the URL to the screenshot you highlighted at LambdaTest along with the test environment details.

<img loading="lazy" src={require('../assets/images/zipboard-integration/15.webp').default} alt="zipboard integration demo"  className="doc_img" width="1365" height="656"/>

## Remove LambdaTest Integration With zipBoard
***

> You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to remove your current integration. Here is how you can do that.

Go to LambdaTest application and hit the `Integrations`  tab. Under the block for **zipBoard** you will find the option to **REMOVE** the integration.

<img loading="lazy" src={require('../assets/images/zipboard-integration/7-1.webp').default} alt="zipboard integration remove"  className="doc_img" width="1350" height="655"/>

> That was all you need to know for LambdaTest + zipBoard Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. Happy testing! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Zipboard Integration
      </span>
    </li>
  </ul>
</nav>