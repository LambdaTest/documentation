---
id: hyperexecute-release-notes-2026
title: HyperExecute Release Notes 2026
hide_title: false
toc_max_heading_level: 2
sidebar_label: 2026 Releases
description: "HyperExecute 2026 release notes: new features, improvements, and bug fixes from weekly platform releases, January to September 2026 (versions 3.2.1 to 3.5.7)."
keywords:
  - TestMu AI HyperExecute
  - TestMu AI HyperExecute help
  - TestMu AI HyperExecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2026/
site_name: TestMu AI
slug: hyperexecute-release-notes-2026/
canonical: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2026/
---

import NewReleaseTag from '../src/component/newRelease.js';
import EnhancementTag from '../src/component/enhancementTag';
import BugFixTag from '../src/component/bugFixTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

export const ReleaseDate = ({children}) => (
  <span
    style={{
      display: 'inline-block',
      margin: '0.25rem 0 0.75rem',
      padding: '0.2em 0.7em',
      fontSize: '0.8em',
      fontWeight: 600,
      lineHeight: 1.6,
      color: '#ffffff',
      backgroundColor: '#000000',
      border: '1px solid var(--ifm-color-emphasis-300)',
      borderRadius: '999px',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

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
          "name": "Release Notes 2026",
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2026/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-release-notes-2026/"
    },
    "headline": "HyperExecute Release Notes 2026",
    "description": "HyperExecute 2026 release notes: new features, improvements, and bug fixes from weekly platform releases, January to September 2026 (versions 3.2.1 to 3.5.7).",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-release-notes-2026/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "TestMu AI HyperExecute",
      "TestMu AI HyperExecute help",
      "TestMu AI HyperExecute documentation"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    }
  })
}}
></script>

Welcome to the HyperExecute release notes for 2026. This page rounds up everything that shipped across our weekly platform releases from January through September, covering versions 3.2.1 through 3.5.7. For each release you'll find the new features we added, the improvements we made, and the bugs we squashed.

---

## Version 3.5.7

<ReleaseDate>21 Sep to 27 Sep 2026</ReleaseDate>

### New Features
- Job report emails can now go to different recipients depending on the job's final status (completed, failed, or aborted), configured through new per-status recipient keys in the YAML.
- Rerun Failed Tests is now available for on-prem HyperExecute setups.
- Added workflow guardrail limits: a cadence dropdown, a required end date, and Workflow Governance settings that can auto-disable a workflow after consecutive failures.

### Improvements
- Job and project label filters now support scoping labels by project, a retention period, and role-based access control.
- Added stronger checks when aborting jobs to help users and admins avoid accidental bulk aborts.
- Corrected the warning message shown for invalid or disallowed environment variables in on-prem YAML.
- On-prem HyperExecute runs now produce per-scenario log files.

### Bug Fixes
- Fixed duplicate job numbers being assigned within an organization.
- Fixed the Rerun button being wrongly disabled with a concurrency error when switching between Same Commit and Latest Commit.
- Fixed workflow trigger failures not showing in the UI; failure reasons now appear for failed past occurrences.
- Fixed the Jobs tab in Workflows getting stuck on loading after applying filters and navigating back.
- Fixed pagination breaking on scroll in the Workflows Jobs tab after removing and re-applying the date filter.
- Fixed the filter/label count badge not appearing on the Filters button in Workflow Details past jobs.
- Fixed Job Details intermittently showing "No scenarios present" for remote-discovery jobs.
- Fixed the HyperExecute Insights scenario view showing 0/N passed for completed passing scenarios.
- Fixed the HyperExecute dashboard intermittently getting stuck due to accumulated browser storage.
- Fixed the on-prem dashboard letting you finish linking a workflow without selecting a project and workflow.
- Fixed the workflow variables popup being partially hidden, which blocked the Cancel and Run Workflow buttons.
- Fixed a generic error message shown to read-only users when attempting to delete a workflow.
- Fixed project settings so clearing the project access token on save correctly removes it or falls back to the git token secret.
- Fixed YAML path validation being skipped when updating projects created before the unified projects experience.
- Fixed JMeter project creation: the Save button is now disabled and a clear "max file size" error is shown when an upload exceeds the limit, and the upload success tick now appears correctly.
- Fixed a HyperExecute task silently continuing without a tunnel after tunnel provisioning failed.
- Fixed Mac tasks failing with a "Lambda Error" when fetching test scripts in certain error conditions.
- Fixed the mute option not working for iOS Maestro jobs on HyperExecute.
- Fixed blank dashboard email reports caused by the analytics data API failing for HyperExecute.

---

## Version 3.5.6

<ReleaseDate>14 Sep to 20 Sep 2026</ReleaseDate>

### New Features
- Global policies now support Post directives, and admin policies can wrap Global Post and Post steps and tasks.
- The `globalPre` step now supports a Windows runtime OS for Windows Batch jobs.

### Improvements
- Added a link to the Secrets documentation on the HyperExecute dashboard.
- On-prem browser version handling now honors the exact or latest-N version you request when it's available, and falls back to the latest version only when it isn't.

### Bug Fixes
- Fixed tasks staying stuck despite a configured test suite timeout.
- Improved the unclear YAML parser error message shown when editing custom workflows.
- Fixed queued tasks not being executed in the order they were added.
- Fixed the HyperExecute preference showing as disabled in account product preferences for non-admin users.
- Fixed test names in reports not matching the names shown in the HyperExecute job.
- Fixed high latency and timeouts on HyperExecute API calls.
- Fixed iOS HyperExecute tests being redirected to Web Automation from the Analytics dashboard.
- Fixed a blank page when editing a workflow in HyperExecute.
- Corrected the numbers shown on the workflows page.

---

## Version 3.5.5

<ReleaseDate>07 Sep to 13 Sep 2026</ReleaseDate>

### New Features
- Added remote test discovery for .NET projects on HyperExecute, with support for MSTest and NUnit.
- Admins can now set governance rules on workflows, including rules that automatically stop a workflow.

### Improvements
- Added dark mode support across HyperExecute pages.
- Workflow creation now pre-fills the Every Minute, Hour, and Day schedule values from the selected cadence.
- On-prem jobs that don't specify an environment now fall back to the organization's default environment.
- Project settings now show a clear indicator of whether an access token is configured.

### Bug Fixes
- Fixed workflow creation allowing past dates to be selected.
- Fixed a token saved when creating a project not being resolved when triggering a job by project ID.
- Fixed a masked placeholder value being sent as the access token when no token was set during project creation.
- Fixed a mismatch between the Workflows tab summary tiles and the Jobs tab caused by different date ranges.
- Improved the reliability of virtual device setup for HyperExecute jobs.

---

## Version 3.5.4

<ReleaseDate>31 Aug to 06 Sep 2026</ReleaseDate>

### Improvements
- The Concurrency Distribution view now loads faster, with paginated groups.
- HyperExecute Jobs now show total test counts and pass/fail metrics for non-grid API test cases.
- Job details and job listing now load faster.
- The RCA button is no longer shown for Karate jobs, where it doesn't apply.

### Bug Fixes
- Fixed editing a custom YAML workflow failing to save when it was scheduled for all 7 days.
- Fixed variables not being addable when editing an expired workflow.
- Fixed a job with an invalid YAML block-scalar indent in post directives being incorrectly reported as an infrastructure error.
- Fixed the failed scenarios view showing stale results for jobs that were still in progress.
- Fixed an intermittent issue where textual queries could extract a heading instead of the expected value during HyperExecute runs.

---

## Version 3.5.3

<ReleaseDate>24 Aug to 30 Aug 2026</ReleaseDate>

### New Features
- Added team-based management for HyperExecute, so users see only the projects and jobs owned by their teams (plus untagged and default projects); new projects and jobs are automatically tagged to the creator's team.

### Improvements
- Continued platform improvements, including a more secure and reliable way to upload and download artifacts.

### Bug Fixes
- Fixed some HyperExecute jobs not being picked up for certain organizations.
- Fixed failed tests being missing from Extent reports generated by HyperExecute jobs.

---

## Version 3.5.2

<ReleaseDate>17 Aug to 23 Aug 2026</ReleaseDate>

### New Features
- Added an organization-level summary dashboard on the HyperExecute Projects page, with KPI tiles, a job status breakdown, and failure reasons.
- Added summary widgets to the Workflows and Jobs tabs of a project, shown below the filter row.
- Added a Match Any / Match All toggle inside multi-select filters on the Jobs tab.
- Added a per-row Pause / Resume action on the project Workflows tab, and made it respect workflow-level permissions.

### Improvements
- Unified the Project APIs so the newer version now includes everything the earlier version offered.
- Improved report generation for HyperExecute jobs.

### Bug Fixes
- Fixed JMeter dashboard timestamps not auto-refreshing during an active load test.
- Fixed the Create Project panel showing a "Please enter Git URL" validation error before any user interaction.
- Fixed a scheduled workflow showing a generic "Forbidden" error instead of a license-related error when a HyperExecute license was unavailable.
- Fixed a slow authentication call that could hang job start and surface a misleading "Invalid Username and/or Key" error.

---

## Version 3.5.1

<ReleaseDate>10 Aug to 16 Aug 2026</ReleaseDate>

### Improvements
- HyperExecute email reports now use clearer test and scenario terminology, and the task count excludes Global Pre, Global Post, and discovery tasks.
- Updated the k6 versions available on HyperExecute.

### Bug Fixes
- Fixed workflow creation failing for a newly created project until the Git access token was re-saved.
- Fixed HyperExecute jobs under the default project not being viewable from the Projects section.
- Fixed jobs remaining stuck in the Running state for hours.
- Fixed Live Interaction not working on HyperExecute jobs.
- Fixed API calls made from HyperExecute jobs failing with connection refused errors.
- Fixed latency issues affecting HyperExecute jobs.
- Fixed KaneAI-generated JavaScript steps not running on HyperExecute.
- Fixed authentication failing with 401 errors on on-prem deployments.
- Fixed the `job_label` filter parameter treating encoded payloads as a literal label instead of ignoring them.
- Fixed an HTTP 500 error when filtering project job summaries by search, user, job type, or status using emoji or other 4-byte characters.

---

## Version 3.5.0

<ReleaseDate>03 Aug to 09 Aug 2026</ReleaseDate>

### New Features
- Added support for the 0.2 YAML version with remote test discovery for Maven-based frameworks (TestNG, JUnit 4, and JUnit 5).

### Bug Fixes
- Fixed the "Run in local system" section, which displayed incorrectly and omitted the on-prem host from the generated CLI command.
- Fixed binary execution failing with an "Argument list too long" error when a large `uploadArtefacts` JSON was passed.
- Fixed a "Windows license will expire soon" pop-up appearing during HyperExecute runs on Windows machines.

---

## Version 3.4.9

<ReleaseDate>27 Jul to 02 Aug 2026</ReleaseDate>

### New Features
- Increased the maximum JMX file upload size for HyperExecute JMeter tests from 50 MB to 200 MB.
- Added support for custom variables in HyperExecute JMeter runs.

### Improvements
- Improved the reliability of HyperExecute task dispatch, reducing duplicate or failed dispatches during transient errors.
- On-prem HyperExecute now ignores tunnel settings in the YAML when jobs are started through the Trigger API or Workflow trigger, avoiding spurious tunnel errors.
- Improved resource usage on on-prem HyperExecute deployments.

### Bug Fixes
- Fixed jobs created by a deleted service account staying stuck in "initiated" and not being abortable, and their scheduled workflows continuing to fire.
- Fixed the task count so it includes only scenario tasks and excludes global pre/post and discovery tasks.
- Fixed screenshots in HyperExecute reports being redirected to the wrong location.
- Fixed Gradle remote discovery issues: the Gradle version constraint is now enforced, a missing Gradle Java plugin now gives the specific documented error, and `framework.workingDirectory` subdirectories are discovered correctly.
- Fixed jobs using Gradle versions below 7.0 completing as successful with zero tests run.
- Fixed an on-prem dashboard issue where Workflow Variables were not saved when editing a workflow unless another field was also changed.
- Fixed CDP tests failing to set up the CDP grid on non-Ventura macOS machines.

---

## Version 3.4.8

<ReleaseDate>20 Jul to 26 Jul 2026</ReleaseDate>

### Improvements
- The HyperExecute Stage Summary widget now counts only the final attempt of each stage and shows retried stages in a separate tile, so status counts are accurate.

### Bug Fixes
- Fixed updating a HyperExecute project with an empty name showing no clear error message.
- Fixed the idle timeout not being honored in HyperExecute jobs.
- Fixed cloning a workflow incorrectly triggering a new job.
- Fixed Gatling custom code suites with interdependent files failing to resolve their dependencies on HyperExecute.

---

## Version 3.4.7

<ReleaseDate>13 Jul to 19 Jul 2026</ReleaseDate>

### New Features
- Added new remote-discovery test runners for Gradle (JUnit 4, JUnit 5, TestNG, Spock) and Maven Spock, along with support for full-command overrides via `framework.baseCommand` in YAML v0.2.
- The HyperExecute CLI `--download-artifacts` option now also downloads Global Post artifacts.

### Improvements
- Manually triggering a workflow now validates Git access first and returns clear errors when the repository, branch, or access token is no longer valid.
- Improved loading performance of the HyperExecute dashboard.

### Bug Fixes
- Fixed cloning a workflow with a long name failing because the generated clone name exceeded the 100-character limit.
- Fixed a HyperExecute job leaving its concurrency slot stuck until manually released.
- Fixed tasks getting stuck in the initiated state during platform maintenance.

---

## Version 3.4.6

<ReleaseDate>06 Jul to 12 Jul 2026</ReleaseDate>

### New Features
- Added a `captureScreenshotOnError` capability to capture screenshots only on failed commands for Selenium, Playwright, and Appium tests, on both HyperExecute and the standard grid.

### Improvements
- Variables are now supported in global YAML policies, including the global post policy and executor YAML after policy enforcement.
- Improved loading performance of the Jobs and Projects pages for accounts with a very large number of teams and projects.

### Bug Fixes
- Fixed concurrency getting blocked for HyperExecute jobs.
- Fixed HyperExecute jobs remaining in the running state well past their configured global timeout.
- Fixed CLI-triggered jobs failing with a project validation error after a sync.
- Fixed HyperExecute jobs using SmartUI failing to validate project information.
- Fixed an incorrect layout rendering on HyperExecute at 2560x1440 resolution compared to Real Time Desktop.

---

## Version 3.4.5

<ReleaseDate>29 Jun to 05 Jul 2026</ReleaseDate>

### New Features
- Added support for a dedicated proxy and tunnel when running Maestro tests on HyperExecute.
- On-prem HyperExecute admins can now manage Linux framework-to-queue mappings separately for each on-prem environment.

### Improvements
- Refined on-prem Global Policies: Project Scope is now a required field, the Fail Fast "Max Number Of Tests" value is capped to a safe limit, the default-OS fallback is now Linux, and validation messages no longer shift the page layout.

### Bug Fixes
- Fixed the dashboard not showing the name of the user who aborted a job, including jobs aborted from the CLI.
- Fixed artifact syncing failing when multiple artifact syncs ran at the same time.
- Fixed the Playwright Reports tab failing to load for very large auto-split jobs.
- Fixed Playwright tests failing with a "context cancelled" error on HyperExecute.
- Fixed a "LambdaError" affecting Maestro jobs on HyperExecute.
- Fixed Slack notifications not being sent for HyperExecute builds.
- Fixed misleading Windows parallel options being displayed in HyperExecute.

---

## Version 3.4.4

<ReleaseDate>22 Jun to 28 Jun 2026</ReleaseDate>

### New Features
- Introduced Global YAML Policies (Phase 1): admins can define and manage policies under Organization Settings, have them enforced at job submission, and see which policies were applied from the job details page.

### Bug Fixes
- Fixed HyperExecute jobs failing while setting secrets.
- Fixed tests in HyperExecute jobs being unexpectedly aborted.
- Fixed failed tests being reported as passed in HyperExecute executions.
- Fixed a "failed to start adb server" error affecting Maestro tests on HyperExecute.
- Fixed a test count discrepancy in Extent reports generated from HyperExecute jobs.
- Fixed missing spacing in the Save Concurrency panel text.

---

## Version 3.4.3

<ReleaseDate>15 Jun to 21 Jun 2026</ReleaseDate>

### Improvements
- Updated the Lambda error job message so failure reasons are reported more accurately.
- Improved the "No matching project found" error message in HyperExecute for better clarity.
- Updated the concurrency widget to show JMeter virtual user hour (VUH) counts.

### Bug Fixes
- Fixed project names for successful HyperExecute runs not being shown in the Insights dashboard.
- Fixed statically rescheduled tasks being marked as Aborted instead of Lambda_Error.
- Fixed the YAML path missing from the API response without any alert in the UI.
- Fixed job search returning all jobs when the query started with '#'.
- Fixed workflows with a custom YAML failing to save edits when scheduled for all 7 days.
- Fixed inconsistent workflow expiry dates between view and edit modes.
- Fixed HyperExecute tests randomly aborting on macOS.
- Fixed child sessions failing to initialize in some HyperExecute runs.
- Fixed several validation and consistency issues in the governance policies API, including deleted policies being returned, missing scope being accepted, and errors for non-existent job IDs.

---

## Version 3.4.2

<ReleaseDate>08 Jun to 14 Jun 2026</ReleaseDate>

### New Features
- Added a Linux/Windows toggle on the Queue Mapping page in HyperExecute organization settings, so you can view and manage Windows queue mappings alongside Linux ones.

### Improvements
- Job trigger failures caused by plan limits (duration, concurrent virtual users, region, load generator concurrency) now return clearer, more actionable error messages.

### Bug Fixes
- Fixed HyperExecute jobs showing a black screen in the background during test execution.
- Fixed pre-steps not running on Windows nodes, which left the job stuck.
- Fixed the Update Project API so that an empty project name in the request body now returns a clear 400 validation error instead of a 500 error.
- Fixed the error returned when a user without permissions triggers a workflow, so it now clearly states the access limitation instead of a generic server error.

---

## Version 3.4.1

<ReleaseDate>01 Jun to 07 Jun 2026</ReleaseDate>

### New Features
- HyperExecute job reports now include a printable one-page view with OS and browser-level details, and support real-device and virtual-device tests.

### Improvements
- Removed the "HyperExecute" option from the build-page Type filter on the on-prem dashboard.

### Bug Fixes
- Fixed stale HyperExecute data appearing after a user's organization changed following an SSO migration.
- Fixed creating a new queue mapping with the same framework and queue name overwriting the existing mapping.
- Fixed Gradle Karate reports failing to generate in the report section even though the artifacts were available.
- Fixed the Windows taskbar not being hidden in HyperExecute sessions, which obscured the Save button.
- Fixed full-screen stage logs rendering beneath the drawer in the HyperExecute dashboard, including on-prem deployments.
- Fixed a process crash that caused test failures with a LambdaError in HyperExecute jobs.
- Fixed a LambdaError that occurred in some HyperExecute jobs.
- Fixed VM connectivity being lost while a job was running on HyperExecute.

---

## Version 3.4.0

<ReleaseDate>25 May to 31 May 2026</ReleaseDate>

### Improvements
- Extent report system variables now show a single consolidated total execution time for jobs that run across multiple parallel machines, instead of a comma-separated list of per-test times.

### Bug Fixes
- Fixed editing a workflow's schedule (for example, changing "every 10 hours" to "every 10 days") not updating the workflow page until it was refreshed.
- Fixed the Create Project API to return a clear "project name is required" (400) error when the project name is empty, instead of a misleading conflict error.
- Fixed JMeter jobs starting with a single user instead of the configured user count when the load percentage wasn't set.
- Fixed the "View in HyperExecute" button not working for sessions that ended with a Lambda error.
- Fixed job artifacts remaining stuck in "In Progress", and improved artifact processing reliability.

---

## Version 3.3.9

<ReleaseDate>18 May to 24 May 2026</ReleaseDate>

### New Features
- Added runtime and pre-step support for JMeter tests on HyperExecute.
- Added support for running tests on macOS Tahoe and iOS 26 on HyperExecute.

### Bug Fixes
- Fixed HyperExecute workflows showing duplicate entries for the same future scheduled run time.
- Fixed command logs being missing for failed Maestro tests on HyperExecute.

---

## Version 3.3.8

<ReleaseDate>11 May to 17 May 2026</ReleaseDate>

### Improvements
- Added Chrome for Testing (CFT) support for HyperExecute sessions, including Selenium, Cypress, and CDP-based runs.
- Project and workflow creation, update, and trigger now show specific, actionable errors when Git authentication or branch validation fails.
- Improved job trigger reliability, avoiding trigger timeouts when RBAC is enabled.

### Bug Fixes
- Fixed dynamic allocation not creating scenario stages for Playwright and Cypress jobs.
- Fixed Cypress jobs failing on the latest Edge version.
- Fixed the Playwright report not being generated for some HyperExecute jobs.
- Fixed HyperExecute execution not starting for KaneAI-generated test cases triggered from a Test Run.

---

## Version 3.3.7

<ReleaseDate>04 May to 10 May 2026</ReleaseDate>

### Improvements
- Improved the reliability of HyperExecute job event delivery.

### Bug Fixes
- Fixed some tests not being discovered and shards failing to start due to an unexpected error.
- Fixed Extent reports showing a generic RuntimeException instead of the actual AssertionError after parallel execution.
- Fixed jobs timing out after a machine interruption and not being rescheduled.
- Fixed concurrency slots staying occupied after tasks were rescheduled.
- Fixed some jobs appearing as completed or failed while still running.
- Fixed some jobs remaining stuck in the initiated state and not being sent to the priority queue.
- Fixed the Firefox icon not being shown on the automation dashboard for Playwright jobs run on HyperExecute.
- Fixed an incorrect error message shown to read-only users when attempting to clone a workflow.

---

## Version 3.3.6

<ReleaseDate>27 Apr to 03 May 2026</ReleaseDate>

### Improvements
- On-prem HyperExecute deployments now perform RBAC permission and project checks within the on-prem environment, and no longer proceed when an RBAC check is aborted.

### Bug Fixes
- Fixed job report sections with no data being displayed instead of being hidden automatically.
- Fixed the selected section resetting to PRE when switching between tasks; your selection now persists.
- Fixed opening a failed job link landing on the first task instead of the correct failed task and stage.
- Fixed intermittent failures in pre and setup steps for jobs running on macOS machines.
- Fixed test reports for jobs on Windows remaining stuck in the "In-Progress" state.
- Fixed tasks hanging indefinitely while fetching user code.
- Fixed an on-prem issue where rescheduled jobs could receive duplicate environment labels and repeated global pre commands.

---

## Version 3.3.5

<ReleaseDate>20 Apr to 26 Apr 2026</ReleaseDate>

### Improvements
- Refined the HyperExecute organization preferences pages with consistent layout, headers, and loading behavior, and added search to the Queue Mapping, Environments, and Org Secrets tables.

### Bug Fixes
- Fixed the View Summary button in HyperExecute Projects showing a blue hover state that didn't match the product theme.
- Fixed an error when running Cypress tests on HyperExecute with newer Chrome and Edge versions.
- Fixed the final task of a HyperExecute job remaining stuck in the queued state.
- Fixed HyperExecute jobs remaining in the Idle state without a VM being allocated.

---

## Version 3.3.4

<ReleaseDate>13 Apr to 19 Apr 2026</ReleaseDate>

### Improvements
- Public Git repositories can now be used for HyperExecute project onboarding and job triggers without providing a personal access token.
- Removed a duplicate concurrency check for HyperExecute jobs, so concurrency is no longer gated twice.

### Bug Fixes
- Fixed email notifications not being sent when a HyperExecute job was aborted.
- Fixed HyperExecute jobs getting stuck when an Espresso build was rejected because of invalid capabilities.
- Fixed retries not being triggered for some HyperExecute jobs.
- Fixed past jobs not being shown on first load in the Workflow Details section.
- Fixed an email address being incorrectly mandatory for HyperExecute reports in test runs.
- Fixed the single-runner-invocation capability not working with HyperExecute.
- Fixed report files being intermittently missing from HyperExecute job artifacts.
- Fixed artifact downloads and Karate report generation failing in some HyperExecute deployments.
- Fixed a discovery command failure for NUnit projects on HyperExecute On-Prem for Windows.

---

## Version 3.3.3

<ReleaseDate>06 Apr to 12 Apr 2026</ReleaseDate>

### Improvements
- Continued improvements to global post-run artifacts and email notifications, including handling of job abort emails.
- The Insights dashboard source is now labeled "HyperExecute Report".
- Improved performance of background status checks for HyperExecute tasks.

### Bug Fixes
- Fixed the RCA category not being shown in the HyperExecute dashboard for sharded XCUITest and Espresso runs.
- Fixed the HyperExecute stage API returning empty organization and test type values.
- Fixed a report not being generated for a task.
- Fixed an email being incorrectly required for the HyperExecute report in KaneAI Test Runs.
- Fixed valid YAML using runtime variables in the upload artifacts name being rejected by portal validation.
- Fixed YAML parsing failing when workflow variables used reserved keys such as `env` and `language`.
- Fixed incorrect error messaging when a workflow name conflicts with an existing one.
- Fixed a linked workflow from another project not opening on click.
- Fixed project pages so users can page through the user list, search for projects, and edit projects without errors.
- Fixed dragging in the HyperExecute CLI section appending text to the CLI command and copying it.

---

## Version 3.3.2

<ReleaseDate>30 Mar to 05 Apr 2026</ReleaseDate>

### New Features
- HyperExecute now supports the new role-based access control (RBAC) experience, with a redesigned UI for managing roles and permissions.
- Added an HTML report and a downloadable zip of artifacts for KaneAI test cases executed via HyperExecute.

### Improvements
- Improved the performance and reliability of label search across jobs when working with a large number of jobs.

### Bug Fixes
- Fixed the same task appearing twice in the job view after a test was rescheduled.
- Fixed cancelled or timed-out tasks showing a passed status at the test level.
- Fixed triggering a workflow from the UI failing with a YAML parsing error.
- Fixed broken App Automation links and video URLs in HyperExecute reports.
- Fixed the App Automation test page showing no data when opened from Error Trends in the AI RCA section.

---

## Version 3.3.1

<ReleaseDate>23 Mar to 29 Mar 2026</ReleaseDate>

### New Features
- Failure categorization now works for Playwright tests on HyperExecute, deriving the category from the last failing command log when no remark is set.

### Improvements
- Improved error handling when a job reaches the maximum number of reschedules.

### Bug Fixes
- Fixed the workflow schedule editor allowing the "days" value to be entered above the allowed limit of 60 and saved incorrectly.
- Fixed iOS apps not launching in the simulator when running Maestro tests on HyperExecute.
- Fixed older Android test cases not executing on HyperExecute when triggered from the Test Manager page.

---

## Version 3.3.0

<ReleaseDate>16 Mar to 22 Mar 2026</ReleaseDate>

### New Features
- Added support for capturing full HAR network logs on HyperExecute.

### Improvements
- Continued platform improvements for better reliability.
- Improved error handling and messaging when creating projects and workflows.

### Bug Fixes
- Fixed jobs failing immediately with a "tasks exceed maximum allowed value" error.
- Fixed a fair-usage limit error being raised based on overall concurrency instead of the number of discovered tests.
- Fixed artifact status staying pending for jobs that failed fast.
- Fixed Cypress jobs on Firefox failing at the artifact step.
- Fixed Windows tasks getting stuck in a running state or failing to start, including with Firefox and Playwright browsers.
- Fixed incorrect test counts in email reports for combined mobile app and mobile browser runs.

---

## Version 3.2.9

<ReleaseDate>09 Mar to 15 Mar 2026</ReleaseDate>

### Improvements
- Improved HyperExecute reports and email notifications.
- Updated the Workflows list view for better handling and display.
- Added on-prem compatibility for HyperExecute, including an on-prem environment setting in the YAML configuration.

### Bug Fixes
- Fixed the OS version shown for a HyperExecute job started from a test run not matching the actual OS (for example, macOS Monterey shown as Sequoia).
- Fixed secrets not being deletable from certain projects.
- Fixed a date conversion issue in Workflow scheduling caused by UTC handling.

---

## Version 3.2.8

<ReleaseDate>02 Mar to 08 Mar 2026</ReleaseDate>

### Improvements
- The HyperExecute public API now returns the same test-level AI Root Cause Analysis (RCA) shown on the HyperExecute dashboard, keeping UI and API results consistent.

### Bug Fixes
- Fixed the `--onprem-host` value shown in the CLI YAML command for on-prem users so it displays the correct host.
- Fixed retried iOS tests failing with an existing result bundle path error when result bundles were enabled.

---

## Version 3.2.7

<ReleaseDate>23 Feb to 01 Mar 2026</ReleaseDate>

### New Features
- Expanded infrastructure capacity support for HyperExecute.
- Added team-to-project mapping with a project selector in the on-premises HyperExecute team management UI, along with tighter on-premises role restrictions.

### Improvements
- Espresso and XCUITest capabilities are now supported on HyperExecute for sharding.

### Bug Fixes
- Fixed users with the Lead Developer role not being able to add a Co-Owner during HyperExecute project setup.
- Fixed an inconsistency where rescheduled tasks appeared under Insights (Beta) but not on the HyperExecute dashboard.
- Fixed pre-steps failing on some macOS machines.
- Fixed newly added test statuses (such as ignored) not being shown in HyperExecute job reports.
- Fixed the CLI not discovering tests when the output location flag was used to store results outside the working directory.
- Fixed the stage status not being shown in CLI stage logs when a job was stopped and its stage marked as aborted.

---

## Version 3.2.6

<ReleaseDate>16 Feb to 22 Feb 2026</ReleaseDate>

### New Features
- Added team-based role access control (RBAC) for HyperExecute, with permissions evaluated across projects, workflows, and tests.
- Added support for the rerun API on HyperExecute On-Prem.
- Added a platform-level maximum concurrency limit that also applies when tests run in burst mode.

### Improvements
- The default `runson: mac` now maps to macOS Sequoia.
- HyperExecute CLI binaries are now available for public download.

### Bug Fixes
- Fixed slow cache downloads for Cypress and Playwright jobs.
- Fixed `commandLog: false` not being respected on On-Prem HyperExecute.
- Fixed the Slack channel setting not being honored for notifications when jobs are triggered from workflows.
- Fixed missing resolution data for HyperExecute mobile tests.
- Fixed an issue that prevented running tests on HyperExecute from Test Manager.

---

## Version 3.2.5

<ReleaseDate>09 Feb to 15 Feb 2026</ReleaseDate>

### New Features
- Workflows now support YAML inheritance, so you can reuse and extend shared configuration across workflow definitions.
- The dashboard's CLI download buttons now fetch the latest HyperExecute CLI version, and a copy-link option is available for sharing the download URL.

### Improvements
- Improved the HyperExecute MCP server's query tool so it returns better answers to HyperExecute questions.

### Bug Fixes
- Fixed scheduled workflow jobs stopping being scheduled after about a week.
- Fixed the tunnel being shown as off on the automation page even when a HyperExecute job was running with the tunnel enabled.

---

## Version 3.2.4

<ReleaseDate>02 Feb to 08 Feb 2026</ReleaseDate>

### Improvements
- Trial accounts running HyperExecute are now allocated more reliable infrastructure.
- JMeter jobs on HyperExecute now refresh execution data more reliably while a job is running.

### Bug Fixes
- Fixed running jobs not being visible on the HyperExecute dashboard.
- Fixed workflows not being triggered when using workflow variables.
- Fixed task metrics not being generated for aborted JMeter jobs.

---

## Version 3.2.3

<ReleaseDate>26 Jan to 01 Feb 2026</ReleaseDate>

### Bug Fixes
- Fixed HyperExecute concurrency showing parallels as consumed by other sessions, or staying stuck, causing jobs to queue even when nothing was running.
- Fixed slow loading of job details on the HyperExecute job dashboard for performance testing jobs.
- Fixed downloading JMeter results as CSV from a HyperExecute job returning only the first page of data.
- Fixed tests running through HyperExecute getting stuck at login.

---

## Version 3.2.2

<ReleaseDate>19 Jan to 25 Jan 2026</ReleaseDate>

### New Features
- Added the Git repository URL at the top of each job so Git details are easy to find.

### Improvements
- Custom YAML validation and error handling now catch invalid branches instead of saving the workflow with an incorrect branch.
- Enhanced the Custom Concurrency Trends widget with additional metadata, and added documentation for Peak Execution Trends.

### Bug Fixes
- Fixed the filter count not updating in real time during a HyperExecute run.
- Fixed an internal server error when executing a test case on HyperExecute.
- Fixed an intermittent logout issue when navigating to Web Automation via HyperExecute.
- Fixed tasks not being rescheduled.
- Fixed a Lambda error that occurred when concurrency exceeded the fair usage limit.
- Fixed Karate reports not being generated.
- Fixed handling of special characters when generating the consolidated Extent report.
- Fixed an SSL certificate verification error in pre-job steps.
- Fixed test remarks updated in the dashboard not being reflected for HyperExecute tests.
- Fixed a missing loader in the JMeter jobs widgets.

---

## Version 3.2.1

<ReleaseDate>12 Jan to 18 Jan 2026</ReleaseDate>

### New Features
- Added support for downloading artifacts from the remote machine after a global post step and uploading them to the job's artifacts section.
- Added screenshots alongside command logs for Maestro runs on real devices.

### Bug Fixes
- Fixed the virtual user count doubling for each thread group in performance test jobs.
- Fixed the `network.ws` and `network.sse` capabilities not being honored on HyperExecute.
- Fixed Cypress videos not showing the web page for some tests on macOS Chrome and Edge.
- Fixed the queued count showing 0 and concurrency being under-utilized when multiple workflow-triggered jobs were queued.
