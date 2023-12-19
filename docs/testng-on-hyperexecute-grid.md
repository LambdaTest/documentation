---
id: testng-on-hyperexecute-grid
title: Run automation tests on HyperExecute using TestNG
hide_title: true
sidebar_label: TestNG
description: Learn how to run Selenium automation tests on HyperExecute grid using the TestNG framework
keywords:
  - TestNG
  - TestNG selenium
  - TestNG Java Selenium
  - TestNG automation testing
  - selenium webdriver TestNG
  - selenium TestNG testing tutorial
  - TestNG Java Selenium framework
  - lambdatest TestNG
  - frameworks on lambdatest
  - hyperexecute grid
  - hyperexecute TestNG testing
  - hyperexecute TestNG testing
  - hyperexecute automation testing
  - HyperExecute Selenium automation
url: https://www.lambdatest.com/support/docs/testng-on-hyperexecute-grid/
site_name: LambdaTest
slug: testng-on-hyperexecute-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "How to run automation tests on HyperExecute using TestNG framework",
          "item": "https://www.lambdatest.com/support/docs/testng-on-hyperexecute-grid/"
        }]
      })
    }}
></script>

# Run Automation Tests on HyperExecute using TestNG
This page outlines how to execute your tests on HyperExecute using TestNG with YAML 0.2

> HyperExecute uses [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/) to perform the tests using TestNG.

***

## Overview

HyperExecute is a smart test orchestration platform that allows you to run end-to-end Selenium tests as quickly as possible by providing a test infrastructure with optimal speed, test orchestration, and detailed execution logs.

HyperExecute offers features like detailed logs, Smart CI, network insights, video recording, and access to various browsers and platforms.

## Running Specific TestNG Tests
***

When working with TestNG, you may sometimes want to run specific tests instead of executing the entire test suite. Here's how you can achieve this with the provided Java-TestNG-Selenium repository on LambdaTest:

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/Java-TestNG-Selenium" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

### Pre-requisite

- Install the Java Development Environment.
- Install [Maven](https://maven.apache.org/), which supports the TestNG framework out of the box. Maven can also be installed easily on **Linux/MacOS** using [Homebrew](https://brew.sh/) package manager.

### Cloning Repo and Installing Dependencies

Clone the LambdaTest's Java-TestNG-Selenium repository:

```bash
git clone https://github.com/LambdaTest/Java-TestNG-Selenium
cd Java-TestNG-Selenium
```

### Setup Environment Variable
Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

For macOS / Linux:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Windows:

```bash
set LT_USERNAME=YOUR_LT_USERNAME
set LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

### Integrate your 1st Test Case on LambdaTest
The Java-TestNG-Selenium repository provides a sample TestNG test that you can execute.

**Step 1:** Open the TestNGTodo.java file and update the username and accesskey variables with your LambdaTest credentials.

> **NOTE:** Make sure to update the Hub endpoint using the variable **gridURL**.

By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

```java title="TestNG To Do"
import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import java.net.MalformedURLException;
import java.net.URL;
public class TestNGTodo{
    public String username = "YOUR_LAMBDATEST_USERNAME";
    public String accesskey = "YOUR_LAMBDATEST_ACCESS_KEY";
    public static RemoteWebDriver driver = null;
    // highlight-next-line
    public String gridURL = "@hub.lambdatest.com/wd/hub"; //hub endpoint
    boolean status = false;
    @BeforeClass
    public void setUp() throws Exception {
       DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserName", "chrome");
        capabilities.setCapability("version", "70.0");
        capabilities.setCapability("platform", "win10"); // If this cap isn't specified, it will just get the any available one
        capabilities.setCapability("build", "LambdaTestSampleApp");
        capabilities.setCapability("name", "LambdaTestJavaSample");
        try {
          // highlight-next-line
            driver = new RemoteWebDriver(new URL("https://" + username + ":" + accesskey + gridURL), capabilities);
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

**Step 2:** Configure the desired capabilities based on your test requirements. For example:

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserName", "chrome");
        capabilities.setCapability("version", "70.0");
        capabilities.setCapability("platform", "win10"); // If this cap isn't specified, it will just get the any available one
        capabilities.setCapability("build", "LambdaTestSampleApp");
        capabilities.setCapability("name", "LambdaTestJavaSample");
```

> You can generate capabilities for your test requirements with the help of our inbuilt :link: **[Capabilities Generator Tool](https://www.lambdatest.com/capabilities-generator/)**.

**Step 3:** Save the changes to the TestNGTodo.java file. <br />
**Step 4:** In the terminal, execute the test using the following command to run the test using the single.xml TestNG suite configuration.

```bash
mvn test -D suite=single.xml
```

:::info

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://accounts.lambdatest.com/login). LambdaTest Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

:::

## Running TestNG Tests on HyperExecute
***

TestNG Tests can be executed on HyperExecute Grid using 2 methods:

1. [**Using Local System**](/support/docs/hyperexecute-running-your-first-job/#2-using-local-system) - Requires [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) to execute tests from your Local System. 
2. [**Using Gitpod**](/support/docs/hyperexecute-running-your-first-job/#3-using-gitpod) -  Execute tests using GitPod. (Requires a [Gitpod](https://gitpod.io/login/) account)

## 1. Testing Using Local System
***

### Pre-requisites:

To run the Tests on HyperExecute from your Local System, you are required:

- Your lambdatest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution [Job](/support/docs/hyperexecute-concepts/#1-jobs).
- Setup the Environmental Variable
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/testng-selenium-hyperexecute-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

#### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute Grid. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

<!-- For detailed information about HyperExecute CLI, please refer to [HyperExecute CLI section](/docs/getting-started-with-hyperexecute/#hyperexecute-cli-to-interact-with-hyperexecute) in the HyperExecute getting started guide. -->

<!-- > -->
<!-- The fundamental difference between running Selenium tests on a cloud Selenium Grid and HyperExecute Grid is that you need not have any configurations on the local machine (i.e. the machine from where HyperExecute CLI is triggered). This is because the source code from the local machine will be zipped and securely uploaded to the cloud where the execution will be performed on the remote Virtual Machine (VM). -->


### Setup Environment Variable
Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

***

For macOS:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Linux:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Windows:

```bash
set LT_USERNAME=YOUR_LT_USERNAME
set LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

### Steps to execute the Tests
Follow the below steps to run Test using Local System:

**Step 1:** Download or Clone the [TestNG HyperExecute GitHub repository](https://github.com/LambdaTest/testng-selenium-hyperexecute-sample) for the code samples to run tests on the HyperExecute (skip this step if you are performing tests on your own project).

**Step 2:** Download the HyperExecute CLI as per your host Operating System. The CLI must be in the root directory of the project.

**Step 3:** Configure your YAML file as per your use cases using **key value** pairs.

```bash
version: 0.2
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: win

autosplit: true
retryOnFailure: true

maxRetries: 1
concurrency: 5

pre:
  # Skip execution of the tests in the pre step
  - mvn dependency:resolve

post:
  - ls target/surefire-reports/

mergeArtifacts: true


uploadArtefacts:
 - name: ExecutionSnapshots
   path:
    - target/surefire-reports/html/**

framework:
  name: maven/testng
  defaultReports: false
  flags:
    - "-Dplatname=win"
```

**Step 4:** Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config yaml/win/testng_hyperexecute_autosplit_sample.yaml --download-artifacts --force-clean-artifacts
```

Shown below is the execution screenshot when the YAML file is triggered from the terminal:

<img loading="lazy" src={require('../assets/images/hyperexecute/testng/testng_autosplit_cmd_1.png').default} alt="TestNG HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/testng/testng_autosplit_cmd_2.png').default} alt="TestNG HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

**Step 5:** Monitor the test execution status on the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute).
<img loading="lazy" src={require('../assets/images/hyperexecute/testng/testng_autosplit_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

HyperExecute also facilitates the provision to download the artifacts on your local machine. To download the artifacts, click on Artifacts button corresponding to the associated TestID.

<img loading="lazy" src={require('../assets/images/hyperexecute/testng/testng_autosplit_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## 2. Testing Using Gitpod
***

Follow the below steps to run Test using Gitpod:

**Step 1:**  Click '**Open in Gitpod**' button. You will be redirected to Login/Signup page.

[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=Selenium&framework=TestNG)

**Step 2:** Login with Lambdatest credentials. Once logged in, a pop-up confirmation will appear, asking you to **'Proceed'** to the Gitpod editor in a new tab. The current tab will display the hyperexecute dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>

**Step 3:** Choose your preferred editor (we recommend VS Code Editor)

**Step 4:**  As you are running a sample project, Fetching of the Test Scripts, [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/), [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) and Triggering your tests using the `Execution Command` will be automated. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod2.png').default} alt="Image"  className="doc_img"/>

**Step 5:**  Once you see the `Job Link` in the logs, you can visit the [HyperExecute dashboard](https://hyperexecute.lambdatest.com/hyperexecute) to see the tests getting executed.

:::tip

You can also implement [Secret Keys](https://www.lambdatest.com/support/docs/hyperexecute-how-to-save-and-manage-secrets/) in your YAML file.
:::

## Sample Yaml Version 0.2

```bash
---
version: 0.2
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: win

autosplit: true
retryOnFailure: true

maxRetries: 1
concurrency: 5

pre:
  # Skip execution of the tests in the pre step
  - mvn dependency:resolve

post:
  - ls target/surefire-reports/

mergeArtifacts: true


uploadArtefacts:
 - name: ExecutionSnapshots
   path:
    - target/surefire-reports/html/**

framework:
  name: maven/testng
  defaultReports: false
  flags:
    - "-Dplatname=win"
```

<!-- ## Secrets Management

<img loading="lazy" src={require('../assets/images/hyperexecute/pytest/pytest_secret_management_1.png').default} alt="secret management"  width="1920" height="868" className="doc_img"/>

Now create secrets that you can use in the HyperExecute YAML file.

<img loading="lazy" src={require('../assets/images/hyperexecute/pytest/pytest_secret_management_2.png').default} alt="secret management"  width="100" height="650" className="doc_img"/> -->

## Navigation in Automation Dashboard

Every test run on the HyperExecute Grid has a unique *jobId* associated with it. Each *jobId* can in turn constitute single (or multiple) *groupId*(s). You can visit [HyperExecute automation dashboard](https://automation.lambdatest.com/hyperexecute/) for checking the status of the test execution.

HyperExecute lets you seamlessly navigate between jobId's and taskId's. It can be done by navigating to *Automation* -> *HyperExecute logs* -> *Corresponding jobId* on the HyperExecute automation dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/testng/testng_artifacts_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

The snapshot below shows how to navigate to the respective *testID* for viewing the Selenium logs:

<img loading="lazy" src={require('../assets/images/hyperexecute/testng/testng_artifacts_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Conclusion
By following the instructions in this documentation, you can seamlessly execute the TestNG tests on HyperExecute, leveraging its secure cloud infrastructure, advanced features, and optimized test execution workflow.

>
For any query or doubt, please feel free to contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />
Happy testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      Run TestNG tests on HyperExecute Grid
      </span>
    </li>
  </ul>
</nav>