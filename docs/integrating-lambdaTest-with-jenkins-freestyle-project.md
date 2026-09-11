---
id: integrating-lambdaTest-with-jenkins-freestyle-project
title: Integrate TestMu AI With Jenkins Freestyle Project
sidebar_label: Integrate TestMu AI With Jenkins Freestyle Project
description: This document will help you integrate your Jenkins freestyle project with TestMu AI to ensure your Selenium testing scripts are executed on a cloud-based Grid of 3000+ real browsers.
keywords:
  - jenkins 
  - freestyle project 
  - testmu ai 
  - jenkins integration 
  - testmu ai integration with jenkins 
  - jenkins freestlye
url: https://www.testmuai.com/support/docs/integrating-testmu-with-jenkins-freestyle-project/
site_name: TestMu AI
slug: integrating-testmu-with-jenkins-freestyle-project/
canonical: https://www.testmuai.com/support/docs/integrating-testmu-with-jenkins-freestyle-project/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/integrating-testmu-with-jenkins-freestyle-project/"
    },
    "headline": "Integrate TestMu AI With Jenkins Freestyle Project",
    "description": "This document will help you integrate your Jenkins freestyle project with TestMu AI to ensure your Selenium testing scripts are executed on a cloud-based Grid of 3000+ real browsers.",
    "url": "https://www.testmuai.com/support/docs/integrating-testmu-with-jenkins-freestyle-project/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "jenkins",
      "freestyle project",
      "testmu ai"
    ],
    "proficiencyLevel": "Beginner",
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
        "name": "Integrate TestMu AI Jenkins plugin with your Jenkins Freestyle project for",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "python google-search-lambdatest.py"
      }
    ],
    "dateModified": "2026-04-07T12:50:21+05:30"
  }) }}
/>

***


Integrate <BrandName /> Jenkins plugin with your Jenkins Freestyle project for:   
*   Configure your <BrandName /> credentials for your Jenkins jobs.
*   Set up and tear down the Lambda Tunnel binary file to perform automated cross browser testing even on your locally hosted web apps.
*   Embed all the test results such as video logs, network logs, and screenshots of every step performed through <BrandName /> with your Jenkins job results.

> Note: Before you proceed, make sure to integrate [<BrandName /> plugin for Jenkins](/docs/jenkins-with-testmu/).

**Step 1:** Create a **New Item** in Jenkins and select **Freestyle Project**. 
<img loading="lazy" src={require('../assets/images/integrating-lambdaTest-with-jenkins-freestyle-project/1.webp').default} alt="Image" width="1919" height="900" className="doc_img"/> 
**Step 2:** Go to Source Code Management and feed the repository URL.
<img loading="lazy" src={require('../assets/images/integrating-lambdaTest-with-jenkins-freestyle-project/2.webp').default} alt="Image" width="1024" height="482" className="doc_img"/> 
**Step 3:** Under the Built Environments, select <BrandName /> and specify your desired capabilities. If you wish to run multiple jobs in parallel then you can **Add Selenium Test Capability**. 
<img loading="lazy" src={require('../assets/images/integrating-lambdaTest-with-jenkins-freestyle-project/3.webp').default} alt="Image" width="1024" height="483" className="doc_img"/> 

>**Note:** It is recommended to check your network connectivity by **pinging <BrandName />**.

**Step 4:** Add a build step to **Execute Shell**. 
<img loading="lazy" src={require('../assets/images/integrating-lambdaTest-with-jenkins-freestyle-project/4.webp').default} alt="Image" width="1024" height="481" className="doc_img"/> 
**Step 5:** Hit the below command to **Execute Shell** and hit **save**.

```
python google-search-lambdatest.py
```

<img loading="lazy" src={require('../assets/images/integrating-lambdaTest-with-jenkins-freestyle-project/5.webp').default} alt="Image" width="1024" height="484" className="doc_img"/> 

:::tip Best Practices
**Build naming**

Define `LT_BUILD_NAME` in your script using  `${BUILD_TAG}`, and reference the same in your test capabilities. This ensures that each TestMu AI run is correctly mapped to its corresponding Jenkins build.
:::

**Step 6:** Click on **Apply & Save** to set your configurations and then click on **"Build Now"** to execute your test.

## Test On Locally Hosted Web Applications

* * *

While specifying build environments, check the box to **Use Local Tunnel**. You can then specify a Tunnel name if you like, your <BrandName /> Credentials will be automatically fetched.
<img loading="lazy" src={require('../assets/images/integrating-lambdaTest-with-jenkins-freestyle-project/6.webp').default} alt="Image" width="1024" height="483" className="doc_img"/> 

Kudos! That is all you need to know for integrating your Jenkins freestyle project with <BrandName />. In case of any questions, feel free to give us a shout. You can also drop an email to [support@testmuai.com](mailto:support@testmuai.com). Happy testing! :)

