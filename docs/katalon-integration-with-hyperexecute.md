---
id: katalon-integration-with-hyperexecute
title: Katalon
hide_title: true
sidebar_label: Katalon
description: Integrate Katalon Studio with HyperExecute for cross-platform testing! Follow our guide to perform web & mobile automation testing on multiple OS with codeless UI validation.
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with products
    - products
    - katalon
    - katalon studio

url: https://www.testmuai.com/support/docs/katalon-integration-with-hyperexecute/
site_name: TestMu AI
slug: katalon-integration-with-hyperexecute/
canonical: https://www.testmuai.com/support/docs/katalon-integration-with-hyperexecute/
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
          "name": "Katalon Integration with HyperExecute",
          "item": `${BRAND_URL}/support/docs/katalon-integration-with-hyperexecute/`
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
      "@id": "https://www.testmuai.com/support/docs/katalon-integration-with-hyperexecute/"
    },
    "headline": "Katalon",
    "description": "Integrate Katalon Studio with HyperExecute for cross-platform testing! Follow our guide to perform web & mobile automation testing on multiple OS with codeless UI validation.",
    "url": "https://www.testmuai.com/support/docs/katalon-integration-with-hyperexecute/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "hyperexecute integrations",
      "hyperexecute integrations with products",
      "products"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Ensure that you have integrated Katalon Studio with TestMu AI. Follow the steps on this page to do so.; Ensure that you have the necessary licenses required to use Katalon Studio. You need the Katalon Runtime License to integrate Katalon with HyperExecute..",
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
        "name": "Create the hyperexecute.yaml file in the root directory of your Katalon project with the given parameters",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "  version: 0.1\n  globalTimeout: 90\n  testSuiteTimeout: 90\n  testSuiteStep: 90\n  \n  autosplit: true\n  \n  runson: win\n  \n  tunnel: true\n  tunnelOpts:\n    global: true\n\n  concurrency: 2\n  \n  pre: \n    - pip install requests # To install pip request\n    - python installer.py # To install the certs in the Machine \n\n  runtime: katalon\n  \n  testDiscovery:\n    type: raw\n    mode: remote\n    command: grep -lr 'testSuiteGuid' */*.ts | sed 's/:.*//' | sed 's/.ts//g'\n  \n  testRunnerCommand:  katalonc `-noSplash `-runMode=console `-projectPath=\"G:\\foreman\\Hyperexecute_Sample\\Hyperexecute_Sample.prj\" `-retry=0 `-testSuitePath=\"$test\" `-browserType=\"firefox\" `-executionProfile=\"default\" `-apiKey=\"aaa9402b-6a2e-4621-a4c3-05fe356f5aad\" `-`-config `-webui.autoUpdateDrivers=true\n  \n  retryOnFailure: false\n  maxRetries: 1"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Katalon Integration with HyperExecute

[Katalon Studio](https://www.katalon.com) is an automation tool for testing web, API, mobile, and desktop applications. It offers a flexible automation platform that fits teams and projects of all sizes and purposes. It also helps uses create tests, execute them and integrate them with the CI/CD ecosystem.

<div className="ytframe"> 
<div className="youtube" data-embed="WWLAeftaj-4">
    <div className="play-button"></div>
</div>
</div>

> Katalon Studio Integration with HyperExecute enables cross-platform testing, from web automation on Windows, macOS, and Linux to mobile automation on Android and iOS.

It also comes with a built-in interface for codeless automation testing and validating the UI elements of your web application.

## Prerequisites

-   Ensure that you have integrated Katalon Studio with <BrandName />. Follow the steps on this [page](/support/docs/katalon-integration-with-testmu/) to do so.
    
-   Ensure that you have the necessary licenses required to use Katalon Studio. You need the Katalon Runtime License to integrate Katalon with HyperExecute.

## Integrating Katalon Studio with HyperExecute

1. You must generate a command from Katalon to run it through the command line. To do so:

   a. Generate a command for Console mode through the Katalon UI. Click on the **Command Builder** button on the top of the screen. 

   <img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/katalon/katalon1.png').default} alt="Image"  className="doc_img"/>

   b. Select the test suite that you want to use and click on **Generate Command**.

   c. Click on the **Copy to Clipboard** button to copy the command.

   <img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/katalon/katalon2.png').default} alt="Image"  className="doc_img"/>

2. Clear the contents of the .gitignore file in the root directory of your Katalon project. 

3. Download the HyperExecute CLI binary in the root directory of your Katalon project. 

4. Create the hyperexecute.yaml file in the root directory of your Katalon project with the given parameters:

  <VerifiedTag value="Verified" />

  ```yaml
  version: 0.1
  globalTimeout: 90
  testSuiteTimeout: 90
  testSuiteStep: 90
  
  autosplit: true
  
  runson: win
  
  tunnel: true
  tunnelOpts:
    global: true

  concurrency: 2
  
  pre: 
    - pip install requests # To install pip request
    - python installer.py # To install the certs in the Machine 

  runtime: katalon
  
  testDiscovery:
    type: raw
    mode: remote
    command: grep -lr 'testSuiteGuid' */*.ts | sed 's/:.*//' | sed 's/.ts//g'
  
  testRunnerCommand:  katalonc `-noSplash `-runMode=console `-projectPath="G:\foreman\Hyperexecute_Sample\Hyperexecute_Sample.prj" `-retry=0 `-testSuitePath="$test" `-browserType="firefox" `-executionProfile="default" `-apiKey="aaa9402b-6a2e-4621-a4c3-05fe356f5aad" `-`-config `-webui.autoUpdateDrivers=true
  
  retryOnFailure: false
  maxRetries: 1
  ```
  
Paste the command that you generated from the Katalon UI to fill the **testRunnerCommand** field in the _hyperexecute.yaml_ file.

5. Run the HyperExecute CLI commands from the same path as your Katalon project. 


You have successfully integrated your Katalon Studio project with HyperExecute. 

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
      <span className="breadcrumbs__link">
       HyperExecute Integration With Katalon
      </span>
    </li>
  </ul>
</nav>
