---
id: getting-started-with-cypress-testing
title: How to Run Your First Cypress Test on TestMu AI
sidebar_label: "Run First Test"
hide_title: true
toc_max_heading_level: 2
description: "Run your first Cypress test on the TestMu AI cloud grid: clone the sample project, set credentials, configure capabilities, and view your results."
keywords:
  - run cypress test on testmu ai
  - cypress testing guide
  - cypress cloud testing
  - run cypress tests in parallel
  - lambdatest cypress cli

url: https://www.testmuai.com/support/docs/getting-started-with-cypress-testing/
site_name: TestMu AI
slug: getting-started-with-cypress-testing/
canonical: https://www.testmuai.com/support/docs/getting-started-with-cypress-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# How to Run Your First Cypress Test on TestMu AI
***

If you already write Cypress tests, running them on TestMu AI lets you execute those same tests across multiple browser versions on the cloud instead of a single local browser. You do it by cloning the sample project, setting your credentials, configuring capabilities in `lambdatest-config.json`, and running the test with the TestMu AI Cypress CLI.

## Prerequisites
***

Set up the following before you run the test so the CLI can authenticate and locate your project.

:::tip Sample repo

Clone the TestMu AI sample Cypress Cloud repo used in this document to follow along with the same files shown here. <a href="https://github.com/LambdaTest/Cypress-Cloud" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="TestMu AI Cypress Cloud sample repository on GitHub" className="doc_img"/> View on GitHub</a>

:::

Complete these three steps to prepare your environment for the first run.

1. Clone the TestMu AI Cypress-Cloud GitHub repo and navigate to the cloned directory.

```bash
git clone https://github.com/LambdaTest/Cypress-Cloud.git
cd Cypress-Cloud
```

2. To run Cypress tests, set your TestMu AI username and access key in the environment variables. You can get them from the TestMu AI Automation Dashboard.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="TestMu AI username and access key shown in the Automation Dashboard profile settings" width="1444" height="703"  className="doc_img"/>

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

## Authentication
***

TestMu AI reads your credentials in one of three ways. When more than one is set, this order of precedence applies: **CLI arguments > `lambdatest-config.json` > environment variables**.

**Environment variables:** set `LT_USERNAME` and `LT_ACCESS_KEY` as shown in [Prerequisites](#prerequisites).

**`lambdatest-config.json`:** set them under the `lambdatest_auth` block:

```json title="lambdatest-config.json"
"lambdatest_auth": {
   "username": "<your username>",
   "access_key": "<your access key>"
}
```

**CLI arguments:** pass them on the `run` command (these override the other two methods):

| Arg | Shorthand | Value |
| --- | --- | --- |
| `--username` | `--user` | Your TestMu AI username |
| `--access_key` | `--ak` | Your TestMu AI access key |

```bash
lambdatest-cypress run --username=<your username> --ak=<your access key>
```

## Running Your First Test
***

Follow these steps to run your first Cypress test on the TestMu AI platform. The steps cover both Cypress v10 and Cypress v9 projects, so pick the tab that matches your setup as you go.

1. Install the TestMu AI Cypress CLI using the below command.

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

4. Create the `lambdatest-config.json` file that contains configurations like auth, capabilities, and test settings needed to run successfully on TestMu AI.

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
     "username": "<your TestMu AI username>",
     "access_key": "<your TestMu AI access key>"
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
     "username": "<your TestMu AI username>",
     "access_key": "<your TestMu AI access key>"
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

6. Visit the TestMu AI Automation dashboard to view your test results. The CLI also prints a link to view the Cypress test build.

<img loading="lazy" src={require('../assets/images/cypressten/cypress_results.png').default} alt="Cypress test results shown on the TestMu AI Automation dashboard" width="1444" height="703"  className="doc_img"/>

## Run Your Tests in Parallel
***

Once your first test runs, you can execute multiple Cypress tests at once to cut total run time. Configure parallel execution in either of two ways.

**Using the CLI:** pass the `--parallels` flag with the number of sessions:

```bash
lambdatest-cypress run --parallels 5
```

**Using `lambdatest-config.json`:** set the `parallels` key under `run_settings`:

```json
{
  "run_settings": {
    "parallels": 5
  }
}
```

:::info NOTE
The number of parallel tests running at a time depends on the concurrency plan of your TestMu AI account. If you request more parallel tests than your plan allows, the extra tests are queued and run as running tests finish. For example, on a 5-session plan, running 50 tests runs 5 at a time and queues the other 45.
:::

## Testing Locally Hosted or Privately Hosted Projects
***

To test locally hosted websites on the TestMu AI platform, set up the [TestMu AI tunnel](/docs/testing-locally-hosted-pages/) and run commands using the CLI, or use [UnderPass](/docs/underpass-tunnel-application/), the TestMu AI GUI-based desktop app. Once the TestMu AI tunnel or UnderPass is set up and started, you can use Cypress to test locally hosted websites.

Next, activate the tunnel capability in the `lambdatest-config.json` file under the `tunnel_settings` section as shown below.

```json 
  "tunnel_settings": {
		"tunnel": true,
		"tunnel_name": "LT_Tunnel"
	}
```

You can provide the name of the **TestMu AI tunnel** as per your requirements.

## Related Cypress Guides
***

Continue with the guides below to generate, configure, and scale your Cypress runs on TestMu AI.

- [Generate Cypress tests with AI coding assistants](/support/docs/cypress-agent-skills/) using Cypress Agent Skills.
- [Reference the Cypress CLI commands](/support/docs/cypress-cli-commands/) for the full lambdatest-cypress command and flag list.
- [Check the supported browsers and OS](/support/docs/supported-browsers-and-os/) to see the versions and platforms you can target.

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

