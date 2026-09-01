# How to Run Appium Ruby Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Running Appium Ruby tests on TestMu AI executes native and hybrid mobile app automation across real Android and iOS devices. Set your credentials, upload your app, configure desired capabilities, and run the suite with Vanilla Ruby, Cucumber, or RSpec framework.

**Supported on:** Real &amp; Virtual devices

Set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for Appium testing and explore other advanced features of TestMu AI.

## Prerequisites

Make sure you have the following set up before you start.

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Install **Ruby** on your local system. Follow these instructions to install on different operating systems.

For **macOS**, you can run a [Homebrew](https://brew.sh/) command like this:

```bash
brew install ruby
```

For **Linux** or **Ubuntu**, you can run a simple apt command like below:

```bash
sudo apt-get install ruby-full
```

For **Windows**, you can download from the [official website](https://rubyinstaller.org/downloads/).

- Ensure you have Dependency manager bundler installed (required for the **Cucumber** and **RSpec** frameworks). If not installed, you can install with the following command:

```bash
gem install bundler
```

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

Pick the Ruby framework you want to use. Each tab contains the complete flow: get the sample project, update the automation script, configure the capabilities, and execute your tests on TestMu AI.

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

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

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

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

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

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

> In case you're using capabilities generated using the JSON Wire Protocol, then it's recommended to use ```appium_lib``` version ```10.6.0```. Run ```gem install appium_lib -v 10.6.0``` command to install it.

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 4: Execute and Monitor your Tests

If you are using an **iOS** app, the cURL command will generate an app URL for the corresponding iOS app and install the same for running the tests. You can either use our sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa) or upload your own app as discussed earlier.

- Navigate to the corresponding directory based on your app.

```bash
cd ios
```

- Execute the following command to run your test on TestMu AI platform:

```bash
ruby ios-sample.rb
```

If you are using an **android** app, the cURL command will generate an app URL for the corresponding Android app and install the same for running the tests. You can either use our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or upload your own app as discussed earlier.

- Navigate to the corresponding directory based on your app.

```bash
cd android
```

- Execute the following command to run your test on TestMu AI platform:

```bash
ruby android-sample.rb
```

 For Windows Users

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

> Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Update your Automation Script

An automation script file `first_steps.rb` for the sample application given above has been provided here.

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

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

Ensure to update the `APP_URL`, `username` and `accesKey` in the code scripts before running the tests. The capabilities object in the sample code are defined as:

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

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 4: Execute and Monitor your Tests

- Navigate to the `run_first_test` directory under corresponding os based on your app.

- Go to `config/first.config.yml` and edit the `username`, `accessKey` and add your `app url`.

- Run the following commands to run your tests

```ruby
bundle install
bundle exec rake first
```
  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

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

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

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

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 4: Execute and Monitor your Tests

1. Run the following command to make sure that all the dependencies required for the test are installed.
```bash
bundle install
```

2. Execute the following command to run single test on TestMu AI platform:
```bash
bundle exec rake single
```

> In order to run parallel tests, run `bundle exec rake parallel`. Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## View Your Results

Open the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build) to see your test. Your test results are displayed on the test console (or CLI if you are using terminal/cmd) and each session includes a video recording, step-by-step screenshots, device logs, and network logs.

## Next Steps

Continue with these related guides:

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
