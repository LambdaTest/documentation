# Running Your First Cypress Test On TestMu AI Platform

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

To demonstrate Cypress testing on the TestMu AI platform, we will use the [Cypress Cloud repo](https://github.com/LambdaTest/Cypress-Cloud) in the demo below.

**Step-1:** Clone the [TestMu AI-Cypress Cloud](https://github.com/LambdaTest/Cypress-Cloud) GitHub repo and switch to the cloned directory.

```bash
git clone https://github.com/LambdaTest/Cypress-Cloud.git
cd Cypress-Cloud
```

**Step-2:** Setup the **TestMu AI-Cypress CLI** and configure the configuration file, as shown in the Prerequisites before. A file named `lambdatest-config.json` is generated in your project using the below command:

```bash
lambdatest-cypress init
```

Here, we have used the below configuration as default and generated it in the `lambdatest-config.json` file. You need to set up the authentication by using TestMu AI credentials. You can check [here](/support/docs/authentication/) for more details about authentication.

```json
{
"lambdatest_auth": {
"username": "<YOUR_LAMBDATEST_USERNAME>",
"access_key": "<Your LambdaTest access key>"
},
"browsers": [
{
"browser": "Chrome",
"platform": "Windows 10",
"versions": ["86.0"]
},
{
"browser": "Firefox",
"platform": "Windows 10",
"versions": ["82.0"]
}
],
"run_settings": {
"cypress_config_file": "cypress.json",
"build_name": "build-name",
"parallels": 1,
"specs": "./*.spec.js",
"ignore_files": "",
"npm_dependencies": {
"cypress": "6.1.0"
},
"feature_file_suppport": false
},
"tunnel_settings": {
"tunnel": false,
"tunnelName": null
}
}
```

Also in `run-settings` section you need to specify the path of your `spec.js` file on which you want to run the test on. Here we will pass the path of a **sample to do** spec.js file for our demo.

```json
"specs": "./cypress/integration/1-getting-started/todo.spec.js"
```

**Note**
In this demo, all occurrences of ``http://localhost:8080`` have been replaced with [https://example.cypress.io](https://example.cypress.io) to prevent running the Cypress tests locally. Alternatively, if you want to run your tests locally, refer to the [**Run locally**](/support/docs/running-your-first-cypress-test/#running-your-cypress-tests-locally-on-lambdatest-platform) section below.

**Step-3:** Execute your tests using the following command in the terminal:

```bash
lambdatest-cypress run
```

## View Your Cypress Testing Results On TestMu AI Platform

As soon as the tests starts executing, you can view them running. Just visit your TestMu AI Automation Dashboard.

**info**
For each test, you can view the live video feed, screenshots for each test run, console logs, terminal logs and do much more using the **TestMu AI platform**.

If the test gets executed successfully, you will see a green tick on the Timeline view and a **"Completed"** message on the Automation logs view of your Automation dashboard. If not, then you will see a red cross and a **"Failed"** message respectively.

## Running Your Cypress Tests Locally On TestMu AI Platform

To run your tests locally on the TestMu AI platform, you need to setup [TestMu AI tunnel](/docs/testing-locally-hosted-pages/), and execute commands using the CLI, or [Download UnderPass](/docs/underpass-tunnel-application/), our GUI based desktop app. Once you have the TestMu AI tunnel or Underpass set up and started, you can use the TestMu AI platform to run your Cypress tests locally.

Now you need to activate the tunnel capability in the `lambdatest_config.json` file under the section "connection_settings" as shown below:

```json title="lambdatest_config.json"
"connection_settings": {
"tunnel": true,
"tunnel_name": "lt-cypress-tunnel"
},
```

You can provide the name of the **TestMu AI tunnel** as per your requirements.

## Using the Cypress Agent Skill with TestMu AI

The [cypress-skill](https://github.com/LambdaTest/agent-skills/tree/main/cypress-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The cypress-skill package includes:

```
cypress-skill/
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

### Installing Cypress Agent Skill

Install a Cypress Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/cypress-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/cypress-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only cypress-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
