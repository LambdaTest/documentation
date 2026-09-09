---
id: create-modules
title: Create Modules
hide_title: true
sidebar_label: Share Steps as Modules
description: Guide for creating & editing Modules in Test Manager through Modules page.
keywords:
  - module creation
  - test manager
  - test step management 
  - test case
  - test steps
url: https://www.testmuai.com/support/docs/create-modules/
site_name: TestMu AI
slug: create-modules/
canonical: https://www.testmuai.com/support/docs/create-modules/
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
          "name": "Create Modules",
          "item": `${BRAND_URL}/support/docs/create-modules/`
        }]
      })
    }}
></script>

# Modules - Creation and Management
***
Tired of recreating the same test steps for repetitive testing flows? With Modules in <BrandName /> Test Manager you can streamline your workflow by reusing pre-existing test steps across multiple test cases. This powerful feature enables you to encapsulate redundant testing flows into modular, reusable components, saving time and ensuring consistency across your projects.

## 1.1 Module Creation from existing Test Steps

To export test steps as a module, 
- Navigate to the Test Steps page of your desired Test Case. 
- Select the test steps you wish to include in the module and click the `Create a module` button.

:::note
 Only **sequential** steps can be clubbed to create a module.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/existing-modules-one.webp').default} alt="select-test-steps" className="doc_img"/>

- Clearly define your new module by entering a concise name and a detailed description. This will help you easily identify and understand its purpose later on.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/existing-modules-two.webp').default} alt="create-modules-from-test-steps" className="doc_img"/>

## 1.2 Create Module from Modules section

### Step 1: Go to Modules page

- Click on `Modules` button in the navbar to go to the [Modules listing page](https://www.testmuai.com/login/?redirectTo=https://test-manager.lambdatest.com/module).
- Click on `Create a Module`.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/modules-listing-page.png').default} alt="automation-dashboard" className="doc_img"/>

:::tip
 When you duplicate a module, its steps, description, and linked projects will also be duplicated.
:::

### Step 2: Create New Module

- Click on the `Create a Module` button. 
- Define your module and outline the steps you want to include.

Don't worry if you don't have all the details now; you can always edit or add them later.

:::note
 You must provide **Module name** & create at **least one test step** to be able to create a new module.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/modules_creation_page.png').default} alt="modules-listing-page" className="doc_img"/>

:::note
Only modules that are **not linked to any test cases** can be deleted. If a module is used in one or more test cases, the delete option is disabled. See [Delete a Module](/support/docs/kane-ai-modules/#delete-a-module).
:::

## 2. Update Module
Modules support duplication, editing and versioning; however, a new version is only triggered when specific fields are edited.
- Add a step by clicking on `Add Step` or update a step through edit icon. 
- In the inline editor, click `Update` to apply your change to the step. The header then shows **Unsaved changes**: click `Save Changes` on the top right to save them, or `Discard` to drop them.
:::note
 Only **Test Step** or **Expected Outcome** updation will create a new version of the module.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/modules_page.png').default} alt="module-page" className="doc_img"/>

:::note
In the Classic experience, for modules authored in KaneAI, steps that use a variable or parameter and If-Else or While Loop blocks cannot be edited, deleted, or reordered from the Modules page. Edit them from the KaneAI test case the module was authored from.
:::

## 3. Module Versions

### Revert to previous Version
- Click on `revert` to revert your module to that version. Reverting to a previous version will create a new version in your module's history, ensuring a clear audit trail of all changes.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/modules_version_history.png').default} alt="modules-version-history" className="doc_img"/>

### Compare Versions
Compare your version history side-by-side to easily identify differences and track changes between various iterations of your module.

- Click on `Compare` & select the version to compare with. 

You will be redirected to the Version Comparison page where you can track changes:

<img loading="lazy" src={require('../assets/images/mobile-app-testing/modules_version_comparision.png').default} alt="modules-version-comparision" className="doc_img"/>

:::note
Project linking is only added for manual tests in test cases. Hence, modules linked to a particular project are only available to be added in a manual test case. However, for KaneAI test cases, all modules in all projects will be available for selection. Modules that contain KaneAI instructions, such as variable steps, If-Else blocks, or While Loops, can be imported only into KaneAI test cases. In a manual test case the **Add Module** dialog blocks them from being added.
:::
