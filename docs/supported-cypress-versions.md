---
id: supported-cypress-versions
title: Supported Cypress Versions on TestMu AI
sidebar_label: "Supported Cypress Versions"
hide_title: true
toc_max_heading_level: 2
description: "Learn which Cypress versions TestMu AI supports and the three ways to set the Cypress version in lambdatest-config.json, with precedence and examples."
keywords:
  - supported cypress versions
  - cypress version testmu ai
  - set cypress version
  - cypress lambdatest-config.json
  - cypress npm_dependencies

url: https://www.testmuai.com/support/docs/supported-cypress-versions/
site_name: TestMu AI
slug: supported-cypress-versions/
canonical: https://www.testmuai.com/support/docs/supported-cypress-versions/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
      "item": "https://www.testmuai.com/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Support",
      "item": "https://www.testmuai.com/support/docs/"
    },{
      "@type": "ListItem",
      "position": 3,
      "name": "Supported Cypress Versions",
      "item": "https://www.testmuai.com/support/docs/supported-cypress-versions/"
    }]
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/supported-cypress-versions/"
    },
    "headline": "Supported Cypress Versions on TestMu AI",
    "description": "Learn which Cypress versions TestMu AI supports and the three ways to set the Cypress version in lambdatest-config.json, with precedence and examples.",
    "url": "https://www.testmuai.com/support/docs/supported-cypress-versions/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "supported cypress versions",
      "cypress version testmu ai",
      "set cypress version"
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
        "name": "Cypress Versions Supported By TestMu AI (Cypress v10)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// lambdatest-config.json\n\n\"run_settings\":{\n   \"cypress_config_file\":\"cypress.config.js\",\n   \"reporter_config_file\":\"base_reporter_config.json\",\n   \"build_name\":\"build-name\",\n   \"parallels\":1,\n   \"specs\":\"./*.cy.js\",\n   \"ignore_files\":\"\",\n   \"network\":false,\n   \"headless\":false,\n   \"npm_dependencies\":{\n      \"cypress\":\"10.0.0\"\n   }\n},\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Cypress Versions Supported By TestMu AI (Cypress v9)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// lambdatest-config.json\n\n\"run_settings\":{\n   \"cypress_config_file\": \"cypress.json\",\n     \"reporter_config_file\": \"base_reporter_config.json\",\n     \"build_name\": \"build-name\",\n     \"parallels\": 1,\n     \"specs\": \"./*.spec.js\",\n     \"ignore_files\": \"\",\n     \"network\": false,\n     \"headless\": false,\n     \"npm_dependencies\": {\n        \"cypress\": \"9.0.0\"\n}\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set the version using package.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "\"devDependencies\": {\n    \"@bahmutov/print-env\": \"1.2.0\",\n    \"@cypress/eslint-plugin-dev\": \"5.0.0\",\n    \"colon-names\": \"1.0.0\",\n    \"cypress\": \"9.2.1\",\n    \"eslint\": \"7.0.0\","
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set the version using npm_dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "\"run_settings\": {\n    \"cypress_config_file\": \"cypress.json\",\n    \"build_name\": \"Cypress v9 Demo\",\n    \"parallels\": 2,\n    \"specs\": \"./cypress/integration/examples/actions.spec.js\",\n    \"downloads\": \"./cypress/results/\",\n    \"ignore_files\": \"\",\n    \"network\": false,\n    \"headless\": false,\n    \"reporter_config_file\": \"\",\n    \"npm_dependencies\": {\n      \"cypress\": \"10.0.0\"\n    },\n  },"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set the version using cypress_version",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "\"run_settings\": {\n    \"cypress_config_file\": \"cypress.json\",\n    \"build_name\": \"Cypress v9 Demo\",\n    \"parallels\": 2,\n    \"specs\": \"./cypress/integration/examples/actions.spec.js\",\n    \"downloads\": \"./cypress/results/\",\n    \"ignore_files\": \"\",\n    \"network\": false,\n    \"headless\": false,\n    \"reporter_config_file\": \"\",\n    \"npm_dependencies\": {\n      \"typescript\": \"3.7.4\"\n    },\n    \"cypress_version\": \"10.0.0\"\n  },"
      }
    ],
    "dateModified": "2026-09-27T00:00:00+05:30"
  }) }}
/>

# Supported Cypress Versions on TestMu AI
***

<BrandName /> supports every major, minor, and patch release of Cypress across both release lines: Cypress 10 and above, and Cypress 9 and below. With newer versions of Cypress releasing regularly, use the latest version where possible to benefit from recent fixes and improvements.

<BrandName /> supports every major, minor, and patch version for:

* Cypress 10 & above
* Cypress 9 & below

## Cypress Versions Supported By <BrandName />
***

In the `lambdatest-config.json` file, set the Cypress version in the `run_settings` block as shown below. The keys differ between Cypress v10 and above (`cypress.config.js` config file, `.cy.js` specs) and Cypress v9 and below (`cypress.json` config file, `.spec.js` specs).

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="cypress-v10" label="Cypress v10" default>

```javascript title="lambdatest-config.json"
"run_settings":{
   "cypress_config_file":"cypress.config.js",
   "reporter_config_file":"base_reporter_config.json",
   "build_name":"build-name",
   "parallels":1,
   "specs":"./*.cy.js",
   "ignore_files":"",
   "network":false,
   "headless":false,
   "npm_dependencies":{
      "cypress":"10.0.0"
   }
},
```

</TabItem>

<TabItem value="cypress-v9" label="Cypress v9">

```javascript title="lambdatest-config.json"
"run_settings":{
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
```

</TabItem>

</Tabs>

## Setting the Cypress Version
***

Set the version in any of three ways (each option overrides the ones before it):

1. **`package.json`:** <BrandName /> picks the Cypress version from your project's `package.json` dev dependencies.

<VerifiedTag value="Verified" />

```json
"devDependencies": {
    "@bahmutov/print-env": "1.2.0",
    "@cypress/eslint-plugin-dev": "5.0.0",
    "colon-names": "1.0.0",
    "cypress": "9.2.1",
    "eslint": "7.0.0",
```

2. **`npm_dependencies`:** set `cypress` under `run_settings.npm_dependencies` in `lambdatest-config.json`; this takes priority over `package.json`.

<VerifiedTag value="Verified" />

```json
"run_settings": {
    "cypress_config_file": "cypress.json",
    "build_name": "Cypress v9 Demo",
    "parallels": 2,
    "specs": "./cypress/integration/examples/actions.spec.js",
    "downloads": "./cypress/results/",
    "ignore_files": "",
    "network": false,
    "headless": false,
    "reporter_config_file": "",
    "npm_dependencies": {
      "cypress": "10.0.0"
    },
  },
```

3. **`cypress_version`:** set `cypress_version` in `lambdatest-config.json` to override the version from `npm_dependencies` or `package.json`.

<VerifiedTag value="Verified" />

```json
"run_settings": {
    "cypress_config_file": "cypress.json",
    "build_name": "Cypress v9 Demo",
    "parallels": 2,
    "specs": "./cypress/integration/examples/actions.spec.js",
    "downloads": "./cypress/results/",
    "ignore_files": "",
    "network": false,
    "headless": false,
    "reporter_config_file": "",
    "npm_dependencies": {
      "typescript": "3.7.4"
    },
    "cypress_version": "10.0.0"
  },
```

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
        Supported Cypress Versions
      </span>
    </li>
  </ul>
</nav>
