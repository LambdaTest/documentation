---
id: rook-environment-and-secrets
toc_max_heading_level: 2
title: Rook Environment and Secrets
hide_title: false
sidebar_label: Environment & Secrets
description: Store profile values locally, use environment references, isolate Rook state, and understand shared authentication behavior.
keywords:
  - rook environment variables
  - rook secrets
  - rook home
url: https://www.testmuai.com/support/docs/rook-environment-and-secrets/
site_name: TestMu AI
slug: rook-environment-and-secrets/
canonical: https://www.testmuai.com/support/docs/rook-environment-and-secrets/
---
import VerifiedTag from '@site/src/component/verifiedTag';
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
          "name": "Rook Environment and Secrets",
          "item": `${BRAND_URL}/support/docs/rook-environment-and-secrets/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-environment-and-secrets/"
    },
    "headline": "Rook Environment and Secrets",
    "description": "Store profile values locally, use environment references, isolate Rook state, and understand shared authentication behavior.",
    "url": "https://www.testmuai.com/support/docs/rook-environment-and-secrets/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance Platform",
    "keywords": [
      "rook environment variables",
      "rook secrets",
      "rook home"
    ],
    "proficiencyLevel": "Beginner",
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
    "dateModified": "2026-09-11"
  }) }}
/>

# Rook Environment and Secrets

Profiles contain references and operational descriptions. Secret values remain on the machine running Rook and are never included in project synchronization.

## Manage Local Values

<VerifiedTag value="Verified" />

```bash
rook env list
rook env set '{"API_KEY":"sk-...","BASE_URL":"https://staging.example.com"}'
rook env show API_KEY
rook env rm API_KEY
```

| Command | Behavior |
|---|---|
| `env list` | Lists configured names with masked values. It is the default subcommand. |
| `env set` | Stores one or more key-value pairs from a JSON object. |
| `env show` | Prints one value in full; take care with terminals and logs. |
| `env rm` | Removes the local value. |

Values are stored below the global Rook home, outside the repository, and scoped to the workspace’s absolute path. Shell-exported values override stored values. A generated hook reads `process.env.API_KEY`; its profile lists the variable name and purpose.

## Profile Declaration

<VerifiedTag value="Verified" />

```yaml
env:
  - variable: API_KEY
    purpose: read-only token for the staging support API
  - variable: BASE_URL
    purpose: environment to test
```

The `purpose` field should state the authority behind the value. A variable name alone does not tell a reviewer whether the credential can only read status or can move money.

Before spending a run, Rook checks that every value declared by the profile is available. This prevents a large suite from failing after many paid invocations because a single token was never configured.

## Global and Workspace State

| Path | Contains |
|---|---|
| `~/.testmuai/rook/` | Credentials, environment values, terminal history, logs, installed versions, and machine-specific session state. The directory uses mode `0700`. |
| `<repo>/.testmuai/rook/` | Projects, agents, features, scenarios, profiles, hook scripts, runs, and evidence intended to be reviewable and committable. |

## Shared Authentication

Stored OAuth authentication is shared by processes using the same Rook home, profile, and environment:

- several terminals share one sign-in;
- logout in one terminal is observed by the others;
- login restores access for all of them;
- token renewal is serialized so concurrent terminals converge on the same refreshed token;
- an interrupted run is saved where it stopped and is not automatically resumed after login.

For unattended use, inject <code>LT_USERNAME</code> and <code>LT_ACCESS_KEY</code> through your secret manager. Rook uses this pair ahead of stored OAuth credentials. A different <code>ROOK_HOME</code> does not isolate credentials already exported in the shell.

Set <code>ROOK_ENV=stage</code> before authentication and project operations for the [stage Web UI](/support/docs/rook-web-ui/). This does not change the endpoint your target-agent hook calls.

## Isolate Rook State

Set `ROOK_HOME` when a process should not share credentials or local values:

<VerifiedTag value="Verified" />

```bash
export ROOK_HOME="$RUNNER_TEMP/rook"
rook auth status
```

Common reasons include:

- a CI job with its own account;
- separate staging and production identities;
- a temporary test environment;
- troubleshooting without changing the primary workstation state.

## Hook Variables Are Supplied by Rook

Variables such as `ROOK_HOOK`, `ROOK_RUN_ID`, `ROOK_SCENARIO_ID`, `ROOK_SESSION`, `ROOK_TURN`, `ROOK_CONVERSATION`, `ROOK_STATE_DIR`, `ROOK_WORKSPACE`, `ROOK_PROJECT`, and `ROOK_AGENT` are runtime context for hook scripts. Rook's values take precedence; setting them manually does not substitute for running the hook in a real lifecycle.

## Secret Handling Checklist

- Keep values out of profile YAML and source control.
- Give profiles the least-privileged credentials needed for the scenarios.
- Do not use `env show` in shared terminals or CI logs.
- Keep `.testmuai/rook/.gitignore` entries intact for credentials and machine-only state.
- Review MCP commands and headers before approval.
- Use a dedicated `ROOK_HOME` for unattended automation.

## UI Access and Evidence Privacy

The **local UI** (`rook ui --local`) reads workspace evidence on loopback without a hosted browser login. The **hosted Web UI** (`rook ui`) requires browser access to the chosen environment and project; its sign-in is separate from CLI credentials. `ROOK_ENV` selects the hosted environment, not a different target-agent endpoint or a remote data source for the local viewer.

Requests, responses, and artifacts in either UI can contain sensitive target data even when profile YAML contains only variable references. Review evidence before upload or sharing; never expose the local server as a public report. See [both UI access paths](/support/docs/rook-web-ui/#choose-your-ui).

## Related Documentation

- [Profiles and hooks](/support/docs/rook-profiles-and-hooks/)
- [Workspace files](/support/docs/rook-workspace-files/)
- [CLI variables and defaults](/support/docs/agent-assurance-command-reference/#structured-output-and-progress)
