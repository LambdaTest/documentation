---
id: hyperexecute-smart-ui-testing-using-cypress
title: SmartUI Testing Using HyperExecute with Cypress
hide_title: true
sidebar_label: Cypress
description: Boost bug detection speed using HyperExecute smart UI testing with Cypress. Perform Visual UI Regression Testing for perfect app delivery.
keywords:
  - smart ui testing in testmu ai
  - smart ui testing in hyperexecute
  - visual  ui testing,image to image comparison
  - free cross browser testing tool
  - regression testing tool
  - perform visual ui testing online
  - compare image to image
  - internet explorer 9 browser test
  - test on samsung a7 online
  - test on mac 10.11 el capitan online
  - apple mac el capitan virtual machine
url: https://www.testmuai.com/support/docs/hyperexecute-smart-ui-testing-using-cypress/
site_name: TestMu AI
slug: hyperexecute-smart-ui-testing-using-cypress/
canonical: https://www.testmuai.com/support/docs/hyperexecute-smart-ui-testing-using-cypress/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "SmartUI Testing",
          "item": `${BRAND_URL}/support/docs/hyperexecute-smart-ui-testing-using-cypress/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-testing-using-cypress/"
    },
    "headline": "SmartUI Testing Using HyperExecute with Cypress",
    "description": "Boost bug detection speed using HyperExecute smart UI testing with Cypress. Perform Visual UI Regression Testing for perfect app delivery.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-testing-using-cypress/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "smart ui testing in testmu ai",
      "smart ui testing in hyperexecute",
      "visual  ui testing,image to image comparison"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your lambdatest Username and Access key; HyperExecute CLI in order to initiate a test execution Job .; Setup the Environment Variable; HyperExecute YAML file which contains all the necessary instructions.; To run SmartUI tests, you need to have a Baseline Image and a Comparison image. A baseline image is the reference image with which you want to compare. You can either upload this image from your computer or take a screenshot from your browser..",
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
        "name": "For macOS / Linux",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=YOUR_LT_USERNAME\nexport LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set LT_USERNAME=YOUR_LT_USERNAME\nset LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Configure your Cypress Project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "cy.screenshot('my-image')"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Configure your Cypress Project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "cypressOps:\n    Build: \"test_01\"\n    Tags: [\"smart-ui\", \"hyperexecute\", \"cypress\"]\n    BuildTags: [\"t1\"]\n    smartUICaps:\n    # highlight-next-line\n        smartUIProjectName: <Enter your Project Name>\n        smartUIOptions:\n            output:\n                errorColor:\n                    red: 0\n                    green: 200\n                    blue: 0\n                errorType: flat,\n                transparency: 1,\n                largeImageThreshold: 100,\n                useCrossOrigin: false,\n                outputDiff: true\n            scaleToSameSize: true,\n            ignore: antialiasing\n        SmartUIBaseline: true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Execute your Project and Compare the Results",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./hyperexecute --config <yaml-file-path> --download-artifacts --force-clean-artifacts"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "SmartUI Tests in HyperExecute using Cypress",
      "description": "This documentation will guide you step-by-step to execute the SmartUI tests on the HyperExecute platform using Cypress Your lambdatest Username and Access key HyperExecute CLI in order to initiate a test execution Job . Setup the Environment Variable HyperExecute YAML file which contains all the necessary instructions. To run SmartUI tests, you need to have a Baseline Image and a Comparison image. A baseline image is the reference image with which you want to compare. You can either upload this image from your computer or take a screenshot from your browser.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Setup your Project",
          "text": "The HyperExecute CLI is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below: Export the environment variables LTUSERNAME and LTACCESSKEY* that are available in the TestMu AI Profile page. Run the below mentioned commands in the terminal to setup the CLI and the environment variables. For macOS / Linux: For Windows:",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-testing-using-cypress/#step-1-setup-your-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure your Cypress Project",
          "text": "Go to your project YAML file. Your test files must have this code snippet in order for them to take screenshots. Here 'my-image' is the name of the image which will be rendered on the Dashboard. Refer to the Cypress Documentation to understand the different methods for taking screenshots. Paste the below mentioned code in your YAML file.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-testing-using-cypress/#step-2-configure-your-cypress-project"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Execute your Project and Compare the Results",
          "text": "To execute the project run the below command in your terminal at the root folder. Now, visit to the HyperExecute Dashboard to check the status of your project. Click on the SmartUI Tests button. Click on Compare button to compare the changes made.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-smart-ui-testing-using-cypress/#step-3-execute-your-project-and-compare-the-results"
        }
      ]
    }
  ]) }}
/>

# SmartUI Tests in HyperExecute using Cypress

This documentation will guide you step-by-step to execute the SmartUI tests on the HyperExecute platform using Cypress

## Prerequisites

- Your lambdatest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the Environment Variable
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- To run SmartUI tests, you need to have a **Baseline Image** and a **Comparison** image. A baseline image is the reference image with which you want to compare. You can either upload this image from your computer or take a screenshot from your browser.

## Step 1: Setup your Project

### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable

Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

For macOS / Linux:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Windows:

```bash
set LT_USERNAME=YOUR_LT_USERNAME
set LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

## Step 2: Configure your Cypress Project

1. Go to your project **YAML** file.

2. Your test files must have this code snippet in order for them to take screenshots.

<VerifiedTag value="Verified" />

```java
cy.screenshot('my-image')
```

Here **'my-image'** is the name of the image which will be rendered on the Dashboard.
> Refer to the [Cypress Documentation](https://docs.cypress.io/api/commands/screenshot) to understand the different methods for taking screenshots.

3. Paste the below mentioned code in your YAML file.

```bash
cypressOps:
    Build: "test_01"
    Tags: ["smart-ui", "hyperexecute", "cypress"]
    BuildTags: ["t1"]
    smartUICaps:
    # highlight-next-line
        smartUIProjectName: <Enter your Project Name>
        smartUIOptions:
            output:
                errorColor:
                    red: 0
                    green: 200
                    blue: 0
                errorType: flat,
                transparency: 1,
                largeImageThreshold: 100,
                useCrossOrigin: false,
                outputDiff: true
            scaleToSameSize: true,
            ignore: antialiasing
        SmartUIBaseline: true
```

## Step 3: Execute your Project and Compare the Results

To execute the project run the below command in your terminal at the root folder.

```bash
./hyperexecute --config <yaml-file-path> --download-artifacts --force-clean-artifacts
```
- Now, visit to the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) to check the status of your project.

- Click on the **SmartUI Tests** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/cypress/1.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

- Click on **Compare** button to compare the changes made.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/cypress/2.png').default} alt="cmd" width="768" height="373" className="doc_img"/>
