---
id: test-case-versioning
title: Test Case Versioning
sidebar_label: Manage Versions
description: Learn efficient manual test case versioning with TestMu AI's Test Manager. 
keywords:
  - test case creation
  - test case update
  - test cases
  - version
url: https://www.testmuai.com/support/docs/test-case-versioning/
site_name: TestMu AI
slug: test-case-versioning/
canonical: https://www.testmu.ai/support/docs/test-case-versioning/
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
          "name": "Manual Test Case Creation",
          "item": `${BRAND_URL}/support/docs/manual-test-case-creation/`
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
      "@id": "https://www.testmuai.com/support/docs/test-case-versioning/"
    },
    "headline": "Test Case Versioning",
    "description": "Learn efficient manual test case versioning with TestMu AI's Test Manager.",
    "url": "https://www.testmuai.com/support/docs/test-case-versioning/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Test Manager",
    "keywords": [
      "test case creation",
      "test case update",
      "test cases"
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
Test Case Versioning allows teams to track every change made to a test case over time. It provides a complete audit trail, ensures traceability, supports rollbacks to earlier versions, and makes collaboration across teams more reliable.

## Creating Versions
Every edit to a test case whether it’s updating steps, descriptions, or fields creates a new version once saved. Here’s how the save test case flow works:

- After making changes to a test case, the `Save Changes` button in the top right corner will be enabled.
 
- When saving, you can add a commit message to help identify the change in the audit history.
 
- In the `Version History` tab, you can view all commits made to that test case.

<img loading="lazy" src={require('../assets/videos/test-manager/test-cases/commit-changes.gif').default} alt="Image" className="doc_img" style={{width: '80%'}}/>

---

## Managing Versions

<img loading="lazy" src={require('../assets/images/test-manager/test-cases/versions-page.png').default} alt="Image" className="doc_img" style={{width: '80%'}}/>

### Version Comparison
To see the change log and compare different versions of a test case, click the `Compare` button in the **Version History** tab.

<img loading="lazy" src={require('../assets/images/test-manager/test-cases/compare-versions.png').default} alt="Image" className="doc_img" style={{width: '80%'}}/>

### View Older Versions
To view the details of a test case at a specific version, open the desired commit and switch to **View Mode**. This shows the state of the test case at that point in time.

<img loading="lazy" src={require('../assets/images/test-manager/test-cases/version-view-mode.png').default} alt="Image" className="doc_img" style={{width: '80%'}}/>

### Revert to a Version
When you revert a test case to a specific version, a new version is created that copies the contents of the selected version.

### Archive and Unarchive Events
Archiving and unarchiving a test case are recorded in the **Version History** tab with the user who performed the action and when. These entries are markers rather than versions: they do not create a new version, they do not change the version count, and they carry no `Compare` or `Revert` action. See [Archive and Restore Test Cases](/support/docs/test-case-archive/).

---
