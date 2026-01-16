---
id: hyperexecute-github-app-integration
title: GitHub App Integration Support for HyperExecute
hide_title: false
sidebar_label: GitHub App
description:  GitHub App Integration Support for HyperExecute 
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - GitHub App
  - Integrations
  - Products
  - Automated testing alerts
  - DevOps communication
url: https://www.testmu.ai/support/docs/hyperexecute-github-app-integration/
site_name: LambdaTest
slug: hyperexecute-github-app-integration
canonical: https://www.testmu.ai/support/docs/hyperexecute-github-app-integration/
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
          "name": "Integration with Products",
          "item": `${BRAND_URL}/support/docs/hyperexecute-github-app-integration/`
        }]
      })
    }}
></script>
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
3. HyperExecute backend (Logistics) sends data to Sentinel to persist details in the `github_app_integration` table. <br />
4. For customer-managed GitHub App, create an org-level secret using the Logistics Secrets API: `github_app_private_key_{{git_tenant}}`. <br />

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
```
   https://{{accounts_base_url}}/org-settings/hyperexecute/git-integration
```

3. Manually enter:
   - `installation_id`
   - Additional app details as required

> **Note:** For GitHub Enterprise setups with multiple organizations, repeat this setup for each organization.

**Additional Required Configuration**

Create an org-level secret via the Logistics Secret API:
```
github_app_private_key_{{git_tenant}}
```

This private key is used to generate short-lived tokens internally.

### Approach 3: Private GitHub App (On-Prem Dedicated App)

**Prerequisites**

- Admin access in your target GitHub organization
- Private GitHub App installation URL shared by the <BrandName />/Workflow team
- Setup URL inside the GitHub App updated to the <BrandName /> private setup URL

**Installation Steps**

1. Navigate to the private app installation URL:
```
   https://github.com/apps/{private-app-name}/installations/new
```

2. Select your GitHub organization
   - Enterprise customers must repeat this process for each organization

3. Configure repository access permissions

4. Review and confirm the installation

**Post-Installation Configuration**

GitHub will redirect you to the private setup URL configured for your environment:
```
https://{{private_accounts_base_url}}/org-settings/hyperexecute/git-integration
```

The redirect contains the `installation_id` parameter, which is required for configuration.

> **Note:** Only Org Admins can complete this configuration step.