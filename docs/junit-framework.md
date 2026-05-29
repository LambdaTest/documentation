---
id: junit-frameworks
title: Selenium With JUnit
sidebar_label: JUnit
description: Run JUnit Selenium tests on TestMu AI cloud grid with parallel execution across 3000+ browsers.
keywords:
  - junit selenium cloud testing
  - run junit tests on selenium grid
  - junit parallel test execution
  - java junit automation setup
  - junit cross browser testing
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
          "name": "Selenium With JUnit",
          "item": `${BRAND_URL}/support/docs/junit-with-selenium-running-junit-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

Run JUnit tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/junit-selenium-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://accounts.lambdatest.com/dashboard).
3. Install the **Java development environment** (Java 11 recommended).
4. Install **Maven**. Download it from [the official website](https://maven.apache.org/) or install it on **Linux/MacOS** using [**Homebrew**](https://brew.sh/).

## Step 1: Clone the Sample Project
---

Pull the sample repo to your local machine and navigate into the project directory.

```bash
git clone https://github.com/LambdaTest/junit-selenium-sample
cd junit-selenium-sample
```

You may also want to run the command below to check for outdated dependencies.

```bash
mvn versions:display-dependency-updates
```

## Step 2: Set Your Credentials
---

Add your TestMu AI credentials as environment variables so the test can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then set them as environment variables:

<Tabs className="docs__val">
<TabItem value="bash" label="macOS / Linux" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>
</TabItem>
<TabItem value="powershell" label="Windows" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>
</TabItem>
</Tabs>

## Step 3: Configure Your Test Capabilities
---

Define the browser, version, and OS for your test run.

```java
ChromeOptions browserOptions = new ChromeOptions();
        browserOptions.setPlatformName("Windows 10");
        browserOptions.setBrowserVersion("latest");

        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        ltOptions.put("build", "LambdaTestSampleApp");
        ltOptions.put("name", "LambdaTestJavaSample");
        ltOptions.put("network", true); // To enable network logs
        ltOptions.put("visual", true); // To enable step by step screenshot
        ltOptions.put("video", true); // To enable video recording
        ltOptions.put("console", true); // To capture console logs
        ltOptions.put("w3c", true);
        browserOptions.setCapability("LT:Options", ltOptions);
```

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.
:::

## Step 4: Run the Test
---

Trigger the test from your terminal.

<Tabs className="docs__val">
<TabItem value="single" label="Single Test" default>

```bash
mvn test -P single
```

</TabItem>
<TabItem value="parallel" label="Parallel Tests">

```bash
mvn test -P parallel
```

</TabItem>
</Tabs>

Below is the sample JUnit test that marks items as done, adds a new item to the list, and validates the result:

```java title="JUnit To Do"
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;
import java.util.HashMap;
public class JUnitTodo {
    public String username = "YOUR_USERNAME";
    public String accesskey = "YOUR_ACCESS_KEY";
    public static RemoteWebDriver driver = null;
    public String gridURL = "@hub.lambdatest.com/wd/hub";
    boolean status = false;
    @Before
    public void setUp() throws Exception {
       ChromeOptions browserOptions = new ChromeOptions();
        browserOptions.setPlatformName("Windows 10");
        browserOptions.setBrowserVersion("latest");

        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        ltOptions.put("build", "LambdaTestSampleApp");
        ltOptions.put("name", "LambdaTestJavaSample");
        ltOptions.put("network", true); // To enable network logs
        ltOptions.put("visual", true); // To enable step by step screenshot
        ltOptions.put("video", true); // To enable video recording
        ltOptions.put("console", true); // To capture console logs
        ltOptions.put("w3c", true);
        browserOptions.setCapability("LT:Options", ltOptions);
        try {
            driver = new RemoteWebDriver(new URL("https://" + username + ":" + accesskey + gridURL), browserOptions);
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

For parallel execution, the sample project uses a `Parallelized` helper class and parameterized tests:

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

```java title="Concurrent Todo App"
import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
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
        env.add(new String[]{"Windows 10", "chrome", "latest"});
        env.add(new String[]{"macOS Monterey","firefox","latest"});
        env.add(new String[]{"Windows 10","internet explorer","latest"});
        return env;
    }
    public JUnitConcurrentTodo(String platform, String browserName, String browserVersion) {
        this.platform = platform;
        this.browserName = browserName;
        this.browserVersion = browserVersion;
     }
    @Before
    public void setUp() throws Exception {
       ChromeOptions browserOptions = new ChromeOptions();
        browserOptions.setPlatformName(platform);
        browserOptions.setBrowserVersion(browserVersion);

        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        ltOptions.put("build", "JUnitParallelSample");
        ltOptions.put("name", "JUnitParallelSampleTest");
        ltOptions.put("w3c", true);
        browserOptions.setCapability("LT:Options", ltOptions);
        try {
            driver = new RemoteWebDriver(new URL("https://" + username + ":" + accesskey + gridURL), browserOptions);
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

## Step 5: View Your Results
---

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action

## Run JUnit Tests Using Agent Skills
---

Use AI coding assistants to generate and run JUnit tests with the TestMu AI Agent Skill.

The [junit-5-skill](https://github.com/LambdaTest/agent-skills/tree/main/junit-5-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/junit-5-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/junit-5-skill .cursor/skills/
```

:::tip
Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
:::

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
      Selenium With JUnit
      </span>
    </li>
  </ul>
</nav>
