---
id: semaphore-integration-with-hyperexecute
title: Semaphore CI Integration With HyperExecute
hide_title: true
sidebar_label: Semaphore
description: Boost market delivery with LambdaTest's HyperExecute integration with Semaphore CI and automate tests on a cloud grid with 3000+ real browsers seamlessly.
keywords:
  - lambdatest integrations
  - lambdatest integrations with ci/cd tools
  - ci/cd tools
  - continuous integration
  - continuous delivery
  - continuous integration tools
  - semaphore ci
url: https://www.lambdatest.com/support/docs/semaphore-integration-with-hyperexecute/
site_name: LambdaTest
slug: semaphore-integration-with-hyperexecute/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Semaphore Integration",
          "item": "https://www.lambdatest.com/support/docs/semaphore-integration-with-hyperexecute/"
        }]
      })
    }}
></script>

# Semaphore Integration with HyperExecute

Semaphore CI/CD is a cloud-based platform that helps engineering teams of all sizes build, test, and deploy their software faster and more reliably. It provides a powerful and flexible way to automate your entire CI/CD pipeline, from code builds to unit tests to production deployments. It is easy to get started with and use, even if you're new to CI/CD. It offers a wide range of features and integrations, so you can customize your pipelines to meet the specific needs of your team and project.

This document will show you how to integrate Semaphore CI/CD with HyperExecute to greatly shorten your test cycles.

## How to Integrate Semaphore with HyperExecute

To integrate Semaphore Pipeline with HyperExecute, follow the below steps:

**Step 1:** Go to the [Semaphore CI/CD](https://semaphoreci.com/) website and login to the site using GitHub or Bitbucket.

**Step 2:** Click on **Choose Repository** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/semaphore/1.png').default} alt="Image"  className="doc_img"/>

**Step 3:** Select the desired repository and click on **Next** button.
<img loading="lazy" src={require('../assets/images/hyperexecute/semaphore/2.png').default} alt="Image"  className="doc_img"/>

**Step 4:** Click on **Continue to workflow setup** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/semaphore/3.png').default} alt="Image"  className="doc_img"/>

**Step 5:** Select the  **Customize** button for custom setting in the workflow.

<img loading="lazy" src={require('../assets/images/hyperexecute/semaphore/4.png').default} alt="Image"  className="doc_img"/>

**Step 6:** In the #Job1 add the below mentioned script. Make sure to replace the `username` and `key` with your LambdaTest [UserName and Access Key](https://www.lambdatest.com/support/docs/hyperexecute-how-to-get-my-username-and-access-key/).

```bash
curl -O https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute
chmod +x hyperexecute
./hyperexecute --user <username> --key <key> --config <file>
```

Click on **Run the workflow** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/semaphore/5.png').default} alt="Image"  className="doc_img"/>

- Logs of the Pipeline executed.

<img loading="lazy" src={require('../assets/images/hyperexecute/semaphore/6.png').default} alt="Image"  className="doc_img"/>

- Output in the [HyperExecute](https://hyperexecute.lambdatest.com/hyperexecute/jobs) Dashboard

<img loading="lazy" src={require('../assets/images/hyperexecute/semaphore/7.png').default} alt="Image"  className="doc_img"/>
