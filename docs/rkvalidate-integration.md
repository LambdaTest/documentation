---
id: rktracer-integration
title: RKTracer Integration
hide_title: true
sidebar_label: RKTracer
description: TestMu AI and RKTracer integration allows you to generate Code coverage for your web and mobile apps across 3000+ real browsers, devices, and operating system combinations.
keywords:
- rktracer testmu ai
- rktracer integration
- rktracer integration with testmu ai

url: https://www.testmu.ai/support/docs/rktracer-integration/
site_name: LambdaTest
slug: rktracer-integration
canonical: https://www.testmu.ai/support/docs/rktracer-integration/
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
          "name": "RKTracer Integration",
          "item": `${BRAND_URL}/support/docs/rktracer-integration/`
        }]
      })
    }}
></script>

# RKTracer Integration
***

Developed by RKValidate, RKTracer is a Code coverage tool capable of generating coverage data for different programming languages like C, C++, C#, Java, Kotlin, JavaScript, Python, etc; regardless of what compiler, cross compiler, embedded targets, or servers you use to test your apps.

With <BrandName /> and RKTracer, you can generate Code coverage for your web and mobile apps across 3000+ real browsers, devices, and operating system combinations.

## RKTracer With Web Automation On <BrandName />
***

1. Download the <BrandName /> [Java-TestNG GitHub repository](https://github.com/LambdaTest/Java-TestNG-Selenium/).

2. To run the single test using TestNG, pass the build command by prefixing it with `"rktracer"`

```
rktracer mvn test -D suite=single.xml
```

<img loading="lazy" src={require('../assets/images/rktracer-integration/1.png').default} alt="rktracer" width="1345" height="627" className="doc_img"/>

3. Pass the below command to get the test results.

```
rkresults
```

<img loading="lazy" src={require('../assets/images/rktracer-integration/2.png').default} alt="rktracer" width="1345" height="627" className="doc_img"/>


## RKTracer With App Automation On <BrandName />
***

1. Build your app with the RKTracer tool embedded.
2. Login to your <BrandName /> account and perform the automated testing of your app.
3. Navigate to the [App Automation dashboard](https://appautomation.lambdatest.com/build) on <BrandName />.
4. Download the Device log file from <BrandName /> App Automation dashboard.<br/>

<img loading="lazy" src={require('../assets/images/rktracer-integration/3.png').default} alt="rktracer" width="1345" height="627" className="doc_img"/>

5. Place the downloaded Device log file in your app directory.
6. Convert the file from `JSON` to `.txt` with below command `json2rk devicelog.json > rk-coverage.txt`.

<img loading="lazy" src={require('../assets/images/rktracer-integration/4.png').default} alt="rktracer" width="1345" height="627" className="doc_img"/>

7. Pass the below command to get the test results.

```
rkresults
```

<img loading="lazy" src={require('../assets/images/rktracer-integration/5.png').default} alt="rktracer" width="1345" height="627" className="doc_img"/>


## RKTracer With Real Time App Testing On <BrandName />
***

1. Build your app with the RKTracer tool embedded.
2. Login to your <BrandName /> account and perform the real-time testing of your app.
3. Download the App logs of the real-time app test and place them in the build code directory.<br/>

<img loading="lazy" src={require('../assets/images/rktracer-integration/6.png').default} alt="rktracer" width="1345" height="627" className="doc_img"/>

4. Open the terminal from that folder and run the command `node har2rk.js <name of device log har file>`. It will convert the harfile into `rkcoverage.txt`.

5. Run the below command to get the results.

```
"rkresults"
```
<img loading="lazy" src={require('../assets/images/rktracer-integration/7.png').default} alt="rktracer" width="1345" height="627" className="doc_img"/>

---

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
      <span className="breadcrumbs__link">RKTracer Integration</span>
    </li>
  </ul>
</nav>



