# GitLab Pipeline Integration with SmartUI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

A GitLab Pipeline automates building, testing, and deploying code changes. It's essential for rapid development, improved code quality, and faster delivery by catching errors early and reducing manual work.

This document will show you how to integrate GitLab Pipeline with SmartUI to shorten your test cycles.

## Steps to Integrate GitLab Pipeline with SmartUI
To integrate GitLab Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run the tests on the SmartUI.

 View on GitHub

### Step 1: Setup your Projects in GitLab
- Click on the **New Project** > **Run CI/CD for external repository**.

- Enter your repository URL and click on Create Project.

### Step 2: Create a New Workflow
-  Navigate to the **Build** section > **Pipelines**.

- Select your required template for CI/CD workflow file. For the demo we are using the Test template.
- Now, write your workflow YAML file. Here is the sample file for your reference.
- Commit this yaml file in your repository and make the required changes in your code to automatically trigger the pipeline.

```yaml reference title=".gitlab-ci.yml"
https://github.com/amanchopra1905/smartui-ci-cd-integrations/blob/gitlab/.gitlab-ci.yml
```

You can also store your *LT_USERNAME*, *LT_ACCESS_KEY* and *PROJECT_TOKEN* as secrets in your GitLab project repository.

### Step 3: Check the output

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/projects)

## Best Practices

**Secret Management**

- Never commit credentials to repository
- Use GitLab CI/CD Variables for all sensitive data
- Rotate secrets regularly
- Use different secrets for different environments

**Pipeline Optimization**

- Use parallel jobs for faster execution
- Cache dependencies to speed up pipelines
- Only run visual tests on relevant branches
- Set up pipeline conditions to avoid unnecessary runs

**Example:**
```yaml
only:
- main
- develop
- merge_requests
```

**Build Naming**

- Use meaningful build names that include branch/commit info
- Include commit SHA for traceability
- Use consistent naming conventions

**Example:**
```yaml
variables:
BUILD_NAME: MR-$CI_MERGE_REQUEST_IID-$CI_COMMIT_SHORT_SHA"
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

**Issue: Pipeline Fails with "Variable Not Found"**

**Symptoms**: Pipeline fails with error about missing CI/CD variables

**Possible Causes**:
- Variables not created in GitLab project
- Variable names don't match
- Variables not accessible to pipeline

**Solutions**:
1. Verify variables exist in project settings:
   - Go to Settings → CI/CD → Variables
   - Check `LT_USERNAME`, `LT_ACCESS_KEY`, and `PROJECT_TOKEN` exist

2. Ensure variable names match exactly (case-sensitive)

3. Check variable scope (project, group, or instance level)

4. Verify variables are not protected if needed for protected branches

**Issue: PROJECT_TOKEN Not Available**

**Symptoms**: Pipeline prompts for PROJECT_TOKEN or token not found

**Possible Causes**:
- PROJECT_TOKEN not set as CI/CD variable
- Variable not passed to job
- Variable masked or protected incorrectly

**Solutions**:
1. Add PROJECT_TOKEN as GitLab CI/CD Variable

2. Pass variable to job:
```yaml
variables:
PROJECT_TOKEN: $PROJECT_TOKEN
```

3. Check variable is not masked if you need to see it in logs

4. Verify variable scope includes your branch

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
after_script:
- if [ $CI_JOB_STATUS == 'failed' ]; then cat job.log; fi
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
1. Increase pipeline timeout:
```yaml
default:
timeout: 1h
```

2. Run tests in parallel using parallel jobs:
```yaml
parallel:
matrix:
- TEST_GROUP: [1, 2, 3]
```

3. Optimize test execution
4. Split tests across multiple pipeline stages

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
image: node:18
```

2. Clear npm cache:
```yaml
before_script:
- npm cache clean --force
```

3. Use package-lock.json for consistent installs

4. Check for version conflicts in package.json

**Issue: SmartUI CLI Not Found**

**Symptoms**: `npx smartui` command fails with command not found"

**Possible Causes**:
- Node.js not available in image
- npm not available
- PATH issues

**Solutions**:
1. Ensure Node.js is available:
```yaml
image: node:18
```

2. Verify npm is available:
```yaml
before_script:
- npm --version
```

3. Install SmartUI CLI explicitly:
```yaml
before_script:
- npm install -g @lambdatest/smartui-cli
```

**Getting Help**

If you encounter issues not covered here:

- Review [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)
- Check [SmartUI CLI Documentation](/support/docs/smartui-cli) for CLI-specific issues
- Visit [TestMu AI Support](https://www.testmuai.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support)

## Additional Resources

- [SmartUI CLI Documentation](/support/docs/smartui-cli)
- [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)
- [Project Settings](/support/docs/smartui-project-settings)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
