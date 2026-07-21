---
id: agent-skills
title: TestMu AI Agent Skills for Test Automation Frameworks
hide_title: true
sidebar_label: AI Agent Skills
description: Install TestMu AI Agent Skills so your AI coding assistant writes and runs Selenium, Cypress, Playwright, Appium, and 70+ framework tests on the cloud.
keywords:
  - testmu ai agent skills
  - ai agent skills for test automation
  - install agent skills
  - selenium agent skill
  - playwright agent skill
url: https://www.testmuai.com/support/docs/agent-skills/
site_name: TestMu AI
slug: agent-skills/
canonical: https://www.testmuai.com/support/docs/agent-skills/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Agent Skills 
---

**Agent Skills** are instruction packages that teach an AI coding assistant how to write and run test automation on TestMu AI. Install one, and your assistant works like an SDET who already knows that framework's project layout, dependency versions, cloud execution config, and CI wiring.

Each skill is open source and framework-specific. A skill covers one framework or platform, so the agent uses that tool's own idioms instead of generic automation code. The full set lives in the [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills) repository.

Skills work with Claude Code, GitHub Copilot, Cursor, Gemini CLI, and any assistant that loads custom skills.

## How to Install a Skill

Use the `agentskillsforall` installer to add a skill straight from the repository. No manual cloning is required.

<Tabs className='docs__val' groupId='skill-install'>
<TabItem value='install-specific' label='Install a specific skill' default>

Add skills by name. Run the installer once per skill you want:

```bash
npx agentskillsforall add https://github.com/LambdaTest/agent-skills.git --skill selenium-skill
npx agentskillsforall add https://github.com/LambdaTest/agent-skills.git --skill playwright-skill
npx agentskillsforall add https://github.com/LambdaTest/agent-skills.git --skill cypress-skill
```

</TabItem>
<TabItem value='browse-all' label='Browse all available skills'>

List every skill in the repository, then install the one you want:

```bash
npx agentskillsforall list https://github.com/LambdaTest/agent-skills.git
```

</TabItem>
</Tabs>

Once installed, ask your assistant to write and run tests. It picks up the matching skill automatically.

## Core Skills by Framework and Platform

Pick the skill for the framework you already test in. Each card opens that skill's source on GitHub. Web frameworks run on the TestMu AI browser grid, and app frameworks target real Android and iOS devices.

<style>{`
  .lt-sk-wrap { margin: 1.5rem 0 0.5rem; }
  .lt-sk-cat {
    font-size: .78rem; font-weight: 800; letter-spacing: .09em; text-transform: uppercase;
    color: #0969DA; margin: 2rem 0 1rem; display: flex; align-items: center; gap: .75rem;
  }
  .lt-sk-cat::after {
    content: ""; flex: 1; height: 1px;
    background: linear-gradient(90deg, rgba(9,105,218,.30), rgba(9,105,218,0));
  }
  .lt-sk-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(248px, 1fr)); gap: 1rem;
  }
  .lt-sk-card {
    position: relative; display: flex; flex-direction: column; gap: .55rem;
    padding: 1.25rem 1.25rem 1.35rem; border-radius: 16px;
    border: 1px solid rgba(9,105,218,.14);
    background: linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%);
    text-decoration: none !important; overflow: hidden;
    box-shadow: 0 1px 2px rgba(16,24,40,.05);
    transition: transform .24s cubic-bezier(.2,.8,.2,1), box-shadow .24s ease, border-color .24s ease;
  }
  .lt-sk-card::before {
    content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #0969DA, #7B5CFF); opacity: 0; transition: opacity .24s ease;
  }
  .lt-sk-card:hover {
    transform: translateY(-6px); border-color: rgba(9,105,218,.45);
    box-shadow: 0 18px 34px -14px rgba(9,105,218,.35); text-decoration: none !important;
  }
  .lt-sk-card:hover::before { opacity: 1; }
  .lt-sk-top { display: flex; align-items: center; justify-content: space-between; gap: .5rem; }
  .lt-sk-meta { display: flex; align-items: center; gap: .4rem; }
  .lt-sk-gh { color: #24292f; opacity: .55; transition: opacity .24s ease; }
  .lt-sk-card:hover .lt-sk-gh { opacity: 1; }
  .lt-sk-arrow { color: #0969DA; font-size: 1.15rem; font-weight: 700; transition: transform .24s ease; }
  .lt-sk-card:hover .lt-sk-arrow { transform: translateX(5px); }
  [data-theme='dark'] .lt-sk-gh { color: #e6edf3; }
  .lt-sk-name { font-size: 1.06rem; font-weight: 700; color: #101828; margin: 0; }
  .lt-sk-desc { font-size: .855rem; line-height: 1.5; color: #4b5563; margin: 0; flex: 1; }
  [data-theme='dark'] .lt-sk-cat  { color: #58a6ff; }
  [data-theme='dark'] .lt-sk-card {
    background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.015));
    border-color: rgba(88,166,255,.20);
  }
  [data-theme='dark'] .lt-sk-card:hover {
    border-color: rgba(88,166,255,.55); box-shadow: 0 18px 34px -14px rgba(0,0,0,.65);
  }
  [data-theme='dark'] .lt-sk-name { color: #e6edf3; }
  [data-theme='dark'] .lt-sk-desc { color: #9aa4b2; }
`}</style>

<div className="lt-sk-wrap">

<div className="lt-sk-cat">Web Automation</div>
<div className="lt-sk-grid">
  <a className="lt-sk-card" href="https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill">
    <div className="lt-sk-top"><p className="lt-sk-name">Selenium</p><span className="lt-sk-meta"><svg className="lt-sk-gh" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="lt-sk-arrow">↗</span></span></div>
    <p className="lt-sk-desc">WebDriver tests that run on the TestMu AI browser grid.</p>
  </a>
  <a className="lt-sk-card" href="https://github.com/LambdaTest/agent-skills/tree/main/cypress-skill">
    <div className="lt-sk-top"><p className="lt-sk-name">Cypress</p><span className="lt-sk-meta"><svg className="lt-sk-gh" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="lt-sk-arrow">↗</span></span></div>
    <p className="lt-sk-desc">End-to-end specs that run locally and on the cloud.</p>
  </a>
  <a className="lt-sk-card" href="https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill">
    <div className="lt-sk-top"><p className="lt-sk-name">Playwright</p><span className="lt-sk-meta"><svg className="lt-sk-gh" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="lt-sk-arrow">↗</span></span></div>
    <p className="lt-sk-desc">Cross-browser tests with fast cloud execution.</p>
  </a>
  <a className="lt-sk-card" href="https://github.com/LambdaTest/agent-skills/tree/main/puppeteer-skill">
    <div className="lt-sk-top"><p className="lt-sk-name">Puppeteer</p><span className="lt-sk-meta"><svg className="lt-sk-gh" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="lt-sk-arrow">↗</span></span></div>
    <p className="lt-sk-desc">Headless Chrome automation on the TestMu AI cloud.</p>
  </a>
</div>

<div className="lt-sk-cat">App Automation</div>
<div className="lt-sk-grid">
  <a className="lt-sk-card" href="https://github.com/LambdaTest/agent-skills/tree/main/appium-skill">
    <div className="lt-sk-top"><p className="lt-sk-name">Appium</p><span className="lt-sk-meta"><svg className="lt-sk-gh" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="lt-sk-arrow">↗</span></span></div>
    <p className="lt-sk-desc">One suite for real Android and iOS devices.</p>
  </a>
  <a className="lt-sk-card" href="https://github.com/LambdaTest/agent-skills/tree/main/espresso-skill">
    <div className="lt-sk-top"><p className="lt-sk-name">Espresso</p><span className="lt-sk-meta"><svg className="lt-sk-gh" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="lt-sk-arrow">↗</span></span></div>
    <p className="lt-sk-desc">Native Android UI tests with Espresso.</p>
  </a>
  <a className="lt-sk-card" href="https://github.com/LambdaTest/agent-skills/tree/main/xcuitest-skill">
    <div className="lt-sk-top"><p className="lt-sk-name">XCUITest</p><span className="lt-sk-meta"><svg className="lt-sk-gh" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="lt-sk-arrow">↗</span></span></div>
    <p className="lt-sk-desc">Native iOS UI tests with XCUITest.</p>
  </a>
  <a className="lt-sk-card" href="https://github.com/LambdaTest/agent-skills/tree/main/flutter-testing-skill">
    <div className="lt-sk-top"><p className="lt-sk-name">Flutter</p><span className="lt-sk-meta"><svg className="lt-sk-gh" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="lt-sk-arrow">↗</span></span></div>
    <p className="lt-sk-desc">Widget and integration tests for Flutter apps.</p>
  </a>
</div>

<div className="lt-sk-cat">Cloud, Visual &amp; Platform</div>
<div className="lt-sk-grid">
  <a className="lt-sk-card" href="https://github.com/LambdaTest/agent-skills/tree/main/hyperexecute-skill">
    <div className="lt-sk-top"><p className="lt-sk-name">HyperExecute</p><span className="lt-sk-meta"><svg className="lt-sk-gh" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="lt-sk-arrow">↗</span></span></div>
    <p className="lt-sk-desc">Shard test suites across the HyperExecute cloud.</p>
  </a>
  <a className="lt-sk-card" href="https://github.com/LambdaTest/agent-skills/tree/main/smartui-skill">
    <div className="lt-sk-top"><p className="lt-sk-name">SmartUI</p><span className="lt-sk-meta"><svg className="lt-sk-gh" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="lt-sk-arrow">↗</span></span></div>
    <p className="lt-sk-desc">Visual regression with pixel-diff baselines.</p>
  </a>
  <a className="lt-sk-card" href="https://github.com/LambdaTest/agent-skills">
    <div className="lt-sk-top"><p className="lt-sk-name">Browser Cloud</p><span className="lt-sk-meta"><svg className="lt-sk-gh" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="lt-sk-arrow">↗</span></span></div>
    <p className="lt-sk-desc">A real cloud browser for any AI agent.</p>
  </a>
  <a className="lt-sk-card" href="https://github.com/LambdaTest/agent-skills">
    <div className="lt-sk-top"><p className="lt-sk-name">Kane CLI</p><span className="lt-sk-meta"><svg className="lt-sk-gh" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="lt-sk-arrow">↗</span></span></div>
    <p className="lt-sk-desc">Natural-language browser automation in agent mode.</p>
  </a>
</div>

</div>

## Explore the Full Skill Catalog

The 12 skills above are the most common starting points. The repository ships 70+ skills across eight testing categories.

Beyond web and mobile, it covers BDD (Cucumber, Behave, SpecFlow), unit testing (Jest, Pytest, JUnit 5, TestNG), and API testing (Postman, Newman, OpenAPI). List everything with `npx agentskillsforall list`, or browse the [full skill catalog on GitHub](https://github.com/LambdaTest/agent-skills).
