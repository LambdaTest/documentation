---
id: smartui-with-bitbucket
title: Bitbucket Pipeline Integration with SmartUI
sidebar_label: Bitbucket
description: SmartUI now integrates with Bitbucket Pipeline to boost pipeline delivery. Perform automated cross browser testing with SmartUI to seamlessly providing 3000+ real browsers running through machines.
keywords:
  - testmu ai integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - bitbucket ci cd
url: https://www.testmu.ai/support/docs/smartui-with-bitbucket/
site_name: LambdaTest
slug: smartui-with-bitbucket/
canonical: https://www.testmu.ai/support/docs/smartui-with-bitbucket/

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
          "name": "Bitbucket Integration",
          "item": `${BRAND_URL}/support/docs/smartui-with-bitbucket/`
        }]
      })
    }}
></script>
Bitbucket is a web-based version control repository hosting service owned by Atlassian. It is primarily designed for development teams to manage their code, collaborate on projects, and streamline their workflows.

This document will show you how to integrate Bitbucket Pipeline with SmartUI to shorten your test cycles.

## Steps to Integrate Bitbucket Pipeline with SmartUI
To integrate Bitbucket Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations/tree/bitbucket" target="_blank" className='github__anchor'><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className='doc_img'/> View on GitHub</a>
:::

### Step 1: Setup your Projects and Repository in Bitbucket
- Click on the **Create** >> **Project**.
- Enter your Project details and click on **Create Project**.
<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/bitbucket/1.png').default} alt="Create New Project" />

- Now click on the **Create Repository** button. You can either create a new repository or import your existing repository.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/bitbucket/2.png').default} alt="Create New Project" />

### Step 2: Create a New Workflow
- Navigate to the **Deployment** section. Select your required template for CI/CD workflow file. For the demo we are using the Test template.
- Now, write your workflow YAML file. Here is the sample file for your reference.
- Commit this yaml file in your repository and make the required changes in your code to automatically trigger the pipeline.

```yaml reference title="bitbucket-pipelines.yml"
https://github.com/amanchopra1905/smartui-ci-cd-integrations/blob/bitbucket/bitbucket-pipelines.yml
```

:::tip
You can also store your *LT_USERNAME*, *LT_ACCESS_KEY* and *PROJECT_TOKEN* as secrets in your Bitbucket project repository.
:::

### Step 3: Check the output

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://smartui.lambdatest.com/projects)

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/3.png').default} alt="Create New Project" width="" height=""/>

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='secret-management' label='Secret Management' default>

**Secret Management**

- Never commit credentials to repository
- Use Bitbucket Pipelines Variables for all sensitive data
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
branches:
  main:
    - step:
        name: Run Visual Tests
```

</TabItem>
<TabItem value='build-naming' label='Build Naming'>

**Build Naming**

- Use meaningful build names that include branch/commit info
- Include commit SHA for traceability
- Use consistent naming conventions

**Example:**
```yaml
variables:
  BUILD_NAME: $BITBUCKET_BRANCH-$BITBUCKET_COMMIT"
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

**Symptoms**: Pipeline fails with error about missing variables

**Possible Causes**:
- Variables not created in Bitbucket repository
- Variable names don't match
- Variables not accessible to pipeline

**Solutions**:
1. Verify variables exist in repository settings:
   - Go to Repository Settings → Pipelines → Repository variables
   - Check `LT_USERNAME`, `LT_ACCESS_KEY`, and `PROJECT_TOKEN` exist

2. Ensure variable names match exactly (case-sensitive)

3. Check variable scope (repository, workspace, or deployment level)

4. Verify variables are secured if needed

</TabItem>
<TabItem value='project_token-not-available' label='PROJECT_TOKEN Not Available'>

**Issue: PROJECT_TOKEN Not Available**

**Symptoms**: Pipeline prompts for PROJECT_TOKEN or token not found

**Possible Causes**:
- PROJECT_TOKEN not set as repository variable
- Variable not passed to step
- Variable secured incorrectly

**Solutions**:
1. Add PROJECT_TOKEN as Bitbucket Repository Variable

2. Pass variable to step:
   ```yaml
   variables:
     PROJECT_TOKEN: $PROJECT_TOKEN
   ```

3. Check variable is secured if needed

4. Verify variable scope includes your branch

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
   after-script:
     - echo Checking logs..."
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
1. Increase pipeline timeout in Bitbucket settings

2. Run tests in parallel using parallel steps:
   ```yaml
   parallel:
     - step:
         name: Test Group 1
     - step:
         name: Test Group 2
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
   image: node:18
   ```

2. Clear npm cache:
   ```yaml
   script:
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
   script:
     - npm --version
   ```

3. Install SmartUI CLI explicitly:
   ```yaml
   script:
     - npm install -g @lambdatest/smartui-cli
   ```

**Getting Help**

If you encounter issues not covered here:

- Review [Bitbucket Pipelines Documentation](https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/)
- Check [SmartUI CLI Documentation](/support/docs/smartui-cli) for CLI-specific issues
- Visit [<BrandName /> Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [SmartUI CLI Documentation](/support/docs/smartui-cli)
- [Bitbucket Pipelines Documentation](https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/)
- [Project Settings](/support/docs/smartui-project-settings)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)