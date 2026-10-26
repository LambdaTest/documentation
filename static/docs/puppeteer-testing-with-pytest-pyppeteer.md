# How to Run Pyppeteer Tests With pytest on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

If you write browser automation in Python with Pyppeteer, you can run those tests with pytest across real browsers and operating systems on TestMu AI instead of a single local machine. This gives you pytest's fixtures and parallel execution on a browser farm without maintaining local browser binaries. You clone the sample project, set your TestMu AI credentials as environment variables, then run the pytest suite in parallel with the `pytest -n` option.

## Prerequisites

Before you run your first test, clone the sample project, set up a Python environment, and configure the credentials TestMu AI uses to authenticate your session.

**Sample repo**
 View on GitHub

1. Clone the puppeteer-sample repository on your system and navigate to the `pytest-pyppeteer` directory.

```bash
cd pytest-pyppeteer
```

2. Create a virtual environment using the following commands.

```bash
virtualenv venv
```

```bash
source venv/bin/activate
```

3. Install the necessary configurations.

```bash
poetry install
```

4. Install the necessary dependencies.

```bash
pip install -r requirements.txt
```

5. Set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to find them.

Set the credentials for your operating system.

**Windows**

```sh
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```sh
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Running Your First Pyppeteer Test

After you finish the prerequisite steps, you can run your first Pyppeteer test on TestMu AI. The first test script navigates to DuckDuckGo and searches for TestMu AI. The second test script navigates to Brave Search and searches for TestMu AI. Both tests run on Chrome (latest) on Windows 11.

Run the following command in the terminal to run the Pyppeteer tests in parallel.

```bash
pytest --verbose --capture=no -s -n 2 tests/test_pytest_pyppeteer_1.py \
    tests/test_pytest_pyppeteer_2.py
```

## View Your Pyppeteer Test Results

Open the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see the results of your Pyppeteer tests.

## Related Puppeteer Guides

Continue with the guides below to configure and scale your Puppeteer runs on TestMu AI.

* [Run your first Puppeteer test on TestMu AI](/support/docs/puppeteer-testing/)
* [Explore the Puppeteer agent skills](/support/docs/puppeteer-agent-skills/)
* [Set up Puppeteer test execution](/support/docs/puppeteer-test-execution-setup/)
