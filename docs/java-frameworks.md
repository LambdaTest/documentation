---
id: java-framework
title: Selenium With Java
sidebar_label: Java
description: Run Java Selenium tests on TestMu AI cloud grid across 3000+ browsers and OS combinations.
keywords:
  - java selenium cloud testing
  - run java tests on selenium grid
  - java webdriver remote execution
  - java automation cross browser testing
  - selenium java cloud grid setup
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
import CookieTrackingLogin from '@site/src/component/CookieTracking';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "Selenium With Java",
          "item": `${BRAND_URL}/support/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

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
    "headline": "Selenium With Java",
    "description": "Run Java Selenium tests on TestMu AI cloud grid across 3000+ browsers and OS combinations. Covers TestNG, JUnit, Cucumber, Selenide, Gauge, Geb, Serenity, Tesbo, and the Java SDK.",
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
      "java webdriver remote execution"
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
        "name": "The test opens the to-do app, marks the first two items done, adds a new item, and verifies it appears",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "driver.get(\"https://lambdatest.github.io/sample-todo-app/\");\ndriver.findElement(By.name(\"li1\")).click();\ndriver.findElement(By.name(\"li2\")).click();\ndriver.findElement(By.id(\"sampletodotext\")).sendKeys(\"Yey, Let's add it to list\");\ndriver.findElement(By.id(\"addbutton\")).click();"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The driver is a RemoteWebDriver pointed at the grid, with your browser/OS choices passed through LT:Options",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "ChromeOptions browserOptions = new ChromeOptions();\nbrowserOptions.setPlatformName(\"Windows 10\");\nbrowserOptions.setBrowserVersion(\"latest\");\n\nHashMap<String, Object> ltOptions = new HashMap<String, Object>();\nltOptions.put(\"build\", \"Java Selenium Build\");\nltOptions.put(\"name\", \"Java Selenium Test\");\nltOptions.put(\"w3c\", true);\nbrowserOptions.setCapability(\"LT:Options\", ltOptions);\n\ndriver = new RemoteWebDriver(\n    new URL(\"https://\" + username + \":\" + accesskey + \"@hub.lambdatest.com/wd/hub\"),\n    browserOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Java-TestNG-Selenium",
        "text": "git clone https://github.com/LambdaTest/Java-TestNG-Selenium\ncd Java-TestNG-Selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "TestNG",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run a single test, or the parallel suite:\n\n```bash\nmvn test -D suite=single.xml\nmvn test -D suite=parallel.xml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/junit-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/junit-selenium-sample\ncd junit-selenium-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set your browser and OS in the LT:Options block",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "ChromeOptions browserOptions = new ChromeOptions();\nbrowserOptions.setPlatformName(\"Windows 10\");\nbrowserOptions.setBrowserVersion(\"latest\");\n\nHashMap<String, Object> ltOptions = new HashMap<String, Object>();\nltOptions.put(\"build\", \"LambdaTestSampleApp\");\nltOptions.put(\"name\", \"LambdaTestJavaSample\");\nltOptions.put(\"w3c\", true);\nbrowserOptions.setCapability(\"LT:Options\", ltOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run a single test or the parallel profile",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test -P single\nmvn test -P parallel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/cucumber-testng-sample",
        "text": "git clone https://github.com/LambdaTest/cucumber-testng-sample\ncd cucumber-testng-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Cucumber",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nEach step maps to a WebDriver action in the step definitions, and the runner (`TestRunner.java`, annotated with `@CucumberOptions`) creates the `RemoteWebDriver` against the grid.\n\n3. Set your browser and OS in the runner (`TestRunner.java`):\n\n```java\nChromeOptions browserOptions = new ChromeOptions();\nbrowserOptions.setPlatformName(platform);\nbrowserOptions.setBrowserVersion(\"latest\");\n\nHashMap<String, Object> ltOptions = new HashMap<String, Object>();\nltOptions.put(\"build\", \"Your Build Name\");\nltOptions.put(\"w3c\", true);\nbrowserOptions.setCapability(\"LT:Options\", ltOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone and compile the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/selenide-testng-sample",
        "text": "git clone https://github.com/LambdaTest/selenide-testng-sample\ncd selenide-testng-sample\nmvn compile"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Selenide",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nThe test reads that config in `@BeforeMethod`, calls `WebDriverRunner.setWebDriver(driver)`, then uses Selenide syntax.\n\n3. Run a single test or the parallel profile:\n\n```bash\nmvn test -P single\nmvn test -P parallel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone and compile the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/gauge-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/gauge-selenium-sample\ncd gauge-selenium-sample\nmvn compile"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Gauge",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Set your browser and OS in the `DriverFactory` capabilities:\n\n```java\nChromeOptions browserOptions = new ChromeOptions();\nbrowserOptions.setPlatformName(\"Windows 10\");\nbrowserOptions.setBrowserVersion(\"latest\");\n\nHashMap<String, Object> ltOptions = new HashMap<String, Object>();\nltOptions.put(\"build\", \"LambdaTestSampleApp\");\nltOptions.put(\"name\", \"LambdaTestJavaSample\");\nltOptions.put(\"w3c\", true);\nbrowserOptions.setCapability(\"LT:Options\", ltOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone and compile the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/geb-parallel-sample-code",
        "text": "git clone https://github.com/LambdaTest/geb-parallel-sample-code\ncd geb-parallel-sample-code\nmvn compile"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Geb",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test, passing that file via the `lambdageb.capabilities` property:\n\n```bash\nmvn -Dlambdageb.capabilities=capabilities clean test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Serenity-Selenium-Sample",
        "text": "git clone https://github.com/LambdaTest/Serenity-Selenium-Sample\ncd Serenity-Selenium-Sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run a single scenario or the parallel profile",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn verify -P single\nmvn verify -P parallel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/LamdaTest_Tesbo_Demo",
        "text": "git clone https://github.com/LambdaTest/LamdaTest_Tesbo_Demo\ncd LamdaTest_Tesbo_Demo"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Tesbo",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/Lambdatest/lambdatest-java-selenium-sdk",
        "text": "\n3. Run the test from your IDE. Hit the run button, and your scripts execute on the grid.\n\n<\/TabItem>\n\n<TabItem value=\"sdk\" label=\"Java SDK\">\n\nThe **Java SDK** is the zero-code option: it runs your **existing** TestNG tests on the grid unchanged, injecting credentials and capabilities from a YAML file via a Java agent. Use this when you already have a local suite and don't want to edit test code. See the [SDK reference project on GitHub](https://github.com/Lambdatest/lambdatest-java-selenium-sdk).\n\n1. Add the SDK dependency and agent to your `pom.xml` (the agent is attached to Surefire via `-javaagent`):\n\n```xml title=\"pom.xml (key additions)\"\n<dependency>\n    <groupId>io.github.lambdatest<\/groupId>\n    <artifactId>lambdatest-selenium-java-sdk<\/artifactId>\n    <version>1.0.1<\/version>\n<\/dependency>\n<!-- plus the maven-dependency-plugin (copies lambdatest-agent.jar) and\n     maven-surefire-plugin with -javaagent:.../lambdatest-agent.jar -->"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "platforms",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Register the SDK's TestNG listener in `testng.xml`, then run. Your existing test classes execute as-is:\n\n```bash\nmvn test -D suite=testng.xml"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

---

Run your Java Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid, pass your capabilities, and run. This guide walks through that shared flow once, then gives you a per-framework quickstart for **TestNG, JUnit, Cucumber, Selenide, Gauge, Geb, Serenity**, and the **Java SDK**.

## Prerequisites
---

Complete these steps before running Java Selenium tests.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install the [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/) 11 or later.
4. Download the latest [Selenium Java Client](https://www.selenium.dev/downloads/) and extract the ZIP file to your project directory.
5. Add the Selenium JARs to your project dependencies in your IDE.

<img loading="lazy" src={require('../assets/images/selenium/java1.png').default} alt="IntelliJ project settings" width="1260" height="1071" className="doc_img"/>

Navigate to **Dependencies** in module settings, click **+**, and add the downloaded Selenium JARs.

<img loading="lazy" src={require('../assets/images/selenium/java2.png').default} alt="Selenium JARs added to project dependencies" width="1150" height="740" className="doc_img"/>

## Step 1: Create the Test File
---

Every framework authenticates the same way: your Username and Access Key are passed in the grid URL. Set them as environment variables so you don't hard-code them. Pick your operating system:

<Tabs className="docs__val" groupId="os">

<TabItem value="macos" label="macOS / Linux" default>

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="win-cmd" label="Windows (CMD)">

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
    <CodeBlock className="language-batch">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

</TabItem>

</Tabs>

## How the sample test works
---

All the framework repos below run the **same** sample test, so you only need to understand it once. The test opens the [to-do app](https://lambdatest.github.io/sample-todo-app/), marks the first two items done, adds a new item, and verifies it appears:

<VerifiedTag value="Verified" />

```java title="JavaToDo.java"
import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.util.HashMap;
public class JavaTodo {
    String username = "YOUR_LAMBDATEST_USERNAME";
    String accesskey = "YOUR_LAMBDATEST_ACCESS_KEY";
    static RemoteWebDriver driver = null;
    String gridURL = "@hub.lambdatest.com/wd/hub";
    boolean status = false;
    public static void main(String[] args) {
        new JavaTodo().test();
    }
    public void test() {
        setUp();
        try {
            driver.get("https://lambdatest.github.io/sample-todo-app/");

            driver.findElement(By.name("li1")).click();
            driver.findElement(By.name("li2")).click();

            driver.findElement(By.id("sampletodotext")).sendKeys("Yey, Let's add it to list");
            driver.findElement(By.id("addbutton")).click();

            String enteredText = driver.findElementByXPath("/html/body/div/div/div/ul/li[6]/span").getText();
            if (enteredText.equals("Yey, Let's add it to list")) {
                status = true;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            tearDown();
        }
    }
    private void setUp() {
        ChromeOptions browserOptions = new ChromeOptions();
        browserOptions.setPlatformName("Windows 10");
        browserOptions.setBrowserVersion("latest");

        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        ltOptions.put("build", "LambdaTestSampleApp");
        ltOptions.put("name", "LambdaTestJavaSample");
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
    private void tearDown() {
        if (driver != null) {
            ((JavascriptExecutor) driver).executeScript("lambda-status=" + status);
            driver.quit();
        }
    }
}
```

## Step 2: Set Your Credentials
---

Replace the placeholder values with your actual credentials from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).

<div className="lambdatest__codeblock">
    <CodeBlock className="language-java">
  {`String username= "${ YOUR_LAMBDATEST_USERNAME()}"; 
String accesskey= "${ YOUR_LAMBDATEST_ACCESS_KEY()}";`}
  </CodeBlock>
</div>

## Step 3: Configure Capabilities
---

Define the browser, version, and OS for your test run.

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

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.
:::

## Step 4: Run the Test
---

Execute your Java test from your IDE or terminal.

**From your IDE:** Build and run the Java file directly.

**From the terminal:**

```bash
cd to/file/location
javac -classpath ".:/path/to/selenium/jarfile:" JavaTodo.java
java -classpath ".:/path/to/selenium/jarfile:" JavaTodo
```

Your test results appear on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

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
      Selenium With Java
      </span>
    </li>
  </ul>
</nav>
