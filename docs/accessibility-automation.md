---
id: accessibility-automation
title: Accessibility Automation (Overview)
sidebar_label: Accessibility Automation
description: Overview of TestMu AI Accessibility Automation for web testing across supported frameworks and execution environments.
slug: accessibility-automation/
---

# Accessibility Automation (Overview)

Accessibility Automation lets teams run accessibility checks as part of automated web test execution.

This overview introduces the Accessibility Automation workflow and supported execution model for running checks alongside automated web tests. You will see how framework-based runs relate to DevTools, Web Scanner, and Test Scheduling, and what to expect from grid execution, settings, and reporting.

## When to use this

Use this workflow when your team already runs automated web tests and wants repeatable Accessibility checks in the same execution path.

## What this includes

- grid-based automation execution
- supported framework integrations
- automation settings such as WCAG version, best practices, and needs review
- reporting through the Accessibility dashboard
- optional CI/CD and HyperExecute orchestration (see **[HyperExecute integration — Selenium accessibility](/support/docs/selenium-hyperexecute-accessibility-tests/)** when running on HyperExecute with Selenium)

## Product boundary

Accessibility Automation is not the same as DevTools, Web Scanner, or Test Scheduling. It is specifically for framework-driven execution.

## Known limitation

For Playwright Accessibility Automation, use Chrome. `pw-chromium` is currently not supported for accessibility report generation because the required extension does not load reliably in bundled Chromium sessions.

## Related docs

- [Selenium](/support/docs/accessibility-automation-test/)
- [HyperExecute integration — Selenium accessibility](/support/docs/selenium-hyperexecute-accessibility-tests/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [CI/CD Integration Guide](/support/docs/accessibility-cicd-integration-guide/)
