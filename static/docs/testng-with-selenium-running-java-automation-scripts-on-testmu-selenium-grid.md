# Selenium With TestNG

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run TestNG tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install the **Java development environment** (Java 11 recommended).
4. Install **Maven**. Download it from [the official website](https://maven.apache.org/) or install it on **Linux/MacOS** using [**Homebrew**](https://brew.sh/).

## Step 1: Clone the Sample Project

Pull the sample repo to your local machine and navigate into the project directory.

```bash
git clone https://github.com/LambdaTest/Java-TestNG-Selenium
cd Java-TestNG-Selenium
```

You may also want to run the command below to check for outdated dependencies.

```bash
mvn versions:display-dependency-updates
```

## Step 2: Set Your Credentials

Add your TestMu AI credentials as environment variables so the test can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then set them as environment variables:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Define the browser, version, and OS for your test run.

```java
ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 10");
browserOptions.setBrowserVersion("latest");

HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("build", "TestMu AISampleApp");
ltOptions.put("name", "TestMu AIJavaSample");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```

Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.

## Step 4: Run the Test

Trigger the test from your terminal.

```bash
mvn test -D suite=single.xml
```

```bash
mvn test -D suite=parallel.xml
```

Below is the sample TestNG test used in this project:

```java title="TestNG To Do"
import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
public class TestNGTodo{
public String username = "YOUR_LAMBDATEST_USERNAME";
public String accesskey = "YOUR_LAMBDATEST_ACCESS_KEY";
public static RemoteWebDriver driver = null;
public String gridURL = "@hub.lambdatest.com/wd/hub";
boolean status = false;
@BeforeClass
public void setUp() throws Exception {
ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 10");
browserOptions.setBrowserVersion("latest");

HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("build", "TestMu AISampleApp");
ltOptions.put("name", "TestMu AIJavaSample");
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
try {//Change it to production page
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
@AfterClass
public void tearDown() throws Exception {
if (driver != null) {
((JavascriptExecutor) driver).executeScript("lambda-status=" + status);
driver.quit();
}
}
}
```

For parallel execution, the sample project includes a `testng.xml` that runs the test across multiple browsers simultaneously:

```xml title="testng.xml"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite thread-count="3" name="LambaTestSuite" parallel="tests">

<test name="WIN8TEST">
<parameter name="browser" value="firefox"/>
<parameter name="version" value="latest"/>
<parameter name="platform" value="WIN8"/>
<classes>
<class name="LambdaTest.TestNGToDo"/>
</classes>
</test> <!-- Test -->

<test name="WIN10TEST">
<parameter name="browser" value="chrome"/>
<parameter name="version" value="latest"/>
<parameter name="platform" value="WIN10"/>
<classes>
<class name="LambdaTest.TestNGToDo"/>
</classes>
</test> <!-- Test -->
<test name="MACTEST">
<parameter name="browser" value="safari"/>
<parameter name="version" value="latest"/>
<parameter name="platform" value="macos 10.13"/>
<classes>
<class name="LambdaTest.TestNGToDo"/>
</classes>
</test> <!-- Test -->

</suite>
```

## Step 5: View Your Results

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action

## Run TestNG Tests Using Agent Skills

Use AI coding assistants to generate and run TestNG tests with the TestMu AI Agent Skill.

The [testng-skill](https://github.com/LambdaTest/agent-skills/tree/main/testng-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/testng-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/testng-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
