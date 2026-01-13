---
id: kaneai-variables-and-parameters
title: Variables & Parameters in KaneAI
hide_title: false
sidebar_label: Variables & Parameters
description: Details and information about variables & parameters in KaneAI
keywords:
  - kaneai
  - variables
  - parameters
  - secrets
  - smart variables
  - environments
url: https://www.testmu.ai/support/docs/kaneai-variables-and-parameters
site_name: Variables & Parameters in KaneAI
slug: kaneai-variables-and-parameters
canonical: https://www.testmu.ai/support/docs/kaneai-variables-and-parameters/
---


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
          "name": "Variables & Parameters",
          "item": `${BRAND_URL}/support/docs/kaneai-variables-and-parameters`
        }]
      })
    }}
></script>

In KaneAI, one of the core principles of effective test automation is the ability to manage dynamic data efficiently. Testing often requires input that changes frequently or is context-dependent, such as URLs, credentials, or specific device configurations. KaneAI offers a set of powerful tools—variables, secrets, smart variables, parameters and datasets—to simplify the process of managing and using dynamic data in your test cases. Each of these options offers unique functionality that helps you keep your tests flexible, secure, and scalable.

:::tip
All variables and parameters in KaneAI can be accessed from https://kaneai.lambdatest.com/variables
:::
    
<!-- ### Core Features -->
<div className="support_main">
  
  <a href = "/support/docs/kane-ai-using-variables/">
  <div className="support_inners">
    <h3>Variables</h3>
    <p>Placeholders that store dynamic values, enabling reuse and reducing redundancy in test cases.</p>
  </div>
  </a>

  <a href="/support/docs/kane-ai-secrets/">
  <div className="support_inners">
    <h3>Secrets</h3>
    <p>Securely stored sensitive data (e.g., passwords) that are used in tests without exposing them in the code.</p>
  </div>
  </a>

  <a href="/support/docs/hyperexecute-artifacts-url/">
  <div className="support_inners">
    <h3>Smart Variables</h3>
    <p>Context-aware variables that automatically pull data in real-time during test execution.</p>
  </div>
  </a>

  <a href = "/support/docs/kane-ai-using-parameters/">
  <div className="support_inners">
    <h3>Parameters</h3>
    <p>Values passed into test cases at runtime to customize test execution for different configurations or environments.</p>
  </div>
  </a>

  <a href="/support/docs/kane-ai-using-datasets/">
  <div className="support_inners">
    <h3>Datasets</h3>
    <p>Collections of test data used in a test, allowing for data-driven testing by running the same test with different inputs.</p>
  </div>
  </a>
  
</div>

  
