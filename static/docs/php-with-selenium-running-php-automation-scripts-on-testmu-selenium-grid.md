# How to Run Selenium Tests With PHP on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your PHP Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites

Before you start, you need a TestMu AI account with your credentials, plus PHP, Composer, and the Selenium WebDriver for PHP installed.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install the latest [PHP](https://www.php.net/downloads) and [Composer](https://getcomposer.org/).
4. Install the Selenium WebDriver for PHP (pulled in by the sample projects via Composer).

## Set Your Credentials

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## How the Sample Test Works

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

## Run a Test in Your Framework

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then run.

Behat is BDD for PHP: feature files plus step definitions, with the grid config in a Behat YAML file.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/behat-selenium-sample):

```bash
git clone https://github.com/LambdaTest/behat-selenium-sample
cd behat-selenium-sample
```

2. Set your browser and OS in the Behat config:

```yaml title="behat.yml"
default:
context:
parameters:
lambdatest:
server: "hub.lambdatest.com"
user: "YOUR_LAMBDATEST_USERNAME"
key: "YOUR_LAMBDATEST_ACCESS_KEY"
capabilities:
build: "behat-selenium-sample"
name: "single-behat-test"
environments:
- browserName: chrome
version: 71.0
platform: Win10
```

The `user` and `key` values are read from the `LT_USERNAME` and `LT_ACCESS_KEY` environment variables you set in the [Set Your Credentials](#set-your-credentials) section.

3. Install the dependencies:

```bash
composer install
```

4. Run a single test, or in parallel:

```bash
composer single
composer parallel
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

Laravel Dusk provides a fluent browser-automation API. Credentials and the grid live in the project's `.env` and `tests/DuskTestCase.php`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/php-laravel-dusk-todo):

```bash
git clone https://github.com/LambdaTest/php-laravel-dusk-todo
cd php-laravel-dusk-todo
```

2. Set your browser and OS in the `$capabilities` array:

```php
$capabilities = array(
"build" => "LaravelDusk Build",
"name" => "LaravelDusk Build",
"platform" => "Windows 10",
"browserName" => "Chrome",
"version" => "latest"
);
```

3. Install the dependencies:

```bash
composer install
```

4. Run the test:

```bash
php artisan dusk
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

Codeception configures the grid in its acceptance suite's WebDriver module, with credentials in the host URL.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/codeception-selenium-sample):

```bash
git clone https://github.com/LambdaTest/codeception-selenium-sample
cd codeception-selenium-sample
```

2. Set your browser and OS in the acceptance suite config:

```yaml title="acceptance.suite.yml"
modules:
enabled:
- WebDriver:
url: 'https://lambdatest.github.io/sample-todo-app/'
host: '{username}:{token}@hub.lambdatest.com'
port: 80
browser: chrome
capabilities:
name: 'Codeception Example'
build: '1.0'
browserName: 'Chrome'
platform: 'Windows 10'
version: '71.0'
```

In the `host` value, `{username}` and `{token}` are your `LT_USERNAME` and `LT_ACCESS_KEY` environment variables set in the [Set Your Credentials](#set-your-credentials) section.

3. Install the dependencies:

```bash
composer install
```

4. Run the test:

```bash
./vendor/bin/codecept run --steps
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

PHPUnit keeps capabilities inline in `LambdaTestSetup.php`, with Composer scripts for single and parallel runs.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Php-PhpUnit-Selenium):

```bash
git clone https://github.com/LambdaTest/Php-PhpUnit-Selenium
cd Php-PhpUnit-Selenium
```

2. Set your browser and OS in the `$capabilities` array (`LambdaTestSetup.php`):

```php
$capabilities = array(
"build" => "Sample PHPUnit Build",
"name" => "Sample PHPUnit Test",
"platform" => "Windows 10",
"browserName" => "Chrome",
"version" => "latest"
);
```

3. Install the dependencies:

```bash
composer install
```

4. Run a single test, in parallel, or both:

```bash
composer single
composer parallel
composer test
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

## View Your Results

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

**Next steps:** If this is your first run, walk through [running your first Selenium test](/support/docs/testmu-running-your-first-selenium-test/) end to end. From there, explore the full set of [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) you can pass to the grid, learn how to [debug your Selenium tests](/support/docs/debugging-options/), and organize and [filter your Selenium tests](/support/docs/filter-your-selenium-tests/) as your suite grows.

## Next Steps

Continue with these related guides:

- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Debugging Options](/support/docs/debugging-options/)
- [Filter Your Selenium Tests](/support/docs/filter-your-selenium-tests/)
