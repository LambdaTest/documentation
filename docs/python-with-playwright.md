---
id: python-with-playwright
title: Run your Python automation scripts with Playwright on TestMu AI
hide_title: true
sidebar_label: Python
description: Run your Python automation scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.
keywords:
  - python playwright
  - python automation testing
  - playwright python
  - playwright python testing guide
  - python playwright framework

url: https://www.testmuai.com/support/docs/python-with-playwright/
site_name: TestMu AI
slug: python-with-playwright/
canonical: https://www.testmuai.com/support/docs/python-with-playwright/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';


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
          "name": "Python with Playwright",
          "item": `${BRAND_URL}/support/docs/python-with-playwright/`
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
      "@id": "https://www.testmuai.com/support/docs/python-with-playwright/"
    },
    "headline": "Run your Python automation scripts with Playwright on TestMu AI",
    "description": "Run your Python automation scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/python-with-playwright/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "python playwright",
      "python automation testing",
      "playwright python"
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
        "programmingLanguage": "JavaScript",
        "codeRepository": "https://github.com/LambdaTest/playwright-sample",
        "text": "git clone https://github.com/LambdaTest/playwright-sample.git\ncd playwright-sample\ncd playwright-python"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "pip install -r requirements.txt"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run your Playwright tests with Python",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "import json\nimport os\nimport urllib\nimport subprocess\n\nfrom playwright.sync_api import sync_playwright\n\ncapabilities = {\n    'browserName': 'Chrome',  # Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    'browserVersion': 'latest',\n    'LT:Options': {\n        'platform': 'Windows 10',\n        'build': 'Playwright Python Build',\n        'name': 'Playwright Python Test',\n        'user': os.getenv('LT_USERNAME'),\n        'accessKey': os.getenv('LT_ACCESS_KEY'),\n        'network': True,\n        'video': True,\n        'console': True,\n        'tunnel': False,  # Add tunnel configuration if testing locally hosted webpage\n        'tunnelName': '',  # Optional\n        'geoLocation': '', # country code can be fetched from https://www.lambdatest.com/capabilities-generator/\n    }\n}\n\n\ndef run(playwright):\n    playwrightVersion = str(subprocess.getoutput('playwright --version')).strip().split(\" \")[1]\n    capabilities['LT:Options']['playwrightClientVersion'] = playwrightVersion\n\n    lt_cdp_url = 'wss://cdp.lambdatest.com/playwright?capabilities=' + urllib.parse.quote(\n        json.dumps(capabilities))\n    browser = playwright.chromium.connect(lt_cdp_url)\n    page = browser.new_page()\n    try:\n        page.goto(\"https://www.bing.com/\")\n        page.fill(\"[aria-label='Enter your search term'] > input\", 'LambdaTest')\n        page.keyboard.press(\"Enter\")\n        page.wait_for_timeout(1000)\n\n        title = page.title()\n\n        print(\"Title:: \", title)\n\n        if \"LambdaTest\" in title:\n            set_test_status(page, \"passed\", \"Title matched\")\n        else:\n            set_test_status(page, \"failed\", \"Title did not match\")\n    except Exception as err:\n        print(\"Error:: \", err)\n        set_test_status(page, \"failed\", str(err))\n\n    browser.close()\n\n\ndef set_test_status(page, status, remark):\n    page.evaluate(\"_ => {}\",\n                  \"lambdatest_action: {\\\"action\\\": \\\"setTestStatus\\\", \\\"arguments\\\": {\\\"status\\\":\\\"\" + status + \"\\\", \\\"remark\\\": \\\"\" + remark + \"\\\"}}\");\n\n\nwith sync_playwright() as playwright:\n    run(playwright)\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "npm run test"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Python with Playwright: Running Your First Test
* * *

Learn how to use Playwright with Python to automate web application testing across real browsers and operating systems on <BrandName /> cloud platform.


## Prerequisites
***

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or clone the code sample for the Playwright Python from the <BrandName /> GitHub repository to run the tests.

<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-python" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-python
```

2. Install the npm dependencies.

```
npm install
```

3. A <BrandName /> Username and Access key. You can get it from your <BrandName /> Profile section. Don't have an account, <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>sign up for free</a>.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="Image" width="1444" height="703"  className="doc_img"/>

4. To run Playwright tests, set your <BrandName /> Username and Access key in the Environment Variables.


## Run your Playwright tests with Python
---

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
---

Go to the [<BrandName /> Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright Python test results.






## Using the Playwright Agent Skill with TestMu AI
***

The [playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The playwright-skill package includes:

```
playwright-skill/
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


### Installing Playwright Agent Skill
***

Install a Playwright Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/playwright-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/playwright-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only playwright-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
