---
id: hyperexecute-testng-use-cases
title: HyperExecute Language-Specific Use Cases
sidebar_label: Language Use Cases
description: "Practical TestNG automation use cases on HyperExecute: parallel execution, data-driven tests, and Java workflows to accelerate QA delivery."
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - TestMu AI Projects
  - TestNG Use Cases
url: https://www.testmuai.com/support/docs/hyperexecute-testng-use-cases/
site_name: TestMu AI
slug: hyperexecute-testng-use-cases/
canonical: https://www.testmuai.com/support/docs/hyperexecute-testng-use-cases/
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

This guide covers common language-specific use cases for running tests on HyperExecute, organized by framework: **Java + TestNG**, **Python**, and **C#**.

## TestNG Use Cases

This guide outlines common **Java + TestNG** scenarios for running tests on [HyperExecute](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs)

### Q: How can I ensure my tests operate with the appropriate Java version on HyperExecute?

By default, HyperExecute VMs are provisioned with **Java 8**. If your project requires another version (e.g., **11, 15, 18, 22**), you can use the [`runtime`](/support/docs/deep-dive-into-hyperexecute-yaml/#runtime) feature and specify the compatible version in the `hyperexecute.yaml`.

**YAML Example for Java 11**

```yaml title="hyperexecute.yaml"
runtime:
  language: java
  version: "11"
```

### Q: What is test discovery in HyperExecute, and how does it help?
[Test discovery](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery) is the process of pre-identifying the tests (classes, scenarios, or feature files) to be executed.

##### Why Use Test Discovery?
- **Selective Execution →** Run only the tests you need.
- **Flexibility →** Filter by file paths, tags, or custom logic.
- **Pre-Execution Preview →** Know exactly which tests will run.

##### Discovery Methods
| Type        | Description                                                | Use Case                                |
| ----------- | ---------------------------------------------------------- | --------------------------------------- |
| `raw`       | Runs a shell command to list tests.                        | Simple, filename/class-based filtering. |
| `automatic` | Uses HyperExecute backend tools (`snooper`) for discovery. | Tag or scenario-based filtering.        |

##### Examples

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

##### Discovery Modes
- [local](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery:~:text=mode%3A%20remote-,mode%3A%20local,-Purpose%3A%20Test) → Runs discovery on your machine (useful for small/simple projects).
- [remote](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery:~:text=locally%2C%20limiting%20visibility.-,mode%3A%20remote,-NEW) → Runs discovery on HyperExecute VM (recommended for large projects).

### Q: How do I include/exclude tests using tags?
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

### Q: How do I configure the runner command for different Cucumber versions?

| Cucumber Version | Runner Command Example                 |
| ---------------- | -------------------------------------- |
| v6 and below     | `mvn test -Dcucumber.options="$test"`  |
| v7 and above     | `mvn test -Dcucumber.features="$test"` |

### Q: What if my project has multiple Maven modules?
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

### Q: How should I configure testng.xml when I have multiple runners?

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

### Q: What if my Allure reports/screenshots are too large to render on the dashboard?
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

## Python Use Cases

This guide covers the most common real-world scenarios and troubleshooting cases when running **Python**, **Pytest**, and **Behave** test frameworks on **<BrandName /> HyperExecute**. Each section describes a use case, its root cause, and the precise YAML translation required to configure or fix the issue within your `hyperexecute.yaml`.

### 1. Handling Python Version Compatibility Issues
Sometimes, test scripts fail due to Python version incompatibility. For example:

```bash title="Terminal"
$ python test_script.py
Traceback (most recent call last):
  File "test_script.py", line 3, in <module>
    from collections import MutableMapping
ImportError: cannot import name 'MutableMapping' from 'collections'
```
In Python versions 3.3 to 3.9, MutableMapping was part of the collections module. From Python 3.10 onward, it was moved to collections.abc, causing import errors in older code.

**Solution :** To ensure compatibility, match the Python runtime version with your local setup. Specify the version explicitly in your YAML configuration.

**YAML Translation :**
```yaml title="hyperexecute.yaml"
runtime:
  - language: python
    version: "3.9"
```

### 2. Ensuring PIP Version Compatibility
Certain packages require a minimum version of PIP to install successfully. An outdated PIP version may cause the following error:
> **ERROR :** You must install pip 21.0 or later to install this package.

**Solution :** Upgrade PIP before installing dependencies.

```bash
python -m pip install --upgrade pip
```

If you are using Python 3:

```bash
python3 -m pip install --upgrade pip
```

**YAML Translation :**
```yaml title="hyperexecute.yaml"
pre:
  - python3 -m pip install --upgrade pip
```

### 3. Fixing Missing requirements.txt Errors
If your pipeline fails with:
> **ERROR:** Could not open requirements file: [Errno 2] No such file or directory: 'requirements.txt'

It means that the `requirements.txt` file might be missing or ignored in .gitignore.

**Solution :** Ensure the file exists in the project root. Remove or comment out any requirements.txt entry from .gitignore. For this issue, ther are no YAML change required. This is a file management fix. However, verify that the command below correctly references the existing file name.

```bash
pip install -r requirements.txt --cache-dir CacheDir
```

### 4. Restoring Missing .env Files
When environment variables are not set, tests may fail due to missing credentials or configuration values because `.env` files are commonly excluded in `.gitignore` for security. If ignored, they aren’t uploaded to HyperExecute, and environment variables remain unset.

**Solution :** Ensure that required `.env` files are not ignored in `.gitignore`. If sensitive credentials exist, use HyperExecute Secrets or Environment Variables instead of exposing them in `.env` files.

### 5. Optimizing Package Caching for Faster Jobs
If your pre step installs dependencies every time, your caching configuration might be incorrect.

**Common Causes :**
- Invalid `cacheKey` syntax.
- Incorrect filename in cache reference.
- Missing `--cache-dir` argument.

**Solution :** Use proper syntax, ensure file naming consistency, and define a cache directory.

YAML Translation:

```yaml title="hyperexecute.yaml"
cacheKey: '{{ checksum "requirements.txt" }}'
cacheDirectories:
  - CacheDir
pre:
  - pip install -r requirements.txt --cache-dir CacheDir
```

### 6. Building Projects with Public and Private Registries
#### Case 1: Public Registry Installation
If all dependencies are public, install them directly:

```bash
pip3 install -r requirements.txt --cache-dir CacheDir
```

**YAML Translation :**

```yaml title="hyperexecute.yaml"
pre:
  - pip3 install -r requirements.txt --cache-dir CacheDir
```

#### Case 2: Private Registry Installation
When using a private registry, authentication is required. Use proxy variables and authorization tokens to install packages securely.

```bash
pip3 install --proxy http://$LT_PROXY_HOST:$LT_PROXY_PORT \
  --header "Authorization: Bearer $PRIVATE_REGISTRY_TOKEN" \
  -r requirements.txt
```

**YAML Translation :**

```yaml title="hyperexecute.yaml"
pre:
  - pip3 install --proxy http://$LT_PROXY_HOST:$LT_PROXY_PORT \
      --header "Authorization: Bearer $PRIVATE_REGISTRY_TOKEN" \
      -r requirements.txt
```

**Sample `requirements.txt` file :**

```text
--extra-index-url https://your-private-registry.com/simple
--trusted-host your-private-registry.com
your-private-package==1.0.0
another-package==2.0.0
```

**Error Troubleshooting :**
- Verify `$LT_PROXY_HOST` and `$LT_PROXY_PORT `values.
- Confirm `$PRIVATE_REGISTRY_TOKEN` is valid.

### 7. Configuring Database Connections
When connecting to a database during test runs, you may encounter:

> **ConnectionRefusedError:** connect ECONNREFUSED 127.0.0.1:3306

**Solution :** Expose the database service using the `--expose` flag in your YAML configuration.

**YAML Translation :**

```yaml title="hyperexecute.yaml"
args:
  - "--expose mysql1:localhost:3309"
  - "--expose mysql2:localhost:3307"
```

**Sample Connection Code :**

```python title="test.py
import os
import mysql.connector

db_host = os.getenv("MYSQL1_PROXY_HOST", "localhost")
db_port = os.getenv("MYSQL1_PROXY_PORT", "3309")

connection = mysql.connector.connect(
  host=db_host,
  port=db_port,
  user="your_user",
  password="your_password",
  database="your_database"
)
```

### 8. Running Tests in Behave and Pytest
To execute tests based on substrings or tags:

**Example Commands :**

```bash
pytest -k "TestAdvanceBoy"
behave -t @smoke
```

**YAML Translation :**

```yaml title="hyperexecute.yaml"
testRunnerCommand: pytest -k "TestAdvanceBoy"
# or
testRunnerCommand: behave -t @smoke
```

To execute an entire feature file:

```bash
behave -f feature_path/sample.feature
```

**YAML Translation :**

```yaml title="hyperexecute.yaml"
testRunnerCommand: behave -f feature_path/sample.feature
```

### 9. Discovering Tests Dynamically

- List all feature files containing a specific tag (e.g., @smoke):

```bash
grep -rl "@smoke" features/*.feature
```

**YAML Translation :**

```yaml title="hyperexecute.yaml"
testDiscovery:
  type: raw
  command: grep -rl "@smoke" features/*.feature
```

- List all scenarios under that tag :

```bash
grep -rH -A 3 "@smoke" features/*.feature | grep -i "Scenario" | cut -d ":" -f 2-
```

**YAML Translation :**

```yaml title="hyperexecute.yaml"
testDiscovery:
  type: raw
  command: grep -rH -A 3 "@smoke" features/*.feature | grep -i "Scenario" | cut -d ":" -f 2-
```

### 10. Generating JSON Reports with Behave
To generate JSON reports for your test execution:

```bash
behave -f json.pretty -o reports/test_report.json
```

**YAML Translation :**

```yaml title="hyperexecute.yaml"
post:
  - behave -f json.pretty -o reports/test_report.json
```

### 11. Dynamically Assigning Artifact Names
To dynamically name artifacts using environment variables, define them in your YAML configuration.

**YAML Translation :**

```yaml title="hyperexecute.yaml"
uploadArtefacts:
  - name: "${abcd}"
    path:
      - reports/**
```

Pass variable values through CLI during job execution:

```bash
./hyperexecute -u <your_username> -k <your_access_key> -i <relative_path_of_config> --vars "abcd=Folder"
```
If abcd=Folder, the uploaded artifact will appear as Folder on the HyperExecute dashboard.

### 12. Using a Cache Directory for Package Installation
To enable caching for faster dependency installation:

```bash
pip3 install -r requirements.txt --cache-dir CacheDir
```

This ensures packages are stored and reused in subsequent runs, reducing job setup time.

### 13. Monitoring Tunnel Health and Auto-Retry
When running automated tests in HyperExecute, tunnel connections may drop or become unstable, leading to test failures.

**Scenario/Use Case:**  
- Tunnel may drop due to network instability, firewall restrictions, or internal server issues.  
- Goal: Continuously monitor tunnel health and automatically retry without manual intervention.

**Solution**  
Use the `checkTunnelOnFailure` parameter in your YAML configuration. This ensures HyperExecute automatically retries the tunnel if it fails during test execution.

**YAML Translation:**

```yaml title="hyperexecute.yaml"
checkTunnelOnFailure: true
```

### 14. Different Ways to Execute Tests in Pytest via CLI
#### Case 1: Run Tests in a Specific Directory or File

```bash
pytest path/to/test_directory/
pytest path/to/test_file.py
```

#### Case 2: Run a Specific Test Function Within a File
```bash
pytest path/to/test_file.py::test_function_name
```

#### Case 3: Run Tests Matching a Substring or Keyword
```bash
pytest -k "test_keyword"
```

**Example :**
```bash
pytest -k "login"
```

### 15. Debugging in Pytest with Detailed Logs

**Solution :** Use the `--log-cli-level=DEBUG` flag to capture debug-level logs.

**Example Python Test :**

```python title="test.py
import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger()

def test_debug_logging():
    value = 42
    if value == 42:
        logger.debug("Value is 42, running debug checks")
    logger.debug("This is a debug message")
    logger.info("Test info message")
    logger.warning("Test warning message")
    logger.error("Test error message")
    if value != 42:
        logger.critical("Critical issue: Value should be 42!")
    assert value == 42
```

**Terminal Output Example :**

```bash
DEBUG:root:Value is 42, running debug checks
DEBUG:root:This is a debug message
INFO:root:Test info message
WARNING:root:Test warning message
ERROR:root:Test error message
```

### 16. Automating Screenshot Download and PDF Generation from <BrandName />
During native app automation, screenshots captured per session ID can be retrieved using:

```bash
curl -X GET "https://mobile-api.lambdatest.com/mobile-automation/api/v1/sessions/${session_id}/screenshots" \
     -H "accept: application/json" \
     -H "Authorization: Basic <auth>"
```

**Problem :** Manually downloading, extracting, and arranging screenshots into a PDF is time-consuming.

**Solution :** Use the <BrandName /> Screenshot Downloader & PDF Generator CLI.

- **Installation :**
```bash
npm install -g lambdatest-screenshot-pdf
```

- **Usage :**
```bash
AUTH_HEADER="Basic your_encoded_auth_string" lambdatest-screenshot-pdf <session_id> --output <output_directory>
```

- **Example :**
```bash
AUTH_HEADER="Basic cmF0aG9yZXYXYXYXYXXgybFlXTm5LclZPeVRRQ01RRGdyNTZjVg==" \
lambdatest-screenshot-pdf 1a80510a-289a-46b7-9f60-da01d108de10 --output ~/Desktop/screenshots
```

**What Happens When You Run This Command:**
- Fetches the ZIP file containing screenshots for the session ID.
- Downloads the ZIP file.
- Extracts screenshots in the original execution order.
- Generates a screenshots.pdf containing the ordered screenshots.
- Cleans up temporary files automatically.
- Ensure your AUTH_HEADER is a valid Base64-encoded API key from <BrandName />.

### 17. Base YAML Configuration for Pytest on Windows with Autosplit

Example hyperexecute.yaml:

```yaml title="hyperexecute.yaml"
---
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: win
autosplit: true
concurrency: 2
runtime:
  language: python
  version: "3"

cacheKey: '{{ checksum "requirements.txt" }}'
cacheDirectories:
  - CacheDir
pre:
  - pip3 install -r requirements.txt --cache-dir CacheDir
post:
  - cat yaml/win/pytest_hyperexecute_autosplit_sample.yaml

testDiscovery:
  type: raw
  mode: remote
  command: grep -nri 'class' tests -ir --include=\*.py | sed 's/:.*//'

testRunnerCommand: pytest -s --verbose $test

jobLabel: [selenium-pytest, win, autosplit]
```

## C# Use Cases

This guide provides a complete reference for integrating C# NUnit SpecFlow tests with HyperExecute, covering edge cases, solutions, YAML setup, artifact management, remote test discovery, and reporting.

### 1. Autosplit
#### Edge Case
Large test suites with hundreds or thousands of tests can leave some nodes idle while others are overloaded, resulting in wasted time and uneven execution.

#### Solution
AutoSplit divides tests intelligently across nodes at file, module, or scenario level. Previously failed tests are prioritized for faster feedback. This ensures maximum concurrency usage and reduces test flakiness, enabling faster feedback loops for large BDD suites.

```yaml title="hyperexecute.yaml"
autosplit: true
```

#### What Happens If We Don’t Use It

- Inefficient node usage
- Slower test execution
- Flaky tests delay feedback
- No control over test splitting
    
---

### 2. Matrix Setup
#### Edge Case
Tests behave differently on various OS platforms. Running only on one OS may hide platform-specific bugs. 

#### Solution
The matrix runs tests concurrently on Mac, Windows, and Linux, detecting OS-specific issues like file paths, encoding, or browser behavior.

```yaml title="hyperexecute.yaml"
matrix:
  os: [mac, win, linux]

runson: ${matrix.os}
```

#### What Happens If We Don’t Use It
- Tests may pass on one OS but fail on others
- Hidden bugs reach end users
- Manual cross-OS testing required

---

### 3. Environment Variables (NuGet Paths)
#### Edge Case
Parallel jobs sharing default NuGet caches may cause corrupted packages, race conditions, or build failures, especially in ephemeral environments or low disk space.

#### Solution
Predefining NuGet paths ensures controlled caching, reliable builds across OSes, and efficient reuse of restored packages.

```yaml title="hyperexecute.yaml"
env:
  NUGET_PACKAGES: '/home/ltuser/.nuget/packages/'
  NUGET_HTTP_CACHE_PATH: '/home/ltuser/.local/share/NuGet/v3-cache'
  NUGET_PLUGINS_CACHE_PATH: '/home/ltuser/.local/share/NuGet/plugins-cache'
```

#### What Happens If We Don’t Use It
- Random failures in parallel jobs
- Slower builds
- High network usage
- Disk space issues
- Inconsistent behavior across OSes

---

### 4. Pre Steps
#### Edge Case
Dependencies may not be restored or projects may not build correctly if pre-steps are missing, causing test failures downstream.

#### Solution

```yaml title="hyperexecute.yaml"
pre:
 - dotnet restore
 - dotnet list OnlySpecTest.csproj package > packages.txt
#  - chmod 777 /tmp/NuGetScratch
#  - nuget locals all -clear
 - dotnet build -c Release
```

- **dotnet restore** -> Restores NuGet packages
- **dotnet list ... > packages.txt:** -> Saves package list for caching
- **dotnet build -c Release:** -> Builds the project in Release mode
- Optional commands handle permissions or cache clearing

#### What Happens If We Don’t Use It
- Builds fail or produce outdated DLLs
- Tests fail due to missing dependencies
- Manual fixes required

---

### 5. Artifact Upload
#### Edge Case
Without artifacts, failed tests provide no screenshots, logs, or reports for debugging, and outputs can be scattered in parallel executions.

#### Solution
Artifacts centralize outputs like HTML reports and screenshots, enabling debug, traceability, and audit.

```yaml title="hyperexecute.yaml"
uploadArtefacts:
 - name: Execution_Report
   path:
    - Report/**
 - name: Execution_Screenshots
   path:
    - Screenshots/**/**
```

#### What Happens If We Don’t Use It
- No visual proof or logs
- Debugging intermittent failures is hard
- Manual reporting is required

---

### 6. Report Generation
#### Edge Case
Partial or misconfigured reports can be unreadable, incomplete, or fail to merge in parallel executions.

#### Solution
Generates human-readable HTML reports showing pass/fail, steps, screenshots, and aggregated results for stakeholders.

```yaml title="hyperexecute.yaml"
report: true
partialReports:
  location: Report/
  type: html
  frameworkName: specflow
```

#### What Happens If We Don’t Use It
- No centralized reporting
- Harder to analyze test performance trends
- Manual effort needed to share results
  
---

### 7. Test Discovery
#### Edge Case
Static or incorrect discovery may skip new tests, misdetect test tags, or fail in parallel executions.

#### Solution
Remote discovery automatically detects new @tags or features, enabling parallelization and reducing manual maintenance.

```yaml title="hyperexecute.yaml"
testDiscovery:
  type: raw
  mode: remote
  command: grep -rni 'Features' -e '@' --include=*.feature | sed 's/.*@//'
```

#### What Happens If We Don’t Use It
- Manual selection of tests
- New tests may never run
- Reduced test coverage
  
---

### 8. testRunnerCommand
#### Edge Case
Running all tests every time is inefficient, and category typos or missing attributes can prevent execution.

#### Solution
Executes only tests with the specified Category. Supports parallelization and selective reruns.

```yaml title="hyperexecute.yaml"
testRunnerCommand: dotnet test --filter "(Category=$test)"
```

#### What Happens If We Don’t Use It
- All tests run every time
- Slower pipelines
- Increased build cost

---

### 9. Multiple Tag-Based Test Discovery
#### Edge Case
Projects may have diverse tagging strategies, making standard discovery unreliable or incomplete.

#### Solution

```yaml title="hyperexecute.yaml"
testDiscovery:
  type: raw
  mode: remote
  shell: bash
  command: grep -E -w -R -A10 --include='*.feature.cs' ${tagname} AllInOneProject/features | grep 'public void' | cut -d' ' -f2- | awk '{print $3}' | sed 's/()$//'  | sed 's/TestTearDown//g'
```

- Dynamically extracts test names based on tags
- Ensures new tests are automatically included
- Supports parallel execution and CI/CD pipelines
  
#### What Happens If We Don’t Use It
- Missing tests due to inconsistent tagging
- Manual updates required
- Increased risk of regressions
  
---

### 10. Framework Version Compatibility Handling
#### Edge Case
Different .NET versions require different build steps; incorrect handling causes build failures or runner crashes.

#### Solution
Builds projects correctly based on target framework, ensuring compatibility with HyperExecute runners.

**`.NET 6`+**: Use dotnet build in pre-steps
**`.NET <6`**: Build locally and upload DLLs

```yaml title="hyperexecute.yaml"
C:\PROGRA~2\Micros~1\2019\Community\MSBuild\Current\Bin\MSBuild.exe /p:Configuration=Release /p:TargetFramework=net472 /t:restore
```

#### What Happens If We Don’t Use It
- Build failures
- Outdated or incompatible DLLs
- Test runner crashes
    
---

### 11. Private Dependencies (config.nuget)
#### Edge Case
Projects depending on private NuGet feeds fail restore if credentials or feeds are not configured.

#### Solution
Configures private feeds securely to ensure reliable dependency resolution across environments.

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration> 
  <packageSources>
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" protocolVersion="3" />
    <add key="Testplayer" value="http://testplayer.jfrog.io/tcgplayer/api/nuget/nuget" />
  </packageSources>
  <packageSourceCredentials>
    <Testplayer>
        <add key="Username" value="readonlyuser" />
        <add key="ClearTextPassword" value="R3dD3ckW1ns" />
    </Testplayer>
  </packageSourceCredentials>
</configuration>
```

#### What Happens If We Don’t Use It
- Restore failures (401 Unauthorized)
- CI/CD errors
- Manual debugging and inconsistent builds
    
---

### 12. Custom Test Runner Alternatives
#### Edge Case
Some projects cannot run with dotnet test due to configuration or .NET version constraints.

#### Solution
Alternative runner allows execution of targeted tests, respecting project-specific configurations.

```yaml
vstest.console.exe "GlobalPolaris\bin\Debug\net472\GlobalPolaris.dll" /Settings:GlobalPolaris\RunSettings.runsettings /TestCaseFilter:"FullyQualifiedName~$test"
```

#### What Happens If We Don’t Use It
- Tests may fail to execute
- Build verification and pipelines are blocked
    
---

### 13. NUnit Console for Feature Tag Discovery
#### Edge Case
Standard discovery may fail with complex NUnit tag setups.

#### Solution
Uses NUnit console to explore feature tests by tags.
```yaml 
& "C:\PROGRA~2\NUnit.org\nunit-console\nunit3-console.exe" "<dll_path>" --where="cat==$tag" --explore
```

#### What Happens If We Don’t Use It
- Tag-based tests are skipped
- Partial coverage
- Manual intervention required

---

### 14. Differential Upload Configuration
#### Edge Case
Large test suites take long to upload; repeated full uploads waste time and bandwidth.

#### Solution
Uploads only changed files, reducing upload time and network usage.

```yaml title="hyperexecute.yaml"
differentialUpload:
  enabled: true
  ttlHours: 300
```

#### What Happens If We Don’t Use It
- Slow uploads
- Wasted resources
- Longer pipeline durations

---

### 15. Certificate Management for Browser Authentication
#### Edge Case
Browser tests requiring client certificates fail without proper installation.

#### Solution
Installs certificates in browser environment for authenticated sessions.

```yaml title="hyperexecute.yaml"
%HYPEREXECUTE_WORKING_DIR%//Hyperexecute//cert_manager.exe --chrome -i atest089.pfx
```

#### What Happens If We Don’t Use It
- Browser authentication tests fail
- Manual certificate setup required
    
---

### 16. Custom Status Reporting via CleanUp Function
#### Edge Case
Test statuses may not be reported to HyperExecute properly, leading to incomplete dashboards.

#### Solution
Custom function reports statuses for tracking and dashboards.

```java title="test.java"
public void CleanUp(string[] tagName, ScenarioExecutionStatus scenarioStatus, string scenarioName)
{
    string STATUS = scenarioStatus.ToString() switch
    {
        "OK" => "passed",
        "UndefinedStep" => "skipped",
        "TestError" => "failed",
        _ => "others"
    };
    ((IJavaScriptExecutor)Properties.driver).ExecuteScript($"lambda-status={STATUS}");
}
```

#### What Happens If We Don’t Use It
- Missing or inaccurate test reporting 
- Dashboard metrics incomplete

---

### 17. Custom SpecFlow Reporting Configuration
#### Edge Case
Standard reports may not provide enough detail for complex SpecFlow tests.

#### Solution
Generates custom reports with metadata and email notifications.

```yaml title="hyperexecute.yaml"
report: true
partialReports:
  location: GlobalPolaris/Reports
  type: html
  frameworkName: specflow-custom
email:
  to: ["example@lambdatest.com"]
metaInfo: ["project-name:Global Polaris Regression","project-env:QA"]
```

#### What Happens If We Don’t Use It
- Reports lack detail
- Stakeholders have limited visibility
- Manual reporting required
    
---

### 18. File Level Discovery (DLL)
#### Edge Case
Running tests on the wrong or outdated DLL causes failures or misses new tests.

#### Solution
Ensures correct DLL is built and executed on the proper runner.

```yaml title="hyperexecute.yaml"
runson: win

pre:
  commands:
    - dotnet restore
    - dotnet build YourSolution.sln -c Release

test:
  commands:
    - nunit3-console.exe "bin/Release/net6.0/YourProject.dll"
```

#### What Happens If We Don’t Use It
- Tests fail
- New features not executed
- Manual DLL verification required

---

### 19. Feature File Level Discovery (Matrix)
#### Edge Case
All tests running together reduce parallelism and rerun flexibility.

#### Solution
Run each feature individually to enable parallel execution and selective reruns.

```yaml title="hyperexecute.yaml"
matrix:
  featurefile:
    - "Features/Login.feature"
    - "Features/Search.feature"
    - "Features/Checkout.feature"

test:
  commands:
    - nunit3-console.exe "bin/Release/net6.0/YourProject.dll" --where "cat == '$featurefile'"
```

#### What Happens If We Don’t Use It
- Parallelism lost
- Slower execution
- Rerunning failed features is difficult
    
---

### 20. Passing Arguments in HyperExecute
#### Edge Case
Incorrect YAML quoting or missing result file paths cause unintended test runs or missing artifacts.

#### Solution
Properly passing arguments ensures selective execution and saves results for artifact uploads.

```yaml title="hyperexecute.yaml"
test:
  commands:
    - nunit3-console.exe "bin/Release/net6.0/YourProject.dll" --where "cat == 'Regression'" --result="regression-result.xml"
```

#### What Happens If We Don’t Use It
- All tests may run accidentally
- Slow pipelines
- Missing artifacts for debugging
