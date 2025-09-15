---
id: kane-ai-network-assertions
title: Network Assertions
hide_title: false
sidebar_label: Network Assertions
description: In this detailed guide, you will learn how you can add network assertions in your tests.
keywords:
  - network
  - network assertion
  - assertion
  - lambdatest kaneai
url: https://www.lambdatest.com/support/docs/kane-ai-network-assertions
site_name: LambdaTest
slug: kane-ai-network-assertions/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "ANetwork Assertions",
          "item": "https://www.lambdatest.com/support/docs/kane-ai-network-assertions"
        }]
      })
    }}
></script>
# Network Assertions
The **Network Assertions** feature in KaneAI enables you to test and validate the behavior of your application at the **network layer**.  
This is useful when you need to ensure that API calls, response codes, payloads, or request timings meet expected conditions during your test executions.  

# Let's see how to add Network Assertions in a Test

- Start a Desktop/Mobile Web Test. 

- To add Network Assertions you have to make some API calls. After going to your desired site or hitting API request, you can see the Network calls made so far through the **Assert Network Logs** option available in the " / " commands. 

<img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/hit-network-req.png').default} alt="Image" className="doc_img img_center"/>

<img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/network-assertion-button.png').default} alt="Image" className="doc_img img_center"/>

- Here you will find all the Network requests made in this session so far, you can filter the requests on basis of **Statuses** or **Methods**:

<img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/network-logs.png').default} alt="Image" className="doc_img img_center"/>

- You can select specific keys from the Request Headers or add entire Request or Response block in the Assertion by clicking on the `Add Assertion`. All the specified values will be asserted in a single step. 

<img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/network-log-headers.png').default} alt="Image" className="doc_img img_center"/>

<img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/network-log-headers.png').default} alt="Image" className="doc_img img_center"/>

- The Request will be stored as an variable & assertions will be made using that. 

<img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/network-assertion-block.png').default} alt="Image" className="doc_img img_center"/>

- You can re-use that particular request again through the `{{` syntax. 

<img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/network-req-variable.png').default} alt="Image" className="doc_img img_center"/>

- Variable will be stored in Json format so you can use `header.status` type syntax to get the nested values/objects. 

<img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/child-variables.png').default} alt="Image" className="doc_img img_center"/>