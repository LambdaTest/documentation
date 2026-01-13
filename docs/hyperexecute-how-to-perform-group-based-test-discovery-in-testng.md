---
id: hyperexecute-how-to-perform-group-based-test-discovery-in-testng
title: How to Perform Group-Based Test Discovery in TestNG
hide_title: false
sidebar_label: How to Perform Group-Based Test Discovery in TestNG
description: Perform group-based test discovery in TestNG with @BeforeGroups and @AfterGroups annotations. Configure tests in HyperExecute and Maven for flexible test execution.
keywords:
    - hyperexecute yaml
    - How to Perform Group-Based Test Discovery in TestNG
url: https://www.testmu.ai/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng
site_name: LambdaTest
slug: hyperexecute-how-to-perform-group-based-test-discovery-in-testng
canonical: https://www.testmu.ai/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng/
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
          "name": "How to Perform group based Test Case Discovery",
          "item": `${BRAND_URL}/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng/`
        }]
      })
    }}
></script>

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

In the Hyperexecute YAML Version 0.2 configuration, you can use the ```discoveryFlags``` parameter to specify the groups to discover during test discovery.

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
