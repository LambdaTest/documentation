---
id: system-and-custom-fields
title: System and Custom Fields
hide_title: true
sidebar_label: System & Custom Fields
description: Learn about TestMu AI's system and custom Fields feature for test project organization. Explore System Fields and create Custom Fields to enhance your testing workflows.
keywords:
  - test manager
  - fields and values
  - system fields
  - custom fields
  - projects
url: https://www.testmuai.com/support/docs/system-and-custom-fields/
site_name: TestMu AI
slug: system-and-custom-fields/
canonical: https://www.testmuai.com/support/docs/system-and-custom-fields/
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
          "name": "System and Custom Fields",
          "item": `${BRAND_URL}/support/docs/system-and-custom-fields/`
        }]
      })
    }}
></script>

# System and Custom Fields

Explore the structured organization of your test projects through the use of Fields and Values, accessible via the Project's dashboard. Dive into System Fields for essential categorizations or enhance your project's flexibility with Custom Fields to improve your testing workflows.

To access the System & Custom Fields settings, click on **Settings** in the top right hand side in the Project's dashboard.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/system-and-customs-step-one.webp').default} alt="Settings entry point on the Project dashboard"  className="doc_img" width="1366" height="629"/>

You can manage your **System** and **Custom Fields** in this Fields page.

### System Fields
Are default fields present in the Test Manager. These fields help organize and track your test cases, test runs or instances. They can be seamlessly integrated into your test management process and customized by adding values. Test Cases & Test Runs have their separate System Fields. 

- Test Cases have these pre defined fields: **Priority**, **Status**, and **Type**. 
- Test Runs can have only one System Field that is the `Status`. 

To manage these fields, navigate to the System Fields tab, where you'll see dedicated sections for both Test Case and Test Runs fields.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/system-fields.png').default} alt="System Fields tab with Test Case and Test Run sections"  className="doc_img" width="1366" height="629"/>

These System Fields can have Custom Values which can be added by simply selecting any field and clicking on **Add Value**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/edit-system-fields.png').default} alt="Adding a custom value to a system field"  className="doc_img" width="1366" height="629"/>

:::tip
 Every new Status value of Test Runs will have a unique random color defined to it on creation. 
:::

### Custom Fields 
Allow you to store additional information beyond what System Fields offer. To create a new field, enter the required details and choose the appropriate data type from the **Type** function. Available types include String, Textarea, Number, Dropdown (Single Select), Dropdown (Multi Select), Boolean (Checkbox), Date, User, and URL.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/create-new-fields.webp').default} alt="Creating a new custom field and choosing its type"  className="doc_img" width="1366" height="629"/>

For Dropdown types (Single Select and Multi Select), you also have the option to add values.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/dropdown-types.webp').default} alt="Adding values to a dropdown custom field"  className="doc_img" width="1366" height="629"/>

Enter the name, placeholder, mark the field, apply it to all future projects if required and click create.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/custom-fields.webp').default} alt="Custom field name, placeholder, and options"  className="doc_img" width="1366" height="629"/>

You can also link a single or multiple projects of your choice to the custom fields and click on **Save changes**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/link-projects.webp').default} alt="Linking projects to a custom field"  className="doc_img" width="1366" height="629"/>



## Bulk Update Fields

Utilize the bulk action feature that streamlines the process of updating system & custom fields across multiple test cases, enhancing efficiency and organization of Test Cases. With this feature, users can seamlessly modify key system fields such as Priority, Status, Automation Status, Type and all available custom fields for numerous test cases simultaneously, eliminating the need for time-consuming individual updates.

### Steps to Bulk Update Fields

1. Bulk select the test cases whose fields you want to update.

2. Click on the `Update Fields` option.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/bulk_update_fields.jpeg').default} alt="Update Fields option for bulk-selected test cases" className="doc_img" width="1366" height="629"/>

3. Select the fields you want to update the values for.

4. Update the values of the fields & click on `Update Fields` to apply the updates.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/edit_fields_bulk_action.jpeg').default} alt="Editing field values in the bulk update dialog" className="doc_img" width="1366" height="629"/>

A notification will appear at the top right confirming the fields have been updated.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/bulk_field_update_res.jpeg').default} alt="Confirmation that the fields were updated" className="doc_img" width="1366" height="629"/>

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        System and Custom Fields
      </span>
    </li>
  </ul>
</nav>
