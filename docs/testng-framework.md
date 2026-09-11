---
id: testng-framework
title: Selenium With TestNG
sidebar_label: TestNG
description: Run TestNG Selenium tests on TestMu AI cloud grid with parallel execution across 3000+ browsers.
keywords:
  - testng selenium cloud testing
  - run testng tests on selenium grid
  - testng parallel test execution
  - java testng automation setup
  - testng cross browser testing
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/testng-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: testng-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/testng-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Selenium With TestNG",
          "item": `${BRAND_URL}/support/docs/testng-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/testng-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With TestNG",
    "description": "Run TestNG Selenium tests on TestMu AI cloud grid with parallel execution across 3000+ browsers.",
    "url": "https://www.testmuai.com/support/docs/testng-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "testng selenium cloud testing",
      "run testng tests on selenium grid",
      "testng parallel test execution"
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
        "name": "Step 1: Clone the Sample Project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Java-TestNG-Selenium",
        "text": "git clone https://github.com/LambdaTest/Java-TestNG-Selenium\ncd Java-TestNG-Selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Clone the Sample Project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn versions:display-dependency-updates"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure Your Test Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "ChromeOptions browserOptions = new ChromeOptions();\n        browserOptions.setPlatformName(\"Windows 10\");\n        browserOptions.setBrowserVersion(\"latest\");\n\n        HashMap<String, Object> ltOptions = new HashMap<String, Object>();\n        ltOptions.put(\"build\", \"TestMu AISampleApp\");\n        ltOptions.put(\"name\", \"TestMu AIJavaSample\");\n        ltOptions.put(\"w3c\", true);\n        browserOptions.setCapability(\"LT:Options\", ltOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test (Single Test)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test -D suite=single.xml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test (Parallel Tests)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test -D suite=parallel.xml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 6",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nFor parallel execution, the sample project includes a `testng.xml` that runs the test across multiple browsers simultaneously:\n\n```xml title=\"testng.xml\"\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE suite SYSTEM \"http://testng.org/testng-1.0.dtd\">\n<suite thread-count=\"3\" name=\"LambaTestSuite\" parallel=\"tests\">\n\n  <test name=\"WIN8TEST\">\n  <parameter name=\"browser\" value=\"firefox\"/>\n  <parameter name=\"version\" value=\"latest\"/>\n  <parameter name=\"platform\" value=\"WIN8\"/>\n    <classes>\n      <class name=\"LambdaTest.TestNGToDo\"/>\n    <\/classes>\n  <\/test> <!-- Test -->\n\n  <test name=\"WIN10TEST\">\n  <parameter name=\"browser\" value=\"chrome\"/>\n  <parameter name=\"version\" value=\"latest\"/>\n  <parameter name=\"platform\" value=\"WIN10\"/>\n    <classes>\n      <class name=\"LambdaTest.TestNGToDo\"/>\n    <\/classes>\n  <\/test> <!-- Test -->\n  <test name=\"MACTEST\">\n  <parameter name=\"browser\" value=\"safari\"/>\n  <parameter name=\"version\" value=\"latest\"/>\n  <parameter name=\"platform\" value=\"macos 10.13\"/>\n    <classes>\n      <class name=\"LambdaTest.TestNGToDo\"/>\n    <\/classes>\n  <\/test> <!-- Test -->\n\n<\/suite>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the skill",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/testng-skill .claude/skills/\n\n# For Cursor / Copilot\ncp -r agent-skills/testng-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Selenium With TestNG",
      "description": "Run TestNG Selenium tests on TestMu AI cloud grid with parallel execution across 3000+ browsers.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Clone the Sample Project",
          "text": "Pull the sample repo to your local machine and navigate into the project directory. You may also want to run the command below to check for outdated dependencies.",
          "url": "https://www.testmuai.com/support/docs/testng-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/#step-1-clone-the-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set Your Credentials",
          "text": "Add your TestMu AI credentials as environment variables so the test can authenticate with the grid. Visit the TestMu AI Dashboard, navigate to the left sidebar, and select Credentials. Copy your Username and Access Key, then set them as environment variables: {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/testng-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/#step-2-set-your-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure Your Test Capabilities",
          "text": "Define the browser, version, and OS for your test run. Use the Capabilities Generator to auto-generate capabilities for any browser, version, and OS combination.",
          "url": "https://www.testmuai.com/support/docs/testng-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/#step-3-configure-your-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run the Test",
          "text": "Trigger the test from your terminal. Below is the sample TestNG test used in this project: For parallel execution, the sample project includes a testng.xml that runs the test across multiple browsers simultaneously:",
          "url": "https://www.testmuai.com/support/docs/testng-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/#step-4-run-the-test"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: View Your Results",
          "text": "Check the Automation Dashboard to see exactly what happened during your test. Visit the TestMu AI Automation Dashboard to see your test results. Each session includes: Video recording of the full test execution Screenshots captured at each step Console logs from the browser Network logs for every request and response Selenium command logs showing each driver action",
          "url": "https://www.testmuai.com/support/docs/testng-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/#step-5-view-your-results"
        }
      ]
    }
  ]) }}
/>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Run TestNG tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/Java-TestNG-Selenium" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install the **Java development environment** (Java 11 recommended).
4. Install **Maven**. Download it from [the official website](https://maven.apache.org/) or install it on **Linux/MacOS** using [**Homebrew**](https://brew.sh/).

## Step 1: Clone the Sample Project
---

Pull the sample repo to your local machine and navigate into the project directory.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/Java-TestNG-Selenium
cd Java-TestNG-Selenium
```

You may also want to run the command below to check for outdated dependencies.

<VerifiedTag value="Verified" />

```bash
mvn versions:display-dependency-updates
```

## Step 2: Set Your Credentials
---

Add your TestMu AI credentials as environment variables so the test can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then set them as environment variables:

<Tabs className="docs__val">
<TabItem value="bash" label="macOS / Linux" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>
</TabItem>
<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.
:::

## Step 4: Run the Test
---

Trigger the test from your terminal.

<VerifiedTag value="Verified" />

<Tabs className="docs__val">
<TabItem value="single" label="Single Test" default>

```bash
mvn test -D suite=single.xml
```

</TabItem>
<TabItem value="parallel" label="Parallel Tests">

```bash
mvn test -D suite=parallel.xml
```

</TabItem>
</Tabs>

Below is the sample TestNG test used in this project:

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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
---

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action

## Run TestNG Tests Using Agent Skills
---

Use AI coding assistants to generate and run TestNG tests with the TestMu AI Agent Skill.

The [testng-skill](https://github.com/LambdaTest/agent-skills/tree/main/testng-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/testng-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/testng-skill .cursor/skills/
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
      <span className="breadcrumbs__link"> Selenium With TestNG </span>
    </li>
  </ul>
</nav>
