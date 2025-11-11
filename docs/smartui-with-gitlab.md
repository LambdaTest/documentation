---
id: smartui-with-gitlab
title: GitLab Pipeline Integration with SmartUI
sidebar_label: GitLab
description: SmartUI now integrates with GitLab Pipeline to boost your go-to market delivery. Perform automated cross browser testing with SmartUI to ensure your development code renders seamlessly providing 3000+ real browsers running through machines.
keywords:
  - lambdatest integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci cd
url: https://www.lambdatest.com/support/docs/smartui-with-gitlab/
site_name: LambdaTest
slug: smartui-with-gitlab/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "GitLab Pipeline Integration",
          "item": "https://www.lambdatest.com/support/docs/smartui-with-gitlab/"
        }]
      })
    }}
></script>
A GitLab Pipeline automates building, testing, and deploying code changes. It's essential for rapid development, improved code quality, and faster delivery by catching errors early and reducing manual work.

This document will show you how to integrate GitLab Pipeline with SmartUI to shorten your test cycles.

## Steps to Integrate GitLab Pipeline with SmartUI
To integrate GitLab Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations/tree/gitlab" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 1: Setup your Projects in GitLab
- Click on the **New Project** > **Run CI/CD for external repository**.
<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/1.png').default} alt="Create New Project" width="" height=""/>

- Enter your repository URL and click on Create Project.

### Step 2: Create a New Workflow
-  Navigate to the **Build** section > **Pipelines**.
<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/2.png').default} alt="Create New Project" width="" height=""/>

- Select your required template for CI/CD workflow file. For the demo we are using the Test template.
- Now, write your workflow YAML file. Here is the sample file for your reference.
- Commit this yaml file in your repository and make the required changes in your code to automatically trigger the pipeline.

```yaml reference title=".gitlab-ci.yml"
https://github.com/amanchopra1905/smartui-ci-cd-integrations/blob/gitlab/.gitlab-ci.yml
```

:::tip
You can also store your *LT_USERNAME*, *LT_ACCESS_KEY* and *PROJECT_TOKEN* as secrets in your GitLab project repository.
:::

### Step 3: Check the output

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://smartui.lambdatest.com/projects)

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/3.png').default} alt="Create New Project" width="" height=""/>

## Best Practices

<Tabs className="docs__val" groupId="best-practices">
<TabItem value="secret-management" label="Secret Management default>

### Secret Management

- Never commit credentials to repository
- Use GitLab CI/CD Variables for all sensitive data
- Rotate secrets regularly
- Use different secrets for different environments

</TabItem>
<TabItem value=pipeline-optimization" label="Pipeline Optimization >

### Pipeline Optimization

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

</TabItem>
<TabItem value=build-naming" label="Build Naming >

### Build Naming

- Use meaningful build names that include branch/commit info
- Include commit SHA for traceability
- Use consistent naming conventions

**Example:**
```yaml
variables:
  BUILD_NAME: MR-$CI_MERGE_REQUEST_IID-$CI_COMMIT_SHORT_SHA"
```

</TabItem>
<TabItem value="error-handling" label="Error Handling >

### Error Handling

- Set up proper error handling in pipelines
- Use pipeline status checks
- Configure notifications for failures
- Add retry logic for flaky tests

</TabItem>
<TabItem value=resource-management" label="Resource Management >

### Resource Management

- Limit concurrent pipeline runs
- Clean up old builds regularly
- Monitor pipeline execution time
- Optimize test execution order

</TabItem>
<TabItem value=resource-management" label="Resource Management >

### Resource Management

- Limit concurrent pipeline runs
- Clean up old builds regularly
- Monitor pipeline execution time
- Optimize test execution order

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className="docs__val" groupId="troubleshooting">
<TabItem value="pipeline-fails-with-variable-not-found" label="Pipeline Fails with Variable Not Found" default>

### Issue: Pipeline Fails with "Variable Not Found"

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

</TabItem>
<TabItem value="project_token-not-available" label="PROJECT_TOKEN Not Available >

### Issue: PROJECT_TOKEN Not Available

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

</TabItem>
<TabItem value=tests-run-but-no-results-in-dashboard" label="Tests Run But No Results in Dashboard >

### Issue: Tests Run But No Results in Dashboard

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

</TabItem>
<TabItem value=pipeline-times-out" label="Pipeline Times Out >

### Issue: Pipeline Times Out

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

</TabItem>
<TabItem value=dependencies-installation-fails" label="Dependencies Installation Fails >

### Issue: Dependencies Installation Fails

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

</TabItem>
<TabItem value=smartui-cli-not-found" label="SmartUI CLI Not Found >

### Issue: SmartUI CLI Not Found

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

### Getting Help

If you encounter issues not covered here:

- Review [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)
- Check [SmartUI CLI Documentation](/support/docs/smartui-cli) for CLI-specific issues
- Visit [LambdaTest Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@lambdatest.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [SmartUI CLI Documentation](/support/docs/smartui-cli)
- [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)
- [Project Settings](/support/docs/smartui-project-settings)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)

<nav aria-label="breadcrumbs>
  <ul className=breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        GitHub Integration
      </span>
    </li>
  </ul>
</nav>