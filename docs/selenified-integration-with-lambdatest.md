---
id: selenified-integration-with-lambdatest
title: How to integrate selenified with TestMu AI
hide_title: true
sidebar_label: Selenified
description: With TestMu AI integration to Selenified, you can perform cross browser testing in parallel on more than 2000 real browsers available at an online Selenium Grid offered by TestMu AI. So you don’t have to worry about configuring an in-house testing infrastructure as TestMu AI will take care of that for you.
keywords:
  - selenified integration
  - selenified
  - selenium integration
  - Selenium Grid
url: https://www.testmuai.com/support/docs/selenified-integration-with-testmu/
site_name: TestMu AI
slug: selenified-integration-with-testmu/
canonical: https://www.testmu.ai/support/docs/selenified-integration-with-testmu/
--- 
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "How to integrate selenified with TestMu AI",
          "item": `${BRAND_URL}/support/docs/selenified-integration-with-testmu/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/selenified-integration-with-testmu/"
    },
    "headline": "How to integrate selenified with TestMu AI",
    "description": "With TestMu AI integration to Selenified, you can perform cross browser testing in parallel on more than 2000 real browsers available at an online Selenium Grid offered by TestMu AI. So you don\u2019t have to worry about configuring an in-house testing infrastructure as TestMu AI will take care of that for you.",
    "url": "https://www.testmuai.com/support/docs/selenified-integration-with-testmu/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "selenified integration",
      "selenified",
      "selenium integration"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Basic understanding of running tests from Selenified. If you haven't run a Selenified test before, you can refer to their [official GitHub repository][1].; TestMu AI Hub URL; TestMu AI Authentication Credentials; For Linux/Mac:; For Windows:.",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "        $ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}\n        $ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "        $ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}\n        $ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Hub URL",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "-Dhub=https://LT_USERNAME:LT_ACCESS_KEY@hub.lambdatest.com"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Authentication Credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "-Dhub=https://LT_USERNAME:LT_ACCESS_KEY@hub.lambdatest.com"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Selenified Integration With <BrandName />
Previously known as SecureCI™ Testing Framework, Selenified is an open-source test automation framework as a wrapper to Selenium with extra features such as detailed **traceable reporting**, **custom reporting**, ability to invoke **dynamic waits**, etc. so you could test your web-application across the web and even API level. The framework is built on top of TestNG, making it intuitive for beginners and offers support with multiple build tools such as Maven, Gradle, and Ant, making it easier to integrate with your DevOps build environments.

With <BrandName /> integration to Selenified, you can perform cross browser testing in parallel on more than 2000 real browsers available at an online Selenium Grid offered by <BrandName />. So you don't have to worry about configuring an in-house testing infrastructure as <BrandName /> will take care of that for you.

## Prerequisites
-----------------------------------------------------------------------------------------------------------------------------
* Basic understanding of running tests from Selenified. If you haven't run a Selenified test before, you can refer to their [official GitHub repository][1].
* <BrandName /> Hub URL
* **<BrandName /> Authentication Credentials**   
You will need your <BrandName /> authentication credentials i.e., your <BrandName /> username, access key, and HubURL. You need to set them up as your environment variables. You can retrieve them from your **[<BrandName /> automation dashboard][2]** by clicking on the key icon near the help button.

   * For Linux/Mac:  

        <VerifiedTag value="Verified" />

        ```
        $ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
        $ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
        ```

    * For Windows: 

        <VerifiedTag value="Verified" />

        ```
        $ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
        $ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
        ```
## Running Selenified Tests On <BrandName /> Cloud Grid
-----------------------------------------------------------------------------------------------------------------------------
You can run your Selenified test cases on a cloud-based Selenium Grid, such as <BrandName />, by declaring any of the two aspects into your test automation script.

1. Feeding a remote Hub URL.
2. Configuring authentication credentials as the environment variables.

### Hub URL
-----------------------------------------------------------------------------------------------------------------------------
By default, your Selenified tests would be executed over a standalone server. To run your tests using a remote server for <BrandName /> Selenium Grid, you will need to provide your <BrandName /> HubURL.

<VerifiedTag value="Verified" />

```
-Dhub=https://LT_USERNAME:LT_ACCESS_KEY@hub.lambdatest.com
```

>**Note:** If required, you can also declare extra parameters such as a particular port or IP.

### Authentication Credentials
***
You can also run your Selenified test automation scripts on <BrandName /> Selenium Grid by simply declaring your <BrandName /> authentication credentials as the environment variables in your Selenified test automation script.


>**Note:** <BrandName /> clubs your test cases under a group and assigns them under a build. If you wish to override the build name, then you can do so by invoking the `buildName` parameter in your Selenified script.

<VerifiedTag value="Verified" />

```
-Dhub=https://LT_USERNAME:LT_ACCESS_KEY@hub.lambdatest.com
```

That is all you need to tweak to run your Selenified tests on <BrandName /> Selenium Grid. In case you have any questions, feel free to share them with us in the comments or wave them to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 in-app customer chat support**</span>. You could also email us through [support@testmuai.com][3]. Happy testing! 🙂

[1]: https://github.com/Coveros/selenified
[2]: https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com
[3]: mailto:support%40lambdatest.com

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/getting-started-with-testmu-automation/">Automation Testing</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Selenified Integration With <BrandName /></span>
    </li>
  </ul>
</nav>
  
