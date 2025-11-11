---
id: smartui-with-azure
title: Azure Pipeline Integration with SmartUI
sidebar_label: Azure
description: SmartUI now integrates with Azure Pipeline to boost pipeline delivery. Perform automated cross browser testing with SmartUI to seamlessly providing 3000+ real browsers running through machines.
keywords:
  - lambdatest integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - azure ci cd
url: https://www.lambdatest.com/support/docs/smartui-with-azure/
site_name: LambdaTest
slug: smartui-with-azure/
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
          "name": "Azure Integration",
          "item": "https://www.lambdatest.com/support/docs/smartui-with-azure/"
        }]
      })
    }}
></script>
Azure Pipelines is a cloud-based CI/CD service offered by Microsoft, part of the Azure DevOps suite. It helps automate the process of building, testing, and deploying applications to various platforms.

This guide explains how to integrate your project with the Azure CI/CD pipeline to trigger visual regression testing with LambdaTest SmartUI whenever changes are made to your repository.

## Steps to Integrate Azure Pipeline with SmartUI
To integrate Azure Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::


### Step 1: Set Up Your Repository
Ensure your project is hosted in Azure Repos, GitHub, or any supported repository.

### Step 2: Create a New Pipeline:

- Navigate to Pipelines in your Azure DevOps project.
- Select New Pipeline and connect your repository.

### Step 3: Add Environment Variables

Go to Pipeline Settings > Variables. Add the following variables:
- `LT_USERNAME`: Your LambdaTest username.
- `LT_ACCESS_KEY`: Your LambdaTest access key.

### Step 4: Setup your Workflow
```yaml title="azure-pipelines.yml"
trigger:
  - '*'

variables:
  LT_USERNAME: $(LT_USERNAME)
  LT_ACCESS_KEY: $(LT_ACCESS_KEY)

jobs:
- job: SmartUI_Tests
  pool:
    vmImage: 'ubuntu-latest'

  steps:
  - task: UseNode@2
    inputs:
      version: '16.x'

  - script: |
      echo "Installing dependencies"
      npm install @lambdatest/smartui-cli
    displayName: 'Install Dependencies'

  - script: |
      echo "Running SmartUI tests"
      npx smartui --version
      npx smartui config:create smartui-web.json
      npx smartui --config smartui-web.json exec -- mvn --quiet test -D suite=sdk-cloud.xml
    displayName: 'Execute SmartUI Tests'
```

### Step 5: Check the output

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://smartui.lambdatest.com/projects)

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/3.png').default} alt="Create New Project" width="" height=""/>

## Best Practices

<Tabs className="docs__val" groupId="best-practices">
<TabItem value="secret-management" label="Secret Management" default>

### Secret Management

- Never commit credentials to repository
- Use Azure Pipeline Variables for all sensitive data
- Mark variables as secret to hide values in logs
- Rotate secrets regularly
- Use different secrets for different environments

</TabItem>
<TabItem value="pipeline-optimization" label="Pipeline Optimization" >

### Pipeline Optimization

- Use parallel jobs for faster execution
- Cache dependencies to speed up pipelines
- Only run visual tests on relevant branches
- Set up pipeline conditions to avoid unnecessary runs

**Example:**
```yaml
trigger:
  branches:
    include:
      - main
      - develop
```

</TabItem>
<TabItem value="build-naming" label="Build Naming" >

### Build Naming

- Use meaningful build names that include branch/commit info
- Include commit SHA for traceability
- Use consistent naming conventions

**Example:**
```yaml
variables:
  BUILD_NAME: "$(Build.SourceBranchName)-$(Build.SourceVersion)"
```

</TabItem>
<TabItem value="error-handling" label="Error Handling" >

### Error Handling

- Set up proper error handling in pipelines
- Use pipeline status checks
- Configure notifications for failures
- Add retry logic for flaky tests

</TabItem>
<TabItem value="resource-management" label="Resource Management" >

### Resource Management

- Limit concurrent pipeline runs
- Clean up old builds regularly
- Monitor pipeline execution time
- Optimize test execution order

</TabItem>
<TabItem value="resource-management" label="Resource Management" >

### Resource Management

- Limit concurrent pipeline runs
- Clean up old builds regularly
- Monitor pipeline execution time
- Optimize test execution order

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className="docs__val" groupId="troubleshooting">
<TabItem value="pipeline-fails-with-variable-not-found" label="Pipeline Fails with "Variable Not Found"" default>

### Issue: Pipeline Fails with "Variable Not Found"

**Symptoms**: Pipeline fails with error about missing variables

**Possible Causes**:
- Variables not created in Azure DevOps
- Variable names don't match
- Variables not accessible to pipeline
- Variable scope issues

**Solutions**:
1. Verify variables exist in pipeline settings:
   - Go to Pipelines → Edit → Variables
   - Check `LT_USERNAME`, `LT_ACCESS_KEY`, and `PROJECT_TOKEN` exist

2. Ensure variable names match exactly (case-sensitive)

3. Check variable scope (pipeline, stage, or job level)

4. Verify variables are marked as secret if needed

</TabItem>
<TabItem value="project_token-not-available" label="PROJECT_TOKEN Not Available" >

### Issue: PROJECT_TOKEN Not Available

**Symptoms**: Pipeline prompts for PROJECT_TOKEN or token not found

**Possible Causes**:
- PROJECT_TOKEN not set as pipeline variable
- Variable not passed to job
- Variable marked as secret incorrectly

**Solutions**:
1. Add PROJECT_TOKEN as Azure Pipeline Variable

2. Pass variable to job:
   ```yaml
   variables:
     PROJECT_TOKEN: $(PROJECT_TOKEN)
   ```

3. Check variable is accessible to the job

4. Verify variable scope includes your pipeline

</TabItem>
<TabItem value="tests-run-but-no-results-in-dashboard" label="Tests Run But No Results in Dashboard" >

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
   - task: PowerShell@2
     displayName: 'Check Logs'
     condition: failed()
     inputs:
       script: |
         Get-Content $(Agent.TempDirectory)/*.log
   ```

3. Verify network connectivity in pipeline

4. Check if SmartUI CLI step completed successfully

</TabItem>
<TabItem value="pipeline-times-out" label="Pipeline Times Out" >

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
   timeoutInMinutes: 60
   ```

2. Run tests in parallel using matrix:
   ```yaml
   strategy:
     matrix:
       TestGroup1:
         TEST_GROUP: 1
       TestGroup2:
         TEST_GROUP: 2
   ```

3. Optimize test execution
4. Split tests across multiple pipeline stages

</TabItem>
<TabItem value="dependencies-installation-fails" label="Dependencies Installation Fails" >

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
   - task: UseNode@2
     inputs:
       version: '18.x'
   ```

2. Clear npm cache:
   ```yaml
   - script: |
       npm cache clean --force
       npm install
   ```

3. Use package-lock.json for consistent installs

4. Check for version conflicts in package.json

</TabItem>
<TabItem value="smartui-cli-not-found" label="SmartUI CLI Not Found" >

### Issue: SmartUI CLI Not Found

**Symptoms**: `npx smartui` command fails with "command not found"

**Possible Causes**:
- Node.js not installed
- npm not available
- PATH issues

**Solutions**:
1. Ensure Node.js setup task is included:
   ```yaml
   - task: UseNode@2
     inputs:
       version: '18.x'
   ```

2. Verify npm is available:
   ```yaml
   - script: npm --version
   ```

3. Install SmartUI CLI explicitly:
   ```yaml
   - script: |
       npm install -g @lambdatest/smartui-cli
   ```

### Getting Help

If you encounter issues not covered here:

- Review [Azure Pipelines Documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/)
- Check [SmartUI CLI Documentation](/support/docs/smartui-cli) for CLI-specific issues
- Visit [LambdaTest Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@lambdatest.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI CLI Documentation](/support/docs/smartui-cli)
- [Azure Pipelines Documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/)
- [Project Settings](/support/docs/smartui-project-settings)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)