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
