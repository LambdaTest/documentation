---
id: getting-started-with-selenium-4
title: Getting Started With Selenium 4 On TestMu AI Platform
sidebar_label: Getting Started
description: Now run automated tests with Selenium 4 using the TestMu AI Selenium Grid across 3000+ browsers and operating systems. 
keywords:
- Selenium 4 
- Selenium 4 Relative Locators
- Selenium 4 Automation
- Selenium 4 Documentation

url: https://www.testmu.ai/support/docs/getting-started-with-selenium-4
site_name: LambdaTest
slug: getting-started-with-selenium-4
---
## Introduction

* * *

Now run automated tests with Selenium 4 using the <BrandName /> Selenium Grid across 3000+ browsers and operating systems. With this <BrandName /> and Selenium 4 integration, <BrandName /> not only allows you to perform Selenium 4 testing on an online automation cloud, but also allows you to perform cross-browser testing at scale.

This Selenium 4 documentation will act as your step-by-step guide on your journey to test using Selenium 4 on <BrandName />. 

>**Note**: As of now, the sample test script is only available in Java. But worry not! We are working on adding the test scripts on other languages too. 

## Running Your First Test 

* * *

As a part of this step-by-step guide, we will run a Selenium 4 test that perform the following action:

1. Open **google.com.**
2. Enter a search string <BrandName /> in the browser.
3. Click the **Google Search** button.
4. Assert the page URL.
5. Mark the status of the test as either passed or failed based on the assertion. 

### Step 1 - OS-device-browser Combination

* * *

To select the OS-device-browser combination for running the test, use <BrandName />'s [capability generator](https://www.lambdatest.com/capabilities-generator/). After selecting the combination, replace the capabilities given in the sample test script with the chosen combination.

###  Step 2 - Understanding the Sample Script

* * *

As the sample test script is only available in Java, we recommend using it to run your first Selenium 4 test on <BrandName />. The offered test script uses the updated Action class features and the relative locators of Selenium 4. 

**Relative Locators** helps users locate any complex UI elements, elements that might be relevant to a critical UI element, in fewer lines of code. Selenium 4 has the following relative locators: `above`, `below`, `toLeftOf`, `toRightOf`, and `near`. For the sake of this test, the script uses the `toLeftof` locator to locate the Google Search button on the Google home page. 

Some other use cases for Relative Locators are:

- In the case of an e-commerce website, relative locators can help identify a particular button if there are multiple buttons with the same name on a single website page. 
- UI elements that do not include unique IDs
- UI elements with complex CSS or XPath expression.

Selenium 4 comes with a changed syntax of the **Action class**. It is used for handling mouse and keyboard events on a specific element. For this test, the script uses the `moveToElement(onElement).click()` method to simulate the click action of your mouse.

Along with these features, Selenium 4 offers other CDP features that <BrandName /> supports. Check them out now. 

### Step 3 - Writing the Sample Test Script

* * *

In your Java project, create a new file JavaSample.java and copy the following code to this file: 

>**Note**: As of now, the sample test script is only available in Java. But worry not! We are working on adding the test scripts on other languages too.

>**Warning**: Ensure that you include the driver.quit() statement at the end of the test script to avoid timeout issues. If you skip adding the statement, the test continues to run leading to a timeout.

### Step 4 - Run the Sample Test Code

* * *

You can run the file using the Run command in your IDE after the test script is created. 

### Step 5 - View the Test Results

* * *

After running the test successfully, the dashboard and the command line will view your result. In addition, you get access to text logs, video recordings ,and screenshots of your test execution. 
