---
id: guide-to-php
title: Running PHP Tests on Online Selenium Grid | TestMu AI
hide_title: true
sidebar_label: Quick Guide To Run PHP
description: Guide to running PHP and Selenium test scripts on TestMu AI Selenium automation grid online. Automated cross browser testing online using Selenium and PHP on 3000+ browsers on cloud
keywords:
  - TestMu AI automation using php
  - php and Selenium automation
  - php documentation TestMu AI
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/quick-guide-to-run-php-tests-on-testmu-selenium-grid/
site_name: LambdaTest
slug: quick-guide-to-run-php-tests-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/quick-guide-to-run-php-tests-on-testmu-selenium-grid/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# Quick Guide To Run PHP Tests on <BrandName /> Selenium Grid
***

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Running PHP Tests",
          "item": `${BRAND_URL}/support/docs/quick-guide-to-run-php-tests-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

<BrandName />'s cloud-based Selenium grid can be leveraged to run your automation test scripts on 3000+ different browser and operating system environments. It’s a scalable, reliable, and secure online [Selenium grid](https://www.lambdatest.com/selenium-automation) infrastructure that not only helps you in increasing test coverage, but also cut down execution of your test automation builds by significant margin. This post will help you get started with running your PHP based Selenium automation scripts on <BrandName /> Selenium grid.

## Prerequisites
***

Running PHP scripts require your local system to have both PHP and Composer. Here’s how you can setup your PHP environment for running Selenium scripts.

- First step is to install the latest PHP build. Latest MacOS systems come with PHP pre-installed, however for windows users and linux users, you can download PHP from [here](https://www.php.net/manual/en/install.php).

- Next step is to install Composer. Open up terminal and navigate to the folder that have PHP installed. Run the following command.

```javascript
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '93b54496392c062774670ac18b134c3b3a95e5a5e5c8f1a9f115f203b75bf9a129d5daa8ba6a13e2cc8a1da0806388a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```
- If you are using XAMPP or MAMP, you may have to open up PHP shell by pressing the button shown in picture below:

<img loading="lazy" src={require('../assets/images/guide-to-php/guide-to-php-1.webp').default} alt="Xampp control pannelto start selenium php tests" width="682" height="440" className="doc_img"/>

Once you have composer installed, you can leverage Composer to download and install Selenium dependencies. For that, first create a composer.json file in your directory and add the following JSON code:

```javascript
{
  "require": {
    "phpunit/phpunit-selenium": "*",
    "facebook/webdriver": "dev-master"
  } 
}
```
## Installing Selenium Dependencies For PHP
***

Now all you would have to do is to run composer to install Selenium. You can do that by running following command in your terminal:

    composer install

If you are using XAMPP or MAMP you may have to be a little more specific.

    php composer.phar install

## Sample PHP & Selenium Test To Get You started
***

Once you have installed and setup PHP and Selenium, you are now ready to run PHP automation scripts on <BrandName /> Selenium Grid. Checkout the simple sample code below. This is a simple PHP and Selenium automation script that opens up google.com, searches <BrandName /> and outputs the title of the resultant google search page. You can also fork it from our [PHP GitHub repository](https://github.com/LambdaTest/php-selenium-sample).

### PHP Sample Test
***

```javascript
<?php
 
/*
    LambdaTest selenium automation sample example
    Configuration
    ----------
    username: Username can be found at automation dashboard
    accessToken:  AccessToken can be generated from automation dashboard or profile section
 
    Result
    -------
    Execute PHP Automation Tests on LambdaTest Distributed Selenium Grid
*/
 
require 'vendor/autoload.php';
 
class LambdaTest{
 
  /*
      Setup remote driver
      Params
      ----------
      platform : Supported platform - (Windows 10, Windows 8.1, Windows 8, Windows 7, macOS High Sierra, macOS Sierra, OS X El Capitan, OS X Yosemite, OS X Mavericks)
      browserName : Supported platform - (chrome, firefox, Internet Explorer, MicrosoftEdge, Safari)
      version :  Supported list of version can be found at https://www.lambdatest.com/capabilities-generator/
  */
  protected static $driver;
 
  public function searchTextOnGoogle() {
    # username: Username can be found at automation dashboard      
    $LT_USERNAME = "{YOUR_LAMBDATEST_USERNAME}";
     
    # accessKey:  AccessKey can be generated from automation dashboard or profile section
    $LT_APPKEY = "{YOUR_LAMBDATEST_ACCESS_KEY}";
 
    $LT_BROWSER = "chrome";
    $LT_BROWSER_VERSION ="63.0";
    $LT_PLATFORM = "windows 10";
     
    # URL: https://{username}:{accessToken}@hub.lambdatest.com/wd/hub
    $url = "https://". $LT_USERNAME .":" . $LT_APPKEY ."@hub.lambdatest.com/wd/hub";       
     
    # setting desired capabilities for the test
    $desired_capabilities = new DesiredCapabilities();
        $desired_capabilities->setCapability('browserName',$LT_BROWSER);
        $desired_capabilities->setCapability('version', $LT_BROWSER_VERSION);
        $desired_capabilities->setCapability('platform', $LT_PLATFORM);
        $desired_capabilities->setCapability('name', "Php");
        $desired_capabilities->setCapability('build', "Php Build");
        $desired_capabilities->setCapability('network', true);
        $desired_capabilities->setCapability('visual', true);
        $desired_capabilities->setCapability('video ', true);
        $desired_capabilities->setCapability('console', true);
     
    /*
        Setup remote driver
        Params
        ----------
        Execute test:  navigate google.com search LambdaTest
        Result
        -------
        print title
    */
        self::$driver = RemoteWebDriver::create($url, $desired_capabilities);      
                 
    self::$driver->get("https://www.google.com/ncr");
 
        $element = self::$driver->findElement(WebDriverBy::name("q"));
    if($element) {
      $element->sendKeys("LambdaTest");
      $element->submit();
    }
     
    print self::$driver->getTitle();
    self::$driver->quit();
  }    
}
 
$lambdaTest = new LambdaTest();
$lambdaTest->searchTextOnGoogle(); 
 
?>
```

You can execute the test from your terminal through this command.

    vendor/bin/phpunit lambdatest.php

Do note the use of remote webdriver here. We have passed browser environment configurations through capabilities class. You can set your environment details as you wish.

To setup your own environment for the test you can leverage our Capability Generator tool.

<center><a href="https://www.lambdatest.com/capabilities-generator/"><button name="button"><BrandName /> Capability Generator Tool</button></a></center>

> **Tear Down**: The tear down method helps <BrandName /> platform understand when the execution of a test is finished. It’s important to tear down each test or else it will give timeout errors

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/getting-started-with-testmu-automation/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Guide To Run PHP Tests on Selenium Grid</span>
    </li>
  </ul>
</nav>
