---
id: hyperexecute-how-to-save-and-manage-secrets
title: Manage User-Level Secrets in HyperExecute
hide_title: false
sidebar_label: User-Level Secrets
description: Securely save and manage user-level secrets in HyperExecute. Encrypt credentials, rotate keys, and use them safely across automation runs.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - How to Save and Manage Secrets
url: https://www.testmuai.com/support/docs/hyperexecute-how-to-save-and-manage-secrets/
site_name: TestMu AI
slug: hyperexecute-how-to-save-and-manage-secrets/
canonical: https://www.testmuai.com/support/docs/hyperexecute-how-to-save-and-manage-secrets/
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
          "name": "Integrations",
          "item": `${BRAND_URL}/support/docs/hyperexecute-how-to-save-and-manage-secrets/`
        }]
      })
    }}
></script>

Testing your webapp or applications often involves using sensitive data like passwords, API keys, and other credentials. Storing these secrets directly in your code can be risky and exposing them can lead to potential security breaches.

HyperExecute provides a secure **Secret Management Vault** to keep your sensitive information safe. This doc covers **user-level secrets** that are tied to your individual account.

## Secret Scopes

HyperExecute supports secrets at multiple levels:

| Scope | Access | Use Case |
|-------|--------|----------|
| **User-Level** (this doc) | Tied to your individual account, available to all your jobs | Personal credentials, user-specific API keys |
| **[Org-Level](/support/docs/hyperexecute-how-to-save-and-manage-secrets/#org-level-secrets)** *(Enterprise only)* | Shared across all users and projects in the organization, managed by admins | Org-wide API keys, shared access tokens |
| **[Project-Level](/support/docs/hyperexecute-how-to-manage-project-level-secrets/)** | Scoped to a specific project, shared across all users on the project | Project-specific credentials, team-shared keys |

:::info
Secrets are stored as `key:value` pairs where **values** are encrypted and not visible to anyone. They can only be [updated](/support/docs/hyperexecute-how-to-save-and-manage-secrets/#update-your-existing-secrets) with a new value.
:::

## Create a New Secret

Follow the steps mentioned to seamlessly add new secrets to HyperExecute and ensure their safe storage:

**Step 1:** Navigate to the **Secrets Section** in the top right corner of the HyperExecute dashboard.

**Step 2:** Click on the **Add a Secret** button to create a New Secret.

**Step 3:** Provide a descriptive **Key Name** and then enter your secret **Value**. This could be a password, API key, or any other credential.

**Step 4:** Click on **Add Secret** button and your secret will be stored safely within HyperExecute's system.

<!-- <img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/3.png').default} alt="Image"  
className="doc_img"/> -->
<!-- <img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/4.png').default} alt="Image"  style={{width: '600px',}} className="doc_img"/> -->
<!-- <img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/5.png').default} alt="Image"  style={{width: '600px',}} className="doc_img"/> -->

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/knowledge-base/secrets/add-secret.mp4').default} type="video/mp4" />
</video>

## Update Your Existing Secrets

Follow the steps mentioned to update your secrets values to HyperExecute and ensure their safe storage:

**Step 1:** Navigate to the **Secrets Section** in the top right corner of the HyperExecute dashboard.

**Step 2:** Click on the **...** and then **Edit** button of the secret you want to update.

**Step 3:** Enter updated value of the secret.

**Step 4:** Click on Edit Secret Value to complete the editing.

<!-- <img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/3.png').default} alt="Image"  
className="doc_img"/>
<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/39.png').default} alt="Image"  
className="doc_img"/>
<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/40.png').default} alt="Image"  
className="doc_img"/> -->

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/knowledge-base/secrets/update-secret.mp4').default} type="video/mp4" />
</video>

## Delete the Secrets

Follow the steps mentioned to delete your secrets values from the HyperExecute:

**Step 1:** Navigate to the **Secrets Section** in the top right corner of the HyperExecute dashboard.

**Step 2:** Click on the **...** and then **Delete** button of the secret you want to delete.

**Step 3:** Click on **Confirm Deletion** button to delete your secret.

<!-- <img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/3.png').default} alt="Image"  
className="doc_img"/>
<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/39.png').default} alt="Image"  
className="doc_img"/> -->

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/knowledge-base/secrets/delete-secret.mp4').default} type="video/mp4" />
</video>

## Using Secrets in YAML

During HyperExecute test execution, you might need to access sensitive information like environment variables or access tokens. This section guides you on how to securely integrate these secrets into your YAML file.

Consider these secret key names: `secretKey1` and `secretKey2`.

```yaml
version: 0.1
env:
  MyKey1: ${{.secrets.token}}
 
runson: win
testDiscovery:
  type: raw
  mode: dynamic
  args:
    featureFilePath: ${Path}
     
testRunnerCommand: npm run --username abc --password ${{.secrets.SecretKey2}}
```

- The `env` and `vars` sections within your YAML file are used to define variables.
- The syntax `{{.secrets.secretKey1}}` allows you to access the corresponding secret value stored securely in HyperExecute.

In the above sample YAML file:

- **MyKey1** in the env section uses `secretKey1`.
- **MyKey2** in the vars section uses `secretKey2`.
- **testRunnerCommand** utilizes `secretKey2` for the password.

<!-- Since we do not have SecretKey3 saved. CLI will error out with "**SecretKey3 not found in vault.**" -->

:::info
- By using secrets within your YAML file, you avoid embedding sensitive information directly in your code, enhancing security.
- HyperExecute securely retrieves these secrets from its storage i.e. **HashiCorp Vault** at runtime, ensuring they are not exposed during code sharing or storage.
:::

## Org-Level Secrets

Org-level secrets are organization-wide secrets that are shared across all projects and users within the organization. They are managed by organization admins and are useful for storing shared credentials like API keys, access tokens, or service account credentials that the entire team needs access to.

:::note
Org-level secrets are an **enterprise-only** feature. Contact your account team or <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> to enable this for your organization.
:::

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
       HyperExecute General FAQs
      </span>
    </li>
  </ul>
</nav>
