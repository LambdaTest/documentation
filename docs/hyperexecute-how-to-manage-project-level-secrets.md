---
id: hyperexecute-how-to-manage-project-level-secrets
title: Manage Project Level Secrets in HyperExecute
hide_title: false
sidebar_label: How to Manage Project Level Secrets in HyperExecute
description: Find out how to Save and Manage Secrets
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - How to Save and Manage Secrets
url: https://www.testmu.ai/support/docs/hyperexecute-how-to-manage-project-level-secrets
site_name: LambdaTest
slug: hyperexecute-how-to-manage-project-level-secrets
canonical: https://www.testmu.ai/support/docs/hyperexecute-how-to-manage-project-level-secrets/
---
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
          "name": "Integrations",
          "item": `${BRAND_URL}/support/docs/hyperexecute-how-to-manage-project-level-secrets/`
        }]
      })
    }}
></script>
Secrets in <BrandName /> HyperExecute are encrypted environment variables used to store sensitive data securely like **Access tokens**, **API Keys**, **Passwords**. Secrets are injected into your test environment at runtime, so you never expose them directly in your codebase or logs.

Managing sensitive information like API tokens, credentials, and access keys is crucial when running tests in <BrandName /> HyperExecute. To address this, HyperExecute offers a Secrets Management system, and one of its powerful features is Project Level Secrets. This feature lets you define secrets scoped to a specific project, making secret handling more secure, easier, and collaborative for your teams.

## What Are Project Level Secrets?
Project-level secrets are bound to a specific HyperExecute project instead of a user or account. When a job runs using that project (referenced by name or id in the YAML configuration, which is a sub-parameter of project parameter), the project-level secrets are automatically available to the test environment.

### Key Points
- Define secrets once per project.
- Use them across all jobs that reference the project.
- Simplifies managing secrets when multiple users or CI/CD pipelines access the same project.

## How to Add Project Level Secrets?
### Step 1: Create a Project

To begin, create a new project on the <BrandName /> platform. Follow the instructions to [Create a Project](/support/docs/hyperexecute-projects/#setup-your-project)

### Step 2: Add Secrets to the Project
Once your project is created:
- Navigate to the Secrets tab within the project.
- Click Add Secret.
- Enter a Key (e.g., LT_SECRET_KEY) and its corresponding Value (e.g., secureP@ss123).
- Click Add Secret button.

Your secret will be encrypted and securely stored.

### Step 3: Use Secrets in Your HyperExecute YAML
To reference the secrets in your HyperExecute configuration file (`hyperexecute.yaml`):

```yaml title="hyperexecute.yaml"
version: 0.1
runson: linux

autosplit: true
concurrency: 2

project: your-project-name

# highlight-start
env:
  LT_SECRET_KEY: ${{.secrets.token}}
# highlight-end
```

## User-Level Secrets vs. Project-Level Secrets

| Features | User Level Secrets | Project Level Secrets |
|----------|--------------------|-----------------------|
| **Scope** | Linked to individual user account | Scoped to a specific project |
| **Reusability** | Not reusable across users | Reusable by all users on project |
| **Team Collaboration** | Limited (not ideal for shared projects) | Designed for team collaboration |
| **Management Location** | Managed in user’s Secret Manager | Managed inside the project UI |
| **Access Control** | Controlled by user account permissions | Controlled by project permissions |

## Why Use Project-Level Secrets?
- **Centralized Management :** Keep all secrets related to a test framework or application in one place—the project.
- **Team Collaboration :** Multiple team members can access the same secrets via shared project access.
- **Simplified CI/CD Setup :** Reference your project in the YAML, and secrets are injected automatically without extra configuration.
- **Security :** Secrets remain encrypted and are never logged or exposed in your code.
- **Easy Maintenance :** Update secrets in one place when values change, and all users/jobs referencing the project get the updated secrets immediately.

By defining and managing secrets at the project level in <BrandName /> HyperExecute, teams can ensure safer handling of sensitive data, reduce duplication efforts, and make test runs more consistent and secure.
