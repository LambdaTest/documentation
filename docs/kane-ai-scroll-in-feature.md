---
id: kane-ai-scroll-in-feature
title: KaneAI - Scroll in Element
hide_title: false
sidebar_label: Scroll in Element
description: Learn how to run scroll commands during your web testing.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai scroll elements
  - kaneai sidebar scroll
url: https://www.testmu.ai/support/docs/kane-ai-scroll-in-feature/
site_name: LambdaTest
slug: kane-ai-scroll-in-feature
canonical: https://www.testmu.ai/support/docs/kane-ai-scroll-in-feature/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "KaneAI Scroll In Elements",
          "item": `${BRAND_URL}/support/docs/kane-ai-scroll-in-feature/`
        }]
      })
    }}
></script>
The "Scroll in Element" feature in Kane AI allows users to perform scrolling actions on web elements during testing by using natural language commands. With this feature, you can easily navigate through elements like sidebars, lists, or any scrollable content on a web page.

## Supported Commands
You can pass the following commands in English to scroll within the web test:

- **"Scroll left" :** Moves the content horizontally to the left.
- **"Scroll right" :** Moves the content horizontally to the right.
- **"Scroll up" :** Moves the content vertically upwards.
- **"Scroll down" :** Moves the content vertically downwards.

## Example Use Cases

- **Scroll a Sidebar:** If a web page has a left or right sidebar, you can command Kane AI to scroll within the sidebar to access hidden elements.
- **Navigate Lists:** Use scrolling commands to move through long lists or dropdown menus.
- **Access Off-screen Content:** When elements are outside the viewport, scrolling commands help bring them into view.

## How to Use

**Step 1:** Identify the element you want to scroll.

**Step 2:** Use the appropriate command based on the direction you need to scroll. For example:

- "Scroll right in the sidebar" to move right in a horizontal sidebar.
- "Scroll down" if you want to scroll downwards on a long page.

**Step 3:** Verify the content is in view after the scrolling action.