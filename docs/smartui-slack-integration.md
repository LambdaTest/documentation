---
id: smartui-slack-integration
title: Slack Integration with SmartUI
sidebar_label: Slack Integration
description: Integrate Slack with TestMu AI SmartUI for real-time notifications. Follow our guide to set up, configure, and receive SmartUI job updates directly in your Slack workspace.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests
url: https://www.testmuai.com/support/docs/smartui-slack-integration/
site_name: TestMu AI
slug: smartui-slack-integration/
canonical: https://www.testmuai.com/support/docs/smartui-slack-integration/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';



<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/smartui-slack-integration/"
    },
    "headline": "Slack Integration with SmartUI",
    "description": "Integrate Slack with TestMu AI SmartUI for real-time notifications. Follow our guide to set up, configure, and receive SmartUI job updates directly in your Slack workspace.",
    "url": "https://www.testmuai.com/support/docs/smartui-slack-integration/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "Visual Regression",
      "Visual Regression Testing Guide",
      "Visual Regression Test Automation"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-11-25T15:30:00+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Slack Integration with SmartUI",
      "description": "Integrate Slack with TestMu AI SmartUI for real-time notifications. Follow our guide to set up, configure, and receive SmartUI job updates directly in your Slack workspace.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Navigate to the Integration Page",
          "text": "Login to your TestMu AI Account. Navigate to the Settings > Integration page. Select the Communication tab and search for Slack.",
          "url": "https://www.testmuai.com/support/docs/smartui-slack-integration/#step-1-navigate-to-the-integration-page"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Integrate the Slack with your TestMu AI Account",
          "text": "Click on the Connect button and then Install for the Slack integration. NOTE : If you are already logged into Slack, you'll be redirected to a page where you have to post to a channel to confirm your identity or else you will be asked to provide Slack URL of your workspace. Select the channel you want to post on. Click on Allow button. A notification would be shared on to all the members belonging to that channel, informing about your integration.",
          "url": "https://www.testmuai.com/support/docs/smartui-slack-integration/#step-2-integrate-the-slack-with-your-testmu-ai-account"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Choose Which Builds Send a Slack Message",
          "text": "Go to your desired Project. Click on the Project Settings button and open the Notifications tab. Turn on Receive Slack alerts for builds in this project. Under Send a Slack message when, tick Changes found, New baseline or Build completed. Click on the Save Settings button.",
          "url": "https://www.testmuai.com/support/docs/smartui-slack-integration/#step-3-choose-which-builds-send-a-slack-message"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run a Build and Check Slack",
          "text": "Run a build in the project and open the Slack channel you selected in Step 2. Each message links to the build in SmartUI.",
          "url": "https://www.testmuai.com/support/docs/smartui-slack-integration/#step-4-run-a-build-and-check-slack"
        }
      ]
    }
  ]) }}
/>

This document will guide you to integrate your SmartUI jobs and Slack, allowing you to receive real-time notifications and crucial job details directly within your Slack workspace.

## Prerequisite

- An active <BrandName /> account with Admin or User-level access.
- Set up a dedicated Slack channel where you want to receive notifications from SmartUI.
- Should have setup the SmartUI suite.

## Step 1: Navigate to the Integration Page

- Login to your <BrandName /> Account.
- Navigate to the **Settings** > **Integration** page.
- Select the **Communication** tab and search for Slack.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/integration/products/slack/1.mp4').default} type="video/mp4" />
</video>

## Step 2: Integrate the Slack with your <BrandName /> Account

- Click on the **Connect** button and then **Install** for the Slack integration.

> **NOTE :** If you are already logged into Slack, you'll be redirected to a page where you have to post to a channel to confirm your identity or else you will be asked to provide Slack URL of your workspace.

- Select the channel you want to post on. Click on **Allow** button.

A notification would be shared on to all the members belonging to that channel, informing about your integration.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/integration/products/slack/2.mp4').default} type="video/mp4" />
</video>

Once Slack is connected, it shows as **Connected** under **My Integrations**.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/slack-alerts/integrations.png').default} alt="Slack shown as Connected under My Integrations" className='doc_img' width="1568" height="507"/>

## Step 3: Choose Which Builds Send a Slack Message

Slack alerts are set per project.

- Go to your desired Project.
- Click on the **Project Settings** button and open the **Notifications** tab.
- Turn on **Receive Slack alerts for builds in this project**.
- Under **Send a Slack message when**, tick the events you want.
- Click on the **Save Settings** button.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/slack-alerts/settings.png').default} alt="Project Settings Notifications tab with Slack alerts on and the Changes found, New baseline and Build completed events" className='doc_img' width="1568" height="456"/>

| Event | Default | What you get |
|---|---|---|
| **Changes found** | On | An alert when a build has screenshots with changes found, listing each mismatched screenshot. |
| **New baseline** | On | An alert when the project baseline changes. |
| **Build completed** | Off | One message for every build that finishes, whatever its result. |

:::note
The event checkboxes appear only after Slack is connected for your organization. Until then, the Notifications tab asks you to configure the Slack integration.
:::

## Step 4: Run a Build and Check Slack

Run a build in the project and open the Slack channel you selected in Step 2. Each message links to the build in SmartUI.

## Slack Messages Sent by SmartUI

### Changes Found Alert

Sent when **Changes found** is ticked and a build has screenshots with changes found. It lists each mismatched screenshot with its mismatch percentage and configuration.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/slack-alerts/msg-changes-found-alert.png').default} alt="Slack changes found alert listing a screenshot with its mismatch percentage" className='doc_img' width="1568" height="399"/>

### Build Completed Messages

Sent when **Build completed** is ticked. Each message shows the build result, a link to the build, the project, who ran it, the screenshot counts, the build ID and a button to open the build.

| Message | When it is sent |
|---|---|
| **Build approved** | Every screenshot in the build is approved. |
| **Build needs review** | The build has new screenshots, changes found or screenshots under review. The button opens the screenshots to review. |
| **Baseline build completed** | A baseline build finished. Shows the number of screenshots. |
| **Build failed** | The build finished without capturing any screenshots. |

<img loading="lazy" src={require('../assets/images/smart-visual-testing/slack-alerts/msg-approved.png').default} alt="Slack message: Build approved, with Total and Approved counts" className='doc_img' width="860" height="460"/>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/slack-alerts/msg-needs-review-new.png').default} alt="Slack message: Build needs review, with Total and New counts and a Review 1 Screenshot button" className='doc_img' width="1070" height="514"/>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/slack-alerts/msg-needs-review-changes.png').default} alt="Slack message: Build needs review, with Total and Changes found counts" className='doc_img' width="860" height="466"/>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/slack-alerts/msg-baseline.png').default} alt="Slack message: Baseline build completed, with the screenshot count" className='doc_img' width="860" height="450"/>

### How SmartUI Picks the Message

- A build sends one message. If it has changes found and **Changes found** is ticked, you get the changes found alert instead of the build completed message.
- If **Changes found** is not ticked and **Build completed** is, a build with changes found sends **Build needs review** with the counts.
- The build completed message is sent shortly after the build finishes, so the counts are final. Builds that finish per test session wait until the last session has ended.
- Rerunning a single screenshot does not send a build completed message.
- If **Build completed** is not ticked, the project gets the same alerts as before.

## Remove the Slack Integration

- Go to the **Settings** > **Integration** page.
- Select the **Communication** tab and search for Slack.
- Click on the **Remove** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/integration/products/slack/4.mp4').default} type="video/mp4" />
</video>
