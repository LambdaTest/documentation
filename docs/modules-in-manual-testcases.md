---
id: modules-in-manual-testcases
title: Modules in Manual Testcases
hide_title: true
sidebar_label: Link Modules With Manual Testcases
description: Guide for linking Modules with Manul Testcases in Test Manger.
keywords:
  - module creation
  - import module
  - test step management 
  - test case
  - test steps
url: https://www.lambdatest.com/support/docs/modules-in-manual-testcases/
site_name: LambdaTest
slug: modules-in-manual-testcases/
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
          "name": "Modules in Manual Testcases",
          "item": "https://www.lambdatest.com/support/docs/modules-in-manual-testcases/"
        }]
      })
    }}
></script>

# Link Modules With Manual Test Cases
***
Here's how to link and manage modules within your manual test cases:

## 1. Module Creation from existing Test Steps 
To export test steps as a module, first navigate to the Test Steps page of your desired Test Case. Then, select the **sequential** test steps you wish to include in the module and click the `Create a module` button.
<img loading="lazy" src={require('../assets/images/mobile-app-testing/select_manual_steps_to_create_module.png').default} alt="select-test-steps" className="doc_img"/>

Clearly define your new module by entering a concise name and a detailed description. This will help you easily identify and understand its purpose later on.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/create_module_from_manual_teststeps.png').default} alt="create-modules-from-test-steps" className="doc_img"/>

## 2. Import Module into Test Steps
 
To incorporate existing modules into your test steps, simply click on the Modules Icon. From there, you'll be able to select and import the specific module you need.

:::note
 Keep in mind that only modules already linked with your project will be available for import.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/import_module_in_manual_testcases.png').default} alt="import-module" className="doc_img"/>

Notice that imported modules will appear visually distinct from other individual steps within your test case, making them easy to identify. You also have the flexibility to edit or delete these modules directly from this view. However, be aware that making changes will create a new version of that module.

:::note
Please note that when a module is updated to a new version, its existing occurrences within your test cases will not be affected. They will remain linked to the previous version. To utilize the latest version of a module, you'll need to manually sync it by clicking the `Sync to latest` button. This allows you to review and confirm changes before they impact your test cases.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/sync_module_version.png').default} alt="sync-module" className="doc_img"/>
