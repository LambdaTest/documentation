---
id: testim-integration
title: Testim Integration
hide_title: false
sidebar_label: Testim
description: TestMu AI offers integration with Testim to help you perform automated browser testing on 3000+ real browsers and OS.
keywords:
- testmu ai integrations
- testmu ai integrations with testim
- testim integration
- testim integration with testmu ai
- testmu ai integration with testim
- testim testmu ai
url: https://www.testmuai.com/support/docs/testim-integration/
site_name: LambdaTest
slug: testim-integration/
canonical: https://www.testmu.ai/support/docs/testim-integration/
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
          "name": "Testim Integration",
          "item": `${BRAND_URL}/support/docs/testim-integration/`
        }]
      })
    }}
></script>
Testim provides an automated testing platform to create stable tests using AI Native capabilities, along with tools that facilitate scaling quality across your software development process.

Integrating <BrandName /> with Testim lets you run Testim automated tests on <BrandName /> cloud-based grid across 3000+ real browsers and OS.

## Prerequisites
- Create an account on Testim.
- Create a <BrandName /> account. You can [sign up for free](https://accounts.lambdatest.com/dashboard).
- Get your <BrandName /> Username and Access Key.

## Setting Up the Grid
Shown below are the steps to set up your Grid on Testim.

1. Click on your profile icon > **Grids** button.

2. Click on **Add New Grid**. Then, select **<BrandName />** as your Grid Type and click on **Next** button.

3. To configure the Grid:
    - Enter the Grid name.
    - Update your Host and Port number.
    - Enter your <BrandName /> Username and Access Key and click on **Add** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/integration/products/testim/grid-setup.mp4').default} type="video/mp4" />
</video>

## Recording the Tests
Shown below are the steps to record your tests on Testim.

1. Click on **New Test** > **Start Recording**.

2. Enter your app URL and click on **Create Test**.

3. It will start recording the tests. Once your testing is completed, stop the recording and save your tests.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/integration/products/testim/test-record.mp4').default} type="video/mp4" />
</video>

## Configuring the Capabilities
Include the capabilities you wish to use in a `.json` file and ensure this file is located in the same directory as your Testim runner.

```json
{
  "resolution": "1280x800",
  "browserName": "chrome",
  "version": "latest"
}
```

## Running the Testim Tests on <BrandName />
To execute the tests, check:

* If the Testim CLI is not already installed on your system, use the entire command provided by the Testim CLI or dashboard. 

**For example:**
```json
npm i -g @testim/testim-cli && testim --token "2jWxWxXcmJRON0PA73YZWt92fFGU76cd" --project "GTJL28fMHad" --grid "LAMBDA-TEST" --test-id "2u8QnIm454" --selenium-caps-file "local.json"
```

* If the Testim CLI is already installed, you can run a simpler command that includes your Testim token, project ID, grid, test ID, and the name of your Selenium capabilities file.

**For example:**

```json
testim --token "2jWxWxXcmJRON0PA73YZWt92fFGU76cd" --project "GTJL28fMHad" --grid "LAMBDA-TEST" --test-id "2u8QnIm454" --selenium-caps-file "local.json"
```

To view your test results, navigate to the <BrandName /> Web Automation Dashboard.

<img loading="lazy" src={require('../assets/images/tr-testim.png').default} alt="Web Automation Dashboard" width="1920" height="1080" className="doc_img"/>


> **Note**: To explore additional configuration options, you can execute `testim --help` in PowerShell or bash, which will display further customizations available for writing and executing your test cases.
