---
id: junit-with-playwright
title: Run your JUnit automation scripts with Playwright on TestMu AI
hide_title: true
sidebar_label: JUnit
description: Run your JUnit automation scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.
keywords:
  - junit playwright
  - junit automation testing
  - playwright junit
  - playwright junit testing guide
  - junit playwright framework

url: https://www.testmuai.com/support/docs/junit-with-playwright/
site_name: TestMu AI
slug: junit-with-playwright/
canonical: https://www.testmuai.com/support/docs/junit-with-playwright/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "JUnit with Playwright",
          "item": `${BRAND_URL}/support/docs/junit-with-playwright/`
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
      "@id": "https://www.testmuai.com/support/docs/junit-with-playwright/"
    },
    "headline": "Run your JUnit automation scripts with Playwright on TestMu AI",
    "description": "Run your JUnit automation scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/junit-with-playwright/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "junit playwright",
      "junit automation testing",
      "playwright junit"
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
        "text": "git clone https://github.com/LambdaTest/playwright-sample.git\ncd playwright-sample\ncd playwright-java-junit"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "npm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run your Playwright tests with JUnit",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "import com.google.gson.JsonObject;\nimport com.tngtech.JUnit.junit.dataprovider.DataProvider;\n\npublic class LTCapability {\n  @DataProvider\n  public static Object[] getDefaultTestCapability() {\n    JsonObject capabilities1 = new JsonObject();\n    JsonObject ltOptions1 = new JsonObject();\n\n    String user = System.getenv(\"LT_USERNAME\");\n    String accessKey = System.getenv(\"LT_ACCESS_KEY\");\n\n    capabilities1.addProperty(\"browserName\", \"Chrome\"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    capabilities1.addProperty(\"browserVersion\", \"latest\");\n    ltOptions1.addProperty(\"platform\", \"Windows 10\");\n    ltOptions1.addProperty(\"name\", \"Playwright Test\");\n    ltOptions1.addProperty(\"build\", \"Playwright Testing using Junit\");\n    ltOptions1.addProperty(\"user\", user);\n    ltOptions1.addProperty(\"accessKey\", accessKey);\n    capabilities1.add(\"LT:Options\", ltOptions1);\n\n\n    JsonObject capabilities2 = new JsonObject();\n    JsonObject ltOptions2 = new JsonObject();\n    capabilities2.addProperty(\"browserName\", \"MicrosoftEdge\"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    capabilities2.addProperty(\"browserVersion\", \"latest\");\n    ltOptions2.addProperty(\"platform\", \"Windows 10\");\n    ltOptions2.addProperty(\"name\", \"Playwright Test\");\n    ltOptions2.addProperty(\"build\", \"Playwright Testing using Junit\");\n    ltOptions2.addProperty(\"user\", user);\n    ltOptions2.addProperty(\"accessKey\", accessKey);\n    capabilities2.add(\"LT:Options\", ltOptions2);\n    return new Object[]{\n      capabilities1,capabilities2\n    };\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "mvn clean test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The junit-5-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "junit-5-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a JUnit 5 Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/junit-5-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/junit-5-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# JUnit with Playwright: Running Your First Test
* * *

Learn how to use Playwright with JUnit to automate web application testing across real browsers and operating systems on <BrandName /> cloud platform.


## Prerequisites
***

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or clone the code sample for the Playwright JUnit from the <BrandName /> GitHub repository to run the tests.

<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-java-junit" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

<VerifiedTag value="Verified" />

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-java-junit
```

2. Install the npm dependencies.

<VerifiedTag value="Verified" />

```
npm install
```

3. A <BrandName /> Username and Access key. You can get it from your <BrandName /> Profile section. Don't have an account, <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>sign up for free</a>.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="Image" width="1444" height="703"  className="doc_img"/>

## Run your Playwright tests with JUnit
---

Navigate to the `LTCapability.JUnit` file and provide your <BrandName /> Username and Access key.

<VerifiedTag value="Verified" />

```java
import com.google.gson.JsonObject;
import com.tngtech.JUnit.junit.dataprovider.DataProvider;

public class LTCapability {
  @DataProvider
  public static Object[] getDefaultTestCapability() {
    JsonObject capabilities1 = new JsonObject();
    JsonObject ltOptions1 = new JsonObject();

    String user = System.getenv("LT_USERNAME");
    String accessKey = System.getenv("LT_ACCESS_KEY");

    capabilities1.addProperty("browserName", "Chrome"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    capabilities1.addProperty("browserVersion", "latest");
    ltOptions1.addProperty("platform", "Windows 10");
    ltOptions1.addProperty("name", "Playwright Test");
    ltOptions1.addProperty("build", "Playwright Testing using Junit");
    ltOptions1.addProperty("user", user);
    ltOptions1.addProperty("accessKey", accessKey);
    capabilities1.add("LT:Options", ltOptions1);


    JsonObject capabilities2 = new JsonObject();
    JsonObject ltOptions2 = new JsonObject();
    capabilities2.addProperty("browserName", "MicrosoftEdge"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    capabilities2.addProperty("browserVersion", "latest");
    ltOptions2.addProperty("platform", "Windows 10");
    ltOptions2.addProperty("name", "Playwright Test");
    ltOptions2.addProperty("build", "Playwright Testing using Junit");
    ltOptions2.addProperty("user", user);
    ltOptions2.addProperty("accessKey", accessKey);
    capabilities2.add("LT:Options", ltOptions2);
    return new Object[]{
      capabilities1,capabilities2
    };
  }
}
```

Pass the below command in the terminal to run the test.

<VerifiedTag value="Verified" />

```java
mvn clean test
```

## View your test results
---

Go to the [<BrandName /> Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright JUnit test results.






## Using the JUnit 5 Agent Skill with TestMu AI
***

The [junit-5-skill](https://github.com/LambdaTest/agent-skills/tree/main/junit-5-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The junit-5-skill package includes:

<VerifiedTag value="Verified" />

```
junit-5-skill/
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


### Installing JUnit 5 Agent Skill
***

Install a JUnit 5 Agent Skill using the command below:

<VerifiedTag value="Verified" />

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/junit-5-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/junit-5-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only junit-5-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
