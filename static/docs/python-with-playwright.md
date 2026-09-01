# How to Run Playwright Tests With Python on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your Python Playwright tests on the TestMu AI cloud grid to reach 50+ real desktop browsers and operating systems without maintaining local infrastructure. You connect Playwright over a CDP WebSocket, pass your capabilities, then run the sample script.

## Prerequisites

Complete these before running the test below.

1. A TestMu AI **Username** and **Access Key**. Get them from your TestMu AI Profile section. Don't have an account? Sign up for free.

2. [Python](https://www.python.org/downloads/) installed, along with the Playwright Python package.
3. Clone the sample repository. The Python sample lives in its own subdirectory.

**Sample repo**
 View on GitHub

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-python
```

4. Install the Python dependencies from the sample directory:

```bash
pip install -r requirements.txt
```

## Set Your Credentials

Your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## How the Sample Test Works

The test builds a `capabilities` dictionary that carries the browser, version, platform, and your `LT:Options`, then connects Playwright to the grid at `wss://cdp.lambdatest.com/playwright`. The credentials come from the `LT_USERNAME` and `LT_ACCESS_KEY` environment variables you set above, and `set_test_status` reports whether the assertion passed.

```py
capabilities = {
'browserName': 'Chrome',  # Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
'browserVersion': 'latest',
'LT:Options': {
'platform': 'Windows 10',
'user': os.getenv('LT_USERNAME'),
'accessKey': os.getenv('LT_ACCESS_KEY'),
}
}
```

The sample script wraps this connection, runs a search, then calls `set_test_status` to mark the result, as the steps below show.

## Run the Test With Python

The sample script connects Playwright to the grid, opens a page, runs a search, and reports the test status back to TestMu AI. You can use your own project, or the sample below.

1. Open the `playwright_sample.py` file in the `playwright-python` directory. It builds the capabilities, connects to the grid, and sets the test status:

```py title="playwright_sample.py"
import json
import os
import urllib
import subprocess

from playwright.sync_api import sync_playwright

capabilities = {
'browserName': 'Chrome',  # Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
'browserVersion': 'latest',
'LT:Options': {
'platform': 'Windows 10',
'build': 'Playwright Python Build',
'name': 'Playwright Python Test',
'user': os.getenv('LT_USERNAME'),
'accessKey': os.getenv('LT_ACCESS_KEY'),
'network': True,
'video': True,
'console': True,
'tunnel': False,  # Add tunnel configuration if testing locally hosted webpage
'tunnelName': '',  # Optional
'geoLocation': '', # country code can be fetched from https://www.lambdatest.com/capabilities-generator/
}
}

def run(playwright):
playwrightVersion = str(subprocess.getoutput('playwright --version')).strip().split(" ")[1]
capabilities['LT:Options']['playwrightClientVersion'] = playwrightVersion

lt_cdp_url = 'wss://cdp.lambdatest.com/playwright?capabilities=' + urllib.parse.quote(
json.dumps(capabilities))
browser = playwright.chromium.connect(lt_cdp_url)
page = browser.new_page()
try:
page.goto("https://www.bing.com/")
page.fill("[aria-label='Enter your search term'] > input", 'LambdaTest')
page.keyboard.press("Enter")
page.wait_for_timeout(1000)

title = page.title()

print("Title:: ", title)

if "LambdaTest" in title:
set_test_status(page, "passed", "Title matched")
else:
set_test_status(page, "failed", "Title did not match")
except Exception as err:
print("Error:: ", err)
set_test_status(page, "failed", str(err))

browser.close()

def set_test_status(page, status, remark):
page.evaluate("_ => {}",
"lambdatest_action: {\"action\": \"setTestStatus\", \"arguments\": {\"status\":\"" + status + "\", \"remark\": \"" + remark + "\"}}");

with sync_playwright() as playwright:
run(playwright)

```

2. Run the test from the terminal:

```bash
python playwright_sample.py
```

## View Your Results

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms the test passed.

## Related Playwright Guides

Continue with these related guides:

- [Configure Playwright Capabilities for the TestMu AI Grid](/support/docs/capabilities-for-playwright/)
- [Get Started With Playwright Testing on TestMu AI](/support/docs/playwright-testing/)
- [Set Up Playwright Test Execution on TestMu AI](/support/docs/playwright-test-execution-setup/)
