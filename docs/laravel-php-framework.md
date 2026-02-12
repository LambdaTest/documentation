---
id: laravel-php-framework
title: Laravel Dusk Selenium:Running Laravel Dusk Testing Scripts on Online Selenium Grid
hide_title: true
sidebar_label: Laravel
description: Now you can run your automation scripts using Selenium with Laravel Dusk on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - laravel dusk
  - laravel dusk selenium
  - php selenium
  - php automation testing
  - selenium webdriver php
  - selenium php testing tutorial
  - php selenium framework
  - selenium
  - selenium automation testing
  - selenium testing tool
  - selenium testing tutorial
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/laravel-dusk-with-selenium-running-laravel-dusk-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: laravel-dusk-with-selenium-running-laravel-dusk-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/laravel-dusk-with-selenium-running-laravel-dusk-automation-scripts-on-testmu-selenium-grid/
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
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Laravel Test",
          "item": `${BRAND_URL}/support/docs/laravel-dusk-with-selenium-running-laravel-dusk-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# Laravel Dusk with Selenium: Tutorial to Run Your First Test on <BrandName />
* * *
In this topic, you will learn how to configure and run your PHP automation testing scripts on [<BrandName /> Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using **PHP** framework **Laravel**.

By the end of this topic, you will be able to:

1. Set up an environment for testing your locally hosted web pages using **Laravel** automation testing.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **Laravel** with Selenium to reduce build times.
4. Test your locally hosted pages on <BrandName /> platform.
5. Explore advanced features of <BrandName />.

>**Note:** All the code samples in this documentation can be found in the [<BrandName />'s Repository on  GitHub](https://github.com/LambdaTest/php-laravel-dusk-todo). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running Laravel Dusk With Selenium
* * *
Before you begin automation testing with Laravel Dusk, you would need to:

* Download **PHP v7.1**. You can download and install **PHP** using following commands in the terminal:

  * **MacOS:** Previous versions of **MacOS** have **PHP** installed by default. But for the latest **MacOS** versions starting with **Monterey**, **PHP** has to be downloaded and installed manually by using below commands: 
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  brew install php
  ```
    * **Windows:** 
  ```bash
  sudo apt-get install curl libcurl3 libcurl3-dev php
  ```
  >**Note:** For **Windows**, you can download **PHP** from [pip documentation](http://windows.php.net/download/). Also, refer to this [documentation](http://php.net/manual/en/install.windows.php) for ensuring the accessibility of PHP through Command Prompt(cmd).
  
  You can change the **PHP** version to **7.1** by using below homebrew commands in the terminal:
  ```bash
  brew unlink php && brew link --force php@7.1
  ```
  >**Note:** You need to download **PHP v7.1** inorder to link to that version.

* Download **composer** in the project directory ([Linux/MacOS](https://getcomposer.org/download/), [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)).

  **Note:** To use the **composer** command directly, it either should have been downloaded in the project directory or should be accessible globally which can be done by the command below:
  ```bash
  mv composer.phar /usr/local/bin/composer
  ```  

### Installing Selenium Dependencies and Tutorial Repo
**Step 1:** Clone the <BrandName />’s [php-laravel-dusk-todo](https://github.com/LambdaTest/php-laravel-dusk-todo) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/php-laravel-dusk-todo
cd php-laravel-dusk-todo
```
**Step 2:** Install the composer dependencies in the current project directory using the commands below:
```bash
composer install
composer dump-autoload
```
### Setting Up Your Authentication
Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) or through [<BrandName /> Profile](https://accounts.lambdatest.com/login).

**Step 3:** Create .env from example file
```bash
cp .env.example .env
```
**Step 4:** You would have to update your <BrandName /> credentials in the newly created .env file.
```bash
LT_USERNAME="<Your_Username>"
LT_ACCESS_KEY="<Your_Access_Key"
```

**Step 5:** Set <BrandName /> `Username` and `Access Key` in environment variables.
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
### Configuration Of Your Test Capabilities
**Step 6:** In this code, we are passing browser, browser version, and operating system information, along with <BrandName /> Selenium grid capabilities via capabilities object. Update platform configuration in driver method of `tests/DuskTestCase.php`, to specify the target where tests should run. The capabilities object in the above code are defined as:

```php
$capabilities = array(
			"build" => "LaravelDusk Build",
			"name" => "LaravelDusk Build",
			"platform" => "Windows 10",
			"browserName" => "Chrome",
			"version" => "latest"
     );
```
> **Note:** You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

### Executing the Test
**Step 7**: The tests can be executed in the terminal using the following command:
```bash
php artisan dusk
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build). <BrandName /> Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

### Generate Test Cases
* Change directory to the project root: `cd /your/project`

* To generate the test cases, you need to execute the following command 
  `php artisan dusk:make {test case name}`. 
  
  An example for the same is shown below:

  ```bash
  php artisan dusk:make TodoTest
  ```

Our sample test case can be found in `tests/Browser/TodoTest.php` file. It navigates to our **sample to-do app**.


## Testing Locally Hosted or Privately Hosted Projects
***
You can test your locally hosted or privately hosted projects with [<BrandName /> Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using <BrandName /> Tunnel app. All you would have to do is set up an SSH tunnel using <BrandName /> Tunnel app and pass toggle `tunnel = True` via desired capabilities. <BrandName /> Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [<BrandName /> Tunnel documentation](/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish <BrandName /> Tunnel.

>Download the binary file of:
>* [<BrandName /> Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [<BrandName /> Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [<BrandName /> Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Open command prompt and navigate to the binary folder.

Run the following command:
```bash
LT -user {user’s login email} -key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT -user lambdatest@example.com -key 123456
```
Once you are able to connect **<BrandName /> Tunnel** successfully, you would just have to pass on to set the tunnel value to true by adding the following line in your config files:

**Tunnel Capability**
```php
 "tunnel" => true
```
## Additional Links
***
* [Advanced Configuration for Capabilities](/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
* [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)

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
        Laravel Test
      </span>
    </li>
  </ul>
</nav>
