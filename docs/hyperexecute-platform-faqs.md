---
id: he-platform-faqs
title: Platform FAQs
hide_title: true
sidebar_label: Platform FAQs
description: Find answers to frequently asked questions about the HyperExecute platform, covering OS support, available browsers, customization options, and more for efficient testing.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-platform-faqs/
site_name: TestMu AI
slug: hyperexecute-platform-faqs/
canonical: https://www.testmuai.com/support/docs/hyperexecute-platform-faqs/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-platform-faqs/`
        }]
      })
    }}
></script>

# HyperExecute Platform FAQs

***

#### 1. **What OS does HyperExecute provide to execute tests?**

  HyperExecute provides the latest Windows, MacOS and Linux based virtual machines to run your tests. HyperExecute supports multiple versions of Windows, Linux and MacOS.

***

#### 2. **What browsers are available on HyperExecute to run cross browsers tests?**

  HyperExecute provides all the versions of Chrome, Firefox, Edge, Opera, and Safari (Mac only) available to run on the latest windows, MacOS and linux versions.

***

#### 3. What is the current configuration of the Virtual Machines?

Our Virtual Machines are currently configured with **4vCPU** and **16GB RAM**.

This will result in improved availability and a decrease in preemptions. Furthermore, faster IOPs are observed on these machines after conducting benchmarking tests.

***

#### 4. **Is HyperExecute available as an on-prem tool?**

  Yes, HyperExecute is available as a dedicated cloud and on-prem mode option on Azure, AWS and GCP.

***

#### 5. **What analytics does HyperExecute provide for test execution?**

  HyperExecute provides fine-grained analytics over test steps, jobs, browser trends, consistently failing tests and error categorizations, and a lot more in the analytics dashboard. In addition to this, it provides a detailed downloadable _html_ report for every job triggered. This report can be downloaded by the CLI after the job is completed or via the reports API.

***

#### 6. **Which logs does HyperExecute provide for Selenium tests?**

  Video recording, screenshots, command logs, network logs, selenium node logs, browser logs and a lot more are available for every single end-to-end test run over the platform.

***

#### 7. **Can I access the file system while running my tests?**

  Yes, with HyperExecute you get access to all the underlying virtual machines to completely customize the testing environment. Generating or reading files for your test case is very convenient with HyperExecute.

***

#### 8. **Do I have access to the underlying OS while running tests?**

  Yes, with HyperExecute, you get access to all the underlying virtual machines to completely customize the testing environment. Some good use cases of this are changing registry settings, downloading files, starting processes and more. 

***

#### 9. **Can I customize the testing environment?**

  Yes, with HyperExecute, you can completely customize the test environment using pre and post steps in the YAML. For enterprise accounts, HyperExecute provides the ability to define custom virtual machine images for all the OS for deeper level customizations to the testing environments. Enterprise customers can create their own customized virtual machine images over HyperExecute base images as per their use case.

***

#### 10. **Can I create custom virtual machine images for my testing?**

  Yes. For enterprise accounts, HyperExecute provides the ability to define custom virtual machine images for every OS to allow deeper level customizations to the testing environments. Enterprise customers can create their own customized virtual machine images over HyperExecute base images as per their use cases.

***

#### 11. **Can I integrate my reporting tool with HyperExecute?**

  Yes. It’s very easy to integrate HyperExecute with your reporting tool by hitting their APIs in the post-steps using the YAML. HyperExecute is also bringing more integrations with popular reporting tools. You can request new integrations by emailing us at hyperexecute@lambdatest.com.

***

#### 12. **Do HyperExecute VMs have basic command line tools installed?**

  HyperExecute virtual machines come preinstalled with a variety of open source utilities and language runtimes to ensure that they are ready to use the testing environment.

  - For MacOS:
    https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11-Readme.md

  - For Windows:
    https://github.com/actions/virtual-environments/blob/main/images/win/Windows2019-Readme.md
    
  - For Linux:
    https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-Readme.md

We use Github’s open source images for Github actions and pre-installed softwares. Visit the links to view the list of pre-installed softwares on our VMs.

***

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
       HyperExecute Platform FAQs
      </span>
    </li>
  </ul>
</nav>
