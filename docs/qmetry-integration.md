---
id: qmetry-integration
title: How to Run QMetry Automation Tests using TestMu AI?
hide_title: true
sidebar_label: QMetry
description: With this integration, run your tests from QMetry app, directly on TestMu AI's cloud-based Selenium Grid, on 3000+ desktop & mobile browser and OS combinations
keywords:
 - TestMu AI integrations
 - QMetry
 - Test Automation for GUI Testing
 - test automation
 - QMetry integration with TestMu AI
 - testmu ai integration with QMetry
url: https://www.testmu.ai/support/docs/qmetry-integration/
site_name: LambdaTest
slug: qmetry-integration/
canonical: https://www.testmu.ai/support/docs/qmetry-integration/
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
          "name": "QMetry TestMu AI Integration",
          "item": `${BRAND_URL}/support/docs/qmetry-integration/`
        }]
      })
    }}
></script>

# Running Your QMetry Tests On <BrandName /> Selenium Grid

* * *
QMetry is a codeless platform tailored for DevOps and Agile testing teams. It can be used to prepare and execute test scenarios on multiple platforms very easily. Not only that, but QMetry also allows you to record test cases in almost all major languages and frameworks, including the QMetry framework.
<BrandName /> now integrates with the QMetry platform to help you execute cross-browser testing of your website, web app, or your mobile website, over 3000+ real desktop devices, mobile viewports, and operating system combinations on its cloud-based selenium grid. This document is a comprehensive guide to help you understand how to integrate QMetry with your <BrandName /> account.
## How To Setup Your <BrandName /> Account With QMetry?
* * *
Once you have your project set up in the QMetry app and test suite ready, you need to specify and activate your <BrandName /> account in the QMetry app to execute it over the <BrandName />'s cloud-based Selenium Grid. Below is the step by step guide to help you do just that:
1.  Once you have your test suite ready, click on the **Execute** button on the app, and select **Remote**. 

<img loading="lazy" src={require('../assets/images/uploads/QMetry.webp').default} alt="Activating <BrandName /> Account QMetry app" width="2882" height="1801" className="doc_img"/>

2.  In the window that opens, navigate to **<BrandName />** tab. Here, you will need to enter your account details and the [desired capabilities](/docs/selenium-automation-capabilities/) to execute the test over your <BrandName /> account. 

<img loading="lazy" src={require('../assets/images/uploads/QMetry-1.webp').default} alt="Manage Capabilities" width="2882" height="1801" className="doc_img"/>

3.  Now, you need to provide access of your <BrandName /> account to the QMetry app. To do so, add your _username_ and _access key_ over their corresponding fields, and click on **FETCH PLATFORM LIST** button. This will verify your credentials and connect your <BrandName /> account with the QMetry app successfully, based on your current plan. 

<img loading="lazy" src={require('../assets/images/uploads/QMetry-2.webp').default} alt="<BrandName /> Configuration in Qmetry App" width="2882" height="1801" className="doc_img"/>
>To get your Username and Access Key, go to your <BrandName /> automation dashboard and click on the "key" icon left to the help button, on the top right corner. 

<img loading="lazy" src={require('../assets/images/uploads/QMetry-4.webp').default} alt="Finding Username and Access Key" width="2882" height="1801" className="doc_img"/>

>If you are on _[Lite](https://www.lambdatest.com/pricing)_ or _[Live](https://www.lambdatest.com/pricing)_ plan, and your provided automation minutes have been exhausted; the above step will throw an error. In such a case, you can wait for the next availability of automation minutes, or you can [upgrade](https://accounts.lambdatest.com/billing/plans) your account. To learn more about how to manage and upgrade your account, refer [this guide](/docs/manage-subscriptions/).
6.  Once done, you will be able to select your desired capabilities in their corresponding fields, like the platform, browser, browser version, resolution, etc. To know more about desired capabilities, refer to [this guide](/docs/selenium-automation-capabilities/). 

<img loading="lazy" src={require('../assets/images/uploads/QMetry-3.webp').default} alt="Qmetry web capailities list" width="2882" height="1801" className="doc_img"/>

7.  Click on **Save**, once you have selected the desired capabilities. The current account info and the capabilities will be saved with a name that you provide. 

<img loading="lazy" src={require('../assets/images/uploads/QMetry-4.webp').default} alt="Saving <BrandName /> Configuration in Qmetry App" width="2881" height="1801" className="doc_img"/>


That's it. Your QMetry app has been integrated successfully with your <BrandName /> account to execute your tests on its cloud-based Selenium Grid.
## Running Tests From Your QMetry App On <BrandName /> Platform
* * *
For demo purpose, we have recorded a test scenario, which includes:

```javascript
- Opening [LambdaTest ToDo App](https://lambdatest.github.io/sample-todo-app/)
- Check the first item in the list
- Check the second item in the list
- Add a new item in the list, with text "Yey, Let's add it to list".
```

<img loading="lazy" src={require('../assets/images/uploads/QMetry-5.webp').default} alt="<BrandName /> Sample App" width="2881" height="1801" className="doc_img"/> 

<img loading="lazy" src={require('../assets/images/uploads/QMetry-5b.webp').default} alt="qmetry Sample to do list" width="2881" height="1801" className="doc_img"/>

For the desired capabilities, we have chosen the following details:

```javascript
platform: macOS High Sierra
browserName: Chrome
version: 87
resolution: 1280x800
network: true
visual: true
```

<img loading="lazy" src={require('../assets/images/uploads/QMetry-3.webp').default} alt="Desired Capabilities" width="2881" height="1801" className="doc_img"/>

Now just select the profile, and hit **Start**. 

<img loading="lazy" src={require('../assets/images/uploads/QMetry-6.webp').default} alt="Start Automated Testing Using Qmetry and <BrandName />" width="2881" height="1801"  className="doc_img"/>

The test execution will then start, and you can see the same on the automation dashboard of your <BrandName /> account. 

<img loading="lazy" src={require('../assets/images/uploads/QMetry-7.webp').default} alt="Test Automation Dashboard" width="2881" height="1801" className="doc_img"/>


Once the test is complete, you can view the test result on the automation dashboard by clicking on the test case. You can see and verify if the test has been passed or failed in the Automation Logs. 

<img loading="lazy" src={require('../assets/images/uploads/QMetry-8.webp').default} alt="Test Automation Logs" width="2881" height="1801" className="doc_img"/>


For each test executed overthe <BrandName /> platform, you can view logs, [mark bugs](/docs/mark-as-bug-in-automation-testing/), and do much more.


> Congrats! You have successfully integrated the QMetry app with your <BrandName /> account and ran your test cases over the <BrandName />'s cloud based Seleniunm Grid. If you come across any doubts or questions, reach out to us via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or mail us at [support@testmu.ai](mailto:support@testmu.ai). Happy testing! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">QMetry <BrandName /> Integration</span>
    </li>
  </ul>
</nav>
