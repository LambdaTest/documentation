# Agent Skills

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

**Agent Skills** are instruction packages that teach an AI coding assistant how to write and run test automation on TestMu AI. Install one, and your assistant works like an SDET who already knows that framework's project layout, dependency versions, cloud execution config, and CI wiring.

Each skill is open source and framework-specific. A skill covers one framework or platform, so the agent uses that tool's own idioms instead of generic automation code. The full set lives in the [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills) repository.

Skills work with Claude Code, GitHub Copilot, Cursor, Gemini CLI, and any assistant that loads custom skills.

## How to Install a Skill

Use the `agentskillsforall` installer to add a skill straight from the repository. No manual cloning is required.




Add skills by name. Run the installer once per skill you want:

```bash
npx agentskillsforall add https://github.com/LambdaTest/agent-skills.git --skill selenium-skill
npx agentskillsforall add https://github.com/LambdaTest/agent-skills.git --skill playwright-skill
npx agentskillsforall add https://github.com/LambdaTest/agent-skills.git --skill cypress-skill
```




List every skill in the repository, then install the one you want:

```bash
npx agentskillsforall list https://github.com/LambdaTest/agent-skills.git
```




Once installed, ask your assistant to write and run tests. It picks up the matching skill automatically.

## Core Skills by Framework and Platform

Pick the skill for the framework you already test in. Each card opens that skill's source on GitHub. Web frameworks run on the TestMu AI browser grid, and app frameworks target real Android and iOS devices.





Web Automation


    Selenium↗
    WebDriver tests that run on the TestMu AI browser grid.


    Cypress↗
    End-to-end specs that run locally and on the cloud.


    Playwright↗
    Cross-browser tests with fast cloud execution.


    Puppeteer↗
    Headless Chrome automation on the TestMu AI cloud.



App Automation


    Appium↗
    One suite for real Android and iOS devices.


    Espresso↗
    Native Android UI tests with Espresso.


    XCUITest↗
    Native iOS UI tests with XCUITest.


    Flutter↗
    Widget and integration tests for Flutter apps.



Cloud, Visual &amp; Platform


    HyperExecute↗
    Shard test suites across the HyperExecute cloud.


    SmartUI↗
    Visual regression with pixel-diff baselines.


    Browser Cloud↗
    A real cloud browser for any AI agent.


    Kane CLI↗
    Natural-language browser automation in agent mode.





## Explore the Full Skill Catalog

The 12 skills above are the most common starting points. The repository ships 70+ skills across eight testing categories.

Beyond web and mobile, it covers BDD (Cucumber, Behave, SpecFlow), unit testing (Jest, Pytest, JUnit 5, TestNG), and API testing (Postman, Newman, OpenAPI). List everything with `npx agentskillsforall list`, or browse the [full skill catalog on GitHub](https://github.com/LambdaTest/agent-skills).
