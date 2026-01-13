---
id: zebrunner-integration
title: How To Integrate TestMu AI With Zebrunner Instance
hide_title: true
sidebar_label: Zebrunner
description: TestMu AI Selenium Grid integration to Zebrunner will help you run your Selenium automation scripts from Zebrunner instance to our cloud-based Selenium Grid.
keywords:
- testmu ai integrations
- testmu ai integrations with test management tools
- zebrunner integration
- zebrunner integration with testmu ai
- testmu ai integration with zebrunner
- zebrunner testmu ai
url: https://www.testmu.ai/support/docs/zebrunner-integration
site_name: LambdaTest
slug: zebrunner-integration
canonical: https://www.testmu.ai/support/docs/zebrunner-integration/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Zebrunner Integration",
          "item": `${BRAND_URL}/support/docs/zebrunner-integration/`
        }]
      })
    }}
></script>

# Zebrunner Integration With <BrandName />’s Cloud Based Selenium Grid
***

Zebrunner is a modern test reporting and analytics tool which offers very comprehensive automated test results and analysis with the help of a smart AI-based failure classification system. Through Zebrunner, you can easily detect failures with the help of rich artifacts, such as video, screens, logs, etc., and fix issues faster.

Zebrunner now offers integration with <BrandName /> to help you perform automated cross-browser testing taking advantage of the cloud-based Selenium Grid on over 2000 real browsers. <BrandName /> [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) integration to Zebrunner will help you run your Selenium automation scripts from Zebrunner instance to our cloud-based Selenium Grid very easily. Lets see how.

## How To Integrate <BrandName /> With Zebrunner Instance

* * *

To integrate your <BrandName /> account with the Zebrunner instance, go to the Integrations panel and activate the <BrandName /> environment under Test Environment Provider category. <img loading="lazy" src={require('../assets/images/zebrunner-integration/activate-lambdatest.webp').default} alt="zebrunner integration" width="1282" height="722" className="doc_img"/>

The <BrandName /> option will open and you will be needed to enter your <BrandName /> credentials, including Hub URL, username and access key. Once you have entered the required information, click on Save button. 

<img loading="lazy" src={require('../assets/images/zebrunner-integration/enter-lambdatest-credentials.webp').default} alt="zebrunner integration" width="1282" height="722" className="doc_img"/>

As soon as you click on the Save button, your <BrandName /> credentials will be verified. If the credentials verification fails, a red dot will appear against <BrandName />, else a green dot will appear stating that the integration is successful, as shown in the image below.

<img loading="lazy" src={require('../assets/images/zebrunner-integration/integration-successful.webp').default} alt="zebrunner integration" width="1282" height="722"  className="doc_img"/>

## How To Execute Tests On <BrandName /> From Zebrunner

* * *

Now that you have integrated <BrandName /> as the Test Environment Provide, you can execute your tests on the <BrandName />'s cloud-based Selenium Grid. To do so:

1.  Select the project of your choice, and choose the environment as <BrandName />, from the list of active test environment providers. 

<img loading="lazy" src={require('../assets/images/zebrunner-integration/select-LambdaTest-environment-for-project.webp').default} alt="zebrunner integration" width="1281" height="722"  className="doc_img"/>

2.  A list of options will appear now, as shown in the image below, stating the type of environment upon which you want to run your test. You can select any as per your choice. 

<img loading="lazy" src={require('../assets/images/zebrunner-integration/select-device-type.webp').default} alt="zebrunner integration" width="1281" height="722" className="doc_img"/>

3.  Fill the details of the test environment configuration on which you want to run your test. For example, if you select the option as _Web_, then you need to select the browser, browser version, operating system, and resolution. 

<img loading="lazy" src={require('../assets/images/zebrunner-integration/launch-test.webp').default} alt="zebrunner integration" width="1281" height="721" className="doc_img"/>

4.  Once done, click on Launch, and the test execution will start immediately.

 <img loading="lazy" src={require('../assets/images/zebrunner-integration/test-started.webp').default} alt="zebrunner integration" width="1281" height="722" className="doc_img"/>

## How To View Test Execution Details On <BrandName /> Platform

As soon as you execute the test from Zebrunner, the test execution will start on <BrandName /> platform as well. To view the test execution details, open the [Automation dashboard](https://automation.lambdatest.com/). You will see your test details on the top, as shown below:

 <img loading="lazy" src={require('../assets/images/zebrunner-integration/test-on-lambdatest.webp').default} alt="zebrunner integration" width="1281" height="722" className="doc_img"/>

Not only this, but you can also confirm the test environment configuration, view test execution video, console logs, network logs, exceptions, step by step screenshots, and much more. All you need to do is click on test build to open the Automation log view. 

<img loading="lazy" src={require('../assets/images/zebrunner-integration/automation-logs.webp').default} alt="zebrunner integration" width="1281" height="722" className="doc_img"/>

* * *
>
Kudos! Now you can deploy your code in a reliable & faster manner at scale, using <BrandName /> integration with Zebrunner, and perform automated cross browser testing with our cloud based online Selenium Grid. If you still have any questions, feel free to share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24*7 Chat Portal**</span> or by mailing to us on [**support@testmu.ai**](mailto:support@testmu.ai). <br /> Happy testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href={`${BRAND_URL}/support/docs/`}>Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Zebrunner Integration With <BrandName />’s Cloud Based Selenium Grid</span>
    </li>
  </ul>
</nav> 
