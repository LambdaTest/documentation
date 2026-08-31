# How to Run XCUITest With Agent Skills on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Running XCUITest with Agent Skills on TestMu AI lets your AI coding assistant generate production-ready iOS UI automation from natural-language prompts, then run those tests on real devices while following proper project structure, Xcode build settings, and cloud execution patterns.

Instead of manually wiring up your XCUITest project, use **Agent Skills** to let your AI coding assistant generate production-ready iOS UI automation for you. The [xcuitest-skill](https://github.com/LambdaTest/agent-skills/tree/main/xcuitest-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI assistants how to write production-grade test code and run it on real devices.

## What Agent Skills Are


Self-contained packages of instructions, code patterns, and configurations for a specific testing framework.

Once installed, your AI assistant works like a senior iOS QA automation architect with knowledge of:

- Proper XCUITest project structure in Swift and Objective-C
- Correct Xcode build settings and test target configuration
- Both local and TestMu AI real-device cloud execution patterns
- Common pitfalls and debugging approaches
- CI/CD integration with GitHub Actions

## Prerequisites


Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install an AI coding assistant: [Claude Code](https://claude.ai/code), [GitHub Copilot](https://github.com/features/copilot), [Cursor](https://cursor.sh/), [Gemini CLI](https://github.com/google-gemini/gemini-cli), or any compatible tool.

## Step 1: Install the XCUITest Agent Skill


Clone the repository and copy the XCUITest skill into your AI tool's skills directory.

```bash
git clone https://github.com/LambdaTest/agent-skills.git

# For Claude Code
cp -r agent-skills/xcuitest-skill .claude/skills/

# For Cursor
cp -r agent-skills/xcuitest-skill .cursor/skills/

# For GitHub Copilot
cp -r agent-skills/xcuitest-skill .github/skills/

# For Gemini CLI
cp -r agent-skills/xcuitest-skill .gemini/skills/
```


Install **all available framework skills** at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).


## Step 2: Set Your Credentials


Add your TestMu AI credentials as environment variables so the generated tests can authenticate with the real device cloud.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then run:

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Step 3: Run Your First Test


Ask your AI assistant to write tests in natural language.

```
"Write an XCUITest for my iOS app's login screen and run it on TestMu AI real devices"
```

```
"Set up an XCUITest project in Swift with a table view test and run it on TestMu AI"
```

```
"Run my XCUITest suite across an iPhone 15 and an iPhone 14 in parallel on TestMu AI, tag the build as 'release-v1.0'"
```

The Agent Skill automatically handles:

1. **Project setup** - Creates the right Xcode test target, build settings, and scheme configuration
2. **Language detection** - Maps your request to Swift or Objective-C
3. **Execution target** - Configures local or TestMu AI real-device execution based on your request
4. **Best practices** - Uses XCUITest idioms (XCUIElement queries, XCUIElementQuery, expectations) for reliable synchronization

## What's Included in the XCUITest Skill


A breakdown of everything the skill package contains.

```
xcuitest-skill/
├── SKILL.md
└── reference/
├── playbook.md
└── advanced-patterns.md
```

| Section | Details |
|---------|---------|
| **Project Setup** | Xcode test target, build settings, scheme configuration |
| **Core Patterns** | Complete, runnable code examples with best practices |
| **Cloud Integration** | TestMu AI real-device capabilities and app-upload configuration |
| **CI/CD Integration** | GitHub Actions workflows with reporting and parallel execution |
| **Debugging Guide** | Common build and test errors mapped to solutions |
| **Best Practices** | Actionable recommendations for production iOS test code |

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

- [Run Your First XCUITest](/support/docs/getting-started-with-xcuitest/)
- [XCUITest Supported Capabilities](/support/docs/xcui-supported-capabilities/)
- [Creating iOS Applications](/support/docs/ios-ipa-files-xcui/)
