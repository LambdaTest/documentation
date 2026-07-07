# Selenium With TestCafe

Run TestCafe tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**npm package**
Visit the TestMu AI [npm package for TestCafe](https://www.npmjs.com/package/testcafe-browser-provider-lambdatest) for full details.

## Prerequisites

Complete these steps before integrating TestCafe with TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Add the dependency `"testcafe": ""` in your `package.json` file.

## Step 1: Clone the Sample Project

Install the TestMu AI npm plugin for TestCafe.

``` js
npm install testcafe-browser-provider-lambdatest
```

## Step 2: Set Your Credentials

Set your TestMu AI username and access key as environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Configure your tests using environment variables for resolution, build name, and other settings.

| VARIABLE            | DESCRIPTION                                                                                                                                                                                                                                                                          |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LT_TEST_NAME        | Specify a name for your test on TestMu AI Selenium Grid.                                                                                                                                                                                                                          |
| LT_BUILD            | Specify a name for your build on TestMu AI Selenium Grid.                                                                                                                                                                                                                         |
| LT_CAPABILITY_PATH  | Specify the path of a JSON file that declares additional Desired Capabilities.  `     "Chrome@63.0:Windows 8.1" : {`             `"network" : true,`         `"visual" : true,`         `"timezone" : "UTC+11:00"`     `}`  Here, ``Chrome@63.0:Windows 8.1`` represents browser alias. |
| LT_RESOLUTION       | Perform cross browser testing on a specific screen resolution in the &#36;&lbrace;width&rbrace;x&#36;&lbrace;height&rbrace; format.                                                                                                                                                                                   |
| LT_LOGFILE          | View detailed logs of your automation script execution. Provide a specific path to this file. If you don't provide a path, the logs save in your present working directory by the filename: tunnel.log.                                                            |
| LT_VERBOSE          | Set flag for verbose to either true or false.                                                                                                                                                                                                                                         |
| LT_PROXY_HOST       | A required variable if you perform cross browser testing through proxy. Declare the hostname/IP of proxy.                                                                                                                                |
| LT_PROXY_PORT       | Port of the proxy. Default value for proxy port is 3128.                                                                                                                                                                                                                       |
| LT_PROXY_USER       | Username for connecting to proxy. Required for using 'proxypass'.                                                                                                                                                                                                             |
| LT_PROXY_PASS       | Password for the USERNAME option.                                                                                                                                                                                                                                                    |
| LT_TUNNEL_NAME      | Human readable tunnel identifier (Name of the tunnel).                                                                                                                                                                                                                               |
| LT_DIR              | Path of the local folder you want to test.                                                                                                                                                                                                                                           |
| LT_SELENIUM_VERSION | Browser specific capability.                                                                                                                                                                                                                                                          |
| LT_CONSOLE          | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_NETWORK          | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_VIDEO            | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_SCREENSHOT       | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_TIMEZONE         | Configure tests to run on a custom time zone.                                                                                                                                                                                                                                        |
| LT_TUNNEL_NUMBER       |  Number of tunnels to spawn at a time.                                                                                                                                                                                                                                                           |
| LOAD_BALANCED_MODE       | Load Balanced Mode in TestCafe.                                                                                                                                                                                                                                                         |

Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).

## Step 4: Run the Test

Execute the test using the following command.

**Single test:**
``` js
$ testcafe "lambdatest:Chrome@74.0:Windows 8" 'path/to/test/file.js'
```

**Parallel tests:**
``` js
$ testcafe "lambdatest:Chrome@74.0:Windows 8","lambdatest:Chrome@75.0:Windows 10" "path/to/test/file.js"
```

**Using the API:**
``` js
testCafe
.createRunner()
.src('path/to/test/file.js')
.browsers('lambdatest:Chrome@74.0:Windows 8')
.run();
```

To list all available browser aliases:
``` js
testcafe -b lambdatest
```

## Step 5: View Your Results

After running the test, view your results on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

The dashboard provides:
- Video recordings of each test session
- Screenshots captured at each step
- Console logs from the browser
- Network logs for debugging
- Detailed command logs

## Run TestCafe Tests Using Agent Skills

Use AI coding assistants to generate and run TestCafe tests with the TestMu AI Agent Skill.

The [testcafe-skill](https://github.com/LambdaTest/agent-skills/tree/main/testcafe-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/testcafe-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/testcafe-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
