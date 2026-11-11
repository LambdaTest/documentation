---
id: hyperexecute-github-app-integration
title: GitHub App Integration Support for HyperExecute
hide_title: false
sidebar_label: GitHub App
description: Connect HyperExecute to GitHub with a GitHub App, including one app per GitHub organization and the org-level secret for its private key.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - GitHub App
  - Integrations
  - Products
  - Automated testing alerts
  - DevOps communication
url: https://www.testmuai.com/support/docs/hyperexecute-github-app-integration/
site_name: TestMu AI
slug: hyperexecute-github-app-integration/
canonical: https://www.testmuai.com/support/docs/hyperexecute-github-app-integration/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';



<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-github-app-integration/"
    },
    "headline": "GitHub App Integration Support for HyperExecute",
    "description": "Connect HyperExecute to GitHub with a GitHub App, including one app per GitHub organization and the org-level secret for its private key.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-github-app-integration/",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Navigate to the TestMu AI setup page",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "   https://{{accounts_base_url}}/org-settings/hyperexecute/git-integration"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Org-level secret name for a GitHub App",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "github_app_private_key_<git_tenant>_<git_org>_<app_id>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Navigate to the private app installation URL",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "   https://github.com/apps/{private-app-name}/installations/new"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "GitHub will redirect you to the private setup URL configured for your environment",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "https://{{private_accounts_base_url}}/org-settings/hyperexecute/git-integration"
      }
    ],
    "dateModified": "2026-11-11T17:00:00+05:30"
  }) }}
/>
> This is currently in the **Beta** version.

HyperExecute supports integration with GitHub App, enabling secure, fine-grained, and scalable access to your GitHub repositories without relying on long-lived Personal Access Tokens (PATs).

With this integration, HyperExecute automatically generates short-lived installation access tokens via GitHub App for all Git-related operations in Projects and Workflows, enhancing security, compliance, and maintainability.

This integration supports three onboarding paths:
- **<BrandName />'s Marketplace GitHub App** (Public Cloud)
- **Your Existing GitHub App** (On-Prem / Private Cloud)
- **Private GitHub App Dedicated to Your Organization** (On-Prem / Air-Gapped)

## How It Works
1. Install a GitHub App using one of the three supported approaches. <br />
2. Complete the post-installation registration within the <BrandName /> platform. <br />
3. HyperExecute saves the app details (App ID and Installation ID) for your organization. <br />
4. For a GitHub App that you manage (Approach 2 or 3), add the app's private key as an org-level secret. See [Add the private key as an org-level secret](#add-the-private-key-as-an-org-level-secret). <br />

Once setup is complete, all HyperExecute Project and Workflow Git operations use short-lived installation tokens instead of PAT tokens. The PAT-based flow is used only as a fallback when no GitHub App is configured.

## Installation Approaches
HyperExecute supports three installation models, depending on your cloud type and organizational setup.

### Approach 1: <BrandName />'s Marketplace GitHub App (Public Cloud)

**Prerequisites :**

- Admin permissions in your target GitHub organization

**Installation Steps**

1. Navigate to [GitHub Marketplace](https://github.com/marketplace)
2. Search for "<BrandName />" or "HyperExecute"
3. Open the <BrandName /> GitHub App listing
4. Click **Install**
5. Select your target GitHub Organization
   - For GitHub Enterprise, installation must be completed per organization
6. Configure repository access:
   - **All repositories** (recommended)
   - **Select repositories**
7. Review the required permissions:
   - **Contents** (read/write)
   - **Metadata** (read)
8. Click **Install** to complete the installation

**Post-Installation Configuration**

After installation, GitHub automatically redirects you to: `https://{{accounts_base_url}}/org-settings/hyperexecute/git-integration`

The redirect URL includes an `installation_id` parameter required for configuration.

> **Note:** Only Org Admins can complete the registration. Organization users can view mappings but cannot modify them.

### Approach 2: Your Existing GitHub App (On-Prem)

**Prerequisites**

- A GitHub App already exists in your GitHub organization
- Admin access to the GitHub App
- Required permissions are configured:
  - **Contents** (read)
  - **Metadata** (read)

**Installation Steps**

1. Obtain your app's installation ID from:
   - Navigate to **GitHub App → Installations → Installation URL**
   - Example URL format: `https://github.com/settings/installations/{installation_id}`

2. Navigate to the <BrandName /> setup page:

<VerifiedTag value="Verified" />

```
   https://{{accounts_base_url}}/org-settings/hyperexecute/git-integration
```

3. Manually enter:
   - `installation_id`
   - Additional app details as required

> **Note:** For GitHub Enterprise setups with multiple organizations, repeat this setup for each organization.

**Additional Required Configuration**

Add the GitHub App's private key as an org-level secret. HyperExecute uses it to generate short-lived tokens. The secret name includes the Git host, the GitHub organization and the App ID. See [Add the private key as an org-level secret](#add-the-private-key-as-an-org-level-secret).

### Approach 3: Private GitHub App (On-Prem Dedicated App)

**Prerequisites**

- Admin access in your target GitHub organization
- Private GitHub App installation URL shared by the <BrandName />/Workflow team
- Setup URL inside the GitHub App updated to the <BrandName /> private setup URL

**Installation Steps**

1. Navigate to the private app installation URL:

<VerifiedTag value="Verified" />

```
   https://github.com/apps/{private-app-name}/installations/new
```

2. Select your GitHub organization
   - Enterprise customers must repeat this process for each organization

3. Configure repository access permissions

4. Review and confirm the installation

**Post-Installation Configuration**

GitHub will redirect you to the private setup URL configured for your environment:

<VerifiedTag value="Verified" />

```
https://{{private_accounts_base_url}}/org-settings/hyperexecute/git-integration
```

The redirect contains the `installation_id` parameter, which is required for configuration.

> **Note:** Only Org Admins can complete this configuration step.

## Multi-Tenant GitHub Support

HyperExecute supports connecting your organization to **multiple GitHub instances** at the same time. This is useful when your team works across both GitHub.com and a private GitHub Enterprise Server (e.g., `ghes.yourcompany.com`).

Each GitHub instance is called a **tenant**, identified by the hostname of the Git provider.

### How It Works

When you create a project, HyperExecute automatically detects the tenant from your repository URL:

| Repository URL | Detected Tenant |
|---------------|----------------|
| `https://github.com/my-org/my-repo` | `github.com` |
| `https://ghes.yourcompany.com/my-org/my-repo` | `ghes.yourcompany.com` |

Each tenant maintains its own:
- GitHub App configuration (App ID, Installation ID)
- RSA private key for token generation
- Short-lived installation access tokens

Credentials are **fully isolated** between tenants, tokens and keys from one GitHub instance are never used for another.

### What You Can Do

- Connect to **multiple GitHub instances** (e.g., GitHub.com + GitHub Enterprise Server)
- Have **multiple GitHub Apps** on the same tenant, one for each GitHub organization
- Each <BrandName /> org can have **one GitHub App per (tenant + GitHub org name)** combination

Using a separate GitHub App for each GitHub organization limits the impact if one app's private key leaks: that key can reach only the repositories of its own organization. Give each app access only to the repositories HyperExecute needs.

To set this up, install and register each app (Approach 2 or 3), then add one org-level secret per app, named as shown in [Secret name](#secret-name).

### Setup for Non-Default Tenants

For GitHub Enterprise Server or any tenant other than `github.com`:

1. Follow [Approach 2](#approach-2-your-existing-github-app-on-prem) or [Approach 3](#approach-3-private-github-app-on-prem-dedicated-app) to install the GitHub App on your enterprise instance.

2. Add the GitHub App's private key as an **org-level secret**, as described in [Add the private key as an org-level secret](#add-the-private-key-as-an-org-level-secret). For example, an app with App ID `1234567` for the `my-org` organization on a GitHub Enterprise Server at `ghes.yourcompany.com` uses `github_app_private_key_ghes.yourcompany.com_my-org_1234567`.

3. Complete the registration on the <BrandName /> setup page. The tenant is recorded automatically based on the GitHub App's origin.

:::note
If you use the Marketplace GitHub App (Approach 1) on `github.com`, the platform manages the key, so you do not create a secret. If you use your own GitHub App on `github.com` (Approach 2 or 3), add the secret as described below.
:::

## Add the private key as an org-level secret

For a GitHub App that you manage (Approach 2 or 3), HyperExecute needs the app's private key to generate installation tokens. Store it as an [org-level secret](/support/docs/hyperexecute-how-to-save-and-manage-secrets/#org-level-secrets).

### Secret name {#secret-name}

Name the secret in this format, one secret for each GitHub App:

```text
github_app_private_key_<git_tenant>_<git_org>_<app_id>
```

For example, an app with App ID `1234567` for the `my-org` organization on `github.com` uses `github_app_private_key_github.com_my-org_1234567`.

- `<git_tenant>`: the host name of your Git server, as it appears in the repository URL. For example `github.com` or `ghes.yourcompany.com`.
- `<git_org>`: the GitHub organization (or user) that owns the repositories, as it appears in the repository URL. **Write it in lowercase**, even if the name on GitHub has capital letters. For `https://github.com/My-Org/my-repo`, use `my-org`.
- `<app_id>`: the **App ID** shown on the GitHub App's settings page. It is not the Installation ID.

### Secret value

The value is the app's private key (the `.pem` file you generate under **Private keys** on the GitHub App's settings page), encoded as base64 on a single line with no line breaks.

macOS:

```bash
base64 -i private-key.pem | tr -d '\n'
```

Linux:

```bash
base64 -w 0 private-key.pem
```

Windows (PowerShell):

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("private-key.pem"))
```

Paste the output as the secret value.

### Check the setup

1. Create a Project with a repository from that GitHub organization, and leave **PAT Token** empty.
2. If the Project is created, the app and the secret work.

| What you see | Likely cause | What to do |
|--------------|--------------|------------|
| `3003 - Git authentication is not configured or is invalid. Please configure and try again` when you create a Project | The secret name does not match the repository, or the secret value cannot be read | Check that `<git_org>` is in lowercase, that `<app_id>` is the App ID and not the Installation ID, and that `<git_tenant>` matches the host in the repository URL. Re-encode the private key with one of the commands above, so the value is a single base64 line, and save the secret again. |
