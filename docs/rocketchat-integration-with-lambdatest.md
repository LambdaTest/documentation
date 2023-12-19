---
id: rocketchat-integration-with-lambdatest
title: Rocket.Chat Integration With LambdaTest
hide_title: true
sidebar_label: Rocket.Chat Integration
description: The LambdaTest Rocket.Chat Integration allows you to share or push a bug to your specified Rocket.Chat channel from the LambdaTest platform in a single click. You can share any UI observations and input with your team on Rocket.Chat anytime, by just capturing a screenshot in the middle of your test session through LambdaTest. You can also annotate the screenshot or highlight your issue or input. The fields populated by you while marking as bug through LambdaTest gets displayed as information on Rocket.Chat for that testing instance.
keywords:
  - rocket.chat integration
  - lambdatest integration
  - bug reporting
  - team communication

url: https://www.lambdatest.com/support/docs/rocketchat-integration-with-lambdatest/
site_name: LambdaTest
slug: rocketchat-integration-with-lambdatest/
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
          "name": "Rocket.Chat Integration",
          "item": "https://www.lambdatest.com/support/docs/rocketchat-integration-with-lambdatest/"
        }]
      })
    }}
></script>

# Rocket.Chat Integration With LambdaTest
* * *

Rocket.Chat is a Communication platform, which is free, open-source, scalable, highly customizable, and secure. It not only allows you to communicate and collaborate with your team, but also share files and live chat in real time. It is a cross-platform, which means it can run on different types of operating systems like Linux, Windows, macOS, Android, and iOS. The biggest advantage of using Rocket.Chat is that it allows you to access its source code, since it is open source. Therefore, you can fully customize, extend, or add new functionality to it to meet your team's or business requirements.

The LambdaTest Rocket.Chat Integration allows you to share or push a bug to your specified Rocket.Chat channel from the LambdaTest platform in a single click. You can share any UI observations and input with your team on Rocket.Chat anytime, by just [capturing a screenshot](https://www.lambdatest.com/full-page-screen-capture) in the middle of your test session through LambdaTest. You can also annotate the screenshot or highlight your issue or input. The fields populated by you while marking as bug through LambdaTest gets displayed as information on Rocket.Chat for that testing instance.

**Rocket.Chat Integration with LambdaTest, like all of the integrations to 3rd party applications, is available for freemium as well as premium plan.**

## Integrate Rocket.Chat With Your LambdaTest Account

* * *
 
**Step 1:** Login to your [LambdaTest account](https://accounts.lambdatest.com/login). Make sure you have an Admin or User level access to see and install 3rd party integrations.

**Step 2:** Select **'Integrations'** tab from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, that have already been integrated as well as that are available to integrate with your LambdaTest account.

<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/integration-tab.webp').default} alt="Select 'Integrations' tab " width="1341" height="617" className="doc_img"/>

**Step 3:** Hover to the 'Rocket.Chat' block under "Communications" category, and click on "**Add**" button that appears.

<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/rocketchat-1.webp').default} alt="Hover to the 'Rocket.Chat' "  width="1367" height="623" className="doc_img"/>

**Step 4:** You need a webhook URL to integrate your workspace with LambdaTest. So copy the webhook URL of the proposed LambdaTest integration on Rocket.Chat.  
<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/rocketchat-webhook.webp').default} alt="copy the webhook URL"  width="554" height="87" className="doc_img"/>

>In case you don't have a webhook ready, you can find read about how to create a webhook [here](https://docs.rocket.chat/guides/administrator-guides/integrations#create-a-new-incoming-webhook).   
>Make sure to mark the creating integration as "Enabled" on Rocket.Chat.  
><img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/rocketchat-enabled.webp').default} alt="mark the creating integration as Enabled" width="1367" height="572" className="doc_img"/>

**Step 5:** Enter your **webhook URL** copied from the above step, in the box that appears after clicking on Add in step 3, and then press "**Install**"

<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/insert-webhook.webp').default} alt="Enter your webhook URL"  width="1367" height="620" className="doc_img"/>

**Step 6:** Once you press on Install, Rocket.Chat will be integrated with LambdaTest on the same webhook URL, and an alert-box will appear on the top right corner of the screen stating that the integration is successfull.  
<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/rocketchat-confirmation-popup.webp').default} alt="Rocket.Chat will be integrated with LambdaTest" width="402" height="117" className="doc_img"/>

**Step 7:** Voila! Go to Integrations tab again and you will see a Rocket.Chat under "My Integrations".  
<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/rocketchat-in-my-integration.webp').default} alt="Image"  width="617" height="507"className="doc_img"/> 

Also, you can see a **green tick** in front of Rocket.Chat under Communication category, indicating that Rocket.Chat has been successfully **installed**.

<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/rocketchat-green-tick.webp').default} alt="you can see a green tick"  width="669" height="499"className="doc_img"/>

## How To Log Your First Bug Through Rocket.Chat Integration?

* * *

**Step 1:** Select any of the test from the left navigation menu of LambdaTest. For this instance, we will be taking "**Real Time Test**" option.

**Step 2:** Enter the URL of the web-app to be tested in the URL box. Press **'Start'** after selecting the configuration of browser and operating system as per your choice.

<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/real-time-testing-1.webp').default} alt="Enter the URL of the web-app"  width="1348" height="609" className="doc_img"/>

**Step 3:** After the VM is launched and operable, you can perform testing on your web-app as per your choice, such as for finding bugs. Suppose if you come across any bug, then you need to click on the **Bug icon** from the left panel, for capturing a screenshot of the current VM instance.

<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/mark-as-bug-1.webp').default} alt="you can perform testing on your web-app" width="1218" height="627" className="doc_img"/>

**Step 4:** A screenshot will be captured and appear on your screen in an **in-built image editor**. Annotate any issue or a task as per your choice in this editor, and then press **"Mark as Bug"** button.

<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/mark-bug-dialog-box.webp').default} alt="Annotate any issue or a task as per your choice" width="1208" height="607" className="doc_img"/>

**Step 5:** Complete the **Bug/Task/Issue Form** that appears upon clicking the **"Mark as Bug"** button, as per your requirement:
>* Select the **Issue type** as Bug/Task/Issue. Here, we have selected it as Bug.
* Set the **Priority** of the bug as per convinience.
* You can assign the bug to a member of your team by populating the field '**Assignee**'.
* Write the '**Summary**' of the bug that would be sent to the assigned member.
* You also get to post an optional **description** to help with the bug.

At the bottom of the form, please make sure to tick the check button  
stating **"Send to Rocket.Chat"**.

>Note: By default, it would be **checked**, if Rocket.Chat is already integrated. This button helps send the screenshot, as per the filled form, directly to your workspace, when the Bug is created. You can uncheck the button anytime if you do not wish the bug/task/issue on Rocket.Chat 

Now click on **"Create Bug"** button to send the bug directly to Rocket.Chat workspace. 

<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/Create-issue.webp').default} alt="click on Create Bug"  width="464" height="560"className="doc_img"/>

**Step 6:** After you click on **"Create Bug"**, you will be able to observe it being successfully marked through a single click effort. You will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. After few seconds you will be notified with a prompt message "**Bug successfully marked**" indicating that the screenshot has been pushed to your Rocket.Chat workspace.

<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/Capture15.webp').default} alt="Image" width="347" height="75" className="doc_img"/> 

Login to your workspace on Rocket.Chat and you will be able to notice the marked bug in the set channel assigned to the set person. All the data you provided through Lambdatest form would already be presented in it. LambdaTest automatically includes test environment details and related screenshots in the screenshot as attachments.

<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/bug-marked.webp').default} alt="Login to your workspace on Rocket.Chat"  width="522" height="464" className="doc_img"/>

A clickable link will be provided in the rocket.chat channel along with the screenshot to instantly route users on their browser for a full screen view of the bug.

## How To Remove Rocket.Chat Integration?

* * *

>You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **remove** your current integration. Here is how you can do that.

**Step 1:** Login to your LambdaTest account.

**Step 2:** Select 'Integrations' from the left navigation menu bar & go to 'Communications' category. This will guide you to a screen where you will find 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Hover to Rocket.Chat block. A **"REMOVE"** button will appear. Click on **'REMOVE'**.

<img loading="lazy" src={require('../assets/images/rocketchat-integration-with-lambdatest/remove-rocketchat.webp').default} alt="Hover to Rocket.Chat block" width="665" height="617" className="doc_img"/>

>That was all you need to know for LambdaTest + Rocket.Chat Integration. Increase your productivity multifold with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out with any roadblock regarding our product. Happy testing! 

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
        Rocket.Chat Integration
      </span>
    </li>
  </ul>
</nav>

