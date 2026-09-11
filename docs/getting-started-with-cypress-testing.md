---
id: getting-started-with-cypress-testing
title: Getting Started With Cypress Testing On TestMu AI Platform
sidebar_label: Run Your First Test
hide_title: true
description: In this documentation, learn how to perform end-to-end Cypress testing on the TestMu AI Automation Cloud across multiple browser versions.
keywords:
  - Cypress Automation
  - Cypress Testing Guide
  - Cypress Test Automation
  - Cypress Automation Testing
  - Running Cypress Tests
  - Cypress Testing Online
  - Run Cypress
  - Cypress Run Specific Test
  - Cypress Testing Environment
  - How to Run Cypress Tests

url: https://www.testmuai.com/support/docs/getting-started-with-cypress-testing/
site_name: TestMu AI
slug: getting-started-with-cypress-testing/
canonical: https://www.testmuai.com/support/docs/getting-started-with-cypress-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Getting Started With Cypress Testing On TestMu AI Platform",
          "item": `${BRAND_URL}/support/docs/getting-started-with-cypress-testing/`
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
      "@id": "https://www.testmuai.com/support/docs/getting-started-with-cypress-testing/"
    },
    "headline": "Getting Started With Cypress Testing On TestMu AI Platform",
    "description": "In this documentation, learn how to perform end-to-end Cypress testing on the TestMu AI Automation Cloud across multiple browser versions.",
    "url": "https://www.testmuai.com/support/docs/getting-started-with-cypress-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "Cypress Automation",
      "Cypress Testing Guide",
      "Cypress Test Automation"
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
        "name": "You can run your first Cypress test on the TestMu AI platform in a few simple steps",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Cypress-Cloud",
        "text": "git clone https://github.com/LambdaTest/Cypress-Cloud.git\ncd Cypress-Cloud"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "set LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Your First Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g lambdatest-cypress-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Your First Test (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/cypress-io/cypress-example-kitchensink",
        "text": "# Clone the kitchen sink repo\ngit clone https://github.com/cypress-io/cypress-example-kitchensink.git\n\n# Go to the cloned directory\ncd cypress-example-kitchensink"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Go to the cloned directory (Cypress v9)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/cypress-io/cypress-example-kitchensink",
        "text": "# Clone the kitchen sink repo\ngit clone https://github.com/cypress-io/cypress-example-kitchensink.git\n\n# Go to the cloned directory\ncd cypress-example-kitchensink\n\n# Checkout to this commit\ngit checkout ab10094ef7b199ae7febafec413a0626414bcd3c  "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Checkout to this commit (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "...\ncypress\n|-- fixtures\n|-- e2e\n|-- support\ncypress.config.js\n..."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Checkout to this commit (Cypress v9)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "...\ncypress\n|-- fixtures\n|-- integration\n|-- plugins\n|-- support\ncypress.json\n..."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Cypress v9",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Cypress v10",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress init --cv=10"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Cypress v9",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress init "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Cypress v10",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n  \"lambdatest_auth\": {\n     \"username\": \"<Your LambdaTest username>\",\n     \"access_key\": \"<Your LambdaTest access key>\"\n  },\n  \"browsers\": [\n     {\n        \"browser\": \"Chrome\",\n        \"platform\": \"Windows 10\",\n        \"versions\": [\n           \"latest-1\"\n        ]\n     },\n     {\n        \"browser\": \"Firefox\",\n        \"platform\": \"Windows 10\",\n        \"versions\": [\n           \"latest-1\"\n        ]\n     }\n  ],\n  \"run_settings\": {\n     \"cypress_config_file\": \"cypress.config.js\",\n     \"reporter_config_file\": \"base_reporter_config.json\",\n     \"build_name\": \"build-name\",\n     \"parallels\": 1,\n     \"specs\": \"./*.cy.js\",\n     \"ignore_files\": \"\",\n     \"network\": false,\n     \"headless\": false,\n     \"npm_dependencies\": {\n        \"cypress\": \"10.0.0\"\n     }\n  },\n  \"tunnel_settings\": {\n     \"tunnel\": false,\n     \"tunnel_name\": null\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Cypress v9",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "app\n{\n  \"lambdatest_auth\": {\n     \"username\": \"<Your LambdaTest username>\",\n     \"access_key\": \"<Your LambdaTest access key>\"\n  },\n  \"browsers\": [\n     {\n        \"browser\": \"Chrome\",\n        \"platform\": \"Windows 10\",\n        \"versions\": [\n           \"latest-1\"\n        ]\n     },\n     {\n        \"browser\": \"Firefox\",\n        \"platform\": \"Windows 10\",\n        \"versions\": [\n           \"latest-1\"\n        ]\n     }\n  ],\n  \"run_settings\": {\n     \"cypress_config_file\": \"cypress.json\",\n     \"reporter_config_file\": \"base_reporter_config.json\",\n     \"build_name\": \"build-name\",\n     \"parallels\": 1,\n     \"specs\": \"./*.spec.js\",\n     \"ignore_files\": \"\",\n     \"network\": false,\n     \"headless\": false,\n     \"npm_dependencies\": {\n        \"cypress\": \"9.0.0\"\n     }\n  },\n  \"tunnel_settings\": {\n     \"tunnel\": false,\n     \"tunnel_name\": null\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 14",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress run"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using the CLI: pass the --parallels flag with the number of sessions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress run --parallels 5"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using lambdatest-config.json: set the parallels key under run_settings",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"run_settings\": {\n    \"parallels\": 5\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Testing Locally Hosted or Privately Hosted Projects",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "  \"tunnel_settings\": {\n\t\t\"tunnel\": true,\n\t\t\"tunnel_name\": \"LT_Tunnel\"\n\t}"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Getting Started With Cypress Testing
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

Cypress is a modern web front-end testing tool built with JavaScript Mocha. It operates directly on the browsers without the need for Selenium. Its unique DOM manipulation technique makes it a very developer and QA-friendly tool.

Integrating <BrandName /> with Cypress allows you to perform Cypress testing across multiple browser versions on cloud.

In this guide, learn how to get started with Cypress testing on the <BrandName /> platform. We will use Cypress kitchen sink sample app to execute our tests. 



## Prerequisites
---

:::tip Sample repo

Before we get started, make sure to clone the <BrandName />'s sample Cypress Cloud repo, used in this document. <a href="https://github.com/LambdaTest/Cypress-Cloud" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

You can run your first Cypress test on the <BrandName /> platform in a few simple steps:

1. Clone the <BrandName />-Cypress-Cloud GitHub repo and navigate to the cloned directory.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/Cypress-Cloud.git
cd Cypress-Cloud
```

2. To run Cypress tests, you will need to set your <BrandName /> username and access key in the environment variables. You can get them from the <BrandName /> Automation Dashboard.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

**Windows**

<VerifiedTag value="Verified" />

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

<VerifiedTag value="Verified" />

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```
3. Install Node.js version 12 or higher. You can download it from the [official Node.js website](https://nodejs.org/en/download/).


## Running Your First Test
---

Following are the steps to run your first Cypress test on the <BrandName /> platform.

1. Install the <BrandName />-Cypress CLI using the below command.

<VerifiedTag value="Verified" />

```bash
npm install -g lambdatest-cypress-cli
```

2. Clone the Cypress kitchen sink repo using the following command.

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="ios" label="Cypress v10" default>

```bash
# Clone the kitchen sink repo
git clone https://github.com/cypress-io/cypress-example-kitchensink.git

# Go to the cloned directory
cd cypress-example-kitchensink
```

</TabItem>

<TabItem value="android" label="Cypress v9" default>

```bash
# Clone the kitchen sink repo
git clone https://github.com/cypress-io/cypress-example-kitchensink.git

# Go to the cloned directory
cd cypress-example-kitchensink

# Checkout to this commit
git checkout ab10094ef7b199ae7febafec413a0626414bcd3c  
```

</TabItem>

</Tabs>

Once you clone the kitchen sink repo, below will be the structure of your Cypress project.

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="ios" label="Cypress v10" default>

```bash
...
cypress
|-- fixtures
|-- e2e
|-- support
cypress.config.js
...
```

</TabItem>

<TabItem value="android" label="Cypress v9" default>

```bash
...
cypress
|-- fixtures
|-- integration
|-- plugins
|-- support
cypress.json
...
```

</TabItem>

</Tabs>

3. Install the npm dependencies by passing the below command.

<VerifiedTag value="Verified" />

```bash
npm install
```

4. Create `lambdatest-config.json` file that contains configurations like auth, capabilities, test settings, etc. which need to be successfully executed at LambdaTest.

Use `init` command to generate the sample configuration files.

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="ios" label="Cypress v10" default>

```bash
lambdatest-cypress init --cv=10
```

</TabItem>

<TabItem value="android" label="Cypress v9" default>

```bash
lambdatest-cypress init 
```

</TabItem>

</Tabs>


Once you run the above command, below is the project structure for the `lambdatest-config.json` file.

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="ios" label="Cypress v10" default>

```js
{
  "lambdatest_auth": {
     "username": "<Your LambdaTest username>",
     "access_key": "<Your LambdaTest access key>"
  },
  "browsers": [
     {
        "browser": "Chrome",
        "platform": "Windows 10",
        "versions": [
           "latest-1"
        ]
     },
     {
        "browser": "Firefox",
        "platform": "Windows 10",
        "versions": [
           "latest-1"
        ]
     }
  ],
  "run_settings": {
     "cypress_config_file": "cypress.config.js",
     "reporter_config_file": "base_reporter_config.json",
     "build_name": "build-name",
     "parallels": 1,
     "specs": "./*.cy.js",
     "ignore_files": "",
     "network": false,
     "headless": false,
     "npm_dependencies": {
        "cypress": "10.0.0"
     }
  },
  "tunnel_settings": {
     "tunnel": false,
     "tunnel_name": null
  }
}
```

</TabItem>

<TabItem value="android" label="Cypress v9" default>

```bash
app
{
  "lambdatest_auth": {
     "username": "<Your LambdaTest username>",
     "access_key": "<Your LambdaTest access key>"
  },
  "browsers": [
     {
        "browser": "Chrome",
        "platform": "Windows 10",
        "versions": [
           "latest-1"
        ]
     },
     {
        "browser": "Firefox",
        "platform": "Windows 10",
        "versions": [
           "latest-1"
        ]
     }
  ],
  "run_settings": {
     "cypress_config_file": "cypress.json",
     "reporter_config_file": "base_reporter_config.json",
     "build_name": "build-name",
     "parallels": 1,
     "specs": "./*.spec.js",
     "ignore_files": "",
     "network": false,
     "headless": false,
     "npm_dependencies": {
        "cypress": "9.0.0"
     }
  },
  "tunnel_settings": {
     "tunnel": false,
     "tunnel_name": null
  }
}
```

</TabItem>

</Tabs>

5. Pass the below command to run the test.

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress run
```

6. Visit <BrandName /> Automation dashboard to view your test results. The CLI also has a link to view the Cypress test build.

<img loading="lazy" src={require('../assets/images/cypressten/cypress_results.png').default} alt="Image" width="1444" height="703"  className="doc_img"/>


## Testing Locally Hosted or Privately Hosted Projects 
---

To tests locally hosted websites on the <BrandName /> platform, you need to setup [<BrandName /> tunnel](/docs/testing-locally-hosted-pages/), and execute commands using the CLI, or [Download UnderPass](/docs/underpass-tunnel-application/), our GUI based desktop app. Once you have the <BrandName /> tunnel or Underpass set up and started, you can use Cypress to test locally hosted websites.

Now you need to activate the tunnel capability in the `lambdatest-config.json` file under the section "tunnel_settings" as shown below:

<VerifiedTag value="Verified" />

```json 
  "tunnel_settings": {
		"tunnel": true,
		"tunnel_name": "LT_Tunnel"
	}
```

You can provide the name of the **<BrandName /> tunnel** as per your requirements.




<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Run Your First Cypress Test
      </span>
    </li>
  </ul>
</nav>



