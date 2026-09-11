---
id: accessibility-sitemap-extraction-url-import
title: Sitemap Extraction & URL Import
sidebar_label: Sitemap Extraction & URL Import
description: Use sitemap extraction and URL import to seed scheduled Accessibility scans with the right page set.
slug: accessibility-sitemap-extraction-url-import/
url: https://www.testmuai.com/support/docs/accessibility-sitemap-extraction-url-import/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-sitemap-extraction-url-import/
---

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/accessibility-sitemap-extraction-url-import/"
    },
    "headline": "Sitemap Extraction & URL Import",
    "description": "Use sitemap extraction and URL import to seed scheduled Accessibility scans with the right page set.",
    "url": "https://www.testmuai.com/support/docs/accessibility-sitemap-extraction-url-import/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [],
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

# Sitemap Extraction & URL Import

Use sitemap extraction and URL import to build the page list for scheduled Accessibility scans efficiently.

## When to use this

Use this page when you want to scan many URLs and do not want to add them one by one.

## Common input methods

- manual URL entry
- CSV upload
- sitemap extraction

## Onboarding: seed URLs for a new schedule

1. Open **[Test Scheduling](/support/docs/accessibility-test-scheduling/)** and start **[Create Scheduled Scan](/support/docs/accessibility-test-scheduling-scan/)** (or edit an existing schedule).
2. Choose **manual**, **CSV**, or **sitemap** import depending on where your canonical URL list lives.
3. For **sitemap**, supply the sitemap URL (often `https://example.com/sitemap.xml`). Wait for extraction to finish, then **review** the list: remove admin-only, duplicate, or non-HTML URLs.
4. For **CSV**, align columns with the template your team uses (path, locale, or environment columns if applicable). Validate in a spreadsheet before upload.
5. For **manual** entry, paste critical journeys first (login, checkout, settings), then broaden coverage.
6. Save the URL set, then continue with authentication and schedule steps in the scheduling wizard.

## Best practices

- include core user-journey pages first
- review extracted URLs before scheduling large recurring scans
- exclude pages that are not meaningful for Accessibility validation

## Related docs

- [Test Scheduling - Sitemap (Overview)](/support/docs/accessibility-test-scheduling/)
- [Steps to Schedule an Accessibility Scan](/support/docs/accessibility-test-scheduling-scan/)
