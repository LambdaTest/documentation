---
id: kane-ai-modules
title: How to Use Modules With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Modules
description: Create, reuse, edit, and version modular test steps in KaneAI to share common flows across test cases and platforms.
keywords:
  - kaneai modules
  - reusable test steps
  - test automation modules
  - module management
  - platform-specific modules
  - module versioning
  - version history
  - module enhancements
  - compare module versions
  - revert module version
  - testmu ai automation
  - testmu ai kaneai
  - bulk update
  - module version
  - test case management
url: https://www.testmuai.com/support/docs/kane-ai-modules/
site_name: TestMu AI
slug: kane-ai-modules/
canonical: https://www.testmuai.com/support/docs/kane-ai-modules/
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
          "name": "KaneAI Modules",
          "item": `${BRAND_URL}/support/docs/kane-ai-modules/`
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
      "@id": "https://www.testmuai.com/support/docs/kane-ai-modules/"
    },
    "headline": "How to Use Modules With KaneAI",
    "description": "Create, reuse, edit, and version modular test steps in KaneAI to share common flows across test cases and platforms.",
    "url": "https://www.testmuai.com/support/docs/kane-ai-modules/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "kaneai modules",
      "reusable test steps",
      "test automation modules",
      "module management",
      "platform-specific modules",
      "module versioning",
      "version history",
      "module enhancements",
      "compare module versions",
      "revert module version",
      "testmu ai automation",
      "testmu ai kaneai",
      "bulk update",
      "module version",
      "test case management"
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
    "dateModified": "2026-09-09T20:20:47+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Create a Module",
      "description": "You create modules by extracting test steps from an active KaneAI session.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Author Test Steps",
          "text": "Begin by authoring your test in KaneAI and executing the steps that you want to turn into a module.",
          "url": "https://www.testmuai.com/support/docs/kane-ai-modules/#step-1-author-test-steps"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Select Test Steps",
          "text": "Pause the session. Multi-select is available only while the session is Paused. Tick the checkbox on each step you want to include in the module — for example, the steps that handle login. A select-all checkbox sits in the panel header if you want every step. A selection toolbar appears showing how many steps are selected, with Create Module and Delete actions. The selection must be contiguous — adjacent steps with no gaps — and must not already sit inside a conditional block, While loop, module, or generative instruction. If it does not qualify, an explanation tells you why. Checkboxes do not appear in Authoring Steps, Running, or Setting up, and any selection is cleared when you leave Paused. Selecting steps is independent of the cursor — ticking a checkbox does not move it.",
          "url": "https://www.testmuai.com/support/docs/kane-ai-modules/#step-2-select-test-steps"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Define Module Properties",
          "text": "Click Create Module. Enter the module details: Name: A descriptive name (e.g., [Web] Login Flow) Description: What the module does and when to use it Tags: Keywords for easier discovery Click Create Module to save. The selected steps are now saved as a reusable module with an initial version.",
          "url": "https://www.testmuai.com/support/docs/kane-ai-modules/#step-3-define-module-properties"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Use a Module in a Test",
      "description": "Once a module exists, you can import it into any KaneAI test.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Open a Test",
          "text": "Create a new test or open an existing one in the KaneAI web agent.",
          "url": "https://www.testmuai.com/support/docs/kane-ai-modules/#step-1-open-a-test"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Import the Module",
          "text": "Type a slash (/) to invoke the command menu and select Add Module. Browse the list of available modules and select the one you need. Modules that contain If-Else blocks or While Loops can be imported only into KaneAI test cases, not into manual test cases in Test Manager. This applies to the Classic experience. Modules that use variables, parameters, or secrets can be imported into both. See Importing Modules into Test Cases.",
          "url": "https://www.testmuai.com/support/docs/kane-ai-modules/#step-2-import-the-module"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Execute",
          "text": "Click Add in Queue to execute the module's test steps. The steps run automatically as part of the test. Any step that has not run yet carries the Queued status until it does — see Step Statuses.",
          "url": "https://www.testmuai.com/support/docs/kane-ai-modules/#step-3-execute"
        }
      ]
    }
  ]) }}
/>

# How to Use Modules With KaneAI
***

Modules in KaneAI let you group a sequence of test steps into a single reusable unit. Instead of re-authoring the same steps in every test case, you create a module once and import it wherever it is needed. This reduces duplication, improves consistency, and makes maintenance easier. When a workflow changes, you update the module and propagate the change across test cases.

Modules support **variables**, **parameters**, and **secrets**, so you can pass dynamic data into each module execution rather than hard-coding values.

## Module Listing Page
***

The **Modules** section shows all available modules in your project. From here you can:

- Browse existing modules and see how many test cases each module is linked to
- Click on any module to view its details, version history, and linked test cases
- Create a new module

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image2.png').default} alt="modules-listing" className="doc_img img_center"/>

---

## Create a Module
***

You create modules by extracting test steps from an active KaneAI session.

### Step 1: Author Test Steps
***

Begin by authoring your test in KaneAI and executing the steps that you want to turn into a module.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/1.png').default} alt="author-test-steps" className="doc_img"/>

### Step 2: Select Test Steps
***

1. Pause the session. Multi-select is available only while the session is **Paused**.
2. Tick the checkbox on each step you want to include in the module — for example, the steps that handle login. A select-all checkbox sits in the panel header if you want every step.
3. A selection toolbar appears showing how many steps are selected, with **Create Module** and **Delete** actions.

The selection must be **contiguous** — adjacent steps with no gaps — and must not already sit inside a conditional block, While loop, module, or generative instruction. If it does not qualify, an explanation tells you why.

Checkboxes do not appear in Authoring Steps, Running, or Setting up, and any selection is cleared when you leave Paused. Selecting steps is independent of the cursor — ticking a checkbox does not move it.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/2.png').default} alt="select-test-steps" className="doc_img"/>

### Step 3: Define Module Properties
***

1. Click **Create Module**.
2. Enter the module details:
   - **Name**: A descriptive name (e.g., `[Web] Login Flow`)
   - **Description**: What the module does and when to use it
   - **Tags**: Keywords for easier discovery
3. Click **Create Module** to save.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/3.png').default} alt="create-module-dialog" className="doc_img"/>

The selected steps are now saved as a reusable module with an initial version.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/4.png').default} alt="module-created" className="doc_img"/>

---

## Use a Module
***

Once a module exists, you can import it into any KaneAI test.

### Step 1: Open a Test
***

Create a new test or open an existing one in the KaneAI web agent.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/5.png').default} alt="new-test" className="doc_img"/>

### Step 2: Import the Module
***

Type a **slash (/)** to invoke the command menu and select **Add Module**.

Browse the list of available modules and select the one you need.

:::note
Modules that contain If-Else blocks or While Loops can be imported only into KaneAI test cases, not into manual test cases in Test Manager. This applies to the Classic experience. Modules that use variables, parameters, or secrets can be imported into both. See [Importing Modules into Test Cases](/support/docs/create-modules/#importing-modules-into-test-cases).
:::

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/6.png').default} alt="import-module" className="doc_img"/>

### Step 3: Execute
***

Click **Add in Queue** to execute the module's test steps. The steps run automatically as part of the test. Any step that has not run yet carries the **Queued** status until it does — see [Step Statuses](/support/docs/kaneai-authoring-session/#step-statuses).

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/7.png').default} alt="execute-module" className="doc_img"/>

---

## Include a Network Assertion
***

A [Network Logs Assertion](/support/docs/kaneai-kb-api-testing-and-network-assertions/#network-logs-assertions) can be included in a module, so a network-layer check you author once is reused across every test that imports the module instead of being re-authored in each one.

:::note
Available on **Desktop Web**, **Mobile Web**, and **Mobile App** sessions in the Classic experience. On Mobile Web and Mobile App, enable **Capture Network Logs** before starting the session (see the Mobile Sessions steps below).
:::

### Select the Assertion
***

Author the assertion as usual, then click **Pause Test** and tick its checkbox along with the other steps you want in the module. A network assertion travels as a single step: every **Verify if** condition it carries is included, and the conditions cannot be split across modules.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/network-assertion-select.webp').default} alt="A Network Assertion step selected along with the other test steps in the module selection view" className="doc_img"/>

Click **Create Module** and the assertion appears in the step list of the creation drawer with its conditions, alongside the rest of the selected steps.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/network-assertion-create-module.webp').default} alt="The Create a module drawer listing a Network Assertion step with its Verify if condition" className="doc_img"/>

Once saved, the module carries the assertion as one of its steps.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/network-assertion-in-module.webp').default} alt="A saved module containing a Network Assertion step with its conditions" className="doc_img"/>

### Include the Triggering Step
***

An assertion can only check a request that the test actually makes. Include the step that triggers the network call in the same module as the assertion that checks it.

If you create a module that contains the assertion but not its triggering step, KaneAI warns you at creation. The module is still valid, but it will check whatever traffic the importing test happens to produce, so it is not self-sufficient.

### Mobile Sessions
***

The same flow works in Mobile Web and Mobile App sessions. Enable **Capture Network Logs** under **Advanced Settings** > **Session Settings** before starting the session, author the assertion, then select it into a module exactly as you would on desktop.

The example below is a module built in a mobile browser session, carrying an assertion with two conditions combined with **AND**: one on the response status and one on the request method.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/network-assertion-mobile.webp').default} alt="A saved module in a mobile browser session containing a Network Assertion with two conditions combined with AND" className="doc_img"/>

### Keep the Module Platform-Specific
***

Modules are platform-specific, and a module containing a network assertion is no exception. Create a separate module for each platform you test, and name it accordingly, for example `[Web] Checkout API Check` and `[Android-App] Checkout API Check`. See [Create Platform-Specific Modules](#create-platform-specific-modules).

A network assertion can only be added from a KaneAI session, so it cannot be added to a simple module created directly on the Modules page. Where the assertion cannot apply, KaneAI blocks the action and states the reason inline rather than adding a step that would check nothing.

---

## How Modules Behave in a Session

A module is a **labelled group of ordinary steps**, not a single execution unit. This is what separates it from conditional blocks, While loops, and generative instructions, which all run as a whole.

- **Steps inside a module run individually.** Run This Step, Run From Here, and Run Till Here all work on them, and a run range may start or end inside a module.
- **The cursor moves freely inside a module.** You can place it between any two internal steps and insert a new step there.
- **Editing inside a module updates the module.** Adding, editing, or reordering steps creates a new module version, following normal [versioning](#module-versioning) behavior.
- **A module cannot contain another module.**

For how this compares with the other block types, see [Blocks run as a unit](/support/docs/kaneai-authoring-session/#blocks-run-as-a-unit).

---

## Edit a Module
***

Click on an existing module from the Module listing page to modify its steps or properties.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image6.png').default} alt="edit-module" className="doc_img img_center"/>

Editing a step opens it inline, where you can change the test step and its expected outcome. **Update** applies the change to the step, and the module header then shows an **Unsaved changes** label. Click **Save Changes** to commit them, or **Discard** to drop them.

When you save changes to a module, a new version is created automatically. See [Module Versioning](#module-versioning) for details on how version history works.

### Editing Restrictions
***

:::note
The editing, reordering, and deletion restrictions described in this section and in [Deleting Steps Inside a Module](#deleting-steps-inside-a-module) apply to the Classic experience.
:::

Some steps carry a **Read-Only** label on the module's step listing. Editing, deleting, and reordering are all disabled for:

- Steps that create or store a **variable**
- **If-Else** blocks
- **While Loop** blocks

Hovering the edit icon on one of these steps shows *Editing Kane instructions is not allowed*.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/editing-restrictions.png').default} alt="A While Loop step marked Read-Only with the edit action disabled" width="1600" height="831" className="doc_img"/>

These steps are part of a larger flow. A variable step feeds values to later steps, and a control flow block carries branches and nested steps that must change together. To modify them, open the test case the module was authored from, make the change there, and save. The module receives a new version automatically. All other steps can be edited, deleted, and reordered as usual, including steps that only use a variable, parameter, or secret. See Edit Module Steps That Use References.

Modules authored in a KaneAI session also show an **Author Module to Update Test Cases** banner on the Linked Test Cases tab, noting that linked test cases are updated by authoring and validating the module in a KaneAI session.

---

## Delete a Module
***

You can delete modules that are no longer needed from the module listing page.

1. Navigate to the **Modules** section.
2. Locate the module you want to delete.
3. Click the meatball menu (**...**) icon on the module card.
4. Select **Delete**.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/delete-module.png').default} alt="delete-module" className="doc_img img_center"/>

:::warning Important
Only modules that are **not linked to any test cases** can be deleted. If a module is currently used in one or more test cases, the delete option will be disabled. You must first remove the module from all linked test cases before deleting it.
:::

### Deleting Steps Inside a Module
***

The delete action is disabled for the same steps. Hovering it shows *Deleting Kane instructions is not allowed*. These steps can be deleted only while authoring, in the KaneAI test case the module was authored from. All other steps can be deleted directly.

<img loading="lazy" src={require('../assets/images/kane-ai/features/modules/delete-restrictions.png').default} alt="The delete action disabled on a While Loop step inside a module" width="1600" height="827" className="doc_img"/>

---

## Module Versioning
***

Every time you modify a module, KaneAI automatically creates a new version. This version history lets you track what changed, compare any two versions side by side, and revert to a previous version when needed. Version control is especially valuable when multiple team members work with the same modules across test cases.

### How Versioning Works
***

When you edit an existing module (for example, by adding, removing, or modifying a test step), KaneAI automatically increments the version number (for example, from 1.1 to 1.2). You do not need to create versions manually.

In the Classic experience, some steps are locked on the Modules page and must be changed from the test case the module was authored from (see [Editing Restrictions](#editing-restrictions)). Editing them there still increments the module version in the same way.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image8.png').default} alt="Module version number increments automatically after an edit" className="doc_img img_center"/>

After a new version is created, test cases that use the module can either:

- **Accept the new version:** update the test case to use the latest module version.
- **Continue using the current version:** keep the existing version without changes.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image9.png').default} alt="Choose to accept the new module version or keep the current one" className="doc_img img_center"/>

:::tip
To update a module version across many test cases at once, use the [Bulk Module Update](#bulk-module-update) feature.
:::

### Viewing Version History
***

Open any module from the **Modules** listing page to see its complete details, including:

- Description and tags
- Full version history with timestamps

The version history shows every change made to the module, who made it, and when.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image2.png').default} alt="Module details with full version history and timestamps" className="doc_img img_center"/>

### Comparing Versions
***

You can compare any two versions of a module to see exactly what changed between them.

1. Open the module and navigate to the **Version History** section.
2. Select the two versions you want to compare.
3. Review the differences: added, removed, or modified steps are highlighted.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image3.png').default} alt="Compare two module versions with highlighted differences" className="doc_img img_center"/>

### Reverting to a Previous Version
***

If a module update introduces problems, you can revert to any earlier version.

1. Open the module and go to **Version History**.
2. Select the version you want to restore.
3. Confirm the revert.

Reverting creates a new version (it does not delete the intermediate versions), so you maintain a complete audit trail.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/revert-version.png').default} alt="Revert a module to a previous version from Version History" className="doc_img img_center"/>

### Linked Test Cases
***

The module detail page includes a **Linked Test Cases** tab that lists every test case using the module, grouped by module version, with key metadata. This helps you understand the impact of a version change before making updates. From this tab you can navigate directly to individual test case summary pages.

<img loading="lazy" src={require('../assets/images/kane-ai/features/bulk-module-update/linked-test-cases.png').default} alt="Linked Test Cases tab grouped by module version" className="doc_img img_center"/>

---

## Bulk Module Update
***

Maintaining many test cases that share the same module can become slow and error-prone when a module evolves. Each time a module is updated, you would otherwise have to open and edit every affected test case and bump the module version one by one.

Bulk Module Update solves this by allowing you to:

- Update a validated module version across multiple eligible KaneAI test cases in one action
- Clearly see which test cases are eligible or ineligible for the update, and why
- Safely roll the new module version into your existing tests while keeping execution verification explicit and controlled

:::info Note
Bulk Module Update is currently supported only for **KaneAI test cases**. Support for non-KaneAI test cases is coming soon.
:::

:::warning Limited Availability
This feature is currently being rolled out gradually and may not be available to all users. If you don't see this feature in your account, it will be enabled for you soon.
:::

### Access Bulk Module Update
***

You can start a bulk module update from two places.

#### From the Module Detail Page

1. Navigate to the module whose version you want to bulk-update.
2. Click the **Update Test Cases** button.
3. If the module version is not yet authored or validated, or there are no eligible test cases, this button is disabled.

<img loading="lazy" src={require('../assets/images/kane-ai/features/bulk-module-update/module-detail-cta.png').default} alt="Update Test Cases button on the module detail page" className="doc_img img_center"/>

#### From the Test Case Summary Page

1. Open a test case that uses the module version you want to update.
2. If there is a newer version of the same module and other test cases still use the older version, you see an **Update Module for all Linked Test Cases** button.
3. Click this button to open the bulk update flow, pre-filtered for that module and version.

<img loading="lazy" src={require('../assets/images/kane-ai/features/bulk-module-update/test-case-summary-cta.png').default} alt="Update Module for all Linked Test Cases button on the test case summary" className="doc_img img_center"/>

### Module Validation Check
***

Before the bulk update flow starts, KaneAI checks whether the selected module version is authored and validated and whether there are eligible test cases to update.

#### When Update Is Disabled

The **Update Test Cases** button is disabled if:

- The module version is **not authored or validated** yet
- There are **no eligible test cases** (for example, all linked test cases are faulty, unverified, or non-KaneAI)

You will see a message such as:

> "This module version is not authored yet. Author it in a test to enable bulk update."

**To resolve:** Use the module in a test case and complete its authoring and validation, then ensure eligible KaneAI test cases are available.

### Select Test Cases
***

After starting the flow, you see a list of all test cases linked to the target module version.

#### Ineligible Test Cases

| Case | Why it cannot be updated |
|------|--------------------------|
| **Faulty test cases** | Test cases with **Faulty** status cannot be updated |
| **Non-KaneAI test cases** | Bulk update supports only KaneAI test cases currently |
| **Unverified test cases** | Test cases with **Unverified** status cannot be updated |

Ineligible test cases are greyed out, disabled for selection, and annotated with the reason.

Select the eligible test cases you want to update and click **Next** to proceed.

<img loading="lazy" src={require('../assets/images/kane-ai/features/bulk-module-update/test-case-selection.png').default} alt="Select eligible test cases for the bulk module update" className="doc_img img_center"/>

### Review and Confirm
***

Before running the bulk update, you see a final summary screen showing:

- The **target module version** (the version you are updating to)
- The **count of selected eligible test cases**
- Optionally, a **version movement summary** (for example, from v1 to v2)

:::info Coming Soon
- **Seamless Module Validation**: Module validation will be performed automatically in future releases.
- **Bulk Code-Gen Validation**: Bulk Code-Gen validation will be available in an upcoming update.
:::

Click **Confirm Update** to trigger the bulk job and apply the new module version to all selected test cases.

<img loading="lazy" src={require('../assets/images/kane-ai/features/bulk-module-update/summary-screen.png').default} alt="Bulk update summary showing target version and selected test cases" className="doc_img img_center"/>

After you trigger the update, you see a success banner along with a toast message.

<img loading="lazy" src={require('../assets/images/kane-ai/features/bulk-module-update/toast-notification.png').default} alt="Success banner and toast after triggering the bulk update" className="doc_img img_center"/>

### Post-Update Changes
***

Once the bulk update is completed:

#### Bulk Job Execution

- A single bulk job is created
- All selected eligible test cases have their module version updated

#### Changes on Each Updated Test Case

For each updated test case:

| Change | Description |
|--------|-------------|
| Module version | Updated to the new version |
| Test case version | Bumped with commit message: "Module updated from vX to vY (Bulk-Update)" |
| Code-Gen | New Code-Gen for the updated module is automatically used for future runs |
| Code-Gen status | Set to **Unvalidated** |
| Execution verified | Set to **false** until the new Code-Gen is validated |

<img loading="lazy" src={require('../assets/images/kane-ai/features/bulk-module-update/code-gen-section.png').default} alt="Updated module version and Code-Gen status on a test case" className="doc_img img_center"/>

To see every test case still linked to each module version after an update, use the [Linked Test Cases](#linked-test-cases) tab.

### Bulk Update Limitations
***

The following limitations currently apply to Bulk Module Update:

1. **No module validation in the bulk flow**
   - The bulk update flow **does not perform module validation**.
   - You can only bulk-update to module versions that have already been authored and validated in a KaneAI session.

2. **No bulk Code-Gen validation**
   - Bulk validation of Code-Gen across test cases is **not supported yet**.
   - `code_gen_status` remains Unvalidated after the bulk module update until the Code-Gen is successfully executed through a Test Run.

### Bulk Update Troubleshooting
***

#### "Update Test Cases" Button Is Disabled

**Symptoms:**
- The **Update Test Cases** button on the module detail page is disabled
- You see a message: "This module version is not authored yet. Author it in a test to enable bulk update."

**Solutions:**
1. Confirm that the module version has been authored and validated at least once in a test case.
2. Ensure there are eligible KaneAI test cases linked to this module version (non-faulty, non-unverified).
3. Refresh the module detail page and try again.

#### Some Test Cases Are Greyed Out in the Selection List

**Symptoms:**
- Certain test cases appear greyed out and cannot be selected
- They display reasons such as "Cannot update - test case is faulty"

**Solutions:**
1. For **faulty** test cases: fix the underlying issues causing the faulty status, then re-attempt.
2. For **non-KaneAI** test cases: bulk update is not supported; update them manually if needed.
3. For **unverified** test cases: complete the verification steps, then revisit the bulk update flow.

#### Tests Still Show "Code-Gen Unvalidated" After Update

**Symptoms:**
- After the bulk update, test cases show: "Code-Gen updated after module update – will be validated on next execution."
- Code-Gen status remains **Unvalidated**

**Solutions:**
1. Run or re-run the affected test cases following your standard validation workflow.
2. Once Code-Gen is validated, the test case's Code-Gen status is updated and execution verified is set to **true**.

---

## Best Practices
***

Follow these practices for reliable tests:

### Create Platform-Specific Modules
***

Modules in KaneAI are **platform-specific**. Each platform has distinct interaction patterns, element selectors, and navigation flows, which means the same user action (e.g., tapping vs. clicking, scrolling behavior, keyboard input) behaves differently across platforms. A module authored on one platform may produce unexpected results when used on another.

**Create separate module copies for each target platform.** For example, if you have a login workflow that needs to run across platforms, create a distinct module for each:

| Module Name | Platform |
|---|---|
| `[Web] Login Flow` | Desktop Web |
| `[Android-App] Login Flow` | Android App |
| `[Android-Browser] Login Flow` | Android Browser |
| `[iOS-App] Login Flow` | iOS App |
| `[iOS-Browser] Login Flow` | iOS Browser |

### Use Prefixes and Tags Together
***

Adopt a consistent **name prefix** and **tag** strategy to make platform context immediately clear and modules easy to filter.

**Name prefixes**: Add a platform prefix at the start of every module name:

- **`[Web]`**: Desktop Web modules
- **`[Android-App]`**: Android native app modules
- **`[Android-Browser]`**: Android browser modules
- **`[iOS-App]`**: iOS native app modules
- **`[iOS-Browser]`**: iOS browser modules

**Tags**: Add platform tags to each module so you can filter the module listing by platform:

- `desktop-web`, `android-app`, `android-browser`, `ios-app`, `ios-browser`

Using both prefixes and tags together gives you the best of both worlds: prefixes make the platform obvious at a glance when importing a module into a test, while tags let you filter the module listing page to show only modules for a specific platform.

You can extend this convention for other distinctions:

- **`[Web][Staging]`**: Environment-specific modules
- **`[Android-App][Auth]`**: Feature-area grouping
- Tags like `login`, `checkout`, `onboarding`: Workflow-based categorization

### Keep Modules Focused
***

Each module should represent a **single, cohesive workflow** (e.g., login, checkout, form submission). Avoid creating overly large modules that combine unrelated steps. They become harder to maintain and less reusable.

### Use Variables and Parameters
***

Instead of hard-coding values like usernames, URLs, or test data into module steps, use **variables** and **parameters**. This lets you reuse the same module across different test scenarios by passing in different data at execution time. You can also insert and create these references while editing a module on the Modules page. See Variables, Parameters, and Secrets in Manual Test Cases and Modules.

### Write Clear Descriptions
***

Add a meaningful description to every module so other team members understand what it does without reading every step. Include the target platform, expected preconditions, and what state the application will be in after the module runs.

---

## Next Steps
***

Continue with these guides:

- [KaneAI Using Variables](/support/docs/kane-ai-using-variables/)
- [datasets](/support/docs/kane-ai-using-datasets/)
- [KaneAI Conditional Logic](/support/docs/kaneai-conditional-logic/)
- [KaneAI While Loops](/support/docs/kaneai-while-loops/)
- [KaneAI Authoring Session](/support/docs/kaneai-authoring-session/)

---

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/modules/output.mp4').default} type="video/mp4" />
</video>

---
