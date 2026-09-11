---
id: rook-web-features
title: Rook Web UI — Features
sidebar_label: Features
description: Review discovered agent behaviors, validation rules, source references, and links to related Rook scenarios.
slug: rook-web-features/
canonical: https://www.testmuai.com/support/docs/rook-web-features/
---

# Features

Open **Projects → your project → your agent → Features**. This page lists the behaviors Rook identified during discovery and helps you find behaviors that still need tests.

<img loading="lazy" src={require('../assets/images/rook/rook-web-features.png').default} alt="Rook Features table with five triage behaviors; two have one scenario each and three show none" className="doc_img"/>

## Connect Behaviors to Tests

Each row contains the feature ID, its name and user story, and the number of associated scenarios. Click a linked feature ID to read its definition. Click a nonzero **Scenarios** count to open the scenario catalog filtered to that feature.

**none** means no associated scenario is listed. It does not mean the behavior passed, failed, or is unimportant. In this example, the missing-ticket, free-tier, and missing-ID behaviors have no scenarios. The two behaviors with scenarios are not necessarily both tested: [Scenarios](/support/docs/rook-web-scenarios/) shows whether either has actually run.

## Read Feature Details

<img loading="lazy" src={require('../assets/images/rook/rook-web-feature-details.png').default} alt="Feature details for outage triage, including user story, expected behavior, validation rules, edge cases, and source files" className="doc_img"/>

The feature dialog presents the sections recorded in its definition:

- **User story** describes who needs the behavior and why.
- **Expected behaviour** states the intended outcome.
- **Validation rules** list constraints the tests should enforce.
- **Edge cases** identify boundary conditions worth testing.
- **Derived from** identifies the source materials supporting the discovery.

For example, the outage feature requires reading the ticket before making severity, ownership, or reply decisions. Use that rule to check the generated acceptance criteria, not just the scenario title.

**View the file rook wrote** opens the raw feature artifact. Missing sections mean they were not recorded; a legacy name-only entry is not a complete specification. Close the dialog to return to the catalog.

## Add Missing Coverage

Discovery and scenario authoring happen in the CLI. If a behavior is wrong or incomplete, improve the context and [explore again](/support/docs/agent-assurance-connect-and-explore-agents/). If it is correct but has no tests, [generate and review scenarios](/support/docs/agent-assurance-scenarios/), then sync. Generated tests still need review before running against a target with write access.

**Nothing analysed for this agent** is a prompt to check discovery and synchronization, not a successful zero-test result.

## Next Step

Click a scenario count, or open [Scenarios and Filters](/support/docs/rook-web-scenarios/) to review the catalog and its latest-result context.
