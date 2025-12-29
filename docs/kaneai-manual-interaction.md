---
id: kaneai-manual-interaction
title: KaneAI Manual Interaction Mode 
hide_title: false
sidebar_label: Manual Interaction
description: Learn how to KaneAI simplifies test automation by allowing manual interaction to create prompts in natural language, analyzing test steps, generating code in various languages. 
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai manual interaction
url: https://www.lambdatest.com/support/docs/kaneai-manual-interaction
site_name: LambdaTest
slug: kaneai-manual-interaction/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "KaneAI Manual Interaction Mode",
          "item": "https://www.lambdatest.com/support/docs/kaneai-manual-interaction/"
        }]
      })
    }}
></script>
### Overview
Manual Interaction support in KaneAI enables users to manually interact with the applications in real-time during authoring or playground session to record test steps. This mode lets you momentarily pause the agent, take full control of the application under test, and reach an exact UI state before resuming automated authoring. Whether you're testing Web or Mobile apps, Manual Interaction allows for actions like clicking, typing, scrolling and navigating through the application, simulating real user behaviors.

:::note
Manual interaction is now supported for both Web Browser Test Authoring on desktop and Mobile App Test Authoring on Android and iOS.  
:::

### Guide for using Manual Interaction:

While in Authoring mode, simply interact with the app yourself, after enabling manual interaction by clicking on `Manual Interaction` button - the Agent will record your actions and turn them into test steps automatically.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/switch_to_manual_interaction.png').default} alt="" className="doc_img"/>

If you want to switch back to natural language instructions then you can click on `Turn off Manual Interaction`. Instructions for assertions currently are only supported in natural language.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/manual_interaction_mode.png').default} alt="" className="doc_img"/>

At each step performed, it is highlighted if the instruction was recorded using manual interaction or not with the help of an icon.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/on_to_off_manual_interaction.png').default} alt="" className="doc_img"/>

### Example Use Cases:
 
- Execute the workflow manually once and have the agent convert it into an automated test script.
- When the intended action is too intricate to articulate clearly in natural language.
- Navigating to a screen accessible only through an long tap sequence.
- Working with dynamic UI elements such as infinite-scroll lists or carousels which render items on demand.

** Note** that following operations are not present in the Manual Interaction for now:

#### Web Browser on Desktop:
- Drag and drop on canvas elements
- Double click
- Right click
- Hover

#### Mobile App:
- Two fingers scroll
- Click and hold 
- Double click
- Copy paste 
- Recent apps 
- Mobile keyboard support 
- Using backspace
- Typed characters will be considered in the instruction even if they didn't get typed in the input box. eg: In an Input box where only numbers are allowed if you try to type alphabets then those will get included in the instruction but not in the input box. 
- System popups 

### Tutorial:  

<iframe src="https://app.trupeer.ai/embed?slug=vrSqRvouk" width="640" height="360" frameborder="0" allowfullscreen="true" className="KaneIframe"></iframe>