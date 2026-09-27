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
import VerifiedTag from '@site/src/component/verifiedTag';

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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/puppeteer-testing-with-pytest-pyppeteer/"
    },
    "headline": "How to Run Pyppeteer Tests With pytest on TestMu AI",
    "description": "Run Pyppeteer tests with pytest across real browsers and operating systems on TestMu AI, including setup, parallel execution, and results.",
    "url": "https://www.testmuai.com/support/docs/puppeteer-testing-with-pytest-pyppeteer/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "puppeteer testing with pyppeteer",
      "pyppeteer pytest testing",
      "run pyppeteer tests on testmu ai",
      "pyppeteer python automation",
      "pyppeteer parallel execution"
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
        "name": "Navigate to the pytest-pyppeteer directory",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "cd pytest-pyppeteer"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Create a virtual environment",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "virtualenv venv"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Activate the virtual environment",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "source venv/bin/activate"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the necessary configurations",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "poetry install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the necessary dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pip install -r requirements.txt"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set credentials on Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set credentials on macOS/Linux",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Your First Pyppeteer Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pytest --verbose --capture=no -s -n 2 tests/test_pytest_pyppeteer_1.py \\\n    tests/test_pytest_pyppeteer_2.py"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# How to Run Pyppeteer Tests With pytest on TestMu AI
***

If you write browser automation in Python with Pyppeteer, you can run those tests with pytest across real browsers and operating systems on TestMu AI instead of a single local machine. This gives you pytest's fixtures and parallel execution on a browser farm without maintaining local browser binaries. You clone the sample project, set your TestMu AI credentials as environment variables, then run the pytest suite in parallel with the `pytest -n` option.

## Prerequisites
***

Before you run your first test, clone the sample project, set up a Python environment, and configure the credentials TestMu AI uses to authenticate your session.

:::tip Sample repo
<a href="https://github.com/LambdaTest/puppeteer-sample/tree/main/pytest-pyppeteer" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="TestMu AI pytest-pyppeteer sample project on GitHub"  className="doc_img"/> View on GitHub</a>
:::

1. Clone the puppeteer-sample repository on your system and navigate to the `pytest-pyppeteer` directory.

<VerifiedTag value="Verified" />

```bash
cd pytest-pyppeteer
```

2. Create a virtual environment using the following commands.

<VerifiedTag value="Verified" />

```bash
virtualenv venv
```

<VerifiedTag value="Verified" />

```bash
source venv/bin/activate
```

3. Install the necessary configurations.

<VerifiedTag value="Verified" />

```bash
poetry install
```

4. Install the necessary dependencies.

<VerifiedTag value="Verified" />

```bash
pip install -r requirements.txt
```

5. Set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to find them.

Set the credentials for your operating system.

**Windows**

<VerifiedTag value="Verified" />

```sh
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

<VerifiedTag value="Verified" />

```sh
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Running Your First Pyppeteer Test
***

After you finish the prerequisite steps, you can run your first Pyppeteer test on TestMu AI. The first test script navigates to DuckDuckGo and searches for TestMu AI. The second test script navigates to Brave Search and searches for TestMu AI. Both tests run on Chrome (latest) on Windows 11.

Run the following command in the terminal to run the Pyppeteer tests in parallel.

<VerifiedTag value="Verified" />

```bash
pytest --verbose --capture=no -s -n 2 tests/test_pytest_pyppeteer_1.py \
    tests/test_pytest_pyppeteer_2.py
```

## View Your Pyppeteer Test Results
***

Open the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see the results of your Pyppeteer tests.

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
