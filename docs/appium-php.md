---
id: appium-php
title:  Appium with PHP
sidebar_label: PHP
description: Now you can run your automation scripts using Appium with PHP on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - appium
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.testmu.ai/support/docs/appium-php
site_name: LambdaTest
slug: appium-php
---


import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "PHP With Appium",
          "item": `${BRAND_URL}/support/docs/appium-php/`
        }]
      })
    }}
></script>

In this documentation, you will learn how to trigger a automation script of **PHP** for application testing with **Appium** on <BrandName />, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of <BrandName />.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://accounts.lambdatest.com/security).
- Download and install the latest version of PHP in your system.

<Tabs className="docs__val">

<TabItem value="phpmac" label="MacOS" default>

Previous versions of **MacOS** have **PHP** installed by default. But for the latest **MacOS** versions starting with **Monterey**, **PHP** has to be downloaded and installed manually by using below commands:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install php
```
</TabItem>

<TabItem value="phplinux" label="Linux" default>

```bash
sudo apt-get install curl libcurl3 libcurl3-dev php
```
</TabItem>

<TabItem value="phpwindows" label="Windows" default>

For **Windows**, download [**PHP**](http://windows.php.net/download/) and refer to the [documentation](http://php.net/manual/en/install.windows.php) for ensuring the accessibility of PHP through Command Prompt(cmd).

Please add PHP to Windows System Variables Path.
</TabItem>
</Tabs>

- Download **composer** in the project directory of ([Linux/MacOS](https://getcomposer.org/download/), [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)).

:::tip note

To use the **composer** command directly, it should have been downloaded in the project directory. In windows the composer gets installed in different directory. So, copy the 'composer.phar' to the project directory using copy command:

```bash
copy C:\ProgramData\ComposerSetup\bin\composer.phar
```

:::

- Install the composer dependencies in the current project directory using the command below:

```php
composer update
php composer.phar require phpwhois/phpwhois
php composer.phar install
php composer.phar require php-webdriver/webdriver
```

In case of any error, please try restarting.

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/lambdatest/LT-appium-php" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Setup the Environment Variables

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [<BrandName /> Profile page](https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

<Tabs className="docs__val">
<TabItem value="bash" label="Linux / MacOS" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>
</TabItem>
<TabItem value="powershell" label="Windows" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>
</TabItem>
</Tabs>

### Step 3: Upload your Application
Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk or .aab file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

Make sure to add the path of the **appFile** in the cURL request. Below is an example cURL request to upload your app using our REST API:

<Tabs className="docs__val">

<TabItem value="bash" label="App File" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""`}
    </CodeBlock>
  </div>
</TabItem>

<TabItem value="powershell" label="App URL" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"`}
    </CodeBlock>
  </div>
</TabItem>

</Tabs>

:::tip

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on <BrandName /> by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step

:::

### Step 4: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

<Tabs className="docs__val">

<TabItem value="ios-test" label="iOS" default>

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
    $url_element->sendKeys("https://www.lambdatest.com");
    $find_element = $driver->findElement(WebDriverBy::id('find'));
    $find_element->click();
    sleep(2);
    $driver->quit();
 }  finally {
     $driver->quit();
 }
?>
```

</TabItem>

<TabItem value="android-test" label="Android" default>

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
    $url_element->sendkeys("https://www.lambdatest.com");

    $find_element = $driver->findElement(WebDriverBy::id('find'));
    $find_element->click();
    sleep(2);

    $driver->quit();
 } finally {
    $driver->quit();
 }

?>
```

</TabItem>
 
</Tabs>

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

<Tabs className="docs__val">

<TabItem value="ios-config" label="iOS" default>

```csharp title="iOS(.ipa)"
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

</TabItem>
<TabItem value="android-config" label="Android" default>

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

</TabItem>
</Tabs>

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 6: Execute and Monitor your Tests

- Execute the following command to run your test on <BrandName /> platform:

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```bash
php IOSApp.php
```

</TabItem>

<TabItem value="android" label="Android" default>

```bash
php AndroidApp.php
```

</TabItem>
</Tabs>

> Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [<BrandName /> App Automation Dashboard](https://appautomation.lambdatest.com/build).

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      PHP With Appium
</span>
    </li>
  </ul>
</nav>
