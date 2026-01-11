---
id: testsigma-integration
title: Running Automation Tests Using Testsigma TestMu AI Integration
hide_title: true
sidebar_label: Testsigma
description: TestMu AI now offers integration with Testsigma to help you perform automated cross-browser testing on 3000+ real browsers of its cloud-based Selenium Grid.
keywords:
- testmu ai integrations
- testmu ai integrations with codeless testing tools
- testsigma integration
- testsigma integration with testmu ai
- testmu ai integration with testsigma
- testsigma testmu ai
url: https://www.testmu.ai/support/docs/testsigma-integration
site_name: LambdaTest
slug: testsigma-integration
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
          "name": "Testsigma LambdaTest Integration",
          "item": `${BRAND_URL}/support/docs/testsigma-integration/`
        }]
      })
    }}
></script>

# Testsigma Integration With <BrandName />’s Cloud Based Selenium Grid
***

Testsigma is an unified codeless automation testing platform, designed and built for Agile and DevOps teams. With Testsigma, you can automate tests on Web, Mobile, and APIs; along with your team, with minimal or no coding skills required.

Testsigma now offers integration with <BrandName /> to help you perform automated cross-browser testing taking advantage of the cloud-based [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) on over 2000 real browsers. <BrandName /> Selenium Grid integration to Testsigma will help you run your Selenium automation scripts from Testsigma instance to our cloud-based Selenium Grid very easily. Lets see how.


## How To Integrate <BrandName /> With Testsigma

* * *

To integrate your <BrandName /> account with the Testsigma instance, go to the Plugins options in Settings and enable the <BrandName /> environment under Test Lab category.

 <img loading="lazy" src={require('../assets/images/testsigma-integration/testsigma.webp').default} alt="Integrating <BrandName /> With Testsigma" width="1281" height="722" className="doc_img"/>

The <BrandName /> option will open and you will be needed to enter your <BrandName /> credentials, including username and access key. Once you have entered the required information, click on Create button. 

<img loading="lazy" src={require('../assets/images/testsigma-integration/testsigma-1.webp').default} alt="Access <BrandName /> Account in Testsigma App" width="1281" height="722" className="doc_img"/>

As soon as you click on the Create button, your <BrandName /> credentials will be verified. Once the credentials verification is successful, the <BrandName /> option will show a green coloured Enabled button, stating that the integration is successful, as shown in the image below.

<img loading="lazy" src={require('../assets/images/testsigma-integration/testsigma-2.webp').default} alt="<BrandName /> Integration with Testsigma App" width="1281" height="722" className="doc_img"/>

## How To Execute Tests On <BrandName /> From Testsigma

* * *

Now that you have integrated <BrandName /> as the Test Environment Provide, you can execute your tests on the <BrandName />'s cloud-based Selenium Grid. To do so:

1.  Select the project of your choice, and choose the test lab as <BrandName />, from the list of active test labs. 

<img loading="lazy" src={require('../assets/images/testsigma-integration/testsigma-3.webp').default} alt="Test Lab in Testsigma App" width="1281" height="722" className="doc_img"/>

2.  A list of options will appear now, as shown in the image below, stating the type of environment upon which you want to run your test. You can select any as per your choice.

3.  Fill the details of the test environment configuration on which you want to run your test. For example, if you select the option as _Web_, then you need to select the browser, browser version, operating system, and resolution. 

<img loading="lazy" src={require('../assets/images/testsigma-integration/testsigma-4.webp').default} alt="test environment configuration" width="1281" height="722" className="doc_img"/>

4.  Once done, click on Run Now, and the test execution will start immediately.

## How To View Test Execution Details On <BrandName /> Platform

As soon as you execute the test from Testsigma, the test execution will start on <BrandName /> platform as well. To view the test execution details, open the [Automation dashboard](https://automation.lambdatest.com/). You will see your test details on the top, as shown below: 

<img loading="lazy" src={require('../assets/images/testsigma-integration/testsigma-5.webp').default} alt="<BrandName /> Automation Timeline" width="1281" height="722" className="doc_img"/>

Not only this, but you can also confirm the test environment configuration, view test execution video, console logs, network logs, exceptions, step by step screenshots, and much more. All you need to do is click on test build to open the Automation log view. 

<img loading="lazy" src={require('../assets/images/testsigma-integration/testsigma-6.webp').default} alt="LabdaTest Automation Logs" width="1281" height="722" className="doc_img"/>

* * *

>
Kudos! Now you can deploy your codeless automation tests in a reliable & faster manner at scale, using <BrandName /> integration with Testsigma, and perform automated cross browser testing with our cloud based online Selenium Grid. If you still have any questions, feel free to share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24*7 Chat Portal**</span> or by mailing to us on [**support@testmu.ai**](mailto:support@testmu.ai). <br /> Happy testing! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Testsigma <BrandName /> Integration</span>
    </li>
  </ul>
</nav>
