---
id: appium-ruby-cucumber
title: Appium with Cucumber
sidebar_label: Cucumber
description: Complete guide to running your first Cucumber Appium automated test script on TestMu AI Real Device Cloud Platform. Test on 3000+ Real Devices.
keywords:
  - cucumber appium
  - cucumber appium tutorial
  - real devices
  - lambdatest cloud platform
  - app automation
  - real time testing
  - appium automation

url: https://www.lambdatest.com/support/docs/appium-ruby-cucumber/
site_name: LambdaTest
slug: appium-ruby-cucumber/
---


import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';

<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

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
          "item": "https://www.lambdatest.com/support/docs/appium-ruby-cucumber/"
        }]
      })
    }}
></script>
In this documentation, you will learn how to trigger a automation script of **Cucumber** for application testing with **Appium** on LambdaTest, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of LambdaTest.

## Prerequisites

- Your LambdaTest [Username and Access key](https://accounts.lambdatest.com/security).
- Install **Ruby** on your local system:

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

- Ensure you have Dependency manager bundler installed. If not installed, you can install with the following command:

```bash
gem install bundler
```

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-ruby-cucumber" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Setup the Environment Variables

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [LambdaTest Profile page](https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

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
Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk or .aab file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

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

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on LambdaTest by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step

:::

### Step 4: Update your Automation Script

An automation script file `first_steps.rb` for the sample application given above has been provided here.

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```ruby title="first_steps.rb"
When /^I click on buttons app$/ do 
  
  $driver.find_element(:id, "color").click
  #Click on Color Button
  $driver.find_element(:id, "color").click
  #Click on Geolocation Button
  $driver.find_element(:id, "geoLocation").click
  #wait of 5 seconds
  sleep(5)
  #Click on back Button
  $driver.back
  #Click on text Button to enter value
  $driver.find_element(:id, "Text").click
  #Click on Notification Button
  $driver.find_element(:id, "notification").click
  #Click on toast Button      
  $driver.find_element(:id, "toast").click
  #Click on speedtest Button      
  $driver.find_element(:id, "speedTest").click
  #Wait for 10 seconds       
  sleep(10)
  $driver.back
  $driver.find_element(:id, "Browser").click
  sleep(5)
  $driver.find_element(:id, "url").click
  $driver.find_element(:id, "url").send_keys "https://www.lambdatest.com/"
  $driver.find_element(:id, "find").click
  sleep(5)
  $driver.back
  $driver.execute_script("lambda-status=passed")

end 

```

</TabItem>

<TabItem value="android" label="Android" default>

```ruby title="first_steps.rb"
When /^I click on buttons app$/ do 

  $driver.find_element(:id, "com.lambdatest.proverbial:id/color").click
  #Click on Color Button
  $driver.find_element(:id, "com.lambdatest.proverbial:id/color").click
  #Click on Geolocation Button
  $driver.find_element(:id, "com.lambdatest.proverbial:id/geoLocation").click
  #wait of 5 seconds
  sleep(5)
  #Click on back Button
  $driver.back
  #Click on text Button to enter value
  $driver.find_element(:id, "com.lambdatest.proverbial:id/Text").click
  #Click on Notification Button
  $driver.find_element(:id, "com.lambdatest.proverbial:id/notification").click
  #Click on toast Button      
  $driver.find_element(:id, "com.lambdatest.proverbial:id/toast").click
  #Click on speedtest Button      
  $driver.find_element(:id, "com.lambdatest.proverbial:id/speedTest").click
  #Wait for 10 seconds       
  sleep(10)
  $driver.back
  $driver.execute_script("lambda-status=passed")

end 
```

</TabItem>
</Tabs>

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

Ensure to update the `APP_URL`, `username` and `accesKey` in the code scripts before running the tests. The capabilities object in the sample code are defined as:

<Tabs className="docs__val">

<TabItem value="ios-config" label="iOS" default>

```ruby title="first.config.yml iOS"
server: "mobile-hub.lambdatest.com"
user: "LT_USERNAME"    # Add Lambdatest username here
key: "LT_ACCESS_KEY"   # Add Lambdtest accessKey here

common_caps:

  "build": "br-2"
  

browser_caps:
  -
    "isRealMobile": "true"
    "platform": "ios"
    "deviceName": "iPad (2017)"
    "platformVersion": "13"
    "app": "APP_URL"      # Add your app url here
```

</TabItem>
<TabItem value="android-config" label="Android" default>

```ruby title="first.config.yml Android"
server: "mobile-hub.lambdatest.com"
user: "LT_USERNAME"    # Add Lambdatest username here
key: "LT_ACCESS_KEY"   # Add Lambdtest accessKey here


common_caps:

  "build": "br-1"
  

browser_caps:
  -
    "isRealMobile": "true"
    "platform": "android"
    "deviceName": "Galaxy S21 5G"
    "platformVersion": "11"
    "app": "APP_URL"      # Add your app url here
```

</TabItem>

</Tabs>

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 6: Execute and Monitor your Tests

- Navigate to the `run_first_test` directory under corresponding os based on your app.

- Go to `config/first.config.yml` and edit the `username`, `accessKey` and add your `app url`.

- Run the following commands to run your tests

```ruby
bundle install
bundle exec rake first
```
  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [LambdaTest App Automation Dashboard](https://appautomation.lambdatest.com/build).

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate LambdaTest with CI/CD](/support/docs/integrations-with-ci-cd-tools/)

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
      Ruby With Appium
</span>
    </li>
  </ul>
</nav>
