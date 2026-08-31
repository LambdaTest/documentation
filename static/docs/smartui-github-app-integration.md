# GitHub & GitLab Pull Request Testing with SmartUI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

SmartUI can post visual-test results as pull/merge request checks on both GitHub (via the GitHub App) and GitLab (via CI/CD PR checks, using either SmartUI Hooks or SmartUI Exec/SDK). This lets your team catch visual regressions directly in the code review workflow, with pass/fail status surfaced on each pull or merge request. Whether you use GitHub Actions, GitLab CI/CD, Selenium, Playwright, WebdriverIO, or Appium, SmartUI ties visual results back to the exact commit under review.

Choose your setup below.

## GitHub App

This is the guide to setup your GitHub Repos with SmartUI projects and run your CI along with visual regression testing.

### Prerequisites

- An account with GitHub with valid permission to install new applications to your repositories.
- Basic understanding of Continuous Integration tools (CI) is required.
- Should have setup the SmartUI suite, else please read [this](/docs/selenium-visual-regression/)

The following steps will guide you in running your first Visual Regression test on TestMu AI SmartUI platform using GitHub App-

### Step 1: Integrate the your TestMu AI Account with GitHub App

The following are the steps to integrate your account with GitHub App:

1. Go to [Integrations page](https://integrations.lambdatest.com/)
2. Search for GitHub App and select the integration.



3. Click on the `OAuth` as your preferred authentication.
4. Click on **Install**.



5. You will be redirected to the GitHub Authentication page to confirm the permissions required for the application to be installed.
6. Click on **Confirm** button to all the authentication requirements from your GitHub Account.
7. After successful authentication, you can refresh the [Integrations page](https://integrations.lambdatest.com/) to view the GitHub App installed.



Now, after the successful installation of the GitHub Integration, please follow the below steps to configure to your project repo:

### Step 2: Select your GitHub repository

Go to your GitHub repository where you want to configure your SmartUI project.

**GitHub Sample**

Please check out GitHub sample here: https://github.com/LambdaTest/smartui-node-sample



### Step 3: Configure your test suite

 Add the `GitHub` capability to your current test configuration:

```js
const capabilities: {
platform: "Windows 10",
browserName: "chrome",
version: "latest",
"smartUI.project": "SmartUI sample test",
// highlight-start
github: {

"url": process.env.GITHUB_URL  // Mandatory
//GitHub URL format-https://api.github.com/repos/OWNER/REPO/statuses/commitId

}
// highlight-end
}
```

### Step 4: Setting up your CI configuration

Setting up your **CI** workflow to execute on **GitHub**. Here is an example setup with `GitHub Actions`:

Go to `.github/workflows/.yml`

```yaml
name: Execute SmartUI Test with GitHub App Integration
runs-on: ubuntu-latest
steps:
- uses: actions/checkout@v1
with:
fetch-depth: 10

- name: Step for push event
run: |
echo "This is a push event!"
echo "The latest commitId $(git log -1 --format='%H')"
echo "COMMIT_ID=$(git log -1 --format='%H')" >> $GITHUB_ENV
if: github.event_name == 'push'

- name: Step for pull_request event
run: |
echo "This is a pull_request event!"
git log -n 5 --format="%H %an %s" | while read line; do echo "$line"; done
echo "The latest commitId $(git log -n 2 --format='%H' | tail -n 1)"
echo "COMMIT_ID=$(git log -n 2 --format='%H' | tail -n 1)" >> $GITHUB_ENV
if: github.event_name == 'pull_request'

- name: Create GitHub URL
run: |
API_HOST=https://api.github.com
echo "The latest commitId is $COMMIT_ID"
GITHUB_URL=$API_HOST/repos/$GITHUB_REPOSITORY/statuses/$COMMIT_ID
echo "GITHUB_URL: $GITHUB_URL"
echo "GITHUB_URL=$GITHUB_URL" >> $GITHUB_ENV
```

**Note**

We also support other Continuous Integrations (CI) tools to execute the similar process as well.



### Step 5: Execute your test suite with CI

After the setup is completed, you can now execute your test suite with the Continuous Integration (CI) pipeline with any tool of your choice.

**GitHub Actions - Example**

If your current pipeline is set to `GitHub Actions` then you can configure your `workflow` to trigger the test suite by committing the changes to the `GitHub Repo` or on raising a `Pull Request` to merge any changes to the branch as per your branch rules.





### GitHub App Feedback State

Here is an example of **Successful** feedback app state:


Here is an example of **Failed** feedback app state:


**Note**

You can click on `Details` link which will redirect the user to the build of the SmartUI test to view the results



To understand more about the GitHub Actions, setup please read this article : https://docs.github.com/en/actions/quickstart

## GitLab PR Checks with SmartUI Hooks

This guide shows you how to integrate SmartUI visual regression testing with GitLab merge requests using the **SmartUI Hooks** approach. This works for both **web testing** (Selenium, Playwright, Cypress, Puppeteer) and **mobile app testing** (Appium, WebdriverIO) across all supported languages.

**SmartUI Hooks vs SDK**

This guide covers the **SmartUI Hooks** approach, where you pass SmartUI capabilities directly in your test configuration. This is different from the SDK approach:

**SmartUI Hooks (This Guide):**
- ✅ No `npx smartui exec` command needed
- ✅ Tests run normally (e.g., `npm test`, `mvn test`, `pytest`)
- ✅ SmartUI integration happens automatically through capabilities
- ✅ Suitable for TypeScript/JavaScript/Java/Python/Ruby/C#/WebdriverIO/Appium
- ✅ Works with **web testing** (Selenium, Playwright, Cypress, Puppeteer)
- ✅ Works with **mobile app testing** (Appium, iOS/Android)

**SmartUI SDK:**
- Requires `npx smartui exec -- `
- Used for Java SDK and CLI-based projects
- See [SmartUI Appium Java SDK](/support/docs/smartui-appium-java-sdk) for SDK approach





### Prerequisites

Before you begin, ensure you have:

- TestMu AI account with active subscription
- GitLab repository with CI/CD enabled
- SmartUI project created in [TestMu AI SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
- Test suite configured (Selenium/Playwright/Cypress/Puppeteer/Appium/WebdriverIO)
- Test framework configured in your preferred language (TypeScript/JavaScript/Java/Python/Ruby/C#)
- TestMu AI credentials (`LT_USERNAME` and `LT_ACCESS_KEY`)



### Step 1: Integrate GitLab with TestMu AI

1. Go to [TestMu AI Integrations page](https://integrations.lambdatest.com/)
2. Search for **GitLab** and select the integration
3. Click on **OAuth** as your preferred authentication method
4. Click **Install** and authorize the integration
5. After successful authentication, refresh the Integrations page to verify GitLab is installed



**Integration Status**

You can verify your GitLab integration is active by checking the [Integrations page](https://integrations.lambdatest.com/). The GitLab integration should show as "Installed" or "Active".





### Step 2: Configure SmartUI Capabilities with GitLab Integration

Configure your test suite with SmartUI capabilities. Since you're using the **Hooks approach**, you'll pass SmartUI capabilities directly in your test configuration, including the GitLab integration capability.







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







**GitLab Capability Note**

The capability is named `github` (legacy name) but works with GitLab's API endpoint. Use the `GIT_URL` environment variable to pass the GitLab API URL. This is the same capability used for GitHub integration and supports both GitHub and GitLab status APIs.



#### Taking Screenshots with SmartUI Hooks

In your test code, use the SmartUI execute command to capture screenshots:




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




**Important**

The `visual: true` capability is **mandatory** for SmartUI visual regression testing. Without this capability, screenshots will not be captured and the build status will show as `Error`.





### Step 3: Configure GitLab CI/CD Pipeline

Create or update your `.gitlab-ci.yml` file. Since you're using **Hooks**, you just need to run your tests normally - no SmartUI CLI exec command required.

#### Complete GitLab CI/CD Configuration




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




#### Key Configuration Points

1. **No SmartUI CLI exec needed**: With Hooks, you run your tests normally (e.g., `npm test`, `mvn test`, `pytest`)
2. **GitLab Project ID**: Automatically available as `CI_PROJECT_ID` in GitLab CI/CD
3. **Commit SHA**: Use `CI_COMMIT_SHA` for regular commits, or `CI_MERGE_REQUEST_SHA` for merge requests
4. **GitLab API URL**: Export as `GIT_URL` environment variable, which your test capabilities will use
5. **GitLab API URL Format**: `https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}`

**How Hooks Work**

With SmartUI Hooks:
- You pass SmartUI capabilities (including `github.url` with `GIT_URL` for GitLab) in your test configuration
- Run your tests normally (no `npx smartui exec` command)
- SmartUI integration happens automatically through the capabilities
- GitLab PR checks are updated automatically when tests complete





### Step 4: Set Up GitLab CI/CD Variables

Configure the following variables in your GitLab project:

1. Go to your GitLab project → **Settings** → **CI/CD** → **Variables**
2. Add the following variables:



| Variable Name | Description |
|--------------|-------------|
| `LT_USERNAME` | Your TestMu AI username |
| `LT_ACCESS_KEY` | Your TestMu AI access key |
| `SMARTUI_PROJECT_NAME` | Your SmartUI project name |



### Step 5: View Pipeline Results in GitLab

After your pipeline runs, you can view the results in the GitLab Pipelines page:



The pipeline will show:
- **Pipeline status** (Success/Failed)
- **Job status** for SmartUI tests
- **Screenshot statistics** (Total, Approved, Changes Found) in the job tooltip



### Step 6: View PR Check Results in GitLab Merge Request

After your pipeline runs, you'll see SmartUI status checks in your GitLab merge request:



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



### Complete Working Examples







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









### Troubleshooting




**Issue: PR Check Not Appearing in GitLab**

**Symptoms**: Pipeline runs but no SmartUI status check appears in merge request.

**Solutions**:
1. Verify GitLab integration is active in [TestMu AI Integrations](https://integrations.lambdatest.com/)
2. Check that `github.url` capability is correctly set in your test configuration
3. Verify `GIT_URL` environment variable is exported in CI/CD pipeline
4. Ensure `CI_PROJECT_ID` and `CI_COMMIT_SHA` are correctly set
5. For merge requests, use `CI_MERGE_REQUEST_SHA` instead of `CI_COMMIT_SHA`
6. Check test logs to ensure tests completed successfully
7. Verify GitLab API URL format: `https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}`




**Issue: Tests Run But No Screenshots in SmartUI**

**Symptoms**: Pipeline completes successfully but no screenshots appear in SmartUI dashboard.

**Solutions**:
1. Verify `visual: true` is set in capabilities
2. Check `smartUI.project` capability matches your SmartUI project name
3. Ensure `LT_USERNAME` and `LT_ACCESS_KEY` are correctly set
4. Verify you're using the correct TestMu AI grid URL:
   - Web testing: `@hub.lambdatest.com/wd/hub`
   - Mobile testing: `@mobile-hub.lambdatest.com/wd/hub`
5. Check test logs for SmartUI execute command errors
6. Verify SmartUI project exists and is accessible
7. Ensure screenshot commands are being called in your tests




**Issue: GitLab URL Not Available in Tests**

**Symptoms**: Tests run but GitLab PR check doesn't update.

**Solutions**:
1. Verify `GIT_URL` is exported in CI/CD pipeline before test execution
2. Check that `github.url` capability is reading from `GIT_URL` environment variable
3. Add debug logging to verify URL is set
4. Ensure URL format is correct: `https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}`
5. Verify the URL is set in the same script block that runs tests






### Key Differences: Hooks vs SDK

| Aspect | SmartUI Hooks (This Guide) | SmartUI SDK |
|--------|---------------------------|-------------|
| **Command** | Run tests normally (`npm test`, `mvn test`, `pytest`) | Use `npx smartui exec -- ` |
| **Integration** | Automatic via capabilities | Requires CLI wrapper |
| **Setup** | Add capabilities to test config | Configure CLI and run with exec |
| **GitLab Integration** | Add `github.url` capability with `GIT_URL` | Use `--gitURL` parameter with exec |
| **Languages** | TypeScript/JS/Java/Python/Ruby/C#/WebdriverIO/Appium | Java SDK, CLI projects |
| **Java Support** | ✅ Yes - Use capabilities with `github` capability | ✅ Yes - Use `npx smartui exec -- mvn test` |



### Next Steps

- Learn about [SmartUI Appium Hooks](/support/docs/smartui-appium-hooks) for detailed mobile testing guide
- Check the [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/) for common issues
- Review [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/) for advanced pipeline configuration



### Related Documentation

- [SmartUI with GitLab](/support/docs/smartui-with-gitlab) - General GitLab integration guide
- [SmartUI Appium Hooks](/support/docs/smartui-appium-hooks) - Mobile testing with Appium Hooks
- [SmartUI Mobile Testing Overview](/support/docs/smartui-appium-sdk) - Mobile testing frameworks overview
- [SmartUI Project Settings](/support/docs/smartui-project-settings) - Configure SmartUI projects
- [GitHub App Integration](/support/docs/smartui-github-app-integration/#github-app) - Similar integration pattern for GitHub

## GitLab PR Checks with SmartUI Exec (SDK)

This guide shows you how to integrate SmartUI visual regression testing with GitLab merge requests using the **SmartUI SDK/Exec method**. This works for both **web testing** (Selenium, Playwright, Cypress, Puppeteer) and **mobile app testing** (Appium, WebdriverIO) across all supported languages.

**SmartUI SDK/Exec vs Hooks**

This guide covers the **SmartUI SDK/Exec approach**, where you use `npx smartui exec -- ` to run your tests. This is different from the Hooks approach:

**SmartUI SDK/Exec (This Guide):**
- ✅ Uses `npx smartui exec -- `
- ✅ Works with Java SDK and CLI-based projects
- ✅ Requires SmartUI CLI installation
- ✅ Suitable for Selenium/Playwright/Cypress/Puppeteer/Appium
- ✅ Works with **web testing** (Selenium, Playwright, Cypress, Puppeteer)
- ✅ Works with **mobile app testing** (Appium, iOS/Android)

**SmartUI Hooks:**
- No `npx smartui exec` command needed
- Tests run normally (e.g., `npm test`, `mvn test`, `pytest`)
- SmartUI integration happens automatically through capabilities
- See [GitLab PR Checks with SmartUI Hooks](/support/docs/smartui-github-app-integration/#gitlab-pr-checks-with-smartui-hooks) for Hooks approach





### Prerequisites

Before you begin, ensure you have:

- TestMu AI account with active subscription
- GitLab repository with CI/CD enabled
- SmartUI project created in [TestMu AI SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
- Test suite configured (Selenium/Playwright/Cypress/Puppeteer/Appium/WebdriverIO)
- Test framework configured in your preferred language (TypeScript/JavaScript/Java/Python/Ruby/C#)
- TestMu AI credentials (`LT_USERNAME` and `LT_ACCESS_KEY`)
- SmartUI CLI installed (or use `npx @lambdatest/smartui-cli`)



### Step 1: Integrate GitLab with TestMu AI

1. Go to [TestMu AI Integrations page](https://integrations.lambdatest.com/)
2. Search for **GitLab** and select the integration
3. Click on **OAuth** as your preferred authentication method
4. Click **Install** and authorize the integration
5. After successful authentication, refresh the Integrations page to verify GitLab is installed



**Integration Status**

You can verify your GitLab integration is active by checking the [Integrations page](https://integrations.lambdatest.com/). The GitLab integration should show as "Installed" or "Active".





### Step 2: Configure SmartUI Project

Create or update your SmartUI configuration file (`.smartui.json`):

```json title=".smartui.json"
{
"projectName": "your-smartui-project-name",
"buildName": "smartui-build-${CI_PIPELINE_ID}",
"baseline": false
}
```

**Configuration File**

The SmartUI configuration file is used to specify project settings. You can also use environment variables or command-line options to override these settings.





### Step 3: Configure GitLab CI/CD Pipeline

Create or update your `.gitlab-ci.yml` file. The key difference with the Exec method is that you use `npx smartui exec --gitURL` to run your tests.

#### Complete GitLab CI/CD Configuration




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




#### Key Configuration Points

1. **SmartUI CLI Installation**: Install SmartUI CLI globally or use `npx @lambdatest/smartui-cli`
2. **GitLab Project ID**: Automatically available as `CI_PROJECT_ID` in GitLab CI/CD
3. **Commit SHA**: Use `CI_COMMIT_SHA` for regular commits, or `CI_MERGE_REQUEST_SHA` for merge requests
4. **GitLab API URL**: Construct as `https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}`
5. **Exec Command**: Use `npx smartui exec --gitURL "${GIT_URL}" -- `

**Understanding the SmartUI Exec Command**

The `npx smartui exec` command wraps your test execution and provides SmartUI integration:

```bash
npx smartui exec --gitURL "<gitlab-url>" -- <your-test-command>
```

- `--gitURL`: GitLab API URL for status updates (legacy name, works with GitLab)
- `--`: Separator before your test command
- ``: Your normal test command (e.g., `npm test`, `mvn test`, `pytest`)





### Step 4: Set Up GitLab CI/CD Variables

Configure the following variables in your GitLab project:

1. Go to your GitLab project → **Settings** → **CI/CD** → **Variables**
2. Add the following variables:



| Variable Name | Description |
|--------------|-------------|
| `LT_USERNAME` | Your TestMu AI username |
| `LT_ACCESS_KEY` | Your TestMu AI access key |
| `PROJECT_TOKEN` | Your SmartUI project token (found in SmartUI project settings) |

**Project Token**

The `PROJECT_TOKEN` is different from `LT_USERNAME` and `LT_ACCESS_KEY`. You can find it in your SmartUI project settings in the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/).





### Step 5: View Pipeline Results in GitLab

After your pipeline runs, you can view the results in the GitLab Pipelines page:



The pipeline will show:
- **Pipeline status** (Success/Failed)
- **Job status** for SmartUI tests
- **Screenshot statistics** (Total, Approved, Changes Found) in the job tooltip



### Step 6: View PR Check Results in GitLab Merge Request

After your pipeline runs, you'll see SmartUI status checks in your GitLab merge request:



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



### Complete Working Examples







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









### Troubleshooting




**Issue: PR Check Not Appearing in GitLab**

**Symptoms**: Pipeline runs but no SmartUI status check appears in merge request.

**Solutions**:
1. Verify GitLab integration is active in [TestMu AI Integrations](https://integrations.lambdatest.com/)
2. Check that `--gitURL` parameter is correctly set in the exec command
3. Verify GitLab API URL format: `https://gitlab.com/api/v4/projects/{projectId}/statuses/{commitId}`
4. Ensure `CI_PROJECT_ID` and `CI_COMMIT_SHA` are correctly set
5. For merge requests, use `CI_MERGE_REQUEST_SHA` instead of `CI_COMMIT_SHA`
6. Check pipeline logs to ensure tests completed successfully
7. Verify SmartUI CLI is installed and accessible




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






### Key Differences: Exec vs Hooks

| Aspect | SmartUI Exec (This Guide) | SmartUI Hooks |
|--------|---------------------------|---------------|
| **Command** | Use `npx smartui exec --gitURL  -- ` | Run tests normally (`npm test`, `mvn test`, `pytest`) |
| **Integration** | Requires CLI wrapper | Automatic via capabilities |
| **Setup** | Install SmartUI CLI, configure `.smartui.json` | Add capabilities to test config |
| **GitLab Integration** | Use `--gitURL` parameter with exec | Add `github.url` capability |
| **Languages** | Java SDK, CLI projects, all frameworks | TypeScript/JS/Java/Python/Ruby/C#/WebdriverIO/Appium |
| **Project Token** | Required (`PROJECT_TOKEN`) | Not required (uses `LT_USERNAME`/`LT_ACCESS_KEY`) |
| **Server Address** | May need `SMARTUI_SERVER_ADDRESS` for non-Selenium | Not required |



### Next Steps

- Learn about [SmartUI CLI Exec Commands](/support/docs/smartui-cli-exec) for detailed exec usage
- Check the [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/) for common issues
- Review [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/) for advanced pipeline configuration



### Related Documentation

- [GitLab PR Checks with SmartUI Hooks](/support/docs/smartui-github-app-integration/#gitlab-pr-checks-with-smartui-hooks) - Hooks approach for GitLab integration
- [SmartUI with GitLab](/support/docs/smartui-with-gitlab) - General GitLab integration guide
- [SmartUI CLI Exec Commands](/support/docs/smartui-cli-exec) - Detailed exec command reference
- [SmartUI Project Settings](/support/docs/smartui-project-settings) - Configure SmartUI projects
- [SmartUI Appium Java SDK](/support/docs/smartui-appium-java-sdk) - Java SDK documentation
