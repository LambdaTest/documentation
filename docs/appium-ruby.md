---
id: appium-ruby
title: "How to Run Appium Ruby Tests on TestMu AI"
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Ruby"
description: "Run Appium Ruby tests on real Android and iOS devices on TestMu AI. Set credentials, upload your app, and run with Vanilla Ruby, Cucumber, or RSpec."
keywords:
  - ruby appium
  - ruby appium tutorial
  - cucumber appium
  - rspec appium
  - real devices
  - testmu ai cloud platform
  - app automation
  - real time testing
  - appium automation

url: https://www.testmuai.com/support/docs/appium-ruby/
site_name: TestMu AI
slug: appium-ruby/
canonical: https://www.testmuai.com/support/docs/appium-ruby/
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "How to Run Appium Ruby Tests on TestMu AI",
          "item": `${BRAND_URL}/support/docs/appium-ruby/`
        }]
      })
    }}
></script>

# How to Run Appium Ruby Tests on TestMu AI
---

Running Appium Ruby tests on TestMu AI executes native and hybrid mobile app automation across real Android and iOS devices. Set your credentials, upload your app, configure desired capabilities, and run the suite with Vanilla Ruby, Cucumber, or RSpec framework.

**Supported on:** Real &amp; Virtual devices

Set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for Appium testing and explore other advanced features of <BrandName />.

## Prerequisites
---

Make sure you have the following set up before you start.

- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Install **Ruby** on your local system. Follow these instructions to install on different operating systems.

<Tabs className="docs__val">

<TabItem value="rubymac" label="macOS" default>

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

- Ensure you have Dependency manager bundler installed (required for the **Cucumber** and **RSpec** frameworks). If not installed, you can install with the following command:

```bash
gem install bundler
```

## Set Your Credentials
---

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

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

## Upload Your App
---

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

## Run a Test With Your Framework
---

Pick the Ruby framework you want to use. Each tab contains the complete flow: get the sample project, update the automation script, configure the capabilities, and execute your tests on <BrandName />.

<Tabs groupId="framework" queryString="framework">

<TabItem value="vanilla" label="Vanilla Ruby" default>

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-ruby" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```ruby title="ios.rb"
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


:::tip
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
:::

</TabItem>

<TabItem value="android" label="Android" default>

```ruby title="android.rb"
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

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

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

> In case you're using capabilities generated using the JSON Wire Protocol, then it's recommended to use ```appium_lib``` version ```10.6.0```. Run ```gem install appium_lib -v 10.6.0``` command to install it.

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 4: Execute and Monitor your Tests

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

If you are using an **iOS** app, the cURL command will generate an app URL for the corresponding iOS app and install the same for running the tests. You can either use our sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa) or upload your own app as discussed earlier.

- Navigate to the corresponding directory based on your app.

```bash
cd ios
```

- Execute the following command to run your test on <BrandName /> platform:

```bash
ruby ios-sample.rb
```

</TabItem>

<TabItem value="android" label="Android" default>

If you are using an **android** app, the cURL command will generate an app URL for the corresponding Android app and install the same for running the tests. You can either use our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or upload your own app as discussed earlier.

- Navigate to the corresponding directory based on your app.

```bash
cd android
```

- Execute the following command to run your test on <BrandName /> platform:

```bash
ruby android-sample.rb
```

</TabItem>

</Tabs>

<details>

<summary id="summary_2"> <strong>For Windows Users</strong> </summary>

In case of Windows, if you get any error message. Please try this method:

- Navigate to the corresponding directory based on your app.

```bash
cd android
```

- Refresh the gem bundles through given command
```bash
gem uninstall -aIx
```

- Re-install the gems required

```bash
gem install appium_lib -v 10.6.0
gem install ffi

```
- Now try running the corresponding automation script for your app.

```bash
ruby android-sample.rb
```
</details>

> Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [<BrandName /> App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

</TabItem>

<TabItem value="cucumber" label="Cucumber">

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-ruby-cucumber" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Update your Automation Script

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
  $driver.find_element(:id, "url").send_keys "https://www.testmuai.com/"
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

### Step 3: Configure the Test Capabilities

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
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 4: Execute and Monitor your Tests

- Navigate to the `run_first_test` directory under corresponding os based on your app.

- Go to `config/first.config.yml` and edit the `username`, `accessKey` and add your `app url`.

- Run the following commands to run your tests

```ruby
bundle install
bundle exec rake first
```
  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [<BrandName /> App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

</TabItem>

<TabItem value="rspec" label="RSpec">

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-ruby-rspec" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

<Tabs className="docs__val">
<TabItem value="Single" label="Single Test" default>

```ruby title="single.config.yml"
server: "mobile-hub.lambdatest.com"
user: "LT_USERNAME"         #Add your LambdaTest username here
key: "LT_ACCESS_KEY"  #Add your LambdaTest accessKey here

common_caps:
  "build": "RSpec Selenium Demo"

browser_caps:
  -
    "isRealMobile": "true"
    "platform": "Android"
    "deviceName": "Galaxy A31"
    "platformVersion": "10"
    "app": "APP_URL"        #Add the app url here
```

</TabItem>

<TabItem value="ios" label="Parallel test" default>

```ruby title="parallel.config.yml"
server: "mobile-hub.lambdatest.com"
user: "LT_USERNAME"  #Add your LambdaTest username here
key: "LT_ACCESS_KEY"  #Add your LambdaTest accessKey here

common_caps:
  "build": "RSpec Parallel"
  "visual": false
  "network": false
  "console": false

app_caps:
  -
    "isRealMobile": "true"
    "platform": "Android"
    "deviceName": "Galaxy A31"
    "platformVersion": "10"
    "app": "APP_URL"   #Add the app url here
  -
    "isRealMobile": "true"
    "platform": "Android"
    "deviceName": "Galaxy A32"
    "platformVersion": "11"
    "app": "APP_URL"   #Add the app url here
  -
    "isRealMobile": "true"
    "platform": "iOS"
    "deviceName": "iPhone 13 Pro"
    "platformVersion": "15.0"
    "app": "APP_URL"   #Add the app url here
```

</TabItem>

</Tabs>
:::tip

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).
:::

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts `lambdatest.rb`. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```ruby
    caps={
      "LT:Options" => {
        "build" => "Ruby RSpec",
        "name" => "Sample Test",
        "platformName" => platform,
        "isRealMobile" => isRealMobile,
        "deviceName" => deviceName,
        "platformVersion" => platformVersion,
        "app" => app,
        "w3c" => true
      }},
```

:::info

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

### Step 4: Execute and Monitor your Tests

1. Run the following command to make sure that all the dependencies required for the test are installed.
```bash
bundle install
```

2. Execute the following command to run single test on <BrandName /> platform:
```bash
bundle exec rake single
```

> In order to run parallel tests, run `bundle exec rake parallel`. Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [<BrandName /> App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

</TabItem>

</Tabs>

## View Your Results
---

Open the [<BrandName /> App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build) to see your test. Your test results are displayed on the test console (or CLI if you are using terminal/cmd) and each session includes a video recording, step-by-step screenshots, device logs, and network logs.

## Next Steps
---

Continue with these related guides:

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
        How to Run Appium Ruby Tests on TestMu AI
      </span>
    </li>
  </ul>
</nav>
