---
id: rook-command-doctor
toc_max_heading_level: 2
title: Rook /doctor Command
sidebar_label: /doctor
description: Probe Rook services and report the runtime, authentication, project, workspace, mode, and connectivity state.
slug: rook-command-doctor/
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-doctor/"
    },
    "headline": "Rook /doctor Command",
    "description": "Probe Rook services and report the runtime, authentication, project, workspace, mode, and connectivity state.",
    "url": "https://www.testmuai.com/support/docs/rook-command-doctor/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
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
    "dateModified": "2026-09-04T12:50:18+05:30"
  }) }}
/>

# <code>/doctor</code> Command

Use <code>/doctor</code> as the first diagnostic when Rook cannot authenticate, select a project, reach a service, or start normal work.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-doctor.png').default} alt="Current Rook doctor command help" className="doc_img"/>

## Syntax

~~~text
/doctor
~~~

From a shell:

~~~bash
rook doctor
~~~

Doctor is intentionally ungated. It remains available when identity, project, connectivity, update, or budget state would block another command.

## Output

Doctor reports:

- Exact Rook and Node.js versions.
- Workspace path and configured environment.
- Controller and API URLs, each with an independent reachability probe.
- Derived identity and authentication status.
- Active project, interaction mode, and TTY state.
- Overall connectivity state derived from identity and the two service probes.

A service that returns an HTTP refusal is still reachable. Doctor distinguishes “the service answered” from “the current credential or project may use it.” It does not test the agent endpoint in an invocation profile; use <code>/profile test</code> for that.

Doctor output can contain local paths, account state, and hostnames. Review it before attaching it to a public issue.

## Related Commands

[Troubleshooting](/support/docs/agent-assurance-troubleshooting/) · [<code>/auth</code>](/support/docs/rook-command-auth/) · [<code>/project</code>](/support/docs/rook-command-project/) · [<code>/profile</code>](/support/docs/rook-command-profile/)
