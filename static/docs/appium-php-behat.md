# Appium with Behat

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

In this documentation, you will learn how to trigger a automation script of **Behat** for application testing with **Appium** on TestMu AI, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of TestMu AI.

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Download and install the latest version of PHP in your system.

Previous versions of **MacOS** have **PHP** installed by default. But for the latest **MacOS** versions starting with **Monterey**, **PHP** has to be downloaded and installed manually by using below commands:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install php
```

```bash
sudo apt-get install curl libcurl3 libcurl3-dev php
```

For **Windows**, you can download **PHP** from [here](http://windows.php.net/download/). Also, refer to this [documentation](http://php.net/manual/en/install.windows.php) for ensuring the accessibility of PHP through Command Prompt(cmd).

Please add PHP to Windows System Variables Path.

- Download **composer** in the project directory from here ([Linux/MacOS](https://getcomposer.org/download/), [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)).

**note**
To use the **composer** command directly, it should have been downloaded in the project directory. In windows the composer gets installed in different directory. So, copy the 'composer.phar' to the project directory using copy command:

```bash
copy C:\ProgramData\ComposerSetup\bin\composer.phar
```

- Install the composer dependencies in the current project directory using the command below:

```php
composer update
php composer.phar require phpwhois/phpwhois
php composer.phar install
php composer.phar require php-webdriver/webdriver
php composer.phar require behat/behat
```

In case of any error, please try restarting.

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Setup the Environment Variables

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

### Step 3: Upload your Application
Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk or .aab file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

Make sure to add the path of the **appFile** in the cURL request. Below is an example cURL request to upload your app using our REST API:

      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""`}

      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"`}

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step

### Step 4: Update your Automation Script

An automation script for the sample application given above has been provided here.

```php title="FeatureContext.php"
<?php

require "vendor/autoload.php";

class FeatureContext extends LambdaContext {
/**
* @Given I am on the proverbial home page
*/
public function iAmOnTheProverbialHomePage()
{
echo "I am on the proverbial home page";

}

/**
* @When I click on color
*/
public function iClickOnColor()
{
$element = self::$driver->findElement(WebDriverBy::id("color"));
$element->click();
}

/**
* @When I click on text element
*/
public function iClickOnTextElement()
{
$element = self::$driver->findElement(WebDriverBy::id("Text"));
$element->click();
}

/**
* @When I click on notification element
*/
public function iClickOnNotificationElement()
{
$element = self::$driver->findElement(WebDriverBy::id("notification"));
$element->click();
}

/**
* @Then I click on toast element
*/
public function iClickOnToastElement()
{
$element = self::$driver->findElement(WebDriverBy::id("toast"));
$element->click();
}
}
```

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests. The capabilities object in the sample code are defined as:

```php title="iossingle.conf.yml"
user: "YOUR USERNAME HERE"       #Add LambdaTest username here
key: "YOUR ACCESS KEY HERE"      #Add LambdaTest accessKey here
capabilities:
build: "behat-appium-ios"
name: "single-behat-test"
isRealMobile: true
app: "lt://proverbial-ios"    #Add app url here
environments:
-
deviceName: iPhone 11
platform: ios
platformVersion: 14
```

```php title="androidsingle.conf.yml"
user: "YOUR USERNAME HERE"       #Add LambdaTest username here
key: "YOUR ACCESS KEY HERE"      #Add LambdaTest accessKey here
capabilities:
build: "behat-appium-android"
name: "single-behat-test"
isRealMobile: true
app: "lt://proverbial-android"   #Add your app url here
environments:
-
deviceName: Galaxy S21 Ultra 5G
platform: Android
platformVersion: 11
```

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `false` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 6: Execute and Monitor your Tests

- Execute the following command to run your test on TestMu AI platform:

```php
composer iossingle   #for single tests
composer iosparallel  #for parallel tests
```

```php
composer androidsingle   #for single tests
composer androidparallel  #for parallel tests
```

> Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the Behat Agent Skill with TestMu AI

The [behat-skill](https://github.com/LambdaTest/agent-skills/tree/main/behat-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The behat-skill package includes:

```
behat-skill/
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

### Installing Behat Agent Skill

Install a Behat Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/behat-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/behat-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only behat-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
