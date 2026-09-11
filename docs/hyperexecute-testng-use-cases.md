---
id: hyperexecute-testng-use-cases
title: HyperExecute TestNG Use Cases
sidebar_label: TestNG Use Cases
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
          "name": "HyperExecute TestNG Use Cases",
          "item": `${BRAND_URL}/support/docs/hyperexecute-testng-use-cases/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-testng-use-cases/"
    },
    "headline": "HyperExecute Language-Specific Use Cases",
    "description": "Practical TestNG automation use cases on HyperExecute: parallel execution, data-driven tests, and Java workflows to accelerate QA delivery.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-testng-use-cases/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "TestMu AI Hyperexecute",
      "TestMu AI Hyperexecute help",
      "TestMu AI Hyperexecute documentation"
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
        "name": "runtime",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Q: What is test discovery in HyperExecute, and how does it help?\n[Test discovery](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery) is the process of pre-identifying the tests (classes, scenarios, or feature files) to be executed.\n\n##### Why Use Test Discovery?\n- **Selective Execution \u2192** Run only the tests you need.\n- **Flexibility \u2192** Filter by file paths, tags, or custom logic.\n- **Pre-Execution Preview \u2192** Know exactly which tests will run.\n\n##### Discovery Methods\n| Type        | Description                                                | Use Case                                |\n| ----------- | ---------------------------------------------------------- | --------------------------------------- |\n| `raw`       | Runs a shell command to list tests.                        | Simple, filename/class-based filtering. |\n| `automatic` | Uses HyperExecute backend tools (`snooper`) for discovery. | Tag or scenario-based filtering.        |\n\n##### Examples\n\nAutomatic Discovery (Tag-based)\n\n```yaml title=\"hyperexecute.yaml\"\ntestDiscovery:\n  type: automatic\n  mode: static\n  args:\n    featureFilePaths: web/src/test/resources/features\n    frameWork: java\n    specificTags: [\"@AccountCombineSet\"]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "testDiscovery",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n##### Discovery Modes\n- [local](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery:~:text=mode%3A%20remote-,mode%3A%20local,-Purpose%3A%20Test) \u2192 Runs discovery on your machine (useful for small/simple projects).\n- [remote](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery:~:text=locally%2C%20limiting%20visibility.-,mode%3A%20remote,-NEW) \u2192 Runs discovery on HyperExecute VM (recommended for large projects).\n\n### Q: How do I include/exclude tests using tags?\nYou can pass logical tag expressions in testDiscovery or use the ignoredTags parameter.\n\nExample: Logical Tag Filtering\n\n```yaml title=\"hyperexecute.yaml\"\ntestDiscovery:\n  command: .hyperexecute/snooper --targetOs=win \\\n           --featureFilePaths=web/src/test/resources/features \\\n           --frameWork=java \\\n           --query=\"@UAT2Miniregression and not @FLNAUAT2\" \\\n  | awk '{gsub(\"web/\", \"\"); print}'\n  mode: static\n  type: raw"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Q: How do I include/exclude tests using tags?",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "ignoredTags: [\"@tag3\", \"@tag2\"]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "testDiscovery",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Q: How should I configure testng.xml when I have multiple runners?\n\nTo avoid duplicate executions:\n\n- Use one runner class in `testng.xml`.\n- Comment out tags in `@CucumberOptions`.\n- Let HyperExecute discovery handle filtering.\n\n**Example: testng.xml**\n\n```xml title=\"testng.xml\"\n<suite name=\"Sanity Suite\">\n  <test name=\"Test\">\n    <classes>\n      <class name=\"com.qt.sid.bdd.Runner.RunnerSanity.TestRunnerUK\"/>\n    <\/classes>\n  <\/test>\n<\/suite>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Q: How should I configure testng.xml when I have multiple runners?",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "@CucumberOptions(\n  features = \"src/test/resources/features\",\n  // tags = \"@Regression and not @ignore\",   // Commented out\n  glue = \"com/qt/sid/stepdefinitions\",\n  plugin = {\n    \"pretty\",\n    \"html:test-output/cucumber-reports/html-report.html\",\n    \"json:test-output/cucumber-reports/json-report.json\",\n    \"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:\",\n    \"json:target/cucumber.json\"\n  },\n  monochrome = true\n)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "args",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Q: What if my Allure reports/screenshots are too large to render on the dashboard?\nLarge reports may fail to render in HyperExecute dashboard. It is recommended to generate zipped Allure reports for local viewing.\n\nYAML Example\n\n```yaml title=\"hyperexecute.yaml\"\nreport: true\npartialReports:\n  location: allure-results/webapp\n  type: zip\n  frameworkName: allure-zip"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Q: What if my Allure reports/screenshots are too large to render on the dashboard?",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "brew install allure"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Q: What if my Allure reports/screenshots are too large to render on the dashboard?",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "allure open ./pathDirectory   # Replace pathDirectory with the actual report folder."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Traceback (most recent call last)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "In Python versions 3.3 to 3.9, MutableMapping was part of the collections module. From Python 3.10 onward, it was moved to collections.abc, causing import errors in older code.\n\n**Solution :** To ensure compatibility, match the Python runtime version with your local setup. Specify the version explicitly in your YAML configuration.\n\n**YAML Translation :**\n```yaml title=\"hyperexecute.yaml\"\nruntime:\n  - language: python\n    version: \"3.9\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "An outdated PIP version may cause the following error",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "python -m pip install --upgrade pip"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "If you are using Python 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "python3 -m pip install --upgrade pip"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "pre",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### 3. Fixing Missing requirements.txt Errors\nIf your pipeline fails with:\n> **ERROR:** Could not open requirements file: [Errno 2] No such file or directory: 'requirements.txt'\n\nIt means that the `requirements.txt` file might be missing or ignored in .gitignore.\n\n**Solution :** Ensure the file exists in the project root. Remove or comment out any requirements.txt entry from .gitignore. For this issue, ther are no YAML change required. This is a file management fix. However, verify that the command below correctly references the existing file name.\n\n```bash\npip install -r requirements.txt --cache-dir CacheDir"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "pre",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### 6. Building Projects with Public and Private Registries\n#### Case 1: Public Registry Installation\nIf all dependencies are public, install them directly:\n\n```bash\npip3 install -r requirements.txt --cache-dir CacheDir"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "pre",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n#### Case 2: Private Registry Installation\nWhen using a private registry, authentication is required. Use proxy variables and authorization tokens to install packages securely.\n\n```bash\npip3 install --proxy http://$LT_PROXY_HOST:$LT_PROXY_PORT \\\n  --header \"Authorization: Bearer $PRIVATE_REGISTRY_TOKEN\" \\\n  -r requirements.txt"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "pre",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n**Sample `requirements.txt` file :**\n\n```text\n--extra-index-url https://your-private-registry.com/simple\n--trusted-host your-private-registry.com\nyour-private-package==1.0.0\nanother-package==2.0.0"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "args",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n**Sample Connection Code :**\n\n```python title=\"test.py\nimport os\nimport mysql.connector\n\ndb_host = os.getenv(\"MYSQL1_PROXY_HOST\", \"localhost\")\ndb_port = os.getenv(\"MYSQL1_PROXY_PORT\", \"3309\")\n\nconnection = mysql.connector.connect(\n  host=db_host,\n  port=db_port,\n  user=\"your_user\",\n  password=\"your_password\",\n  database=\"your_database\"\n)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To execute tests based on substrings or tags",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pytest -k \"TestAdvanceBoy\"\nbehave -t @smoke"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "or",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nTo execute an entire feature file:\n\n```bash\nbehave -f feature_path/sample.feature"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "or",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### 9. Discovering Tests Dynamically\n\n- List all feature files containing a specific tag (e.g., @smoke):\n\n```bash\ngrep -rl \"@smoke\" features/*.feature"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "testDiscovery",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n- List all scenarios under that tag :\n\n```bash\ngrep -rH -A 3 \"@smoke\" features/*.feature | grep -i \"Scenario\" | cut -d \":\" -f 2-"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "testDiscovery",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### 10. Generating JSON Reports with Behave\nTo generate JSON reports for your test execution:\n\n```bash\nbehave -f json.pretty -o reports/test_report.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "post",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### 11. Dynamically Assigning Artifact Names\nTo dynamically name artifacts using environment variables, define them in your YAML configuration.\n\n**YAML Translation :**\n\n```yaml title=\"hyperexecute.yaml\"\nuploadArtefacts:\n  - name: \"${abcd}\"\n    path:\n      - reports/**"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Pass variable values through CLI during job execution",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./hyperexecute -u <your_username> -k <your_access_key> -i <relative_path_of_config> --vars \"abcd=Folder\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To enable caching for faster dependency installation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pip3 install -r requirements.txt --cache-dir CacheDir"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "13. Monitoring Tunnel Health and Auto-Retry",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### 14. Different Ways to Execute Tests in Pytest via CLI\n#### Case 1: Run Tests in a Specific Directory or File\n\n```bash\npytest path/to/test_directory/\npytest path/to/test_file.py"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Case 2: Run a Specific Test Function Within a File",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pytest path/to/test_file.py::test_function_name"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Case 3: Run Tests Matching a Substring or Keyword",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pytest -k \"test_keyword\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Case 3: Run Tests Matching a Substring or Keyword",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pytest -k \"login\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "if value != 42",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n**Terminal Output Example :**\n\n```bash\nDEBUG:root:Value is 42, running debug checks\nDEBUG:root:This is a debug message\nINFO:root:Test info message\nWARNING:root:Test warning message\nERROR:root:Test error message"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "During native app automation, screenshots captured per session ID can be retrieved using",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl -X GET \"https://mobile-api.lambdatest.com/mobile-automation/api/v1/sessions/${session_id}/screenshots\" \\\n     -H \"accept: application/json\" \\\n     -H \"Authorization: Basic <auth>\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "16. Automating Screenshot Download and PDF Generation from TestMu AI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g lambdatest-screenshot-pdf"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "16. Automating Screenshot Download and PDF Generation from TestMu AI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "AUTH_HEADER=\"Basic your_encoded_auth_string\" lambdatest-screenshot-pdf <session_id> --output <output_directory>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "16. Automating Screenshot Download and PDF Generation from TestMu AI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "AUTH_HEADER=\"Basic cmF0aG9yZXYXYXYXYXXgybFlXTm5LclZPeVRRQ01RRGdyNTZjVg==\" \\\nlambdatest-screenshot-pdf 1a80510a-289a-46b7-9f60-da01d108de10 --output ~/Desktop/screenshots"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "testDiscovery",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n## C# Use Cases\n\nThis guide provides a complete reference for integrating C# NUnit SpecFlow tests with HyperExecute, covering edge cases, solutions, YAML setup, artifact management, remote test discovery, and reporting.\n\n### 1. Autosplit\n#### Edge Case\nLarge test suites with hundreds or thousands of tests can leave some nodes idle while others are overloaded, resulting in wasted time and uneven execution.\n\n#### Solution\nAutoSplit divides tests intelligently across nodes at file, module, or scenario level. Previously failed tests are prioritized for faster feedback. This ensures maximum concurrency usage and reduces test flakiness, enabling faster feedback loops for large BDD suites.\n\n```yaml title=\"hyperexecute.yaml\"\nautosplit: true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "matrix",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n#### What Happens If We Don\u2019t Use It\n- Tests may pass on one OS but fail on others\n- Hidden bugs reach end users\n- Manual cross-OS testing required\n\n---\n\n### 3. Environment Variables (NuGet Paths)\n#### Edge Case\nParallel jobs sharing default NuGet caches may cause corrupted packages, race conditions, or build failures, especially in ephemeral environments or low disk space.\n\n#### Solution\nPredefining NuGet paths ensures controlled caching, reliable builds across OSes, and efficient reuse of restored packages.\n\n```yaml title=\"hyperexecute.yaml\"\nenv:\n  NUGET_PACKAGES: '/home/ltuser/.nuget/packages/'\n  NUGET_HTTP_CACHE_PATH: '/home/ltuser/.local/share/NuGet/v3-cache'\n  NUGET_PLUGINS_CACHE_PATH: '/home/ltuser/.local/share/NuGet/plugins-cache'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "- nuget locals all -clear",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n- **dotnet restore** -> Restores NuGet packages\n- **dotnet list ... > packages.txt:** -> Saves package list for caching\n- **dotnet build -c Release:** -> Builds the project in Release mode\n- Optional commands handle permissions or cache clearing\n\n#### What Happens If We Don\u2019t Use It\n- Builds fail or produce outdated DLLs\n- Tests fail due to missing dependencies\n- Manual fixes required\n\n---\n\n### 5. Artifact Upload\n#### Edge Case\nWithout artifacts, failed tests provide no screenshots, logs, or reports for debugging, and outputs can be scattered in parallel executions.\n\n#### Solution\nArtifacts centralize outputs like HTML reports and screenshots, enabling debug, traceability, and audit.\n\n```yaml title=\"hyperexecute.yaml\"\nuploadArtefacts:\n - name: Execution_Report\n   path:\n    - Report/**\n - name: Execution_Screenshots\n   path:\n    - Screenshots/**/**"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "partialReports",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n#### What Happens If We Don\u2019t Use It\n- No centralized reporting\n- Harder to analyze test performance trends\n- Manual effort needed to share results\n  \n---\n\n### 7. Test Discovery\n#### Edge Case\nStatic or incorrect discovery may skip new tests, misdetect test tags, or fail in parallel executions.\n\n#### Solution\nRemote discovery automatically detects new @tags or features, enabling parallelization and reducing manual maintenance.\n\n```yaml title=\"hyperexecute.yaml\"\ntestDiscovery:\n  type: raw\n  mode: remote\n  command: grep -rni 'Features' -e '@' --include=*.feature | sed 's/.*@//'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Solution",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n#### What Happens If We Don\u2019t Use It\n- All tests run every time\n- Slower pipelines\n- Increased build cost\n\n---\n\n### 9. Multiple Tag-Based Test Discovery\n#### Edge Case\nProjects may have diverse tagging strategies, making standard discovery unreliable or incomplete.\n\n#### Solution\n\n```yaml title=\"hyperexecute.yaml\"\ntestDiscovery:\n  type: raw\n  mode: remote\n  shell: bash\n  command: grep -E -w -R -A10 --include='*.feature.cs' ${tagname} AllInOneProject/features | grep 'public void' | cut -d' ' -f2- | awk '{print $3}' | sed 's/()$//'  | sed 's/TestTearDown//g'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Solution",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n#### What Happens If We Don\u2019t Use It\n- Build failures\n- Outdated or incompatible DLLs\n- Test runner crashes\n    \n---\n\n### 11. Private Dependencies (config.nuget)\n#### Edge Case\nProjects depending on private NuGet feeds fail restore if credentials or feeds are not configured.\n\n#### Solution\nConfigures private feeds securely to ensure reliable dependency resolution across environments.\n\n```xml\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<configuration> \n  <packageSources>\n    <add key=\"nuget.org\" value=\"https://api.nuget.org/v3/index.json\" protocolVersion=\"3\" />\n    <add key=\"Testplayer\" value=\"http://testplayer.jfrog.io/tcgplayer/api/nuget/nuget\" />\n  <\/packageSources>\n  <packageSourceCredentials>\n    <Testplayer>\n        <add key=\"Username\" value=\"readonlyuser\" />\n        <add key=\"ClearTextPassword\" value=\"R3dD3ckW1ns\" />\n    <\/Testplayer>\n  <\/packageSourceCredentials>\n<\/configuration>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Solution",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "vstest.console.exe \"GlobalPolaris\\bin\\Debug\\net472\\GlobalPolaris.dll\" /Settings:GlobalPolaris\\RunSettings.runsettings /TestCaseFilter:\"FullyQualifiedName~$test\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Solution",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "& \"C:\\PROGRA~2\\NUnit.org\\nunit-console\\nunit3-console.exe\" \"<dll_path>\" --where=\"cat==$tag\" --explore"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "differentialUpload",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n#### What Happens If We Don\u2019t Use It\n- Slow uploads\n- Wasted resources\n- Longer pipeline durations\n\n---\n\n### 15. Certificate Management for Browser Authentication\n#### Edge Case\nBrowser tests requiring client certificates fail without proper installation.\n\n#### Solution\nInstalls certificates in browser environment for authenticated sessions.\n\n```yaml title=\"hyperexecute.yaml\"\n%HYPEREXECUTE_WORKING_DIR%//Hyperexecute//cert_manager.exe --chrome -i atest089.pfx"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Solution",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n#### What Happens If We Don\u2019t Use It\n- Missing or inaccurate test reporting \n- Dashboard metrics incomplete\n\n---\n\n### 17. Custom SpecFlow Reporting Configuration\n#### Edge Case\nStandard reports may not provide enough detail for complex SpecFlow tests.\n\n#### Solution\nGenerates custom reports with metadata and email notifications.\n\n```yaml title=\"hyperexecute.yaml\"\nreport: true\npartialReports:\n  location: GlobalPolaris/Reports\n  type: html\n  frameworkName: specflow-custom\nemail:\n  to: [\"example@lambdatest.com\"]\nmetaInfo: [\"project-name:Global Polaris Regression\",\"project-env:QA\"]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "commands",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n#### What Happens If We Don\u2019t Use It\n- Tests fail\n- New features not executed\n- Manual DLL verification required\n\n---\n\n### 19. Feature File Level Discovery (Matrix)\n#### Edge Case\nAll tests running together reduce parallelism and rerun flexibility.\n\n#### Solution\nRun each feature individually to enable parallel execution and selective reruns.\n\n```yaml title=\"hyperexecute.yaml\"\nmatrix:\n  featurefile:\n    - \"Features/Login.feature\"\n    - \"Features/Search.feature\"\n    - \"Features/Checkout.feature\"\n\ntest:\n  commands:\n    - nunit3-console.exe \"bin/Release/net6.0/YourProject.dll\" --where \"cat == '$featurefile'\""
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

This guide covers common language-specific use cases for running tests on HyperExecute, organized by framework: **Java + TestNG**, **Python**, and **C#**.

## TestNG Use Cases

This guide outlines common **Java + TestNG** scenarios for running tests on [HyperExecute](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs)

## Q: How can I ensure my tests operate with the appropriate Java version on HyperExecute?

By default, HyperExecute VMs are provisioned with **Java 8**. If your project requires another version (e.g., **11, 15, 18, 22**), you can use the [`runtime`](/support/docs/deep-dive-into-hyperexecute-yaml/#runtime) feature and specify the compatible version in the `hyperexecute.yaml`.

**YAML Example for Java 11**

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
report: true
partialReports:
  location: allure-results/webapp
  type: zip
  frameworkName: allure-zip
```

To view Locally
- Install Allure

<VerifiedTag value="Verified" />

```bash
brew install allure
```

- Open report

<VerifiedTag value="Verified" />

```bash
allure open ./pathDirectory   # Replace pathDirectory with the actual report folder.
```
