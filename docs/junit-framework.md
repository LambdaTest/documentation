---
id: junit-frameworks
title: Execute Selenium Tests With JUnit
sidebar_label: JUnit
description: Your guide to running tests using JUnit on TestMu AI's Selenium Grid of 3000+ real devices and desktop browsers.
keywords:
  - java selenium
  - java selenium tutorial
  - java selenium webdriver
  - java selenium
  - java selenium testing
  - junit
  - junit tutorial
  - junit test cases
  - selenium junit
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/junit-with-selenium-running-junit-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: junit-with-selenium-running-junit-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/junit-with-selenium-running-junit-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';

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
          "name": "Selenium Test Behind Proxy",
          "item": `${BRAND_URL}/support/docs/junit-with-selenium-running-junit-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# Selenium With JUnit Tutorial

---

In this topic, you will learn how to configure and run tests using **JUnit** on <BrandName />'s [Selenium testing cloud platform](https://www.lambdatest.com/selenium-automation).

## Objectives

---

By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **JUnit** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **JUnit** with Selenium to reduce build times.
4. Test your locally hosted pages on <BrandName /> platform.
5. Explore advanced features of <BrandName />.

:::tip Sample repo

All the code samples in this documentation can be found on **<BrandName />'s Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/junit-selenium-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Prerequisites

---

Before you can start performing Java automation testing with Selenium, you would need to:

- Install the latest **Java development environment**. We recommend to use **Java 11** version.

- Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/). Latest versions of Selenium Client and WebDriver are ideal for running your automation script on <BrandName /> Selenium cloud grid.

- Install **Maven** which supports **JUnit** framework out of the box. **Maven** can be downloaded and installed following the steps from [the official website](https://maven.apache.org/). Maven can also be installed easily on **Linux/MacOS** using [**Homebrew**](https://brew.sh/) package manager.

- You would have to add the following maven dependency to your `pom.xml` file if working on your local project.
  ```xml
  <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
      <scope>test</scope>
  </dependency>
  ```

### Cloning Repo and Installing Dependencies

**Step 1:** Clone the <BrandName />’s [junit-selenium-sample](https://github.com/LambdaTest/junit-selenium-sample) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/junit-selenium-sample
cd junit-selenium-sample
```

You may also want to run the command below to check for outdated dependencies.

```bash
mvn versions:display-dependency-updates
```

### Setting up your Authentication

Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) or through <a href="https://accounts.lambdatest.com/login" onClick={CookieTrackingLogin}><BrandName /> Profile</a>.

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

### Sample Test with JUnit

Let’s checkout sample JUnit code running <BrandName /> Selenium grid. This is a simple JUnit automation script similar to the script we have used in our [Github repo](https://github.com/LambdaTest/junit-selenium-sample). This JUnit Selenium script tests a sample to-do list app by marking couple items as done, adding a new item to the list and finally displaying the count of pending items as output.

```java title="JUnit To Do"
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;
public class JUnitTodo {
    public String username = "YOUR_USERNAME";
    public String accesskey = "YOUR_ACCESS_KEY";
    public static RemoteWebDriver driver = null;
    public String gridURL = "@hub.lambdatest.com/wd/hub";
    boolean status = false;
    @Before
    public void setUp() throws Exception {
       DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserName", "chrome");
        capabilities.setCapability("version", "70.0");
        capabilities.setCapability("platform", "win10"); // If this cap isn't specified, it will just get the any available one
        capabilities.setCapability("build", "LambdaTestSampleApp");
        capabilities.setCapability("name", "LambdaTestJavaSample");
        capabilities.setCapability("network", true); // To enable network logs
        capabilities.setCapability("visual", true); // To enable step by step screenshot
        capabilities.setCapability("video", true); // To enable video recording
        capabilities.setCapability("console", true); // To capture console logs
        try {
            driver = new RemoteWebDriver(new URL("https://" + username + ":" + accesskey + gridURL), capabilities);
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
            String enteredText =       driver.findElementByXPath("/html/body/div/div/div/ul/li[6]/span").getText();
            if (enteredText.equals("Yey, Let's add it to list")) {
                status = true;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
    @After
    public void tearDown() throws Exception {
       if (driver != null) {
            ((JavascriptExecutor) driver).executeScript("lambda-status=" + status);
            driver.quit();
        }
    }
}
```

### Configuring your Test Capabilities

**Step 3:** In the test script, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with <BrandName /> Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserName", "chrome");
        capabilities.setCapability("version", "70.0");
        capabilities.setCapability("platform", "win10"); // If this cap isn't specified, it will just get the any available one
        capabilities.setCapability("build", "LambdaTestSampleApp");
        capabilities.setCapability("name", "LambdaTestJavaSample");
        capabilities.setCapability("network", true); // To enable network logs
        capabilities.setCapability("visual", true); // To enable step by step screenshot
        capabilities.setCapability("video", true); // To enable video recording
        capabilities.setCapability("console", true); // To capture console logs
```

:::info Note

You can generate capabilities for your test requirements with the help of our inbuilt :link: **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

:::

### Executing the Test

**Step 4:** The tests can be executed in the terminal using the following command.

```bash
mvn test -P single
```

:::info

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build). <BrandName /> Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

:::

## Run Parallel Tests Using JUnit

---

### Setting up the Parallel Environment

Here is the `Parallelized class` we use for running our Parallel Tests using JUnit. You can also find the below code in our [GitHub repo](https://github.com/LambdaTest/junit-selenium-sample).

```java title="Parallelized Class"
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import org.junit.runners.Parameterized;
import org.junit.runners.model.RunnerScheduler;

public class Parallelized extends Parameterized {

    private static class ThreadPoolScheduler implements RunnerScheduler {
        private ExecutorService executor;

        public ThreadPoolScheduler() {
            String threads = System.getProperty("junit.parallel.threads", "15");
            int numThreads = Integer.parseInt(threads);
            executor = Executors.newFixedThreadPool(numThreads);
        }

        @Override
        public void finished() {
            executor.shutdown();
            try {
                executor.awaitTermination(10, TimeUnit.MINUTES);
            } catch (InterruptedException exc) {
                throw new RuntimeException(exc);
            }
        }

        @Override
        public void schedule(Runnable childStatement) {
            executor.submit(childStatement);
        }
    }

    public Parallelized(Class<?> klass) throws Throwable {
        super(klass);
        setScheduler(new ThreadPoolScheduler());
    }
}
```

Let us take a look at a reference of the above helper class for executing parallel test using JUnit automation framework.

```java title="Concurrent Todo App"
import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.LinkedList;
@RunWith(Parallelized.class)
public class JUnitConcurrentTodo {
     public String username = "YOUR_LT_USERNAME";
    public String accesskey = "YOUR_LT_ACCESS_KEY";
    public String gridURL = "@hub.lambdatest.com/wd/hub";
     public String platform;
     public String browserName;
     public String browserVersion;
    public RemoteWebDriver driver = null;
     boolean status = false;
        @Parameterized.Parameters
     public static LinkedList<String[]> getEnvironments() throws Exception {
        LinkedList<String[]> env = new LinkedList<String[]>();
        env.add(new String[]{"WIN10", "chrome", "70.0"});
        env.add(new String[]{"macos 10.12","firefox","62.0"});
        env.add(new String[]{"WIN8","internet explorer","10"});
        return env;
    }
    public JUnitConcurrentTodo(String platform, String browserName, String browserVersion) {
        this.platform = platform;
        this.browserName = browserName;
        this.browserVersion = browserVersion;
     }
    @Before
    public void setUp() throws Exception {
       DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserName", browserName);
        capabilities.setCapability("version", browserVersion);
        capabilities.setCapability("platform", platform); // If this cap isn't specified, it will just get the any available one
        capabilities.setCapability("build", "JUnitParallelSample");
        capabilities.setCapability("name", "JUnitParallelSampleTest");
        try {
            driver = new RemoteWebDriver(new URL("https://" + username + ":" + accesskey + gridURL), capabilities);
        } catch (MalformedURLException e) {
            System.out.println("Invalid grid URL");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
    @Test
    public void testParallel() throws Exception {
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
            String enteredText = driver.findElementByXPath("/html/body/div/div/div/ul/li[6]/span").getText();
            if (enteredText.equals("Yey, Let's add it to list")) {
                status = true;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
    @After
    public void tearDown() throws Exception {
       if (driver != null) {
            ((JavascriptExecutor) driver).executeScript("lambda-status=" + status);
            driver.quit();
        }
    }
}
```

### Executing Parallel Tests using JUnit

To run parallel tests using **JUnit**, we would have to execute the below command in the terminal:

```bash
mvn test -P parallel
```

:::info

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build).

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

## Using the JUnit 5 Agent Skill with TestMu AI
***

The [junit-5-skill](https://github.com/LambdaTest/agent-skills/tree/main/junit-5-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The junit-5-skill package includes:

```
junit-5-skill/
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


### Installing JUnit 5 Agent Skill
***

Install a JUnit 5 Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/junit-5-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/junit-5-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only junit-5-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).


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
      JUnit Automation Testing 
      </span>
    </li>
  </ul>
</nav>
