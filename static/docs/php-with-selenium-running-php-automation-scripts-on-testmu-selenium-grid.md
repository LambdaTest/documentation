# Selenium With PHP

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your PHP Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites

Before you start, you need a TestMu AI account with your credentials, plus PHP, Composer, and the Selenium WebDriver for PHP installed.

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

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## Step 3: Configure Your Test Capabilities

Every framework below connects to the grid and passes your browser and OS choices through a capabilities array:

```php
$capabilities = array(
"build" => "your build name",
"name" => "your test name",
"platform" => "Windows 10",
"browserName" => "Chrome",
"version" => "latest"
);
```

What changes between frameworks is only how those capabilities are supplied: a YAML config, a suite file, or an inline setup class. That is what each tab covers.

Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build a capabilities block for any browser, version, and OS combination.

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

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then run.

Behat is BDD for PHP: feature files plus step definitions, with the grid config in a Behat YAML file.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/behat-selenium-sample):

```bash
git clone https://github.com/LambdaTest/behat-selenium-sample
cd behat-selenium-sample
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
