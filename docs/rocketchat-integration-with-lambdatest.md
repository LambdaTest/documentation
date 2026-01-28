---
id: rocketchat-integration-with-lambdatest
title: Rocket.Chat Integration With TestMu AI
hide_title: false
sidebar_label: Rocket.Chat
description: The TestMu AI Rocket.Chat Integration allows you to share or push a bug to your specified Rocket.Chat channel from the TestMu AI platform in a single click. You can share any UI observations and input with your team on Rocket.Chat anytime, by just capturing a screenshot in the middle of your test session through TestMu AI. You can also annotate the screenshot or highlight your issue or input. The fields populated by you while marking as bug through TestMu AI gets displayed as information on Rocket.Chat for that testing instance.
keywords:
  - rocket.chat integration
  - testmu ai integration
  - bug reporting
  - team communication

url: https://www.testmuai.com/support/docs/rocketchat-integration-with-testmu/
site_name: LambdaTest
slug: rocketchat-integration-with-testmu/
canonical: https://www.testmuai.com/support/docs/rocketchat-integration-with-testmu/
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
          "name": "Rocket.Chat Integration",
          "item": `${BRAND_URL}/support/docs/rocketchat-integration-with-testmu/`
        }]
      })
    }}
></script>

Rocket.Chat is a free, open-source communication platform that allows collaboration, file sharing, and real-time chat sharing. It's cross-platform and open source, allowing users to customize and extend its functionality to meet their team's or business needs.

The <BrandName /> Rocket.Chat Integration enables users to share or push bugs to their specified channel, capture screenshots, annotations, and issue information, with the fields marked as bugs displayed on Rocket.Chat for that testing instance.

> Rocket.Chat Integration with <BrandName /> is available for freemium as well as premium plan.

## Integrate Rocket.Chat from your <BrandName /> Account

**Step 1:** Login to your <BrandName /> account. You should have Admin or User level access to see and install integrations.

**Step 2:** Click on Settings -> Integrations -> Communication.

**Step 3:** Click on **Connect** button of `Rocket Chat` block.

**Step 4:** Now, provide your Rocket.Chat Webhook URL to establish integration with <BrandName /> and click on **install** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/integration/team-communication/rocketchat/rocketchat-integration.mp4').default} type="video/mp4" />
</video>

:::info generate your webhook url

- Visit your Rocket.Chat account -> **Workspace** tab.
- Click on the **Integrations** -> click on **New** button to generate your new webhook.
- Toggle the enable button to true.
- Enter the details and click on the **Save** button -> copy your Webhook URL.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/integration/team-communication/rocketchat/rocketchat-webhook.mp4').default} type="video/mp4" />
</video>

:::

## Lodge your First Bug

> Note: If you are using Rocket.Chat for the first time, then make sure to create a project for yourself. It is a pre-requisite in order to push screenshots from your <BrandName /> account.

**Step 1:** Start with any type of testing, for the demo purpose we are going with the **Real Time Testing**.

**Step 2:** Enter your Project URL and configure for browser and operating system of your choice & hit **Start**.

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the Bug icon from the left panel for capturing a screenshot of the same.

**Step 4:** After clicking on "Mark as Bug" button a Teamwork specific form would open up. Fill the fields as per your requirement.
- Select which project should the ticket go under.
- Set which Task List should the bug go under.
- Set the priority of the issue.
- Mention the Title as well to easily organize your bugs.
- Write a description to help relate the cause of the issue or the task.

**Step 5:** Click on **Mark as Bug** button. Now go to your dashboard and check a ticket will be created for the same.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/integration/team-communication/rocketchat/rocketchat-bug.mp4').default} type="video/mp4" />
</video>

**Step 6:** Go to your Rocket.Chat dashboard and you can check on your assigned channel, a notification is sent for the same.

## Uninstall Rocket.Chat Integration

**Step 1:** Login to your <BrandName /> account. You should have Admin or User level access to see and install integrations.

**Step 2:** Click on Settings -> Integrations -> Communication.

**Step 3:** Click on the **Remove** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/integration/team-communication/rocketchat/rocketchat-remove.mp4').default} type="video/mp4" />
</video>

>That was all you need to know for <BrandName /> + Rocket.Chat Integration. Increase your productivity multifold with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out with any roadblock regarding our product. Happy testing! 
