---
id: hyperexecute-prioritize-tests
title: Prioritize Your Tests
hide_title: true
sidebar_label: Jobs Prioritization
description: Learn more about how to prioritize your tests with HyperExecute.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - Prioritize Your Tests 
url: https://www.lambdatest.com/support/docs/hyperexecute-prioritize-tests/
site_name: LambdaTest
slug: hyperexecute-prioritize-tests/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-prioritize-tests/"
        }]
      })
    }}
></script>

# Prioritize Your Tests

HyperExecute's job prioritization feature empowers you to ensure that your most crucial tests are executed with precision and timeliness. This feature not only enhances the order of execution but also enables effortless searchability within your testing repository.

## `jobLabel`
***

The `jobLabel` YAML key is used to add tags or labels to jobs. In addition to prioritizing your jobs, you can also use the job labels to search for a job using the relevant label or tag that is assigned to it. To learn more about how to use this feature with the HyperExecute YAML, go through [this section](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#23-joblabel).

## Prioritize your Jobs using `jobLabel`
***

You can prioritize your jobs by assigning the job labels **low**, **medium** or **high** to your jobs. The jobs with the priority **high** will be executed first, followed by **medium** priority jobs with **low** priority jobs at the end.

```bash
  jobLabel: ['high', 'medium', 'low']
```
***
<img loading="lazy" src={require('../assets/images/he-features/prioritize.png').default} alt="Image" style={{width: '700px',}} className="doc_img"/>

:::note
- By default, all of your jobs are assigned **medium** priority. 
- The priority keys are not case sensitive. 
- You can use the priority keys along with your regular job labels too. 
:::

## Visualizing Priority Levels
As you can see in the diagram below, when you implement prioritization in your jobs, the high-priority jobs step to the forefront, the medium-priority jobs follow suit, and the low-priority tests gracefully bring up the rear.

<img loading="lazy" src={require('../assets/images/hyperexecute/job_prioritize.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

>If you have more questions, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will answer them for you.

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
       HyperExecute Prioritize Your Tests
      </span>
    </li>
  </ul>
</nav>