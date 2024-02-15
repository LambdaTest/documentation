---
id: hyperexecute-run-jmeter-tests
title: Execute JMeter Test File on HyperExecute
hide_title: false
sidebar_label: Execute JMeter File on HyperExecute
description: Learn how to do the performance testing using the jmeter tests
keywords:
  - hyperexecute performance testing
  - hyperexecute
  - lambdatest
  - jmeter
  - hyperexecute dashboard
url: https://www.lambdatest.com/support/docs/hyperexecute-run-jmeter-tests/
site_name: LambdaTest
slug: hyperexecute-run-jmeter-tests/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Products Integration",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Performance Testing",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-run-jmeter-tests/"
        }]
      })
    }}
></script>

After setting up a Test Plan, now you need to associate your test cases and execute it as well via HyperExecute.

## Step 1: Setup your JMeter Project

- Go to the [HyperExecute Project's Dashboard](https://hyperexecute.lambdatest.com/hyperexecute/projects) and click on the **Setup new project** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/1.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

- Select the **Tool** as **JMeter** and enter your **Project Name**.

- Click on Continue.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/2.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>

- Browse and Upload the test files that you have created.

- Click on the **Save** button

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/performance_testing/3.png').default} alt="HyperExecute"  width="1920" height="868" className="doc_img"/>
