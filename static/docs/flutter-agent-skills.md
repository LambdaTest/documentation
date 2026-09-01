# How to Run Flutter Tests With Agent Skills on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Flutter Agent Skills on TestMu AI let your AI coding assistant generate production-ready Flutter and Dart mobile automation from natural-language prompts. The flutter-skill package teaches assistants correct project structure, Dart dependencies, and driver configuration, then runs tests on real devices.

Instead of manually wiring up your Flutter test project, use **Agent Skills** to let your AI coding assistant generate production-ready Flutter and Dart mobile automation for you. The [flutter-skill](https://github.com/LambdaTest/agent-skills/tree/main/flutter-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI assistants how to write production-grade test code and run it on real devices.

## What Agent Skills Are

Self-contained packages of instructions, code patterns, and configurations for a specific testing framework.

Once installed, your AI assistant works like a senior mobile QA automation architect with knowledge of:

- Proper Flutter integration test and Appium Flutter driver project structure
- Correct Dart dependencies and driver configuration
- Both local and TestMu AI real-device cloud execution patterns
- Common pitfalls and debugging approaches
- CI/CD integration with GitHub Actions

## Prerequisites

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install an AI coding assistant: [Claude Code](https://claude.ai/code), [GitHub Copilot](https://github.com/features/copilot), [Cursor](https://cursor.sh/), [Gemini CLI](https://github.com/google-gemini/gemini-cli), or any compatible tool.

## Step 1: Install the Flutter Agent Skill

Clone the repository and copy the Flutter skill into your AI tool's skills directory.

```bash
git clone https://github.com/LambdaTest/agent-skills.git

# For Claude Code
cp -r agent-skills/flutter-skill .claude/skills/

# For Cursor
cp -r agent-skills/flutter-skill .cursor/skills/

# For GitHub Copilot
cp -r agent-skills/flutter-skill .github/skills/

# For Gemini CLI
cp -r agent-skills/flutter-skill .gemini/skills/
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
"Write a Flutter integration test for my app's login screen and run it on TestMu AI real devices"
```

```
"Set up an Appium Flutter driver project in Dart and run it on TestMu AI"
```

```
"Run my Flutter test across a Pixel 7 and an iPhone 15 in parallel on TestMu AI, tag the build as 'release-v1.0'"
```

The Agent Skill automatically handles:

1. **Project setup** - Creates the right Flutter/Dart dependencies, driver configuration, and project structure
2. **Approach detection** - Maps your request to Flutter integration tests or the Appium Flutter driver
3. **Execution target** - Configures local, real-device, or virtual-device execution on TestMu AI based on your request
4. **Best practices** - Uses stable finders, proper waits, and reliable synchronization patterns

## What's Included in the Flutter Skill

A breakdown of everything the skill package contains.

```
flutter-skill/
├── SKILL.md
└── reference/
├── playbook.md
└── advanced-patterns.md
```

| Section | Details |
|---------|---------|
| **Project Setup** | Dart dependencies, driver configuration, project structure |
| **Core Patterns** | Complete, runnable code examples with best practices |
| **Cloud Integration** | TestMu AI real-device capabilities and app-upload configuration |
| **CI/CD Integration** | GitHub Actions workflows with reporting and parallel execution |
| **Debugging Guide** | Common build and driver errors mapped to solutions |
| **Best Practices** | Actionable recommendations for production Flutter test code |

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

- [Run Your First Flutter Test](/support/docs/testing-flutter-apps/)
- [Flutter Supported Capabilities](/support/docs/flutter-supported-capabilities/)
- [Appium Flutter Integration Driver Testing](/support/docs/appium-flutter-integration/)
