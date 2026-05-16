---
id: gauge-frameworks
title: Selenium With Gauge
sidebar_label: Gauge
description: Run Gauge Selenium tests on TestMu AI cloud grid with parallel execution across 3000+ browsers.
keywords:
  - gauge selenium cloud testing
  - run gauge tests on selenium grid
  - gauge parallel test execution
  - gauge automation setup
  - gauge cross browser testing
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/running-gauge-tests-on-testmu-selenium-grid/
site_name: TestMu AI
slug: running-gauge-tests-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/running-gauge-tests-on-testmu-selenium-grid/
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
          "name": "Selenium With Gauge",
          "item": `${BRAND_URL}/support/docs/running-gauge-tests-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

Run Gauge tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/gauge-selenium-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://accounts.lambdatest.com/register) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://accounts.lambdatest.com/dashboard).
3. Install the **Java development environment** (Java 11 recommended).
4. Install **Maven**. Download it from [the official website](https://maven.apache.org/) or install it on **Linux/MacOS** using [**Homebrew**](https://brew.sh/).
5. Install the **Gauge** framework from [the official Gauge website](https://docs.gauge.org/getting_started/installing-gauge.html?os=windows&language=null&ide=null).

## Step 1: Clone the Sample Project
---

Pull the sample repo to your local machine and navigate into the project directory.

```bash
git clone https://github.com/LambdaTest/gauge-selenium-sample
cd gauge-selenium-sample
```

You may also want to run the command below to check for outdated dependencies.

```bash
mvn versions:display-dependency-updates
```

Install the mandatory Selenium dependencies for Maven:

```bash
mvn compile
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

Below is the sample Gauge test used in this project:

```java title="StepImplementation_ToDo.java"
package driver.driver;

import com.thoughtworks.gauge.Step;
import driver.driver.DriverFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;

public class StepImplementation_ToDo {

    private final WebDriver driver;

    public StepImplementation_ToDo() {
        this.driver = DriverFactory.getDriver();
    }

  @Step("Open the todo app")
  public void gotoApp() throws InterruptedException {

        System.out.println(DriverFactory.getDriver());
        driver.get("https://lambdatest.github.io/sample-todo-app/");
        String title = driver.getTitle();
        assertEquals(title,"Sample page - lambdatest.com");
  }

  @Step("Select the desired items")
  public void selectItems() throws InterruptedException {

      WebElement itemOne = driver.findElement(By.name("li1"));
      itemOne.click();

      driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

      WebElement itemThird = driver.findElement(By.name("li3"));
      itemThird.click();
  }

  @Step("Add new item <itemName>")
  public void addNewItem(String itemName) throws InterruptedException {

      WebElement addItem  = driver.findElement(By.id("sampletodotext"));
      addItem.sendKeys(itemName);
      Thread.sleep(2000);

      WebElement addButton = driver.findElement(By.id("addbutton"));
      addButton.click();
  }
}
```

## Step 4: Run the Test
---

Trigger the test from your terminal.

```bash
mvn test
```

or

```bash
mvn clean install
```

Gauge framework supports parallel test execution on the TestMu AI grid. To run parallel tests, update more than one browser specification in the env folder of the project. Once the test executes, all parallel browser specifications hit the TestMu AI grid and run simultaneously.

<p align="center">
<img loading="lazy" src={require('../assets/images/selenium/gauge1.png').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

To remove a browser from parallel execution, delete its folder or comment out the code in it.

## Step 5: View Your Results
---

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action

## Run Gauge Tests Using Agent Skills
---

Use AI coding assistants to generate and run Gauge tests with the TestMu AI Agent Skill.

The [gauge-skill](https://github.com/LambdaTest/agent-skills/tree/main/gauge-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/gauge-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/gauge-skill .cursor/skills/
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
      Selenium With Gauge
      </span>
    </li>
  </ul>
</nav>
