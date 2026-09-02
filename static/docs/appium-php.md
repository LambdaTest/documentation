# How to Run Appium PHP Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Running Appium PHP tests on TestMu AI automates native and hybrid mobile apps on real Android and iOS devices. Set your credentials, upload the app, configure desired capabilities, and execute test suites with Vanilla PHP or Behat without local infrastructure.

**Supported on:** Real &amp; Virtual devices

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

For **Windows**, download [**PHP**](http://windows.php.net/download/) and refer to the [documentation](http://php.net/manual/en/install.windows.php) for ensuring the accessibility of PHP through Command Prompt(cmd).

Please add PHP to Windows System Variables Path.

- Download **composer** in the project directory of ([Linux/MacOS](https://getcomposer.org/download/), [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)).

**note**

To use the **composer** command directly, it should have been downloaded in the project directory. In windows the composer gets installed in different directory. So, copy the 'composer.phar' to the project directory using copy command:

```bash
copy C:\ProgramData\ComposerSetup\bin\composer.phar
```

- Install the composer dependencies in the current project directory. The exact dependencies depend on the framework you plan to use:

```bash
composer update
php composer.phar require phpwhois/phpwhois
php composer.phar install
php composer.phar require php-webdriver/webdriver
```

```bash
composer update
php composer.phar require phpwhois/phpwhois
php composer.phar install
php composer.phar require php-webdriver/webdriver
php composer.phar require behat/behat
```

In case of any error, please try restarting.

## Set Your Credentials

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Upload Your App

Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk or .aab file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

Make sure to add the path of the **appFile** in the cURL request. Below is an example cURL request to upload your app using our REST API:

      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""`}

      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"`}

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step

## Run a Test With Your Framework

Pick your framework below. Each tab contains the complete flow for that framework, from getting the sample project through executing and monitoring your tests.

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

```php title="iOSApp.php"
<?php
require __dir__.'/vendor/autoload.php';
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\WebDriverWait;
use Facebook\WebDriver\WebDriverExpectedCondition;
use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\RemoteWebDriver;

$caps = array(
//highlight-next-line
"app"=> "APP_URL", //Enter app_url here
"deviceName" => "iPhone 11",
"platformName" => "ios",
"platformVersion" => "14",
"isRealMobile" => TRUE,
"visual" => TRUE,
"video" => TRUE,
"name" => "Php - iOS test",
"build" => "Php Vanilla - iOS"
);

//highlight-next-line
$username = getenv("LT_USERNAME") ? getenv("LT_USERNAME") : "USERNAME"; //Enter username here
//highlight-next-line
$accesskey = getenv("LT_ACCESS_KEY") ? getenv("LT_ACCESS_KEY") : "ACCESS_KEY"; //Enter accesskey here
$driver = RemoteWebDriver::create("http://$username:$accesskey@mobile-hub.lambdatest.com/wd/hub",$caps);
try{
$wait = new WebDriverWait($driver, 30);
$wait->until(WebDriverExpectedCondition::visibilityOfElementLocated(WebDriverBy::id('color')));
$color_element = $driver->findElement(WebDriverBy::id('color'));
$color_element->click();
$text_element = $driver->findElement(WebDriverBy::id('Text'));
$text_element->click();
$toast_element = $driver->findElement(WebDriverBy::id('toast'));
$toast_element->click();
$notification_element = $driver->findElement(WebDriverBy::id('notification'));
$notification_element->click();
sleep(2);
$wait->until(WebDriverExpectedCondition::visibilityOfElementLocated(WebDriverBy::id('geoLocation')));
$geolocation_element = $driver->findElement(WebDriverBy::id('geoLocation'));
$geolocation_element->click();
sleep(5);
$home_element = $driver->findElement(WebDriverBy::id('Back'));
$home_element->click();
$speedtest_element = $driver->findElement(WebDriverBy::id('speedTest'));
$speedtest_element->click();
sleep(5);
$home_element = $driver->findElement(WebDriverBy::id('Back'));
$home_element->click();
$browser_element = $driver->findElement(WebDriverBy::id('Browser'));
$browser_element->click();
$url_element = $driver->findElement(WebDriverBy::id('url'));
$url_element->sendKeys("https://www.testmuai.com");
$find_element = $driver->findElement(WebDriverBy::id('find'));
$find_element->click();
sleep(2);
$driver->quit();
}  finally {
$driver->quit();
}
?>
```

```php title="AndroidApp.php"
<?php
require 'vendor/autoload.php';
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\Remote;
use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\WebDriverExpectedCondition;
use Facebook\WebDriver\Remote\RemoteWebDriver;

$caps = array(
"app"=> "APP_URL", //Enter app_url here
"deviceName" => "Galaxy S20",
"platformName" => "Android",
"platformVersion" => "10",
"isRealMobile" => TRUE,
"visual" => TRUE,
"video" => TRUE,
"name" => "Php - Android test",
"build" => "Php Vanilla - Android"
);

//highlight-next-line
$username = getenv("LT_USERNAME") ? getenv("LT_USERNAME") : "USERNAME"; //Enter username here
//highlight-next-line
$accesskey = getenv("LT_ACCESS_KEY") ? getenv("LT_ACCESS_KEY") : "ACCESS_KEY"; //Enter accesskey here

$driver = RemoteWebDriver::create("http://$username:$accesskey@mobile-hub.lambdatest.com/wd/hub",$caps);

try{
$color_element = $driver->findElement(WebDriverBy::id('color'));
$color_element->click();

$text_element = $driver->findElement(WebDriverBy::id('Text'));
$text_element->click();

$toast_element = $driver->findElement(WebDriverBy::id('toast'));
$toast_element->click();

$notification_element = $driver->findElement(WebDriverBy::id('notification'));
$notification_element->click();

$geoLocation_element = $driver->findElement(WebDriverBy::id('geoLocation'));
$geoLocation_element->click();
sleep(5);

$url_element = $driver->findElement(WebDriverBy::id('url'));
$url_element->sendkeys("https://www.testmuai.com");

$find_element = $driver->findElement(WebDriverBy::id('find'));
$find_element->click();
sleep(2);

$driver->quit();
} finally {
$driver->quit();
}

?>
```

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```php title="iOS(.ipa)"
$caps = array(
//highlight-next-line
"app"=> "APP_URL", //Enter app_url here
"deviceName" => "iPhone 11",
"platformName" => "ios",
"platformVersion" => "14",
"isRealMobile" => TRUE,
"visual" => TRUE,
"video" => TRUE,
"name" => "Php - iOS test",
"build" => "Php Vanilla - iOS"
);
```

```php title="Android(.apk)"
$caps = array(
//highlight-next-line
"app"=> "APP_URL", //Enter app_url here
"deviceName" => "Galaxy S20",
"platformName" => "Android",
"platformVersion" => "10",
"isRealMobile" => TRUE,
"visual" => TRUE,
"video" => TRUE,
"name" => "Php - Android test",
"build" => "Php Vanilla - Android"
);
```

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 4: Execute and Monitor your Tests

- Execute the following command to run your test on TestMu AI platform:

```bash
php IOSApp.php
```

```bash
php AndroidApp.php
```

> Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Update your Automation Script

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

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests. The capabilities object in the sample code are defined as:

```yaml title="iossingle.conf.yml"
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

```yaml title="androidsingle.conf.yml"
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

### Step 4: Execute and Monitor your Tests

- Execute the following command to run your test on TestMu AI platform:

```bash
composer iossingle   #for single tests
composer iosparallel  #for parallel tests
```

```bash
composer androidsingle   #for single tests
composer androidparallel  #for parallel tests
```

> Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## View Your Results

Open the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build) to see your test. Each session includes a video recording, step-by-step screenshots, device logs, and network logs.

## Next Steps

Continue with these related guides:

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
