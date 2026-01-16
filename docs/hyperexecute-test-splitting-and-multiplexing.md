---
id: hyperexecute-test-splitting-and-multiplexing
title: Test Splitting and Multiplexing
hide_title: true
sidebar_label: Test Splitting and Multiplexing
description: Boost testing efficiency with HyperExecute's test splitting and multiplexing in TestMu AI's documentation.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmu.ai/support/docs/hyperexecute-test-splitting-and-multiplexing/
site_name: LambdaTest
slug: hyperexecute-test-splitting-and-multiplexing/
canonical: https://www.testmu.ai/support/docs/hyperexecute-test-splitting-and-multiplexing/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-test-splitting-and-multiplexing/`
        }]
      })
    }}
></script>

# Test Splitting and Multiplexing

HyperExecute has 3 different modes to select and execute tests:
- Auto Split Strategy
- Matrix Strategy
- Hybrid Strategy

You can utilise these modes to split and execute tests as per your requirements. 

<div className="support_main">
  
  <a href = "/support/docs/hyperexecute-auto-split-strategy/">
  <div className="support_inners mb-5">
    <h3>Auto Split Strategy</h3>
    <p>Allows you to distribute your tests over multiple nodes by intelligently distributing them over multiple nodes to reduce the test execution time.</p>
  </div>
  </a>
  <a href = "/support/docs/hyperexecute-matrix-multiplexing-strategy/">
  <div className="support_inners">
    <h3>Matrix Multiplexing Strategy</h3>
    <p>Allows you to split the test cases across different combinations of browsers, OS and custom parameters like files, folders, features, scenarios, etc.</p>
  </div>
  </a>
  <a href = "/support/docs/hyperexecute-hybrid-strategy/">
  <div className="support_inners">
    <h3>Hybrid Strategy</h3>
    <p>Combination of both Auto Split Strategy and Matrix Multiplexing Strategy to run tests in parallel on our virtual machines.</p>
  </div>
  </a>
</div>

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
        Test Splitting and Multiplexing
      </span>
    </li>
  </ul>
</nav>

