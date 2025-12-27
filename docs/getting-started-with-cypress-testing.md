---
id: getting-started-with-cypress-testing
title: Getting Started With Cypress Testing On TestMu AI Platform
sidebar_label: Cypress Testing
hide_title: true
description: In this documentation, learn how to perform end-to-end Cypress testing on the TestMu AI Automation Cloud across 40+ browser versions.
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

url: https://www.lambdatest.com/support/docs/getting-started-with-cypress-testing/
site_name: LambdaTest
slug: getting-started-with-cypress-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started With Cypress Testing
---

Cypress is a modern web front-end testing tool built with JavaScript Mocha. It operates directly on the browsers without the need for Selenium. Its unique DOM manipulation technique makes it a very developer and QA-friendly tool.

Integrating LambdaTest with Cypress allows you to perform Cypress testing across 40+ browser versions on cloud.

In this guide, learn how to get started with Cypress testing on the LambdaTest platform. We will use Cypress’ kitchen sink sample app to execute our tests. 



## Prerequisites
---

:::tip Sample repo

Before we get started, make sure to clone the LambdaTest's sample Cypress Cloud repo, used in this document. <a href="https://github.com/LambdaTest/Cypress-Cloud" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

You can run your first Cypress test on the LambdaTest platform in a few simple steps:

1. Clone the LambdaTest-Cypress-Cloud GitHub repo and navigate to the cloned directory.

```bash
git clone https://github.com/LambdaTest/Cypress-Cloud.git
cd Cypress-Cloud
```

2. To run Cypress tests, you will need to set your LambdaTest username and access key in the environment variables. You can get them from the LambdaTest Automation Dashboard.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

**Windows**

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```
3. Install Node.js version 12 or higher. You can download it from the [official Node.js website](https://nodejs.org/en/download/).


## Running Your First Test
---

Following are the steps to run your first Cypress test on the LambdaTest platform.

1. Install the LambdaTest-Cypress CLI using the below command.

```bash
npm install -g lambdatest-cypress-cli
```

2. Clone the Cypress kitchen sink repo using the following command.

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

```bash
npm install
```

4. Create `lambdatest-config.json` file that contains configurations like auth, capabilities, test settings, etc. which need to be successfully executed at LambaTest.

Use `init` command to generate the sample configuration files.

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

```bash
lambdatest-cypress run
```

6. Visit LambdaTest Automation dashboard to view your test results. The CLI also has a link to view the Cypress test build.

<img loading="lazy" src={require('../assets/images/cypressten/cypress_results.png').default} alt="Image" width="1444" height="703"  className="doc_img"/>


## Testing Locally Hosted or Privately Hosted Projects 
---

To tests locally hosted websites on the LambdaTest platform, you need to setup [LambdaTest tunnel](/docs/testing-locally-hosted-pages/), and execute commands using the CLI, or [Download UnderPass](/docs/underpass-tunnel-application/), our GUI based desktop app. Once you have the LambdaTest tunnel or Underpass set up and started, you can use Cypress to test locally hosted websites.

Now you need to activate the tunnel capability in the `lambdatest-config.json` file under the section "tunnel_settings" as shown below:

```json 
  "tunnel_settings": {
		"tunnel": true,
		"tunnel_name": "LT_Tunnel"
	}
```

You can provide the name of the **LambdaTest tunnel** as per your requirements.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
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



