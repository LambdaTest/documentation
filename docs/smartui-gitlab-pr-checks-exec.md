---
id: smartui-gitlab-pr-checks-exec
title: GitLab PR Checks with SmartUI Exec (SDK)
sidebar_label: GitLab PR Checks (Exec)
description: Integrate SmartUI visual regression testing with GitLab merge requests using SmartUI SDK/Exec method for web and mobile testing with Selenium, Playwright, Appium, and more.
slug: smartui-gitlab-pr-checks-exec/
keywords:
  - GitLab PR checks
  - SmartUI SDK
  - SmartUI Exec
  - GitLab merge request integration
  - Visual regression testing
  - Selenium Playwright Appium
  - npx smartui exec
url: https://www.lambdatest.com/support/docs/smartui-gitlab-pr-checks-exec/
site_name: LambdaTest
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

This guide shows you how to integrate SmartUI visual regression testing with GitLab merge requests using the **SmartUI SDK/Exec method**. This works for both **web testing** (Selenium, Playwright, Cypress, Puppeteer) and **mobile app testing** (Appium, WebdriverIO) across all supported languages.

:::info SmartUI SDK/Exec vs Hooks

This guide covers the **SmartUI SDK/Exec approach**, where you use `npx smartui exec -- <command>` to run your tests. This is different from the Hooks approach:

**SmartUI SDK/Exec (This Guide):**
- ✅ Uses `npx smartui exec -- <your-test-command>`
- ✅ Works with Java SDK and CLI-based projects
- ✅ Requires SmartUI CLI installation
- ✅ Suitable for Selenium/Playwright/Cypress/Puppeteer/Appium
- ✅ Works with **web testing** (Selenium, Playwright, Cypress, Puppeteer)
- ✅ Works with **mobile app testing** (Appium, iOS/Android)

**SmartUI Hooks:**
- No `npx smartui exec` command needed
- Tests run normally (e.g., `npm test`, `mvn test`, `pytest`)
- SmartUI integration happens automatically through capabilities
- See [GitLab PR Checks with SmartUI Hooks](/support/docs/smartui-gitlab-pr-checks-hooks) for Hooks approach

:::

---

## Prerequisites

Before you begin, ensure you have:

- LambdaTest account with active subscription
- GitLab repository with CI/CD enabled
- SmartUI project created in [LambdaTest SmartUI Dashboard](https://smartui.lambdatest.com/)
- Test suite configured (Selenium/Playwright/Cypress/Puppeteer/Appium/WebdriverIO)
- Test framework configured in your preferred language (TypeScript/JavaScript/Java/Python/Ruby/C#)
- LambdaTest credentials (`LT_USERNAME` and `LT_ACCESS_KEY`)
- SmartUI CLI installed (or use `npx @lambdatest/smartui-cli`)

---

## Step 1: Integrate GitLab with LambdaTest

1. Go to [LambdaTest Integrations page](https://integrations.lambdatest.com/)
2. Search for **GitLab** and select the integration
3. Click on **OAuth** as your preferred authentication method
4. Click **Install** and authorize the integration
5. After successful authentication, refresh the Integrations page to verify GitLab is installed

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/1.png').default} alt="GitLab integration setup in LambdaTest" />

:::tip Integration Status

You can verify your GitLab integration is active by checking the [Integrations page](https://integrations.lambdatest.com/). The GitLab integration should show as "Installed" or "Active".

:::

---

## Step 2: Configure SmartUI Project

Create or update your SmartUI configuration file (`.smartui.json`):

```json title=".smartui.json"
{
  "projectName": "your-smartui-project-name",
  "buildName": "smartui-build-${CI_PIPELINE_ID}",
  "baseline": false
}
```

:::info Configuration File

The SmartUI configuration file is used to specify project settings. You can also use environment variables or command-line options to override these settings.

:::

---

## Step 3: Configure GitLab CI/CD Pipeline

Create or update your `.gitlab-ci.yml` file. The key difference with the Exec method is that you use `npx smartui exec --gitURL` to run your tests.

### Complete GitLab CI/CD Configuration

<Tabs className='docs__val' groupId='ci-language'>
<TabItem value='typescript' label='TypeScript/JavaScript' default>

```yaml title=".gitlab-ci.yml - TypeScript/JavaScript Example"
stages:
  - test

variables:
  NODE_VERSION: "18"
  LT_USERNAME: $LT_USERNAME
  LT_ACCESS_KEY: $LT_ACCESS_KEY
  PROJECT_TOKEN: $PROJECT_TOKEN

visual_regression_tests:
  stage: test
  image: node:${NODE_VERSION}
  
  before_script:
    - npm ci
    - npm install -g @lambdatest/smartui-cli
  
  script:
    # Get GitLab project ID and commit SHA
    - |
      PROJECT_ID=${CI_PROJECT_ID}
      COMMIT_SHA=${CI_COMMIT_SHA}
      
      # For merge requests, use the merge request commit SHA
      if [ -n "$CI_MERGE_REQUEST_IID" ]; then
        COMMIT_SHA=${CI_MERGE_REQUEST_SHA:-${CI_COMMIT_SHA}}
      fi
      
      # Construct GitLab API URL for status updates
      GIT_URL="https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}"
      
      echo "GitLab Project ID: ${PROJECT_ID}"
      echo "Commit SHA: ${COMMIT_SHA}"
      echo "GitLab Status URL: ${GIT_URL}"
      
      # Run tests with SmartUI Exec and GitLab integration
      npx smartui exec --gitURL "${GIT_URL}" -- npm test
      # Or: npx smartui exec --gitURL "${GIT_URL}" -- npx wdio run wdio.conf.ts
      # Or: npx smartui exec --gitURL "${GIT_URL}" -- npm run test:mobile
      
  only:
    - merge_requests
    - main
    - develop
  
  environment:
    name: visual-regression/$CI_COMMIT_REF_NAME
```

</TabItem>
<TabItem value='java' label='Java'>

```yaml title=".gitlab-ci.yml - Java Example"
stages:
  - test

variables:
  MAVEN_OPTS: "-Dmaven.repo.local=.m2/repository"
  LT_USERNAME: $LT_USERNAME
  LT_ACCESS_KEY: $LT_ACCESS_KEY
  PROJECT_TOKEN: $PROJECT_TOKEN

visual_regression_tests:
  stage: test
  image: maven:3.8-openjdk-11
  
  cache:
    paths:
      - .m2/repository/
  
  before_script:
    - mvn clean install -DskipTests
    - npm install -g @lambdatest/smartui-cli
  
  script:
    # Get GitLab project ID and commit SHA
    - |
      PROJECT_ID=${CI_PROJECT_ID}
      COMMIT_SHA=${CI_COMMIT_SHA}
      
      # For merge requests, use the merge request commit SHA
      if [ -n "$CI_MERGE_REQUEST_IID" ]; then
        COMMIT_SHA=${CI_MERGE_REQUEST_SHA:-${CI_COMMIT_SHA}}
      fi
      
      # Construct GitLab API URL for status updates
      GIT_URL="https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}"
      
      echo "GitLab Project ID: ${PROJECT_ID}"
      echo "Commit SHA: ${COMMIT_SHA}"
      echo "GitLab Status URL: ${GIT_URL}"
      
      # Run tests with SmartUI Exec and GitLab integration
      npx smartui exec --gitURL "${GIT_URL}" -- mvn test
      # Or: npx smartui exec --gitURL "${GIT_URL}" -- ./gradlew test (for Gradle)
      
  only:
    - merge_requests
    - main
    - develop
  
  environment:
    name: visual-regression/$CI_COMMIT_REF_NAME
```

</TabItem>
<TabItem value='python' label='Python'>

```yaml title=".gitlab-ci.yml - Python Example"
stages:
  - test

variables:
  PYTHON_VERSION: "3.9"
  LT_USERNAME: $LT_USERNAME
  LT_ACCESS_KEY: $LT_ACCESS_KEY
  PROJECT_TOKEN: $PROJECT_TOKEN

visual_regression_tests:
  stage: test
  image: python:${PYTHON_VERSION}
  
  before_script:
    - pip install -r requirements.txt
    - npm install -g @lambdatest/smartui-cli
  
  script:
    # Get GitLab project ID and commit SHA
    - |
      PROJECT_ID=${CI_PROJECT_ID}
      COMMIT_SHA=${CI_COMMIT_SHA}
      
      # For merge requests, use the merge request commit SHA
      if [ -n "$CI_MERGE_REQUEST_IID" ]; then
        COMMIT_SHA=${CI_MERGE_REQUEST_SHA:-${CI_COMMIT_SHA}}
      fi
      
      # Construct GitLab API URL for status updates
      GIT_URL="https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}"
      
      echo "GitLab Project ID: ${PROJECT_ID}"
      echo "Commit SHA: ${COMMIT_SHA}"
      echo "GitLab Status URL: ${GIT_URL}"
      
      # Run tests with SmartUI Exec and GitLab integration
      npx smartui exec --gitURL "${GIT_URL}" -- pytest
      # Or: npx smartui exec --gitURL "${GIT_URL}" -- python -m unittest discover
      # Or: npx smartui exec --gitURL "${GIT_URL}" -- behave
      
  only:
    - merge_requests
    - main
    - develop
  
  environment:
    name: visual-regression/$CI_COMMIT_REF_NAME
```

</TabItem>
<TabItem value='ruby' label='Ruby'>

```yaml title=".gitlab-ci.yml - Ruby Example"
stages:
  - test

variables:
  RUBY_VERSION: "3.1"
  LT_USERNAME: $LT_USERNAME
  LT_ACCESS_KEY: $LT_ACCESS_KEY
  PROJECT_TOKEN: $PROJECT_TOKEN

visual_regression_tests:
  stage: test
  image: ruby:${RUBY_VERSION}
  
  before_script:
    - bundle install
    - npm install -g @lambdatest/smartui-cli
  
  script:
    # Get GitLab project ID and commit SHA
    - |
      PROJECT_ID=${CI_PROJECT_ID}
      COMMIT_SHA=${CI_COMMIT_SHA}
      
      # For merge requests, use the merge request commit SHA
      if [ -n "$CI_MERGE_REQUEST_IID" ]; then
        COMMIT_SHA=${CI_MERGE_REQUEST_SHA:-${CI_COMMIT_SHA}}
      fi
      
      # Construct GitLab API URL for status updates
      GIT_URL="https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}"
      
      echo "GitLab Project ID: ${PROJECT_ID}"
      echo "Commit SHA: ${COMMIT_SHA}"
      echo "GitLab Status URL: ${GIT_URL}"
      
      # Run tests with SmartUI Exec and GitLab integration
      npx smartui exec --gitURL "${GIT_URL}" -- bundle exec rspec
      # Or: npx smartui exec --gitURL "${GIT_URL}" -- bundle exec cucumber
      
  only:
    - merge_requests
    - main
    - develop
  
  environment:
    name: visual-regression/$CI_COMMIT_REF_NAME
```

</TabItem>
</Tabs>

### Key Configuration Points

1. **SmartUI CLI Installation**: Install SmartUI CLI globally or use `npx @lambdatest/smartui-cli`
2. **GitLab Project ID**: Automatically available as `CI_PROJECT_ID` in GitLab CI/CD
3. **Commit SHA**: Use `CI_COMMIT_SHA` for regular commits, or `CI_MERGE_REQUEST_SHA` for merge requests
4. **GitLab API URL**: Construct as `https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}`
5. **Exec Command**: Use `npx smartui exec --gitURL "${GIT_URL}" -- <your-test-command>`

:::info Understanding the SmartUI Exec Command

The `npx smartui exec` command wraps your test execution and provides SmartUI integration:

```bash
npx smartui exec --gitURL "<gitlab-url>" -- <your-test-command>
```

- `--gitURL`: GitLab API URL for status updates (legacy name, works with GitLab)
- `--`: Separator before your test command
- `<your-test-command>`: Your normal test command (e.g., `npm test`, `mvn test`, `pytest`)

:::

---

## Step 4: Set Up GitLab CI/CD Variables

Configure the following variables in your GitLab project:

1. Go to your GitLab project → **Settings** → **CI/CD** → **Variables**
2. Add the following variables:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/2.png').default} alt="GitLab CI/CD Variables configuration" />

| Variable Name | Description |
|--------------|-------------|
| `LT_USERNAME` | Your LambdaTest username |
| `LT_ACCESS_KEY` | Your LambdaTest access key |
| `PROJECT_TOKEN` | Your SmartUI project token (found in SmartUI project settings) |

:::info Project Token

The `PROJECT_TOKEN` is different from `LT_USERNAME` and `LT_ACCESS_KEY`. You can find it in your SmartUI project settings in the [SmartUI Dashboard](https://smartui.lambdatest.com/).

:::

---

## Step 5: View Pipeline Results in GitLab

After your pipeline runs, you can view the results in the GitLab Pipelines page:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/pipeline_gitlabtab.png').default} alt="GitLab Pipelines page showing SmartUI test results" />

The pipeline will show:
- **Pipeline status** (Success/Failed)
- **Job status** for SmartUI tests
- **Screenshot statistics** (Total, Approved, Changes Found) in the job tooltip

---

## Step 6: View PR Check Results in GitLab Merge Request

After your pipeline runs, you'll see SmartUI status checks in your GitLab merge request:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/Gitlab_pr_check_dashboard.png').default} alt="GitLab merge request showing SmartUI PR check status" />

### Successful Status

When all visual tests pass:
- ✅ **Status**: Success
- **Details**: Click "Details" to view the SmartUI build in the dashboard
- **Screenshot**: All screenshots match baseline or are approved

### Failed Status

When visual differences are detected:
- ❌ **Status**: Failed
- **Details**: Click "Details" to review differences in SmartUI dashboard
- **Action Required**: Review and approve/reject changes in SmartUI dashboard

---

## Complete Working Examples

<Tabs className='docs__val' groupId='complete-example'>
<TabItem value='web-example' label='Web Testing Example' default>

<Tabs className='docs__val' groupId='web-example-lang'>
<TabItem value='typescript-web-ex' label='TypeScript/JavaScript' default>

```yaml title=".gitlab-ci.yml - Complete Web Testing Example"
stages:
  - test

variables:
  NODE_VERSION: "18"
  LT_USERNAME: $LT_USERNAME
  LT_ACCESS_KEY: $LT_ACCESS_KEY
  PROJECT_TOKEN: $PROJECT_TOKEN

visual_regression_tests:
  stage: test
  image: node:${NODE_VERSION}
  
  before_script:
    - npm ci
    - npm install -g @lambdatest/smartui-cli
  
  script:
    - |
      PROJECT_ID=${CI_PROJECT_ID}
      COMMIT_SHA=${CI_COMMIT_SHA}
      
      if [ -n "$CI_MERGE_REQUEST_IID" ]; then
        COMMIT_SHA=${CI_MERGE_REQUEST_SHA:-${CI_COMMIT_SHA}}
      fi
      
      GIT_URL="https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}"
      
      echo "GitLab Status URL: ${GIT_URL}"
      
      # Run web tests with SmartUI Exec
      npx smartui exec --gitURL "${GIT_URL}" -- npm test
      
  only:
    - merge_requests
    - main
```

</TabItem>
<TabItem value='java-web-ex' label='Java'>

```yaml title=".gitlab-ci.yml - Complete Java Web Testing Example"
stages:
  - test

variables:
  MAVEN_OPTS: "-Dmaven.repo.local=.m2/repository"
  LT_USERNAME: $LT_USERNAME
  LT_ACCESS_KEY: $LT_ACCESS_KEY
  PROJECT_TOKEN: $PROJECT_TOKEN

visual_regression_tests:
  stage: test
  image: maven:3.8-openjdk-11
  
  cache:
    paths:
      - .m2/repository/
  
  before_script:
    - mvn clean install -DskipTests
    - npm install -g @lambdatest/smartui-cli
  
  script:
    - |
      PROJECT_ID=${CI_PROJECT_ID}
      COMMIT_SHA=${CI_COMMIT_SHA}
      
      if [ -n "$CI_MERGE_REQUEST_IID" ]; then
        COMMIT_SHA=${CI_MERGE_REQUEST_SHA:-${CI_COMMIT_SHA}}
      fi
      
      GIT_URL="https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}"
      
      echo "GitLab Status URL: ${GIT_URL}"
      
      # Run Java tests with SmartUI Exec
      npx smartui exec --gitURL "${GIT_URL}" -- mvn test
      
  only:
    - merge_requests
    - main
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value='mobile-example' label='Mobile Testing Example'>

<Tabs className='docs__val' groupId='mobile-example-lang'>
<TabItem value='typescript-mobile-ex' label='TypeScript/JavaScript' default>

```yaml title=".gitlab-ci.yml - Complete Mobile Testing Example"
stages:
  - test

variables:
  NODE_VERSION: "18"
  LT_USERNAME: $LT_USERNAME
  LT_ACCESS_KEY: $LT_ACCESS_KEY
  PROJECT_TOKEN: $PROJECT_TOKEN

visual_regression_tests:
  stage: test
  image: node:${NODE_VERSION}
  
  before_script:
    - npm ci
    - npm install -g @lambdatest/smartui-cli
  
  script:
    - |
      PROJECT_ID=${CI_PROJECT_ID}
      COMMIT_SHA=${CI_COMMIT_SHA}
      
      if [ -n "$CI_MERGE_REQUEST_IID" ]; then
        COMMIT_SHA=${CI_MERGE_REQUEST_SHA:-${CI_COMMIT_SHA}}
      fi
      
      GIT_URL="https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}"
      
      echo "GitLab Status URL: ${GIT_URL}"
      
      # Run mobile tests with SmartUI Exec
      npx smartui exec --gitURL "${GIT_URL}" -- npm run test:mobile
      # Or: npx smartui exec --gitURL "${GIT_URL}" -- npx wdio run wdio.conf.ts
      
  only:
    - merge_requests
    - main
```

</TabItem>
<TabItem value='java-mobile-ex' label='Java'>

```yaml title=".gitlab-ci.yml - Complete Java Mobile Testing Example"
stages:
  - test

variables:
  MAVEN_OPTS: "-Dmaven.repo.local=.m2/repository"
  LT_USERNAME: $LT_USERNAME
  LT_ACCESS_KEY: $LT_ACCESS_KEY
  PROJECT_TOKEN: $PROJECT_TOKEN

visual_regression_tests:
  stage: test
  image: maven:3.8-openjdk-11
  
  cache:
    paths:
      - .m2/repository/
  
  before_script:
    - mvn clean install -DskipTests
    - npm install -g @lambdatest/smartui-cli
  
  script:
    - |
      PROJECT_ID=${CI_PROJECT_ID}
      COMMIT_SHA=${CI_COMMIT_SHA}
      
      if [ -n "$CI_MERGE_REQUEST_IID" ]; then
        COMMIT_SHA=${CI_MERGE_REQUEST_SHA:-${CI_COMMIT_SHA}}
      fi
      
      GIT_URL="https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}"
      
      echo "GitLab Status URL: ${GIT_URL}"
      
      # Run Java mobile tests with SmartUI Exec
      npx smartui exec --gitURL "${GIT_URL}" -- mvn test -D suite=mobile-tests.xml
      
  only:
    - merge_requests
    - main
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

---

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='pr-check-not-appearing' label='PR Check Not Appearing' default>

**Issue: PR Check Not Appearing in GitLab**

**Symptoms**: Pipeline runs but no SmartUI status check appears in merge request.

**Solutions**:
1. Verify GitLab integration is active in [LambdaTest Integrations](https://integrations.lambdatest.com/)
2. Check that `--gitURL` parameter is correctly set in the exec command
3. Verify GitLab API URL format: `https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}`
4. Ensure `CI_PROJECT_ID` and `CI_COMMIT_SHA` are correctly set
5. For merge requests, use `CI_MERGE_REQUEST_SHA` instead of `CI_COMMIT_SHA`
6. Check pipeline logs to ensure tests completed successfully
7. Verify SmartUI CLI is installed and accessible

</TabItem>
<TabItem value='screenshots-not-captured' label='Screenshots Not Captured'>

**Issue: Tests Run But No Screenshots in SmartUI**

**Symptoms**: Pipeline completes successfully but no screenshots appear in SmartUI dashboard.

**Solutions**:
1. Verify `PROJECT_TOKEN` is correctly set in GitLab CI/CD variables
2. Check that SmartUI configuration file (`.smartui.json`) exists and is valid
3. Ensure `LT_USERNAME` and `LT_ACCESS_KEY` are correctly set
4. Verify SmartUI project exists and is accessible
5. Check test logs for SmartUI execute command errors
6. Ensure screenshot commands are being called in your tests
7. Verify `SMARTUI_SERVER_ADDRESS` is set correctly (if using non-Selenium frameworks)

</TabItem>
<TabItem value='exec-command-fails' label='Exec Command Fails'>

**Issue: SmartUI Exec Command Fails**

**Symptoms**: `npx smartui exec` command fails or doesn't run tests.

**Solutions**:
1. Verify SmartUI CLI is installed: `npm install -g @lambdatest/smartui-cli`
2. Check that `PROJECT_TOKEN` environment variable is set
3. Verify `.smartui.json` configuration file exists and is valid
4. Ensure test command after `--` is correct
5. Check for port conflicts (default port: 49152)
6. Review pipeline logs for detailed error messages
7. Try running the command locally first to debug

</TabItem>
</Tabs>

---

## Key Differences: Exec vs Hooks

| Aspect | SmartUI Exec (This Guide) | SmartUI Hooks |
|--------|---------------------------|---------------|
| **Command** | Use `npx smartui exec --gitURL <url> -- <command>` | Run tests normally (`npm test`, `mvn test`, `pytest`) |
| **Integration** | Requires CLI wrapper | Automatic via capabilities |
| **Setup** | Install SmartUI CLI, configure `.smartui.json` | Add capabilities to test config |
| **GitLab Integration** | Use `--gitURL` parameter with exec | Add `github.url` capability |
| **Languages** | Java SDK, CLI projects, all frameworks | TypeScript/JS/Java/Python/Ruby/C#/WebdriverIO/Appium |
| **Project Token** | Required (`PROJECT_TOKEN`) | Not required (uses `LT_USERNAME`/`LT_ACCESS_KEY`) |
| **Server Address** | May need `SMARTUI_SERVER_ADDRESS` for non-Selenium | Not required |

---

## Next Steps

- Learn about [SmartUI CLI Exec Commands](/support/docs/smartui-cli-exec) for detailed exec usage
- Check the [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/) for common issues
- Review [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/) for advanced pipeline configuration

---

## Related Documentation

- [GitLab PR Checks with SmartUI Hooks](/support/docs/smartui-gitlab-pr-checks-hooks) - Hooks approach for GitLab integration
- [SmartUI with GitLab](/support/docs/smartui-with-gitlab) - General GitLab integration guide
- [SmartUI CLI Exec Commands](/support/docs/smartui-cli-exec) - Detailed exec command reference
- [SmartUI Project Settings](/support/docs/smartui-project-settings) - Configure SmartUI projects
- [SmartUI Appium Java SDK](/support/docs/smartui-appium-java-sdk) - Java SDK documentation

