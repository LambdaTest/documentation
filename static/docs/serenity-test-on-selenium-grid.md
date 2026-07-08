# Selenium With Serenity BDD

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Run Serenity BDD tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

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
git clone https://github.com/LambdaTest/Serenity-Selenium-Sample
cd Serenity-Selenium-Sample
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

The sample feature file checks for the word "LambdaTest" on Google and validates the title of the resultant page:

```bash
Feature: Google's Search Functionality
Scenario: Can find search results
When I type query as "LambdaTest"
And I submit
Then I should see title "LambdaTest - Google Search"
```

Below is the `GooglePage.java` file for the above test case scenario:

```java title="GooglePage.java"
package com.lambdatest.cucumber.pages;

import static org.assertj.core.api.Assertions.assertThat;

import org.openqa.selenium.support.FindBy;

import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.pages.PageObject;

@DefaultUrl("https://www.google.com/ncr")
public class GooglePage extends PageObject {

@FindBy(name = "q")
WebElementFacade search;

@FindBy(name = "btnK")
WebElementFacade searchButton;

public void searchForString(String searchString) {
search.sendKeys(searchString);
}
public void submitForm() throws Exception {
searchButton.click();
Thread.sleep(5000);
}

public void titleShouldMatch(String matchTitle) {
assertThat(this.getTitle()).containsIgnoringCase(matchTitle);
}
}
```

Below is the `LambdaTestSerenityDriver.java` file that shows the integration of Serenity with TestMu AI:

```java title="LambdaTestSerenityDriver.java"
package com.lambdatest;

import java.net.URL;
import java.util.HashMap;
import java.util.Iterator;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

import net.thucydides.core.util.EnvironmentVariables;
import net.thucydides.core.util.SystemEnvironmentVariables;
import net.thucydides.core.webdriver.DriverSource;

public class LambdaTestSerenityDriver implements DriverSource {

public WebDriver newDriver() {
EnvironmentVariables environmentVariables = SystemEnvironmentVariables.createEnvironmentVariables();

String username = System.getenv("LT_USERNAME");
if (username == null) {
username = (String) environmentVariables.getProperty("lt.user");
}

String accessKey = System.getenv("LT_ACCESS_KEY");
if (accessKey == null) {
accessKey = (String) environmentVariables.getProperty("lt.key");
}

String environment = System.getProperty("environment");
ChromeOptions browserOptions = new ChromeOptions();
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("plugin", "Serenity LambdaTest Plugin");
ltOptions.put("w3c", true);

Iterator it = environmentVariables.getKeys().iterator();
while (it.hasNext()) {
String key = (String) it.next();

if (key.equals("lt.user") || key.equals("lt.key") || key.equals("lt.grid")) {
continue;
} else if (key.startsWith("lt_")) {
ltOptions.put(key.replace("lt_", ""), environmentVariables.getProperty(key));

} else if (environment != null && key.startsWith("environment." + environment)) {

ltOptions.put(key.replace("environment." + environment + ".", ""),
environmentVariables.getProperty(key));
}
}
browserOptions.setCapability("LT:Options", ltOptions);

try {
String url = "https://" + username + ":" + accessKey + "@" + environmentVariables.getProperty("lt.grid")
+ "/wd/hub";
return new RemoteWebDriver(new URL(url), browserOptions);
} catch (Exception e) {
System.out.println(e);
return null;
}
}

public boolean takesScreenshots() {
return false;
}
}
```

Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.

## Step 4: Run the Test

Trigger the test from your terminal.

```bash
mvn verify -P single
```

```bash
mvn verify -P parallel
```

For parallel execution, the sample project runs **single.feature** test case in four different environments: Chrome, Firefox, IE, and Safari.

```java title="ParallelChromeTest.java"
//Running Parallel Test On Chrome

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "src/test/resources/features/single.feature")
public class ParallelChromeTest extends LambdaTestSerenityTest {
}
```

Define similar classes for the remaining browsers.

## Step 5: View Your Results

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action

## Run Serenity BDD Tests Using Agent Skills

Use AI coding assistants to generate and run Serenity BDD tests with the TestMu AI Agent Skill.

The [serenity-bdd-skill](https://github.com/LambdaTest/agent-skills/tree/main/serenity-bdd-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/serenity-bdd-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/serenity-bdd-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
