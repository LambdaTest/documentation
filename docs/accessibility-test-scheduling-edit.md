---
id: accessibility-test-scheduling-edit
title: Edit an Accessibility Scan
hide_title: false
sidebar_label: Edit the Scan
description: Easily edit accessibility scan settings in TestMu AI. Update scan names, recurrence schedules, and timings to keep your tests organized and efficient.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Test Scheduling
    - Edit Scan
url: https://www.testmuai.com/support/docs/accessibility-test-scheduling-edit/
site_name: TestMu AI
slug: accessibility-test-scheduling-edit/
canonical: https://www.testmuai.com/support/docs/accessibility-test-scheduling-edit/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
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
          "name": "Edit an Accessibility Scan",
          "item": `${BRAND_URL}/support/docs/accessibility-test-scheduling-edit/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-test-scheduling-edit/"
    },
    "headline": "Edit an Accessibility Scan",
    "description": "Easily edit accessibility scan settings in TestMu AI. Update scan names, recurrence schedules, and timings to keep your tests organized and efficient.",
    "url": "https://www.testmuai.com/support/docs/accessibility-test-scheduling-edit/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [
      "TestMu AI",
      "Accessibility",
      "Testing"
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
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
The Edit Report feature in Accessibility Scheduling allows you to modify scan settings for your scheduled accessibility tests. This document provides a step-by-step guide to update the scan name, recurrence details, and time for accessibility reports.

## Accessing the Edit Report Feature
- Navigate to the Accessibility section on your <BrandName /> dashboard.
- Select the report you want to edit from the Scheduled Tests list.
- Click on the Edit button located at the top right corner of the report.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/6.png').default} className="doc_img"/>

## Editing the Scan Details
Once you click on the Edit button, a dialog box will appear with the following options:

### 1. Scan Name
- You can update the name of the scan to better reflect its purpose.
- **Example :** Change the name from `Monday, Tuesday, Friday Report for YT Platform` to a more descriptive title if needed.

### 2. Recurring Details
- **Modify the days** on which the scan will run: Select the days from the dropdown (e.g., Monday, Tuesday, Friday).
- **Update the time** for the recurring scan: Specify the time (e.g., 12:00 PM) and time zone (e.g., GMT +05:30 Asia/Calcutta).

After making the necessary updates, click Save changes to apply the modifications. If you wish to discard changes, click Cancel.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/7.png').default} className="doc_img"/>

> Once the changes are saved, the updated scan name and schedule will reflect in the Scheduled Tests section. The next scan on date and time will be automatically adjusted based on the new recurrence settings.
