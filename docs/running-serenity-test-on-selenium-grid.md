---
id: running-serenity-test-on-selenium-grid
title: Selenium With Serenity BDD
sidebar_label: Serenity
description: Run Serenity BDD Selenium tests on TestMu AI cloud grid with parallel execution across 3000+ browsers.
keywords:
  - serenity bdd selenium cloud testing
  - run serenity tests on selenium grid
  - serenity bdd parallel execution
  - serenity automation setup
  - serenity cross browser testing
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/serenity-test-on-selenium-grid/
site_name: TestMu AI
slug: serenity-test-on-selenium-grid/
canonical: https://www.testmuai.com/support/docs/serenity-test-on-selenium-grid/
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
          "name": "Selenium With Serenity BDD",
          "item": `${BRAND_URL}/support/docs/serenity-test-on-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/serenity-test-on-selenium-grid/"
    },
    "headline": "Selenium With Serenity BDD",
    "description": "Run Serenity BDD Selenium tests on TestMu AI cloud grid with parallel execution across 3000+ browsers.",
    "url": "https://www.testmuai.com/support/docs/serenity-test-on-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "serenity bdd selenium cloud testing",
      "run serenity tests on selenium grid",
      "serenity bdd parallel execution"
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
        "codeRepository": "https://github.com/LambdaTest/Serenity-Selenium-Sample",
        "text": "git clone https://github.com/LambdaTest/Serenity-Selenium-Sample\ncd Serenity-Selenium-Sample"
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
        "name": "The sample feature file checks for the word \"LambdaTest\" on Google and validates the title of the resultant page",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "Feature: Google's Search Functionality\n    Scenario: Can find search results\n        When I type query as \"LambdaTest\"\n        And I submit\n        Then I should see title \"LambdaTest - Google Search\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nBelow is the `LambdaTestSerenityDriver.java` file that shows the integration of Serenity with TestMu AI:\n\n```java title=\"LambdaTestSerenityDriver.java\"\npackage com.lambdatest;\n\nimport java.net.URL;\nimport java.util.HashMap;\nimport java.util.Iterator;\n\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.chrome.ChromeOptions;\nimport org.openqa.selenium.remote.RemoteWebDriver;\n\nimport net.thucydides.core.util.EnvironmentVariables;\nimport net.thucydides.core.util.SystemEnvironmentVariables;\nimport net.thucydides.core.webdriver.DriverSource;\n\npublic class LambdaTestSerenityDriver implements DriverSource {\n\n    public WebDriver newDriver() {\n        EnvironmentVariables environmentVariables = SystemEnvironmentVariables.createEnvironmentVariables();\n\n        String username = System.getenv(\"LT_USERNAME\");\n        if (username == null) {\n            username = (String) environmentVariables.getProperty(\"lt.user\");\n        }\n\n        String accessKey = System.getenv(\"LT_ACCESS_KEY\");\n        if (accessKey == null) {\n            accessKey = (String) environmentVariables.getProperty(\"lt.key\");\n        }\n\n        String environment = System.getProperty(\"environment\");\n                ChromeOptions browserOptions = new ChromeOptions();\n        HashMap<String, Object> ltOptions = new HashMap<String, Object>();\n        ltOptions.put(\"plugin\", \"Serenity LambdaTest Plugin\");\n        ltOptions.put(\"w3c\", true);\n\n        Iterator it = environmentVariables.getKeys().iterator();\n        while (it.hasNext()) {\n            String key = (String) it.next();\n\n            if (key.equals(\"lt.user\") || key.equals(\"lt.key\") || key.equals(\"lt.grid\")) {\n                continue;\n            } else if (key.startsWith(\"lt_\")) {\n                ltOptions.put(key.replace(\"lt_\", \"\"), environmentVariables.getProperty(key));\n\n            } else if (environment != null && key.startsWith(\"environment.\" + environment)) {\n\n                ltOptions.put(key.replace(\"environment.\" + environment + \".\", \"\"),\n                        environmentVariables.getProperty(key));\n            }\n        }\n        browserOptions.setCapability(\"LT:Options\", ltOptions);\n\n        try {\n            String url = \"https://\" + username + \":\" + accessKey + \"@\" + environmentVariables.getProperty(\"lt.grid\")\n                    + \"/wd/hub\";\n            return new RemoteWebDriver(new URL(url), browserOptions);\n        } catch (Exception e) {\n            System.out.println(e);\n            return null;\n        }\n    }\n\n    public boolean takesScreenshots() {\n        return false;\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test (Single Test)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn verify -P single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test (Parallel Tests)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn verify -P parallel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Parallel Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "\nDefine similar classes for the remaining browsers.\n\n## Step 5: View Your Results\n---\n\nCheck the Automation Dashboard to see exactly what happened during your test.\n\nVisit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your test results. Each session includes:\n\n- **Video recording** of the full test execution\n- **Screenshots** captured at each step\n- **Console logs** from the browser\n- **Network logs** for every request and response\n- **Selenium command logs** showing each driver action\n\n## Run Serenity BDD Tests Using Agent Skills\n---\n\nUse AI coding assistants to generate and run Serenity BDD tests with the TestMu AI Agent Skill.\n\nThe [serenity-bdd-skill](https://github.com/LambdaTest/agent-skills/tree/main/serenity-bdd-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.\n\nInstall the skill:\n\n```bash\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/serenity-bdd-skill .claude/skills/\n\n# For Cursor / Copilot\ncp -r agent-skills/serenity-bdd-skill .cursor/skills/"
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
      "name": "Selenium With Serenity BDD",
      "description": "Run Serenity BDD Selenium tests on TestMu AI cloud grid with parallel execution across 3000+ browsers.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Clone the Sample Project",
          "text": "Pull the sample repo to your local machine and navigate into the project directory. You may also want to run the command below to check for outdated dependencies.",
          "url": "https://www.testmuai.com/support/docs/serenity-test-on-selenium-grid/#step-1-clone-the-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set Your Credentials",
          "text": "Add your TestMu AI credentials as environment variables so the test can authenticate with the grid. Visit the TestMu AI Dashboard, navigate to the left sidebar, and select Credentials. Copy your Username and Access Key, then set them as environment variables: {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/serenity-test-on-selenium-grid/#step-2-set-your-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure Your Test Capabilities",
          "text": "Define the browser, version, and OS for your test run. The sample feature file checks for the word \"LambdaTest\" on Google and validates the title of the resultant page: Below is the GooglePage.java file for the above test case scenario: Below is the LambdaTestSerenityDriver.java file that shows the integration of Serenity with TestMu AI: Use the Capabilities Generator to auto-generate capabilities for any browser, version, and OS combination.",
          "url": "https://www.testmuai.com/support/docs/serenity-test-on-selenium-grid/#step-3-configure-your-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run the Test",
          "text": "Trigger the test from your terminal. For parallel execution, the sample project runs single.feature test case in four different environments: Chrome, Firefox, IE, and Safari. Define similar classes for the remaining browsers.",
          "url": "https://www.testmuai.com/support/docs/serenity-test-on-selenium-grid/#step-4-run-the-test"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: View Your Results",
          "text": "Check the Automation Dashboard to see exactly what happened during your test. Visit the TestMu AI Automation Dashboard to see your test results. Each session includes: Video recording of the full test execution Screenshots captured at each step Console logs from the browser Network logs for every request and response Selenium command logs showing each driver action",
          "url": "https://www.testmuai.com/support/docs/serenity-test-on-selenium-grid/#step-5-view-your-results"
        }
      ]
    }
  ]) }}
/>

Run Serenity BDD tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/Serenity-Selenium-Sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
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
git clone https://github.com/LambdaTest/Serenity-Selenium-Sample
cd Serenity-Selenium-Sample
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

The sample feature file checks for the word "LambdaTest" on Google and validates the title of the resultant page:

<VerifiedTag value="Verified" />

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
mvn verify -P single
```

</TabItem>
<TabItem value="parallel" label="Parallel Tests">

```bash
mvn verify -P parallel
```

</TabItem>
</Tabs>

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
---

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action

## Run Serenity BDD Tests Using Agent Skills
---

Use AI coding assistants to generate and run Serenity BDD tests with the TestMu AI Agent Skill.

The [serenity-bdd-skill](https://github.com/LambdaTest/agent-skills/tree/main/serenity-bdd-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/serenity-bdd-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/serenity-bdd-skill .cursor/skills/
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
       Selenium With Serenity BDD
      </span>
    </li>
  </ul>
</nav>
