---
id: kane-ai-secrets
title: 'Utilizing KaneAI Secrets Feature: A Step-by-Step Guide'
hide_title: false
sidebar_label: Secrets
description: Learn how to create, update and use custom secrets from the test manager and while executing your tests using the Kane AI
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai secrets
  - kaneai parameters
url: https://www.testmuai.com/support/docs/kane-ai-secrets/
site_name: TestMu AI
slug: kane-ai-secrets/
canonical: https://www.testmuai.com/support/docs/kane-ai-secrets/
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
          "name": "KaneAI Secrets",
          "item": `${BRAND_URL}/support/docs/kane-ai-secrets/`
        }]
      })
    }}
></script>
KaneAI now supports the use of secret variables to enhance security and streamline functionality. This feature leverages HashiCorp Vault for secure management of sensitive information, ensuring robust protection for your data while maintaining ease of use. This guide outlines the process for creating, managing, and utilizing secret variables within KaneAI.

:::note
- In Web/App Agent, users will see list of all secrets created at user or org level for that user.
- A user role can create only user level secrets, while an admin can create either user-level or org-level secrets.
- A user can delete their own secrets, but only an admin can delete org-level secrets.
- Secret variables will be accessible in test steps, modules, and test cases.
:::

## How to Create Secrets and use them in your tests?
You can create Secrets variables via:
- Test Manager
- Web/App Agent

### Create Secrets via Test Manager
**Step 1:** Navigate to the Test Manager. <br />
**Step 2:** Click on the settings icon > Secrets.<br />
**Step 3:** Click on the **Create new secret** button.<br />
**Step 4:** Provide the secret key and value and click on the **Create Secret** button.

<img loading="lazy" src={require('../assets/images/kane-ai/features/secrets/test-manager-secret.gif').default} className="doc_img"/> 

### Create Secrets via Web/App Agent
**Step 1:** Navigate to the **"Write a Step"** field where you typically write your test scenarios in plain English. <br />
**Step 2:** To switch to Secrets mode, type the forward slash / or click on the + icon. You will see a Secret pop-up option appear. <br />
**Step 3:** Provide the secret key and value and click on the **Create Secret** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/secrets/kane-ai-secret.mp4').default} type="video/mp4" />
</video>

## How to use your Secrets?
Once created, you can now reference any secret variables in your test steps using **double-curly braces syntax (e.g.,`{{email}}`)**.

> To use a previously created variable in any subsequent step or test case, reference the variable using the same `{{` syntax. This will list down all existing variables for this test.

Format:
```bash
use the value of {{secrets.user.email}} in the email text field
```

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/secrets/use-secrets.mp4').default} type="video/mp4" />
</video>

## How to Update your Secrets?
**Step 1:** Navigate to the Test Manager. <br />
**Step 2:** Click on the settings icon > Secrets.<br />
**Step 3:** Click on the **pencil** icon to update that respective secret value.<br />
**Step 4:** Provide the secret value and click on the **Update secret** button.

<img loading="lazy" src= {require('../assets/images/kane-ai/features/secrets/update-secret.png').default} alt="Image"  className="doc_img"/>

## How to Delete your Secrets?
**Step 1:** Navigate to the Test Manager. <br />
**Step 2:** Click on the settings icon > Secrets.<br />
**Step 3:** Click on the **delete** icon to update that respective secret value.<br />
**Step 4:** Provide the secret value and click on the confirmation button.

<img loading="lazy" src= {require('../assets/images/kane-ai/features/secrets/delete-secret.png').default} alt="Image"  className="doc_img"/>
