---
id: kane-ai-modules
title: 'Utilizing Modules Feature in KaneAI: A Step-by-Step Guide'
hide_title: false
sidebar_label: Modules
description: Learn how to use custom modules while executing your tests using the Kane AI
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai geolocation support
  - kaneai tunnel support
  - kaneai proxy support
url: https://www.testmu.ai/support/docs/kane-ai-modules/
site_name: LambdaTest
slug: kane-ai-modules/
canonical: https://www.testmu.ai/support/docs/kane-ai-modules/
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
          "name": "KaneAI Modules",
          "item": `${BRAND_URL}/support/docs/kane-ai-modules/`
        }]
      })
    }}
></script>
The KaneAI Modules feature is a powerful tool for optimizing your testing processes. By converting test steps into reusable modules, you can enhance productivity and maintain accuracy in your test executions. Follow this guide to fully utilize this feature and maximize the potential of your testing workflows.

## Step-by-Step Guide
### Step 1: Author Your test using KaneAI
- Begin with authoring your test with KaneAI and executing a set of test steps. These steps will form the basis of your module.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/1.png').default} alt="automation-dashboard" className="doc_img"/>

### Step 2: Pause and Select Test Steps
- Click the Pause Test button.
- Select the test steps you wish to include in the module.

For example, if you want to group test steps related to login functionality, highlight those steps.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/2.png').default} alt="automation-dashboard" className="doc_img"/>

### Step 3: Create and Save your Module
- With the relevant test steps selected, click on the Create Module button.
- Enter a module name and description:
    - **Name :** "Login Flow for LambdaTest.com"
    - **Description :** "This is the login flow module."

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/3.png').default} alt="automation-dashboard" className="doc_img"/>

- Click Create Module to finalize the process. The selected steps will be converted into a module structure. You can now view and manage these steps as a cohesive unit.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/4.png').default} alt="automation-dashboard" className="doc_img"/>

### Step 4: Reuse Modules in a New Test
- Create a new test in KaneAI to demonstrate module reuse.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/5.png').default} alt="automation-dashboard" className="doc_img"/>

### Step 5: Access the Modules Functionality
- Create a web test in KaneAI and use either of the following methods to access existing modules:
    - Click the **plus (+)** icon in the test interface.
    - Type a **slash (/)** to invoke the modules menu.

Here, you can browse all existing modules, including the one you just created.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/6.png').default} alt="automation-dashboard" className="doc_img"/>

- Select the desired module from the list, add the module to the test queue and observe as the execution of the module’s test steps begins automatically, eliminating the need to reconfigure or repeat those steps.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/7.png').default} alt="automation-dashboard" className="doc_img"/>

## Conclusion

By following the steps above, you can:

- Reuse existing test modules effortlessly.
- Reduce duplication in test creation.
- Maintain consistency across test cases.

> 📕 Refer here for your created [KaneAI Modules](https://kaneai.lambdatest.com/module) 🚀

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/modules/output.mp4').default} type="video/mp4" />
</video>