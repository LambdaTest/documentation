---
id: puppeteer-cicd
title: Running Puppeteer Tests In CI/CD
hide_title: true
sidebar_label: Puppeteer Testing In CI/CD
description: Learn how to perform Puppeteer testing through CI/CD across 40+ browser versions on the TestMu AI platform.
keywords:
  - puppeteer testing ci cd
  - automation testing with puppeteer
  - how to use puppeteer for testing
  - test puppeteer
  - puppeteer testing tutorial
  - puppeteer testing testmu ai

  
url: https://www.testmu.ai/support/docs/puppeteer-tests-in-ci-cd/
site_name: LambdaTest
slug: puppeteer-tests-in-ci-cd
canonical: https://www.testmu.ai/support/docs/puppeteer-tests-in-ci-cd/
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
          "name": "Puppeteer Testing In CI/CD",
          "item": `${BRAND_URL}/support/docs/playwright-tests-in-ci-cd/`
        }]
      })
    }}
></script>

# Puppeteer Testing With CI/CD
***

<BrandName /> integrates with a variety of CI/CD solutions to help you pace up your go-to-market launch by automating your delivery pipeline. Similarly, you can run Puppeteer tests in CI/CD across 40+ browsers in the cloud, reducing lead time by 10X and shipping quality builds faster.

Running Puppeteer tests through CI/CD pipeline involves three stages:

1. **Build**: It consists of developing an web app (or code) and hosting it on a staging environment for testing.
2. **Test**: It entails running Puppeteer tests on the <BrandName /> platform.
3. **Deploy**: Based on your CI/CD configuration, the deploy stage may or may not present.

## Running Puppeteer Tests Via CI/CD
***

<BrandName /> offers [integration with CI/CD tools](/support/docs/integrations-with-ci-cd-tools/) like Jenkins, Bamboo, AWS CodePipeline, and more. In order to run Puppeteer tests in CI/CD, you need to perform few steps in the **Test** stage of your CI/CD pipeline.

1. Ensure the website (or code) is hosted on staging environment.

2. Import test data in existing databases in order to initiate the tests.

3. If the website under test in hosted on local server, then you will need to configure the <BrandName /> tunnel by setting `tunnel` capability to `true` for running local tests via CI/CD on the <BrandName />. However, if the staging website is publicly accessible then this step is not required. 

4. Ensure your Puppeteer test scripts uses `puppeteer.connect` method to connect to the CDP endpoint at <BrandName />. Additional parameters for assigning a specific browser and OS combination to your <BrandName /> test are contained in the `capabilities` variable.

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
        Puppeteer Testing In CI/CD
      </span>
    </li>
  </ul>
</nav>
