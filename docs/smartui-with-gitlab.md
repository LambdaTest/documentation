---
id: smartui-with-gitlab
title: GitLab Integration with SmartUI
sidebar_label: GitLab
toc_max_heading_level: 2
description: Integrate SmartUI with GitLab — run visual regression tests in your GitLab Pipeline and post pass/fail results as merge-request (PR) checks using SmartUI Hooks or SmartUI Exec/SDK. Step-by-step setup for Selenium, Playwright, Cypress, Puppeteer, Appium, and WebdriverIO.
keywords:
  - testmu ai integrations
  - smart ui integration
  - smart ui integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci cd
url: https://www.testmuai.com/support/docs/smartui-with-gitlab/
site_name: TestMu AI
slug: smartui-with-gitlab/
canonical: https://www.testmuai.com/support/docs/smartui-with-gitlab/

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
          "name": "GitLab Pipeline Integration",
          "item": `${BRAND_URL}/support/docs/smartui-with-gitlab/`
        }]
      })
    }}
></script>
A GitLab Pipeline automates building, testing, and deploying code changes. It's essential for rapid development, improved code quality, and faster delivery by catching errors early and reducing manual work.

This document shows you how to integrate GitLab with SmartUI — running visual tests in your GitLab Pipeline, and posting results as merge-request (PR) checks using either SmartUI Hooks or SmartUI Exec/SDK.

## Steps to Integrate GitLab Pipeline with SmartUI
To integrate GitLab Pipeline with SmartUI, follow the below steps. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/amanchopra1905/smartui-ci-cd-integrations/tree/gitlab" target="_blank" className='github__anchor'><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className='doc_img'/> View on GitHub</a>
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

- After triggering the workflow, check your results in the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/projects)

<img loading="lazy" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/3.png').default} alt="Create New Project" width="" height=""/>

## GitLab PR Checks with SmartUI Hooks

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

### Prerequisites

Before you begin, ensure you have:

- <BrandName /> account with active subscription
- GitLab repository with CI/CD enabled
- SmartUI project created in [<BrandName /> SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
- Test suite configured (Selenium/Playwright/Cypress/Puppeteer/Appium/WebdriverIO)
- Test framework configured in your preferred language (TypeScript/JavaScript/Java/Python/Ruby/C#)
- <BrandName /> credentials (`LT_USERNAME` and `LT_ACCESS_KEY`)

---

### Step 1: Integrate GitLab with <BrandName />

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

### Step 2: Configure SmartUI Capabilities with GitLab Integration

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

#### Taking Screenshots with SmartUI Hooks

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

### Step 3: Configure GitLab CI/CD Pipeline

Create or update your `.gitlab-ci.yml` file. Since you're using **Hooks**, you just need to run your tests normally - no SmartUI CLI exec command required.

#### Complete GitLab CI/CD Configuration

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

#### Key Configuration Points

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

### Step 4: Set Up GitLab CI/CD Variables

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

### Step 5: View Pipeline Results in GitLab

After your pipeline runs, you can view the results in the GitLab Pipelines page:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/pipeline_gitlabtab.png').default} alt="GitLab Pipelines page showing SmartUI test results" />

The pipeline will show:
- **Pipeline status** (Success/Failed)
- **Job status** for SmartUI tests
- **Screenshot statistics** (Total, Approved, Changes Found) in the job tooltip

---

### Step 6: View PR Check Results in GitLab Merge Request

After your pipeline runs, you'll see SmartUI status checks in your GitLab merge request:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/Gitlab_pr_check_dashboard.png').default} alt="GitLab merge request showing SmartUI PR check status" />

#### Successful Status

When all visual tests pass:
- ✅ **Status**: Success
- **Details**: Click "Details" to view the SmartUI build in the dashboard
- **Screenshot**: All screenshots match baseline or are approved

#### Failed Status

When visual differences are detected:
- ❌ **Status**: Failed
- **Details**: Click "Details" to review differences in SmartUI dashboard
- **Action Required**: Review and approve/reject changes in SmartUI dashboard

---

### Complete Working Examples

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

### Troubleshooting

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

### Key Differences: Hooks vs SDK

| Aspect | SmartUI Hooks (This Guide) | SmartUI SDK |
|--------|---------------------------|-------------|
| **Command** | Run tests normally (`npm test`, `mvn test`, `pytest`) | Use `npx smartui exec -- <command>` |
| **Integration** | Automatic via capabilities | Requires CLI wrapper |
| **Setup** | Add capabilities to test config | Configure CLI and run with exec |
| **GitLab Integration** | Add `github.url` capability with `GIT_URL` | Use `--gitURL` parameter with exec |
| **Languages** | TypeScript/JS/Java/Python/Ruby/C#/WebdriverIO/Appium | Java SDK, CLI projects |
| **Java Support** | ✅ Yes - Use capabilities with `github` capability | ✅ Yes - Use `npx smartui exec -- mvn test` |

---

### Next Steps

- Learn about [SmartUI Appium Hooks](/support/docs/smartui-appium-hooks) for detailed mobile testing guide
- Check the [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/) for common issues
- Review [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/) for advanced pipeline configuration

---

### Related Documentation

- [SmartUI with GitLab](/support/docs/smartui-with-gitlab) - General GitLab integration guide
- [SmartUI Appium Hooks](/support/docs/smartui-appium-hooks) - Mobile testing with Appium Hooks
- [SmartUI Mobile Testing Overview](/support/docs/smartui-appium-sdk) - Mobile testing frameworks overview
- [SmartUI Project Settings](/support/docs/smartui-project-settings) - Configure SmartUI projects
- [GitHub App Integration](/support/docs/smartui-github-app-integration/#github-app) - Similar integration pattern for GitHub

## GitLab PR Checks with SmartUI Exec (SDK)

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
- See [GitLab PR Checks with SmartUI Hooks](/support/docs/smartui-with-gitlab/#gitlab-pr-checks-with-smartui-hooks) for Hooks approach

:::

---

### Prerequisites

Before you begin, ensure you have:

- <BrandName /> account with active subscription
- GitLab repository with CI/CD enabled
- SmartUI project created in [<BrandName /> SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
- Test suite configured (Selenium/Playwright/Cypress/Puppeteer/Appium/WebdriverIO)
- Test framework configured in your preferred language (TypeScript/JavaScript/Java/Python/Ruby/C#)
- <BrandName /> credentials (`LT_USERNAME` and `LT_ACCESS_KEY`)
- SmartUI CLI installed (or use `npx @lambdatest/smartui-cli`)

---

### Step 1: Integrate GitLab with <BrandName />

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

### Step 2: Configure SmartUI Project

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

### Step 3: Configure GitLab CI/CD Pipeline

Create or update your `.gitlab-ci.yml` file. The key difference with the Exec method is that you use `npx smartui exec --gitURL` to run your tests.

#### Complete GitLab CI/CD Configuration

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

#### Key Configuration Points

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

### Step 4: Set Up GitLab CI/CD Variables

Configure the following variables in your GitLab project:

1. Go to your GitLab project → **Settings** → **CI/CD** → **Variables**
2. Add the following variables:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/2.png').default} alt="GitLab CI/CD Variables configuration" />

| Variable Name | Description |
|--------------|-------------|
| `LT_USERNAME` | Your <BrandName /> username |
| `LT_ACCESS_KEY` | Your <BrandName /> access key |
| `PROJECT_TOKEN` | Your SmartUI project token (found in SmartUI project settings) |

:::info Project Token

The `PROJECT_TOKEN` is different from `LT_USERNAME` and `LT_ACCESS_KEY`. You can find it in your SmartUI project settings in the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/).

:::

---

### Step 5: View Pipeline Results in GitLab

After your pipeline runs, you can view the results in the GitLab Pipelines page:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/pipeline_gitlabtab.png').default} alt="GitLab Pipelines page showing SmartUI test results" />

The pipeline will show:
- **Pipeline status** (Success/Failed)
- **Job status** for SmartUI tests
- **Screenshot statistics** (Total, Approved, Changes Found) in the job tooltip

---

### Step 6: View PR Check Results in GitLab Merge Request

After your pipeline runs, you'll see SmartUI status checks in your GitLab merge request:

<img loading="lazy" className='doc_img' width="1300" height="776" src={require('../assets/images/smart-visual-testing/ci-cd-integration/gitlab/Gitlab_pr_check_dashboard.png').default} alt="GitLab merge request showing SmartUI PR check status" />

#### Successful Status

When all visual tests pass:
- ✅ **Status**: Success
- **Details**: Click "Details" to view the SmartUI build in the dashboard
- **Screenshot**: All screenshots match baseline or are approved

#### Failed Status

When visual differences are detected:
- ❌ **Status**: Failed
- **Details**: Click "Details" to review differences in SmartUI dashboard
- **Action Required**: Review and approve/reject changes in SmartUI dashboard

---

### Complete Working Examples

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

### Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='pr-check-not-appearing' label='PR Check Not Appearing' default>

**Issue: PR Check Not Appearing in GitLab**

**Symptoms**: Pipeline runs but no SmartUI status check appears in merge request.

**Solutions**:
1. Verify GitLab integration is active in [<BrandName /> Integrations](https://integrations.lambdatest.com/)
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

### Key Differences: Exec vs Hooks

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

### Next Steps

- Learn about [SmartUI CLI Exec Commands](/support/docs/smartui-cli-exec) for detailed exec usage
- Check the [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/) for common issues
- Review [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/) for advanced pipeline configuration

---

### Related Documentation

- [GitLab PR Checks with SmartUI Hooks](/support/docs/smartui-with-gitlab/#gitlab-pr-checks-with-smartui-hooks) - Hooks approach for GitLab integration
- [SmartUI with GitLab](/support/docs/smartui-with-gitlab) - General GitLab integration guide
- [SmartUI CLI Exec Commands](/support/docs/smartui-cli-exec) - Detailed exec command reference
- [SmartUI Project Settings](/support/docs/smartui-project-settings) - Configure SmartUI projects
- [SmartUI Appium Java SDK](/support/docs/smartui-appium-java-sdk) - Java SDK documentation

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='secret-management' label='Secret Management' default>

**Secret Management**

- Never commit credentials to repository
- Use GitLab CI/CD Variables for all sensitive data
- Rotate secrets regularly
- Use different secrets for different environments

</TabItem>
<TabItem value='pipeline-optimization' label='Pipeline Optimization'>

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

</TabItem>
<TabItem value='build-naming' label='Build Naming'>

**Build Naming**

- Use meaningful build names that include branch/commit info
- Include commit SHA for traceability
- Use consistent naming conventions

**Example:**
```yaml
variables:
  BUILD_NAME: "MR-$CI_MERGE_REQUEST_IID-$CI_COMMIT_SHORT_SHA"
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
<TabItem value='project_token-not-available' label='PROJECT_TOKEN Not Available'>

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

</TabItem>
<TabItem value='tests-run-but-no-results-in-dashboard' label='Tests Run But No Results in Dashboard'>

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
   before_script:
     - npm cache clean --force
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
- Check [SmartUI CLI Documentation](/support/docs/smartui-cli-complete-reference/) for CLI-specific issues
- Visit [<BrandName /> Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

</TabItem>
</Tabs>


## Additional Resources

- [SmartUI CLI Documentation](/support/docs/smartui-cli-complete-reference/)
- [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)
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
        GitLab Integration
      </span>
    </li>
  </ul>
</nav>
