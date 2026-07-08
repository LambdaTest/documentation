# Utilizing KaneAI Secrets Feature: A Step-by-Step Guide

KaneAI now supports the use of secret variables to enhance security and streamline functionality. This feature leverages HashiCorp Vault for secure management of sensitive information, ensuring robust protection for your data while maintaining ease of use. This guide outlines the process for creating, managing, and utilizing secret variables within KaneAI.

- In Web/App Agent, users will see list of all secrets created at user or org level for that user.
- A user role can create only user level secrets, while an admin can create either user-level or org-level secrets.
- A user can delete their own secrets, but only an admin can delete org-level secrets.
- Secret variables will be accessible in test steps, modules, and test cases.

## How to Create Secrets and use them in your tests?
You can create Secrets variables via:
- Test Manager
- Web/App Agent

### Create Secrets via Test Manager
**Step 1:** Navigate to the Test Manager.
**Step 2:** Click on the settings icon > Secrets.
**Step 3:** Click on the **Create new secret** button.
**Step 4:** Provide the secret key and value and click on the **Create Secret** button.

### Create Secrets via Web/App Agent
**Step 1:** Navigate to the **"Write a Step"** field where you typically write your test scenarios in plain English.
**Step 2:** To switch to Secrets mode, type the forward slash / or click on the + icon. You will see a Secret pop-up option appear.
**Step 3:** Provide the secret key and value and click on the **Create Secret** button.

## How to use your Secrets?
Once created, you can now reference any secret variables in your test steps using **double-curly braces syntax (e.g.,`{{email}}`)**.

> To use a previously created variable in any subsequent step or test case, reference the variable using the same `{{` syntax. This will list down all existing variables for this test.

Format:
```bash
use the value of {{secrets.user.email}} in the email text field
```

## How to Update your Secrets?
**Step 1:** Navigate to the Test Manager.
**Step 2:** Click on the settings icon > Secrets.
**Step 3:** Click on the **pencil** icon to update that respective secret value.
**Step 4:** Provide the secret value and click on the **Update secret** button.

## How to Delete your Secrets?
**Step 1:** Navigate to the Test Manager.
**Step 2:** Click on the settings icon > Secrets.
**Step 3:** Click on the **delete** icon to update that respective secret value.
**Step 4:** Provide the secret value and click on the confirmation button.
