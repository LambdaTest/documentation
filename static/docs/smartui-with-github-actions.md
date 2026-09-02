# GitHub Actions Pipeline Integration with SmartUI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

GitHub Actions is a powerful automation and continuous integration/continuous delivery (CI/CD) platform built into GitHub. It allows you to create custom automated YAML workflows directly within your GitHub repositories. This helps you to build and test every pull request to your repository, or deploy merged pull requests to production.

This document will show you how to integrate GitHub Actions Pipeline with SmartUI to greatly shorten your test cycles.

## Steps to Integrate GitHub Actions Pipeline with SmartUI
To integrate GitHub Actions Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run the tests on the SmartUI.

 View on GitHub

### Step 1: Create your Secrets
- Click on the **Settings** of your repository.
- Go to the **Security** option > **Secrets and Variables** > **Actions**.
- Create your secrets with variable name **LT_USERNAME** and **LT_ACCESS_KEY**. You can fetch your credentials from the [Accounts and Settings dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).

### Step 2: Create a New Workflow
-  Navigate to the main page of the repository.
-  Under your repository name, click  **Actions**.
-  In the left sidebar, click the **New workflow** button.

### Step 3: Create the GitHub Actions workflow YAML file
To create the GitHub Actions pipeline YAML file, follow the sample command below:

```yaml reference title="github-actions.yml"
https://github.com/amanchopra1905/smartui-ci-cd-integrations/blob/main/.github/workflows/main.yml
```

### Step 4: Run the Workflow
To run the new pipeline that you just created, click the **Run workflow** button on the workflow page. A prompt will ask you to enter your **PROJECT_TOKEN**. You can get your project token from the dashboard after creating your SmartUI project.

> Check your output in the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/projects)

## Best Practices

**Secret Management**

- Never commit credentials to repository
- Use GitHub Secrets for all sensitive data
- Rotate secrets regularly
- Use different secrets for different environments

**Workflow Optimization**

- Use matrix strategies for parallel execution
- Cache dependencies to speed up workflows
- Only run visual tests on relevant branches
- Set up workflow conditions to avoid unnecessary runs

**Example:**
```yaml
on:
push:
branches: [ main, develop ]
pull_request:
branches: [ main ]
```

**Build Naming**

- Use meaningful build names that include branch/PR info
- Include commit SHA for traceability
- Use consistent naming conventions

**Example:**
```yaml
- name: Set build name
run: |
BUILD_NAME="PR-${{ github.event.pull_request.number }}-${{ github.sha }}"
echo "BUILD_NAME=$BUILD_NAME" >> $GITHUB_ENV
```

**Error Handling**

- Set up proper error handling in workflows
- Use workflow status checks
- Configure notifications for failures
- Add retry logic for flaky tests

**Resource Management**

- Limit concurrent workflow runs
- Clean up old builds regularly
- Monitor workflow execution time
- Optimize test execution order

**Resource Management**

- Limit concurrent workflow runs
- Clean up old builds regularly
- Monitor workflow execution time
- Optimize test execution order

## Troubleshooting

**Issue: Workflow Fails with "Secret Not Found"**

**Symptoms**: Workflow fails with error about missing secrets

**Possible Causes**:
- Secrets not created in repository
- Secret names don't match
- Secrets not accessible to workflow

**Solutions**:
1. Verify secrets exist in repository settings:
   - Go to Settings → Secrets and variables → Actions
   - Check `LT_USERNAME`, `LT_ACCESS_KEY`, and `PROJECT_TOKEN` exist

2. Ensure secret names match exactly (case-sensitive)

3. Check workflow has permission to access secrets

4. Verify secrets are set for the correct repository/environment

**Issue: PROJECT_TOKEN Prompt Appears**

**Symptoms**: Workflow prompts for PROJECT_TOKEN during execution

**Possible Causes**:
- PROJECT_TOKEN not set as secret
- Secret not passed to workflow step
- Workflow input not configured

**Solutions**:
1. Add PROJECT_TOKEN as GitHub Secret

2. Pass secret to workflow step:
```yaml
env:
PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}
```

3. For manual workflows, add workflow input:
```yaml
on:
workflow_dispatch:
inputs:
project_token:
required: true
type: string
```

**Issue: Tests Run But No Results in Dashboard**

**Symptoms**: Workflow completes but screenshots don't appear in SmartUI

**Possible Causes**:
- Incorrect PROJECT_TOKEN
- Project name mismatch
- Network issues
- Workflow step failure

**Solutions**:
1. Verify PROJECT_TOKEN is correct:
   - Check token in SmartUI Project Settings
   - Ensure token includes project ID prefix

2. Check workflow logs for errors:
```yaml
- name: View logs
if: failure()
run: |
# Check previous step logs
```

3. Verify network connectivity in workflow

4. Check if SmartUI CLI step completed successfully

**Issue: Workflow Times Out**

**Symptoms**: Workflow execution exceeds time limit

**Possible Causes**:
- Too many tests running
- Slow test execution
- Network latency
- Resource constraints

**Solutions**:
1. Increase workflow timeout:
```yaml
timeout-minutes: 60
```

2. Run tests in parallel using matrix:
```yaml
strategy:
matrix:
test-group: [1, 2, 3]
```

3. Optimize test execution
4. Split tests across multiple workflows

**Issue: Dependencies Installation Fails**

**Symptoms**: npm install or dependency installation fails

**Possible Causes**:
- Network issues
- Package registry problems
- Version conflicts
- Node version mismatch

**Solutions**:
1. Use specific Node version:
```yaml
- uses: actions/setup-node@v3
with:
node-version: '18'
```

2. Clear npm cache:
```yaml
- run: npm cache clean --force
```

3. Use package-lock.json for consistent installs

4. Check for version conflicts in package.json

**Issue: SmartUI CLI Not Found**

**Symptoms**: `npx smartui` command fails with command not found"

**Possible Causes**:
- Node.js not installed
- npm not available
- PATH issues

**Solutions**:
1. Ensure Node.js setup step is included:
```yaml
- uses: actions/setup-node@v3
with:
node-version: '18'
```

2. Verify npm is available:
```yaml
- run: npm --version
```

3. Install SmartUI CLI explicitly:
```yaml
- run: npm install -g @lambdatest/smartui-cli
```

**Getting Help**

If you encounter issues not covered here:

- Review [GitHub Actions Documentation](https://docs.github.com/en/actions)
- Check [SmartUI CLI Documentation](/support/docs/smartui-cli-complete-reference/) for CLI-specific issues
- Visit [TestMu AI Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

## Additional Resources

- [SmartUI CLI Documentation](/support/docs/smartui-cli-complete-reference/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Project Settings](/support/docs/smartui-project-settings)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
