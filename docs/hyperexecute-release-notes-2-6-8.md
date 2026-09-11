---
id: hyperexecute-cli-release-notes-0-2-249
title: Version 0.2.249
hide_title: false
sidebar_label: Version 0.2.249
description: Version 0.2.249
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-cli-release-notes-0-2-249/
site_name: TestMu AI
slug: hyperexecute-cli-release-notes-0-2-249/
canonical: https://www.testmuai.com/support/docs/hyperexecute-cli-release-notes-0-2-249/
---

import NewReleaseTag from '../src/component/newRelease.js';
import EnhancementTag from '../src/component/enhancementTag';
import BugFixTag from '../src/component/bugFixTag';
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
          "name": "Version",
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-6-8/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-cli-release-notes-0-2-249/"
    },
    "headline": "Version 0.2.249",
    "description": "Version 0.2.249",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-cli-release-notes-0-2-249/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "TestMu AI Hyperexecute",
      "TestMu AI Hyperexecute help",
      "TestMu AI Hyperexecute documentation"
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
## Update CLI to the Latest Version - 0.2.249
We’re excited to announce several key updates and enhancements in the latest version of our [CLI - 0.2.249](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#download-the-hyperexecute-cli). You can update to the latest version to take advantage of the following improvements:

### New Features and Enhancements
- **Support for ProjectLink Payloads:** Added compatibility for projectLink-type sources.
- **Maestro Framework Support:** Enhanced framework detection with default region handling.
- **Capability Flags:** Introduced support for capability values in the [runson flag](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#--runson).
- **Cypress Integration:** Improved support for Cypress operations, including build configuration fixes.
- **XCUI Enhancements:** Enabled XCUI test reports and increased dispatcher timeouts for XCUI jobs.

### Bug Fixes
- Fixed [`--use-zip`](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#-z---use-zip) flag functionality for seamless execution.
- Resolved GUI execution issues for C# projects.
- Addressed issues with [inherited YAML configurations](/support/docs/hyperexecute-inherit-config/) and environment variable replacements.
- Fixed nil map errors and streamlined email array replacement using variables.
- Corrected XcTestPlanId configurations for improved iOS testing.

### Performance Improvements
- **Binary Updates:** Auto-update feature for binaries now functions without terminating the CLI process, with added support for Windows systems.
- **Timeout Adjustments:** Increased app upload timeout to 5 minutes for smoother operations.

### Miscellaneous Updates
- Added support for Slack channel customization for alerting.
- Improved discovery results with additional suite types for better test identification.
- Moved essential files like `executeEngine.jar` to the project root for better accessibility.

> We strongly recommend updating to the [latest CLI version](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#download-the-hyperexecute-cli) to leverage these enhancements, ensuring a smoother and more efficient experience.
