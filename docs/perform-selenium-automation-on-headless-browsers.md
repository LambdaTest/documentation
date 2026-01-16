---
id: perform-selenium-automation-on-headless-browsers
title: How To Perform Headless Browser Testing
hide_title: true
sidebar_label: Headless Browser Testing
description: Learn how to perform Headless browser testing on the TestMu AI platform, to perform cross-browser testing on 3000+ combinations of real devices, browsers, and OS.
keywords:
- Headless Browser Testing
- Headless Testing Selenium
- Headless Browser Selenium
- Headless Chrome Selenium
- Headless Chrome Windows
- Selenium Headless Chrome
- Selenium Chrome Headless
- Chrome Headless Selenium
- Selenium Headless Firefox
- Headless Testing

url: https://www.testmu.ai/support/docs/perform-selenium-automation-on-headless-browsers/
site_name: LambdaTest
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
          "name": "TestMu AI",
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

# Perform Headless Browser Testing On Cloud Selenium Grid

***
Performing automated tests on the Headless browsers can be challenging as it does not contain any UI. <BrandName /> now allows you to perform Headless browser testing easily on its cloud-based Selenium Grid. In this document, you will learn how to enable and perform Headless browser testing on the <BrandName /> platform.

## Enabling The Headless Browser Testing On <BrandName />
* * *
For Headless browser testing on <BrandName />, you need to enable the desired capability of Headless browsing – ‘*headless*’. You can enable this capability using any one of the two methods mentioned below:

### Enable Headless Browser Testing On Desired Capabilities Generator
* * *
Visit the [Desired Capabilities Generator](https://www.lambdatest.com/capabilities-generator). Under the **Browser Specific Capabilities**, you can find a toggle button to enable **Headless** browsing. Just switch the button to true.

<img loading="eager" src={require('../assets/images/headless-browser-testing/selenium-desired-capabilities-generator.webp').default} alt="Image"  className="doc_img" width="604" height="270"/>

### Enable Headless Browser Testing Via Code
* * *
While writing the desired capabilities in your code, you can enable Headless browser testing, by adding the below syntax:

`capabilities.setCapability("headless",true);`

Below is the complete code for a sample desired capabilities in various languages:

**Java**

```javascript
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

```javascript
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

```javascript
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

```javascript
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

## Perform Headless Browser Testing on <BrandName />
* * *

Below is a example to perform Headless browser testing. For demo purpose, we have used TestNG framework of Java language.

```javascript
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

Upon executing the above code, the test will run on your <BrandName /> successfully. You can view the status of the test on your [Automation dashboard](https://automation.lambdatest.com/timeline).

<img loading="lazy" src={require('../assets/images/headless-browser-testing/headless-automation-testing.webp').default} alt="Image"  className="doc_img" width="768" height="348"/>

* * *

That's it folks! If you have any doubt or questions, feel free to contact our experts at <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 Customer chat support**</span> or mail us at [support@testmu.ai](mailto:support@testmu.ai). Happy testing! 🙂

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
