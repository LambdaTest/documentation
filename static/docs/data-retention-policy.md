# Data Retention Policy

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This page provides a comprehensive overview of how long your data is retained across all TestMu AI products. Unless stated otherwise, the default retention period is **30 days** from the date of creation.

**Enterprise Retention**
Enterprise customers can request extended retention periods for most data types. Contact your account manager or [support@testmuai.com](mailto:support@testmuai.com) for details.

  Web Automation
  App Automation
  Real Device Cloud
  Real-Time Testing
  HyperExecute
  SmartUI
  Test Manager
  KaneAI
  Accessibility
  Analytics / Insights
  Web Scanner
  Platform

## Web Automation

| Data Type | Retention Period | Notes |
|-----------|-----------------|-------|
| Builds & Tests | 30 days | Build and test metadata, status, and execution data |
| Videos | 30 days | Test session video recordings |
| Logs | 30 days | Console, network, and command logs |
| Screenshots | 30 days | Captured during test execution |

## App Automation

| Data Type | Retention Period | Notes |
|-----------|-----------------|-------|
| Builds & Tests | 30 days | Build and test metadata, status, and execution data |
| Videos | 30 days | Test session video recordings |
| Logs | 30 days | Console, network, and command logs |
| Screenshots | 30 days | Captured during test execution |

## Real Device Cloud

| Data Type | Retention Period | Notes |
|-----------|-----------------|-------|
| Uploaded apps (APK/IPA) | 30 days | Apps uploaded for testing |
| App Profiling data | 30 days | Performance profiling reports |

## Real-Time Testing

| Data Type | Retention Period | Notes |
|-----------|-----------------|-------|
| Uploaded apps (APK/IPA) | 30 days | Apps uploaded for manual testing |

## HyperExecute

| Data Type | Retention Period | Notes |
|-----------|-----------------|-------|
| Test execution logs & records | 30 days | Execution data and test results |
| Test scripts | 30 days | Deleted permanently after retention period |
| Job artifacts & reports | 30 days | Stored automatically after job completion |
| Shareable links | 2-30 days | Configurable via `linkValidity` in YAML; default is 2 days |

Use the `linkValidity` key in your HyperExecute YAML to set how long shareable artifact links remain active (2-30 days).

## SmartUI

| Data Type | Retention Period | Notes |
|-----------|-----------------|-------|
| Projects / Builds | Retained until deleted | Stays active as long as the account is active |
| Screenshots (baseline, compared, captured) | 1 year | Baseline, comparison, and captured screenshots |
| Shareable links | Retained until build/project deleted | Linked to the lifecycle of the parent build/project |
| Audit logs | 30 days | Dependent on internal log retention policies |

## Test Manager

| Data Type | Retention Period | Notes |
|-----------|-----------------|-------|
| Projects | No retention limit | Retained as long as the account is active |
| Test Cases | No retention limit | Retained as long as the account is active |
| Test Runs | No retention limit | Retained as long as the account is active |
| Insights | No retention limit | Retained as long as the account is active |

Test Manager entities (projects, test cases, test runs) have no retention limit. However, if a test case is linked to an automation run, the **linked automation data** inherits the retention policy of the corresponding automation product (e.g., Web Automation = 30 days).

## KaneAI

| Data Type | Retention Period | Notes |
|-----------|-----------------|-------|
| Sessions | No retention limit | Includes generated code, runs, and version history |
| Modules | No retention limit | Reusable test blocks |
| Databases | No retention limit | Database connections |
| Variables | No retention limit | Variables and secrets |

## Accessibility

| Data Type | Retention Period | Notes |
|-----------|-----------------|-------|
| Automation scan reports (App/Web) | 30 days | Higher retention available on request for Enterprise |
| Manual scan reports (App/Web) | 30 days | Higher retention available on request for Enterprise |

## Analytics / Insights

| Data Type | Retention Period | Notes |
|-----------|-----------------|-------|
| Dashboards | No retention limit | User-created dashboards are retained indefinitely |
| Build & Test Insights data | 30 days | Historical analytics data |
| App Profiling reports | 30 days | Performance profiling data |
| Shareable dashboard links | 7, 15, 30 days, or Never | Links set to "Never" require a password for access |

## Web Scanner

| Data Type | Retention Period | Notes |
|-----------|-----------------|-------|
| Projects (visual / accessibility) | Retained until deleted | Active as long as the account is active |
| Schedules (visual / accessibility) | 1 year | Dependent on job execution infrastructure |

## Platform

| Data Type | Retention Period | Notes |
|-----------|-----------------|-------|
| Audit logs | 30 days | Enterprise customers can request higher retention |

## Key Points

- **Default retention**: 30 days from the date of creation unless otherwise specified.
- **Permanent data**: Test Manager, KaneAI, and Analytics dashboards have no retention limit and are retained as long as your account is active.
- **Extended retention**: SmartUI screenshots (1 year) and Web Scanner schedules (1 year) have longer retention periods.
- **Enterprise flexibility**: Enterprise customers can negotiate custom retention periods for most data types.
- **Linked data**: When test management entities reference automation data, the automation data follows its own product's retention policy.
- **Deletion**: Data is permanently deleted after the retention period expires and cannot be recovered.

## Need Extended Retention?

If your organization requires longer data retention for compliance, audit, or operational needs, contact our team:

- **Email**: [support@testmuai.com](mailto:support@testmuai.com)
- **Enterprise inquiries**: Reach out to your account manager
