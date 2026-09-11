---
id: accessibility-testing-dashboard-issue-summary
title: Issue Summary
sidebar_label: Issue Summary
description: Understand the summary view of Accessibility issues, affected elements, guidelines, and counts.
slug: accessibility-testing-dashboard-issue-summary/
url: https://www.testmuai.com/support/docs/accessibility-testing-dashboard-issue-summary/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-testing-dashboard-issue-summary/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-testing-dashboard-issue-summary/"
    },
    "headline": "Issue Summary",
    "description": "Understand the summary view of Accessibility issues, affected elements, guidelines, and counts.",
    "url": "https://www.testmuai.com/support/docs/accessibility-testing-dashboard-issue-summary/",
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

# Issue Summary

Issue Summary gives you the high-level breakdown of a completed Accessibility run before you move into issue-level triage.

Read on for the summary metrics surfaced after each run. Each signal is meant to help you prioritize remediation before you drill into individual issues, so you can align fixes with severity and coverage first.

## What you can review

- total issues
- issue types
- affected element groups
- best-practice findings
- needs-review findings
- affected WCAG guidelines

## When to use this

Use this view when you want to understand report shape and severity before drilling into individual issues.

## How to use Issue Summary (onboarding)

1. From **[Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)**, open a completed report.
2. Select **Issue Summary** (or the equivalent tab/panel name in the UI).
3. Read **severity totals** first. Critical/serious items usually block users or compliance narratives.
4. Scan **guideline or rule groupings** to see which WCAG themes dominate (contrast, keyboard, forms, ARIA, etc.).
5. Use **needs-review** and **best-practice** counts to decide how much manual validation you owe before filing engineering tickets.
6. When a bucket looks actionable, jump to **[All Issues](/support/docs/accessibility-testing-dashboard-all-issues/)** filtered or grouped by that bucket, or open the **[Web Rule Repository](/support/docs/accessibility-web-rule-repository/)** entry for the rule text.

## Related docs

- [All Issues](/support/docs/accessibility-testing-dashboard-all-issues/)
- [Accessibility Score](/support/docs/accessibility-web-score/)
