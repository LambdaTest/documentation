# Appium with Cucumber for Ruby

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

In this documentation, you will learn how to trigger a automation script of **Cucumber** for application testing with **Appium** on TestMu AI, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of TestMu AI.

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Install **Ruby** on your local system:





For **macOS**, you can run a [Homebrew](https://brew.sh/) command like this:

```bash
brew install ruby
```




For **Linux** or **Ubuntu**, you can run a simple apt command like below:

```bash
sudo apt-get install ruby-full
```




For **Windows**, you can download from the [official website](https://rubyinstaller.org/downloads/).



- Ensure you have Dependency manager bundler installed. If not installed, you can install with the following command:

```bash
gem install bundler
```

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




### Step 5: Configure the Test Capabilities

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



### Step 6: Execute and Monitor your Tests

- Navigate to the `run_first_test` directory under corresponding os based on your app.

- Go to `config/first.config.yml` and edit the `username`, `accessKey` and add your `app url`.

- Run the following commands to run your tests

```ruby
bundle install
bundle exec rake first
```
  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the Cucumber Agent Skill with TestMu AI


The [cucumber-skill](https://github.com/LambdaTest/agent-skills/tree/main/cucumber-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The cucumber-skill package includes:

```
cucumber-skill/
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


### Installing Cucumber Agent Skill


Install a Cucumber Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/cucumber-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/cucumber-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only cucumber-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).


## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
