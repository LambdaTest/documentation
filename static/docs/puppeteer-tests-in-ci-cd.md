# Puppeteer Testing With CI/CD

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

TestMu AI integrates with a variety of CI/CD solutions to help you pace up your go-to-market launch by automating your delivery pipeline. Similarly, you can run Puppeteer tests in CI/CD across 40+ browsers in the cloud, reducing lead time by 10X and shipping quality builds faster.

Running Puppeteer tests through CI/CD pipeline involves three stages:

1. **Build**: It consists of developing an web app (or code) and hosting it on a staging environment for testing.
2. **Test**: It entails running Puppeteer tests on the TestMu AI platform.
3. **Deploy**: Based on your CI/CD configuration, the deploy stage may or may not present.

## Running Puppeteer Tests Via CI/CD

TestMu AI offers [integration with CI/CD tools](/support/docs/integrations-with-ci-cd-tools/) like Jenkins, Bamboo, AWS CodePipeline, and more. In order to run Puppeteer tests in CI/CD, you need to perform few steps in the **Test** stage of your CI/CD pipeline.

1. Ensure the website (or code) is hosted on staging environment.

2. Import test data in existing databases in order to initiate the tests.

3. If the website under test in hosted on local server, then you will need to configure the TestMu AI tunnel by setting `tunnel` capability to `true` for running local tests via CI/CD on the TestMu AI. However, if the staging website is publicly accessible then this step is not required.

4. Ensure your Puppeteer test scripts uses `puppeteer.connect` method to connect to the CDP endpoint at TestMu AI. Additional parameters for assigning a specific browser and OS combination to your TestMu AI test are contained in the `capabilities` variable.

## Using the Puppeteer Agent Skill with TestMu AI

The [puppeteer-skill](https://github.com/LambdaTest/agent-skills/tree/main/puppeteer-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The puppeteer-skill package includes:

```
puppeteer-skill/
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

### Installing Puppeteer Agent Skill

Install a Puppeteer Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/puppeteer-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/puppeteer-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only puppeteer-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
