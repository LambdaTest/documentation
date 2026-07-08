# Detox Testing on HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Detox is a popular end-to-end testing framework for React Native applications. This documentation will help you run your Detox tests on TestMu AI HyperExecute using your local system setup.

## Run a Sample Project
### Step 1: Clone Sample Repository

**Detox repo**
Download or Clone the Detox sample from TestMu AI’s GitHub Repository

 View on GitHub

### Step 2: Download the CLI in your Project
Download the HyperExecute CLI and copy it into the root folder of the downloaded sample repository.

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

### Step 3: Execute your Test Suite
From the project root directory, execute the below CLI command in your terminal:

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

> **NOTE :** In case of macOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

You've successfully triggered the Detox tests on HyperExecute. Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

## Configure your own Project

### Step 1: Download the CLI in your Project
Download the HyperExecute CLI and copy it into the root folder.

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

### Step 2: Configure YAML in your Test Suite
Use the sample YAML below to configure your execution:

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/LT-detox/blob/main/yaml/hyperexecute.yaml
```

> 📘 To explore more configuration options and tailor settings to your project needs, check out the [YAML documentation](/support/docs/hyperexecute-yaml-parameters/).

### Step 3: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

You can click on **View Test** from the **HyperExecute logs**, which will take you to the [App Automation dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build). There, you can access detailed **device logs**, **crash logs**, and **Metadata** for your test. You’ll also be able to watch a **video recording** of the Test sessions for better **debugging** and **analysis**.

> For any query or doubt, please feel free to contact us via **24×7 chat support** or you can also drop a mail to **support@testmuai.com**.

## Using the Detox Agent Skill with TestMu AI

The [detox-skill](https://github.com/LambdaTest/agent-skills/tree/main/detox-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The detox-skill package includes:

```
detox-skill/
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

### Installing Detox Agent Skill

Install a Detox Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/detox-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/detox-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only detox-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
