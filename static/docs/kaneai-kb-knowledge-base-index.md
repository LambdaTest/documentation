# KaneAI Knowledge Base

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

  const getBrandName = () => 'TestMu AI';
  const getBrandNameLowercase = () => 'testmu ai';
  if (type === 'lowercase') {
    return getBrandNameLowercase();
  }
  return getBrandName();
};

The KaneAI Knowledge Base is your go-to resource for writing effective test cases, handling complex testing scenarios, and getting the most out of KaneAI's natural language automation. Whether you're authoring your first test or working around advanced edge cases, these guides provide practical, scenario-driven instructions with real-world examples.

## Authoring Guides

Start here to learn how to write reliable test instructions for any scenario, from finding elements on the page to handling complex form interactions.

      Element Interactions
      Target elements precisely using text, type, position, and context cues. Covers scrolling, tab management, hover, and drag-and-drop.

      Forms & Inputs
      Handle text inputs, dropdowns, date pickers, checkboxes, file uploads, OTP fields, sliders, autocomplete, and multi-step form wizards.

      Assertions Guide
      Write reliable assertions for text, visual elements, URLs, layout, and math. Includes do's and don'ts, variable-based assertions, and failure configuration.

      Waits & Timing
      Handle loading spinners, toast notifications, modals, infinite scroll, lazy loading, and async content with the right wait strategy.

      Mobile Patterns
      Android & iOS specific patterns: keyboard handling, OTP fields, native pickers, gestures, deep links, permission dialogs, and spannable text.

## Advanced Testing

Guides for complex testing scenarios involving authentication, API validation, and workarounds for natural language limitations.

      Authentication & Sessions
      Test login flows, TOTP/MFA with native smart variables, session persistence, logout, and timeout handling. Includes reusable login modules.

      API & Network
      Make API calls via curl, validate responses with JSON variables, assert network logs, and combine API + UI testing in a single flow.

      JS Workarounds
      When natural language isn't enough: JS snippets for date pickers, CSS validation, string manipulation, table cells, and more.

      Failure Conditions
      Configure how assertion failures behave: fail immediately, fail and continue, or warn and continue. Set defaults at organization or step level.

## Variables and Parameters

Manage dynamic data, secrets, and parameterized test inputs.

      Variables
      Create and use local, global, and environment variables. Store values from the application and reuse them across test steps and executions.

      Secrets
      Securely stored sensitive data (e.g., passwords, API tokens) encrypted via HashiCorp Vault. Never exposed in logs or generated code.

      Smart Variables
      Predefined dynamic variables for dates, randomization, device info, and system details. Use `{{smart.current_date}}`, `{{smart.random_email}}`, and more.

      Parameters
      Values passed into test cases at runtime to customize test execution for different configurations or environments.

      Datasets
      Collections of test data used for data-driven testing, allowing you to run the same test with different inputs.

## Reference

      Command Types
      Complete reference of all supported KaneAI commands: navigation, clicks, typing, waits, tab management, scrolling, assertions, conditional logic, and queries.

      Code Generation
      Generate automation scripts from KaneAI tests in multiple frameworks and languages including Selenium (Python), Appium (Python), and more.

      Error Handling
      Understand error messages in KaneAI, what they mean, and how to resolve common issues during test authoring and execution.

## Quick Start Guide

New to KaneAI? Here's the recommended reading order:

1. **[Author Your First Desktop Browser Test](/support/docs/author-your-first-desktop-browser-test/)**: Get started by authoring your first desktop browser test
2. **[Author Your First Mobile Browser Test](/support/docs/author-your-first-mobile-browser-test/)**: Learn to author mobile browser tests with device selection and configuration
3. **[Author Your First Mobile App Test](/support/docs/author-your-first-mobile-app-test/)**: Build your first mobile app test with app upload and device configuration
4. **[Element Interactions](/support/docs/kaneai-kb-finding-and-interacting-with-elements/)**: Learn how to describe elements so KaneAI can find them reliably
5. **[Forms & Inputs](/support/docs/kaneai-kb-forms-inputs-and-data-entry/)**: Handle every type of form element
6. **[Assertions Guide](/support/docs/kaneai-kb-assertions-and-validation/)**: Verify your app works correctly
7. **[Waits & Timing](/support/docs/kaneai-kb-dynamic-content-waits-and-page-state/)**: Handle async behavior and timing
8. **[JS Workarounds](/support/docs/kaneai-kb-js-snippets-and-workarounds/)**: When natural language isn't enough
9. **[Scroll Until Element for Mobile Authoring](/support/docs/kaneai-scroll-until-mobile/)**: Scroll until a target element is visible when authoring mobile tests
10. **[Create Pull Requests from KaneAI Test Cases](/support/docs/kaneai-create-pr/)**: Turn KaneAI test cases into pull requests in your repository
