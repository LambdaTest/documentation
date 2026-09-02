---
id: test-manager
title: "Test Manager | TestMu AI Documentation"
hide_title: true
sidebar_label: Overview
description: Test Manager is TestMu AI's AI-native test management platform. Create, organize, execute, and report on manual and automated tests from one workspace.
keywords:
  - test manager
  - test management platform
  - test case management
  - ai test case generation
  - creating projects
  - test case
  - test case import
  - test case creation
  - test case repository
  - test runs
  - test execution
  - jira sync
  - azure devops sync
  - testrail migration
  - zephyr migration
  - xray migration
  - exploratory testing
  - test reporting dashboard
  - real time testing using test manager
url: https://www.testmuai.com/support/docs/test-manager/
site_name: TestMu AI
slug: test-manager/
canonical: https://www.testmuai.com/support/docs/test-manager/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Test Manager",
          "item": `${BRAND_URL}/support/docs/test-manager/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${BRAND_URL}/support/docs/test-manager/#faq`,
        "mainEntity": [{
          "@type": "Question",
          "name": "Is Test Manager free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. TestMu AI offers a no-cost tier that includes core test case creation, management, and execution features. Paid plans unlock advanced AI-powered authoring, unlimited test runs, and priority support. See <a href='https://www.testmuai.com/pricing/?product=test-manager'>Test Manager pricing</a> for details."
          }
        },{
          "@type": "Question",
          "name": "Can I import my existing test cases?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Use the migration wizard for TestRail, Zephyr, Xray, or qTest, or import from any tool via CSV. Custom fields and values are mapped automatically."
          }
        },{
          "@type": "Question",
          "name": "Does Test Manager support both manual and automated tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Manual and automated test cases live in the same repository, run in the same workspace, and report into the same dashboards."
          }
        },{
          "@type": "Question",
          "name": "How does the AI generate test cases?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Click Generate with AI while authoring, then describe what you want to test in natural language, or provide a Jira ticket, PDF, image, audio, or video. Test Manager generates structured, editable test steps with preconditions, expected results, and priorities."
          }
        },{
          "@type": "Question",
          "name": "Which tools does Test Manager integrate with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jira and Azure DevOps with two-way sync, plus marketplace apps for both. Test Manager also integrates with GitHub, GitLab, and all major issue trackers."
          }
        }]
      })
    }}
></script>

# Introduction to Test Manager
***

Test Manager is <BrandName />'s AI-native test management platform for planning, creating, executing, and reporting on software tests. It gives QA teams a single workspace for manual and automated test cases, test runs, two-way sync with Jira and Azure DevOps, and release-readiness reporting, with AI that generates test cases from natural language.

## What you can do with Test Manager

Test Manager covers the full test management lifecycle:

- Generate test cases with AI from natural language, Jira tickets, PDFs, images, audio, or video.
- Create, organize, and maintain manual and automated test cases in one central repository.
- Plan test runs, execute them step by step, and record results with evidence.
- Sync test cases and defects two-way with Jira and Azure DevOps.
- Migrate from TestRail, Zephyr, Xray, or qTest with automated field mapping.
- Track pass rates, defect trends, coverage, and release readiness on real-time dashboards.
- Run guided exploratory testing sessions on desktop and mobile.

## AI test case generation

Create test cases using natural language descriptions or existing inputs such as Jira tickets, PDFs, images, audio, and video. Test Manager analyzes the provided context and generates structured test cases with detailed test steps, preconditions, expected results, and priority assignments.

Every generated test case is fully editable, with support for custom fields, tags, and attachments. Context-aware AI detects duplicate tests so you can reuse common cases instead of recreating them, and suggests edge cases to improve coverage. Teams cut test case creation time by up to 60%, which frees testers to focus on strategy, coverage, and quality decisions.

## Centralized test case repository

Test Manager stores every test case, manual and automated, in one structured repository, giving teams a single source of truth for test case management. Organize cases into folders, tag them, and track versions, ownership, and execution status from a single dashboard, so teams can handle thousands of test cases without losing structure.

You can also import existing test cases in bulk using CSV. The import supports custom fields and values present in your files, so your data arrives with its structure intact.

## Test runs and execution

Create a test run, add test cases, and assign them to testers. During manual execution, testers see each test step in sequence and record pass/fail results with attached evidence. Automated tests can be triggered from the same workspace, and results from manual and automated runs flow into one unified view, executed against real browsers and devices in the <BrandName /> cloud.


## Two-way Jira and Azure DevOps sync

Connect your Jira or Azure DevOps account to link issues and work items with test cases, test runs, and results. Updates made on either side are reflected across both platforms automatically, with no copy-pasting and no version mismatches.

<BrandName /> also publishes Test Manager apps on both the Atlassian Marketplace and the Azure DevOps Marketplace, which add story-level tracking: see test cases and runs inside a Jira story or an Azure DevOps work item, track linked issues, and update test case status without leaving the tool your team already works in. QA-to-dev handoffs can trigger automatically based on issue status changes.

## Migrate from TestRail, Zephyr, or Xray

Test Manager supports direct migration from TestRail, Zephyr, Xray, qTest, and any CSV-compatible source. The migration wizard imports your data via API or CSV and automatically maps folder structures, custom fields, and values, so test cases arrive with their history, traceability, and linked integrations intact. No manual rework is needed.

## Reporting and dashboards

Real-time dashboards surface what matters: pass rates, defect trends, test coverage, and release readiness. QA leads and leadership get executive views of testing progress across teams and releases, so status reporting happens automatically instead of through manually assembled decks.

## Exploratory testing

Run guided exploratory testing sessions across desktop and mobile. Attach evidence as you explore, track session status, and review build history, so you get structured exploration with a complete record of what was tested.

## Integrations

<BrandName /> also publishes Test Manager apps on both the Atlassian Marketplace and the Azure DevOps Marketplace, which add story-level tracking: see test cases and runs inside a Jira story or an Azure DevOps work item, track linked issues, and update test case status without leaving the tool your team already works in. QA-to-dev handoffs can trigger automatically based on issue status changes.

## Getting started

1. **Create an account** at [testmuai.com](https://www.testmuai.com/register/) and open Test Manager from your dashboard.
2. **Create your first test case** by clicking **Generate with AI** and describing the scenario in natural language, writing steps manually, or importing existing cases via CSV.
3. **Organize and run** by grouping test cases into folders, creating a test run, assigning testers, and executing.
4. **Connect your tools** by linking Jira or Azure DevOps under Integrations to sync test cases and defects.
5. **Review results** on the dashboard to track pass rates, coverage, and release readiness.

Start with [Set up your project](/support/docs/create-projects/) to create your first Test Manager project.

## Frequently asked questions

### Is Test Manager free?

Yes. <BrandName /> offers a no-cost tier that includes core test case creation, management, and execution features. Paid plans unlock advanced AI-powered authoring, unlimited test runs, and priority support. See [Test Manager pricing](https://www.testmuai.com/pricing/?product=test-manager) for details.

### Can I import my existing test cases?

Yes. Use the migration wizard for TestRail, Zephyr, Xray, or qTest, or import from any tool via CSV. Custom fields and values are mapped automatically.

### Does Test Manager support both manual and automated tests?

Yes. Manual and automated test cases live in the same repository, run in the same workspace, and report into the same dashboards.

### How does the AI generate test cases?

Click **Generate with AI** while authoring, then describe what you want to test in natural language, or provide a Jira ticket, PDF, image, audio, or video. Test Manager generates structured, editable test steps with preconditions, expected results, and priorities.

### Which tools does Test Manager integrate with?

Jira and Azure DevOps with two-way sync, plus marketplace apps for both. Test Manager also integrates with GitHub, GitLab, and all major issue trackers.

## Related resources

- [Test management platform](https://www.testmuai.com/test-management/)
- [What is test management](https://www.testmuai.com/test-management/what-is-test-management/)
- [Test case management](https://www.testmuai.com/test-management/test-case-management/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Test Manager
      </span>
    </li>
  </ul>
</nav>

## Related guides

- [Test Case Repository](/support/docs/test-case-repository/) — organize and reuse test cases in the Test Manager repository.
- [Sync Test Instance](/support/docs/sync-test-instance/) — keep test run instances in sync as your test cases evolve.
- [Test Instance Audit Logs](/support/docs/test-instance-audit-logs/) — track changes to a test instance with audit logs.
