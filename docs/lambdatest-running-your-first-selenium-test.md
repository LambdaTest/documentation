---
id: lambdatest-running-your-first-selenium-test
title: Run Your First Selenium Test
sidebar_label: Run Your First Test
description: Run your first Selenium test on TestMu AI's cloud grid. Clone a sample project, set credentials, configure capabilities, and execute.
keywords:
  - selenium first test
  - run selenium test online
  - selenium cloud testing
  - selenium java testng
  - testmu ai selenium tutorial
  - selenium getting started
  - cross browser testing selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/testmu-running-your-first-selenium-test/
site_name: TestMu AI
slug: testmu-running-your-first-selenium-test/
canonical: https://www.testmuai.com/support/docs/testmu-running-your-first-selenium-test/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "Run Your First Selenium Test",
          "item": `${BRAND_URL}/support/docs/testmu-running-your-first-selenium-test/`
        }]
      })
    }}
></script>

---

This guide walks you through running a sample Selenium test on the TestMu AI cloud grid using Java and TestNG. Clone a sample project, set your credentials, and execute a test.

:::tip Sample repo
All the code used in this guide is available in the sample repository. Clone it to get started.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/Java-TestNG-Selenium" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/) 11 or later.
4. Install [Maven](https://maven.apache.org/).

## Step 1: Clone the Sample Project
---

Pull the sample repo to your local machine and navigate into the project directory.

```bash
git clone https://github.com/LambdaTest/java-testng-selenium
cd java-testng-selenium
```

## Step 2: Set Your Credentials
---

Add your TestMu AI credentials as environment variables so the test can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then set them as environment variables:

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

Define which browser, version, and OS your test runs on.

The sample project includes a preconfigured capabilities object that tells the grid which browser and OS to use. Here is an example:

```java
ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 10");
browserOptions.setBrowserVersion("latest");

HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("build", "My First Test");
ltOptions.put("name", "Sample Test - Single");
ltOptions.put("w3c", true);

browserOptions.setCapability("LT:Options", ltOptions);
```

You can customize these values to test on any browser, version, or OS. Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities code for your target configuration.

:::note
For the full list of supported capabilities, see [Desired Capabilities in Selenium](/support/docs/selenium-automation-capabilities/).
:::

## Step 4: Run the Test
---

Trigger the test from your terminal using Maven.

Execute a single test or run multiple tests in parallel:

<Tabs className="docs__val">

<TabItem value="single" label="Single Test" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`mvn test -D suite=single.xml`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="parallel" label="Parallel Test" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`mvn test -D suite=parallel.xml`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 5: View Your Results
---

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action

<img loading="lazy" src={require('../assets/images/selenium/running-first-test/run-first-test.png').default} alt="TestMu AI Automation Dashboard showing test results"  className="doc_img"/>

## Next Steps
---

Now that your first test is running, explore what else you can do.

- [Explore the dashboard](/support/docs/inside-testmu-platform/) - understand timelines, analytics, and automation logs
- [Configure capabilities](/support/docs/selenium-automation-capabilities/) - set browsers, versions, OS, and advanced options
- [Pick your language](/support/docs/selenium-supported-languages-and-frameworks/) - find framework-specific guides for Java, Python, JavaScript, C#, and more
- [Test locally hosted apps](/support/docs/testing-locally-hosted-pages/) - use TestMu AI Tunnel to test staging or internal sites
- [Debug your tests](/support/docs/debugging-options/) - enable extended logging and diagnostics

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
       Run Your First Selenium Test
      </span>
    </li>
  </ul>
</nav>
