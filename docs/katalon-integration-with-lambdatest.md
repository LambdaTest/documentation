---
id: katalon-integration-with-lambdatest
title: Step By Step Guide to Integrate TestMu AI With Katalon
hide_title: true
sidebar_label: Katalon
description: TestMu AI offers integration with Katalon Studio to ease your automated cross browser testing process through their Selenium grid consisting more than 3000+ browsers.
keywords:
  - testmu ai integrations
  - katalon
  - katalon studio
  - katalon vs selenium
  - katalon studio tutorial
  - katalon selenium
url: https://www.testmuai.com/support/docs/katalon-integration-with-testmu/
site_name: TestMu AI
slug: katalon-integration-with-testmu/
canonical: https://www.testmuai.com/support/docs/katalon-integration-with-testmu/
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
          "name": "Katalon LambdaTest Integration",
          "item": `${BRAND_URL}/support/docs/katalon-integration-with-testmu/`
        }]
      })
    }}
></script>

# Katalon Integration With <BrandName />
---

[Katalon Studio](https://www.katalon.com) is an automation tool for web, API, mobile, and desktop applications testing. Katalon Studio offers a flexible automation platform that fits teams and projects of any size, for any purpose. It supports users from creating tests, execution, reports to seamless integration with the CI/CD ecosystem.

Katalon Studio offers cross-platform testing — from Windows, macOS, and Linux for web automation, to Android and iOS for mobile automation. It also comes with a built-in intuitive interface for codeless automation testing and validating the UI elements of your web application.

This integration between <BrandName /> and Katalon Studio enables you to automate the cross browser testing process through the Selenium Grid of more than 2,000 browsers.

<div className="ytframe"> 
<div className="youtube" data-embed="8rGM6H8uZZ0">
    <div className="play-button"></div>
</div>
</div>

As a result, you’ll be able to expand your test coverage, analyze and extract insightful test reports, and enhance your team collaboration.

## How To Integrate <BrandName /> With Katalon?
-----------------------------------------------------------------------------------------------------------------------------
For integrating <BrandName /> with Katalon, make sure to run your test scripts through the ‘Remote’ desired capability. You can select all your desired capabilities from [<BrandName /> Capabilities Generator](https://www.lambdatest.com/capabilities-generator/).

**Step 1:** Login to <BrandName />. If you haven’t signed up yet, click [here](https://accounts.lambdatest.com/register).

**Step 2:** Visit your Profile on <BrandName /> to fetch your Username and Access Key value.

<img loading="lazy" src={require('../assets/images/katalon/Katalon-1.webp').default} alt="katalon integration"  className="doc_img" width="1365" height="652"/>

**Step 3:** You would require these values for generating a secure remote connection with Katalon through <BrandName /> remote URL.

```json
Remote URL = "http://username:accessKey@hub.lambdatest.com/wd/hub" 
 
/* Below is an example remote URL based on the image shared above in Step 2.*/
 
Example remote URL = "http://harshitp:ABCD1234PQRS@hub.lambdatest.com/wd/hub"
```

**Step 4:** Visit <BrandName /> Capabilities Generator for declaring desired capabilities. For instance, if you wish to test on macOS High Sierra using Firefox browser then desired capabilities for Java frameworks would look like below.

<img loading="lazy" src={require('../assets/images/katalon/Katalon-2.webp').default} alt="declaring desired capabilities"  className="doc_img" width="1346" height="652"/>

The below execution is set up on Katalon version 5.10.1.

<img loading="lazy" src={require('../assets/images/katalon/3.webp').default} alt="Steup Katalon version 5.10.1"  className="doc_img" width="894" height="596"/>

**Step 5:** In Katalon Studio, open ‘Remote’ settings for passing <BrandName /> settings. Go to Project → Settings → Desired Capabilities → Remote.

<img loading="lazy" src={require('../assets/images/katalon/4.webp').default} alt="<BrandName /> settings"  className="doc_img" width="894" height="596" />

Once you select ‘Remote’ and provide the basic parameters then you only need to execute your automation tests. You can do that by going to Action → Run → Remote.

<img loading="lazy" src={require('../assets/images/katalon/5-1.webp').default} alt="executing automation tests"  className="doc_img" width="894" height="596"/>

If you have any questions, feel free to reach out to us through our **24×7 chat support**. Happy testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Katalon Integration With Lambdatest</span>
    </li>
  </ul>
</nav>
