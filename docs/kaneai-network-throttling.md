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
url: https://www.testmu.ai/support/docs/kaneai-network-throttling
site_name: LambdaTest
slug: kaneai-network-throttling
canonical: https://www.testmu.ai/support/docs/kaneai-network-throttling/
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
          "name": "Network Throttling",
          "item": `${BRAND_URL}/support/docs/kaneai-network-throttling/`
        }]
      })
    }}
></script>

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

<img loading="lazy" src={require('../assets/images/kane-ai/throttling_pre_authoring.jpeg').default} alt="throttling-pre-authoring" className="doc_img"/>

You can select desired Network setting & your session will start with that setting.

### Honoring the Network setting 
If you want to honor the Network settings in the Authoring session too: 

- Click on the `Honor network profile configuration` toggle.

This will apply network setting in the Authoring session too, allowing you to experience how your Application works under that particular Network setting.

:::tip
 Recommended to use this setting only if its absolutely necessary, as this will hamper Authoring experience in low Network Bandwidth settings.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/honor_throttling.jpeg').default} alt="honor-throttling" className="doc_img"/>

:::note
 Network setting will always be Honored while executing the Test Case & code generation, the Honoring option is applicable for Authoring mode only.
:::

## Changing Network Throttling setting mid session :
To change Network Throttling setting in between the Authoring session:

- Click on the `Change network throttling` present in Actions Tab, or type `/` to access it.

<img loading="lazy" src={require('../assets/images/kane-ai/actions_tab.jpeg').default} alt="actions-tab" className="doc_img"/>

- Then select desired Network setting.

<img loading="lazy" src={require('../assets/images/kane-ai/throttling_mid_authoring.jpeg').default} alt="network-throttling-options" className="doc_img"/>

A change in Network throttling setting is also condidered as a step in the Test Case.

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

<img loading="lazy" src={require('../assets/images/kane-ai/throttling_pre_playground.jpeg').default} alt="playground-throttling-setting" className="doc_img"/>

## Network Throttling in Test Runs
While executing your Test Cases every Network Throttle step will be honoered. In addition to the Authoring & Editing mode, you can also select the Network setting to initialize your session with :

- Click on `Advanced Configurations` present in the `Run with HyperExecute` section or `Schedule Test Runs` section while executing a Test Run.  

<img loading="lazy" src={require('../assets/images/kane-ai/advanced_configurations_pre_execution.png').default} alt="advanced-configurations-pre-execution" className="doc_img"/>

- Network Throttling setting is available in the `Network Settings` section.

<img loading="lazy" src={require('../assets/images/kane-ai/throttling_in_network_settings.png').default} alt="throttling-in-network-settings" className="doc_img"/>

- You can view where & when Network Throttling commands are executed in the command logs present in the App Automation page.

<img loading="lazy" src={require('../assets/images/kane-ai/throttling_command_script.jpeg').default} alt="throttling-command-script" className="doc_img"/>

:::note
 Offline Mode is not supported yet but it will be added in future release.
:::