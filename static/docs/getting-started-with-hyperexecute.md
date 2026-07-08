# Getting Started with HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Welcome to HyperExecute, **an AI-Native Test Orchestration Cloud Platform**, designed to accelerate your testing process, enabling test automation teams worldwide to achieve an accelerated time to market by providing **JIT (Just-in-time) testing infrastructure**.

If you want to learn more about HyperExecute and how it can enable your team, then you are the right place. This guide will help you take your first steps with HyperExecute, from understanding the basics to running your first test.

## What is HyperExecute?

HyperExecute by TestMu AI is a cutting-edge, AI-powered platform designed for DevOps teams and QA engineers to significantly accelerate software testing pipelines. HyperExecute **replaces traditional hub-and-node test grids** with advanced orchestration techniques, **eliminating network latency and optimizing resource usage**. With HyperExecute:

  - **Slash your time-to-market** with parallel execution that distributes tests optimally across available resources improving efficiency.
  - **Make data-driven testing decisions** using historical performance trends that reveal patterns and help optimize your testing strategy
  - **Never worry about infrastructure constraints** with dynamic scaling to handle peak testing demands, running 10 tests or 10,000.
  - **Enable multiple teams using different frameworks** to run tests simultaneously across various environments on same license.

Whether testing web or mobile applications, HyperExecute empowers your team to deliver higher-quality software rapidly and reliably.

## Compatible with All Major Frameworks
HyperExecute seamlessly supports all major test automation frameworks as shown below. Regardless of your existing testing stack, it will integrate smoothly to enhance your workflows without disruption.

    In case your favorite framework or tool isn't listed here, just give us a Shout Out Here.
    In case of any other problems, feel free to Contact Us.

## Let's Run your First Test
Ready to experience the power of HyperExecute? Getting started is easy. We’ve simplified the process so you can effortlessly launch your first test with three flexible approaches and experience the speed by yourself:

**RUN SAMPLE TEST**

    Execute tests directly from the HyperExecute Portal with sample setup - perfect for new users who want to see results immediately.

    Learn More

     Run tests from your own machine using the HyperExecute CLI with sample project and preset configuration file.

     Learn More

    Run your tests in a fully managed online development environment, without any local installations or configurations.

    Learn More

## Watch HyperExecute in Action

Get a comprehensive overview of HyperExecute's capabilities by watching our introductory webinar.

## Next Steps

Now that you've set up HyperExecute and run your first test, explore these resources to make the most of the platform:

      Running Your First Job on HyperExecute
      A step-by-step walkthrough of how to run your first job on the HyperExecute Platform.

      HyperExecute CLI
      Understand how you can initiate jobs using our CLI from your local setup or CI/CD pipelines.

      HyperExecute YAML
      Learn about the different configurations & creating a YAML suited for your needs.

      Status
      Everything you need to know about HyperExecute status and what does it implies.

      Key Features
      Learn about the different features and how you can use them in your project.

      HyperExecute vs Traditional Test grids
      Understand how we expedite test execution as compared to traditional grids.

      HyperExecute Private Cloud
      Learn how to setup HyperExecute Private Cloud for your organization.

      Integrations
      Know how to setup with your CI/CD, Project management tools and TestMu AI products.

**We’re Already in Your Favorite Cloud!**
Deploy our cloud-native test orchestration platform directly from your trusted marketplace:
- [Microsoft Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/lambdatestinc1584019832435.hyper_execute?exp=ubp8&tab=Overview)
- [Amazon Web Services Marketplace](https://aws.amazon.com/marketplace/pp/prodview-35cneaxfou2eq)
- [Google Cloud Provider Marketplace](https://console.cloud.google.com/marketplace/product/hyperexecute-privatecloud/lambdatest?pli=1)

## Using the HyperExecute Agent Skill with TestMu AI

The [hyperexecute-skill](https://github.com/LambdaTest/agent-skills/tree/main/hyperexecute-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The hyperexecute-skill package includes:

```
hyperexecute-skill/
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

### Installing HyperExecute Agent Skill

Install a HyperExecute Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/hyperexecute-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/hyperexecute-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only hyperexecute-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
