---
id: microsoft-teams-integration
title: Microsoft Teams Integration
hide_title: true
sidebar_label: Microsoft Teams Integration
description: LambdaTest integration with Microsoft Teams allows you to push a bug directly to your specified Teams channel from LambdaTest platform. Share your UI observations and input with your teammates on any time, by capturing a screenshot in the middle of your test session through LambdaTest. You can annotate the screenshot & highlight your issue or input. The fields populated by you when marking as a bug through LambdaTest are displayed as information on the respective Teams channel for that testing instance.
keywords:
  - microsoft teams integration
  - lambdatest integration
  - bug reporting
  - team communication

url: https://www.lambdatest.com/support/docs/microsoft-teams-integration/
site_name: LambdaTest
slug: microsoft-teams-integration/
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
          "name": "Microsoft Teams Integration",
          "item": "https://www.lambdatest.com/support/docs/microsoft-teams-integration/"
        }]
      })
    }}
></script>

# Microsoft Teams Integration
* * *

Microsoft teams is a cloud-based group chat software meant to get everyone in your team on the same page. You can conduct online meetings, voice-calling, instant messaging, file sharing with your colleagues for faster and thorough collaboration.

LambdaTest integration with Microsoft Teams allows you to push a bug directly to your specified Teams channel from LambdaTest platform. Share your UI observations and input with your teammates on any time, by capturing a screenshot in the middle of your test session through LambdaTest. You can annotate the screenshot & highlight your issue or input. The fields populated by you when marking as a bug through LambdaTest are displayed as information on the respective Teams channel for that testing instance.

## How To Integrate Microsoft Teams With Your LambdaTest Account?

* * *

**Step 1:** Login to your LambdaTest account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **'Integration'** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Click on **'Add'** under the block that says 'Microsoft Teams'.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/teams-1.webp').default} alt="Click on 'Add' " width="1341" height="651" className="doc_img"/>

**Step 4:** You will be asked to provide the Webhook URL of your Microsoft Teams instance for authentication purpose. This would help LambdaTest to connect with Microsoft Team API for your account.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/teams-2.webp').default} alt="provide the Webhook URL of your Microsoft Teams"  width="1365" height="467" className="doc_img"/>

**Step 5:** Go to your Microsoft Teams instance. Visit the team from left navigation menu and hit the menu button for any channel & select **Connectors**.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/teams-3.webp').default} alt="hit the menu button" width="1347" height="652" className="doc_img"/>

**Step 6:** Hit the **'Configure'** button for **Incoming Webhooks**.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/teams-4.webp').default} alt="Hit the 'Configure' button" width="1365" height="603"  className="doc_img"/>

**Step 7:** Enter a text as you see fit for generating a webhook by clicking the **Create** button.  
<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/teams-5.webp').default} alt="Enter a text as you see fit" width="1365" height="603" className="doc_img"/>

**Step 8:** Copy the generated webhook for authentication purpose on LambdaTest.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/teams-6.webp').default} alt="Copy the generated webhook" width="1365" height="599" className="doc_img"/>

**Step 9:** Paste the Webhook URL into LambdaTest authentication field for integrating LambdaTest with Microsoft Teams & hit **install**.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/teams-7.webp').default} alt="Paste the Webhook URL into LambdaTest authentication" width="1356" height="596" className="doc_img"/>

That's it! Go to Integrations again and you will be able to notice a **green tick** indicating that Microsoft Teams is successfully **installed** with your LambdaTest account.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/teams-8.webp').default} alt="you will be able to notice a green tick" width="1532" height="601" className="doc_img"/>

## How To Log Your First Bug Through Microsoft Teams Integration?

* * *

**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking "**Real Time Test**" option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & hit '**Start**'.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/w5-1.webp').default} alt="elect any configuration" width="1365" height="658" className="doc_img"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **Bug icon** from the left panel for capturing a screenshot of the same. We have highlighted that option with yellow in the below image.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/Capture9-4.webp').default} alt="You can perform testing on your web-app" width="1348" height="619" className="doc_img"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an **in-built image editor**. Once you are done highlighting the bug, click on the button that says **"Mark as Bug"**.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/Capture13.webp').default} alt="annotate any issue or a task with an in-built image editor" width="1320" height="618" className="doc_img"/>

**Step 5:** After clicking on **"Mark as Bug"** button a form would open up. Fill the fields as per your requirement.
>* You can select the **Issue type**.
* You can set the **priority** of the bug.
* You can assign the bug to a colleague by populating the field '**Assignee**'.
* You can post a relevant **summary** for keeping your bug inventory well organized.
* You also get to post a **description** to help relate the cause of the issue or the task.

At the bottom of the form you will find a check button **"Send to Microsoft Teams"**. By default, it would be **checked** if you have already integrated LambdaTest with Microsoft Teams. This button when checked, will push the screenshot directly to your workspace after you click on **"Create Bug"**. You can **uncheck** the button if you do not wish to share a particular screenshot with your team.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/teams-9.webp').default} alt="find a check button" width="1365" height="602" className="doc_img"/>

**Note:** After you click on **"Create Bug"**, you will be able to observe it being successfully marked through a single click effort. You will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. After few seconds you will be notified with a prompt message "**Bug successfully marked**" indicating that the screenshot has been pushed to your Microsoft Teams workspace.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/Capture15.webp').default} alt="You will get prompt messages on top of your Virtual Machine" width="347" height="75" className="doc_img"/>

Login to your workspace and you will be able to notice the logged issue right away! All the data you provided through LambdaTest would already be presented in it. LambdaTest automatically includes test environment details and related screenshots in the screenshot as attachments.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/teams-10.webp').default} alt="otice the logged issue right away" width="1365" height="603" className="doc_img"/>

>**Note:** At the bottom of your logged bug in Microsoft Teams, you will notice the following two buttons.
* Goto Generated Ticket: Instantly routes you to LambdaTest platform's Issue Tracker, where you can find all the details related to that specific bug.   
><img loading="lazy" src={require('../assets/images/microsoft-teams-integration/teams-11.webp').default} alt="you will notice the following two buttons" width="1350" height="601" className="doc_img"/>   
>* Goto Attached Screenshot: Instantly routes you in a new browser tab for a full-screen view of the bug.

## How To Remove Microsoft Teams Integration?

* * *

>You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **remove** your current integration. Here is how you can do that.

**Step 1:** Login to your LambdaTest account.

**Step 2:** Select **'Integrations'** from the left-navigation menu. This will guide you to a screen where you will find 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Click on **'REMOVE'**. You can find the remove button right under the **'Microsoft Teams'** block which would be highlighted with a green tick.

<img loading="lazy" src={require('../assets/images/microsoft-teams-integration/teams-12.webp').default} alt="Image" width="1365" height="563"  className="doc_img"/> 

>That was all you need to know for LambdaTest + Microsoft Teams Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out with any roadblock regarding our product. Happy testing! 🙂

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
        Microsoft Teams Integration
      </span>
    </li>
  </ul>
</nav>