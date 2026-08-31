# Appium Supported Languages and Frameworks

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Here is a list of languages and frameworks that are supported by the TestMu AI to run Appium automation tests on [TestMu AI Real Device Cloud Platform](https://www.testmuai.com/real-device-cloud/).






          Java


          JUnit


          JBehave


          Cucumber


          TestNG







          JavaScript


          WebDriverIO


          Mocha







          Python


          Behave


          Robot


          Gauge


          PyTest







          Ruby


          Cucumber


          RSpec







          PHP


          Behat







          C#


          NUnit





    We support all languages and frameworks that are compatible with Appium, so in case your favorite isn't in the table.Don't worry, you can still run the test. Contact Us for any help.


**note**

We are preparing documentation for more frameworks. If you want us to prioritize documentation of your preferred framework then feel free to give us a **shout**.





## Using the Appium Agent Skill with TestMu AI


The [appium-skill](https://github.com/LambdaTest/agent-skills/tree/main/appium-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The appium-skill package includes:

```
appium-skill/
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


### Installing Appium Agent Skill


Install a Appium Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/appium-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/appium-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only appium-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
