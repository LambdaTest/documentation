---
id: hyperexecute-github-app-integration
title: GitHub App Integration Support for HyperExecute
hide_title: false
sidebar_label: GitHub App
description: GitHub App Integration Support for HyperExecute
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - GitHub App
  - Integrations
  - Products
  - Automated testing alerts
  - DevOps communication
url: https://www.lambdatest.com/support/docs/hyperexecute-github-app-integration/
site_name: LambdaTest
slug: hyperexecute-github-app-integration/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Integration with Products",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-github-app-integration/"
        }]
      })
    }}
></script>
> This feature is currently in **Beta**.

HyperExecute supports integration with GitHub App, enabling secure, fine-grained, and scalable access to your GitHub repositories without relying on long-lived Personal Access Tokens (PATs).

## Why Use GitHub App Over PAT?
With this integration, HyperExecute automatically generates short-lived installation access tokens via GitHub App for all Git-related operations in Projects and Workflows. Key benefits include:

- **Enhanced Security :** Short-lived tokens reduce the risk of credential exposure
- **Better Compliance :** Fine-grained permissions align with organizational security policies
- **Improved Maintainability :** Eliminates the need to rotate long-lived PATs
- **Automatic Token Management :** HyperExecute handles token generation and renewal automatically


Supported Integration Ways
This integration supports three onboarding approaches:

- **LambdaTest's Marketplace** GitHub App (Public Cloud)
- **Your Existing GitHub App** (On-Prem / Private Cloud)
- **Private GitHub App Dedicated to Your Organization** (On-Prem / Air-Gapped)

## How It Works

1. Install a GitHub App using one of the three supported approaches
2. Complete the post-installation registration within the LambdaTest platform
3. HyperExecute registers your GitHub App installation details securely in the platform
4. For customer-managed GitHub App, create an org-level secret using the Logistics Secrets API: `github_app_private_key_{{git_tenant}}`
5. Once setup is complete, all HyperExecute Project and Workflow Git operations use short-lived installation tokens instead of PAT tokens

## Installation Approaches

<Tabs className="docs__val">

<TabItem value="app1" label="LambdaTest's Marketplace GitHub App" default>
**Prerequisites**
- Admin permissions in your target GitHub organization

#### Installation Steps
1. Navigate to the [LambdaTest GitHub App](https://github.com/marketplace/lambdatest-hyperexecute) on GitHub Marketplace and click install button.
2. Select your target GitHub organization. For GitHub Enterprise, installation must be completed per organization
3. Select one of the following options to configure repository access
    - All repositories (recommended)
    - Select repositories (choose specific repositories)
4. Review the permissions. The following permissions will be granted:
    - Contents: Read and write
    - Metadata: Read only
5. Click Install to complete installation

#### Post-Installation Configuration
After installation, GitHub automatically redirects you to: `https://{{accounts_base_url}}/org-settings/hyperexecute/git-integration`.

The redirect URL includes an `installation_id` parameter required for configuration.

:::tip
Only Org Admins can complete the registration. Organization users can view mappings but cannot modify them.
:::
</TabItem>

<TabItem value="app2" label="Your Existing GitHub App" default>
**Prerequisites**

- A GitHub App already exists in your GitHub organization
- Admin access to the GitHub App
- Required permissions are configured:
  - **Contents** (read)
  - **Metadata** (read)

**Installation Steps**
1. Navigate to your GitHub App settings. Go to Installations tab, click on your organization installation and copy the `installation_id` from the URL.
2. Navigate to the LambdaTest setup page -> `https://{{accounts_base_url}}/org-settings/hyperexecute/git-integration`
3. Enter the `installation_id` and other additional app details as required
> **Note :** For GitHub Enterprise setups with multiple organizations, repeat this setup for each organization.

:::note
**Additional Required Configuration**
For customer-managed GitHub App, you need to create an org-level secret to store your GitHub App's private key.

**Why is this needed?**
The private key is used by HyperExecute to generate short-lived installation access tokens for authenticating with GitHub.

**How to create the secret:**
Use the Logistics Secrets API to create the following org-level secret: `github_app_private_key_{{git_tenant}}`
API Endpoint:

Alternatively, you can add this secret directly in the org settings under Security & Secrets > Organization Secrets.
:::
 <br />
</TabItem>

<TabItem value="app3" label="Private GitHub App" default>
**Prerequisites**
- Admin access in your target GitHub organization
- Private GitHub App installation URL shared by the LambdaTest/Workflow team
- Setup URL inside the GitHub App must be updated to the LambdaTest private setup URL (This should be configured by your LambdaTest team before installation)

#### Installation Steps

1. Navigate to Private App Installation URL `https://github.com/apps/{private-app-name}/installations/new`.
2. Select your target GitHub organization. For GitHub Enterprise, installation must be completed per organization
3. Select one of the following options to configure repository access
    - All repositories (recommended)
    - Select repositories (choose specific repositories)
4. Review the permissions. The following permissions will be granted:
    - Contents: Read and write
    - Metadata: Read only
5. Click Install to complete installation

#### Post-Installation Configuration
After installation, GitHub automatically redirects you to: `https://{{private_accounts_base_url}}/org-settings/hyperexecute/git-integration`. The redirect URL includes an `installation_id` parameter required for configuration.

:::tip
Only Org Admins can complete the registration. Organization users can view mappings but cannot modify them.
:::
</TabItem>
</Tabs>