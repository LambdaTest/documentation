---
id: he-cli-faqs
title: CLI FAQs
hide_title: true
sidebar_label: CLI FAQs
description: Explore HyperExecute CLI FAQs Downloading Test Artifacts, MacOS Verification, Test Run Steps & More! Get Quick Answers Here.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-cli-faqs/
site_name: LambdaTest
slug: hyperexecute-cli-faqs/
canonical: https://www.testmuai.com/support/docs/hyperexecute-cli-faqs/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-cli-faqs/`
        }]
      })
    }}
></script>

# HyperExecute CLI FAQs

***

#### 1. **Can HyperExecute CLI download test artifacts generated during execution?**

  Yes, HyperExecute can download the artifacts generated during the test execution. In addition, HyperExecute has APIs to download artifacts for a particular job.

***

#### 2. **I am not able to open HyperExecute on MacOS because the developer is not verified. What do I do?**

  <img loading="lazy" src={require('../assets/images/hyperexecute/faq/he-faq-1.png').default} alt="Image"  className="doc_img"/>

  The binary for Mac is unsigned. You might get a permission denied warning while executing HyperExecute on macOS and linux machines. To allow permissions you can use the following command: `chmod u+x ./hyperexecute`.
  Thus, you might see a security popup on whether to allow the execution of the tool or not. You can allow it from your **System Preferences** → **Security & Privacy** → **General** tab.

***

#### 3. **Is there a way where I can follow all of the steps in my test run on HyperExecute?**

  Every time you run a test via the [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/), a `hyperexecute-cli.log` file is generated. It is present in the parent directory of your test and contains the details of your entire test run. 

  This `hyperexecute-cli.log` file will also help you in debugging any issues with your tests. You can view the file and figure out exactly where your test run failed. 

  If you want more help with debugging your issues, you can always contact [support@testmuai.com](mailto:support@testmuai.com) and provide them with this file along with your Job ID. 

  <img loading="lazy" src={require('../assets/images/hyperexecute/faq/cli-log.png').default} alt="Image"  className="doc_img"/>

***

For more information on the HyperExecute CLI, visit this [page](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/).

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
       HyperExecute CLI FAQs
      </span>
    </li>
  </ul>
</nav>