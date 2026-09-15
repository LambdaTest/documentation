# How To Perform Headless Browser Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

\"your build name\",\n\t\t\"name\" => \"your test name\",\n\t\t\"platform\" => \"MacOS Catalina\",\n\t\t\"browserName\" => \"Chrome\",\n\t\t\"version\" => \"86.0\",\n\n\t\t\"headless\" => true\n\t\t)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "capabilities = Selenium::WebDriver::Remote::Capabilities.new\ncapabilities[\"build\"] = \"your build name\"\ncapabilities[\"name\"] = \"your test name\"\ncapabilities[\"platform\"] = \"MacOS Catalina\"\ncapabilities[\"browserName\"] = \"Chrome\"\ncapabilities[\"version\"] = \"86.0\",\n\ncapabilities[\"headless\"] = true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "var capabilities = {\n\t\t\"build\" : \"your build name\",\n\t\t\"name\" : \"your test name\",\n\t\t\"platform\" : \"MacOS Catalina\",\n\t\t\"browserName\" : \"Chrome\",\n\t\t\"version\" : \"86.0\",\n\n\t\t\"headless\" : true\n\t}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 6",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "capabilities = {\n\t\t\"build\" : \"your build name\",\n\t\t\"name\" : \"your test name\",\n\t\t\"platform\" : \"MacOS Catalina\",\n\t\t\"browserName\" : \"Chrome\",\n\t\t\"version\" : \"86.0\",\n\n\t\t\"headless\" : True\n\t}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Perform Headless Browser Testing on TestMu AI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "package com.lambdatest;\n\nimport java.net.MalformedURLException;\nimport java.net.URL;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport org.testng.Assert;\nimport org.testng.annotations.AfterSuite;\nimport org.testng.annotations.BeforeSuite;\nimport org.testng.annotations.Test;\n\npublic class HeadlessAutomation {\n\n\tprivate static RemoteWebDriver driver;\n\tprivate static String Status=\"failed\";\n\n\t@BeforeSuite\n\tpublic void setup() throws MalformedURLException {\n\n\t\ttry {\n\t\t\tString username = System.getenv(\"LT_USERNAME\");\n\t\t\tString authkey = System.getenv(\"LT_ACCESS_KEY\");\n\t\t\tString hub = \"@hub.lambdatest.com/wd/hub\";\n\n\t\t\tDesiredCapabilities caps = new DesiredCapabilities();\n\t\t\tcaps.setCapability(\"browser\", \"Chrome\");\n\t\t\tcaps.setCapability(\"version\", \"86\");\n\t\t\tcaps.setCapability(\"platform\", \"MacOS Catalina\");\n\t\t\tcaps.setCapability(\"build\", \"Headless Automation\");\n\t\t\tcaps.setCapability(\"name\", \"Headless Automation\");\n\t\t\tcaps.setCapability(\"network\", true);\n\t\t\tcaps.setCapability(\"visual\", true); \n\t\t\tcaps.setCapability(\"video\", true);\n\t\t\tcaps.setCapability(\"console\", true);\n\n\t\t\t// Capability setting to enable Headless browsing\n\t\t\tcaps.setCapability(\"headless\",true);\n\n\n\t\t\tSystem.out.println(\"Desired Caps: \" + caps);\n\t\t\tdriver = new RemoteWebDriver(new URL(\"https://\" + username + \":\" + authkey + hub), caps);\n\t\t}\n\t\tcatch(Exception e)\n\t\t{\n\t\t\tSystem.out.println(e);\n\t\t}\n\t}\n\n\n\t@Test\n\tpublic static void testAssertion() {\n\n\t\ttry {\n\t\t\tdriver.get(\"https://opensource-demo.orangehrmlive.com/\"); //define the url\n\n\t\t\tString pageTitle = driver.getTitle();\t\t//get the title of the webpage\n\t\t\tSystem.out.println(\"The title of this page is ===> \" +pageTitle);\n\t\t\tAssert.assertEquals(\"OrangeHRM\", pageTitle);\t//verify the title of the webpage\n\n\t\t\tdriver.findElement(By.id(\"txtUsername\")).clear();//clear the input field before entering any value\n\t\t\tdriver.findElement(By.id(\"txtUsername\")).sendKeys(\"Admin\");//enter the value of username\n\t\t\tdriver.findElement(By.id(\"txtPassword\")).clear();\n\t\t\tdriver.findElement(By.id(\"txtPassword\")).sendKeys(\"admin123\");//enter the value of password\n\t\t\tdriver.findElement(By.id(\"btnLogin\")).click();\t\t//click Login button\n\t\t\tSystem.out.println(\"Successfully logged in\");\n\t\t\tStatus = \"passed\";\n\t\t}\n\t\tcatch(Exception e)\n\t\t{\n\t\t\tStatus = \"failed\";\n\t\t}\n\t}\n\n\t@AfterSuite\n\tpublic void tearDown() {\n\t\tdriver.executeScript(\"lambda-status=\" + Status);\n\t\tdriver.quit();\n\t}\n\n}"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Perform Headless Browser Testing on Cloud Selenium Grid

TestMu AI allows you to run headless browser tests on its cloud-based Selenium Grid. This guide shows you how to enable and run headless browser testing on the TestMu AI platform.

## Enabling Headless Browser Testing on TestMu AI

Set the headless desired capability to run tests without a graphical user interface.

For headless browser testing on TestMu AI, enable the desired capability for headless browsing. You can enable this capability using either of the two methods below:

### Enable Headless Browser Testing on Desired Capabilities Generator

Visit the [Desired Capabilities Generator](https://www.testmuai.com/capabilities-generator/). Under the **Browser Specific Capabilities**, find the toggle button to enable **Headless** browsing. Switch the button to true.

### Enable Headless Browser Testing via Code

Add the headless capability directly in your test script code.

While writing the desired capabilities in your code, enable headless browser testing by adding the below syntax:

`capabilities.setCapability("headless",true);`

Below is the complete code for sample desired capabilities in various languages:

**Java**

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browser", "Chrome");
capabilities.setCapability("version", "86");
capabilities.setCapability("platform", "MacOS Catalina");
capabilities.setCapability("build", "your build name");
capabilities.setCapability("name", "your test name");

// Capability setting to enable Headless browser testing
caps.setCapability("headless",true);
```

**C#**

```csharp
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.SetCapability("user","username")
capabilities.SetCapability("accessKey","access_key")
capabilities.SetCapability("build", "your build name");
capabilities.SetCapability("name", "your test name");
capabilities.SetCapability("platform", "MacOS Catalina");
capabilities.SetCapability("browserName", "Chrome");
capabilities.SetCapability("version","86.0");

// Capability setting to enable Headless browser testing
capabilities.setCapability("headless",true);
```

**PHP**

```php
$capabilities = array(
"build" => "your build name",
"name" => "your test name",
"platform" => "MacOS Catalina",
"browserName" => "Chrome",
"version" => "86.0",

"headless" => true
)
```

**Ruby**

```ruby
capabilities = Selenium::WebDriver::Remote::Capabilities.new
capabilities["build"] = "your build name"
capabilities["name"] = "your test name"
capabilities["platform"] = "MacOS Catalina"
capabilities["browserName"] = "Chrome"
capabilities["version"] = "86.0",

capabilities["headless"] = true
```

**JavaScript**

```javascript
var capabilities = {
"build" : "your build name",
"name" : "your test name",
"platform" : "MacOS Catalina",
"browserName" : "Chrome",
"version" : "86.0",

"headless" : true
}
```

**Python**

```py
capabilities = {
"build" : "your build name",
"name" : "your test name",
"platform" : "MacOS Catalina",
"browserName" : "Chrome",
"version" : "86.0",

"headless" : True
}
```

## Perform Headless Browser Testing on TestMu AI

Run a headless browser test using the TestNG framework in Java.

Below is an example to perform headless browser testing. For demo purposes, this uses the TestNG framework with Java.

```java
package com.lambdatest;

import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

public class HeadlessAutomation {

private static RemoteWebDriver driver;
private static String Status="failed";

@BeforeSuite
public void setup() throws MalformedURLException {

try {
String username = System.getenv("LT_USERNAME");
String authkey = System.getenv("LT_ACCESS_KEY");
String hub = "@hub.lambdatest.com/wd/hub";

DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("browser", "Chrome");
caps.setCapability("version", "86");
caps.setCapability("platform", "MacOS Catalina");
caps.setCapability("build", "Headless Automation");
caps.setCapability("name", "Headless Automation");
caps.setCapability("network", true);
caps.setCapability("visual", true);
caps.setCapability("video", true);
caps.setCapability("console", true);

// Capability setting to enable Headless browsing
caps.setCapability("headless",true);

System.out.println("Desired Caps: " + caps);
driver = new RemoteWebDriver(new URL("https://" + username + ":" + authkey + hub), caps);
}
catch(Exception e)
{
System.out.println(e);
}
}

@Test
public static void testAssertion() {

try {
driver.get("https://opensource-demo.orangehrmlive.com/"); //define the url

String pageTitle = driver.getTitle();		//get the title of the webpage
System.out.println("The title of this page is ===> " +pageTitle);
Assert.assertEquals("OrangeHRM", pageTitle);	//verify the title of the webpage

driver.findElement(By.id("txtUsername")).clear();//clear the input field before entering any value
driver.findElement(By.id("txtUsername")).sendKeys("Admin");//enter the value of username
driver.findElement(By.id("txtPassword")).clear();
driver.findElement(By.id("txtPassword")).sendKeys("admin123");//enter the value of password
driver.findElement(By.id("btnLogin")).click();		//click Login button
System.out.println("Successfully logged in");
Status = "passed";
}
catch(Exception e)
{
Status = "failed";
}
}

@AfterSuite
public void tearDown() {
driver.executeScript("lambda-status=" + Status);
driver.quit();
}

}
```

After you execute the above code, the test runs on TestMu AI successfully. View the status of the test on your [Automation dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/timeline).

That's it folks! If you have any doubt or questions, feel free to contact our experts at **24/7 Customer chat support** or mail us at [support@testmuai.com](mailto:support@testmuai.com). Happy testing! 🙂
