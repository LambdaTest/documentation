---
id: accessibility-report-integrations
title: Integrations (JIRA / Slack)
sidebar_label: Integrations (JIRA / Slack)
description: Use integrations to route Accessibility results and issues into collaboration and issue management workflows.
slug: accessibility-report-integrations/
url: https://www.testmuai.com/support/docs/accessibility-report-integrations/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-report-integrations/
---
import { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Integrations (JIRA / Slack)",
          "item": `${BRAND_URL}/support/docs/accessibility-report-integrations/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-report-integrations/"
    },
    "headline": "Integrations (JIRA / Slack)",
    "description": "Use integrations to route Accessibility results and issues into collaboration and issue management workflows.",
    "url": "https://www.testmuai.com/support/docs/accessibility-report-integrations/",
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

# Integrations (JIRA / Slack)

Accessibility reporting often needs to move beyond the dashboard into issue tracking and team collaboration workflows.

This guide explains when to use shared platform integrations alongside Accessibility reporting and how they fit into remediation workflows such as ticketing and team notifications. It focuses on how those capabilities support accessibility outcomes rather than duplicating full integration setup documentation elsewhere.

## Common integration scenarios

- create engineering tickets from report findings
- share report outcomes with QA or product teams
- connect Accessibility triage to an existing bug-management workflow

## Important note

Many integrations are shared platform capabilities. This page exists to explain how they are used in the Accessibility context rather than to duplicate full integration setup docs.

## Onboarding: wire Jira or Slack for Accessibility

1. Complete the **global** integration setup first. See **[Jira Integration](/support/docs/jira-integration/)** or **[Slack Integration](/support/docs/slack-integration/)** for credentials, OAuth, and workspace allowlists.
2. In the **Accessibility** report or workspace settings (exact menu depends on UI version), choose the integration you want to **receive** new issues or notifications.
3. Map **severity or tags** to Jira priorities if the UI offers mapping; otherwise agree a default priority in your triage playbook.
4. Send a **test ticket** from a non-production report to confirm fields populate correctly.
5. Train reviewers to use **[Bug Report](/support/docs/accessibility-report-bug/)** for one-off escalations versus integration rules for systematic routing.

## Related docs

- [Bug Report](/support/docs/accessibility-report-bug/)
- [Exporting & Sharing Reports](/support/docs/accessibility-exporting-sharing-reports/)
- [Jira Integration](/support/docs/jira-integration/)
- [Slack Integration](/support/docs/slack-integration/)
