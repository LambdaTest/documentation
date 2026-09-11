---
id: insights-dashboard
title: Insights Dashboard
hide_title: true
sidebar_label: Insights Dashboard
description: Manage system and custom fields in TestMu AI's Test Manager, enhancing test case organization and streamlining processes with detailed fields and values.
keywords:
  - insights
  - insights dashboard
url: https://www.testmuai.com/support/docs/insights-dashboard/
site_name: TestMu AI
slug: insights-dashboard/
canonical: https://www.testmuai.com/support/docs/insights-dashboard/
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/insights-dashboard/"
    },
    "headline": "Insights Dashboard",
    "description": "Manage system and custom fields in TestMu AI's Test Manager, enhancing test case organization and streamlining processes with detailed fields and values.",
    "url": "https://www.testmuai.com/support/docs/insights-dashboard/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Test Manager",
    "keywords": [
      "insights",
      "insights dashboard"
    ],
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
    "dateModified": "2026-09-09T20:28:09+05:30"
  }) }}
/>

# Insights Dashboard

The insights section provides a comprehensive project level data overview of key Test Manager features, including Projects, Test Plans, Builds, and Test Cases, available at both the project and organizational levels.

:::note
Archived test cases are excluded from every count and coverage metric on this dashboard. The exclusion applies to historical data as well, so archiving a test case changes the numbers for past periods. Reports you have already generated are not affected. See [Archive and Restore Test Cases](/support/docs/test-case-archive/).
:::

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
