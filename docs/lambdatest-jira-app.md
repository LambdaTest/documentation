---
id: lambdatest-jira-app
title: TestMu AI Jira App
hide_title: true
sidebar_label: TestMu AI Jira App
description: Efficiently manage your tests with TestMu AI Jira App, seamlessly integrating Test Manager capabilities into your Jira environment to enhance collaboration.
keywords:
  - Jira app
  - TestMu AI Jira App
url: https://www.testmu.ai/support/docs/testmu-jira-app
site_name: LambdaTest
slug: testmu-jira-app
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
          "name": "LambdaTest Jira App",
          "item": `${BRAND_URL}/support/docs/lambdatest-jira-app/`
        }]
      })
    }}
></script>

# <BrandName /> Jira App

<BrandName /> Test Manager integrates directly with the Jira App, allowing you to manage tests seamlessly within the Jira interface. It provides Test Manager functionalities in your Jira environment, boosting workflow efficiency and facilitating improved collaboration among teams.

**Let’s have a look at how to use the <BrandName /> Jira App:**

1. Download the Jira app from the Atlassian Marketplace. Once installed, navigate to **Manage your Apps** under the **Apps** section in your Jira project.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/download-jira-app.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

2. Navigate to the sidebar on the left, select **<BrandName />** from the **Apps** menu, and enter the required credentials, such as your **Username** and **Access Token**. Then, click on **Authenticate** to proceed. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/required-credentials.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

3. Go to any Jira issue and click on the <BrandName /> icon located just below the issue name. This will display the Test Cases linked to that issue.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/click-on-issue-name.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

4. Select **Execution History** to have a look at all the executions of the test cases that are linked to the Jira Issue.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/select-execution.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

5. Click on **Link Issue**, after which an instance will appear enabling you to link an issue to the test case. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/link-jira-issue.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

6. Enter the test case name and select any of the test cases for which you want to link an issue. All test cases created in your Test Manager dashboard will be available in this list. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/test-cases-list.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

This allows you to seamlessly connect Test Cases right from Jira issues, enhancing your workflows.


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
       <BrandName /> Jira App
      </span>
    </li>
  </ul>
</nav>
