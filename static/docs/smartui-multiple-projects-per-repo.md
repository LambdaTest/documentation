# Configure Multiple Projects per repo

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

SmartUI allows you to manage and test UI components effectively within a single repository. By organizing multiple projects in a single repository, you can centralize your workflows and streamline collaboration. This guide will walk you through setting up multiple projects in a repository for SmartUI and how you can trigger the same via GitHub Actions pipeline.

## Setting Up Multiple Projects in a Repository

### Prerequisites
- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Your SmartUI Project Token

### Step 1: Organize Your Repository
Create a repository where you can organize your projects into various directories. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run the tests on the SmartUI.
 View on GitHub

### Step 2: Create your Secrets
- Click on the **Settings** of your repository.
- Go to the **Security** option > **Secrets and Variables** > **Actions**.
- Create your secrets with variable name **LT_USERNAME** and **LT_ACCESS_KEY**. You can fetch your credentials from the [Accounts and Settings](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security) dashboard.

### Step 3: Create your GitHub Actions Workflow
- Navigate to the main page of the repository.
- Under your repository name, click **Actions**.
- In the left sidebar, click the **New workflow** button.

```yaml reference
https://github.com/LambdaTest/smartui-monorepo-sample/blob/main/.github/workflows/main.yml
```

### Step 4: Execute your projects
- Click on the **Actions** button of your repository to trigger the pipeline.
- Provide the **PROJECT TOKEN** to trigger your code projects.
- Go to the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) to check the results.
