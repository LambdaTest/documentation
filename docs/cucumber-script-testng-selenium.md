---
id: cucumber-script-testng-selenium
title: Execute Selenium Tests With Cucumber
sidebar_label: Cucumber
description: Your guide to running tests using Cucumber on TestMu AI's Selenium Grid of 3000+ real devices and desktop browsers.
keywords:
  - cucumber scripts
  - cucumber
  - testng
  - cucumber with selenium
  - cucumber testng
  - cucumber testng runner
  - cucmber testing tool
url: https://www.testmu.ai/support/docs/running-cucumber-scripts-with-testng-and-selenium
site_name: LambdaTest
slug: running-cucumber-scripts-with-testng-and-selenium
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Running Cucumber Scripts With TestNG And Selenium",
          "item": `${BRAND_URL}/support/docs/running-cucumber-scripts-with-testng-and-selenium/`
        }]
      })
    }}
></script>

# Selenium Cucumber Testing Tutorial

---

In this topic, you will learn how to configure and run tests using **Cucumber** on <BrandName />'s [Selenium testing cloud platform](https://www.lambdatest.com/selenium-automation).

## Objectives

---

By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Cucumber** framework with **TestNG** and **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Test your locally hosted pages on <BrandName /> platform.
4. Explore advanced features of <BrandName />.

:::tip Sample repo

All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/cucumber-testng-sample" className="github__anchor"><img loading="lazy" width="50" height="50" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Prerequisites

---

Before you can start performing Java automation testing with Selenium, you would need to:

- Install the latest **Java development environment**. We recommend to use **Java 11** version.

- Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/). Latest versions of Selenium Client and WebDriver are ideal for running your automation script on <BrandName /> Selenium cloud grid.

- Install **Maven**. It can be downloaded and installed following the steps from [the official website](https://maven.apache.org/). Maven can also be installed easily on **Linux/MacOS** using [**Homebrew**](https://brew.sh/) package manager.

### Cloning Repo and Installing Dependencies

**Step 1:** Clone the <BrandName />’s [cucumber-testng-sample](https://github.com/LambdaTest/cucumber-testng-sample) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/cucumber-testng-sample
cd cucumber-testng-sample
```

You may also want to run the command below to check for outdated dependencies.

```bash
mvn versions:display-dependency-updates
```

### Setting up your Authentication

Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) or through [<BrandName /> Profile](https://accounts.lambdatest.com/login).

**Step 2:** Set <BrandName /> **Username** and **Access Key** in environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}" \\
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}" \`
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Run Your First Test

---

### Sample Test with Cucumber-TestNG

Here is the sample feature file for Cucumber.

```bash
Feature: Add new item to ToDO list

Scenario: Lambdatest ToDO Scenario

Given user is on home Page
When select First Item
Then select second item
Then add new item
Then verify added item
```

Here is the `TestRunner` file to automate our feature file through Selenium using TestNG.

```java title="TestRunner"
package MyRunner;

import java.net.URL;

import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(
        features = "src/main/java/Features",
        glue = {"stepDefinitions"},
        tags = {"~@Ignore"},
        format = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        },plugin = "json:target/cucumber-reports/CucumberTestReport.json")

public class TestRunner {

    private TestNGCucumberRunner testNGCucumberRunner;

    public static RemoteWebDriver connection;

    @BeforeClass(alwaysRun = true)
    public void setUpCucumber() {
         testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }

    @BeforeMethod(alwaysRun = true)
    @Parameters({ "browser", "version", "platform" })
    public void setUpClass(String browser, String version, String platform) throws Exception {

            String username = System.getenv("LT_USERNAME") == null ? "YOUR LT_USERNAME" : System.getenv("LT_USERNAME");
            String accesskey = System.getenv("LT_ACCESS_KEY") == null ? "YOUR LT_ACCESS_KEY" : System.getenv("LT_ACCESS_KEY");

            DesiredCapabilities capability = new DesiredCapabilities();
            capability.setCapability(CapabilityType.BROWSER_NAME, browser);
            capability.setCapability(CapabilityType.VERSION,version);
            capability.setCapability(CapabilityType.PLATFORM, platform);
            capability.setCapability("build", "Your Build Name");
            String gridURL = "https://" + username + ":" + accesskey + "@hub.lambdatest.com/wd/hub";
            System.out.println(gridURL);
            connection = new RemoteWebDriver(new URL(gridURL), capability);
            System.out.println(capability);
            System.out.println(connection);
}

    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }

    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }

    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
        testNGCucumberRunner.finish();
    }
}
```

Below are the step definitions.

```java title="ToDoStepDefinition.java"
package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import MyRunner.*;

public class ToDoStepDefinition extends TestRunner {

    public RemoteWebDriver driver = this.connection;

    @Before
    public void updateName(Scenario scenario) {
        driver.executeScript("lambda-name="+scenario.getName());
    }

    @Given("^user is on home Page$")
    public void user_already_on_home_page() {
        System.out.println(driver.getCapabilities());
        driver.get("https://lambdatest.github.io/sample-todo-app/");

    }

    @When("^select First Item$")
    public void select_first_item() {
        driver.findElement(By.name("li1")).click();
    }

    @Then("^select second item$")
    public void select_second_item() {
        driver.findElement(By.name("li2")).click();
    }

    @Then("^add new item$")
    public void add_new_item() {
        driver.findElement(By.id("sampletodotext")).clear();
        driver.findElement(By.id("sampletodotext")).sendKeys("Yey, Let's add it to list");
        driver.findElement(By.id("addbutton")).click();
    }

    @Then("^verify added item$")
    public void verify_added_item() {
        String item = driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText();
        Assert.assertTrue(item.contains("Yey, Let's add it to list"));
    }

    @After
    public void close_the_browser(Scenario scenario) {
        driver.executeScript("lambda-status=" + (scenario.isFailed() ? "failed" : "passed"));
        driver.quit();
    }

}
```

### Configuring your Test Capabilities

**Step 3:** In the test script, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with <BrandName /> Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:

```java
DesiredCapabilities capability = new DesiredCapabilities();
            capability.setCapability(CapabilityType.BROWSER_NAME, browser);
            capability.setCapability(CapabilityType.VERSION,version);
            capability.setCapability(CapabilityType.PLATFORM, platform);
            capability.setCapability("build", "Your Build Name");
```

:::info Note

You can generate capabilities for your test requirements with the help of our inbuilt :link: **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

:::

### Executing the Test

**Step 4:** The tests can be executed in the terminal using the following command:

```bash
mvn test
```

:::info

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build). <BrandName /> Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

:::

## Testing Locally Hosted or Privately Hosted Projects

---

You can test your locally hosted or privately hosted projects with [<BrandName /> Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using <BrandName /> Tunnel app. All you would have to do is set up an SSH tunnel using <BrandName /> Tunnel app and pass toggle `tunnel = True` via desired capabilities. <BrandName /> Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

:::tip Tunnel Help

Refer our :link: [<BrandName /> Tunnel documentation](/support/docs/testing-locally-hosted-pages/) for more information.

:::

Here’s how you can establish <BrandName /> Tunnel.

:::info Download the binary file

- [<BrandName /> Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
- [<BrandName /> Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
- [<BrandName /> Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

:::

Open command prompt and navigate to the binary folder.

Run the following command:

```bash
./LT -user {user’s login email} -key {user’s access key}
```

So if your user name is **lambdatest@example.com**, the command would be:

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`./LT -user lambdatest@example.com -key ${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

Once you are able to connect **<BrandName /> Tunnel** successfully, you would just have to pass on tunnel capabilities in the code as shown:

```java title="Tunnel Capability"
DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("tunnel", true);
```

## Additional Links

---

- [Advanced Configuration for Capabilities](/support/docs/selenium-automation-capabilities/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
       Running Cucumber Scripts With TestNG And Selenium
      </span>
    </li>
  </ul>
</nav>
