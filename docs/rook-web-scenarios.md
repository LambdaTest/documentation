---
id: rook-web-scenarios
title: Rook Web UI — Scenarios and Filters
sidebar_label: Scenarios & Filters
description: Browse Rook scenario definitions and filter by feature, class, latest result, or category to find gaps and failures.
slug: rook-web-scenarios/
canonical: https://www.testmuai.com/support/docs/rook-web-scenarios/
---

# Scenarios and Filters

Open **Projects → your project → your agent → Scenarios**. This is the scenario catalog, not the result list for a particular run. Use it to review what can be tested and find scenarios with no recorded execution.

<img loading="lazy" src={require('../assets/images/rook/rook-web-scenarios.png').default} alt="Rook Scenarios catalog with four filters, one unrun billing scenario, and one passing outage scenario" className="doc_img"/>

## Read a Scenario Row

**ID** opens the [scenario definition](/support/docs/rook-web-scenario-details/). **Feature** identifies the discovered behavior by its feature ID. The title, class, and category describe what the test exercises. **Criteria** counts the checks defined for the scenario, not the checks that have passed.

**Last result** summarizes the latest recorded outcome. A dash means there is no recorded result; it is neither a pass nor a failure. In the example, SC-001 has five defined criteria but has not run. SC-002 has four criteria and a recorded Pass.

For a result from a specific execution, use [Runs → run → scenario](/support/docs/rook-web-run-details/). The latest catalog outcome can differ from an older run's result.

## Use the Filters

| Filter | Use it to find |
|---|---|
| **Feature** | Scenarios associated with a particular discovered behavior. Clicking a scenario count on Features applies this filter. |
| **Class** | Available functional, non-functional, or adversarial scenarios. |
| **Result** | Available latest outcomes, including **never run**. |
| **Category** | A narrower scenario category, such as <code>happy_path</code>. |

The menus reflect values present in the catalog. Multiple filters narrow the result together. The count on the right shows matching scenarios against the catalog total; changing filters returns to the first results page. Use **Clear filters** to restore the complete list.

<img loading="lazy" src={require('../assets/images/rook/rook-web-scenarios-filter.png').default} alt="Rook Result filter set to never run, leaving SC-001 as one of two scenarios and exposing Clear filters" className="doc_img"/>

For a first coverage check, select **Result → never run**. Open each matching scenario, review its goal and side effects, then run the selected cases from the CLI against an approved target. This page has no Run button.

Filters are retained in the URL. You can share that URL with a teammate who has access to the same stage project. It does not create a public report.

## Empty Catalog or Empty Filter Result?

**No scenarios match these filters** means the current combination has no matches; clear the filters first. **No scenarios written yet** means the catalog is empty: [generate and review scenarios](/support/docs/agent-assurance-scenarios/), then run <code>rook sync</code> to publish them. Generation alone writes local files.

## Next Step

Open [Scenario Details](/support/docs/rook-web-scenario-details/) to read the goal, acceptance criteria, execution settings, and history before running or investigating a test.
