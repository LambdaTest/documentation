---
id: hyperexecute-qtest-integration
title: Integrate qTest with HyperExecute
hide_title: false
sidebar_label: qTest
description:  Explore seamless integrations with popular tools at HyperExecute. Enhance your testing workflow for faster, efficient cross-browser testing.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - qtest
  - Integrations
  - Products
url: https://www.lambdatest.com/support/docs/hyperexecute-qtest-integration/
site_name: LambdaTest
slug: hyperexecute-qtest-integration/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Integration with Products",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-qtest-integration/"
        }]
      })
    }}
></script>

qTest is a comprehensive test management tool designed for Project Management, Bug Tracking, and Test Management. It embraces a centralized test management approach, facilitating seamless communication and accelerating task development across QA teams and stakeholders. With qTest Launch, you can 

This document details the seamless integration between HyperExecute and qTest, enabling you to run your automated tests on a variety of devices and real devices provided by LambdaTest.

## Prerequisites

### 1. Setup the qTest Host 
   
[Download](https://support-hub.tricentis.com/open?sys_kb_id=194a54eedb4f5c181ea7bb13f3961950&id=kb_article_view&number=KB0015571) and copy the file **agentctl-[version]-mac-x64-full.tgz** to a desired installation directory, e.g. **/usr/local/agentctl-[version]-mac-x64-full.tgz**

<!-- Follow this guide for more in-depth information: [qTest Host Setup](https://documentation.tricentis.com/qtest/10200/en/content/qtest_launch/qtest_automation_host_2_install_upgrade_guides/qtest_automation_host_installation_and_upgrade_guide_master_list.htm) -->

### 2. Acquire your qTest API Token
   
- Login to qTest Manager as an Administrator and access the Resources page.
- Expand the **APIs and SDK** section.
   
<img loading="lazy" src={require('../assets/images/qtest-integration/qtest1.png').default} alt="provide access to LambdaTest account" width="1280" height="684" className="doc_img"/>

### 3. Setup host and agent

- Navigate to the **agentctl** directory and start the host by running the following command:

```bash
./agentctl start
```

- Visit the [http://localhost:6789](http://localhost:6789) and add your details.

    - **Host Name :** You have to enter any name that will be assigned as the host name.
    - **qTest URL :** Enter the URL of your qTest Manager page. For e.g. `https://aman.qtestnet.com`
    - **qTest Token :** Enter the Token you have copied in the above step.
    - **Full Name :** Mention your name here.

<img loading="lazy" src={require('../assets/images/qtest-integration/qtest_img_2.png').default} alt="provide access to LambdaTest account" width="1280" height="684" className="doc_img"/>