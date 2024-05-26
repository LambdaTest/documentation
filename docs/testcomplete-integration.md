---
id: testcomplete-integration
title: TestComplete Integration
hide_title: true
sidebar_label: TestComplete Integration
description: LambdaTest offers integration with TestComplete to help you perform web and app automation testing on 3000+ real browsers, devices, and operating systems combinations.
keywords:
- lambdatest integrations
- lambdatest integrations with testcomplete
- testcomplete integration
- testcomplete integration with lambdatest
- lambdatest integration with testcomplete
- testcomplete lambdatest
url: https://www.lambdatest.com/support/docs/testcomplete-integration/
site_name: LambdaTest
slug: testcomplete-integration/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "TestComplete Integration",
          "item": "https://www.lambdatest.com/support/docs/testcomplete-integration/"
        }]
      })
    }}
></script>

# TestComplete Integration
***

TestComplete is an automated functional testing platform for creating automated tests for Windows, Web, Android, and iOS applications. 

LambdaTest integration with TestComplete enables you to perform web and app automation testing across 3000+ real browsers, devices and OS combinations.

## Prerequisites
***

1. Make sure you have a LambdaTest account. 

2. Download TestComplete from its official website.

## Web Automation Using TestComplete And LambdaTest
---

:::info Note

- **Single Test**: To run a single test, you can use `Browsers.RemoteItem(server, capabilities).Run(url)` function in the test script. 
- **Parallel Test**: To run the parallel tests, you can use `Parallel.RunEnvironments(tests, browser_caps, url, server);` function in the test script.
:::

1. Launch TestComplete and open your test script. 

<img loading="lazy" src={require('../assets/images/testcomplete-integration/1.png').default} alt="Synapse Architecture" width="1912" height="996" className="doc_img"/>

2. Visit [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build) and copy the LambdaTest Hub URL.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/2.png').default} alt="Synapse Architecture" width="1908" height="846" className="doc_img"/>

3. In your test script, paste the Hub URL to the " server".

<img loading="lazy" src={require('../assets/images/testcomplete-integration/3.png').default} alt="Synapse Architecture" width="1920" height="1080" className="doc_img"/>

4. Visit LambdaTest Automation Capabilities Generator. Select Selenium version, choose desired language, and the select the required browser and OS combinations to run the test on LambdaTest.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/web-caps.png').default} alt="Synapse Architecture" width="1225" height="565" className="doc_img"/>

5. Copy the generated desired capabilities and paste in your test script.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/4.png').default} alt="Synapse Architecture" width="1912" height="992" className="doc_img"/>

6. Now run the test.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/5.png').default} alt="Synapse Architecture" width="1340" height="617" className="doc_img"/>

7. Go to LambdaTest Automation Dashboard to view your test results.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/6.png').default} alt="Synapse Architecture" width="1904" height="829" className="doc_img"/>

You can also see the video recording and logs for individual test session in the Automation Dashboard. 

<img loading="lazy" src={require('../assets/images/testcomplete-integration/7.png').default} alt="Synapse Architecture" width="1910" height="844" className="doc_img"/>


## App Automation Using TestComplete And LambdaTest
---

1. In order to run the tests in TestComplete, set **Mobile support type** to *Mobile device cloud*.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/11.png').default} alt="Synapse Architecture" width="1919" height="828" className="doc_img"/>

2. Visit [LambdaTest App Automation Dashboard](https://appautomation.lambdatest.com/) to upload your application. 

<img loading="lazy" src={require('../assets/images/testcomplete-integration/12.png').default} alt="Synapse Architecture" width="1910" height="773" className="doc_img"/>


3. Visit LambdaTest Automation Capabilities Generator. Select Appium, enable Real Device toggle, choose Android or iOS, select desired language, Brand/Device/OS version, and pass the App URL to run the test on LambdaTest.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/apps-caps.png').default} alt="Synapse Architecture" width="1207" height="568" className="doc_img"/>

4. Go to your test script and paste the generated desired capabilities to capabilities section.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/13.png').default} alt="Synapse Architecture" width="1919" height="861" className="doc_img"/>

5. Navigate to LambdaTest App Automation Dashboard and copy the LambdaTest Hub URL. 

<img loading="lazy" src={require('../assets/images/testcomplete-integration/14.png').default} alt="Synapse Architecture" width="1917" height="846" className="doc_img"/>

6. In your test script, paste the LambdaTest Hub URL to the server.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/15.png').default} alt="Synapse Architecture" width="1920" height="1000" className="doc_img"/>

7. Now run the test.

8. Go to LambdaTest App Automation Dashboard to view your test results.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/16.png').default} alt="Synapse Architecture" width="1909" height="837" className="doc_img"/>

---

>
In case you have any questions, feel free to share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24*7 Chat Portal**</span> or by mailing to us on [**support@lambdatest.com**](mailto:support@lambdatest.com). <br />

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">TestComplete Integration</span>
    </li>
  </ul>
</nav>
