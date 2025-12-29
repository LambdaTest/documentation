---
id: applitools-integration-with-lambdatest
title: Applitools Integration With TestMu AI
sidebar_label: Applitools
description: TestMu AI integration with Applitools will allow you perform automated cross browser testing on more than 2000 real browsers running on real operating systems, hosted on a cloud-based Selenium Grid. You can execute your automation test script on TestMu AI Selenium Grid directly from your Applitools instance.
keywords:
  - testmu ai integrations
  - testmu ai integration with applitools
  - applitools integration
  - cross browser testing
  - free cross browser testing tool
url: https://www.lambdatest.com/support/docs/applitools-integration-with-lambdatest/
site_name: LambdaTest
slug: applitools-integration-with-lambdatest/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

-----------------------------------------------------------------------------------------------------------------------------
Applitools offers a cloud-based platform to help you perform AI Native, end-to-end visual testing and monitoring. The platform is designed to make life easier for automation testers by delivering a flexible way to directly integrate their test scripts without worrying about learning a new language or creating a new automation script.

LambdaTest integration with Applitools will help you perform automated cross browser testing on more than 2000 real browsers running on real operating systems hosted on a cloud-based Selenium Grid. You can execute your automation test script on LambdaTest Selenium Grid directly from your Applitools instance.

In this topic, you will learn about the:   
* Prerequisites for integrating LambdaTest with Applitools.
* Running your first test on LambdaTest Selenium Grid from Applitools.
* Test your locally hosted applications on LambdaTest from Applitools.

## Prerequisites To Integrate LambdaTest With Applitools
* * *
>**Important:** Visit LambdaTest  [GitHub repository for LambdaTest Integration with Applitools.](https://github.com/LambdaTest/applitools-lambdatest-integration) 

* **LambdaTest Authentication Credentials**

 Be aware of your LambdaTest authentication credentials i.e., your LambdaTest username, access key, and HubURL. You need to set them up as your environment variables. You can retrieve them from your [LambdaTest automation dashboard](https://automation.lambdatest.com) by clicking on the key icon near the help button. 
* For Linux/Mac:  

<div className="lambdatest__codeblock">
<CodeBlock className="language-javascript">
{`$ export LT_USERNAME= ${ YOUR_LAMBDATEST_USERNAME()}
$ export LT_ACCESS_KEY= ${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>


* For Windows: 

<div className="lambdatest__codeblock">
<CodeBlock className="language-javascript">
{`$ set LT_USERNAME= ${ YOUR_LAMBDATEST_USERNAME()}
$ set LT_ACCESS_KEY= ${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

* **Applitools API Key**  

  You can find your Applitools API key by logging into your Applitools account and going to your **Profile > My API Key.**   In your terminal or CMD, you need to export the Applitools API key along with LambdaTest Credentials.    
   * For Linux/Mac:  
        ```
        $ export APPLITOOLS_API_KEY=<your applitool api key> 
        ```

    * For Windows: 
        ```
        $ set APPLITOOLS_API_KEY=<your applitool api key>
        ```

* **Global Dependencies**
    * Make sure you have [Java](https://www.java.com/en/download/help/download_options.xml) installed in your operating system.
    * Download and install [Maven Apache.](https://maven.apache.org/download.cgi)

* Install **Maven dependencies** using the below command.
   ```
$ mvn install
   ```
## Run Your First Test On LambdaTest Selenium Grid From Applitools
-----------------------------------------------------------------------------------------------------------------------------
Below is a code to run a demo test on LambdaTest Selenium Grid from Applitools.

>**Important:** You can clone the below code from our [GitHub repository for LambdaTest Integration with Applitools](https://github.com/LambdaTest/applitools-lambdatest-integration/blob/master/src/test/java/com/applitools/quickstarts/BasicDemo.java).



<div className="lambdatest__codeblock">
<CodeBlock className="language-jsx">
{`package com.applitools.quickstarts;
import static com.google.common.base.Strings.isNullOrEmpty;
import java.net.MalformedURLException;
import java.net.URL;
import com.applitools.eyes.*;
import com.applitools.eyes.selenium.ClassicRunner;
import com.applitools.eyes.selenium.Eyes;
import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
/**
 * Runs Applitools test for the demo app https://demo.applitools.com
 */
@RunWith(JUnit4.class)
public class BasicDemo {
	private EyesRunner runner;
	private Eyes eyes;
	private static BatchInfo batch;
	private RemoteWebDriver driver;
	private static String username;
	private static String accesskey;
	private static String gridURL;
	private static String applitoolsApiKey;
	@BeforeClass
	public static void setBatch() {
		// Must be before ALL tests (at Class-level)
		batch = new BatchInfo("Demo batch");
		username = System.getProperty("LT_USERNAME", "${ YOUR_LAMBDATEST_USERNAME()}");
		accesskey = System.getProperty("LT_ACCESS_KEY", "${ YOUR_LAMBDATEST_ACCESS_KEY()}");
		applitoolsApiKey = isNullOrEmpty(System.getenv("APPLITOOLS_API_KEY"))
				? "Your Applitools Api Key"
				: System.getenv("APPLITOOLS_API_KEY");
		gridURL = "http://" + username + ":" + accesskey + "@hub.lambdatest.com/wd/hub";
	}
	@Before
	public void beforeEach() throws MalformedURLException {
		// Initialize the Runner for your test.
		runner = new ClassicRunner();
		// Initialize the eyes SDK
		eyes = new Eyes(runner);
		// Raise an error if no API Key has been found.
		if (isNullOrEmpty(applitoolsApiKey)) {
			throw new RuntimeException("No API Key found; Please set environment variable 'APPLITOOLS_API_KEY'.");
		}
		// Set your personal Applitols API Key from your environment variables.
		eyes.setApiKey(applitoolsApiKey);
		// set batch name
		eyes.setBatch(batch);
		// Use Chrome browser
//		driver = new ChromeDriver();
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("network", true);
		capabilities.setCapability("visual", true);
		capabilities.setCapability("video", true);
		capabilities.setCapability("console", true);
		capabilities.setCapability("browserName", "Chrome");
		capabilities.setCapability("version", "76");
		capabilities.setCapability("platform", "Windows 10");
		capabilities.setCapability("name", "Applitools Sample Test");
		capabilities.setCapability("build", "Applitools Demo");
		driver = new RemoteWebDriver(new URL(gridURL), capabilities);
	}
	@Test
	public void basicTest() {
		// Set AUT's name, test name and viewport size (width X height)
		// We have set it to 800 x 600 to accommodate various screens. Feel free to
		// change it.
		eyes.open(driver, "Demo App", "Smoke Test", new RectangleSize(800, 600));
		// Navigate the browser to the "ACME" demo app.
		driver.get("https://demo.applitools.com");
		// To see visual bugs after the first run, use the commented line below instead.
		// driver.get("https://demo.applitools.com/index_v2.html");
		// Visual checkpoint #1 - Check the login page.
		eyes.checkWindow("Login Window");
		// This will create a test with two test steps.
		driver.findElement(By.id("log-in")).click();
		// Visual checkpoint #2 - Check the app page.
		eyes.checkWindow("App Window");
		// End the test.
		eyes.closeAsync();
	}
	@After
	public void afterEach() {
		// Close the browser.
		driver.quit();
		// If the test was aborted before eyes.close was called, ends the test as
		// aborted.
		eyes.abortIfNotClosed();
		// Wait and collect all test results
		TestResultsSummary allTestResults = runner.getAllTestResults();
		// Print results
		System.out.println(allTestResults);
	}
}`}
</CodeBlock>
</div>

Once you have cloned the above code, you need to execute the below command to trigger the test on LambdaTest Selenium Grid.

```
$ mvn -Dtest=BasicDemo test
```
>Watch the execution of the demo test on the [LambdaTest Automation Dashboard.](https://automation.lambdatest.com/)

## Test Your Locally Hosted Applications On LambdaTest From Applitools
-----------------------------------------------------------------------------------------------------------------------------
You can test your locally hosted or privately hosted projects with the LambdaTest Selenium Grid cloud using the Lambda Tunnel app. All you would have to do is set up an SSH tunnel using Lambda Tunnel app and pass toggle tunnel = True via desired capabilities. Lambda Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer to our [LambdaTest Tunnel documentation](/docs/testing-locally-hosted-pages/) for more information.

Download the latest LambdaTest Tunnel binary file and extract it.

>Download:   
* [Lambda Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [Lambda Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [Lambda Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

To run your Applitools automation script for locally hosted web applications on LambdaTest Selenium Grid, you would need to set the **Tunnel Capability** flag to ```true```.

```
 DesiredCapabilities capabilities = new DesiredCapabilities();
         capability.setCapability("tunnel", true);
```
>**Important Note:**   
Some Safari & IE browsers don’t support automatic resolution of the URL string *localhost*. Therefore if you test on URLs like `http://localhost/` or `http://localhost:8080` etc., you would get an error in these browsers. A possible solution is to use `localhost.lambdatest.com` or replace the string *localhost* with a machine IP address. For example, if you wanted to test `http://localhost/dashboard` or, and your machine, IP is 192.168.2.6, you can instead try on `http://192.168.2.6/dashboard` or `https://localhost.lambdatest.com/dashboard`.


**Got Questions?**   
Feel free to give us a shout on our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>24/7 in-app customer chat support</span>. You can even mail to support@lambdatest.com. Happy Testing! 🙂
