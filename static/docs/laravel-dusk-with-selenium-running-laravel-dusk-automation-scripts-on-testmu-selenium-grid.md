# Selenium With Laravel Dusk

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Run Laravel Dusk tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Complete the following steps before you begin automation testing with Laravel Dusk.

1. Download **PHP 8.1 or later** (current LTS recommended). Use the following commands in the terminal:

   * **MacOS:** Previous versions of **MacOS** have **PHP** installed by default. For the latest **MacOS** versions starting with **Monterey**, download and install **PHP** manually:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install php
```
   * **Windows:** Download **PHP** from [PHP for Windows](http://windows.php.net/download/) and add it to your system PATH. Refer to the [PHP Windows installation guide](http://php.net/manual/en/install.windows.php) to ensure PHP is accessible through Command Prompt (cmd).

2. Download **composer** in the project directory ([Linux/MacOS](https://getcomposer.org/download/), [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)).

   **Note:** To use the **composer** command directly, it either should have been downloaded in the project directory or should be accessible globally which can be done by the command below:
```bash
mv composer.phar /usr/local/bin/composer
```

## Step 1: Clone the Sample Project

Clone the repository and install dependencies.

```bash
git clone https://github.com/LambdaTest/php-laravel-dusk-todo
cd php-laravel-dusk-todo
```

Install the composer dependencies:
```bash
composer install
composer dump-autoload
```

## Step 2: Set Your Credentials

Configure your credentials to connect to the TestMu AI Selenium Grid.

Create .env from the example file:
```bash
cp .env.example .env
```

Update your TestMu AI credentials in the newly created .env file:
```bash
LT_USERNAME="<Your_Username>"
LT_ACCESS_KEY="<Your_Access_Key>"
```

Set TestMu AI `Username` and `Access Key` in environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Define browser, version, and OS settings for your test run.

Update platform configuration in the driver method of `tests/DuskTestCase.php` to specify the target where tests should run.

```php
$capabilities = array(
"build" => "LaravelDusk Build",
"name" => "LaravelDusk Build",
"platform" => "Windows 10",
"browserName" => "Chrome",
"version" => "latest"
);
```

**Capabilities Generator**
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.

## Step 4: Run the Test

Execute the Laravel Dusk test from the command line.

```bash
php artisan dusk
```

## Step 5: View Your Results

Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Laravel Dusk Tests Using Agent Skills

Use AI coding assistants to generate and run Laravel Dusk tests with the TestMu AI Agent Skill.

The [laravel-dusk-skill](https://github.com/LambdaTest/agent-skills/tree/main/laravel-dusk-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/laravel-dusk-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/laravel-dusk-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
