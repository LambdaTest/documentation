---
id: slack-integration
title: Slack Integration
hide_title: true
sidebar_label: Slack Integration
description: The LambdaTest Integration with Slack allows you to push a bug directly to your specified Slack channel from LambdaTest platform. 
keywords:
  - slack integration
  - lambdatest integration
  - bug reporting
  - team communication

url: https://www.lambdatest.com/support/docs/slack-integration/
site_name: LambdaTest
slug: slack-integration/
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
          "name": "Slack Integration",
          "item": "https://www.lambdatest.com/support/docs/slack-integration/"
        }]
      })
    }}
></script>

# Slack Integration
* * *

Slack is an acronym for **"Searchable Log of All Conversation and Knowledge"**. A cloud-based instant messaging software, offering tools and services for better team collaboration. Slack brings all your team communication together in one place. It provides real time messaging, screen sharing, voice calls, file sharing and powerful search through archives. You can create separate channels for different discussions, ensuring an integrated space with specific environments for every team.

The LambdaTest Integration with Slack allows you to push a bug directly to your specified Slack channel from LambdaTest platform. Share your UI observations and input with your teammates on anytime, by capturing a screenshot in the middle of your test session through LambdaTest. You can annotate the screenshot & highlight your issue or input. The fields populated by you when marking as bug through LambdaTest are displayed as information on Slack for that testing instance.

**Note**: LambdaTest Integration with Slack is included with service subscription.

## How To Integrate Slack With Your LambdaTest Account?

* * *

**Step 1:** Login to your LambdaTest account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **'Integration'** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Click on **'Add'** under the block that says 'Slack'.

<img loading="lazy" src={require('../assets/images/slack-integration/Capture48.webp').default} alt="Click on 'Add' " width="1357" height="652" className="doc_img"/>

**Step 4:** If you are already logged into **Slack**, you'll be redirected to a page where you have to post to a channel to confirm your identity. You can choose any of your already established channel to share your UI observations with your team. You can share the same with a fellow or colleague as well, through a personal channel.

<img loading="lazy" src={require('../assets/images/slack-integration/5.webp').default} alt="confirm your identity" width="1359" height="604" className="doc_img"/>

**Step 5:** If you are not already logged in, you will be asked to provide Slack URL of your workspace. Enter your workspace URL. You will find it on top left corner. Click the arrow that is pointing **downwards**. We have highlighted the same in **blue** for you.

<img loading="lazy" src={require('../assets/images/slack-integration/w2-1.webp').default} alt="Enter your workspace URL." width="1006" height="691" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/slack-integration/5.11.webp').default} alt="Image" width="1341" height="635" className="doc_img"/>

**Step 6:** Provide your **Slack** crendentials to login.

<img loading="lazy" src={require('../assets/images/slack-integration/5.2.webp').default} alt="Provide your Slack crendentials to login" width="1345" height="635" className="doc_img"/>

>* ** Why we ask for your login credentials?**   
Slack APIs uses OAuth 2.0's [ authorization code grant flow][8] for generating access tokens on user's behalf.    
>* ** What is an Access token?**    
Access tokens are strings with authorization key required to access an API. They are issued to the client server and are usually opaque. They are used for requesting access to protected, user-specific resources. Access tokens are vital from a security point of view & can be generated in different formats, depending upon security requirements specified on the resource server.

**Step 7:** Once you login to Slack, choose the channel you want to post on. A notification would be shared on to all the members belonging to that channel, informing about your integration.

<img loading="lazy" src={require('../assets/images/slack-integration/w3-1.webp').default} alt="choose the channel you want to post on" width="1002" height="693" className="doc_img"/>

That's it! Go to Integrations again and you will be able to notice a **green tick** indicating that Slack is successfully **installed**.

<img loading="lazy" src={require('../assets/images/slack-integration/Capture49.webp').default} alt="notice a green tick" width="1359" height="650" className="doc_img"/>

## How To Log Your First Bug Through LambdaTest Integration for Slack?

* * *

**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking "**Real Time Test**" option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & hit '**Start**'.

<img loading="lazy" src={require('../assets/images/slack-integration/w5-1.webp').default} alt="Present a URL of the web-app you need" width="1365" height="658" className="doc_img"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **Bug icon** from the left panel for [capturing a screenshot](https://www.lambdatest.com/full-page-screen-capture) of the same. We have highlighted that option with yellow in the below image.

<img loading="lazy" src={require('../assets/images/slack-integration/Capture9-4.webp').default} alt="You can perform testing on your web-app for finding bugs"  width="1348" height="619"className="doc_img"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an **in-built image editor**. Once you are done highlighting the bug, click on the button that says **"Mark as Bug"**.

<img loading="lazy" src={require('../assets/images/slack-integration/Capture13.webp').default} alt="you can annotate any issue or a task with an in-built image editor" width="1320" height="618" className="doc_img"/>

**Step 5:** After clicking on **"Mark as Bug"** button a form would open up. Fill the fields as per your requirement.
>* You can select the **Issue type**.
* You can set the **priority** of the bug.
* You can assign the bug to a colleague by populating the field '**Assignee**'.
* You also get to post a **description** to help relate the cause of the issue or the task.

At the bottom of the form you will find a check button **"Send to Slack"**. By default, it would be **checked** if you are already integrated. This button when checked, will push the screenshot directly to your workspace after you click on **"Create Bug"**. You can **uncheck** the button if you do not wish to share a particular screenshot with your team. 

<img loading="lazy" src={require('../assets/images/slack-integration/w8-1.webp').default} alt="Image" width="1365" height="619" className="doc_img"/>

**Step 6:** After you click on **"Create Bug"**, you will be able to observe it being successfully marked through a single click effort. You will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. After few seconds you will be notified with a prompt message "**Bug successfully marked**" indicating that the screenshot has been pushed to your Slack workspace.

<img loading="lazy" src={require('../assets/images/slack-integration/Capture15.webp').default} alt="Image" width="347" height="75" className="doc_img"/>

Login to your workspace and you will be able to notice the logged issue right away! All the data you provided through Lambdatest would already be presented in it. LambdaTest automatically includes test environment details and related screenshots in the screenshot as attachments.

<img loading="lazy" src={require('../assets/images/slack-integration/w10-1.webp').default} alt="notice the logged issue" width="1001" height="694" className="doc_img"/>

A clickable link will be provided in the Slack channel along with the screenshot to instantly route users on their browser for a full screen view of the bug.

## How To Get Slack Notification For Your Automation Tests?
---

Once you integrate LambdaTest integration for Slack, you need to configure notification settings to get test automation notifications on your integrated Slack channel.

1. Go to the **Integrations** tab from the left sidebar menu.

2. From MY INTEGRATIONS, navigate to the **Settings** under the Slack integration box.

<img loading="lazy" src={require('../assets/images/slack-integration/1.png').default} alt="notice the logged issue" width="612" height="472" className="doc_img"/>

3. Choose the **NOTIFICATION PREFERENCES** like Screenshot test completion messages, Build completion messages, etc. Then click **Save**.

<img loading="lazy" src={require('../assets/images/slack-integration/2.png').default} alt="notice the logged issue" width="545" height="347" className="doc_img"/>

4. Now run the automation test and visit the Slack channel to view the build notification containing TestID, Tester, Test name, Status, Device, etc.

<img loading="lazy" src={require('../assets/images/slack-integration/3.PNG').default} alt="notice the logged issue" width="437" height="349" className="doc_img"/>

## How To Remove The Integration for Slack?

* * *

>You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **remove** your current integration. Here is how you can do that.

**Step 1:** Login to your LambdaTest account.

**Step 2:** Select 'Settings' from the left navigation menu bar & click on 'Integrations'. This will guide you to a screen where you will find 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Click on **'REMOVE'**. You can find the remove button right under the **'Slack'** block which would be highlighted with a green tick.

<img loading="lazy" src={require('../assets/images/slack-integration/Capture50.webp').default} alt="find the remove button right under the 'Slack' "  width="1365" height="647" className="doc_img"/>

>That was all you need to know for LambdaTest + Slack Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out with any roadblock regarding our product. Happy testing! 



[8]: https://tools.ietf.org/html/rfc6749#section-4.1

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
        Slack Integration
      </span>
    </li>
  </ul>
</nav>