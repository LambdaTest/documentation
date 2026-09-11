---
id: smartui-gitlab-pr-checks-hooks
title: GitLab PR Checks with SmartUI Hooks
sidebar_label: GitLab PR Checks (Hooks)
description: Integrate SmartUI visual regression testing with GitLab merge requests using SmartUI Hooks for web and mobile testing with Selenium, Playwright, WebdriverIO, Appium, and more.
slug: smartui-gitlab-pr-checks-hooks/
canonical: https://www.testmu.ai/support/docs/smartui-gitlab-pr-checks-hooks/
keywords:
  - GitLab PR checks
  - SmartUI Hooks
  - GitLab merge request integration
  - Visual regression testing
  - Selenium Playwright WebdriverIO
  - Appium mobile testing
  - SmartUI webhooks
url: https://www.testmuai.com/support/docs/smartui-gitlab-pr-checks-hooks/
site_name: TestMu AI
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
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/smartui-gitlab-pr-checks-hooks/"
    },
    "headline": "GitLab PR Checks with SmartUI Hooks",
    "description": "Integrate SmartUI visual regression testing with GitLab merge requests using SmartUI Hooks for web and mobile testing with Selenium, Playwright, WebdriverIO, Appium, and more.",
    "url": "https://www.testmuai.com/support/docs/smartui-gitlab-pr-checks-hooks/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "GitLab PR checks",
      "SmartUI Hooks",
      "GitLab merge request integration"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "TestMu AI account with active subscription; GitLab repository with CI/CD enabled; SmartUI project created in TestMu AI SmartUI Dashboard; Test suite configured (Selenium/Playwright/Cypress/Puppeteer/Appium/WebdriverIO); Test framework configured in your preferred language (TypeScript/JavaScript/Java/Python/Ruby/C#); TestMu AI credentials (LT_USERNAME and LT_ACCESS_KEY).",
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
        "name": "Code sample 1",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='java-web' label='Java'>\n\n```java title=\"Example: Java Selenium Configuration with SmartUI Hooks and GitLab\"\npackage webhook;\n\nimport org.openqa.selenium.chrome.ChromeOptions;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport org.testng.annotations.BeforeClass;\n\nimport java.net.MalformedURLException;\nimport java.net.URL;\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class BaseClassWebhook {\n    \n    public RemoteWebDriver driver;\n    public String githubURL = System.getenv(\"GITHUB_URL\"); // GitLab URL from CI/CD\n    \n    @BeforeClass\n    public void setup() throws MalformedURLException {\n        String username = System.getenv(\"LT_USERNAME\") == null\n            ? \"Your LT Username\"\n            : System.getenv(\"LT_USERNAME\");\n        String authkey = System.getenv(\"LT_ACCESS_KEY\") == null\n            ? \"Your LT AccessKey\"\n            : System.getenv(\"LT_ACCESS_KEY\");\n        \n        ChromeOptions browserOptions = new ChromeOptions();\n        HashMap<String, Object> ltOptions = new HashMap<String, Object>();\n        \n        // LambdaTest Options\n        ltOptions.put(\"username\", username);\n        ltOptions.put(\"accessKey\", authkey);\n        ltOptions.put(\"project\", \"Your Project Name\");\n        ltOptions.put(\"w3c\", true);\n        ltOptions.put(\"browserName\", \"Chrome\");\n        ltOptions.put(\"browserVersion\", \"latest\");\n        ltOptions.put(\"platformName\", \"Windows 10\");\n        \n        // SmartUI Hooks Configuration\n        String projectName = System.getenv(\"SMARTUI_PROJECT_NAME\") != null\n            ? System.getenv(\"SMARTUI_PROJECT_NAME\") + \"-visual\"\n            : \"Your SmartUI Project Name\";\n        ltOptions.put(\"smartUI.project\", projectName);\n        \n        String buildName = System.getenv(\"CI\") != null\n            ? System.getenv(\"CI_PROJECT_NAME\") + \"-\" + System.getenv(\"CI_PIPELINE_ID\")\n            : \"smartui-local-build\";\n        ltOptions.put(\"smartUI.build\", buildName);\n        ltOptions.put(\"smartUI.baseline\", false);\n        \n        browserOptions.setCapability(\"LT:Options\", ltOptions);\n        \n        // GitLab Integration Capability\n        if (githubURL != null) {\n            Map<String, String> github = new HashMap<String, String>();\n            github.put(\"url\", githubURL);\n            browserOptions.setCapability(\"github\", github);\n            System.out.println(\"GitLab URL received successfully: \" + githubURL);\n        }\n        \n        String remoteUrl = \"https://\" + username + \":\" + authkey + \"@hub.lambdatest.com/wd/hub\";\n        driver = new RemoteWebDriver(new URL(remoteUrl), browserOptions);\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "GitLab Integration Capability",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<\/Tabs>\n\n<\/TabItem>\n<TabItem value='mobile' label='Mobile Testing (Appium/WebdriverIO)'>\n\n<Tabs className='docs__val' groupId='mobile-language'>\n<TabItem value='typescript-mobile' label='TypeScript/JavaScript' default>\n\n```typescript title=\"Example: TypeScript/WebdriverIO Mobile Configuration with SmartUI Hooks and GitLab\"\nimport { remote, RemoteOptions } from 'webdriverio';\n\nconst capabilities: RemoteOptions['capabilities'] = {\n  deviceName: \"iPhone 12\",\n  platformName: \"ios\",\n  platformVersion: \"14\",\n  isRealMobile: true,\n  app: \"APP_URL\", // Your uploaded app URL\n  visual: true, // Mandatory for SmartUI\n  name: \"Mobile App Test Session\",\n  build: process.env.CI \n    ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`\n    : `smartui-local-build-${new Date().toISOString().split('T')[0]}`,\n  \n  // SmartUI Hooks Configuration\n  \"smartUI.project\": `${process.env.SMARTUI_PROJECT_NAME}-visual`,\n  \"smartUI.build\": process.env.CI \n    ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`\n    : `smartui-local-build-${new Date().toISOString().split('T')[0]}`,\n  \"smartUI.baseline\": false,\n  \"smartUI.cropStatusBar\": true,\n  \"smartUI.cropFooter\": true,\n  \n  // GitLab Integration Capability\n  github: {\n    url: process.env.GITHUB_URL // GitLab API URL for status updates\n    // GitLab URL format: https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}\n  }\n};\n\nconst driver = await remote({\n  hostname: 'mobile-hub.lambdatest.com',\n  port: 443,\n  path: '/wd/hub',\n  protocol: 'https',\n  user: process.env.LT_USERNAME,\n  key: process.env.LT_ACCESS_KEY,\n  capabilities: capabilities as any,\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='python-mobile' label='Python'>\n\n```python title=\"Example: Python Appium Configuration with SmartUI Hooks and GitLab\"\nfrom appium import webdriver\nimport os\n\n# Get GitLab URL from environment\ngithub_url = os.getenv(\"GITHUB_URL\")\n\ncapabilities = {\n    \"deviceName\": \"iPhone 12\",\n    \"platformName\": \"ios\",\n    \"platformVersion\": \"14\",\n    \"isRealMobile\": True,\n    \"app\": \"APP_URL\",  # Your uploaded app URL\n    \"visual\": True,  # Mandatory for SmartUI\n    \"name\": \"Mobile App Test Session\",\n    \"build\": f\"{os.getenv('CI_PROJECT_NAME')}-{os.getenv('CI_PIPELINE_ID')}\" if os.getenv(\"CI\") else \"smartui-local-build\",\n    \n    # SmartUI Hooks Configuration\n    \"smartUI.project\": f\"{os.getenv('SMARTUI_PROJECT_NAME')}-visual\",\n    \"smartUI.build\": f\"{os.getenv('CI_PROJECT_NAME')}-{os.getenv('CI_PIPELINE_ID')}\" if os.getenv(\"CI\") else \"smartui-local-build\",\n    \"smartUI.baseline\": False,\n    \"smartUI.cropStatusBar\": True,\n    \n    # GitLab Integration Capability\n    \"github\": {\n        \"url\": github_url  # GitLab API URL for status updates\n    }\n}\n\ndriver = webdriver.Remote(\n    command_executor=f\"https://{os.getenv('LT_USERNAME')}:{os.getenv('LT_ACCESS_KEY')}@mobile-hub.lambdatest.com/wd/hub\",\n    desired_capabilities=capabilities\n)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Taking Screenshots with SmartUI Hooks",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='java' label='Java'>\n\n```java title=\"Taking Screenshots with SmartUI Hooks in Java\"\nimport org.openqa.selenium.JavascriptExecutor;\nimport java.util.HashMap;\nimport java.util.Map;\n\n// Viewport screenshot\n((JavascriptExecutor) driver).executeScript(\"smartui.takeScreenshot=Homepage\");\n\n// Full page screenshot (if supported)\nMap<String, Object> config = new HashMap<>();\nconfig.put(\"screenshotName\", \"Homepage\");\nconfig.put(\"fullPage\", true);\nconfig.put(\"pageCount\", 15); // Minimum 1, Maximum 20\n((JavascriptExecutor) driver).executeScript(\"smartui.takeScreenshot\", config);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Full page screenshot (if supported)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='ruby' label='Ruby'>\n\n```ruby title=\"Taking Screenshots with SmartUI Hooks in Ruby\"\n# Viewport screenshot\ndriver.execute_script(\"smartui.takeScreenshot=Homepage\")\n\n# Full page screenshot (if supported)\nconfig = {\n  'screenshotName' => 'Homepage',\n  'fullPage' => true,\n  'pageCount' => 15  # Minimum 1, Maximum 20\n}\ndriver.execute_script(\"smartui.takeScreenshot\", config)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Full page screenshot (if supported)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<\/Tabs>\n\n:::caution Important\n\nThe `visual: true` capability is **mandatory** for SmartUI visual regression testing. Without this capability, screenshots will not be captured and the build status will show as `Error`.\n\n:::\n\n---\n\n## Step 3: Configure GitLab CI/CD Pipeline\n\nCreate or update your `.gitlab-ci.yml` file. Since you're using **Hooks**, you just need to run your tests normally - no SmartUI CLI exec command required.\n\n### Complete GitLab CI/CD Configuration\n\n<Tabs className='docs__val' groupId='ci-language'>\n<TabItem value='typescript' label='TypeScript/JavaScript' default>\n\n```yaml title=\".gitlab-ci.yml - TypeScript/JavaScript Example\"\nstages:\n  - test\n\nvariables:\n  NODE_VERSION: \"18\"\n  LT_USERNAME: $LT_USERNAME\n  LT_ACCESS_KEY: $LT_ACCESS_KEY\n  SMARTUI_PROJECT_NAME: $SMARTUI_PROJECT_NAME\n\nvisual_regression_tests:\n  stage: test\n  image: node:${NODE_VERSION}\n  \n  before_script:\n    - npm ci\n  \n  script:\n    # Get GitLab project ID and commit SHA\n    - |\n      PROJECT_ID=${CI_PROJECT_ID}\n      COMMIT_SHA=${CI_COMMIT_SHA}\n      \n      # For merge requests, use the merge request commit SHA\n      if [ -n \"$CI_MERGE_REQUEST_IID\" ]; then\n        COMMIT_SHA=${CI_MERGE_REQUEST_SHA:-${CI_COMMIT_SHA}}\n      fi\n      \n      # Construct GitLab API URL for status updates\n      GITHUB_URL=\"https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}\"\n      \n      echo \"GitLab Project ID: ${PROJECT_ID}\"\n      echo \"Commit SHA: ${COMMIT_SHA}\"\n      echo \"GitLab Status URL: ${GITHUB_URL}\"\n      \n      # Export GITHUB_URL as environment variable for use in test capabilities\n      export GITHUB_URL=\"${GITHUB_URL}\"\n      \n      # Run your tests normally - SmartUI Hooks work automatically through capabilities\n      npm test\n      # Or: npx wdio run wdio.conf.ts\n      # Or: npm run test:mobile\n      \n  only:\n    - merge_requests\n    - main\n    - develop\n  \n  environment:\n    name: visual-regression/$CI_COMMIT_REF_NAME"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "environment",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value='python' label='Python'>\n\n```yaml title=\".gitlab-ci.yml - Python Example\"\nstages:\n  - test\n\nvariables:\n  PYTHON_VERSION: \"3.9\"\n  LT_USERNAME: $LT_USERNAME\n  LT_ACCESS_KEY: $LT_ACCESS_KEY\n  SMARTUI_PROJECT_NAME: $SMARTUI_PROJECT_NAME\n\nvisual_regression_tests:\n  stage: test\n  image: python:${PYTHON_VERSION}\n  \n  before_script:\n    - pip install -r requirements.txt\n  \n  script:\n    # Get GitLab project ID and commit SHA\n    - |\n      PROJECT_ID=${CI_PROJECT_ID}\n      COMMIT_SHA=${CI_COMMIT_SHA}\n      \n      # For merge requests, use the merge request commit SHA\n      if [ -n \"$CI_MERGE_REQUEST_IID\" ]; then\n        COMMIT_SHA=${CI_MERGE_REQUEST_SHA:-${CI_COMMIT_SHA}}\n      fi\n      \n      # Construct GitLab API URL for status updates\n      GITHUB_URL=\"https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}\"\n      \n      echo \"GitLab Project ID: ${PROJECT_ID}\"\n      echo \"Commit SHA: ${COMMIT_SHA}\"\n      echo \"GitLab Status URL: ${GITHUB_URL}\"\n      \n      # Export GITHUB_URL as environment variable for use in test capabilities\n      export GITHUB_URL=\"${GITHUB_URL}\"\n      \n      # Run your tests normally - SmartUI Hooks work automatically through capabilities\n      pytest\n      # Or: python -m unittest discover\n      # Or: behave\n      \n  only:\n    - merge_requests\n    - main\n    - develop\n  \n  environment:\n    name: visual-regression/$CI_COMMIT_REF_NAME"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "environment",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<\/Tabs>\n\n### Key Configuration Points\n\n1. **No SmartUI CLI exec needed**: With Hooks, you run your tests normally (e.g., `npm test`, `mvn test`, `pytest`)\n2. **GitLab Project ID**: Automatically available as `CI_PROJECT_ID` in GitLab CI/CD\n3. **Commit SHA**: Use `CI_COMMIT_SHA` for regular commits, or `CI_MERGE_REQUEST_SHA` for merge requests\n4. **GitLab API URL**: Export as `GIT_URL` environment variable, which your test capabilities will use\n5. **GitLab API URL Format**: `https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}`\n\n:::info How Hooks Work\n\nWith SmartUI Hooks:\n- You pass SmartUI capabilities (including `github.url` with `GIT_URL` for GitLab) in your test configuration\n- Run your tests normally (no `npx smartui exec` command)\n- SmartUI integration happens automatically through the capabilities\n- GitLab PR checks are updated automatically when tests complete\n\n:::\n\n---\n\n## Step 4: Set Up GitLab CI/CD Variables\n\nConfigure the following variables in your GitLab project:\n\n1. Go to your GitLab project \u2192 **Settings** \u2192 **CI/CD** \u2192 **Variables**\n2. Add the following variables:\n\n<img loading=\"lazy\" className='doc_img' width=\"1300\" height=\"776\" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/2.png').default} alt=\"GitLab CI/CD Variables configuration\" />\n\n| Variable Name | Description |\n|--------------|-------------|\n| `LT_USERNAME` | Your <BrandName /> username |\n| `LT_ACCESS_KEY` | Your <BrandName /> access key |\n| `SMARTUI_PROJECT_NAME` | Your SmartUI project name |\n\n---\n\n## Step 5: View Pipeline Results in GitLab\n\nAfter your pipeline runs, you can view the results in the GitLab Pipelines page:\n\n<img loading=\"lazy\" className='doc_img' width=\"1300\" height=\"776\" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/pipeline_gitlabtab.png').default} alt=\"GitLab Pipelines page showing SmartUI test results\" />\n\nThe pipeline will show:\n- **Pipeline status** (Success/Failed)\n- **Job status** for SmartUI tests\n- **Screenshot statistics** (Total, Approved, Changes Found) in the job tooltip\n\n---\n\n## Step 6: View PR Check Results in GitLab Merge Request\n\nAfter your pipeline runs, you'll see SmartUI status checks in your GitLab merge request:\n\n<img loading=\"lazy\" className='doc_img' width=\"1300\" height=\"776\" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/Gitlab_pr_check_dashboard.png').default} alt=\"GitLab merge request showing SmartUI PR check status\" />\n\n### Successful Status\n\nWhen all visual tests pass:\n- \u2705 **Status**: Success\n- **Details**: Click \"Details\" to view the SmartUI build in the dashboard\n- **Screenshot**: All screenshots match baseline or are approved\n\n### Failed Status\n\nWhen visual differences are detected:\n- \u274c **Status**: Failed\n- **Details**: Click \"Details\" to review differences in SmartUI dashboard\n- **Action Required**: Review and approve/reject changes in SmartUI dashboard\n\n---\n\n## Complete Working Examples\n\n<Tabs className='docs__val' groupId='complete-example'>\n<TabItem value='web-example' label='Web Testing Example' default>\n\n<Tabs className='docs__val' groupId='web-example-lang'>\n<TabItem value='typescript-web-ex' label='TypeScript/JavaScript' default>\n\n```typescript title=\"example.spec.ts - Complete Web Test with SmartUI Hooks and GitLab\"\nimport { Builder, Capabilities } from 'selenium-webdriver';\n\ndescribe('Web Visual Regression Tests', () => {\n  let driver;\n\n  before(async () => {\n    // Construct GitLab URL (in CI/CD, this would come from environment variable)\n    const gitUrl = process.env.GIT_URL || \n      `https://gitlab.com/api/v4/projects/${process.env.CI_PROJECT_ID}/statuses/${process.env.CI_COMMIT_SHA}`;\n\n    const capabilities = {\n      browserName: 'Chrome',\n      browserVersion: 'latest',\n      platformName: 'Windows 10',\n      'LT:Options': {\n        username: process.env.LT_USERNAME,\n        accessKey: process.env.LT_ACCESS_KEY,\n        project: 'Your Project Name',\n        w3c: true,\n        name: 'Web Visual Tests',\n      build: process.env.CI \n        ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`\n        : `local-build-${Date.now()}`,\n      \"smartUI.project\": `${process.env.SMARTUI_PROJECT_NAME}-visual`,\n      \"smartUI.build\": process.env.CI \n        ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`\n        : `local-build-${Date.now()}`,\n      \"smartUI.baseline\": false,\n      // GitLab integration capability\n      github: {\n          url: gitUrl\n        }\n      }\n    };\n\n    driver = await new Builder()\n      .usingServer(`https://${process.env.LT_USERNAME}:${process.env.LT_ACCESS_KEY}@hub.lambdatest.com/wd/hub`)\n      .withCapabilities(capabilities)\n      .build();\n  });\n\n  after(async () => {\n    if (driver) {\n      await driver.quit();\n    }\n  });\n\n  it('should capture homepage screenshot', async () => {\n    await driver.get('https://example.com');\n    await driver.executeScript(\"smartui.takeScreenshot=Homepage\");\n  });\n\n  it('should capture login page screenshot', async () => {\n    await driver.get('https://example.com/login');\n    await driver.executeScript(\"smartui.takeScreenshot=LoginPage\");\n  });\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 9",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<\/Tabs>\n\n<\/TabItem>\n<TabItem value='mobile-example' label='Mobile Testing Example'>\n\n<Tabs className='docs__val' groupId='mobile-example-lang'>\n<TabItem value='typescript-mobile-ex' label='TypeScript/JavaScript' default>\n\n```typescript title=\"example.spec.ts - Complete Mobile App Test with SmartUI Hooks and GitLab\"\nimport { remote, RemoteOptions } from 'webdriverio';\n\ndescribe('Mobile App Visual Regression Tests', () => {\n  let driver: WebdriverIO.Browser;\n\n  before(async () => {\n    // Construct GitLab URL (in CI/CD, this would come from environment variable)\n    const gitUrl = process.env.GIT_URL || \n      `https://gitlab.com/api/v4/projects/${process.env.CI_PROJECT_ID}/statuses/${process.env.CI_COMMIT_SHA}`;\n\n    const capabilities: RemoteOptions['capabilities'] = {\n      deviceName: \"iPhone 12\",\n      platformName: \"ios\",\n      platformVersion: \"14\",\n      isRealMobile: true,\n      app: process.env.APP_URL || \"YOUR_APP_URL\",\n      visual: true, // Mandatory for SmartUI\n      name: \"Mobile App Visual Tests\",\n      build: process.env.CI \n        ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`\n        : `local-build-${Date.now()}`,\n      \"smartUI.project\": `${process.env.SMARTUI_PROJECT_NAME}-visual`,\n      \"smartUI.build\": process.env.CI \n        ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`\n        : `local-build-${Date.now()}`,\n      \"smartUI.baseline\": false,\n      \"smartUI.cropStatusBar\": true,\n      // GitLab integration capability\n      github: {\n        url: gitlabUrl\n      }\n    };\n\n    driver = await remote({\n      hostname: 'mobile-hub.lambdatest.com',\n      port: 443,\n      path: '/wd/hub',\n      protocol: 'https',\n      user: process.env.LT_USERNAME,\n      key: process.env.LT_ACCESS_KEY,\n      capabilities: capabilities as any,\n    });\n  });\n\n  after(async () => {\n    if (driver) {\n      await driver.deleteSession();\n    }\n  });\n\n  it('should capture homepage screenshot', async () => {\n    // Navigate or perform actions\n    await driver.execute(\"smartui.takeScreenshot=Homepage\");\n  });\n\n  it('should capture login screen screenshot', async () => {\n    // Navigate to login screen\n    await driver.execute(\"smartui.takeScreenshot=LoginScreen\");\n  });\n});"
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
      "name": "GitLab PR Checks with SmartUI Hooks",
      "description": "Integrate SmartUI visual regression testing with GitLab merge requests using SmartUI Hooks for web and mobile testing with Selenium, Playwright, WebdriverIO, Appium, and more.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Integrate GitLab with TestMu AI",
          "text": "Go to TestMu AI Integrations page Search for GitLab and select the integration Click on OAuth as your preferred authentication method Click Install and authorize the integration After successful authentication, refresh the Integrations page to verify GitLab is installed You can verify your GitLab integration is active by checking the Integrations page. The GitLab integration should show as \"Installed\" or \"Active\".",
          "url": "https://www.testmuai.com/support/docs/smartui-gitlab-pr-checks-hooks/#step-1-integrate-gitlab-with-testmu-ai"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure SmartUI Capabilities with GitLab Integration",
          "text": "Configure your test suite with SmartUI capabilities. Since you're using the Hooks approach, you'll pass SmartUI capabilities directly in your test configuration, including the GitLab integration capability. The capability is named github (legacy name) but works with GitLab's API endpoint. Use the GIT_URL environment variable to pass the GitLab API URL. This is the same capability used for GitHub integration and supports both GitHub and GitLab status APIs. In your test code, use the SmartUI execute command to capture screenshots: The visual: true capability is mandatory for SmartUI visual regression testing. Without this capability, screenshots will not be captured and the build status will show as Error.",
          "url": "https://www.testmuai.com/support/docs/smartui-gitlab-pr-checks-hooks/#step-2-configure-smartui-capabilities-with-gitlab-integration"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure GitLab CI/CD Pipeline",
          "text": "Create or update your .gitlab-ci.yml file. Since you're using Hooks, you just need to run your tests normally - no SmartUI CLI exec command required. No SmartUI CLI exec needed: With Hooks, you run your tests normally (e.g., npm test, mvn test, pytest) GitLab Project ID: Automatically available as CIPROJECTID in GitLab CI/CD Commit SHA: Use CICOMMITSHA for regular commits, or CIMERGEREQUEST_SHA for merge requests GitLab API URL: Export as GIT_URL environment variable, which your test capabilities will use GitLab API URL Format: https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId} With SmartUI Hooks: You pass SmartUI capabilities (including github.url with GIT_URL for GitLab) in your test configuration Run your tests normally (no npx smartui exec command) SmartUI integration happens automatically through the capabilities GitLab PR checks are updated automatically when tests complete",
          "url": "https://www.testmuai.com/support/docs/smartui-gitlab-pr-checks-hooks/#step-3-configure-gitlab-cicd-pipeline"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Set Up GitLab CI/CD Variables",
          "text": "Configure the following variables in your GitLab project: Go to your GitLab project \u2192 Settings \u2192 CI/CD \u2192 Variables Add the following variables:",
          "url": "https://www.testmuai.com/support/docs/smartui-gitlab-pr-checks-hooks/#step-4-set-up-gitlab-cicd-variables"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: View Pipeline Results in GitLab",
          "text": "After your pipeline runs, you can view the results in the GitLab Pipelines page: The pipeline will show: Pipeline status (Success/Failed) Job status for SmartUI tests Screenshot statistics (Total, Approved, Changes Found) in the job tooltip",
          "url": "https://www.testmuai.com/support/docs/smartui-gitlab-pr-checks-hooks/#step-5-view-pipeline-results-in-gitlab"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: View PR Check Results in GitLab Merge Request",
          "text": "After your pipeline runs, you'll see SmartUI status checks in your GitLab merge request: When all visual tests pass: \u2705 Status: Success Details: Click \"Details\" to view the SmartUI build in the dashboard Screenshot: All screenshots match baseline or are approved When visual differences are detected: \u274c Status: Failed Details: Click \"Details\" to review differences in SmartUI dashboard Action Required: Review and approve/reject changes in SmartUI dashboard",
          "url": "https://www.testmuai.com/support/docs/smartui-gitlab-pr-checks-hooks/#step-6-view-pr-check-results-in-gitlab-merge-request"
        }
      ]
    }
  ]) }}
/>

This guide shows you how to integrate SmartUI visual regression testing with GitLab merge requests using the **SmartUI Hooks** approach. This works for both **web testing** (Selenium, Playwright, Cypress, Puppeteer) and **mobile app testing** (Appium, WebdriverIO) across all supported languages.

:::info SmartUI Hooks vs SDK

This guide covers the **SmartUI Hooks** approach, where you pass SmartUI capabilities directly in your test configuration. This is different from the SDK approach:

**SmartUI Hooks (This Guide):**
- ✅ No `npx smartui exec` command needed
- ✅ Tests run normally (e.g., `npm test`, `mvn test`, `pytest`)
- ✅ SmartUI integration happens automatically through capabilities
- ✅ Suitable for TypeScript/JavaScript/Java/Python/Ruby/C#/WebdriverIO/Appium
- ✅ Works with **web testing** (Selenium, Playwright, Cypress, Puppeteer)
- ✅ Works with **mobile app testing** (Appium, iOS/Android)

**SmartUI SDK:**
- Requires `npx smartui exec -- <your-test-command>`
- Used for Java SDK and CLI-based projects
- See [SmartUI Appium Java SDK](/support/docs/smartui-appium-java-sdk) for SDK approach

:::

---

## Prerequisites

Before you begin, ensure you have:

- <BrandName /> account with active subscription
- GitLab repository with CI/CD enabled
- SmartUI project created in [<BrandName /> SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
- Test suite configured (Selenium/Playwright/Cypress/Puppeteer/Appium/WebdriverIO)
- Test framework configured in your preferred language (TypeScript/JavaScript/Java/Python/Ruby/C#)
- <BrandName /> credentials (`LT_USERNAME` and `LT_ACCESS_KEY`)

---

## Step 1: Integrate GitLab with <BrandName />

1. Go to [<BrandName /> Integrations page](https://integrations.lambdatest.com/)
2. Search for **GitLab** and select the integration
3. Click on **OAuth** as your preferred authentication method
4. Click **Install** and authorize the integration
5. After successful authentication, refresh the Integrations page to verify GitLab is installed

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/1.png').default} alt="GitLab integration setup in <BrandName />" />

:::tip Integration Status

You can verify your GitLab integration is active by checking the [Integrations page](https://integrations.lambdatest.com/). The GitLab integration should show as "Installed" or "Active".

:::

---

## Step 2: Configure SmartUI Capabilities with GitLab Integration

Configure your test suite with SmartUI capabilities. Since you're using the **Hooks approach**, you'll pass SmartUI capabilities directly in your test configuration, including the GitLab integration capability.

<Tabs className='docs__val' groupId='test-type'>
<TabItem value='web' label='Web Testing (Selenium/Playwright)' default>

<Tabs className='docs__val' groupId='web-language'>
<TabItem value='typescript-web' label='TypeScript/JavaScript' default>

```typescript title="Example: TypeScript Selenium Configuration with SmartUI Hooks and GitLab"
import { Builder, Capabilities } from 'selenium-webdriver';

const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  platformName: 'Windows 10',
  'LT:Options': {
    username: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    project: 'Your Project Name',
    w3c: true,
    name: 'Web Test Session',
    build: process.env.CI 
      ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`
      : `smartui-local-build-${new Date().toISOString().split('T')[0]}`,
    
    // SmartUI Hooks Configuration
    "smartUI.project": `${process.env.SMARTUI_PROJECT_NAME}-visual`,
    "smartUI.build": process.env.CI 
      ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`
      : `smartui-local-build-${new Date().toISOString().split('T')[0]}`,
    "smartUI.baseline": false,
    
    // GitLab Integration Capability
    github: {
      url: process.env.GIT_URL // GitLab API URL for status updates
    }
  }
};

const driver = await new Builder()
  .usingServer(`https://${process.env.LT_USERNAME}:${process.env.LT_ACCESS_KEY}@hub.lambdatest.com/wd/hub`)
  .withCapabilities(capabilities)
  .build();
```

</TabItem>
<TabItem value='java-web' label='Java'>

```java title="Example: Java Selenium Configuration with SmartUI Hooks and GitLab"
package webhook;

import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.BeforeClass;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class BaseClassWebhook {
    
    public RemoteWebDriver driver;
    public String githubURL = System.getenv("GITHUB_URL"); // GitLab URL from CI/CD
    
    @BeforeClass
    public void setup() throws MalformedURLException {
        String username = System.getenv("LT_USERNAME") == null
            ? "Your LT Username"
            : System.getenv("LT_USERNAME");
        String authkey = System.getenv("LT_ACCESS_KEY") == null
            ? "Your LT AccessKey"
            : System.getenv("LT_ACCESS_KEY");
        
        ChromeOptions browserOptions = new ChromeOptions();
        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        
        // LambdaTest Options
        ltOptions.put("username", username);
        ltOptions.put("accessKey", authkey);
        ltOptions.put("project", "Your Project Name");
        ltOptions.put("w3c", true);
        ltOptions.put("browserName", "Chrome");
        ltOptions.put("browserVersion", "latest");
        ltOptions.put("platformName", "Windows 10");
        
        // SmartUI Hooks Configuration
        String projectName = System.getenv("SMARTUI_PROJECT_NAME") != null
            ? System.getenv("SMARTUI_PROJECT_NAME") + "-visual"
            : "Your SmartUI Project Name";
        ltOptions.put("smartUI.project", projectName);
        
        String buildName = System.getenv("CI") != null
            ? System.getenv("CI_PROJECT_NAME") + "-" + System.getenv("CI_PIPELINE_ID")
            : "smartui-local-build";
        ltOptions.put("smartUI.build", buildName);
        ltOptions.put("smartUI.baseline", false);
        
        browserOptions.setCapability("LT:Options", ltOptions);
        
        // GitLab Integration Capability
        if (githubURL != null) {
            Map<String, String> github = new HashMap<String, String>();
            github.put("url", githubURL);
            browserOptions.setCapability("github", github);
            System.out.println("GitLab URL received successfully: " + githubURL);
        }
        
        String remoteUrl = "https://" + username + ":" + authkey + "@hub.lambdatest.com/wd/hub";
        driver = new RemoteWebDriver(new URL(remoteUrl), browserOptions);
    }
}
```

</TabItem>
<TabItem value='python-web' label='Python'>

```python title="Example: Python Selenium Configuration with SmartUI Hooks and GitLab"
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import os

# Get GitLab URL from environment
github_url = os.getenv("GITHUB_URL")

capabilities = {
    "browserName": "Chrome",
    "browserVersion": "latest",
    "platformName": "Windows 10",
    "LT:Options": {
        "username": os.getenv("LT_USERNAME"),
        "accessKey": os.getenv("LT_ACCESS_KEY"),
        "project": "Your Project Name",
        "w3c": True,
        "name": "Web Test Session",
        "build": f"{os.getenv('CI_PROJECT_NAME')}-{os.getenv('CI_PIPELINE_ID')}" if os.getenv("CI") else "smartui-local-build",
        
        # SmartUI Hooks Configuration
        "smartUI.project": f"{os.getenv('SMARTUI_PROJECT_NAME')}-visual",
        "smartUI.build": f"{os.getenv('CI_PROJECT_NAME')}-{os.getenv('CI_PIPELINE_ID')}" if os.getenv("CI") else "smartui-local-build",
        "smartUI.baseline": False,
        
        # GitLab Integration Capability
        "github": {
            "url": github_url
        }
    }
}

driver = webdriver.Remote(
    command_executor=f"https://{os.getenv('LT_USERNAME')}:{os.getenv('LT_ACCESS_KEY')}@hub.lambdatest.com/wd/hub",
    desired_capabilities=capabilities
)
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value='mobile' label='Mobile Testing (Appium/WebdriverIO)'>

<Tabs className='docs__val' groupId='mobile-language'>
<TabItem value='typescript-mobile' label='TypeScript/JavaScript' default>

```typescript title="Example: TypeScript/WebdriverIO Mobile Configuration with SmartUI Hooks and GitLab"
import { remote, RemoteOptions } from 'webdriverio';

const capabilities: RemoteOptions['capabilities'] = {
  deviceName: "iPhone 12",
  platformName: "ios",
  platformVersion: "14",
  isRealMobile: true,
  app: "APP_URL", // Your uploaded app URL
  visual: true, // Mandatory for SmartUI
  name: "Mobile App Test Session",
  build: process.env.CI 
    ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`
    : `smartui-local-build-${new Date().toISOString().split('T')[0]}`,
  
  // SmartUI Hooks Configuration
  "smartUI.project": `${process.env.SMARTUI_PROJECT_NAME}-visual`,
  "smartUI.build": process.env.CI 
    ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`
    : `smartui-local-build-${new Date().toISOString().split('T')[0]}`,
  "smartUI.baseline": false,
  "smartUI.cropStatusBar": true,
  "smartUI.cropFooter": true,
  
  // GitLab Integration Capability
  github: {
    url: process.env.GITHUB_URL // GitLab API URL for status updates
    // GitLab URL format: https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}
  }
};

const driver = await remote({
  hostname: 'mobile-hub.lambdatest.com',
  port: 443,
  path: '/wd/hub',
  protocol: 'https',
  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
  capabilities: capabilities as any,
});
```

</TabItem>
<TabItem value='java-mobile' label='Java'>

```java title="Example: Java Appium Configuration with SmartUI Hooks and GitLab"
package webhook;

import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.BeforeClass;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class BaseClassWebhook {
    
    public RemoteWebDriver driver;
    public String githubURL = System.getenv("GITHUB_URL"); // GitLab URL from CI/CD
    
    @BeforeClass
    public void setup() throws MalformedURLException {
        String username = System.getenv("LT_USERNAME") == null
            ? "Your LT Username"
            : System.getenv("LT_USERNAME");
        String authkey = System.getenv("LT_ACCESS_KEY") == null
            ? "Your LT AccessKey"
            : System.getenv("LT_ACCESS_KEY");
        
        ChromeOptions browserOptions = new ChromeOptions();
        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        
        // LambdaTest Options
        ltOptions.put("username", username);
        ltOptions.put("accessKey", authkey);
        ltOptions.put("project", "Your Project Name");
        ltOptions.put("w3c", true);
        ltOptions.put("deviceName", "iPhone 12");
        ltOptions.put("platformName", "ios");
        ltOptions.put("platformVersion", "14");
        ltOptions.put("isRealMobile", true);
        ltOptions.put("app", "APP_URL");
        ltOptions.put("visual", true); // Mandatory for SmartUI
        
        // SmartUI Hooks Configuration
        String projectName = System.getenv("SMARTUI_PROJECT_NAME") != null
            ? System.getenv("SMARTUI_PROJECT_NAME") + "-visual"
            : "Your SmartUI Project Name";
        ltOptions.put("smartUI.project", projectName);
        
        String buildName = System.getenv("CI") != null
            ? System.getenv("CI_PROJECT_NAME") + "-" + System.getenv("CI_PIPELINE_ID")
            : "smartui-local-build";
        ltOptions.put("smartUI.build", buildName);
        ltOptions.put("smartUI.baseline", false);
        ltOptions.put("smartUI.cropStatusBar", true);
        
        browserOptions.setCapability("LT:Options", ltOptions);
        
        // GitLab Integration Capability
        if (githubURL != null) {
            Map<String, String> github = new HashMap<String, String>();
            github.put("url", githubURL);
            browserOptions.setCapability("github", github);
            System.out.println("GitLab URL received successfully: " + githubURL);
        }
        
        String remoteUrl = "https://" + username + ":" + authkey + "@mobile-hub.lambdatest.com/wd/hub";
        driver = new RemoteWebDriver(new URL(remoteUrl), browserOptions);
    }
}
```

</TabItem>
<TabItem value='python-mobile' label='Python'>

```python title="Example: Python Appium Configuration with SmartUI Hooks and GitLab"
from appium import webdriver
import os

# Get GitLab URL from environment
github_url = os.getenv("GITHUB_URL")

capabilities = {
    "deviceName": "iPhone 12",
    "platformName": "ios",
    "platformVersion": "14",
    "isRealMobile": True,
    "app": "APP_URL",  # Your uploaded app URL
    "visual": True,  # Mandatory for SmartUI
    "name": "Mobile App Test Session",
    "build": f"{os.getenv('CI_PROJECT_NAME')}-{os.getenv('CI_PIPELINE_ID')}" if os.getenv("CI") else "smartui-local-build",
    
    # SmartUI Hooks Configuration
    "smartUI.project": f"{os.getenv('SMARTUI_PROJECT_NAME')}-visual",
    "smartUI.build": f"{os.getenv('CI_PROJECT_NAME')}-{os.getenv('CI_PIPELINE_ID')}" if os.getenv("CI") else "smartui-local-build",
    "smartUI.baseline": False,
    "smartUI.cropStatusBar": True,
    
    # GitLab Integration Capability
    "github": {
        "url": github_url  # GitLab API URL for status updates
    }
}

driver = webdriver.Remote(
    command_executor=f"https://{os.getenv('LT_USERNAME')}:{os.getenv('LT_ACCESS_KEY')}@mobile-hub.lambdatest.com/wd/hub",
    desired_capabilities=capabilities
)
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

:::info GitLab Capability Note

The capability is named `github` (legacy name) but works with GitLab's API endpoint. Use the `GIT_URL` environment variable to pass the GitLab API URL. This is the same capability used for GitHub integration and supports both GitHub and GitLab status APIs.

:::

### Taking Screenshots with SmartUI Hooks

In your test code, use the SmartUI execute command to capture screenshots:

<Tabs className='docs__val' groupId='screenshot-language'>
<TabItem value='typescript' label='TypeScript/JavaScript' default>

```typescript title="Taking Screenshots with SmartUI Hooks"
// Viewport screenshot
await driver.execute("smartui.takeScreenshot=Homepage");

// Full page screenshot (if supported)
const config = {
  screenshotName: 'Homepage',
  fullPage: true,
  pageCount: 15  // Minimum 1, Maximum 20
};
await driver.execute("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value='java' label='Java'>

```java title="Taking Screenshots with SmartUI Hooks in Java"
import org.openqa.selenium.JavascriptExecutor;
import java.util.HashMap;
import java.util.Map;

// Viewport screenshot
((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot=Homepage");

// Full page screenshot (if supported)
Map<String, Object> config = new HashMap<>();
config.put("screenshotName", "Homepage");
config.put("fullPage", true);
config.put("pageCount", 15); // Minimum 1, Maximum 20
((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value='python' label='Python'>

```python title="Taking Screenshots with SmartUI Hooks in Python"
# Viewport screenshot
driver.execute_script("smartui.takeScreenshot=Homepage")

# Full page screenshot (if supported)
config = {
    "screenshotName": "Homepage",
    "fullPage": True,
    "pageCount": 15  # Minimum 1, Maximum 20
}
driver.execute_script("smartui.takeScreenshot", config)
```

</TabItem>
<TabItem value='ruby' label='Ruby'>

```ruby title="Taking Screenshots with SmartUI Hooks in Ruby"
# Viewport screenshot
driver.execute_script("smartui.takeScreenshot=Homepage")

# Full page screenshot (if supported)
config = {
  'screenshotName' => 'Homepage',
  'fullPage' => true,
  'pageCount' => 15  # Minimum 1, Maximum 20
}
driver.execute_script("smartui.takeScreenshot", config)
```

</TabItem>
<TabItem value='csharp' label='C#'>

```csharp title="Taking Screenshots with SmartUI Hooks in C#"
using OpenQA.Selenium;

// Viewport screenshot
((IJavaScriptExecutor)driver).ExecuteScript("smartui.takeScreenshot=Homepage");

// Full page screenshot (if supported)
var config = new Dictionary<string, object>
{
    { "screenshotName", "Homepage" },
    { "fullPage", true },
    { "pageCount", 15 }  // Minimum 1, Maximum 20
};
((IJavaScriptExecutor)driver).ExecuteScript("smartui.takeScreenshot", config);
```

</TabItem>
</Tabs>

:::caution Important

The `visual: true` capability is **mandatory** for SmartUI visual regression testing. Without this capability, screenshots will not be captured and the build status will show as `Error`.

:::

---

## Step 3: Configure GitLab CI/CD Pipeline

Create or update your `.gitlab-ci.yml` file. Since you're using **Hooks**, you just need to run your tests normally - no SmartUI CLI exec command required.

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
  SMARTUI_PROJECT_NAME: $SMARTUI_PROJECT_NAME

visual_regression_tests:
  stage: test
  image: node:${NODE_VERSION}
  
  before_script:
    - npm ci
  
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
      GITHUB_URL="https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}"
      
      echo "GitLab Project ID: ${PROJECT_ID}"
      echo "Commit SHA: ${COMMIT_SHA}"
      echo "GitLab Status URL: ${GITHUB_URL}"
      
      # Export GITHUB_URL as environment variable for use in test capabilities
      export GITHUB_URL="${GITHUB_URL}"
      
      # Run your tests normally - SmartUI Hooks work automatically through capabilities
      npm test
      # Or: npx wdio run wdio.conf.ts
      # Or: npm run test:mobile
      
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
  SMARTUI_PROJECT_NAME: $SMARTUI_PROJECT_NAME

visual_regression_tests:
  stage: test
  image: maven:3.8-openjdk-11
  
  cache:
    paths:
      - .m2/repository/
  
  before_script:
    - mvn clean install -DskipTests
  
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
      GITHUB_URL="https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}"
      
      echo "GitLab Project ID: ${PROJECT_ID}"
      echo "Commit SHA: ${COMMIT_SHA}"
      echo "GitLab Status URL: ${GITHUB_URL}"
      
      # Export GITHUB_URL as environment variable for use in test capabilities
      export GITHUB_URL="${GITHUB_URL}"
      
      # Run your tests normally - SmartUI Hooks work automatically through capabilities
      mvn test
      # Or: ./gradlew test (for Gradle)
      
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
  SMARTUI_PROJECT_NAME: $SMARTUI_PROJECT_NAME

visual_regression_tests:
  stage: test
  image: python:${PYTHON_VERSION}
  
  before_script:
    - pip install -r requirements.txt
  
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
      GITHUB_URL="https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}"
      
      echo "GitLab Project ID: ${PROJECT_ID}"
      echo "Commit SHA: ${COMMIT_SHA}"
      echo "GitLab Status URL: ${GITHUB_URL}"
      
      # Export GITHUB_URL as environment variable for use in test capabilities
      export GITHUB_URL="${GITHUB_URL}"
      
      # Run your tests normally - SmartUI Hooks work automatically through capabilities
      pytest
      # Or: python -m unittest discover
      # Or: behave
      
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
  SMARTUI_PROJECT_NAME: $SMARTUI_PROJECT_NAME

visual_regression_tests:
  stage: test
  image: ruby:${RUBY_VERSION}
  
  before_script:
    - bundle install
  
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
      GITHUB_URL="https://gitlab.com/api/v4/projects/${PROJECT_ID}/statuses/${COMMIT_SHA}"
      
      echo "GitLab Project ID: ${PROJECT_ID}"
      echo "Commit SHA: ${COMMIT_SHA}"
      echo "GitLab Status URL: ${GITHUB_URL}"
      
      # Export GITHUB_URL as environment variable for use in test capabilities
      export GITHUB_URL="${GITHUB_URL}"
      
      # Run your tests normally - SmartUI Hooks work automatically through capabilities
      bundle exec rspec
      # Or: bundle exec cucumber
      
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

1. **No SmartUI CLI exec needed**: With Hooks, you run your tests normally (e.g., `npm test`, `mvn test`, `pytest`)
2. **GitLab Project ID**: Automatically available as `CI_PROJECT_ID` in GitLab CI/CD
3. **Commit SHA**: Use `CI_COMMIT_SHA` for regular commits, or `CI_MERGE_REQUEST_SHA` for merge requests
4. **GitLab API URL**: Export as `GIT_URL` environment variable, which your test capabilities will use
5. **GitLab API URL Format**: `https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}`

:::info How Hooks Work

With SmartUI Hooks:
- You pass SmartUI capabilities (including `github.url` with `GIT_URL` for GitLab) in your test configuration
- Run your tests normally (no `npx smartui exec` command)
- SmartUI integration happens automatically through the capabilities
- GitLab PR checks are updated automatically when tests complete

:::

---

## Step 4: Set Up GitLab CI/CD Variables

Configure the following variables in your GitLab project:

1. Go to your GitLab project → **Settings** → **CI/CD** → **Variables**
2. Add the following variables:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/2.png').default} alt="GitLab CI/CD Variables configuration" />

| Variable Name | Description |
|--------------|-------------|
| `LT_USERNAME` | Your <BrandName /> username |
| `LT_ACCESS_KEY` | Your <BrandName /> access key |
| `SMARTUI_PROJECT_NAME` | Your SmartUI project name |

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

```typescript title="example.spec.ts - Complete Web Test with SmartUI Hooks and GitLab"
import { Builder, Capabilities } from 'selenium-webdriver';

describe('Web Visual Regression Tests', () => {
  let driver;

  before(async () => {
    // Construct GitLab URL (in CI/CD, this would come from environment variable)
    const gitUrl = process.env.GIT_URL || 
      `https://gitlab.com/api/v4/projects/${process.env.CI_PROJECT_ID}/statuses/${process.env.CI_COMMIT_SHA}`;

    const capabilities = {
      browserName: 'Chrome',
      browserVersion: 'latest',
      platformName: 'Windows 10',
      'LT:Options': {
        username: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
        project: 'Your Project Name',
        w3c: true,
        name: 'Web Visual Tests',
      build: process.env.CI 
        ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`
        : `local-build-${Date.now()}`,
      "smartUI.project": `${process.env.SMARTUI_PROJECT_NAME}-visual`,
      "smartUI.build": process.env.CI 
        ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`
        : `local-build-${Date.now()}`,
      "smartUI.baseline": false,
      // GitLab integration capability
      github: {
          url: gitUrl
        }
      }
    };

    driver = await new Builder()
      .usingServer(`https://${process.env.LT_USERNAME}:${process.env.LT_ACCESS_KEY}@hub.lambdatest.com/wd/hub`)
      .withCapabilities(capabilities)
      .build();
  });

  after(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  it('should capture homepage screenshot', async () => {
    await driver.get('https://example.com');
    await driver.executeScript("smartui.takeScreenshot=Homepage");
  });

  it('should capture login page screenshot', async () => {
    await driver.get('https://example.com/login');
    await driver.executeScript("smartui.takeScreenshot=LoginPage");
  });
});
```

</TabItem>
<TabItem value='java-web-ex' label='Java'>

```java title="BaseClassWebhook.java - Complete Java Web Test with SmartUI Hooks and GitLab"
package webhook;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class BaseClassWebhook {
    
    public RemoteWebDriver driver;
    public String githubURL = System.getenv("GITHUB_URL"); // GitLab URL from CI/CD
    
    @BeforeClass
    public void setup() throws MalformedURLException {
        String username = System.getenv("LT_USERNAME") == null
            ? "Your LT Username"
            : System.getenv("LT_USERNAME");
        String authkey = System.getenv("LT_ACCESS_KEY") == null
            ? "Your LT AccessKey"
            : System.getenv("LT_ACCESS_KEY");
        
        ChromeOptions browserOptions = new ChromeOptions();
        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        
        // LambdaTest Options
        ltOptions.put("username", username);
        ltOptions.put("accessKey", authkey);
        ltOptions.put("project", "Your Project Name");
        ltOptions.put("w3c", true);
        ltOptions.put("browserName", "Chrome");
        ltOptions.put("browserVersion", "latest");
        ltOptions.put("platformName", "Windows 10");
        
        // SmartUI Hooks Configuration
        String projectName = System.getenv("SMARTUI_PROJECT_NAME") != null
            ? System.getenv("SMARTUI_PROJECT_NAME") + "-visual"
            : "Your SmartUI Project Name";
        ltOptions.put("smartUI.project", projectName);
        
        String buildName = System.getenv("CI") != null
            ? System.getenv("CI_PROJECT_NAME") + "-" + System.getenv("CI_PIPELINE_ID")
            : "smartui-local-build";
        ltOptions.put("smartUI.build", buildName);
        ltOptions.put("smartUI.baseline", false);
        
        browserOptions.setCapability("LT:Options", ltOptions);
        
        // GitLab Integration Capability
        if (githubURL != null) {
            Map<String, String> github = new HashMap<String, String>();
            github.put("url", githubURL);
            browserOptions.setCapability("github", github);
            System.out.println("GitLab URL received successfully: " + githubURL);
        }
        
        String remoteUrl = "https://" + username + ":" + authkey + "@hub.lambdatest.com/wd/hub";
        driver = new RemoteWebDriver(new URL(remoteUrl), browserOptions);
    }
    
    @Test
    public void testHomepageScreenshot() {
        driver.get("https://example.com");
        ((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot=Homepage");
    }
    
    @Test
    public void testLoginPageScreenshot() {
        driver.get("https://example.com/login");
        ((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot=LoginPage");
    }
    
    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value='mobile-example' label='Mobile Testing Example'>

<Tabs className='docs__val' groupId='mobile-example-lang'>
<TabItem value='typescript-mobile-ex' label='TypeScript/JavaScript' default>

```typescript title="example.spec.ts - Complete Mobile App Test with SmartUI Hooks and GitLab"
import { remote, RemoteOptions } from 'webdriverio';

describe('Mobile App Visual Regression Tests', () => {
  let driver: WebdriverIO.Browser;

  before(async () => {
    // Construct GitLab URL (in CI/CD, this would come from environment variable)
    const gitUrl = process.env.GIT_URL || 
      `https://gitlab.com/api/v4/projects/${process.env.CI_PROJECT_ID}/statuses/${process.env.CI_COMMIT_SHA}`;

    const capabilities: RemoteOptions['capabilities'] = {
      deviceName: "iPhone 12",
      platformName: "ios",
      platformVersion: "14",
      isRealMobile: true,
      app: process.env.APP_URL || "YOUR_APP_URL",
      visual: true, // Mandatory for SmartUI
      name: "Mobile App Visual Tests",
      build: process.env.CI 
        ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`
        : `local-build-${Date.now()}`,
      "smartUI.project": `${process.env.SMARTUI_PROJECT_NAME}-visual`,
      "smartUI.build": process.env.CI 
        ? `${process.env.CI_PROJECT_NAME}-${process.env.CI_PIPELINE_ID}`
        : `local-build-${Date.now()}`,
      "smartUI.baseline": false,
      "smartUI.cropStatusBar": true,
      // GitLab integration capability
      github: {
        url: gitlabUrl
      }
    };

    driver = await remote({
      hostname: 'mobile-hub.lambdatest.com',
      port: 443,
      path: '/wd/hub',
      protocol: 'https',
      user: process.env.LT_USERNAME,
      key: process.env.LT_ACCESS_KEY,
      capabilities: capabilities as any,
    });
  });

  after(async () => {
    if (driver) {
      await driver.deleteSession();
    }
  });

  it('should capture homepage screenshot', async () => {
    // Navigate or perform actions
    await driver.execute("smartui.takeScreenshot=Homepage");
  });

  it('should capture login screen screenshot', async () => {
    // Navigate to login screen
    await driver.execute("smartui.takeScreenshot=LoginScreen");
  });
});
```

</TabItem>
<TabItem value='java-mobile-ex' label='Java'>

```java title="BaseClassWebhook.java - Complete Java Mobile Test with SmartUI Hooks and GitLab"
package webhook;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class BaseClassWebhook {
    
    public RemoteWebDriver driver;
    public String githubURL = System.getenv("GITHUB_URL"); // GitLab URL from CI/CD
    
    @BeforeClass
    public void setup() throws MalformedURLException {
        String username = System.getenv("LT_USERNAME") == null
            ? "Your LT Username"
            : System.getenv("LT_USERNAME");
        String authkey = System.getenv("LT_ACCESS_KEY") == null
            ? "Your LT AccessKey"
            : System.getenv("LT_ACCESS_KEY");
        
        ChromeOptions browserOptions = new ChromeOptions();
        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        
        // LambdaTest Options
        ltOptions.put("username", username);
        ltOptions.put("accessKey", authkey);
        ltOptions.put("project", "Your Project Name");
        ltOptions.put("w3c", true);
        ltOptions.put("deviceName", "iPhone 12");
        ltOptions.put("platformName", "ios");
        ltOptions.put("platformVersion", "14");
        ltOptions.put("isRealMobile", true);
        ltOptions.put("app", "APP_URL");
        ltOptions.put("visual", true); // Mandatory for SmartUI
        
        // SmartUI Hooks Configuration
        String projectName = System.getenv("SMARTUI_PROJECT_NAME") != null
            ? System.getenv("SMARTUI_PROJECT_NAME") + "-visual"
            : "Your SmartUI Project Name";
        ltOptions.put("smartUI.project", projectName);
        
        String buildName = System.getenv("CI") != null
            ? System.getenv("CI_PROJECT_NAME") + "-" + System.getenv("CI_PIPELINE_ID")
            : "smartui-local-build";
        ltOptions.put("smartUI.build", buildName);
        ltOptions.put("smartUI.baseline", false);
        ltOptions.put("smartUI.cropStatusBar", true);
        
        browserOptions.setCapability("LT:Options", ltOptions);
        
        // GitLab Integration Capability
        if (githubURL != null) {
            Map<String, String> github = new HashMap<String, String>();
            github.put("url", githubURL);
            browserOptions.setCapability("github", github);
            System.out.println("GitLab URL received successfully: " + githubURL);
        }
        
        String remoteUrl = "https://" + username + ":" + authkey + "@mobile-hub.lambdatest.com/wd/hub";
        driver = new RemoteWebDriver(new URL(remoteUrl), browserOptions);
    }
    
    @Test
    public void testHomepageScreenshot() {
        // Navigate or perform actions
        ((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot=Homepage");
    }
    
    @Test
    public void testLoginScreenScreenshot() {
        // Navigate to login screen
        ((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot=LoginScreen");
    }
    
    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
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
1. Verify GitLab integration is active in [<BrandName /> Integrations](https://integrations.lambdatest.com/)
2. Check that `github.url` capability is correctly set in your test configuration
3. Verify `GIT_URL` environment variable is exported in CI/CD pipeline
4. Ensure `CI_PROJECT_ID` and `CI_COMMIT_SHA` are correctly set
5. For merge requests, use `CI_MERGE_REQUEST_SHA` instead of `CI_COMMIT_SHA`
6. Check test logs to ensure tests completed successfully
7. Verify GitLab API URL format: `https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}`

</TabItem>
<TabItem value='screenshots-not-captured' label='Screenshots Not Captured'>

**Issue: Tests Run But No Screenshots in SmartUI**

**Symptoms**: Pipeline completes successfully but no screenshots appear in SmartUI dashboard.

**Solutions**:
1. Verify `visual: true` is set in capabilities
2. Check `smartUI.project` capability matches your SmartUI project name
3. Ensure `LT_USERNAME` and `LT_ACCESS_KEY` are correctly set
4. Verify you're using the correct <BrandName /> grid URL:
   - Web testing: `@hub.lambdatest.com/wd/hub`
   - Mobile testing: `@mobile-hub.lambdatest.com/wd/hub`
5. Check test logs for SmartUI execute command errors
6. Verify SmartUI project exists and is accessible
7. Ensure screenshot commands are being called in your tests

</TabItem>
<TabItem value='gitlab-url-not-set' label='GitLab URL Not Set'>

**Issue: GitLab URL Not Available in Tests**

**Symptoms**: Tests run but GitLab PR check doesn't update.

**Solutions**:
1. Verify `GIT_URL` is exported in CI/CD pipeline before test execution
2. Check that `github.url` capability is reading from `GIT_URL` environment variable
3. Add debug logging to verify URL is set
4. Ensure URL format is correct: `https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}`
5. Verify the URL is set in the same script block that runs tests

</TabItem>
</Tabs>

---

## Key Differences: Hooks vs SDK

| Aspect | SmartUI Hooks (This Guide) | SmartUI SDK |
|--------|---------------------------|-------------|
| **Command** | Run tests normally (`npm test`, `mvn test`, `pytest`) | Use `npx smartui exec -- <command>` |
| **Integration** | Automatic via capabilities | Requires CLI wrapper |
| **Setup** | Add capabilities to test config | Configure CLI and run with exec |
| **GitLab Integration** | Add `github.url` capability with `GIT_URL` | Use `--gitURL` parameter with exec |
| **Languages** | TypeScript/JS/Java/Python/Ruby/C#/WebdriverIO/Appium | Java SDK, CLI projects |
| **Java Support** | ✅ Yes - Use capabilities with `github` capability | ✅ Yes - Use `npx smartui exec -- mvn test` |

---

## Next Steps

- Learn about [SmartUI Appium Hooks](/support/docs/smartui-appium-hooks) for detailed mobile testing guide
- Check the [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/) for common issues
- Review [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/) for advanced pipeline configuration

---

## Related Documentation

- [SmartUI with GitLab](/support/docs/smartui-with-gitlab) - General GitLab integration guide
- [SmartUI Appium Hooks](/support/docs/smartui-appium-hooks) - Mobile testing with Appium Hooks
- [SmartUI Mobile Testing Overview](/support/docs/smartui-appium-sdk) - Mobile testing frameworks overview
- [SmartUI Project Settings](/support/docs/smartui-project-settings) - Configure SmartUI projects
- [GitHub App Integration](/support/docs/smartui-github-app-integration) - Similar integration pattern for GitHub
