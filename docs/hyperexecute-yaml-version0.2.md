---
id: hyperexecute-yaml-version0.2
title: HyperExecute Yaml Version 0.2
hide_title: false
sidebar_label: HyperExecute Yaml Version 0.2
description: Learn more about HyperExecute YAML 0.2
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-yaml-version0.2/
site_name: Hyperexecute Yaml Version 0.2
slug: hyperexecute-yaml-version0.2/
---

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
          "name": "Hyperexecute Yaml Version 0.2",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-yaml-version0.2"
        }]
      })
    }}
></script>
Hyperexecute YAML Version 0.2. This version introduces several new features and improvements compared to Version 0.1. This documentation will guide you through the changes and help you understand when to use Version 0.2 instead of Version 0.1.

> Note: Currently we only support ***maven/testng*** framework.

## Version 0.2 vs. Version 0.1

The following are the key differences between Version 0.2 and Version 0.1:

- In Version 0.2, the support for matrix mode has been removed, and only static discovery is available. This means that the discovery command will run on your system rather than in a matrix.

- Version 0.2 supports all the fields available in Version 0.1, except for ```testDiscovery``` and ```testRunnerCommand```

- The new ```framework``` field has been introduced to configure the test framework.

## ```framework```

The ```framework``` field in Hyperexecute YAML Version 0.2 allows you to configure the test framework settings. It provides more flexibility and customization options for your testing needs.

The ```framework``` field has following attributes:

| Item | Details|
|---|---|
| Required | Yes |
| Type | Object |

<!-- | Description | Code coverage threshold values.| -->

Example

```bash
framework: 
  name: maven/testng
  defaultReports: false
  flags: ["-Dplatname=win"]
  args:
    region: ap
``` 

<!-- ## Supported Fields In Framework Object -->

The framework field supports the following parameters

| Parameters | Type | Mandatory | Description|
|:---|:--|:---|:---|
| [name](#name) | String | Yes | You need to specify which testing framework you are using in your repo.|
| [flags](#flags) | Array | No | Command line flags to pass to the custom runner for both test discovery and execution.|
| [discoveryFlags](#discoveryFlags) | Array | No | Command line flags to pass to the custom runner for test discovery only.|
| [runnerFlags](#runnerFlags) | Array | No | Command line flags to pass to the custom runner for test execution only. |
| [discoveryType](#discoveryType) | String | No | Specifies the type of test discovery to use. Supported values are "method" and "class". The default is "method".|
| [workingDirectory](#workingDirectory) | String | No | Specifies the working directory where all discovery and execution commands will be executed.|
| [defaultReports](#defaultReports) | Boolean | No | Specifies whether to create default reports for the specified framework.|
| [region](#region) | String | No | Specifies in which region you want to spin your appium tests.|

### `name`
Specifies the testing framework used in your repository.

> **Note:** Currently supported frameworks are **maven/testng**, **maven/junit4**, **maven/junit5**, **wdio/mocha**, and **wdio/jasmine** framework.

```bash
framework:
  name: "maven/testng"
``` 

To enable maven runner with Appium, you have to pass `appium: true` before the `framework` field

```bash
appium: true
framework: 
  name: "maven/testng"
```

### `flags`
Specifies the command line flags to pass to the custom runner for both test discovery and execution.

```bash
framework:
  name: "maven/testng"
  flags: ["-Dplatname=win", "-Dgroups=selenium-test"]
```

### `discoveryFlags`
Specifies the command line flags to pass to the custom runner for test discovery only.

```bash
framework:
  name: "maven/testng"
  discoveryFlags: ["-Dgroups=selenium-test"]
```

### `runnerFlags`
Specifies the command line flags to pass to the custom runner for test execution only.

```bash
framework:
  name: "maven/testng"
  runnerFlags: ["-Dgroups=database"]
```

### `discoveryType`
Specifies the level at which user wants to discover the tests. Supported values are "method" and "class". The default is "method".

```bash
framework:
  name: maven/testng
  #highlight-next-line
  discoveryType: method
  # instead of method you can also use xmltest or class as a discovery type
  flags:
    - "-Dplatname=win"
```
:::info
- For **maven/testng** the supported discovery types are **method, class** and **xmltest**. The default is **method**.

- For **maven/junit4** and **maven/junit5**  the supported discovery types are **method** and **class**. The default is **method**.

- For **wdio/mocha** and **wdio/jasmine** the supported discovery types are **test, spec, suite** and **wdiosuite**. The default is **spec**. 
:::

### `workingDirectory`
<!-- Specifies the working directory where all discovery and execution commands will be executed. -->

The `working directory` specifies the location of the directory in which all test discovery and execution commands will be run, as well as the location of any files or directories that are created as a result of the command execution.  If the `workingDirectory` option is not specified, then the working directory will be the directory where the YAML file is located.

```bash
framework:
  name: maven/testng
  discoveryType: method
  workingDirectory: src/main
  flags:
    - "-Dplatname=win"
```

### `defaultReports`
Specifies whether to create default reports for the specified framework.

```bash
framework:
  name: maven/testng
  defaultReports: false
  flags:
    - "-Dplatname=win"
```

### `region`

The region parameter specifies the region or location where the Appium tests will be executed. Our platform supports the following three regions:

- ap (Asia-Pacific)
- us (United States)
- eu (European Union)

> The region parameter should always be defined under the `args` parameter, as shown in the below sample code.

```bash
framework:
  args:
    region: us
```

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
  args:
    region: us
```

## Additional Details

### Default Caching Support

> <b>NOTE:</b> The new framework feature supports caching by default, the user does not need to specify any directories to cache for faster performance.

For example in maven we cache the entire .m2 directory in home folder so that subsequent tasks run faster.

If the user adds the cacheDirectories and cacheKey keys in his yaml, the default caching gets disabled and preference is given to user specified cache.

```bash
cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - .m2
```

### Performing Group-Based Test Discovery in TestNG

TestNG provides group-based test discovery functionality. You can specify groups for your tests and execute or exclude specific groups during test runs.

To perform group-based test discovery, you can use the ***@BeforeGroups*** and ***@AfterGroups*** annotations in your TestNG tests. These annotations allow you to specify setup and cleanup methods that run before and after specific groups of tests.

For example:

```bash
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

```bash
framework:
  name: "maven/testng"
  discoveryFlags: ["-Dgroups=database"]
```

Here it will only discover tests belonging to the group database. Use comma-separated values if you want to specify multiple groups.

Similarly, you can use the ```excludedGroups``` parameter that can be used to run all test groups except for the defined set of groups.

```bash
framework:
  name: "maven/testng"
  discoveryFlags: ["-DexcludedGroups=database"]
```

This discovers all test of groups except database.


Alternatively, you can also specify the groups or excluded groups directly in the pom.xml file using the Maven Surefire Plugin

```bash
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

## Conclusion

This documentation provides an overview of the Hyperexecute YAML Version 0.2 and its features. We hope this information helps you understand the changes and improvements in Version 0.2 compared to Version 0.1.

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
      Hyperexecute Yaml Version 0.2
      </span>
    </li>
  </ul>
</nav>