---
id: hyperexecute-how-to-save-and-manage-secrets
title: How to Manage Secrets in HyperExecute
hide_title: true
sidebar_label: How to Manage Secrets in HyperExecute
description: Find out how to Save and Manage Secrets
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - How to Save and Manage Secrets
url: https://www.lambdatest.com/support/docs/hyperexecute-how-to-save-and-manage-secrets/
site_name: LambdaTest
slug: hyperexecute-how-to-save-and-manage-secrets/
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
          "name": "Integrations",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-how-to-save-and-manage-secrets/"
        }]
      })
    }}
></script>

# How to Manage Secrets in HyperExecute

In order to run tests on HyperExecute, you sometimes might require your env variables, access tokens etc which can be used via the HyperExecute Yaml file. You can use the HyperExecute Secrets section to securely save and manage your secrets such as sensitive data, keys, passwords etc.

:::info
These Secrets are stored as `key:value` pair where these **values** are not visible / accessible to anyone but can only be [**updated**](/support/docs/hyperexecute-how-to-save-and-manage-secrets/#update-the-secrets) with a new value.
:::

This page explains how you can Manage your Secrets using HyperExecute Secret Vault. 
***

## Add the Secrets

Steps to Add the Secrets via HyperExecute Dashboard:

**Step 1:** Go to the Secrets Section
<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/3.png').default} alt="Image"  
className="doc_img"/>

**Step 2:** Click on the **+Add** button to create a New Secret.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/4.png').default} alt="Image"  style={{width: '600px',}} className="doc_img"/>

**Step 3:** Enter a descriptive Key Name and your Secret in the **Value**. 

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/5.png').default} alt="Image"  style={{width: '600px',}} className="doc_img"/>

**Step 4:** Click on **Add New Secret** and your secret will be stored safely.

## Update the Secrets

**Step 1:** Login to HyperExecute.

**Step 2:** Click on “Secrets“ tab in the top right corner of the screen.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/3.png').default} alt="Image"  
className="doc_img"/>

**Step 3:** Click on Edit Button of the secret you want to update.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/39.png').default} alt="Image"  
className="doc_img"/>

**Step 4:** Enter updated value of the secret.

**Step 5:** Click on Edit Secret Value to complete the editing.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/40.png').default} alt="Image"  
className="doc_img"/>

## Delete the Secrets

**Step 1:** Login to HyperExecute.

**Step 2:** Click on “Secrets“ tab in the top right corner of the screen.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/3.png').default} alt="Image"  
className="doc_img"/>

**Step 3:** Click on Delete Button of the secret you want to delete.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/39.png').default} alt="Image"  
className="doc_img"/>

The secret will be deleted.

## Using Secrets in YAML

Lets take an example that we have secret key names as secretKey1, secretKey2

```bash
version: 0.1
env:
  MyKey: ${{ .secrets.secretKey1 }}

vars:
 MyKey2: ${{ .secrets.secretKey2 }}
 Path: /java/files*.feature
 
 runson: win
 testDiscovery:
   type: raw
   mode: dynamic
   args:
     featureFilePath: ${Path}
     
testRunnerCommand: npm run --username abc --password ${{ .secrets.SecretKey2 }}
```
<!-- Since we do not have SecretKey3 saved. CLI will error out with “**SecretKey3 not found in vault.**“ -->

These Secrets are stored in the **HashiCorp Vault** and are fetch from the vaults at the time of your test execution within the machine that has been spinned up Just-in-Time for the test execution.

>If you have more questions, feel free to <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Chat</span> with us.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       HyperExecute General FAQs
      </span>
    </li>
  </ul>
</nav>