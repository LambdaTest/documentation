---
id: oxygen-integration
title: How to Run Oxygen Automation Scripts Using TestMu AI?
hide_title: true
sidebar_label: Oxygen
description: Run Oxygen test automation scripts on the TestMu AI Selenium Grid, and perform cross browser testing on 3000+ real browser, on-cloud, for a seamless UI.
keywords:
  - lambdatest
  - oxygen test automation
  - test automation framework
  - lambdatest and oxygen
  - oxygen ide
  - record and playback
  - cross browser testing
url: https://www.lambdatest.com/support/docs/run-oxygen-automation-scripts-on-lambdatest/
site_name: LambdaTest
slug: run-oxygen-automation-scripts-on-lambdatest/
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
          "name": "Oxygen LambdaTest Integration",
          "item": "https://www.lambdatest.com/support/docs/ranorex-integration-with-lambdatest/"
        }]
      })
    }}
></script>

# Run Oxygen Automation Scripts On LambdaTest Selenium Grid
* * *
Oxygen is an open-source test automation framework offering a low code approach for Selenium and Appium tests. The scripts are based on JavaScript and look almost as plain as English, making them intuitive.

Oxygen supports LambdaTest Selenium Grid, meaning you can configure your LambdaTest account on your Oxygen instance to perform cross browser testing on 3000+ real browser running on real operating systems, on-cloud. That way, you can eliminate the need for configuring in-house Selenium Grid infrastructure and run your Oxygen IDE test over a wider test coverage.

## Prerequisites
-----------------------------------------------------------------------------------------------------------------------------
* Make sure to [download](https://docs.oxygenhq.org/download-installation-start/download-and-installation/download-oxygen-ide) the Oxygen framework for your operating system.
* Retrieve your LambdaTest authentication credentials i.e., your LambdaTest Username, Access Key and Hub URL. You can do so by visiting the [LambdaTest automation dashboard](https://automation.lambdatest.com/) and clicking on the key icon near the help button.

<img loading="lazy" src={require('../assets/images/Oxygen/Oxygen-1.webp').default} alt="oxygen integration" width="1354" height="498" className="doc_img"/>

## Configure LambdaTest Authentication Variables In Oxygen
-----------------------------------------------------------------------------------------------------------------------------
**Step 1:** Open the Oxygen framework and click on the cloud icon in the upper-right corner.

<img loading="lazy" src={require('../assets/images/Oxygen/1-1.webp').default} alt="oxygen integration" width="1365" height="384" className="doc_img"/>

**Step 2:** Turn on the toggle for LambdaTest to run your Oxygen automation scripts on LambdaTest Selenium Grid of 3000+ real browsers.

<img loading="lazy" src={require('../assets/images/Oxygen/oxygen-2.webp').default} alt="oxygen integration" width="1363" height="714" className="doc_img"/>

**Step 3:** Once you turn the toggle on, you need to fill the mandatory fields to run your Oxygen tests on LambdaTest Selenium Grid. These mandatory fields include your Hub URL, your LambdaTest Username, and your LambdaTest Access Token.

<img loading="lazy" src={require('../assets/images/Oxygen/oxygen-3.webp').default} alt="oxygen integration" width="669" height="296" className="doc_img"/>

You can also Capture Browser Console, Capture Network Logs, Take Screenshots, and do Video Recording for your Oxygen test execution over LambdaTest Selenium Grid by enabling the checkboxes. After selecting the preferred checkboxes and filling the mandatory fields, click on **Save & Close**.

<img loading="lazy" src={require('../assets/images/Oxygen/oxygen-4.webp').default} alt="oxygen integration" width="711" height="540" className="doc_img"/>

**Step 4:** You will now find a drop-down beside the **Run** button, which says Local, indicating that the tests are being executed on your local machine. To run the tests on the LambdaTest cloud, you would need to select the value for LambdaTest.

<img loading="lazy" src={require('../assets/images/Oxygen/oxygen-5.webp').default} alt="oxygen integration" width="1365" height="283" className="doc_img"/>

Kudos! That is all you need to do for integrating your Oxygen framework with LambdaTest Selenium Grid. Now, as you run the test, it would be executed over the Selenium Grid offered by LambdaTest, which would enable you to ensure a sturdy cross browser compatible web-application.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Oxygen LambdaTest Integration</span>
    </li>
  </ul>
</nav>
