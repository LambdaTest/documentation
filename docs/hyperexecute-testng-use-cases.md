---
id: hyperexecute-testng-use-cases
title: HyperExecute TestNG Use Cases
sidebar_label: TestNG Use Cases
description: Discover the power of HyperExecute connected workflows and how testers or developers can leverage it for their daily autoamtion testing of their organization features.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - TestMu AI Projects
  - TestNG Use Cases
url: https://www.testmu.ai/support/docs/hyperexecute-testng-use-cases/
site_name: LambdaTest
slug: hyperexecute-testng-use-cases
canonical: https://www.testmu.ai/support/docs/hyperexecute-testng-use-cases/
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
          "name": "HyperExecute TestNG Use Cases",
          "item": `${BRAND_URL}/support/docs/hyperexecute-testng-use-cases/`
        }]
      })
    }}
></script>
This guide outlines common **Java + TestNG** scenarios for running tests on [HyperExecute](https://hyperexecute.lambdatest.com/hyperexecute/jobs)

## Q: How can I ensure my tests operate with the appropriate Java version on HyperExecute?

By default, HyperExecute VMs are provisioned with **Java 8**. If your project requires another version (e.g., **11, 15, 18, 22**), you can use the [`runtime`](/support/docs/deep-dive-into-hyperexecute-yaml/#runtime) feature and specify the compatible version in the `hyperexecute.yaml`.

**YAML Example for Java 11**

```yaml title="hyperexecute.yaml"
runtime:
  language: java
  version: "11"
```

## Q: What is test discovery in HyperExecute, and how does it help?
[Test discovery](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery) is the process of pre-identifying the tests (classes, scenarios, or feature files) to be executed.

#### Why Use Test Discovery?
- **Selective Execution →** Run only the tests you need.
- **Flexibility →** Filter by file paths, tags, or custom logic.
- **Pre-Execution Preview →** Know exactly which tests will run.

#### Discovery Methods
| Type        | Description                                                | Use Case                                |
| ----------- | ---------------------------------------------------------- | --------------------------------------- |
| `raw`       | Runs a shell command to list tests.                        | Simple, filename/class-based filtering. |
| `automatic` | Uses HyperExecute backend tools (`snooper`) for discovery. | Tag or scenario-based filtering.        |

#### Examples

Automatic Discovery (Tag-based)

```yaml title="hyperexecute.yaml"
testDiscovery:
  type: automatic
  mode: static
  args:
    featureFilePaths: web/src/test/resources/features
    frameWork: java
    specificTags: ["@AccountCombineSet"]
```

Raw Command Discovery

```yaml title="hyperexecute.yaml"
testDiscovery:
  type: raw
  mode: local
  command: grep 'public class' src/test/java/hyperexecute/*.java | awk '{print $3}'
```

#### Discovery Modes
- [local](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery:~:text=mode%3A%20remote-,mode%3A%20local,-Purpose%3A%20Test) → Runs discovery on your machine (useful for small/simple projects).
- [remote](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery:~:text=locally%2C%20limiting%20visibility.-,mode%3A%20remote,-NEW) → Runs discovery on HyperExecute VM (recommended for large projects).

## Q: How do I include/exclude tests using tags?
You can pass logical tag expressions in testDiscovery or use the ignoredTags parameter.

Example: Logical Tag Filtering

```yaml title="hyperexecute.yaml"
testDiscovery:
  command: .hyperexecute/snooper --targetOs=win \
           --featureFilePaths=web/src/test/resources/features \
           --frameWork=java \
           --query="@UAT2Miniregression and not @FLNAUAT2" \
  | awk '{gsub("web/", ""); print}'
  mode: static
  type: raw
```

Example: Ignored Tags

```yaml
ignoredTags: ["@tag3", "@tag2"]
```

## Q: How do I configure the runner command for different Cucumber versions?

| Cucumber Version | Runner Command Example                 |
| ---------------- | -------------------------------------- |
| v6 and below     | `mvn test -Dcucumber.options="$test"`  |
| v7 and above     | `mvn test -Dcucumber.features="$test"` |

## Q: What if my project has multiple Maven modules?
In projects with modules (web, api, mobile), discovered test paths may include the module prefix (e.g., web/), causing mismatches.

**Solution :** Use awk to strip module prefixes from discovered test paths.

```yaml title="hyperexecute.yaml"
testDiscovery:
  command: .hyperexecute/snooper --targetOs=win \
           --featureFilePaths=web/src/test/resources/features \
           --frameWork=java \
           --specificTags=@AccountCombineSet \
  | awk '{gsub("web/", ""); print}'
  mode: static
  type: raw
```

## Q: How should I configure testng.xml when I have multiple runners?

To avoid duplicate executions:

- Use one runner class in `testng.xml`.
- Comment out tags in `@CucumberOptions`.
- Let HyperExecute discovery handle filtering.

**Example: testng.xml**

```xml title="testng.xml"
<suite name="Sanity Suite">
  <test name="Test">
    <classes>
      <class name="com.qt.sid.bdd.Runner.RunnerSanity.TestRunnerUK"/>
    </classes>
  </test>
</suite>
```

**Example: @CucumberOptions**

```javascript
@CucumberOptions(
  features = "src/test/resources/features",
  // tags = "@Regression and not @ignore",   // Commented out
  glue = "com/qt/sid/stepdefinitions",
  plugin = {
    "pretty",
    "html:test-output/cucumber-reports/html-report.html",
    "json:test-output/cucumber-reports/json-report.json",
    "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:",
    "json:target/cucumber.json"
  },
  monochrome = true
)
```

Discovery YAML Example

```yaml title="hyperexecute.yaml"
testDiscovery:
  type: automatic
  mode: static
  args:
    featureFilePaths: src/test/resources/features/SanitySuite
    frameWork: java
    specificTags: ["@Regression"]
```

## Q: What if my Allure reports/screenshots are too large to render on the dashboard?
Large reports may fail to render in HyperExecute dashboard. It is recommended to generate zipped Allure reports for local viewing.

YAML Example

```yaml title="hyperexecute.yaml"
report: true
partialReports:
  location: allure-results/webapp
  type: zip
  frameworkName: allure-zip
```

To view Locally
- Install Allure

```bash
brew install allure
```

- Open report

```bash
allure open ./pathDirectory   # Replace pathDirectory with the actual report folder.
```