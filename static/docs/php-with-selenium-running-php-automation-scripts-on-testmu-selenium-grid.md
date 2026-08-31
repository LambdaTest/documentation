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









  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}







## How the Sample Test Works


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


Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build a capabilities block for any browser, version, and OS combination.


## Run a Test in Your Framework


Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then run.





Behat is BDD for PHP: feature files plus step definitions, with the grid config in a Behat YAML file.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/behat-selenium-sample):

```bash
php tests/LambdaTest.php
```

## Step 5: View Your Results

Check the test output on the console and the TestMu AI dashboard.

The `user` and `key` values are read from the `LT_USERNAME` and `LT_ACCESS_KEY` environment variables you set in the [Set Your Credentials](#set-your-credentials) section.

3. Install the dependencies:

```bash
composer install
```

4. Run a single test, or in parallel:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/selenium-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/selenium-skill .cursor/skills/
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
