---
id: java-framework
title: How to Run Selenium Tests With Java on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Java"
description: Run Java Selenium tests on 3,000+ browser and OS combinations on TestMu AI. Covers TestNG, JUnit, Cucumber, Selenide, Gauge, Geb, Serenity and the SDK.
keywords:
  - java selenium cloud testing
  - run java tests on selenium grid
  - java webdriver remote execution
  - java automation cross browser testing
  - selenium java cloud grid setup
  - testng junit cucumber selenide gauge geb serenity selenium
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';
import CookieTrackingLogin from '@site/src/component/CookieTracking';


<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/"
    },
    "headline": "How to Run Selenium Tests With Java on TestMu AI",
    "description": "Run Java Selenium tests on 3,000+ browser and OS combinations on TestMu AI. Covers TestNG, JUnit, Cucumber, Selenide, Gauge, Geb, Serenity and the SDK.",
    "url": "https://www.testmuai.com/support/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "java selenium cloud testing",
      "run java tests on selenium grid",
      "java webdriver remote execution",
      "selenium java cloud grid setup"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "The shared sample test opens the to-do app, marks the first two items done, adds a new item, and verifies it appears",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "driver.get(\"https://lambdatest.github.io/sample-todo-app/\");\ndriver.findElement(By.name(\"li1\")).click();\ndriver.findElement(By.name(\"li2\")).click();\ndriver.findElement(By.id(\"sampletodotext\")).sendKeys(\"Yey, Let's add it to list\");\ndriver.findElement(By.id(\"addbutton\")).click();"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The driver is a RemoteWebDriver pointed at the grid, with credentials read from environment variables and your browser/OS choices passed through LT:Options",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "String username = System.getenv(\"LT_USERNAME\");\nString accesskey = System.getenv(\"LT_ACCESS_KEY\");\n\nChromeOptions browserOptions = new ChromeOptions();\nbrowserOptions.setPlatformName(\"Windows 10\");\nbrowserOptions.setBrowserVersion(\"latest\");\n\nHashMap<String, Object> ltOptions = new HashMap<String, Object>();\nltOptions.put(\"build\", \"Java Selenium Build\");\nltOptions.put(\"name\", \"Java Selenium Test\");\nltOptions.put(\"w3c\", true);\nbrowserOptions.setCapability(\"LT:Options\", ltOptions);\n\ndriver = new RemoteWebDriver(\n    new URL(\"https://\" + username + \":\" + accesskey + \"@hub.lambdatest.com/wd/hub\"),\n    browserOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the TestNG sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Java-TestNG-Selenium",
        "text": "git clone https://github.com/LambdaTest/Java-TestNG-Selenium\ncd Java-TestNG-Selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run a single TestNG test, or the parallel suite",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test -D suite=single.xml\nmvn test -D suite=parallel.xml"
      }
    ],
    "dateModified": "2026-11-26T12:00:00+05:30"
  }) }}
/>

# How to Run Selenium Tests With Java on TestMu AI
---


To run Selenium tests with Java on TestMu AI, set `LT_USERNAME` and `LT_ACCESS_KEY` as environment variables, point a `RemoteWebDriver` at `https://hub.lambdatest.com/wd/hub`, and pass your browser, version, and OS in `LT:Options`. Then run your suite with Maven as usual. The browsers run on the TestMu AI cloud grid, and each test's video, logs, and result appear on the Automation Dashboard.

Hosts such as `hub.lambdatest.com` keep their original names and work as shown.

You can run on 3,000+ browser and OS combinations, and the setup is the same for every framework: you connect to the grid, pass your capabilities, and run. This guide walks through that shared flow once, then gives you a per-framework quickstart for **TestNG, JUnit, Cucumber, Selenide, Gauge, Geb, Serenity, and Tesbo**, plus a zero-code **Java SDK** option.

## Prerequisites
---

Before running any framework below, set up a TestMu AI account, your credentials, the JDK, and Maven.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install the [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/) 11 or later.
4. Install [Apache Maven](https://maven.apache.org/). The framework sample projects below all build with Maven.

### Set Up Manually Without Maven (Optional)

If you prefer to run raw Selenium Java without a build tool, add the Selenium JARs to your IDE instead of using Maven.

1. Download the latest [Selenium Java Client](https://www.selenium.dev/downloads/) and extract the ZIP file to your project directory.
2. Add the Selenium JARs to your project dependencies in your IDE.

<img loading="lazy" src={require('../assets/images/selenium/java1.png').default} alt="IntelliJ project settings" width="1260" height="1071" className="doc_img"/>

Navigate to **Dependencies** in module settings, click **+**, and add the downloaded Selenium JARs.

<img loading="lazy" src={require('../assets/images/selenium/java2.png').default} alt="Selenium JARs added to project dependencies" width="1150" height="740" className="doc_img"/>

With the JARs added, compile and run the test directly from the terminal:

<VerifiedTag value="Verified" />

```bash
cd to/file/location
javac -classpath ".:/path/to/selenium/jarfile:" JavaTodo.java
java -classpath ".:/path/to/selenium/jarfile:" JavaTodo
```

## Set Your Credentials
---

Every framework authenticates the same way: your Username and Access Key are passed in the grid URL. Set them as environment variables so you don't hard-code them. Pick your operating system:

<VerifiedTag value="Verified" />

<Tabs className="docs__val" groupId="os">

<TabItem value="macos" label="macOS / Linux" default>

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="win-cmd" label="Windows (CMD)">

<div className="lambdatest__codeblock">
    <CodeBlock className="language-batch">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

</TabItem>

</Tabs>

The TestNG and JUnit sample projects read these two variables with `System.getenv`, so no credentials live in the test code.

## How the Sample Test Works
---

All the framework repos below run the **same** sample test, so you only need to understand it once. The test opens the [to-do app](https://lambdatest.github.io/sample-todo-app/), marks the first two items done, adds a new item, and verifies it appears:

<VerifiedTag value="Verified" />

```java
driver.get("https://lambdatest.github.io/sample-todo-app/");
driver.findElement(By.name("li1")).click();
driver.findElement(By.name("li2")).click();
driver.findElement(By.id("sampletodotext")).sendKeys("Yey, Let's add it to list");
driver.findElement(By.id("addbutton")).click();
```

The driver is a `RemoteWebDriver` pointed at the grid. It reads your credentials from the environment variables you set above and passes your browser/OS choices through `LT:Options`:

<VerifiedTag value="Verified" />

```java
String username = System.getenv("LT_USERNAME");
String accesskey = System.getenv("LT_ACCESS_KEY");

ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 10");
browserOptions.setBrowserVersion("latest");

HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("build", "Java Selenium Build");
ltOptions.put("name", "Java Selenium Test");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);

driver = new RemoteWebDriver(
    new URL("https://" + username + ":" + accesskey + "@hub.lambdatest.com/wd/hub"),
    browserOptions);
```

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build an `LT:Options` block for any browser, version, and OS combination.
:::

**What changes between frameworks is only how that test is *structured and run***: the runner, its setup/teardown hooks, and any config files. That's what each tab below covers.

## Run a Test in Your Framework
---

Each tab lists just the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then run the command shown.

<Tabs className="docs__val" groupId="java-framework" queryString="framework">

<TabItem value="testng" label="TestNG" default>

TestNG is the most common choice. Each test class creates the driver in `@BeforeMethod`, then reports its status and quits in `@AfterMethod`. A suite file (`single.xml` or `parallel.xml`) picks which classes run.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Java-TestNG-Selenium):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/Java-TestNG-Selenium
cd Java-TestNG-Selenium
```

2. Set your browser and OS in the test class. Each class in `src/test/java/com/lambdatest/` reads `LT_USERNAME` and `LT_ACCESS_KEY` and sets its own `LT:Options`. This excerpt from `TestNGTodo2.java` runs Chrome on Windows 10:

```java title="TestNGTodo2.java (excerpt)"
String username = System.getenv("LT_USERNAME") == null ? "Your LT Username" : System.getenv("LT_USERNAME");
String authkey = System.getenv("LT_ACCESS_KEY") == null ? "Your LT AccessKey" : System.getenv("LT_ACCESS_KEY");
String hub = "@hub.lambdatest.com/wd/hub";

MutableCapabilities ltOptions = new MutableCapabilities();
ltOptions.setCapability("build", "TestNG With Java");
ltOptions.setCapability("name", m.getName() + this.getClass().getName());
ltOptions.setCapability("platformName", "Windows 10");

ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setCapability("browserVersion", "latest");
browserOptions.setCapability("LT:Options", ltOptions);

driver = new RemoteWebDriver(new URL("https://" + username + ":" + authkey + hub), browserOptions);
```

3. `parallel.xml` runs the three test classes at the same time:

```xml title="parallel.xml"
<suite thread-count="20" parallel="tests" name="Suite">
  <test thread-count="20" parallel="classes" name="Test">
    <classes>
      <class name="com.lambdatest.TestNGTodo1"/>
      <class name="com.lambdatest.TestNGTodo2"/>
      <class name="com.lambdatest.TestNGTodo3"/>
    </classes>
  </test>
</suite>
```

4. Run a single test, or the parallel suite:

<VerifiedTag value="Verified" />

```bash
mvn test -D suite=single.xml
mvn test -D suite=parallel.xml
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="junit" label="JUnit">

JUnit runs the same test as TestNG. The only difference is the lifecycle annotations: it uses `@Before` / `@After` instead of TestNG's `@BeforeMethod` / `@AfterMethod`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/junit-selenium-sample):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/junit-selenium-sample
cd junit-selenium-sample
```

2. Set your browser and OS in the `LT:Options` block:

<VerifiedTag value="Verified" />

```java
ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 10");
browserOptions.setBrowserVersion("latest");

HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("build", "LambdaTestSampleApp");
ltOptions.put("name", "LambdaTestJavaSample");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```

3. Run a single test or the parallel profile:

<VerifiedTag value="Verified" />

```bash
mvn test -P single
mvn test -P parallel
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

:::note
Parallel JUnit runs need a custom `Parallelized` runner (extends `Parameterized` with a `ThreadPoolScheduler`). The cloned repo includes it; see [the sample](https://github.com/LambdaTest/junit-selenium-sample) for the full class.
:::

</TabItem>

<TabItem value="cucumber" label="Cucumber">

Cucumber is BDD on top of TestNG: you write scenarios in plain-language **feature files**, and a runner maps each step to WebDriver code. The grid setup lives in the runner.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/cucumber-testng-sample):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/cucumber-testng-sample
cd cucumber-testng-sample
```

2. Write your scenario in Gherkin:

<VerifiedTag value="Verified" />

```gherkin title="todo.feature"
Feature: Add new item to ToDo list
  Scenario: Add an item to the list
    Given user is on home Page
    When select First Item
    Then select second item
    Then add new item
    Then verify added item
```

Each step maps to a WebDriver action in the step definitions, and the runner (`TestRunner.java`, annotated with `@CucumberOptions`) creates the `RemoteWebDriver` against the grid.

3. Set your browser and OS in the runner (`TestRunner.java`):

<VerifiedTag value="Verified" />

```java
ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName(platform);
browserOptions.setBrowserVersion("latest");

HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("build", "Your Build Name");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```

4. Run the test:

<VerifiedTag value="Verified" />

```bash
mvn test
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

:::note
`@CucumberOptions` sets the `features` and `glue` paths; `TestNGCucumberRunner` feeds scenarios into TestNG. The full runner and step definitions are in the cloned repo.
:::

</TabItem>

<TabItem value="selenide" label="Selenide">

Selenide wraps WebDriver with a concise API (`$()`, `open()`) and reads browser/OS choices from **JSON config files** instead of inline capabilities.

1. Clone and compile the [sample GitHub project](https://github.com/LambdaTest/selenide-testng-sample):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/selenide-testng-sample
cd selenide-testng-sample
mvn compile
```

2. Set your browser and OS. Environments are declared in a config file, one block per browser:

<VerifiedTag value="Verified" />

```json title="parallel.conf.json"
{
  "server": "hub.lambdatest.com",
  "user": "YOUR_USERNAME",
  "key": "YOUR_ACCESS_KEY",
  "capabilities": { "build": "Java Selenide Parallel" },
  "environments": {
    "chrome":  { "platformName": "Windows 10",  "browserName": "chrome",  "browserVersion": "latest" },
    "firefox": { "platformName": "Windows 10",  "browserName": "firefox", "browserVersion": "latest" },
    "safari":  { "platformName": "macOS Mojave", "browserName": "safari",  "browserVersion": "latest" }
  }
}
```

The test reads that config in `@BeforeMethod`, calls `WebDriverRunner.setWebDriver(driver)`, then uses Selenide syntax.

3. Run a single test or the parallel profile:

<VerifiedTag value="Verified" />

```bash
mvn test -P single
mvn test -P parallel
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="gauge" label="Gauge">

Gauge is a BDD runner where steps are Java methods annotated with `@Step`, and the driver comes from a `DriverFactory`.

**Prerequisite:** install the [Gauge CLI](https://docs.gauge.org/).

1. Clone and compile the [sample GitHub project](https://github.com/LambdaTest/gauge-selenium-sample):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/gauge-selenium-sample
cd gauge-selenium-sample
mvn compile
```

2. Define your steps. Steps map plain-language names to WebDriver actions:

<VerifiedTag value="Verified" />

```java title="StepImplementation_ToDo.java (excerpt)"
@Step("Open the todo app")
public void gotoApp() {
    driver.get("https://lambdatest.github.io/sample-todo-app/");
    assertEquals(driver.getTitle(), "Sample page - lambdatest.com");
}

@Step("Add new item <itemName>")
public void addNewItem(String itemName) {
    driver.findElement(By.id("sampletodotext")).sendKeys(itemName);
    driver.findElement(By.id("addbutton")).click();
}
```

3. Set your browser and OS in the `DriverFactory` capabilities:

<VerifiedTag value="Verified" />

```java
ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 10");
browserOptions.setBrowserVersion("latest");

HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("build", "LambdaTestSampleApp");
ltOptions.put("name", "LambdaTestJavaSample");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```

4. Run the test:

<VerifiedTag value="Verified" />

```bash
mvn test
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

:::note
Parallel runs are configured by adding multiple browser specs under the `env` folder of the cloned project.
:::

</TabItem>

<TabItem value="geb" label="Geb">

Geb is a Groovy wrapper around WebDriver. Its distinguishing trait is that capabilities live in a **separate JSON file** passed via a Maven property.

1. Clone and compile the [sample GitHub project](https://github.com/LambdaTest/geb-parallel-sample-code):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/geb-parallel-sample-code
cd geb-parallel-sample-code
mvn compile
```

2. Set your browser and OS in the capabilities file:

<VerifiedTag value="Verified" />

```json title="capabilities.json"
{
  "build": "GebFirstTest",
  "platformName": "Windows 10",
  "browserName": "firefox",
  "browserVersion": "latest"
}
```

3. Run the test, passing that file via the `lambdageb.capabilities` property:

<VerifiedTag value="Verified" />

```bash
mvn -Dlambdageb.capabilities=capabilities clean test
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="serenity" label="Serenity">

Serenity is BDD on top of Cucumber with rich reporting. You connect to the grid with a custom `DriverSource` and drive scenarios with page objects.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Serenity-Selenium-Sample):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/Serenity-Selenium-Sample
cd Serenity-Selenium-Sample
```

Scenarios are written in Gherkin and the grid connection lives in a `DriverSource` implementation (`LambdaTestSerenityDriver`) that builds `LT:Options` from Serenity's environment variables.

2. Run a single scenario or the parallel profile:

<VerifiedTag value="Verified" />

```bash
mvn verify -P single
mvn verify -P parallel
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

:::note
Parallel Serenity runs use one runner class per browser, each extending a shared base test. The full `DriverSource` and runners are in the cloned repo.
:::

</TabItem>

<TabItem value="tesbo" label="Tesbo">

Tesbo is a keyword-driven hybrid framework on Selenium: you write scripts in plain English, and the grid setup lives in `config.json`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/LamdaTest_Tesbo_Demo):

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/LamdaTest_Tesbo_Demo
cd LamdaTest_Tesbo_Demo
```

2. Set your browser and OS in `config.json` (set `IsGrid` to `true` and point `seleniumAddress` at the grid):

<VerifiedTag value="Verified" />

```json title="config.json"
{
  "run": {
    "seleniumAddress": "https://{userName}:{ApiKey}@hub.lambdatest.com/wd/hub",
    "browser": { "name": ["chrome"] },
    "capabilities": {
      "chrome": {
        "build": "Tesbo_With_TestMuAI",
        "name": "Tesbo",
        "platformName": "Windows 10",
        "browserName": "Chrome",
        "browserVersion": "latest"
      }
    },
    "IsGrid": true
  }
}
```

3. Run the test from your IDE. Hit the run button, and your scripts execute on the grid.

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

</Tabs>

## Run Selenium Tests With Java SDK
---

The **Java SDK** is the zero-code option: it runs your **existing** TestNG tests on the grid unchanged, injecting credentials and capabilities from a YAML file via a Java agent. Use this when you already have a local suite and don't want to edit test code. See the [SDK reference project on GitHub](https://github.com/Lambdatest/lambdatest-java-selenium-sdk) and the full [Selenium Java SDK guide](/support/docs/selenium-java-sdk/).

1. Add the SDK dependency and agent to your `pom.xml` (the agent is attached to Surefire via `-javaagent`):

<VerifiedTag value="Verified" />

```xml title="pom.xml (key additions)"
<dependency>
    <groupId>io.github.lambdatest</groupId>
    <artifactId>lambdatest-selenium-java-sdk</artifactId>
    <version>1.0.1</version>
</dependency>
<!-- plus the maven-dependency-plugin (copies lambdatest-agent.jar) and
     maven-surefire-plugin with -javaagent:.../lambdatest-agent.jar -->
```

2. Create `lambdatest.yml` with your credentials, platforms, and features. The SDK loads it automatically and reads `${LT_USERNAME}` and `${LT_ACCESS_KEY}` from the environment variables you set earlier:

<VerifiedTag value="Verified" />

```yaml title="lambdatest.yml"
username: ${LT_USERNAME}
accesskey: ${LT_ACCESS_KEY}

platforms:
  - browserName: Chrome
    browserVersion: latest
    platformName: Windows 10

build: SDK Build v1
name: SDK Test
video: true
tunnel: true
```

3. Register the SDK's TestNG listener in `testng.xml`, then run. Your existing test classes execute as-is:

<VerifiedTag value="Verified" />

```bash
mvn test -D suite=testng.xml
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

## Common Capabilities
---

Set the W3C capabilities (`browserName`, `browserVersion`, `platformName`) on the browser options object, and TestMu AI capabilities inside `LT:Options`. These are the ones Java suites set most often. The full list, with defaults and aliases, is in [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/).

| Capability | Set on | Example | What it does |
|---|---|---|---|
| `browserName` | Browser options | `Chrome` | Browser to run. Case sensitive. `ChromeOptions`, `FirefoxOptions` and `SafariOptions` set it for you. |
| `browserVersion` | Browser options | `latest`, `latest-1` | Browser version. Defaults to `latest`. |
| `platformName` | Browser options or `LT:Options` | `Windows 10`, `macOS Sonoma` | Operating system. Case sensitive. If you leave it out, TestMu AI picks one that suits the browser. |
| `build` | `LT:Options` | `Java Selenium Build` | Groups tests into one build on the dashboard. Keep it under 255 characters. |
| `name` | `LT:Options` | `Java Selenium Test` | Test name shown on the dashboard. |
| `tags` | `LT:Options` | `{"Staging", "Sanity"}` | Labels for grouping and [filtering tests](/support/docs/filter-your-selenium-tests/). |
| `resolution` | `LT:Options` | `1920x1080` | Screen resolution of the VM. Defaults to `1024x768`. |
| `video` | `LT:Options` | `true` | Records a video of the test. On by default. |
| `visual` | `LT:Options` | `true` | Captures a screenshot at each step. Off by default; adds run time. |
| `network` | `LT:Options` | `true` | Records network logs. Off by default; adds run time. |
| `console` | `LT:Options` | `true` | Records browser console (JavaScript) logs. Off by default. |
| `tunnel` | `LT:Options` | `true` | Routes traffic through TestMu AI Tunnel so the browser can reach local or private pages. Off by default. |
| `tunnelName` | `LT:Options` | `my-java-tunnel` | Picks which running tunnel to use. |

In Java, add them to the same `ltOptions` map:

```java
ltOptions.put("resolution", "1920x1080");
ltOptions.put("network", true);
ltOptions.put("console", true);
ltOptions.put("tags", new String[] { "Staging", "Sanity" });
```

## View Your Results
---

Open the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) after `mvn test` finishes. Each run shows as a build named by your `build` capability, with one entry per test named by `name`. Open a test to see its video and command-by-command execution, plus network logs, console logs, and step screenshots if you turned them on.

To mark a test passed or failed, send the `lambda-status` [Lambda Hook](/support/docs/lambda-hooks/) before you quit the driver. The TestNG sample does this in `@AfterMethod`:

```java
((JavascriptExecutor) driver).executeScript("lambda-status=passed");
```

Supported values are `passed`, `failed`, `skipped`, `ignored`, `unknown`, and `error`.

## Test Locally Hosted Pages With TestMu AI Tunnel
---

If the site under test runs on `localhost`, a staging server, or a private network, start TestMu AI Tunnel on your machine and tell the test to use it.

1. Download the Tunnel binary for your OS and start it with your credentials and a tunnel name. Step-by-step setup is in the guides for [macOS](/support/docs/local-testing-for-macos/), [Windows](/support/docs/local-testing-for-windows/), and [Linux](/support/docs/local-testing-for-linux/).

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`LT --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --tunnelName my-java-tunnel`}
  </CodeBlock>
</div>

2. Add the tunnel capabilities to `LT:Options`, using the same tunnel name:

```java
ltOptions.put("tunnel", true);
ltOptions.put("tunnelName", "my-java-tunnel");
```

3. Run your tests as usual. If a browser refuses a plain `localhost` URL, open `localhost.lambdatest.com` or your machine's IP address instead.

For flags, proxies, and other options, see [TestMu AI Tunnel](/support/docs/testmu-tunnel/) and [testing locally hosted pages](/support/docs/testing-locally-hosted-pages/).

## Run in CI
---

In CI, store your username and access key as secrets and expose them as `LT_USERNAME` and `LT_ACCESS_KEY`. The test code doesn't change. A GitHub Actions job for the TestNG sample:

```yaml title=".github/workflows/selenium-java.yml"
name: selenium-java
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          distribution: temurin
          java-version: "17"
      - name: Run TestNG suite on TestMu AI
        env:
          LT_USERNAME: ${{ secrets.LT_USERNAME }}
          LT_ACCESS_KEY: ${{ secrets.LT_ACCESS_KEY }}
        run: mvn test -D suite=parallel.xml
```

In Jenkins, bind your credentials to the same two environment variables and run the same Maven command. See [Jenkins with TestMu AI](/support/docs/jenkins-with-testmu/) and the other [CI/CD integrations](/support/docs/integrations-with-ci-cd-tools/).

## Troubleshooting
---

Match the message your test prints. The full list is in [common Selenium errors](/support/docs/error-messages/).

| Error | Cause | Fix |
|---|---|---|
| Authentication error when the session starts | `LT_USERNAME` or `LT_ACCESS_KEY` is missing or wrong in the shell that runs Maven. The TestNG and JUnit samples then send the placeholder `Your LT Username`. | Run `echo $LT_USERNAME` in the same terminal. Copy both values again from the key icon on the Automation Dashboard. In CI, check the secret names. |
| `SessionNotCreatedException: Could not start a new session` | The browser, driver, Selenium client, or JDK versions don't match. | Check that the browser version and your Selenium and JDK versions are compatible. Build the capabilities with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/). |
| `Lambda Error: Uh Oh! Looks like our Grid failed to recognize your test input.` | A capability has the wrong data type (a string where an integer is expected), or no VM was free during a traffic spike. | Check each capability's type in [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/), then retry. |
| Exceeded Queue Limit | More tests started than your plan's concurrency allows, and the runner closed the connection while they waited in the queue. | Lower `thread-count` in `parallel.xml` to your concurrency limit, and raise your client's connection timeout. |
| Max Duration Exceeded | The test ran longer than the maximum duration (1800 seconds by default), often because of an endless loop. | Split it into smaller tests, check for loops, or set the `maxDuration` capability. |
| `localhost refused to connect` | Some browsers don't accept `localhost` as the URL through the tunnel. | Open `localhost.lambdatest.com` or your machine's IP address instead. |
| The test can't reach a local or staging site | The tunnel isn't running, or `tunnelName` doesn't match the name you started it with. | Start the tunnel first and use the same name in `tunnelName`. See [Tunnel troubleshooting](/support/docs/troubleshooting-lambda-tunnel/). |

## Frequently Asked Questions {#faq}
---

### Can I run Selenium Java tests online without a local Selenium setup?

Yes. You write and compile the test on your machine with the JDK and Maven, and `RemoteWebDriver` sends each command to the TestMu AI grid, where the browser runs. You don't install browsers, drivers, or a Selenium Grid locally. TestMu AI is not an online Java compiler: your build still runs where you start it, on your machine or in CI.

### How do I run TestNG tests with Selenium on TestMu AI?

Clone [Java-TestNG-Selenium](https://github.com/LambdaTest/Java-TestNG-Selenium), export `LT_USERNAME` and `LT_ACCESS_KEY`, and run `mvn test -D suite=single.xml`. The **TestNG** tab above has each step.

### How do I run TestNG test cases in parallel?

Run `mvn test -D suite=parallel.xml`. Its `<test>` element sets `parallel="classes"` and `thread-count="20"`, so all three sample classes start at once. Tests above your plan's concurrency limit wait in a queue until a slot frees up.

### Is JUnit set up the same way?

Yes. JUnit uses the same `RemoteWebDriver`, grid URL, and `LT:Options`. Only the lifecycle annotations (`@Before` and `@After`) and the runner differ. The **JUnit** tab above runs `mvn test -P single` or `mvn test -P parallel`.

### How do I keep my username and access key out of the code?

Set them as the `LT_USERNAME` and `LT_ACCESS_KEY` environment variables and read them with `System.getenv("LT_USERNAME")`. In CI, store them as secrets and map them to the same names. The Java SDK reads `${LT_USERNAME}` and `${LT_ACCESS_KEY}` in `lambdatest.yml`.

## Next Steps
---

Continue with these related guides:

- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Debugging Options](/support/docs/debugging-options/)
- [Filter Your Selenium Tests](/support/docs/filter-your-selenium-tests/)
- [Common Selenium Errors](/support/docs/error-messages/)
- [Lambda Hooks](/support/docs/lambda-hooks/)
- [TestMu AI Tunnel](/support/docs/testmu-tunnel/)
- [Selenium Java SDK](/support/docs/selenium-java-sdk/)

To see what else the grid offers, read about [Selenium automation on TestMu AI](https://www.testmuai.com/selenium-automation/).

