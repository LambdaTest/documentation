---
id: kaneai-network-throttling
title: Network Throttling
hide_title: true
sidebar_label: Network Throttling
description: Guide for usage of Network Throttling feature.
keywords:
  - network throttling
  - network bandwidth
  - network setting
url: https://www.testmuai.com/support/docs/kaneai-network-throttling/
site_name: TestMu AI
slug: kaneai-network-throttling/
canonical: https://www.testmuai.com/support/docs/kaneai-network-throttling/
---


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
      "@id": "https://www.testmuai.com/support/docs/kaneai-network-throttling/"
    },
    "headline": "Network Throttling",
    "description": "Guide for usage of Network Throttling feature.",
    "url": "https://www.testmuai.com/support/docs/kaneai-network-throttling/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "network throttling",
      "network bandwidth",
      "network setting"
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
    "dateModified": "2026-09-09T19:16:50+05:30"
  }) }}
/>

# Network Throttling
***
The Network Throttling feature in Kane AI enables users to simulate various network conditions during mobile app testing. 
This document outlines how to configure and use network throttling in Kane AI for mobile test creation & execution.

Following are the Network Throttling settings available:

| Throttling Setting | Download Speed |  Upload Speed | Latency |
| ---------  | ------------ | ----------- | ------------ |
| 2G | ↓ 30 - 50kbps | ↑ 1 - 16 kbps | 500ms |
| 3G | ↓ 100 - 200kbps | ↑ 50 - 64 kbps | 400ms |
| 3G+ | ↓ 3 - 5mbps | ↑ 1 - 2 mbps | 100ms |
| 4G LTE | ↓ 13 - 15mps | ↑ 4 - 7 kbps | 70ms |
| 4G Advanced | ↓ 23 - 25mbps | ↑ 9 - 12 mbps | 20ms |
| Custom | ~ kbps | ~ kbps | ~ ms |

You can create session-specific throttling by selecting the `Custom` option.

## How to Set Up Network Throttling ?
For your mobile app test session, network throttling can be set up in advance by applying those settings from the start of the Authoring session, or you can modify them at any point during the session.

### Selecting Network Setting
- Go to `Advanced Settings` in the `Create App Test` section to add Network Throttling setting in advance.

You can select desired Network setting & your session will start with that setting.

### Applying the Network Profile

KaneAI always honors the configured network throttling profile during authoring and test case execution. The **Honor network profile configuration** checkbox has been removed; no additional setting is required to apply the profile.

:::note
Low-bandwidth profiles also affect your authoring session, so application actions may take longer. Select **No Throttling** when you do not need to simulate a restricted network connection.
:::

## Changing Network Throttling setting mid session :
To change Network Throttling setting in between the Authoring session:

- Click on the `Change network throttling` present in Actions Tab, or type `/` to access it.

<img loading="lazy" src={require('../assets/images/kane-ai/actions_tab.jpeg').default} alt="actions-tab" className="doc_img"/>

- Then select desired Network setting.

<img loading="lazy" src={require('../assets/images/kane-ai/throttling_mid_authoring.jpeg').default} alt="network-throttling-options" className="doc_img"/>

A change in the network throttling profile is recorded as a step in the test case. The selected profile applies during authoring and when that step executes in a test run.

You can edit the Network Throttling setting at that particular step too. To do that: 

- `Pause` the execution flow to enter into the **Draft** state.
- Click on the `Edit Instruction` button & change the Network setting.

<img loading="lazy" src={require('../assets/images/kane-ai/edit_throttling_step.jpeg').default} alt="edit-throttling-step" className="doc_img"/>

## Changing network throttling in Edit Test Steps mode
Before you begin editing a test case , you can set up network throttling. This Edit mode specific setting will overwrite the network configuration previously established during the app session's initialization in Authoring mode.

:::note
 The network throttling for your Editing session is determined by what you set when you start that session. If you don't specify any network settings for the Edit mode, no throttling will be applied. The network settings mentioned while initializing the Authoring session will not be applicable in the Edit session, as saving changes in the Edit mode creates a new test case version.
 
 And all Test Case executions, like Test Runs and code generation, are performed on the test case's latest saved version.
:::

## Network Throttling in Test Runs
During test case execution, KaneAI always honors the configured network throttling profile and every Network Throttle step. In addition to the Authoring & Editing mode, you can also select the Network setting to initialize your session with :

- Click on `Advanced Configurations` present in the `Run with HyperExecute` section or `Schedule Test Runs` section while executing a Test Run.  

<img loading="lazy" src={require('../assets/images/kane-ai/advanced_configurations_pre_execution.png').default} alt="advanced-configurations-pre-execution" className="doc_img"/>

- Network Throttling setting is available in the `Network Settings` section.

<img loading="lazy" src={require('../assets/images/kane-ai/throttling_in_network_settings.png').default} alt="throttling-in-network-settings" className="doc_img"/>

- You can view where & when Network Throttling commands are executed in the command logs present in the App Automation page.

<img loading="lazy" src={require('../assets/images/kane-ai/throttling_command_script.jpeg').default} alt="throttling-command-script" className="doc_img"/>

:::note
 Offline Mode is supported only for iOS devices.
:::
