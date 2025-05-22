---
id: create-modules
title: Create Modules
hide_title: true
sidebar_label: Create Modules
description: Guide for creating & editing Modules in Test Manger through Modules page.
keywords:
  - module creation
  - test manager
  - test step management 
  - test case
  - test steps
url: https://www.lambdatest.com/support/docs/create-modules/
site_name: LambdaTest
slug: create-modules/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Create Modules",
          "item": "https://www.lambdatest.com/support/docs/create-modules/"
        }]
      })
    }}
></script>

# Modules - Creation and Management
***
Tired of recreating the same test steps for repetitive testing flows? With Modules in LambdaTest Test Manager you can streamline your workflow by reusing pre-existing test steps across multiple test cases. This powerful feature enables you to encapsulate redundant testing flows into modular, reusable components, saving time and ensuring consistency across your projects.

Modules can be managed from the Modules central repository. For this walkthrough we will see how modules are managed from [Modules page](https://test-manager.lambdatest.com/module).

## Create Module

### Step 1: Go to Modules page

You can create or duplicate modules directly from [Modules section](https://test-manager.lambdatest.com/module):

<img loading="lazy" src={require('../assets/images/mobile-app-testing/modules_listing_page.png').default} alt="automation-dashboard" className="doc_img"/>

:::tip
 When you duplicate a module, its steps, description, and linked projects will also be duplicated.
:::

### Step 2: Create New Module

Click on the `Create a Module` button. Then, define your module and outline the steps you want to include.

Don't worry if you don't have all the details now; you can always edit or add them later.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/modules_creation_page.png').default} alt="automation-dashboard" className="doc_img"/>

:::note
 You must create at least one test step and provide a module name to create a new module.
:::

## Update Module
Modules support both editing and versioning, but only specific fields trigger a new version update.

:::tip
 Only **Test Step** or **Expected Outcome** updation will create a new version of the module.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/modules_page.png').default} alt="automation-dashboard" className="doc_img"/>

## Module Versions

You can easily compare different versions of your module and revert to any previous version. Reverting to a previous version will create a new version in your module's history, ensuring a clear audit trail of all changes.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/modules_version_history.png').default} alt="automation-dashboard" className="doc_img"/>

Compare your version history side-by-side to easily identify differences and track changes between various iterations of your module.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/modules_version_comparision.png').default} alt="automation-dashboard" className="doc_img"/>

:::note
Project linking is only added for manual tests in test cases. Hence, modules linked to a particular project are only available to be added in a manual test case. However, for KaneAI test cases, all modules in all projects will be available for selection.
:::