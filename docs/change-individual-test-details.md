---
id: change-individual-test-details
title: Changing Individual Test Details
hide_title: true
sidebar_label: Changing Individual Test Details
description: TestMu AI Selenium Automation Grid enables you to perform end-to-end
keywords:
  - testmu ai automation
  - selenium automation grid
  - selenium grid online
url: https://www.lambdatest.com/support/docs/change-individual-test-details/
slug: change-individual-test-details/
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
          "name": "Changing Individual Test Details",
          "item": "https://www.lambdatest.com/support/docs/change-individual-test-details/"
        }]
      })
    }}
></script>

# Changing Individual Test Details

* * *

There may be times when you wish to manipulate individual test details from your automation test build while performing automation testing with Selenium Grid on LambdaTest. This document will help you perform basic test operations for a particular test you wish to update.

## Marking Test Status As Pass Or Fail

* * *

While performing automation testing with Selenium on LambdaTest Selenium Grid, you may face a scenario where a test that you declared as fail in your local instance may turn out to be completed successfully at LambdaTest. Don't worry though! We understand how imperative it is to flag an automation test as either **"pass"** or **"fail"** depending upon your testing requirement with respect to the validation of expected behaviour.

If you wish to mark a test status as fail/pass at LambdaTest then you can do so by executing the below code:

* To mark test status to **fail**.  

    ```driver.executeScript('lambda-status=failed')```

* To mark test status to **pass**.  

    ```driver.executeScript('lambda-status=passed')```

Here are some newly added status you can use for interpreting test execution results: `skipped`, `ignored`, `unknown`, `error`.

## Renaming Your Test

* * *

Sometimes, you may wish to rename your test, after placing it under execution. You can do that with the help of below code:

```driver.executeScript('lambda-name=Your_test_name')```

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
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
        Changing Individual Test Details
      </span>
    </li>
  </ul>
</nav>
  
