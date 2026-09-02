---
id: hyperexecute-how-to-perform-dependent-test-based-discovery
title: How to Perform Dependent Test Case Discovery
hide_title: false
sidebar_label: How to Perform Dependent Test Case Discovery
description: How to Perform Dependent Test Case Discovery
keywords:
    - hyperexecute yaml
    - How to Perform Dependent Test Case Discovery
url: https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-dependent-test-based-discovery/
site_name: TestMu AI
slug: hyperexecute-how-to-perform-dependent-test-based-discovery/
canonical: https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-dependent-test-based-discovery/
---


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
          "name": "How to Perform Dependent Test Case Discovery",
          "item": `${BRAND_URL}/support/docs/hyperexecute-how-to-perform-dependent-test-based-discovery/`
        }]
      })
    }}
></script>

Dependent tests signify that one test relies on the outcome of another. To achieve this, TestNG offers the '**dependsOnMethods**' attribute within @Test annotations.

For instance, consider the code snippet in which '**SignIn()**' depends on '**OpenBrowser()**,' and '**LogOut()**' depends on 'SignIn().'

```java
import org.testng.annotations.Test;
public class DependsOnTest {
  @Test
  public void OpenBrowser() {
	  System.out.println("The browser is opened");
  }
  
  @Test (dependsOnMethods = { "OpenBrowser" })
  public void SignIn() {
	  System.out.println("User has signed in successfully");
  }
  
  @Test (dependsOnMethods = { "SignIn" })
  public void LogOut() {
	  System.out.println("The user logged out successfully");
  }
}
```

To discover and manage dependent tests using the Test Discovery command, you can use the following syntax:

```yaml
mvn test -Dmode=discover -Dplatname=win -Dframework=testng -Ddiscovery=dependent
```

This command will provide a Test Discovery Result that lists the tests and their dependencies, ensuring that dependent tests are executed in the correct order, such as ["Test1#SignIn,Test1#LogOut,Test1#OpenBrowser"].

## Group-Based Test Discovery in TestNG

TestNG provides group-based test discovery functionality. You can specify groups for your tests and execute or exclude specific groups during test runs.

To perform group-based test discovery, you can use the ***@BeforeGroups*** and ***@AfterGroups*** annotations in your TestNG tests. These annotations allow you to specify setup and cleanup methods that run before and after specific groups of tests.

For example:

```java
public class GroupIntegrationTest {

    @BeforeGroups("database")
    public void setupDB() {
        System.out.println("setupDB()");
    }

    @AfterGroups("database")
    public void cleanDB() {
        System.out.println("cleanDB()");
    }

    @Test(groups = "selenium-test")
    public void runSelenium() {
        System.out.println("runSelenium()");
    }

    @Test(groups = "selenium-test")
    public void runSelenium1() {
        System.out.println("runSelenium()1");
    }

    @Test(groups = "database")
    public void testConnectOracle() {
        System.out.println("testConnectOracle()");
    }

    @Test(groups = "database")
    public void testConnectMsSQL() {
        System.out.println("testConnectMsSQL");
    }

}
```

In the HyperExecute YAML Version 0.2 configuration, you can use the ```discoveryFlags``` parameter to specify the groups to discover during test discovery.

```yaml
framework:
  name: "maven/testng"
  discoveryFlags: ["-Dgroups=database"]
```

Here it will only discover tests belonging to the group database. Use comma-separated values if you want to specify multiple groups.

Similarly, you can use the ```excludedGroups``` parameter that can be used to run all test groups except for the defined set of groups.

```yaml
framework:
  name: "maven/testng"
  discoveryFlags: ["-DexcludedGroups=database"]
```

This discovers all test of groups except database.


Alternatively, you can also specify the groups or excluded groups directly in the pom.xml file using the Maven Surefire Plugin

```yaml
<plugins>
    [...]
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>2.22.1</version>
        <configuration>
          <groups>database,selenium-test</groups>
        </configuration>
      </plugin>
    [...]
</plugins>
```
