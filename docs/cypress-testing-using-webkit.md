---
id: cypress-testing-using-webkit
title: How to Run Cypress Tests on WebKit with TestMu AI
sidebar_label: "Cypress on WebKit"
hide_title: true
toc_max_heading_level: 2
description: "Run Cypress tests on the WebKit engine with TestMu AI: clone the sample project, set credentials, configure WebKit browsers, and view your results."
keywords:
  - cypress test webkit
  - cypress testing webkit
  - cypress testing webkit testmu ai
  - run cypress tests on webkit
  - cypress safari testing

url: https://www.testmuai.com/support/docs/cypress-testing-using-webkit/
site_name: TestMu AI
slug: cypress-testing-using-webkit/
canonical: https://www.testmuai.com/support/docs/cypress-testing-using-webkit/
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
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
          "name": "How to Run Cypress Tests on WebKit with TestMu AI",
          "item": `${BRAND_URL}/support/docs/cypress-testing-using-webkit/`
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
      "@id": "https://www.testmuai.com/support/docs/cypress-testing-using-webkit/"
    },
    "headline": "How to Run Cypress Tests on WebKit with TestMu AI",
    "description": "Run Cypress tests on the WebKit engine with TestMu AI: clone the sample project, set credentials, configure WebKit browsers, and view your results.",
    "url": "https://www.testmuai.com/support/docs/cypress-testing-using-webkit/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "cypress test webkit",
      "cypress testing webkit",
      "cypress testing webkit testmu ai",
      "run cypress tests on webkit"
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
        "name": "Clone the sample project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Cypress-Cloud",
        "text": "git clone https://github.com/LambdaTest/Cypress-Cloud.git\ncd Cypress-Cloud"
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
        "name": "Install the TestMu AI Cypress CLI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g lambdatest-cypress-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the Cypress kitchen sink repo (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/cypress-io/cypress-example-kitchensink",
        "text": "git clone https://github.com/cypress-io/cypress-example-kitchensink.git\ncd cypress-example-kitchensink"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Generate the lambdatest-config.json file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress init"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "lambdatest-config.json for WebKit",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"lambdatest_auth\": {\n     \"username\": \"<Your LambdaTest username>\",\n     \"access_key\": \"<Your LambdaTest access key>\"\n  },\n  \"browsers\": [\n     {\n        \"browser\": \"Webkit\",\n        \"platform\": \"Windows 11\",\n        \"versions\": [\n           \"latest\"\n        ]\n     },\n     {\n        \"browser\": \"Webkit\",\n        \"platform\": \"Windows 10\",\n        \"versions\": [\n           \"latest\"\n        ]\n     },\n     {\n        \"browser\": \"Webkit\",\n        \"platform\": \"MacOS Monterey\",\n        \"versions\": [\n           \"latest\"\n        ]\n     },\n     {\n        \"browser\": \"Webkit\",\n        \"platform\": \"MacOS Big sur\",\n        \"versions\": [\n           \"latest\"\n        ]\n     }\n  ],\n  \"run_settings\": {\n     \"cypress_config_file\": \"cypress.config.js\",\n     \"reporter_config_file\": \"base_reporter_config.json\",\n     \"build_name\": \"build-name\",\n     \"parallels\": 1,\n     \"specs\": \"./*.cy.js\",\n     \"ignore_files\": \"\",\n     \"network\": false,\n     \"headless\": false,\n     \"npm_dependencies\": {\n        \"cypress\": \"10.8.0\",\n        \"playwright-webkit\": \"^1.28.1\",\n        \"mochawesome\": \"7.0.1\"\n     }\n  },\n  \"tunnel_settings\": {\n     \"tunnel\": false,\n     \"tunnel_name\": null\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress run"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Enable the tunnel for locally hosted projects",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "\"tunnel_settings\": {\n   \"tunnel\": true,\n   \"tunnel_name\": \"LT_Tunnel\"\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Required WebKit npm dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "\"npm_dependencies\": {\n   \"cypress\": \"10.8.0\",\n   \"playwright-webkit\": \"^1.28.1\"\n}"
      }
    ],
    "dateModified": "2026-09-27T00:00:00+05:30"
  }) }}
/>

# How to Run Cypress Tests on WebKit with TestMu AI
***

WebKit is a web browser engine based on KHTML that displays and interacts with web pages. It is open-source and used by many web browsers such as Apple's Safari. TestMu AI lets you perform Cypress testing on WebKit, Safari's browser engine, so you can see how your website will run in Safari. You do it by cloning the sample project, setting your credentials, configuring WebKit browsers in `lambdatest-config.json`, and running the test with the TestMu AI Cypress CLI.

## Prerequisites
***

Set up the following before you run the test so the CLI can authenticate and locate your project.

:::tip Sample repo

Clone the TestMu AI sample Cypress Cloud repo used in this document to follow along with the same files shown here. <a href="https://github.com/LambdaTest/Cypress-Cloud" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="TestMu AI Cypress Cloud sample repository on GitHub" className="doc_img"/> View on GitHub</a>

:::

You can run Cypress tests on WebKit on the TestMu AI platform in a few simple steps.

1. Clone the TestMu AI Cypress-Cloud GitHub repo and navigate to the cloned directory.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/Cypress-Cloud.git
cd Cypress-Cloud
```

2. To run Cypress tests on WebKit, set your TestMu AI username and access key in the environment variables. You can get them from the TestMu AI Automation Dashboard.

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

## Running Your First Test in WebKit
***

Follow these steps to run your first Cypress test on WebKit on the TestMu AI platform. The steps cover both Cypress v10 and Cypress v9 projects, so pick the tab that matches your setup as you go.

1. Install the TestMu AI Cypress CLI using the below command.

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

</Tabs>

3. Install the npm dependencies by passing the below command.

<VerifiedTag value="Verified" />

```bash
npm install
```

4. Create the `lambdatest-config.json` file that contains configurations like auth, capabilities, and test settings needed to run successfully on TestMu AI.

Use `init` command to generate the sample configuration files.

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress init
```

Once you run the above command, below is the project structure for the `lambdatest-config.json` file. Configure the `browsers` block for WebKit as shown here.

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
        "browser": "Webkit",
        "platform": "Windows 11",
        "versions": [
           "latest"
        ]
     },
     {
        "browser": "Webkit",
        "platform": "Windows 10",
        "versions": [
           "latest"
        ]
     },
     {
        "browser": "Webkit",
        "platform": "MacOS Monterey",
        "versions": [
           "latest"
        ]
     },
     {
        "browser": "Webkit",
        "platform": "MacOS Big sur",
        "versions": [
           "latest"
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
        "cypress": "10.8.0",
        "playwright-webkit": "^1.28.1",
        "mochawesome": "7.0.1"
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

6. Visit the TestMu AI Automation dashboard to view your test results. The CLI also prints a link to view the Cypress test build.

## Testing Locally Hosted or Privately Hosted Projects
***

To test locally hosted websites on the TestMu AI platform, set up the [TestMu AI tunnel](/docs/testing-locally-hosted-pages/) and run commands using the CLI, or use [UnderPass](/docs/underpass-tunnel-application/), the TestMu AI GUI-based desktop app. Once the TestMu AI tunnel or UnderPass is set up and started, you can use Cypress to test locally hosted websites.

Next, activate the tunnel capability in the `lambdatest-config.json` file under the `tunnel_settings` section as shown below.

<VerifiedTag value="Verified" />

```json
  "tunnel_settings": {
		"tunnel": true,
		"tunnel_name": "LT_Tunnel"
	}
```

You can provide the name of the **TestMu AI tunnel** as per your requirements.

## Limitations
***

- WebKit only supports the latest version.
- The following dependencies must be in the `lambdatest-config.json` file.

<VerifiedTag value="Verified" />

```js
"npm_dependencies": {
   "cypress": "10.8.0",
   "playwright-webkit": "^1.28.1"
}
```

- Works only with Cypress **v10.8.0**.
- Supported on **Windows** - 11 and 10, and **macOS** - Monterey and Big Sur.

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
        Cypress on WebKit
      </span>
    </li>
  </ul>
</nav>
