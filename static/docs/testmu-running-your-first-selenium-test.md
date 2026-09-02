# How to Run Your First Selenium Test on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This guide walks you through running a sample Selenium test on the TestMu AI cloud grid using Python and the pytest framework. Clone a sample project, set your credentials, and execute a test.

**Sample repo**
All the code used in this guide is available in the sample repository. Clone it to get started.

 View on GitHub

## Prerequisites

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Python](https://www.python.org/downloads/) 3.7 or later (`pip` is included).

## Step 1: Clone the Sample Project

Pull the sample repo to your local machine and navigate into the project directory.

```bash
git clone https://github.com/LambdaTest/pytest-selenium-sample
cd pytest-selenium-sample
```

## Step 2: Install Dependencies

Install the project's Python dependencies, including Selenium, pytest, and pytest-xdist (for parallel runs), from `requirements.txt`.

```bash
pip install -r requirements.txt
```

## Step 3: Set Your Credentials

Add your TestMu AI credentials as environment variables so the test can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then set them as environment variables:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`$env:LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
$env:LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 4: Configure Your Test Capabilities

Define which browser, version, and OS your test runs on.

The sample keeps its capabilities in `conftest.py`, inside the `driver` fixture that starts the browser session. Here is the configuration from the sample:

```python title="conftest.py"
chrome_options = webdriver.ChromeOptions()
option = {
"platform": "Windows 10",
"version": "latest",
"name": test_name,
"Build": build,
"video": True,
"visual": True,
"network": True,
"console": True
}
chrome_options.set_capability("LT:Options", option)
browser = webdriver.Remote(
command_executor=selenium_endpoint,
options=chrome_options
)
```

Within the fixture, `selenium_endpoint`, `test_name`, and `build` are derived from your credentials, the test parameters, and the `BUILD` environment variable.

You can customize these values to test on any browser, version, or OS. Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities code for your target configuration.

For the full list of supported capabilities, see [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/).

## Step 5: Run the Test

Trigger the test from your terminal. Run a single test, or run in parallel with `pytest-xdist`:

  {`pytest -s tests/lt_sample_todo.py`}

  {`pytest -s -n=2 tests/lt_sample_todo.py`}

## Step 6: View Your Results

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action

## Next Steps

Continue with these related guides:

- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Debugging Options](/support/docs/debugging-options/)
- [Filter Your Selenium Tests](/support/docs/filter-your-selenium-tests/)
- [Selenium Agent Skills](/support/docs/selenium-agent-skills/)
