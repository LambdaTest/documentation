---
id: php-framework
title: PHP Automated Testing:Run PHP Web Automation Scripts On Online Selenium Grid
hide_title: true
sidebar_label: PHP
description: Complete guide to running your first PHP Selenium automation test scripts on LambdaTest Selenium Grid cloud. Test on 3000+ different desktop and mobile browsers.
keywords:
  - php selenium
  - php selenium tutorial
  - php selenium webdriver
  - php selenium testing
  - selenium
  - selenium automation testing
  - selenium testing tool
  - selenium testing tutorial
image: /assets/images/og-images/PHP-automated-testing.jpg
url: https://www.lambdatest.com/support/docs/php-with-selenium-running-php-automation-scripts-on-lambdatest-selenium-grid/
site_name: LambdaTest
slug: php-with-selenium-running-php-automation-scripts-on-lambdatest-selenium-grid/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "PHP Framework",
          "item": "https://www.lambdatest.com/support/docs/php-with-selenium-running-php-automation-scripts-on-lambdatest-selenium-grid/"
        }]
      })
    }}
></script>

# PHP with Selenium: Tutorial to Run Your First Test on LambdaTest
* * *

In this topic, you will learn how to configure and run your PHP automation testing scripts on [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation).

## Objective
***

By the end of this topic, you will be able to:

1. Set up an environment for testing your locally hosted web pages using **PHP** automation testing.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Test your locally hosted pages on LambdaTest platform.
4. Explore advanced features of LambdaTest.

>**Note:** All the code samples in this documentation can be found in the [Behat LambdaTest Repository on  GitHub](https://github.com/LambdaTest-sample-test-frameworks/Php-Selenium). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running PHP Selenium Scripts
***
Before you begin automation testing with Selenium, you would need to:

* Make sure that you have the latest **PHP** installed on your system. You can download and install **PHP** using following commands in the terminal:

  * **MacOS:** Previous versions of **MacOS** have **PHP** installed by default. But for the latest **MacOS** versions starting with **Monterey**, **PHP** has to be downloaded and installed manually by using below commands: 
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  brew install php
  ```
    * **Windows:** 
  
For **Windows**, you can download **PHP** from [PHP for Windows](http://windows.php.net/download/) website. Also, refer to this [documentation](http://php.net/manual/en/install.windows.php) for ensuring the accessibility of PHP through Command Prompt(cmd).

* Download **composer** in the project directory ([Linux/MacOS](https://getcomposer.org/download/), [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)).

  **Note:** To use the **composer** command directly, it either should have been downloaded in the project directory or should be accessible globally which can be done by the command below:
  ```bash
  mv composer.phar /usr/local/bin/composer
  ```
### Installing Selenium Dependencies and Tutorial Repo
**Step 1:** Clone the LambdaTest’s [Php-Selenium repository](https://github.com/LambdaTest-sample-test-frameworks/Php-Selenium) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest-sample-test-frameworks/Php-Selenium
cd Php-Selenium
```
**Step 2:** Install the composer dependencies in the current project directory using the command below:
```bash
composer install
```

### Setting Up Your Authentication
Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest Selenium Grid. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build) or through [LambdaTest Profile](https://accounts.lambdatest.com/login).

**Step 3:** Set LambdaTest `Username` and `Access Key` in environment variables.
  * For **Linux/macOS**:
  ```bash
  export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```
  * For **Windows**:
  ```bash
  set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```

## Run Your First Test
***
### Sample Test with PHP
Let's check the sample test script `LambdaTest.php`.

```php
<?php

require 'vendor/autoload.php';

$GLOBALS['LT_USERNAME'] = getenv('LT_USERNAME');

$GLOBALS['LT_ACCESS_KEY'] = getenv('LT_ACCESS_KEY');

$GLOBALS['LT_BROWSER'] = getenv('LT_BROWSER');
if(!$GLOBALS['LT_BROWSER']) $GLOBALS['LT_BROWSER'] = "chrome";

$GLOBALS['LT_BROWSER_VERSION'] = getenv('LT_BROWSER_VERSION');
if(!$GLOBALS['LT_BROWSER_VERSION']) $GLOBALS['LT_BROWSER_VERSION'] ="63.0";

$GLOBALS['LT_OPERATING_SYSTEM'] = getenv('LT_OPERATING_SYSTEM');
if(!$GLOBALS['LT_OPERATING_SYSTEM']) $GLOBALS['LT_OPERATING_SYSTEM'] = "win10";

class LambdaTest{
	
   protected static $driver;

   public function testAdd() {		
		
		$url = "https://". $GLOBALS['LT_USERNAME'] .":" . $GLOBALS['LT_ACCESS_KEY'] ."@hub.lambdatest.com/wd/hub";		
		$desired_capabilities = new DesiredCapabilities();
		$desired_capabilities->setCapability('browserName',$GLOBALS['LT_BROWSER']);
		$desired_capabilities->setCapability('version', $GLOBALS['LT_BROWSER_VERSION']);
		$desired_capabilities->setCapability('platform', $GLOBALS['LT_OPERATING_SYSTEM']);
		$desired_capabilities->setCapability('name', "PHPTestSample");
		$desired_capabilities->setCapability('build', "LambdaTestSampleApp");
		$desired_capabilities->setCapability('network', true);
		$desired_capabilities->setCapability('visual', true);
		$desired_capabilities->setCapability('video ', true);
		$desired_capabilities->setCapability('console', true);
		
		self::$driver = RemoteWebDriver::create($url, $desired_capabilities); 		
				
		$itemName = 'Yey, Lets add it to list';
        self::$driver->get("https://4dvanceboy.github.io/lambdatest/lambdasampleapp.html");
        $element1 = self::$driver->findElement(WebDriverBy::name("li1"));
		$element1->click();
			
            
		$element2 = self::$driver->findElement(WebDriverBy::name("li2"));
        $element2->click();
			
		$element3 = self::$driver->findElement(WebDriverBy::id("sampletodotext"));
		$element3->sendKeys($itemName);
			
		$element4 = self::$driver->findElement(WebDriverBy::id("addbutton"));			
		$element4->click();
			
        self::$driver->wait(10, 500)->until(function($driver) {
           $elements = $driver->findElements(WebDriverBy::cssSelector("[class='list-unstyled'] li:nth-child(6) span"));
           return count($elements) > 0;
        });
		
		self::$driver->quit();
    }
			
}

  $lambdaTest = new LambdaTest();
  $lambdaTest->testAdd();
  
?>
```

### Configuration Of Your Test Capabilities

**Step 4:** In the test script, you need to update your test capabilities. Here, the code will select the basic capabilities such as OS, browser, browser version and so on.
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
    "firefox.driver" => v0.23.0
    )
```
> **Note:** You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.


### Executing the Test
**Step 5:** The tests can be executed in the terminal using the following command:
```bash
php tests/LambdaTest.php
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build). LambdaTest Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.


## Testing Locally Hosted or Privately Hosted Projects
***
You can test your locally hosted or privately hosted projects with [LambdaTest Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using LambdaTest Tunnel app. All you would have to do is set up an SSH tunnel using LambdaTest Tunnel app and pass toggle `tunnel = True` via desired capabilities. LambdaTest Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [LambdaTest Tunnel documentation](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish LambdaTest Tunnel.

>Download the binary file of:
>* [LambdaTest Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [LambdaTest Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [LambdaTest Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Open command prompt and navigate to the binary folder.

Run the following command:
```bash
LT -user {user’s login email} -key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT -user lambdatest@example.com -key 123456
```
Once you are able to connect **LambdaTest Tunnel** successfully, you would just have to pass on to set the tunnel value to true by adding the following line in your config files:

**Tunnel Capability**
```php
 "tunnel" => true
```

## Additional Links
***
* [Advanced Configuration for Capabilities](https://www.lambdatest.com/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/)
* [How to integrate LambdaTest with CI/CD](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/)


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        PHP Framework
      </span>
    </li>
  </ul>
</nav>