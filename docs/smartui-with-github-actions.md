---
id: smartui-with-github-actions
title: GitHub Actions Pipeline Integration with SmartUI
sidebar_label: GitHub Actions
description: SmartUI now integrates with GitHub Actions Pipeline to boost your go-to market delivery. Perform automated cross browser testing with SmartUI to ensure your development code renders seamlessly providing 3000+ real browsers running through machines.
keywords:
  - testmu ai integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - github ci cd
url: https://www.testmuai.com/support/docs/smartui-with-github-actions/
site_name: TestMu AI
slug: smartui-with-github-actions/
canonical: https://www.testmu.ai/support/docs/smartui-with-github-actions/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "GitHub Actions Pipeline Integration",
          "item": `${BRAND_URL}/support/docs/smartui-with-github-actions/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/smartui-with-github-actions/"
    },
    "headline": "GitHub Actions Pipeline Integration with SmartUI",
    "description": "SmartUI now integrates with GitHub Actions Pipeline to boost your go-to market delivery. Perform automated cross browser testing with SmartUI to ensure your development code renders seamlessly providing 3000+ real browsers running through machines.",
    "url": "https://www.testmuai.com/support/docs/smartui-with-github-actions/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "testmu ai integrations",
      "smart ui integration",
      "smart ui integrations with ci/cd tools"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Create the GitHub Actions workflow YAML file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Step 4: Run the Workflow\nTo run the new pipeline that you just created, click the **Run workflow** button on the workflow page. A prompt will ask you to enter your **PROJECT_TOKEN**. You can get your project token from the dashboard after creating your SmartUI project.\n\n<img loading=\"lazy\" src={require('../assets/images/smart-visual-testing/ci-cd-integration/github-actions/github-actions.png').default} alt=\"Create New Project\" width=\"\" height=\"\"/>\n\n> Check your output in the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/projects)\n\n## Best Practices\n\n<Tabs className='docs__val' groupId='best-practices'>\n<TabItem value='secret-management' label='Secret Management' default>\n\n**Secret Management**\n\n- Never commit credentials to repository\n- Use GitHub Secrets for all sensitive data\n- Rotate secrets regularly\n- Use different secrets for different environments\n\n<\/TabItem>\n<TabItem value='workflow-optimization' label='Workflow Optimization'>\n\n**Workflow Optimization**\n\n- Use matrix strategies for parallel execution\n- Cache dependencies to speed up workflows\n- Only run visual tests on relevant branches\n- Set up workflow conditions to avoid unnecessary runs\n\n**Example:**\n```yaml\non:\n  push:\n    branches: [ main, develop ]\n  pull_request:\n    branches: [ main ]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 2",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "- name: Set build name\n  run: |\n    BUILD_NAME=\"PR-${{ github.event.pull_request.number }}-${{ github.sha }}\"\n    echo \"BUILD_NAME=$BUILD_NAME\" >> $GITHUB_ENV"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Pass secret to workflow step",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   env:\n     PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For manual workflows, add workflow input",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   on:\n     workflow_dispatch:\n       inputs:\n         project_token:\n           required: true\n           type: string"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Check workflow logs for errors",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   - name: View logs\n     if: failure()\n     run: |\n       # Check previous step logs"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Increase workflow timeout",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   timeout-minutes: 60"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run tests in parallel using matrix",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   strategy:\n     matrix:\n       test-group: [1, 2, 3]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use specific Node version",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   - uses: actions/setup-node@v3\n     with:\n       node-version: '18'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clear npm cache",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   - run: npm cache clean --force"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Ensure Node.js setup step is included",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   - uses: actions/setup-node@v3\n     with:\n       node-version: '18'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify npm is available",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   - run: npm --version"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install SmartUI CLI explicitly",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   - run: npm install -g @lambdatest/smartui-cli"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Steps to Integrate GitHub Actions Pipeline with SmartUI",
      "description": "To integrate GitHub Actions Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository. Download or Clone the code sample from the TestMu AI GitHub repository to run the tests on the SmartUI.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Create your Secrets",
          "text": "Click on the Settings of your repository. Go to the Security option > Secrets and Variables > Actions. Create your secrets with variable name LTUSERNAME and LTACCESSKEY**. You can fetch your credentials from the Accounts and Settings dashboard.",
          "url": "https://www.testmuai.com/support/docs/smartui-with-github-actions/#step-1-create-your-secrets"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Create a New Workflow",
          "text": "Navigate to the main page of the repository. Under your repository name, click Actions. In the left sidebar, click the New workflow button.",
          "url": "https://www.testmuai.com/support/docs/smartui-with-github-actions/#step-2-create-a-new-workflow"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Create the GitHub Actions workflow YAML file",
          "text": "To create the GitHub Actions pipeline YAML file, follow the sample command below:",
          "url": "https://www.testmuai.com/support/docs/smartui-with-github-actions/#step-3-create-the-github-actions-workflow-yaml-file"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run the Workflow",
          "text": "To run the new pipeline that you just created, click the Run workflow button on the workflow page. A prompt will ask you to enter your PROJECTTOKEN**. You can get your project token from the dashboard after creating your SmartUI project. Check your output in the SmartUI Dashboard",
          "url": "https://www.testmuai.com/support/docs/smartui-with-github-actions/#step-4-run-the-workflow"
        }
      ]
    }
  ]) }}
/>
GitHub Actions is a powerful automation and continuous integration/continuous delivery (CI/CD) platform built into GitHub. It allows you to create custom automated YAML workflows directly within your GitHub repositories. This helps you to build and test every pull request to your repository, or deploy merged pull requests to production.

This document will show you how to integrate GitHub Actions Pipeline with SmartUI to greatly shorten your test cycles.

## Steps to Integrate GitHub Actions Pipeline with SmartUI
To integrate GitHub Actions Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations" target="_blank" className='github__anchor'><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className='doc_img'/> View on GitHub</a>
:::

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

<VerifiedTag value="Verified" />

```yaml reference title="github-actions.yml"
https://github.com/amanchopra1905/smartui-ci-cd-integrations/blob/main/.github/workflows/main.yml
```

### Step 4: Run the Workflow
To run the new pipeline that you just created, click the **Run workflow** button on the workflow page. A prompt will ask you to enter your **PROJECT_TOKEN**. You can get your project token from the dashboard after creating your SmartUI project.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/github-actions/github-actions.png').default} alt="Create New Project" width="" height=""/>

> Check your output in the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/projects)

## Best Practices

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='secret-management' label='Secret Management' default>

**Secret Management**

- Never commit credentials to repository
- Use GitHub Secrets for all sensitive data
- Rotate secrets regularly
- Use different secrets for different environments

</TabItem>
<TabItem value='workflow-optimization' label='Workflow Optimization'>

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

</TabItem>
<TabItem value='build-naming' label='Build Naming'>

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

</TabItem>
<TabItem value='error-handling' label='Error Handling'>

**Error Handling**

- Set up proper error handling in workflows
- Use workflow status checks
- Configure notifications for failures
- Add retry logic for flaky tests

</TabItem>
<TabItem value='resource-management' label='Resource Management'>

**Resource Management**

- Limit concurrent workflow runs
- Clean up old builds regularly
- Monitor workflow execution time
- Optimize test execution order

</TabItem>
<TabItem value='resource-management-1' label='Resource Management'>

**Resource Management**

- Limit concurrent workflow runs
- Clean up old builds regularly
- Monitor workflow execution time
- Optimize test execution order

</TabItem>
</Tabs>

## Troubleshooting

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='workflow-fails-with-secret-not-found' label='Workflow Fails with Secret Not Found' default>

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

</TabItem>
<TabItem value='project_token-prompt-appears' label='PROJECT_TOKEN Prompt Appears'>

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

</TabItem>
<TabItem value='tests-run-but-no-results-in-dashboard' label='Tests Run But No Results in Dashboard'>

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

</TabItem>
<TabItem value='workflow-times-out' label='Workflow Times Out'>

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

</TabItem>
<TabItem value='smartui-cli-not-found' label='SmartUI CLI Not Found'>

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
- Check [SmartUI CLI Documentation](/support/docs/smartui-cli) for CLI-specific issues
- Visit [<BrandName /> Support](https://www.testmuai.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [SmartUI CLI Documentation](/support/docs/smartui-cli)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Project Settings](/support/docs/smartui-project-settings)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'>
        GitHub Integration
      </span>
    </li>
  </ul>
</nav>
