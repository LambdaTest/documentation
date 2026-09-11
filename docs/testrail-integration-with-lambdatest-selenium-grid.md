---
id: testrail-integration-with-lambdatest-selenium-grid
title: How to integrate TestRail With TestMu AI Selenium Grid
hide_title: true
sidebar_label: TestRail
description: TestMu AI Selenium Grid integration to TestRail will help you run your Selenium automation scripts from TestRail instance to our cloud-based Selenium Grid.
keywords:
  - TestMu AI integration
  - testmu ai integration with testrail
  - testmu ai selenium grid integration to testrail
url: https://www.testmuai.com/support/docs/testrail-integration-with-testmu-selenium-grid/
site_name: TestMu AI
slug: testrail-integration-with-testmu-selenium-grid/
canonical: https://www.testmu.ai/support/docs/testrail-integration-with-testmu-selenium-grid/
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
          "name": "TestRail Integration",
          "item": `${BRAND_URL}/support/docs/testrail-integration-with-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/testrail-integration-with-testmu-selenium-grid/"
    },
    "headline": "How to integrate TestRail With TestMu AI Selenium Grid",
    "description": "TestMu AI Selenium Grid integration to TestRail will help you run your Selenium automation scripts from TestRail instance to our cloud-based Selenium Grid.",
    "url": "https://www.testmuai.com/support/docs/testrail-integration-with-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "TestMu AI integration",
      "testmu ai integration with testrail",
      "testmu ai selenium grid integration to testrail"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Make sure you have Maven installed.; You could also install Maven with Homebrew with the below command:; Clone our GitHub repository for Selenium & TestRail.; Ensure that the required packages are made available using the below command:; We recommend, you execute the below command for evaluating any outdated dependencies. As a best practice, it is always suggested to go for a verification check & perform any update, if needed, prior editing your pom.xml in order to avoid any code incompatibility.; For authentication purpose, make sure you have your Testrail credentials \u2013 URL, Username and Password..",
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
        "text": "        $ install maven"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "         $ cd Java-TestNG-Selenium-TestRail"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "        mvn versions:display-dependency-updates"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: In your test file you actually create an object of TestRailHandler like below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "TestRailHandler trh = new TestRailHandler(testrailusername,testrailpassword, testrailurl)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Then call it\u2019s method as below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "trh.updateResultToTestRail(executionstatus, run_id, testcase_id);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Automation Scripts Using TestMu AI Selenium Grid & TestRail",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "//To run single test\n$ mvn test -P single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Once Test gets run, it logs result in TestRail as output mentioned here",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Jun 12, 2019 2:34:50 PM org.openqa.selenium.remote.ProtocolHandshake createSession\nINFO: Detected dialect: OSS\nhere\nadd_result_for_case/215/3351\nTests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 35.235 sec\nResults :\nTests run: 1, Failures: 0, Errors: 0, Skipped: 0\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time: 40.209 s\n[INFO] Finished at: 2019-06-12T14:35:10+05:30\n[INFO] ------------------------------------------------------------------------"
      }
    ],
    "dateModified": "2026-02-12T19:51:34+05:30"
  }) }}
/>

# TestRail Integration With <BrandName /> Selenium Grid

***
TestRail is a modern test case management tool which offers a comprehensive web-platform for software testers and developers. Offering a JIRA add-on for cloud-based integration, TestRail helps you to track, manage, and hasten software release cycle.

TestRail also offers integration with <BrandName /> to help you perform automated cross browser testing through an on-cloud Selenium Grid offering 3000+ browsers. **<BrandName /> Selenium Grid integration to TestRail**  will help you run your Selenium automation scripts from TestRail instance to our cloud-based Selenium Grid.

## Prerequisites

1. Global Dependencies   
    * Make sure you have [Maven installed](https://maven.apache.org/install.html).
    * You could also install Maven with Homebrew with the below command:

        <VerifiedTag value="Verified" />

        ```
        $ install maven
        ```

2. Project Dependencies

    * Clone our [GitHub repository for Selenium & TestRail](https://github.com/LambdaTest/Java-TestNG-Selenium-TestRail).
    * Ensure that the required packages are made available using the below command:

        <VerifiedTag value="Verified" />

        ```
         $ cd Java-TestNG-Selenium-TestRail
         ```

    * We recommend, you execute the below command for evaluating any outdated dependencies. As a best practice, it is always suggested to go for a verification check & perform any update, if needed, prior editing your pom.xml in order to avoid any code incompatibility.

        <VerifiedTag value="Verified" />

        ```
        mvn versions:display-dependency-updates
        ```

    * For authentication purpose, make sure you have your Testrail credentials – URL, Username and Password.

## Integrating <BrandName /> With TestRail
***
**Step 1:**  Clone our [GitHub repository for Selenium & TestRail](https://github.com/LambdaTest/Java-TestNG-Selenium-TestRail).

**Step 2:**  Open Eclipse and import the cloned project as maven project.

**Step 3:**  Add Java Library into the project.

**Step 4:**  Follow the Readme.md file for how to run the test.

**Step 5:**  Once test would get run then find your result logged in Testrail for given test case and run id.

## Running Automation Scripts Using <BrandName /> Selenium Grid & TestRail
***
**Step 1:**  Required JAVA files for TestRail integration are inside `package com.library.utils.testrail`.

**Step 2:**  In your test file you actually create an object of TestRailHandler like below:

<VerifiedTag value="Verified" />

```
TestRailHandler trh = new TestRailHandler(testrailusername,testrailpassword, testrailurl)
```

**Step 3:**  Then call it’s method as below:

<VerifiedTag value="Verified" />

```
trh.updateResultToTestRail(executionstatus, run_id, testcase_id);
```

**Step 4:**  In above arguments execution status is numeric number that denotes pass, fail statuses defined in TestRail. Example: Pass -> 1, Fail -> 5 etc.

**Step 5:**Use the below command to execute a single test.

<VerifiedTag value="Verified" />

```
//To run single test
$ mvn test -P single
```

Once Test gets run, it logs result in TestRail as output mentioned here:

<VerifiedTag value="Verified" />

```
Jun 12, 2019 2:34:50 PM org.openqa.selenium.remote.ProtocolHandshake createSession
INFO: Detected dialect: OSS
here
add_result_for_case/215/3351
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 35.235 sec
Results :
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 40.209 s
[INFO] Finished at: 2019-06-12T14:35:10+05:30
[INFO] ------------------------------------------------------------------------
```

Kudos! Now you can deploy your code in a reliable & faster manner at scale, using <BrandName /> integration with TestRail, for automated cross browser testing with Selenium Grid. Happy Testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href={`${BRAND_URL}/support/docs/`}>Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">TestRail Integration With <BrandName /> Selenium Grid</span>
    </li>
  </ul>
</nav> 
