# How to Run Selenium Tests With Agent Skills on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Instead of manually setting up your Selenium project, use **Agent Skills** to let your AI coding assistant generate production-ready test automation for you. The [selenium-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI assistants how to write production-grade test code.

## What Agent Skills Are


Self-contained packages of instructions, code patterns, and configurations for specific testing frameworks.

Once installed, your AI assistant works like a senior QA automation architect with knowledge of:

- Proper project structure for each framework
- Correct dependency versions and configurations
- Both local and TestMu AI cloud execution patterns
- Common pitfalls and debugging approaches
- CI/CD integration with GitHub Actions

## Prerequisites


Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install an AI coding assistant: [Claude Code](https://claude.ai/code), [GitHub Copilot](https://github.com/features/copilot), [Cursor](https://cursor.sh/), [Gemini CLI](https://github.com/google-gemini/gemini-cli), or any compatible tool.

## Step 1: Install the Selenium Agent Skill


Clone the repository and copy the Selenium skill into your AI tool's skills directory.

```bash
git clone https://github.com/LambdaTest/agent-skills.git

# For Claude Code
cp -r agent-skills/selenium-skill .claude/skills/

# For Cursor
cp -r agent-skills/selenium-skill .cursor/skills/

# For GitHub Copilot
cp -r agent-skills/selenium-skill .github/skills/

# For Gemini CLI
cp -r agent-skills/selenium-skill .gemini/skills/
```


Install **all available framework skills** at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).


## Step 2: Set Your Credentials


Add your TestMu AI credentials as environment variables so the generated tests can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then run:

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Step 3: Run Your First Test


Ask your AI assistant to write tests in natural language.

```
"Write Selenium tests for the login page and run them on TestMu AI cloud using Chrome and Firefox"
```

```
"Set up a Selenium Java project with TestNG, Page Object Model, and run tests on TestMu AI"
```

```
"Execute Selenium tests across 5 browsers in parallel on TestMu AI, tag the build as 'release-v1.0'"
```

The Agent Skill automatically handles:

1. **Project setup** - Creates the right folder structure, dependencies, and config files
2. **Language detection** - Maps your request to the correct language (Java, Python, JavaScript, C#, Ruby, or PHP)
3. **Execution target** - Configures local or TestMu AI cloud execution based on your request
4. **Best practices** - Uses explicit waits, proper locator strategies, and Page Object Model patterns

## What's Included in the Selenium Skill


A breakdown of everything the skill package contains.

```
selenium-skill/
├── SKILL.md
└── reference/
├── playbook.md
└── advanced-patterns.md
```

| Section | Details |
|---------|---------|
| **Project Setup** | Dependencies, versions, configuration files, project structure |
| **Core Patterns** | Complete, runnable code examples with best practices |
| **Cloud Integration** | TestMu AI RemoteWebDriver and capabilities configuration |
| **CI/CD Integration** | GitHub Actions workflows with reporting and parallel execution |
| **Debugging Guide** | 11+ common exceptions mapped to solutions |
| **Best Practices** | 14+ actionable recommendations for production code |

## Supported Languages and Frameworks


The Selenium Agent Skill supports 6 languages. Each framework below also has its own dedicated Agent Skill with framework-specific patterns.

### Java


| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| TestNG | [testng-skill](https://github.com/LambdaTest/agent-skills/tree/main/testng-skill) | [TestNG with Selenium](/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/?framework=testng) |
| JUnit 5 | [junit-5-skill](https://github.com/LambdaTest/agent-skills/tree/main/junit-5-skill) | [JUnit with Selenium](/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/?framework=junit) |
| Cucumber | [cucumber-skill](https://github.com/LambdaTest/agent-skills/tree/main/cucumber-skill) | [Cucumber with Selenium](/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/?framework=cucumber) |
| Selenide | [selenide-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenide-skill) | [Selenide Framework](/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/?framework=selenide) |
| Gauge | [gauge-skill](https://github.com/LambdaTest/agent-skills/tree/main/gauge-skill) | [Gauge Framework](/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/?framework=gauge) |
| Geb | [geb-skill](https://github.com/LambdaTest/agent-skills/tree/main/geb-skill) | [Geb Framework](/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/?framework=geb) |
| Serenity BDD | [serenity-bdd-skill](https://github.com/LambdaTest/agent-skills/tree/main/serenity-bdd-skill) | [Serenity BDD](/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/?framework=serenity) |

### JavaScript


| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| Mocha | [mocha-skill](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill) | [Mocha with Selenium](/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/?framework=mocha) |
| Jest | [jest-skill](https://github.com/LambdaTest/agent-skills/tree/main/jest-skill) | [Jest with Selenium](/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/?framework=jest) |
| WebdriverIO | [webdriverio-skill](https://github.com/LambdaTest/agent-skills/tree/main/webdriverio-skill) | [WebdriverIO](/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/?framework=webdriverio) |
| Nightwatch.js | [nightwatchjs-skill](https://github.com/LambdaTest/agent-skills/tree/main/nightwatchjs-skill) | [Nightwatch.js](/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/?framework=nightwatch) |
| Protractor | [protractor-skill](https://github.com/LambdaTest/agent-skills/tree/main/protractor-skill) | Protractor |
| TestCafe | [testcafe-skill](https://github.com/LambdaTest/agent-skills/tree/main/testcafe-skill) | [TestCafe](/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/?framework=testcafe) |
| Jasmine | [jasmine-skill](https://github.com/LambdaTest/agent-skills/tree/main/jasmine-skill) | [Jasmine with Karma](/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/?framework=jasmine) |
| Karma | [karma-skill](https://github.com/LambdaTest/agent-skills/tree/main/karma-skill) | [Karma Integration](/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/?framework=karma) |
| CucumberJS | [cucumber-skill](https://github.com/LambdaTest/agent-skills/tree/main/cucumber-skill) | [CucumberJS](/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/?framework=cucumberjs) |
| NemoJS | [nemojs-skill](https://github.com/LambdaTest/agent-skills/tree/main/nemojs-skill) | [NemoJS](/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/?framework=nemojs) |

### C#


| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| NUnit | [nunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/nunit-skill) | [NUnit with Selenium](/docs/c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/?framework=nunit) |
| MSTest | [mstest-skill](https://github.com/LambdaTest/agent-skills/tree/main/mstest-skill) | [MSTest with Selenium](/docs/c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/?framework=mstest) |
| xUnit | [xunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/xunit-skill) | [xUnit with Selenium](/docs/c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/?framework=xunit) |
| SpecFlow | [specflow-skill](https://github.com/LambdaTest/agent-skills/tree/main/specflow-skill) | [SpecFlow with Selenium](/docs/c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/?framework=specflow) |

### Python


| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| pytest | [pytest-skill](https://github.com/LambdaTest/agent-skills/tree/main/pytest-skill) | [pytest with Selenium](/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/?framework=pytest) |
| unittest | [unittest-skill](https://github.com/LambdaTest/agent-skills/tree/main/unittest-skill) | [unittest](/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/?framework=unittest) |
| Robot Framework | [robot-framework-skill](https://github.com/LambdaTest/agent-skills/tree/main/robot-framework-skill) | [Robot Framework](/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/?framework=robot) |
| Behave | [behave-skill](https://github.com/LambdaTest/agent-skills/tree/main/behave-skill) | [Behave with Selenium](/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/?framework=behave) |
| Lettuce | [lettuce-skill](https://github.com/LambdaTest/agent-skills/tree/main/lettuce-skill) | Lettuce with Selenium |

### PHP


| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| PHPUnit | [phpunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/phpunit-skill) | [PHPUnit](/docs/php-with-selenium-running-php-automation-scripts-on-testmu-selenium-grid/?framework=phpunit) |
| Behat | [behat-skill](https://github.com/LambdaTest/agent-skills/tree/main/behat-skill) | [Behat](/docs/php-with-selenium-running-php-automation-scripts-on-testmu-selenium-grid/?framework=behat) |
| Laravel Dusk | [laravel-dusk-skill](https://github.com/LambdaTest/agent-skills/tree/main/laravel-dusk-skill) | [Laravel Dusk](/docs/php-with-selenium-running-php-automation-scripts-on-testmu-selenium-grid/?framework=laravel) |
| Codeception | [codeception-skill](https://github.com/LambdaTest/agent-skills/tree/main/codeception-skill) | [Codeception](/docs/php-with-selenium-running-php-automation-scripts-on-testmu-selenium-grid/?framework=codeception) |

### Ruby


| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| RSpec | [rspec-skill](https://github.com/LambdaTest/agent-skills/tree/main/rspec-skill) | [RSpec](/docs/ruby-with-selenium-running-ruby-automation-scripts-on-testmu-selenium-grid/?framework=rspec) |
| Capybara | [capybara-skill](https://github.com/LambdaTest/agent-skills/tree/main/capybara-skill) | [Capybara](/docs/ruby-with-selenium-running-ruby-automation-scripts-on-testmu-selenium-grid/?framework=capybara) |
| Test::Unit | [testunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/testunit-skill) | [Test::Unit](/docs/ruby-with-selenium-running-ruby-automation-scripts-on-testmu-selenium-grid/?framework=testunit) |

## Supported AI Tools


Pick the tool you use and install the skill to the corresponding path.

| Tool | Type | Installation Path |
|------|------|-------------------|
| Claude Code | CLI | `.claude/skills/` |
| GitHub Copilot | Extension | `.github/skills/` |
| Cursor | IDE | `.cursor/skills/` |
| Gemini CLI | CLI | `.gemini/skills/` |
| Codex CLI | CLI | `.codex/skills/` |
| OpenCode | CLI | `.opencode/skills/` |
| Claude.ai | Web | Settings > Features > Skills |

## Next Steps


Continue with these related guides:

- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Debugging Options](/support/docs/debugging-options/)
