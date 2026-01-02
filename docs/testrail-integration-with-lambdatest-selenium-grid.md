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
url: https://www.testmu.ai/support/docs/testrail-integration-with-testmu-selenium-grid
site_name: LambdaTest
slug: testrail-integration-with-testmu-selenium-grid
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
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

# TestRail Integration With <BrandName /> Selenium Grid

***
TestRail is a modern test case management tool which offers a comprehensive web-platform for software testers and developers. Offering a JIRA add-on for cloud-based integration, TestRail helps you to track, manage, and hasten software release cycle.

TestRail also offers integration with <BrandName /> to help you perform automated cross browser testing through an on-cloud Selenium Grid offering 3000+ browsers. **<BrandName /> Selenium Grid integration to TestRail**  will help you run your Selenium automation scripts from TestRail instance to our cloud-based Selenium Grid.

## Prerequisites

1. Global Dependencies   
    * Make sure you have [Maven installed](https://maven.apache.org/install.html).
    * You could also install Maven with Homebrew with the below command:
        ```
        $ install maven
        ```

2. Project Dependencies

    * Clone our [GitHub repository for Selenium & TestRail](https://github.com/LambdaTest/Java-TestNG-Selenium-TestRail).
    * Ensure that the required packages are made available using the below command:
        ```
         $ cd Java-TestNG-Selenium-TestRail
         ```

    * We recommend, you execute the below command for evaluating any outdated dependencies. As a best practice, it is always suggested to go for a verification check & perform any update, if needed, prior editing your pom.xml in order to avoid any code incompatibility.
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

```
TestRailHandler trh = new TestRailHandler(testrailusername,testrailpassword, testrailurl)
```

**Step 3:**  Then call it’s method as below:
```
trh.updateResultToTestRail(executionstatus, run_id, testcase_id);
```

**Step 4:**  In above arguments execution status is numeric number that denotes pass, fail statuses defined in TestRail. Example: Pass -> 1, Fail -> 5 etc.

**Step 5:**Use the below command to execute a single test.
```
//To run single test
$ mvn test -P single
```

Once Test gets run, it logs result in TestRail as output mentioned here:

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
