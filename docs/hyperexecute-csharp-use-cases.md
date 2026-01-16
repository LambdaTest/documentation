---
id: hyperexecute-csharp-use-cases
title: HyperExecute CSharp Use Cases
sidebar_label: CSharp Use Cases
description: Discover the power of HyperExecute connected workflows and how testers or developers can leverage it for their daily autoamtion testing of their organization features.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - TestMu AI Projects
  - C Sharp
  - NUnit
  - Specflow
url: https://www.testmu.ai/support/docs/hyperexecute-csharp-use-cases/
site_name: LambdaTest
slug: hyperexecute-csharp-use-cases
canonical: https://www.testmu.ai/support/docs/hyperexecute-csharp-use-cases/
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
          "name": "HyperExecute CSharp Use Cases",
          "item": `${BRAND_URL}/support/docs/hyperexecute-csharp-use-cases/`
        }]
      })
    }}
></script>
This guide provides a complete reference for integrating C# NUnit SpecFlow tests with HyperExecute, covering edge cases, solutions, YAML setup, artifact management, dynamic test discovery, and reporting.

## 1. Autosplit
### Edge Case
Large test suites with hundreds or thousands of tests can leave some nodes idle while others are overloaded, resulting in wasted time and uneven execution.

### Solution
AutoSplit divides tests intelligently across nodes at file, module, or scenario level. Previously failed tests are prioritized for faster feedback. This ensures maximum concurrency usage and reduces test flakiness, enabling faster feedback loops for large BDD suites.

```yaml title="hyperexecute.yaml"
autosplit: true
```

### What Happens If We Don’t Use It

- Inefficient node usage
- Slower test execution
- Flaky tests delay feedback
- No control over test splitting
    
---

## 2. Matrix Setup
### Edge Case
Tests behave differently on various OS platforms. Running only on one OS may hide platform-specific bugs. 

### Solution
The matrix runs tests concurrently on Mac, Windows, and Linux, detecting OS-specific issues like file paths, encoding, or browser behavior.

```yaml title="hyperexecute.yaml"
matrix:
  os: [mac, win, linux]

runson: ${matrix.os}
```

### What Happens If We Don’t Use It
- Tests may pass on one OS but fail on others
- Hidden bugs reach end users
- Manual cross-OS testing required

---

## 3. Environment Variables (NuGet Paths)
### Edge Case
Parallel jobs sharing default NuGet caches may cause corrupted packages, race conditions, or build failures, especially in ephemeral environments or low disk space.

### Solution
Predefining NuGet paths ensures controlled caching, reliable builds across OSes, and efficient reuse of restored packages.

```yaml title="hyperexecute.yaml"
env:
  NUGET_PACKAGES: '/home/ltuser/.nuget/packages/'
  NUGET_HTTP_CACHE_PATH: '/home/ltuser/.local/share/NuGet/v3-cache'
  NUGET_PLUGINS_CACHE_PATH: '/home/ltuser/.local/share/NuGet/plugins-cache'
```

### What Happens If We Don’t Use It
- Random failures in parallel jobs
- Slower builds
- High network usage
- Disk space issues
- Inconsistent behavior across OSes

---

## 4. Pre Steps
### Edge Case
Dependencies may not be restored or projects may not build correctly if pre-steps are missing, causing test failures downstream.

### Solution

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

### What Happens If We Don’t Use It
- Builds fail or produce outdated DLLs
- Tests fail due to missing dependencies
- Manual fixes required

---

## 5. Artifact Upload
### Edge Case
Without artifacts, failed tests provide no screenshots, logs, or reports for debugging, and outputs can be scattered in parallel executions.

### Solution
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

### What Happens If We Don’t Use It
- No visual proof or logs
- Debugging intermittent failures is hard
- Manual reporting is required

---

## 6. Report Generation
### Edge Case
Partial or misconfigured reports can be unreadable, incomplete, or fail to merge in parallel executions.

### Solution
Generates human-readable HTML reports showing pass/fail, steps, screenshots, and aggregated results for stakeholders.

```yaml title="hyperexecute.yaml"
report: true
partialReports:
  location: Report/
  type: html
  frameworkName: specflow
```

### What Happens If We Don’t Use It
- No centralized reporting
- Harder to analyze test performance trends
- Manual effort needed to share results
  
---

## 7. Test Discovery
### Edge Case
Static or incorrect discovery may skip new tests, misdetect test tags, or fail in parallel executions.

### Solution
Dynamic discovery automatically detects new @tags or features, enabling parallelization and reducing manual maintenance.

```yaml title="hyperexecute.yaml"
testDiscovery:
  type: raw
  mode: dynamic
  command: grep -rni 'Features' -e '@' --include=*.feature | sed 's/.*@//'
```

### What Happens If We Don’t Use It
- Manual selection of tests
- New tests may never run
- Reduced test coverage
  
---

## 8. testRunnerCommand
### Edge Case
Running all tests every time is inefficient, and category typos or missing attributes can prevent execution.

### Solution
Executes only tests with the specified Category. Supports parallelization and selective reruns.

```yaml title="hyperexecute.yaml"
testRunnerCommand: dotnet test --filter "(Category=$test)"
```

### What Happens If We Don’t Use It
- All tests run every time
- Slower pipelines
- Increased build cost

---

## 9. Multiple Tag-Based Test Discovery
### Edge Case
Projects may have diverse tagging strategies, making standard discovery unreliable or incomplete.

### Solution

```yaml title="hyperexecute.yaml"
testDiscovery:
  type: raw
  mode: dynamic
  shell: bash
  command: grep -E -w -R -A10 --include='*.feature.cs' ${tagname} AllInOneProject/features | grep 'public void' | cut -d' ' -f2- | awk '{print $3}' | sed 's/()$//'  | sed 's/TestTearDown//g'
```

- Dynamically extracts test names based on tags
- Ensures new tests are automatically included
- Supports parallel execution and CI/CD pipelines
  
### What Happens If We Don’t Use It
- Missing tests due to inconsistent tagging
- Manual updates required
- Increased risk of regressions
  
---

## 10. Framework Version Compatibility Handling
### Edge Case
Different .NET versions require different build steps; incorrect handling causes build failures or runner crashes.

### Solution
Builds projects correctly based on target framework, ensuring compatibility with HyperExecute runners.

**`.NET 6`+**: Use dotnet build in pre-steps
**`.NET <6`**: Build locally and upload DLLs

```yaml title="hyperexecute.yaml"
C:\PROGRA~2\Micros~1\2019\Community\MSBuild\Current\Bin\MSBuild.exe /p:Configuration=Release /p:TargetFramework=net472 /t:restore
```

### What Happens If We Don’t Use It
- Build failures
- Outdated or incompatible DLLs
- Test runner crashes
    
---

## 11. Private Dependencies (config.nuget)
### Edge Case
Projects depending on private NuGet feeds fail restore if credentials or feeds are not configured.

### Solution
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

### What Happens If We Don’t Use It
- Restore failures (401 Unauthorized)
- CI/CD errors
- Manual debugging and inconsistent builds
    
---

## 12. Custom Test Runner Alternatives
### Edge Case
Some projects cannot run with dotnet test due to configuration or .NET version constraints.

### Solution
Alternative runner allows execution of targeted tests, respecting project-specific configurations.

```yaml
vstest.console.exe "GlobalPolaris\bin\Debug\net472\GlobalPolaris.dll" /Settings:GlobalPolaris\RunSettings.runsettings /TestCaseFilter:"FullyQualifiedName~$test"
```

### What Happens If We Don’t Use It
- Tests may fail to execute
- Build verification and pipelines are blocked
    
---

## 13. NUnit Console for Feature Tag Discovery
### Edge Case
Standard discovery may fail with complex NUnit tag setups.

### Solution
Uses NUnit console to explore feature tests by tags.
```yaml 
& "C:\PROGRA~2\NUnit.org\nunit-console\nunit3-console.exe" "<dll_path>" --where="cat==$tag" --explore
```

### What Happens If We Don’t Use It
- Tag-based tests are skipped
- Partial coverage
- Manual intervention required

---

## 14. Differential Upload Configuration
### Edge Case
Large test suites take long to upload; repeated full uploads waste time and bandwidth.

### Solution
Uploads only changed files, reducing upload time and network usage.

```yaml title="hyperexecute.yaml"
differentialUpload:
  enabled: true
  ttlHours: 300
```

### What Happens If We Don’t Use It
- Slow uploads
- Wasted resources
- Longer pipeline durations

---

## 15. Certificate Management for Browser Authentication
### Edge Case
Browser tests requiring client certificates fail without proper installation.

### Solution
Installs certificates in browser environment for authenticated sessions.

```yaml title="hyperexecute.yaml"
%HYPEREXECUTE_WORKING_DIR%//Hyperexecute//cert_manager.exe --chrome -i atest089.pfx
```

### What Happens If We Don’t Use It
- Browser authentication tests fail
- Manual certificate setup required
    
---

## 16. Custom Status Reporting via CleanUp Function
### Edge Case
Test statuses may not be reported to HyperExecute properly, leading to incomplete dashboards.

### Solution
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

### What Happens If We Don’t Use It
- Missing or inaccurate test reporting 
- Dashboard metrics incomplete

---

## 17. Custom SpecFlow Reporting Configuration
### Edge Case
Standard reports may not provide enough detail for complex SpecFlow tests.

### Solution
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

### What Happens If We Don’t Use It
- Reports lack detail
- Stakeholders have limited visibility
- Manual reporting required
    
---

## 18. File Level Discovery (DLL)
### Edge Case
Running tests on the wrong or outdated DLL causes failures or misses new tests.

### Solution
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

### What Happens If We Don’t Use It
- Tests fail
- New features not executed
- Manual DLL verification required

---

## 19. Feature File Level Discovery (Matrix)
### Edge Case
All tests running together reduce parallelism and rerun flexibility.

### Solution
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

### What Happens If We Don’t Use It
- Parallelism lost
- Slower execution
- Rerunning failed features is difficult
    
---

## 20. Passing Arguments in HyperExecute
### Edge Case
Incorrect YAML quoting or missing result file paths cause unintended test runs or missing artifacts.

### Solution
Properly passing arguments ensures selective execution and saves results for artifact uploads.

```yaml title="hyperexecute.yaml"
test:
  commands:
    - nunit3-console.exe "bin/Release/net6.0/YourProject.dll" --where "cat == 'Regression'" --result="regression-result.xml"
```

### What Happens If We Don’t Use It
- All tests may run accidentally
- Slow pipelines
- Missing artifacts for debugging