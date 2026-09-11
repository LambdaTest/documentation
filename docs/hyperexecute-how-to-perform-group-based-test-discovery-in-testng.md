---
id: hyperexecute-how-to-perform-group-based-test-discovery-in-testng
title: How to Perform Group-Based Test Discovery in TestNG
hide_title: false
sidebar_label: How to Perform Group-Based Test Discovery in TestNG
description: Perform group-based test discovery in TestNG with @BeforeGroups and @AfterGroups annotations. Configure tests in HyperExecute and Maven for flexible test execution.
keywords:
    - hyperexecute yaml
    - How to Perform Group-Based Test Discovery in TestNG
url: https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng/
site_name: TestMu AI
slug: hyperexecute-how-to-perform-group-based-test-discovery-in-testng/
canonical: https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng/
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng/"
    },
    "headline": "How to Perform Group-Based Test Discovery in TestNG",
    "description": "Perform group-based test discovery in TestNG with @BeforeGroups and @AfterGroups annotations. Configure tests in HyperExecute and Maven for flexible test execution.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng/",
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
      "How to Perform Group-Based Test Discovery in TestNG"
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
        "name": "For example",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "public class GroupIntegrationTest {\n\n    @BeforeGroups(\"database\")\n    public void setupDB() {\n        System.out.println(\"setupDB()\");\n    }\n\n    @AfterGroups(\"database\")\n    public void cleanDB() {\n        System.out.println(\"cleanDB()\");\n    }\n\n    @Test(groups = \"selenium-test\")\n    public void runSelenium() {\n        System.out.println(\"runSelenium()\");\n    }\n\n    @Test(groups = \"selenium-test\")\n    public void runSelenium1() {\n        System.out.println(\"runSelenium()1\");\n    }\n\n    @Test(groups = \"database\")\n    public void testConnectOracle() {\n        System.out.println(\"testConnectOracle()\");\n    }\n\n    @Test(groups = \"database\")\n    public void testConnectMsSQL() {\n        System.out.println(\"testConnectMsSQL\");\n    }\n\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 2",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "framework:\n  name: \"maven/testng\"\n  discoveryFlags: [\"-Dgroups=database\"]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "framework:\n  name: \"maven/testng\"\n  discoveryFlags: [\"-DexcludedGroups=database\"]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "<plugins>\n    [...]\n      <plugin>\n        <groupId>org.apache.maven.plugins<\/groupId>\n        <artifactId>maven-surefire-plugin<\/artifactId>\n        <version>2.22.1<\/version>\n        <configuration>\n          <groups>database,selenium-test<\/groups>\n        <\/configuration>\n      <\/plugin>\n    [...]\n<\/plugins>"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

TestNG provides group-based test discovery functionality. You can specify groups for your tests and execute or exclude specific groups during test runs.

To perform group-based test discovery, you can use the ***@BeforeGroups*** and ***@AfterGroups*** annotations in your TestNG tests. These annotations allow you to specify setup and cleanup methods that run before and after specific groups of tests.

For example:

<VerifiedTag value="Verified" />

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
