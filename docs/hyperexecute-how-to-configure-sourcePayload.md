---
id: hyperexecute-how-to-configure-sourcePayload
title: How to configure sourcePayload
hide_title: true
sidebar_label: How to configure sourcePayload
description: Learn to configure sourcePayload in HyperExecute with ease, allowing secure and direct sourcing of test scripts from your Git provider for seamless testing integration.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-sourcePayload/
site_name: TestMu AI
slug: hyperexecute-how-to-configure-sourcePayload/
canonical: https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-sourcePayload/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-how-to-configure-sourcePayload/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-sourcePayload/"
    },
    "headline": "How to configure sourcePayload",
    "description": "Learn to configure sourcePayload in HyperExecute with ease, allowing secure and direct sourcing of test scripts from your Git provider for seamless testing integration.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-sourcePayload/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "TestMu AI Hyperexecute",
      "TestMu AI Hyperexecute help",
      "TestMu AI Hyperexecute documentation"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Setting up",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "sourcePayload:\n  platform: git\n  link: https://--------\n  ref: <your_branch_name>\n  accessToken: <your_personal_access_token>\n  commit: <optional>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "sourcePayload",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "> You can assign a name to your PAT via the HyperExecute vault feature and replace it in place of the `GIT_PAT` tag in the example given above. \n    \n***\n\n### Sample YAML file\n\nA sample HyperExecute YAML file is added below for your reference.\n\n```yaml title=\"hyperexecute.yaml\"\n---\nversion: \"0.1\"\nglobalTimeout: 90\ntestSuiteTimeout: 90\ntestSuiteStep: 90\nrunson: win\nautosplit: true\nretryOnFailure: false\ntestType: \"playwright\"\nmaxRetries: 1\nconcurrency: 1\npre:\n  - npm install\n  - npx playwright install\ncacheKey: '{{ checksum \"package-lock.json\" }}'\ncacheDirectories:\n  - node_modules\ntestDiscovery:\n  type: raw\n  mode: remote\n  command: grep -lr 'describe' ltblogsearch.test.js\ntestRunnerCommand: npm test -- $test\nsourcePayload:\n  platform: git\n  link: <your_github_repository>\n  ref: <your_branch_name>\n  accessToken: <your_PAT>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example given below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "---\nsourcePayload:\n  platform: git\n  link: https://bitbucket.org/<username>/junit-selenium-hyperexecute-sample.git,\n  ref: main\n  accessToken: ${{ .secrets.BITBUCKET_SERVER_REPO_CLONE_SECRET_KEY }}\n  verifySSL: false\n  gitProvider: bitbucket"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# How to configure sourcePayload

When you run your tests on HyperExecute, the test scripts are zipped, encrypted and uploaded to our secure servers temporarily for execution through the [HyperExecute CLI binary](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/). However, to make this process seamlessly fit in your pipeline you can use the `sourcePayload` Yaml parameter.

Once you set `sourcePayload`, your test scripts are directly sourced from your Git provider with the help of secure access tokens and only your HyperExecute YAML file is encrypted and sent through the HyperExecute CLI. Learn more detailed documentation below.

***

## Setting up

You can start by configuring the `sourcePayload` key in the [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/) file. The format is explained below.

```bash
sourcePayload:
  platform: git
  link: https://--------
  ref: <your_branch_name>
  accessToken: <your_personal_access_token>
  commit: <optional>
```

1.  **platform**: The platform on which your repository exists. It should be set to `git` if your repository is deployed on GitHub or GitLab.
    
2.  **link**: The link to your repository that contains the code to be tested.
    
3.  **ref**: The name of the branch that you want to test.
    
4.  **accessToken**: Your personal access token (PAT), generated on your Git platform. If you want to know how to generate a PAT for GitHub, go through [this](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) section.  

> **Note**: You don’t need to use a Personal Access Token if your repository is public. 

5. **commit**: If you want to run a specific commit file other than the **HEAD** commit, then you need to define here the specific commit ID.

> As a best practice, you should not use your PAT directly in the YAML file. Instead of that, you can make use of our [vault](/support/docs/hyperexecute-how-to-save-and-manage-secrets/) feature and add the PAT to your secrets. To use the vault feature in the HyperExecute YAML file, you can refer the example given below.

```yaml title="hyperexecute.yaml"
sourcePayload:
  platform: git
  link: https://--------
  ref: <your_branch_name>
  accessToken: ${{ .secrets.<GIT_PAT> }}
  commit: <optional>
```
> You can assign a name to your PAT via the HyperExecute vault feature and replace it in place of the `GIT_PAT` tag in the example given above. 
    
***

### Sample YAML file

A sample HyperExecute YAML file is added below for your reference.

```yaml title="hyperexecute.yaml"
---
version: "0.1"
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
runson: win
autosplit: true
retryOnFailure: false
testType: "playwright"
maxRetries: 1
concurrency: 1
pre:
  - npm install
  - npx playwright install
cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
  - node_modules
testDiscovery:
  type: raw
  mode: remote
  command: grep -lr 'describe' ltblogsearch.test.js
testRunnerCommand: npm test -- $test
sourcePayload:
  platform: git
  link: <your_github_repository>
  ref: <your_branch_name>
  accessToken: <your_PAT>
```

### Generating a Personal Access Token

<details>
<summary>Generate Personal Access Token on GitHub</summary>
   You can generate a **PAT** on **GitHub** by following the steps below.

***

1. Log in to your [GitHub](https://github.com/ "https://github.com/") account. You will be redirected to your homepage on GitHub.

    
2. Click on your profile on the top right-hand side corner of your page to access your **Settings**.
  <img loading="lazy" src={require('../assets/images/hyperexecute/cloud/git/1.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'800px', height:'auto'}}/>


3. Go to the bottom of the **Settings** page and click on **Developer settings**.
  <img loading="lazy" src={require('../assets/images/hyperexecute/cloud/git/2.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'800px', height:'auto'}}/>


4. Click on **Tokens (classic)** to generate your own Personal Access Token.
  <img loading="lazy" src={require('../assets/images/hyperexecute/cloud/git/3a.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'800px', height:'auto'}}/>


5. Click on **Generate new token** and select the **classic** or **fine-grained** version as per your choice.
  <img loading="lazy" src={require('../assets/images/hyperexecute/cloud/git/4a.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'800px', height:'auto'}}/>


6. Proceed to configuring the PAT and click on **Generate token** to create your Personal Access Token.  

  > **Note**: While configuring your PAT, ensure that the access is given for all keys under `repo`. Moreover, you will also have to give all the accesses for `read` keys.

  <img loading="lazy" src={require('../assets/images/hyperexecute/cloud/git/5.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'800px', height:'auto'}}/>


</details>

<details>
<summary>Generate Personal Access Token on GitLab</summary>

1. Navigate to [GitLab Settings](https://gitlab.com/-/profile/personal_access_tokens).
2. Enter **Token name** and add **Expiration date**.
3. **Select the scopes** for the token. Add `read_repository` access to the scope.
4. Click on **Create Personal Access Token**.
5. **Copy and Save** your token securely.

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/how-to-guides/gl-token.gif').default} alt="generating gitlab token" width="1340" height="617" className="doc_img"/>
</p>

</details>

<details>
<summary>Generate Project Access Token on GitLab</summary>

1. Navigate to the project for which you want to create a token.
2. Select **Settings** from the top menu. Choose **Access Tokens** from the left sidebar.
3. Click on **Add new token**. Enter a name for the token.
4. Select the scopes for the token.
5. Select the role for the token, which determines the level of access it has.
6. Click on **Create project access token**.

</details>

<details>
<summary>Generate Repository Access Token on Bitbucket</summary>

We need to follow the 2 steps mentioned below:
1. Need to create the access token for bitbucket repo
2. Need to use bitbucket URL and access token to run the job on HyperExecute

- Create access token for the repository 

Please refer to the following link for generating access tokens if your/your client’s repository is private. This access token will allow HyperExecute to directly fetch the test scripts/Provar tests from bitbucket whenever a Job is triggered.
https://support.atlassian.com/bitbucket-cloud/docs/create-a-repository-access-token/


- Add the token in Job trigger API payload

</details>

In order for HyperExecute to be able to fetch tests from **bitbucket**, **bitbucket-server**, or **github**, the token has to be added in the Job Trigger API. Example given below: 

```yaml
---
sourcePayload:
  platform: git
  link: https://bitbucket.org/<username>/junit-selenium-hyperexecute-sample.git,
  ref: main
  accessToken: ${{ .secrets.BITBUCKET_SERVER_REPO_CLONE_SECRET_KEY }}
  verifySSL: false
  gitProvider: bitbucket
```

> Note: Please make sure yo enter your username while adding the repository URL.


***

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
        How to configure sourePayload
      </span>
    </li>
  </ul>
</nav>
