# Puppeteer Testing With CodeceptJS

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Learn how to run your Puppeteer tests with CodeceptJS across real browsers and operating systems on the TestMu AI platform.

## Prerequisites

>Note: All the code samples in this documentation can be found in the TestMu AI's Repository on GitHub. You can either download or clone the repository to quickly run your tests.
 View on GitHub

1. Clone the puppeteer-sample repository on your system and navigate to the `pytest-pyppeteer` directory.

```
cd pytest-pyppeteer
```

2. Create a virtual environment using the following commands:

```
virtualenv venv
```

```
source venv/bin/activate
```

3. Install the necessary configurations.

```
poetry install
```

4. Install the necessary dependencies

```
pip install - r requirements.txt
```

5. In order to run your pyppeteer tests, you will need to set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

##### Windows

```sh
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

##### macOS/Linux

```sh
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Running Your First Pyppeteer Test

The first test script navigates to DuckduckGo and searches for TestMu AI. The second test script navigates to Brave search and searches for TestMu AI. Both the tests are executed using Chrome (latest) on Windows 11.

Once you are done with the steps 1 thru' 5, you can initiate your first Pyppeteer test on TestMu AI.

Run the following command on the terminal to run the Pyppeteer tests in parallel.

```
pytest --verbose --capture=no -s -n 2 tests/test_pytest_pyppeteer_1.py \
tests/test_pytest_pyppeteer_2.py
```

## View your Pyppeteer test results

The [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) is where you can see the results of your Pyppeteer tests after running them on the TestMu AI platform.
