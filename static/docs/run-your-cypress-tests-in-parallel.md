# Run Your Cypress Tests In Parallel

If you want to run your tests parallelly on the TestMu AI platform, you can do that using either of the following two ways:

### 1. Run your Cypress tests Parallelly using the CLI

To perform Cypress testing parallelly using the CLI, you need to use the "`--parallels`" option while running your tests.

**Syntax:**

```bash
--parallels <number of parallel sessions>
```

For example, if you want to run your Cypress tests on 5 parallel sessions, you can use the below command:

```bash
lambdatest-cypress run --parallels 5
```

### 2. Run your Cypress tests Parallelly using the lambdatest-configuration.json file

To run your Cypress testing parallelly, you can also use the **lambdatest-configuration.json** file, using the '**parallels**' key.

**Syntax:**

```json
{
"run_settings": {
...
"parallels": <number of parallel sessions>,
...
}
}
```

For example, if you want to run your Cypress tests on 5 parallel sessions, use the below settings:

```json
{
"run_settings": {
...
"parallels": 5,
...
}
}
```

**NOTE**

The number of parallel test running on the TestMu AI platform at a time, is based on the concurrency plan of your TestMu AI account. In case the number of parallel tests is more than the concurrency plan, the remaining tests will get queued and run after the existing tests are complete. For example, suppose you have a concurrency plan of 5 parallel sessions and want to run 50 tests parallelly. In this case, only 5 parallel tests will be executed at a time, and the rest 45 will be queued. As the test finishes running, the queued tests will be moved to the running state based on availability.

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
