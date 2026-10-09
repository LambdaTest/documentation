# How to Run Cypress Tests on WebKit with TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

WebKit is a web browser engine based on KHTML that displays and interacts with web pages. It is open-source and used by many web browsers such as Apple's Safari. TestMu AI lets you perform Cypress testing on WebKit, Safari's browser engine, so you can see how your website will run in Safari. You do it by cloning the sample project, setting your credentials, configuring WebKit browsers in `lambdatest-config.json`, and running the test with the TestMu AI Cypress CLI.

## Prerequisites

Set up the following before you run the test so the CLI can authenticate and locate your project.

**Sample repo**

Clone the TestMu AI sample Cypress Cloud repo used in this document to follow along with the same files shown here.  View on GitHub

You can run Cypress tests on WebKit on the TestMu AI platform in a few simple steps.

1. Clone the TestMu AI Cypress-Cloud GitHub repo and navigate to the cloned directory.

```bash
git clone https://github.com/LambdaTest/Cypress-Cloud.git
cd Cypress-Cloud
```

2. To run Cypress tests on WebKit, set your TestMu AI username and access key in the environment variables. You can get them from the TestMu AI Automation Dashboard.

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

Follow these steps to run your first Cypress test on WebKit on the TestMu AI platform. The steps cover both Cypress v10 and Cypress v9 projects, so pick the tab that matches your setup as you go.

1. Install the TestMu AI Cypress CLI using the below command.

```bash
npm install -g lambdatest-cypress-cli
```

2. Clone the Cypress kitchen sink repo using the following command.

```bash
# Clone the kitchen sink repo
git clone https://github.com/cypress-io/cypress-example-kitchensink.git

# Go to the cloned directory
cd cypress-example-kitchensink
```

```bash
# Clone the kitchen sink repo
git clone https://github.com/cypress-io/cypress-example-kitchensink.git

# Go to the cloned directory
cd cypress-example-kitchensink

# Checkout to this commit
git checkout ab10094ef7b199ae7febafec413a0626414bcd3c
```

Once you clone the kitchen sink repo, below will be the structure of your Cypress project.

```bash
...
cypress
|-- fixtures
|-- e2e
|-- support
cypress.config.js
...
```

3. Install the npm dependencies by passing the below command.

```bash
npm install
```

4. Create the `lambdatest-config.json` file that contains configurations like auth, capabilities, and test settings needed to run successfully on TestMu AI.

Use `init` command to generate the sample configuration files.

```bash
lambdatest-cypress init
```

Once you run the above command, below is the project structure for the `lambdatest-config.json` file. Configure the `browsers` block for WebKit as shown here.

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

5. Pass the below command to run the test.

```bash
lambdatest-cypress run
```

6. Visit the TestMu AI Automation dashboard to view your test results. The CLI also prints a link to view the Cypress test build.

## Testing Locally Hosted or Privately Hosted Projects

To test locally hosted websites on the TestMu AI platform, set up the [TestMu AI tunnel](/docs/testing-locally-hosted-pages/) and run commands using the CLI, or use [UnderPass](/docs/underpass-tunnel-application/), the TestMu AI GUI-based desktop app. Once the TestMu AI tunnel or UnderPass is set up and started, you can use Cypress to test locally hosted websites.

Next, activate the tunnel capability in the `lambdatest-config.json` file under the `tunnel_settings` section as shown below.

```json
  "tunnel_settings": {
		"tunnel": true,
		"tunnel_name": "LT_Tunnel"
	}
```

You can provide the name of the **TestMu AI tunnel** as per your requirements.

## Limitations

- WebKit only supports the latest version.
- The following dependencies must be in the `lambdatest-config.json` file.

```js
"npm_dependencies": {
   "cypress": "10.8.0",
   "playwright-webkit": "^1.28.1"
}
```

- Works only with Cypress **v10.8.0**.
- Supported on **Windows** - 11 and 10, and **macOS** - Monterey and Big Sur.
