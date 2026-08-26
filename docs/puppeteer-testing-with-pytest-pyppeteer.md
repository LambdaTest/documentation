---
id: puppeteer-pytest-pyppeteer
title: How to Run Pyppeteer Tests With pytest on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Pyppeteer"
description: Run Pyppeteer tests with pytest across real browsers and operating systems on TestMu AI, including setup, parallel execution, and results.
keywords:
  - puppeteer testing with pyppeteer
  - pyppeteer pytest testing
  - run pyppeteer tests on testmu ai
  - pyppeteer python automation
  - pyppeteer parallel execution

url: https://www.testmuai.com/support/docs/puppeteer-testing-with-pytest-pyppeteer/
site_name: TestMu AI
slug: puppeteer-testing-with-pytest-pyppeteer/
canonical: https://www.testmuai.com/support/docs/puppeteer-testing-with-pytest-pyppeteer/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Puppeteer Testing With Pytest-Pyppeteer",
          "item": `${BRAND_URL}/support/docs/puppeteer-testing-with-pytest-pyppeteer/`
        }]
      })
    }}
></script>

# How to Run Pyppeteer Tests With pytest on TestMu AI
***

If you write browser automation in Python with Pyppeteer, you can run those tests with pytest across real browsers and operating systems on TestMu AI instead of a single local machine. This gives you pytest's fixtures and parallel execution on a browser farm without maintaining local browser binaries. You clone the sample project, set your TestMu AI credentials as environment variables, then run the pytest suite in parallel with the `pytest -n` option.

## Prerequisites
***

Before you run your first test, clone the sample project, set up a Python environment, and configure the credentials TestMu AI uses to authenticate your session.

:::note
All the code samples in this documentation are available in the TestMu AI repository on GitHub. Download or clone the repository to run your tests quickly.
:::

<a href="https://github.com/LambdaTest/puppeteer-sample/tree/main/pytest-pyppeteer" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="TestMu AI pytest-pyppeteer sample project on GitHub"  className="doc_img"/> View on GitHub</a>

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

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Access Key button at the top-right of the TestMu AI Automation Dashboard" width="1444" height="703"  className="doc_img"/>

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
***

After you finish the prerequisite steps, you can run your first Pyppeteer test on TestMu AI. The first test script navigates to DuckDuckGo and searches for TestMu AI. The second test script navigates to Brave Search and searches for TestMu AI. Both tests run on Chrome (latest) on Windows 11.

Run the following command in the terminal to run the Pyppeteer tests in parallel.

```bash
pytest --verbose --capture=no -s -n 2 tests/test_pytest_pyppeteer_1.py \
    tests/test_pytest_pyppeteer_2.py
```

## View Your Pyppeteer Test Results
***

After the tests run, open the TestMu AI Automation Dashboard to review each session. The dashboard shows the Pyppeteer build on the left and the build sessions associated with the selected build on the right.

Open the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see the results of your Pyppeteer tests.

<img loading="lazy" src={require('../assets/images/puppeteer-testing/pyppeteer-dashboard.webp').default} alt="TestMu AI Automation Dashboard showing the Pyppeteer build and its associated sessions" className="doc_img"/>

Click the session name of a test to view the details of the Pyppeteer session you executed. The session view shows the Test Name, Test ID, selected configurations, test logs, basic info, input config, and the test session video.

<img loading="lazy" src={require('../assets/images/puppeteer-testing/pyppeteer-test-view.webp').default} alt="TestMu AI test session view showing Pyppeteer test name, ID, configurations, logs, and session video" className="doc_img"/>

## Run Pyppeteer Tests in Gitpod
***

You can run this demo in a browser-based workspace without setting up Python locally. Select the button below to open the project in [Gitpod](https://www.gitpod.io/).

[<img alt="Run in Gitpod" width="200px" align="center" src="https://user-images.githubusercontent.com/70570645/169987363-1408c494-4e2a-4f12-8828-c931eac716b0.png" />](https://gitpod.io/#https://github.com/LambdaTest/pyppeteer-sample)

* After the Gitpod session launches, navigate to the terminal and run the following commands to save your [TestMu AI credentials](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile) to Gitpod as environment variables.

```bash
eval $(gp env -e LT_USERNAME=******)
eval $(gp env -e LT_ACCESS_KEY=******)
```

* If you are unsure where to find them, see [how to access your TestMu AI credentials](/support/docs/using-environment-variables-for-authentication-credentials/). If you start a new terminal in Gitpod, run the following command to reset the environment variables.

```bash
eval $(gp env -e)
```

## Using the Pytest Agent Skill With TestMu AI
***

The Pytest Agent Skill helps AI coding assistants generate production-ready pytest automation for TestMu AI. It is part of the [TestMu AI agent skills collection](https://github.com/LambdaTest/agent-skills/), and you can read the [Pytest Agent Skill reference on GitHub](https://github.com/LambdaTest/agent-skills/tree/main/pytest-skill).

The pytest-skill package includes the following files:

```text
pytest-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for the following areas:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration

### Installing the Pytest Agent Skill
***

Clone the agent skills repository and copy the Pytest Agent Skill into your tool's skills directory.

```bash
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/pytest-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/pytest-skill .cursor/skills/
```

:::note
To install all available framework skills instead of only the Pytest Agent Skill, clone the repository directly into your tool's skills directory (for example, `.claude/skills/`, `.cursor/skills/`, `.gemini/skills/`, or `.agent/skills/`).
:::

## Related Puppeteer Guides
***

Continue with the guides below to configure and scale your Puppeteer runs on TestMu AI.

* [Run your first Puppeteer test on TestMu AI](/support/docs/puppeteer-testing/)
* [Explore the Puppeteer agent skills](/support/docs/puppeteer-agent-skills/)
* [Set up Puppeteer test execution](/support/docs/puppeteer-test-execution-setup/)
