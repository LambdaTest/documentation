---
id: zephyr-scale
title: Zephyr Scale Integration
hide_title: true
sidebar_label: Zephyr Scale
description: Integrate Zephyr Scale with TestMu AI to perform automated browser testing, and view test results directly from the TestMu AI platform to your Zephyr Scale instance.

keywords:
  - testmu ai zephyr scale integration
  - integrate testmu ai zephyr scale
  - testmu ai integration with zephyr scale

url: https://www.testmu.ai/support/docs/zephyr-scale-integration
site_name: LambdaTest
slug: zephyr-scale-integration
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Zephyr Scale Integration",
          "item": "https://www.lambdatest.com/support/docs/zephyr-scale-integration/"
        }]
      })
    }}
></script>

# Zephyr Scale Integration
---

Zephyr Scale is a test management platform that helps you plan, manage, and measure your tests inside Jira. It's designed from the ground up to support large test libraries and scaling teams.

LambdaTest offers integration with Zephyr Scale that lets you perform automated browser testing on a cloud-based grid of 3000+ real browsers, devices, and OS combinations. By integrating Zephyr Scale with LambdaTest, you can view test execution results directly from LambdaTest platform to your Zephyr Scale instance.

## Prerequisites
---

1. Install the **Zephyr Scale - Test Management for Jira** application from the Atlassian Marketplace.

2. A LambdaTest account. Don't have an account, [sign up for free](https://accounts.lambdatest.com/register).

3. A Jira Project key.

4. A Zephyr Scale Access token.

## Integrating LambdaTest with Zephyr Scale
---

1. Clone the [LambdaTest Zephyr Scale GitHub repository](https://github.com/LambdaTest/junit-selenium-zephyr-scale-sample) and navigate to the cloned directory.

```js
git clone https://github.com/LambdaTest/junit-selenium-zephyr-scale-sample
cd junit-selenium-zephyr-scale-sample
```

2. In the `PostTestResults.java` script, add the following String parameters.

* File name of your test results.
* File path of the test result file.
* Jira Project key.
* Zephyr Scale Access token.

```js 
public class PostTestResults {

    public void callApi() {

        String fileName = "TEST-com.lambdatest.JUnitTodo.xml" ; //provide the file name of the test results
        String filePath = "target/surefire-reports/TEST-com.lambdatest.JUnitTodo.xml"; //provide the file path of the test result file
        String projectKey = "ZD"; //provide the Jira project key 
        String token = "abcdefghijklmnop123456"; // provide Zephyr Scale access token
```
3. In the test script, you need to update test capabilities and add your LambdaTest Username and Access Key. You can get your LambdaTest Username and Access Key by navigating to your LambdaTest Profile section.

>**Test Scenario**: The below JUnit Selenium script tests a sample to-do list app by marking couple items as done, adding a new item to the list and finally displaying the count of pending items as output.

```js title="JUnitTodo.java"
package com.lambdatest;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.By;

import java.net.MalformedURLException;
import java.net.URL;

public class JUnitTodo {
    String username = System.getenv("LT_USERNAME") == null ? "Your LT_USERNAME" : System.getenv("LT_USERNAME");
    String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "Your LT_ACCESS_KEY" : System.getenv("LT_ACCESS_KEY");
    public static RemoteWebDriver driver = null;

    public String gridURL = "@hub.lambdatest.com/wd/hub";
    public String status = "failed";
    @Before
    public void setUp() throws Exception {
       DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserName", "chrome");
        capabilities.setCapability("version", "latest");
        capabilities.setCapability("platform", "Windows 10"); // If this cap isn't specified, it will just get the any available one
        capabilities.setCapability("build", "LambdaTest-Zephyr Demo");
        capabilities.setCapability("name", "LambdaTest-Zephyr Tests");
       
        try {
            driver = new RemoteWebDriver(new URL("https://" + username + ":" + accessKey + gridURL), capabilities);
        } catch (MalformedURLException e) {
            System.out.println("Invalid grid URL");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
  
    @Test
    
    public void testSimple() throws Exception {
       try {
              //Change it to production page
            driver.get("https://lambdatest.github.io/sample-todo-app/");
             
              //Let's mark done first two items in the list.
              driver.findElement(By.name("li1")).click();
            driver.findElement(By.name("li2")).click();

             // Let's add an item in the list.
              driver.findElement(By.id("sampletodotext")).sendKeys("Yey, Let's add it to list");
            driver.findElement(By.id("addbutton")).click();
             
              // Let's check that the item we added is added in the list.
            String enteredText =  driver.findElementByXPath("/html/body/div/div/div/ul/li[6]/span").getText();
            if (enteredText.equals("Yey, Let's add it to list")) {
                status = "passed";
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
    @After
    public void tearDown() throws Exception {
       if (driver != null) {
             driver.executeScript("lambda-status=" + status);
            driver.quit();

            PostTestResults method = new PostTestResults();
            method.callApi();
        }
    }
}
```
:::info Important
You need to invoke `method.callApi()` from the PostTestResults class in the `@After` hook of `JUnitTodo.java` file.
:::

## Running your Automation tests with LambdaTest and Zephyr Scale
---

To run the test, pass the below command in the terminal.

```js
mvn test -P single
```

Go to the LambdaTest's Automation Dashboard to view the test execution results.

<img loading="lazy" src={require('../assets/images/zephyr-integration/4.png').default} alt="provide access to LambdaTest account" width="1280" height="684" className="doc_img"/>


## Viewing the Test Results in Zephyr Scale
---

To view test results in Zephyr Scale, head over to your Zephyr Scale project. The below screenshot shows the Test Case in Zephyr Scale that you executed on LambdaTest.

<img loading="lazy" src={require('../assets/images/zephyr-integration/1.png').default} alt="provide access to LambdaTest account" width="1280" height="684" className="doc_img"/>

You can also view the executed build by navigating to **Test Cycles**.

<img loading="lazy" src={require('../assets/images/zephyr-integration/2.png').default} alt="provide access to LambdaTest account" width="1280" height="684" className="doc_img"/>

To view the build details, click on the Zephyr project *Key* or *Name*.

<img loading="lazy" src={require('../assets/images/zephyr-integration/3.png').default} alt="provide access to LambdaTest account" width="1280" height="684" className="doc_img"/>

---





