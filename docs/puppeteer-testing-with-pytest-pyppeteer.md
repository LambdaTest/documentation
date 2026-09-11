---
id: puppeteer-pytest-pyppeteer
title: Run Puppeteer Tests Using Pytest-Pyppeteer
hide_title: true
sidebar_label: Integrate With Pytest-Pyppeteer
description: Learn how to integrate and run your Puppeteer tests using Pytest-Pyppeteer across multiple browser versions on the TestMu AI platform.
keywords:
  - puppeteer testing with pyppeteer
  - pyppeteer
  - pytest
  - python
  - puppeteer pytest
  - puppeteer mocha
  - automation testing with puppeteer
  - how to use puppeteer for testing
  - test puppeteer
  - puppeteer testing tutorial
  - puppeteer testing testmu ai

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
    "headline": "Run Puppeteer Tests Using Pytest-Pyppeteer",
    "description": "Learn how to integrate and run your Puppeteer tests using Pytest-Pyppeteer across multiple browser versions on the TestMu AI platform.",
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
      "pyppeteer",
      "pytest"
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
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "cd pytest-pyppeteer"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Create a virtual environment using the following commands",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "virtualenv venv"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "source venv/bin/activate"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "poetry install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "pip install - r requirements.txt"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "macOS/Linux",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Your First Pyppeteer Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "pytest --verbose --capture=no -s -n 2 tests/test_pytest_pyppeteer_1.py \\\n    tests/test_pytest_pyppeteer_2.py"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run Pyppeteer Tests In Gitpod",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "eval $(gp env -e LT_USERNAME=******)\neval $(gp env -e LT_ACCESS_KEY=******)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run Pyppeteer Tests In Gitpod",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": " eval $(gp env -e)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The pytest-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "pytest-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Pytest Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/pytest-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/pytest-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Puppeteer Testing With CodeceptJS
* * *

Learn how to run your Puppeteer tests with CodeceptJS across real browsers and operating systems on the <BrandName /> platform. 

## Prerequisites
***

>Note: All the code samples in this documentation can be found in the <BrandName />'s Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/puppeteer-sample/tree/main/pytest-pyppeteer" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

1. Clone the puppeteer-sample repository on your system and navigate to the `pytest-pyppeteer` directory.

<VerifiedTag value="Verified" />

```
cd pytest-pyppeteer
```

2. Create a virtual environment using the following commands:

<VerifiedTag value="Verified" />

```
virtualenv venv
```

<VerifiedTag value="Verified" />

```
source venv/bin/activate
```

3. Install the necessary configurations.

<VerifiedTag value="Verified" />

```
poetry install
```

4. Install the necessary dependencies

<VerifiedTag value="Verified" />

```
pip install - r requirements.txt
```

5. In order to run your pyppeteer tests, you will need to set your <BrandName /> username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>


##### Windows

<VerifiedTag value="Verified" />

```sh
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

##### macOS/Linux

<VerifiedTag value="Verified" />

```sh
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Running Your First Pyppeteer Test

The first test script navigates to DuckduckGo and searches for <BrandName />. The second test script navigates to Brave search and searches for <BrandName />. Both the tests are executed using Chrome (latest) on Windows 11.

Once you are done with the steps 1 thru' 5, you can initiate your first Pyppeteer test on <BrandName />. 

Run the following command on the terminal to run the Pyppeteer tests in parallel.

<VerifiedTag value="Verified" />

```
pytest --verbose --capture=no -s -n 2 tests/test_pytest_pyppeteer_1.py \
    tests/test_pytest_pyppeteer_2.py
```

## View your Pyppeteer test results

The [<BrandName /> Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) is where you can see the results of your Pyppeteer tests after running them on the <BrandName /> platform.

The below screenshot of <BrandName /> Automation Dashboard shows the pyppeteer build on the left and the build sessions associated with the selected build on the right.

<img loading="lazy" src={require('../assets/images/puppeteer-testing/pyppeteer-dashboard.webp').default} alt="Pyppeteer <BrandName /> Dashboard" className="doc_img"/>

On clicking the session name of the respective test, you can view the details of pyppeteer test session that you just executed. For example, the below screenshot shows a test execution details of pyppeteer test like Test Name, Test ID, selected configurations, test logs, basic info, input config, and test session video.

<img loading="lazy" src={require('../assets/images/puppeteer-testing/pyppeteer-test-view.webp').default} alt="Pyppeteer <BrandName /> Test View" className="doc_img"/>

## Run Pyppeteer Tests In Gitpod

Select the button below to try this demo in [Gitpod](https://www.gitpod.io/)

[<img alt="Run in Gitpod" width="200px" align="center" src="https://user-images.githubusercontent.com/70570645/169987363-1408c494-4e2a-4f12-8828-c931eac716b0.png" />](https://gitpod.io/#https://github.com/LambdaTest/pyppeteer-sample)

* After the Gitpod session launches, navigate to the terminal and run the following commands to save your [<BrandName /> Credentials](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile) to Gitpod as environment variables:

<VerifiedTag value="Verified" />

```
eval $(gp env -e LT_USERNAME=******)
eval $(gp env -e LT_ACCESS_KEY=******)
  ```

* Click the following link if you're unsure how to [access your <BrandName /> credentials.](/support/docs/using-environment-variables-for-authentication-credentials/). Also, if you start a new terminal in Gitpod, you have to run the following command to reset environment variables:

<VerifiedTag value="Verified" />

```
 eval $(gp env -e)
```


## Using the Pytest Agent Skill with TestMu AI
***

The [pytest-skill](https://github.com/LambdaTest/agent-skills/tree/main/pytest-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The pytest-skill package includes:

<VerifiedTag value="Verified" />

```
pytest-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing Pytest Agent Skill
***

Install a Pytest Agent Skill using the command below:

<VerifiedTag value="Verified" />

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/pytest-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/pytest-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only pytest-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
