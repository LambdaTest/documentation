# Manage User-Level Secrets in HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Testing your webapp or applications often involves using sensitive data like passwords, API keys, and other credentials. Storing these secrets directly in your code can be risky and exposing them can lead to potential security breaches.

HyperExecute provides a secure **Secret Management Vault** to keep your sensitive information safe. This doc covers **user-level secrets** that are tied to your individual account.

## Secret Scopes

HyperExecute supports secrets at multiple levels:

| Scope | Access | Use Case |
|-------|--------|----------|
| **User-Level** (this doc) | Tied to your individual account, available to all your jobs | Personal credentials, user-specific API keys |
| **[Org-Level](/support/docs/hyperexecute-how-to-save-and-manage-secrets/#org-level-secrets)** *(Enterprise only)* | Shared across all users and projects in the organization, managed by admins | Org-wide API keys, shared access tokens |
| **[Project-Level](/support/docs/hyperexecute-how-to-save-and-manage-secrets/#managing-project-level-secrets)** | Scoped to a specific project, shared across all users on the project | Project-specific credentials, team-shared keys |

Secrets are stored as `key:value` pairs where **values** are encrypted and not visible to anyone. They can only be [updated](/support/docs/hyperexecute-how-to-save-and-manage-secrets/#update-your-existing-secrets) with a new value.

## Create a New Secret

Follow the steps mentioned to seamlessly add new secrets to HyperExecute and ensure their safe storage:

**Step 1:** Navigate to the **Secrets Section** in the top right corner of the HyperExecute dashboard.

**Step 2:** Click on the **Add a Secret** button to create a New Secret.

**Step 3:** Provide a descriptive **Key Name** and then enter your secret **Value**. This could be a password, API key, or any other credential.

**Step 4:** Click on **Add Secret** button and your secret will be stored safely within HyperExecute's system.

## Update Your Existing Secrets

Follow the steps mentioned to update your secrets values to HyperExecute and ensure their safe storage:

**Step 1:** Navigate to the **Secrets Section** in the top right corner of the HyperExecute dashboard.

**Step 2:** Click on the **...** and then **Edit** button of the secret you want to update.

**Step 3:** Enter updated value of the secret.

**Step 4:** Click on Edit Secret Value to complete the editing.

## Delete the Secrets

Follow the steps mentioned to delete your secrets values from the HyperExecute:

**Step 1:** Navigate to the **Secrets Section** in the top right corner of the HyperExecute dashboard.

**Step 2:** Click on the **...** and then **Delete** button of the secret you want to delete.

**Step 3:** Click on **Confirm Deletion** button to delete your secret.

## Using Secrets in YAML

During HyperExecute test execution, you might need to access sensitive information like environment variables or access tokens. This section guides you on how to securely integrate these secrets into your YAML file.

Consider these secret key names: `secretKey1` and `secretKey2`.

```yaml
version: 0.1
env:
MyKey1: ${{.secrets.token}}

runson: win
testDiscovery:
type: raw
mode: remote
args:
featureFilePath: ${Path}

testRunnerCommand: npm run --username abc --password ${{.secrets.SecretKey2}}
```

- The `env` and `vars` sections within your YAML file are used to define variables.
- The syntax `{{.secrets.secretKey1}}` allows you to access the corresponding secret value stored securely in HyperExecute.

In the above sample YAML file:

- **MyKey1** in the env section uses `secretKey1`.
- **MyKey2** in the vars section uses `secretKey2`.
- **testRunnerCommand** utilizes `secretKey2` for the password.

- By using secrets within your YAML file, you avoid embedding sensitive information directly in your code, enhancing security.
- HyperExecute securely retrieves these secrets from its storage i.e. **HashiCorp Vault** at runtime, ensuring they are not exposed during code sharing or storage.

## Org-Level Secrets

Org-level secrets are organization-wide secrets that are shared across all projects and users within the organization. They are managed by organization admins and are useful for storing shared credentials like API keys, access tokens, or service account credentials that the entire team needs access to.

Org-level secrets are an **enterprise-only** feature. Contact your account team or **24×7 chat support** to enable this for your organization.

## Managing Project-Level Secrets

Secrets in TestMu AI HyperExecute are encrypted environment variables used to store sensitive data securely like **Access tokens**, **API Keys**, **Passwords**. Secrets are injected into your test environment at runtime, so you never expose them directly in your codebase or logs.

Managing sensitive information like API tokens, credentials, and access keys is crucial when running tests in TestMu AI HyperExecute. To address this, HyperExecute offers a Secrets Management system, and one of its powerful features is Project Level Secrets. This feature lets you define secrets scoped to a specific project, making secret handling more secure, easier, and collaborative for your teams.

## What Are Project Level Secrets?
Project-level secrets are bound to a specific HyperExecute project instead of a user or account. When a job runs using that project ( referenced by id or both id and name in the YAML configuration, which are sub-parameters of project parameter), the project-level secrets are automatically available to the test environment.

### Key Points
- Define secrets once per project.
- Use them across all jobs that reference the project.
- Simplifies managing secrets when multiple users or CI/CD pipelines access the same project.

## How to Add Project Level Secrets?
### Step 1: Create a Project

To begin, create a new project on the TestMu AI platform. Follow the instructions to [Create a Project](/support/docs/hyperexecute-projects/#setup-your-project)

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

project:
name: 'demo-project'
id: '1abc2345-56de-7890-f1cg-h2ij34k56789'

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
- **Centralized Management :** Keep all secrets related to a test framework or application in one place: the project.
- **Team Collaboration :** Multiple team members can access the same secrets via shared project access.
- **Simplified CI/CD Setup :** Reference your project in the YAML, and secrets are injected automatically without extra configuration.
- **Security :** Secrets remain encrypted and are never logged or exposed in your code.
- **Easy Maintenance :** Update secrets in one place when values change, and all users/jobs referencing the project get the updated secrets immediately.

By defining and managing secrets at the project level in TestMu AI HyperExecute, teams can ensure safer handling of sensitive data, reduce duplication efforts, and make test runs more consistent and secure.
