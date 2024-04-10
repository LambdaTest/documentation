---
id: hyperexecute-provar-integration
title: Integrate Provar with HyperExecute
hide_title: false
sidebar_label: Provar
description:  Unleash the power of QTest & LambdaTest HyperExecute! Streamline test management & experience blazing-fast execution.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - qtest
  - Integrations
  - Products
  - Test case management
  - Automated testing
  - Cloud-based testing
url: https://www.lambdatest.com/support/docs/hyperexecute-provar-integration/
site_name: LambdaTest
slug: hyperexecute-provar-integration/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-provar-integration/"
        }]
      })
    }}
></script>

Provar is a low-code/no-code testing tool specifically designed for Salesforce applications, enabling efficient creation and execution of UI and API tests.

This documentation guides you on how to integrate Provar seamlessly with HyperExecute to leverage distributed testing capabilities for comprehensive Salesforce test automation.

## Prerequisties

- Download and install the latest version of [Provar Automation Installer](https://documentation.provar.com/documentation/general-information/installing-provar/).
- You must have an active License key to run Provar.

## Step 1: Configure the Browser Provider Information

- Update the Desktop Settings to **HyperExecuteGrid: ANY Chrome**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/provar/1.png').default} alt="provide access to LambdaTest account" width="1280" height="684" className="doc_img"/>

- Click on **Test Settings** >> **Browser Providers** section. Click on the **+** symbol to add a new Browser Provider. 

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/provar/2.png').default} alt="provide access to LambdaTest account" width="1280" height="684" className="doc_img"/>

- You will recieve a pop-up to enter your configurations:

    - Enter the **Name** for your new Browser Provider.
    - Select the **Type** as **LambdaTest**
    - Enter your [LambdaTest **User Name** and **Access Key**](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
    - Update all the **browser** options that you want to run your tests on.
    - Update all the **capabilities** that you want to pass through the test.
    
- Click on OK >> Test Connection >> OK