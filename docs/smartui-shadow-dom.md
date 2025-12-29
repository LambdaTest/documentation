---
id: smartui-shadow-dom
title: Shadow DOM
sidebar_label: Shadow DOM
description: In this documentation, learn about about the shadow dom feature of smartui
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
url: https://www.testmu.ai/support/docs/smartui-shadow-dom
slug: smartui-shadow-dom

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Smart Multiple Assets",
          "item": "https://www.lambdatest.com/support/docs/smartui-shadow-dom/"
        }]
      })
    }}
></script>
The Shadow DOM feature in SmartUI allows for testing and capturing assets from content encapsulated within web components. Web components often use Shadow DOM to encapsulate their internal structure and styling, isolating it from the main document. As a result, traditional DOM queries and asset capturing methods might not access or interact with content inside the shadow tree.

SmartUI's Shadow DOM support ensures that assets and UI components rendered within shadow roots are correctly captured and tested, making it easier to handle and test web applications built using web components that leverage the Shadow DOM.

## Purpose of the Shadow DOM Feature
In typical UI tests, SmartUI captures assets and evaluates elements directly from the DOM of the page under test. However, when content is encapsulated inside a Shadow DOM (within a web component), it becomes isolated, and the test framework might not be able to access or interact with it.

SmartUI's Shadow DOM feature addresses this limitation by:

- Enabling SmartUI to traverse and interact with shadow trees.
- Allowing tests to capture assets from the shadow DOM.
- Ensuring that resources (e.g., styles, images, scripts) inside shadow roots are included in the testing process.

This feature is critical for comprehensive testing of modern web applications that make use of custom elements and web components, which are often built with Shadow DOM for encapsulation.