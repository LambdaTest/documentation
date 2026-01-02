---
id: hyperexecute-winapp-integration
title: WinAppDriver
hide_title: true
sidebar_label: WinAppDriver
description: Unlock enhanced automation testing by seamlessly integrating Excel with HyperExecute using TestMu AI's support documentation.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - Integrations
  - Products
  - Microsoft Excel
url: https://www.testmu.ai/support/docs/hyperexecute-winapp-integration
site_name: LambdaTest
slug: hyperexecute-winapp-integration
---

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
          "name": "Integration with Products",
          "item": `${BRAND_URL}/support/docs/hyperexecute-winapp-integration/`
        }]
      })
    }}
></script>

# WinAppDriver Integration with HyperExecute

You can use HyperExecute run your tests that are based on Microsoft Office Suite. To do this, we use the TestNG framework. If you need some help with creating a TestNG project, you can go through [this page](https://www.lambdatest.com/blog/create-testng-project-in-eclipse-run-selenium-test-script/). 

You can go through the page below to understand how you can use HyperExecute to run your test cases. 

> **Note**: This feature is only available on request. Please contact support@lambdatest.com to know more. 

## Configuring the WinAppDriver 

Setting up the WinAppDriver is an important step in the process to run Microsoft Excel via HyperExecute. 

1. Create a function called `start` to initialise the WinAppDriver, and a function called `closeExcel` to terminate Microsoft Excel after the test cases are executed.

2. Place a Java test file `LtWinDriver.java` that contains the two functions in the `src/main` folder. 
A sample `LtWinDriver.java` file: 

```bash
import java.io.File;
import java.io.IOException;
import java.awt.Desktop;

public class LtWinDriver {
    public static void start() {
        try {
            Desktop d = Desktop.getDesktop();
            d.open(new File("C:\\Program Files (x86)\\Windows Application Driver\\WinAppDriver.exe"));
            //d.open(new File("drivers/WinAppDriver.exe"));
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    public static void stopExcel() {
        try {
            ProcessBuilder killexcel =new ProcessBuilder("taskkill ","/f","/IM","Excel.exe");
            killexcel.start();
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
}
```

## Writing the Test Cases 

You can write your own test cases on Microsoft Excel. However, an example of a test case can be to add two numbers in different cells on Excel. 

You can use the sum formula to add these two numbers, but if you want to run it through HyperExecute, you need to initialize the WinAppDriver. This can be accomplished by calling the start function that we created in the `LtWinDriver.java` file. 

1.  Call the `start` function in the `@BeforeClass` tag.
    
2.  Write your test cases in the `@Test` tag.
    
3.  Terminate Excel in the `@AfterClass` tag by calling the `stopExcel` function that was created earlier.
    

Here is a sample java test file `Test.java` that accomplishes the function mentioned above. All of your test files should be placed in the `src/test` folder.

```bash
import java.util.concurrent.TimeUnit;
import io.appium.java_client.windows.WindowsDriver;
import org.openqa.selenium.*;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.*;
import java.net.*;
import java.util.*;

public class Test1 {
    public static WindowsDriver driver = null;
    
    @BeforeClass
    public void setUp() throws Exception {
        LtWinDriver.start();
    }
    
    @Test
    public static void test() throws Exception {
        String appPath = "testing.xlsx";
        DesiredCapabilities cap = new DesiredCapabilities();
        cap.setCapability("app", appPath);
        cap.setCapability("ms:waitForAppLaunch", 30);
        cap.setCapability("appArguments", "/e ");
        cap.setCapability("ms:experimental-webdriver", true);

        try {
            // Block of code to try
            driver = new WindowsDriver(new URL("http://127.0.0.1:4723"), cap);
        } catch (Exception e) {
            // Block of code to handle errors
            System.out.println("Something went wrong.");
            driver = new WindowsDriver(new URL("http://127.0.0.1:4723"), cap);
        }
        
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        
        try {
            driver.findElement(By.name("Not now")).click();
        } catch (Exception e) {
            System.out.println(e);
        }

        driver.findElement(By.name("B2")).click();
        driver.findElement(By.name("Formula Bar")).sendKeys("10");
        driver.findElement(By.name("B3")).click();
        driver.findElement(By.name("Formula Bar")).sendKeys("20");
        driver.findElement(By.name("B4")).click();
        driver.findElement(By.name("Formula Bar")).sendKeys("=SUM(B2,B3)");
        driver.findElement(By.name("Formula Bar")).sendKeys(Keys.ENTER);
    }

    @AfterClass
    public void tearDown() throws Exception {
       if (driver != null) {
            LtWinDriver.stopExcel();
            driver.quit();
        }
    }
}
```

-     To ensure that your excel file opens and runs successfully, use the `ms:waitForAppLaunch` flag. This ensure that there Excel waits for a duration of time before starting to run your test case. You can set the value of this flag to 30 seconds for better results.
    
-   You can use the `ms:experimental-webdriver` flag and set it to `true` to help the driver locate elements [more efficiently](https://github.com/microsoft/WinAppDriver/releases/tag/v1.2-RC "https://github.com/microsoft/WinAppDriver/releases/tag/v1.2-RC").
    
-   Using `try` and `catch` is a good way to avoid any pop-ups that may affect the test case.
    
-   You can also use `implicitlyWait` in order to wait before throwing any exceptions.

## HyperExecute YAML file

A sample YAML file that can run the test scenario mentioned above is shown below. You can learn more about configuring your YAML file by going through [this page](/support/docs/deep-dive-into-hyperexecute-yaml/).

```yaml
---
version: 0.1
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: win
captureScreenRecordingForScenarios: true

autosplit: true
retryOnFailure: true

maxRetries: 1
concurrency: 2

betaFeature:
  setPartiallyCompletedAsCompleted: true

env:
  CACHE_DIR: m2_cache_dir

cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - .m2

pre:
  - mvn -Dmaven.repo.local=$CACHE_DIR -Dmaven.test.skip=true clean install

mergeArtifacts: true

testDiscovery:
  type: raw
  mode: dynamic
  command: grep 'public class' src/test/java/*.java | awk '{print$3}'

testRunnerCommand:  mvn `-Dplatname=win `-Dmaven.repo.local=m2_cache_dir `-Dtest=$test test
```

You can now run your Excel tests on HyperExecute. Happy testing!

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
       Microsoft Excel
      </span>
    </li>
  </ul>
</nav>
