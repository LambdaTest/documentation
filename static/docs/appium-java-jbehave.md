# Appium With JBehave

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

In this documentation, you will learn how to trigger a automation script of **JBehave** for application testing with **Appium** on TestMu AI, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of TestMu AI.

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- You should have [Java client library](https://github.com/appium/java-client) installed for Selenium and Appium.
- Download and install **Maven** from [the official website](https://maven.apache.org/). For **Linux/macOS** you can use [Homebrew](https://brew.sh/) package manager.

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

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

```java

package com.lambdatest;
import java.io.FileReader;
import java.net.URL;
import java.util.Map;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Iterator;
import java.util.Collection;
import java.lang.reflect.Constructor;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;

import org.jbehave.core.embedder.Embedder;
import org.junit.Test;
import org.junit.After;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import org.junit.runners.Parameterized.Parameter;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

@RunWith(Parameterized.class)
public class LambdaTestJBehaveRunner {

public WebDriver driver;
// private Local l;

private static JSONObject config;

@Parameter(value = 0)
public int taskID;

@Parameters
public static Collection<Object[]> data() throws Exception {
List<Object[]> taskIDs = new ArrayList<Object[]>();
if(System.getProperty("config") != null) {
JSONParser parser = new JSONParser();
config = (JSONObject) parser.parse(new FileReader("src/test/resources/conf/" + System.getProperty("config")));
int envs = ((JSONArray)config.get("environments")).size();

for(int i=0; i<envs; i++) {
taskIDs.add(new Object[] {i});
}
}

return taskIDs;
}

@Before
public void setUp() throws Exception {
JSONArray envs = (JSONArray) config.get("environments");

DesiredCapabilities capabilities = new DesiredCapabilities();

capabilities.setCapability("isRealMobile", true);
capabilities.setCapability("app","APP_URL");    //Enter app_url here

Map<String, String> envCapabilities = (Map<String, String>) envs.get(taskID);
Iterator it = envCapabilities.entrySet().iterator();
while (it.hasNext()) {
Map.Entry pair = (Map.Entry)it.next();
capabilities.setCapability(pair.getKey().toString(), pair.getValue().toString());
}

Map<String, String> commonCapabilities = (Map<String, String>) config.get("capabilities");
it = commonCapabilities.entrySet().iterator();
while (it.hasNext()) {
Map.Entry pair = (Map.Entry)it.next();
if(capabilities.getCapability(pair.getKey().toString()) == null){
capabilities.setCapability(pair.getKey().toString(), pair.getValue().toString());
}
}

String username = System.getenv("LT_USERNAME") == null ? "YOUR_LT_USERNAME" : System.getenv("LT_USERNAME");  //Replace YOUR_LT_USERNAME with your LambdaTest username

String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "YOUR_LT_ACCESS_KEY" : System.getenv("LT_ACCESS_KEY"); //Replace YOUR_LT_ACCESS_KEY with your LambdaTest accessKey

driver = new RemoteWebDriver(new URL("http://"+username+":"+accessKey+"@"+config.get("server")+"/wd/hub"), capabilities);
}

@After
public void tearDown() throws Exception {
driver.quit();
}

@Test
public void runStories() throws Exception {
Class<?> c = Class.forName(System.getProperty("embedder"));
Constructor<?> cons = c.getConstructor(WebDriver.class);
Embedder storyEmbedder = (Embedder) cons.newInstance(driver);

List<String> storyPaths = Arrays.asList(System.getProperty("stories"));
storyEmbedder.runStoriesAsPaths(storyPaths);
}
}
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```java
//Single Tests
{
"server": "mobile-hub.lambdatest.com",

"capabilities": {
"build": "jbehave-LambdaTest-AppAutomate-Single",
"name": "Single Test 1"
},

"environments": [
{
"platformName": "android",
"deviceName": "Galaxy S21 5G",
"platformVersion": "11"
}
]
}
```

```java
//Parallel Tests
{
"server": "mobile-hub.lambdatest.com",

"capabilities": {
"build": "jbehave-LambdaTest-AppAutomate-Parallel",
"name": "Parallel Test 1"
},

"environments": [
{
"platformName": "android",
"deviceName": "Galaxy S21 5G",
"platformVersion": "11"
},
{
"platformName": "android",
"deviceName": "OnePlus 10 Pro",
"platformVersion": "12"
},
{
"platformName": "android",
"deviceName": "Pixel 3a",
"platformVersion": "10"
}
]
}
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 6: Execute and Monitor your Tests

- Run the following commands to install the required dependencies:

```bash
mvn clean install
```

- The tests can be executed in the terminal using the following command:

```bash
mvn test -P single
```

```bash
mvn test -P parallel
```

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the Appium Agent Skill with TestMu AI

The [appium-skill](https://github.com/LambdaTest/agent-skills/tree/main/appium-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The appium-skill package includes:

```
appium-skill/
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

### Installing Appium Agent Skill

Install a Appium Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/appium-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/appium-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only appium-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
