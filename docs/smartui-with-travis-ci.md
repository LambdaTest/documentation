---
id: smartui-with-travis-ci
title: Travis CI Pipeline Integration with SmartUI
sidebar_label: Travis CI
description: SmartUI now integrates with Travis CI Pipeline to boost pipeline delivery. Perform automated cross browser testing with SmartUI to seamlessly providing 3000+ real browsers running through machines.
keywords:
  - testmu ai integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - Travis CI ci cd
url: https://www.testmuai.com/support/docs/smartui-with-travis-ci/
site_name: TestMu AI
slug: smartui-with-travis-ci/
canonical: https://www.testmuai.com/support/docs/smartui-with-travis-ci/

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
          "name": "Travis CI Integration",
          "item": `${BRAND_URL}/support/docs/smartui-with-travis-ci/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-with-travis-ci/"
    },
    "headline": "Travis CI Pipeline Integration with SmartUI",
    "description": "SmartUI now integrates with Travis CI Pipeline to boost pipeline delivery. Perform automated cross browser testing with SmartUI to seamlessly providing 3000+ real browsers running through machines.",
    "url": "https://www.testmuai.com/support/docs/smartui-with-travis-ci/",
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
        "name": "script",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Step 5: Check the output\n\n- After triggering the workflow, check your results in the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/projects)\n\n<img loading=\"lazy\" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/3.png').default} alt=\"Create New Project\" width=\"\" height=\"\"/>\n\n## Best Practices\n\n<Tabs className='docs__val' groupId='best-practices'>\n<TabItem value='secret-management' label='Secret Management' default>\n\n**Secret Management**\n\n- Never commit credentials to repository\n- Use Travis CI Environment Variables for all sensitive data\n- Mark variables as secret to hide values in logs\n- Rotate secrets regularly\n- Use different secrets for different environments\n\n<\/TabItem>\n<TabItem value='pipeline-optimization' label='Pipeline Optimization'>\n\n**Pipeline Optimization**\n\n- Use matrix builds for parallel execution\n- Cache dependencies to speed up pipelines\n- Only run visual tests on relevant branches\n- Set up pipeline conditions to avoid unnecessary runs\n\n**Example:**\n```yaml\nbranches:\n  only:\n    - main\n    - develop"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 2",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "env:\n  global:\n    - BUILD_NAME=\"${TRAVIS_BRANCH}-${TRAVIS_COMMIT:0:7}\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Pass variable to build",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   env:\n     global:\n       - PROJECT_TOKEN=$PROJECT_TOKEN"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Check build logs for errors",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   after_failure:\n     - cat /tmp/*.log || true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run tests in parallel using matrix",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   matrix:\n     include:\n       - env: TEST_GROUP=1\n       - env: TEST_GROUP=2"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use specific Node version",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   node_js:\n     - \"18\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clear npm cache",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   before_install:\n     - npm cache clean --force"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Ensure Node.js is specified",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   node_js:\n     - \"18\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify npm is available",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   before_script:\n     - npm --version"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install SmartUI CLI explicitly",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "   before_script:\n     - npm install -g @lambdatest/smartui-cli"
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
      "name": "Steps to Integrate Travis CI Pipeline with SmartUI",
      "description": "To integrate Travis CI Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository. Download or Clone the code sample from the TestMu AI GitHub repository to run the tests on the SmartUI.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Set Up Your Repository",
          "text": "Ensure your project is hosted in GitHub, or any supported repository.",
          "url": "https://www.testmuai.com/support/docs/smartui-with-travis-ci/#step-1-set-up-your-repository"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Create a New Pipeline:",
          "text": "Navigate to Pipelines in your TravisCI project. Select New Pipeline and connect your repository.",
          "url": "https://www.testmuai.com/support/docs/smartui-with-travis-ci/#step-2-create-a-new-pipeline"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Add Environment Variables",
          "text": "Go to Pipeline Settings > Variables. Add the following variables: LT_USERNAME: Your TestMu AI username. LTACCESSKEY: Your TestMu AI access key.",
          "url": "https://www.testmuai.com/support/docs/smartui-with-travis-ci/#step-3-add-environment-variables"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Setup your Workflow",
          "text": "Step 4: Setup your Workflow",
          "url": "https://www.testmuai.com/support/docs/smartui-with-travis-ci/#step-4-setup-your-workflow"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Check the output",
          "text": "After triggering the workflow, check your results in the SmartUI Dashboard",
          "url": "https://www.testmuai.com/support/docs/smartui-with-travis-ci/#step-5-check-the-output"
        }
      ]
    }
  ]) }}
/>
Travis CI is one of the most popular CI/CD platforms, known for its simplicity and support for open-source projects. It provides continuous integration for projects hosted on GitHub and Bitbucket.

This guide explains how to integrate your project with the Travis CI CI/CD pipeline to trigger visual regression testing with <BrandName /> SmartUI whenever changes are made to your repository.

## Steps to Integrate Travis CI Pipeline with SmartUI
To integrate Travis CI Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations" target="_blank" className='github__anchor'><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className='doc_img'/> View on GitHub</a>
:::

### Step 1: Set Up Your Repository
Ensure your project is hosted in GitHub, or any supported repository.

### Step 2: Create a New Pipeline:

- Navigate to Pipelines in your TravisCI project.
- Select New Pipeline and connect your repository.

### Step 3: Add Environment Variables

Go to Pipeline Settings > Variables. Add the following variables:
- `LT_USERNAME`: Your <BrandName /> username.
- `LT_ACCESS_KEY`: Your <BrandName /> access key.

### Step 4: Setup your Workflow

<VerifiedTag value="Verified" />

```yaml title=".travis.yml"
language: node_js
node_js:
  - "16"

env:
  global:
    - LT_USERNAME=${LT_USERNAME}
    - LT_ACCESS_KEY=${LT_ACCESS_KEY}

script:
  - echo "Installing SmartUI CLI"
  - npm install @lambdatest/smartui-cli
  - echo "Running SmartUI tests"
  - npx smartui --version
  - npx smartui config:create smartui-web.json
  - npx smartui --config smartui-web.json exec -- mvn --quiet test -D suite=sdk-cloud.xml
```

### Step 5: Check the output

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/projects)

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/3.png').default} alt="Create New Project" width="" height=""/>

## Best Practices

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='secret-management' label='Secret Management' default>

**Secret Management**

- Never commit credentials to repository
- Use Travis CI Environment Variables for all sensitive data
- Mark variables as secret to hide values in logs
- Rotate secrets regularly
- Use different secrets for different environments

</TabItem>
<TabItem value='pipeline-optimization' label='Pipeline Optimization'>

**Pipeline Optimization**

- Use matrix builds for parallel execution
- Cache dependencies to speed up pipelines
- Only run visual tests on relevant branches
- Set up pipeline conditions to avoid unnecessary runs

**Example:**
```yaml
branches:
  only:
    - main
    - develop
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
  global:
    - BUILD_NAME="${TRAVIS_BRANCH}-${TRAVIS_COMMIT:0:7}"
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

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='pipeline-fails-with-variable-not-found' label='Pipeline Fails with Variable Not Found' default>

**Issue: Pipeline Fails with "Variable Not Found"**

**Symptoms**: Pipeline fails with error about missing environment variables

**Possible Causes**:
- Variables not created in Travis CI project
- Variable names don't match
- Variables not accessible to build
- Variable scope issues

**Solutions**:
1. Verify variables exist in repository settings:
   - Go to Repository Settings → Environment Variables
   - Check `LT_USERNAME`, `LT_ACCESS_KEY`, and `PROJECT_TOKEN` exist

2. Ensure variable names match exactly (case-sensitive)

3. Check variable scope (public or private)

4. Verify variables are not displayed in logs if marked as secret

</TabItem>
<TabItem value='project_token-not-available' label='PROJECT_TOKEN Not Available'>

**Issue: PROJECT_TOKEN Not Available**

**Symptoms**: Pipeline prompts for PROJECT_TOKEN or token not found

**Possible Causes**:
- PROJECT_TOKEN not set as environment variable
- Variable not passed to build
- Variable marked as secret incorrectly

**Solutions**:
1. Add PROJECT_TOKEN as Travis CI Environment Variable

2. Pass variable to build:
   ```yaml
   env:
     global:
       - PROJECT_TOKEN=$PROJECT_TOKEN
   ```

3. Check variable is accessible to the build

4. Verify variable scope includes your repository

</TabItem>
<TabItem value='tests-run-but-no-results-in-dashboard' label='Tests Run But No Results in Dashboard'>

**Issue: Tests Run But No Results in Dashboard**

**Symptoms**: Pipeline completes but screenshots don't appear in SmartUI

**Possible Causes**:
- Incorrect PROJECT_TOKEN
- Project name mismatch
- Network issues
- Pipeline build failure

**Solutions**:
1. Verify PROJECT_TOKEN is correct:
   - Check token in SmartUI Project Settings
   - Ensure token includes project ID prefix

2. Check build logs for errors:
   ```yaml
   after_failure:
     - cat /tmp/*.log || true
   ```

3. Verify network connectivity in build

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
1. Increase build timeout in Travis CI settings

2. Run tests in parallel using matrix:
   ```yaml
   matrix:
     include:
       - env: TEST_GROUP=1
       - env: TEST_GROUP=2
   ```

3. Optimize test execution
4. Split tests across multiple build jobs

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
   node_js:
     - "18"
   ```

2. Clear npm cache:
   ```yaml
   before_install:
     - npm cache clean --force
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
1. Ensure Node.js is specified:
   ```yaml
   node_js:
     - "18"
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

- Review [Travis CI Documentation](https://docs.travis-ci.com/)
- Check [SmartUI CLI Documentation](/support/docs/smartui-cli) for CLI-specific issues
- Visit [<BrandName /> Support](https://www.testmuai.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support)

</TabItem>
</Tabs>


## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI CLI Documentation](/support/docs/smartui-cli)
- [Travis CI Documentation](https://docs.travis-ci.com/)
- [Project Settings](/support/docs/smartui-project-settings)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
