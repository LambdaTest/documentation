---
id: hyperexecute-python-use-cases
title: HyperExecute Python Use Cases
sidebar_label: Python Use Cases
description: Explore Python test automation use cases on HyperExecute with PyTest, Behave, and Robot Framework to streamline your daily testing pipelines.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - TestMu AI Projects
  - Python
  - Behave
  - Robot
url: https://www.testmuai.com/support/docs/hyperexecute-python-use-cases/
site_name: TestMu AI
slug: hyperexecute-python-use-cases/
canonical: https://www.testmuai.com/support/docs/hyperexecute-python-use-cases/
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
          "name": "HyperExecute Python Use Cases",
          "item": `${BRAND_URL}/support/docs/hyperexecute-python-use-cases/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-python-use-cases/"
    },
    "headline": "HyperExecute Python Use Cases",
    "description": "Explore Python test automation use cases on HyperExecute with PyTest, Behave, and Robot Framework to streamline your daily testing pipelines.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-python-use-cases/",
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
        "text": "\n## 3. Fixing Missing requirements.txt Errors\nIf your pipeline fails with:\n> **ERROR:** Could not open requirements file: [Errno 2] No such file or directory: 'requirements.txt'\n\nIt means that the `requirements.txt` file might be missing or ignored in .gitignore.\n\n**Solution :** Ensure the file exists in the project root. Remove or comment out any requirements.txt entry from .gitignore. For this issue, ther are no YAML change required. This is a file management fix. However, verify that the command below correctly references the existing file name.\n\n```bash\npip install -r requirements.txt --cache-dir CacheDir"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "pre",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n## 6. Building Projects with Public and Private Registries\n### Case 1: Public Registry Installation\nIf all dependencies are public, install them directly:\n\n```bash\npip3 install -r requirements.txt --cache-dir CacheDir"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "pre",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Case 2: Private Registry Installation\nWhen using a private registry, authentication is required. Use proxy variables and authorization tokens to install packages securely.\n\n```bash\npip3 install --proxy http://$LT_PROXY_HOST:$LT_PROXY_PORT \\\n  --header \"Authorization: Bearer $PRIVATE_REGISTRY_TOKEN\" \\\n  -r requirements.txt"
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
        "text": "\n## 9. Discovering Tests Dynamically\n\n- List all feature files containing a specific tag (e.g., @smoke):\n\n```bash\ngrep -rl \"@smoke\" features/*.feature"
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
        "text": "\n## 10. Generating JSON Reports with Behave\nTo generate JSON reports for your test execution:\n\n```bash\nbehave -f json.pretty -o reports/test_report.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "post",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n## 11. Dynamically Assigning Artifact Names\nTo dynamically name artifacts using environment variables, define them in your YAML configuration.\n\n**YAML Translation :**\n\n```yaml title=\"hyperexecute.yaml\"\nuploadArtefacts:\n  - name: \"${abcd}\"\n    path:\n      - reports/**"
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
        "text": "\n## 14. Different Ways to Execute Tests in Pytest via CLI\n### Case 1: Run Tests in a Specific Directory or File\n\n```bash\npytest path/to/test_directory/\npytest path/to/test_file.py"
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
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
This guide covers the most common real-world scenarios and troubleshooting cases when running **Python**, **Pytest**, and **Behave** test frameworks on **<BrandName /> HyperExecute**. Each section describes a use case, its root cause, and the precise YAML translation required to configure or fix the issue within your `hyperexecute.yaml`.

## 1. Handling Python Version Compatibility Issues
Sometimes, test scripts fail due to Python version incompatibility. For example:

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
runtime:
  - language: python
    version: "3.9"
```

## 2. Ensuring PIP Version Compatibility
Certain packages require a minimum version of PIP to install successfully. An outdated PIP version may cause the following error:
> **ERROR :** You must install pip 21.0 or later to install this package.

**Solution :** Upgrade PIP before installing dependencies.

<VerifiedTag value="Verified" />

```bash
python -m pip install --upgrade pip
```

If you are using Python 3:

<VerifiedTag value="Verified" />

```bash
python3 -m pip install --upgrade pip
```

**YAML Translation :**

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
pre:
  - python3 -m pip install --upgrade pip
```

## 3. Fixing Missing requirements.txt Errors
If your pipeline fails with:
> **ERROR:** Could not open requirements file: [Errno 2] No such file or directory: 'requirements.txt'

It means that the `requirements.txt` file might be missing or ignored in .gitignore.

**Solution :** Ensure the file exists in the project root. Remove or comment out any requirements.txt entry from .gitignore. For this issue, ther are no YAML change required. This is a file management fix. However, verify that the command below correctly references the existing file name.

<VerifiedTag value="Verified" />

```bash
pip install -r requirements.txt --cache-dir CacheDir
```

## 4. Restoring Missing .env Files
When environment variables are not set, tests may fail due to missing credentials or configuration values because `.env` files are commonly excluded in `.gitignore` for security. If ignored, they aren’t uploaded to HyperExecute, and environment variables remain unset.

**Solution :** Ensure that required `.env` files are not ignored in `.gitignore`. If sensitive credentials exist, use HyperExecute Secrets or Environment Variables instead of exposing them in `.env` files.

## 5. Optimizing Package Caching for Faster Jobs
If your pre step installs dependencies every time, your caching configuration might be incorrect.

**Common Causes :**
- Invalid `cacheKey` syntax.
- Incorrect filename in cache reference.
- Missing `--cache-dir` argument.

**Solution :** Use proper syntax, ensure file naming consistency, and define a cache directory.

YAML Translation:

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
cacheKey: '{{ checksum "requirements.txt" }}'
cacheDirectories:
  - CacheDir
pre:
  - pip install -r requirements.txt --cache-dir CacheDir
```

## 6. Building Projects with Public and Private Registries
### Case 1: Public Registry Installation
If all dependencies are public, install them directly:

<VerifiedTag value="Verified" />

```bash
pip3 install -r requirements.txt --cache-dir CacheDir
```

**YAML Translation :**

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
pre:
  - pip3 install -r requirements.txt --cache-dir CacheDir
```

### Case 2: Private Registry Installation
When using a private registry, authentication is required. Use proxy variables and authorization tokens to install packages securely.

<VerifiedTag value="Verified" />

```bash
pip3 install --proxy http://$LT_PROXY_HOST:$LT_PROXY_PORT \
  --header "Authorization: Bearer $PRIVATE_REGISTRY_TOKEN" \
  -r requirements.txt
```

**YAML Translation :**

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
pre:
  - pip3 install --proxy http://$LT_PROXY_HOST:$LT_PROXY_PORT \
      --header "Authorization: Bearer $PRIVATE_REGISTRY_TOKEN" \
      -r requirements.txt
```

**Sample `requirements.txt` file :**

<VerifiedTag value="Verified" />

```text
--extra-index-url https://your-private-registry.com/simple
--trusted-host your-private-registry.com
your-private-package==1.0.0
another-package==2.0.0
```

**Error Troubleshooting :**
- Verify `$LT_PROXY_HOST` and `$LT_PROXY_PORT `values.
- Confirm `$PRIVATE_REGISTRY_TOKEN` is valid.

## 7. Configuring Database Connections
When connecting to a database during test runs, you may encounter:

> **ConnectionRefusedError:** connect ECONNREFUSED 127.0.0.1:3306

**Solution :** Expose the database service using the `--expose` flag in your YAML configuration.

**YAML Translation :**

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
args:
  - "--expose mysql1:localhost:3309"
  - "--expose mysql2:localhost:3307"
```

**Sample Connection Code :**

<VerifiedTag value="Verified" />

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

## 8. Running Tests in Behave and Pytest
To execute tests based on substrings or tags:

**Example Commands :**

<VerifiedTag value="Verified" />

```bash
pytest -k "TestAdvanceBoy"
behave -t @smoke
```

**YAML Translation :**

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
testRunnerCommand: pytest -k "TestAdvanceBoy"
# or
testRunnerCommand: behave -t @smoke
```

To execute an entire feature file:

<VerifiedTag value="Verified" />

```bash
behave -f feature_path/sample.feature
```

**YAML Translation :**

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
testRunnerCommand: behave -f feature_path/sample.feature
```

## 9. Discovering Tests Dynamically

- List all feature files containing a specific tag (e.g., @smoke):

<VerifiedTag value="Verified" />

```bash
grep -rl "@smoke" features/*.feature
```

**YAML Translation :**

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
testDiscovery:
  type: raw
  command: grep -rl "@smoke" features/*.feature
```

- List all scenarios under that tag :

<VerifiedTag value="Verified" />

```bash
grep -rH -A 3 "@smoke" features/*.feature | grep -i "Scenario" | cut -d ":" -f 2-
```

**YAML Translation :**

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
testDiscovery:
  type: raw
  command: grep -rH -A 3 "@smoke" features/*.feature | grep -i "Scenario" | cut -d ":" -f 2-
```

## 10. Generating JSON Reports with Behave
To generate JSON reports for your test execution:

<VerifiedTag value="Verified" />

```bash
behave -f json.pretty -o reports/test_report.json
```

**YAML Translation :**

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
post:
  - behave -f json.pretty -o reports/test_report.json
```

## 11. Dynamically Assigning Artifact Names
To dynamically name artifacts using environment variables, define them in your YAML configuration.

**YAML Translation :**

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
uploadArtefacts:
  - name: "${abcd}"
    path:
      - reports/**
```

Pass variable values through CLI during job execution:

<VerifiedTag value="Verified" />

```bash
./hyperexecute -u <your_username> -k <your_access_key> -i <relative_path_of_config> --vars "abcd=Folder"
```
If abcd=Folder, the uploaded artifact will appear as Folder on the HyperExecute dashboard.

## 12. Using a Cache Directory for Package Installation
To enable caching for faster dependency installation:

<VerifiedTag value="Verified" />

```bash
pip3 install -r requirements.txt --cache-dir CacheDir
```

This ensures packages are stored and reused in subsequent runs, reducing job setup time.

## 13. Monitoring Tunnel Health and Auto-Retry
When running automated tests in HyperExecute, tunnel connections may drop or become unstable, leading to test failures.

**Scenario/Use Case:**  
- Tunnel may drop due to network instability, firewall restrictions, or internal server issues.  
- Goal: Continuously monitor tunnel health and automatically retry without manual intervention.

**Solution**  
Use the `checkTunnelOnFailure` parameter in your YAML configuration. This ensures HyperExecute automatically retries the tunnel if it fails during test execution.

**YAML Translation:**

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
checkTunnelOnFailure: true
```

## 14. Different Ways to Execute Tests in Pytest via CLI
### Case 1: Run Tests in a Specific Directory or File

<VerifiedTag value="Verified" />

```bash
pytest path/to/test_directory/
pytest path/to/test_file.py
```

### Case 2: Run a Specific Test Function Within a File

<VerifiedTag value="Verified" />

```bash
pytest path/to/test_file.py::test_function_name
```

### Case 3: Run Tests Matching a Substring or Keyword

<VerifiedTag value="Verified" />

```bash
pytest -k "test_keyword"
```

**Example :**

<VerifiedTag value="Verified" />

```bash
pytest -k "login"
```

## 15. Debugging in Pytest with Detailed Logs

**Solution :** Use the `--log-cli-level=DEBUG` flag to capture debug-level logs.

**Example Python Test :**

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```bash
DEBUG:root:Value is 42, running debug checks
DEBUG:root:This is a debug message
INFO:root:Test info message
WARNING:root:Test warning message
ERROR:root:Test error message
```

## 16. Automating Screenshot Download and PDF Generation from <BrandName />
During native app automation, screenshots captured per session ID can be retrieved using:

<VerifiedTag value="Verified" />

```bash
curl -X GET "https://mobile-api.lambdatest.com/mobile-automation/api/v1/sessions/${session_id}/screenshots" \
     -H "accept: application/json" \
     -H "Authorization: Basic <auth>"
```

**Problem :** Manually downloading, extracting, and arranging screenshots into a PDF is time-consuming.

**Solution :** Use the <BrandName /> Screenshot Downloader & PDF Generator CLI.

- **Installation :**

<VerifiedTag value="Verified" />

```bash
npm install -g lambdatest-screenshot-pdf
```

- **Usage :**

<VerifiedTag value="Verified" />

```bash
AUTH_HEADER="Basic your_encoded_auth_string" lambdatest-screenshot-pdf <session_id> --output <output_directory>
```

- **Example :**

<VerifiedTag value="Verified" />

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

## 17. Base YAML Configuration for Pytest on Windows with Autosplit

Example hyperexecute.yaml:

<VerifiedTag value="Verified" />

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
