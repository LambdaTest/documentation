---
id: tas-configurations-managing-secrets
title: Managing Secrets
hide_title: true
sidebar_label: Managing Secrets
description: Managing secrets in TAS.
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Managing Secrets
  - TAS - Configuration
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-configurations-managing-secrets/
---

# Managing Secrets
***
You can add environment variables in TAS to securely use sensitive information such as username, passwords, api keys etc. We securely encrypt and store the secrets on our end. The secrets have scope limited to the repository. 

## Adding secrets for your repository
***
### Adding secrets for the first time - TAS CLOUD
- While configuring .tas.yml
- Click on the `Manage secrets` option located at the bottom
- You can add secrets in this section and use them while configuring the `.tas.yml` (steps mentioned below.)

<p align="center">
  <img loading="lazy" src={require('../assets/images/tas/getting-started/yml-secrets.gif').default} alt="Import Repository" width="1340" height="617" className="doc_img"/>
</p>

<br/>

### Add more secrets - TAS CLOUD
- Open a the repository and navigate to the **Settings** section.
- Select **Environment Variables** from the sidebar.
- Add **Secret Name**, **Secret Value** and click on **Add Secret**. 

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/getting-started/secret-management.gif').default} alt="Import Repository" width="1340" height="617" className="doc_img"/>
</p>

<br/>

### Adding secrets - TAS Self Hosted
- In case of TAS Self Hosted mode, you need to define your secrets in the  **.synapse.json** file. [See more details](/docs/tas-self-hosted-configuration#reposecrets)

<br/>

## Using the secrets
***
- You can use the secrets added in TAS portal inside your `.tas.yml` using `${secret_name}` parameter
- The following sample file demonstrates how we can refer secrets inside `.tas.yml`.

```yml title=".tas.yml"
framework: mocha
blocklist:
  - "src/test/api1.js##this is a test-suite"
preRun:
  command:
    - npm ci
postMerge:
  env:
    REPONAME: nexe
    AWS_KEY: ${{ secrets.AWS_KEY }} #Using secrets inside Yml <--------
  pattern:
    - "./test/**/*.spec.ts"
preMerge:
  pattern:
    - "./test/**/*.spec.ts"
postRun:
  command:
    - node --version
version: 1.0
```
