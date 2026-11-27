---
id: kane-ai-exploration-guide
title: "Kane Exploration in KaneAI: Map Your Web App and Design Tests From It"
hide_title: false
sidebar_label: Exploration
description: Start a Kane Exploration from the URL of your web app in KaneAI. Browser agents map its screens, flows and findings, design use cases and test cases into your Test Manager project, and Traceability traces each one to its proof.
keywords:
  - kane exploration
  - kaneai exploration
  - app exploration
  - exploratory testing
  - test design
  - test manager
  - traceability
  - assurance coverage
  - kaneai
url: https://www.testmuai.com/support/docs/kane-ai-exploration-guide/
site_name: LambdaTest
slug: kane-ai-exploration-guide/
canonical: https://www.testmuai.com/support/docs/kane-ai-exploration-guide/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Kane Exploration",
          "item": `${BRAND_URL}/support/docs/kane-ai-exploration-guide/`
        }]
      })
    }}
></script>

Kane Exploration starts from the URL of your web app and sends browser agents through it on HyperExecute. The agents click, type and follow links through every screen they can reach, and build a map of the app's screens, the flows between them and the issues they find. While the agents explore, Kane Exploration designs use cases, acceptance criteria, scenarios and tests from the map into your Test Manager project.

Kane Exploration is part of both KaneAI and Kane CLI. Explorations started from either one save into the same Test Manager project, so a team can start a run in KaneAI and pull the designed tests into a folder with Kane CLI.

Use Kane Exploration when you have an app but no written requirements, or to find the flows your requirements missed. Use KaneAI test generation from a PRD or a spec when you have one.

## Before you start

- A <BrandName /> account on a plan that includes Kane Exploration.
- A Test Manager project for the exploration. One project holds one exploration of one URL.
- Permission to create test cases in that project. Without it, the map still builds, but no tests are designed.
- Credits. An exploration and each design job spend credits.

## Start an exploration

1. Open your Test Manager project and select the **Exploration** tab. A project that has never been explored shows **Map this application before you test it**, with a **Set Up Exploration** button and the matching `kane-cli explore run` command for anyone who prefers the terminal.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/01-exploration-tab-empty.webp').default} alt="The Exploration tab of a Test Manager project before its first run, with the Set Up Exploration button and the matching kane-cli explore run command" className="doc_img"/>

2. Select **Set Up Exploration**.
3. Under **Objective**, fill in the **Exploration name**, the **Application URL** (a test or staging environment where you can) and the **Objective**, which tells KaneAI what to explore and what to report. The suggestions under the field (**Sign-in and account basics**, **Payments and refunds**, **Everything reachable**) fill in a starting objective.
4. Under **What KaneAI may do**, choose **Allow changes** or **Read-only**. **Allow changes** is the recommended option and is selected by default. It fills in and submits forms, so KaneAI can reach more screens, but it may create, edit and delete records. **Read-only** looks, clicks and validates, and never submits a form that changes data.
5. Add any **Allowed domains** beyond your application's own domain, which is always included. Add **Instructions for KaneAI** if the app needs them.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/02-set-up-exploration.webp').default} alt="Step 1 of setting up an exploration, with the exploration name, application URL, objective, the Allow changes and Read-only options, and allowed domains" className="doc_img"/>

6. In step 2, **Review and launch**, check the settings and start the first run. The run is queued on HyperExecute and keeps going if you close the tab.

:::caution
When **Allow changes** is selected, KaneAI shows a warning to use an environment with disposable test data. Choose **Read-only** for any environment where data must not change.
:::

## Watch a run

While a run is going, the **Exploration** tab shows its progress (**Queued**, **Machine picked up**, **Exploring**, **Saving the map**), the screens, flows and findings found so far, and each cloud browser with what it is doing right now. Open a browser to watch it live. The **Activity** panel lists what KaneAI did, newest first. Select **Stop Run** to end the run early.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/03-run-in-progress.webp').default} alt="An exploration run in progress, showing its stage, the screens, flows and findings found so far, and the cloud browsers at work" className="doc_img"/>

Decisions on the map lock while a run is live, and open again when the run ends.

## Read the overview

When a run ends, the **Overview** tab summarises it in one line, for example how many flows broke and how many high-severity findings need review. It shows totals for screens (and the business areas they fall into), flows, findings, linked bugs and use cases written.

- **Needs Attention** lists what KaneAI needs from you, such as sign-in details it could not get past, changed screens to confirm, findings to review, and broken or changed flows.
- **Runs** shows what each run added to the map.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/04-exploration-overview.webp').default} alt="The exploration overview after a run, with totals for screens, flows, findings, bugs and use cases, the Needs Attention list and a chart of what each run added" className="doc_img"/>

## Read the map

Select the **Graph** tab to open the map.

- Screens are grouped into business areas, such as Home and help or Brand products. Zoom out to see the areas, or switch between **Areas**, **Screens** and **Details**.
- Each screen card shows its path, its number of findings, how much of it is left to explore, and its links in and out.
- Screens are tagged **Entry**, **New** or **Changed** compared with the previous run.
- Use **Find a screen** to jump to one screen, and the run picker to view the map as it was after an earlier run.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/05-map-graph.webp').default} alt="The exploration map, with screens grouped into business areas and the links between them" className="doc_img"/>

The **Screens** tab lists every screen in a table. The **Flows** tab lists every flow with its route, its status (**Verified**, **Changed** or **Broken**), its findings and the last run that checked it. Flows that make up a full user journey carry a **Journey** label. Export the list with **Export CSV**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/06-flows.webp').default} alt="The Flows tab, listing each flow with its route, status, findings and the last run that checked it" className="doc_img"/>

## Review findings

Detectors check every screen for console errors, failed network requests, broken links, slow requests and accessibility violations, and re-check earlier findings on later runs. The **Findings** tab lists every finding with its severity, kind, screen, how many times it was seen and the last run that saw it. Filter by **Severity**, **Kind**, **Business area** or **Labels**, and group by severity or business area. Findings that first appeared in the latest run are tagged **New**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/07-findings.webp').default} alt="The Findings tab, listing findings with their severity, kind, screen, count and last run, with filters for severity, kind, business area and labels" className="doc_img"/>

Open a finding to see its Evidence Pack. The **Evidence** tab shows where it happened (a screenshot from the run), what happened, what was expected, and any other screens with the same problem. **Occurrences**, **Labels and Notes** and **History** sit beside it. Use the bug button to file the finding as a bug in your tracker. KaneAI re-checks linked bugs on the next run.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/08-finding-evidence.webp').default} alt="A finding opened on its Evidence tab, with a screenshot from the run, what happened, what was expected and other screens with the same problem" className="doc_img"/>

## Teach the next run

On the map, add labels and notes, mark a flow or a finding as correct or incorrect, and mark a screen or a control as **do not touch**. The explorer reads these when its next run starts, so they are read-only while a run is going.

## The tests it designs

After a run, Kane Exploration writes use cases and test cases into the project. They appear on the **Use Cases** tab with a **From exploration** label, the run that wrote them and the number of test cases under each one. Each use case comes from flows on the map and stays **Not proven** until a passing run proves it.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/09-use-cases-from-exploration.webp').default} alt="The Use Cases tab with use cases labelled From exploration, each showing its test cases, the run that wrote it and a Not proven status" className="doc_img"/>

Kane Exploration designs and saves tests but never runs them, so a person reviews each one before it runs. To run them locally or in CI, pull them into a folder with Kane CLI and run them:

```bash
kane-cli context pull --project <project-id>
kane-cli testrun run
```

The project's **Insights** tab also carries an **Exploration** card with the latest map's screens, new findings and use cases, and an **Open Exploration** button.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/11-insights-exploration-card.webp').default} alt="The Exploration card on the project's Insights tab, with the latest map's screens, new findings and use cases and an Open Exploration button" className="doc_img"/>

## Trace every use case to its proof

The **Traceability** tab shows how every use case in the project traces from its sources to its acceptance criteria, the scenarios that prove them, and the evidence. Use cases written by Kane Exploration appear here next to use cases from your PRDs, designs and tickets, so one graph covers the whole project.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/traceability-walkthrough.webp').default} alt="A walkthrough of the Traceability tab, moving through the graph from sources to evidence" className="doc_img"/>

The graph reads left to right in six columns:

- **Source**: the documents a use case came from, such as a PRD, a Figma file or a ticket, with its version.
- **Business entity**: the business area the use case belongs to, such as Payments or Accounts.
- **Use case**: each use case with its risk level and how much of it is covered.
- **Scenario**: the test cases designed for the use case, with their latest result (**Passed**, **Failed** or **Not automated**) and type (**Positive**, **Negative** or **Edge**).
- **Acceptance criteria**: the checks each scenario must meet, with the expected value and a status (**Proven**, **Failing**, **Not asserted**, **Weak evidence** or **No test yet**).
- **Evidence**: the sealed `.evidence` pack from the run that proved or failed each criterion.

The bar above the graph counts every acceptance criterion in the project by status: proven, failing, not asserted, weak, stale, no test and pending run. Lines between nodes follow the same colours: green for proven, red for broken, amber for not proven yet, a dashed line for a missing link and a dotted line for an invariant.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/12-traceability-graph-proof.webp').default} alt="The Traceability graph in the Proof view, with columns for source, business entity, use case, scenario, acceptance criteria and evidence, and a status bar counting criteria" className="doc_img"/>

Switch between four views at the top of the graph:

- **Proof** shows which criteria a passing run has proven.
- **Impact** shows everything a node feeds and depends on, so you can see what a change to one source or test would touch.
- **Gaps** shows only the use cases whose criteria are failing, not asserted, weakly proven or without a test.
- **Changes** shows what changed since an earlier run, with each item marked **Broke**, **Fixed** or **Changed**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/13-traceability-impact.webp').default} alt="The Impact view of the Traceability graph, highlighting everything one node feeds and depends on" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/14-traceability-gaps.webp').default} alt="The Gaps view of the Traceability graph, showing only use cases with failing, unasserted, weak or untested criteria" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/15-traceability-changes.webp').default} alt="The Changes view of the Traceability graph, marking items that broke, were fixed or changed since an earlier run" className="doc_img"/>

Select any node to open its details. A scenario's panel shows its status, its blast radius (how many criteria and tests it feeds, and how many sources, business entities and use cases it depends on), its criteria, and a trace back to its source, business entity, use case and test.

- Use **Open scenario** to go to the test case, or **Add criterion** to add a check.
- Use **Find a node** to search by name or ID, the run picker to view the graph as of an earlier run, and **Trace** to follow one path end to end.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/16-traceability-node-details.webp').default} alt="A scenario's details panel on the Traceability graph, with its status, blast radius, criteria and trace back to its source" className="doc_img"/>

## Reports

The **Reports** tab on **Traceability** lists the reports built from the project's runs and use cases, with each report's type, creator and date range. Filter by **Report Type** or search by name, and select **Generate New Report** to build a new one for a date range.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/17-reports-list.webp').default} alt="The Reports tab on Traceability, listing reports with their type, creator and date range" className="doc_img"/>

An **Assurance coverage** report shows, for a date range, which acceptance criteria a passing test proves and where coverage is lost. Coverage is broken down by business entity, with use cases, failing criteria, high-risk items not covered and criteria proven for each. The **Where coverage is lost** section groups the remaining criteria as failing, not asserted, weak evidence, stale, no test yet and pending run.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/18-assurance-coverage-report.webp').default} alt="An Assurance coverage report, with coverage by business entity and a Where coverage is lost section" className="doc_img"/>

## Run it again

Select **Re-explore** on the **Exploration** tab. Everything is prefilled from the last run, so change only what you need, then review what changed and start the next run.

<img loading="lazy" src={require('../assets/images/kane-ai/features/exploration/10-re-explore.webp').default} alt="Re-exploring the application, with the settings prefilled from the last run" className="doc_img"/>

- The application URL cannot change, because the map belongs to that URL. To explore another URL, start a new project.
- Each new run adds to the same map: it tags new and changed screens, re-checks the flows that changed and reruns earlier findings.
- Only one run of an exploration can go at a time.

## Related

- [Kane CLI: Exploration](https://www.testmuai.com/docs/kane-cli-exploration): start and manage explorations from the terminal
- [Kane CLI: Test Generation and Exploration Use Cases](https://www.testmuai.com/docs/kane-cli-test-generation-exploration)
