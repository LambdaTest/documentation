---
id: integrating-mattermost-with-lambdatest
title: Integrating Mattermost With TestMu AI
hide_title: true
sidebar_label: Mattermost
description: The TestMu AI Mattermost Integration allows you to share or push a bug to your specified Mattermost channel from the TestMu AI platform in a single click. You can share any UI observations and input with your team on Mattermost anytime, by just capturing a screenshot in the middle of your test session through TestMu AI. You can also annotate the screenshot or highlight your issue or input. The fields populated by you while marking as a bug through TestMu AI gets displayed as information on Mattermost for that testing instance.
keywords:
  - mattermost integration
  - testmu ai integration
  - bug reporting
  - team communication

url: https://www.testmuai.com/support/docs/integrating-mattermost-with-testmu/
site_name: TestMu AI
slug: integrating-mattermost-with-testmu/
canonical: https://www.testmuai.com/support/docs/integrating-mattermost-with-testmu/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';


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
          "name": "Mattermost Integration",
          "item": `${BRAND_URL}/support/docs/integrating-mattermost-with-testmu/`
        }]
      })
    }}
></script>

# Integrating Mattermost With <BrandName />
* * *

Mattermost is a Communication platform, written in Golang and React, and is open-source, self-hostable, easy to deploy, manage, and upgrade. It is a secure workplace which allows messaging from behind your firewall. Mattermost is a famous alternative to proprietary SaaS messaging apps, as it allows you to bring all your team communication into a single place, making it anywhere searchable and accessible.

The <BrandName /> Mattermost Integration allows you to share or push a bug to your specified Mattermost channel from the <BrandName /> platform in a single click. You can share any UI observations and input with your team on Mattermost anytime, by just capturing a screenshot in the middle of your test session through <BrandName />. You can also annotate the screenshot or highlight your issue or input. The fields populated by you while marking as a bug through <BrandName /> gets displayed as information on Mattermost for that testing instance.

**Mattermost Integration with <BrandName />, like all of the integrations to 3rd party applications, is available for freemium as well as premium plan.**

## Integrate Mattermost With Your <BrandName /> Account

* * *

**Step 1:** Login to your <a href="https://accounts.lambdatest.com/login" onClick={CookieTrackingLogin}><BrandName /> account</a>. Make sure you have an Admin or User level access to see and install 3rd party integrations.

**Step 2:** Select **'Integrations'** tab from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, that have already been integrated as well as that are available to integrate with your <BrandName /> account.  
<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/go-to-integrations.webp').default} alt="Select 'Integrations' " width="1923" height="863"  className="doc_img"/>

**Step 3:** Hover to the 'Mattermost' block under "Communications" category, and click on "**Add**" button that appears.

<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/hover-to-mattermost-and-click.webp').default} alt="Hover to the 'Mattermost' "  className="doc_img"  width="1024" height="472"/>

**Step 4:** You need a webhook URL to integrate your workspace with <BrandName />. So copy the webhook URL of the proposed <BrandName /> integration on Mattermost.  
<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/Copy-the-incoming-webhook.webp').default} alt="copy the webhook URL"  className="doc_img"  width="1921" height="746"/>

>In case you don't have a webhook ready, you can find read about how to create a webhook [here](https://docs.mattermost.com/developer/webhooks-incoming.html).

**Step 5:** Enter your **webhook URL** copied from the above step, in the box that appears after clicking on Add in step 3, and then press "**Install**"

<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/paste-the-webhook.webp').default} alt="Enter your **webhook URL" width="1921" height="869" className="doc_img"/>

**Step 6:** Once you press on Install, Mattermost will be integrated with <BrandName /> on the same webhook URL, and an alert-box will appear on the top right corner of the screen stating that the integration is successful.  
<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/Intergration-successful-message.webp').default} alt="Mattermost will be integrated"  className="doc_img"  width="510" height="157"/>

**Step 7:** Voila! Go to Integrations tab again and you will see a Mattermost under "My Integrations".  
<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/integration-successful-from-top.webp').default} alt="you will see a Mattermost under My Integrations"  className="doc_img"  width="1922" height="865"/>

Also, you can see a **green tick** in front of Mattermost under Communication category, indicating that Mattermost has been successfully **installed**.
<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/integration-successful-list.webp').default} alt="Green Tick"  className="doc_img"  width="1922" height="863"/>

## How To Log Your First Bug Through Mattermost Integration?

* * *

**Step 1:** Select any of the test from the left navigation menu of <BrandName />. For this instance, we will be taking "**Real Time Testing**" option.

**Step 2:** Enter the URL of the web-app to be tested in the URL box. Press **'Start'** after selecting the configuration of browser and operating system as per your choice.

<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/real-time-testing-1.webp').default} alt="Enter the URL of the web-app"  className="doc_img"  width="1348" height="609"/>

**Step 3:** After the VM is launched and operable, you can perform testing on your web-app as per your choice, such as for finding bugs. Suppose if you come across any bug, then you need to click on the **Bug icon** from the left panel, for capturing a screenshot of the current VM instance.

<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/select-mark-as-bug.webp').default} alt="Launch Tests" width="1920" height="865"  className="doc_img"/>

**Step 4:** A screenshot will be captured and appear on your screen in an **in-built image editor**. Annotate any issue or a task as per your choice in this editor, and then press **"Mark as Bug"** button.

<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/highlight-and-mark-as-bug.webp').default} alt="A screenshot will be captured and appear on your screen"  className="doc_img"  width="1920" height="853"/>

**Step 5:** Complete the **Bug/Task/Issue Form** that appears upon clicking the **"Mark as Bug"** button, as per your requirement:
>* Select the **Issue type** as Bug/Task/Issue. Here, we have selected it as Bug.
* Set the **Priority** of the bug as per convenience.
* You can assign the bug to a member of your team by populating the field '**Assignee**'.
* Write the '**Summary**' of the bug that would be sent to the assigned member.
* You also get to post an optional **description** to help with the bug.

At the bottom of the form, please make sure to tick the check button  
stating **"Send to Mattermost"**.

>Note: By default, it would be **checked**, if Mattermost is already integrated. This button helps send the screenshot, as per the filled form, directly to your workspace, when the Bug is created. You can uncheck the button anytime if you do not wish the bug/task/issue on Mattermost 

Now click on **"Create Bug"** button to send the bug directly to Mattermost workspace. 

<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/assign-and-create-issue.webp').default} alt="send the bug directly to Mattermost workspace"  className="doc_img" width="750" height="793"/>

**Step 6:** After you click on **"Create Bug"**, you will be able to observe it being successfully marked through a single click effort. You will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. After few seconds you will be notified with a prompt message "**Bug successfully marked**" indicating that the screenshot has been pushed to your Mattermost workspace.

<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/Bug-marked-message.webp').default} alt="Image"  width="484" height="178" className="doc_img"/>

Login to your workspace on Mattermost and you will be able to notice the marked bug in the set channel assigned to the set person. All the data you provided through Lambdatest form would already be presented in it. <BrandName /> automatically includes test environment details and related screenshots in the screenshot as attachments.

<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/issue-marked-in-mattermost-channel.webp').default} alt="Image"  className="doc_img" width="1904" height="845"/>

A clickable link will be provided in the Mattermost channel along with the screenshot to instantly route users on their browser for a full screen view of the bug.

## How To Remove Mattermost Integration?

* * *

>You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **remove** your current integration. Here is how you can do that.

**Step 1:** Login to your <BrandName /> account.

**Step 2:** Select 'Integrations' from the left navigation menu bar & go to 'Communications' category. This will guide you to a screen where you will find 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Hover to Mattermost block. A **"REMOVE"** button will appear. Click on **'REMOVE'**.

<img loading="lazy" src={require('../assets/images/integrating-mattermost-with-lambdatest/remove-from-list.webp').default} alt="Image"  width="1920" height="848" className="doc_img"/>

>That was all you need to know for <BrandName /> + Mattermost Integration. Increase your productivity multifold with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> to help you out with any roadblock regarding our product. Happy testing! 

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
        Mattermost Integration
      </span>
    </li>
  </ul>
</nav>
