---
id: he-general-faqs
title: FAQs
hide_title: true
sidebar_label: General FAQs
description: Explore HyperExecute General FAQs Testing Frameworks, Configurations, and More! Get answers to your questions about HyperExecute's features and capabilities.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-general-faqs
site_name: LambdaTest
slug: hyperexecute-general-faqs
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-general-faqs/`
        }]
      })
    }}
></script>

# HyperExecute General FAQs

***

#### 1. **Which testing frameworks does HyperExecute support?**

  Though HyperExecute has a [very deep support](/support/docs/hyperexecute-supported-languages-and-frameworks/) for Selenium, Cypress, Playwright, CDP, Taiko and other web browser testing frameworks, nothing stops it from running any other tests over the HyperExecute platform using YAML. Core orchestration features and real time logs are native to the platform and will be available over any kind of testing.

***

#### 2. **Can I run a specific command before running tests on HyperExecute?**

  HyperExecute provides you with smart CI features where you can run any command before and after running tests using pre and post steps. Common use cases include, building/ compiling binaries, downloading dependencies, starting services in the background or any other arbitrary command.

***

#### 3. **Do I need to change my code to run my tests on HyperExecute?**

  No code or logic changes have to be done in order to run your end to end tests on HyperExecute. HyperExecute requires a YAML configuration file to determine which tests to run and configure other settings. This YAML file can be created using an online YAML generator, hosted on the HyperExecute onboarding page.

***

#### 4. **Where will HyperExecute run my tests?**

  HyperExecute takes your test scripts and places them in virtual machines having all the components required to run your tests and collect logs and metrics. These virtual machines are hosted by HyperExecute in its secure cloud environment. HyperExecute is also available on dedicated and private clouds where virtual machines can run in your personal cloud accounts.

***

#### 5. **How to use HyperExecute?**

  Tests are triggered on HyperExecute using [HyperExecute CLI](/support/docs/getting-started-with-hyperexecute/) using a YAML file to configure the executing settings including target OS, concurrency and other CI level information. This YAML file can be generated easily using a web based YAML generator that supports multiple [languages and frameworks](/support/docs/hyperexecute-supported-languages-and-frameworks/). As a user you need to focus on writing tests and running the CLI with YAML, everything else is taken care of by the orchestration platform.

***

#### 6. **Why is HyperExecute faster than other end to end testing platforms?**

  Traditional end to end testing platforms add a lot of latency in test execution due to the fragmented components by adding multiple hops. Each and every request has to travel through multiple hops before it can be served by the application under test. This doesn’t just slow tests down, but adds a lot of platform-induced flakiness. HyperExecute puts all the components and the test script in a single isolated environment to run the tests in the fastest and the most efficient way.

***

#### 7. **How does HyperExecute help me debug my tests faster?**

  HyperExecute collects every possible log, including terminal logs, selenium and more (for every single test), and stores them separately from each other. These isolated logs ensure that the end user is not spending time in filtering useful logs and focuses on getting the insights from the logs as fast as possible. HyperExecute also streams these test logs in real time to drastically reduce time wasted in debugging failed tests.

***

#### 8. **Does HyperExecute provide APIs to consume logs?**

  Yes, HyperExecute provides APIs to consume all the logs generated during test execution for offline usage.

***

#### 9. **Does HyperExecute provide the ability to store test artifacts?**

  Yes, HyperExecute provides convenient artifact management where you can upload test artifacts or any files or folders generated during test execution. These artifacts are stored on HyperExecute. HyperExecute exposes APIs to access these as well.

***

#### 10. **Does HyperExecute record video recording of the test session?**

  Yes, HyperExecute generates video recording of every single end to end test triggered over the platform. All the features available in the standard automation platform including video, screenshot, network logs and a lot more, are available in HyperExecute.

***

#### 11. **Can I run parallel tests using HyperExecute?**

  Absolutely, HyperExecute’s core feature is to provide a massively parallel testing infrastructure where the platform intelligently distributes tests across multiple nodes.

***

#### 12. **What are the configurations for HyperExecute virtual machines?**

  HyperExecute provides a generous configuration for virtual machines to run your tests. Windows comes with 7 GB of memory and 4 cores of processors, Linux comes with 4 GB of memory and 2 cores of processors, Mac comes with 7 GB of memory and 4 cores of processors. HyperExecute also provides the ability to customize the execution environment for enterprise accounts.

***

#### 13. **Can I group my tests to run in sequence instead of randomly distributing them?**

  Yes, HyperExecute provides directives to group dependent tests together which need to run in sequence. Using dynamic test discovery, users can write unique test discovery commands for every node, where dependent tests will run in sequence. HyperExecute allows various directives to construct sophisticated testing pipelines to fulfill your use cases.

***

#### 14. **Can I run performance tests with HyperExecute?**

  Though HyperExecute currently doesn’t have a deep support for performance testing, nothing stops the users from running performance tests. HyperExecute will still orchestrate and run performance tests in parallel and provide the terminal logs like all other tests.

***

#### 15. **In which regions does HyperExecute provide its testing infrastructure?**

  HyperExecute is available in more than 40 cloud availability regions across the globe. HyperExecute is supported by multiple hyper clouds which makes it available in most of the availability zones across the globe.

***

#### 16. **How can I open my Microsoft Excel files with HyperExecute?**

  You can access your Microsoft Excel files with HyperExecute by modifying the files that contain your tests. In order to automate the opening of your Excel file, set the `ms:waitForAppLaunch` and `appArguments` capabilities to:
  
  ```bash
   cap.setCapability("ms:waitForAppLaunch", 15);
   cap.setCapability("appArguments", " /e ");
  ```

  This will ensure that your Excel file is opened after 15 seconds, and that it is opened in edit mode. If you want your file to open after a certain period of time, just enter that time in the `ms:waitForAppLaunch` field. 

***

#### 17. **How can I access my <BrandName /> Hub URL?**

  Your <BrandName /> Hub URL can be accessed from our [automation page](https://automation.lambdatest.com/build), along with your username and access key. Click on the **Access Key** button on the right side of your screen to retrieve your Hub URL. The image below indicates exactly where you can find your Hub URL. 

  <img loading="lazy" src={require('../assets/images/hyperexecute/faq/hub.png').default} alt="Image"  className="doc_img"/>


***

>If you have more questions, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will answer them for you.

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
       HyperExecute General FAQs
      </span>
    </li>
  </ul>
</nav>