---
id: hyperexecute-enterprise-features
title: HyperExecute Enterprise Features
hide_title: false
sidebar_label: Enterprise Features
description: Explore enterprise-grade features available in HyperExecute for advanced administration, security, and infrastructure management.
keywords:
  - hyperexecute
  - enterprise
  - RBAC
  - SSO
  - service account
  - org preferences
  - admin features
  - on-premise

url: https://www.testmuai.com/support/docs/hyperexecute-enterprise-features/
site_name: TestMu AI
slug: hyperexecute-enterprise-features/
canonical: https://www.testmuai.com/support/docs/hyperexecute-enterprise-features/
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
          "name": "Enterprise Features",
          "item": `${BRAND_URL}/support/docs/hyperexecute-enterprise-features/`
        }]
      })
    }}
></script>

# HyperExecute Enterprise Features
* * *

:::info Enterprise Plan Only
All features on this page are available exclusively in the **Enterprise plan**. Contact your account manager or [support@lambdatest.com](mailto:support@lambdatest.com) to enable these features for your organization.
:::

This page covers enterprise-grade administration, security, and platform features available in HyperExecute.

---

## Administration Features

### Role-Based Access Control (RBAC)

HyperExecute supports RBAC to control who can access, view, and manage projects, jobs, and platform settings. Administrators can assign permissions based on user roles, ensuring that users only have access to the resources they need.

**Key capabilities:**
- Define roles with granular permissions (view, execute, manage)
- Assign roles at the project or organization level
- Restrict access to sensitive operations like secret management and configuration changes

### SSO Login

HyperExecute supports Single Sign-On (SSO) integration, allowing users to authenticate using your organization's identity provider (IdP). This eliminates the need for separate credentials and enforces your organization's authentication policies.

**Supported providers:**
- SAML 2.0 based identity providers
- Integration with enterprise IdPs (Okta, Azure AD, OneLogin, etc.)

### Org Preferences

Organization administrators can control platform-wide settings through the Org Preferences panel in the Admin UI. These settings apply to all users within the organization.

**Configurable settings include:**
- Default timeout values (global, test suite)
- Fair Usage Policy (FUP) limits
- Concurrency limits
- Default execution environment settings

### Session Logout Timeout

Administrators can configure automatic session timeout for login sessions on the platform. This ensures inactive sessions are terminated after a specified duration, improving security compliance.

### Service Account Token Support

HyperExecute supports service account credentials for API authentication. This is essential for CI/CD pipelines and automated workflows where individual user credentials are not appropriate.

**Use cases:**
- CI/CD pipeline integration without personal credentials
- Automated job triggering via APIs
- Service-to-service authentication

### Adding Co-Owners for Projects

Project owners can add co-owners who share management permissions for a project, including the ability to manage workflows, secrets, and configurations.

**Capabilities:**
- Add and remove co-owners from the project settings
- Co-owners can manage workflows, secrets, and project settings
- Useful for team collaboration and shared ownership of test projects

---

## Platform Features

### Job Trigger API

HyperExecute provides an API to programmatically trigger test execution jobs. This enables integration with custom orchestration systems, internal tools, and automation pipelines beyond standard CI/CD.

### Abort Job

Users can stop a running job directly from the HyperExecute portal or via the API. When a job is aborted, all running test sessions are terminated and no residual processes remain.

### Video Recording of Tests

HyperExecute records test execution as video for later review and debugging. Videos are available in the job details page after test completion.

:::note
Video recording requires FFMPEG on the base OS image. If FFMPEG is not available in the configured image, videos will not be recorded.
:::

### Multi-Grid Execution

HyperExecute supports executing tests using multiple frameworks within a single execution environment. This allows teams to run different framework test executions (e.g., Selenium + Playwright) from the same project.

### Special Character Encoding

HyperExecute VMs support special character encoding, ensuring tests with multilingual content and special characters execute correctly.

### Qmetry Framework & Reporting Support

HyperExecute supports the Qmetry testing and reporting framework, enabling teams using Qmetry to run their tests and generate native Qmetry reports.

### Execute Multiple Tests in Single Scenario

HyperExecute supports running multiple tests within a single scenario stage, optimizing execution time and resource usage.

### Support for Selenium Tests via WAF

HyperExecute supports running Selenium tests through Web Application Firewall (WAF) configurations, including WAF-Java-Maven, WAF-Java-Gradle, WAF-.NET, and WAF-Python setups.

### Cross-Browser Testing with WAF Test Scripts

Create jobs specifically for cross-browser testing using WAF test scripts. Browser configurations are defined in the HyperExecute YAML and tests execute across multiple browsers simultaneously.

### Error Codes and Tracking ID Support

HyperExecute provides structured error codes and tracking IDs in CLI metadata when a job is triggered. These can be used for:
- Correlating errors across systems
- Debugging with support teams
- Automated error classification in CI/CD pipelines

### Custom Announcements

Administrators can create announcement banners to broadcast notifications across all onboarded users on the platform. This is useful for planned maintenance, feature updates, or policy changes.

### Support Portal

Enterprise customers have access to a dedicated support portal to track open bugs, feature requests, and communication with the <BrandName /> team.

### WCAG Compatibility

The HyperExecute platform meets WCAG accessibility standards, ensuring the dashboard and tooling are usable by people with disabilities.

### Callback URL Support

HyperExecute supports configuring callback URLs that are invoked after job completion. This enables integration with external systems for automated post-processing, notifications, or pipeline continuation.

---

## Infrastructure Features

### Linux Autoscaling

HyperExecute automatically scales computing resources up or down based on workload. When test demand increases, additional resources are provisioned dynamically. When demand decreases, resources are released.

**Key points:**
- No active jobs are interrupted during scaling events
- Resources are allocated based on real-time workload analysis
- Available on Linux execution environments

### OS Support — Linux

HyperExecute supports running tests on Linux operating systems. Linux environments provide:
- Faster provisioning times
- Lower resource overhead
- Compatibility with most CI/CD pipelines

### Multi-Image Support

HyperExecute supports configuring and running tests on different pods with different container images. This allows teams to:
- Use custom images with specific dependencies pre-installed
- Select images at the job level based on test requirements
- Maintain separate images for different frameworks or environments

### Static Website Hosting

HyperExecute supports hosting static web content for report artifacts. This allows generated reports (HTML, extent reports, etc.) to be served as static websites accessible via shareable links.

### Kafka Event Integration

HyperExecute can send events to Kafka topics after job completion. This enables:
- Integration with downstream data pipelines
- Real-time event processing for test analytics
- Custom notification and monitoring systems

### Build Tool Credentials Support

HyperExecute supports private artifact repository management, allowing teams to configure build tool credentials (Maven, Gradle, npm) for internal dependency resolution. This ensures projects with private dependencies build correctly on HyperExecute.

### Data Retention Configuration

Enterprise administrators can configure custom data retention durations for test results, logs, and artifacts. Retention is configured at the infrastructure level during cluster provisioning.

---

## UI Enhancements

### Git Commit ID on Jobs

Git commit IDs are displayed in the job metadata, providing traceability between test executions and specific code changes.

### GitHub Link on Project Section

When a project is linked to a GitHub repository, the repository link is displayed under the project name for quick navigation.

### View Job List

Users can view a filtered list of jobs they have run, with accurate job details and filtering capabilities based on status, date, and other parameters.

### User Local Timezone Display

All job schedules and timestamps are displayed in the user's local timezone. Internally, times are stored in UTC and converted for display.

### Filter Jobs

Jobs can be filtered based on:
- User name
- Job number
- Comment/label
- Status
- Date range

For more details, see [HyperExecute Guided Walkthrough — Job Details](/support/docs/hyperexecute-guided-walkthrough/#job-details-page).

---

## GitHub App Integration

HyperExecute provides a GitHub App for seamless project onboarding and integration. The app supports:
- Automatic project linking from GitHub repositories
- Multi-tenant support for organizations with multiple GitHub organizations
- Webhook-based job triggering on push/PR events

---

## Related Documentation

- [HyperExecute Secrets Management](/support/docs/hyperexecute-how-to-save-and-manage-secrets/)
- [HyperExecute Workflows](/support/docs/hyperexecute-workflows/)
- [HyperExecute Email Reports](/support/docs/hyperexecute-email-reports/)
- [HyperExecute YAML Deep Dive](/support/docs/deep-dive-into-hyperexecute-yaml/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
      Enterprise Features
      </span>
    </li>
  </ul>
</nav>
