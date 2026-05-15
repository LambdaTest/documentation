# TestMu AI (Formerly LambdaTest) Documentation 

<p align="center">
  <a href="https://www.testmuai.com/"><img src="https://img.shields.io/badge/MADE%20BY%20TestMu%20AI-000000.svg?style=for-the-badge&labelColor=000" alt="Made by TestMu AI"></a>
<a href="https://docusaurus.io/"><img src="https://img.shields.io/badge/Built%20with-Docusaurus-3ECC5F.svg?style=for-the-badge&labelColor=000000" alt="Docusaurus"></a>  <a href="https://community.testmuai.com/"><img src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&labelColor=000000" alt="Community"></a>
</p>

## Getting Started

[TestMu AI](https://www.testmuai.com/) (Formerly LambdaTest) is the world's first full-stack AI Agentic Quality Engineering platform that empowers teams to test intelligently, smarter, and ship faster. Built for scale, it offers a full-stack testing cloud with 10K+ real devices and 3,000+ browsers. With AI-native test management, MCP servers, and agent-based automation, TestMu AI supports Selenium, Appium, Playwright, and all major frameworks.

This repository powers TestMu AI documentations built with Docusaurus and React. Contributions are welcome, whether it is fixing a typo or adding a new topic. The docs team will review and ship your changes.

- [Sign up on TestMu AI](https://www.testmuai.com/register/) (Formerly LambdaTest).
- Browse the [TestMu AI Documentation](https://www.testmuai.com/support/docs/) for product guides and references.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) 18.0 or higher (verify with `node -v`)
- [Git](https://git-scm.com/downloads)
- A code editor such as [VS Code](https://code.visualstudio.com/download)

### Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/LambdaTest/documentation && cd documentation
npm install --legacy-peer-deps
```

### Run locally

Start the dev server with hot reload:

```bash
npm start
```

The site runs at `http://localhost:3000`. Stop the server with `Ctrl + C`.

### Build and verify links

Before opening a PR, run a production build to catch broken links and missing images:

```bash
npm run build
npm run serve
```

The build flags issues per file. Fix them, rebuild, and re-serve to verify.

### Publishing workflow

The repo uses two branches:

- `stage`: staging environment, used for review before production
- `main`: production

Workflow:

1. Branch off `stage` and make your changes.
2. Open a PR against `stage` and tag the docs team for review.
3. Once merged, verify your changes on the staging site.
4. When the feature is ready for production, share the related PRs with the docs team. They will merge to `main`.

Merges to `main` deploy to the live documentation site.

## Contributions

Contributions are welcome. Open an issue to discuss your idea before submitting a pull request. When reporting bugs, include your Node.js version, OS, and a link to the affected doc page.

## TestMu AI (Formerly LambdaTest) Community

Connect with testers and developers in the [TestMu AI Community](https://community.testmuai.com/). Ask questions, share what you are building, and discuss best practices in test automation and DevOps.

## TestMu AI (Formerly LambdaTest) Certifications

Earn free [TestMu AI Certifications](https://www.testmuai.com/certifications/) for testers, developers, and QA engineers. Validate your skills in Selenium, Cypress, Playwright, Appium, Espresso and more. Industry-recognized, shareable on LinkedIn, and built by practitioners, not marketers.

## Learning Resources by TestMu AI (Formerly LambdaTest)

Learn modern testing through tutorials, guides, videos, and weekly updates:

* [TestMu AI Blog](https://www.testmuai.com/blog/)
* [TestMu AI Learning Hub](https://www.testmuai.com/learning-hub/)
* [TestMu AI on YouTube](https://www.youtube.com/@TestMuAI)
* [TestMu AI Newsletter](https://www.testmuai.com/newsletter/)

## LambdaTest is Now TestMu AI

On **January 12, 2026**, [LambdaTest evolved to TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/), the world's first fully autonomous **Agentic AI Quality Engineering Platform**.

Same team. Same infrastructure. Same customer accounts. All existing LambdaTest logins, scripts, capabilities, and integrations continue to work without change.

👉 Find the new home for [LambdaTest](https://www.testmuai.com).

### How LambdaTest Evolved into TestMu AI

In 2017, we launched LambdaTest with a simple mission: make testing fast, reliable, and accessible. As LambdaTest grew, we expanded into Test Intelligence, Visual Regression Testing, Accessibility Testing, API Testing, and Performance Testing, covering the full depth of the testing lifecycle.

As software development entered the AI era, testing had to evolve, too. We rebuilt the architecture to be AI-native from the ground up, with autonomous agents that **plan, author, execute, analyze, and optimize tests** while keeping humans in the loop. The platform integrates with your repos, CI, IDEs, and terminals, continuously learning from every code change and development signal.

That evolution earned a new name: **TestMu AI**, built for an AI-first future of quality engineering. TestMu is not a new name for us. It is the name of our annual community conference, which has brought together 100,000+ quality engineers to discuss how AI would reshape testing, long before that became an industry norm.

What started as a high-performance cloud testing platform has transformed into an AI-native, multi-agent system powering a connected, end-to-end quality layer. That evolution defined a new identity: LambdaTest evolved into TestMu AI, built for an AI-first future of quality engineering.

## Support

Got a question? Email [support@testmuai.com](mailto:support@testmuai.com) or chat with us 24x7 from our chat portal.