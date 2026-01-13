---
id: kaneai-modules-versions-and-enhancement
title: Modules Versioning and Enhancements
hide_title: false
sidebar_label: Modules Versioning and Enhancements
description: This documentation will help you to understand how to version your created modules and perform the Enhancements
keywords:
- modules versioning
- enhancements
- modules
url: https://www.testmu.ai/support/docs/kaneai-modules-versions-and-enhancement
site_name: LambdaTest
slug: kaneai-modules-versions-and-enhancement
canonical: https://www.testmu.ai/support/docs/kaneai-modules-versions-and-enhancement/
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
          "name": "Modules Versioning",
          "item": `${BRAND_URL}/support/docs/kaneai-modules-versions-and-enhancement/`
        }]
      })
    }}
></script>
This guide provides step-by-step instructions on how to enhance the usability of the module section. By implementing module versioning and improving user interaction, users can efficiently manage modules, track changes, and reuse them across various test cases.

## Step 1: Viewing and Creating Modules
- Navigate to the **Modules** section.
- View the list of available modules or click **Create a New Module** to add one.
- The updated interface allows for improved module visibility and usability.
- Each module card displays the count of test cases linked to it.

## Deleting a Module

You can delete modules that are no longer needed from the module listing page.

1. Navigate to the **Modules** section
2. Locate the module you want to delete
3. Click the meatball menu (•••) icon on the module card
4. Select **Delete**

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/delete-module.png').default} alt="delete-module" className="doc_img img_center"/>

---

:::warning Important
Only modules that are **not linked to any test cases** can be deleted. If a module is currently used in one or more test cases, the delete option will be disabled. You must first remove the module from all linked test cases before deleting it.
:::

---

## Step 2: Accessing Module Details
- Click on a module to view its complete details, including:
    - Descriptions
    - Tags
    - Version history
- Utilize **Version History** to track changes and reuse module updates in multiple test cases.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image2.png').default} alt="Image" className="doc_img img_center"/>

## Step 3: Comparing and Reverting Module Versions
- Compare different versions of a module.
- Review modifications made between versions.
- Revert to a previous version if required.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image3.png').default} alt="Image" className="doc_img img_center"/>

## Step 4: Creating a Module from KNI Agent
- If test steps are already present:
    - Pause the test.
    - Select the relevant test steps.
    - Click Create Module to extract them into a reusable module.
- Modules now support variables, parameters, and secrets.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image4.png').default} alt="Image" className="doc_img img_center"/>

## Step 5: Defining Module Properties
- Click on the module and enter details such as:
    - Module Name (e.g., Sample Module)
    - Description and Tags
- Click Create Module to save the test step as a reusable module with a specific version.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image5.png').default} alt="Image" className="doc_img img_center"/>

## Step 6: Editing and Importing Modules
- Click on an existing module to modify its steps or properties.
- To import a module into the web agent:
    - Click the slash icon
    - Select Add Module
    - Choose from the list of created modules

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image6.png').default} alt="Image" className="doc_img img_center"/>

## Step 7: Executing Test Steps
- Click **Add in Queue** to execute test steps.
- The executed test steps will be displayed in the results section.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image7.png').default} alt="Image" className="doc_img img_center"/>

## Step 8: Updating Module Versions
- If changes are made to an existing module, a new version will be created automatically.
- For example, adding a test step (e.g., clicking on login) will prompt an updated version (e.g., from 1.1 to 1.2).

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image8.png').default} alt="Image" className="doc_img img_center"/>

## Step 9: Version Selection Flexibility
- Users can choose to either:
    - Accept the new version.
    - Continue using the current version.
- The newly updated version will reflect the added test step.

By implementing these enhancements, module management is now more efficient, flexible, and user-friendly. Users can seamlessly create, modify, and reuse test modules to streamline automation testing.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/modules-versioning/image9.png').default} alt="Image" className="doc_img img_center"/>