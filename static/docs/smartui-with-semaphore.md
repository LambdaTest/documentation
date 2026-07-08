# Semaphore Pipeline Integration with SmartUI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Semaphore is a modern CI/CD (Continuous Integration and Continuous Delivery) platform designed for developers to automate the process of building, testing, and deploying software.

This guide explains how to integrate your project with the Semaphore CI/CD pipeline to trigger visual regression testing with TestMu AI SmartUI whenever changes are made to your repository.

## Steps to Integrate Semaphore Pipeline with SmartUI
To integrate Semaphore Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run the tests on the SmartUI.

 View on GitHub

### Step 1: Create your Project
- Click on the **Create New** >> **Choose Repository**.
- Select your desired repository from your VCS (GitHub or Bitbucket)

### Step 2: Setup your Workflow
- Select your desired build tool and edit your workflow as per your requirement. A sample workflow is given for your reference:
- Click on **Run the Workflow** button to trigger your tests
```yaml reference title="semaphore.yml"
https://github.com/amanchopra1905/smartui-ci-cd-integrations/blob/semaphore/.semaphore/semaphore.yml
```

You can also store your *LT_USERNAME*, *LT_ACCESS_KEY* and *PROJECT_TOKEN* as secrets in your Semaphore project repository.

### Step 3: Check the output

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/projects)

## Best Practices

**Secret Management**

- Never commit credentials to repository
- Use Semaphore Secrets for all sensitive data
- Rotate secrets regularly
- Use different secrets for different environments

**Pipeline Optimization**

- Use parallel blocks for faster execution
- Cache dependencies to speed up pipelines
- Only run visual tests on relevant branches
- Set up pipeline conditions to avoid unnecessary runs

**Example:**
```yaml
auto_cancel:
running:
when: branch != 'main'"
```

**Build Naming**

- Use meaningful build names that include branch/commit info
- Include commit SHA for traceability
- Use consistent naming conventions

**Example:**
```yaml
env_vars:
- name: BUILD_NAME
value: ${SEMAPHORE_GIT_BRANCH}-${SEMAPHORE_GIT_SHA}"
```

**Error Handling**

- Set up proper error handling in pipelines
- Use pipeline status checks
- Configure notifications for failures
- Add retry logic for flaky tests

**Resource Management**

- Limit concurrent pipeline runs
- Clean up old builds regularly
- Monitor pipeline execution time
- Optimize test execution order

**Resource Management**

- Limit concurrent pipeline runs
- Clean up old builds regularly
- Monitor pipeline execution time
- Optimize test execution order

## Troubleshooting

**Issue: Pipeline Fails with "Secret Not Found"**

**Symptoms**: Pipeline fails with error about missing secrets

**Possible Causes**:
- Secrets not created in Semaphore project
- Secret names don't match
- Secrets not accessible to pipeline
- Secret scope issues

**Solutions**:
1. Verify secrets exist in project settings:
   - Go to Project Settings → Secrets
   - Check `LT_USERNAME`, `LT_ACCESS_KEY`, and `PROJECT_TOKEN` exist

2. Ensure secret names match exactly (case-sensitive)

3. Check secret scope (project or organization level)

4. Verify secrets are accessible to the pipeline

**Issue: PROJECT_TOKEN Not Available**

**Symptoms**: Pipeline prompts for PROJECT_TOKEN or token not found

**Possible Causes**:
- PROJECT_TOKEN not set as secret
- Secret not passed to job
- Secret scope issues

**Solutions**:
1. Add PROJECT_TOKEN as Semaphore Secret

2. Pass secret to job:
```yaml
env_vars:
- name: PROJECT_TOKEN
value: ${PROJECT_TOKEN}
```

3. Check secret is accessible to the pipeline

4. Verify secret scope includes your project

**Issue: Tests Run But No Results in Dashboard**

**Symptoms**: Pipeline completes but screenshots don't appear in SmartUI

**Possible Causes**:
- Incorrect PROJECT_TOKEN
- Project name mismatch
- Network issues
- Pipeline job failure

**Solutions**:
1. Verify PROJECT_TOKEN is correct:
   - Check token in SmartUI Project Settings
   - Ensure token includes project ID prefix

2. Check pipeline logs for errors:
```yaml
- name: Check Logs
commands:
- cat /tmp/*.log || true
```

3. Verify network connectivity in pipeline

4. Check if SmartUI CLI step completed successfully

**Issue: Pipeline Times Out**

**Symptoms**: Pipeline execution exceeds time limit

**Possible Causes**:
- Too many tests running
- Slow test execution
- Network latency
- Resource constraints

**Solutions**:
1. Increase pipeline timeout in Semaphore settings

2. Run tests in parallel using parallel blocks:
```yaml
blocks:
- name: Test Group 1
task:
jobs:
- name: Run Tests
commands:
- npx smartui exec -- <command">
- name: Test Group 2
task:
jobs:
- name: Run Tests
commands:
- npx smartui exec -- <command">
```

3. Optimize test execution
4. Split tests across multiple pipeline blocks

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
prologue:
commands:
- nvm use 18
```

2. Clear npm cache:
```yaml
commands:
- npm cache clean --force
- npm install
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
1. Ensure Node.js is available:
```yaml
prologue:
commands:
- nvm use 18
```

2. Verify npm is available:
```yaml
commands:
- npm --version
```

3. Install SmartUI CLI explicitly:
```yaml
commands:
- npm install -g @lambdatest/smartui-cli
```

**Getting Help**

If you encounter issues not covered here:

- Review [Semaphore Documentation](https://docs.semaphoreci.com/)
- Check [SmartUI CLI Documentation](/support/docs/smartui-cli) for CLI-specific issues
- Visit [TestMu AI Support](https://www.testmuai.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support)

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI CLI Documentation](/support/docs/smartui-cli)
- [Semaphore Documentation](https://docs.semaphoreci.com/)
- [Project Settings](/support/docs/smartui-project-settings)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
