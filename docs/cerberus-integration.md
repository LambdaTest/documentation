---
id: cerberus-integration
title: Running Cerberus Automation Tests Using TestMu AI
hide_title: true
sidebar_label: Cerberus
description: Now perform cross-browser testing of your website or web app on 3000+ desktop & mobile browser and OS combinations, using TestMu AI and Cerberus integration
keywords:
 - TestMu AI integrations
 - Cerberus
 - Test Automation for GUI Testing
 - test automation
 - Cerberus integration with Lambdatest
 - testmu ai integration with Cerberus
url: https://www.testmu.ai/support/docs/cerberus-integration
site_name: LambdaTest
slug: cerberus-integration
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Cerberus <BrandName /> Integration",
          "item": `${BRAND_URL}/support/docs/cerberus-integration/`
        }]
      })
    }}
></script>

# Run Cerberus Tests On <BrandName /> Selenium Grid
* * *

Cerberus Testing is an open-source tool that helps you cover the complete test cycle from a single place. It can be used for both Automation testing, as well as Manual testing.

<BrandName /> now provides an integration with the Cerberus Testing tool, to help you perform cross-browser testing on over 2000 real desktop browsers, mobile viewports, and operating system combinations. With this document, you will learn how to integrate LamndaTest with the Cerberus Testing tool and get started with your first test.

## Setting Up <BrandName /> As The Executor Robot

* * *

Inside your Cerberus Testing tool, you need to set up <BrandName /> as your Test Executor. So follow the below steps to set up <BrandName /> as your Executor Robot:

1.  Click on 'Create' a new Robot <img loading="lazy" src={require('../assets/images/uploads/cerbeus.webp').default} alt="Creating Cerberus Robot" width="1281" height="583" className="doc_img"/>
2.  Enter the Robot name as per your choice, such as "<BrandName />Chrome85Win". Also choose the platform, browser, browser version and screen size of your choice. <img loading="lazy" src={require('../assets/images/uploads/cerbeus-1.webp').default} alt="New Robot Configurstion in Cerberus App" width="1281" height="578" className="doc_img"/>
3.  You can also add optional desired capabilities of your choice, in the Capabilities tab. To know more about Desired Capabilities, you can refer to our [Selenium Autiomation Capabilities guide](/docs/selenium-automation-capabilities/) on our [Capabilities Generator](https://www.lambdatest.com/capabilities-generator/).
4.  Then switch to Executors tab, and click on "Add Executor". <img loading="lazy" src={require('../assets/images/uploads/cerbeus-2.webp').default} alt="Add Automation Test Executor" width="1281" height="582" className="doc_img"/>
5.  In this Add Executor window, you need to pass following values to their corresponding options, as stated below:

    ```
    Host: hub.lambdatest.com
    Port: 80
    Host User: <YOUR_LAMBDATEST_USERNAME>
    Host Password: <your LambdaTest access key>
    ```

    <img loading="lazy" src={require('../assets/images/uploads/cerbeus-3.webp').default} alt="Setting Up Executor Wizard" width="1281" height="578" className="doc_img"/>

    > To get your <BrandName /> username and access key, please refer our [Capabilities Generator](https://www.lambdatest.com/capabilities-generator/).

Once you are done, just click on the Create button and the <BrandName /> Robot executor will be created successfully, and will look something like this: <img loading="lazy" src={require('../assets/images/uploads/cerbeus-4.webp').default} alt="Setting <BrandName /> Robot Executor" width="1281" height="578" className="doc_img"/>

## Executing Your Cerberus Test On <BrandName />

* * *

Since you have the <BrandName /> Executor ready, you can now execute your tests from Cerberus directly on the <BrandName /> platform. To do so:

1.  Select your test from the "Run Test Case" section of Cerberus tool. For this demo purpose, we have used the existing sample test case available, as shown in the image below <img loading="lazy" src={require('../assets/images/uploads/cerbeus-5.webp').default} alt="Run Test Case" width="1281" height="577" className="doc_img"/>
2.  Then you need to select the environment, and country of your choice, in which you want to run the test case. <img loading="lazy" src={require('../assets/images/uploads/cerbeus-6.webp').default} alt="test execution environment" width="1281" height="580" className="doc_img"/>
3.  Then you need to select the executor for your test case, in the Robot Settings section. Here, you need to select the earlier created <BrandName /> Executor, from the list of available Robots. <img loading="lazy" src={require('../assets/images/uploads/cerbeus-7.webp').default} alt="selecting executor for test case" width="1282" height="573" className="doc_img"/>
4.  You can also fill in optional environment details, as per your choice. Then click on the **Run TestCase (and See Results)** button to execute your test case. <img loading="lazy" src={require('../assets/images/uploads/cerbeus-8.webp').default} alt="Running Test Case" width="1281" height="578" className="doc_img"/>

Now if you open your [Automation dashboard](https://automation.lambdatest.com/timeline), you can see your Cerberus test case running as per the chosen Robot Executor details. <img loading="lazy" src={require('../assets/images/uploads/cerbeus-9.webp').default} alt="<BrandName /> Test Automation Dashboard" width="1281" height="576" className="doc_img"/>

Once the test is complete, you can view the result of the test on <BrandName />, with all its details. You can view logs, [mark bugs](/docs/mark-as-bug-in-automation-testing/), and do much more for each executed test from your <BrandName /> platform. To explore more about the <BrandName />'s Automation Dashboard, refer [inside <BrandName /> platform guide](/docs/inside-testmu-platform/).

* * *

> Congrats! You have successfully executed your Cerberus test case on the <BrandName /> platform, which provides you 3000+ browser and operating system combinations to perform cross-browser testing. If you have any doubt or face any issues, please feel free to contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>, or you can also mail us at [support@lambdatest.com](mailto:support@lambdatest.com). Happy Testing!! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Cerberus <BrandName /> Integration</span>
    </li>
  </ul>
</nav>
