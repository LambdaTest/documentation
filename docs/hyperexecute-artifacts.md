---
id: hyperexecute-artifacts
title: HyperExecute Job Artifacts
hide_title: true
sidebar_label: HyperExecute Job Artifacts
description: Learn how to generate the Artifacts for your desired framework and seamlessly interact with artifacts through the HyperExecute UI.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-artifacts/
site_name: LambdaTest
slug: hyperexecute-artifacts/
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
          "name": "HyperExecute Concepts",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-artifacts/"
        }]
      })
    }}
></script>

# Artifacts

Artifacts are files generated during test execution, including reports and logs. You can refer to these files for obtaining consolidated information about the executed test cases, and can seamlessly interact with artifacts through the HyperExecute UI.

Following the completion of a Job, these artifacts are automatically stored in the **artifacts folder**, distinguishing previous files into **old-artifacts** on subsequent runs while retaining the recent files in artifacts.

## Steps to Generate Artifacts

Follow the below mentioned steps to generate the Artifacts for your desired framework:

**Step 1:** Go to the HyperExecute YAML file

**Step 2:** Add the below mentioned parameters in the YAML file to generate the Artifacts

```bash
uploadArtifacts: 
    - name: #user defined name of the artifact
      path:
        - #path of the generated artifact
    - name: #user defined name of the artifact
      path:
        - #path of the generated artifact
```

```bash
uploadArtifacts:
    - name: Executed-Job-Artifacts
      path:
        - src/test/index.html
    - name: My-Job-Artifacts
      path:
        - src/collect/info.html
```

> **Note:** If you are generating multiple artifacts, then it is recommended to use this parameter, `mergeArtifacts` in your YAML, as it will zip all your Artifacts files while downloading from the dashboard.

```bash
mergeArtifacts: true
uploadArtifacts:
    - name: SrcData
      path:
      - src/test/index.html
```

**Step 3:** Now trigger your job and go to the [HyperExecute](https://hyperexecute.lambdatest.com/hyperexecute/jobs) dashboard.

**Step 4:** Click on any of the artifacts generated.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/artifact3.jpeg').default} alt="Image"  className="doc_img"/>

Here is the sample artifact generated.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/artifact4.png').default} alt="Image"  className="doc_img"/>

## Download the Generated Artifacts

**Step 1:** Go to the [HyperExecute](https://hyperexecute.lambdatest.com/hyperexecute/jobs) portal and click on your Job.

**Step 2:** Click on the **Artifacts** button in the upper right corner.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/artifact1.png').default} alt="Image"  className="doc_img"/>

**Step 3:** Click on the **Download** icon to download your Job Artifacts.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/artifact2.png').default} alt="Image"  className="doc_img"/>