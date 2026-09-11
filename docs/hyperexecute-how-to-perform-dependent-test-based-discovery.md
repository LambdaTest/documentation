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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-dependent-test-based-discovery/"
    },
    "headline": "How to Perform Dependent Test Case Discovery",
    "description": "How to Perform Dependent Test Case Discovery",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-dependent-test-based-discovery/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "hyperexecute yaml",
      "How to Perform Dependent Test Case Discovery"
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
        "name": "Code sample 1",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "import org.testng.annotations.Test;\npublic class DependsOnTest {\n  @Test\n  public void OpenBrowser() {\n\t  System.out.println(\"The browser is opened\");\n  }\n  \n  @Test (dependsOnMethods = { \"OpenBrowser\" })\n  public void SignIn() {\n\t  System.out.println(\"User has signed in successfully\");\n  }\n  \n  @Test (dependsOnMethods = { \"SignIn\" })\n  public void LogOut() {\n\t  System.out.println(\"The user logged out successfully\");\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To discover and manage dependent tests using the Test Discovery command, you can use the following syntax",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "mvn test -Dmode=discover -Dplatname=win -Dframework=testng -Ddiscovery=dependent"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For example",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "public class GroupIntegrationTest {\n\n    @BeforeGroups(\"database\")\n    public void setupDB() {\n        System.out.println(\"setupDB()\");\n    }\n\n    @AfterGroups(\"database\")\n    public void cleanDB() {\n        System.out.println(\"cleanDB()\");\n    }\n\n    @Test(groups = \"selenium-test\")\n    public void runSelenium() {\n        System.out.println(\"runSelenium()\");\n    }\n\n    @Test(groups = \"selenium-test\")\n    public void runSelenium1() {\n        System.out.println(\"runSelenium()1\");\n    }\n\n    @Test(groups = \"database\")\n    public void testConnectOracle() {\n        System.out.println(\"testConnectOracle()\");\n    }\n\n    @Test(groups = \"database\")\n    public void testConnectMsSQL() {\n        System.out.println(\"testConnectMsSQL\");\n    }\n\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "framework:\n  name: \"maven/testng\"\n  discoveryFlags: [\"-Dgroups=database\"]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "framework:\n  name: \"maven/testng\"\n  discoveryFlags: [\"-DexcludedGroups=database\"]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 6",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "<plugins>\n    [...]\n      <plugin>\n        <groupId>org.apache.maven.plugins<\/groupId>\n        <artifactId>maven-surefire-plugin<\/artifactId>\n        <version>2.22.1<\/version>\n        <configuration>\n          <groups>database,selenium-test<\/groups>\n        <\/configuration>\n      <\/plugin>\n    [...]\n<\/plugins>"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```yaml
framework:
  name: "maven/testng"
  discoveryFlags: ["-Dgroups=database"]
```

Here it will only discover tests belonging to the group database. Use comma-separated values if you want to specify multiple groups.

Similarly, you can use the ```excludedGroups``` parameter that can be used to run all test groups except for the defined set of groups.

<VerifiedTag value="Verified" />

```yaml
framework:
  name: "maven/testng"
  discoveryFlags: ["-DexcludedGroups=database"]
```

This discovers all test of groups except database.


Alternatively, you can also specify the groups or excluded groups directly in the pom.xml file using the Maven Surefire Plugin

<VerifiedTag value="Verified" />

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
