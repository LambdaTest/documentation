---
id: hyperexecute-prioritize-tests
title: Prioritize Your Tests
hide_title: false
sidebar_label: Jobs Prioritization
description: Learn more about how to prioritize your tests with HyperExecute.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - Prioritize Your Tests 
url: https://www.testmuai.com/support/docs/hyperexecute-prioritize-tests/
site_name: TestMu AI
slug: hyperexecute-prioritize-tests/
canonical: https://www.testmuai.com/support/docs/hyperexecute-prioritize-tests/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-prioritize-tests/`
        }]
      })
    }}
></script>
HyperExecute's job prioritization feature empowers you to ensure that your most crucial tests are executed with precision and timeliness. This feature not only enhances the order of execution but also enables effortless searchability within your testing repository.

## `jobLabel`

The `jobLabel` YAML key is used to add tags or labels to jobs. In addition to prioritizing your jobs, you can also use the job labels to search for a job using the relevant label or tag that is assigned to it. To learn more about how to use this feature with the HyperExecute YAML, go through [this section](/support/docs/deep-dive-into-hyperexecute-yaml/#23-joblabel).

## Prioritize your Jobs using `jobLabel`

You can prioritize your jobs by assigning the job labels **low**, **medium** or **high** to your jobs. The jobs with the priority **high** will be executed first, followed by **medium** priority jobs with **low** priority jobs at the end.

```yaml
jobLabel: ['high', 'medium', 'low']
```

:::note
- By default, all of your jobs are assigned **medium** priority. 
- The priority keys are not case sensitive. 
- You can use the priority keys along with your regular job labels too. 
:::

## Visualizing Priority Levels
As you can see in the diagram below, we have executed 6 jobs; one job is designated as **high** priority, three are assigned as **medium** priority, while the remaining two hold **lower** priority labels. HyperExecute is configured to adhere to this prioritization framework during execution. As a result, the high-priority job takes precedence and is processed first, followed sequentially by the medium-priority job and subsequently the low-priority job, even though the higher-priority job is executed later. This prioritized execution sequence ensures efficient task management aligned with the specified priority levels.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/job-prioritization/job_prioritize.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

>If you have more questions, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will answer them for you.

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
       HyperExecute Prioritize Your Tests
      </span>
    </li>
  </ul>
</nav>
