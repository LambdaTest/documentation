# Running Your First Project on SmartUI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This guide will walk you through the process of running your first visual regression test using SmartUI, a powerful feature of TestMu AI that ensures your web applications look flawless across all browsers and devices.
## Prerequisites

- Basic understanding of Command Line Interface and Selenium is required.
- Login to [TestMu AI SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on TestMu AI platform using SmartUI Selenium SDK integration.

## Step 1: Create a SmartUI Project
The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

- Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) and click on the **New Project** button.
- Select the platform as CLI for executing your **SDK** tests.
- Add name of the project, approver's name, and tags for any filter or easy navigation.
- Click on the **Continue** button.

Now select your desired framework and click on the **Configure** button. For the demo purpose we will select the Java framework.

## Step 2: Configure your Test Suite dependencies

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample code repository from the TestMu AI GitHub repository to run the project on the SmartUI.

 View on GitHub

- Add the following dependency in your `pom.xml` file

```xml title="pom.xml"
<dependency>
<groupId>io.github.lambdatest</groupId>
<artifactId>lambdatest-java-sdk</artifactId>
<version>1.0.23</version>
</dependency>
```

You can check the latest version of [lambdatest-java-sdk]( https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-java-sdk) and update the latest version accordingly.

- Install your CLI and required modules for running SmartUI SDK and compile your defined dependencies in the `pom.xml` file:

```zsh
npm install -g @lambdatest/smartui-cli
mvn clean compile
```

If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.

## Step 3: Setup your Project Token and Environment Variables

Setup your project token and credentials shown in the **SmartUI** app after creating your project.

### Setting Project Token

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

### Setting TestMu AI Credentials (for Hooks)

```bash
export LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
export LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```

```bash
set LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
set LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```

```powershell
$env:LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
$env:LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```

- For CLI projects, use `PROJECT_TOKEN` (no username/access key needed)
- For Hooks (Selenium, Playwright, etc.), use `LT_USERNAME` and `LT_ACCESS_KEY`

## Step 4: Create and Configure SmartUI Config
You can now configure your project configurations on using various available options to run your project with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
npx smartui config:create .smartui.json
```
Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

```javascript title="/smartui-sdk-project/.smartui.json"
{
"web": {
"browsers": [
"chrome",
"firefox",
"safari",
"edge"
],
"viewports": [
[
1920
],
[
1366
],
[
1028
]
] // Full Page screenshots are captured by default for web viewports
},
"mobile": {
"devices": [
"iPhone 14",  //iPhone 14 viewport
"Galaxy S24"  //Galaxy S24 viewport
],
"fullPage": true, //Full Page is true by default for mobile viewports
"orientation": "portrait" //Change to "landscape" for landscape snapshot
},
"waitForTimeout": 1000, //Optional (Should only be used in case lazy-loading/async components are present)
"waitForPageRender": 50000, //Optional (Should only be used in case of websites which take more than 30s to load)
"enableJavaScript": false, //Enable javascript for all the screenshots of the project
"allowedHostnames": [] //Additional hostnames to capture assets from
}
```
**Advanced options in SmartUI configuration**
- For capturing fullpage or viewport screenshots, please refer to this [documentation](/docs/smartui-sdk-config-options/#12-viewports)
- For the list of available mobile viewports, please refer to this [documentation](/docs/smartui-sdk-config-options/#list-of-supported-device-viewports)
- For more information about SmartUI config global options, please refer to this [documentation](/docs/smartui-sdk-config-options/#3-global-options-optional).

## Step 5: Adding SmartUI function to take screenshot
You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:

```java
//Importing the lambdatest-java SDK
//Rest of your code here

@Test
public void basicTest() throws Exception {
String spanText;
System.out.println("Loading URL");

driver.get("<Required URL>");
// ... test code snippet
// highlight-next-line
SmartUISnapshot.smartuiSnapshot(driver, "<Screenshot Name>");
}
```

## Step 6: Execute the Tests on SmartUI Cloud
Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui --config .smartui.json exec -- mvn test -D suite="sdk-cloud.xml"
```

You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

## Next Steps

Now that you've run your first project, explore these resources to enhance your visual testing:

- **Configure Your Project**: Learn about [Project Settings](/support/docs/smartui-project-settings) to customize comparison parameters
- **Handle Dynamic Content**: See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for pages with changing content
- **Manage Baselines**: Understand [Baseline Management](/support/docs/smartui-baseline-management) for effective test comparisons
- **Troubleshooting**: If you encounter issues, check the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)

## Using the SmartUI Agent Skill with TestMu AI

The [smartui-skill](https://github.com/LambdaTest/agent-skills/tree/main/smartui-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The smartui-skill package includes:

```
smartui-skill/
├── SKILL.md
└── reference/
├── playbook.md
└── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration

### Installing SmartUI Agent Skill

Install a SmartUI Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/smartui-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/smartui-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only smartui-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Solutions for common issues
- [Project Settings](/support/docs/smartui-project-settings) - Configure your project settings
- [Configuration Options](/support/docs/smartui-sdk-config-options) - Learn about all available configuration options
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Handle pages with dynamic content
- [Baseline Management](/support/docs/smartui-baseline-management) - Manage your test baselines
- [SDK Documentation](/support/docs/smartui-selenium-java-sdk) - Framework-specific integration guides
