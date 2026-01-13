---
id: insights-dashboard
title: Insights Dashboard
hide_title: true
sidebar_label: Insights Dashboard
description: Manage system and custom fields in TestMu AI's Test Manager, enhancing test case organization and streamlining processes with detailed fields and values.
keywords:
  - insights
  - insights dashboard
url: https://www.testmu.ai/support/docs/insights-dashboard
site_name: LambdaTest
slug: insights-dashboard
canonical: https://www.testmu.ai/support/docs/insights-dashboard/
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
          "name": "Insights Dashboard",
          "item": `${BRAND_URL}/support/docs/insights-dashboard/`
        }]
      })
    }}
></script>

# Insights Dashboard

The insights section provides a comprehensive project level data overview of key Test Manager features, including Projects, Test Plans, Builds, and Test Cases, available at both the project and organizational levels.

1. The insights is segregated on various parameters such as

- **Total Test Cases:** Provides a count of all test cases created.
- **Manual Test Cases** Number of manual test cases
- **Automated Test Cases** Number of automated test cases.
- **Automation Coverage** Displays the percentage of test cases that are automated.

2. You can filter test cases based on specific date ranges. For instance, you can view data from July 8th to July 25th to analyze trends over that period.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/insights-dashboard.webp').default} alt="Real "  className="doc_img" width="1600" height="415"/>

3. **Build Summary** provides details of test cases based on status that is whether the test cases have passed, Failed, Skipped or Not Started.

4. **Test Case Summary** provides information on the type of testing that has been chosen for different test cases.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/build-and-test-case-summary.webp').default} alt="Real "  className="doc_img" width="1600" height="613"/>

5. **Test Case Trend** graphically represents the count of test cases created over the selected duration, offering a visual insight into test case progression and status.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/test-case-trend.webp').default} alt="Real "  className="doc_img" width="1600" height="609"/>

6. **Issues Trend** provides an overview of issues linked to all test cases over the selected time frame. This helps in identifying areas that may require attention.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/issues-trend.webp').default} alt="Real "  className="doc_img" width="1600" height="611"/>

These insights help in monitoring and improving the testing process, ensuring comprehensive coverage and efficient test management. 



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
        Insights Dashboard
      </span>
    </li>
  </ul>
</nav>
