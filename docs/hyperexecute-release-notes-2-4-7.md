---
id: hyperexecute-release-notes-2-4-7
title: Version 2.4.7
hide_title: false
sidebar_label: Version 2.4.7
description: Version 2.4.7
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-4-7
site_name: LambdaTest
slug: hyperexecute-release-notes-2-4-7
---

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
          "name": "Version",
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-4-7/`
        }]
      })
    }}
></script>

## HyperExecute: Accessibility Testing Support for Selenium and Cypress

HyperExecute now supports Accessibility Testing for both Selenium and Cypress! This update enables you to ensure that your web applications comply with accessibility standards such as **WCAG 2.2 AA**.

## Benefits of Accessibility Testing in HyperExecute
With this feature, you can seamlessly validate a range of accessibility issues to create more inclusive and user-friendly web applications. Here's how it benefits you:

- **Automated Issue Detection:** Identify common accessibility problems such as missing alt attributes, incorrect ARIA roles, and insufficient color contrast—early in the development process.
- **Detailed Accessibility Reports:** Receive comprehensive reports that pinpoint accessibility issues, with actionable recommendations for resolving them.
- **Improved Compliance:** Ensure your applications adhere to critical accessibility guidelines like **WCAG 2.2 AA** or previous versions: WCAG 2.0 A, WCAG 2.0 AA, WCAG 2.1 A, WCAG 2.1 AA, WCAG 2.1 AAA, and WCAG 2.2 A, helping you avoid legal risks and create a better experience for all users.

## How to Use:
- **For Selenium Users:**
To start accessibility testing with Selenium, you have to pass `"accessibility", true` capability in your test files.
> 📕 Check out our detailed guide on [executing your accessibility tests using Selenium on HyperExecute](/support/docs/selenium-hyprerexecute-accessibility-tests/).

- **For Cypress Users:**
To start accessibility testing with Cypress, you have to pass `accessibility: true` capability in the [cypressOps](/support/docs/deep-dive-into-hyperexecute-yaml/#cypressops) flag of your YAML file as well as update other necessary configurations in your project.

> 📕 Follow our step-by-step documentation to set up and run accessibility checks in [Cypress v10](/support/docs/cypress-v10-hyprerexecute-accessibility-tests/) or [Cypress v9](/support/docs/cypress-v9-hyprerexecute-accessibility-tests/) on HyperExecute.

<img loading="lazy" src={require('../assets/images/accessibility-testing/cypress/hyp-cyp9.png').default} alt="automation-dashboard" className="doc_img"/>