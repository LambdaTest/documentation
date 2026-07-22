# Python with Playwright: Running Your First Test

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Learn how to use Playwright with Python to automate web application testing across 50+ real browsers and operating systems on TestMu AI cloud platform.

## Prerequisites

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or clone the code sample for the Playwright Python from the TestMu AI GitHub repository to run the tests.

 View on GitHub

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-python
```

2. Install the Python dependencies.

```
pip install -r requirements.txt
```

3. A TestMu AI Username and Access key. You can get it from your TestMu AI Profile section. Don't have an account, sign up for free.

4. To run Playwright tests, set your TestMu AI Username and Access key in the Environment Variables.

## Run your Playwright tests with Python

Navigate to the `playwright_sample.py` file in the `playwright-python` directory.

```py
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

Pass the below command in the terminal to run the test.

```js
npm run test
```

## View your test results

Go to the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright Python test results.

To generate Playwright tests with AI coding assistants, see [Run Tests With Agent Skills](/support/docs/playwright-agent-skills/).
