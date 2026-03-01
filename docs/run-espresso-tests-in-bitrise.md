---
id: espresso-bitrise
title: How to integrate your Espresso tests with Bitrise CI
hide_title: true
sidebar_label: Bitrise - Espresso
description: Integrate TestMu AI with Bitrise CI to get started with Espresso test automation across a wide range of real Android devices.
keywords:
- testmu ai bitrise 
- bitrise with testmu ai
- manual app testing bitrise
- espresso testing with bitrise ci
- espresso bitrise
- app testing with bitrise 
- app automation bitrise
url: https://www.testmuai.com/support/docs/run-espresso-tests-in-bitrise/
site_name: TestMu AI
slug: run-espresso-tests-in-bitrise/
canonical: https://www.testmuai.com/support/docs/run-espresso-tests-in-bitrise/
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
          "name": "Running Espresso Tests In Bitrise CI",
          "item": `${BRAND_URL}/support/docs/run-espresso-tests-in-bitrise/`
        }]
      })
    }}
></script>

# Running Espresso Tests In Bitrise CI 
***

Bitrise offers a mobile CI/CD platform as a service (PaaS) to accelerate the automation of your software development projects. It provides different mobile-first features like exhaustive mobile stack coverage, store code anywhere in cloud or on-premise, and zero hardware setup that make building, testing, and deploying faster and easier.

Using <BrandName /> with Bitrise, you can effortlessly perform [Espresso testing](https://www.lambdatest.com/espresso-automation-testing) of your mobile apps on an [online device farm](https://www.lambdatest.com/online-device-farm) of real Android devices.

## Prerequisites
***

1. Ensure you have access to <BrandName /> [real device cloud](https://www.lambdatest.com/real-device-cloud). If not, please [contact sales](https://www.lambdatest.com/contact-us).

2. A Bitrise account.

3. A GitHub / BitBucket / GitLab or other repository to connect with Bitrise.

:::important Note
If you are getting started with Bitrise CI, please refer to our documentation on [running Appium tests in Bitrise CI](/support/docs/bitrise-integration/). 
:::


## Configuring The <BrandName /> App Automate - Espresso Step In Bitrise
***

1. Use the search bar to find **<BrandName /> App Automate - Espresso**. 

<img loading="lazy" src={require('../assets/images/bitrise-espresso/espresso-card.webp').default} alt="Image" width="1664" height="1418"  className="doc_img img_center"/>

2. Click **<BrandName /> App Automate- Espresso** card. 

<img loading="lazy" src={require('../assets/images/bitrise-espresso/espresso-step.webp').default} alt="Image" width="1654" height="630"  className="doc_img img_center"/>


3. In **Input Variables**, enter **App apk path** and **Test suite apk path**.

> You can add a public link if your files are accessible through public link. In case, you don't an apk link handy, you can use <BrandName />’s sample application Proverbial for running your first test.
* [Proverbial APK](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk)
* [Test Suite APK](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android_expressotest.apk)

<img loading="lazy" src={require('../assets/images/bitrise-integration/apppath.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

* In **<BrandName /> username**, click Select secret variable.

<img loading="lazy" src={require('../assets/images/bitrise-integration/keyuservar.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

* Enter the key (it can be anything), your <BrandName /> username and click **Add new**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/username.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

* In **<BrandName /> access key**, click Select secret variable.

<img loading="lazy" src={require('../assets/images/bitrise-integration/keysecvar.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

* Enter the key (it can be anything), your <BrandName /> access key and click **Add new**.

<img loading="lazy" src={require('../assets/images/bitrise-integration/key.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

4. Provide the list of device and operating system version on which you wish to run your tests.

<img loading="lazy" src={require('../assets/images/bitrise-espresso/lod.webp').default} alt="Image" width="2870" height="1242"  className="doc_img img_center"/>

Other options: 

| Key | Value | Capability Description 
| -------- | -----| ------------ | 
| Device List   |  TYPE: STRING<br/> DEFAULT: Untitled<br/> `"Galaxy S10-9", "OnePlus 6T-10"`|  Add the devices here on which the test will be executed.<br/> Devices are comma separated.   | 
|Build Name  |   TYPE: STRING<br/> DEFAULT: Untitled<br/> `Android Small Run` |  You can group your tests like a job containing multiple tests. | 
| Queue Timeout |  TYPE: STRING<br/> DEFAULT: 600<br/> `300` | Enter the time in seconds after which you want your build to timeout from queue.  | 
| Idle Timeout |  TYPE: STRING<br/> DEFAULT: 120<br/> `120` | Enter the time in seconds for maximum running time on a test in the build. | 
| Tunnel |  TYPE: BOOLEAN<br/> `True`<br/>OR<br/> `False` | To test local applications with <BrandName />. | 
| Tunnel name |  TYPE: STRING<br/> `RabbitHole` | Name of the tunnel. | 
| Device logs |  TYPE: BOOLEAN<br/> DEFAULT: FALSE<br/>`True`<br/>OR<br/> `False`| Enable Device Logs that will show information on the actions performed by the device. | 
| Network logs |   TYPE: BOOLEAN<br/> DEFAULT: FALSE<br/>`True`<br/>OR<br/> `False` | Enable Network Logs that will show the information on the data transmitted & received by the device. | 
| Video |   TYPE: BOOLEAN<br/> DEFAULT: TRUE<br/>`True`<br/>OR<br/> `False` | Video recording of the screen. | 

:::info

[Espresso Testing On <BrandName />](/support/docs/getting-started-with-espresso-testing/)

[Automation Capabilities Generator For Selenium and Appium](https://www.lambdatest.com/capabilities-generator/)
:::


5. Click **⌘ + S** to save the step.

<img loading="lazy" src={require('../assets/images/bitrise-espresso/save_step.webp').default} alt="Image" width="2880" height="1416"  className="doc_img img_center"/>

6. Now go back to the build and click **Rebuild** to build the step.

<img loading="lazy" src={require('../assets/images/bitrise-espresso/rebuild.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

7. Once the build process is complete, visit <BrandName /> App Automation Dashboard to view your test results.

<img loading="lazy" src={require('../assets/images/bitrise-espresso/espresso_results.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

---


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Run Espresso Tests In Bitrise CI
      </span>
    </li>
  </ul>
</nav>

