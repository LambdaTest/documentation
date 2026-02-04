---
id: network-throttling
title: Network Throttling
hide_title: true
sidebar_label: Network Throttling
description: Now test the functionality of your website over low latency networks ( 2G/3G/LTE) or even offline with different upload and download speeds. TestMu AI allows you to validate your website by simulating these network conditions by using its desired capabilities.
keywords:
  - cross browser testing
  - network throttling
  - selenium capabilities generator
  - selenium desired capabilities
  - testmu ai selenium grid capabilities
  - testmu ai automation capabilities generator
  - selenium capability configuration
  - selenium automation testing
  - selenium automation grid online
  - configure selenium tests with network throttling desired capabilities
  - network throttling capabilities
  - throttling test on testmu ai
url: https://www.testmuai.com/support/docs/network-throttling/
site_name: LambdaTest
slug: network-throttling/
canonical: https://www.testmu.ai/support/docs/network-throttling/
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
          "name": "Network Throttling",
          "item": `${BRAND_URL}/support/docs/network-throttling/`
        }]
      })
    }}
></script>

# Network Throttling

---

There might be instances where you would have to check the functionality of your website on low latency networks (2G/3G/LTE) or even offline. Such networks have variable upload and download speeds which can alter how your website performs on different browsers.

In order to validate your website on such network profiles, you can simulate these network conditions using our capabilities. If you want the test suite to start with the default network use our preset capabilities. However, the device will have unobstructed internet connectivity.

| KEY | VALUES |CAPABILITY |
|-----|--------|-----------|
| networkThrottling | Regular 4G, Regular 3G, Regular 2G, Good 3G, Good 2G, Offline, Reset, GPRS, DSL | Based on the user-provided input, this capability helps to start test suite with default network. For example, if user selects the value **Regular 4G** then the capabilities will look like this: <br/> ```capabilities.setCapability("networkThrottling", "Regular 4G");``` |

```yaml
capabilities.setCapability("networkThrottling", "Regular 4G");
```

## List Of Network Profiles

---


| CONDITION  | MAX DOWNLOAD SPEED (KBPS) | MAX UPLOAD SPEED (KBPS) | LATENCY (MS)     |
| ------------ | --------------------------- | ------------------------- | ------------------ |
| Offline    | 0                         | 0                       | 0                |
| Reset      | Reset to default          | Reset to default        | Reset to default |
| GPRS       | 50                        | 20                      | 500              |
| Regular 2G | 250                       | 50                      | 300              |
| Good 2G    | 450                       | 150                     | 150              |
| Regular 3G | 750                       | 250                     | 100              |
| Good 3G    | 1 Mbps                    | 750                     | 20               |
| Regular 4G | 4 Mbps                    | 3 Mbps                  | 20               |
| DSL        | 2 Mbps                    | 1 Mbps                  | 5                |

**Custom Network Profile**: For creating custom network conditions you can use objects. Define the upload speed, max download speed, and latency for the custom condition, as shown in the above table.

## Configuring Network Profile

---

The Selenium JavaScript Executor allows you to enable network simulation capabilities for tests and to generate custom log files. You can use conditional capabilities to simulate network conditions for individual test cases. driver.executeScript("lambda-throttle-network", throttleParams);
```java
// Using executeScript to apply custom network throttling
Map<String, Object> throttleParams = Map.of(
    "download", 500,  // Maximum download speed in kbps
    "upload", 100,    // Maximum upload speed in kbps
    "latency", 30     // Latency in ms
);

driver.executeScript("lambda-throttle-network", throttleParams);

```
<BrandName /> now allows you to select a network profile before running automation tests. This will allow you to conduct the functional tests of your website or web app on low/high latency networks and offline. In order to simulate the network conditions, you can use the networkProfile capability as shown below.

| JAVASCRIPT EXECUTOR COMMAND | REQUEST PARAMETERS | EXAMPLE |
| ----------------------- | ------------------------------------------ | -------------------- |
| networkProfile | condition: a string or object representing browser network conditions | driver.execute_script("networkProfile", &lbrace;"condition": &lbrace;"download": 500,"upload": 100,"latency": 30&rbrace;&rbrace;) |

## Configuring Network Throttling In Test Automation

---

To configure network throttling in automation, we have used the [<BrandName /> TestNG GitHub repository](https://github.com/LambdaTest/Java-TestNG-Selenium) to run our automation tests. You would just have to define network throttle capabilities in your automation scripts.

### Configuring Capabilities For Pre-defined Network Settings
```java
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("browserName", "Chrome");
caps.setCapability("build", "Demo-TestNG");
caps.setCapability("name", "TestNG-Todo-Script-1");
caps.setCapability("networkThrottling", "Regular 4G");  //Set Network Speed to Regular 4G 
```

The following below is the TestNG code. It will validate your <BrandName /> credentials for authentication purposes. The code will select the basic capabilities such as OS, browser, browser version, network, and so on.

### Configuring Custom Network Settings
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

public class TestNGTodo1 {

	private RemoteWebDriver driver;
	private String Status="failed";

	@BeforeSuite
	public void setup() throws MalformedURLException {
		String username = System.getenv("LT_USERNAME");
		String authkey = System.getenv("LT_ACCESS_KEY");
		String hub = "@hub.lambdatest.com/wd/hub";

		DesiredCapabilities caps = new DesiredCapabilities();
		caps.setCapability("browserName", "Chrome");
		caps.setCapability("build", "Demo-TestNG");
		caps.setCapability("name", "TestNG-Todo-Script-1");
		caps.setCapability("networkThrottling", true);  //To enable network throttling
	
	driver = new RemoteWebDriver(new URL("https://" + username + ":" + authkey + hub), caps);

	// Custom network throttling using executeScript
        Map<String, Object> throttleParams = new HashMap<>();
        throttleParams.put("download", 500); // Maximum download speed in kbps
        throttleParams.put("upload", 100);   // Maximum upload speed in kbps
        throttleParams.put("latency", 30);   // Latency in ms
        
        // Use executeScript with the provided payload
        driver.executeScript("lambda-throttle-network", throttleParams);
	
	}


	@Test
	public void basicTest() throws InterruptedException {
		String spanText;
		System.out.println("Loading Url");
		Thread.sleep(100);
		driver.get("https://4dvanceboy.github.io/lambdatest/todo.html");
		Thread.sleep(100);

		System.out.println("Checking Box");
		driver.findElement(By.name("todo-1")).click();
		Thread.sleep(400);

		System.out.println("Checking Another Box");
		driver.findElement(By.name("todo-2")).click();
		Thread.sleep(400);

		System.out.println("Checking Box");
		driver.findElement(By.name("todo-3")).click();
		Thread.sleep(400);

		System.out.println("Checking Another Box");
		driver.findElement(By.name("todo-4")).click();
		Thread.sleep(400);

		driver.findElement(By.id("todotext")).sendKeys(" List Item 6");
		driver.findElement(By.id("addbutton")).click();
		Thread.sleep(200);

		driver.findElement(By.id("todotext")).sendKeys(" List Item 7");
		driver.findElement(By.id("addbutton")).click();
		Thread.sleep(200);

		driver.findElement(By.id("todotext")).sendKeys(" List Item 8");
		driver.findElement(By.id("addbutton")).click();
		Thread.sleep(200);

		System.out.println("Checking Another Box");
		driver.findElement(By.name("todo-1")).click();
		Thread.sleep(300);

		System.out.println("Checking Another Box");
		driver.findElement(By.name("todo-3")).click();
		Thread.sleep(300);

		System.out.println("Checking Another Box");
		driver.findElement(By.name("todo-7")).click();
		Thread.sleep(300);

		System.out.println("Checking Another Box");
		driver.findElement(By.name("todo-8")).click();
		Thread.sleep(300);

		System.out.println("Entering Text");
		driver.findElement(By.id("todotext")).sendKeys("Get Taste of Lambda and Stick to It");
		Thread.sleep(300);

		driver.findElement(By.id("addbutton")).click();

		System.out.println("Checking Another Box");
		driver.findElement(By.name("todo-9")).click();
		Thread.sleep(300);
		// Let's also assert that the todo we added is present in the list.

		spanText = driver.findElementByXPath("/html/body/div/div/div/ul/li[9]/span").getText();
		Assert.assertEquals("Get Taste of Lambda and Stick to It", spanText);
		Status="passed";
		Thread.sleep(150);

		System.out.println("TestFinished");

	}

	@AfterSuite
	public void tearDown() {
		driver.executeScript("lambda-status=" + Status);
		driver.quit();
	}

}
```

 You can find your defined network capabilities under the section ‘Input Config’ by navigating to the ‘METADATA’ section of your automation build-logs.


> In case you have any questions, feel free to share them with us.Our experts are available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 Customer chat support**</span>. You can also drop us a mail at support@testmu.ai. Happy testing! 🙂

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
        Network Throttling
      </span>
    </li>
  </ul>
</nav>
