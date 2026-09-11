---
id: maven-tunnel-for-locally-hosted-web-applications
title: Maven Tunnel For Locally Hosted Web Applications
hide_title: false
sidebar_label: Maven Tunnel For Locally Hosted Web Apps
description: Configure a secure TestMu AI Tunnel to execute your Selenium test automation scripts through your Maven project on our online Selenium Grid.
keywords:
  - local app testing
  - testmu ai local testing
  - testmu ai local tunnel
  - TestMu AI Tunnel
  - local app testing for maven
  - maven tunnel for testmu ai
url: https://www.testmuai.com/support/docs/maven-tunnel-for-locally-hosted-web-applications/
site_name: TestMu AI
slug: maven-tunnel-for-locally-hosted-web-applications/
canonical: https://www.testmuai.com/support/docs/maven-tunnel-for-locally-hosted-web-applications/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": "https://www.testmuai.com/"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Maven Tunnel",
          "item": `${BRAND_URL}/support/docs/maven-tunnel-for-locally-hosted-web-applications/`
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
      "@id": "https://www.testmuai.com/support/docs/maven-tunnel-for-locally-hosted-web-applications/"
    },
    "headline": "Maven Tunnel For Locally Hosted Web Applications",
    "description": "Configure a secure TestMu AI Tunnel to execute your Selenium test automation scripts through your Maven project on our online Selenium Grid.",
    "url": "https://www.testmuai.com/support/docs/maven-tunnel-for-locally-hosted-web-applications/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Testing Locally",
    "keywords": [
      "local app testing",
      "testmu ai local testing",
      "testmu ai local tunnel"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Make sure you have Maven installed.; Install Java 8..",
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
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "$ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}\n$ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "$ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}\n$ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Navigate to the cloned directory & compile maven dependencies using the command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "<dependency>\n\t<groupId>com.github.lambdatest<\/groupId>\n\t<artifactId>lambdatest-tunnel-binary<\/artifactId>\n\t<version>4.0.2<\/version>\n<\/dependency>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Maven Tunnel",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "package com.lambdatest.tunnel;\n\nimport java.net.URL;\nimport java.util.HashMap;\nimport org.openqa.selenium.JavascriptExecutor;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport org.testng.annotations.AfterTest;\nimport org.testng.annotations.BeforeTest;\nimport org.testng.annotations.Test;\nimport com.lambdatest.tunnel.Tunnel;\n\npublic class MavenSingle {\n    Tunnel t;\n\n    WebDriver driver = null;\n    public static String status = \"passed\";\n\n    String username = System.getenv(\"LT_USERNAME\");\n    String access_key = System.getenv(\"LT_ACCESS_KEY\");\n\n\n    @BeforeTest\n    public void setUp() throws Exception {\n\n        DesiredCapabilities capabilities = new DesiredCapabilities();\n        capabilities.setCapability(\"build\", \"Single Maven Tunnel\");\n        capabilities.setCapability(\"name\", \"Maven Tunnel\");\n        capabilities.setCapability(\"platform\", \"Windows 10\");\n        capabilities.setCapability(\"browserName\", \"Chrome\");\n        capabilities.setCapability(\"version\",\"latest\");\n        capabilities.setCapability(\"tunnel\",true);\n        capabilities.setCapability(\"network\",true);\n        capabilities.setCapability(\"console\",true);\n        capabilities.setCapability(\"visual\",true);\n\n        //create tunnel instance\n        t = new Tunnel();\n        HashMap<String, String> options = new HashMap<String, String>();\n        options.put(\"user\", username);\n        options.put(\"key\", access_key);\n\n        //start tunnel\n        t.start(options);\n        driver = new RemoteWebDriver(new URL(\"http://\" + username + \":\" + access_key + \"@hub.lambdatest.com/wd/hub\"), capabilities);\n        System.out.println(\"Started session\");\n    }\n\n    @Test()\n    public void testTunnel() throws Exception {\n            //Check LocalHost on XAMPP\n            driver.get(\"http://localhost.lambdatest.com\");\n            // Let's check that the item we added is added in the list.\n            driver.get(\"https://google.com\");\n    } \n\n    @AfterTest\n    public void tearDown() throws Exception {\n        ((JavascriptExecutor) driver).executeScript(\"lambda-status=\" + status);\n        driver.quit();\n        //close tunnel\n        t.stop();\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Parallel Testing With Maven Tunnel",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE suite SYSTEM \"https://testng.org/testng-1.0.dtd\">\n<suite thread-count=\"40\" name=\"LambaTestSuite\" parallel=\"tests\">\n\n\t<listeners>\n\t\t<listener class-name=\"com.lambdatest.tunnel.MavenParallel\"/>\n\t<\/listeners>\n\t\n   <test name=\"1 Chrome 12\">\n   <parameter name=\"browser\" value=\"Chrome\"/>\n      <parameter name=\"version\" value=\"latest\"/>\n        <parameter name=\"platform\" value=\"Windows 10\"/>\n        <parameter name=\"resolution\" value=\"1600x1200\"/>\n        <classes>\n            <class name=\"com.lambdatest.tunnel.MavenParallel\"/>\n        <\/classes>\n    <\/test> \n    \n   <test name=\"2 Chrome 12\">\n   <parameter name=\"browser\" value=\"Chrome\"/>\n      <parameter name=\"version\" value=\"latest-1\"/>\n        <parameter name=\"platform\" value=\"Windows 8.1\"/>\n        <parameter name=\"resolution\" value=\"1920x1080\"/>\n        <classes>\n            <class name=\"com.lambdatest.tunnel.MavenParallel\"/>\n        <\/classes>\n    <\/test> \n    \n   <test name=\"3 Chrome 12\">\n   <parameter name=\"browser\" value=\"Chrome\"/>\n      <parameter name=\"version\" value=\"latest-2\"/>\n        <parameter name=\"platform\" value=\"Windows 8\"/>\n        <parameter name=\"resolution\" value=\"2048x1536\"/>\n        <classes>\n            <class name=\"com.lambdatest.tunnel.MavenParallel\"/>\n        <\/classes>\n    <\/test> \n    \n   <test name=\"4 Chrome 12\">\n   <parameter name=\"browser\" value=\"Chrome\"/>\n      <parameter name=\"version\" value=\"latest-3\"/>\n        <parameter name=\"platform\" value=\"Windows 7\"/>\n        <parameter name=\"resolution\" value=\"2560x1440\"/>\n        <classes>\n            <class name=\"com.lambdatest.tunnel.MavenParallel\"/>\n        <\/classes>\n    <\/test> \n    <\/suite>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 6",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "package com.lambdatest.tunnel;\n\nimport java.net.MalformedURLException;\nimport java.net.URL;\nimport java.util.HashMap;\nimport org.openqa.selenium.JavascriptExecutor;\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport org.testng.IExecutionListener;\nimport org.testng.annotations.AfterTest;\nimport org.testng.annotations.BeforeTest;\nimport org.testng.annotations.Test;\nimport com.lambdatest.tunnel.Tunnel;\n\n\npublic class MavenParallel implements IExecutionListener{\n\n    public RemoteWebDriver driver = null;\n    String status = \"passed\";\n    String username = System.getenv(\"LT_USERNAME\");\n    String accessKey = System.getenv(\"LT_ACCESS_KEY\");\n    Tunnel t;\n    \n    @Override\n    public void onExecutionStart() {\n\ttry {\n\t      //start the tunnel\n\t      t = new Tunnel();\n\t      HashMap<String, String> options = new HashMap<String, String>();\n\t      options.put(\"user\", username);\n\t      options.put(\"key\", accessKey);\n\t      t.start(options);\n\t} catch (Exception e) {\n\t      e.printStackTrace();\n\t}\n    }\n\n    @BeforeTest\n    @org.testng.annotations.Parameters(value={\"browser\",\"version\",\"platform\", \"resolution\"})\n    public void setUp(String browser, String version, String platform, String resolution) throws Exception {\n        DesiredCapabilities capabilities = new DesiredCapabilities();\n\n        capabilities.setCapability(\"build\", \"Parallel Maven Tunnel\");\n        capabilities.setCapability(\"name\", \"Maven Tunnel\");\n        capabilities.setCapability(\"browserName\", browser);\n        capabilities.setCapability(\"version\", version);\n        capabilities.setCapability(\"platform\", platform);\n        capabilities.setCapability(\"tunnel\",true);\n        capabilities.setCapability(\"network\",true);\n        capabilities.setCapability(\"console\",true);\n        capabilities.setCapability(\"visual\",true);\n\n        try {\n            driver= new RemoteWebDriver(new URL(\"https://\"+username+\":\"+accessKey+\"@hub.lambdatest.com/wd/hub\"), capabilities);\n        } catch (MalformedURLException e) {\n            System.out.println(\"Invalid grid URL\");\n        }\n    }\n   \n    @Test()\n    public void testTunnel() throws Exception {\n            //Check LocalHost on XAMPP\n            driver.get(\"http://localhost.lambdatest.com\");\n            // Let's check that the item we added is added in the list.\n            driver.get(\"https://google.com\");\n    } \n\n    @AfterTest\n    public void tearDown() throws Exception {\n        if (driver != null) {\n            ((JavascriptExecutor) driver).executeScript(\"lambda-status=\" + status);\n            driver.quit();\n        }\n    }\n\t\n    @Override\t\n    public void onExecutionFinish() {\n\ttry {\n\t      //stop the Tunnel;\n\t      t.stop();\n\t    } catch (Exception e) {\n\t\te.printStackTrace();\n\t    }\t\t\n\t}\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Enable Parallel Testing With Maven Tunnel using Serentiy BDD",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "<dependency>\n   <groupId>com.github.lambdatest<\/groupId>\n   <artifactId>lambdatest-tunnel-binary<\/artifactId>\n   <version>4.0.2<\/version>\n   <exclusions>\n      <exclusion>\n         <groupId>org.testng<\/groupId>\n         <artifactId>testng<\/artifactId>\n      <\/exclusion>\n   <\/exclusions>\n<\/dependency>"
      }
    ],
    "dateModified": "2026-08-12T15:40:32+05:30"
  }) }}
/>

Maven is a renowned build automation tool for orchestrating project builds by automatically handling Selenium dependencies, compiling source code to binary & then packaging of the binary. <BrandName /> offers an SSH (Secure Shell) tunnel which allows you to test your locally hosted websites over 3000+ browsers for both mobile and desktop through <BrandName /> Selenium Grid.

This document will help you configure a secure <BrandName /> Tunnel to execute your [Selenium test automation](https://www.testmuai.com/selenium-automation) scripts through your Maven project on our online Selenium Grid.

> <BrandName /> Maven Tunnel is now compatible with both **Java 17** and **Java 20**. Additionally, we also rolled out the latest **[Maven Tunnel](https://mvnrepository.com/artifact/com.github.lambdatest/lambdatest-tunnel-binary/4.0.2)**, with various enhancements and optimizations. 

## Prerequisites

**<BrandName /> Authentication Credentials:**
Be aware of your <BrandName /> authentication credentials i.e. your <BrandName /> username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your <BrandName /> automation dashboard by clicking on the key icon near the help button.

**For Linux/Mac:**

<VerifiedTag value="Verified" />

```javascript
$ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
$ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
```

**For Windows:**

<VerifiedTag value="Verified" />

```javascript
$ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
$ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
```

* Make sure you have [Maven installed](https://maven.apache.org/install.html).
* Install [Java 8](https://www.oracle.com/in/java/technologies/javase/javase-jdk8-downloads.html).

## Set Up Maven Sample Project & Dependencies
* * *
> Note: Make sure you clone our [GitHub repository for Maven tunnel](https://github.com/LambdaTest/maven-tunnel-sample).

Navigate to the cloned directory & compile maven dependencies using the command:

`$ mvn compile`

Ensure that you have the Maven Tunnel dependency configured in your `pom.xml`.

<VerifiedTag value="Verified" />

```js
<dependency>
	<groupId>com.github.lambdatest</groupId>
	<artifactId>lambdatest-tunnel-binary</artifactId>
	<version>4.0.2</version>
</dependency>
```

## Running Maven Tunnel
* * *

Here is the code that is present in the cloned [GitHub repository for Maven Tunnel](https://github.com/LambdaTest/maven-tunnel-sample).

<VerifiedTag value="Verified" />

```js
package com.lambdatest.tunnel;

import java.net.URL;
import java.util.HashMap;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import com.lambdatest.tunnel.Tunnel;

public class MavenSingle {
    Tunnel t;

    WebDriver driver = null;
    public static String status = "passed";

    String username = System.getenv("LT_USERNAME");
    String access_key = System.getenv("LT_ACCESS_KEY");


    @BeforeTest
    public void setUp() throws Exception {

        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("build", "Single Maven Tunnel");
        capabilities.setCapability("name", "Maven Tunnel");
        capabilities.setCapability("platform", "Windows 10");
        capabilities.setCapability("browserName", "Chrome");
        capabilities.setCapability("version","latest");
        capabilities.setCapability("tunnel",true);
        capabilities.setCapability("network",true);
        capabilities.setCapability("console",true);
        capabilities.setCapability("visual",true);

        //create tunnel instance
        t = new Tunnel();
        HashMap<String, String> options = new HashMap<String, String>();
        options.put("user", username);
        options.put("key", access_key);

        //start tunnel
        t.start(options);
        driver = new RemoteWebDriver(new URL("http://" + username + ":" + access_key + "@hub.lambdatest.com/wd/hub"), capabilities);
        System.out.println("Started session");
    }

    @Test()
    public void testTunnel() throws Exception {
            //Check LocalHost on XAMPP
            driver.get("http://localhost.lambdatest.com");
            // Let's check that the item we added is added in the list.
            driver.get("https://google.com");
    } 

    @AfterTest
    public void tearDown() throws Exception {
        ((JavascriptExecutor) driver).executeScript("lambda-status=" + status);
        driver.quit();
        //close tunnel
        t.stop();
    }
}
```

## Parallel Testing With Maven Tunnel
* * *
In order to trigger parallel test execution you will need to specify the parameters inside an XML file, in our GitHub repository you will find the XML file named as `MavenParallel.xml` file.

<VerifiedTag value="Verified" />

```js
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite thread-count="40" name="LambaTestSuite" parallel="tests">

	<listeners>
		<listener class-name="com.lambdatest.tunnel.MavenParallel"/>
	</listeners>
	
   <test name="1 Chrome 12">
   <parameter name="browser" value="Chrome"/>
      <parameter name="version" value="latest"/>
        <parameter name="platform" value="Windows 10"/>
        <parameter name="resolution" value="1600x1200"/>
        <classes>
            <class name="com.lambdatest.tunnel.MavenParallel"/>
        </classes>
    </test> 
    
   <test name="2 Chrome 12">
   <parameter name="browser" value="Chrome"/>
      <parameter name="version" value="latest-1"/>
        <parameter name="platform" value="Windows 8.1"/>
        <parameter name="resolution" value="1920x1080"/>
        <classes>
            <class name="com.lambdatest.tunnel.MavenParallel"/>
        </classes>
    </test> 
    
   <test name="3 Chrome 12">
   <parameter name="browser" value="Chrome"/>
      <parameter name="version" value="latest-2"/>
        <parameter name="platform" value="Windows 8"/>
        <parameter name="resolution" value="2048x1536"/>
        <classes>
            <class name="com.lambdatest.tunnel.MavenParallel"/>
        </classes>
    </test> 
    
   <test name="4 Chrome 12">
   <parameter name="browser" value="Chrome"/>
      <parameter name="version" value="latest-3"/>
        <parameter name="platform" value="Windows 7"/>
        <parameter name="resolution" value="2560x1440"/>
        <classes>
            <class name="com.lambdatest.tunnel.MavenParallel"/>
        </classes>
    </test> 
    </suite>
```

Here is the final code to execute parallel testing with Maven tunnel.

<VerifiedTag value="Verified" />

```js
package com.lambdatest.tunnel;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.IExecutionListener;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import com.lambdatest.tunnel.Tunnel;


public class MavenParallel implements IExecutionListener{

    public RemoteWebDriver driver = null;
    String status = "passed";
    String username = System.getenv("LT_USERNAME");
    String accessKey = System.getenv("LT_ACCESS_KEY");
    Tunnel t;
    
    @Override
    public void onExecutionStart() {
	try {
	      //start the tunnel
	      t = new Tunnel();
	      HashMap<String, String> options = new HashMap<String, String>();
	      options.put("user", username);
	      options.put("key", accessKey);
	      t.start(options);
	} catch (Exception e) {
	      e.printStackTrace();
	}
    }

    @BeforeTest
    @org.testng.annotations.Parameters(value={"browser","version","platform", "resolution"})
    public void setUp(String browser, String version, String platform, String resolution) throws Exception {
        DesiredCapabilities capabilities = new DesiredCapabilities();

        capabilities.setCapability("build", "Parallel Maven Tunnel");
        capabilities.setCapability("name", "Maven Tunnel");
        capabilities.setCapability("browserName", browser);
        capabilities.setCapability("version", version);
        capabilities.setCapability("platform", platform);
        capabilities.setCapability("tunnel",true);
        capabilities.setCapability("network",true);
        capabilities.setCapability("console",true);
        capabilities.setCapability("visual",true);

        try {
            driver= new RemoteWebDriver(new URL("https://"+username+":"+accessKey+"@hub.lambdatest.com/wd/hub"), capabilities);
        } catch (MalformedURLException e) {
            System.out.println("Invalid grid URL");
        }
    }
   
    @Test()
    public void testTunnel() throws Exception {
            //Check LocalHost on XAMPP
            driver.get("http://localhost.lambdatest.com");
            // Let's check that the item we added is added in the list.
            driver.get("https://google.com");
    } 

    @AfterTest
    public void tearDown() throws Exception {
        if (driver != null) {
            ((JavascriptExecutor) driver).executeScript("lambda-status=" + status);
            driver.quit();
        }
    }
	
    @Override	
    public void onExecutionFinish() {
	try {
	      //stop the Tunnel;
	      t.stop();
	    } catch (Exception e) {
		e.printStackTrace();
	    }		
	}
}
```
## Enable Parallel Testing With Maven Tunnel using Serentiy BDD
* * *
In order to trigger parallel test execution with Maven Tunnel using Serenity BDD, you will need to specify the dependency of `lambdatest-tunnel-binary` with the exclusion of TestNG dependency in `MavenParallel.xml` file.

<VerifiedTag value="Verified" />

```js
<dependency>
   <groupId>com.github.lambdatest</groupId>
   <artifactId>lambdatest-tunnel-binary</artifactId>
   <version>4.0.2</version>
   <exclusions>
      <exclusion>
         <groupId>org.testng</groupId>
         <artifactId>testng</artifactId>
      </exclusion>
   </exclusions>
</dependency>
```

## Optional Arguments For <BrandName /> Tunnel
* * *
| ARGUMENT | SYNTAX | DESCRIPTION |
|---|---|---|
| tunnelName | `tunnelArgs.put("tunnelName","YourName");` | To change the name of the <BrandName /> Tunnel. |
| pidFile | `tunnelArgs.put("pidFile","Your/pid/path");` | To change the PID path. |
| dir | `tunnelArgs.put("dir","give/lambda/directory/path");` | To change the directory path. |
| logFile | `tunnelArgs.put("logFile","give/tunnel/log/directory/path");` | To change the path for Tunnel logs. |
| loadBalanced | `tunnelArgs.put("load-balanced","true");` | To start the tunnels in load balanced mode. |
| customBinaryPath | `tunnelArgs.put("binary", "<YOUR LT BINARY PATH>")` | To give custom binary path. |
| basicAuth | `tunnelArgs.put("basicAuth", "<YOUR BASIC AUTH>")` | Basic Auth. |
| mitm | `tunnelArgs.put("mitm", "true")` | MITM only if basicAuth is provided. |

> For more arguments, refer to our document of [<BrandName /> Tunnel Modifiers](/support/docs/lambda-tunnel-modifiers/).

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Maven Tunnel
      </span>
    </li>
  </ul>
</nav>
