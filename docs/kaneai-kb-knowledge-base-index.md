---
id: kaneai-kb-knowledge-base-index
title: KaneAI Knowledge Base
hide_title: true
sidebar_label: Knowledge Base
description: Central hub for all KaneAI test authoring guides, best practices, workarounds, and reference documentation
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai knowledge base
  - kaneai guides
  - kaneai best practices
  - test authoring
url: https://www.testmuai.com/support/docs/kaneai-kb-knowledge-base-index
site_name: TestMu AI
slug: kaneai-kb-knowledge-base-index/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "KaneAI Knowledge Base",
          "item": "https://www.testmuai.com/support/docs/kaneai-kb-knowledge-base-index"
        }]
      })
    }}
></script>

# KaneAI Knowledge Base

export const BrandName = ({type = 'default'}) => {
  const getBrandName = () => 'TestMu AI';
  const getBrandNameLowercase = () => 'testmu ai';
  if (type === 'lowercase') {
    return getBrandNameLowercase();
  }
  return getBrandName();
};

The KaneAI Knowledge Base is your go-to resource for writing effective test cases, handling complex testing scenarios, and getting the most out of KaneAI's natural language automation. Whether you're authoring your first test or working around advanced edge cases, these guides provide practical, scenario-driven instructions with real-world examples.

## Authoring Guides

Start here to learn how to write reliable test instructions for any scenario — from finding elements on the page to handling complex form interactions.

<div className="support_main">
  <a href="/support/docs/kaneai-kb-finding-and-interacting-with-elements/">
    <div className="support_inners">
      <h3>Element Interactions</h3>
      <p>Target elements precisely using text, type, position, and context cues. Covers scrolling, tab management, hover, and drag-and-drop.</p>
    </div>
  </a>

  <a href="/support/docs/kaneai-kb-forms-inputs-and-data-entry/">
    <div className="support_inners">
      <h3>Forms & Inputs</h3>
      <p>Handle text inputs, dropdowns, date pickers, checkboxes, file uploads, OTP fields, sliders, autocomplete, and multi-step form wizards.</p>
    </div>
  </a>

  <a href="/support/docs/kaneai-kb-assertions-and-validation/">
    <div className="support_inners">
      <h3>Assertions Guide</h3>
      <p>Write reliable assertions for text, visual elements, URLs, layout, and math. Includes do's and don'ts, variable-based assertions, and failure configuration.</p>
    </div>
  </a>

  <a href="/support/docs/kaneai-kb-dynamic-content-waits-and-page-state/">
    <div className="support_inners">
      <h3>Waits & Timing</h3>
      <p>Handle loading spinners, toast notifications, modals, infinite scroll, lazy loading, and async content with the right wait strategy.</p>
    </div>
  </a>

  <a href="/support/docs/kaneai-kb-mobile-app-testing-patterns/">
    <div className="support_inners">
      <h3>Mobile Patterns</h3>
      <p>Android & iOS specific patterns — keyboard handling, OTP fields, native pickers, gestures, deep links, permission dialogs, and spannable text.</p>
    </div>
  </a>
</div>

## Advanced Testing

Guides for complex testing scenarios involving authentication, API validation, and workarounds for natural language limitations.

<div className="support_main">
  <a href="/support/docs/kaneai-kb-authentication-and-session-management/">
    <div className="support_inners">
      <h3>Authentication & Sessions</h3>
      <p>Test login flows, TOTP/MFA with native smart variables, session persistence, logout, and timeout handling. Includes reusable login modules.</p>
    </div>
  </a>

  <a href="/support/docs/kaneai-kb-api-testing-and-network-assertions/">
    <div className="support_inners">
      <h3>API & Network</h3>
      <p>Make API calls via curl, validate responses with JSON variables, assert network logs, and combine API + UI testing in a single flow.</p>
    </div>
  </a>

  <a href="/support/docs/kaneai-kb-js-snippets-and-workarounds/">
    <div className="support_inners">
      <h3>JS Workarounds</h3>
      <p>When natural language isn't enough — JS snippets for date pickers, CSS validation, string manipulation, table cells, and more.</p>
    </div>
  </a>

  <a href="/support/docs/kaneai-failure-conditions/">
    <div className="support_inners">
      <h3>Failure Conditions</h3>
      <p>Configure how assertion failures behave — fail immediately, fail and continue, or warn and continue. Set defaults at organization or step level.</p>
    </div>
  </a>
</div>

## Variables and Parameters

Manage dynamic data, secrets, and parameterized test inputs.

<div className="support_main">
  <a href="/support/docs/kane-ai-using-variables/">
    <div className="support_inners">
      <h3>Variables</h3>
      <p>Create and use local, global, and environment variables. Store values from the application and reuse them across test steps and executions.</p>
    </div>
  </a>

  <a href="/support/docs/kane-ai-secrets/">
    <div className="support_inners">
      <h3>Secrets</h3>
      <p>Securely stored sensitive data (e.g., passwords, API tokens) encrypted via HashiCorp Vault. Never exposed in logs or generated code.</p>
    </div>
  </a>

  <a href="/support/docs/kane-ai-smart-variables/">
    <div className="support_inners">
      <h3>Smart Variables</h3>
      <p>Predefined dynamic variables for dates, randomization, device info, and system details. Use `{{smart.current_date}}`, `{{smart.random_email}}`, and more.</p>
    </div>
  </a>

  <a href="/support/docs/kane-ai-using-parameters/">
    <div className="support_inners">
      <h3>Parameters</h3>
      <p>Values passed into test cases at runtime to customize test execution for different configurations or environments.</p>
    </div>
  </a>

  <a href="/support/docs/kane-ai-using-datasets/">
    <div className="support_inners">
      <h3>Datasets</h3>
      <p>Collections of test data used for data-driven testing, allowing you to run the same test with different inputs.</p>
    </div>
  </a>
</div>

## Reference

<div className="support_main">
  <a href="/support/docs/kane-ai-command-guide/">
    <div className="support_inners">
      <h3>Command Types</h3>
      <p>Complete reference of all supported KaneAI commands — navigation, clicks, typing, waits, tab management, scrolling, assertions, conditional logic, and queries.</p>
    </div>
  </a>

  <a href="/support/docs/kane-ai-automation-code-generation/">
    <div className="support_inners">
      <h3>Code Generation</h3>
      <p>Generate automation scripts from KaneAI tests in multiple frameworks and languages including Selenium (Python), Appium (Python), and more.</p>
    </div>
  </a>

  <a href="/support/docs/error-handling-kaneai/">
    <div className="support_inners">
      <h3>Error Handling</h3>
      <p>Understand error messages in KaneAI, what they mean, and how to resolve common issues during test authoring and execution.</p>
    </div>
  </a>
</div>

## Quick Start Guide

New to KaneAI? Here's the recommended reading order:

1. **[Author Your First Desktop Browser Test](/support/docs/author-your-first-desktop-browser-test/)** — Get started by authoring your first desktop browser test
2. **[Author Your First Mobile Browser Test](/support/docs/author-your-first-mobile-browser-test/)** — Learn to author mobile browser tests with device selection and configuration
3. **[Author Your First Mobile App Test](/support/docs/author-your-first-mobile-app-test/)** — Build your first mobile app test with app upload and device configuration
4. **[Element Interactions](/support/docs/kaneai-kb-finding-and-interacting-with-elements/)** — Learn how to describe elements so KaneAI can find them reliably
5. **[Forms & Inputs](/support/docs/kaneai-kb-forms-inputs-and-data-entry/)** — Handle every type of form element
6. **[Assertions Guide](/support/docs/kaneai-kb-assertions-and-validation/)** — Verify your app works correctly
7. **[Waits & Timing](/support/docs/kaneai-kb-dynamic-content-waits-and-page-state/)** — Handle async behavior and timing
8. **[JS Workarounds](/support/docs/kaneai-kb-js-snippets-and-workarounds/)** — When natural language isn't enough
