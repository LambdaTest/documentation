# Selenium With Java

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your Java Selenium tests on the TestMu AI cloud grid across 3000+ browser and OS combinations. The setup is the same for every framework: you connect to the grid, pass your capabilities, and run. This guide walks through that shared flow once, then gives you a per-framework quickstart for **TestNG, JUnit, Cucumber, Selenide, Gauge, Geb, Serenity**, and the **Java SDK**.

## Prerequisites

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install the [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/) 11 or later.
4. Install [Apache Maven](https://maven.apache.org/). The framework sample projects below all build with Maven.

## Set your credentials

Every framework authenticates the same way: your Username and Access Key are passed in the grid URL. Set them as environment variables so you don't hard-code them. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## How the sample test works

All the framework repos below run the **same** sample test, so you only need to understand it once. The test opens the [to-do app](https://lambdatest.github.io/sample-todo-app/), marks the first two items done, adds a new item, and verifies it appears:

```java
driver.get("https://lambdatest.github.io/sample-todo-app/");
driver.findElement(By.name("li1")).click();
driver.findElement(By.name("li2")).click();
driver.findElement(By.id("sampletodotext")).sendKeys("Yey, Let's add it to list");
driver.findElement(By.id("addbutton")).click();
```

The driver is a `RemoteWebDriver` pointed at the grid, with your browser/OS choices passed through `LT:Options`:

```java
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

Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build an `LT:Options` block for any browser, version, and OS combination.

**What changes between frameworks is only how that test is *structured and run***: the runner, its setup/teardown hooks, and any config files. That's what each tab below covers.

## Run a test in your framework

Each tab lists just the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then run the command shown.

TestNG is the most common choice. It wraps the shared test with `@BeforeClass` (create the driver) and `@AfterClass` (report status and quit), and drives cross-browser runs from a `testng.xml` suite.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Java-TestNG-Selenium):

```bash
git clone https://github.com/LambdaTest/Java-TestNG-Selenium
cd Java-TestNG-Selenium
```

2. Set your browser and OS in the `testng.xml` suite. Listing several environments with `parallel="tests"` and a `thread-count` runs them concurrently:

```xml title="testng.xml"
<suite thread-count="3" name="LambdaTestSuite" parallel="tests">
<test name="WIN10-Chrome">
<parameter name="browser" value="chrome"/>
<parameter name="platform" value="Windows 10"/>
<classes><class name="LambdaTest.TestNGToDo"/></classes>
</test>
<test name="MAC-Safari">
<parameter name="browser" value="safari"/>
<parameter name="platform" value="macOS Catalina"/>
<classes><class name="LambdaTest.TestNGToDo"/></classes>
</test>
</suite>
```

3. Run a single test, or the parallel suite:

```bash
mvn test -D suite=single.xml
mvn test -D suite=parallel.xml
```

JUnit runs the same test as TestNG. The only difference is the lifecycle annotations: it uses `@Before` / `@After` instead of `@BeforeClass` / `@AfterClass`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/junit-selenium-sample):

```bash
git clone https://github.com/LambdaTest/junit-selenium-sample
cd junit-selenium-sample
```

2. Set your browser and OS in the `LT:Options` block:

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

```bash
mvn test -P single
mvn test -P parallel
```

Parallel JUnit runs need a custom `Parallelized` runner (extends `Parameterized` with a `ThreadPoolScheduler`). The cloned repo includes it; see [the sample](https://github.com/LambdaTest/junit-selenium-sample) for the full class.

Cucumber is BDD on top of TestNG: you write scenarios in plain-language **feature files**, and a runner maps each step to WebDriver code. The grid setup lives in the runner.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/cucumber-testng-sample):

```bash
git clone https://github.com/LambdaTest/cucumber-testng-sample
cd cucumber-testng-sample
```

2. Write your scenario in Gherkin:

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

```bash
mvn test
```

`@CucumberOptions` sets the `features` and `glue` paths; `TestNGCucumberRunner` feeds scenarios into TestNG. The full runner and step definitions are in the cloned repo.

Selenide wraps WebDriver with a concise API (`$()`, `open()`) and reads browser/OS choices from **JSON config files** instead of inline capabilities.

1. Clone and compile the [sample GitHub project](https://github.com/LambdaTest/selenide-testng-sample):

```bash
git clone https://github.com/LambdaTest/selenide-testng-sample
cd selenide-testng-sample
mvn compile
```

2. Set your browser and OS. Environments are declared in a config file, one block per browser:

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

```bash
mvn test -P single
mvn test -P parallel
```

Gauge is a BDD runner where steps are Java methods annotated with `@Step`, and the driver comes from a `DriverFactory`.

**Prerequisite:** install the [Gauge CLI](https://docs.gauge.org/).

1. Clone and compile the [sample GitHub project](https://github.com/LambdaTest/gauge-selenium-sample):

```bash
git clone https://github.com/LambdaTest/gauge-selenium-sample
cd gauge-selenium-sample
mvn compile
```

2. Define your steps. Steps map plain-language names to WebDriver actions:

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

```bash
mvn test
```

Parallel runs are configured by adding multiple browser specs under the `env` folder of the cloned project.

Geb is a Groovy wrapper around WebDriver. Its distinguishing trait is that capabilities live in a **separate JSON file** passed via a Maven property.

1. Clone and compile the [sample GitHub project](https://github.com/LambdaTest/geb-parallel-sample-code):

```bash
git clone https://github.com/LambdaTest/geb-parallel-sample-code
cd geb-parallel-sample-code
mvn compile
```

2. Set your browser and OS in the capabilities file:

```json title="capabilities.json"
{
"build": "GebFirstTest",
"platformName": "Windows 10",
"browserName": "firefox",
"browserVersion": "latest"
}
```

3. Run the test, passing that file via the `lambdageb.capabilities` property:

```bash
mvn -Dlambdageb.capabilities=capabilities clean test
```

Serenity is BDD on top of Cucumber with rich reporting. You connect to the grid with a custom `DriverSource` and drive scenarios with page objects.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Serenity-Selenium-Sample):

```bash
git clone https://github.com/LambdaTest/Serenity-Selenium-Sample
cd Serenity-Selenium-Sample
```

Scenarios are written in Gherkin and the grid connection lives in a `DriverSource` implementation (`LambdaTestSerenityDriver`) that builds `LT:Options` from Serenity's environment variables.

2. Run a single scenario or the parallel profile:

```bash
mvn verify -P single
mvn verify -P parallel
```

Parallel Serenity runs use one runner class per browser, each extending a shared base test. The full `DriverSource` and runners are in the cloned repo.

Tesbo is a keyword-driven hybrid framework on Selenium: you write scripts in plain English, and the grid setup lives in `config.json`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/LamdaTest_Tesbo_Demo):

```bash
git clone https://github.com/LambdaTest/LamdaTest_Tesbo_Demo
cd LamdaTest_Tesbo_Demo
```

2. Set your browser and OS in `config.json` (set `IsGrid` to `true` and point `seleniumAddress` at the grid):

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

The **Java SDK** is the zero-code option: it runs your **existing** TestNG tests on the grid unchanged, injecting credentials and capabilities from a YAML file via a Java agent. Use this when you already have a local suite and don't want to edit test code. See the [SDK reference project on GitHub](https://github.com/Lambdatest/lambdatest-java-selenium-sdk).

1. Add the SDK dependency and agent to your `pom.xml` (the agent is attached to Surefire via `-javaagent`):

```xml title="pom.xml (key additions)"
<dependency>
<groupId>io.github.lambdatest</groupId>
<artifactId>lambdatest-selenium-java-sdk</artifactId>
<version>1.0.1</version>
</dependency>
<!-- plus the maven-dependency-plugin (copies lambdatest-agent.jar) and
maven-surefire-plugin with -javaagent:.../lambdatest-agent.jar -->
```

2. Create `lambdatest.yml` with your credentials, platforms, and features. The SDK loads it automatically:

```yaml title="lambdatest.yml"
username: YOUR_LAMBDATEST_USERNAME
accesskey: YOUR_LAMBDATEST_ACCESS_KEY

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

```bash
mvn test -D suite=testng.xml
```

## View your results

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).
