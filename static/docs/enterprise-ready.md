# Enterprise Readiness

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI is built for enterprise-scale testing. This page provides a comprehensive overview of how TestMu AI meets the requirements of enterprise buyers across security, compliance, access control, deployment, integrations, and more.

  Single Sign-On
  Audit Logs
  RBAC
  Product Security
  Deployment Options
  Team Management
  Integrations
  Test Data Generation
  Reporting & Analytics
  SLA & Support
  Data Protection & GDPR
  Change Management
  Product Assortment

## Single Sign-On

TestMu AI supports enterprise Single Sign-On (SSO) to centralize user authentication through your organization's identity provider. SSO eliminates the need for separate credentials and enforces your authentication policies across all TestMu AI products.

**Capabilities:**
- **SAML 2.0** based authentication with any compatible IdP
- **Just-in-Time (JIT) provisioning** — automatically create user accounts on first login
- **SCIM provisioning** — automated user lifecycle management (create, update, deactivate)
- **Supported identity providers**: Okta, Azure AD, PingOne, JumpCloud, and any SAML 2.0 compliant IdP

**Documentation:**
- [Getting Started with SSO](/support/docs/single-sign-on/)
- [SCIM Overview](/support/docs/scim/)
- [Okta SCIM Integration](/support/docs/scim/okta/)
- [Azure AD SCIM Integration](/support/docs/scim/azure/)
- [PingOne SCIM Integration](/support/docs/pingone-scim/)
- [JumpCloud SCIM Integration](/support/docs/jumpcloud-scim/)

## Audit Logs

TestMu AI provides comprehensive audit logging to track user and organization-level activity. Audit logs are essential for compliance, security investigations, and operational visibility.

**Capabilities:**
- Track user actions across the platform (logins, test executions, configuration changes)
- Filter logs by user, action type, date range, and resource
- Export logs for external analysis or compliance reporting
- Retention: 60 days (extended retention available for Enterprise customers)

**Documentation:**
- [Audit Logs](/support/docs/audit-logs/)
- [Data Retention Policy](/support/docs/data-retention-policy/)

## Role-Based Access Control

TestMu AI provides granular RBAC to control who can access, view, and manage resources across the platform. Administrators can define custom roles with fine-grained permissions at both the product and entity level.

**Capabilities:**
- **Custom roles** with configurable permissions
- **Product-level access control** — restrict access to specific products (Web Automation, App Automation, HyperExecute, etc.)
- **Entity-level permissions** — control access to projects, test cases, test runs, and configurations
- **Organization-level role assignment** — manage roles centrally for all users
- **Pre-built roles** — Admin, Manager, User, and Guest with sensible defaults

**Documentation:**
- [Roles and Permissions (RBAC)](/support/docs/rbac-roles-and-permissions/)

## Product Security

TestMu AI maintains enterprise-grade security across the platform with industry-standard certifications and encryption.

**Certifications & Compliance:**
- **SOC 2 Type II** certified — security, availability, processing integrity, confidentiality, and privacy (report available under NDA)
- **ISO 27001** certified — information security management
- **GDPR** compliant — data privacy and protection

**Encryption:**
- **Data in transit**: TLS 1.2 or higher for all communications
- **Data at rest**: AES-256 encryption for all stored data
- **Secrets management**: HashiCorp Vault with AES-256-GCM encryption, zero-knowledge architecture
- **Credentials**: Multi-layer bcrypt hashing, no plaintext storage

**Infrastructure Security:**
- Clean VM/device per test session — no data leakage between sessions
- Immediate data deletion from VMs/devices after test completion
- Network isolation and secure service-to-service authentication
- Private tenant deployment for AI features (Azure OpenAI)

**Resources:**
- [Security & Trust Page](https://www.testmuai.com/trust/security#platform-security)
- [Secrets Management](/support/docs/hyperexecute-how-to-save-and-manage-secrets/)

## Deployment Options

TestMu AI offers flexible deployment options to meet your organization's infrastructure and compliance requirements.

| Deployment | Description | Best For |
|-----------|-------------|----------|
| **SaaS Cloud** | Fully managed cloud platform — no infrastructure to maintain | Most organizations |
| **Private Cloud** | Dedicated cloud infrastructure with isolated resources | Organizations requiring data isolation |
| **On-Premise** | Self-hosted deployment within your own infrastructure | Highly regulated industries, air-gapped environments |

**Key features across all deployments:**
- Private real device cloud (dedicated devices for your org)
- Network whitelisting and tunnel support for internal applications
- Custom data retention policies

**Documentation:**
- [HyperExecute Private Cloud Setup](/support/docs/hyperexecute-private-cloud-setup/)
- [Network Whitelisting Guide](/support/docs/network-whitelisting-and-tunnel-guide/)
- [Public IP Ranges](/support/docs/testmu-public-ip/)

## Team Management

TestMu AI provides comprehensive team management capabilities to organize users, control access, and manage testing at scale across your organization.

**Capabilities:**
- **Organizations** — top-level entity for managing users, billing, and settings
- **Sub-Organizations** — create separate sub-orgs for departments, teams, or business units with independent analytics and concurrency tracking
- **Groups** — organize users into groups for easier access management and resource allocation
- **User Management** — invite, manage, and remove users with role-based permissions

**Documentation:**
- [Team Management](/support/docs/team-management/)
- [Sub Organizations](/support/docs/sub-organizations/)
- [Account Management](/support/docs/account-management/)

## Integrations

TestMu AI integrates with the tools your enterprise already uses — from project management and CI/CD to communication and reporting.

**Project Management:**
- **Jira** — native app with bidirectional sync, AI test generation from tickets
- **Azure DevOps** — native app with work item linking and AI generation

**Source Control & CI/CD:**
- **GitHub App** — PR-based test triggering, auto test generation, RCA, status checks
- **Jenkins, GitHub Actions, GitLab CI, CircleCI, Azure Pipelines** — full CI/CD integration
- **HyperExecute CLI** — integrate test execution into any pipeline

**Communication:**
- **Slack** — build and dashboard notifications
- **Microsoft Teams** — build and dashboard notifications

**APIs:**
- RESTful APIs for test management, execution, and artifact retrieval
- Webhook support for real-time event notifications

**Documentation:**
- [Integrations Overview](/support/docs/integrations-with-ci-cd-tools/)
- [GitHub App Integration](/support/docs/github-app-integration/)

## Test Data Generation

TestMu AI provides built-in capabilities to generate, manage, and protect the test data your teams use across automation. Teams can author synthetic datasets for data-driven tests, mask sensitive payloads in network logs and recordings, and parameterize tests so the same flow runs across environments and inputs without rework.

**Capabilities:**
- **Synthetic data generation** — author datasets in KaneAI Test Manager, populate values manually, autofill with AI based on parameter names, or import from CSV; default datasets are immutable and every dataset carries full version history with revert/restore support
- **Data masking** — mask sensitive payloads (passwords, tokens, API keys, auth headers, cookies) in HTTP network logs via the `network.mask` Selenium capability; mask credentials, geolocation, and storage state captured in HyperExecute test recordings (Lambda Masking)
- **Parameterization** — pass dynamic values into test cases at runtime using variables, secrets (encrypted), smart variables (resolved at execution), parameters, and datasets to reuse the same test across environments such as staging, pre-prod, and prod

**Documentation:**
- [Test Data Generation Overview](/support/docs/test-data-generation/)
- [KaneAI Datasets](/support/docs/kane-ai-using-datasets/)
- [KaneAI Variables & Parameters](/support/docs/kaneai-variables-and-parameters/)
- [Network Data Masking for Selenium](/support/docs/network-data-masking/)
- [HyperExecute Lambda Masking](/support/docs/hyperexecute-release-notes-2024/#version-231)

## Reporting & Analytics

TestMu AI provides enterprise-grade reporting and analytics with AI-powered insights to help QA managers and executives make data-driven decisions.

**Capabilities:**
- **Pre-built dashboard templates** — get started instantly with common views
- **Custom dashboards** — build your own with heatmap, bar, line, table, pie, and billboard widgets
- **AI Test Intelligence** — Smart Tags (Flaky, Always Failing, New Failures), Flaky Test Detection, Failure Categorization AI
- **AI Root Cause Analysis (AI RCA)** — LLM-powered failure diagnosis with actionable fix recommendations
- **Build Insights and Comparison** — compare builds side-by-side to track quality trends
- **Sub-Organization analytics** — drill down into team-level and sub-org performance
- **Dashboard sharing** — shareable links with configurable expiry and password protection
- **Data export** — export up to 1,000 records for external analysis

**Documentation:**
- [Insights Overview](/support/docs/analytics-overview/)
- [Custom Widgets](/support/docs/dashboards-custom-widgets/)
- [AI Root Cause Analysis](/support/docs/analytics-ai-root-cause-analysis/)
- [Defect Analysis and Prediction](/support/docs/defect-analysis-prediction/)

## SLA & Support

TestMu AI provides enterprise support with dedicated resources and guaranteed response times.

**Support Tiers:**

| Feature | Standard | Enterprise |
|---------|----------|-----------|
| Support channels | Email, Chat | Email, Chat, Phone, Dedicated Slack |
| Response time | Business hours | Priority SLA (custom) |
| Customer Success Manager | Shared | Dedicated CSM |
| Onboarding | Self-serve + docs | White-glove onboarding |
| Training | Documentation | Custom training sessions |
| Audit log retention | 60 days | Extended (custom) |
| Data retention | 60 days | Custom retention policies |

**Contact:**
- Email: [support@testmuai.com](mailto:support@testmuai.com)
- Community: [community.testmuai.com](https://community.testmuai.com/)
- Documentation: [testmuai.com/support/docs](https://www.testmuai.com/support/docs/)

## Data Protection & GDPR

TestMu AI is GDPR compliant and provides comprehensive data protection controls for enterprise customers.

**Data Protection:**
- **Data Processing Agreement (DPA)** available with Standard Contractual Clauses
- **Customer as Data Controller** — you retain ownership and control of your test data
- **TestMu AI as Data Processor** — we process data only as instructed
- **No PII/PHI storage** by default — system does not collect or require identifiable personal data

**Data Retention:**
- Default 60-day retention across all products
- Custom retention available for Enterprise customers
- Immediate VM/device cleanup after each test session
- Data export capabilities for compliance needs

**Privacy Controls:**
- Right to data deletion
- Data portability via APIs and exports
- Configurable retention periods
- Encrypted data storage and transmission

**Documentation:**
- [Data Retention Policy](/support/docs/data-retention-policy/)
- [Privacy Policy](https://www.testmuai.com/legal/privacy)
- [Data Processing Agreement](https://www.testmuai.com/resources/LambdaTest_DPA_with_SCC_V2.4.pdf)

## Change Management

TestMu AI provides tools for controlled test execution management and scheduled rollouts, ensuring enterprises can manage changes systematically.

**Capabilities:**
- **Scheduled Workflows** — run test suites on a schedule (one-time, recurring, with expiry dates) without CI/CD
- **Connected Workflows (Test Chains)** — chain workflows across projects for sequential execution — run regression only if smoke passes
- **Workflow Variables** — parameterize runs to reuse the same configuration across environments (staging, pre-prod, prod)
- **Feature flags** — enterprise customers can control feature availability at the org level
- **Version control integration** — GitHub and Bitbucket integration for branch-level test execution

**Documentation:**
- [HyperExecute Workflows](/support/docs/hyperexecute-workflows/)
- [Test Chains](/support/docs/hyperexecute-test-chains/)

## Product Assortment

TestMu AI offers multiple product tiers designed for different organizational needs, from individual developers to large enterprises.

| Tier | Target | Key Differentiators |
|------|--------|-------------------|
| **Free** | Individual developers, evaluation | Limited sessions, basic features |
| **Starter** | Small teams | Increased concurrency, core features |
| **Professional** | Growing teams | Full feature access, parallel execution |
| **Enterprise** | Large organizations | SSO, RBAC, Private Cloud, Dedicated Support, Custom Retention, On-Premise |

**Enterprise-exclusive features:**
- Single Sign-On (SSO) and SCIM provisioning
- Role-Based Access Control (RBAC) with custom roles
- Private Cloud and On-Premise deployment
- Dedicated Customer Success Manager
- Custom data retention policies
- Extended audit log retention
- Org-level secrets management
- Priority support SLA

**For pricing details**: [lambdatest.com/pricing](https://www.testmuai.com/pricing)

## Need More Information?

If you're evaluating TestMu AI for your enterprise and need additional details on security, compliance, architecture, or deployment options:

- **Enterprise Sales**: Contact your account manager
- **Security Questionnaire**: Request via [support@testmuai.com](mailto:support@testmuai.com)
- **SOC 2 Report**: Available under NDA — contact enterprise sales
- **Architecture Diagram**: Available upon request with NDA in place
