---
id: cypress-webkit
title: Running your Cypress tests in WebKit
hide_title: true
sidebar_label: Cypress Testing Using WebKit
description: This documentation explains how to run your Cypress tests using WebKit.
keywords:
  - cypress test webkit
  - cypress testing webkit
  - cypress testing webkit testmu ai

url: https://www.testmuai.com/support/docs/cypress-testing-using-webkit/
site_name: LambdaTest
slug: cypress-testing-using-webkit/
canonical: https://www.testmuai.com/support/docs/cypress-testing-using-webkit/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# Cypress Testing Using WebKit
---

WebKit is a web browser engine based on KHTML that displays and interacts with web pages. It is open-source and used by many web browsers like Apple's Safari and Google's Chrome.

<BrandName /> lets you perform Cypress testing using WebKit, Safari's browser engine. By testing your web apps in WebKit, you can get an idea of how your website will run in Safari.

## Prerequisites
---

:::tip Sample repo

Before we get started, make sure to clone the **<BrandName />'s sample Cypress Cloud repo**, used in this document. <a href="https://github.com/LambdaTest/Cypress-Cloud" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

You can run Cypress test in WebKit on the <BrandName /> platform in a few simple steps:

1. Clone the `LambdaTest-Cypress-Cloud` GitHub repo and navigate to the cloned directory.

```bash
git clone https://github.com/LambdaTest/Cypress-Cloud.git
cd Cypress-Cloud
```

2. To run Cypress tests in WebKit, set your <BrandName /> username and access key in the environment variables. You can get them from the <BrandName /> Automation Dashboard.

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

## Running Your First Test in WebKit
---

Following are the steps to run your first Cypress test in WebKit on the <BrandName /> platform.

1. Install the <BrandName />-Cypress CLI using the below command.

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
https://github.com/cypress-io/cypress-example-kitchensink/tree/ab10094ef7b199ae7febafec413a0626414bcd3c

# Go to the cloned directory
cd cypress-example-kitchensink
```

</TabItem>

</Tabs>

Once you clone the kitchen sink repo, below will be the structure of your Cypress project.

<Tabs className="docs__val">

<TabItem value="ios" label="Cypress v10" default>

```bash
app
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

```bash
npm install
```

4. Create `lambdatest-config.json` file that contains configurations like auth, capabilities, test settings, etc. which need to be successfully executed at LambaTest.

Use `init` command to generate the sample configuration files.

```bash
lambdatest-cypress init
```

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
     }
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
    },

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
        "cypress": "10.8.0"
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

```bash
lambdatest-cypress run
```

6. Visit [<BrandName /> Automation dashboard](https://accounts.lambdatest.com/dashboard) to view your test results. The CLI also has a link to view the Cypress test build.


## Testing Locally Hosted or Privately Hosted Projects 
---

To tests locally hosted websites on the <BrandName /> platform, you need to setup [<BrandName /> tunnel](/docs/testing-locally-hosted-pages/), and execute commands using the CLI, or [Download UnderPass](/docs/underpass-tunnel-application/), our GUI based desktop app. Once you have the <BrandName /> tunnel or Underpass set up and started, you can use Cypress to test locally hosted websites.

Now you need to activate the tunnel capability in the `lambdatest-config.json` file under the section "tunnel_settings" as shown below:

```json 
  "tunnel_settings": {
		"tunnel": true,
		"tunnel_name": "LT_Tunnel"
	}
```

You can provide the name of the **<BrandName /> tunnel** as per your requirements.

## Limitations
---

* WebKit only supports the latest version.

* The following dependencies must be in `lambdatest-config.json` file. 

```js
"npm_dependencies": {
   "cypress": "10.8.0",
   "playwright-webkit": "^1.28.1"
}
```

* Works only with Cypress **v10.8.0**.
* Supported on **Windows** - 11 and 10, and **macOS** - Monterey and Big Sur.


