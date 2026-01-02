---
id: hyperexecute-python-use-cases
title: HyperExecute Python Use Cases
sidebar_label: Python Use Cases
description: Discover the power of HyperExecute connected workflows and how testers or developers can leverage it for their daily autoamtion testing of their organization features.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - TestMu AI Projects
  - Python
  - Behave
  - Robot
url: https://www.testmu.ai/support/docs/hyperexecute-python-use-cases
site_name: LambdaTest
slug: hyperexecute-python-use-cases
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
          "name": "HyperExecute Python Use Cases",
          "item": `${BRAND_URL}/support/docs/hyperexecute-python-use-cases/`
        }]
      })
    }}
></script>
This guide covers the most common real-world scenarios and troubleshooting cases when running **Python**, **Pytest**, and **Behave** test frameworks on **<BrandName /> HyperExecute**. Each section describes a use case, its root cause, and the precise YAML translation required to configure or fix the issue within your `hyperexecute.yaml`.

## 1. Handling Python Version Compatibility Issues
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

## 2. Ensuring PIP Version Compatibility
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

## 3. Fixing Missing requirements.txt Errors
If your pipeline fails with:
> **ERROR:** Could not open requirements file: [Errno 2] No such file or directory: 'requirements.txt'

It means that the `requirements.txt` file might be missing or ignored in .gitignore.

**Solution :** Ensure the file exists in the project root. Remove or comment out any requirements.txt entry from .gitignore. For this issue, ther are no YAML change required — this is a file management fix. However, verify that the command below correctly references the existing file name.

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

```bash
pip3 install -r requirements.txt --cache-dir CacheDir
```

**YAML Translation :**

```yaml title="hyperexecute.yaml"
pre:
  - pip3 install -r requirements.txt --cache-dir CacheDir
```

### Case 2: Private Registry Installation
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

## 7. Configuring Database Connections
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

## 8. Running Tests in Behave and Pytest
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

## 9. Discovering Tests Dynamically

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

## 10. Generating JSON Reports with Behave
To generate JSON reports for your test execution:

```bash
behave -f json.pretty -o reports/test_report.json
```

**YAML Translation :**

```yaml title="hyperexecute.yaml"
post:
  - behave -f json.pretty -o reports/test_report.json
```

## 11. Dynamically Assigning Artifact Names
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

## 12. Using a Cache Directory for Package Installation
To enable caching for faster dependency installation:

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

```yaml title="hyperexecute.yaml"
checkTunnelOnFailure: true
```

## 14. Different Ways to Execute Tests in Pytest via CLI
### Case 1: Run Tests in a Specific Directory or File

```bash
pytest path/to/test_directory/
pytest path/to/test_file.py
```

### Case 2: Run a Specific Test Function Within a File
```bash
pytest path/to/test_file.py::test_function_name
```

### Case 3: Run Tests Matching a Substring or Keyword
```bash
pytest -k "test_keyword"
```

**Example :**
```bash
pytest -k "login"
```

## 15. Debugging in Pytest with Detailed Logs

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

## 16. Automating Screenshot Download and PDF Generation from <BrandName />
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

## 17. Base YAML Configuration for Pytest on Windows with Autosplit

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
  mode: dynamic
  command: grep -nri 'class' tests -ir --include=\*.py | sed 's/:.*//'

testRunnerCommand: pytest -s --verbose $test

jobLabel: [selenium-pytest, win, autosplit]
```