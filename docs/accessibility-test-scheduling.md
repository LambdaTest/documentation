---
id: accessibility-test-scheduling
title: Test Scheduling - Sitemap (Overview)
sidebar_label: Test Scheduling - Sitemap (Overview)
description: Overview of scheduled accessibility scans for websites, including sitemap-based and crawler-based workflows.
slug: accessibility-test-scheduling/
url: https://www.testmuai.com/support/docs/accessibility-test-scheduling/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-test-scheduling/
---

# Test Scheduling - Sitemap (Overview)

Test Scheduling helps teams run recurring Accessibility scans on websites and web apps without manually starting a new scan every time.

When you want recurring Accessibility scans outside of Web Scanner, this overview explains how the native scheduling flow fits the product, how it differs from Web Scanner, and where to go for setup, URL import, authentication, and recurring schedules. Use it to orient sitemap-based or crawler-driven workflows and ongoing visibility into accessibility drift.

## Use this when

- you want recurring scans
- you want to import or discover many URLs at once
- you need scheduled visibility into accessibility drift over time

## Product boundary

This page is for the Accessibility-native scheduling flow. If you use the separate **Web Scanner** product instead, start from [Getting Started with Web Scanner](/support/docs/web-scanner-getting-started/) or [Starting an Accessibility Scan with Web Scanner](/support/docs/web-scanner-accessibility-scan/).

## Typical workflow

1. Create the scheduled scan.
2. Add URLs manually, through CSV, or through sitemap extraction.
3. Add **saved login configurations** (or tunnel / local access) if required—see [Login & Authentication for Scheduled Scans](/support/docs/accessibility-test-scheduling-login-authentication/).
4. Set the schedule.
5. Review the resulting reports.

## Onboarding: schedule your first recurring scan

1. Read **[Steps to Schedule an Accessibility Scan](/support/docs/accessibility-test-scheduling-scan/)** end-to-end once—menus use the same vocabulary as the live product.
2. Seed URLs using **[Sitemap Extraction & URL Import](/support/docs/accessibility-sitemap-extraction-url-import/)** when you have more than a handful of pages.
3. If pages sit behind login, open **Add login configurations** in Advanced options or use dashboard **Login configurations**, then attach a profile—see **[Login & Authentication for Scheduled Scans](/support/docs/accessibility-test-scheduling-login-authentication/)** (Basic, Form, Multi-page, or tunnel per your environment) before widening scope.
4. Start with a **weekly** cadence on a **subset** of URLs; promote to daily only after noise is manageable.
5. After the first run, open **[Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)** and confirm aggregates match expectations.
6. Optional: enable **[Fragment Identifier](/support/docs/accessibility-fragment-identifier/)** in DevTools settings when hash routes should split reporting for SPA teams (web URL grouping only).

## Related docs

- [Login & Authentication for Scheduled Scans](/support/docs/accessibility-test-scheduling-login-authentication/)
- [Steps to Schedule an Accessibility Scan](/support/docs/accessibility-test-scheduling-scan/)
- [Sitemap Extraction & URL Import](/support/docs/accessibility-sitemap-extraction-url-import/)
- [Crawler](/support/docs/accessibility-test-crawler/)
