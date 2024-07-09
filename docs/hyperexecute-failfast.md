---
id: hyperexecute-failfast
title: FailFast
hide_title: false
sidebar_label: FailFast
description: Learn more about how to use HyperExecute's FailFast feature.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - FailFast Feature
url: https://www.lambdatest.com/support/docs/hyperexecute-failfast/
site_name: LambdaTest
slug: hyperexecute-failfast/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-failfast/"
        }]
      })
    }}
></script>
HyperExecute's FailFast feature lets you to optimize your testing regimen by automatically aborting jobs that surpass a specified number of consecutive failures. This intelligent feature ensures that you receive prompt feedback and maintain a well-orchestrated testing process.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/failfast/failfast.png').default} alt="Image"  className="doc_img" />

## `maxNumberOfTests`

The  `maxNumberOfTests`  flag serves as a parameter that determines the number of consecutive tests that need to be failed before the job is aborted automatically.

For instance, if you set the `maxNumberOfTests` flag to 4, then your job will be aborted after four consecutive test failures. However, if three of your tests fail and the fourth one is passed, then the FailFast feature will reset and look for the next four consecutive tests that are failing.

This allows you to speed up your test execution process and provide you with faster feedback.

## Implementing FailFast

To leverage the **FailFast** feature, simply incorporate the following command in your HyperExecute YAML file:

```yaml
failFast: 
    maxNumberOfTests: 2
```

For a deeper understanding of the HyperExecute YAML and its versatile features, we invite you to explore our dedicated [HyperExecute YAML documentation](/support/docs/deep-dive-into-hyperexecute-yaml/) page. This resource-rich section provides valuable insights to empower your testing endeavors.

***

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
       HyperExecute FailFast Feature
      </span>
    </li>
  </ul>
</nav>