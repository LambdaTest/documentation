---
id: accessibility-testing-dashboard-issue-summary
title: Issue Summary
hide_title: false
sidebar_label: Issue Summary
description: Get a comprehensive guide of your website's test summary, including total issues, their type, affected element groups, best practices, and WCAG guidelines.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - DevTools
    - Issue Summary
url: https://www.testmuai.com/support/docs/accessibility-testing-dashboard-issue-summary/
site_name: TestMu AI
slug: accessibility-testing-dashboard-issue-summary/
canonical: https://www.testmuai.com/support/docs/accessibility-testing-dashboard-issue-summary/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Navigating Dashboard",
          "item": `${BRAND_URL}/support/docs/accessibility-testing-dashboard-issue-summary/`
        }]
      })
    }}
></script>
The issue summary page describes the complete test summary. It divides the complete report in two major sections :

## Summary

- **Total Issues :** Total number of issues your website have.
- **Issue Types :** Total number of segregated issues your website have.
- **Affected Element groups :** Total number of element groups affected.
- **Best Practices :** Recommended Best Practices to make your website more compliant.
- **Needs Review :** Total number of issues that needs to be reviewed.
- **Affected WCAG Guidelines :** Total number of WCAG Guidelineds affecting from these issues.

## Issue Breakdown

This section breaksdown the above stated numbers in more detailed and visual representation.

- The graph represents the type of issues and how many are they.
- URLs of the affected page.
- What are the WCAG Guidelines that are affected
- The Elements that got affected.

<img loading="lazy" src={require('../assets/images/accessibility-testing/dashboard/8.png').default} alt="automation-dashboard" className="doc_img"/>
