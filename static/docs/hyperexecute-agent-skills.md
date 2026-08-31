# How to Run HyperExecute Tests With Agent Skills on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Instead of hand-writing your HyperExecute YAML, use **Agent Skills** to let your AI coding assistant generate a production-ready config and run your test suite at scale. The [hyperexecute-skill](https://github.com/LambdaTest/agent-skills/tree/main/hyperexecute-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI assistants how to write correct config and orchestrate jobs on the HyperExecute grid.

## What Agent Skills Are

Self-contained packages of instructions, config patterns, and examples for a specific tool.

Once installed, your AI assistant works like a senior test-infrastructure engineer with knowledge of:

- Correct HyperExecute YAML structure (matrix, auto-split, and hybrid strategies)
- Test discovery, concurrency, and caching configuration
- CLI usage and credential setup
- Common job errors and how to fix them
- CI/CD integration with GitHub Actions and other pipelines

## Prerequisites

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install an AI coding assistant: [Claude Code](https://claude.ai/code), [GitHub Copilot](https://github.com/features/copilot), [Cursor](https://cursor.sh/), [Gemini CLI](https://github.com/google-gemini/gemini-cli), or any compatible tool.

## Step 1: Install the HyperExecute Agent Skill

Clone the repository and copy the HyperExecute skill into your AI tool's skills directory.

```bash
git clone https://github.com/LambdaTest/agent-skills.git

# For Claude Code
cp -r agent-skills/hyperexecute-skill .claude/skills/

# For Cursor
cp -r agent-skills/hyperexecute-skill .cursor/skills/

# For GitHub Copilot
cp -r agent-skills/hyperexecute-skill .github/skills/

# For Gemini CLI
cp -r agent-skills/hyperexecute-skill .gemini/skills/
```

Install **all available skills** at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).

## Step 2: Set Your Credentials

Add your TestMu AI credentials as environment variables so the generated jobs can authenticate with the HyperExecute grid.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then run:

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Step 3: Run Your First Job

Ask your AI assistant in natural language.

```
"Generate a HyperExecute YAML for my Selenium Java suite with auto-split across 10 concurrent runners and run it"
```

```
"Add matrix multiplexing to my HyperExecute config to run tests on Chrome and Firefox in parallel"
```

```
"My HyperExecute job is failing at the pre-steps - read the error and fix my YAML"
```

The Agent Skill automatically handles:

1. **YAML generation** - Produces a valid HyperExecute config for your framework and repo layout
2. **Strategy selection** - Chooses auto-split, matrix, or hybrid based on your request
3. **Concurrency & discovery** - Configures runners, test discovery, and caching
4. **Debugging** - Maps CLI and job errors to concrete YAML fixes

## What's Included in the HyperExecute Skill

A breakdown of everything the skill package contains.

```
hyperexecute-skill/
├── SKILL.md
└── reference/
├── playbook.md
└── advanced-patterns.md
```

| Section | Details |
|---------|---------|
| **YAML Reference** | Full config schema, flags, and discovery options |
| **Strategies** | Auto-split, matrix multiplexing, and hybrid examples |
| **CLI & Credentials** | Setup, authentication, and job execution |
| **CI/CD Integration** | GitHub Actions and pipeline workflows |
| **Debugging Guide** | Common job/CLI errors mapped to fixes |

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

- [Run Your First HyperExecute Job](/support/docs/hyperexecute-running-your-first-job/)
- [Generate the HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/)
- [Troubleshoot HyperExecute Errors](/support/docs/hyperexecute-how-to-debug-job/)
