# Test Data Generation

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI provides built-in capabilities to generate, manage, and protect the test data your teams use across automation. You can author synthetic datasets for data-driven tests, mask sensitive payloads in network logs and test recordings, and parameterize tests so the same flow runs across environments and inputs without rework.

This page summarizes the three capabilities and points you to the deeper documentation for each.

## Synthetic Data Generation

Author and manage datasets directly inside KaneAI Test Manager to drive the same test case with multiple inputs. Datasets remove the need to hand-craft fixtures or maintain external data files.

**Capabilities:**
- **Auto-generated default datasets** — every test case that uses parameters generates an immutable default dataset during authoring
- **Custom datasets** — create copies of default datasets, add rows, and edit values to cover additional scenarios
- **Autofill with AI** — populate dataset fields automatically based on parameter names (for example, generate realistic names, ages, and phone numbers)
- **CSV import** — bring existing test data into KaneAI by uploading a CSV
- **Version history** — track changes, revert, or restore previous dataset versions for audit and recovery

**Documentation:**
- [KaneAI Datasets](/support/docs/kane-ai-using-datasets/)

## Data Masking

Protect credentials, tokens, and other confidential values from showing up in network logs and test recordings. Masking is enforced at the platform level so sensitive data never lands in shared artifacts.

**Capabilities:**
- **Network payload masking (Selenium)** — set the `network.mask` capability to `true` to automatically mask values for sensitive keys (`key`, `password`, `token`, `auth`, `email`, `cipher`, `secret`, `nonce`, `salt`) across request headers, response headers, and cookies
- **Lambda Masking for HyperExecute recordings** — automatically hide sensitive interactions captured in Playwright test recordings, including credentials, geolocation, and storage state
- **Compliance-ready logs** — share test results, debug network traffic, and store CI/CD reports without exposing production secrets

**Documentation:**
- [Network Data Masking for Selenium](/support/docs/network-data-masking/)
- [HyperExecute Lambda Masking (Release 2.3.1)](/support/docs/hyperexecute-release-notes-2024/#version-231)

## Parameterization

Pass dynamic values into test cases at runtime so a single test runs across environments, accounts, and configurations. KaneAI provides a layered model — variables, secrets, smart variables, parameters, and datasets — so each piece of dynamic data is stored in the most appropriate way.

**Capabilities:**
- **Variables** — reusable placeholders for values that change between runs (URLs, user IDs, configuration flags)
- **Secrets** — encrypted storage for credentials and other sensitive inputs that must never appear in plain text
- **Smart variables** — context-aware values that resolve at runtime (for example, the current build's artifact URL)
- **Parameters** — values supplied to a test case at execution time, including URL and data input fields, with the ability to convert any literal step value into a parameter on the fly
- **Datasets** — combine parameters into rows for data-driven runs across multiple inputs

**Documentation:**
- [KaneAI Variables & Parameters Overview](/support/docs/kaneai-variables-and-parameters/)
- [Using Variables](/support/docs/kane-ai-using-variables/)
- [Using Parameters](/support/docs/kane-ai-using-parameters/)
- [Secrets](/support/docs/kane-ai-secrets/)

## Related Resources

- [Enterprise Readiness Overview](/support/docs/enterprise-ready/)
- [Product Security](/support/docs/enterprise-ready/#product-security)
- [Data Protection & GDPR](/support/docs/enterprise-ready/#data-protection--gdpr)
