---
id: appium-ruby
title: Ruby With Appium
sidebar_label: Ruby
description: Complete guide to running your first Ruby Appium automated test script on LambdaTest Real Device Cloud Platform. Test on 3000+ Real Devices.
keywords:
  - ruby appium
  - ruby appium tutorial
  - real devices
  - lambdatest cloud platform
  - app automation
  - real time testing
  - appium automation

url: https://www.lambdatest.com/support/docs/appium-ruby/
site_name: LambdaTest
slug: appium-ruby/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Ruby With Appium",
          "item": "https://www.lambdatest.com/support/docs/appium-ruby/"
        }]
      })
    }}
></script>

## Tutorial To Run Your First Test On LambdaTest

---

In this topic, you will learn how to configure and run your **Ruby** automation testing scripts with **Appium** on **LambdaTest Real Device Cloud platform**.

## Objective

---
By the end of this topic, you will be able to:

1.  Set up an environment for testing your Apps using **Ruby** with **Appium**.
2.  Understand and configure the core capabilities required for your Appium test suite.
3.  Explore the advanced features of LambdaTest.

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-ruby" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Pre-requisites

---

Before you can start performing Ruby automation testing with Appium, you would need to:

- You have access to LambdaTest username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials in the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile)
- Install **Ruby** on your local system. Follow these instructions to install on different operating systems.


<Tabs className="docs__val">

<TabItem value="rubymac" label="MacOS" default>

For **macOS**, you can run a [Homebrew](https://brew.sh/) command like this:

```bash
brew install ruby
```
</TabItem>

<TabItem value="rubylinux" label="Linux" default>

For **Linux** or **Ubuntu**, you can run a simple apt command like below:

```bash
sudo apt-get install ruby-full
```
</TabItem>

<TabItem value="rubywindows" label="Windows" default>

For **Windows**, you can download from the [official website](https://rubyinstaller.org/downloads/).
</TabItem>
</Tabs>

## Run your first test

---

### 1. Upload your application
Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

 **Using App File from System:**
 <div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""
`}
</CodeBlock>
</div>

**Using App URL:**

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"
`}
</CodeBlock>
</div>

:::tip

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - <lt://APP123456789123456789> and will be used in the next step.

:::

### 2. Clone the sample project

Clone the LambdaTest’s [LT-appium-ruby](https://github.com/LambdaTest/LT-appium-ruby) and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-ruby
cd LT-appium-ruby
```

### 3. Set up your authentication

Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [Automation Dashboard](https://appautomation.lambdatest.com/). Then, set LambdaTest `Username` and `Access Key` in environment variables with following commands.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \\
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
  <CodeBlock className="language-powershell">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \`
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>
</Tabs>

### 4. Write your automation script

An automation script for the sample application available above has been provided here. Ensure to update the `APP_URL`, `username` and `accesKey` in the code scripts before running the tests.

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```ruby title="ios.py"
require 'rubygems'
require 'appium_lib'

        #highlight-next-line
        username= "username" #Add username here
        #highlight-next-line
        accessToken= "accesKey" #Add accessKey here

        caps = {
          "LT:Options" => {      
                :deviceName => "iPhone 13 Pro",  
                :platformName => "iOS",
                :platformVersion => "15",
                :build => "Ruby Vanilla - iOS",
                :name => "Ruby iOS Test",
                :isRealMobile => true,
                #highlight-next-line
                :app => "YOUR_APP_URL", #Enter the App URL here
                :w3c => true,
        } }

        appium_driver = Appium::Driver.new({
            'caps' => caps,
            'appium_lib' => {
                :server_url => "http://"+username+":"+accessToken+"@mobile-hub.lambdatest.com/wd/hub"
            }}, true)

            driver = appium_driver.start_driver

            wait = Selenium::WebDriver::Wait.new(:timeout => 30)

            el1 = driver.find_element(:id, "color")
            el1.click
            el2 = driver.find_element(:id, "geoLocation")
            el2.click
            sleep(5)
            driver.back
            el3 = driver.find_element(:id, "Text")
            el3.click
            el4 = driver.find_element(:id, "notification")
            el4.click
            el5 = driver.find_element(:id, "Toast")
            el5.click
            el6 = driver.find_element(:id, "speedTest")
            el6.click
            sleep(10)
            driver.back

            puts "Found results - Test Passed"


            driver.quit
```

</TabItem>

<TabItem value="android" label="Android" default>

```ruby title="android.py"
require 'rubygems'
require 'appium_lib'

        #highlight-next-line
        username= "username" #Add username here
        #highlight-next-line
        accessToken= "accesKey" #Add accessKey here

        caps = {
           "LT:Options" => {      
            :deviceName => "OnePlus 7",  
            :platformName => "Android",
            :platformVersion => "9",
            :build => "Ruby Vanilla - Android",
            :name => "Ruby Android Test",
            :isRealMobile => true,
            #highlight-next-line
            :app => "YOUR_APP_URL", #Enter the App URL here
            :w3c => true,
        } }

        appium_driver = Appium::Driver.new({
            'caps' => caps,
            'appium_lib' => {
               :server_url => "http://"+username+":"+accessToken+"@mobile-hub.lambdatest.com/wd/hub"
            }}, true)

            driver = appium_driver.start_driver

            wait = Selenium::WebDriver::Wait.new(:timeout => 30)
            el1 = driver.find_element(:id, "com.lambdatest.proverbial:id/color")
            el1.click
            el2 = driver.find_element(:id, "com.lambdatest.proverbial:id/geoLocation")
            el2.click
            sleep(5)
            driver.back
            el3 = driver.find_element(:id, "com.lambdatest.proverbial:id/Text")
            el3.click
            el4 = driver.find_element(:id, "com.lambdatest.proverbial:id/notification")
            el4.click
            el5 = driver.find_element(:id, "com.lambdatest.proverbial:id/toast")
            el5.click
            el6 = driver.find_element(:id, "com.lambdatest.proverbial:id/speedTest")
            el6.click
            sleep(10)
            driver.back
            puts "Found results - Test Passed"

            driver.quit
```

</TabItem>
</Tabs>

### Configure the test capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code are defined as:

:::info Note
In case you're using capabilities generated using the JSON Wire Protocol, then it's recommended to use ```appium_lib``` version ```10.6.0```. Run ```gem install appium_lib -v 10.6.0``` command to install it.
:::

<Tabs className="docs__val">

<TabItem value="ios-config" label="iOS" default>

```ruby title="iOS(.ipa)"
 caps = {
            "LT:Options" => {
                :deviceName => "iPhone 13 Pro",  
                :platformName => "iOS",
                :platformVersion => "15",
                :build => "Ruby Vanilla - iOS",
                :name => "Ruby iOS Test",
                :isRealMobile => true,
                #highlight-next-line
                :app => "YOUR_APP_URL", #Enter the App (.ipa) URL here
                :w3c => true,
        } }
```

</TabItem>
<TabItem value="android-config" label="Android" default>

```ruby title="Android(.apk)"
caps = {
            "LT:Options" => {
            :deviceName => "OnePlus 7",  
                :platformName => "Android",
                :platformVersion => "9",
                :build => "Ruby Vanilla - Android",
                :name => "Ruby Android Test",
                :isRealMobile => true,
                #highlight-next-line
                :app => "YOUR_APP_URL", #Enter the App (.apk) URL here
                :w3c => true,
        } }
```

</TabItem>

</Tabs>

:::info Note

- You must add the generated **APP_URL** to the `"app"` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**.For more details, please refer to our guide on [Desired Capabilities in Appium](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

:::

### 5. Execute your test case

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

If you are using an **iOS** app, the cURL command will generate an app URL for the corresponding iOS app and install the same for running the tests. You can either use our sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa) or upload your own app as discussed earlier.

1. Navigate to the corresponding directory based on your app.

```bash
cd ios
```

2. Execute the following command to run your test on LambdaTest platform:

```bash
ruby ios-sample.rb
```

</TabItem>

<TabItem value="android" label="Android" default>

If you are using an **android** app, the cURL command will generate an app URL for the corresponding Android app and install the same for running the tests. You can either use our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or upload your own app as discussed earlier.

1. Navigate to the corresponding directory based on your app.

```bash
cd android
```

2. Execute the following command to run your test on LambdaTest platform:

```bash
ruby android-sample.rb
```

</TabItem>

</Tabs>

<details>

<summary id="summary_2"> <strong>Info for Windows Users</strong> </summary>

In case of Windows, if you get any error message. Please try this method:
1. Navigate to the corresponding directory based on your app.
```bash
cd android
```
2. Refresh the gem bundles through given command
```bash
gem uninstall -aIx
```
3. Re-install the gems required
```bash
gem install appium_lib -v 10.6.0
gem install ffi
```
4. Now try running the corresponding automation script for your app.
```bash
ruby android-sample.rb
```
</details>

:::info
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on the :link: [LambdaTest App Automation Dashboard](https://appautomation.lambdatest.com/build).
:::

## Additional Links

---

- [Advanced Configuration for Capabilities](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/)
- [How to integrate LambdaTest with CI/CD](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      Ruby With Appium</span>
    </li>
  </ul>
</nav>
