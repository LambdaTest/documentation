---
id: smartui-with-buildkite
title: Buildkite Pipeline Integration with SmartUI
sidebar_label: Buildkite
description: SmartUI now integrates with Buildkite Pipeline to boost pipeline delivery. Perform automated cross browser testing with SmartUI to seamlessly providing 3000+ real browsers running through machines.
keywords:
  - testmu ai integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - buildkite ci cd
url: https://www.testmuai.com/support/docs/smartui-with-buildkite/
site_name: TestMu AI
slug: smartui-with-buildkite/
canonical: https://www.testmuai.com/support/docs/smartui-with-buildkite/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Buildkite Integration",
          "item": `${BRAND_URL}/support/docs/smartui-with-buildkite/`
        }]
      })
    }}
></script>
Buildkite is a hybrid CI/CD platform that allows you to run builds in your own infrastructure, alongside cloud-based execution. This means you can leverage the power of your existing machines or cloud resources to run builds.

This guide explains how to integrate your project with the Buildkite CI/CD pipeline to trigger visual regression testing with <BrandName /> SmartUI whenever changes are made to your repository.

## Steps to Integrate Buildkite Pipeline with SmartUI
To integrate Buildkite Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations" target="_blank" className='github__anchor'><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className='doc_img'/> View on GitHub</a>
:::

### Step 1: Set Up Your Repository
Ensure your project is hosted in GitHub, or any supported repository.

### Step 2: Create a New Pipeline:

- Navigate to Pipelines in your Buildkite project.
- Select New Pipeline and connect your repository.

### Step 3: Add Environment Variables

Go to Pipeline Settings > Variables. Add the following variables:
- `LT_USERNAME`: Your <BrandName /> username.
- `LT_ACCESS_KEY`: Your <BrandName /> access key.

### Step 4: Setup your Workflow

```yaml title="pipeline.yml"
steps:
  - label: "SmartUI Tests"
    agents:
      queue: "default"
    env:
      LT_USERNAME: "${LT_USERNAME}"
      LT_ACCESS_KEY: "${LT_ACCESS_KEY}"
    commands:
      - echo "Checking out code"
      - git clone <REPO_URL>
      - cd <PROJECT_DIRECTORY>
      - echo "Installing SmartUI CLI"
      - npm install @lambdatest/smartui-cli
      - echo "Running SmartUI tests"
      - npx smartui --version
      - npx smartui config:create smartui-web.json
      - npx smartui --config smartui-web.json exec -- mvn --quiet test -D suite=sdk-cloud.xml
```

### Step 5: Check the output

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://smartui.lambdatest.com/projects)

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/3.png').default} alt="Create New Project" width="" height=""/>

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='secret-management' label='Secret Management' default>

**Secret Management**

- Never commit credentials to repository
- Use Buildkite Environment Variables for all sensitive data
- Mark variables as secret to hide values in logs
- Rotate secrets regularly
- Use different secrets for different environments

</TabItem>
<TabItem value='pipeline-optimization' label='Pipeline Optimization'>

**Pipeline Optimization**

- Use parallel steps for faster execution
- Cache dependencies to speed up pipelines
- Only run visual tests on relevant branches
- Set up pipeline conditions to avoid unnecessary runs

**Example:**
```yaml
branches: main develop"
```

</TabItem>
<TabItem value='build-naming' label='Build Naming'>

**Build Naming**

- Use meaningful build names that include branch/commit info
- Include commit SHA for traceability
- Use consistent naming conventions

**Example:**
```yaml
env:
  BUILD_NAME: ${BUILDKITE_BRANCH}-${BUILDKITE_COMMIT:0:7}"
```

</TabItem>
<TabItem value='error-handling' label='Error Handling'>

**Error Handling**

- Set up proper error handling in pipelines
- Use pipeline status checks
- Configure notifications for failures
- Add retry logic for flaky tests

</TabItem>
<TabItem value='resource-management' label='Resource Management'>

**Resource Management**

- Limit concurrent pipeline runs
- Clean up old builds regularly
- Monitor pipeline execution time
- Optimize test execution order

</TabItem>
<TabItem value='resource-management-1' label='Resource Management'>

**Resource Management**

- Limit concurrent pipeline runs
- Clean up old builds regularly
- Monitor pipeline execution time
- Optimize test execution order

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='pipeline-fails-with-variable-not-found' label='Pipeline Fails with Variable Not Found' default>

**Issue: Pipeline Fails with "Variable Not Found"**

**Symptoms**: Pipeline fails with error about missing environment variables

**Possible Causes**:
- Variables not created in Buildkite project
- Variable names don't match
- Variables not accessible to pipeline
- Variable scope issues

**Solutions**:
1. Verify variables exist in project settings:
   - Go to Project Settings → Environment Variables
   - Check `LT_USERNAME`, `LT_ACCESS_KEY`, and `PROJECT_TOKEN` exist

2. Ensure variable names match exactly (case-sensitive)

3. Check variable scope (pipeline or organization level)

4. Verify variables are marked as secret if needed

</TabItem>
<TabItem value='project_token-not-available' label='PROJECT_TOKEN Not Available'>

**Issue: PROJECT_TOKEN Not Available**

**Symptoms**: Pipeline prompts for PROJECT_TOKEN or token not found

**Possible Causes**:
- PROJECT_TOKEN not set as environment variable
- Variable not passed to step
- Variable masked incorrectly

**Solutions**:
1. Add PROJECT_TOKEN as Buildkite Environment Variable

2. Pass variable to step:
   ```yaml
   env:
     PROJECT_TOKEN: ${PROJECT_TOKEN}"
   ```

3. Check variable is accessible to the pipeline

4. Verify variable scope includes your project

</TabItem>
<TabItem value='tests-run-but-no-results-in-dashboard' label='Tests Run But No Results in Dashboard'>

**Issue: Tests Run But No Results in Dashboard**

**Symptoms**: Pipeline completes but screenshots don't appear in SmartUI

**Possible Causes**:
- Incorrect PROJECT_TOKEN
- Project name mismatch
- Network issues
- Pipeline step failure

**Solutions**:
1. Verify PROJECT_TOKEN is correct:
   - Check token in SmartUI Project Settings
   - Ensure token includes project ID prefix

2. Check pipeline logs for errors:
   ```yaml
   - label: Check Logs"
     if: "build.state == 'failed'"
     commands:
       - cat /tmp/*.log || true
   ```

3. Verify network connectivity in pipeline

4. Check if SmartUI CLI step completed successfully

</TabItem>
<TabItem value='pipeline-times-out' label='Pipeline Times Out'>

**Issue: Pipeline Times Out**

**Symptoms**: Pipeline execution exceeds time limit

**Possible Causes**:
- Too many tests running
- Slow test execution
- Network latency
- Resource constraints

**Solutions**:
1. Increase pipeline timeout in Buildkite settings

2. Run tests in parallel using parallel steps:
   ```yaml
   - wait
   - parallel:
       - label: Test Group 1"
         commands:
           - npx smartui exec -- <command>
       - label: "Test Group 2"
         commands:
           - npx smartui exec -- <command>
   ```

3. Optimize test execution
4. Split tests across multiple pipeline steps

</TabItem>
<TabItem value='dependencies-installation-fails' label='Dependencies Installation Fails'>

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

</TabItem>
<TabItem value='smartui-cli-not-found' label='SmartUI CLI Not Found'>

**Issue: SmartUI CLI Not Found**

**Symptoms**: `npx smartui` command fails with command not found"

**Possible Causes**:
- Node.js not installed
- npm not available
- PATH issues

**Solutions**:
1. Ensure Node.js is available:
   ```yaml
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

- Review [Buildkite Documentation](https://buildkite.com/docs)
- Check [SmartUI CLI Documentation](/support/docs/smartui-cli) for CLI-specific issues
- Visit [<BrandName /> Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

</TabItem>
</Tabs>


## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI CLI Documentation](/support/docs/smartui-cli)
- [Buildkite Documentation](https://buildkite.com/docs)
- [Project Settings](/support/docs/smartui-project-settings)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
