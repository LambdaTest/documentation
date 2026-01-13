---
id: hyperexecute-private-cloud-on-jumphost
title: HyperExecute Private Cloud on JumpHost
hide_title: false
sidebar_label: HyperExecute Private Cloud on JumpHost
description: Deploy & run HyperExecute Private Cloud on Azure with JumpHost! Follow our guide for setup, test triggering, and dashboard viewing for a smooth, customizable testing experience.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmu.ai/support/docs/hyperexecute-private-cloud-on-jumphost
site_name: LambdaTest
slug: hyperexecute-private-cloud-on-jumphost
canonical: https://www.testmu.ai/support/docs/hyperexecute-private-cloud-on-jumphost/
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
          "name": "HyperExecute Concepts",
          "item": `${BRAND_URL}/support/docs/hyperexecute-private-cloud-on-jumphost/`
        }]
      })
    }}
></script>
Congratulations on getting the HyperExecute Private setup deployed on your Azure Cloud! You can now trigger your test cases and view your dashboard from the JumpHost virtual machine. To understand how to do that, go through the page below.

## Running HyperExecute via a JumpHost VM

**Step 1:** Log in to your Microsoft Azure account and go to your [homepage](https://portal.azure.com/#home). 

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/jumphost/1.png').default} alt="Image"  className="doc_img"/>

**Step 2:** Go to the **search bar** on the top of your screen and search for your managed applications. 

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/jumphost/2.png').default} alt="Image"  className="doc_img"/>

**Step 3:** You will be redirected to your managed applications where you can see your installed  HyperExecute Private Cloud application. Select the HyperExecute application that you have installed recently.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/jumphost/3.png').default} alt="Image"  className="doc_img"/>

**Step 4:** You will be redirected to a page where you can see all of the resources that are a part of the selected **Managed Resource Group**. Search for a Virtual Machine called `hyex-jump` in this list and open it. 

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/jumphost/4.png').default} alt="Image"  className="doc_img"/>

**Step 5:** You can now see the VM details and can use the shown public IP to connect to the virtual machine using the shared credentials over mail.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/jumphost/5.png').default} alt="Image"  className="doc_img"/>

To ensure that you have complete control over your HyperExecute application and your browsers, the virtual machine is completely customizable. You can make the modifications that you require and test all of your applications. Happy testing!

> If you have more questions regarding HyperExecute Private Cloud, reach out to us at [hyperexecute-privatecloudsupport@testmu.ai](mailto:hyperexecute-privatecloudsupport@testmu.ai).

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        HyperExecute Private Cloud on JumpHost
      </span>
    </li>
  </ul>
</nav>