---
id: hyperexecute-artifacts
title: Job Artifacts
hide_title: false
sidebar_label: HyperExecute Job Artifacts
description: Learn how to generate the Artifacts for your desired framework and seamlessly interact with artifacts through the HyperExecute UI.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmuai.com/support/docs/hyperexecute-artifacts/
site_name: TestMu AI
slug: hyperexecute-artifacts/
canonical: https://www.testmuai.com/support/docs/hyperexecute-artifacts/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-artifacts/`
        }]
      })
    }}
></script>
Artifacts are files generated during test execution, including reports and logs. You can refer to these files for obtaining consolidated information about the executed test cases, and can seamlessly interact with artifacts through the HyperExecute UI.

Following the completion of a Job, these artifacts are automatically stored in the **artifacts folder**, distinguishing previous files into **old-artifacts** on subsequent runs while retaining the recent files in artifacts.

## Steps to Generate and Download Artifacts
Follow the below mentioned steps to generate the Artifacts for your desired framework:

**Step 1:** Go to the HyperExecute YAML file

**Step 2:** Add the below mentioned parameters in the YAML file to generate the Artifacts

```yaml
uploadArtifacts:
    - name: Executed-Job-Artifacts #user defined name of the artifact
      path:
        - src/test/index.html #path of the generated artifact
    - name: My-Job-Artifacts
      path:
        - src/collect/info.html
```
:::note
- If you are generating multiple artifacts, then it is recommended to use this parameter, [`mergeArtifacts`](/support/docs/deep-dive-into-hyperexecute-yaml/#mergeartifacts) in your YAML, as it will zip all your Artifacts files while downloading from the dashboard.

- You can replace the Artifacts folder name value with any of the Matrix parameters value.

```yaml
matrix:
   os: [win]
   browser: ["chrome-latest-1", "firefox-latest-2"]

mergeArtifacts: true
uploadArtefacts:
  - name: $browser
    path: 
      - allure-results/
```

As shown in the above code, the artifacts folder generated will be named **chrome-latest-1** and **firefox-latest-2**
:::

**Step 3:** Now trigger your job and go to the [HyperExecute](https://hyperexecute.lambdatest.com/hyperexecute/jobs) dashboard.

**Step 4:** Click on any of the artifacts generated. You can also download the artifacts from the dashboard

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/artifacts.gif').default} alt="Image"  className="doc_img"/>

Here is the sample artifact generated.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/artifact4.png').default} alt="Image"  className="doc_img"/>
