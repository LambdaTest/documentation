---
id: test-manager-variables-parameters-secrets
title: Use Variables, Parameters, and Secrets in Manual Test Cases and Modules
hide_title: false
sidebar_label: Variables, Parameters, and Secrets
description: Reference KaneAI variables, parameters, and secrets in manual test case steps and modules, link datasets to manual test cases, and run one test instance per data row in TestMu AI Test Manager.
keywords:
  - test manager variables
  - manual test case parameters
  - secrets in manual test cases
  - module variables
  - parameterized manual tests
  - datasets for manual test cases
  - environment variables
url: https://www.testmuai.com/support/docs/test-manager-variables-parameters-secrets/
site_name: TestMu AI
slug: test-manager-variables-parameters-secrets/
canonical: https://www.testmuai.com/support/docs/test-manager-variables-parameters-secrets/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Variables, Parameters, and Secrets",
          "item": `${BRAND_URL}/support/docs/test-manager-variables-parameters-secrets/`
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
      "@id": "https://www.testmuai.com/support/docs/test-manager-variables-parameters-secrets/"
    },
    "headline": "Use Variables, Parameters, and Secrets in Manual Test Cases and Modules",
    "description": "Reference KaneAI variables, parameters, and secrets in manual test case steps and modules, link datasets to manual test cases, and run one test instance per data row in TestMu AI Test Manager.",
    "url": "https://www.testmuai.com/support/docs/test-manager-variables-parameters-secrets/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Test Manager",
    "keywords": [
      "test manager variables",
      "manual test case parameters",
      "secrets in manual test cases",
      "module variables"
    ],
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
    },
    "dateModified": "2026-10-13T12:00:00+05:30"
  }) }}
/>

The variables, parameters, and secrets you create in KaneAI can also be used in manual test cases and in modules on the Modules page. Instead of typing a URL, a username, or a password into a step, you reference the value by name. Change the value once, and every test case and module that uses it picks up the change.

With parameters and a dataset, one manual test case can cover several data variations. For example, a single checkout test can run once each for the Basic, Premium, and Enterprise plans instead of being copied three times.

:::note
**Available on request.** Please reach out to Support to enable variables, parameters, and secrets in manual test cases and modules for your organization. Adding a module that contains references to a manual test case works for every organization.
:::

## What You Can Reference

All values are managed in KaneAI under **Variables**. A reference is written with the value's name inside the step text.

| Type | Written as | During a manual test run |
|---|---|---|
| Parameter | `${plan_type}` | Uses the value from the dataset row of the test instance |
| Global variable | `{{base_url}}` or `{{global.base_url}}` | Uses the variable's value at the time the test instance was created |
| Organization secret | `{{secrets.org.admin_password}}` | Masked. The value is never shown |
| User secret | `{{secrets.user.sandbox_token}}` | Masked. The value is never shown |
| Environment variable | `{{environment.api_host}}` | Not filled in. Used only when KaneAI runs the test |
| Smart variable | `{{smart.random_email}}` | Not filled in. Used only when KaneAI runs the test |
| TOTP variable | `{{totp.okta_mfa}}` | Not filled in. Used only when KaneAI runs the test |

To learn how each type works, see [Variables](/support/docs/kane-ai-using-variables/), [Secrets](/support/docs/kane-ai-secrets/), [Smart Variables](/support/docs/kane-ai-smart-variables/), [TOTP](/support/docs/kaneai-totp/), [Parameters](/support/docs/kane-ai-using-parameters/), and [Datasets](/support/docs/kane-ai-using-datasets/).

## Insert a Reference in a Step

You can insert references in:

- The **Test Step** and **Expected Outcome** of a module on the Modules page.
- The **Step Description** and **Expected Outcome** of a manual test case.
- The scenario steps of a BDD test case.
- The steps or objective you write before handing a test to KaneAI: Quick Author, **Automate with KaneAI** on a manual test case, **Create and Automate** when [generating test cases with AI](/support/docs/generate-test-cases-with-ai/), and Bulk Automate.

To insert a reference:

1. Place the cursor in the step and type `{{` to see variables and secrets, or `${` to see parameters.
2. Keep typing to filter the list by name. To narrow the list to one type, type a prefix such as `{{global.`, `{{secrets.org.`, `{{secrets.user.`, `{{environment.`, or `{{totp.`.
3. Select a value. The full reference replaces what you typed.

<!-- screenshot: suggestion list shown after typing double curly braces in a manual test case step
<img loading="lazy" src={require('../assets/images/test-manager/variables/step-suggestions.png').default} alt="Suggestion list of variables and secrets in a manual test case step" className="doc_img"/>
-->

A few things to keep in mind:

- References you paste or type in full are recognized the same way as the ones you pick from the list.
- A reference behaves as a single unit. Deleting it removes the whole reference.
- References are not recognized in test case titles, descriptions, or preconditions, or inside inline code. There, the characters stay as ordinary text.
- The secrets list shows your organization's secrets and your own user secrets. Other users' secrets are never listed, and secret values are never shown.

### Create a Missing Value

If the value you need doesn't exist yet, you can create it from the same list without leaving the step:

| Type | What you provide |
|---|---|
| Parameter | A name and a default value |
| Variable | A name, a value, and a scope: **Global**, or one environment to create an environment variable |
| Secret | A name, a value, a scope (**Organization** or **User**), and an optional description |

The new value is saved under KaneAI **Variables**, and its reference is inserted where you were typing.

- Names can contain letters, digits, and underscores, must start with a letter or underscore, and can be up to 64 characters long.
- Only organization admins can create organization secrets. Other members can create user secrets.
- On the free plan, you can pick existing parameters and secrets but cannot create new ones.
- Smart variables, TOTP variables, and JSON variables are created from the [Variables page](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/variables) only.

## Choose an Environment for Environment Variables

Environment variables can have a different value in each environment, such as Dev, Stage, or Production. So before you can add one to a module or a manual test case, choose the environment it belongs to. After you choose an environment, only that environment's variables are suggested.

If the chosen environment is missing environment variables that the module or test case already uses, you see a warning that names the missing variables. You can create them in that environment from the same page. The same warning appears when you add a module to a test case whose environment does not have the module's environment variables.

<!-- screenshot: warning listing environment variables missing from the chosen environment, with the option to create them
<img loading="lazy" src={require('../assets/images/test-manager/variables/missing-environment-variables.png').default} alt="Warning listing environment variables that are missing from the selected environment" className="doc_img"/>
-->

To choose an environment in a KaneAI authoring session, see [Select an Environment for an Authoring Session](/support/docs/kane-ai-using-variables/#select-an-environment-for-an-authoring-session).

## Edit Module Steps That Use References

On the Modules page, you can edit, delete, and reorder module steps that only use references. Previously, any step containing a reference was locked.

| Step | Edit, delete, or reorder |
|---|---|
| A plain instruction, such as *Click the Login button* | Yes |
| An instruction that only uses references, such as *Enter the admin password secret in the Password field* | Yes |
| A step that creates or stores a variable | No. Open the module in KaneAI to change it |
| API, JavaScript, database, If-Else, While Loop, and other advanced steps | No |

When you save your changes:

- A new module version is created. Manual test cases use the latest version.
- KaneAI test cases that use the module stay on their current version until you update them. The changed steps must be authored in KaneAI before KaneAI can run the new version.
- If a step references a value that doesn't exist, you're warned before saving. Tests that use the module fail validation until the value is created.

For more on module versions, see [Create Modules](/support/docs/create-modules/).

## Add a Module With References to a Manual Test Case

Modules that contain variables, parameters, or secrets can be added to manual test cases. The references in the module are kept as they are:

- Parameters used by the module are added to the test case, along with a column for each in the test case's dataset.
- Global variables and parameters get their values when a test run instance is created.
- Secrets stay masked during execution.
- Environment, smart, and TOTP variables are kept, but are filled in only when KaneAI runs the test.

Modules that contain If-Else or While Loop blocks still cannot be added to manual test cases.

## See What a Test Case Uses

The summary of a manual test case lists the values its steps and modules use:

- **Parameters Used**: each parameter, its default value, and the steps that use it.
- **Variables and Secrets Used**: each variable and secret, and the steps that use it. Secret values are never shown. Environment, smart, and TOTP variables are marked as available only in KaneAI runs.
- References that come from added modules, grouped by module.
- The linked dataset, with options to change it, view it, or create a new one.

<!-- screenshot: manual test case summary showing Parameters Used, Variables and Secrets Used, and the linked dataset
<img loading="lazy" src={require('../assets/images/test-manager/variables/test-case-summary.png').default} alt="Manual test case summary listing the parameters, variables, and secrets it uses and its linked dataset" className="doc_img"/>
-->

The test case always shows the latest values. When you [compare versions](/support/docs/test-case-versioning/) of a test case, steps show the references only, without values.

## Use Datasets With Manual Test Cases

Manual test cases use datasets the same way KaneAI test cases do.

- **Default dataset**: when you save a test case with its first parameter, a default dataset is created and linked. It has one row holding each parameter's default value and is kept up to date for you.
- **Custom dataset**: create one from the test case to cover more variations. It starts with a column for every parameter the test case uses, including parameters from modules, and a first row of default values. Add a row for each variation, save, and link it to the test case.
- **New parameters**: when you add a parameter to a test case, a column is added to its linked dataset, and every existing row gets the parameter's default value.

To edit datasets, see [Datasets](/support/docs/kane-ai-using-datasets/).

## Run Parameterized Manual Test Cases

When you add a manual test case that uses parameters to a manual (non-KaneAI) test run, you choose a dataset for it, starting with its linked dataset. The run creates **one test instance per dataset row**. Each instance is labelled with its row number and the value in the dataset's first column, and can be assigned on its own. Test cases without parameters get a single instance.

Values are fixed when an instance is created. Later changes to the dataset, a parameter's default value, or a global variable do not change existing instances, while the test case itself keeps showing the latest values.

When a tester opens an instance, its test data lists:

- Each parameter and global variable used, with the value for that instance.
- Each secret used, masked. Secret values cannot be revealed or copied.
- Environment, smart, and TOTP variables, marked as not filled in for manual runs.

The steps show the references as written. Testers find the values to use in the instance's test data.

<!-- screenshot: manual test run instance showing its dataset row and test data values
<img loading="lazy" src={require('../assets/images/test-manager/variables/instance-test-data.png').default} alt="Manual test run instance showing its dataset row and the values to use" className="doc_img"/>
-->

If you change the dataset for a test case that already has instances in the run, you're asked to confirm first. Confirming replaces its instances with one per row of the new dataset, and removes the results recorded on the old instances.

For more on test runs, see [Test Run Creation and Management](/support/docs/test-run-creation-and-management/).

## Limitations

- Modules with If-Else or While Loop blocks cannot be added to manual test cases.
- Steps in a test run instance show references, not values. The values are listed in the instance's test data.
- BDD test cases support references in scenario steps, but not datasets or one instance per data row.
- Environment, smart, and TOTP variables are not filled in during manual runs.
- Secret values cannot be revealed or copied during manual execution.
