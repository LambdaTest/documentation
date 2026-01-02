---
id: oxygen-integration
title: How to Run Oxygen Automation Scripts Using TestMu AI?
hide_title: true
sidebar_label: Oxygen
description: Run Oxygen test automation scripts on the TestMu AI Selenium Grid, and perform cross browser testing on 3000+ real browser, on-cloud, for a seamless UI.
keywords:
  - testmu ai
  - oxygen test automation
  - test automation framework
  - testmu ai and oxygen
  - oxygen ide
  - record and playback
  - cross browser testing
url: https://www.testmu.ai/support/docs/run-oxygen-automation-scripts-on-testmu
site_name: LambdaTest
slug: run-oxygen-automation-scripts-on-testmu
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
          "name": "Oxygen LambdaTest Integration",
          "item": `${BRAND_URL}/support/docs/ranorex-integration-with-lambdatest/`
        }]
      })
    }}
></script>

# Run Oxygen Automation Scripts On <BrandName /> Selenium Grid
* * *
Oxygen is an open-source test automation framework offering a low code approach for Selenium and Appium tests. The scripts are based on JavaScript and look almost as plain as English, making them intuitive.

Oxygen supports <BrandName /> Selenium Grid, meaning you can configure your <BrandName /> account on your Oxygen instance to perform cross browser testing on 3000+ real browser running on real operating systems, on-cloud. That way, you can eliminate the need for configuring in-house Selenium Grid infrastructure and run your Oxygen IDE test over a wider test coverage.

## Prerequisites
-----------------------------------------------------------------------------------------------------------------------------
* Make sure to [download](https://docs.oxygenhq.org/download-installation-start/download-and-installation/download-oxygen-ide) the Oxygen framework for your operating system.
* Retrieve your <BrandName /> authentication credentials i.e., your <BrandName /> Username, Access Key and Hub URL. You can do so by visiting the [<BrandName /> automation dashboard](https://automation.lambdatest.com/) and clicking on the key icon near the help button.

<img loading="lazy" src={require('../assets/images/Oxygen/Oxygen-1.webp').default} alt="oxygen integration" width="1354" height="498" className="doc_img"/>

## Configure <BrandName /> Authentication Variables In Oxygen
-----------------------------------------------------------------------------------------------------------------------------
**Step 1:** Open the Oxygen framework and click on the cloud icon in the upper-right corner.

<img loading="lazy" src={require('../assets/images/Oxygen/1-1.webp').default} alt="oxygen integration" width="1365" height="384" className="doc_img"/>

**Step 2:** Turn on the toggle for <BrandName /> to run your Oxygen automation scripts on <BrandName /> Selenium Grid of 3000+ real browsers.

<img loading="lazy" src={require('../assets/images/Oxygen/oxygen-2.webp').default} alt="oxygen integration" width="1363" height="714" className="doc_img"/>

**Step 3:** Once you turn the toggle on, you need to fill the mandatory fields to run your Oxygen tests on <BrandName /> Selenium Grid. These mandatory fields include your Hub URL, your <BrandName /> Username, and your <BrandName /> Access Token.

<img loading="lazy" src={require('../assets/images/Oxygen/oxygen-3.webp').default} alt="oxygen integration" width="669" height="296" className="doc_img"/>

You can also Capture Browser Console, Capture Network Logs, Take Screenshots, and do Video Recording for your Oxygen test execution over <BrandName /> Selenium Grid by enabling the checkboxes. After selecting the preferred checkboxes and filling the mandatory fields, click on **Save & Close**.

<img loading="lazy" src={require('../assets/images/Oxygen/oxygen-4.webp').default} alt="oxygen integration" width="711" height="540" className="doc_img"/>

**Step 4:** You will now find a drop-down beside the **Run** button, which says Local, indicating that the tests are being executed on your local machine. To run the tests on the <BrandName /> cloud, you would need to select the value for <BrandName />.

<img loading="lazy" src={require('../assets/images/Oxygen/oxygen-5.webp').default} alt="oxygen integration" width="1365" height="283" className="doc_img"/>

Kudos! That is all you need to do for integrating your Oxygen framework with <BrandName /> Selenium Grid. Now, as you run the test, it would be executed over the Selenium Grid offered by <BrandName />, which would enable you to ensure a sturdy cross browser compatible web-application.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Oxygen <BrandName /> Integration</span>
    </li>
  </ul>
</nav>
