---
id: performance-report
title: Performance Report
hide_title: true
sidebar_label: Performance Report
description: LT Browser integrates with Google Lighthouse that allows you to view the performance report of your web-page instantly. Along with testing the website's responsiveness, you can now test your website performance statistics across 50+ pre-installed device viewports.
keywords:
    - performance report
    - LT browesr integration
    - Google lighthouse integration
    - testmu ai reporting
    - lt browser
url: https://www.testmuai.com/support/docs/performance-report/
site_name: LambdaTest
slug: performance-report/
canonical: https://www.testmu.ai/support/docs/performance-report/
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
          "name": "Performance Report",
          "item": `${BRAND_URL}/support/docs/performance-report/`
        }]
      })
    }}
></script>

# Performance Report
***

[LT Browser](https://www.lambdatest.com/lt-browser) now integrates with Google Lighthouse that allows you to view the performance report of your web-page instantly. Along with testing the website's responsiveness, you can now test your website performance statistics across 50+ pre-installed device viewports. The Performance Report allows you to view the score of:

* Desktop and Mobile
* Performance, Accessibility, Best Practices, SEO, and Progressive Web App
* Page Load Time and Browser Processing Time

<div className="ytframe"> 
<div className="youtube" data-embed="8clqakSKI7Q">
    <div className="play-button"></div>
</div>
</div>

To get started, you need to download the executable file from here.

<div className="download_btn mb-10">
<a href="https://downloads.lambdatest.com/lt-browser/v2/LTBrowser.exe" onClick={() => window.sendAnalytics('Download LT Browser 2.0')}>Download LT Browser For Windows</a>
</div>   

<div className="download_btn mb-10">
<a href="https://downloads.lambdatest.com/lt-browser/v2/LTBrowser.dmg" onClick={() => window.sendAnalytics('Download LT Browser 2.0')}>Download LT Browser For macOS</a>
</div>

<div className="download_btn mb-10">
<a href="https://downloads.lambdatest.com/lt-browser/v2/LTBrowser.deb" onClick={() => window.sendAnalytics('Download LT Browser 2.0')}>Download LT Browser For Linux</a>
</div>

## How To View Performance Report On LT Browser?
***
Make sure you've installed the LT Browser, you will need to login to the LT Browser through your <BrandName /> login credentials.

**Step 1:**  Open the LT Browser. Select a device from the device List. For the demo, we are selecting **'Galaxy Note 9'**  and **'13-inch Macbook Air'**.

<img loading="lazy" src={require('../assets/images/performance-report/k11-1024x539.webp').default} alt="Image"  className="doc_img" width="1024" height="539"/>

**Step 2:**  Enter the **'URL'**  in the address bar and press the **'Enter'**  button.

<img loading="lazy" src={require('../assets/images/performance-report/k12-1024x542.webp').default} alt="Image"  className="doc_img" width="1024" height="542"/>

**Step 3:**  Once the website is loaded over the selected device, click on **'Performance Report'**  button on the top-right.

<img loading="lazy" src={require('../assets/images/performance-report/k15-1024x539.webp').default} alt="Image"  className="doc_img" width="1024" height="539"/>

Once you click on the Performance Report button, a new tab of Performance Report would open up. You'll find all the performance statistics of the entered website and selected device. You can view:

#### 1. Desktop Score And Mobile Score
 
Based on the performance of your website over different browsers, the desktop and mobile scores are generated. The score has three fields **Poor**, **Average**, and **Medium**.

<img loading="lazy" src={require('../assets/images/performance-report/111-1024x398.webp').default} alt="Image"  className="doc_img" width="1024" height="598"/>

#### 2. Performance Metrics
 
You can view the performance metrics of desktop and mobile by navigating to the desktop icon and mobile icon under the section Performance Metrics from the left.

<img loading="lazy" src={require('../assets/images/performance-report/112-1024x541.webp').default} alt="Image"  className="doc_img" width="1024" height="541"/>

#### 3. Runtime Settings
 
In runtime settings, you'll find the URL of the entered website, time, and date.

<img loading="lazy" src={require('../assets/images/performance-report/lt5-3-1.webp').default} alt="Image"  className="doc_img" width="823" height="183"/>

That is all about the LT browser Performance Report. Don't forget to share you experience or questions with us. You can drop us an email through [support@testmu.ai](mailto:support@testmu.ai) or you could wave us a hello over our <span className="doc__lt" onClick={() => window.openLTChatWidget()}> **24/7 chat support** </span>. Happy testing!

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
        Performance Report
      </span>
    </li>
  </ul>
</nav>