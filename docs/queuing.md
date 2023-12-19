---
id: queuing
title: LambdaTest Test Session Queuing
hide_title: true
sidebar_label: Test Session Queuing
description: To prevent over-exploitation of LambdaTest, LamvdaTest has added a capacity constraint on the number of tests that can be queued at our platform. This document will explain how test session queuing works on the LambdaTest platform.
keywords:
  - test session queuing
  - queuing
  - lambdatest queuing
url: https://www.lambdatest.com/support/docs/queuing/
site_name: LambdaTest
slug: queuing/
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
          "name": "Test Session Queuing",
          "item": "https://www.lambdatest.com/support/docs/queuing/"
        }]
      })
    }}
></script>

# Test Session Queuing
***
To prevent over-exploitation of LambdaTest, we have added a capacity constraint on the number of tests that can be queued at our platform. The maximum number of elements that are allowed to be queued for your LambdaTest account will depend upon the number of concurrent sessions you are eligible for. You can figure out the maximum number of test cases you are allowed to queue with the below formula.

```javascript
Maximum number of test cases that can be queued = n + 150

Here, n = number of concurrent sessions.
```
Here is an example, if your LambdaTest account is eligible for 10 concurrent sessions, then your queue can have a maximum of (10 + 150) queued test cases i.e. 160 queued test cases. The scheduling and execution of test cases in your queue will be taken care of by LambdaTest.

If more tests are sent for execution than allowed by your concurrency limit then they will be put in a queue until the queue reaches its maximum holding capacity. So, if you have a concurrency of 100 but you send 200 tests, the “extra” tests will be queued and run as the first round of tests finish. In this scenario, when the number of running tests drops to 99, 1 test from the queue will start running, and when the next test finishes, another test from the queue will start running. This continues until all the queued tests are executed.

Keep in mind the below key points before you start queuing your automated test cases using LambdaTest Selenium grid.

1. As explained on top, there is a limit to the number of tests that can be queued for a single instance. This limit is dependent on the number of your LambdaTest concurrent sessions and exceeding your maximum queuing capacity will directly reject the exceeding test cases.
2. There is also a maximum limit on the time for which a test is allowed to be in the queue. So, If you have got automated test cases that have been in a queue from more than 15 minutes then they will be timed out and will not be executed.

## Rate Limiter and Penalty
***
An account can breach allowed queuing limit 7 times in a month, Example an account has 100 concurrent session plan so that he is allowed to put n+150=250 requests in the queue. If he tries to exceed the limit then the requests will get rejected. Rejection events are counted monthly at the account level. So. user is allowed to request (n+150)*x (default 7 in a month) (where x is a constant per account) before suspending the account.

1. After (n+150)*2 request rejection due to exceeding allowed queuing threshold in a month, Admin will get an email warning for exploitation of service.
2. After (n+150)*4 request rejection due to exceeding allowed queuing threshold in a month, Admin will get an email warning for exploitation of service.
3. After (n+150)*6 request rejection due to exceeding allowed queuing threshold in a month, Admin will get an email warning for exploitation of service with Last warning content.
4. After (n+150)*7 request rejection due to exceeding allowed queuing threshold in a month, Admin will get an email of account suspension with a support link for re-activation of account.

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
       Test Session Queuing
      </span>
    </li>
  </ul>
</nav>