> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

> This is currently in the **Beta** version.

HyperExecute supports integration with GitHub App, enabling secure, fine-grained, and scalable access to your GitHub repositories without relying on long-lived Personal Access Tokens (PATs).

With this integration, HyperExecute automatically generates short-lived installation access tokens via GitHub App for all Git-related operations in Projects and Workflows, enhancing security, compliance, and maintainability.

This integration supports three onboarding paths:
- **TestMu AI's Marketplace GitHub App** (Public Cloud)
- **Your Existing GitHub App** (On-Prem / Private Cloud)
- **Private GitHub App Dedicated to Your Organization** (On-Prem / Air-Gapped)

## How It Works
1. Install a GitHub App using one of the three supported approaches.
2. Complete the post-installation registration within the TestMu AI platform.
3. HyperExecute backend (Logistics) sends data to Sentinel to persist details in the `github_app_integration` table.
4. For customer-managed GitHub App, create an org-level secret using the Logistics Secrets API: `github_app_private_key_{{git_tenant}}`.

Once setup is complete, all HyperExecute Project and Workflow Git operations use short-lived installation tokens instead of PAT tokens. The PAT-based flow is used only as a fallback when no GitHub App is configured.

## Installation Approaches
HyperExecute supports three installation models, depending on your cloud type and organizational setup.

### Approach 1: TestMu AI's Marketplace GitHub App (Public Cloud)

**Prerequisites :**

- Admin permissions in your target GitHub organization

**Installation Steps**

1. Navigate to [GitHub Marketplace](https://github.com/marketplace)
2. Search for "TestMu AI" or "HyperExecute"
3. Open the TestMu AI GitHub App listing
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

2. Navigate to the TestMu AI setup page:
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
- Private GitHub App installation URL shared by the TestMu AI/Workflow team
- Setup URL inside the GitHub App updated to the TestMu AI private setup URL

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
- Have **multiple GitHub Apps** on the same tenant for different GitHub organizations
- Each TestMu AI org can have **one GitHub App per (tenant + GitHub org name)** combination

### Setup for Non-Default Tenants

For GitHub Enterprise Server or any tenant other than `github.com`:

1. Follow [Approach 2](#approach-2-your-existing-github-app-on-prem) or [Approach 3](#approach-3-private-github-app-on-prem-dedicated-app) to install the GitHub App on your enterprise instance.

2. Create an **org-level secret** for the tenant's private key:
   `github_app_private_key_`
   For example, if your GitHub Enterprise Server is `ghes.yourcompany.com`:
   `github_app_private_key_ghes.yourcompany.com`

3. Complete the registration on the TestMu AI setup page. The tenant is recorded automatically based on the GitHub App's origin.


For the default tenant (`github.com`), the platform's built-in Marketplace GitHub App handles key management automatically, no manual secret creation is needed.
