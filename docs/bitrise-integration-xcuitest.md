---
id: bitrise-integration-xcuitest
title: Integrating TestMu AI as a Bitrise CI/CD Step [XCUITest] 
hide_title: true
sidebar_label: Bitrise - XCUITest
description: Integrate TestMu AI with Bitrise CI/CD Step [XCUITest] to run your XCUITest workflow successfully on TestMu AI.
keywords:
- testmu ai bitrise 
- bitrise with testmu ai
- manual app testing bitrise
- xcui testing with bitrise ci
- xcuitest bitrise
- app testing with bitrise 
- app automation bitrise
url: https://www.testmuai.com/support/docs/bitrise-integration-xcuitest/
site_name: TestMu AI
slug: bitrise-integration-xcuitest/
canonical: https://www.testmuai.com/support/docs/bitrise-integration-xcuitest/
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
          "name": "Integrating <BrandName /> as a Bitrise CI/CD Step [XCUITest]",
          "item": `${BRAND_URL}/support/docs/bitrise-integration-xcuitest/`
        }]
      })
    }}
></script>

# Running XCUITests In Bitrise CI 
***

Bitrise offers a mobile CI/CD platform as a service (PaaS) to accelerate the automation of your software development projects. It provides different mobile-first features like exhaustive mobile stack coverage, store code anywhere in cloud or on-premise, and zero hardware setup that make building, testing, and deploying faster and easier.

Using <BrandName /> with Bitrise, you can effortlessly perform [XCUI testing](https://www.lambdatest.com/xcuitest-app-testing) of your mobile apps on an [online device farm](https://www.lambdatest.com/online-device-farm) of real Android devices.

## Prerequisites
***

1. Ensure you have access to <BrandName /> [real device cloud](https://www.lambdatest.com/real-device-cloud). If not, please [contact sales](https://www.lambdatest.com/contact-us).

2. A Bitrise account.

3. A GitHub / BitBucket / GitLab or other repository to connect with Bitrise.

:::important Note
If you are getting started with Bitrise CI, please refer to our documentation on [running Appium tests in Bitrise CI](/support/docs/bitrise-integration/). 
:::

## Configuring The <BrandName /> App Automate - XCUI Step In Bitrise
***
1. Use the search bar to find **<BrandName /> App Automate - XCUITest**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/bitrise-integration-cicd.webp').default} alt="Bitrise Integration CI/CD" width="1444" height="703"  className="doc_img"/>

2. Click **<BrandName /> App Automate- XCUITest** card.

<img loading="lazy" src={require('../assets/images/bitrise-integration/bitrise-integration.webp').default} alt="Bitrise Integration CI/CD Dashboard" width="1444" height="703"  className="doc_img"/>



<img loading="lazy" src={require('../assets/images/bitrise-integration/bitrise-integration-cicd-dashboard.webp').default} alt="Bitrise Integration CI/CD Dashboard" width="1444" height="703"  className="doc_img"/>

3. In **Input Variables**, enter **App ipa path** and **Test suite ipa path**.

> You can add a public link if your files are accessible through public link. In case, you don't an apk link handy, you can use <BrandName />’s sample application Proverbial for running your first test.
* [Proverbial iOS](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa)
* [XCUITest Suite](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios_xcuitest.ipa)

<img loading="lazy" src={require('../assets/images/bitrise-integration/bitrise-integration-cicd-1.webp').default} alt="Bitrise Integration CI/CD Dashboard" width="1444" height="703"  className="doc_img"/>

* In **<BrandName /> username**, click Select secret variable.

<img loading="lazy" src={require('../assets/images/bitrise-integration/bitrise-integration-cicd-2.webp').default} alt="Bitrise Integration CI/CD Dashboard" width="1444" height="703"  className="doc_img"/>

4. Provide the list of device and operating system version on which you wish to run your tests.

<img loading="lazy" src={require('../assets/images/bitrise-integration/bitrise-integration-cicd-3.webp').default} alt="Bitrise Integration CI/CD Dashboard" width="1444" height="703"  className="doc_img"/>

Other options: 

| Key | Value | Capability Description 
| -------- | -----| ------------ | 
| Device List   |  TYPE: STRING<br/> DEFAULT: Untitled<br/> `"iPhone 12-14", "iPhone 6S-13"`|  Add the devices here on which the test will be executed.<br/> Devices are comma separated.   | 
|Build Name  |   TYPE: STRING<br/> DEFAULT: Untitled<br/> `iOS Small Run` |  You can group your tests like a job containing multiple tests. | 
| Queue Timeout |  TYPE: STRING<br/> DEFAULT: 600<br/> `300` | Enter the time in seconds after which you want your build to timeout from queue.  | 
| Idle Timeout |  TYPE: STRING<br/> DEFAULT: 120<br/> `120` | Enter the time in seconds for maximum running time on a test in the build. | 
| Tunnel |  TYPE: BOOLEAN<br/> `True`<br/>OR<br/> `False` | To test local applications with <BrandName />. | 
| Tunnel name |  TYPE: STRING<br/> `RabbitHole` | Name of the tunnel. | 
| Device logs |  TYPE: BOOLEAN<br/> DEFAULT: FALSE<br/>`True`<br/>OR<br/> `False`| Enable Device Logs that will show information on the actions performed by the device. | 
| Network logs |   TYPE: BOOLEAN<br/> DEFAULT: FALSE<br/>`True`<br/>OR<br/> `False` | Enable Network Logs that will show the information on the data transmitted & received by the device. | 
| Video |   TYPE: BOOLEAN<br/> DEFAULT: TRUE<br/>`True`<br/>OR<br/> `False` | Video recording of the screen. | 

:::info

[XCUI Testing On <BrandName />](/support/docs/getting-started-with-xcuitest/#capabilities-supported)

[Automation Capabilities Generator For Selenium and Appium](https://www.lambdatest.com/capabilities-generator/)
:::

5. Click **⌘ + S** to save the step.

<img loading="lazy" src={require('../assets/images/bitrise-integration/bitrise-integration-cicd-4.webp').default} alt="Bitrise Integration CI/CD Dashboard" width="1444" height="703"  className="doc_img"/>

6. Let’s go back to the Build and click on `Rebuild` to Build the Step.

<img loading="lazy" src={require('../assets/images/bitrise-integration/bitrise-integration-cicd-build.webp').default} alt="Bitrise Integration CI/CD Dashboard" width="1444" height="703"  className="doc_img"/>

7. Once the build process is complete, visit **<BrandName /> App Automation Dashboard** to view your test results.

<img loading="lazy" src={require('../assets/images/bitrise-integration/lambdatest-xcuitest.webp').default} alt="Bitrise Integration CI/CD Dashboard" width="1444" height="703"  className="doc_img"/>


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
       Bitrise Integration XCUITest
       </span>
    </li>
  </ul>
</nav>
