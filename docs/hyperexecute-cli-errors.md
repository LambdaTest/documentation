---
id: hyperexecute-cli-error
title: Debug your CLI Errors
hide_title: true
sidebar_label: CLI Errors
description: This document will help you debug your failed job if you are facing any CLI issues.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - How to Debug a Failed Job
url: https://www.testmu.ai/support/docs/hyperexecute-cli-error/
site_name: LambdaTest
slug: hyperexecute-cli-error/
canonical: https://www.testmu.ai/support/docs/hyperexecute-cli-error/
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
          "name": "Debug Failed Job",
          "item": `${BRAND_URL}/support/docs/hyperexecute-cli-error/`
        }]
      })
    }}
></script>

# How to Debug your CLI Errors

This document will help you debug your failed job if you are facing any CLI issues. 

:::tip
If you are encountering any error which is properly not detailed, it is recommend to use [**`verbose`**](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#--verbose) mode in HyperExecute CLI command.
:::


## Symbolic Link Error

This error will mark your Job as a **Lambda Error**.

You can encounter this error when you try to upload the **node_modules** directory along with the payload to trigger your Job in HyperExecute. This error generally occurs with your Node.js projects. You must avoid doing this, as it will not only save storage space but also avoid potential issues with version control. The node_modules folder holds all the project dependencies, and adding it to the repository can cause unnecessary file duplication and increase the repository size.

To resolve this issue, either you remove that directory or you simply add node_modules to the **.gitignore** file. This ensures you have a smooth development process without unnecessary hiccups.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/debugging-guide/cli-errors/symlink.png').default} alt="Image"  className="doc_img"/>

## Snooper Failed Error

It's crucial to understand a specific characteristic of Gherkin – it exclusively supports the use of **Examples** with the **Scenario Outline**. If you come across an error, it likely indicates that the **Scenario** is being employed with **Examples** instead of the intended **Scenario Outline**. To resolve this, ensure that you use the appropriate structure, employing the Scenario Outline when incorporating Examples.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/debugging-guide/cli-errors/snooper1.png').default} alt="Image"  className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/debugging-guide/cli-errors/snooper.png').default} alt="Image"  className="doc_img"/>

## Authentication Error

There may be cases where, when trying to connect to HyperExecute services, the CLI throws the following error:

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/debugging-guide/cli-errors/auth.png').default} alt="Image"  className="doc_img"/>

Now, to validate the connectivity and to make sure the **auth.hyperexecute.cloud** is reachable, you have to run a `scan` command in your CLI, as shown below. If the network scan fails, then you are required to whitelist the IP address.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/debugging-guide/cli-errors/auth1.png').default} alt="Image"  className="doc_img"/>

#### IPs to be Whitelisted

| FQDN | Protocol:Port | Reason |
|------|---------------|--------|
|*.hyperexecute.cloud | Https:443 |HyperExecute’s registered wildcard domain to allow access to all HyperExecute’s services|
|*.lambdatest.com | Https:443 | <BrandName />’s registered wildcard domain to allow access to all <BrandName />’s services (like auth, plan-validation) |