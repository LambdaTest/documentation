---
id: java-with-playwright
title: How to Run Playwright Tests With JUnit on TestMu AI
hide_title: true
sidebar_label: Java
description: Run Java Playwright tests with JUnit on the TestMu AI cloud grid across 50+ real desktop browsers and operating systems.
keywords:
  - java playwright junit testing
  - java playwright tests cloud
  - playwright junit framework
  - playwright java grid setup
  - java automation testing playwright
  - run java playwright tests online

url: https://www.testmuai.com/support/docs/java-with-playwright/
site_name: TestMu AI
slug: java-with-playwright/
canonical: https://www.testmuai.com/support/docs/java-with-playwright/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';


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
          "name": "Java with Playwright",
          "item": `${BRAND_URL}/support/docs/java-with-playwright/`
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
      "@id": "https://www.testmuai.com/support/docs/java-with-playwright/"
    },
    "headline": "Run your Java automation scripts with Playwright on TestMu AI",
    "description": "Run your Java and JUnit automation scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/java-with-playwright/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "java playwright",
      "java automation testing",
      "playwright java"
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
        "name": "Clone the sample repository (each framework lives in its own subdirectory)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/playwright-sample",
        "text": "git clone https://github.com/LambdaTest/playwright-sample.git\ncd playwright-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Go to the sample directory",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "cd playwright-java"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nmvn -Dexec.mainClass=\"com.lambdatest.PlaywrightTestSingle\" -Dexec.classpathScope=test test-compile exec:java"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Go to the sample directory",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "cd playwright-java-junit"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run the test:\n\n```bash\nmvn clean test"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>


# How to Run Playwright Tests With JUnit on TestMu AI
***

Run your Java Playwright tests on the TestMu AI cloud grid to reach 50+ real desktop browsers and operating systems without maintaining local infrastructure. You connect Playwright over a CDP WebSocket, pass your capabilities, then run the sample suite with JUnit.

## Prerequisites
***

Complete these before running the test below.

1. A TestMu AI **Username** and **Access Key**. Get them from your TestMu AI Profile. Don't have an account? <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>Sign up for free</a>.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="TestMu AI Profile page showing the Username and Access Key credentials" width="1444" height="703"  className="doc_img"/>

2. [JDK](https://www.oracle.com/java/technologies/downloads/) 8 or later and [Apache Maven](https://maven.apache.org/) installed. The sample projects are Maven projects, so Maven resolves the dependencies when you build.
3. Clone the sample repository. Each framework lives in its own subdirectory.

:::tip Sample repo
<a href="https://github.com/LambdaTest/playwright-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="GitHub icon linking to the Playwright sample repository" className="doc_img"/> View on GitHub</a>
:::

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
```

## Set Your Credentials
***

Your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

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

## How the Sample Test Works
***

The test builds a `capabilities` object that carries the browser, version, platform, and your `LT:Options`, then connects Playwright to the grid at `wss://cdp.lambdatest.com/playwright`. The credentials come from the `LT_USERNAME` and `LT_ACCESS_KEY` environment variables you set above:

<VerifiedTag value="Verified" />

```java
JsonObject capabilities = new JsonObject();
JsonObject ltOptions = new JsonObject();

String user = System.getenv("LT_USERNAME");
String accessKey = System.getenv("LT_ACCESS_KEY");

capabilities.addProperty("browserName", "Chrome"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
capabilities.addProperty("browserVersion", "latest");
ltOptions.addProperty("platform", "Windows 10");
ltOptions.addProperty("user", user);
ltOptions.addProperty("accessKey", accessKey);
capabilities.add("LT:Options", ltOptions);
```

JUnit wraps this same connection in a `@DataProvider` so one test runs across multiple browser configurations, as the steps below show.

## Run the Test With JUnit
***

JUnit runs the connection through a `@DataProvider`, so a single test runs across multiple browser configurations (here Chrome and Microsoft Edge). You can use your own project, or the sample below.

1. Clone the sample project and move into the JUnit subdirectory:

:::tip Sample repo
<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-java-junit" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="GitHub icon linking to the Playwright JUnit sample subdirectory" className="doc_img"/> View on GitHub</a>
:::

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-java-junit
```

2. Install the npm dependencies:

```
npm install
```

3. Open the `LTCapability.java` file and provide your TestMu AI Username and Access Key. It supplies the parameterized capabilities through a `@DataProvider`:

<VerifiedTag value="Verified" />

```java title="LTCapability.java"
import com.google.gson.JsonObject;
import com.tngtech.java.junit.dataprovider.DataProvider;

public class LTCapability {
  @DataProvider
  public static Object[] getDefaultTestCapability() {
    JsonObject capabilities1 = new JsonObject();
    JsonObject ltOptions1 = new JsonObject();

    String user = System.getenv("LT_USERNAME");
    String accessKey = System.getenv("LT_ACCESS_KEY");

    capabilities1.addProperty("browserName", "Chrome"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    capabilities1.addProperty("browserVersion", "latest");
    ltOptions1.addProperty("platform", "Windows 10");
    ltOptions1.addProperty("name", "Playwright Test");
    ltOptions1.addProperty("build", "Playwright Testing using Junit");
    ltOptions1.addProperty("user", user);
    ltOptions1.addProperty("accessKey", accessKey);
    capabilities1.add("LT:Options", ltOptions1);


    JsonObject capabilities2 = new JsonObject();
    JsonObject ltOptions2 = new JsonObject();
    capabilities2.addProperty("browserName", "MicrosoftEdge"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    capabilities2.addProperty("browserVersion", "latest");
    ltOptions2.addProperty("platform", "Windows 10");
    ltOptions2.addProperty("name", "Playwright Test");
    ltOptions2.addProperty("build", "Playwright Testing using Junit");
    ltOptions2.addProperty("user", user);
    ltOptions2.addProperty("accessKey", accessKey);
    capabilities2.add("LT:Options", ltOptions2);
    return new Object[]{
      capabilities1,capabilities2
    };
  }
}
```

4. Run the test from the terminal:

<VerifiedTag value="Verified" />

```bash
mvn clean test
```

## View Your Results
***

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms the test passed.

## Related Playwright Guides
***

Continue with these related guides:

- [Run Your Playwright Tests With JavaScript on TestMu AI](/support/docs/javascript-with-playwright/)
- [Configure Playwright Capabilities for the TestMu AI Grid](/support/docs/capabilities-for-playwright/)
- [Get Started With Playwright Testing on TestMu AI](/support/docs/playwright-testing/)

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
      Java with Playwright
      </span>
    </li>
  </ul>
</nav>
