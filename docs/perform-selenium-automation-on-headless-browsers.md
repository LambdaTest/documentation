---
id: perform-selenium-automation-on-headless-browsers
title: How To Perform Headless Browser Testing
hide_title: true
sidebar_label: Run Headless Tests
description: Run headless browser tests on the TestMu AI cloud Selenium Grid across 10,000+ browser/device combinations.
keywords:
  - headless browser testing selenium
  - run headless chrome selenium
  - headless firefox selenium tests
  - enable headless mode selenium grid
  - headless browser automation cloud
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/perform-selenium-automation-on-headless-browsers/
site_name: TestMu AI
slug: perform-selenium-automation-on-headless-browsers/
canonical: https://www.testmu.ai/support/docs/perform-selenium-automation-on-headless-browsers/
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
          "name": "Headless Browser Testing",
          "item": `${BRAND_URL}/support/docs/perform-selenium-automation-on-headless-browsers/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/perform-selenium-automation-on-headless-browsers/"
    },
    "headline": "How To Perform Headless Browser Testing",
    "description": "Run headless browser tests on the TestMu AI cloud Selenium Grid across 10,000+ browser/device combinations.",
    "url": "https://www.testmuai.com/support/docs/perform-selenium-automation-on-headless-browsers/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "headless browser testing selenium",
      "run headless chrome selenium",
      "headless firefox selenium tests"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Below is the complete code for sample desired capabilities in various languages",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities capabilities = new DesiredCapabilities();\ncapabilities.setCapability(\"browser\", \"Chrome\");\ncapabilities.setCapability(\"version\", \"86\");\ncapabilities.setCapability(\"platform\", \"MacOS Catalina\");\ncapabilities.setCapability(\"build\", \"your build name\");\ncapabilities.setCapability(\"name\", \"your test name\");\n\n// Capability setting to enable Headless browser testing\ncaps.setCapability(\"headless\",true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Enable Headless Browser Testing via Code",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "DesiredCapabilities capabilities = new DesiredCapabilities();\ncapabilities.SetCapability(\"user\",\"username\")\ncapabilities.SetCapability(\"accessKey\",\"access_key\")\ncapabilities.SetCapability(\"build\", \"your build name\");\ncapabilities.SetCapability(\"name\", \"your test name\");\ncapabilities.SetCapability(\"platform\", \"MacOS Catalina\");\ncapabilities.SetCapability(\"browserName\", \"Chrome\");\ncapabilities.SetCapability(\"version\",\"86.0\");\n\n// Capability setting to enable Headless browser testing\ncapabilities.setCapability(\"headless\",true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PHP",
        "text": "$capabilities = array(\n\t\t\"build\" => \"your build name\",\n\t\t\"name\" => \"your test name\",\n\t\t\"platform\" => \"MacOS Catalina\",\n\t\t\"browserName\" => \"Chrome\",\n\t\t\"version\" => \"86.0\",\n\n\t\t\"headless\" => true\n\t\t)"
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

***
TestMu AI allows you to run headless browser tests on its cloud-based Selenium Grid. This guide shows you how to enable and run headless browser testing on the TestMu AI platform.

## Enabling Headless Browser Testing on TestMu AI
---
Set the headless desired capability to run tests without a graphical user interface.

For headless browser testing on TestMu AI, enable the desired capability for headless browsing. You can enable this capability using either of the two methods below:

### Enable Headless Browser Testing on Desired Capabilities Generator
---
Visit the [Desired Capabilities Generator](https://www.testmuai.com/capabilities-generator/). Under the **Browser Specific Capabilities**, find the toggle button to enable **Headless** browsing. Switch the button to true.

<img loading="eager" src={require('../assets/images/headless-browser-testing/selenium-desired-capabilities-generator.webp').default} alt="Image"  className="doc_img" width="604" height="270"/>

### Enable Headless Browser Testing via Code
---
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
---
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

<img loading="lazy" src={require('../assets/images/headless-browser-testing/headless-automation-testing.webp').default} alt="Image"  className="doc_img" width="768" height="348"/>

* * *

That's it folks! If you have any doubt or questions, feel free to contact our experts at <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 Customer chat support**</span> or mail us at [support@testmuai.com](mailto:support@testmuai.com). Happy testing! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Headless Browser Testing
      </span>
    </li>
  </ul>
</nav>
