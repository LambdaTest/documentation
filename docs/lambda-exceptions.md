---
id: lambda-exceptions
title: View Assertion Errors On TestMu AI
sidebar_label: Handle Exceptions
description: Manage and display GET request assertion errors in Selenium scripts using the Lambda Exceptions feature.
keywords:
  - catch assertion error selenium
  - lambda exception test debugging
  - view stacktrace on dashboard
  - assertion error handling java
  - selenium exception reporting
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/lambda-exceptions/
site_name: TestMu AI
slug: lambda-exceptions/
canonical: https://www.testmuai.com/support/docs/lambda-exceptions/
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
          "name": "View Assertion Errors",
          "item": `${BRAND_URL}/support/docs/lambda-exceptions/`
        }]
      })
    }}
></script>

# View Assertion Errors On TestMu AI

***
While handling GET requests in your Selenium scripts, assertions might fail. Use the Lambda Exceptions feature to view these assertion errors as exceptions and handle them more effectively.

## What Are Lambda Exceptions?
---
Lambda Exceptions let you manage and display GET request errors like AssertionError on the dashboard.

Lambda Exception is a feature of TestMu AI that lets you manage and handle GET request errors, like AssertionError. The error gets displayed as an exception in the Exception tab of your test.

For example:

<img loading="lazy" src={require('../assets/images/lambda-exceptions/lambda-exception.webp').default} alt="Image"  className="doc_img" width="768" height="335"/>

## How to Use Lambda Exception
---
Catch assertion errors in GET requests and push them to the dashboard using JavascriptExecutor.

While performing assertions on GET requests, if the assertion fails, an AssertionError exception is thrown. Refer to the below Java syntax to catch this error and push it to TestMu AI using Lambda Exceptions.

```javascript
try {
    // some GET request
    Assert.assertEquals(ActualValue, ExpectedValue);
} catch (AssertionError e) {
    Status = "failed";
    exceptionCapture.add(e.getMessage());
    ((JavascriptExecutor) driver).executeScript("lambda-exceptions", exceptionCapture);
}
```

In the above syntax, when the AssertionError is caught in the catch{} block, the exception message is added as an array of Strings. This message is then pushed to TestMu AI using the Lambda Exceptions feature via the JavascriptExecutor command.

## Lambda Exception Demo
---
Walk through a sample script that visits a URL, fetches the title, and asserts it against an expected value.

For demo purposes, this script will:

* Visit www.testmuai.com
* Fetch the title
* Assert the title with the expected value

### View Exception on the Dashboard Using Lambda Exception
---
Below is the full code for this script, using TestNG framework in Java.

```javascript
package com.lambdatest;


import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

public class LambdaException {

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
		caps.setCapability("build", "LambdaException Demo");
		caps.setCapability("name", "Test 2");
		caps.setCapability("network", true);
		caps.setCapability("visual", true); 
		caps.setCapability("video", true);
		caps.setCapability("console", true);
		

		System.out.println("Desired Caps: " + caps);
		driver = new RemoteWebDriver(new URL("https://" + username + ":" + authkey + hub), caps);
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}


	@Test
	public static void testAssertionError() {
		
	        ArrayList<String> exceptionCapture = new ArrayList<>();
	        try {
	            driver.get("https://www.lambdatest.com");

	            String ExpectedTitle = "Most Powerful Cross Browser Testing Tool Online | LambdaT";
	            String TitleValue = driver.getTitle();
	            if (TitleValue.equals(ExpectedTitle)) {
	            	Status = "passed";
	            }

	            Assert.assertEquals(TitleValue, ExpectedTitle);
	        } catch (AssertionError e) {
	        	Status = "failed";
	            exceptionCapture.add(e.getMessage());
	            ((JavascriptExecutor) driver).executeScript("lambda-exceptions", exceptionCapture);
	        }
	}

	@AfterSuite
	public void tearDown() {
		driver.executeScript("lambda-status=" + Status);
		driver.quit();
	}

}
```

When you execute the above test as a TestNG script, the test will fail. This is because we provided an incorrect value in the ExpectedTitle variable for demo purposes. When you open the test view and navigate to the Exception tab, you will find a message displaying this error:

<img loading="lazy" src={require('../assets/images/lambda-exceptions/lambda-exception-error.webp').default} alt="lambdatest exceptions"  className="doc_img" width="768" height="346"/>

### View StackTrace on the Dashboard Using Lambda Exception
---
You can also view the full StackTrace on the dashboard using Lambda Exceptions.

You can view the full StackTrace on the TestMu AI platform using the Lambda Exceptions feature. Convert the StackTrace to String and print it as an array of Strings. Below is the full script to print the StackTrace using TestNG framework in Java:

```javascript
package com.lambdatest;


import java.io.PrintWriter;
import java.io.StringWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

public class LambdaException {

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
		caps.setCapability("build", "LambdaException Demo");
		caps.setCapability("name", "Print StackTrace");
		caps.setCapability("network", true);
		caps.setCapability("visual", true); 
		caps.setCapability("video", true);
		caps.setCapability("console", true);
		

		System.out.println("Desired Caps: " + caps);
		driver = new RemoteWebDriver(new URL("https://" + username + ":" + authkey + hub), caps);
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}


	@Test
	public static void testAssertionError() {
		
	        ArrayList<String> exceptionCapture = new ArrayList<>();
	        try {
	            driver.get("https://www.lambdatest.com");
	            String TitleValue = driver.getTitle();
	            String ExpectedTitle = "Most Powerful Cross Browser Testing Tool Online | LambdaT";
	            if (TitleValue.equals(ExpectedTitle)) {
	            	Status = "passed";
	            }
	            Assert.assertEquals(TitleValue, ExpectedTitle);
	        } catch (AssertionError e) {
	        	Status = "failed";
	            StringWriter sw = new StringWriter();
	            PrintWriter printWriter = new PrintWriter(sw);
	            PrintWriter pw = printWriter;
	            e.printStackTrace(pw);
	            String sStackTrace = sw.toString();
	            exceptionCapture.add(sStackTrace);
	            ((JavascriptExecutor) driver).executeScript("lambda-exceptions", exceptionCapture);
	        }
	}

	@AfterSuite
	public void tearDown() {
		driver.executeScript("lambda-status=" + Status);
		driver.quit();
	}

}
```

When you execute the above test as a TestNG script, it produces the same result as the view exception section because of the incorrect ExpectedTitle value. Open the test view and navigate to the Exception tab to find the full StackTrace:

<img loading="lazy" src={require('../assets/images/lambda-exceptions/lambda-StackTrace.webp').default} alt="Image"  className="doc_img" width="604" height="270"/>

Below is the full StackTrace printed on the TestMu AI platform from the above script.

```javascript
java.lang.AssertionError: expected [Most Powerful Cross Browser Testing Tool Online | LambdaT] but found [Most Powerful Cross Browser Testing Tool Online | Lambdatest] at
 org.testng.Assert.fail(Assert.java:99) at
 org.testng.Assert.failNotEquals(Assert.java:1037) at
 org.testng.Assert.assertEqualsImpl(Assert.java:140) at
 org.testng.Assert.assertEquals(Assert.java:122) at
 org.testng.Assert.assertEquals(Assert.java:629) at
 org.testng.Assert.assertEquals(Assert.java:639) at
 com.lambdatest.LambdaException.testAssertionError(LambdaException.java:66) at
 java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method) at
 java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64) at
 java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) at
 java.base/java.lang.reflect.Method.invoke(Method.java:564) at
 org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:132) at
 org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:599) at
 org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:174) at
 org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46) at
 org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:822) at
 org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:147) at
 org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146) at
 org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128) at
 java.base/java.util.ArrayList.forEach(ArrayList.java:1511) at
 org.testng.TestRunner.privateRun(TestRunner.java:764) at
 org.testng.TestRunner.run(TestRunner.java:585) at
 org.testng.SuiteRunner.runTest(SuiteRunner.java:384) at
 org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378) at
 org.testng.SuiteRunner.privateRun(SuiteRunner.java:337) at
 org.testng.SuiteRunner.run(SuiteRunner.java:286) at
 org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53) at
 org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96) at
 org.testng.TestNG.runSuitesSequentially(TestNG.java:1218) at
 org.testng.TestNG.runSuitesLocally(TestNG.java:1140) at
 org.testng.TestNG.runSuites(TestNG.java:1069) at
 org.testng.TestNG.run(TestNG.java:1037) at
 org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115) at
 org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251) at
 org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)
```
* * *

That’s it! You can now easily handle and manage exceptions using the Lambda Exceptions feature. If you still have any doubt, please feel free to reach out to us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or by mailing to us on [support@testmuai.com](mailto:support@testmuai.com). Happy testing! 🙂

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
        View Assertion Errors
      </span>
    </li>
  </ul>
</nav>
