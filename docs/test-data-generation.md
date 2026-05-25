---
id: test-data-generation
title: Test Data Generation
hide_title: false
sidebar_label: Test Data Generation
description: Generate synthetic test data, mask sensitive payloads in network logs and recordings, and parameterize tests across environments on TestMu AI.
keywords:
  - test data generation
  - synthetic data
  - data masking
  - network data masking
  - parameterization
  - kaneai datasets
  - kaneai parameters
  - kaneai variables
  - test data management

url: https://www.testmuai.com/support/docs/test-data-generation/
site_name: TestMu AI
slug: test-data-generation/
canonical: https://www.testmuai.com/support/docs/test-data-generation/
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
          "name": "Test Data Generation",
          "item": `${BRAND_URL}/support/docs/test-data-generation/`
        }]
      })
    }}
></script>

# Test Data Generation
* * *

<BrandName /> provides built-in capabilities to generate, manage, and protect the test data your teams use across automation. You can author synthetic datasets for data-driven tests, mask sensitive payloads in network logs and test recordings, and parameterize tests so the same flow runs across environments and inputs without rework.

This page summarizes the three capabilities and points you to the deeper documentation for each.

---

## Synthetic Data Generation

Author and manage datasets directly inside KaneAI Test Manager to drive the same test case with multiple inputs. Datasets remove the need to hand-craft fixtures or maintain external data files.

**Capabilities:**
- **Auto-generated default datasets** — every test case that uses parameters generates an immutable default dataset during authoring
- **Custom datasets** — create copies of default datasets, add rows, and edit values to cover additional scenarios
- **Autofill with AI** — populate dataset fields automatically based on parameter names (for example, generate realistic names, ages, and phone numbers)
- **CSV import** — bring existing test data into KaneAI by uploading a CSV
- **Version history** — track changes, revert, or restore previous dataset versions for audit and recovery

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/1.png').default} alt="KaneAI Test Manager Parameters table with Age, Phone number, and Name columns" className="doc_img img_center"/>

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/5.png').default} alt="Autofill with AI populating dataset values automatically" className="doc_img img_center"/>

**Documentation:**
- [KaneAI Datasets](/support/docs/kane-ai-using-datasets/)

---

## Data Masking

Protect credentials, tokens, and other confidential values from showing up in network logs and test recordings. Masking is enforced at the platform level so sensitive data never lands in shared artifacts.

**Capabilities:**
- **Network payload masking (Selenium)** — set the `network.mask` capability to `true` to automatically mask values for sensitive keys (`key`, `password`, `token`, `auth`, `email`, `cipher`, `secret`, `nonce`, `salt`) across request headers, response headers, and cookies
- **Lambda Masking for HyperExecute recordings** — automatically hide sensitive interactions captured in Playwright test recordings, including credentials, geolocation, and storage state
- **Compliance-ready logs** — share test results, debug network traffic, and store CI/CD reports without exposing production secrets

**Documentation:**
- [Network Data Masking for Selenium](/support/docs/network-data-masking/)
- [HyperExecute Lambda Masking (Release 2.3.1)](/support/docs/hyperexecute-release-notes-2024/#version-231)

---

## Parameterization

Pass dynamic values into test cases at runtime so a single test runs across environments, accounts, and configurations. KaneAI provides a layered model — variables, secrets, smart variables, parameters, and datasets — so each piece of dynamic data is stored in the most appropriate way.

**Capabilities:**
- **Variables** — reusable placeholders for values that change between runs (URLs, user IDs, configuration flags)
- **Secrets** — encrypted storage for credentials and other sensitive inputs that must never appear in plain text
- **Smart variables** — context-aware values that resolve at runtime (for example, the current build's artifact URL)
- **Parameters** — values supplied to a test case at execution time, including URL and data input fields, with the ability to convert any literal step value into a parameter on the fly
- **Datasets** — combine parameters into rows for data-driven runs across multiple inputs

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/1.png').default} alt="Convert step value as Parameter, Variable, or Secret in KaneAI" className="doc_img img_center"/>

<img loading="lazy" src={require('../assets/images/kane-ai/features/parameters/3.png').default} alt="Create Parameter dialog with name and value fields in KaneAI" className="doc_img img_center"/>

**Documentation:**
- [KaneAI Variables & Parameters Overview](/support/docs/kaneai-variables-and-parameters/)
- [Using Variables](/support/docs/kane-ai-using-variables/)
- [Using Parameters](/support/docs/kane-ai-using-parameters/)
- [Secrets](/support/docs/kane-ai-secrets/)

---

## Related Resources

- [Enterprise Readiness Overview](/support/docs/enterprise-ready/)
- [Product Security](/support/docs/enterprise-ready/#product-security)
- [Data Protection & GDPR](/support/docs/enterprise-ready/#data-protection--gdpr)

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
      Test Data Generation
      </span>
    </li>
  </ul>
</nav>
