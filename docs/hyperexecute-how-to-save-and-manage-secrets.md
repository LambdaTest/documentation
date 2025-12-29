---
id: hyperexecute-how-to-save-and-manage-secrets
title: Securely Manage Your Secrets with HyperExecute
hide_title: false
sidebar_label: How to Manage Secrets in HyperExecute
description: Find out how to Save and Manage Secrets
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - How to Save and Manage Secrets
url: https://www.testmu.ai/support/docs/hyperexecute-how-to-save-and-manage-secrets
site_name: LambdaTest
slug: hyperexecute-how-to-save-and-manage-secrets
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

Testing your webapp or applications often involves using the sensitive data like passwords, API keys, and other credentials. Storing these secrets data directly in your code can be risky and exposing it can lead to potential security breaches.

HyperExecute provides a secure and user-friendly solution for managing your secrets during testing. This documentation will guide you through utilizing HyperExecute's **Secret Management Vault** to keep your sensitive information safe and secure.

:::info
These Secrets are stored as `key:value` pair where these **values** are not visible or accessible to anyone but can only be [updated](/support/docs/hyperexecute-how-to-save-and-manage-secrets/#update-your-existing-secrets) with a new value.
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