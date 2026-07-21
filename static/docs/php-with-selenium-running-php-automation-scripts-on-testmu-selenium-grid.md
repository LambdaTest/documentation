# Selenium With PHP

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run PHP tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Complete the following steps before you begin automation testing with Selenium.

1. Install the latest **PHP** on your system. Use the following commands in the terminal:

   * **MacOS:** Previous versions of **MacOS** have **PHP** installed by default. For the latest **MacOS** versions starting with **Monterey**, download and install **PHP** manually:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install php
```
   * **Windows:** Download **PHP** from [PHP for Windows](http://windows.php.net/download/). Also, refer to the [PHP Windows installation guide](http://php.net/manual/en/install.windows.php) to ensure PHP is accessible through Command Prompt (cmd).

2. Download **composer** in the project directory ([Linux/MacOS](https://getcomposer.org/download/), [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)).

   **Note:** To use the **composer** command directly, it either should have been downloaded in the project directory or should be accessible globally which can be done by the command below:
```bash
mv composer.phar /usr/local/bin/composer
```

## Step 1: Clone the Sample Project

Clone the repository and install dependencies.

```bash
git clone https://github.com/LambdaTest-sample-test-frameworks/Php-Selenium
cd Php-Selenium
```

Install the composer dependencies:
```bash
composer install
```

## Step 2: Set Your Credentials

Configure your credentials to connect to the TestMu AI Selenium Grid.

Set TestMu AI `Username` and `Access Key` in environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Define browser, version, and OS settings for your test run.

In the test script, update your test capabilities to select OS, browser, browser version, and other settings.

```php
//Basic Test Configurations For PHP

$capabilities = array(
"build" => "your build name",
"name" => "your test name",
"platform" => "macOS High Sierra",
"browserName" => "Firefox",
"version" => "64.0",
"resolution" => "1280x1024",
"selenium_version" => "3.13.0",
"screenshot" => true,
"firefox.driver" => "v0.23.0"
)
```

**Capabilities Generator**
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.

## Step 4: Run the Test

Execute the PHP Selenium test from the command line.

```bash
php tests/LambdaTest.php
```

## Step 5: View Your Results

Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run PHP Selenium Tests Using Agent Skills

Use AI coding assistants to generate and run PHP Selenium tests with the TestMu AI Agent Skill.

The [selenium-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/selenium-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/selenium-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
