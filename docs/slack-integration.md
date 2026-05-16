---
id: slack-integration
title: Slack Integration With TestMu AI
hide_title: false
sidebar_label: Slack
description: The TestMu AI Integration with Slack allows you to push a bug directly to your specified Slack channel from TestMu AI platform. 
keywords:
  - slack integration
  - testmu ai integration
  - bug reporting
  - team communication
url: https://www.testmuai.com/support/docs/slack-integration/
site_name: TestMu AI
slug: slack-integration/
canonical: https://www.testmuai.com/support/docs/slack-integration/
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
          "name": "Slack Integration",
          "item": `${BRAND_URL}/support/docs/slack-integration/`
        }]
      })
    }}
></script>
Slack is a cloud-based messaging platform designed for teams to collaborate in real time. It offers organized conversations through channels, instant messaging, file sharing, and powerful integrations with developer and productivity tools — making it ideal for DevOps and QA workflows.

The <BrandName /> Slack Integration enables users to share or push bugs to their specified channel, capture screenshots, annotations, and issue information.

> Slack Integration with <BrandName /> is available for freemium as well as premium plan.

## Integrate Slack from your <BrandName /> Account

**Step 1:** Login to your <BrandName /> account. You should have Admin or User level access to see and install integrations.

**Step 2:** Click on Settings -> Integrations -> Communication.

**Step 3:** Click on **Connect** button of `Slack` block.

**Step 4:** Now click on **install** button. If you’re already logged into your Slack account, you just have to post to a channel to confirm your identity. However, if you’re not logged into your Slack account, provide the Slack URL of your workplace.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/slack-integration/video1.mp4').default} type="video/mp4" />
</video>

## Lodge your First Bug

> Note: If you are using Slack for the first time, then make sure to create a channel for yourself. It is a pre-requisite in order to push messages from your <BrandName /> account.

**Step 1:** Start with any type of testing, for the demo purpose we are going with the **Real Time Testing**.

**Step 2:** Enter your Project URL and configure for browser and operating system of your choice & hit **Start**.

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the Bug icon from the left panel for capturing a screenshot of the same.

**Step 4:** After clicking on "Mark as Bug" button, a specific form would open up. Fill the fields as per your requirement and check mark the option for "Send to Slack".

**Step 5:** Click on **Mark as Bug** button. Now go to your respective slack channel and you can check a notification is sent for the same.

## Uninstall Slack Integration

**Step 1:** Login to your <BrandName /> account. You should have Admin or User level access to see and install integrations.

**Step 2:** Click on Settings -> Integrations -> Communication.

**Step 3:** Click on the **Remove** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/slack-integration/video2.mp4').default} type="video/mp4" />
</video>

>That was all you need to know for <BrandName /> + Slack Integration. Increase your productivity multifold with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out with any roadblock regarding our product. Happy testing! 
