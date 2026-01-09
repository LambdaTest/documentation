---
id: modules-in-manual-testcases
title: Modules in Manual Testcases
hide_title: true
sidebar_label: Importing Modules into Test Cases
description: Guide for linking Modules with Manual Testcases in Test Manager.
keywords:
  - module creation
  - import module
  - test step management 
  - test case
  - test steps
url: https://www.testmu.ai/support/docs/modules-in-manual-testcases
site_name: LambdaTest
slug: modules-in-manual-testcases
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
          "name": "Modules in Manual Testcases",
          "item": `${BRAND_URL}/support/docs/modules-in-manual-testcases/`
        }]
      })
    }}
></script>

# Importing Modules into Test Cases
***
 
To incorporate existing modules into your test steps, simply click on the Modules Icon. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/module_button.png').default} alt="import-module" className="doc_img"/>

From there, you'll be able to select and import the specific module you need.

:::note
 Keep in mind that only modules already linked with your project will be available for import.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/import_module_in_manual_testcases.png').default} alt="import-module" className="doc_img"/>

Notice that imported modules will appear visually distinct from other individual steps within your test case, making them easy to identify. 

You also have the flexibility to edit or delete these modules directly from this view. However, be aware that making changes will create a new version of that module.

:::note
Please note that when a module is updated to a new version, its existing occurrences within your test cases will not be affected. They will remain linked to the previous version. To utilize the latest version of a module, you'll need to manually sync it by clicking the `Sync to latest` button. This allows you to review and confirm changes before they impact your test cases.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/sync_module_version.png').default} alt="sync-module" className="doc_img"/>